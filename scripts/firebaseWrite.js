const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "v5": {
        "c1": [
            {
                "text": "\"Man, I really cut it close there...\"",
                "line": 1
            },
            {
                "text": "I sigh with relief as I step out of the Midgar Academy for Dark Knights auditorium. My breath fades to white in the morning air. The third-term opening ceremony just finished.",
                "line": 2
            },
            {
                "text": "\"What the hell, Cid? Where were you all winter break?\"",
                "line": 3
            },
            {
                "text": "\"Yeah, remember how we promised to go hit on the cute Mitsugoshi girls together?\"",
                "line": 4
            },
            {
                "text": "Ah, how I've missed Skel's and Po's oh-so-forgettable faces.",
                "line": 5
            },
            {
                "text": "\"Sorry, guys. There was some stuff I had to take care of.\"",
                "line": 6
            },
            {
                "text": "Between the battle for the Oriana throne and my impromptu return to Japan, my winter break was jam-packed with excitement.",
                "line": 7
            },
            {
                "text": "\"You really left us in the lurch there, man,\" Skel says reproachfully.",
                "line": 8
            },
            {
                "text": "\"Yeah, your sister put the screws to us,\" Po agrees.",
                "line": 9
            },
            {
                "text": "\"She did?\"",
                "line": 10
            },
            {
                "text": "\"She was looking for you. I told her I had no idea where you were, and she turned my head into a pincushion...\"",
                "line": 11
            },
            {
                "text": "\"I told her she was hot and asked if she wanted to go out with me, and she nearly used her sword to turn me into a human shish kebab...\"",
                "line": 12
            },
            {
                "text": "\"Damn, that's rough. Sorry about that, guys.\"",
                "line": 13
            },
            {
                "text": "What I'm hearing is, I need to give Claire a wide berth for a while.",
                "line": 14
            },
            {
                "text": "\"Oh, and speaking of crazy shit that went down: You know how President Rose went missing?\" Skel asks. \"Well, now she's the queen of the entire Oriana Kingdom. The whole country's freaking out.\"",
                "line": 15
            },
            {
                "text": "\"Yeah, I actually did hear about that,\" I reply.",
                "line": 16
            },
            {
                "text": "Heh-heh-heh, little do they realize that I am the one who paved the way for her. No one has any idea that there was a shadowbroker behind the monarch's rise, much less that the shadowbroker was a run-of-the-mill academy student. That right there\u2014that's what being an eminence in shadow is all about.",
                "line": 17
            },
            {
                "text": "\"And that's not all. People are talking about the Oriana Kingdom getting swarmed with magical beasts and the whole country getting hijacked and stuff.\"",
                "line": 18
            },
            {
                "text": "Oh, I know. Who do you think it was that set the whole thing up, and who do you think it was that saved the day? These guys don't realize they're talking to one of the star players behind the whole thing.",
                "line": 19
            },
            {
                "text": "Skel goes on. \"Looks like Midgar's gonna be breaking off its alliance with the Oriana Kingdom now.\"",
                "line": 20
            },
            {
                "text": "Huh?",
                "line": 21
            },
            {
                "text": "We're gonna what?",
                "line": 22
            },
            {
                "text": "\"Yeah,\" Po agrees. \"I never thought President Rose would turn evil like that... She's never going to be able to get public opinion back on her side.\"",
                "line": 23
            },
            {
                "text": "\"You never thought she'd turn what? Huh? What do you mean?\"",
                "line": 24
            },
            {
                "text": "\"I just told you, she summoned a bunch of magical beasts, killed everyone ahead of her in the line of succession, and hijacked the country by force,\" Skel says. \"Her name's gonna live on in infamy forever.\"",
                "line": 25
            },
            {
                "text": "\"She seemed like such a nice person back when she was here at the academy, too,\" Po adds. \"I can't believe things turned out like this. But then she went and murdered her own dad at the Bushin Festival. Goes to show that you can't judge a book by its cover. I'd still marry her, though.\"",
                "line": 26
            },
            {
                "text": "\"Y-yeah,\" I reply. \"When you put it like that, I guess she does sound pretty evil...\"",
                "line": 27
            },
            {
                "text": "I assumed that she was in one of those stories where a mighty monarch is born and leaves their mark on history, but now she's taking a sharp left turn into a villain arc. But y'know what? That's kinda badass in and of itself. The evil monarch shocking the world to its core, the shadowy puppet master manipulating her from behind the scenes... Yeah, I can work with that. Never let it be said that I can't pivot when the situation calls for it.",
                "line": 28
            },
            {
                "text": "\"There's also a bunch of shady rumors about her,\" Skel continues.",
                "line": 29
            },
            {
                "text": "\"Yeah, yeah, like how she's got secret ties to that Shadow Garden organization\u2014\"",
                "line": 30
            },
            {
                "text": "Skel hurriedly cuts Po off. \"Whoa, ix-nay on the Adow Garden-shay.\"",
                "line": 31
            },
            {
                "text": "\"Oh, shoot, you're right. If I talk about that, I'll get disappeared.\"",
                "line": 32
            },
            {
                "text": "\"Huh? What're you guys on about?\" I ask.",
                "line": 33
            },
            {
                "text": "Skel's expression turns serious. \"We had four students go missing over winter break. People are saying that the group that tried to take over the school is behind it.\"",
                "line": 34
            },
            {
                "text": "\"Word around campus is, anyone who tries to investigate the organization gets silenced for good.\"",
                "line": 35
            },
            {
                "text": "I hem and haw. \"Hmm, I dunno about all that...\"",
                "line": 36
            },
            {
                "text": "\"Oh, there's no way it's actually true.\" Po turns around, his expression the picture of confidence. \"But a couple of students did actually disappear, so everyone's having fun coming up with conspiracy theories. The Knight Order looked into things just to be on the safe side, but they didn't find any evidence that anyone had broken onto campus.\"",
                "line": 37
            },
            {
                "text": "\"It's that time of year when people who failed too many classes start looking for a way out,\" Skel says. \"They didn't get disappeared. They probably just ran off. How're you doing credits-wise, Po?\"",
                "line": 38
            },
            {
                "text": "\"Urgh... I'm just barely in the clear. What about you, Skel?\"",
                "line": 39
            },
            {
                "text": "\"I-I'm doing all right, I think. And you, Cid?\"",
                "line": 40
            },
            {
                "text": "\"I'm...probably fine?\"",
                "line": 41
            },
            {
                "text": "\"W-well, hey, go us. Sounds like we're all gonna make it to the next grade.\"",
                "line": 42
            },
            {
                "text": "\"Y-y-yeah, for sure, definitely,\" Po stammers.",
                "line": 43
            },
            {
                "text": "\"Ayup.\"",
                "line": 44
            },
            {
                "text": "\"By the way, what do you guys wanna do now?\" Skel asks.",
                "line": 45
            },
            {
                "text": "\"Today was just the opening ceremony, so it's not like we have classes,\" Po says. \"We could go play cards back at the dorm.\"",
                "line": 46
            },
            {
                "text": "\"Wait, cards?\" I ask.",
                "line": 47
            },
            {
                "text": "\"Yeah, check out what Mitsugoshi just put out!\"",
                "line": 48
            },
            {
                "text": "With a shit-eating grin, Skel pulls out a deck of cards. It's the spitting image of the ones I saw back in my past life. Have they seriously started mass-producing them?",
                "line": 49
            },
            {
                "text": "\"Nina gave these to us,\" Po explains. \"Let's go play Presidents or poker or something!\"",
                "line": 50
            },
            {
                "text": "\"This'll be Cid's first time playing cards, right?\" Skel asks Po. \"Let's show him just how cruel the world of gambling can be.\"",
                "line": 51
            },
            {
                "text": "\"Hee-hee-hee... In that case, it's gotta be poker. We can take him for everything he's got.\"",
                "line": 52
            },
            {
                "text": "Poker, huh? Odds are we'll be playing Texas Hold'em. I taught the Seven Shadows the rules way back when, and I remember leaving them in tears after taking them for everything they had. Ah, the good old days. I was being kind enough to teach them just how cruel society could be, so I figured it was only fair that I get paid for my services...but they started getting scary good at it, so I decided to quit while I was ahead.",
                "line": 53
            },
            {
                "text": "This looks like a golden opportunity, so I decide to charge Skel and Po for a crash course of their own.",
                "line": 54
            },
            {
                "text": "I crack my knuckles. \"All right, bring it on. I can't wait to see how cruel this world of gambling of yours is.\"",
                "line": 55
            },
            {
                "text": "Skel grins. \"We'll be playing for ten times the usual stakes. Man, I can feel my pockets getting heavier already.\"",
                "line": 56
            },
            {
                "text": "Po nods. \"You know what they say about suckers and their money.\"",
                "line": 57
            },
            {
                "text": "\"Heh...\"",
                "line": 58
            },
            {
                "text": "Oops, almost laughed in their faces. I quickly cover my mouth with my hand.",
                "line": 59
            },
            {
                "text": "We end up playing poker over in my room.",
                "line": 60
            },
            {
                "text": "The sun's already set by now, and Po's already started staring lifelessly at the ceiling after losing all his money.",
                "line": 61
            },
            {
                "text": "I grab a fat handful of chips...",
                "line": 62
            },
            {
                "text": "\"Raise.\"",
                "line": 63
            },
            {
                "text": "\"Rrgh... A-all in.\"",
                "line": 64
            },
            {
                "text": "With that, Skel takes his paltry stack of chips and puts the whole thing on the line.",
                "line": 65
            },
            {
                "text": "I call, of course.",
                "line": 66
            },
            {
                "text": "\"Bwa-ha-ha... You fell right into my trap.\" Skel shows me his hand, gloating all the while.",
                "line": 67
            },
            {
                "text": "\"Dang, that is a nice hand.\"",
                "line": 68
            },
            {
                "text": "\"Sorry, Cid, but I've figured out all your tells. This is where my grand comeback begins\u2014\"",
                "line": 69
            },
            {
                "text": "\"Nah, we're done here.\"",
                "line": 70
            },
            {
                "text": "\"Huh?\"",
                "line": 71
            },
            {
                "text": "I show him my hand.",
                "line": 72
            },
            {
                "text": "\"No way... You seriously have three of a kind? Po and I trained so hard, and you tore through us like paper...\"",
                "line": 73
            },
            {
                "text": "\"I can keep going if I take out a loan,\" Po mumbles deliriously. \"That was my food budget for the month. If I don't make it back, I'm done for...\"",
                "line": 74
            },
            {
                "text": "\"All right, time to pay up.\"",
                "line": 75
            },
            {
                "text": "After collecting my winnings from the hopeless duo, I kick them out into the hallway.",
                "line": 76
            },
            {
                "text": "\"Sorry, but if you're broke, you're useless to me.\"",
                "line": 77
            },
            {
                "text": "With that, I close the door on them. \"Dammit, we'll get you for this!\" I hear them cry from outside. \"Let's cheat next time to really make sure we bury him!\"",
                "line": 78
            },
            {
                "text": "If that's the way they want to play it, I'm happy to cheat right back at them. When I cheat for real, not even Alpha can suss me out.",
                "line": 79
            },
            {
                "text": "After stashing away my earnings in my Eminence in Shadow War Chest, I turn down the lights and take a moment, listening to the sounds of the night. Then I call out into the darkness beyond my window:",
                "line": 80
            },
            {
                "text": "\"Apologies for the wait\u2014you can come in now.\"",
                "line": 81
            },
            {
                "text": "\"...Mm.\"",
                "line": 82
            },
            {
                "text": "With a muted response, a girl appears as though from nowhere. Those hiding skills of hers are top-notch.",
                "line": 83
            },
            {
                "text": "You've really honed your talents, Zeta.",
                "line": 84
            },
            {
                "text": "The girl is a slender therianthrope dressed in a jet-black bodysuit. Her eyes are icy-purple and catlike, and she focuses them straight on me. \"Long time no see, Master.\"",
                "line": 85
            },
            {
                "text": "\"Yeah, it's been a while.\"",
                "line": 86
            },
            {
                "text": "\"You're a bit taller.\"",
                "line": 87
            },
            {
                "text": "\"Am I?\"",
                "line": 88
            },
            {
                "text": "\"Mm.\" She nods briskly, then offers me a dried fish. \"For you.\"",
                "line": 89
            },
            {
                "text": "\"What is it?\"",
                "line": 90
            },
            {
                "text": "\"It's mackerel.\"",
                "line": 91
            },
            {
                "text": "\"Huh.\"",
                "line": 92
            },
            {
                "text": "\"I got it from the sea.\"",
                "line": 93
            },
            {
                "text": "\"Dang, that's a long ways away.\"",
                "line": 94
            },
            {
                "text": "\"It's extra fatty. The best mackerel of the season.\"",
                "line": 95
            },
            {
                "text": "\"Is it, now?\"",
                "line": 96
            },
            {
                "text": "Zeta's a feline therianthrope and the sixth member of the Seven Shadows. She's pretty smart for a therianthrope, and she tends to be aloof and sparing with her words. She's basically the polar opposite of a certain dog I know.",
                "line": 97
            },
            {
                "text": "After I take the dried mackerel, Zeta stares at me like a cat waiting for its dinner.",
                "line": 98
            },
            {
                "text": "\"Thanks,\" I say. \"I'll grill it up and eat it later.\"",
                "line": 99
            },
            {
                "text": "\"Mm.\"",
                "line": 100
            },
            {
                "text": "Zeta's golden tail twitches with a hint of delight.",
                "line": 101
            },
            {
                "text": "\"Now, then...\" I put on my serious face. \"Have there been any developments in...the matter at hand?\"",
                "line": 102
            },
            {
                "text": "Upon hearing my question, her feline eyes flash with pride. \"The Cult's been acting as expected.\"",
                "line": 103
            },
            {
                "text": "\"Hmm.\"",
                "line": 104
            },
            {
                "text": "I step over to the window with a wineglass in one hand, and Zeta zips over and fills it with wine. As usual, her movements are clean. Zeta loves playing spies. She's always been great at hiding and infiltration.",
                "line": 105
            },
            {
                "text": "\"They're restoring the right arm,\" she tells me.",
                "line": 106
            },
            {
                "text": "\"I see.\"",
                "line": 107
            },
            {
                "text": "\"They're running out of Beads of Diablos. That's how this all started.\"",
                "line": 108
            },
            {
                "text": "\"Makes sense.\"",
                "line": 109
            },
            {
                "text": "\"The sealed right arm is in the campus ruins.\"",
                "line": 110
            },
            {
                "text": "\"Figures.\"",
                "line": 111
            },
            {
                "text": "\"They're panicking. They're afraid we'll interfere.\"",
                "line": 112
            },
            {
                "text": "\"That's well within expectations.\"",
                "line": 113
            },
            {
                "text": "\"There's not much time left. They're sure to make a move.\"",
                "line": 114
            },
            {
                "text": "Zeta looks up at me like she's waiting for orders. At some point, she spread some documents written in ancient script out on my desk...but I can't read a word of 'em.",
                "line": 115
            },
            {
                "text": "\"Any word on the missing students?\"",
                "line": 116
            },
            {
                "text": "\"Not yet.\"",
                "line": 117
            },
            {
                "text": "\"There's already been four...\"",
                "line": 118
            },
            {
                "text": "\"Right.\"",
                "line": 119
            },
            {
                "text": "\"That won't be enough.\"",
                "line": 120
            },
            {
                "text": "\"No.\"",
                "line": 121
            },
            {
                "text": "The two of us stare out the window at the lights in the girls' dorm, squinting to make it seem like we're searching for something.",
                "line": 122
            },
            {
                "text": "\"There's going to be a fifth victim.\"",
                "line": 123
            },
            {
                "text": "\"Right.\" Zeta peers up at me. \"What should we do?\"",
                "line": 124
            },
            {
                "text": "\"...Nothing.\"",
                "line": 125
            },
            {
                "text": "\"Are you sure?\"",
                "line": 126
            },
            {
                "text": "\"Fix your gaze, Zeta.\"",
                "line": 127
            },
            {
                "text": "\"Mm... On what?\"",
                "line": 128
            },
            {
                "text": "\"On the future...and on what we'll need after it's come to pass.\"",
                "line": 129
            },
            {
                "text": "\"...If that's your will, Master.\"",
                "line": 130
            },
            {
                "text": "The mood in the room is solemn. Tossing in that ad-lib section about the missing students, to make it feel more real, was a fine bit of work, if I do say so myself.",
                "line": 131
            },
            {
                "text": "The story is as follows: Things seem peaceful at the academy, but behind the scenes, the Cult of Diablos is carrying out a diabolic plot. Zeta and I stare at each other, satisfied that we're on the exact same page.",
                "line": 132
            },
            {
                "text": "I nod, and Zeta nods, too. \"Leave it to me, Master. I'll make sure to fix my gaze.\"",
                "line": 133
            },
            {
                "text": "With a gust of wind, she vanishes into the night.",
                "line": 134
            },
            {
                "text": "Before she does, though, she makes one superfluous move.",
                "line": 135
            },
            {
                "text": "Don't think I didn't notice you rubbing that gold tail of yours all over my bed, girl.",
                "line": 136
            },
            {
                "text": "\"Dammit, Zeta, I told you to stop marking my stuff.\"",
                "line": 137
            },
            {
                "text": "I sweep off the fur, then look up at the night sky.",
                "line": 138
            },
            {
                "text": "\"To be in darkness eternal, or to wake from eternity...?\" I murmur.",
                "line": 139
            },
            {
                "text": "It's getting pretty late, so I decide to hit the sack. I bet I'm gonna wake up tomorrow feeling like a million bucks.",
                "line": 140
            },
            {
                "text": "\"I swear, I'm going to kill that child!\"",
                "line": 141
            },
            {
                "text": "Claire Kagenou puffs up her cheeks in her bedroom in the girls' dorm.",
                "line": 142
            },
            {
                "text": "\"How many promises do you break before you're happy, Cid? We were supposed to go home together over winter break...\"",
                "line": 143
            },
            {
                "text": "The lamplight illuminates her profile. She looks deeply peeved, and for some inexplicable reason, she's carrying a metal collar.",
                "line": 144
            },
            {
                "text": "\"I'm going to kill him. I'm going to kill him. You're coming back with me over spring break if I have to drag you kicking and screaming.\"",
                "line": 145
            },
            {
                "text": "The collar rattles as she turns it over in her hands. After making sure that its lock is on tight, she smiles.",
                "line": 146
            },
            {
                "text": "\"You're not getting away next time.\"",
                "line": 147
            },
            {
                "text": "Then she winces.",
                "line": 148
            },
            {
                "text": "\"\"",
                "line": 149
            },
            {
                "text": "The collar falls to the floor with a heavy thump.",
                "line": 150
            },
            {
                "text": "\"My right hand... It's throbbing...\"",
                "line": 151
            },
            {
                "text": "She grimaces and squeezes her hand.",
                "line": 152
            },
            {
                "text": "\"But why? It's been so calm lately...\"",
                "line": 153
            },
            {
                "text": "Ever since the day the magic circle appeared on it, her hand's been aching every so often. Recently, though, it's largely stopped.",
                "line": 154
            },
            {
                "text": "\"What's going on? I want answers, Aurora.\"",
                "line": 155
            },
            {
                "text": "She keeps asking questions, but Aurora has never once responded since that first day. Claire sometimes wonders if she just dreamed the whole thing up, but she's seen the magic circle engraved beneath the bandages on her hand.",
                "line": 156
            },
            {
                "text": "She opens her desk drawer and splays a series of papers across the table.",
                "line": 157
            },
            {
                "text": "\"I've been doing my research. This magic circle on my hand shows up in documents about the demon Diablos.\"",
                "line": 158
            },
            {
                "text": "Sure enough, the circle that appears in the papers is a spitting image of the one on her right hand.",
                "line": 159
            },
            {
                "text": "\"What does it mean? What connection is there between me and Diablos? What's happening to me? Please, you have to tell me...\"",
                "line": 160
            },
            {
                "text": "Suddenly, she thinks she hears something. She looks around.",
                "line": 161
            },
            {
                "text": "\"Wait, what was that?\"",
                "line": 162
            },
            {
                "text": "\"...un...\"",
                "line": 163
            },
            {
                "text": "\"Aurora?! Aurora, is that you?\"",
                "line": 164
            },
            {
                "text": "The voice feels like it's coming from directly inside her head.",
                "line": 165
            },
            {
                "text": "\"...un... It's dan...\"",
                "line": 166
            },
            {
                "text": "Little by little, she starts being able to make out the words.",
                "line": 167
            },
            {
                "text": "\"Run... It's dangerous...\"",
                "line": 168
            },
            {
                "text": "\"Huh? Run?\"",
                "line": 169
            },
            {
                "text": "Right as a look of bewilderment crosses Claire's face, she hears the sound of something cracking.",
                "line": 170
            },
            {
                "text": "\"What was that?!\"",
                "line": 171
            },
            {
                "text": "Her field of view shatters as the world collapses like a broken mirror. She tries to grab at her desk, but it splinters into pieces, too.",
                "line": 172
            },
            {
                "text": "A new world emerges from behind the cracks.",
                "line": 173
            },
            {
                "text": "\"This is...my room, right?\"",
                "line": 174
            },
            {
                "text": "She's in her room. That much she's sure of. However, there's a strange white mist wafting through the air. All external noises sound distant, and all she can hear is the sound of her own breathing.",
                "line": 175
            },
            {
                "text": "No, wait\u2014she hears the faint rustling of clothes coming from behind her.",
                "line": 176
            },
            {
                "text": "\"Nice try.\"",
                "line": 177
            },
            {
                "text": "She acts fast, whirling around and elbowing her would-be assailant in the jaw in a single motion.",
                "line": 178
            },
            {
                "text": "\"Hurgh!\"",
                "line": 179
            },
            {
                "text": "The attacker's knees give out, but he just barely manages to remain upright. However, he soon wishes he hadn't. His face is at the perfect height for Claire to smash her knee into, and she does exactly that.",
                "line": 180
            },
            {
                "text": "\"I stole that little trick from Cid.\"",
                "line": 181
            },
            {
                "text": "Her uniform's skirt flutters from the movement.",
                "line": 182
            },
            {
                "text": "The man faints and collapses to the floor. Claire doesn't recognize him.",
                "line": 183
            },
            {
                "text": "\"Who is this guy?\"",
                "line": 184
            },
            {
                "text": "Claire crouches and tries to search the man. The moment she does, though, his body shatters into pieces.",
                "line": 185
            },
            {
                "text": "\"What the...? This again?!\"",
                "line": 186
            },
            {
                "text": "The man is gone without a trace.",
                "line": 187
            },
            {
                "text": "\"What's going on? Hello?! Is anyone there?!\"",
                "line": 188
            },
            {
                "text": "Claire heads out into the hallway and opens the door to the next room over. However, her classmate is nowhere to be seen. She tries the next door down, then the next one, but comes up empty each time. There's no one there.",
                "line": 189
            },
            {
                "text": "The only person left in the world is Claire.",
                "line": 190
            },
            {
                "text": "\"I don't get it... Hey, Aurora, I know you're there!\"",
                "line": 191
            },
            {
                "text": "\"No, I'm not,\" comes the annoyed response.",
                "line": 192
            },
            {
                "text": "\"Yes, you are. This is no time to be cracking jokes.\"",
                "line": 193
            },
            {
                "text": "\"I told you to run, you know.\"",
                "line": 194
            },
            {
                "text": "\"Hey, don't put this on me. You didn't give enough of a warning.\"",
                "line": 195
            },
            {
                "text": "\"I didn't want to say anything.\"",
                "line": 196
            },
            {
                "text": "\"Excuse me?! I'm in peril!\"",
                "line": 197
            },
            {
                "text": "\"Well, I've got circumstances of my own I'm dealing with.\"",
                "line": 198
            },
            {
                "text": "\"Circumstances like what?\"",
                "line": 199
            },
            {
                "text": "\"Like how I didn't want to get you involved.\"",
                "line": 200
            },
            {
                "text": "\"Well, maybe you should have thought of that before you put this thing on me!\" Claire cries, glaring at the magic circle on her hand.",
                "line": 201
            },
            {
                "text": "\"That was to protect you.\"",
                "line": 202
            },
            {
                "text": "\"I know that, but...you could at least explain why you did it.\"",
                "line": 203
            },
            {
                "text": "\"I was planning to. But then I couldn't.\"",
                "line": 204
            },
            {
                "text": "\"What do you mean?\"",
                "line": 205
            },
            {
                "text": "\"He's protecting you.\"",
                "line": 206
            },
            {
                "text": "\"Who...?\"",
                "line": 207
            },
            {
                "text": "\"He wants to protect you, to keep you away from danger. That's why I can't tell you anything.\"",
                "line": 208
            },
            {
                "text": "\"I asked you this last time, but who is this mystery guy you keep talking about? The way I see it, there's no one protecting me.\"",
                "line": 209
            },
            {
                "text": "\"That's not true at all. He's been protecting you this entire time. He always has been, and he always will. As a matter of fact, it makes me a bit jealous.\"",
                "line": 210
            },
            {
                "text": "\"I'm going to say this one more time,\" Claire tells Aurora, getting audibly angry. \"I don't know who it is you're talking about, but I have no intention of letting anyone protect me.\"",
                "line": 211
            },
            {
                "text": "\"And that's fine. You can stay ignorant, just so long as you're safe. I'm sure that's exactly what he would wish for\u2014\"",
                "line": 212
            },
            {
                "text": "\"Enough with that junk! I never asked for that!\"",
                "line": 213
            },
            {
                "text": "There's a hint of displeasure in Aurora's voice. \"I'm afraid I really can't say any more. I owe him a great debt.\"",
                "line": 214
            },
            {
                "text": "\"I swear, I'm going to make you talk.\"",
                "line": 215
            },
            {
                "text": "\"And how do you intend on doing that?\"",
                "line": 216
            },
            {
                "text": "\"Um...\"",
                "line": 217
            },
            {
                "text": "Claire lapses into silence. What can she do to threaten someone who exists only as a voice in her head?",
                "line": 218
            },
            {
                "text": "\"Uhhh... Well, I'll scream at the top of my lungs until you tell me what I want to know.\"",
                "line": 219
            },
            {
                "text": "\"Knock yourself out.\"",
                "line": 220
            },
            {
                "text": "\"I'll stop talking to you forever.\"",
                "line": 221
            },
            {
                "text": "\"Be my guest.\"",
                "line": 222
            },
            {
                "text": "\"I'll...spread nasty rumors about you.\"",
                "line": 223
            },
            {
                "text": "\"So what?\"",
                "line": 224
            },
            {
                "text": "Claire bites her lip and sulks.",
                "line": 225
            },
            {
                "text": "\"Are you quite finished yet?\"",
                "line": 226
            },
            {
                "text": "\"Oh, I haven't even started getting frustrated with you.\"",
                "line": 227
            },
            {
                "text": "\"Don't worry. What I will tell you is how to get out of here.\"",
                "line": 228
            },
            {
                "text": "\"What even is \u2018here'?\"",
                "line": 229
            },
            {
                "text": "\"That's a secret.\"",
                "line": 230
            },
            {
                "text": "\"Oh, bite me.\"",
                "line": 231
            },
            {
                "text": "\"For starters, you need to go straight ahead.\"",
                "line": 232
            },
            {
                "text": "\"No.\"",
                "line": 233
            },
            {
                "text": "\"If you don't, you'll be trapped here for the rest of your life.\"",
                "line": 234
            },
            {
                "text": "\"All right, all right, fine. I'm going.\"",
                "line": 235
            },
            {
                "text": "\"Good, exactly like that. Now spin three times.\"",
                "line": 236
            },
            {
                "text": "\"I'm sorry, what?!\"",
                "line": 237
            },
            {
                "text": "\"I'm joking.\"",
                "line": 238
            },
            {
                "text": "\"One of these days, I'm going to murder you.\"",
                "line": 239
            },
            {
                "text": "The dark-haired girl strides forth into the world of mist. Behind her, the image of a violet-eyed woman overlapping her is faintly visible.",
                "line": 240
            },
            {
                "text": "Today's the first full day of our third term. With finals drawing ever closer, the whole class is really buckling down.",
                "line": 241
            },
            {
                "text": "\"Apparently, that stuff we learned today about the theory of mana control shows up on the test every year,\" Skel says.",
                "line": 242
            },
            {
                "text": "\"Dang, Skel,\" Po replies. \"You really know your stuff.\"",
                "line": 243
            },
            {
                "text": "\"It's about time I started getting serious. If I have to repeat a year, my parents'll kill me.\"",
                "line": 244
            },
            {
                "text": "\"Yeah, I should start getting serious, too. I've been letting myself get a bit sloppy.\"",
                "line": 245
            },
            {
                "text": "\"Once I actually start getting serious, this'll be a cinch.\"",
                "line": 246
            },
            {
                "text": "\"Yeah, it'll be dead easy once I start getting serious.\"",
                "line": 247
            },
            {
                "text": "Their eyes are bloodshot.",
                "line": 248
            },
            {
                "text": "\"You've got pretty bad grades, too, right, Cid? You'd better start getting serious.\"",
                "line": 249
            },
            {
                "text": "\"Yeah, good call,\" I say. \"I'll start getting serious, for sure.\"",
                "line": 250
            },
            {
                "text": "I've been keeping my grades at just below the middle of the class. To be honest, I spend most of my classes training my magic, so I'm always at a total loss when test time rolls around. That's never a problem for me, though. When I need to get serious, I'm the best cheater around.",
                "line": 251
            },
            {
                "text": "I haven't been paying any attention in class today, but during the course of my training, I've proved the theory that compressing your mana can make it a thousand times stronger. Practicing like this is a key component in becoming an eminence in shadow.",
                "line": 252
            },
            {
                "text": "Here I am, secretly refining my mana like always, when the door loudly slams open to reveal a silver-haired girl on the other side.",
                "line": 253
            },
            {
                "text": "It's Alexia.",
                "line": 254
            },
            {
                "text": "\"Nice weather we're having today, huh?\" I say, nonchalantly looking out the window.",
                "line": 255
            },
            {
                "text": "It's overcast.",
                "line": 256
            },
            {
                "text": "I can feel every head in the room turn my way. I dunno why, but everyone always looks at me whenever Alexia shows up. It's weird, considering that I'm just your average forgettable guy.",
                "line": 257
            },
            {
                "text": "\"Hey, you!\"",
                "line": 258
            },
            {
                "text": "\"Oh huh, a bird just went by.\"",
                "line": 259
            },
            {
                "text": "The sky is uneventful. It's as ordinary as can be.",
                "line": 260
            },
            {
                "text": "\"Eyes over here, Fido.\"",
                "line": 261
            },
            {
                "text": "\"Man, just look at those clouds drifting by.\"",
                "line": 262
            },
            {
                "text": "And today's just an ordinary day. Surely, nothing strange or eventful will happen.",
                "line": 263
            },
            {
                "text": "\"Don't you ignore me.\"",
                "line": 264
            },
            {
                "text": "I feel someone grab my jaw, and my neck makes an alarming crunching sound as it gets forcibly twisted to the side.",
                "line": 265
            },
            {
                "text": "Alexia's red eyes stare back into mine.",
                "line": 266
            },
            {
                "text": "I try giving her the most unremarkable greeting I can. \"Oh, hey, if it isn't Princess Alexia.\"",
                "line": 267
            },
            {
                "text": "\"Hello there, Cid Kagenou.\"",
                "line": 268
            },
            {
                "text": "\"I'm afraid you've wandered into the wrong class, Princess Alexia.\"",
                "line": 269
            },
            {
                "text": "\"I assure you, I'm exactly where I need to be. I have business with you, Cid Kagenou.\"",
                "line": 270
            },
            {
                "text": "\"Ah, sorry, class is starting soon. We'll have to continue this chat some other time.\"",
                "line": 271
            },
            {
                "text": "\"That's irrelevant.\" Alexia turns to Skel and Po as she grabs me by the collar. \"I'm going to be borrowing him for a bit.\"",
                "line": 272
            },
            {
                "text": "\"G-g-go right ahead!\"",
                "line": 273
            },
            {
                "text": "\"H-h-he's all yours!\"",
                "line": 274
            },
            {
                "text": "I hear their traitorous voices as Alexia hauls me off.",
                "line": 275
            },
            {
                "text": "Dunno why, but Alexia drags me into the girls' dorm.",
                "line": 276
            },
            {
                "text": "\"Are you sure it's okay to bring me in here?\" I ask her.",
                "line": 277
            },
            {
                "text": "\"Don't worry, I got permission.\"",
                "line": 278
            },
            {
                "text": "\"You know I'm a dude, right?\"",
                "line": 279
            },
            {
                "text": "\"It's fine. You're an involved party.\"",
                "line": 280
            },
            {
                "text": "\"I'm a what now?\"",
                "line": 281
            },
            {
                "text": "Alexia stops in front of a particular door. If memory serves, it's the one that leads to Claire's room.",
                "line": 282
            },
            {
                "text": "\"Your sister didn't show up at breakfast today.\"",
                "line": 283
            },
            {
                "text": "\"Huh.\"",
                "line": 284
            },
            {
                "text": "\"Someone got worried and went to check on her, and they found her room unlocked.\" With that, Alexia opens the door. Sure enough, there's no one inside. \"We checked all the places she seemed likely to be, but there was no sign of her.\"",
                "line": 285
            },
            {
                "text": "\"Weird.\"",
                "line": 286
            },
            {
                "text": "\"Do you know anything?\"",
                "line": 287
            },
            {
                "text": "\"Nope,\" I answer without a moment's hesitation, and Alexia looks at me like I just grew horns.",
                "line": 288
            },
            {
                "text": "\"Aren't you worried about her?\" she says.",
                "line": 289
            },
            {
                "text": "\"Nah, this happens all the time.\"",
                "line": 290
            },
            {
                "text": "\"I'm sorry, what?\"",
                "line": 291
            },
            {
                "text": "\"She's been going missing all the time ever since she was a kid.\"",
                "line": 292
            },
            {
                "text": "\"That's the kind of information that falls under the category of \u2018anything.'\"",
                "line": 293
            },
            {
                "text": "\"Oh yeah. So it is.\"",
                "line": 294
            },
            {
                "text": "\"Where did she go when she went missing?\"",
                "line": 295
            },
            {
                "text": "\"Beats me. She always just kinda showed back up.\"",
                "line": 296
            },
            {
                "text": "Ever since the Seven Shadows came onto the scene, they've always been bringing her back. Zeta was in the area this time, so between her skills and the fact that she hasn't taken any action, I assume everything's probably hunky-dory.",
                "line": 297
            },
            {
                "text": "\"So she runs away from home?\"",
                "line": 298
            },
            {
                "text": "\"Basically, yeah.\"",
                "line": 299
            },
            {
                "text": "\"I hope that's all there is to it, but there's something that has me worried.\"",
                "line": 300
            },
            {
                "text": "\"What's that?\"",
                "line": 301
            },
            {
                "text": "\"Take a look.\"",
                "line": 302
            },
            {
                "text": "We step into the room, and Alexia picks up a collar from the ground.",
                "line": 303
            },
            {
                "text": "\"Is that a dog collar?\" I ask. \"It looks really sturdy.\"",
                "line": 304
            },
            {
                "text": "\"That's not all\u2014it also places a seal on the wearer's magic. This isn't the kind of thing a normal girl would just have lying around in her room.\"",
                "line": 305
            },
            {
                "text": "\"I dunno if I'd describe my sister as \u2018normal,' per se.\"",
                "line": 306
            },
            {
                "text": "\"Someone might have broken in and tried to use the collar to kidnap her.\"",
                "line": 307
            },
            {
                "text": "\"But why's it still here?\"",
                "line": 308
            },
            {
                "text": "\"Maybe it fell off during the struggle. There's something else that has me worried, too.\"",
                "line": 309
            },
            {
                "text": "Alexia's gaze falls to the documents on the desk.",
                "line": 310
            },
            {
                "text": "I recognize them the moment I lay eyes on them.",
                "line": 311
            },
            {
                "text": "\"Oh boy...\"",
                "line": 312
            },
            {
                "text": "There's ancient script, badass magic circles, and incantations that look important but don't actually do anything. It's one of those notebooks\u2014the cringey ones that edgelords make.",
                "line": 313
            },
            {
                "text": "\"Do you know anything about this?\" Alexia asks me.",
                "line": 314
            },
            {
                "text": "\"Nope. Nuh-uh. Not me. No ma'am.\"",
                "line": 315
            },
            {
                "text": "\"Are you sure? You're acting shifty all of a sudden.\"",
                "line": 316
            },
            {
                "text": "\"Y-you must be imagining things.\"",
                "line": 317
            },
            {
                "text": "\"If you say so.\"",
                "line": 318
            },
            {
                "text": "Alexia looks back down at the notebook of cringe.",
                "line": 319
            },
            {
                "text": "\"I don't think you're going to find anything important in there,\" I offer.",
                "line": 320
            },
            {
                "text": "\"We'll see about that.\"",
                "line": 321
            },
            {
                "text": "She begins earnestly thumbing through the notes. Sorry, Princess, but there's nothing written there but the mortifying ramblings of a teenage edgelord.",
                "line": 322
            },
            {
                "text": "Now that I think about it, that magic-sealing collar is the exact kind of thing that edgelords dig, and I've seen my sister drawing magic circles on her hands and covering them for her own amusement. From the look of it, it would appear that her condition has kicked into overdrive.",
                "line": 323
            },
            {
                "text": "Suddenly going missing is a classic symptom of edgelord behavior.",
                "line": 324
            },
            {
                "text": "\"I'm sure Claire is fine.\"",
                "line": 325
            },
            {
                "text": "\"You really believe in her, don't you?\"",
                "line": 326
            },
            {
                "text": "\"I mean...I dunno if I'd go that far...\"",
                "line": 327
            },
            {
                "text": "It's more like there was nothing we could've done to stop her, so it is what it is.",
                "line": 328
            },
            {
                "text": "\"When it comes to my own sister, I...\" Alexia frowns like she's gazing into the far-off distance. \"I feel these days, I don't understand what's she's thinking half the time.\"",
                "line": 329
            },
            {
                "text": "\"Huh.\"",
                "line": 330
            },
            {
                "text": "\"Do you ever feel that way, Fido?\"",
                "line": 331
            },
            {
                "text": "\"Oh, I never understand what Claire is thinking any of the time.\"",
                "line": 332
            },
            {
                "text": "\"Is that so...? Maybe everyone has things they don't understand about each other.\"",
                "line": 333
            },
            {
                "text": "\"We're related, but we're practically strangers.\"",
                "line": 334
            },
            {
                "text": "\"That's a cold way of putting it.\"",
                "line": 335
            },
            {
                "text": "\"Is it?\"",
                "line": 336
            },
            {
                "text": "\"I want to understand my sister. I really do.\"",
                "line": 337
            },
            {
                "text": "\"Fair enough.\"",
                "line": 338
            },
            {
                "text": "Alexia lets out a little sigh. \"You can return to class now. I'm going to do a little more digging.\"",
                "line": 339
            },
            {
                "text": "\"'Kay.\"",
                "line": 340
            },
            {
                "text": "I leave Alexia behind to pore over the notebook of cringe and head on my way.",
                "line": 341
            },
            {
                "text": "It's the end of the day, and my sister still isn't back yet. But hey, Zeta's around, so even if there is trouble, I'm sure it'll be fine.",
                "line": 342
            },
            {
                "text": "I head to the yard behind the dorms and grill the dried mackerel Zeta gave me. It's past lights-out, and everything is dark.",
                "line": 343
            },
            {
                "text": "\"All right, it should be about done.\"",
                "line": 344
            },
            {
                "text": "The mackerel fat makes a delicious sizzling sound as it drips into the open-air fire.",
                "line": 345
            },
            {
                "text": "\"Actually, maybe it needs a little longer?\"",
                "line": 346
            },
            {
                "text": "I'm enjoying this little one-man barbeque I've got going on. I can feel it cleansing my heart. Hearts pick up a lot of rot just going through life, you know.",
                "line": 347
            },
            {
                "text": "As I stare listlessly at the fire, I sense something approaching at an incredible speed.",
                "line": 348
            },
            {
                "text": "\"Boss man!! I finally found you!!\"",
                "line": 349
            },
            {
                "text": "Delta comes rushing in with her dog ears twitching.",
                "line": 350
            },
            {
                "text": "\"Hey there. It's late, so try to keep it down.\"",
                "line": 351
            },
            {
                "text": "\"I hunted the Black Juggler!!\"",
                "line": 352
            },
            {
                "text": "\"That's nice. It's late, so try to keep it down.\"",
                "line": 353
            },
            {
                "text": "\"And Alpha praised me!!\"",
                "line": 354
            },
            {
                "text": "\"Good for you. It's late, so try to keep it down.\"",
                "line": 355
            },
            {
                "text": "\"You should praise me, too, Boss man!!\"",
                "line": 356
            },
            {
                "text": "\"There, there, there, there. Good girl.\" I give her head a rough scritch, and her tail wags vigorously. \"Now, it's late, so try to keep it down.\"",
                "line": 357
            },
            {
                "text": "\"I'll be quiet!!\" she shouts, then clamps her hands over her mouth. \"I'll talk real quiet-like,\" she whispers.",
                "line": 358
            },
            {
                "text": "\"Yeah, that's perfect.\"",
                "line": 359
            },
            {
                "text": "Her voice gradually starts creeping back up in volume. \"Got it. I dug that hole you asked me to, Boss man.\"",
                "line": 360
            },
            {
                "text": "\"You dug a what? Are you sure I told you to do that?\"",
                "line": 361
            },
            {
                "text": "\"You did!\"",
                "line": 362
            },
            {
                "text": "Her voice is back to its normal level already.",
                "line": 363
            },
            {
                "text": "\"I did? Well, if you say so.\"",
                "line": 364
            },
            {
                "text": "\"And inside, I found this! You were right, Boss man! Look at how great it is!\"",
                "line": 365
            },
            {
                "text": "Delta grins, revealing the bright red jewel clutched between her teeth.",
                "line": 366
            },
            {
                "text": "\"Why's it in your mouth?\"",
                "line": 367
            },
            {
                "text": "\"So I don't lose it!\"",
                "line": 368
            },
            {
                "text": "\"Can't argue with that logic.\"",
                "line": 369
            },
            {
                "text": "\"Hee-hee.\"",
                "line": 370
            },
            {
                "text": "I take the saliva-flecked jewel from Delta. It sparkles a beautiful shade of red.",
                "line": 371
            },
            {
                "text": "\"Let's have a look... Ooh, I bet this'd sell for a lot.\"",
                "line": 372
            },
            {
                "text": "It's only about the size of a marble, but there's something fantastical about the way it's gleaming.",
                "line": 373
            },
            {
                "text": "\"I did good!!\"",
                "line": 374
            },
            {
                "text": "\"There, there, there, there. Good girl.\"",
                "line": 375
            },
            {
                "text": "I give her head another scritch. She practically melts in my hand.",
                "line": 376
            },
            {
                "text": "\"I want a reward!\"",
                "line": 377
            },
            {
                "text": "\"Yeah, that's fair.\"",
                "line": 378
            },
            {
                "text": "\"Ooh, something smells tasty!\"",
                "line": 379
            },
            {
                "text": "The instant she looks over at the fire, the mackerel vanishes.",
                "line": 380
            },
            {
                "text": "\"Is this my reward?!\"",
                "line": 381
            },
            {
                "text": "It's in her hand now.",
                "line": 382
            },
            {
                "text": "\"No, that was actually a gift from Zeta...\"",
                "line": 383
            },
            {
                "text": "\"Thanks!\"",
                "line": 384
            },
            {
                "text": "She's not listening.",
                "line": 385
            },
            {
                "text": "Delta takes a big bite and smiles in delight. \"It's so good!\"",
                "line": 386
            },
            {
                "text": "Eh, she did do well.",
                "line": 387
            },
            {
                "text": "\"I guess this is fine.\"",
                "line": 388
            },
            {
                "text": "Right as I come to terms with it, I hear a branch snapping.",
                "line": 389
            },
            {
                "text": "\"Doggy...what're you eating?\"",
                "line": 390
            },
            {
                "text": "I turn around to find Zeta. The look in her eyes is ice-cold.",
                "line": 391
            },
            {
                "text": "Delta lets out a threatening growl. \"Grrr, Felid! I'm eating my reward!\"",
                "line": 392
            },
            {
                "text": "\"I got that mackerel for our lord. It's not yours.\"",
                "line": 393
            },
            {
                "text": "\"Back off! It's my reward!\"",
                "line": 394
            },
            {
                "text": "With that, Delta swallows the rest of the mackerel whole.",
                "line": 395
            },
            {
                "text": "Zeta lets out a wordless gasp. \"Ah\u2014!\"",
                "line": 396
            },
            {
                "text": "Delta, meanwhile, doesn't have a care in the world. \"Mmm, tasty.\"",
                "line": 397
            },
            {
                "text": "\"You little...\"",
                "line": 398
            },
            {
                "text": "Zeta's throat starts rumbling.",
                "line": 399
            },
            {
                "text": "\"You're being a pest, Felid. Go away, or I'll send you flying!\"",
                "line": 400
            },
            {
                "text": "\"I saved the tastiest mackerel for our lord, and now... This is unacceptable.\"",
                "line": 401
            },
            {
                "text": "\"All right, guys, let's all take a deeeep breath.\"",
                "line": 402
            },
            {
                "text": "Things look like they're about to get a little bit ugly, so I step in and get between them.",
                "line": 403
            },
            {
                "text": "Both of them fix their gazes on me.",
                "line": 404
            },
            {
                "text": "\"Uh... Look, I was just grilling the mackerel; I didn't actually give it to anyone\u2014\"",
                "line": 405
            },
            {
                "text": "Self-preservation is key when things look like they're gonna get ugly. The most important thing to do here to keep from getting sucked into whatever's about to happen is to impress on them that I had nothing to do with this.",
                "line": 406
            },
            {
                "text": "\"\u2014so the bottom line is, this isn't my fault.\"",
                "line": 407
            },
            {
                "text": "\"Yeah. Not your fault.\"",
                "line": 408
            },
            {
                "text": "\"Boss man did nothing wrong!\"",
                "line": 409
            },
            {
                "text": "\"Exactly. I did nothing wrong.\"",
                "line": 410
            },
            {
                "text": "At no point did I ever mishandle the mackerel. It got eaten because of an unfortunate misunderstanding, nothing more.",
                "line": 411
            },
            {
                "text": "\"\"And that means\u2014\"\"",
                "line": 412
            },
            {
                "text": "Zeta and Delta point at each other...",
                "line": 413
            },
            {
                "text": "\"\"\u2014it's her fault!!\"\"",
                "line": 414
            },
            {
                "text": "...then finish each other's sentences.",
                "line": 415
            },
            {
                "text": "\"Huh?\" I splutter.",
                "line": 416
            },
            {
                "text": "Their magic flares up and explodes.",
                "line": 417
            },
            {
                "text": "The shock wave sends me flying, and I spin gracefully through the air before sticking the landing perfectly a short distance from them.",
                "line": 418
            },
            {
                "text": "\"You stole my tribute to our lord, you mangy mutt. You're dead meat.\"",
                "line": 419
            },
            {
                "text": "\"You made a big fuss over my rightful reward, Felid. You're deader meat!\"",
                "line": 420
            },
            {
                "text": "\"Uhh... Look, I don't think I'm really following here, but what's important is that we're all in agreement that this isn't my fault.\"",
                "line": 421
            },
            {
                "text": "I decide to quietly back away.",
                "line": 422
            },
            {
                "text": "Zeta and Delta have never gotten along, and the two of them fight constantly. Their brawls usually last until they tear up a field or knock over a house or something and Alpha gets pissed at them.",
                "line": 423
            },
            {
                "text": "\"Make sure you guys don't go too overboard, 'kay?\"",
                "line": 424
            },
            {
                "text": "The one silver lining is that the shock wave didn't reach the dorms.",
                "line": 425
            },
            {
                "text": "\"I'll crush you,\" Delta says, readying her sword and entering her combat stance.",
                "line": 426
            },
            {
                "text": "\"You need to be punished.\"",
                "line": 427
            },
            {
                "text": "Zeta narrows her cold eyes\u2014then vanishes. There's no warning or anything. She's just gone.",
                "line": 428
            },
            {
                "text": "Delta cocks her head in puzzlement. \"Did she run away?\"",
                "line": 429
            },
            {
                "text": "The moment the words leave her mouth, a black blade materializes behind her back.",
                "line": 430
            },
            {
                "text": "\"\"",
                "line": 431
            },
            {
                "text": "Delta dodges just before it can mow her down, but doing so forces her into a precarious position, and she tumbles to the ground.",
                "line": 432
            },
            {
                "text": "Voom. Voom. Voom. Another set of blades comes raining down on her.",
                "line": 433
            },
            {
                "text": "\"Hmph.\"",
                "line": 434
            },
            {
                "text": "Delta dodges them all.",
                "line": 435
            },
            {
                "text": "After crawling across the ground, she rolls over and leaps back up in a way no human could have pulled off.",
                "line": 436
            },
            {
                "text": "\"Where are you hiding, Felid?\"",
                "line": 437
            },
            {
                "text": "Zeta is nowhere to be seen. The only thing visible is the array of black blades hanging in the darkness.",
                "line": 438
            },
            {
                "text": "Hey, I know that move. That's the one the Blood Queen used. I had no idea Zeta could use it, too, but knowing her, I guess I shouldn't be surprised. Of all the people I know, she's always been the cleverest. Whenever I ask her to do something, she always nails it, even if it's her first time trying it. On top of that, she improves superfast, and her instincts are fantastic. She might very well be one of the biggest geniuses around. When it comes to raw talent, she's as good as it gets.",
                "line": 439
            },
            {
                "text": "However, even Zeta the Prodigy has a glaring weakness.",
                "line": 440
            },
            {
                "text": "\"...Huh?\"",
                "line": 441
            },
            {
                "text": "I hear Zeta's voice, and her tail materializes out from the darkness.",
                "line": 442
            },
            {
                "text": "Ah, there she goes again.",
                "line": 443
            },
            {
                "text": "Zeta is fickle and gets bored easily, so she never takes the time to truly master any skill.",
                "line": 444
            },
            {
                "text": "\"Oops, I didn't practice enough.\"",
                "line": 445
            },
            {
                "text": "\"Found you!\"",
                "line": 446
            },
            {
                "text": "The tail transforms into black mist and vanishes right before Delta's mighty sword can cleave it in twain.",
                "line": 447
            },
            {
                "text": "\"That was too close.\" The only thing perceptible about Zeta is her voice. \"I need to take this seriously.\"",
                "line": 448
            },
            {
                "text": "With that, the black mist gathers and coalesces into tens of thousands of tiny swords that twirl around Delta.",
                "line": 449
            },
            {
                "text": "\"A Thousand Blades. Certain Death.\"",
                "line": 450
            },
            {
                "text": "There are clearly way more blades than that, but Zeta keeps her declaration conservative. The lethality of her attack, on the other hand, is anything but. The swarm of blades thrust into Delta and hoist her body up into the night sky.",
                "line": 451
            },
            {
                "text": "\"Agh, agh... Arrrgh!\"",
                "line": 452
            },
            {
                "text": "Delta is helpless to resist as she gets sliced up in midair. She narrowly manages to use her arms and legs to protect her vitals, but it looks like she might be in real danger here. Zeta's gotten stronger than I expected. She's a relative newcomer to the Seven Shadows, but she's a bona fide monster who's been improving like nobody's business.",
                "line": 453
            },
            {
                "text": "\"GRAAAAAAAAAAAAAAAAAAAAAAAAAAH!\"",
                "line": 454
            },
            {
                "text": "Delta's howl thunders through the night, and her magic sweeps out in a terrifying shock wave.",
                "line": 455
            },
            {
                "text": "The ten thousand blades get obliterated.",
                "line": 456
            },
            {
                "text": "\"N...no way,\" Zeta mumbles in disbelief as she spills out from the cloud of mist. She lands like a cat and stares over at Delta's blood-soaked figure.",
                "line": 457
            },
            {
                "text": "Splatch.",
                "line": 458
            },
            {
                "text": "Delta spits out a mouthful of blood and glares at Zeta. There isn't a hint of playfulness left in her eyes.",
                "line": 459
            },
            {
                "text": "\".........\"",
                "line": 460
            },
            {
                "text": "Every hair on Zeta's body stands on end.",
                "line": 461
            },
            {
                "text": "Delta manipulates her slime into a colossal black sword. No, that thing is too big to be called a sword. Too massive, and too brutish. When Delta uses it, we call it the Large Hunk of Iron. Normally, Delta mimics us and fights with the same weapons we do, but that isn't her final form. The savage Large Hunk of Iron is her true weapon, and when she brings it out, that's proof that Delta the Tyrant is done messing around.",
                "line": 462
            },
            {
                "text": "\"Grrr...\"",
                "line": 463
            },
            {
                "text": "A low growl escapes Delta's throat.",
                "line": 464
            },
            {
                "text": "Zeta breaks out into a cold sweat.",
                "line": 465
            },
            {
                "text": "I glance over my shoulder, more than a little worried about the safety of the dorms and school building. What to do, what to do? At this rate, they're liable to get blown away.",
                "line": 466
            },
            {
                "text": "The problem is, it bugs me to no end when someone interrupts me in the middle of a battle where I'm playing for keeps, and I'm a big believer in the whole \"do unto others\" thing.",
                "line": 467
            },
            {
                "text": "So I guess that's it. I say a silent prayer. So long, Midgar Academy. Rest in peace, Skel and Po.",
                "line": 468
            },
            {
                "text": "\"YOU'RE DEAD.\"",
                "line": 469
            },
            {
                "text": "Delta's bloodthirsty magic permeates the Large of Hunk of Iron.",
                "line": 470
            },
            {
                "text": "I retreat with some legitimate gusto to put some distance between us. Meanwhile, Zeta...flies into the air. That's not a metaphor or a turn of phrase or anything. She actually flies upward.",
                "line": 471
            },
            {
                "text": "Upon strengthening my vision with magic, I discover that she's clad herself in a thin layer of black mist.",
                "line": 472
            },
            {
                "text": "Oh, huh. I never knew you could use it like that.",
                "line": 473
            },
            {
                "text": "\"Bye-bye, Doggy.\"",
                "line": 474
            },
            {
                "text": "With that, she soars off and vanishes into the clouds.",
                "line": 475
            },
            {
                "text": "After the briefest of pauses, Delta's entire body shudders with rage. \"G-GET BACK HERE, YOU STUPID CAAAAAAAAAAAAT!!\"",
                "line": 476
            },
            {
                "text": "She, too, vanishes, leaving a massive gust of wind in her wake.",
                "line": 477
            },
            {
                "text": "\"Same old same old, huh?\"",
                "line": 478
            },
            {
                "text": "Their fights never reach a proper conclusion. Either Zeta leaves, or Alpha gives Zeta a piece of her mind. Not me, though. I prefer to just sit back and watch.",
                "line": 479
            },
            {
                "text": "Anyhow, guess I'd better head back and get some shut-eye.",
                "line": 480
            },
            {
                "text": "\"Hmm?\"",
                "line": 481
            },
            {
                "text": "I sense a number of people drawing closer. It makes sense, considering how much of a ruckus Zeta and Delta just made.",
                "line": 482
            },
            {
                "text": "\"I know those presences... It's Alexia and the guards, right?\"",
                "line": 483
            },
            {
                "text": "I decide to conceal myself and see how this plays out.",
                "line": 484
            },
            {
                "text": "Alexia rushes over to the yard behind the dorms. Honestly, it's not much of a yard. The area is poorly maintained, and it's completely overgrown with trees. The night dew soaks her boots.",
                "line": 485
            },
            {
                "text": "She looks back over her shoulder as she runs. \"Come on, hurry up!\"",
                "line": 486
            },
            {
                "text": "The guards race after her with looks of terror on their faces. \"That magic is dangerous, Princess Alexia! We need to wait for reinforcements!\"",
                "line": 487
            },
            {
                "text": "\"If you keep dawdling, the culprit's going to get away!\"",
                "line": 488
            },
            {
                "text": "\"Princess Alexia, wait!\"",
                "line": 489
            },
            {
                "text": "Alexia ignores the guards and pushes her way through the thicket. Soon, she finds the aftermath of a battle.",
                "line": 490
            },
            {
                "text": "\"No way...\"",
                "line": 491
            },
            {
                "text": "The ground and vegetation are riddled with lacerations, and the area lingers with traces of powerful magic.",
                "line": 492
            },
            {
                "text": "\"Who even has magic this strong?\"",
                "line": 493
            },
            {
                "text": "\"Princess Alexia, we\u2014 Ah! What is this?\" When the guards finally catch up to her, their voices get caught in their throats by the choking quantities of mana still present in the air. \"I-it's dangerous here, ma'am. The culprit might still be in the area.\"",
                "line": 494
            },
            {
                "text": "\"Exactly. And it's your job to catch them.\"",
                "line": 495
            },
            {
                "text": "\"B-but, ma'am...\"",
                "line": 496
            },
            {
                "text": "The guards glance at one another, unable to look Alexia in the eye. Alexia sighs, but she makes sure they don't see her doing it.",
                "line": 497
            },
            {
                "text": "\"This here\u2014this is blood.\" She traces the bloodstains splattered across the grass. \"Someone lost a lot of it. They could be badly wounded. They might even be the culprit behind the incidents...\"",
                "line": 498
            },
            {
                "text": "The Case of the Missing Students is the talk of the campus, but the Knight Order is completely butchering their investigation. They've ignored the mountains of evidence and declared that no criminal activity has taken place.",
                "line": 499
            },
            {
                "text": "Alexia, on the other hand, suspects there's more to the case than meets the eye.",
                "line": 500
            },
            {
                "text": "\"There were some elite dark knights fighting here. But why here?\" she says.",
                "line": 501
            },
            {
                "text": "The spot they're in is no battlefield. It's just the yard behind some student dorms.",
                "line": 502
            },
            {
                "text": "\"It makes sense to think this could be related to the case. There's clearly some powerful force at work here...\"",
                "line": 503
            },
            {
                "text": "One of the guards' panicked voices interrupts her train of thought. \"P-Princess Alexia!\"",
                "line": 504
            },
            {
                "text": "\"What?\"",
                "line": 505
            },
            {
                "text": "\"O-over there!\"",
                "line": 506
            },
            {
                "text": "The guard is pointing at a silent figure dressed in a jet-black longcoat.",
                "line": 507
            },
            {
                "text": "\"When did he\u2014?\"",
                "line": 508
            },
            {
                "text": "Alexia shudders. She didn't sense his presence at all.",
                "line": 509
            },
            {
                "text": "\"W-wait, that's...\"",
                "line": 510
            },
            {
                "text": "The figure is wearing his hood low, and he wipes his fingers across a bloodstain on the grass. His voice rumbles like it's echoing up from the depths of the abyss. \"This is the toll that a battle demands, is it?\"",
                "line": 511
            },
            {
                "text": "\"Shadow...\"",
                "line": 512
            },
            {
                "text": "There's something strikingly melancholic about him, and Alexia finds herself at a loss for words.",
                "line": 513
            },
            {
                "text": "\"Was the life shed here a necessary sacrifice for the sake of the world?\"",
                "line": 514
            },
            {
                "text": "\"Did you have something to do with this, Shadow?\"",
                "line": 515
            },
            {
                "text": "Shadow pays no heed to Alexia or the guards. Instead, he sinks deep into thought.",
                "line": 516
            },
            {
                "text": "\"P-P-P-P-Princess Alexia, get back! You need to retreat and call in the Knight Order\u2014\"",
                "line": 517
            },
            {
                "text": "The guards tremble as they draw their swords.",
                "line": 518
            },
            {
                "text": "\"Stand down, all of you,\" she replies. \"Our swords are no threat to him.\"",
                "line": 519
            },
            {
                "text": "Despite knowing that, she levels her sword at Shadow all the same.",
                "line": 520
            },
            {
                "text": "\"Answer me, Shadow. What happened here?\"",
                "line": 521
            },
            {
                "text": "When she pours magic into her blade, Shadow finally turns to face her. The red eyes beneath his mask home in on her.",
                "line": 522
            },
            {
                "text": "\"And what would you do, knowing the truth?\"",
                "line": 523
            },
            {
                "text": "\"Catch whoever was behind it. I won't let them get away with this.\"",
                "line": 524
            },
            {
                "text": "Behind his mask, Shadow lets out a small laugh. \"Your efforts are futile.\"",
                "line": 525
            },
            {
                "text": "He vanishes.",
                "line": 526
            },
            {
                "text": "No, wait\u2014there he is, right in front of her.",
                "line": 527
            },
            {
                "text": "\"Wha\u2014?\"",
                "line": 528
            },
            {
                "text": "She failed to sense his magic, his presence, his anything. Before she knows it, he's standing directly before her with a sword pressed to her throat.",
                "line": 529
            },
            {
                "text": "Alexia recognizes that sword.",
                "line": 530
            },
            {
                "text": "After all, it belongs to her.",
                "line": 531
            },
            {
                "text": "\"My...sword...\"",
                "line": 532
            },
            {
                "text": "She never even noticed him steal it.",
                "line": 533
            },
            {
                "text": "\"We live in different worlds.\"",
                "line": 534
            },
            {
                "text": "\"What does that even mean?\"",
                "line": 535
            },
            {
                "text": "Alexia clenches her jaw. She's put in so much work. She was so sure she'd closed the gap a little.",
                "line": 536
            },
            {
                "text": "\"Front and back, shadow and light... There exists a world that people from the frontside would be best served avoiding.\"",
                "line": 537
            },
            {
                "text": "With that, he retracts the sword and turns to leave. His black longcoat flutters behind him, and he strides unhurriedly into the night.",
                "line": 538
            },
            {
                "text": "\"It's time,\" he says.",
                "line": 539
            },
            {
                "text": "\"Time? Time for what?\"",
                "line": 540
            },
            {
                "text": "\"They're making their move...\"",
                "line": 541
            },
            {
                "text": "A black liquid gushes forth from Shadow's feet, surging upward and engulfing him. Then the wind blows, and Shadow vanishes in a cloud of black mist.",
                "line": 542
            },
            {
                "text": "Alexia's sword topples to the ground where he was standing.",
                "line": 543
            },
            {
                "text": "\"He's gone... Who was it he was talking about?\"",
                "line": 544
            },
            {
                "text": "Alexia doesn't understand any of it.",
                "line": 545
            },
            {
                "text": "However, learning that Shadow is involved is a step in the right direction. A small step, she admits bitterly, but a step all the same. She turns around.",
                "line": 546
            },
            {
                "text": "\"Why aren't those reinforcements here yet? We need to hurry up and preserve the scene of the\u2014\"",
                "line": 547
            },
            {
                "text": "She freezes in shock.",
                "line": 548
            },
            {
                "text": "\"What...the...?\"",
                "line": 549
            },
            {
                "text": "All the guards are unconscious. In the span of that brief moment, Shadow knocked each and every one of them out. And Alexia didn't notice a thing.",
                "line": 550
            },
            {
                "text": "\"How is there still such a gap between us? I'm trying so hard... I really am...\"",
                "line": 551
            },
            {
                "text": "She hangs her head and clenches her fists tight.",
                "line": 552
            }
        ],
        "c2": [
            {
                "text": "The next day, all anyone on campus is talking about is Zeta and Delta's battle.",
                "line": 1
            },
            {
                "text": "\"So apparently, there was some crazy magic detected out behind the dorms last night,\" says Po.",
                "line": 2
            },
            {
                "text": "\"Yeah, I heard,\" Skel agrees. \"I was asleep, so I dunno anything about it.\"",
                "line": 3
            },
            {
                "text": "\"I was asleep, too, so I dunno anything, either.\"",
                "line": 4
            },
            {
                "text": "The two of them furrow their brows.",
                "line": 5
            },
            {
                "text": "\"They're surveying the scene now, right?\" Skel asks Po.",
                "line": 6
            },
            {
                "text": "\"So they say, yeah. Some of the teachers went to help out.\"",
                "line": 7
            },
            {
                "text": "\"If it happened behind the dorms, then I'd bet you anything they were trying to sneak into the girls' dorm. This is clearly the work of a pervert.\"",
                "line": 8
            },
            {
                "text": "\"No, no, they say the magic was behind the guys' dorm.\"",
                "line": 9
            },
            {
                "text": "\"Huh. Guess they must've been trying to sneak into our dorm, then.\"",
                "line": 10
            },
            {
                "text": "\"What were they after, though?\"",
                "line": 11
            },
            {
                "text": "Skel flashes a vulgar grin. \"My hot bod, obviously.\"",
                "line": 12
            },
            {
                "text": "\"Oh, sure.\" Po's grin is just as crude. \"And mine, too.\"",
                "line": 13
            },
            {
                "text": "\"Makes sense,\" I agree, my expression as placid as the Buddha's.",
                "line": 14
            },
            {
                "text": "Those two bozos aside, most of the students are taking the incident pretty seriously. The theories are all over the place: Some people believe the culprit was someone with a grudge against the school, others think they were trying to steal some sort of precious artifact from the labs, and others suspect the incident was connected to the mysterious disappearances.",
                "line": 15
            },
            {
                "text": "Sorry to break it to you, folks, but all that happened was a cat and a dog getting into a fight. Still, I can definitely dig this whole \"there's a grand conspiracy unfolding behind the scenes of our quiet school lives\" atmosphere it's caused.",
                "line": 16
            },
            {
                "text": "\"Our next class is over in the lecture hall, so we'd better get a move on,\" I tell Skel and Po.",
                "line": 17
            },
            {
                "text": "\"Damn, Cid,\" Skel says. \"It takes a lot of balls to go ditching a certified stud like me.\"",
                "line": 18
            },
            {
                "text": "\"Yeah, wait up,\" Po agrees. \"This certified stud is still getting ready.\"",
                "line": 19
            },
            {
                "text": "I abandon them and head out.",
                "line": 20
            },
            {
                "text": "Gotta say, that last-minute decision I made to go full eminence in shadow on Alexia last night was great.",
                "line": 21
            },
            {
                "text": "There I was, lamenting the path we were on as grisly battles played out in secret on the peaceful-seeming campus. I mean, the way I took my ad-lib skills and used Zeta and Delta's fight to inject a sense of realism into my performance? That was pure music. Then there was the bit where I showed off my strength to suggest that we lived in different worlds. Implying that normal people have no place in underworld battles is an oldie, but the classics are classics for a reason.",
                "line": 22
            },
            {
                "text": "Every time I think back to it, I can't help but grin.",
                "line": 23
            },
            {
                "text": "Little by little, I'm carving my image of the perfect shadowbroker into this world's history books.",
                "line": 24
            },
            {
                "text": "\"Master.\"",
                "line": 25
            },
            {
                "text": "Feels like I just heard Zeta's voice. I'm probably imagining things.",
                "line": 26
            },
            {
                "text": "\"Master, over here.\"",
                "line": 27
            },
            {
                "text": "\"Oh, huh.\"",
                "line": 28
            },
            {
                "text": "Guess I wasn't imagining things.",
                "line": 29
            },
            {
                "text": "A girl wearing a janitor's outfit grabs me by the uniform, and sure enough, it's Zeta. For whatever reason, she's paired a knitted hat with her work clothes to hide her cat ears.",
                "line": 30
            },
            {
                "text": "\"What's with the getup?\" I ask.",
                "line": 31
            },
            {
                "text": "\"It's a disguise. I'm undercover,\" she replies succinctly as she rubs up against me.",
                "line": 32
            },
            {
                "text": "\"You gotta stop marking me with your scent. You're making a scene.\"",
                "line": 33
            },
            {
                "text": "There are tons of other students in the hallway.",
                "line": 34
            },
            {
                "text": "\"You stink of dog, Master.\"",
                "line": 35
            },
            {
                "text": "\"Yeah, well, if you keep doing that, I'll stink of cat.\"",
                "line": 36
            },
            {
                "text": "\"Mrrn...\"",
                "line": 37
            },
            {
                "text": "I peel Zeta off me. \"By the way, where's Delta?\"",
                "line": 38
            },
            {
                "text": "\"Gave her the slip. She's crossing the sea now.\"",
                "line": 39
            },
            {
                "text": "\"Y'know what, I'm not even going to ask.\"",
                "line": 40
            },
            {
                "text": "If Zeta puts her mind to it, catching her is just about impossible. That's the whole reason she's able to brawl with Delta like that.",
                "line": 41
            },
            {
                "text": "\"Hmm. Over here.\"",
                "line": 42
            },
            {
                "text": "Zeta pulls me by the hand and leads me to an empty classroom. Given how cold and dusty it is, I'd wager that nobody's used it in a good long while.",
                "line": 43
            },
            {
                "text": "\"Just FYI, my next class is starting soon,\" I tell her.",
                "line": 44
            },
            {
                "text": "She sidles in close and whispers in my ear. \"I have a report.\"",
                "line": 45
            },
            {
                "text": "I guess she wants to keep playing spies.",
                "line": 46
            },
            {
                "text": "\"The attack on her failed.\"",
                "line": 47
            },
            {
                "text": "\"Figures.\"",
                "line": 48
            },
            {
                "text": "\"But she's still on the other side.\"",
                "line": 49
            },
            {
                "text": "\"I see.\"",
                "line": 50
            },
            {
                "text": "\"The Cult will send another assassin.\"",
                "line": 51
            },
            {
                "text": "Zeta walks over to the window and looks down at the scenery outside.",
                "line": 52
            },
            {
                "text": "I walk over next to her and look out the window, too, to build atmosphere. Off in the distance, I can see the teachers and Knight Order investigating the scene of last night's fight.",
                "line": 53
            },
            {
                "text": "Zeta fixes her violet gaze on them. I follow her lead and stare at them as well.",
                "line": 54
            },
            {
                "text": "\"It'll probably be you-know-who,\" she says.",
                "line": 55
            },
            {
                "text": "\"You-know-who, huh?\"",
                "line": 56
            },
            {
                "text": "\"I'll step in if things get hairy.\"",
                "line": 57
            },
            {
                "text": "\"I'll leave that call to you.\"",
                "line": 58
            },
            {
                "text": "Then Zeta suddenly ducks. I follow her lead and duck as well.",
                "line": 59
            },
            {
                "text": "\"They're probing,\" she says.",
                "line": 60
            },
            {
                "text": "\"Sounds like someone out there's got good instincts.\"",
                "line": 61
            },
            {
                "text": "\"Mm. Lurk in the shadows.\"",
                "line": 62
            },
            {
                "text": "I steal a glance outside, and for a brief moment, I can feel a distant gaze.",
                "line": 63
            },
            {
                "text": "\"I wonder what they're looking for?\" The bell rings. \"Oops, I gotta go.\"",
                "line": 64
            },
            {
                "text": "When I turn around, Zeta's nowhere to be seen.",
                "line": 65
            },
            {
                "text": "It's lunch break, and me, Skel, and Po are lined up in the cafeteria.",
                "line": 66
            },
            {
                "text": "\"Hmm, what to have for lunch...?\" I ponder aloud.",
                "line": 67
            },
            {
                "text": "\"Must be nice, Cid, getting to live it up with the money you stole from us.\"",
                "line": 68
            },
            {
                "text": "\"Yeah, must be nice. Skel and I can barely afford the nine hundred and eighty\u2013zeni meal for broke aristocrats now.\"",
                "line": 69
            },
            {
                "text": "\"Stole is such an ugly word. That money was my rightful winnings.\"",
                "line": 70
            },
            {
                "text": "That said, I'm saving the cash I scammed off these guys for my shadowbroker activities. If I go wasting it now, I might not have enough when it really counts, and I'm the kind of guy who always keeps his priorities straight.",
                "line": 71
            },
            {
                "text": "I decide to go with my usual nine hundred and eighty\u2013zeni broke aristocrat meal. A zeni saved is a zeni earned.",
                "line": 72
            },
            {
                "text": "\"Haven't seen you in a while, Young'un.\"",
                "line": 73
            },
            {
                "text": "All of a sudden, I hear a voice from behind me. There's only one person in the whole world who calls me \"Young'un.\"",
                "line": 74
            },
            {
                "text": "\"Hey there, Nina.\"",
                "line": 75
            },
            {
                "text": "Her wine-red hair is just as silky as always. The way she's wearing her uniform leaves scandalous amounts of her chest bare, and her legs extend thin and slender from her short skirt. Nothing about her fashion sense is subtle in the slightest.",
                "line": 76
            },
            {
                "text": "This is Nina, my third-year upperclassman.",
                "line": 77
            },
            {
                "text": "\"Where'd you get off to during winter break, huh?\" she asks me. \"Claire was looking for you. And she dragged me along, too, so that was a drag.\"",
                "line": 78
            },
            {
                "text": "\"Oh, you know. Here and there.\"",
                "line": 79
            },
            {
                "text": "\"Here and there, huh?\"",
                "line": 80
            },
            {
                "text": "Nina wedges herself in front of me. She's tiny, so her head barely comes up to my collar.",
                "line": 81
            },
            {
                "text": "\"Hey, no cutting.\"",
                "line": 82
            },
            {
                "text": "I try to elbow her, but she nimbly sidesteps it.",
                "line": 83
            },
            {
                "text": "\"Going for the nine hundred and eighty\u2013zeni poverty meal, are we, Young'un? Sounds like someone's a little hard up for cash.\"",
                "line": 84
            },
            {
                "text": "\"I've got big plans for the future, so I'm being economical. It's not like I'm actually broke or anything.\"",
                "line": 85
            },
            {
                "text": "\"Oh, yeah, sure you aren't. Go ahead, order whatever you want. It'll be my treat.\"",
                "line": 86
            },
            {
                "text": "\"I'll take the most expensive thing they've got, then.\"",
                "line": 87
            },
            {
                "text": "\"Sounds good.\" She turns and orders the priciest meal the school cafeteria has to offer. \"Two of the ten thousand\u2013zeni super-duper filthy rich lunch sets, please 'n' thank you.\"",
                "line": 88
            },
            {
                "text": "Nina is a friend of my sister's, so maybe that's why she's always so nice to me. Whenever I ask her for something, she never lets me down. One time, I even joked that I wanted to read one of the forbidden books from the library, and she actually went and got it for me. I have no idea how she pulled that one off, but the bottom line is, she's constantly helping me out. Meeting Nina was the first time I was ever glad to be my sister's brother.",
                "line": 89
            },
            {
                "text": "\"Y-you should treat me, too!\"",
                "line": 90
            },
            {
                "text": "\"M-me too, me too!\"",
                "line": 91
            },
            {
                "text": "Despite being daunted by Nina's very presence, Skel and Po never miss a chance to look for handouts.",
                "line": 92
            },
            {
                "text": "\"I gave you two that deck of cards, didn't I?\"",
                "line": 93
            },
            {
                "text": "\"Th-th-that's right!\"",
                "line": 94
            },
            {
                "text": "\"Th-th-thanks for the cards!\"",
                "line": 95
            },
            {
                "text": "\"No problem. I felt bad after the way Claire hassled you.\"",
                "line": 96
            },
            {
                "text": "Ah, so that's how it went down.",
                "line": 97
            },
            {
                "text": "Thanks to Nina's influence, we're able to secure one of the nice tables by the window.",
                "line": 98
            },
            {
                "text": "\"Go on, take a seat.\"",
                "line": 99
            },
            {
                "text": "\"Aye-aye, ma'am.\"",
                "line": 100
            },
            {
                "text": "I sit down next to Nina and begin digging into my super-duper filthy rich lunch set. Across from us, Skel and Po nervously do the same with their broke aristocrat lunch sets.",
                "line": 101
            },
            {
                "text": "The super-duper filthy rich lunch set starts with an appetizer. A maid skillfully sets it up.",
                "line": 102
            },
            {
                "text": "\"So, Claire's gone missing?\" Nina asks as she eats her carpaccio.",
                "line": 103
            },
            {
                "text": "\"Sure looks that way,\" I reply as I do the same. Dunno what fish this is, but it's tasty as hell.",
                "line": 104
            },
            {
                "text": "\"Princess Alexia just asked me if I knew anything, but everything that day was pretty normal for me, so I didn't have anything to tell her. What about you, Young'un?\"",
                "line": 105
            },
            {
                "text": "\"I'm in the same boat. Alexia's really going hard on the search, huh?\"",
                "line": 106
            },
            {
                "text": "\"Something's got her worried, I think. There's been a couple of other students going missing, so I'm kinda worried, too.\"",
                "line": 107
            },
            {
                "text": "\"I guess there was that whole commotion last night.\"",
                "line": 108
            },
            {
                "text": "\"The thing behind the boys' dorm, you mean? Yeah, scary stuff.\"",
                "line": 109
            },
            {
                "text": "\"For sure.\"",
                "line": 110
            },
            {
                "text": "\"That reminds me, I spotted the Crimson Order scoping out the scene. I hear they've been on a recruitment drive, but their newbies are about as rubbish as you'd expect.\"",
                "line": 111
            },
            {
                "text": "\"Dang, you know all sorts of stuff.\"",
                "line": 112
            },
            {
                "text": "She gives me a proud wink. \"You could say that.\"",
                "line": 113
            },
            {
                "text": "\"Are you planning on joining the Knight Order when you graduate?\"",
                "line": 114
            },
            {
                "text": "\"Ooh, I dunno. My grades aren't nearly as good as Claire's.\"",
                "line": 115
            },
            {
                "text": "\"Really? They aren't?\"",
                "line": 116
            },
            {
                "text": "\"Why do you look so surprised? Everyone knows my grades are terrible.\"",
                "line": 117
            },
            {
                "text": "\"Oh, huh. I always just assumed you were at the top of your class.\"",
                "line": 118
            },
            {
                "text": "\"Ha-ha-ha. That'd be Claire, probably. She's been getting wicked good marks lately. I'm just your run-of-the-mill underachiever.\"",
                "line": 119
            },
            {
                "text": "\"I'll take your word for it, I guess.\"",
                "line": 120
            },
            {
                "text": "Nina unconcernedly raises a spoonful of soup to her petite mouth.",
                "line": 121
            },
            {
                "text": "Just by looking at her, I'm pretty sure Nina's stronger than my sister, but hey, everyone's got their reasons for wanting to keep their true strength a secret. Nina's a woman of many mysteries.",
                "line": 122
            },
            {
                "text": "\"I'll tell you if I hear anything about Claire,\" she says. \"You must be worried about her.\"",
                "line": 123
            },
            {
                "text": "\"I must? Not really... Err, I mean, yeah, I'm worried sick.\"",
                "line": 124
            },
            {
                "text": "\"You never change, do you? It is Claire we're talking about, though, so she's probably fine. If you ever need a hand, you know where to find me.\"",
                "line": 125
            },
            {
                "text": "Nina flashes me an adorable smile.",
                "line": 126
            },
            {
                "text": "Meanwhile, Skel and Po eat their broke aristocrat lunch sets in silence.",
                "line": 127
            },
            {
                "text": "\"Can we seriously not get out yet?\"",
                "line": 128
            },
            {
                "text": "Claire heaves a sigh in the academy classroom. Her surroundings are shrouded in white fog, and there's nobody else around.",
                "line": 129
            },
            {
                "text": "\"Just a little longer.\"",
                "line": 130
            },
            {
                "text": "\"You've been saying that for ages.\"",
                "line": 131
            },
            {
                "text": "\"Yes, because it keeps being a little longer. I'm trying to widen the crack, but you have so little magic it's taking me forever.\"",
                "line": 132
            },
            {
                "text": "\"Oh gee, my bad. Sorry for having so little magic. I'll have you know, I've got more magic than almost anyone at school.\"",
                "line": 133
            },
            {
                "text": "\"Small fish, small pond.\"",
                "line": 134
            },
            {
                "text": "\"I swear, it's like you're trying to offend me.\"",
                "line": 135
            },
            {
                "text": "\"Oops, did I say that out loud?\"",
                "line": 136
            },
            {
                "text": "\"Also, what were you saying about a crack?\"",
                "line": 137
            },
            {
                "text": "\"There's a crack you can pass through to get back to your original world.\"",
                "line": 138
            },
            {
                "text": "\"My original world? What world is this, then?\"",
                "line": 139
            },
            {
                "text": "\"Oh, a lady never tells.\"",
                "line": 140
            },
            {
                "text": "Claire lets out another sigh. There's so much she doesn't understand, she doesn't even know where to start.",
                "line": 141
            },
            {
                "text": "She sits down at a desk. Right as she's about to cross her legs, though, she senses that something is off.",
                "line": 142
            },
            {
                "text": "\"Huh?\"",
                "line": 143
            },
            {
                "text": "There's something touching her leg.",
                "line": 144
            },
            {
                "text": "On further inspection, she discovers that it's a translucent human arm. It's drenched in blood and grabbing on to her.",
                "line": 145
            },
            {
                "text": "\"Wh-what is that thing?!\"",
                "line": 146
            },
            {
                "text": "She leaps to her feet, gives the arm a fierce kick, and backs away.",
                "line": 147
            },
            {
                "text": "As the arm goes flying, the rest of a blood-soaked human appears attached to it. Their skin is ashen, their eyes are sunken, and their chest has a massive wound in it. It's pretty clear they aren't alive.",
                "line": 148
            },
            {
                "text": "\"Be careful. That's a spirit.\"",
                "line": 149
            },
            {
                "text": "\"A what?\"",
                "line": 150
            },
            {
                "text": "\"A hero of old who's been chained to this land. They're bound by profane magic and forced to wander for all eternity. Go on and put it out of its misery.\"",
                "line": 151
            },
            {
                "text": "\"Okay, sure, but...how exactly do I do that?\"",
                "line": 152
            },
            {
                "text": "\"Oh, hitting them will probably do the trick.\"",
                "line": 153
            },
            {
                "text": "\"Hrah!\"",
                "line": 154
            },
            {
                "text": "When the spirit tries to get back up, Claire wallops them with a magically imbued punch. The spirit bursts and fades away.",
                "line": 155
            },
            {
                "text": "\"That felt nasty.\"",
                "line": 156
            },
            {
                "text": "\"If spirits are showing up, then the seal must be weakening... This could be bad.\"",
                "line": 157
            },
            {
                "text": "\"What seal?\"",
                "line": 158
            },
            {
                "text": "\"Don't mind me. Just talking to myself. Ah, I messed up. I need to make sure she can't hear me. I guess what she lacks in magic, she makes up for in hearing.\"",
                "line": 159
            },
            {
                "text": "\"I can still hear you, you know.\"",
                "line": 160
            },
            {
                "text": "From then on, Aurora is silent.",
                "line": 161
            },
            {
                "text": "Another spirit appears, and Claire kicks them away.",
                "line": 162
            },
            {
                "text": "\"It really sucks, not having a sword.\"",
                "line": 163
            },
            {
                "text": "Sadly, she left her sword back on the other side.",
                "line": 164
            },
            {
                "text": "Spirits continue popping up every so often, and Claire dispatches them as she waits for Aurora to finish working. The spirits are coming more frequently now, and the fog is getting denser.",
                "line": 165
            },
            {
                "text": "\"Are you almost done yet, Aurora?\"",
                "line": 166
            },
            {
                "text": "\"Just a little longer.\"",
                "line": 167
            },
            {
                "text": "\"For real this time?\"",
                "line": 168
            },
            {
                "text": "\"For real. But unfortunately...we have company.\"",
                "line": 169
            },
            {
                "text": "\"Huh?\"",
                "line": 170
            },
            {
                "text": "Sensing someone behind her, Claire whirls around. A man in a black robe has been standing there since who-knows-when. His face is hidden beneath a dark mask.",
                "line": 171
            },
            {
                "text": "\"When did he\u2014?\"",
                "line": 172
            },
            {
                "text": "Claire assumes a combat stance, but without a sword, she looks a little silly.",
                "line": 173
            },
            {
                "text": "In contrast, the robed man does have a sword, and he brandishes it with a practiced hand before closing in on Claire in a flash.",
                "line": 174
            },
            {
                "text": "\"How's he so fast?!\"",
                "line": 175
            },
            {
                "text": "Claire dodges his initial strike by the skin of her teeth, then backs off and puts some distance between them. However, the robed man has no intention of letting her get away. He circles around her and strikes her with his sword.",
                "line": 176
            },
            {
                "text": "\"Rgh!\"",
                "line": 177
            },
            {
                "text": "Claire gets sent flying, but she then totters back to her feet. That was a powerful blow he dealt with the flat of his sword, but she's not out yet. The man doesn't seem to be going for the kill. He must be planning on capturing her.",
                "line": 178
            },
            {
                "text": "Aurora's voice echoes in her head. \"Looks like you're outmatched.\"",
                "line": 179
            },
            {
                "text": "\"Shut up, will you? In case you hadn't noticed, I'm in the middle of something here.\"",
                "line": 180
            },
            {
                "text": "\"Well, yes. In the middle of losing.\"",
                "line": 181
            },
            {
                "text": "\"Oh, be quiet! If I just had a sword...\"",
                "line": 182
            },
            {
                "text": "\"It wouldn't make a difference.\"",
                "line": 183
            },
            {
                "text": "\"I said shut up!\"",
                "line": 184
            },
            {
                "text": "\"Here he comes.\"",
                "line": 185
            },
            {
                "text": "The robed man takes a running start and bears down on Claire.",
                "line": 186
            },
            {
                "text": "\"I'll lend you my strength.\"",
                "line": 187
            },
            {
                "text": "\"...Huh?\"",
                "line": 188
            },
            {
                "text": "It happens in the blink of an eye. The man is right in front of her, ready to strike, when all of a sudden, a red tendril swats him away. The tendril is coming out of Claire's foot, and it undulates like it has a mind of its own.",
                "line": 189
            },
            {
                "text": "\"Wh-what is that thing?\"",
                "line": 190
            },
            {
                "text": "\"Blood.\"",
                "line": 191
            },
            {
                "text": "\"Blood?!\"",
                "line": 192
            },
            {
                "text": "\"If you work hard, you'll be able to use this technique, too. After all, you're...\"",
                "line": 193
            },
            {
                "text": "\"I'm what?\"",
                "line": 194
            },
            {
                "text": "\"...It's nothing. The fight isn't over yet.\"",
                "line": 195
            },
            {
                "text": "Claire looks up and finds the robed man standing before her. There's blood dripping down his cheek, and his dark mask has fallen off.",
                "line": 196
            },
            {
                "text": "\"I know you... You're from the Knight Order.\"",
                "line": 197
            },
            {
                "text": "Claire saw him during her internship there.",
                "line": 198
            },
            {
                "text": "The man grins and gives her a bow. \"We meet again, Claire.\"",
                "line": 199
            },
            {
                "text": "\"You're Viscount Jean, captain of the third Knight Order's fourth company.\"",
                "line": 200
            },
            {
                "text": "\"That was just a cover identity. I'm a Named Child\u2014Jean, the Wicked Smile.\"",
                "line": 201
            },
            {
                "text": "What sort of stupid name is that? Claire wonders. However, she decides not to voice that thought out loud. \"I don't know what a Named Child is, but I didn't take you for the kind of guy with a sketchy side hustle.\"",
                "line": 202
            },
            {
                "text": "\"Nor did I ever imagine you harbored such power. How fascinating... We didn't find anything of the sort the last time we studied you.\"",
                "line": 203
            },
            {
                "text": "\"I'm sorry\u2014the last time you what?\"",
                "line": 204
            },
            {
                "text": "\"Nothing you need to worry your pretty little head about. At any rate, it looks like we ought to run those tests again.\"",
                "line": 205
            },
            {
                "text": "With that, he readies his sword.",
                "line": 206
            },
            {
                "text": "Claire's red tendril tries to get ready for battle as well, but for whatever reason, it goes limp and dissolves instead.",
                "line": 207
            },
            {
                "text": "\"This is bad, Claire.\"",
                "line": 208
            },
            {
                "text": "\"Hmm?\"",
                "line": 209
            },
            {
                "text": "\"You're out of magic.\"",
                "line": 210
            },
            {
                "text": "Claire's lip twitches. \"You useless little...\"",
                "line": 211
            },
            {
                "text": "True to his name, a wicked smile spreads across the Wicked Smile's face. \"Lucky me. I get to bring a present to the big man.\"",
                "line": 212
            },
            {
                "text": "Kshhh.",
                "line": 213
            },
            {
                "text": "All of a sudden, there's a sound like glass shattering, and a chunk of the world of white fog fractures.",
                "line": 214
            },
            {
                "text": "\"Huh?!\"",
                "line": 215
            },
            {
                "text": "Then a figure falls out of the fracture.",
                "line": 216
            },
            {
                "text": "The newcomer is a beautiful therianthrope girl with a golden tail and ears, dressed in a jet-black bodysuit, and as soon she lands in front of Claire, a strange black mist swats the Wicked Smile's sword away.",
                "line": 217
            },
            {
                "text": "\"Rrgh!\"",
                "line": 218
            },
            {
                "text": "The Wicked Smile gets sent flying with incredible force.",
                "line": 219
            },
            {
                "text": "It looked like little more than a light tap. How could a blow that minor have carried such tremendous force?",
                "line": 220
            },
            {
                "text": "The therianthrope girl shrouded in black mist stands silently. Her eyes are cold and composed.",
                "line": 221
            },
            {
                "text": "\"Who are you...?\" Claire asks.",
                "line": 222
            },
            {
                "text": "\"Zeta,\" the girl replies icily.",
                "line": 223
            },
            {
                "text": "Claire hears Aurora in her head. \"Get back, Claire. I can't get a read on the limits of that girl's strength.\"",
                "line": 224
            },
            {
                "text": "There's a rare hint of tension in Aurora's voice, which surprises Claire. She backs up a step, then poses a question to Zeta. \"Would I be right to assume that you rescued me just now?\"",
                "line": 225
            },
            {
                "text": "\"Can't let the Cult have you. Not now, at least.\"",
                "line": 226
            },
            {
                "text": "\"Huh?\"",
                "line": 227
            },
            {
                "text": "The black mist flickers, and the next thing Claire knows, Zeta is behind her.",
                "line": 228
            },
            {
                "text": "\"Bye-bye.\"",
                "line": 229
            },
            {
                "text": "After grabbing Claire by the collar, Zeta hurls her through the fracture.",
                "line": 230
            },
            {
                "text": "\"Wait\u2014what do you think you're doooooooo\u2014?!\"",
                "line": 231
            },
            {
                "text": "Claire's cry grows distant as she gets swallowed up by the fracture and disappears.",
                "line": 232
            },
            {
                "text": "Now Zeta and Jean, the Wicked Smile, are alone in the world of white fog.",
                "line": 233
            },
            {
                "text": "\"Tch... How dare you get in my way?\" the Wicked Smile says as he squares off against Zeta.",
                "line": 234
            },
            {
                "text": "\"Mm. Nice to meet you.\"",
                "line": 235
            },
            {
                "text": "\"I suppose I shouldn't be surprised the Shadow Garden decided to show up.\"",
                "line": 236
            },
            {
                "text": "With that, the Wicked Smile holds his sword at the ready.",
                "line": 237
            },
            {
                "text": "As he carefully gauges the distance between them, he notices Zeta giving him a bored look.",
                "line": 238
            },
            {
                "text": "\"You seem awfully confident,\" he says. \"What're you, a member of Shadow Garden leadership?\"",
                "line": 239
            },
            {
                "text": "\"Did you find out?\"",
                "line": 240
            },
            {
                "text": "Zeta completely ignores his question. The absolute confidence she has in her abilities lets her do things like that.",
                "line": 241
            },
            {
                "text": "\"Find out what?\"",
                "line": 242
            },
            {
                "text": "\"Her secret.\"",
                "line": 243
            },
            {
                "text": "\"You mean that power she has? What about\u2014?!\"",
                "line": 244
            },
            {
                "text": "Before he even finishes his sentence, Zeta's magic surges.",
                "line": 245
            },
            {
                "text": "The Wicked Smile's knees rattle as the sheer force of the magic threatens to squish him flat.",
                "line": 246
            },
            {
                "text": "\"Wh-what the...? What's with all that magic? How were you hiding it?\"",
                "line": 247
            },
            {
                "text": "\"If you hadn't found out, I could have left you at large.\"",
                "line": 248
            },
            {
                "text": "\"Wh-what are you\u2014?\"",
                "line": 249
            },
            {
                "text": "\"But you know, so good-bye.\"",
                "line": 250
            },
            {
                "text": "\"What's going on...? GAHHHHHHHH?!\"",
                "line": 251
            },
            {
                "text": "All of a sudden, the Wicked Smile sheds a black tear. Then black mist erupts from every pore he has, and his body explodes into tiny bits.",
                "line": 252
            },
            {
                "text": "Zeta shoots a glance at his corpse. \"Mm. This new technique isn't bad.\"",
                "line": 253
            },
            {
                "text": "Then she turns and addresses the empty room.",
                "line": 254
            },
            {
                "text": "\"All done.\"",
                "line": 255
            },
            {
                "text": "As if in response, a girl appears from the rift. This one is wearing a black bodysuit, too, but her hair is strawberry blond. It's Victoria.",
                "line": 256
            },
            {
                "text": "She kneels before Zeta.",
                "line": 257
            },
            {
                "text": "\"Understood, ma'am.\"",
                "line": 258
            },
            {
                "text": "\"I confirmed Aurora is inside Claire.\"",
                "line": 259
            },
            {
                "text": "\"So it's as we suspected...\"",
                "line": 260
            },
            {
                "text": "\"Mm. It's all connected. That's why Master did what he did...\"",
                "line": 261
            },
            {
                "text": "\"Has the Cult noticed?\"",
                "line": 262
            },
            {
                "text": "\"Not yet.\"",
                "line": 263
            },
            {
                "text": "\"What do we do, then?\"",
                "line": 264
            },
            {
                "text": "\"Shift to plan C.\"",
                "line": 265
            },
            {
                "text": "\"Claire will be the key to our strategy. However, it's the one that leads to the most desirable outcome.\"",
                "line": 266
            },
            {
                "text": "\"Master said to fix my gaze on the future.\"",
                "line": 267
            },
            {
                "text": "\"So this is Master Shadow's will...\" Victoria folds her hands in front of her chest in prayer.",
                "line": 268
            },
            {
                "text": "\"She needs to know, too,\" Zeta orders her. \"Tell her the plan's changed.\"",
                "line": 269
            },
            {
                "text": "With that, she turns into black mist and vanishes. Victoria watches her go with a thin smile.",
                "line": 270
            },
            {
                "text": "The only sound in the classroom is that of pens scribbling across exam papers.",
                "line": 271
            },
            {
                "text": "I frown and glare at my test.",
                "line": 272
            },
            {
                "text": "\"...Welp, I'm stumped.\"",
                "line": 273
            },
            {
                "text": "Finals are just around the corner, so we've been getting a lot more pop quizzes lately. The only punishment you get for failing them is an extra homework assignment, but those extra assignments are a bunch of work and a royal pain in the ass. The teachers are desperate to get even the absolute morons up to par.",
                "line": 274
            },
            {
                "text": "Personally speaking, I've been keeping up my background character facade by just barely passing each quiz. Through cheating, of course. Now, however, my overreliance on cheating is finally catching up with me.",
                "line": 275
            },
            {
                "text": "The problem is, Isaac is absent.",
                "line": 276
            },
            {
                "text": "Not only is Isaac the top student in the class, he also sits at the perfect angle for me to see his paper from my seat. It's like he was born for the express purpose of me cheating off him. Thanks to this guy, I've been able to tailor my quiz scores with nearly superhuman precision.",
                "line": 277
            },
            {
                "text": "But today, he's absent!",
                "line": 278
            },
            {
                "text": "Now I'm in real danger of failing.",
                "line": 279
            },
            {
                "text": "\"Rgh...\"",
                "line": 280
            },
            {
                "text": "When you're cheating, it's crucial to pick the right person to cheat from. It won't do you any good sneaking peeks at an answer sheet if the person writing on it is an idiot.",
                "line": 281
            },
            {
                "text": "I look to my right and see Skel shadily glancing around.",
                "line": 282
            },
            {
                "text": "He's useless to me.",
                "line": 283
            },
            {
                "text": "I look to my left and see Po staring beneath his desk at a suspicious angle.",
                "line": 284
            },
            {
                "text": "He's useless, too.",
                "line": 285
            },
            {
                "text": "At this point, the only person I have left to rely on...is Christina, the duke's daughter, who sits diagonally in front of me. She's one of the top five students in the class, but there's one big problem with her\u2014from the angle I'm at, more than half of her answer sheet is obscured.",
                "line": 286
            },
            {
                "text": "I've already copied down the bits I can see, but that adds up to only forty points out of a hundred, tops. I need sixty to avoid failing, and this ain't gonna cut it.",
                "line": 287
            },
            {
                "text": "Should I conceal my presence and sneak somewhere that gives me a better view to copy from?",
                "line": 288
            },
            {
                "text": "The issue there is, concealing my presence doesn't do squat as far as making my physical body disappear. If I start walking around without any cover or obstructions, then people are just gonna spot me with their eyes. And given how many eyes there are in the classroom, I'll get caught for sure.",
                "line": 289
            },
            {
                "text": "In light of that, it looks like my only choice is to move so fast that no one can see me. It's an option, for sure. If I really let loose, moving that fast is a piece of cake.",
                "line": 290
            },
            {
                "text": "However, there's a glaring flaw in that plan.",
                "line": 291
            },
            {
                "text": "If I move faster than the naked eye can see, the wind pressure will literally blow my cover. I might accidentally send the test paper flying. Heck, I might accidentally send Christina flying. That right there would be a complete baby/bathwater situation.",
                "line": 292
            },
            {
                "text": "In other words, I need to move subtly enough to not release any wind yet fast enough that nobody sees me. Who knew a little old pop quiz was going to demand such an exacting level of technical mastery?",
                "line": 293
            },
            {
                "text": "Am I even going to be able to pull this off...?",
                "line": 294
            },
            {
                "text": "I've done loads and loads of training to be able to move fast. However, not once have I ever trained to be able to move fast without building up wind pressure.",
                "line": 295
            },
            {
                "text": "That said, the extra homework assignment would take me two whole days to finish.",
                "line": 296
            },
            {
                "text": "\"...No guts, no glory.\"",
                "line": 297
            },
            {
                "text": "To give up now would be to sully my name as a background character.",
                "line": 298
            },
            {
                "text": "I begin molding magic so fine that no one will notice it. All right, baby. First time's the charm.",
                "line": 299
            },
            {
                "text": "Right as I do...",
                "line": 300
            },
            {
                "text": "\"Hey, you there! What do you think you're doing?!\"",
                "line": 301
            },
            {
                "text": "\"?!\"",
                "line": 302
            },
            {
                "text": "I got spotted?!",
                "line": 303
            },
            {
                "text": "I freeze in shock, and my magic dissipates.",
                "line": 304
            },
            {
                "text": "However, I'm not the one the teacher is looking at. He's looking at the seat beside mine.",
                "line": 305
            },
            {
                "text": "\"Skel Etal!! You're cheating!\"",
                "line": 306
            },
            {
                "text": "Skel trembles as the color drains from his face. \"I\u2014I\u2014IIIII wasn't looking at anything!! I swear I wasn't looking at Christina's answers!!\"",
                "line": 307
            },
            {
                "text": "\"Ah, so nice of you to admit exactly what you did. I've been watching you like a hawk, you know. Get out of my classroom. You just earned yourself two extra homework assignments.\"",
                "line": 308
            },
            {
                "text": "\"B-but that's not fair...\"",
                "line": 309
            },
            {
                "text": "Skel leaves the room looking like a dead man walking. Christina watches him go with an expression of absolute contempt.",
                "line": 310
            },
            {
                "text": "A-all right, Cid, pull yourself together.",
                "line": 311
            },
            {
                "text": "I mold my magic as fine as can be, and right as I do...",
                "line": 312
            },
            {
                "text": "\"Hey, you there! What do you think you're doing?!\"",
                "line": 313
            },
            {
                "text": "Again?!",
                "line": 314
            },
            {
                "text": "I look up in alarm, but the teacher still isn't staring at me. Once again, his eyes are on the seat right beside mine.",
                "line": 315
            },
            {
                "text": "\"Po Tato!! What're you looking under your desk for?!\"",
                "line": 316
            },
            {
                "text": "Po begins sweating buckets. \"I\u2014I\u2014IIIII wasn't looking at anything!! I swear I wasn't looking at the cheat sheet under my desk!!\"",
                "line": 317
            },
            {
                "text": "\"Well, at least you're being honest about it. Get out of my classroom. You just earned yourself three extra homework assignments.\"",
                "line": 318
            },
            {
                "text": "\"Th-the number went up...\"",
                "line": 319
            },
            {
                "text": "Po leaves the room, staggering unsteadily as he goes.",
                "line": 320
            },
            {
                "text": "\"The next person I catch cheating is going home with four extra homework assignments.\" The teacher's eyes gleam.",
                "line": 321
            },
            {
                "text": "Dammit, Skel and Po, why'd you have to go and make such a mess of things? Thanks to those two bozos, the risk level just skyrocketed, and our teacher is on high alert.",
                "line": 322
            },
            {
                "text": "But that's not gonna stop me.",
                "line": 323
            },
            {
                "text": "\"Surrender isn't an option.\"",
                "line": 324
            },
            {
                "text": "I mold my magic.",
                "line": 325
            },
            {
                "text": "The flow of time seems to slow.",
                "line": 326
            },
            {
                "text": "Right here, right now, I just might be able to do it. This is a mythical Hidden Normie Technique designed specifically for cheating\u2014and it's my forty-ninth one!!",
                "line": 327
            },
            {
                "text": "\"Behold...\"",
                "line": 328
            },
            {
                "text": "Then, right as I focus every nerve in my body, I hear it. There's a loud thud as something comes falling out of the air.",
                "line": 329
            },
            {
                "text": "\".........\"",
                "line": 330
            },
            {
                "text": "When things happen that make zero logical sense, people tend to find themselves at a loss for words. I have no idea why Claire just fell on top of our teacher, but every person in the class is now staring at her in dumbfounded silence. Even I had no idea she was planning on going this far. To think that this is what she was foreshadowing when she decided to go missing...",
                "line": 331
            },
            {
                "text": "\"What do you mean, you can't let them \u2018have' me?!\" Claire tramples our teacher underfoot as she rises to her feet and shouts at the empty air. \"Answer me! I have special powers, and I'm not\u2014!\"",
                "line": 332
            },
            {
                "text": "At that point, she shoots a quick glance around the classroom. Her expression stiffens.",
                "line": 333
            },
            {
                "text": "\"You're in the wrong room, Claire Kagenou,\" our squished teacher chokes through the pain.",
                "line": 334
            },
            {
                "text": "\"Ah, well, that's, uh... Heh.\" Claire turns bright red. I can't tell if she's smiling or if her face is just twitching. \"I-I'll be going now! So sorry about that!!\"",
                "line": 335
            },
            {
                "text": "With a brisk bow, she does a quick one-eighty and scurries away.",
                "line": 336
            },
            {
                "text": "Looks like someone's getting in trouble later.",
                "line": 337
            },
            {
                "text": "She's falling out of the sky, she's talking to the empty air, she's declaring that she's got special powers... Her symptoms are progressing faster than I ever expected.",
                "line": 338
            },
            {
                "text": "Just this once, though, they saved my hide.",
                "line": 339
            },
            {
                "text": "\"Thanks for distracting everyone, Sis.\"",
                "line": 340
            },
            {
                "text": "With a grin, I fill in the empty spots on my answer sheet.",
                "line": 341
            },
            {
                "text": "Claire emerges from the guidance counselor's office and lets out a small sigh. \"Well, that was dreadful.\"",
                "line": 342
            },
            {
                "text": "The head teacher just scolded her for nearly an hour, and the light streaming into the hallway is taking on hues of red.",
                "line": 343
            },
            {
                "text": "Off in the distance, she can hear students chatting. Her footsteps echo through the empty corridor.",
                "line": 344
            },
            {
                "text": "\"Of all the classes it could have been, why did it have to be Cid's? I have no idea how I'm supposed to look him in the eye tomorrow.\" She blushes, then turns to the empty air. \"And it's all your fault.\"",
                "line": 345
            },
            {
                "text": "\"Wow, rude. That was in no way my fault.\"",
                "line": 346
            },
            {
                "text": "\"Then explain to me what did happen. Nobody's going to believe me if I tell them I got attacked by some weird people in some sort of weird space and ended up falling on top of a teacher. I thought they were about to refer me to a shrink.\"",
                "line": 347
            },
            {
                "text": "\"You're better off not knowing. Once you do, there's no going back.\"",
                "line": 348
            },
            {
                "text": "\"Puh-lease. I can't stay in the dark, not after what just happened. I'm pissed.\"",
                "line": 349
            },
            {
                "text": "\"...No. I can't put you in harm's way.\"",
                "line": 350
            },
            {
                "text": "\"I'd say I'm smack-dab in harm's way already. Besides, if you don't tell me what's going on, I'm just going to figure it out myself. I refuse to let things end like this.\"",
                "line": 351
            },
            {
                "text": "\"You're wasting your time.\"",
                "line": 352
            },
            {
                "text": "\"We'll see about that...Aurora the Calamity Witch.\"",
                "line": 353
            },
            {
                "text": "\"Where...where did you learn that name...?\"",
                "line": 354
            },
            {
                "text": "\"I did my research, that's what I\u2014\"",
                "line": 355
            },
            {
                "text": "Claire freezes in place mid-sentence. She thought the hallway was empty, but at some point, a silver-haired girl showed up.",
                "line": 356
            },
            {
                "text": "\"I do apologize for interrupting your soliloquy, Claire Kagenou. There's something I want to talk to you about.\"",
                "line": 357
            },
            {
                "text": "The girl peers at Claire, her red gaze burning with interest. It's Alexia Midgar, one of the Midgar Kingdom princesses.",
                "line": 358
            },
            {
                "text": "Claire's expression hardens. \"I wasn't just talking to myself.\"",
                "line": 359
            },
            {
                "text": "Alexia puts on a big show of scanning the hallway. \"Well, I certainly don't see anyone else around.\"",
                "line": 360
            },
            {
                "text": "Claire's expression hardens further. \"You and I aren't friends, Princess. I have nothing to talk to you about.\"",
                "line": 361
            },
            {
                "text": "\"I can tell you're no fan of mine. Which is odd, considering that as far as I know, we've never talked before.\"",
                "line": 362
            },
            {
                "text": "\"And we're not going to, you royal wench, not after the way you led Cid on.\"",
                "line": 363
            },
            {
                "text": "Claire's eyes are full of murder and steel. Alexia can practically feel Claire's gaze burning a hole in her. \"What?\" she cries. Her gaze darts around, and there's a hint of panic on her face. \"There's a whole lot of context you're missing! At no point was I trying to lead him on!\"",
                "line": 364
            },
            {
                "text": "\"Oh, really now? You can barely even say it with a straight face. I smell a liar.\"",
                "line": 365
            },
            {
                "text": "\"Excuse me! Rude! I'm not a liar! And also, what's with the attitude?! You're his sister, so I figured I could at least try to pretend to be nice to you.\"",
                "line": 366
            },
            {
                "text": "\"And there it is. A liar and a fake, to boot.\"",
                "line": 367
            },
            {
                "text": "Claire practically spits out the words, and Alexia clicks her tongue. \"You really are siblings, aren't you? You're exactly alike, the way neither of you has a respectful bone in your body.\"",
                "line": 368
            },
            {
                "text": "\"Wait, you think Cid and I are alike?\"",
                "line": 369
            },
            {
                "text": "\"Th-that's what I said, yeah. At least when it comes to disrespect...\"",
                "line": 370
            },
            {
                "text": "\"Ohhh, so you think we're alike... Tee-hee-hee.\" Claire's entire face lights up.",
                "line": 371
            },
            {
                "text": "\"What does that matter, though?\"",
                "line": 372
            },
            {
                "text": "\"Wow, I guess you do have an eye for people!\"",
                "line": 373
            },
            {
                "text": "\"Uh...\"",
                "line": 374
            },
            {
                "text": "Claire swings her arm over Alexia's shoulder, and Alexia has approximately zero idea what to make of it.",
                "line": 375
            },
            {
                "text": "\"So you said you had something you wanted to talk about?\"",
                "line": 376
            },
            {
                "text": "\"I mean... I did...\"",
                "line": 377
            },
            {
                "text": "\"You caught me at a busy moment, but oh well. I guess I can make some time for you.\"",
                "line": 378
            },
            {
                "text": "\"...Thanks?\"",
                "line": 379
            },
            {
                "text": "\"By the way, what other ways would you say Cid and I are alike?\"",
                "line": 380
            },
            {
                "text": "\"I\u2014I don't know, your hair color?\"",
                "line": 381
            },
            {
                "text": "With Claire's arm still over Alexia's shoulder, the two of them make their way down the twilit hallway.",
                "line": 382
            },
            {
                "text": "\"What is this place?\" Claire asks.",
                "line": 383
            },
            {
                "text": "\"A special parlor only accessible to the elite,\" Alexia replies as she turns on the extravagant room's lights.",
                "line": 384
            },
            {
                "text": "\"Then what are we doing here?\"",
                "line": 385
            },
            {
                "text": "\"I am a princess, you know.\"",
                "line": 386
            },
            {
                "text": "\"Oh yeah, that's right.\"",
                "line": 387
            },
            {
                "text": "Did you seriously forget? Alexia wonders. \"Go ahead and sit down.\"",
                "line": 388
            },
            {
                "text": "\"Ooh, this is comfy. And the embroidery is so pretty. What a colossal waste of our taxes.\"",
                "line": 389
            },
            {
                "text": "\"Say, do people ever tell you that you don't know when to shut up?\"",
                "line": 390
            },
            {
                "text": "\"Not that I can recall.\"",
                "line": 391
            },
            {
                "text": "Alexia and Claire sit on a pair of big fluffy sofas as they converse. The two of them are the only ones in the room.",
                "line": 392
            },
            {
                "text": "Alexia takes another look at the girl sitting across from her.",
                "line": 393
            },
            {
                "text": "Claire has black hair and red eyes, and she excels both at her schoolwork and as a dark knight. Her sudden meteoric rise in strength has been the talk of the town, and she's already informally been offered a spot in the Knight Order.",
                "line": 394
            },
            {
                "text": "The way Alexia sees it, Claire and her brother don't have a single thing in common\u2014not a single thing, aside from how disrespectful they are.",
                "line": 395
            },
            {
                "text": "\"Why are you giving me that serious look?\" Claire asks.",
                "line": 396
            },
            {
                "text": "\"Because we need to have a serious conversation.\"",
                "line": 397
            },
            {
                "text": "\"That's for sure. I won't let you have Cid.\"",
                "line": 398
            },
            {
                "text": "\"I\u2014I don't want him!\" Alexia's voice comes out shrill, which she covers with an affected cough. \"This is about you falling on that teacher in the middle of class.\"",
                "line": 399
            },
            {
                "text": "\"What, and you want to lecture me?\"",
                "line": 400
            },
            {
                "text": "\"I just want you to tell me what happened.\"",
                "line": 401
            },
            {
                "text": "\"I used my magic to jump in from outside the classroom and attack him,\" Claire replies in a brisk monotone. \"I guess I went a little bit crazy from stress. I'm not sure I totally follow, but that's definitely for sure what happened. I regret my actions, and I won't do it again.\"",
                "line": 402
            },
            {
                "text": "\"I'm not asking about your cover story.\"",
                "line": 403
            },
            {
                "text": "\"Well, that's exactly what I wrote in my apology letter.\"",
                "line": 404
            },
            {
                "text": "\"But it's not the truth, is it?\"",
                "line": 405
            },
            {
                "text": "\"What do you mean?\"",
                "line": 406
            },
            {
                "text": "\"I know you've been doing research on the demon Diablos.\"",
                "line": 407
            },
            {
                "text": "With that, Alexia takes the papers she retrieved from Claire's room and dumps them on the table.",
                "line": 408
            },
            {
                "text": "\"Wait, why do you have my\u2014?\"",
                "line": 409
            },
            {
                "text": "\"I can tell you're driven by more than just idle curiosity.\"",
                "line": 410
            },
            {
                "text": "Claire's expression turns serious. \"What do you want to know?\"",
                "line": 411
            },
            {
                "text": "\"Everything. I'm trying to figure out what's going on here at the academy.\"",
                "line": 412
            },
            {
                "text": "\"...And you won't make fun of me?\"",
                "line": 413
            },
            {
                "text": "\"I won't. Not a chance.\"",
                "line": 414
            },
            {
                "text": "\"You swear?\"",
                "line": 415
            },
            {
                "text": "\"I swear.\"",
                "line": 416
            },
            {
                "text": "Claire goes silent and shifts her gaze. Now she's staring intently at a spot of empty space. From the look in her eyes, it's almost as though someone's talking to her.",
                "line": 417
            },
            {
                "text": "Eventually, Claire shakes her head. \"Sorry, Aurora.\"",
                "line": 418
            },
            {
                "text": "\"Huh?\"",
                "line": 419
            },
            {
                "text": "Unsure what to make of the non sequitur, Alexia tilts her head in confusion. However, Claire isn't talking to her. She's still staring at nothing.",
                "line": 420
            },
            {
                "text": "\"I'm at my limit here. I don't understand what's going on, and it scares me...\" Claire's shoulders tremble a little.",
                "line": 421
            },
            {
                "text": "Then she turns back to Alexia and offers her a small smile. \"Sorry, you can go ahead and ignore all that.\"",
                "line": 422
            },
            {
                "text": "\"...Are you okay?\"",
                "line": 423
            },
            {
                "text": "\"Nothing's okay... And that's why I'm going to tell you everything. It's going to sound ridiculous, so it's up to you whether you want to believe it.\"",
                "line": 424
            },
            {
                "text": "\"I believe you.\" As Alexia sees it, there's no sign that Claire is trying to lie to her.",
                "line": 425
            },
            {
                "text": "\"Really? Then I had better start by introducing her.\"",
                "line": 426
            },
            {
                "text": "\"Who?\"",
                "line": 427
            },
            {
                "text": "\"Her name is Aurora. She's a spirit known as the Calamity Witch. Go ahead and say hello.\"",
                "line": 428
            },
            {
                "text": "Claire points over to the side. There's no one there. Alexia squints, then rubs her eyes, but still, nada.",
                "line": 429
            },
            {
                "text": "\"Now, I first met her back when...\"",
                "line": 430
            },
            {
                "text": "As soon as Claire launches into her explanation as if there's actually a person there with them, Alexia starts regretting having told Claire that she would believe her.",
                "line": 431
            },
            {
                "text": "\"...And now I'm here.\"",
                "line": 432
            },
            {
                "text": "By the time Claire finishes her story, the sun has already set.",
                "line": 433
            },
            {
                "text": "As the fireplace crackles away, Alexia takes a sip of her coffee. \"I think I get the picture.\"",
                "line": 434
            },
            {
                "text": "\"And you believe me?\"",
                "line": 435
            },
            {
                "text": "\"I do. It sounds absurd on its face, but it all lines up.\"",
                "line": 436
            },
            {
                "text": "\"It does?\"",
                "line": 437
            },
            {
                "text": "\"That's right\u2014it's all connected. The Shadow Garden, the Cult of Diablos, the weird things happening at the school, everything. The part about the spirit is still a little hard to believe, but still.\"",
                "line": 438
            },
            {
                "text": "\"A-Aurora exists! She does! She's sitting right there and laughing as we speak!\"",
                "line": 439
            },
            {
                "text": "Alexia steals a glance at the empty sofa. \"Let's set the whole spirit issue aside for the moment.\"",
                "line": 440
            },
            {
                "text": "\"I'm telling you, she's real!\"",
                "line": 441
            },
            {
                "text": "\"However, I do recognize the name. Aurora the Calamity Witch... A member of the Cult's leadership mentioned her.\"",
                "line": 442
            },
            {
                "text": "\"Is there some connection between Aurora and the Cult?\"",
                "line": 443
            },
            {
                "text": "\"I don't know. I tried researching it myself, but there aren't many surviving documents about the Calamity Witch. The only thing I was able to learn is that she once caused a huge disaster.\"",
                "line": 444
            },
            {
                "text": "Claire turns to the spirit. \"You caused a huge disaster, Aurora?\"",
                "line": 445
            },
            {
                "text": "It really does look like she's talking to someone.",
                "line": 446
            },
            {
                "text": "\"Ah, so that's what happened. Aurora says that she's the one who wiped out the Pig Orcs. She says she just couldn't stand the look of them.\"",
                "line": 447
            },
            {
                "text": "\"...I don't think that's the disaster they were talking about.\"",
                "line": 448
            },
            {
                "text": "\"It isn't? ...Oh, I see, I see. Aurora says she's also the one who doodled on the holy shield Aegis. Apparently, she didn't know how famous it was when she was doing it.\"",
                "line": 449
            },
            {
                "text": "\"That's definitely not the right disaster! Besides, Aegis went missing, and no one's been able to find it.\"",
                "line": 450
            },
            {
                "text": "\"It's not that, either? In that case\u2014\"",
                "line": 451
            },
            {
                "text": "\"Let's table that for now, shall we? It's high time we moved this discussion along!\"",
                "line": 452
            },
            {
                "text": "\"But Aurora says she has more stuff she wants to brag about.\"",
                "line": 453
            },
            {
                "text": "\"I don't care! We need to get back on topic!\" Alexia clears her throat. \"The first thing we ought to figure out is what exactly is happening here at the academy.\"",
                "line": 454
            },
            {
                "text": "Claire's expression sharpens. \"Agreed.\"",
                "line": 455
            },
            {
                "text": "\"Now, about that strange space you got trapped in, I went through something not unlike that myself once. It was at a place called the Sanctuary...\"",
                "line": 456
            },
            {
                "text": "Alexia goes on to explain what happened back at the Sanctuary.",
                "line": 457
            },
            {
                "text": "\"That does sound similar,\" Claire says.",
                "line": 458
            },
            {
                "text": "\"So there's a phenomenon resembling the Sanctuary that's happening here on campus. Then we've got the Wicked Smile guy you fought. Odds are, he was working for the Cult of Diablos.\"",
                "line": 459
            },
            {
                "text": "\"That was Viscount Jean, captain of the third Knight Order's fourth company.\"",
                "line": 460
            },
            {
                "text": "\"I was afraid this might be the case, but it looks like the Cult has personnel in the Knight Order. We can't trust them.\"",
                "line": 461
            },
            {
                "text": "\"What about Princess Iris? Surely we can trust the Crimson Order.\"",
                "line": 462
            },
            {
                "text": "\"My sister is... She's busy right now. Either way, it's clear that the Cult is kidnapping students to carry out some diabolical plan.\"",
                "line": 463
            },
            {
                "text": "\"What sort of plan, though?\"",
                "line": 464
            },
            {
                "text": "\"There's a space similar to the Sanctuary here at Midgar Academy, so it wouldn't surprise me if there was a piece of the demon Diablos sealed here like there was there.\"",
                "line": 465
            },
            {
                "text": "\"Now that you mention it, I've heard rumors about the right arm of Diablos being locked away somewhere in the academy... But those are just rumors, right?\"",
                "line": 466
            },
            {
                "text": "Alexia shakes her head. \"I wouldn't be so sure about that.\"",
                "line": 467
            },
            {
                "text": "\"Wait, seriously?\"",
                "line": 468
            },
            {
                "text": "\"I don't have any solid evidence, but... There's a forbidden book in the school library that details the academy's history. If someone sealed Diablos's right arm here, then it would have to be recorded in that book.\"",
                "line": 469
            },
            {
                "text": "\"Can you use your royal authority to get us into the forbidden book section?\"",
                "line": 470
            },
            {
                "text": "\"Cutting through all the red tape would take ages.\"",
                "line": 471
            },
            {
                "text": "\"What do we do, then?\"",
                "line": 472
            },
            {
                "text": "Alexia grins. \"We sneak in, that's what.\"",
                "line": 473
            },
            {
                "text": "\"We'll get in big trouble if they catch us.\"",
                "line": 474
            },
            {
                "text": "\"So let's not get caught. We can't trust the Knight Order, we can't trust the teachers... It's up to us to crack the case.\"",
                "line": 475
            },
            {
                "text": "\"If we get found out, I'm pretty sure I can kiss my informal offer good-bye.\"",
                "line": 476
            },
            {
                "text": "\"I'll just hire you myself. If there's one thing I'm good at, it's throwing coins at people.\"",
                "line": 477
            },
            {
                "text": "\"Do you really need to throw them?\"",
                "line": 478
            },
            {
                "text": "\"It's important to let people know who's in charge.\"",
                "line": 479
            },
            {
                "text": "\"...Uh-huh.\"",
                "line": 480
            },
            {
                "text": "\"Anyway, we're doing this. The Cult of Diablos and the Shadow Garden are making moves and mobilizing as we speak. If things go on like this, the victim count is just going to rise.\"",
                "line": 481
            },
            {
                "text": "After listening to Alexia's speech, Claire hangs her head and sinks into thought. Then she slowly makes her suggestion. \"What if we just left everything to the Shadow Garden?\"",
                "line": 482
            },
            {
                "text": "Alexia is so caught off guard that she's momentarily struck speechless. \"...There's too much we don't know about them. We don't even know why it is they're fighting the Cult. I'm not willing to put that much unconditional faith in them.\"",
                "line": 483
            },
            {
                "text": "\"Are you sure? From what I gather, they saved me back in the Lawless City, too.\"",
                "line": 484
            },
            {
                "text": "\"Even so, the Shadow Garden is dangerous. When I imagine what would happen if they ever turned that massive strength of theirs against Midgar, it makes me think my sister might be right to be so worried about them.\"",
                "line": 485
            },
            {
                "text": "\"Ah, fair. I kind of get it, you know? After all, Shadow took down Elisabeth the Blood Queen on his own. If the legends about her strength are true, then that would mean Shadow really is in a league of his own.\"",
                "line": 486
            },
            {
                "text": "\"I have to believe that she was in a weakened state. If she really was as powerful as they say, then the Midgar Kingdom will have little choice but to tiptoe around Shadow for the foreseeable future.\"",
                "line": 487
            },
            {
                "text": "\"One wrong move, and he'd become a bigger threat than even the Cult, huh?\"",
                "line": 488
            },
            {
                "text": "\"Exactly. He has an entourage in the Shadow Garden called the Seven Shadows, and they're forces to be reckoned with. All of them are at least as strong as my sister, and some of them might very well be stronger. It's not just Shadow. The whole organization is a powerhouse.\"",
                "line": 489
            },
            {
                "text": "\"Now that you mention it, there was that therianthrope Zeta... I've never seen Aurora that scared of someone. She said she couldn't get a read on the limits of Zeta's strength.\"",
                "line": 490
            },
            {
                "text": "Alexia bites her lip. \"Look, I want to believe that they're on our side as much as you do, but...for now, I can't trust them. They're too dangerous.\"",
                "line": 491
            },
            {
                "text": "\"Yeah, you're right. I guess we just have to do whatever we can. You can count me in.\"",
                "line": 492
            },
            {
                "text": "\"I really appreciate that, Claire.\"",
                "line": 493
            },
            {
                "text": "Claire takes her own hand with the magic circle on it and clutches it in her other. \"If all we do is sit around, nothing's ever going to get done. Aurora, this magic circle, Shadow... There are so many questions we need answers to. Thank you for this, Alexia.\"",
                "line": 494
            },
            {
                "text": "\"Huh?\"",
                "line": 495
            },
            {
                "text": "Alexia looks at her in confusion. Those weren't the words she'd been expecting.",
                "line": 496
            },
            {
                "text": "\"For hearing me out and for really listening. It was scary, being on my own. I felt so powerless. The fact that you believed me really means a lot.\"",
                "line": 497
            },
            {
                "text": "\"...Anytime.\"",
                "line": 498
            },
            {
                "text": "\"And I get how you feel, too. Things seem so hopeless when you're on your own, don't they?\"",
                "line": 499
            },
            {
                "text": "\"I never said I\u2014\" Alexia's voice trembles.",
                "line": 500
            },
            {
                "text": "Her sister's been practicing her sword work like a woman possessed, and she never has time for Alexia these days.",
                "line": 501
            },
            {
                "text": "Rose deserted Alexia and went off solo.",
                "line": 502
            },
            {
                "text": "And Natsume...well, Alexia never trusted Natsume in the first place, so that one's whatever.",
                "line": 503
            },
            {
                "text": "\"Let's do this, you and me.\"",
                "line": 504
            },
            {
                "text": "Claire offers Alexia her hand, and Alexia shakes it without a moment's consideration. She can feel its warmth envelop her.",
                "line": 505
            },
            {
                "text": "\"Thank you, Claire.\"",
                "line": 506
            },
            {
                "text": "\"Of course. Besides, this'll make it easier to keep an eye on you,\" Claire says under her breath, then squeezes Alexia's hand so hard it cracks.",
                "line": 507
            },
            {
                "text": "\"Huh?\"",
                "line": 508
            },
            {
                "text": "\"If this is what it takes to protect him from your clutches, it's a small price to pay.\"",
                "line": 509
            },
            {
                "text": "\"C-Claire, that hurts.\"",
                "line": 510
            },
            {
                "text": "\"Oh gosh, I'm sooo sorry. I'm looking forward to working with you, Alexia.\"",
                "line": 511
            },
            {
                "text": "\"L-likewise to you, Claire.\"",
                "line": 512
            },
            {
                "text": "Alexia squeezes back just as hard, and the two of them smile.",
                "line": 513
            },
            {
                "text": "It's like they were cut from the same cloth, muses the spirit.",
                "line": 514
            },
            {
                "text": "Claire and Alexia stand before a room in the women's dorm.",
                "line": 515
            },
            {
                "text": "Alexia gives Claire a skeptical look. \"Hey, are you sure about this?\"",
                "line": 516
            },
            {
                "text": "\"Of course. Nina will come through, one hundred percent. Cid says he told her that he wanted to read a book from the forbidden section once, and the next day, she brought it right to him!\"",
                "line": 517
            },
            {
                "text": "\"Seriously? I've never heard a faker-sounding story in my life.\"",
                "line": 518
            },
            {
                "text": "\"No, no, it's cool. Cid would never lie to me.\"",
                "line": 519
            },
            {
                "text": "\"Of course he would. The guy's practically made of lies and avarice.\"",
                "line": 520
            },
            {
                "text": "\"Hey, don't go bad-mouthing my brother.\"",
                "line": 521
            },
            {
                "text": "\"It's true, though.\"",
                "line": 522
            },
            {
                "text": "Alexia ends the conversation by knocking on the door.",
                "line": 523
            },
            {
                "text": "\"Comin'!\" someone replies cheerily from inside. The door swings open. \"Heya, Claire. Glad you're safe. You had me worried there.\"",
                "line": 524
            },
            {
                "text": "It's a short girl with wine-red hair.",
                "line": 525
            },
            {
                "text": "\"Sorry about all the fuss,\" Claire tells her.",
                "line": 526
            },
            {
                "text": "\"Hey, as long as you're okay, then consider it water under the bridge. Make sure you give me a shout before you go missing next time, 'kay?\"",
                "line": 527
            },
            {
                "text": "\"I'll see what I can do.\"",
                "line": 528
            },
            {
                "text": "Nina shoots a glance over to the side at Alexia. \"Gotta say, though, you two sure make for an odd couple. Nice to meetcha, Princess Alexia.\"",
                "line": 529
            },
            {
                "text": "\"The pleasure is mine, Ms. Nina.\"",
                "line": 530
            },
            {
                "text": "\"Please, just \u2018Nina' is fine. When'd you two become friends?\"",
                "line": 531
            },
            {
                "text": "Alexia and Claire answer at pretty much the exact same time.",
                "line": 532
            },
            {
                "text": "\"Oh, we're not friends.\"",
                "line": 533
            },
            {
                "text": "\"More like enemies, if anything.\"",
                "line": 534
            },
            {
                "text": "\"Hey, whatever works for you,\" Nina replies, then invites them inside. \"Anyways, c'mon in. You look like a couple of gals with somethin' on your mind.\"",
                "line": 535
            },
            {
                "text": "Nina takes a seat on her bed and crosses her legs. Alexia and Claire sit down on a pair of modest chairs.",
                "line": 536
            },
            {
                "text": "\"Before we get to that, would you mind if I asked you a question?\" Alexia's gaze darts around uncomfortably.",
                "line": 537
            },
            {
                "text": "\"Go for it. I'm an open book.\"",
                "line": 538
            },
            {
                "text": "\"Why are you in your underwear?\"",
                "line": 539
            },
            {
                "text": "For reasons unknown, Nina is dressed exclusively in sexy lingerie. Despite her petite build, she has curves in all the right places. Even fellow women find themselves captivated by her figure.",
                "line": 540
            },
            {
                "text": "\"'Cause it's comfy.\"",
                "line": 541
            },
            {
                "text": "\"Do you always hang out dressed like that?\"",
                "line": 542
            },
            {
                "text": "\"Yeah. Mitsugoshi's underwear feels great, and the designs are awesome, too.\" Nina smiles, rolling up the sheer fabric to show it off.",
                "line": 543
            },
            {
                "text": "\"I swear...,\" Alexia mutters. \"I'm going to have to get those product numbers off you later.\"",
                "line": 544
            },
            {
                "text": "\"Yeah, no prob. I've got some other models of theirs that are great, too.\"",
                "line": 545
            },
            {
                "text": "\"Show me,\" Alexia replies instantly. Her expression is dead serious.",
                "line": 546
            },
            {
                "text": "\"And who exactly are you ever going to get to show them off to?\" Claire scoffs.",
                "line": 547
            },
            {
                "text": "Alexia glares at her. \"Shut up, you.\"",
                "line": 548
            },
            {
                "text": "\"Anyhow, we need to get back on topic.\"",
                "line": 549
            },
            {
                "text": "\"Oh yeah, right,\" Nina agrees. \"And I gotta hit the hay soon, so if you could give me the quick version, that'd be great. Late nights are murder on my beautiful skin.\"",
                "line": 550
            },
            {
                "text": "\"Sure, of course. We wanted to ask you about that forbidden book. How'd you steal it?\"",
                "line": 551
            },
            {
                "text": "Nina blinks blankly at Claire's question. \"What forbidden book? You lost me.\"",
                "line": 552
            },
            {
                "text": "\"You don't have to keep it a secret. Cid told me everything. You took a book out of the forbidden book section, right?\"",
                "line": 553
            },
            {
                "text": "\"The young'un said that? Well, I can assure you it didn't happen.\"",
                "line": 554
            },
            {
                "text": "\"I told you, you don't have to keep it a secret.\"",
                "line": 555
            },
            {
                "text": "\"And I told you, I'm not keeping nothing. I literally have no idea what you're talking about.\"",
                "line": 556
            },
            {
                "text": "\"Really?\"",
                "line": 557
            },
            {
                "text": "\"Really. I wouldn't know the first thing about sneaking into the forbidden book section.\"",
                "line": 558
            },
            {
                "text": "\"I did warn you,\" Alexia says mockingly. \"Fido lied to you.\"",
                "line": 559
            },
            {
                "text": "\"Sh-shut up! Nina, you're telling the truth? You're not hiding anything?\" Claire begins shaking Nina's shoulders so hard that the hooks on Nina's bra come undone.",
                "line": 560
            },
            {
                "text": "\"C-calm down, Claire! I promise, I'm not lying!\"",
                "line": 561
            },
            {
                "text": "\"Rrrrrrrrgh!\" Claire bites her lip and flushes scarlet. \"Dammit, Cid!! You lied to me again! You can't keep doing this to me!\"",
                "line": 562
            },
            {
                "text": "\"See, even you know he's a liar.\"",
                "line": 563
            },
            {
                "text": "\"Shut up, shut up, shut up! Forget this! I'm going home!\"",
                "line": 564
            },
            {
                "text": "\"All the way back to your parents' place?\"",
                "line": 565
            },
            {
                "text": "\"To my dorm room!\"",
                "line": 566
            },
            {
                "text": "Claire storms out of the room with her face bright red, and Alexia hurriedly chases her. \"W-wait a second, hold up! We still need to talk about our plan for tomorrow...\" Alexia turns back to Nina for a moment. \"Thanks for having us, by the way.\"",
                "line": 567
            },
            {
                "text": "\"I'm not sure I follow what just happened, but make sure you take it easy, 'kay?\"",
                "line": 568
            },
            {
                "text": "Alexia gives her an awkward smile, then closes the door behind her.",
                "line": 569
            },
            {
                "text": "The room is quiet now, and Nina rises to her feet and walks over to the window.",
                "line": 570
            },
            {
                "text": "\"All righty.\"",
                "line": 571
            },
            {
                "text": "Her unhooked bra slips to the floor, and she sees herself reflected on the window's surface. There's a grim scar on her left breast.",
                "line": 572
            },
            {
                "text": "\"Time to get moving.\"",
                "line": 573
            },
            {
                "text": "She runs a slender fingertip over the scar.",
                "line": 574
            },
            {
                "text": "Then her cold gaze drifts out toward the deep night's boundless dark.",
                "line": 575
            },
            {
                "text": "I love going for late-night walks.",
                "line": 576
            },
            {
                "text": "The world is quiet in the moonlight, and it helps remind me about what really matters. I haven't been losing my way much lately, but back in my previous life, the gap between reality and what I needed to accomplish to be an eminence in shadow caused my resolve to waver sometimes.",
                "line": 577
            },
            {
                "text": "My go-to method for dealing with stuff like that was training so hard I couldn't think anymore, but going for late-night walks and doing some self-reflection was a fine option, too. When I looked up at the moon when everything around me was still, that alone was enough to make me feel like a shadowbroker. There were occasionally hoodlum bikers out, loudly revving their engines, but that was what I had my crowbar of justice for.",
                "line": 578
            },
            {
                "text": "Anyhow, long story short, I still sneak out of my dorm late at night to go for a little stroll every now and again. Recently, I've gotten hooked on heading up to the school roof and looking down at the night-shrouded world from atop it.",
                "line": 579
            },
            {
                "text": "\"Heh-heh-heh...\"",
                "line": 580
            },
            {
                "text": "All I have to do is let out a fearless laugh, and I'm the coolest guy in the world.",
                "line": 581
            },
            {
                "text": "The moonlight is especially beautiful tonight. I already washed the spit off the red jewel Delta found, and I take it out and hold it up to the moon. The wondrously deep color makes it unbelievably pretty.",
                "line": 582
            },
            {
                "text": "\"Looks like there's some sorta magic stored in it. I wonder how much I could sell it for?\"",
                "line": 583
            },
            {
                "text": "Dang, Delta, you did good.",
                "line": 584
            },
            {
                "text": "I can't wait till I get a chance to put it up for auction at Mitsugoshi. If it sells for enough, I'll finally be able to buy the Eminence in Shadow Set from my personal wish list. I'm gonna get a black lion-mane scarf, I'm gonna get a dark crystal table set, I'm gonna get a\u2014",
                "line": 585
            },
            {
                "text": "\"Huh?\"",
                "line": 586
            },
            {
                "text": "When I glance to the side, I see a middle-aged dude in a black robe over on the corner of the roof.",
                "line": 587
            },
            {
                "text": "That's an odd place to see a dude.",
                "line": 588
            },
            {
                "text": "Wait\u2014do my eyes deceive me? Now that I'm looking, is the robe he's wearing made of darkspider silk?! That sheen, that deep black hue... It's gotta be. No cheapo robe could ever boast that raw material quality.",
                "line": 589
            },
            {
                "text": "\"...You've got good taste.\"",
                "line": 590
            },
            {
                "text": "I take a moment to observe the fashionable dude. His hair is silver and goes all the way down to his waist, and his features are chiseled. His eyes are shaped like an eagle's, which is kinda badass, too.",
                "line": 591
            },
            {
                "text": "I strain my ears and catch him muttering something:",
                "line": 592
            },
            {
                "text": "\"It was supposed to have appeared by now. I checked the blueprints...\"",
                "line": 593
            },
            {
                "text": "Ah, he must be a burglar. That's the only kind of guy I can think of who would use a blueprint to sneak into a school. It does make sense; I hear the school's got all sorts of valuable artifacts.",
                "line": 594
            },
            {
                "text": "What we're dealing with here is a fancy thief.",
                "line": 595
            },
            {
                "text": "Unaware that I'm watching him, the dude says something that sounds pregnant with significance. \"They must have interceded. But that just means I have some obstructions to remove...nothing more.\"",
                "line": 596
            },
            {
                "text": "Would you look at that? This guy even knows how to set the scene.",
                "line": 597
            },
            {
                "text": "Then the fancy thief turns around.",
                "line": 598
            },
            {
                "text": "Our eyes meet.",
                "line": 599
            },
            {
                "text": "I'm concealing my presence, but I'm not making any effort to hide my actual body. Naturally, this means he spots me.",
                "line": 600
            },
            {
                "text": "\"What?! How long have you been\u2014?\"",
                "line": 601
            },
            {
                "text": "\"Hey, don't mind me. I was just going for a walk.\" I have no intention of obstructing this guy's plans, so I try to impress on him how harmless I am.",
                "line": 602
            },
            {
                "text": "\"You don't look like you're from the Knight Order. Who are you?\"",
                "line": 603
            },
            {
                "text": "\"Just an ordinary old student.\"",
                "line": 604
            },
            {
                "text": "\"A student, huh...? Given how you're carrying yourself, I guess you're telling the truth. I can't believe a mere student spotted me on my first day here.\"",
                "line": 605
            },
            {
                "text": "\"Look, man, happens to the best of us. Anyhow, see you later.\"",
                "line": 606
            },
            {
                "text": "\"Hold it. Now that you've seen me, I have to eliminate you.\"",
                "line": 607
            },
            {
                "text": "\"Don't worry, I'm not gonna rat you out or anything. It's no skin off my nose if a burglar happens to break into the aca\u2014\"",
                "line": 608
            },
            {
                "text": "However, the fancy thief doesn't seem to be in a listening mood. \"Today just wasn't your lucky day, kid.\"",
                "line": 609
            },
            {
                "text": "\"Whoa, careful there.\"",
                "line": 610
            },
            {
                "text": "I sway my body to avoid the twin sickles cleaving at my throat.",
                "line": 611
            },
            {
                "text": "This guy's pretty fast. Those are some fancy moves for a burglar. I guess he really is a fancy thief.",
                "line": 612
            },
            {
                "text": "\"Wh\u2014?! You dodged it?!\" He backs off out of caution. His voice lowers to a growl. \"You... You're not just any old student, are you?\"",
                "line": 613
            },
            {
                "text": "\"Seriously, I'm not gonna rat you out.\"",
                "line": 614
            },
            {
                "text": "\"Considering that trick you just pulled, you must be with the Knight Order special forces. That's the first time anyone's been able to pull the wool over my eyes like that.\"",
                "line": 615
            },
            {
                "text": "\"I really am just an ordinary student.\"",
                "line": 616
            },
            {
                "text": "\"You think I'd believe that? You're probably the one who killed the Wicked Smile. It was unlike him to call for aid. That's why they sent in me, the Dark Spider.\"",
                "line": 617
            },
            {
                "text": "\"Yeah, I think you've got the wrong guy.\"",
                "line": 618
            },
            {
                "text": "\"But this is where your luck runs out.\"",
                "line": 619
            },
            {
                "text": "\"My what?\"",
                "line": 620
            },
            {
                "text": "\"The thing is...I'm stronger than the Wicked Smile.\"",
                "line": 621
            },
            {
                "text": "The fancy thief slashes my arm with his sickle.",
                "line": 622
            },
            {
                "text": "Clang!!",
                "line": 623
            },
            {
                "text": "A heavy noise echoes out from my arm, and sparks go flying.",
                "line": 624
            },
            {
                "text": "\"I\u2014I can't cut you?!\"",
                "line": 625
            },
            {
                "text": "I reshape my uniform.",
                "line": 626
            },
            {
                "text": "Black slime flows down my arm, covering it up and coalescing into a talon where my hand is.",
                "line": 627
            },
            {
                "text": "\"That black weapon... You're with the Shadow Garden...\"",
                "line": 628
            },
            {
                "text": "The fancy thief makes a desperate attempt to back off. However, nothing he does can change what's about to happen.",
                "line": 629
            },
            {
                "text": "\"So fast\u2014\"",
                "line": 630
            },
            {
                "text": "I close the gap and gouge out his heart with my talon.",
                "line": 631
            },
            {
                "text": "\"Impossible... Th-that power...\"",
                "line": 632
            },
            {
                "text": "\"Huh?\"",
                "line": 633
            },
            {
                "text": "He clutches my talon with both hands and grimaces. \"It can't be... No, this is where you are... So you disguise yourself as a student. Forgive me... Lord... Fen...rir...\"",
                "line": 634
            },
            {
                "text": "With that, he hacks up a huge mouthful of blood.",
                "line": 635
            },
            {
                "text": "\"Aw man. There I go, murdering people again.\"",
                "line": 636
            },
            {
                "text": "I steal his darkspider silk robe, taking great care not to let any blood get on it, then kick him off the roof.",
                "line": 637
            },
            {
                "text": "\"Ah, shit.\"",
                "line": 638
            },
            {
                "text": "When I look down, I see that the fancy thief has fallen to his death.",
                "line": 639
            },
            {
                "text": "That's all well and good, but there's a bronze statue right where he landed, and he had the unique misfortune of getting impaled on the sword the statue is holding up. It makes it look like he's been brutally executed.",
                "line": 640
            },
            {
                "text": "What should I do about the body?",
                "line": 641
            },
            {
                "text": "\"...Eh, I guess I'll just leave it.\"",
                "line": 642
            },
            {
                "text": "There's blood splattered everywhere, and cleaning it up sounds like a royal hassle. I can just write it off as a special gift from me to all the students enjoying their ordinary school lives.",
                "line": 643
            },
            {
                "text": "\"Hmm?\"",
                "line": 644
            },
            {
                "text": "All of a sudden, I notice an odd white fog drifting by. I'm pretty sure there wasn't any fog there a minute ago.",
                "line": 645
            },
            {
                "text": "\"What is that stuff?\"",
                "line": 646
            },
            {
                "text": "I blink, and it vanishes without a trace.",
                "line": 647
            },
            {
                "text": "\"Huh. Did I just imagine that? I don't think so...\"",
                "line": 648
            },
            {
                "text": "There's no way that could've been a weird trick of the light. It was only there for a moment, but I definitely saw some fog there.",
                "line": 649
            },
            {
                "text": "\"I guess it's just one of life's many mysteries.\"",
                "line": 650
            },
            {
                "text": "It's not like seeing some white fog is gonna change my life in any meaningful capacity, and if I wanna see more, I can always just head up into the mountains.",
                "line": 651
            },
            {
                "text": "More importantly, I gotta go hang my new darkspider silk robe on my wall and catch some Zs.",
                "line": 652
            },
            {
                "text": "The area is enshrouded in a gloomy white fog and illuminated by a quartet of red cylinders of light.",
                "line": 653
            },
            {
                "text": "\"What a low compatibility rate... The fault must lie with the base specimens. This is what happens when we can't get our hands on any possessed.\"",
                "line": 654
            },
            {
                "text": "There's a skinny man standing before the cylinders. He jots something down in the file he's holding, then sighs.",
                "line": 655
            },
            {
                "text": "\"Is there still no word from the specimen procurement team?\"",
                "line": 656
            },
            {
                "text": "It's hard to see, but there's something floating in the red light.",
                "line": 657
            },
            {
                "text": "Human beings.",
                "line": 658
            },
            {
                "text": "There are four people, each of them floating in one of the cylinders and hooked up to a series of tubes. The tubes expand and contract like living creatures as they suck something out of their victims. Inside, all the life has drained from the people's faces.",
                "line": 659
            },
            {
                "text": "\"We're running out of time. At this rate...\"",
                "line": 660
            },
            {
                "text": "The man strides restlessly from one cylinder to another.",
                "line": 661
            },
            {
                "text": "Then there are footsteps audible from the fog.",
                "line": 662
            },
            {
                "text": "\"How are we looking, Slender Willow?\"",
                "line": 663
            },
            {
                "text": "The voice's owner stops before reaching the fog's edge.",
                "line": 664
            },
            {
                "text": "The thin man, Slender Willow, hurriedly straightens his posture. \"We were able to retrieve four specimens from the student body that were compatible with the magic. We're absorbing their mana as we speak, and I believe we'll have the seal down sooner or later...\"",
                "line": 665
            },
            {
                "text": "\"\u2018Or later,' hmm? Did we have four specimens last time I was here?\"",
                "line": 666
            },
            {
                "text": "Slender Willow gulps. \"Well, the Shadow Garden's been running interference, you see...\"",
                "line": 667
            },
            {
                "text": "\"So I've heard.\"",
                "line": 668
            },
            {
                "text": "\"And by the looks of it, they sent someone with skills on par with their upper leadership.\"",
                "line": 669
            },
            {
                "text": "\"Oh? One of the Seven Shadows, perhaps?\" The man remains out of sight, but his interest seems piqued.",
                "line": 670
            },
            {
                "text": "\"In all likelihood, yes. It could be a Seven Shadow we've never been able to get a visual on before.\"",
                "line": 671
            },
            {
                "text": "\"That would make it Zeta, then.\"",
                "line": 672
            },
            {
                "text": "\"Yes, sir. She appears to specialize in fleeing.\"",
                "line": 673
            },
            {
                "text": "\"I don't have many reports of people having fought her. I always just assumed she couldn't hold her own in a fight.\"",
                "line": 674
            },
            {
                "text": "\"She killed the Wicked Smile, so if nothing else, she's more powerful than a Named Child.\"",
                "line": 675
            },
            {
                "text": "\"Faaascinating. Well, this should be interesting, then. By the way, I hear you called in a replacement for the Wicked Smile?\"",
                "line": 676
            },
            {
                "text": "\"I wanted to be on the safe side, so I brought in the Dark Spider, one of our most powerful Named Children. Now the plan will be able to\u2014\"",
                "line": 677
            },
            {
                "text": "\"The Dark Spider is dead.\"",
                "line": 678
            },
            {
                "text": "\"...What?\"",
                "line": 679
            },
            {
                "text": "\"He got skewered out in front of the school.\"",
                "line": 680
            },
            {
                "text": "\"Um... I'm afraid I don't\u2014\"",
                "line": 681
            },
            {
                "text": "\"It's true.\"",
                "line": 682
            },
            {
                "text": "\"I-it is? I mean, not that I would ever doubt you, sir, perish the thought. Was it Zeta who killed him, too?\"",
                "line": 683
            },
            {
                "text": "\"Hard to say. We don't know who the killer is, but what we do know is that the Shadow Garden works fast. I'm jealous. If only I had underlings that competent.\"",
                "line": 684
            },
            {
                "text": "\"Ha-ha-ha...\"",
                "line": 685
            },
            {
                "text": "\"How do you intend to get the plan back on track?\"",
                "line": 686
            },
            {
                "text": "\"I was going to ask headquarters to send in more reinforcements.\"",
                "line": 687
            },
            {
                "text": "\"The credit collapse dealt a heavy blow to our finances. We could hire more Second and Third Children, but I doubt this is the kind of problem we can solve by throwing fodder at it.\"",
                "line": 688
            },
            {
                "text": "\"B-but...\"",
                "line": 689
            },
            {
                "text": "\"The Shadow Garden already knows about these ruins. It's only a matter of time before they breach our defenses.\"",
                "line": 690
            },
            {
                "text": "\"Well, we've already located more viable specimens. There's Claire Kagenou, and if you give me the go-ahead, there's Alexia Midgar as well. If we got our hands on those two, I believe we would be able to bring the plan to fruition almost immediately.\"",
                "line": 691
            },
            {
                "text": "\"Alexia Midgar, hmm...?\"",
                "line": 692
            },
            {
                "text": "\"Is that problematic?\"",
                "line": 693
            },
            {
                "text": "\"...No, go ahead. Zenon's already laid hands on her. We can afford to get a little messy. After all, we of the Fenrir sect have controlled the Midgar Kingdom for a long, long time.\"",
                "line": 694
            },
            {
                "text": "\"I'll give my men the orders, then.\"",
                "line": 695
            },
            {
                "text": "\"No, Slender Willow, I want you to do it yourself.\"",
                "line": 696
            },
            {
                "text": "\"I beg your pardon...?\"",
                "line": 697
            },
            {
                "text": "\"You've gotten too attached to the mission site. You got yourself that role at the academy\u2014now it's time to put it to use.\"",
                "line": 698
            },
            {
                "text": "\"But, sir, my arm...\"",
                "line": 699
            },
            {
                "text": "A fierce wind blows across Slender Willow's neck, leaving a single thin wound in its wake.",
                "line": 700
            },
            {
                "text": "\"Use your position to make them let down their guard.\"",
                "line": 701
            },
            {
                "text": "\"...Yes, sir.\"",
                "line": 702
            },
            {
                "text": "\"I'm going to be busy adjusting the ruins. Get it done, and get it done right.\"",
                "line": 703
            },
            {
                "text": "\"Yes, sir.\" Slender Willow scurries away.",
                "line": 704
            },
            {
                "text": "\"Now, then.\"",
                "line": 705
            },
            {
                "text": "Something appears projected in the fog. It's an image of two girls. One is a golden-haired therianthrope, and the other is a strawberry blond human.",
                "line": 706
            },
            {
                "text": "Both of them belong to the Shadow Garden.",
                "line": 707
            },
            {
                "text": "\"So that's Zeta...as well as the vaunted Saint. To think that the Shadow Garden ended up taking her in. I'd be interested to see what a certain nation would do if they had that information.\"",
                "line": 708
            },
            {
                "text": "In the image, Zeta and Victoria advance through the white fog.",
                "line": 709
            },
            {
                "text": "Behind them, there's another figure as well.",
                "line": 710
            },
            {
                "text": "The third figure is wearing a different robe from the Shadow Garden's, and their face is hidden beneath a hood.",
                "line": 711
            },
            {
                "text": "\"They've already broken through our third layer of defenses. Depending on how things go with Slender Willow...,\" the man mutters as his presence vanishes.",
                "line": 712
            },
            {
                "text": "The image continues playing in the now-empty space.",
                "line": 713
            },
            {
                "text": "In it, a pair of golden eyes is fixed directly on the screen.",
                "line": 714
            }
        ],
        "c3": [
            {
                "text": "I wake up feeling great, and I've got the sweet darkspider silk robe I picked up last night to thank for it. I take a moment to appreciate the way it glitters in the morning light, then head over to the academy a bit earlier than usual.",
                "line": 1
            },
            {
                "text": "It's been a while since the last time I went to school solo.",
                "line": 2
            },
            {
                "text": "Skel and Po always like to get there at the last possible minute, but going to school early every now and then has its appeal, too. You get to see all sorts of new faces, and basking in the sunlight as you head through the gates feels great...",
                "line": 3
            },
            {
                "text": "\"...This sucks.\"",
                "line": 4
            },
            {
                "text": "\"What are you doing here, Fido?\"",
                "line": 5
            },
            {
                "text": "\"What are you doing here, Alexia?\"",
                "line": 6
            },
            {
                "text": "When I walk through the gates, I find Alexia standing there.",
                "line": 7
            },
            {
                "text": "\"You should be a little happier getting to see me first thing in the morning.\"",
                "line": 8
            },
            {
                "text": "\"Gosh, gee, I'm so happy.\"",
                "line": 9
            },
            {
                "text": "\"Well, I should hope so.\"",
                "line": 10
            },
            {
                "text": "\"Anyways, later.\"",
                "line": 11
            },
            {
                "text": "I powerwalk away, but Alexia quickly catches up. \"Hold on, don't you go running off on me.\"",
                "line": 12
            },
            {
                "text": "\"Why'd you follow me?\"",
                "line": 13
            },
            {
                "text": "\"When people run away from me, it makes me want to chase them.\"",
                "line": 14
            },
            {
                "text": "\"What are you, a beast of prey?\"",
                "line": 15
            },
            {
                "text": "\"Isn't it an honor getting to walk to school with me?\"",
                "line": 16
            },
            {
                "text": "\".........\"",
                "line": 17
            },
            {
                "text": "\"Why'd you go quiet?\"",
                "line": 18
            },
            {
                "text": "\"I was just thinking about how happy-go-lucky you are.\"",
                "line": 19
            },
            {
                "text": "\"Not nearly as much as you.\"",
                "line": 20
            },
            {
                "text": "We continue bantering as we walk, then we spot a crowd gathered in front of the school building.",
                "line": 21
            },
            {
                "text": "I can hear the students murmuring to each other.",
                "line": 22
            },
            {
                "text": "\"H-he's dead...!\"",
                "line": 23
            },
            {
                "text": "\"Who would do something so brutal?\"",
                "line": 24
            },
            {
                "text": "\"Hey, stay back! No one gets closer until the Knight Order gets here!\"",
                "line": 25
            },
            {
                "text": "Alexia and I exchange a glance.",
                "line": 26
            },
            {
                "text": "\"Sounds like they found a body!\" I tell her.",
                "line": 27
            },
            {
                "text": "\"We need to go see what's going on.\"",
                "line": 28
            },
            {
                "text": "We don't tend to get much excitement at the academy, and it's been forever since there was a cool surprise like this. It's no wonder my heart begins pounding with anticipation. I push through the crowd, eyes glimmering. I wonder whose corpse it is.",
                "line": 29
            },
            {
                "text": "When I get to the front, my disappointment is immeasurable.",
                "line": 30
            },
            {
                "text": "\"Oh, it's this guy.\"",
                "line": 31
            },
            {
                "text": "It's the dude I kicked off the roof and left behind last night. I completely forgot about him.",
                "line": 32
            },
            {
                "text": "\"That's horrible...,\" Alexia mutters. \"What kind of person goes and impales someone on a statue's sword? It's like a public execution.\"",
                "line": 33
            },
            {
                "text": "\"It was probably just an accident.\"",
                "line": 34
            },
            {
                "text": "\"Obviously it wasn't. When someone gets murdered like that, it means the killer did it for a reason.\"",
                "line": 35
            },
            {
                "text": "\"Uh, I guess...\"",
                "line": 36
            },
            {
                "text": "Alexia stares earnestly at the corpse. \"I wonder who he was. It doesn't look like he's affiliated with the school.\"",
                "line": 37
            },
            {
                "text": "\"I bet he was a burglar.\"",
                "line": 38
            },
            {
                "text": "\"He isn't with the Knight Order, either. He must have been some sort of intruder.\"",
                "line": 39
            },
            {
                "text": "\"Pretty sure he's a burglar.\"",
                "line": 40
            },
            {
                "text": "\"Could he be a member of the Cult? Either that, or...?\"",
                "line": 41
            },
            {
                "text": "\"I gotta say, he reeeeeally looks like a burglar.\"",
                "line": 42
            },
            {
                "text": "\"Be quiet, you. He's obviously not a burglar.\"",
                "line": 43
            },
            {
                "text": "\"Yes, ma'am.\"",
                "line": 44
            },
            {
                "text": "Eh, so it goes. The other students look like they're enjoying themselves, and if I think about it, that was basically my goal all along.",
                "line": 45
            },
            {
                "text": "\"That's so scary... Did the you-know-who org kill him?\"",
                "line": 46
            },
            {
                "text": "\"They still haven't found those missing students, right?\"",
                "line": 47
            },
            {
                "text": "\"And there was that thing with the magic yesterday, too. It feels like it's all connected.\"",
                "line": 48
            },
            {
                "text": "Aw, look at 'em. They're having the time of their lives.",
                "line": 49
            },
            {
                "text": "All that really happened was a cat and a dog getting into a fight and a burglar falling to his death. As the instigator for all that, it warms my heart seeing the other students get so excited about it.",
                "line": 50
            },
            {
                "text": "Oh man, if I waited until night and dressed up as Shadow, that'd give them even more to talk about.",
                "line": 51
            },
            {
                "text": "\"What's with the creepy smile?\" Alexia asks me.",
                "line": 52
            },
            {
                "text": "\"Huh? Oh, it's nothing.\"",
                "line": 53
            },
            {
                "text": "Her red eyes peer at me with suspicion.",
                "line": 54
            },
            {
                "text": "Then someone comes over and starts talking to us. \"Could I have a moment, you two?\"",
                "line": 55
            },
            {
                "text": "It's a hot dude with dark-green hair\u2014Isaac.",
                "line": 56
            },
            {
                "text": "\"Well, well, well, if it isn't Isaac. How dare you miss class yesterday?\"",
                "line": 57
            },
            {
                "text": "\"You're...Cid, right? I had some business I needed to attend to. Did something happen?\"",
                "line": 58
            },
            {
                "text": "\"We had a pop quiz.\"",
                "line": 59
            },
            {
                "text": "\"I see. And what else?\"",
                "line": 60
            },
            {
                "text": "\"Nah, that was about it.\"",
                "line": 61
            },
            {
                "text": "\"Then I'm not sure I see the problem. In any case, school has been canceled today.\"",
                "line": 62
            },
            {
                "text": "\"Oh, huh.\"",
                "line": 63
            },
            {
                "text": "\"This is a horrible tragedy. The academy and the Knight Order will be launching an investigation, so they've ordered everyone to stay away from the crime scene. The perpetrator behind this monstrous act might still be around, so be careful. Make sure you don't leave your dorms.\"",
                "line": 64
            },
            {
                "text": "\"Uh-huh, uh-huh.\"",
                "line": 65
            },
            {
                "text": "Alexia gives me a look. \"That means you, Fido. It's dangerous.\"",
                "line": 66
            },
            {
                "text": "\"Yeah, I got it\u2014\"",
                "line": 67
            },
            {
                "text": "All of a sudden, something snaps around my neck.",
                "line": 68
            },
            {
                "text": "Is this a collar?",
                "line": 69
            },
            {
                "text": "\"There we go. I finally caught you.\"",
                "line": 70
            },
            {
                "text": "I turn around and see Claire smiling from ear to ear.",
                "line": 71
            },
            {
                "text": "\"H-hey there, Sis. Long time no see.\"",
                "line": 72
            },
            {
                "text": "\"It really has, hasn't it? Since before winter break, as I recall.\"",
                "line": 73
            },
            {
                "text": "\"Th-that sounds about right.\"",
                "line": 74
            },
            {
                "text": "Shit. I let my guard down.",
                "line": 75
            },
            {
                "text": "I knew running into my sister would be a headache, so I've been actively trying to avoid it.",
                "line": 76
            },
            {
                "text": "\"U-um, Claire, that collar...,\" Alexia starts.",
                "line": 77
            },
            {
                "text": "\"What about it?\" Claire replies.",
                "line": 78
            },
            {
                "text": "\"That's your collar?\"",
                "line": 79
            },
            {
                "text": "\"Yep. I left it in my room, but for some reason, the Knight Order had it. You have no idea how hard it was to get it back.\"",
                "line": 80
            },
            {
                "text": "\"I\u2014I see. And what do you use it for?\"",
                "line": 81
            },
            {
                "text": "\"What do you mean? Isn't it obvious?\" Claire smiles as she gives it a rattly tug.",
                "line": 82
            },
            {
                "text": "\"I, uh, I guess it is... I suppose dogs do need collars, don't they?\"",
                "line": 83
            },
            {
                "text": "\"Exactly. See, you get it.\"",
                "line": 84
            },
            {
                "text": "\"Just for the record, I'm not a dog,\" I interject.",
                "line": 85
            },
            {
                "text": "\"Of course you are, Fido.\"",
                "line": 86
            },
            {
                "text": "\"I swear, Cid, you say the strangest things. Now, come along, Fido. Err, I mean, Cid.\"",
                "line": 87
            },
            {
                "text": "Claire pulls the chain and begins dragging me off in front of a crowd of onlookers.",
                "line": 88
            },
            {
                "text": "When in the world did she and Alexia start hitting it off?",
                "line": 89
            },
            {
                "text": "\"How dare you break your promise to me?\"",
                "line": 90
            },
            {
                "text": "\"Ah-ha-ha...\"",
                "line": 91
            },
            {
                "text": "My sister's dragged me to her room and is sitting mounted on top of me.",
                "line": 92
            },
            {
                "text": "\"And you even lied to me, too.\"",
                "line": 93
            },
            {
                "text": "\"When you say \u2018lied,' which lie would that be?\"",
                "line": 94
            },
            {
                "text": "\"Excuse me? Which lie?\"",
                "line": 95
            },
            {
                "text": "My neck lets out a loud creeeeeeak as she squeezes down on it.",
                "line": 96
            },
            {
                "text": "Looks like I just dug my own grave.",
                "line": 97
            },
            {
                "text": "The thing is, I can't even count how many times I've lied to her, and I have no idea which promise she's talking about.",
                "line": 98
            },
            {
                "text": "\"Th-that hurts, Sis...\"",
                "line": 99
            },
            {
                "text": "It doesn't actually, though.",
                "line": 100
            },
            {
                "text": "\"You're not suggesting you lied to me about other things, too, are you?\"",
                "line": 101
            },
            {
                "text": "\"I didn't, I promise.\"",
                "line": 102
            },
            {
                "text": "I totally did.",
                "line": 103
            },
            {
                "text": "\"For real?\"",
                "line": 104
            },
            {
                "text": "\"Yeah, for real.\"",
                "line": 105
            },
            {
                "text": "She brings her face in so close, our noses are nearly touching, and peers into my eyes. \"You have clear eyes. That's the sign of an honest heart. I guess you're telling the truth.\"",
                "line": 106
            },
            {
                "text": "You need to get your vision checked, Sis.",
                "line": 107
            },
            {
                "text": "\"You should know that when you lie to me, I always figure you out. Why did you even tell it in the first place?\"",
                "line": 108
            },
            {
                "text": "\"Ah, right. That lie. The one about the you-know-what.\"",
                "line": 109
            },
            {
                "text": "\"Yeah, the lie you told me about Nina.\"",
                "line": 110
            },
            {
                "text": "\"About Nina?\"",
                "line": 111
            },
            {
                "text": "Huh?",
                "line": 112
            },
            {
                "text": "I don't think I ever lied to her about Nina.",
                "line": 113
            },
            {
                "text": "\"You haven't forgotten, have you?\"",
                "line": 114
            },
            {
                "text": "\"Of course not. You're talking about the thing with Nina. Look, it's hard to explain in just a few words, but there were extenuating circumstances...\"",
                "line": 115
            },
            {
                "text": "\"Sigh... You probably said it without thinking because you wanted to impress me, didn't you?\"",
                "line": 116
            },
            {
                "text": "\"Yeah, that. Totally.\"",
                "line": 117
            },
            {
                "text": "\"I can see right through you, you know.\"",
                "line": 118
            },
            {
                "text": "\"I'm sorry I did it.\"",
                "line": 119
            },
            {
                "text": "\"Very well. I forgive you. But just this once.\"",
                "line": 120
            },
            {
                "text": "With that, the conversation comes to an end.",
                "line": 121
            },
            {
                "text": "Or rather, it should, but Claire keeps on staring at me.",
                "line": 122
            },
            {
                "text": "\"Sis, you're kinda heavy. Were you planning on getting off me at some\u2014? Hrk!\"",
                "line": 123
            },
            {
                "text": "M-my neck...",
                "line": 124
            },
            {
                "text": "\"I'm sorry, Cid, did you say something?\"",
                "line": 125
            },
            {
                "text": "\"I\u2014I was just saying how light you are, Sis, and how you're the prettiest person around!\"",
                "line": 126
            },
            {
                "text": "\"Well, that makes sense. It is true, after all.\"",
                "line": 127
            },
            {
                "text": "\"Yeah, so true.\"",
                "line": 128
            },
            {
                "text": "\"Hee-hee. You keep getting older, but you'll always just be Cid. I hope you never have to change. I...\"",
                "line": 129
            },
            {
                "text": "Dunno why, but Claire starts getting serious all of a sudden.",
                "line": 130
            },
            {
                "text": "\"Sis?\"",
                "line": 131
            },
            {
                "text": "\"I won't back down from any enemy, no matter how strong they are. Not if fighting them will let you stay just the way you are.\"",
                "line": 132
            },
            {
                "text": "\"Uh...\"",
                "line": 133
            },
            {
                "text": "Methinks a certain someone's symptoms might be getting worse.",
                "line": 134
            },
            {
                "text": "\"Look, Cid, I need you to listen close. Right now, the academy is in the wicked clutches of a powerful organization.\"",
                "line": 135
            },
            {
                "text": "\"Ah, so that's the scenario we're working with?\"",
                "line": 136
            },
            {
                "text": "\"Don't. If I tell you any details, you'll be in danger. Don't look at me like that. I can't say any more.\"",
                "line": 137
            },
            {
                "text": "\"Yeah, okay.\"",
                "line": 138
            },
            {
                "text": "\"I'm going to solve the academy's mysteries. I have a plan. It's dangerous, but...I'm doing this for you, so I know I can be strong.\"",
                "line": 139
            },
            {
                "text": "\"Yeah, good luck.\"",
                "line": 140
            },
            {
                "text": "\"Make sure you watch your back, Cid. You might get targeted for being my brother. But I'm going to do my best to take down the bad guys.\"",
                "line": 141
            },
            {
                "text": "\"Yeah, go get 'em.\"",
                "line": 142
            },
            {
                "text": "\"I'm sorry for dumping all this on you. And I'm sorry for not being able to tell you any of the important bits. But I'm doing this to protect you. I know this is selfish of me, but I want you to understand that.\"",
                "line": 143
            },
            {
                "text": "\"Yeah, I get it.\"",
                "line": 144
            },
            {
                "text": "\"And also...if I don't make it back... If I die\u2014\"",
                "line": 145
            },
            {
                "text": "Midway through her teary speech, she abruptly glares at a patch of empty air.",
                "line": 146
            },
            {
                "text": "\"I'm sorry, Aurora, but this is kind of emotional, so would you mind being quiet? Huh, what? I'm embarrassing myself, so I should just drop it? How exactly am I embarrassing\u2014?\"",
                "line": 147
            },
            {
                "text": "I look up with a deadpan expression on my face, and our eyes meet.",
                "line": 148
            },
            {
                "text": "\"Sis...\"",
                "line": 149
            },
            {
                "text": "\"O-oh, that was, um, um, um, nothing! Just talking to myself!\"",
                "line": 150
            },
            {
                "text": "\"Sis, I get it.\"",
                "line": 151
            },
            {
                "text": "\"Cid...you do? You get that there's an important reason I'm doing all this?\"",
                "line": 152
            },
            {
                "text": "\"Yeah, of course.\"",
                "line": 153
            },
            {
                "text": "You're a budding teenage edgelord.",
                "line": 154
            },
            {
                "text": "\"Thank you, Cid. I don't deserve a brother as good as you. And if...if I don't make it\u2014if I die...\" Big tears go rolling down her cheeks.",
                "line": 155
            },
            {
                "text": "\"You'll be fine, Sis. You definitely won't die.\"",
                "line": 156
            },
            {
                "text": "\"Oh, Cid!! I'll definitely make it back!! I definitely, definitely will!!\"",
                "line": 157
            },
            {
                "text": "\"Sounds good.\"",
                "line": 158
            },
            {
                "text": "She hugs me so tight, I'm afraid my spine will snap.",
                "line": 159
            },
            {
                "text": "I hope she grows out of this soon.",
                "line": 160
            },
            {
                "text": "I wait and wait, and finally, nighttime arrives.",
                "line": 161
            },
            {
                "text": "I sneak out of my dorm and stand silently atop the school roof like usual.",
                "line": 162
            },
            {
                "text": "The campus is on high alert, the dorm's exits are under tight surveillance, and the students are restless. Who knew that a little old night burglar would cause such a stir? It's thrilling, how fresh this all feels.",
                "line": 163
            },
            {
                "text": "Back in my old world, I was the kind of guy who got super excited every time a typhoon rolled in. Wind and rain buffeting the classroom, the sky getting dark in the middle of the day\u2014it doesn't get better than that. It always felt like something big was about to happen. It never did, but still.",
                "line": 164
            },
            {
                "text": "After going through all that myself, I feel like I have a responsibility to make something big actually happen this time. The students are sick and tired of their ordinary lives. They're desperate for something to shatter the monotony.",
                "line": 165
            },
            {
                "text": "\"How do I want to play this...?\"",
                "line": 166
            },
            {
                "text": "We've got four missing students, a cat-slash-dogfight, a burglar falling to his death from the roof... What would be a revolutionary way of tying it all together?",
                "line": 167
            },
            {
                "text": "\"I could make a huge magic circle, chant some sort of invocation... Nah, too plain. Hmm?\"",
                "line": 168
            },
            {
                "text": "At some point while I was busy brainstorming, my surroundings got covered in white fog.",
                "line": 169
            },
            {
                "text": "\"Hey, this happened yesterday, too... This is some weird weather we're having.\"",
                "line": 170
            },
            {
                "text": "Eventually, my vision goes completely white, and I find myself in a white space that seems to go on forever.",
                "line": 171
            },
            {
                "text": "\"Hmm? What's going on?\"",
                "line": 172
            },
            {
                "text": "This is some fantasy stuff. I've been teleported somewhere completely different. And if I remember correctly, the same thing happened back at the Sanctuary...",
                "line": 173
            },
            {
                "text": "\"Who are you?\" comes a voice.",
                "line": 174
            },
            {
                "text": "It's a girl standing in the white space. She's a little younger than me, and she's wearing an all-white dress. Her eyes are a gorgeous shade of violet.",
                "line": 175
            },
            {
                "text": "\"Hey there,\" I reply. \"Long time no see.\"",
                "line": 176
            },
            {
                "text": "Her age has changed, but I'd recognize her anywhere. It's Violet.",
                "line": 177
            },
            {
                "text": "\"Who are you? A new researcher?\" she asks.",
                "line": 178
            },
            {
                "text": "\"Wait, do you not remember me?\"",
                "line": 179
            },
            {
                "text": "\"I\u2014I don't know you.\"",
                "line": 180
            },
            {
                "text": "\"Oh yeah, that's right. You did mention something about your memories.\"",
                "line": 181
            },
            {
                "text": "\"Stay back...\"",
                "line": 182
            },
            {
                "text": "The young Violet seems guarded.",
                "line": 183
            },
            {
                "text": "\"Hey, there's no need to be scared. I'm not exactly a good guy, but I'm definitely not some dastardly bad guy.\"",
                "line": 184
            },
            {
                "text": "\"Wh-what are you doing here?\"",
                "line": 185
            },
            {
                "text": "\"I dunno. One minute I wasn't here, the next minute I was. What about you?\"",
                "line": 186
            },
            {
                "text": "\"I...I... Unghhhhh...\" She clutches her head and groans.",
                "line": 187
            },
            {
                "text": "\"Are you okay?\"",
                "line": 188
            },
            {
                "text": "\"I'm... Why...? AhhhhhHHHHHHHHHHHH!\"",
                "line": 189
            },
            {
                "text": "She claws at her head and screams.",
                "line": 190
            },
            {
                "text": "It looks like she's in pain.",
                "line": 191
            },
            {
                "text": "\"You don't have to make yourself remember if you don't wanna. I forget stuff all the time. I wanna be able to focus on what really matters, so I go ahead and forget stuff that doesn't in order to save memory space in my brain.\"",
                "line": 192
            },
            {
                "text": "\"I\u2014I... No... Stop it, make it stop... NooooOOOOOOO!!\"",
                "line": 193
            },
            {
                "text": "As she screams, she starts releasing tremendous amounts of magic.",
                "line": 194
            },
            {
                "text": "\"Careful there. Like I said, you don't gotta remember if you don't want to.\"",
                "line": 195
            },
            {
                "text": "I fend off Violet's magical outbursts and walk toward her.",
                "line": 196
            },
            {
                "text": "\"STAY AWAAAAAAAAAAAAAAAAY!!\"",
                "line": 197
            },
            {
                "text": "\"What's up with this magic?\"",
                "line": 198
            },
            {
                "text": "I gotta say, I'm shocked. Adult Violet was incredible, too, but this is on a whole different level. Still, deflecting magic attacks this straightforward is a breeze. I walk forward, shifting their vectors before grabbing hold of her.",
                "line": 199
            },
            {
                "text": "\"No, no, no, no, NOOOOOOOOOOOOOO!!\"",
                "line": 200
            },
            {
                "text": "\"It's gonna be okay.\"",
                "line": 201
            },
            {
                "text": "I hold Violet tight and pour magic into her. It's the same deal as when I'm healing the possession\u2014the more surface area I'm covering, the more efficient it is.",
                "line": 202
            },
            {
                "text": "\"Let go of me... Let go...of me...\"",
                "line": 203
            },
            {
                "text": "\"Just go ahead and forget all the stuff you don't wanna remember.\"",
                "line": 204
            },
            {
                "text": "I keep pouring magic into her, and eventually, her outbursts settle down. She relaxes and goes limp.",
                "line": 205
            },
            {
                "text": "\"But...what about the things I can't forget?\" she asks quietly.",
                "line": 206
            },
            {
                "text": "\"Dunno. But if you try real hard not to remember them, you'll probably forget 'em eventually.\"",
                "line": 207
            },
            {
                "text": "\"...But I can't.\"",
                "line": 208
            },
            {
                "text": "\"Well, that's a bummer. You've calmed down now, though, yeah?\"",
                "line": 209
            },
            {
                "text": "\"Y...yeah.\"",
                "line": 210
            },
            {
                "text": "I let go of Violet, and she hangs her head in embarrassment.",
                "line": 211
            },
            {
                "text": "\"Cool. Now, how do I get out of here?\"",
                "line": 212
            },
            {
                "text": "\"...You're leaving?\" she says.",
                "line": 213
            },
            {
                "text": "When I walk off, Violet pitter-patters along after me.",
                "line": 214
            },
            {
                "text": "\"Eventually, yeah. Right now, I'm trying to figure out how.\"",
                "line": 215
            },
            {
                "text": "The white space seems to continue forever. There aren't any obvious exits.",
                "line": 216
            },
            {
                "text": "\"Everyone always leaves me,\" Violet intones.",
                "line": 217
            },
            {
                "text": "\"C'mon, I'm sure that's not true.\"",
                "line": 218
            },
            {
                "text": "\"They all died.\"",
                "line": 219
            },
            {
                "text": "\"Ah. Well, that happens sometimes.\"",
                "line": 220
            },
            {
                "text": "\"Are you going to die, too?\"",
                "line": 221
            },
            {
                "text": "\"Nope.\"",
                "line": 222
            },
            {
                "text": "I've got a good six hundred years left in me, and I'm still searching for a way to bring that number up.",
                "line": 223
            },
            {
                "text": "\"Liar.\"",
                "line": 224
            },
            {
                "text": "\"Yeah, maybe.\"",
                "line": 225
            },
            {
                "text": "\"Please don't go.\"",
                "line": 226
            },
            {
                "text": "\"...You know that if I find an exit, you can just come with me, right? It'd be easier if I could just blow the whole place up, but I'm sure I'll figure out something.\"",
                "line": 227
            },
            {
                "text": "Last time I tried that, Adult Violet ended up disappearing, too.",
                "line": 228
            },
            {
                "text": "\"I can't leave here.\"",
                "line": 229
            },
            {
                "text": "\"Ah, bummer.\"",
                "line": 230
            },
            {
                "text": "\"Please don't go.\"",
                "line": 231
            },
            {
                "text": "\"...I'm sure we'll meet again.\"",
                "line": 232
            },
            {
                "text": "\"Liar.\"",
                "line": 233
            },
            {
                "text": "\"That's not a lie.\"",
                "line": 234
            },
            {
                "text": "\"Then...let me have that.\" Violet points at my pocket.",
                "line": 235
            },
            {
                "text": "I reach in and pull out the red jewel.",
                "line": 236
            },
            {
                "text": "\"I dunno. It is mine.\"",
                "line": 237
            },
            {
                "text": "\"It's so warm. It makes me feel calmer.\"",
                "line": 238
            },
            {
                "text": "\"You know it's just a jewel, right?\"",
                "line": 239
            },
            {
                "text": "\"It's not. It's something far more precious.\"",
                "line": 240
            },
            {
                "text": "\"It is?\"",
                "line": 241
            },
            {
                "text": "\"Yeah.\"",
                "line": 242
            },
            {
                "text": "Then I hear the sound of a door closing.",
                "line": 243
            },
            {
                "text": "Violet's whole body shudders.",
                "line": 244
            },
            {
                "text": "It's weird, 'cause this place doesn't have any doors, but I definitely just heard one.",
                "line": 245
            },
            {
                "text": "\"What the hell? Where'd she go?!\"",
                "line": 246
            },
            {
                "text": "I can hear a voice, too.",
                "line": 247
            },
            {
                "text": "\"Are you hiding somewhere?! Number !\"",
                "line": 248
            },
            {
                "text": "\"I\u2014I have to go.\"",
                "line": 249
            },
            {
                "text": "\"Hey, hold on a sec.\"",
                "line": 250
            },
            {
                "text": "Cracks begin splintering across the white space.",
                "line": 251
            },
            {
                "text": "\"Cut the crap already!! Don't make me hurt you again\u2014\"",
                "line": 252
            },
            {
                "text": "\"Hold on, I was gonna give you\u2014\"",
                "line": 253
            },
            {
                "text": "I grab her hand, and the space shatters into a million tiny pieces.",
                "line": 254
            },
            {
                "text": "\"\u2014this.\"",
                "line": 255
            },
            {
                "text": "The red jewel I try to hand her tumbles through the air.",
                "line": 256
            },
            {
                "text": "I'm back on the roof where I came from.",
                "line": 257
            },
            {
                "text": "The white fog, the white space, and the girl in the white dress are all gone.",
                "line": 258
            },
            {
                "text": "The jewel makes a small noise when it hits the ground, and I scoop it up and stow it back in my pocket.",
                "line": 259
            },
            {
                "text": "\"I wonder if Violet's somewhere nearby.\"",
                "line": 260
            },
            {
                "text": "I cast out a wave of magic particles and probe for her presence. However, I don't find her. But I do find something...",
                "line": 261
            },
            {
                "text": "\"Are those presences Claire and Alexia?\"",
                "line": 262
            },
            {
                "text": "I wonder what they're doing down there.",
                "line": 263
            },
            {
                "text": "\"It's open. Come on, this way.\"",
                "line": 264
            },
            {
                "text": "By moonlight, a pair of shadowy figures creeps into the library through a window.",
                "line": 265
            },
            {
                "text": "It's Alexia and Claire.",
                "line": 266
            },
            {
                "text": "Alexia goes in first and inexpertly surveys the scene.",
                "line": 267
            },
            {
                "text": "Then...",
                "line": 268
            },
            {
                "text": "\"Hey, you're in the way.\"",
                "line": 269
            },
            {
                "text": "\"Ow!\"",
                "line": 270
            },
            {
                "text": "...Claire lands on her from above.",
                "line": 271
            },
            {
                "text": "\"What do you think you're doing? The whole plan was for me to make sure things were safe first,\" Alexia quietly grumbles from beneath Claire's feet.",
                "line": 272
            },
            {
                "text": "\"Dawdling puts us in more danger of getting found out than anything. Moving with haste gives the plan a fast pace.\"",
                "line": 273
            },
            {
                "text": "\"Oh, forget it. Just get off me already.\"",
                "line": 274
            },
            {
                "text": "After shoving Claire aside, Alexia stands back up.",
                "line": 275
            },
            {
                "text": "\"Come on, Alexia, let's get moving. We need to make this work, no matter what.\"",
                "line": 276
            },
            {
                "text": "\"Well, someone's motivated.\"",
                "line": 277
            },
            {
                "text": "\"I've got a reason why I can't afford to lose. I've got somewhere I need to return to now.\" Claire squeezes her fists tight, eyes full of conviction.",
                "line": 278
            },
            {
                "text": "\"...I don't really follow, but it's good to hear you're motivated.\"",
                "line": 279
            },
            {
                "text": "Alexia takes the lead, heading deeper into the library and unlocking a door over in the back.",
                "line": 280
            },
            {
                "text": "\"Where did you get your hands on that key?\" Claire asks her.",
                "line": 281
            },
            {
                "text": "\"Being a princess has its perks.\"",
                "line": 282
            },
            {
                "text": "\"Nice. And this is the forbidden section?\"",
                "line": 283
            },
            {
                "text": "Inside, the room is lined with tall bookshelves.",
                "line": 284
            },
            {
                "text": "\"No, this is just a storeroom. The forbidden section is farther back.\"",
                "line": 285
            },
            {
                "text": "Alexia walks over to one of the bookshelves.",
                "line": 286
            },
            {
                "text": "\"That thing is massive,\" Claire remarks. \"Is that ancient script?\"",
                "line": 287
            },
            {
                "text": "\"This bookshelf is a magical artifact, and one of the stories my father read to me as a child had the incantation for it.\"",
                "line": 288
            },
            {
                "text": "\"The what?\"",
                "line": 289
            },
            {
                "text": "Alexia takes a deep breath. \"Bippity boppity, open sesame!\"",
                "line": 290
            },
            {
                "text": "The ensuing silence is deafening.",
                "line": 291
            },
            {
                "text": "\"Please stop screwing around.\"",
                "line": 292
            },
            {
                "text": "\"I-I'm not screwing around! I'm being serious here! The incantation is supposed to open it up!\"",
                "line": 293
            },
            {
                "text": "\"This is ridiculous.\"",
                "line": 294
            },
            {
                "text": "\"I might've gotten the chant wrong. Could it have been \u2018schlongity dongity'\u2014?\"",
                "line": 295
            },
            {
                "text": "The moment the words leave her mouth, the bookshelf loudly rumbles open.",
                "line": 296
            },
            {
                "text": "\"Wait...that actually worked?\"",
                "line": 297
            },
            {
                "text": "\"Looks like it was supposed to be schlongity!\" Alexia says with a smug grin.",
                "line": 298
            },
            {
                "text": "\"Surely it was the first one, and it just took a while 'cause it's so old.\"",
                "line": 299
            },
            {
                "text": "The two of them head through the open bookcase.",
                "line": 300
            },
            {
                "text": "\"\"Whoa...\"\"",
                "line": 301
            },
            {
                "text": "When they enter the forbidden section, they let out cries of amazement. There's a gorgeous chandelier lighting up the towering bookcases within, and while the books they house are old and weathered, that only serves to give them more character.",
                "line": 302
            },
            {
                "text": "\"So how do we tell what book is about the academy's history?\" Claire asks.",
                "line": 303
            },
            {
                "text": "She traces her gaze across the seemingly endless array of book spines. If they have to go through them one by one, they'll end up burning through the whole night.",
                "line": 304
            },
            {
                "text": "\"We pray,\" Alexia says.",
                "line": 305
            },
            {
                "text": "\"This is no time to be messing with me.\"",
                "line": 306
            },
            {
                "text": "\"I'm not, I swear! We just have to do this...\" Alexia begins waving her arms by the side of her head like a lunatic.",
                "line": 307
            },
            {
                "text": "\"What in the world do you think you're doing?\"",
                "line": 308
            },
            {
                "text": "\"Building the mood. Academy history book, academy history book, academy history book... Schlongity dongity!\"",
                "line": 309
            },
            {
                "text": "\"This is ridiculous.\"",
                "line": 310
            },
            {
                "text": "The next moment, however, a ray of light shoots out, and a book comes soaring down. It comes to a stop in front of Alexia's face, then opens to its first page all on its own.",
                "line": 311
            },
            {
                "text": "\"You've got to be kidding me...\"",
                "line": 312
            },
            {
                "text": "\"See? I told you.\"",
                "line": 313
            },
            {
                "text": "\"What a stupid artifact. I have half a mind to just smash the thing.\"",
                "line": 314
            },
            {
                "text": "\"Please don't. It's so cute and so helpful.\"",
                "line": 315
            },
            {
                "text": "Claire frowns in annoyance. \"So what's it say in the book?\"",
                "line": 316
            },
            {
                "text": "\"I dunno. I can't read it.\"",
                "line": 317
            },
            {
                "text": "\"Let's see here... Ah, ancient script again.\"",
                "line": 318
            },
            {
                "text": "\"I can read simple stuff, but this is a bit beyond me. What about you?\"",
                "line": 319
            },
            {
                "text": "\"I just know the basics, myself. It's not a very popular subject. Pretty much only the science-track kids take it.\"",
                "line": 320
            },
            {
                "text": "\"Yeah, figures.\"",
                "line": 321
            },
            {
                "text": "\"So what do we do?\"",
                "line": 322
            },
            {
                "text": "\"I think this calls for... Schlongity dongity, please translate for us!\" Alexia cries out in a cutesy voice and makes a heart shape with her hands.",
                "line": 323
            },
            {
                "text": "\"Ew, don't be weird. There's no way that'd ever work.\"",
                "line": 324
            },
            {
                "text": "\"We won't know until we try. Who knows what sort of handy functions it has?\"",
                "line": 325
            },
            {
                "text": "A creepy voice echoes out from the forbidden section. \"Y-y-you want a translation, do you? Hurr-hurr-hurr...\"",
                "line": 326
            },
            {
                "text": "\"Wait\u2014it talks?!\"",
                "line": 327
            },
            {
                "text": "\"Who's there?\"",
                "line": 328
            },
            {
                "text": "Claire and Alexia look around, but they're the only ones there.",
                "line": 329
            },
            {
                "text": "\"I-I-I'm the spirit of the forbidden stacks. I\u2014I can translate for you.\"",
                "line": 330
            },
            {
                "text": "\"Well, hey, that's the academy's prized artifact for you.\"",
                "line": 331
            },
            {
                "text": "\"Ugh... It sounds like a total fatso.\"",
                "line": 332
            },
            {
                "text": "\"C'mon, Claire, don't be mean.\"",
                "line": 333
            },
            {
                "text": "\"Snff... N-now I don't feel like translating anymore...\"",
                "line": 334
            },
            {
                "text": "\"Look, it's sulking.\"",
                "line": 335
            },
            {
                "text": "\"All right, all right! I'm sorry.\"",
                "line": 336
            },
            {
                "text": "\"Mr. Forbidden Stacks, would you pleeease translate for us?\"",
                "line": 337
            },
            {
                "text": "\"Hunf, hunf, hunf... I-I'll do my best! Wh-what part do you want done?\"",
                "line": 338
            },
            {
                "text": "\"Well, we were hoping to figure out where Diablos's right arm is sealed.\"",
                "line": 339
            },
            {
                "text": "\"O-o-oh, it's beneath the school. Down in the underground ruins.\"",
                "line": 340
            },
            {
                "text": "\"Uh...okay, then. That was easy...\"",
                "line": 341
            },
            {
                "text": "\"I'm surprised at how competent it is.\"",
                "line": 342
            },
            {
                "text": "The floating forbidden book's pages turn, and the translated text glows in midair before it.",
                "line": 343
            },
            {
                "text": "\"O-once upon a time, Diablos fought the heroes here. Its arm got cut off and sealed away here. A bunch of other stuff happened, and now the area is in ruins.\"",
                "line": 344
            },
            {
                "text": "\"What kind of other stuff?\"",
                "line": 345
            },
            {
                "text": "\"Apparently, people fought over the arm. The book doesn't have many details, but it ended with the underground ruins getting hidden away.\"",
                "line": 346
            },
            {
                "text": "\"How do we get into the ruins?\"",
                "line": 347
            },
            {
                "text": "\"Th-there's a sealed church somewhere on campus. All you have to do is go there.\"",
                "line": 348
            },
            {
                "text": "\"And where exactly is \u2018somewhere'?\"",
                "line": 349
            },
            {
                "text": "\"Hunf, hunf, hunf... I\u2014I can't tell you anything that isn't written in the book.\"",
                "line": 350
            },
            {
                "text": "\"Tch, you're useless...,\" Alexia snaps. \"Well, at least now we know what the Cult is after. They're trying to unseal the right arm.\"",
                "line": 351
            },
            {
                "text": "\"Then why are they kidnapping students?\"",
                "line": 352
            },
            {
                "text": "\"To undo the seal with, probably. It's easier to unseal these things with magic that's similar to the mana used to make the seal in the first place.\"",
                "line": 353
            },
            {
                "text": "\"So they're hunting down students to try to find people with compatible magic. Should we look for the sealed church?\"",
                "line": 354
            },
            {
                "text": "\"...Before that, I need to talk to my sister.\" There's a clear note of resolve in Alexia's voice.",
                "line": 355
            },
            {
                "text": "\"Oh, that's right, you're part of the royal family. Why didn't you just do that from the start?\"",
                "line": 356
            },
            {
                "text": "\"You seriously think I didn't?\"",
                "line": 357
            },
            {
                "text": "\"Huh?\"",
                "line": 358
            },
            {
                "text": "\"I tell her about this stuff constantly. I told her about the incident at the school, about what happened at the Sanctuary, everything.\"",
                "line": 359
            },
            {
                "text": "\"Alexia...\"",
                "line": 360
            },
            {
                "text": "\"But this time... This time, I finally have proof, and Iris will finally believe me.\"",
                "line": 361
            },
            {
                "text": "\"I-I'm rooting for you, Alexia!\"",
                "line": 362
            },
            {
                "text": "\"Shut up, fatso.\" Alexia glares with a look in her eyes that could kill.",
                "line": 363
            },
            {
                "text": "\"E-eep...!\"",
                "line": 364
            },
            {
                "text": "\"Alexia...we should get out of here. If we stay too long, someone will find us.\"",
                "line": 365
            },
            {
                "text": "\"Good call. Before we do that, though, does this place have any books about the Cult of Diablos?\"",
                "line": 366
            },
            {
                "text": "There's a brief silence.",
                "line": 367
            },
            {
                "text": "\"...Not here, no.\"",
                "line": 368
            },
            {
                "text": "\"Okay... Then I guess that's that, then.\"",
                "line": 369
            },
            {
                "text": "\"Later.\"",
                "line": 370
            },
            {
                "text": "\"B-bye-bye... Take care, you two...\"",
                "line": 371
            },
            {
                "text": "Claire and Alexia find their bodies enveloped in magic, and the next thing they know, they're back in the original storeroom.",
                "line": 372
            },
            {
                "text": "\"Once she sees this book, Iris will have no choice but to\u2014,\" Alexia says, clutching the contraband to her chest and stepping out of the room. As soon as she does...",
                "line": 373
            },
            {
                "text": "\"And what do you think you're doing, taking a forbidden book without permission?\"",
                "line": 374
            },
            {
                "text": "\"?!\"",
                "line": 375
            },
            {
                "text": "Alexia and Claire whirl around in unison.",
                "line": 376
            },
            {
                "text": "There's a tall old man standing behind a bookcase. His face is long and narrow, and his eyes are sunken and practically goggle out of his head as he glares at them.",
                "line": 377
            },
            {
                "text": "\"Y-you're the head librarian...\" Alexia hides the book behind her back, but it's far too late for that.",
                "line": 378
            },
            {
                "text": "\"Taking a forbidden book without permission is a heavy crime, Your Highness, even for one such as you. And that goes double for your non-royal accomplice.\"",
                "line": 379
            },
            {
                "text": "Claire scowls when the man's gaze lands on her.",
                "line": 380
            },
            {
                "text": "She's going to get suspended, maybe even expelled. Her brother might even take some collateral damage.",
                "line": 381
            },
            {
                "text": "\"Should we kill him...?\" she asks quietly. There's no hesitation in her eyes.",
                "line": 382
            },
            {
                "text": "Alexia hurriedly pushes her aside. \"L-look, Mr. Librarian, we've got a really good reason for this! Would you at least hear us out?\"",
                "line": 383
            },
            {
                "text": "\"For you, Your Highness, how could I possibly refuse?\"",
                "line": 384
            },
            {
                "text": "\"Thank you. I really appreciate it.\"",
                "line": 385
            },
            {
                "text": "\"I know somewhere we can talk. Follow me.\"",
                "line": 386
            },
            {
                "text": "With that, the head librarian leaves the library.",
                "line": 387
            },
            {
                "text": "As Alexia follows him, she shoots a hushed question back over her shoulder to Claire. \"Okay, so what the hell was that about?\"",
                "line": 388
            },
            {
                "text": "\"If I get arrested, people will pick on Cid! They'll bully him and say that his sister's a criminal! He's so delicate, he might even end up killing himself...\"",
                "line": 389
            },
            {
                "text": "\"He won't. He really, really won't.\" Alexia lets out a sigh.",
                "line": 390
            },
            {
                "text": "\"Do try to pick up the pace, Your Highness,\" the head librarian urges.",
                "line": 391
            },
            {
                "text": "\"Don't worry, we're coming.\" Alexia pulls Claire along by the hand and jogs after the man.",
                "line": 392
            },
            {
                "text": "\"I'm sorry, but how far exactly are you taking us?\" Alexia calls to the head librarian. She can see his tall figure proceeding down the darkened corridor.",
                "line": 393
            },
            {
                "text": "\"We're almost there,\" he replies.",
                "line": 394
            },
            {
                "text": "\"We could have just talked in one of the classrooms, you know.\"",
                "line": 395
            },
            {
                "text": "\"...Then let's do it here, shall we?\"",
                "line": 396
            },
            {
                "text": "With that, the librarian comes to a stop. He's smack-dab in the middle of the hallway.",
                "line": 397
            },
            {
                "text": "\"Here?\" Alexia asks.",
                "line": 398
            },
            {
                "text": "\"Why, yes. The preparations are complete.\"",
                "line": 399
            },
            {
                "text": "He turns around wearing a faint smile.",
                "line": 400
            },
            {
                "text": "Alexia doesn't like that smile one bit. She frowns.",
                "line": 401
            },
            {
                "text": "\"Alexia...\" Behind her, Claire taps her on the shoulder. \"The fog...\"",
                "line": 402
            },
            {
                "text": "\"The what?\" Alexia looks around and discovers that the entire hallway is enshrouded in white fog. \"Why is there fog in here?\"",
                "line": 403
            },
            {
                "text": "The fog rapidly grows denser, and a cracking noise echoes from just out of sight.",
                "line": 404
            },
            {
                "text": "\"This is like what happened when I got attacked...\"",
                "line": 405
            },
            {
                "text": "\"It is?\"",
                "line": 406
            },
            {
                "text": "Then the world fractures.",
                "line": 407
            },
            {
                "text": "The sound of glass shattering rings out as the scenery breaks into a million tiny pieces.",
                "line": 408
            },
            {
                "text": "\"Wh-what's going on?!\"",
                "line": 409
            },
            {
                "text": "They were just in one of the academy's hallways, yet their surroundings have completely changed.",
                "line": 410
            },
            {
                "text": "Now they're in a world enveloped in white fog.",
                "line": 411
            },
            {
                "text": "A sweet smell drifts through the air.",
                "line": 412
            },
            {
                "text": "\"Get your sword ready, Alexia,\" Claire urges.",
                "line": 413
            },
            {
                "text": "Alexia does just that.",
                "line": 414
            },
            {
                "text": "\"We're surrounded.\"",
                "line": 415
            },
            {
                "text": "\"Huh?\"",
                "line": 416
            },
            {
                "text": "Alexia searches for signs of people and discovers a group of them waiting in the fog. The group is slowly approaching while keeping a close eye on them, and it doesn't look like they come in peace.",
                "line": 417
            },
            {
                "text": "\"Good spotting, Claire.\"",
                "line": 418
            },
            {
                "text": "\"My spirit friend is good at stuff like that.\"",
                "line": 419
            },
            {
                "text": "\"Ah, got it.\" Alexia then turns her sword toward the head librarian and lowers her voice menacingly. \"Now, as for you, buddy.\"",
                "line": 420
            },
            {
                "text": "The librarian stands in the fog with that same thin smile. \"However can I help you, Your Highness?\"",
                "line": 421
            },
            {
                "text": "\"What exactly do you think you're pulling here?\"",
                "line": 422
            },
            {
                "text": "Alexia is no fool, and any trust she had for him has long since gone out the window.",
                "line": 423
            },
            {
                "text": "\"Oh dear. You're cleverer than I expected.\" The librarian pulls out a pair of large machetes, one for each hand.",
                "line": 424
            },
            {
                "text": "\"Well, those are grisly old things. Shouldn't a librarian like you be fighting with pen and paper?\"",
                "line": 425
            },
            {
                "text": "\"Pens and paper are for depicting ideals. Reality is forged with the blade.\"",
                "line": 426
            },
            {
                "text": "With that, he brandishes his twin machetes.",
                "line": 427
            },
            {
                "text": "\"I'll handle the librarian,\" Alexia says. \"Claire, you handle the others.\"",
                "line": 428
            },
            {
                "text": "\"Got it.\"",
                "line": 429
            },
            {
                "text": "The two of them stand back-to-back with their swords at the ready, and the fight begins.",
                "line": 430
            },
            {
                "text": "A pair of machete strikes comes lashing out from the fog. Alexia dodges half a step back to avoid the first blow, then parries the follow-up strike with her sword.",
                "line": 431
            },
            {
                "text": "\"Oh?\"",
                "line": 432
            },
            {
                "text": "As the librarian's eyes go wide, Alexia launches into a counteroffensive. Her form is fluid and unfaltering, and her sword lands a shallow wound on his face.",
                "line": 433
            },
            {
                "text": "\"Well, isn't this something?\" The librarian retreats to where he started from and wipes away the blood running down his cheek. \"I must say, I'm shocked. The Princess Alexia I know would never have been capable of such moves.\"",
                "line": 434
            },
            {
                "text": "There's nothing in his voice but genuine praise.",
                "line": 435
            },
            {
                "text": "\"Call it a growth spurt,\" Alexia replies.",
                "line": 436
            },
            {
                "text": "\"Even so, that's wonderful stuff. Swords carry with them the weight of their wielders' lives. Before, all you were doing was imitating Princess Iris. Now, though, you've taken that instinct and sublimated it. No, perhaps it would be more accurate to say you've combined it with something else.\"",
                "line": 437
            },
            {
                "text": "\"You really think you have time to be psychoanalyzing me?\"",
                "line": 438
            },
            {
                "text": "\"Oh, absolutely.\"",
                "line": 439
            },
            {
                "text": "\"Even now?\"",
                "line": 440
            },
            {
                "text": "That last comment comes from Claire.",
                "line": 441
            },
            {
                "text": "A number of figures lie crumpled on the ground around her. One by one, they shatter and vanish.",
                "line": 442
            },
            {
                "text": "The head librarian's eyebrows furrow in surprise. \"You took out all seven Seconds? Claire Kagenou... You won this year's Bushin Festival. You weren't nearly this strong back then, but now you're using some sort of strange power.\"",
                "line": 443
            },
            {
                "text": "\"...You noticed?\"",
                "line": 444
            },
            {
                "text": "\"I saw you use those red tendrils, yes. How intriguing.\"",
                "line": 445
            },
            {
                "text": "Even when he was battling Alexia, he still kept a close eye on Claire's fight.",
                "line": 446
            },
            {
                "text": "Alexia and Claire square off against the head librarian.",
                "line": 447
            },
            {
                "text": "\"Now it's two-on-one.\"",
                "line": 448
            },
            {
                "text": "\"Looks like the shoe's on the other foot.\"",
                "line": 449
            },
            {
                "text": "The librarian seems oddly sure of himself. \"Does it, now?\"",
                "line": 450
            },
            {
                "text": "\"You're strong, but together, we can take you down.\"",
                "line": 451
            },
            {
                "text": "\"Ah, to be young.\"",
                "line": 452
            },
            {
                "text": "\"Well, someone's sure confident.\"",
                "line": 453
            },
            {
                "text": "\"It's because I've given up.\"",
                "line": 454
            },
            {
                "text": "\"What?\"",
                "line": 455
            },
            {
                "text": "\"I've given up on swordplay. Ours is a big world, and no matter how good you get, there will always be someone better. That's why I enjoy seeing talented swordplay such as yours. I'm sure the two of you will surpass me in no time.\"",
                "line": 456
            },
            {
                "text": "\"If you've given up, then hurry and surrender already. We'll make you sing like a bird.\"",
                "line": 457
            },
            {
                "text": "Alexia's comment earns her a weak grin from her foe.",
                "line": 458
            },
            {
                "text": "\"Ah, the folly of youth. If you'd just let go of your fixation on swordplay, you would realize that there are plenty of other ways to fight.\"",
                "line": 459
            },
            {
                "text": "\"Huh?\"",
                "line": 460
            },
            {
                "text": "A sweet smell tickles her nose.",
                "line": 461
            },
            {
                "text": "Then, with a pair of overlapping clangs, Alexia's and Claire's swords clatter to the floor.",
                "line": 462
            },
            {
                "text": "\"What...?\"",
                "line": 463
            },
            {
                "text": "\"M-my arms...\"",
                "line": 464
            },
            {
                "text": "\"That sweet smell is a drug that relaxes the muscles and stifles your magic.\"",
                "line": 465
            },
            {
                "text": "The librarian looks down at the two of them as they fall to their knees, unable to resist the drug's effect.",
                "line": 466
            },
            {
                "text": "\"Damn you... I thought we were supposed to be fighting with swords.\"",
                "line": 467
            },
            {
                "text": "\"You two are bursting with talent, and your futures are bright. That's why men like me come and steal it all away.\"",
                "line": 468
            },
            {
                "text": "The librarian pulls out some rope and binds their arms.",
                "line": 469
            },
            {
                "text": "\"Why...?\" Alexia asks. \"Why are you doing this...?\"",
                "line": 470
            },
            {
                "text": "\"That's the question, isn't it?\" he replies.",
                "line": 471
            },
            {
                "text": "\"You're obviously strong, so why debase yourself like this?\"",
                "line": 472
            },
            {
                "text": "\"I told you, there's always someone stronger. My sword broke long ago.\"",
                "line": 473
            },
            {
                "text": "\"It broke? What does that even mean?\"",
                "line": 474
            },
            {
                "text": "The librarian gets a faraway look in his eyes. \"There once was a dark knight by the name of Fenrir. Have you heard of him, perchance?\"",
                "line": 475
            },
            {
                "text": "\"Never.\"",
                "line": 476
            },
            {
                "text": "\"Oh, I suspect you have. There isn't a person living in this country who hasn't.\"",
                "line": 477
            },
            {
                "text": "Alexia thinks through all the past Bushin Festival participants and dark knights who made their name in other nations, but she comes up blank. \"A dark knight named Fenrir... You're not talking about the guy from the legend, are you?!\"",
                "line": 478
            },
            {
                "text": "\"The very same. He was once known the world over and hailed as the greatest dark knight alive.\"",
                "line": 479
            },
            {
                "text": "\"Okay, hold on! The dark knight Fenrir lived hundreds of years ago! Plus, people aren't even sure if he was actually real.\"",
                "line": 480
            },
            {
                "text": "\"Oh, he was real, all right. And what's more, he's still alive today.\"",
                "line": 481
            },
            {
                "text": "\"But if he's still alive... You mean he's using the Beads of Diablos?!\"",
                "line": 482
            },
            {
                "text": "Alexia thinks back to what she learned in the Sanctuary\u2014about how there's a group called the Rounds who use the Beads of Diablos to obtain eternal life.",
                "line": 483
            },
            {
                "text": "\"You already know about the Beads? Well, now I really can't let you live.\"",
                "line": 484
            },
            {
                "text": "\"What are you going to do to us?\"",
                "line": 485
            },
            {
                "text": "\"Offer you up as sacrifices. We were planning on leaving the two of you be, but we've barely managed to retrieve any possessed as of late.\"",
                "line": 486
            },
            {
                "text": "The librarian withdraws a vial of liquid from his pocket and raises it to Alexia's mouth. There's a fiercely sweet aroma coming from it.",
                "line": 487
            },
            {
                "text": "\"Head off to dreamland now. Off to a sleep you'll never wake from.\"",
                "line": 488
            },
            {
                "text": "\"Rgh...\"",
                "line": 489
            },
            {
                "text": "Alexia holds her breath and turns her head away, but even so, her consciousness slowly slips into darkness.",
                "line": 490
            },
            {
                "text": "\"Alexia!\"",
                "line": 491
            },
            {
                "text": "\"Cl...aire...\"",
                "line": 492
            },
            {
                "text": "That's when it happens.",
                "line": 493
            },
            {
                "text": "There's a noise like something being forcefully ripped. It feels as if a powerful pressure is tearing into the world itself.",
                "line": 494
            },
            {
                "text": "Then the ceiling shatters.",
                "line": 495
            },
            {
                "text": "\"What is this? What's going on?\" The librarian sets down his vial and looks up.",
                "line": 496
            },
            {
                "text": "A dark figure descends from a crack in the ceiling. After landing with an oddly muted sound, the figure rises to its feet.",
                "line": 497
            },
            {
                "text": "\"You...\"",
                "line": 498
            },
            {
                "text": "\"It's you...\"",
                "line": 499
            },
            {
                "text": "The man stands alone in the fog, dressed in a black longcoat.",
                "line": 500
            },
            {
                "text": "\"\"Shadow!!\"\"",
                "line": 501
            },
            {
                "text": "His longcoat flutters behind him as he casually draws his sword.",
                "line": 502
            },
            {
                "text": "The librarian readies his machetes with a harsh grimace. \"Can't say I was expecting Shadow to show up in person... Nobody even gave me a warning.\"",
                "line": 503
            },
            {
                "text": "Shadow gives him a scathing look. \"You're revolting.\"",
                "line": 504
            },
            {
                "text": "\"And what about me is revolting, might I ask?\"",
                "line": 505
            },
            {
                "text": "\"Everything.\"",
                "line": 506
            },
            {
                "text": "\"...Well, you can say that again.\" The librarian scowls, then lets out a laugh that echoes with self-contempt. \"My life hasn't gone the way I hoped. I got swept away in its current, and it broke me. Now I live in shame. If you find me revolting, I have nothing to offer in my defense,\" he says calmly. \"However, there was meaning to the shame.\"",
                "line": 507
            },
            {
                "text": "\"...Oh?\"",
                "line": 508
            },
            {
                "text": "\"There you are, Shadow, standing at my journey's terminus. A fitting end for a sorry fool who had his sword broken and betrayed his nation.\"",
                "line": 509
            },
            {
                "text": "\"You've made your peace, then.\"",
                "line": 510
            },
            {
                "text": "\"On some level, I knew this would happen ever since Zenon bit the dust. Here at the end, though, I stand before you a swordsman\u2014now, have at you.\"",
                "line": 511
            },
            {
                "text": "He sweeps aside the fog with his oversize machetes and bears down on Shadow.",
                "line": 512
            },
            {
                "text": "The librarian's words echo back in Alexia's mind: \"Swords carry with them the weight of their wielders' lives.\"",
                "line": 513
            },
            {
                "text": "And how radiantly his slash shines.",
                "line": 514
            },
            {
                "text": "\"Excellent stuff.\"",
                "line": 515
            },
            {
                "text": "Shadow lays his sword in that radiance's path.",
                "line": 516
            },
            {
                "text": "That's all it takes.",
                "line": 517
            },
            {
                "text": "Transient and brittle, the huge machetes shatter into pieces.",
                "line": 518
            },
            {
                "text": "\"They shattered, did they?\"",
                "line": 519
            },
            {
                "text": "Nothing remains save their hilts, which let out a pair of sad clangs.",
                "line": 520
            },
            {
                "text": "Shadow swings his sword.",
                "line": 521
            },
            {
                "text": "A beat later, the sheer pressure from his slash blasts away the fog. Cracks begin splintering across the world, then loudly engulf everything in sight.",
                "line": 522
            },
            {
                "text": "The world breaks.",
                "line": 523
            },
            {
                "text": "Just like that, they're back in their original world, as if it were just a dream. However, the pool of blood the downed librarian now lies in serves as proof that it all really happened.",
                "line": 524
            },
            {
                "text": "The librarian coughs, sending flecks of blood flying from his mouth. \"Well, Shadow... Looks like I was no match for you...\"",
                "line": 525
            },
            {
                "text": "\"I have yet to glimpse the pinnacle.\"",
                "line": 526
            },
            {
                "text": "With a swish of his black longcoat, Shadow vanishes.",
                "line": 527
            },
            {
                "text": "\"That was what Shadow is capable of?\" Claire murmurs. A chill runs down her spine. The head librarian was a powerhouse, and he was completely powerless before Shadow's might.",
                "line": 528
            },
            {
                "text": "\"He's gotten even stronger...,\" Alexia says, vexed.",
                "line": 529
            },
            {
                "text": "The two of them stand up after working together to undo their bonds. They look down upon the librarian's figure.",
                "line": 530
            },
            {
                "text": "\"Mr. Librarian...\"",
                "line": 531
            },
            {
                "text": "\"I'm...beyond help.\"",
                "line": 532
            },
            {
                "text": "There's a deep wound in his chest.",
                "line": 533
            },
            {
                "text": "\"You were once a pretty famous dark knight, weren't you?\"",
                "line": 534
            },
            {
                "text": "Alexia can't help but ask the question. That final attack of his had a beauty to it that only the truly talented could achieve.",
                "line": 535
            },
            {
                "text": "The librarian shakes his head. \"No... Just a nameless hack.\"",
                "line": 536
            },
            {
                "text": "The man is lying. Even Alexia can tell that much. She looks down at his arms and sees timeworn scars carved in his flesh. \"What happened to your arms?\"",
                "line": 537
            },
            {
                "text": "\"They were severed. The Cult used their technology to reattach them, but they were never quite the same. Back in my day, I was able to wield a much subtler blade.\"",
                "line": 538
            },
            {
                "text": "\"Who cut them off?\"",
                "line": 539
            },
            {
                "text": "\"Fenrir. That was the day my sword broke.\"",
                "line": 540
            },
            {
                "text": "\"Would you mind if I asked what happened?\"",
                "line": 541
            },
            {
                "text": "The librarian looks down at his chest wound. \"Very well... I'll share the story with you, right until I breathe my last.\"",
                "line": 542
            },
            {
                "text": "Alexia and Claire sit down beside him.",
                "line": 543
            },
            {
                "text": "\"My story begins some fifty years ago, back when I worked for this nation's Knight Order...\" He looks through the hallway window at the night sky now free of fog, dredging up old memories as he does. \"I joined the Order after winning the Bushin Festival. There, I righted wrongs, apprehended villains, and secured a future for myself.\"",
                "line": 544
            },
            {
                "text": "\"See, I knew you were a notable dark knight,\" Alexia says.",
                "line": 545
            },
            {
                "text": "\"Zeal was the one thing I had in spades, and it led to me discovering evidence of wrongdoing far above my pay grade. I found vermin infesting the Midgar Kingdom...no, the entire world. I imagine you've discovered the same thing, Your Highness.\"",
                "line": 546
            },
            {
                "text": "\"...The Cult of Diablos.\"",
                "line": 547
            },
            {
                "text": "\"Exactly. At the time, I didn't know they existed. I thought the Holy Teachings priests had just gone rogue, and so I marched straight into the Church.\"",
                "line": 548
            },
            {
                "text": "\"Into the Church?\"",
                "line": 549
            },
            {
                "text": "\"I was so young then. I believed that so long as I had justice on my side, I could do anything. There I was, so certain I was about to bring the hammer of justice down on the corrupt Church.",
                "line": 550
            },
            {
                "text": "\"My men and I searched the building, hoping to find hard evidence of their crimes.",
                "line": 551
            },
            {
                "text": "\"However...the ordinary clergy had nothing to do with it. Their devotion was true, and all they'd been doing was spreading the Church's teachings. And the believers were the same. They believed in Holy Teachings with all their hearts.",
                "line": 552
            },
            {
                "text": "\"It turned out, the crimes were being committed by just a tiny segment of the clergy leadership.",
                "line": 553
            },
            {
                "text": "\"After patiently surveilling the priests, we discovered that there was a secret chamber hidden beneath the church. After descending a long staircase, we were greeted by a horrifying sight.",
                "line": 554
            },
            {
                "text": "\"Down in the chamber, there were countless rotting possessed locked up and crying in agony. All of them had been wounded, and some of them had had something horrible implanted in them.",
                "line": 555
            },
            {
                "text": "\"As we stared at them in horror, we heard the door close behind us.",
                "line": 556
            },
            {
                "text": "\"It was a trap.",
                "line": 557
            },
            {
                "text": "\"I sensed hostility and immediately moved to protect myself. The mighty blow that came next sent me flying, and I skidded across the ground.",
                "line": 558
            },
            {
                "text": "\"When I returned to my feet, I saw my severed left arm, the corpses of my beheaded men...and the dark knight Fenrir, standing at the center of it all.",
                "line": 559
            },
            {
                "text": "\"I slashed at him, giving in to my rage as I clutched my sword in my remaining hand. That was how I lost my right arm, too.",
                "line": 560
            },
            {
                "text": "\"The Cult of Diablos was no stranger to having to deal with do-gooders like me.\"",
                "line": 561
            },
            {
                "text": "He drops his gaze to the old scars on his arms.",
                "line": 562
            },
            {
                "text": "\"His power was overwhelming. As I lay there, prone, Fenrir brought an unconscious woman before me. It was my wife. I was a Bushin Festival winner and a prominent member of the Knight Order, so the Cult thought I could be valuable to them. I sold my soul to them in exchange for my wife's safety.\"",
                "line": 563
            },
            {
                "text": "\"What happened to her? If she's safe, I promise I'll protect her.\"",
                "line": 564
            },
            {
                "text": "\"Thankfully, she died of old age without ever learning the truth.\"",
                "line": 565
            },
            {
                "text": "\"And you never tried to defy them?\"",
                "line": 566
            },
            {
                "text": "The head librarian gives his head a sad shake. \"Any will to resist I had was cut off in the same stroke that severed my arms. Take heed, Your Highness. The road you walk is the same one I did, and at its end lies despair and a darkness that never ends.\"",
                "line": 567
            },
            {
                "text": "His stare bores into Alexia, but she meets it without flinching. \"That doesn't change what I must do. As a princess, I have a duty to this nation.\"",
                "line": 568
            },
            {
                "text": "The librarian stares at her in amazement. \"You've become a fine young woman. In that case, I have one final thing to tell you...\" His breathing is shallow, and a trickle of blood runs out the side of his mouth. \"Tell me, Highness...do you know what the Cult's goal is?\"",
                "line": 569
            },
            {
                "text": "\"They want to resurrect the demon Diablos, don't they?\"",
                "line": 570
            },
            {
                "text": "\"Let me rephrase. Do you know why they're trying to resurrect it?\"",
                "line": 571
            },
            {
                "text": "\"Well, that's because, uh...\"",
                "line": 572
            },
            {
                "text": "Alexia is at a loss for words. She knows what the Cult is trying to do, but she's never stopped to consider the why.",
                "line": 573
            },
            {
                "text": "\"There are two reasons. The first is to obtain more power. The three heroes were all women, and the possessed are all women, too. Women are the only ones Diablos cells have ever responded to. That's why the Cult has been forced to rely on these flawed pills to gain strength.\"",
                "line": 574
            },
            {
                "text": "The librarian pulls out some red pills.",
                "line": 575
            },
            {
                "text": "\"Those are the ones Zenon used,\" Alexia notes.",
                "line": 576
            },
            {
                "text": "\"He was a fool, that pupil of mine.\"",
                "line": 577
            },
            {
                "text": "\"Why didn't you use them?\"",
                "line": 578
            },
            {
                "text": "\"Because to do so is to shame yourself as a dark knight. However, the Cult saw potential in them. They're trying to perfect them, to create a more potent version without the side effects. That's why they've spent so many long years researching the heroes' blood. If they resurrect Diablos, they'll likely be able to attain their goal and obtain power surpassing that of even the heroes.\"",
                "line": 579
            },
            {
                "text": "\"I don't like the sound of that.\"",
                "line": 580
            },
            {
                "text": "\"However, the Cult's second reason is the more pressing of the two. You know about the Beads of Diablos, correct?\"",
                "line": 581
            },
            {
                "text": "\"They're supposed to grant you eternal life, right?\"",
                "line": 582
            },
            {
                "text": "\"Well, the Cult can harvest only twelve a year. Imbibing a Bead prevents you from growing older for the coming year, but at the moment, the amount they're able to produce is declining.\"",
                "line": 583
            },
            {
                "text": "\"What do you mean, it's declining?\"",
                "line": 584
            },
            {
                "text": "\"I don't know what's causing it, but if things go on like this, it won't be long at all before they lose that eternal life of theirs. That's something the Cult's leadership absolutely cannot allow to happen. They want to resurrect Diablos so they can go back to mass-producing Beads and ensure their eternal lives. The Cult has been ruling the world from the shadows for a long time, and their immortal leadership is what keeps their operation unassailable. If they lose the Beads, though, that foundation will waver... Koff.\"",
                "line": 585
            },
            {
                "text": "The librarian takes a moment to steady his breathing, then looks up at the moon hanging in the night sky.",
                "line": 586
            },
            {
                "text": "\"I don't think it's a coincidence that this is the era the Shadow Garden appeared in. This is the beginning of the end for the Cult's long rule. That's why you must pro...ceed with caution. Are those people truly...defending the peace and fighting for justice?\"",
                "line": 587
            },
            {
                "text": "Alexia has no answer for that. All she knows about the Shadow Garden is that they stand in opposition to the Cult. Aside from that, everything about the organization is shrouded in mystery.",
                "line": 588
            },
            {
                "text": "\"They might simply...be trying to steal it from the Cult...\"",
                "line": 589
            },
            {
                "text": "\"Steal it? Steal what?\" Alexia asks the head librarian.",
                "line": 590
            },
            {
                "text": "\"Eternal life... And also...the world itself... Koff, kaff!!\"",
                "line": 591
            },
            {
                "text": "\"Mr. Librarian...\"",
                "line": 592
            },
            {
                "text": "\"Wh-when the Cult falls...the world...will belong...to...the Shad...ow Gar... Koff.\"",
                "line": 593
            },
            {
                "text": "The librarian hacks up a huge mouthful of blood.",
                "line": 594
            },
            {
                "text": "\"Mr. Librarian!\"",
                "line": 595
            },
            {
                "text": "\"P-Princess Alexia...\" He sucks in a pained breath as he chokes out the words. \"The fate of Midgar...is in your hands...\"",
                "line": 596
            },
            {
                "text": "And with that, he breathes his last.",
                "line": 597
            },
            {
                "text": "A beautiful young woman with fiery-red hair inspects the librarian's corpse.",
                "line": 598
            },
            {
                "text": "The woman is Iris Midgar, one of the Midgar Kingdom's princesses as well as Alexia's older sister. Alexia sent Claire home and went to explain to the Knight Order what had transpired.",
                "line": 599
            },
            {
                "text": "\"Right before he died, the librarian told me what the Cult was planning. They were the ones behind the disappearances, and they're trying to unseal the right arm of Diablos that's here in the\u2014\"",
                "line": 600
            },
            {
                "text": "\"That's enough,\" Iris says, cutting Alexia off.",
                "line": 601
            },
            {
                "text": "\"Huh?\"",
                "line": 602
            },
            {
                "text": "\"I'm through with listening to this nonsense.\"",
                "line": 603
            },
            {
                "text": "\"N-nonsense?\" Alexia repeats in bewilderment.",
                "line": 604
            },
            {
                "text": "Iris gives her a stern look. \"Listen to me, Alexia. The Cult of Diablos doesn't exist.\"",
                "line": 605
            },
            {
                "text": "\"Doesn't exist? Iris, what are you talking about? You swore to me we would investigate the Cult together...\"",
                "line": 606
            },
            {
                "text": "\"And through that investigation, we learned that the Cult of Diablos doesn't exist.\"",
                "line": 607
            },
            {
                "text": "That statement doesn't come from Iris, but rather from the tall man beside her. He has eyes like a snake's and pallid skin, both of which are vaguely unsettling.",
                "line": 608
            },
            {
                "text": "\"And who are you?\" Alexia asks.",
                "line": 609
            },
            {
                "text": "\"It's my pleasure to make your acquaintance, Princess Alexia. I'm Adder, vice-captain of the Crimson Order.\"",
                "line": 610
            },
            {
                "text": "\"He's Glen's successor,\" Iris adds. \"His talents have been a huge asset to us.\"",
                "line": 611
            },
            {
                "text": "\"You flatter me, Highness,\" Adder says, smiling faintly at Iris's compliment. \"Now, you wanted to know about the Cult's nonexistence? Well, we've gathered plenty of proof.\"",
                "line": 612
            },
            {
                "text": "\"The entire thing is a Shadow Garden hoax.\"",
                "line": 613
            },
            {
                "text": "\"I-I'm sorry, what?\"",
                "line": 614
            },
            {
                "text": "\"The Shadow Garden has committed countless crimes,\" Adder explains. \"They kidnapped you, Princess Alexia, they attacked the school, they destroyed the Sanctuary, and they slaughtered scores of people over in the Oriana Kingdom. And we've heard talk that there are even more victims across the world.\"",
                "line": 615
            },
            {
                "text": "\"But it was the Cult of Diablos that was behind all that!\"",
                "line": 616
            },
            {
                "text": "\"The Shadow Garden made the Cult up. In order to cover up their own crimes, they invented a criminal enterprise that doesn't actually exist.\"",
                "line": 617
            },
            {
                "text": "\"You seriously think anyone's going to believe that deranged nonsense?!\"",
                "line": 618
            },
            {
                "text": "\"Here's our proof.\"",
                "line": 619
            },
            {
                "text": "\"Huh?\"",
                "line": 620
            },
            {
                "text": "Adder hands Alexia a hefty document. On the cover, it says \"How the Shadow Garden Invented the Cult of Diablos.\"",
                "line": 621
            },
            {
                "text": "\"A thirty-four-year-old man confessed that he pretended to be a Cult adherent on the Shadow Garden's orders. They took his family hostage, so he had no choice but to obey them. A twenty-eight-year-old woman was kidnapped by the Shadow Garden and forced to forge documents about the Cult of Diablos. A fifty-seven-year-old man was\u2014\"",
                "line": 622
            },
            {
                "text": "\"This is all bullshit!!\" Alexia throws the document on the ground. \"These confessions aren't worth the paper they're written on! If anything's been forged, it's this!!\"",
                "line": 623
            },
            {
                "text": "\"Don't be uncouth, Princess Alexia. Are you accusing these fine people of falsifying their testimonies?\"",
                "line": 624
            },
            {
                "text": "\"I'm not even convinced they exist!\"",
                "line": 625
            },
            {
                "text": "\"We have material evidence as well, you know. This here proves that the Shadow Garden\u2014\"",
                "line": 626
            },
            {
                "text": "\"I can't take this anymore!\"",
                "line": 627
            },
            {
                "text": "When Adder tries to hand her something, Alexia shoves it aside. Adder's eyes narrow.",
                "line": 628
            },
            {
                "text": "\"You have to open your eyes, Iris,\" Alexia pleads. \"Why are you listening to this charlatan? Please, look at me!\"",
                "line": 629
            },
            {
                "text": "Iris averts her gaze. \"You're the one who needs to open your eyes, Alexia.\"",
                "line": 630
            },
            {
                "text": "\"I'm begging you here. They're trying to free the right arm of Diablos!\"",
                "line": 631
            },
            {
                "text": "\"The Shadow Garden has pulled the wool over your eyes. All those people you thought were working for the Cult were acting as another arm of the Shadow Garden.\"",
                "line": 632
            },
            {
                "text": "\"You're wrong, Iris!! You have to listen to me!!\"",
                "line": 633
            },
            {
                "text": "As Iris turns her back on Alexia, Alexia reaches out for her.",
                "line": 634
            },
            {
                "text": "Slap.",
                "line": 635
            },
            {
                "text": "Iris swats Alexia's hand away.",
                "line": 636
            },
            {
                "text": "\"But...\"",
                "line": 637
            },
            {
                "text": "\"My enemy is Shadow, and I'll mow down anyone who gets in my way. Even my own sister.\"",
                "line": 638
            },
            {
                "text": "With that, Iris leaves.",
                "line": 639
            },
            {
                "text": "\"The Crimson Order is busy dealing with the Shadow Garden,\" Adder says triumphantly. \"I'm afraid we need to take our leave.\"",
                "line": 640
            },
            {
                "text": "Alexia stares in shock as her sister goes.",
                "line": 641
            },
            {
                "text": "Then she hears a voice from her side and turns to see a familiar face. \"Princess Alexia...\"",
                "line": 642
            },
            {
                "text": "\"Marco...\"",
                "line": 643
            },
            {
                "text": "It's one of the Crimson Order's founding members. He's still young, but Glen trusted him a lot, and Alexia had always assumed that Marco would be the one to fill Glen's shoes.",
                "line": 644
            },
            {
                "text": "\"I'm sorry, Princess Alexia.\" Marco walks briskly off, unable to meet Alexia's gaze.",
                "line": 645
            },
            {
                "text": "\"You too, Marco?\"",
                "line": 646
            },
            {
                "text": "Marco doesn't answer her question. Members of the Order carry the librarian's corpse away.",
                "line": 647
            },
            {
                "text": "The forbidden book tumbles from Alexia's hand.",
                "line": 648
            },
            {
                "text": "A golden tail sways amid the white fog.",
                "line": 649
            },
            {
                "text": "\"Hmm-hmm-hmm, hmm-hmm-hmm.\"",
                "line": 650
            },
            {
                "text": "There's even some idle humming.",
                "line": 651
            },
            {
                "text": "The girl's graceful footsteps are like those of a dancer. There are red pools of blood all around her, and each step she takes is accompanied by a loud squelch.",
                "line": 652
            },
            {
                "text": "\"You're certainly in a good mood, Zeta.\"",
                "line": 653
            },
            {
                "text": "On hearing her name, Zeta stops mid-hum. \"I was just at the good part.\"",
                "line": 654
            },
            {
                "text": "\"My apologies.\"",
                "line": 655
            },
            {
                "text": "\"Hmph.\" Zeta twirls a blood-flecked chakram around her finger.",
                "line": 656
            },
            {
                "text": "A short, hooded girl emerges from the fog. \"If you're thinking of throwing that at me, please don't.\"",
                "line": 657
            },
            {
                "text": "\"I'm not. Where's Victoria?\"",
                "line": 658
            },
            {
                "text": "\"Working on the plan.\"",
                "line": 659
            },
            {
                "text": "\"Mm.\"",
                "line": 660
            },
            {
                "text": "\"I have a report from her.\"",
                "line": 661
            },
            {
                "text": "\"Mmm.\" All of a sudden, Zeta stops spinning her chakram and hurls it into the air.",
                "line": 662
            },
            {
                "text": "Shlunk.",
                "line": 663
            },
            {
                "text": "A severed head falls from above. It cracks and shatters with a look of shock still etched on its face.",
                "line": 664
            },
            {
                "text": "\"Good spot.\"",
                "line": 665
            },
            {
                "text": "\"Mm.\"",
                "line": 666
            },
            {
                "text": "\"I have a report from Victoria.\"",
                "line": 667
            },
            {
                "text": "\"Mmm.\"",
                "line": 668
            },
            {
                "text": "\"It would appear that Master Shadow intervened on behalf of Princess Alexia and the sister.\"",
                "line": 669
            },
            {
                "text": "\"That's Claire to you.\"",
                "line": 670
            },
            {
                "text": "The chakram whirls, and the girl's hood flutters. \"My apologies.\"",
                "line": 671
            },
            {
                "text": "\"Make sure it doesn't happen again. So? What did he do?\"",
                "line": 672
            },
            {
                "text": "\"After dispatching the librarian, he brought them back out of the Sanctuary.\"",
                "line": 673
            },
            {
                "text": "\"Clever. Fenrir is in trouble now.\"",
                "line": 674
            },
            {
                "text": "\"That's right. He doesn't have many moves available to him. How is your progress coming along?\"",
                "line": 675
            },
            {
                "text": "\"Hmm?\"",
                "line": 676
            },
            {
                "text": "\"You know, analyzing the Sanctuary.\"",
                "line": 677
            },
            {
                "text": "\"Oh, I'm done.\"",
                "line": 678
            },
            {
                "text": "\"Already? But it's only been a few days.\"",
                "line": 679
            },
            {
                "text": "\"Eta's artifact is great.\" Zeta produces a strange palm-size device. When she imbues it with magic, it begins faintly glowing. \"It makes magic circuits visible. You can tell where they're flowing and what they do at a glance.\"",
                "line": 680
            },
            {
                "text": "Thin veins of light spread outward. They pulsate and lead to a set of pillars of red light. Inside each of the four pillars, there's an academy student hooked up to a slender tube.",
                "line": 681
            },
            {
                "text": "\"They're trying to use the students' magic to break the seal,\" Zeta explains.",
                "line": 682
            },
            {
                "text": "\"Looks like they don't have enough mana.\"",
                "line": 683
            },
            {
                "text": "\"Yeah. They need high-quality magic. From the heroes' descendants. I've figured out how the Cult sealed Diablos and how they built the Sanctuary.\"",
                "line": 684
            },
            {
                "text": "\"Then I guess we're done here.\"",
                "line": 685
            },
            {
                "text": "\"Mm.\"",
                "line": 686
            },
            {
                "text": "\"What do you want to do? If we destroy the tubes, the seal will stay protected.\"",
                "line": 687
            },
            {
                "text": "Zeta ponders the hooded girl's question for a moment.",
                "line": 688
            },
            {
                "text": "However, there's no need for her to do so. She already knows her answer. Zeta merely wants to steel her own resolve.",
                "line": 689
            },
            {
                "text": "\"We leave them be.\"",
                "line": 690
            },
            {
                "text": "\"Are you sure about this?\"",
                "line": 691
            },
            {
                "text": "\"I've made my choice.\" Zeta strides through the fog. After passing the pillars of red light and arriving at a massive door, she lays her hand on it. \"The right arm is sealed away just past here.\"",
                "line": 692
            },
            {
                "text": "\"What do you intend on doing?\"",
                "line": 693
            },
            {
                "text": "\"While we're here, I thought I'd pay my respects.\"",
                "line": 694
            },
            {
                "text": "\"Should we give the sign?\"",
                "line": 695
            },
            {
                "text": "\"If you want. Zeta, going in.\"",
                "line": 696
            },
            {
                "text": "Zeta pours magic into the door.",
                "line": 697
            },
            {
                "text": "The door is covered in ancient script, and it's locked shut with layers of thick chains.",
                "line": 698
            },
            {
                "text": "\"Will it open?\" the hooded girl asks Zeta.",
                "line": 699
            },
            {
                "text": "\"Dunno. But I know who sealed the demon's arm here.\"",
                "line": 700
            },
            {
                "text": "\"Who?\"",
                "line": 701
            },
            {
                "text": "\"Here she comes.\"",
                "line": 702
            },
            {
                "text": "Zeta pours even more magic in.",
                "line": 703
            },
            {
                "text": "When she does, the door flashes red, and the magic circuits in the air expand. There's a creak, and the door starts vibrating ever so slightly.",
                "line": 704
            },
            {
                "text": "However, it doesn't open.",
                "line": 705
            },
            {
                "text": "The magic circuits gather in front of the door, and the vein-thin lights coalesce into the shape of a person.",
                "line": 706
            },
            {
                "text": "\"Fall back.\"",
                "line": 707
            },
            {
                "text": "\"Yes, ma'am.\"",
                "line": 708
            },
            {
                "text": "On Zeta's order, the hooded girl backs all the way up.",
                "line": 709
            },
            {
                "text": "Eventually, the thin lights vanish, revealing a therianthrope woman standing in their place. She has golden hair, golden cat ears, a golden tail, and decidedly feline eyes. She bears a striking likeness to Zeta.",
                "line": 710
            },
            {
                "text": "The hooded girl gulps. \"Is that...?\"",
                "line": 711
            },
            {
                "text": "\"Nice to meet you, therianthrope hero.\"",
                "line": 712
            },
            {
                "text": "\"Zeta, what in the world is going on?\"",
                "line": 713
            },
            {
                "text": "\"None of this is new information,\" Zeta says matter-of-factly.",
                "line": 714
            },
            {
                "text": "Not a moment later, the therianthrope hero's claws flash, and Zeta's head goes flying.",
                "line": 715
            },
            {
                "text": "After spinning through the air, the severed head turns into black mist and vanishes. As it does, Zeta's torso vanishes as well.",
                "line": 716
            },
            {
                "text": "The black mist melds into the white fog, and from it, Zeta emerges unscathed. She floats in the air and casts a cold look down at the therianthrope hero.",
                "line": 717
            },
            {
                "text": "\"But I wanted to double-check it,\" she says.",
                "line": 718
            },
            {
                "text": "The hero doesn't reply. She simply gazes up at Zeta with eyes devoid of emotion.",
                "line": 719
            },
            {
                "text": "Still floating in the air, Zeta shoots a question down at the hooded girl. \"Do you remember the day you first met our lord?\"",
                "line": 720
            },
            {
                "text": "The hooded girl presses a hand to her chest. \"Of course. How could I ever forget?\"",
                "line": 721
            },
            {
                "text": "\"Me neither. I'll never forget that day.\"",
                "line": 722
            },
            {
                "text": "Zeta stares intently at the therianthrope hero like she's seeing the distant past just behind the woman's frame.",
                "line": 723
            },
            {
                "text": "\"I was just a tiny kitten\u2014and our master took me in.\"",
                "line": 724
            },
            {
                "text": "That there is what fuels Zeta's resolve.",
                "line": 725
            },
            {
                "text": "\"Bye-bye, Hero. I've chosen a different path than you.\" Zeta turns to go.",
                "line": 726
            },
            {
                "text": "The short, hooded girl hurriedly follows her. \"Are you sure about this? We haven't given the sign yet.\"",
                "line": 727
            },
            {
                "text": "\"Mm. We can give it next time. We've achieved our current goal. Now we lurk in the shadows and wait for our moment.\"",
                "line": 728
            },
            {
                "text": "\"Then wait we shall.\"",
                "line": 729
            },
            {
                "text": "As they talk, the two girls disappear into the fog.",
                "line": 730
            },
            {
                "text": "The therianthrope hero silently watches them go.",
                "line": 731
            }
        ],
        "c4": [
            {
                "text": "Dang, last night was wild. Who woulda guessed that the culprit behind the missing students was the head librarian, of all people?",
                "line": 1
            },
            {
                "text": "After I spotted him kidnapping Claire and Alexia, I saw him tie them up amid that weird fog. Gotta say, that's pretty creepy.",
                "line": 2
            },
            {
                "text": "It's fairly obvious the guy was a deviant. Despite being conflicted about his own nature, though, he wasn't able to bring himself to stop.",
                "line": 3
            },
            {
                "text": "Everyone's got their own raison d'\u00eatre, but when those goals run contrary to what society deems acceptable, people are forced to make a choice. They can follow their hearts, or they can snuff out their dreams.",
                "line": 4
            },
            {
                "text": "I fall into the former camp, and so did he.",
                "line": 5
            },
            {
                "text": "The fact that the mastermind behind the disappearances was just a pervert doesn't quite play into my whole shadowbroker narrative, but there's no arguing with the cold, hard facts.",
                "line": 6
            },
            {
                "text": "When morning comes around, the academy is swarming with people from the Knight Order. I assume they're investigating the whole librarian situation.",
                "line": 7
            },
            {
                "text": "\"Huh? Is that who I think it is?\"",
                "line": 8
            },
            {
                "text": "There's a dark-haired girl trudging past the knights with her head hung low.",
                "line": 9
            },
            {
                "text": "\"Yeah, that's Claire all right.\"",
                "line": 10
            },
            {
                "text": "It's always a massive headache when she spots me, so this is the point where I'd normally go hide, but it seems like that won't be necessary today. Doesn't look like she's gonna be noticing much of anything like that.",
                "line": 11
            },
            {
                "text": "\"Hum-dee-dum, dum-dee-dum.\" I hum an idle little song to myself and bask in the morning light.",
                "line": 12
            },
            {
                "text": "There I am, a perfectly unremarkable student.",
                "line": 13
            },
            {
                "text": "The question is, how should I react when I \"find out\" about the librarian? Should I go for the classic background character freakout, or should I tremble in subdued fear?",
                "line": 14
            },
            {
                "text": "As I'm trying to make up my mind, I walk past my sister.",
                "line": 15
            },
            {
                "text": "\"Hold it right there.\" She catches my collar in a vise grip.",
                "line": 16
            },
            {
                "text": "\"H-hey there, Sis. You noticed me?\" I turn around to find her glaring daggers at me.",
                "line": 17
            },
            {
                "text": "\"Of course I did. You got anything you want to say to me?\"",
                "line": 18
            },
            {
                "text": "\"G-good morning?\"",
                "line": 19
            },
            {
                "text": "\"Good morning, Cid. Anything else?\"",
                "line": 20
            },
            {
                "text": "\"Not, uh...not that I can think of,\" I reply after pondering for a moment.",
                "line": 21
            },
            {
                "text": "I'm trying to remember if there was anything I needed to talk to my sister about, but nothing springs to mind.",
                "line": 22
            },
            {
                "text": "\"I'm depressed, Cid.\"",
                "line": 23
            },
            {
                "text": "\"Oh.\"",
                "line": 24
            },
            {
                "text": "\"My shoulders are slumped, and I look listless.\"",
                "line": 25
            },
            {
                "text": "\"Uh-huh.\"",
                "line": 26
            },
            {
                "text": "\"I would think that there's something any good brother would say to his sister at times like these.\"",
                "line": 27
            },
            {
                "text": "\"Uh...\"",
                "line": 28
            },
            {
                "text": "I allow myself three seconds to think.",
                "line": 29
            },
            {
                "text": "\"You look down. Is something wrong?\"",
                "line": 30
            },
            {
                "text": "\"...You pass. But just barely.\"",
                "line": 31
            },
            {
                "text": "\"Just barely?\"",
                "line": 32
            },
            {
                "text": "\"You need to be more worried. Also, you need to intuit what's wrong from the get-go.\"",
                "line": 33
            },
            {
                "text": "\"I think you're setting the bar a bit too high.\"",
                "line": 34
            },
            {
                "text": "\"Still, it sounds like you're curious, so I guess I can tell you.\"",
                "line": 35
            },
            {
                "text": "\"I don't think I ever said I that was\u2014\"",
                "line": 36
            },
            {
                "text": "\"You're curious, right?\"",
                "line": 37
            },
            {
                "text": "\"Oh man, I'm totally curious!\" I say as Claire wrings my neck.",
                "line": 38
            },
            {
                "text": "\"It's too noisy here, so let's find somewhere else to talk.\"",
                "line": 39
            },
            {
                "text": "\"Uh, what about getting to class?\"",
                "line": 40
            },
            {
                "text": "\"School got canceled today.\" Claire turns and looks back at the school building. \"The head librarian died.\"",
                "line": 41
            },
            {
                "text": "I decide to respond to her hushed reveal with shock, just like any good background character would.",
                "line": 42
            },
            {
                "text": "I'm sitting in the fancy parlor and leisurely drinking my milk tea.",
                "line": 43
            },
            {
                "text": "Apparently, this is some sort of special room where only big shots are allowed in. I have no idea why they let a backwater noble like my sister in.",
                "line": 44
            },
            {
                "text": "\"I'm sorry, I can't tell you any details. I don't want you getting dragged in,\" Claire says with a grim expression. \"But the Knight Order is trying to hush up the truth about the librarian...and I'm helpless to stop them. It's so frustrating...\"",
                "line": 45
            },
            {
                "text": "\"The truth about the librarian, huh?\"",
                "line": 46
            },
            {
                "text": "It makes sense that they don't want word getting out about what a pervert he was. The Knight Order's plan to protect his reputation has my full support.",
                "line": 47
            },
            {
                "text": "\"There are some things that are more important than the truth,\" I offer.",
                "line": 48
            },
            {
                "text": "Claire shoots me a scary glare. \"Are you implying I'm in the wrong here?!\"",
                "line": 49
            },
            {
                "text": "\"That's not what I'm saying. It's just...\"",
                "line": 50
            },
            {
                "text": "\"Just what?\"",
                "line": 51
            },
            {
                "text": "My sister's body language is making it abundantly clear that if I don't consider my next words carefully, they might be my last.",
                "line": 52
            },
            {
                "text": "\"The world's darkness runs deep. Not everyone's prepared to accept how deep it goes.\"",
                "line": 53
            },
            {
                "text": "\"...You're saying there would be panic if the news went public?\"",
                "line": 54
            },
            {
                "text": "\"Yeah, probably.\"",
                "line": 55
            },
            {
                "text": "I mean, think of how traumatized all the girls who'd ever gone to the library would be.",
                "line": 56
            },
            {
                "text": "\"But that doesn't mean it's okay to just sweep everything under the rug!\" Claire cries.",
                "line": 57
            },
            {
                "text": "\"Of course not. That's why it's important to have people cracking the case in secret.\"",
                "line": 58
            },
            {
                "text": "\"\u2018Cracking the case in secret'...\"",
                "line": 59
            },
            {
                "text": "\"Yeah. Even when the truth gets buried, that doesn't mean things have to end there.\"",
                "line": 60
            },
            {
                "text": "\"Oh, I see... So it's up to me to crack the case.\"",
                "line": 61
            },
            {
                "text": "\"Uh, there's really no need for it to be you.\"",
                "line": 62
            },
            {
                "text": "\"I know the truth, and I'm free to operate unfettered... Sure enough, I've been chosen.\" She clutches at the bandage on her right hand.",
                "line": 63
            },
            {
                "text": "\"Uh, you really haven't been.\"",
                "line": 64
            },
            {
                "text": "\"I'm the only one who can protect you, Cid.\"",
                "line": 65
            },
            {
                "text": "\"Uh, I'm perfectly capable of protecting myself.\"",
                "line": 66
            },
            {
                "text": "\"I know, I know. You don't want me to worry about you.\" She hugs me so tight, I hear an ominous crack. \"But I'm going to protect this academy, this nation, and you, too. I'm going to protect all of it.\"",
                "line": 67
            },
            {
                "text": "\"...Fine. Knock yourself out.\"",
                "line": 68
            },
            {
                "text": "\"I'm not letting things end like this. No way, no how.\"",
                "line": 69
            },
            {
                "text": "Still trapped in my sister's arms, I take another sip of my milk tea. Gotta say, this stuff really hits the spot.",
                "line": 70
            },
            {
                "text": "School is canceled for the day, so I head back to my dorm and immediately get accosted by Skel and Po.",
                "line": 71
            },
            {
                "text": "\"Dang, that was messed up,\" Skel says. \"I can't believe the head librarian got whacked like that.\"",
                "line": 72
            },
            {
                "text": "\"Right?\" agrees Po. \"The you-know-which organization might actually have been behind it.\"",
                "line": 73
            },
            {
                "text": "\"Feels like this just got real serious all of a sudden.\"",
                "line": 74
            },
            {
                "text": "\"Yeah, everyone's freaking out.\"",
                "line": 75
            },
            {
                "text": "The two of them are drinking top-shelf Mitsugoshi coffee and lounging about like they own the place.",
                "line": 76
            },
            {
                "text": "They don't, though. It's my room.",
                "line": 77
            },
            {
                "text": "\"Shouldn't you two be doing your extra assignments?\" I say, putting more weight in my voice to make the subtext clear: GTFO, guys.",
                "line": 78
            },
            {
                "text": "\"I'll just do it later,\" Skel replies. \"Now that we've got the day off, I've got loads of time.\"",
                "line": 79
            },
            {
                "text": "\"Yeah, same,\" Po adds. \"If we get so hung up on homework that we let all the little joys of life pass us by, then what are we even living for?\"",
                "line": 80
            },
            {
                "text": "The two of them loudly slurp their coffee.",
                "line": 81
            },
            {
                "text": "\"Sure, but none of that explains what you're doing in my room.\"",
                "line": 82
            },
            {
                "text": "\"'Cause this is where the high-end Mitsugoshi coffee is, duh,\" says Skel.",
                "line": 83
            },
            {
                "text": "Without so much as asking permission, Po fishes through my drawer and tears into a package of chocolate. \"And you've got high-end Mitsugoshi sweets, too.\"",
                "line": 84
            },
            {
                "text": "\"Dude, those are mine.\"",
                "line": 85
            },
            {
                "text": "\"It's fine,\" Po assures me. \"We're all friends here.\"",
                "line": 86
            },
            {
                "text": "\"And if we're being honest,\" Skel adds, \"there's no way you get enough allowance to be able to afford this stuff.\"",
                "line": 87
            },
            {
                "text": "\"We've thought it was weird for a while now.\"",
                "line": 88
            },
            {
                "text": "The two of them get dead serious out of nowhere, and they turn to look back at me.",
                "line": 89
            },
            {
                "text": "\"I\u2014I, uh...\"",
                "line": 90
            },
            {
                "text": "They've got me dead to rights.",
                "line": 91
            },
            {
                "text": "A single cup of high-end Mitsugoshi coffee will run you north of two thousand zeni. It doesn't make sense for a broke-ass aristocrat like me to constantly have it stocked in my room.",
                "line": 92
            },
            {
                "text": "That said, it's not my fault Gamma keeps sending me cases of the stuff.",
                "line": 93
            },
            {
                "text": "\"Fess up, Cid,\" says Skel. \"You've been buying on credit, haven't you?\"",
                "line": 94
            },
            {
                "text": "\"Huh?\"",
                "line": 95
            },
            {
                "text": "\"If you have, you gotta tell us, man,\" Po urges.",
                "line": 96
            },
            {
                "text": "\"No, wait, back up a minute. What's this about buying on credit?\"",
                "line": 97
            },
            {
                "text": "\"Dude, we found flyers for it all over your room.\" Skel shows me one. \"\u2018Mitsugoshi Bank's Hot New Service, Mitsugoshi Installment Payments.' If you knew about this awesome new way to borrow money, why didn't you tell us?\"",
                "line": 98
            },
            {
                "text": "\"M-Mitsugoshi Installment Payments?\"",
                "line": 99
            },
            {
                "text": "With a sinking feeling in my gut, I read over the flyer and discover that it's advertising a payment plan that would've looked right at home back in my old world. Now that I think about it, I guess I did explain to Gamma how payment plans worked, huh?",
                "line": 100
            },
            {
                "text": "\"D-don't tell me you guys went and borrowed money, did you?\"",
                "line": 101
            },
            {
                "text": "\"Of course we did,\" Po replies. \"They lent me two million zeni, no questions asked.\"",
                "line": 102
            },
            {
                "text": "\"And I borrowed a cool mil,\" Skel says. \"Now all I gotta do is make the fixed monthly payments of twenty thousand zeni apiece. How sweet is that?!\"",
                "line": 103
            },
            {
                "text": "\"Oh boy...\"",
                "line": 104
            },
            {
                "text": "They're doomed.",
                "line": 105
            },
            {
                "text": "\"What's up, Cid?\" Po asks. \"You've got that face like you just realized something.\"",
                "line": 106
            },
            {
                "text": "\"What's the interest rate on those plans?\"",
                "line": 107
            },
            {
                "text": "\"Two percent a month, I think?\" replies Skel.",
                "line": 108
            },
            {
                "text": "\"Yeah, twenty-four percent a year. That's dirt cheap, compared to other lenders in the capital.\"",
                "line": 109
            },
            {
                "text": "I stare vacantly into space.",
                "line": 110
            },
            {
                "text": "\"Let me get this straight,\" I tell them. \"You borrowed a million zeni at a twenty-four percent annual rate with twenty thousand\u2013zeni monthly payments, right?\"",
                "line": 111
            },
            {
                "text": "\"Yeah.\"",
                "line": 112
            },
            {
                "text": "\"What's wrong with that?\"",
                "line": 113
            },
            {
                "text": "\"Have you guys done the math on how long that'll take you to pay off?\"",
                "line": 114
            },
            {
                "text": "If they've got a 24 percent rate on a million zeni, then their annual interest sums up to two hundred forty thousand zeni.",
                "line": 115
            },
            {
                "text": "If their monthly payments are twenty thousand zeni, then their annual payments sum up to two hundred forty thousand zeni.",
                "line": 116
            },
            {
                "text": "Two hundred forty thousand zeni in interest, two hundred forty thousand zeni in payments.",
                "line": 117
            },
            {
                "text": "In other words, all they're doing is covering the interest, and they're never gonna stop having to make payments for the rest of their lives.",
                "line": 118
            },
            {
                "text": "\"I dunno, like, five years?\" Po says.",
                "line": 119
            },
            {
                "text": "\"Why would I bother calculating that stuff? All I gotta do is make my monthly twenty-K payments,\" adds Skel.",
                "line": 120
            },
            {
                "text": "\"The fact they don't make you do all that math is how you know Mitsugoshi is running an honest shop.\"",
                "line": 121
            },
            {
                "text": "\"...I think you guys might wanna consider bumping up the size of your payments.\"",
                "line": 122
            },
            {
                "text": "\"What are you talking about, dude? If Mitsugoshi's fine with us just paying twenty K, why would we go out of our way to give them more money?\"",
                "line": 123
            },
            {
                "text": "Po agrees with Skel. \"Yeah, you're talking nonsense. I've heard of students who borrowed as much as ten million zeni from them. They'll lend money to anyone, from aristocrats on down to students. As long as your family's got property, you're golden.\"",
                "line": 124
            },
            {
                "text": "I stare up at the ceiling.",
                "line": 125
            },
            {
                "text": "\"Now,\" Po announces, \"let's get this party started.\"",
                "line": 126
            },
            {
                "text": "\"We just borrowed a bunch of money, and you know what that means,\" Skel says.",
                "line": 127
            },
            {
                "text": "The two of them produce a deck of cards.",
                "line": 128
            },
            {
                "text": "\"Really? More poker?\"",
                "line": 129
            },
            {
                "text": "\"What, too chicken?\" Skel teases.",
                "line": 130
            },
            {
                "text": "\"If you thought we'd let you quit while you were ahead, think again,\" Po tells me. \"Now we've got full war chests.\"",
                "line": 131
            },
            {
                "text": "\"Nah...\"",
                "line": 132
            },
            {
                "text": "I let out a big sigh. Then I slam a pile of bills on the table.",
                "line": 133
            },
            {
                "text": "\"...Let's go double or nothing.\"",
                "line": 134
            },
            {
                "text": "\"Dammit, we'll get you for this!\" wails Skel.",
                "line": 135
            },
            {
                "text": "\"B-but that's impossible... Y-you cheated! You must have cheated!!\" whines Po.",
                "line": 136
            },
            {
                "text": "I grab the two of them by the scruffs of their necks and toss them out into the hallway. \"Yeah, yeah, whatever. It's late, so try to keep it down.\"",
                "line": 137
            },
            {
                "text": "\"Hold on! At least let us play one more hand!\"",
                "line": 138
            },
            {
                "text": "\"We can't go out like this! Not on a loss!\"",
                "line": 139
            },
            {
                "text": "\"Sorry, but I don't have any use for guys with empty pockets. Good luck with your payments.\"",
                "line": 140
            },
            {
                "text": "After slamming the door shut behind them, I lock it.",
                "line": 141
            },
            {
                "text": "I hear hushed murmurs come from the other side.",
                "line": 142
            },
            {
                "text": "\"How? After all that time we spent honing our cheating?\"",
                "line": 143
            },
            {
                "text": "\"I can't believe it. Did we seriously just lose everything?\"",
                "line": 144
            },
            {
                "text": "\"Did we seriously just get cleaned out?\"",
                "line": 145
            },
            {
                "text": "\"It seems so impossible, but here we are...\"",
                "line": 146
            },
            {
                "text": "\"Dammit. Let's go to Mitsugoshi and borrow some more money.\"",
                "line": 147
            },
            {
                "text": "I nipped all their attempts at cheating in the bud, of course, and as soon as they tried to cheat me, I gained the right to return their trickery in kind.",
                "line": 148
            },
            {
                "text": "I gather up the winnings piled on my table and smirk.",
                "line": 149
            },
            {
                "text": "\"Looks like Skel and Po just became my new piggy banks. And I couldn't have done it without you, Mitsugoshi Installment Payments.\"",
                "line": 150
            },
            {
                "text": "As soon as money flows from Mitsugoshi Bank to Skel and Po, I'll be right there to scoop it up. That's the law of the jungle for you.",
                "line": 151
            },
            {
                "text": "\"Hum-dee-dum, dum-dee-dum.\"",
                "line": 152
            },
            {
                "text": "I hum an idle little song to myself as I stash the money in my War Chest.",
                "line": 153
            },
            {
                "text": "Then I turn and call out the window, \"Sorry about the wait, Zeta. You can come on in now.\"",
                "line": 154
            },
            {
                "text": "A golden-haired therianthrope soundlessly appears in my room. \"Happy birthday, Master.\"",
                "line": 155
            },
            {
                "text": "\"Huh? Oh yeah, that's right. I guess I'm sixteen now.\"",
                "line": 156
            },
            {
                "text": "Sure enough, the date's rolled over. And whaddaya know, it's my birthday.",
                "line": 157
            },
            {
                "text": "\"Congratulations.\"",
                "line": 158
            },
            {
                "text": "\"Thanks.\"",
                "line": 159
            },
            {
                "text": "Honestly, I don't think that's anything to be celebrated. I've only got about six hundred years of life in me, and now, one of those years is gone.",
                "line": 160
            },
            {
                "text": "To think that I still haven't become the perfect eminence in shadow yet. Human life spans really are fleeting.",
                "line": 161
            },
            {
                "text": "\"Do you not like birthdays?\" Zeta asks me.",
                "line": 162
            },
            {
                "text": "\"They're not my favorite, that's for sure. Each one that passes means my life has that much less time left.\"",
                "line": 163
            },
            {
                "text": "\"I get how you feel.\" Zeta offers me a small, relaxed smile. It's rare to see a smile so genuine out of her.",
                "line": 164
            },
            {
                "text": "\"Sometimes, it feels like life's too short to achieve my goals.\"",
                "line": 165
            },
            {
                "text": "\"Mm. I feel you,\" she agrees again. Then she looks at me with a serious expression on her face. \"I came to talk about something important.\"",
                "line": 166
            },
            {
                "text": "\"All right.\"",
                "line": 167
            },
            {
                "text": "Is this about money?",
                "line": 168
            },
            {
                "text": "Zeta's done a lot for me, so I wouldn't mind lending her a thousand zeni or so.",
                "line": 169
            },
            {
                "text": "\"You want eternal life, right?\"",
                "line": 170
            },
            {
                "text": "I give my answer instantly: \"Yeah, of course.\"",
                "line": 171
            },
            {
                "text": "There's a bit where I wait a hundred years for people to start forgetting about me, then reappear out of nowhere and have them all go, \"Wait, is he that guy from the legends?\" and with eternal life, I could run that bit as many times as I wanted. As long as I'm alive, I can push the reset button on my eminence in shadow setup over and over again.",
                "line": 172
            },
            {
                "text": "My original plan was to use magic to live for six hundred years, but that's nowhere near long enough to enjoy everything life has to offer. I just want to keep on being me forever.",
                "line": 173
            },
            {
                "text": "C'mon, God, do a guy a favor and build me a system where I can buy years off people who don't wanna grow old.",
                "line": 174
            },
            {
                "text": "\"I understand how you feel, Master.\"",
                "line": 175
            },
            {
                "text": "\"Uh-huh.\"",
                "line": 176
            },
            {
                "text": "\"So I'm making moves to get you there.\"",
                "line": 177
            },
            {
                "text": "\"Uh-huh?\"",
                "line": 178
            },
            {
                "text": "\"Do you remember the first day we met?\"",
                "line": 179
            },
            {
                "text": "\"Uh-huh.\"",
                "line": 180
            },
            {
                "text": "It was raining that day, right?",
                "line": 181
            },
            {
                "text": "\"It was snowing and bitter cold.\"",
                "line": 182
            },
            {
                "text": "Ah, snowing.",
                "line": 183
            },
            {
                "text": "\"When I got the possession, I learned how ugly people were.\"",
                "line": 184
            },
            {
                "text": "\"Uh-huh.\"",
                "line": 185
            },
            {
                "text": "\"And I thought. About the people chasing us. About how stupid the world is.\"",
                "line": 186
            },
            {
                "text": "Her gaze turns cold.",
                "line": 187
            },
            {
                "text": "For as long as I've known her, she's always gotten that look from time to time. It's pretty darn badass, so I've secretly taken to mimicking it.",
                "line": 188
            },
            {
                "text": "\"People repeat their mistakes over and over, never tiring,\" Zeta continues. \"The world never gets less stupid.\"",
                "line": 189
            },
            {
                "text": "\"Uh-huh.\"",
                "line": 190
            },
            {
                "text": "\"I thought I wanted to die. My dying wouldn't change the world. My living wouldn't change the world. But when I met you, I saw there was something I needed to do...\"",
                "line": 191
            },
            {
                "text": "With that, Zeta launches into her story.",
                "line": 192
            },
            {
                "text": "The tribe the girl was born into was one of the highest-status groups among all therianthropes: the Golden Leopard clan. Allegedly, even the therianthrope king showed deference to them.",
                "line": 193
            },
            {
                "text": "The Golden Leopard clan had conquered countless smaller clans, and the girl was the firstborn daughter of the family that ruled over them all. She was given the name Lilim.",
                "line": 194
            },
            {
                "text": "Lilim's immense talent was obvious from a young age, and her family raised her with pride, realizing that it would be more valuable to keep her rather than to marry her off. Her father, the clan patriarch, imported books so he could give her the best education possible. Even for the comparatively intellectual Golden Leopards, doing so was all but unheard-of.",
                "line": 195
            },
            {
                "text": "The girl took to those books like a fish to water, and she waited with bated breath for the day she could use their knowledge for the benefit of her clan.",
                "line": 196
            },
            {
                "text": "Lilim was loved by her entire clan, and she grew up in the blink of an eye.",
                "line": 197
            },
            {
                "text": "When she turned twelve, disaster struck.",
                "line": 198
            },
            {
                "text": "That was when the black bruises started showing up on her belly. They were small at first, so she didn't pay them a second thought, but when they started spreading, Lilim got worried and went to her mother for advice.",
                "line": 199
            },
            {
                "text": "Her mother went pale.",
                "line": 200
            },
            {
                "text": "Then, without saying a word, she called for Lilim's father. When he showed up, he went pale as well.",
                "line": 201
            },
            {
                "text": "That was the point where Lilim realized that something serious was going on.",
                "line": 202
            },
            {
                "text": "Her father took another look at her belly.",
                "line": 203
            },
            {
                "text": "\"...It's the possession,\" he said, barely able to get out the words.",
                "line": 204
            },
            {
                "text": "The possession. Lilim turned the term over in her head. On an intellectual level, she knew what it was. After how many books she'd read, she was confident that she was the most learned of anyone in her clan.",
                "line": 205
            },
            {
                "text": "No matter how hard she tried, though, she couldn't reconcile the knowledge in her head with the black bruises on her belly.",
                "line": 206
            },
            {
                "text": "The possession.",
                "line": 207
            },
            {
                "text": "She pondered it over and over and over again, and before she knew it, she was crying.",
                "line": 208
            },
            {
                "text": "Lilim was a clever girl, and once she came to grips with what was going on, she knew exactly what would happen to her. The possessed were unclean, and that filth needed to be purged before it had a chance to spread. That was the clan's rule.",
                "line": 209
            },
            {
                "text": "It was a big problem to have such a stain born into the patriarch's bloodline, especially for a clan as esteemed as the Golden Leopards. This didn't affect just her; the situation could bring down her entire family.",
                "line": 210
            },
            {
                "text": "Lilim wiped away her tears. \"Father, you have to burn me to death.\"",
                "line": 211
            },
            {
                "text": "\"But...\"",
                "line": 212
            },
            {
                "text": "\"The bruises aren't that big yet. The impurity is still small. If you burn me now, you save the family. Surely, that will satisfy the clan.\"",
                "line": 213
            },
            {
                "text": "\"But\u2014!\"",
                "line": 214
            },
            {
                "text": "\"Please, Father. For our family. For my little brother.\"",
                "line": 215
            },
            {
                "text": "Lilim glanced down at the baby her mother was cradling. He had been born only half a year prior, but someday, he was going to be the head of the family.",
                "line": 216
            },
            {
                "text": "She bowed her head as she pleaded. \"Please... You have to. You have to!\"",
                "line": 217
            },
            {
                "text": "\"...I won't.\"",
                "line": 218
            },
            {
                "text": "\"Father!\"",
                "line": 219
            },
            {
                "text": "\"I will not! It said it in that elf book\u2014it said there's a way to cure the possession.\"",
                "line": 220
            },
            {
                "text": "\"There's no proof it's true!\"",
                "line": 221
            },
            {
                "text": "\"It said there was a panacea that could cure it.\"",
                "line": 222
            },
            {
                "text": "Her father began eagerly searching for the book in question. He normally seemed so large to Lilim, but in that moment, something about him felt terribly small.",
                "line": 223
            },
            {
                "text": "\"What's come over you, Father? Pull yourself together. This isn't worth putting your faith in. Mother, talk some sense into him.\"",
                "line": 224
            },
            {
                "text": "However, her mother just hung her head and said nothing.",
                "line": 225
            },
            {
                "text": "\"Here, look. It's written right here.\"",
                "line": 226
            },
            {
                "text": "\"Father, get ahold of\u2014\"",
                "line": 227
            },
            {
                "text": "Lilim stopped halfway through her sentence.",
                "line": 228
            },
            {
                "text": "There were teardrops falling on the cover of the book her father handed her. It was the first time she ever saw him cry.",
                "line": 229
            },
            {
                "text": "\"Father...\"",
                "line": 230
            },
            {
                "text": "\"I'll find it, I swear. Please, just trust in me and wait.\"",
                "line": 231
            },
            {
                "text": "\"Father, I...\"",
                "line": 232
            },
            {
                "text": "Lilim felt her father's warm arms wrap around her, and her mother joined in.",
                "line": 233
            },
            {
                "text": "\"Father... Mother...\"",
                "line": 234
            },
            {
                "text": "Lilim had been fighting back the tears, but at that point, they began falling freely.",
                "line": 235
            },
            {
                "text": "The next day, her father set out on a journey.",
                "line": 236
            },
            {
                "text": "\"He said he will return within a month,\" Lilim's mother explained as she wrapped a bandage around Lilim's belly. \"You'll have to hide your wound until then. Don't leave the house, no matter what.\"",
                "line": 237
            },
            {
                "text": "\"Yes, Mother.\"",
                "line": 238
            },
            {
                "text": "\"Don't you worry. It's going to be okay. I'll make sure our family stays safe.\"",
                "line": 239
            },
            {
                "text": "Her mother offered her a gentle smile.",
                "line": 240
            },
            {
                "text": "Lily touched the bandage her mother wrapped and smiled as well. Something told her that everything was going to be okay.",
                "line": 241
            },
            {
                "text": "A month later, Lilim was awoken in the dead of night.",
                "line": 242
            },
            {
                "text": "It was noisy outside. Perhaps her father had returned. She followed her mother outside.",
                "line": 243
            },
            {
                "text": "There, she found her father. He was bound in rope and kneeling on the ground.",
                "line": 244
            },
            {
                "text": "\"Fa...ther?\"",
                "line": 245
            },
            {
                "text": "Surrounding him was a throng of torches, and his clothes were stained with blood.",
                "line": 246
            },
            {
                "text": "Her mother bravely spoke up. \"What do you people think you're doing?\"",
                "line": 247
            },
            {
                "text": "\"Word is, one of you is stained.\" A torchbearer stepped forward from the crowd. It was the chief of a Golden Leopard branch family. \"Stains have to be purged. That's the rule.\"",
                "line": 248
            },
            {
                "text": "\".........\"",
                "line": 249
            },
            {
                "text": "Lilim's mother stood before her daughter wordlessly.",
                "line": 250
            },
            {
                "text": "The branch family chief pointed his sword at Lilim's father's throat. \"Who's the stained one? Fess up.\"",
                "line": 251
            },
            {
                "text": "\"...I don't know,\" her father choked out.",
                "line": 252
            },
            {
                "text": "\"Oh, really now?\"",
                "line": 253
            },
            {
                "text": "The branch chief plunged his sword into her father's shoulder.",
                "line": 254
            },
            {
                "text": "Blood gushed forth, and the sound of bone snapping followed.",
                "line": 255
            },
            {
                "text": "Lilim's father didn't scream. He simply remained motionless, his head hung low.",
                "line": 256
            },
            {
                "text": "\"Pathetic.\" The branch chief thrust his sword again.",
                "line": 257
            },
            {
                "text": "\"Stop this at once!\" Lilim's mother cried. \"If you think you can get away with attacking your chief, you're wildly\u2014\"",
                "line": 258
            },
            {
                "text": "\"Oh, I can get away with a lot. I'm the new chief of the Golden Leopards. This sad sack betrayed the clan.\"",
                "line": 259
            },
            {
                "text": "\"What proof could you possibly have for that?\"",
                "line": 260
            },
            {
                "text": "\"A Holy Teachings priest came to the village and told me. Said that he smelled the possession. Out east, the Church is in charge of gathering up the possessed and purifying them.\"",
                "line": 261
            },
            {
                "text": "Another man strode forth from the group. He was dressed in priest vestments and wore a thin smile. \"The possessed must be purified without delay. If left untended, their blight can spread, sending entire villages to ruin\u2014\"",
                "line": 262
            },
            {
                "text": "Lilim's father's hoarse voice cut in and interrupted the priest. \"Liar.\"",
                "line": 263
            },
            {
                "text": "\"I'm sorry, therianthrope, did you just say something?\"",
                "line": 264
            },
            {
                "text": "\"I called you a liar, human.\"",
                "line": 265
            },
            {
                "text": "The priest shot Lilim's father a glare positively dripping with contempt, and her father met it head-on.",
                "line": 266
            },
            {
                "text": "\"And what exactly am I lying about, pray tell?\"",
                "line": 267
            },
            {
                "text": "\"Everything. The possession is a hoax, cooked up by the Church.\"",
                "line": 268
            },
            {
                "text": "\"What a riveting theory.\" The branch chief laughed. \"Looks like he finally lost it.\"",
                "line": 269
            },
            {
                "text": "The crowd around them joined in and chuckled as well. Meanwhile, Lilim and her mother found themselves unable to comprehend what her father was talking about.",
                "line": 270
            },
            {
                "text": "All the while, the priest and Lilim's father continued glaring at each other without so much as blinking.",
                "line": 271
            },
            {
                "text": "\"What proof do you have, therianthrope?\"",
                "line": 272
            },
            {
                "text": "\"The Golden Leopards have a bloodline dating back for generations, and all that time, they've been passing down an epic from one patriarch to the next\u2014an epic about the therianthrope hero, one of the three that took on Diablos.\"",
                "line": 273
            },
            {
                "text": "\"So a silly legend.\"",
                "line": 274
            },
            {
                "text": "\"It's a legend, all right, but it's a little different from the one the rest of the world has heard. Our version casts the three heroes as women instead of men, and it calls the possession a blessing rather than a curse.\"",
                "line": 275
            },
            {
                "text": "The priest's gaze harshened. \"Everything you just said is blasphemy against the Church.\"",
                "line": 276
            },
            {
                "text": "\"I'd wondered about that for a long time. Why was the Golden Leopard version of the story so different from the rest of the world's?\"",
                "line": 277
            },
            {
                "text": "\"That's a stupid question. Legends shift and change over time. That's what they do.\"",
                "line": 278
            },
            {
                "text": "\"I'm not so sure about that. Generations of patriarchs took great care in passing down our epic. They wouldn't have let it just shift like that. And most importantly, we're the Golden Leopards\u2014descendants of one of the three heroes who defeated Diablos, Lily the Golden Leopard. That right there is your answer.\"",
                "line": 279
            },
            {
                "text": "\"...What are you implying?\"",
                "line": 280
            },
            {
                "text": "\"That the version of the story the Golden Leopards passed down is the truth, and that the Holy Teachings took that truth and distorted it,\" Lilim's father declared with unclouded eyes.",
                "line": 281
            },
            {
                "text": "A long hush fell over the gathering.",
                "line": 282
            },
            {
                "text": "Eventually, quiet chuckling began spreading like a contagion, eventually growing into raucous laughter that rocked the entire village.",
                "line": 283
            },
            {
                "text": "The branch chief clutched at his chest as he howled. \"Ah-ha-ha-ha-ha! That's great. That's a riot! I can't even remember the last time I laughed this hard!!\"",
                "line": 284
            },
            {
                "text": "\"It really is funny, isn't it?\" The priest laughed as well. In his case, though, the look in his eyes was as far from mirthful as could be.",
                "line": 285
            },
            {
                "text": "\"Okay, okay, let me get this straight,\" the branch chief said through his chuckles. \"You're saying that the possession is a hoax cooked up by the Church, and that the possessed are really descendants of the heroes. That's why there's no need to cleanse the stain. Do I have that all right?\"",
                "line": 286
            },
            {
                "text": "\"...Yes.\"",
                "line": 287
            },
            {
                "text": "\"Bullshit!!\" The branch chief's roar shook the air. \"You would risk the entire clan over some delusional fantasy?!\"",
                "line": 288
            },
            {
                "text": "\"You might not believe it, but that's the truth!\"",
                "line": 289
            },
            {
                "text": "\"Quit spouting your lies!\"",
                "line": 290
            },
            {
                "text": "The branch chief plunged his fist into Lilim's father's face. He hit him once, then again, then again and again and again.",
                "line": 291
            },
            {
                "text": "Lilim stood stock-still. Her knees trembled as she stared in horror.",
                "line": 292
            },
            {
                "text": "\"All right, enough playing around.\" The branch chief wiped off the red stains on his hands. \"Who's the stained one?\"",
                "line": 293
            },
            {
                "text": "A small smile played at the corner of Lilim's father's mouth. \".........\"",
                "line": 294
            },
            {
                "text": "\"If you don't tell us, I'll put the whole lot of them to the torch.\"",
                "line": 295
            },
            {
                "text": "\"You'd do that no matter what I said. All you're here for is to torment me.\"",
                "line": 296
            },
            {
                "text": "The branch chief fell silent. That alone was answer enough. \"Have it your way, then,\" the branch chief finally said as he wrenched free his sword.",
                "line": 297
            },
            {
                "text": "\"S...stop it!\"",
                "line": 298
            },
            {
                "text": "All eyes gathered on Lilim.",
                "line": 299
            },
            {
                "text": "\"I-it... It's...it's me...\" Her legs trembled beneath her. \"I\u2014I... I'm...the p-possessed...\"",
                "line": 300
            },
            {
                "text": "She could hear how pathetic she sounded.",
                "line": 301
            },
            {
                "text": "Her vision swam with tears. Then she met the gaze of the man looking straight at her\u2014her father.",
                "line": 302
            },
            {
                "text": "\"Listen to me.\" His voice was uncharacteristically gentle. \"The Golden Leopard clan is descended from Lily, the hero who once saved the world. Our bloodline is something to be proud of. The question is, why did Lily entrust us with her tale? Why did generations of our patriarchs pass it down? There's a reason for that. It's because we have a duty.\"",
                "line": 303
            },
            {
                "text": "\"Father...\"",
                "line": 304
            },
            {
                "text": "\"The hero's blood runs thicker in you than in anyone. You're smart, and you're strong, and I couldn't be prouder of you. You have to head east, Lilim. There's someone in the Midgar Kingdom who can cure the possession. That's where our duty lies.\"",
                "line": 305
            },
            {
                "text": "\"B-but, Father... I can't\u2014\"",
                "line": 306
            },
            {
                "text": "\"You can do it, Lilim.\" With that, her father turned to his wife. \"Look after them.\"",
                "line": 307
            },
            {
                "text": "She gave him a small nod, then pulled Lilim in close.",
                "line": 308
            },
            {
                "text": "\"You really think we'll let them get away?\"",
                "line": 309
            },
            {
                "text": "The therianthrope men already had them surrounded.",
                "line": 310
            },
            {
                "text": "\"I'll make sure they do,\" Lilim's father replied. \"Even if it costs me my life...\"",
                "line": 311
            },
            {
                "text": "A loud creaking filled the air.",
                "line": 312
            },
            {
                "text": "It was coming from inside her father's body. Something inside him was pulsating.",
                "line": 313
            },
            {
                "text": "A moment later, a tremendous amount of magic exploded from his body, sending his restraints flying.",
                "line": 314
            },
            {
                "text": "\"Wh-where'd that power come from?!\" the branch chief yelled.",
                "line": 315
            },
            {
                "text": "\"The veins of Golden Leopards run thick with feral blood. I just took mine and set it free.\"",
                "line": 316
            },
            {
                "text": "Her father's golden hair shot outward. It was like a mane, like he was regressing from a person to a beast.",
                "line": 317
            },
            {
                "text": "\"Th-that's impossible. No one ever told me about\u2014\"",
                "line": 318
            },
            {
                "text": "\"This is a forbidden technique taught only to the clan's patriarch\u2014one that shreds its own user's life.\"",
                "line": 319
            },
            {
                "text": "Tears of blood ran down her father's cheeks. His muscles rippled, veins bursting and blood spurting out.",
                "line": 320
            },
            {
                "text": "\"GRAHHHHHHHHHHHH!!\"",
                "line": 321
            },
            {
                "text": "With that, he became a frenzied beast and sent the other therianthropes flying.",
                "line": 322
            },
            {
                "text": "Then he positioned himself between his family and their foes. \"Go!!\" he bellowed. \"Run!!\"",
                "line": 323
            },
            {
                "text": "\"Come with us, Father!!\"",
                "line": 324
            },
            {
                "text": "\"I can't!!\"",
                "line": 325
            },
            {
                "text": "Her father looked back over her shoulder, and when Lilim saw his face, she gasped.",
                "line": 326
            },
            {
                "text": "\".........\"",
                "line": 327
            },
            {
                "text": "It was almost completely bestial.",
                "line": 328
            },
            {
                "text": "\"Your father is eventually going to become totally feral. We have to get out of here before he does...\"",
                "line": 329
            },
            {
                "text": "\"N-no! Father!\"",
                "line": 330
            },
            {
                "text": "Lilim reached for her father's back. However, her hand never got there.",
                "line": 331
            },
            {
                "text": "\"What a fascinating ability. I never imagined I'd find descendants all the way out here.\"",
                "line": 332
            },
            {
                "text": "The priest cut in and swung down a reddish-brown chain.",
                "line": 333
            },
            {
                "text": "\"GRAHHHHHH!!\"",
                "line": 334
            },
            {
                "text": "Her father swatted away the chain. The spiked weight on its end went flying.",
                "line": 335
            },
            {
                "text": "\"Goodness me, this is incredible stuff... I just came out to retrieve a possessed, but it would appear my journey's borne unexpected fruit.\"",
                "line": 336
            },
            {
                "text": "\"Hurry, Lilim!! Get out of here!!\"",
                "line": 337
            },
            {
                "text": "Her father tackled the priest. That gave them a tiny opening, and her mother used it to scoop Lilim up and run.",
                "line": 338
            },
            {
                "text": "\"Father... FAAAAAATHERRRRRRRR!!\"",
                "line": 339
            },
            {
                "text": "The last thing Lilim saw of her father was him looking wonderfully large.",
                "line": 340
            },
            {
                "text": "Still carrying Lilim, her mother sprinted through the dense forest. Her footsteps made no sound; the woman was a master of stealth.",
                "line": 341
            },
            {
                "text": "However, their pursuers drew ever closer.",
                "line": 342
            },
            {
                "text": "Some members of the Golden Leopard clan had exceptionally keen noses, and some of them must have joined in the hunt.",
                "line": 343
            },
            {
                "text": "\"We need to split up.\"",
                "line": 344
            },
            {
                "text": "When they got to a river, her mother stopped and set Lilim down. The forest was bitter cold at night, and there was a light dusting of snow falling from the sky.",
                "line": 345
            },
            {
                "text": "\"I'll head southeast along the river. Lilim, you cross here and head due east.\"",
                "line": 346
            },
            {
                "text": "With that, Lilim's mother took the small boy off her back and made to hand him over. \"Take care of your brother for me, Lilim.\"",
                "line": 347
            },
            {
                "text": "\"No...! I want to stay with you, Mother!\"",
                "line": 348
            },
            {
                "text": "\"Don't be huffy. This is only for a bit. We'll meet back up in Midgar.\" She hugged Lilim tight.",
                "line": 349
            },
            {
                "text": "\"But then why...why are you giving me my brother?\"",
                "line": 350
            },
            {
                "text": "\"Lilim...\"",
                "line": 351
            },
            {
                "text": "\"I don't know how to fight. And I can't run well like you can.\"",
                "line": 352
            },
            {
                "text": "\"Lilim, listen to me.\"",
                "line": 353
            },
            {
                "text": "\"Surely, he'd be safer with you!\"",
                "line": 354
            },
            {
                "text": "\"Listen to me, Lilim!!\"",
                "line": 355
            },
            {
                "text": "\"No...\" Lilim buried her face in her mother's chest and shook her head.",
                "line": 356
            },
            {
                "text": "\"Lilim...\"",
                "line": 357
            },
            {
                "text": "\"If I hadn't gotten the possession, if you two had just burned me to death... Father would still be... This is all my fault...!!\"",
                "line": 358
            },
            {
                "text": "\"Your birth changed him, Lilim. All he cared about before was fighting with his sword, so when I saw him reading you a picture book, my heart skipped a beat. He went around bragging to anyone who would listen what a genius you were.\"",
                "line": 359
            },
            {
                "text": "\"Father...\"",
                "line": 360
            },
            {
                "text": "\"Getting to watch you grow up is the happiest we've ever been. Lilim...you might not know how to fight, but you're such a smart girl. You have the knowledge to get you through any adversity. That's why I know you'll be okay.\"",
                "line": 361
            },
            {
                "text": "\"Mother...\"",
                "line": 362
            },
            {
                "text": "\"Please, Lilim. Look after him.\"",
                "line": 363
            },
            {
                "text": "Her mother handed her the small baby. Her brother looked up at her with confused, innocent eyes.",
                "line": 364
            },
            {
                "text": "Large tears rolled down Lilim's cheeks as she took him.",
                "line": 365
            },
            {
                "text": "\"Thank you, Lilim. We've been so happy, ever since you first came into our lives.\"",
                "line": 366
            },
            {
                "text": "\"Mother... Promise me we'll meet in Midgar...\"",
                "line": 367
            },
            {
                "text": "\"You have to go now. Cross the river and hide your scent.\"",
                "line": 368
            },
            {
                "text": "Lilim stepped in the shallow river and did as instructed, then headed into the eastern forest, looking back over her shoulder every few steps.",
                "line": 369
            },
            {
                "text": "After making sure Lilim and her brother had gone, her mother took off at a sprint and followed the riverbank to the southeast.",
                "line": 370
            },
            {
                "text": "Her loud footsteps echoed through the darkened woods.",
                "line": 371
            },
            {
                "text": "Lilim went east.",
                "line": 372
            },
            {
                "text": "East, as though pulled by some invisible force.",
                "line": 373
            },
            {
                "text": "She ran through the dim forest. The winter night chilled her to the bone, and her hands and feet felt like they'd been frozen solid.",
                "line": 374
            },
            {
                "text": "Then, right as dawn broke, she emerged from the woods.",
                "line": 375
            },
            {
                "text": "\"I know this...\"",
                "line": 376
            },
            {
                "text": "It was the first time she'd ever seen those sandy shores or that water that stretched onward to the horizon, but she knew exactly what she was looking at.",
                "line": 377
            },
            {
                "text": "\"...It's the sea.\"",
                "line": 378
            },
            {
                "text": "She licked the surf, just to be sure.",
                "line": 379
            },
            {
                "text": "\"It's salty.\"",
                "line": 380
            },
            {
                "text": "There could be no mistaking it.",
                "line": 381
            },
            {
                "text": "\"Father...there's nothing here.\"",
                "line": 382
            },
            {
                "text": "Lilim let out a foggy breath. There was snow falling from above.",
                "line": 383
            },
            {
                "text": "She sat down on the cold beach and hung her head.",
                "line": 384
            },
            {
                "text": "\"I went east...and there's nothing here. Where's my duty? Where's Midgar? I want my mother...\"",
                "line": 385
            },
            {
                "text": "Her feet felt like bricks. She couldn't move another step. The black bruises had spread all the way up her chest, and it throbbed with pain.",
                "line": 386
            },
            {
                "text": "However, she was still holding her brother in her arms. She'd been entrusted with his tiny life, and she knew she had to protect him.",
                "line": 387
            },
            {
                "text": "\"Let's go. Let's cross the sea.\"",
                "line": 388
            },
            {
                "text": "She knew there was a country across the sea. She didn't know if it was the Midgar Kingdom or not, but her father had said it was, so surely it must be.",
                "line": 389
            },
            {
                "text": "Her mother was waiting for her there. Perhaps her father was, too.",
                "line": 390
            },
            {
                "text": "If she continued along the beach, she would eventually find a fishing village. Somehow, she was going to have to persuade them to give her a ride on one of their boats.",
                "line": 391
            },
            {
                "text": "Lilim set off again.",
                "line": 392
            },
            {
                "text": "Right as she did, though...",
                "line": 393
            },
            {
                "text": "\"Ohhh, so this is where you went.\"",
                "line": 394
            },
            {
                "text": "...the priest arrived. Blood dripped from his rattling chains.",
                "line": 395
            },
            {
                "text": "Lilim shuffled backward with trembling footsteps. \"S-stay away from me...\"",
                "line": 396
            },
            {
                "text": "\"Now, here's the question. Where's the possessed?\" The priest smiled evilly and held up a severed head. \"It wasn't him.\"",
                "line": 397
            },
            {
                "text": "\"F...Faaaaaaaaaaatherrrrrrrrrrr!!\"",
                "line": 398
            },
            {
                "text": "The head belonged to her father.",
                "line": 399
            },
            {
                "text": "Seeing how bloodied it was, it wasn't hard for her to imagine how valiant his death had been.",
                "line": 400
            },
            {
                "text": "\"Wasn't her, either.\" The priest held up another head.",
                "line": 401
            },
            {
                "text": "\"Motherrrrrrrrrrrrrrrrrrrrr!!\"",
                "line": 402
            },
            {
                "text": "That one was her mother's.",
                "line": 403
            },
            {
                "text": "She had died with her eyes wide and her gaze fixed on something.",
                "line": 404
            },
            {
                "text": "\"Why...? Why?!\"",
                "line": 405
            },
            {
                "text": "\"That just leaves two options.\"",
                "line": 406
            },
            {
                "text": "The priest tossed the heads aside and strode toward Lilim.",
                "line": 407
            },
            {
                "text": "\"Nooooooo... Father... Mother...\"",
                "line": 408
            },
            {
                "text": "\"There are nearly no reports of males with the possession, but that doesn't mean they don't exist.\"",
                "line": 409
            },
            {
                "text": "Tears streamed down Lilim's cheeks as she hugged the baby tight. \"S-stay away... D-don't you lay a finger on my brother...\"",
                "line": 410
            },
            {
                "text": "\"Now, which one of you is the possessed?\"",
                "line": 411
            },
            {
                "text": "\"I-it's me. I'm the possessed, so please, let my brother go\u2014\"",
                "line": 412
            },
            {
                "text": "\"There's a good girl. I appreciate your honesty.\" The priest patted Lilim's head with his bloodied hand.",
                "line": 413
            },
            {
                "text": "\"Eek...\"",
                "line": 414
            },
            {
                "text": "\"You and I might end up spending quite a bit of time together, so perhaps I'd best introduce myself. My name is High Priest Petos, and you, young lady, are an extremely valuable test subject.\"",
                "line": 415
            },
            {
                "text": "\"Wh...what about my brother...?\"",
                "line": 416
            },
            {
                "text": "\"Don't worry. I have no use for children without the possession.\" Petos tapped her brother's head with his chain. \"I'll be sure to give him a painless death.\"",
                "line": 417
            },
            {
                "text": "Blood splattered.",
                "line": 418
            },
            {
                "text": "Lilim felt her brother's head tumble from her arms.",
                "line": 419
            },
            {
                "text": "\"AaaaaaaaaahhhhhhhhHHHHHHHHHHHHHHHHH!!\"",
                "line": 420
            },
            {
                "text": "As Lilim screamed, Petos looked down at her and let out a manic laugh. \"Heh-heh. Hee-hee-hee-hee-hee-hee-hee-hee. Let's celebrate, shall we?\"",
                "line": 421
            },
            {
                "text": "\"AHHHHHHHHHHHHHHHHHH!! Why?! Why would you do that?!\"",
                "line": 422
            },
            {
                "text": "\"What an auspicious day this has been. You've opened a path for me straight to the Rounds.\"",
                "line": 423
            },
            {
                "text": "Lilim scooped up the three heads lying on the ground\u2014her father's, her mother's, and her brother's.",
                "line": 424
            },
            {
                "text": "\"Ahhhhhhhhh... I'll kill you... I'll kill you dead!!\"",
                "line": 425
            },
            {
                "text": "Hatred burned in Lilim's eyes as she screamed.",
                "line": 426
            },
            {
                "text": "However, Petos ignored her cries and turned his back on her. \"Did you finish?\"",
                "line": 427
            },
            {
                "text": "When he called over to the forest, a group clad in strange robes appeared from within it.",
                "line": 428
            },
            {
                "text": "\"With no survivors,\" one member replied.",
                "line": 429
            },
            {
                "text": "\"Show me.\"",
                "line": 430
            },
            {
                "text": "A collection of heads rolled across the sandy beach. All of them belonged to Golden Leopards.",
                "line": 431
            },
            {
                "text": "\"We took out the entire Golden Leopard clan. Now we don't have to worry about that information leaking.\"",
                "line": 432
            },
            {
                "text": "\"Ah, isn't that nice?\" Petos directed his reply over at Lilim. \"Look, your father's killer is dead.\"",
                "line": 433
            },
            {
                "text": "With a laugh, he tossed one of the heads over to her. It belonged to the branch chief.",
                "line": 434
            },
            {
                "text": "\"AhhhhhhhhhhhhhhhhhhHHHHHHHHHHH!!\"",
                "line": 435
            },
            {
                "text": "Lilim took a running start across the beach and charged at Petos. However, he knocked her away with his chain.",
                "line": 436
            },
            {
                "text": "\"Koff... K-kill...you... Kill...\"",
                "line": 437
            },
            {
                "text": "She couldn't summon any strength. Her consciousness began fading.",
                "line": 438
            },
            {
                "text": "\"Get her tied up and bring her to the Variola lab. I need to lay some groundwork with the faction...\"",
                "line": 439
            },
            {
                "text": "And then she passed out completely.",
                "line": 440
            },
            {
                "text": "When Lilim woke up, she found herself in a carriage. Her hands and feet were bound, and her mouth tasted of blood.",
                "line": 441
            },
            {
                "text": "\"I'll kill them... I'll kill all of them.\"",
                "line": 442
            },
            {
                "text": "Her mutter earned her a bemused scoff from the man guarding her.",
                "line": 443
            },
            {
                "text": "\"I'll kill them...\"",
                "line": 444
            },
            {
                "text": "Her tear ducts had long since run dry. At that point, the only thing keeping her going was hate.",
                "line": 445
            },
            {
                "text": "What she needed was power.",
                "line": 446
            },
            {
                "text": "Knowledge was useless. It couldn't protect anyone. The only thing that could free her was pure, unbridled strength.",
                "line": 447
            },
            {
                "text": "So she prayed: \"I want power...\" Power enough to break her bindings, power enough to kill the priest, power enough to\u2014",
                "line": 448
            },
            {
                "text": "The voice seemed to come from nowhere. \"You want power, do you?\"",
                "line": 449
            },
            {
                "text": "\"Huh...?\"",
                "line": 450
            },
            {
                "text": "Lilim looked around, but the only person there was the guard.",
                "line": 451
            },
            {
                "text": "\"Do you want power?\"",
                "line": 452
            },
            {
                "text": "That time, she was certain she heard it. The voice was deep, like it was rumbling up from the depths of the abyss.",
                "line": 453
            },
            {
                "text": "\"I do! If I just had power... If I just had power!!\"",
                "line": 454
            },
            {
                "text": "\"Ha-ha, the kid's lost it.\"",
                "line": 455
            },
            {
                "text": "Apparently, the guard couldn't hear the voice. However, it reached Lilim's ears loud and clear.",
                "line": 456
            },
            {
                "text": "She didn't care if she was just imagining things or if that voice belonged to the Devil himself. That would have been fine by her.",
                "line": 457
            },
            {
                "text": "All she cared about was power.",
                "line": 458
            },
            {
                "text": "\"If it's power you want...then power I shall grant you.\"",
                "line": 459
            },
            {
                "text": "Suddenly, bluish-purple magic materialized in the carriage.",
                "line": 460
            },
            {
                "text": "\"Wh-what is that light...?!\"",
                "line": 461
            },
            {
                "text": "The carriage skidded to a halt, and men piled in from outside.",
                "line": 462
            },
            {
                "text": "\"What happened?! What's up with the magic?!\"",
                "line": 463
            },
            {
                "text": "The magic broke into fine particles and began spiraling.",
                "line": 464
            },
            {
                "text": "Then a figure appeared in the middle of the spiral. It was a boy dressed in a jet-black longcoat.",
                "line": 465
            },
            {
                "text": "\"How the hell'd he get in here?!\"",
                "line": 466
            },
            {
                "text": "\"Grab him! Get him out of the carriage!\"",
                "line": 467
            },
            {
                "text": "\"I AM...\"",
                "line": 468
            },
            {
                "text": "At the spiral's center, the boy raised an ebony blade aloft. The air itself trembled from the raw vastness of his magic.",
                "line": 469
            },
            {
                "text": "Lilim watched as the unparalleled power gathered in the boy's sword.",
                "line": 470
            },
            {
                "text": "That right there\u2014that was what she was looking for: enough power to crush everything in her way.",
                "line": 471
            },
            {
                "text": "\"...ALMOST ATOMIC.\"",
                "line": 472
            },
            {
                "text": "The magic exploded outward.",
                "line": 473
            },
            {
                "text": "All sound vanished, and the whole world was drowned in bluish-purple light.",
                "line": 474
            },
            {
                "text": "\"Eh, I'd give that, like, sixty out of a hundred. Still needs some work.\"",
                "line": 475
            },
            {
                "text": "Lilim awoke to the sound of the boy's voice. She must have passed out.",
                "line": 476
            },
            {
                "text": "\"This isn't enough. Not for what I'm trying to achieve...\"",
                "line": 477
            },
            {
                "text": "The boy was muttering from the center of a crater. The carriage had been blown away, and the creepy group had vanished without a trace.",
                "line": 478
            },
            {
                "text": "Lilim trembled. But not out of fear.",
                "line": 479
            },
            {
                "text": "\"E-excuse me...,\" she started to say.",
                "line": 480
            },
            {
                "text": "\"Huh? Oh, you're up. Here, lemme fix that possession for you.\"",
                "line": 481
            },
            {
                "text": "With that, the boy released a burst of bluish-purple magic. After enveloping Lilim's black bruises in warmth, the magic flashed and returned her skin to its original condition, as if it had wound back time itself.",
                "line": 482
            },
            {
                "text": "\"No way... It can't be.\"",
                "line": 483
            },
            {
                "text": "By the time the magic faded, the bruises were completely gone. The possession had been tormenting her, and just like that, he'd cured it.",
                "line": 484
            },
            {
                "text": "\"That one, though, that one I'd give ninety-five out of a hundred. My control was almost flawless. That said, it did wear me out a bit.\"",
                "line": 485
            },
            {
                "text": "\"He was right...\" Heartfelt tears began welling up in Lilim's eyes. \"He was right... Father was right...\"",
                "line": 486
            },
            {
                "text": "\"Huh?\"",
                "line": 487
            },
            {
                "text": "\"He said that the possessed were descendants of the heroes... And that there was someone out east who could cure the possession... He was right about everything.\"",
                "line": 488
            },
            {
                "text": "\"Dang, I had no idea our story already spread all the way out here.\"",
                "line": 489
            },
            {
                "text": "\"So, why? Why did Father and Mother have to die...? Why? None of them did anything wrong!\"",
                "line": 490
            },
            {
                "text": "The boy scratched his head for a moment. \"It's 'cause of the Cult of Diablos. All the bad stuff is their fault.\"",
                "line": 491
            },
            {
                "text": "\"The Cult of Diablos?\"",
                "line": 492
            },
            {
                "text": "\"Yeah. Those men just now weren't from the Holy Teachings Church. They were secretly Cultists. They hid the truth, and now they're trying to eliminate the heroes' descendants with history none the wiser and revive the demon Diablos. For them, the heroes' descendants are a threat.\" His black longcoat flapped behind him as he spoke. \"We are the Shadow Garden. We lurk in the darkness and hunt down shadows.\"",
                "line": 493
            },
            {
                "text": "\"Lurk in the darkness and hunt down shadows...\"",
                "line": 494
            },
            {
                "text": "Lilim's heart trembled.",
                "line": 495
            },
            {
                "text": "Everything was all coming together.",
                "line": 496
            },
            {
                "text": "\"So Father was right after all.\"",
                "line": 497
            },
            {
                "text": "\"Yep.\"",
                "line": 498
            },
            {
                "text": "\"He told me there was someone in Midgar who could cure the possession. He told me that was where my duty lay.\"",
                "line": 499
            },
            {
                "text": "\"Huh? Yeah, for sure.\"",
                "line": 500
            },
            {
                "text": "\"You must be my duty.\"",
                "line": 501
            },
            {
                "text": "That was her duty.",
                "line": 502
            },
            {
                "text": "Her father died, her mother died, and her brother died. All of them had sacrificed themselves to keep her alive.",
                "line": 503
            },
            {
                "text": "\"I need power... Please, give me the power to hunt them!\"",
                "line": 504
            },
            {
                "text": "\"Very well. She'll be along shortly.\"",
                "line": 505
            },
            {
                "text": "\"Who?\"",
                "line": 506
            },
            {
                "text": "The moment the question left her mouth, there was a flicker in the dark. That flicker turned out to be a beautiful blond elf dressed in a black bodysuit.",
                "line": 507
            },
            {
                "text": "\"I told you to wait up! We can't keep up with your speed,\" the girl groused.",
                "line": 508
            },
            {
                "text": "\"Well, the mission's finished.\"",
                "line": 509
            },
            {
                "text": "The elf girl shot the boy a reproachful look. \"I can see that, yes. That's definitely a Cult carriage, albeit one that's been smashed to tiny bits. How many times do I have to remind you to leave enough evidence for us to collect?\"",
                "line": 510
            },
            {
                "text": "The boy scratched his head for a moment.",
                "line": 511
            },
            {
                "text": "His elven counterpart heaved a defeated sigh, then looked over at Lilim. \"So she's the new one?\"",
                "line": 512
            },
            {
                "text": "\"That's right. I trust you can handle the rest.\"",
                "line": 513
            },
            {
                "text": "\"Huh? Wait, hold on!\"",
                "line": 514
            },
            {
                "text": "The boy turned to Lilim. \"You can go ahead and get the details from Alpha.\" With that, he vanished into thin air.",
                "line": 515
            },
            {
                "text": "\"I swear! He always does this, just disappearing out of nowhere.\"",
                "line": 516
            },
            {
                "text": "\"Um...who are you?\" Lilim asked.",
                "line": 517
            },
            {
                "text": "The girl gave her a warm smile. \"Sorry about all this. Looks like you got quite the scare. I'm Alpha, the first member of the Shadow Garden. It's nice to meet you.\"",
                "line": 518
            },
            {
                "text": "\"Alpha... I'm\u2014\"",
                "line": 519
            },
            {
                "text": "\"Don't.\" Right when Lilim was about to introduce herself, Alpha cut her off. \"You're going to be living under a new name from now on.\"",
                "line": 520
            },
            {
                "text": "\"Huh?\"",
                "line": 521
            },
            {
                "text": "\"We lurk in the darkness and hunt down shadows. For us, our public personas are only just that. Only in darkness do we truly exist. Even though that means we may never be able to return to the light.\" Alpha held out a mask and fixed her beautifully clear blue eyes on Lilim. \"If you have enough resolve to do the same, then take this and become the Shadow Garden's sixth member, Zeta.\"",
                "line": 522
            },
            {
                "text": "\"Zeta,\" Lilim murmured, reflecting on the name. \"I'm...Zeta...\"",
                "line": 523
            },
            {
                "text": "\"Sounds like your resolve is firm. You have strong eyes. But...\"",
                "line": 524
            },
            {
                "text": "\"I want power.\"",
                "line": 525
            },
            {
                "text": "\"You have plenty of talent. You'll become powerful in time. But someday, that hatred of yours will...\"",
                "line": 526
            },
            {
                "text": "Alpha was about to say something, but she stopped herself. Her blue gaze lingered on Lilim for a good while longer.",
                "line": 527
            },
            {
                "text": "\"No, it's nothing,\" she said sadly.",
                "line": 528
            },
            {
                "text": "Up above in the night sky, the white snow continued falling in silence.",
                "line": 529
            },
            {
                "text": "\"Hmm. That's rough.\"",
                "line": 530
            },
            {
                "text": "Once Zeta finishes her story, he offers a short comment as he looks out the window.",
                "line": 531
            },
            {
                "text": "His words are blunt.",
                "line": 532
            },
            {
                "text": "However, they encapsulate everything they need to. Zeta wasn't looking for cheap sympathy.",
                "line": 533
            },
            {
                "text": "As such, she gives her reply just as bluntly. \"Yeah. Rough.\"",
                "line": 534
            },
            {
                "text": "She's taken her hatred from that day and sealed it deep within her heart. Unnecessary emotions will do nothing but get in the way of her plan.",
                "line": 535
            },
            {
                "text": "Before she even consciously noticed it, she began cutting down on her word use to avoid accidentally letting any of her feelings slip out.",
                "line": 536
            },
            {
                "text": "However, Zeta prefers it that way. Every time her feelings or body evolve, it makes her feel like she's getting closer to her goal.",
                "line": 537
            },
            {
                "text": "\"I'm a stray cat. Just a tiny kitten you took in. That's why I've thought a lot about what kind of world you want. You wouldn't tell me, so it's been a bit hard.\"",
                "line": 538
            },
            {
                "text": "\"Has it?\"",
                "line": 539
            },
            {
                "text": "\"Yeah. It has.\"",
                "line": 540
            },
            {
                "text": "Her master lifts his wineglass.",
                "line": 541
            },
            {
                "text": "Zeta swiftly grabs the bottle and tops him off. Then she nestles up close to him.",
                "line": 542
            },
            {
                "text": "\"You want eternal life. Now I understand what that means.\"",
                "line": 543
            },
            {
                "text": "\"I'm surprised you picked up on that.\"",
                "line": 544
            },
            {
                "text": "\"You're looking at the distant future. So am I.\"",
                "line": 545
            },
            {
                "text": "\"I see...\"",
                "line": 546
            },
            {
                "text": "He gazes into the deep darkness beyond the window. Zeta looks out at the deep darkness as well.",
                "line": 547
            },
            {
                "text": "\"I'm going to revive Diablos,\" she says.",
                "line": 548
            },
            {
                "text": "\"I see.\"",
                "line": 549
            },
            {
                "text": "\"So you aren't stopping me?\"",
                "line": 550
            },
            {
                "text": "\"I have no intention of rejecting your choice.\"",
                "line": 551
            },
            {
                "text": "\"You're too kind, Master. Too kind to make that choice yourself.\"",
                "line": 552
            },
            {
                "text": "\"Is that so?\"",
                "line": 553
            },
            {
                "text": "\"Kindness can't change the world. Your kindness is shackling you.\"",
                "line": 554
            },
            {
                "text": "\"...Is it, now?\"",
                "line": 555
            },
            {
                "text": "\"It is. But I'm not kind. I'll revive the demon, even if it puts the world in danger.\"",
                "line": 556
            },
            {
                "text": "\"You'll be reviled.\"",
                "line": 557
            },
            {
                "text": "\"Fine by me. The world needs this\"\u2014Zeta leans hesitantly against his shoulder\u2014\"so I'll take their revulsion in your place. That's my duty.\"",
                "line": 558
            },
            {
                "text": "\"I see...\"",
                "line": 559
            },
            {
                "text": "Zeta steps away and turns her back on him. \"If the time comes, cast me aside.\"",
                "line": 560
            },
            {
                "text": "With those final words, she vanishes into the night.",
                "line": 561
            },
            {
                "text": "Zeta stands on the nocturnal rooftop and looks down upon the academy. Her golden tail sways in the cold winter breeze.",
                "line": 562
            },
            {
                "text": "\"It's time,\" she murmurs.",
                "line": 563
            },
            {
                "text": "\"At long last?\"",
                "line": 564
            },
            {
                "text": "\"I see you've made your decision.\"",
                "line": 565
            },
            {
                "text": "There are two figures standing behind her.",
                "line": 566
            },
            {
                "text": "One of them is Victoria. The other is a girl with her hood hung low.",
                "line": 567
            },
            {
                "text": "\"I'm going to revive Diablos,\" Zeta declares.",
                "line": 568
            },
            {
                "text": "\"What did Master Shadow say?\" Victoria asks.",
                "line": 569
            },
            {
                "text": "\"We talked. That's all.\"",
                "line": 570
            },
            {
                "text": "\"Did you get his permission, then?\"",
                "line": 571
            },
            {
                "text": "\"That was never my plan. But if he was going to stop me, I would have stopped.\"",
                "line": 572
            },
            {
                "text": "Victoria smiles. \"I take it that means he has to tell you to stop.\"",
                "line": 573
            },
            {
                "text": "\"Nope. From here on, I'm acting of my own accord.\"",
                "line": 574
            },
            {
                "text": "\"You know this means betraying the Shadow Garden.\"",
                "line": 575
            },
            {
                "text": "\"I don't care. Alpha is too soft. She has no vision for after we crush the Cult. But I do.\" Zeta narrows her icy-purple eyes. \"I'll revive Diablos and obtain eternal life. Then I'll control the world forever.\"",
                "line": 576
            },
            {
                "text": "Victoria's cheeks flush with ecstasy. \"And Master Shadow will become a god.\"",
                "line": 577
            },
            {
                "text": "\"You'll be reviled,\" says the hooded girl, who'd remained silent throughout the rest of the exchange.",
                "line": 578
            },
            {
                "text": "\"Master wants eternal life. I'll shoulder all the sin.\"",
                "line": 579
            },
            {
                "text": "\"Let's do this, then, shall we? Long live Master Shadow.\"",
                "line": 580
            },
            {
                "text": "\"...The plan proceeds.\"",
                "line": 581
            },
            {
                "text": "Victoria and the hooded girl vanish without a sound.",
                "line": 582
            },
            {
                "text": "Now Zeta is alone on the rooftop. She stares intently at the academy's lights.",
                "line": 583
            },
            {
                "text": "\"I'll steal it all\u2014eternal life and control of the world. Then...we'll finally have a perfect world where mistakes never happen again.\"",
                "line": 584
            },
            {
                "text": "The lights waver in the darkness of the night. They remind Zeta of the torches from that night so long ago.",
                "line": 585
            },
            {
                "text": "\"This is my duty.\"",
                "line": 586
            },
            {
                "text": "She squeezes herself tight to double-check.",
                "line": 587
            },
            {
                "text": "Good, her knees aren't trembling.",
                "line": 588
            },
            {
                "text": "Her heart is still.",
                "line": 589
            },
            {
                "text": "Standing alone, she releases a long, foggy exhale into the night. Then she follows it with a few words.",
                "line": 590
            },
            {
                "text": "\"Father... Master... I'm strong now.\"",
                "line": 591
            }
        ],
        "c5": [
            {
                "text": "\"So they made their way to the deepest level, did they?\" Fenrir mutters amid the white fog.",
                "line": 1
            },
            {
                "text": "In front of the undamaged equipment, there's a pool of blood and two sets of footprints.",
                "line": 2
            },
            {
                "text": "\"They should have been able to destroy the devices. Did they realize we didn't have enough magic? No, even if they did, it would have been safer to destroy it anyway.\"",
                "line": 3
            },
            {
                "text": "The bloody footprints go right past the devices and on to the door beyond them.",
                "line": 4
            },
            {
                "text": "\"The door won't open until the seal's been undone. What did they even come here for?\"",
                "line": 5
            },
            {
                "text": "Fenrir walks over to the door with Diablos's right arm sealed behind it. That's when he notices that the defense mechanism's been triggered.",
                "line": 6
            },
            {
                "text": "\"Did Lily drive them off?\"",
                "line": 7
            },
            {
                "text": "It's the only explanation that makes sense to him.",
                "line": 8
            },
            {
                "text": "Whatever the case may be, though, it won't be long before the Shadow Garden makes their next move. He's running low on time.",
                "line": 9
            },
            {
                "text": "\"...My, my. It would seem you're in a bit of a bind.\"",
                "line": 10
            },
            {
                "text": "All of a sudden, a voice echoes out from the fog.",
                "line": 11
            },
            {
                "text": "Fenrir whirls around and lashes out with his sword. The force of his slash parts the fog.",
                "line": 12
            },
            {
                "text": "He sees a priest standing in its place.",
                "line": 13
            },
            {
                "text": "The priest gives him a thin smile. \"Ooh, scary.\"",
                "line": 14
            },
            {
                "text": "\"Oh. Petos. It's you. Next time, at least tell me you're here. I was about to kill you there.\"",
                "line": 15
            },
            {
                "text": "\"It's been too long, Fenrir\u2014fifth member of the Rounds. I see your blade is as sharp as ever. I could feel my blood run cold.\"",
                "line": 16
            },
            {
                "text": "\"Hmph.\"",
                "line": 17
            },
            {
                "text": "Fenrir launched that attack fully intending for it to be lethal. If he'd been operating at full power, there's no way Petos would have been able to block it.",
                "line": 18
            },
            {
                "text": "However, there isn't a scratch on him. What an infuriating man Petos is.",
                "line": 19
            },
            {
                "text": "\"If we fought seriously, I have little doubt you'd trounce me,\" Petos offers.",
                "line": 20
            },
            {
                "text": "\"Like you've ever fought seriously in your life, young Petos\u2014tenth member of the Rounds,\" Fenrir spits back at him. \"So, what do you want?\"",
                "line": 21
            },
            {
                "text": "\"I saw you were in trouble. I thought I'd lend a hand.\"",
                "line": 22
            },
            {
                "text": "Fenrir scoffs. \"And you think I'd take help from a fiend like you?\"",
                "line": 23
            },
            {
                "text": "Petos's smile deepens. \"A fiend? You wound me. I'm but a humble servant of the Cult.\"",
                "line": 24
            },
            {
                "text": "\"I'll ask you again. What are you doing here, Petos? If we wanted someone to shoot the breeze with, neither of us would be the other's first choice.\"",
                "line": 25
            },
            {
                "text": "Fenrir turns the hostility way up, and the grin vanishes from Petos's face. \"The Fenrir sect's repeated failures have begun causing problems for the Rounds Table.\" He casts a quick glance at the cylindrical devices. \"The right arm's sealing is behind schedule.\"",
                "line": 26
            },
            {
                "text": "\"We're about sixty percent of the way there.\"",
                "line": 27
            },
            {
                "text": "\"Sixty, hmm...? As I'm sure you're aware, the Sanctuary's destruction set the left arm free. We're expecting to produce even fewer Beads this year.\"",
                "line": 28
            },
            {
                "text": "\"So Aurora is rejecting us.\"",
                "line": 29
            },
            {
                "text": "\"Indeed she is, and more so than in years prior. She's rejecting us at every turn. In all likelihood, being set free is causing her to regain her sense of self.\"",
                "line": 30
            },
            {
                "text": "\"Well, that's a problem. How many Beads are we looking at?\"",
                "line": 31
            },
            {
                "text": "\"Nine...and that's if we're lucky. It might be as few as eight. The one silver lining is that thanks to the Shadow Garden culling our ranks, we don't need as many...but I suppose that's indelicate to say.\" Petos breaks into a chuckle. It's unclear what he finds so funny. \"If the Bead production falls below our estimates...or if we end up appointing a new member, then there won't be a Bead for you this year.\"",
                "line": 32
            },
            {
                "text": "\"You've got a lot of nerve, Petos.\"",
                "line": 33
            },
            {
                "text": "Fenrir unleashes a murderous slash. It slices through Petos's jacket and leaves a thin trail of blood running down his neck.",
                "line": 34
            },
            {
                "text": "\"Ooh, careful there,\" Petos cautions.",
                "line": 35
            },
            {
                "text": "\"How dare a neophyte think you're my equal.\"",
                "line": 36
            },
            {
                "text": "\"The decision was the Rounds Table's. I'm merely the messenger. See it as a sign of how seriously the Rounds Table is taking the Fenrir sect's blunders.\"",
                "line": 37
            },
            {
                "text": "Fenrir clicks his tongue and quells his bloodthirst. \"Was Loki behind this?\"",
                "line": 38
            },
            {
                "text": "Loki is the leader of a faction that's been at odds with Fenrir's for years.",
                "line": 39
            },
            {
                "text": "\"Loki was...present at the discussion, certainly.\"",
                "line": 40
            },
            {
                "text": "\"And you threw your vote in with him, didn't you? You were scared that if it wasn't me, it would be your Bead on the chopping block.\"",
                "line": 41
            },
            {
                "text": "\"Oh, perish the thought. I am, as always, your faithful ally.\"",
                "line": 42
            },
            {
                "text": "Fenrir scoffs at Petos's reply. \"If people want to point fingers, this is the whole Cult's fault for not taking the Shadow Garden seriously enough. Those first reports were, what, five years ago? You know, those attacks by an unknown group on our carriages carrying the possessed. If we'd put them down then and there, then they never would have grown to the scope they have today.\"",
                "line": 43
            },
            {
                "text": "\"Perhaps you have a point.\"",
                "line": 44
            },
            {
                "text": "\"The Cult's immortality has made it complacent, and now they're as dull as fatted swine. The twelfth seat was always empty, but now we've lost Nelson and Mordred, too. I swear, the Rounds' quality is dropping by the day. The only reason you're on the Rounds is to replace the tenth seat that Shadow killed two years back. Someone of your caliber should never have been allowed to become a member.\"",
                "line": 45
            },
            {
                "text": "\"I suppose in a sense, I have the Shadow Garden to thank for my current position. They really do have my utmost gratitude,\" Petos says mockingly. \"Apologies, that was a slip of the tongue. In any case, though, the Rounds Table is finally making their move. They're taking things quite seriously now.\"",
                "line": 46
            },
            {
                "text": "\"Ah yes, the plan... The Shadowhunting Jaw, was it?\"",
                "line": 47
            },
            {
                "text": "\"Do you think it will work?\"",
                "line": 48
            },
            {
                "text": "\"It doesn't bring me any joy to see Loki spearheading the operation, but this should be a valuable opportunity. We need to nail down whether Shadow's strength is the real deal.\"",
                "line": 49
            },
            {
                "text": "\"You suspect it isn't?\"",
                "line": 50
            },
            {
                "text": "\"I didn't say that. If it is real, though, it seems a little difficult to believe. Either he's using an artifact of legend, or he's from another Realm, or maybe he possesses the same technology the Cult does...\"",
                "line": 51
            },
            {
                "text": "\"And what if he's just an ordinary man?\"",
                "line": 52
            },
            {
                "text": "A fearless smile flashes across Fenrir's face. \"Then he's a man who's reached the peak of martial prowess. If that's true, then I need to see it for myself. Whatever the case, it's been hundreds of years since the Rounds Table has offered me support. Sooner or later, you'll learn exactly why that is.\"",
                "line": 53
            },
            {
                "text": "\"I see... Then as the rookie, I suppose I'd best keep my mouth shut and follow your lead. I do have a part to play in the plan, however minor it may be.\"",
                "line": 54
            },
            {
                "text": "\"Don't mess it up, young Petos.\"",
                "line": 55
            },
            {
                "text": "\"I could say the same to you, Fenrir. If you fail to free the right arm, if the ruins fall into the Shadow Garden's hands...\"",
                "line": 56
            },
            {
                "text": "Petos trails off mid-sentence and braces himself. The magic pouring off Fenrir is truly ominous.",
                "line": 57
            },
            {
                "text": "\"You forget who you're talking to, Petos. I am Fenrir. Long have I held the Rounds' fifth seat, and long have I held my pride. One way or another, I'll see that arm unsealed.\"",
                "line": 58
            },
            {
                "text": "\"I would expect nothing less, sir.\"",
                "line": 59
            },
            {
                "text": "\"We will revive Diablos and, in doing so, attain true immortality. I won't let anyone question the methods I take to achieve that end. Even if I have to break this nation in twain.\"",
                "line": 60
            },
            {
                "text": "\"...All that matters are your results. That's why I came here. To help.\"",
                "line": 61
            },
            {
                "text": "\"I already said, I don't need help from the likes of you.\"",
                "line": 62
            },
            {
                "text": "\"The Rounds Table has made their decision. Please, don't hesitate to make use of these artifacts.\"",
                "line": 63
            },
            {
                "text": "The artifacts in question are a gaudy set of collars with something resembling a clock hand attached to each one.",
                "line": 64
            },
            {
                "text": "\"What are those?\" Fenrir asks.",
                "line": 65
            },
            {
                "text": "\"New artifacts, fresh from the Cult labs. It looked as though you were having trouble gathering magic, so we thought these might serve you well.\"",
                "line": 66
            },
            {
                "text": "\"...I'll use them if the mood strikes me. That aside, I find it hard to imagine you came all this way just to run a simple errand. What's really going on here?\"",
                "line": 67
            },
            {
                "text": "\"I'm merely following orders. I am nothing if not devoted to the Cult. Now, to change the subject a little... Have you ever seen a gold-haired therianthrope in these ruins?\"",
                "line": 68
            },
            {
                "text": "Petos asks the question casually, like he's simply making small talk, but Fenrir hears something in his tone. This, he intuits, is the real reason Petos came.",
                "line": 69
            },
            {
                "text": "\"A gold-haired therianthrope? I'm not sure...\"",
                "line": 70
            },
            {
                "text": "Fenrir hasn't forgotten the golden Seven Shadows member, not by a long shot. However, he sees no particular reason to share that information with Petos.",
                "line": 71
            },
            {
                "text": "Fenrir's gaze meets Petos's.",
                "line": 72
            },
            {
                "text": "Petos is the first to break eye contact. \"If you spot her, do let me know.\"",
                "line": 73
            },
            {
                "text": "\"Is there something special about her?\"",
                "line": 74
            },
            {
                "text": "\"Oh, nothing worth mentioning. I'll be seeing you.\" Petos scuttles off into the fog.",
                "line": 75
            },
            {
                "text": "\"A gold-haired therianthrope... Petos acquired a sample by wiping out the Golden Leopard clan. That was what earned him his promotion to the Rounds. Could it be? Did one of them survive?\"",
                "line": 76
            },
            {
                "text": "Fenrir looks at the cylindrical devices 60 percent full of magic. Petos has just confirmed that he's free to use whatever methods he deems fit.",
                "line": 77
            },
            {
                "text": "He bares his teeth in a grin.",
                "line": 78
            },
            {
                "text": "\"Now this is getting interesting.\"",
                "line": 79
            },
            {
                "text": "Although the black beasts all but destroyed it, the Oriana Kingdom is recovering quickly, thanks in part to the Shadow Garden's assistance.",
                "line": 80
            },
            {
                "text": "Alpha narrows her eyes from within the royal castle as she stares out at the reconstruction efforts dyed red in the sunset's glow.",
                "line": 81
            },
            {
                "text": "\"So? Are you prepared to do what needs to be done?\" she asks the girl behind her.",
                "line": 82
            },
            {
                "text": "The girl in question has a beautiful face and honey-colored locks. It's Rose Oriana.",
                "line": 83
            },
            {
                "text": "\"Will they ever forgive me?\" Rose murmurs, her eyes wavering.",
                "line": 84
            },
            {
                "text": "\"Probably not. Many of the people still resent you.\"",
                "line": 85
            },
            {
                "text": "\"I...I can't be the queen. All that would do is bring more turmoil to Oriana.\"",
                "line": 86
            },
            {
                "text": "\"Perhaps in peacetime, that would be the wise choice to make. But things are different now. You know what's about to become of this country. You know there are no other options available.\" Alpha turns around and fixes Rose with a harsh stare. \"I assume you've heard that Midgar is breaking off their alliance with you. Holy Teachings has officially branded the Oriana Kingdom a heretic state. Your imports and exports have been sanctioned, and it won't be long before they dry up completely. Soon enough, they'll give the order, and the Oriana Kingdom's neighbors will move in to suppress you. I don't know how many nations will answer the call, but seeing as you don't have a proper military, it doesn't much matter. You'll get annihilated.\"",
                "line": 87
            },
            {
                "text": "Rose clenches her fists and hangs her head. \"A heretic state... How did it come to this?\"",
                "line": 88
            },
            {
                "text": "\"The Cult is afraid of you. Of Oriana.\"",
                "line": 89
            },
            {
                "text": "\"But we're so small. What could they possibly have to be afraid of?\"",
                "line": 90
            },
            {
                "text": "\"They're scared little lambs. That's why they fear the sun's light.\"",
                "line": 91
            },
            {
                "text": "\"What do you mean?\"",
                "line": 92
            },
            {
                "text": "\"There's nothing humanity seeks more than eternal life. Now that they have it, they're utterly terrified that it might get stolen away. If they ruled the world out in the open, someone would eventually show up to do exactly that. That's why they hide. It's why they keep their immortality secret, and why they chose to use Holy Teachings to rule the world from the shadows. All this time, they've been running from the sun.\"",
                "line": 93
            },
            {
                "text": "\"So that's why you called them scared lambs...\"",
                "line": 94
            },
            {
                "text": "\"But now that the Oriana Kingdom is making a stand against the Cult, the world's public side and its underbelly are becoming one. If they leave Oriana unchecked, then eventually they'll find themselves dragged onto center stage. That's what they're afraid of.\"",
                "line": 95
            },
            {
                "text": "Rose stares intensely at Alpha. \"And the Shadow Garden wants to take advantage of that.\"",
                "line": 96
            },
            {
                "text": "\"We do. We want to take advantage of the Oriana Kingdom. That's the whole reason we helped you.\"",
                "line": 97
            },
            {
                "text": "\"With how much power the Shadow Garden has, you could just defeat the Cult straight-up. What do you need Oriana for?\"",
                "line": 98
            },
            {
                "text": "\"Defeating the Cult wouldn't be enough to destroy it.\"",
                "line": 99
            },
            {
                "text": "\"What?\"",
                "line": 100
            },
            {
                "text": "\"People can die. Countries can fall. But cults never perish. Even if we defeated the Cult, nothing would end. It's impossible to put a cult down as long as there are people who believe in it. That's just the way cults work.\"",
                "line": 101
            },
            {
                "text": "\"But...\"",
                "line": 102
            },
            {
                "text": "\"Don't underestimate them. When you make an enemy of them, your own people stab you in the back. Most of the Holy Teachings priests and believers are good, upstanding people, but the Cult will use their faith to whip them into a frenzy and get them thirsty for blood. The Shadow Garden is strong, but we're not strong enough to kill every last Holy Teachings believer in the world. That's what the Oriana Kingdom is for. We need the kingdom in order to force the Cult's evil out into the open and to separate them from the Church.\"",
                "line": 103
            },
            {
                "text": "\"How would you even do that?\"",
                "line": 104
            },
            {
                "text": "\"By getting Holy Teachings to sever ties with them. It's Holy Teachings that people believe in, not the Cult of Diablos. If we can make that distinction clear, the Cult will become public enemy number one. But to do that, we have to win. Oriana's neighbors will come to put you down before long, and we need Oriana to win that fight. Win, and then tell the world that their real enemy is the Cult.\"",
                "line": 105
            },
            {
                "text": "\"And that's why you want me to become the queen.\"",
                "line": 106
            },
            {
                "text": "\"If we want to destroy the Cult, we need a nation that can act publicly on our behalf. The fight between Oriana and Holy Teachings is going to be a proxy war between the Shadow Garden and the Cult. If you're prepared to become the queen, we'll offer you help from the shadows.\"",
                "line": 107
            },
            {
                "text": "Rose hangs her head. \"Will I even be able to be a good queen?\" she says, each word sounding labored.",
                "line": 108
            },
            {
                "text": "\"You aren't going to be a peacetime queen; you'll be a crisis queen. In peacetime, queens need to be loved by the people and kind enough to make their nations plentiful. But in times of crisis, all that goes out the window. In crisis, a queen needs strength. Strength enough to achieve her goals, even if that means taking on pain, or making sacrifices, or being loathed by the masses.\" Alpha fixes her gorgeous eyes on Rose. \"And you, Rose Oriana, will be a strong queen indeed.\"",
                "line": 109
            },
            {
                "text": "\"A strong queen...\"",
                "line": 110
            },
            {
                "text": "Rose mulls over the phrase. She repeats it again and again, not out loud, but within her mouth. The only thing that comes to mind is her own weakness.",
                "line": 111
            },
            {
                "text": "\"But...I'm weak.\"",
                "line": 112
            },
            {
                "text": "\"Only those who know weakness can ever be truly strong.\"",
                "line": 113
            },
            {
                "text": "A trickle of tears rolls down Rose's cheek.",
                "line": 114
            },
            {
                "text": "\"My father left the Oriana Kingdom and its people in my hands. If there's anything in my power I can do for them... Even if it means being hated, I want to protect this nation. I...\"",
                "line": 115
            },
            {
                "text": "Rose wipes away her tears and looks up. Then she takes her rapier and holds it to her golden locks.",
                "line": 116
            },
            {
                "text": "\"I...I can't go on being weak forever.\"",
                "line": 117
            },
            {
                "text": "She slices through them.",
                "line": 118
            },
            {
                "text": "The severed strands flutter through the air.",
                "line": 119
            },
            {
                "text": "\"I will become a strong queen.\"",
                "line": 120
            },
            {
                "text": "What hair she has left goes down to only her shoulders.",
                "line": 121
            },
            {
                "text": "Alpha offers her a kind smile. \"Then as long as your resolve holds firm, the Shadow Garden will not forsake you. This, I swear.\"",
                "line": 122
            },
            {
                "text": "Then she calls for Numbers 664 and 665. It's unclear why, but the two of them are dressed in maid uniforms.",
                "line": 123
            },
            {
                "text": "\"I'm stationing these two by your side. I figured it would be best to pair you with people you already knew.\"",
                "line": 124
            },
            {
                "text": "\"Thank you, ma'am.\"",
                "line": 125
            },
            {
                "text": "\"There's no need to be so formal with me. You and I are equals. You want to become a strong queen, do you not?\"",
                "line": 126
            },
            {
                "text": "\"That's right, ma'\u2014 I mean, that's right,\" Rose says, not used to the new dynamic. \"That's exactly what I'm going to do.\"",
                "line": 127
            },
            {
                "text": "\"Heh...\" Number 665 chuckles under her breath. \"Number 666 is so adorable.\"",
                "line": 128
            },
            {
                "text": "\"I'm just glad it all ended happily,\" Number 664 quietly replies. \"Though if she had just come and talked to me, we could have hashed this out ages ago.\"",
                "line": 129
            },
            {
                "text": "Rose turns to them. \"Thank you both so much.\"",
                "line": 130
            },
            {
                "text": "\"Hey, yeah, anytime.\"",
                "line": 131
            },
            {
                "text": "\"F-for the record, I'm still the squad leader here. Don't you forget it!\"",
                "line": 132
            },
            {
                "text": "Rose gives the two of them a warm smile. \"Of course, leader.\"",
                "line": 133
            },
            {
                "text": "\"I'll be using them to relay information about our plans going forward, so I'll need you to arrange proper positions and identities for them,\" Alpha says. \"For the time being, we'll want to keep the connections between the Shadow Garden and the Oriana Kingdom a secret.\"",
                "line": 134
            },
            {
                "text": "\"I'll hire them on as my personal maids. As for the identities, I'll have those ready as soon as I can.\"",
                "line": 135
            },
            {
                "text": "\"That would be wonderful. Oh, and it appears we have company.\"",
                "line": 136
            },
            {
                "text": "As the words leave Alpha's mouth, the door swings open and reveals an indigo-haired girl. It's Gamma, third of the Seven Shadows. For whatever reason, she's dragging another girl along behind her.",
                "line": 137
            },
            {
                "text": "\"Ah, Alpha, I finally found you.\"",
                "line": 138
            },
            {
                "text": "\"Well, hello, Gamma. I had no idea you were here in Oriana.\"",
                "line": 139
            },
            {
                "text": "\"Considering the direction things are taking, I felt it would be prudent to close down all Mitsugoshi operations in the kingdom,\" Gamma says, keeping her voice low. \"I just got finished laying the groundwork to retrofit all our stores into Shadow Garden bases.\"",
                "line": 140
            },
            {
                "text": "\"You never fail to impress, Gamma. I appreciate the quick turnaround.\"",
                "line": 141
            },
            {
                "text": "Gamma casts a sidelong glance over at Rose. \"And what about Princess Rose?\"",
                "line": 142
            },
            {
                "text": "Alpha looks over at Rose as well. \"She's prepared to walk this path alongside us.\"",
                "line": 143
            },
            {
                "text": "\"I look forward to working with you.\"",
                "line": 144
            },
            {
                "text": "Gamma gives Rose's greeting a wordless bow, then turns back to Alpha. \"I have two items of note to report. Do you want to talk here?\"",
                "line": 145
            },
            {
                "text": "It appears that Gamma is concerned about Rose's presence. Rose can tell that she hasn't earned their trust yet. \"I'm happy to prepare another room for you to\u2014\"",
                "line": 146
            },
            {
                "text": "Alpha cuts her off. \"Here is fine.\"",
                "line": 147
            },
            {
                "text": "\"Are you certain?\" Gamma asks.",
                "line": 148
            },
            {
                "text": "\"Very. I have no objections to talking here.\"",
                "line": 149
            },
            {
                "text": "Alpha looks at Gamma and Rose. The implication in her eyes is clear: I have no objections. Do either of you?",
                "line": 150
            },
            {
                "text": "\"...I have no objections, either,\" Gamma accedes.",
                "line": 151
            },
            {
                "text": "\"Nor do I,\" says Rose.",
                "line": 152
            },
            {
                "text": "\"Then my first report is about the equipment Beta retrieved from the Realm the other day.\"",
                "line": 153
            },
            {
                "text": "\"Ah yes,\" Alpha replies. \"The \u2018Lapped Op' and the \u2018Tabbed Let.'\"",
                "line": 154
            },
            {
                "text": "\"Eta's finished examining them.\" Gamma turns and looks at the girl she's dragged along. \"Eta, tell them what you told me.\"",
                "line": 155
            },
            {
                "text": "The girl lets out an adorable snore. \"Zzzzz.\"",
                "line": 156
            },
            {
                "text": "\"Dang it, Eta, get up!\"",
                "line": 157
            },
            {
                "text": "Gamma grabs Eta by the shoulders and shakes her awake. When she does, Eta's head sways back, then immediately smashes into Gamma's nose.",
                "line": 158
            },
            {
                "text": "\"ZOINKS!\" Eta's eyes snap open from the force of the impact. \"Huuhn?\"",
                "line": 159
            },
            {
                "text": "That, in a nutshell, is Eta. She's the seventh member of the Seven Shadows and spends most of her time researching Shadow Wisdom.",
                "line": 160
            },
            {
                "text": "\"Where am I?\" She looks around unconcernedly.",
                "line": 161
            },
            {
                "text": "Eta is a short elf with long dark hair. At the moment, her bedhead is causing that hair to spring up in every direction.",
                "line": 162
            },
            {
                "text": "\"C-come on,\" Gamma says as she squeezes her bleeding nose. \"You need to give Alpha the report we talked about!\"",
                "line": 163
            },
            {
                "text": "\"The report? Ohhh, about the Lapped Op.\"",
                "line": 164
            },
            {
                "text": "\"E-exactly.\"",
                "line": 165
            },
            {
                "text": "\"Um, here's my report...\" Eta turns her sleepy gaze to Alpha. \"Everything that used electricity like the Lapped Op did was broken. I tried disassembling them to find out why, and it looks like it's because of the electromagnetic waves coming through the gate.\"",
                "line": 166
            },
            {
                "text": "\"Can you fix them?\" Alpha asks.",
                "line": 167
            },
            {
                "text": "\"Not now. But eventually, I'll understand them.\"",
                "line": 168
            },
            {
                "text": "\"I see... Eh, it is what it is. I guess we'll just have to be patient. Honestly, Beta, couldn't you have brought back anything that doesn't run on electricity?\"",
                "line": 169
            },
            {
                "text": "\"It's not all bad. The level of engineering used to make them is incredibly high. Even without being able to turn them on, I still learned a lot from their designs.\"",
                "line": 170
            },
            {
                "text": "\"Really? Well, that's good. Still, I imagine Beta was pretty torn up about the news.\"",
                "line": 171
            },
            {
                "text": "\"She bawled her eyes out.\"",
                "line": 172
            },
            {
                "text": "\"Is that really something to cry over?\"",
                "line": 173
            },
            {
                "text": "\"Not quite. She was feeling down, so I mixed some chemicals into her tea to make her feel better.\"",
                "line": 174
            },
            {
                "text": "\"...And?\"",
                "line": 175
            },
            {
                "text": "Eta's mouth curls into a smirk. \"She started stripping and sobbing out of nowhere. Cause: unknown. Highly fascinating.\"",
                "line": 176
            },
            {
                "text": "Alpha lets out a long sigh. \"I'm slashing your research budget for next month.\"",
                "line": 177
            },
            {
                "text": "\"What? Why?!\"",
                "line": 178
            },
            {
                "text": "\"How many times do I have to remind you not to experiment on people without their consent? You need to think long and hard about what you've done.\"",
                "line": 179
            },
            {
                "text": "\"Boo. Sacrifices have to be made in order to advance Shadow Wisdom.\"",
                "line": 180
            },
            {
                "text": "\"Don't \u2018boo' me. Now, I expect another report as soon as you find anything we can put to use here in our world.\"",
                "line": 181
            },
            {
                "text": "\"Boooo.\"",
                "line": 182
            },
            {
                "text": "Alpha's eyes narrow. \"Also, I notice there's one item she brought back that you haven't mentioned yet.\"",
                "line": 183
            },
            {
                "text": "\"An item... Ah. The otherworlder just woke up. We don't speak her language, so we're having Beta talk to her. Her name is Akane.\"",
                "line": 184
            },
            {
                "text": "\"Akane... What else have you learned about her?\"",
                "line": 185
            },
            {
                "text": "\"Her body is more or less the same as a human's. Don't know any details yet. I could get them a lot faster if you let me experiment on her.\"",
                "line": 186
            },
            {
                "text": "\"Have Beta continue looking after her until she's settled in. And don't pull any funny business, you hear? None.\"",
                "line": 187
            },
            {
                "text": "\"Boo.\" Eta reluctantly nods to Alpha.",
                "line": 188
            },
            {
                "text": "Alpha turns back over to Gamma. \"All right, I'm up to speed on the Eta situation. Now, what was that second report you had?\"",
                "line": 189
            },
            {
                "text": "\"It's about Zeta, over in Midgar. Have you heard anything from her?\"",
                "line": 190
            },
            {
                "text": "\"Nothing.\" Alpha sighs again. \"I swear... Getting that girl to send in sitreps is like pulling teeth.\"",
                "line": 191
            },
            {
                "text": "\"I checked on her before leaving for Oriana, so allow me to report on her behalf.\"",
                "line": 192
            },
            {
                "text": "\"You're a lifesaver, Gamma.\"",
                "line": 193
            },
            {
                "text": "\"The Fenrir sect is making their move. It would appear they've been kidnapping Midgar Academy students. We've been retrieving the majority of the possessed, so they've been having trouble undoing the seal.\"",
                "line": 194
            },
            {
                "text": "\"And how has Zeta responded?\"",
                "line": 195
            },
            {
                "text": "\"That's the thing... She hasn't.\"",
                "line": 196
            },
            {
                "text": "\"She hasn't done anything?\"",
                "line": 197
            },
            {
                "text": "\"Not a one. And she should have had no trouble figuring out what the Fenrir sect is up to.\"",
                "line": 198
            },
            {
                "text": "\"Zeta marches to the beat of her own drum, but no one can deny that she's talented. I wonder what's going on?\" Alpha says quizzically.",
                "line": 199
            },
            {
                "text": "\"The Fenrir sect may be in decline, but they've still ruled Midgar's underworld for a long time. What's more, Fenrir is one of the founding members of the Rounds. We can't afford to make light of them.\"",
                "line": 200
            },
            {
                "text": "\"The credit collapse should have dealt them a grave blow. I had assumed that their capital and combat assets were all but drained...but perhaps I was too hasty to count out an original member of the Rounds.\"",
                "line": 201
            },
            {
                "text": "\"We might want to consider sending in backup. Delta is still stationed in Midgar, but I find it hard to imagine those two ever actually working together.\"",
                "line": 202
            },
            {
                "text": "\"You're not wrong there...,\" Alpha mutters noncommittally as she stares at the scenery outside.",
                "line": 203
            },
            {
                "text": "\"I'm busy setting up the bases. We can't tear Eta away from her research. Meanwhile, Beta has the otherworlder and her paperwork to deal with... The only member we have available is Epsilon. We could also send in some of the Numbers\u2014\"",
                "line": 204
            },
            {
                "text": "\"That won't be necessary,\" Alpha says, still staring out into the distance.",
                "line": 205
            },
            {
                "text": "\"But... Are you certain?\"",
                "line": 206
            },
            {
                "text": "\"There's no need to worry. I'm sure she'll be fine. She's always been able to handle herself.\"",
                "line": 207
            },
            {
                "text": "It's not like Alpha to be so optimistic, Gamma thinks. \"I don't know what, but something feels off.\"",
                "line": 208
            },
            {
                "text": "\"I still remember the first day I met her. I'd never seen eyes like hers. They were so sad, like they resented the entire world. I welcomed her in and treated her like family so I could mend the wounds in her heart...and now she's changed.\" Alpha turns around and gazes at Gamma with her blue eyes. \"That's how I know it's going to be okay. Because we're family.\"",
                "line": 209
            },
            {
                "text": "Alpha smiles. It's a warm smile, the kind that seems to wrap everything up in its embrace.",
                "line": 210
            }
        ],
        "c6": [
            {
                "text": "Alexia gazes up at the twilit academy building. Classes have just ended, and the other students stride past her.",
                "line": 1
            },
            {
                "text": "\"I can't trust the Knight Order. Or my sister...\"",
                "line": 2
            },
            {
                "text": "She thinks back to her conversation with Iris from the day prior. Her sister has changed, and nothing Alexia says is getting through to her anymore.",
                "line": 3
            },
            {
                "text": "\"I need to do something...\"",
                "line": 4
            },
            {
                "text": "Somewhere on campus, the Cult is trying to restore Diablos's right arm, and with no one else she can count on, it's all up to her. If she can stop the Cult from reviving the arm and get her hands on some solid evidence, then people will have no choice but to listen to her.",
                "line": 5
            },
            {
                "text": "\"Hey, out of the way.\"",
                "line": 6
            },
            {
                "text": "\"Ow!\"",
                "line": 7
            },
            {
                "text": "All of a sudden, something slams into her from behind at incredible speed.",
                "line": 8
            },
            {
                "text": "Alexia turns around and finds a beautiful dark-haired girl standing with the sunset at her back. \"Claire...\"",
                "line": 9
            },
            {
                "text": "\"If you just stand there, you'll get in the way of my charge.\"",
                "line": 10
            },
            {
                "text": "\"Y-your what?\"",
                "line": 11
            },
            {
                "text": "Alexia can't make heads or tails of what she's saying.",
                "line": 12
            },
            {
                "text": "Claire looks at her, eyes burning with some sort of bizarre confidence. \"What's wrong, Alexia? You look down.\"",
                "line": 13
            },
            {
                "text": "\"I...I was just thinking about what I need to do.\"",
                "line": 14
            },
            {
                "text": "\"What a coincidence. So was I.\"",
                "line": 15
            },
            {
                "text": "\"You were?\"",
                "line": 16
            },
            {
                "text": "\"Yeah. Even if the truth gets swept under the rug, that doesn't mean things have to end there. It's important to have someone crack the case in secret.\"",
                "line": 17
            },
            {
                "text": "\".........?\"",
                "line": 18
            },
            {
                "text": "\"Also, I had something I wanted to talk to you about. The thing is...I've been chosen.\" Claire holds up her right hand, the one with the magic circle on it. \"I have a duty to save the world and keep Cid safe. That's what I was given this power for.\"",
                "line": 19
            },
            {
                "text": "\"I'm sorry, what?\"",
                "line": 20
            },
            {
                "text": "\"If we've got the same goal, then I'm willing to join forces. Come on, let's go.\"",
                "line": 21
            },
            {
                "text": "\"H-hold on a minute!\"",
                "line": 22
            },
            {
                "text": "Claire drags Alexia off by the arm. Alexia still has no idea what in the world she's going on about.",
                "line": 23
            },
            {
                "text": "In a weird way, though, this feels kind of nice.",
                "line": 24
            },
            {
                "text": "\"And where do you think you're taking me?\" Alexia demands.",
                "line": 25
            },
            {
                "text": "\"The church.\"",
                "line": 26
            },
            {
                "text": "\"You know where it is?!\"",
                "line": 27
            },
            {
                "text": "\"I do\u2014my right hand is throbbing.\" Claire comes to a stop, her expression stern. \"Aurora refuses to talk about it, but I can tell she's hiding something. This throbbing will lead me to the truth, I'm sure of it.\"",
                "line": 28
            },
            {
                "text": "With that, Claire undoes the bandage wrapped around her hand. Beneath it, the magic circle is faintly glowing.",
                "line": 29
            },
            {
                "text": "\"This all seems extremely sketchy...,\" Alexia says.",
                "line": 30
            },
            {
                "text": "\"Little by little, it's getting stronger. The moment of reckoning is nigh.\" Suddenly, the magic circle flashes brighter than ever. \"Here it comes!\"",
                "line": 31
            },
            {
                "text": "A moment later, the entire world shatters like glass.",
                "line": 32
            },
            {
                "text": "\"No way!\" Alexia cries. \"You're kidding!\"",
                "line": 33
            },
            {
                "text": "She recognizes the scenery before her. It's the exact same as what she saw when the librarian abducted them.",
                "line": 34
            },
            {
                "text": "The academy is shrouded in white fog.",
                "line": 35
            },
            {
                "text": "\"Wh-what's going on?!\"",
                "line": 36
            },
            {
                "text": "\"What's with all the fog...?\"",
                "line": 37
            },
            {
                "text": "The entire academy is surrounded by it, and the students who'd been heading home have all been swallowed up.",
                "line": 38
            },
            {
                "text": "Standing on the school roof, I gaze down at the academy dyed in twilight's hues.",
                "line": 39
            },
            {
                "text": "\"Fine by me. The world needs this...so I'll shoulder all their revulsion. Doing so is my duty.\"",
                "line": 40
            },
            {
                "text": "As I mutter a variation on the quote Zeta hit me with last night, I can feel my heart stir.",
                "line": 41
            },
            {
                "text": "\"...Oh yeah, this plays for sure.\"",
                "line": 42
            },
            {
                "text": "Shadow, the man rebelling against the world itself. He needs to protect everyone, and to do so, he takes on all the sin on his own.",
                "line": 43
            },
            {
                "text": "I gotta say, that's pretty badass.",
                "line": 44
            },
            {
                "text": "\"Good stuff, Zeta. I can't believe how far you refined the premise.\"",
                "line": 45
            },
            {
                "text": "Out of respect for her amazing work, I'm gonna shamelessly plagiarize it.",
                "line": 46
            },
            {
                "text": "Wait a minute\u2014hold on. Now that I think about it, didn't I come up with a similar line that one time?",
                "line": 47
            },
            {
                "text": "\"From the beginning, we've walked the path of neither justice nor evil. We walk our own path.\"",
                "line": 48
            },
            {
                "text": "I step up to the edge of the roof and strike a cool pose. My uniform flutters in the wind.",
                "line": 49
            },
            {
                "text": "\"You talk big. Accuse us for the sins of the world. We'll accept them as our own.\"",
                "line": 50
            },
            {
                "text": "Yep. Still badass.",
                "line": 51
            },
            {
                "text": "Now I'm sure of it: That's definitely something I said. Quotes like those are a perfect fit for rooftops at twilight.",
                "line": 52
            },
            {
                "text": "\"So chronologically speaking, I was actually first. That means I can plagiarize her all I want. If anything, she's the one who plagiarized me.\"",
                "line": 53
            },
            {
                "text": "Next time I get the chance, I'm definitely gonna bust that one out.",
                "line": 54
            },
            {
                "text": "Actually, this is a solid opportunity of its own. I've been slacking off on my Cool Quotes training lately, so now might be a great time to go back to basics and get some reps in.",
                "line": 55
            },
            {
                "text": "\"...That was my afterimage.",
                "line": 56
            },
            {
                "text": "\"Go forth, shadows\u2014devour them.",
                "line": 57
            },
            {
                "text": "\"The wind is whistling\u2014whistling with the screams of souls.\"",
                "line": 58
            },
            {
                "text": "With each quote, I strike a different pose.",
                "line": 59
            },
            {
                "text": "Back in my past life, I frequently went up on rooftops to train like this in secret. Good times, good times.",
                "line": 60
            },
            {
                "text": "\"The school grounds stained by the setting sun... Standing alone on the rooftop... Me, wearing a meaningful smile as I stare down at the students going home... This feeling, like something big is about to happen...\"",
                "line": 61
            },
            {
                "text": "Everything about the situation is perfect.",
                "line": 62
            },
            {
                "text": "I raise my right hand and let out an excited whisper.",
                "line": 63
            },
            {
                "text": "\"Here it comes.\"",
                "line": 64
            },
            {
                "text": "Not a moment later, the world shatters into pieces.",
                "line": 65
            },
            {
                "text": "White fog begins billowing up.",
                "line": 66
            },
            {
                "text": "\"...Huh?\"",
                "line": 67
            },
            {
                "text": "The fog envelops the whole campus, like it's cutting us off from the outside world. Before long, it's grown so dense that not even the light from the sunset is able to reach us.",
                "line": 68
            },
            {
                "text": "\".........\" I blink repeatedly and look around. \"I'm sorry, what?\"",
                "line": 69
            },
            {
                "text": "I had a feeling like something big was going to happen, but I didn't think anything would actually happen.",
                "line": 70
            },
            {
                "text": "I can hear panicked voices rise from the school grounds.",
                "line": 71
            },
            {
                "text": "\"Wh-what's going on?!\"",
                "line": 72
            },
            {
                "text": "\"S-someone get a teacher!\"",
                "line": 73
            },
            {
                "text": "\"The teachers are all at an off-site staff meeting. There's no one here but us!\"",
                "line": 74
            },
            {
                "text": "The remaining students begin gathering.",
                "line": 75
            },
            {
                "text": "\"Hmm,\" I muse. \"A mysterious white fog... A sealed-off campus... Me, smiling atop the roof... This is good stuff.\"",
                "line": 76
            },
            {
                "text": "I dunno what exactly is going on, but we've clearly tripped some sort of event flag.",
                "line": 77
            },
            {
                "text": "\"Before much longer...the white fog will engulf the world in silence.\"",
                "line": 78
            },
            {
                "text": "After letting out one last profound-sounding murmur, I leave the roof.",
                "line": 79
            },
            {
                "text": "When I head down the stairs and go out into the hallway, I discover that it's dim inside on account of how thick the fog is. Over half the students have already left for the day.",
                "line": 80
            },
            {
                "text": "\"But actually, though, what is the deal with this fog?\"",
                "line": 81
            },
            {
                "text": "I had assumed that the librarian was using some sort of artifact or something, but he's out of the picture now.",
                "line": 82
            },
            {
                "text": "I try probing the fog with magic to figure out what's up, but all I learn is that it sure is some funky-ass fog.",
                "line": 83
            },
            {
                "text": "\"...Eh, so it goes.\"",
                "line": 84
            },
            {
                "text": "For me, figuring out the fog's deal is way less important than figuring out how to spend my time inside it to the fullest. The question is, should I go join up with the other students, or should I just show up out of nowhere as Shadow?",
                "line": 85
            },
            {
                "text": "\"Decisions, decisions.\"",
                "line": 86
            },
            {
                "text": "As I skip cheerfully down the hallway, I hear someone screaming off in the distance.",
                "line": 87
            },
            {
                "text": "\"Ooh, a plot hook?\"",
                "line": 88
            },
            {
                "text": "I pick up the pace and hurry in the direction of the scream.",
                "line": 89
            },
            {
                "text": "\"This is about where I heard it from, right...?\"",
                "line": 90
            },
            {
                "text": "I arrive in a cramped area filled with doors. This is where the private study rooms are.",
                "line": 91
            },
            {
                "text": "People are mostly done with class, so the majority of the rooms are empty. However, one of the doors is locked shut, and I can hear noises coming from within.",
                "line": 92
            },
            {
                "text": "\"Hrah!\"",
                "line": 93
            },
            {
                "text": "I rip out the lock, doorknob and all, then charge in for a dynamic entrance.",
                "line": 94
            },
            {
                "text": "\"Wh-what is this thing?!\"",
                "line": 95
            },
            {
                "text": "Inside, I find a student. He's clutching at his neck and wailing.",
                "line": 96
            },
            {
                "text": "I think I've seen him before.",
                "line": 97
            },
            {
                "text": "\"Oh, hey, if it isn't my classmate, uh...Suzuki, right?\"",
                "line": 98
            },
            {
                "text": "Oh yeah, now I remember. This guy is as forgettable as I am. I actually really respect how much of a complete nobody he is, and I've used his behavior as a reference on more than one occasion.",
                "line": 99
            },
            {
                "text": "According to my internal background character list, he's a member of a Hope branch family and a distant relative of Christina's.",
                "line": 100
            },
            {
                "text": "\"H-hey, Kagenou, you gotta help me out here! This collar won't come off!!\"",
                "line": 101
            },
            {
                "text": "\"Wait, what?\"",
                "line": 102
            },
            {
                "text": "Sure enough, there's a gaudy-looking collar fixed around Suzuki's neck. C'mon, man, background characters aren't supposed to wear stuff like that.",
                "line": 103
            },
            {
                "text": "\"Ick. That's not a good look on you.\"",
                "line": 104
            },
            {
                "text": "\"It showed up all on its own! I can't get it off, and it keeps making this weird noise!\"",
                "line": 105
            },
            {
                "text": "I can hear a quiet beep, beep, beep coming from it.",
                "line": 106
            },
            {
                "text": "There's a timer on the collar, and right after I look at it, it hits zero.",
                "line": 107
            },
            {
                "text": "A protracted buzzer noise goes off.",
                "line": 108
            },
            {
                "text": "\"Oh.\"",
                "line": 109
            },
            {
                "text": "\"Oh...\"",
                "line": 110
            },
            {
                "text": "With that, Suzuki's head goes flying.",
                "line": 111
            },
            {
                "text": "Blood goes spraying across the room, and I quickly protect myself with slime so I don't get splattered.",
                "line": 112
            },
            {
                "text": "Suzuki's head rolls across the floor. I look down and find that it's scowling back at me.",
                "line": 113
            },
            {
                "text": "\"...Y'know, I did kinda feel like it was about to explode.\"",
                "line": 114
            },
            {
                "text": "Guess I shoulda said something earlier.",
                "line": 115
            },
            {
                "text": "RIP.",
                "line": 116
            },
            {
                "text": "\"Now, let's see what this little doohickey's deal is.\"",
                "line": 117
            },
            {
                "text": "I scoop up Suzuki's collar. It's still just as ugly, but now it's blackened and charred, too. The timer is frozen at zero.",
                "line": 118
            },
            {
                "text": "\"Hmm...\"",
                "line": 119
            },
            {
                "text": "I pour some magic into it to check it out.",
                "line": 120
            },
            {
                "text": "Between that and my knowledge from my past life, I'm able to come up with an incredibly detailed working hypothesis. To sum it up...",
                "line": 121
            },
            {
                "text": "\"It's one of those bomb collar things that explodes when the timer hits zero!\"",
                "line": 122
            },
            {
                "text": "Then I continue expanding on my theory.",
                "line": 123
            },
            {
                "text": "\"Aha, I get it. Most timer doohickeys go down as time elapses, but it looks like these ones are a little different. The hand goes up and down in response to magic, and it feels like when you touch it, it starts sucking out your magic. So, in summation...the collar steadily drains its wearer's magic, and once their magic hits zero, it explodes!\"",
                "line": 124
            },
            {
                "text": "Suzuki had been pretty torn up about having one of the smallest magic pools in class. He must've been training here in the study room, and he had the misfortune of getting wrapped up in this whole situation right when he'd already used most of his magic up.",
                "line": 125
            },
            {
                "text": "I grin. \"...One truth prevails.\"",
                "line": 126
            },
            {
                "text": "The questions are, who stuck the collar on him and when?",
                "line": 127
            },
            {
                "text": "\"Now, if someone had one of these things stuck on 'em, you'd think they would realize it. You'd have to be pretty dang stupid not to notice that you've got a\u2014\"",
                "line": 128
            },
            {
                "text": "A nasty premonition strikes me, and I reach up and touch my neck.",
                "line": 129
            },
            {
                "text": "There's a collar on it.",
                "line": 130
            },
            {
                "text": "When the heck did that get there?",
                "line": 131
            },
            {
                "text": "\"...Clearly, they must've used some sort of incredibly sophisticated method that no normal person could ever hope to notice.\"",
                "line": 132
            },
            {
                "text": "The only possibility that springs to mind is that the collars showed up at the same time the white fog did.",
                "line": 133
            },
            {
                "text": "I make myself a slime mirror and take a closer look at my collar. Sure enough, it's the same kind as the one Suzuki had. However, my remaining magic counter is hitting the 9,999 cap and bugging out. I can feel it slowly draining my magic, but it's basically a drop in the bucket and doesn't even come close to overtaking my natural regen rate.",
                "line": 134
            },
            {
                "text": "\"Interesting...\"",
                "line": 135
            },
            {
                "text": "I'm pretty sure I could get it off if I put my mind to it, but let's not be ridiculous here. Bomb collar events don't just happen every day, and I wouldn't miss this one for the world.",
                "line": 136
            },
            {
                "text": "For starters, I decide to temporarily sever my internal magic circuits in order to adjust my latent mana stores.",
                "line": 137
            },
            {
                "text": "\"Suzuki didn't have much in the way of mana, so...yeah, this should do it.\"",
                "line": 138
            },
            {
                "text": "I fiddle with my reserves until my timer gets to about six hundred. Looks like this thing sucks out about one point of mana every ten seconds, which means I've got an hour and forty minutes left to live.",
                "line": 139
            },
            {
                "text": "If you wanna know why I'm intentionally matching my reserves to Suzuki's, the answer is obvious...",
                "line": 140
            },
            {
                "text": "\"...Sometimes, an eminence in shadow's gotta take a dead student, steal his identity, and head in undercover. Heh-heh-heh. This is gonna kick ass.\"",
                "line": 141
            },
            {
                "text": "Suzuki was a total nobody, so it'll throw people for a loop when he starts dropping profound-sounding lines about the situation we're in. That'll make it clear that there's more to him than meets the eye, and when we finally corner the culprit, he'll reveal his true form!",
                "line": 142
            },
            {
                "text": "I'm getting pumped already.",
                "line": 143
            },
            {
                "text": "\"I've got the slime makeup techniques I cribbed off Nu and the slime plastic surgery I cribbed off Epsilon, so...that should about do the trick.\"",
                "line": 144
            },
            {
                "text": "I take another look at my mirror, and the person staring back is unmistakably Suzuki. After I steal his student ID and other belongings, just to be on the safe side, my preparations are complete.",
                "line": 145
            },
            {
                "text": "\"All right, let's do this!\"",
                "line": 146
            },
            {
                "text": "When I leave the study room, I do so with a newfound skip in my step.",
                "line": 147
            },
            {
                "text": "Alexia and Claire have gathered in the auditorium and are talking things over.",
                "line": 148
            },
            {
                "text": "\"These collars are draining our magic, I'm sure of it. And when the timer reaches zero...\" Alexia looks down at the dead students lying on the ground with their necks blown apart.",
                "line": 149
            },
            {
                "text": "\"It's not safe to take them off, either,\" Claire replies. She's tried running magic through her own collar a couple times to test it, but every time, she feels a nasty sort of resistance. It's possible they're set up to explode if anyone tries messing with them.",
                "line": 150
            },
            {
                "text": "Alexia addresses the gathered students. \"Bottom line is, we need to avoid using magic unless we absolutely have to. That goes double for the students who don't have much to begin with.\"",
                "line": 151
            },
            {
                "text": "The students trapped by the white mist have congregated in the auditorium. A lot of people have already left for the day, but even so, more and more students keep piling in, each of them wearing that same ominous collar around their necks.",
                "line": 152
            },
            {
                "text": "Alexia's collar reads 1,303, and Claire's display reads 1,917.",
                "line": 153
            },
            {
                "text": "\"Sigh... I looked around, but I didn't find any teachers we could ask for help,\" says a petite girl wearing a short skirt. It's Nina.",
                "line": 154
            },
            {
                "text": "\"That's what I've gathered,\" Alexia replies. \"We're just going to have to pull through together.\"",
                "line": 155
            },
            {
                "text": "\"Nina, do you know where Cid is?\" Claire asks.",
                "line": 156
            },
            {
                "text": "\"I haven't seen the young'un. He's probably already back at his dorm.\"",
                "line": 157
            },
            {
                "text": "Claire breathes a sigh of relief. \"Thank goodness...\"",
                "line": 158
            },
            {
                "text": "\"The question is, what exactly is even going on here?\" Alexia says. \"There's that weird white fog, there's these creepy collars, and we can't make contact with the outside world. I can't make heads or tails of it.\"",
                "line": 159
            },
            {
                "text": "\"It's the Shadow Garden,\" says a boy with dark green hair. \"Rumor has it that an organization by that name was involved in both the case of the missing students and head librarian's unexplained death. My dad's a member of the Knight Order, and he told me all about it.\"",
                "line": 160
            },
            {
                "text": "\"You're...Isaac, right? I've heard you show a lot of promise as a dark knight. But what proof do you have that the Shadow Garden was behind this?\"",
                "line": 161
            },
            {
                "text": "\"Proof? That's a strange question to ask, Your Highness. This isn't even the first time they've taken over the school.\"",
                "line": 162
            },
            {
                "text": "\"...What's their motive, then?\"",
                "line": 163
            },
            {
                "text": "\"They're an evil criminal organization. They don't need a motive. For them, slaking their thirst for murder is an end unto itself.\"",
                "line": 164
            },
            {
                "text": "A stir runs through the students listening from the sidelines.",
                "line": 165
            },
            {
                "text": "\"Th-the Shadow Garden is at it again...\"",
                "line": 166
            },
            {
                "text": "\"I...I thought I was gonna die last time... Snff...\"",
                "line": 167
            },
            {
                "text": "\"This isn't fair. Why are they doing this to us?!\"",
                "line": 168
            },
            {
                "text": "\"Calm down, everyone!\" Alexia shouts. \"And, Isaac, watch what you say. People are scared enough as it is.\"",
                "line": 169
            },
            {
                "text": "\"Forgive me.\" Isaac offers an apologetic shrug. However, it does little to quell the other students' fears.",
                "line": 170
            },
            {
                "text": "\"It's dangerous to settle on a culprit when we don't have enough information. What we should be doing right now is getting out of these collars and escaping. Don't you agree?\"",
                "line": 171
            },
            {
                "text": "\"That might be easier said than done,\" Nina interjects. \"I tried testing to see how far the fog goes, but I don't think we're gonna be able to leave the campus. There's some sort of invisible wall in the way.\"",
                "line": 172
            },
            {
                "text": "\"Then is there at least a way for us to remove these collars?\"",
                "line": 173
            },
            {
                "text": "\"That's a toughie. These are some pretty nasty artifacts. Who knows what'd happen if you tried screwing with them?\"",
                "line": 174
            },
            {
                "text": "\"That's probably a good call...\"",
                "line": 175
            },
            {
                "text": "A grim silence descends on the auditorium.",
                "line": 176
            },
            {
                "text": "Then one of the boys trembling by the wall stands up and makes a break for it. \"No, no... I'm too young to die!\"",
                "line": 177
            },
            {
                "text": "\"Me too!! I'm not...I'm not gonna die here!\"",
                "line": 178
            },
            {
                "text": "A couple of other students follow him, and they all head toward the auditorium's exit.",
                "line": 179
            },
            {
                "text": "\"H-hold it right there!!\" Alexia hurriedly shouts after them.",
                "line": 180
            },
            {
                "text": "The moment they step out of the auditorium, however, blood goes spraying.",
                "line": 181
            },
            {
                "text": "\"Wha\u2014?!\"",
                "line": 182
            },
            {
                "text": "Invisible swords held by lifeless, ghostly-looking warriors pierce the students clean through.",
                "line": 183
            },
            {
                "text": "\"Those are...those are spirits,\" Claire stammers.",
                "line": 184
            },
            {
                "text": "\"What the heck is a spirit?!\" Alexia cries.",
                "line": 185
            },
            {
                "text": "\"I'm not really sure, but that's what Aurora called them!\"",
                "line": 186
            },
            {
                "text": "The two of them draw their swords and break into a dash.",
                "line": 187
            },
            {
                "text": "Isaac and Nina follow their lead.",
                "line": 188
            },
            {
                "text": "\"Hraaah!\"",
                "line": 189
            },
            {
                "text": "\"Take that!\"",
                "line": 190
            },
            {
                "text": "Alexia and Claire lash out, and a handful of the spirits vanish. However, there are far more lurking just outside the auditorium.",
                "line": 191
            },
            {
                "text": "\"There's so many of them... When did they even get here?\"",
                "line": 192
            },
            {
                "text": "\"We're outnumbered. This'll be an uphill battle.\"",
                "line": 193
            },
            {
                "text": "\"Be careful with your mana reserves, you two,\" Nina warns them from behind.",
                "line": 194
            },
            {
                "text": "Alexia and Claire gasp in realization, then glance at each other's collars.",
                "line": 195
            },
            {
                "text": "\"Retreat! Retreat!\"",
                "line": 196
            },
            {
                "text": "\"Shut the door!\"",
                "line": 197
            },
            {
                "text": "As Alexia and Claire shove back the spirits, Nina and Isaac begin closing the door.",
                "line": 198
            },
            {
                "text": "\"Get back in here, you two!\"",
                "line": 199
            },
            {
                "text": "At the very last moment before the door slams shut, Alexia and Claire slide back into the auditorium. Then, while catching their breath, they take another look at each other's collars. Alexia is at 1,238. Claire is at 1,825.",
                "line": 200
            },
            {
                "text": "\"This is bad...,\" Alexia says. \"I didn't expect our reserves to drop so fast.\"",
                "line": 201
            },
            {
                "text": "\"Me neither,\" agrees Claire. \"Nina, how much do you have left?\"",
                "line": 202
            },
            {
                "text": "\"Huh? That's, uh, a good question.\"",
                "line": 203
            },
            {
                "text": "For whatever reason, Nina shifts her timer out of view.",
                "line": 204
            },
            {
                "text": "\"We can't see it if you do that.\"",
                "line": 205
            },
            {
                "text": "\"Oh. Right. Good call.\"",
                "line": 206
            },
            {
                "text": "Nina slowly reveals her timer. The number it displays is resoundingly average.",
                "line": 207
            },
            {
                "text": "\"Seven hundred and eighty four, huh? That's lower than I thought.\"",
                "line": 208
            },
            {
                "text": "\"At this rate, I'd say I've got about two hours left to live,\" Nina says. \"What about you, Isaac?\"",
                "line": 209
            },
            {
                "text": "\"I'm at thirteen sixty-seven.\"",
                "line": 210
            },
            {
                "text": "\"Dang, that's an honors student for you. You've got loads of magic. Let's go around and get a read on the others.\"",
                "line": 211
            },
            {
                "text": "The four of them go around and check the readouts on the other students in the auditorium.",
                "line": 212
            },
            {
                "text": "\"The weakest student is already down in the three hundreds...,\" Alexia says in a hushed tone once they've finished.",
                "line": 213
            },
            {
                "text": "Claire looks over at the girl in question. She's trembling, and her face is as white as a sheet. \"Yeah, she drained her reserves doing some self-study after school. If we don't do something within the next hour, she's done for...\"",
                "line": 214
            },
            {
                "text": "\"There's a lot of other students with low reserves, too. Plus, there's no guarantee we'll be able to hold this position forever.\"",
                "line": 215
            },
            {
                "text": "The spirits are pounding on the auditorium door, and the students are building a barricade by piling up tables and chairs.",
                "line": 216
            },
            {
                "text": "\"What do you propose we do, Princess Alexia?\" asks Isaac.",
                "line": 217
            },
            {
                "text": "\"I don't know, I just don't...\"",
                "line": 218
            },
            {
                "text": "Alexia had no way of predicting they would get swallowed up by the white fog, and she has no idea how to disarm the collars.",
                "line": 219
            },
            {
                "text": "Her gaze darts about, desperately searching for answers.",
                "line": 220
            },
            {
                "text": "Then she hears it.",
                "line": 221
            },
            {
                "text": "\"As things are, we're just sitting around waiting to die...\"",
                "line": 222
            },
            {
                "text": "The voice isn't loud, not by any measure. However, its strange confidence echoes through the auditorium nonetheless.",
                "line": 223
            },
            {
                "text": "\"...but I have an idea.\"",
                "line": 224
            },
            {
                "text": "There's a boy leaning against the wall. He lazily combs back his dark-brown hair as he walks over to Alexia and the others.",
                "line": 225
            },
            {
                "text": "\"Who're you?\" Alexia asks.",
                "line": 226
            },
            {
                "text": "\"Suzuki.\"",
                "line": 227
            },
            {
                "text": "He looks Alexia straight in the eye. There's something a little shady about his gaze, but other than that, he's utterly unremarkable.",
                "line": 228
            },
            {
                "text": "\"He's in my class,\" Isaac offers.",
                "line": 229
            },
            {
                "text": "\"Suzuki, huh? Well, you said you had an idea. Would you mind sharing?\"",
                "line": 230
            },
            {
                "text": "\"Not at all...\" Suzuki slowly sweeps his gaze across the students in the auditorium as he speaks. \"The first thing we need to realize is our ability to do battle is limited. Most of the students here don't have much magic left, and it would run out in an instant if they tried to fight. If things got violent, they'd be hastening their own deaths every time they swung their swords. Between that and the psychological strain they're under, they're in no state to fight.\"",
                "line": 231
            },
            {
                "text": "\"You have a point.\"",
                "line": 232
            },
            {
                "text": "Suzuki's analysis is accurate. Despite how tense the situation is, he's drawn some intelligent conclusions.",
                "line": 233
            },
            {
                "text": "\"Only the small handful of people right here have any magic to spare. In other words, those are the only ones who can actually fight. Now, I propose we split the students into two groups.\"",
                "line": 234
            },
            {
                "text": "He looks over at the students putting together the barricade.",
                "line": 235
            },
            {
                "text": "\"The first group will be the defense team. All the students who are low on mana will stay here in the auditorium, and they'll focus on staying safe while preserving their magic. Then the other group...\"",
                "line": 236
            },
            {
                "text": "He turns his gaze to Alexia and the others.",
                "line": 237
            },
            {
                "text": "\"...will be running offense\u2014\"",
                "line": 238
            },
            {
                "text": "Suddenly, a female voice cuts Suzuki off. \"What in the world do you think you're doing?!\"",
                "line": 239
            },
            {
                "text": "All the tension drains from the quartet who'd been listening to his plan with bated breath.",
                "line": 240
            },
            {
                "text": "\"What gives a branch-family nobody the right to talk to Princess Alexia like that? You should just keep your mouth shut and help build the barricade with the others. If you harm the main house's reputation by speaking out of turn, I assure you there will be hell to pay.\"",
                "line": 241
            },
            {
                "text": "There's a girl with light-red hair standing behind him.",
                "line": 242
            },
            {
                "text": "Alexia gives her a look. \"And you are, uh...?\"",
                "line": 243
            },
            {
                "text": "\"I'm Christina Hope. A distant relative of Suzuki's.\"",
                "line": 244
            },
            {
                "text": "\"Another classmate of mine,\" Isaac adds. \"And a talented one.\"",
                "line": 245
            },
            {
                "text": "\"I'm so sorry Suzuki was bothering you. He's really supposed to know better.\"",
                "line": 246
            },
            {
                "text": "Christina grabs Suzuki by the collar and tries to haul him off.",
                "line": 247
            },
            {
                "text": "However, Alexia stops her. \"Hold on. He's got a point.\"",
                "line": 248
            },
            {
                "text": "Christina reluctantly lets Suzuki go.",
                "line": 249
            },
            {
                "text": "\"Yeesh,\" he says. \"You never change, do you, Christina?\"",
                "line": 250
            },
            {
                "text": "\"Don't you take that tone with a member of the main house.\"",
                "line": 251
            },
            {
                "text": "\"We're in a state of emergency here. I'm going to have to take some liberties.\"",
                "line": 252
            },
            {
                "text": "\"And what exactly do you mean by that?\"",
                "line": 253
            },
            {
                "text": "Christina's harsh glare earns her a small sigh from Suzuki. \"Back to the topic at hand,\" he says. \"We should take the select few with magic to spare and have them be our offense team. That group's job will be to break through the spirits' siege and stop the phenomenon at the source. That's my plan.\"",
                "line": 254
            },
            {
                "text": "\"And what exactly is the phenomenon's source?\"",
                "line": 255
            },
            {
                "text": "\"These collars are sucking out our magic. Have you ever thought about where that magic goes?\"",
                "line": 256
            },
            {
                "text": "\"That's a good point...\" Alexia concentrates and searches for the magic. When she does, she senses a faint flow streaming out of her collar. \"So if we follow the magic... I'm impressed you thought of that.\"",
                "line": 257
            },
            {
                "text": "Christina looks a little surprised as well. \"Suzuki...\"",
                "line": 258
            },
            {
                "text": "\"It was a simple enough deduction,\" he replies nonchalantly. \"Anyone could have made it if they'd put their mind to it.\"",
                "line": 259
            },
            {
                "text": "\"It's a clever thought. However, are we going to be able to follow that flow with any sort of precision?\" asks Isaac. He shoots a suspicious look Suzuki's way. \"Magic that faint can unravel at the drop of a hat. I'm against Suzuki's plan. He's not even that good of a student. As a matter of fact, he's downright incompetent.\"",
                "line": 260
            },
            {
                "text": "\"I agree,\" Christina says with a nod.",
                "line": 261
            },
            {
                "text": "Isaac shoots Suzuki an intense glare. \"Allow me to be blunt. Suzuki isn't worthy of our trust.\"",
                "line": 262
            },
            {
                "text": "Everyone's eyes turn to Suzuki, who lets out a little laugh. \"Trust, huh...? Heh.\"",
                "line": 263
            },
            {
                "text": "\"...What's so funny?\" says Isaac.",
                "line": 264
            },
            {
                "text": "\"Oh, everything. But I have to say...I never expected to be called untrustworthy by the least trustworthy person in the room.\"",
                "line": 265
            },
            {
                "text": "\"And what exactly do you mean by that?\"",
                "line": 266
            },
            {
                "text": "Before Isaac and Suzuki can finish, Claire speaks up. \"I'm on board with Suzuki's plan.\"",
                "line": 267
            },
            {
                "text": "\"Claire...?\"",
                "line": 268
            },
            {
                "text": "\"My right hand is throbbing...and it's doing it in the direction the magic is flowing. I can sense it...and I won't go astray. I can follow the magic's trail.\"",
                "line": 269
            },
            {
                "text": "The look in Claire's eyes is one of confidence.",
                "line": 270
            },
            {
                "text": "\"You know what, Claire? I'm in,\" says Alexia. \"Let's follow Suzuki's plan.\"",
                "line": 271
            },
            {
                "text": "\"Please, don't be rash!\" Isaac cries. \"I don't trust the guy.\"",
                "line": 272
            },
            {
                "text": "\"There's no time,\" Alexia replies. We can't just sit around discussing tactics forever.\"",
                "line": 273
            },
            {
                "text": "\"But\u2014\"",
                "line": 274
            },
            {
                "text": "\"Look, Isaac, we're going whether you're with us or not.\"",
                "line": 275
            },
            {
                "text": "Nina raises her hand. \"I guess I'm on board with Suzuki's plan, too.\"",
                "line": 276
            },
            {
                "text": "That's enough to make Isaac fold. \"Rgh... Fine. I'm in.\"",
                "line": 277
            },
            {
                "text": "\"Let's figure out who's going to be on the offense team, then,\" Alexia says. \"For starters, we should take me, Claire, and Isaac. Any objections so far?\"",
                "line": 278
            },
            {
                "text": "Claire and Isaac shake their heads.",
                "line": 279
            },
            {
                "text": "\"And if possible, I'd like to ask you to come along, too, Christina.\"",
                "line": 280
            },
            {
                "text": "Christina's remaining magic is at 1,179.",
                "line": 281
            },
            {
                "text": "\"I would never turn down a request from you, Princess Alexia. My sword is yours.\"",
                "line": 282
            },
            {
                "text": "\"Much appreciated. Then the four of us will\u2014\"",
                "line": 283
            },
            {
                "text": "\"I'm coming, too,\" Nina says, raising her hand.",
                "line": 284
            },
            {
                "text": "Alexia's expression sours. \"But your mana reserves...\"",
                "line": 285
            },
            {
                "text": "Nina's counter is at 784. With a number like that, she can't afford to mess around.",
                "line": 286
            },
            {
                "text": "\"Nina will be fine,\" Claire replies. \"She might not have much magic, but she knows how to pull her own weight.\"",
                "line": 287
            },
            {
                "text": "\"...Fine. Welcome to the team, Nina.\"",
                "line": 288
            },
            {
                "text": "\"I'll do my best not to slow you all down.\"",
                "line": 289
            },
            {
                "text": "\"Wait a minute,\" Claire says. \"Weren't you at seven hundred and eighty-four earlier, too?\"",
                "line": 290
            },
            {
                "text": "\"Huh? Whaddaya mean?\"",
                "line": 291
            },
            {
                "text": "For the briefest of moments, Nina's expression freezes.",
                "line": 292
            },
            {
                "text": "\"Your mana reserves. I feel like it hasn't gone down this whole time.\"",
                "line": 293
            },
            {
                "text": "\"I don't think so,\" Nina replies. \"It was at seven hundred and ninety-four earlier, so that means it's gone down by ten.\"",
                "line": 294
            },
            {
                "text": "\"Was it?\"",
                "line": 295
            },
            {
                "text": "\"Yeah, it was. You're such a scatterbrain, Claire.\"",
                "line": 296
            },
            {
                "text": "Nina gently runs her finger over her collar's timer. When she does, the number goes down by one.",
                "line": 297
            },
            {
                "text": "\"Oh yeah, it went down to 783,\" Claire notes.",
                "line": 298
            },
            {
                "text": "\"See?\" Nina says. \"It's going down just fine.\"",
                "line": 299
            },
            {
                "text": "\"Well, that's a shame. And here I was, thinking you'd found some way to prevent your magic from draining.\"",
                "line": 300
            },
            {
                "text": "Nina lets out an exasperated sigh. \"Of course I haven't.\"",
                "line": 301
            },
            {
                "text": "\"Then with that,\" Alexia says, \"the five of us will be the offense team\u2014\"",
                "line": 302
            },
            {
                "text": "\"I'm coming, too.\" This time, it's Suzuki who speaks up.",
                "line": 303
            },
            {
                "text": "\"That's obviously not happening,\" Christina replies. \"You only have five hundred and forty-one magic left.\"",
                "line": 304
            },
            {
                "text": "\"I object, too,\" Isaac agrees. \"All he would do is slow us down.\"",
                "line": 305
            },
            {
                "text": "\"If I start holding you back, you can just cut me loose,\" Suzuki says coolly. \"I won't ask for anyone to save me.\"",
                "line": 306
            },
            {
                "text": "Alexia starts to speak, but Nina beats her to the punch. \"I'm on board. If he ends up being a burden, we can always ditch him and use him as a decoy.\"",
                "line": 307
            },
            {
                "text": "\"How could you even suggest something like that?\" Claire chides her.",
                "line": 308
            },
            {
                "text": "\"He literally just signed off on it himself. Plus, those analytical skills of his could come in handy.\"",
                "line": 309
            },
            {
                "text": "\"I say we take him.\" Surprisingly, this final voice of assent comes from Christina. \"As a member of the main house, I'll take full responsibility for any problems he causes. Do you have any objections?\"",
                "line": 310
            },
            {
                "text": "She stares daggers at Suzuki.",
                "line": 311
            },
            {
                "text": "He gives her a quiet nod. \"...That's fine by me.\"",
                "line": 312
            },
            {
                "text": "Alexia takes the lead as the group explains the plan to the rest of the students.",
                "line": 313
            },
            {
                "text": "\"You're just gonna abandon us?\" some of them cry, but there's no time to make them see reason.",
                "line": 314
            },
            {
                "text": "The group of six sneaks out the auditorium's back entrance, taking great care not to draw attention. There are a couple of spirits that look like they might be trouble, but Claire and Alexia quickly dispatch them and urge the group onward.",
                "line": 315
            },
            {
                "text": "All the while, Christina subtly observes Suzuki.",
                "line": 316
            },
            {
                "text": "There's no telling when or where spirits might attack them from out of the white fog, yet his composure doesn't so much as waver.",
                "line": 317
            },
            {
                "text": "\"It doesn't make sense...,\" she murmurs, too quietly for anyone else to hear.",
                "line": 318
            },
            {
                "text": "She and Suzuki are classmates and distant relatives. There's nothing more and nothing less to their relationship than that, and they haven't exactly spent loads of time together.",
                "line": 319
            },
            {
                "text": "Even so, she has a firm handle on what kind of person Suzuki is. He's neither the kind of guy who would ever act that brazenly around Princess Alexia nor the kind of guy who can keep his cool in active combat. It's almost like he's become an entirely different person. The change is so profound, that's the only way she can think to describe it.",
                "line": 320
            },
            {
                "text": "However, his face and voice are the exact same as ever.",
                "line": 321
            },
            {
                "text": "\"Was he keeping his talent on the down-low?\"",
                "line": 322
            },
            {
                "text": "Perhaps he wanted to avoid getting wrapped up in the conflicts between the main house and his branch family. It's weak, as far as motives go, but it's certainly not impossible.",
                "line": 323
            },
            {
                "text": "\"Could he be using an artifact or some sort of drug?\"",
                "line": 324
            },
            {
                "text": "Those are the only other possibilities she can come up with, but neither of them sits right with her. Still, there's no doubt in her mind that something must have sparked the change.",
                "line": 325
            },
            {
                "text": "If Suzuki is going to become a threat to the main house, Christina won't hesitate to get rid of him.",
                "line": 326
            },
            {
                "text": "Right as she steels her resolve, she feels it.",
                "line": 327
            },
            {
                "text": "\"Be careful.\"",
                "line": 328
            },
            {
                "text": "Someone gives her shoulder a gentle tug.",
                "line": 329
            },
            {
                "text": "A moment later, a spirit sword slashes right before Christina's eyes.",
                "line": 330
            },
            {
                "text": "\"Get away from me!\"",
                "line": 331
            },
            {
                "text": "She reacts as anyone would, drawing her blade and hacking the spirit apart. It crumbles into bits and vanishes.",
                "line": 332
            },
            {
                "text": "\"I see your sword work's just as impressive as always,\" Suzuki says.",
                "line": 333
            },
            {
                "text": "She turns to him. \"...Thanks for the save.\" If he hadn't been there, that attack would probably have hit her head-on.",
                "line": 334
            },
            {
                "text": "\"I was just fulfilling my duty as a branch-family member,\" he replies curtly. Then he hurries ahead.",
                "line": 335
            },
            {
                "text": "Christina can't read him one bit.",
                "line": 336
            },
            {
                "text": "\"It's this way.\"",
                "line": 337
            },
            {
                "text": "Claire traces the faint threads of magic and advances through the schoolhouse. Every so often, she clutches the bandages on her hand as if worried about something.",
                "line": 338
            },
            {
                "text": "\"What's the deal with her hand?\" Isaac asks.",
                "line": 339
            },
            {
                "text": "\"She's got some sort of special power. She's more sensitive to magic than most people,\" Alexia replies. She decides to leave out the weird bits about Claire being possessed by a spirit called Aurora.",
                "line": 340
            },
            {
                "text": "\"I imagine that's how she won the Bushin Festival, then.\"",
                "line": 341
            },
            {
                "text": "\"That would make sense.\"",
                "line": 342
            },
            {
                "text": "\"The fog is thick up here,\" Christina notes. \"There's no telling where someone might launch an ambush.\"",
                "line": 343
            },
            {
                "text": "\"True.\"",
                "line": 344
            },
            {
                "text": "\"But don't worry, Princess Alexia. I'll be sure to protect you, no matter the\u2014\"",
                "line": 345
            },
            {
                "text": "Before Christina can finish her sentence, Alexia abruptly lashes out with her sword, lopping the arm off the spirit that was reaching for their ankles. After casting a sidelong glance at the specter as it crumbles and fades, she stows her blade. \"I'm sorry, were you saying something?\"",
                "line": 346
            },
            {
                "text": "\"N-no, ma'am.\"",
                "line": 347
            },
            {
                "text": "For the next little while, the six of them walk in silence.",
                "line": 348
            },
            {
                "text": "Later on, Nina stops in her tracks. \"You guys hear that?\"",
                "line": 349
            },
            {
                "text": "\"What are you talking about...? Wait, were those screams?!\"",
                "line": 350
            },
            {
                "text": "The rest of the group has to strain their ears, but those are definitely screams.",
                "line": 351
            },
            {
                "text": "Claire's standing at their vanguard, and she turns around. \"There might be students who didn't make it out in time. What should we do?\"",
                "line": 352
            },
            {
                "text": "\"Need I remind you what razor-thin margins we're working with?\"",
                "line": 353
            },
            {
                "text": "Isaac has a point. In the time since they left the auditorium, they've already burned through nearly a fifth of their magic.",
                "line": 354
            },
            {
                "text": "After hesitating for a moment, Alexia makes the call. \"Let's go help them.\"",
                "line": 355
            },
            {
                "text": "The group races down the hall only to be greeted by a throng of spirits.",
                "line": 356
            },
            {
                "text": "\"More spirits... Looks like they've got the classroom surrounded.\"",
                "line": 357
            },
            {
                "text": "\"There are students inside!\" Claire shouts.",
                "line": 358
            },
            {
                "text": "\"Outside too.\"",
                "line": 359
            },
            {
                "text": "Nina's found a couple of brutally mangled corpses\u2014along with a girl who's about to get run through.",
                "line": 360
            },
            {
                "text": "\"Eeek... H-help!!\"",
                "line": 361
            },
            {
                "text": "They won't make it in time. Everyone is sure of it.",
                "line": 362
            },
            {
                "text": "At the last minute, however, a bloodred tendril shoots out, rescuing the girl by shredding through the spirits surrounding her.",
                "line": 363
            },
            {
                "text": "\"Now!\"",
                "line": 364
            },
            {
                "text": "On Claire's signal, the six of them charge the spirits' line.",
                "line": 365
            },
            {
                "text": "While Claire uses her tendrils to punch big holes in the spirits' formation, Alexia efficiently slices through one spirit after another. Isaac uses big, magic-loaded slashes to send their foes flying.",
                "line": 366
            },
            {
                "text": "The three of them represent the bulk of the group's combat strength.",
                "line": 367
            },
            {
                "text": "Meanwhile, Nina, Christina, and Suzuki fight more reservedly a couple of steps behind the vanguard. Nina dispatches the spirits that escape Claire's onslaught, and Christina fights while keeping one eye on Suzuki the whole time.",
                "line": 368
            },
            {
                "text": "And as for Suzuki...he just stands there. He doesn't even draw his sword.",
                "line": 369
            },
            {
                "text": "Instead, he merely leans on the wall and watches the battle transpire. He sticks out like a sore thumb.",
                "line": 370
            },
            {
                "text": "The other five make swift work of the spirits.",
                "line": 371
            },
            {
                "text": "Once the fighting is over, Christina is the first to speak. \"If you're not going to pull your weight, then why are you even here?\" she demands from Suzuki.",
                "line": 372
            },
            {
                "text": "\"I don't have much magic left, so I'm avoiding fighting when I don't have to, that's all. You all looked like you were doing just fine without me. What, did you need help?\"",
                "line": 373
            },
            {
                "text": "\"Of course not. You can just keep quivering in the back, for all I care.\"",
                "line": 374
            },
            {
                "text": "\"Don't mind if I do.\"",
                "line": 375
            },
            {
                "text": "Their exchange lacks any sort of passion or emotion. They might be classmates as well as relatives, but you certainly wouldn't know it from listening to them.",
                "line": 376
            },
            {
                "text": "Claire goes and checks on the girl they just saved. \"Are you okay? Are you hurt anywhere?\"",
                "line": 377
            },
            {
                "text": "The girl winces. \"M-my arm...\"",
                "line": 378
            },
            {
                "text": "\"Looks like it's broken. You need to rest up...\" Claire sneaks a peek at the girl's timer. It's already sub-one hundred. \"It's not safe out here. Let's get you into that classroom.\"",
                "line": 379
            },
            {
                "text": "Alexia reaches over to open the door.",
                "line": 380
            },
            {
                "text": "\"N-no, you can't!\" the girl cries, her expression frantic. \"You have to help me. If I go back in there\u2014\"",
                "line": 381
            },
            {
                "text": "Behind her, the door swings open.",
                "line": 382
            },
            {
                "text": "\"Goodness me, if it isn't Princess Alexia. Please, do come in and make yourselves at home.\"",
                "line": 383
            },
            {
                "text": "\"I know you... You're the vice president.\"",
                "line": 384
            },
            {
                "text": "The girl standing there has a bewitching sort of beauty. It's Eliza, vice president of the student council.",
                "line": 385
            },
            {
                "text": "Eliza smiles kindly as she helps treat the girl's injuries. \"There, aaall patched up.\"",
                "line": 386
            },
            {
                "text": "\"Th-thank you...Miss Eliza...\"",
                "line": 387
            },
            {
                "text": "The girl's voice trembles, and it's definitely not because of the pain. The brawny bodyguard by Eliza's side crosses his arms.",
                "line": 388
            },
            {
                "text": "Alexia looks around the room. \"I had no idea there were so many people left.\"",
                "line": 389
            },
            {
                "text": "Aside from her and Eliza's groups, there's another eight students in the classroom, as well as four corpses.",
                "line": 390
            },
            {
                "text": "\"Right as soon as that white fog showed up, we got attacked by those strange, horrible monsters...but as vice president, I just knew it was my job to pull everyone together and fight like our lives depended on it.\"",
                "line": 391
            },
            {
                "text": "There's a barricade over by the classroom's entrance. It's splattered with blood, and the walls are absolutely drenched with the stuff.",
                "line": 392
            },
            {
                "text": "Alexia steals a glance at Eliza's mana reserves. They're at 1,971.",
                "line": 393
            },
            {
                "text": "\"That's a lot of magic you've got there, VP,\" she says.",
                "line": 394
            },
            {
                "text": "\"I come from good stock,\" Eliza replies. There's a hint of boastfulness in her voice. \"I'm proud to be my parents' daughter.\"",
                "line": 395
            },
            {
                "text": "\"I see... Well, what do you plan on doing from here? There are students gathered in the auditorium, so it would probably be safer to head over there.\"",
                "line": 396
            },
            {
                "text": "\"We would love to, but I'm worried about getting there. People here don't have much magic left.\"",
                "line": 397
            },
            {
                "text": "Aside from Eliza and her bodyguard, there isn't a student in the classroom who has over 300 mana left.",
                "line": 398
            },
            {
                "text": "\"We could take you partway there,\" Alexia offers.",
                "line": 399
            },
            {
                "text": "\"Oh gosh, that would be such a relief.\"",
                "line": 400
            },
            {
                "text": "As they wait for the students to finish making their preparations, Alexia's group leaves the classroom. The girl continues trembling the whole way through.",
                "line": 401
            },
            {
                "text": "Alexia, Claire, and Isaac stand at the vanguard as the group travels. Their goal is to avoid wearing out the students who are low on magic.",
                "line": 402
            },
            {
                "text": "However, Alexia doesn't have much to spare herself.",
                "line": 403
            },
            {
                "text": "\"I'm under one thousand...,\" she mutters.",
                "line": 404
            },
            {
                "text": "As her magic drains, she can feel death creeping ever closer.",
                "line": 405
            },
            {
                "text": "\"I'm at eleven hundred,\" Isaac says.",
                "line": 406
            },
            {
                "text": "\"I've still got thirteen hundred,\" Claire replies. \"If things get rough, just leave it to me.\"",
                "line": 407
            },
            {
                "text": "The two of them have slightly larger buffers than Alexia, but even so, the psychological strain is wearing away at them.",
                "line": 408
            },
            {
                "text": "However, the person who has it the worst of all is the girl they just saved.",
                "line": 409
            },
            {
                "text": "\"No, no, I can't...\"",
                "line": 410
            },
            {
                "text": "She trembles as she watches her number steadily drop. Her mana reserves are down to 59; that means she only has about ten minutes left. However, there's nothing anyone can do about it.",
                "line": 411
            },
            {
                "text": "\"Snff...\"",
                "line": 412
            },
            {
                "text": "When she finally breaks down into tears, nobody can find any words to console her with.",
                "line": 413
            },
            {
                "text": "All of a sudden, the group senses a series of magical reactions around them.",
                "line": 414
            },
            {
                "text": "\"Be careful.\"",
                "line": 415
            },
            {
                "text": "They look around, but there's nothing there but white fog.",
                "line": 416
            },
            {
                "text": "No, that isn't true. There's magic gathering in the fog and forming into spirits. The fog is literally conjuring them out of thin air.",
                "line": 417
            },
            {
                "text": "\"Take this!\"",
                "line": 418
            },
            {
                "text": "Alexia and the other attackers stab at the spirits before they have a chance to make a move. However, there are too many of them. Christina, Nina, and the students making up the rear guard join the battle as well, and the cramped corridor devolves into an all-out melee between humans and spirits.",
                "line": 419
            },
            {
                "text": "\"Gah, there's more behind us!\"",
                "line": 420
            },
            {
                "text": "\"Damn these things!\"",
                "line": 421
            },
            {
                "text": "\"Eek! Stay away from meeeee!\"",
                "line": 422
            },
            {
                "text": "Despite it all, there are still those who don't fight.",
                "line": 423
            },
            {
                "text": "\"Are you not going to get in there, Eliza?\" Suzuki asks.",
                "line": 424
            },
            {
                "text": "Eliza laughs scornfully as she deftly evades the spirits' slashes. \"That's Miss Eliza to you, thank you very much. And the time for me to fight hasn't come yet. What's your excuse?\"",
                "line": 425
            },
            {
                "text": "\"I've got way less magic left than you, Miss Eliza. I figured that if one of us should be fighting, it's you, Miss Eliza.\"",
                "line": 426
            },
            {
                "text": "Eliza's brawny bodyguard shoots Suzuki a glare. \"Watch your mouth, frosh.\" He, too, has been using magic solely when it's the only way to keep Eliza safe.",
                "line": 427
            },
            {
                "text": "Suzuki lets out a quiet chuckle as they stare him down, then looks over at the girl from earlier. Her mana's in the single digits. \"It really is a shame. You patched her up so thoughtfully, and now she's gonna die.\"",
                "line": 428
            },
            {
                "text": "Despite the girl's wounded arm and paltry reserves, she's fighting the spirits as if her life depends on it.",
                "line": 429
            },
            {
                "text": "\"It is what it is. There's nothing any of us can do for her now.\"",
                "line": 430
            },
            {
                "text": "The girl's mana reserves keep dropping. Six, five, four...",
                "line": 431
            },
            {
                "text": "\"Sure there is. I did some fiddling, and I found that there's something reeeal interesting you can do with these collars.\"",
                "line": 432
            },
            {
                "text": "With that, Suzuki walks through the battle, over toward the girl. A spirit is about to bring its sword down on her, but Suzuki parries the blow with a magically imbued palm strike.",
                "line": 433
            },
            {
                "text": "With a wham, the spirit's sword explodes into pieces.",
                "line": 434
            },
            {
                "text": "\"Huh?\"",
                "line": 435
            },
            {
                "text": "The girl looks up at Suzuki in shock.",
                "line": 436
            },
            {
                "text": "Another wham echoes.",
                "line": 437
            },
            {
                "text": "Before anyone realizes what's happened, the spirit's jaw shatters as well. Suzuki slowly lowers the palm he just lashed out with.",
                "line": 438
            },
            {
                "text": "\"What did you just do?!\" Eliza demands.",
                "line": 439
            },
            {
                "text": "\"Some rudimentary martial arts. It's nothing to get excited over.\"",
                "line": 440
            },
            {
                "text": "With a soft grin, Suzuki reaches for the girl's collar.",
                "line": 441
            },
            {
                "text": "The numbers keep going down. Three, two, one...",
                "line": 442
            },
            {
                "text": "It's obvious the girl is beyond help.",
                "line": 443
            },
            {
                "text": "\"Ahhh... No, no, I don't want to die... Please...,\" she begs.",
                "line": 444
            },
            {
                "text": "\"Don't worry,\" Suzuki assures her, then pours magic into her collar.",
                "line": 445
            },
            {
                "text": "The next moment, the girl's magic reserves start shooting up. Fifty, one hundred, one hundred fifty...",
                "line": 446
            },
            {
                "text": "\"Th-thank you...\"",
                "line": 447
            },
            {
                "text": "They stop at 251. The girl breathes a sigh of relief.",
                "line": 448
            },
            {
                "text": "\"Suzuki...what did you just do?\"",
                "line": 449
            },
            {
                "text": "The question comes from Christina, who's now finished fighting.",
                "line": 450
            },
            {
                "text": "Most of the spirits have been dispatched, and Claire is right in the middle of dispatching the final one.",
                "line": 451
            },
            {
                "text": "After looking to see that the fight is well and truly over, Suzuki explains himself. \"Back in the classroom, I took a look at some of the dead students' collars. When I tried pouring magic into one of them, I found out that the collar actually stored it, and that got me thinking.\"",
                "line": 452
            },
            {
                "text": "Everyone present is listening to him.",
                "line": 453
            },
            {
                "text": "\"These collars allow you to transfer mana. When you do, it gets saved in a pool in the other person's collar before slowly getting expended. In other words, if we transfer mana to low-magic students, we can delay their explosions.\"",
                "line": 454
            },
            {
                "text": "\"I'm impressed you were able to figure all that out,\" Alexia says, meaning every word of it.",
                "line": 455
            },
            {
                "text": "\"This'll mean that fewer people will have to die,\" Claire notes.",
                "line": 456
            },
            {
                "text": "\"And out of all of us, the student with the most magic...is Miss Eliza.\" Suzuki smiles. \"I trust you'll be happy to help, right?\"",
                "line": 457
            },
            {
                "text": "Eliza returns his smile with a sweet one of her own. \"When we get to the auditorium, I'll take it under consideration.\"",
                "line": 458
            },
            {
                "text": "\"Aw, that's good to hear. By the way...when I was checking out the bodies in the classroom, there was something that caught my attention.\"",
                "line": 459
            },
            {
                "text": "\"And whatever might that be?\"",
                "line": 460
            },
            {
                "text": "\"There were signs that all of them had had their hands and feet bound.\"",
                "line": 461
            },
            {
                "text": "For a moment, Eliza's eye twitches. \"Are you certain you weren't just imagining things?\"",
                "line": 462
            },
            {
                "text": "\"Well, there was something else that seemed odd. All their collars had detonated.\"",
                "line": 463
            },
            {
                "text": "\"And what about it? They ran out of magic, so of course their collars exploded.\"",
                "line": 464
            },
            {
                "text": "\"True, true. But if you try picturing it, it makes for a pretty odd scene. While they were tied up, their collars went off and killed them. Makes you wonder what exactly happened.\"",
                "line": 465
            },
            {
                "text": "\"...If you have a point you're going to make, I would suggest making it now.\"",
                "line": 466
            },
            {
                "text": "\"Let's say there's a person who had the same idea I did, but they did it to someone who was still alive. Maybe they transferred mana, forcing other people to use magic. Maybe they ran a test to see what triggers the collars, or they checked to see if they could be removed. But the decisive piece of evidence was her.\"",
                "line": 467
            },
            {
                "text": "Suzuki points at the girl.",
                "line": 468
            },
            {
                "text": "\"When I gave her my mana, she thanked me. But that's weird, right? Most people would just be surprised. After all, the fact that you can transfer mana between the collars would come as news to them. But you guys already knew about that, didn't you?\"",
                "line": 469
            },
            {
                "text": "The girl goes pale and starts trembling. \"I\u2014I...\"",
                "line": 470
            },
            {
                "text": "\"You knew.\"",
                "line": 471
            },
            {
                "text": "\"...I'm sorry. Miss Eliza is a powerful aristocrat, so I couldn't defy her... If anyone went against her, she had them tied up and messed with their collars. She would try to remove them or force people to use up their magic until the timer hit zero... That's when we learned they could transfer mana.\"",
                "line": 472
            },
            {
                "text": "\"I thought it was weird how Miss Eliza had so much mana left when everyone else was running on fumes. No one else was over three hundred. It's almost like it was by design.\"",
                "line": 473
            },
            {
                "text": "\"We all had to give Miss Eliza our mana. But I had so little, I couldn't even do that, which is why I was in the hallway...\" The girl lets out a sob.",
                "line": 474
            },
            {
                "text": "Alexia glares at Eliza. \"If this is all true, then this is a serious situation.\"",
                "line": 475
            },
            {
                "text": "Eliza sighs. \"And? What exactly do you plan on doing about it?\"",
                "line": 476
            },
            {
                "text": "\"So you're not even going to deny the charges.\"",
                "line": 477
            },
            {
                "text": "\"Charges? I was trying to help people in my capacity as vice president. Back then, I had no idea the collars would explode if you ran out of mana or tried to take them off.\"",
                "line": 478
            },
            {
                "text": "\"You have no shame, do you? How do you explain the way you stole their mana, then?\"",
                "line": 479
            },
            {
                "text": "\"I didn't steal it; I was looking after it for them. I assure you, I had every intention of dividing it back out evenly.\"",
                "line": 480
            },
            {
                "text": "\"You really think that excuse will hold up?\"",
                "line": 481
            },
            {
                "text": "\"Against most people, certainly...although I will admit to being on the back foot against you, Princess Alexia. Instead, how about this? Let's make a deal.\"",
                "line": 482
            },
            {
                "text": "\"What kind of deal?\"",
                "line": 483
            },
            {
                "text": "\"I still have nineteen hundred mana. If you agree to turn a blind eye, I'd be happy to hand it over.\"",
                "line": 484
            },
            {
                "text": "Alexia softly clicks her tongue.",
                "line": 485
            },
            {
                "text": "That last fight did a number on the students' mana reserves. Getting Eliza's mana might be enough to save them.",
                "line": 486
            },
            {
                "text": "However, accepting Eliza's offer would mean having to overlook her crimes. Even Alexia would get into trouble if she tried to renege on a deal with a major aristocrat.",
                "line": 487
            },
            {
                "text": "\"...And you'd really hand it over?\"",
                "line": 488
            },
            {
                "text": "\"Of course. If you agree to my conditions, I'll hand over allll sorts of mana.\" Eliza beams confidently. She knows that Alexia's in no position to turn her down.",
                "line": 489
            },
            {
                "text": "Alexia glances around at the other students. Their faces are filled with exhaustion and fear. They can feel their lives draining away with every passing moment.",
                "line": 490
            },
            {
                "text": "If she wants to save them, she has no choice but to strike a deal.",
                "line": 491
            },
            {
                "text": "\"Fine. You have a\u2014\"",
                "line": 492
            },
            {
                "text": "The words are halfway out of Alexia's mouth, when suddenly...",
                "line": 493
            },
            {
                "text": "\"You really don't understand the situation you're in, do you?\"",
                "line": 494
            },
            {
                "text": "...Suzuki speaks up, cutting Alexia off. He's standing behind Eliza.",
                "line": 495
            },
            {
                "text": "\"What the...? When did you get there?!\"",
                "line": 496
            },
            {
                "text": "\"Don't move.\"",
                "line": 497
            },
            {
                "text": "Eliza and her bodyguard hurriedly try to turn around, but with a low growl, Suzuki puts a swift stop to that. He's holding his hand to Eliza's neck\u2014or rather, to her collar.",
                "line": 498
            },
            {
                "text": "\"You know what'll happen if I rip this collar off? I suspect you do, Miss Eliza.\"",
                "line": 499
            },
            {
                "text": "The look on Eliza's face is downright bloodcurdling. \"What are you playing at? You know exactly what's going to happen to you for laying a finger on me!\"",
                "line": 500
            },
            {
                "text": "\"Cut it out, Suzuki,\" Christina urges. \"The Hope family has no desire to make an enemy out of her.\"",
                "line": 501
            },
            {
                "text": "Suzuki sighs loudly enough for everyone to hear. \"Well, damn. I guess none of you understand the situation we're in.\"",
                "line": 502
            },
            {
                "text": "\"And what exactly do you mean by that?\"",
                "line": 503
            },
            {
                "text": "\"None of the things that usually protect you are here right now, Miss Eliza. Your influence as a powerful aristocrat, your faction's authority, and all that wealth you've built up can't reach you here in the white fog.\"",
                "line": 504
            },
            {
                "text": "\"I am Eliza. One of the foremost aristocrats in the Midgar Kingdom\u2014\"",
                "line": 505
            },
            {
                "text": "\"So what? Right here, right now, is that going to protect you? If I kill you here in the fog, what sort of testimony do you think these people will give? You really think the people you stole mana from are going to come forward on your behalf?\"",
                "line": 506
            },
            {
                "text": "Eliza glowers at the other students. Not a single one of them meets her gaze.",
                "line": 507
            },
            {
                "text": "Suzuki leans in close and whispers in her ear. \"Are you starting to understand? Are you starting to see the position you're in?\"",
                "line": 508
            },
            {
                "text": "He tightens his grip on her collar.",
                "line": 509
            },
            {
                "text": "\"...L-look, I'm sorry,\" Eliza squeaks.",
                "line": 510
            },
            {
                "text": "\"I'm not interested in your apologies. What I want is for you to distribute that mana to the others.\"",
                "line": 511
            },
            {
                "text": "\"Of course, of course.\"",
                "line": 512
            },
            {
                "text": "If looks could kill, the hatred burning in Eliza's eyes would have done just that.",
                "line": 513
            },
            {
                "text": "\"Look, Princess Alexia, this is an emergency,\" Suzuki says. \"You can deal with Miss Eliza in a court of law once this is all over. And me, too, if the need arises.\"",
                "line": 514
            },
            {
                "text": "\"Are you sure about this?\" Alexia replies. \"Once it comes out that you threatened a major aristocrat, things could get ugly for you.\"",
                "line": 515
            },
            {
                "text": "\"I'm prepared for that.\"",
                "line": 516
            },
            {
                "text": "\"I see...\" Alexia turns to Christina. \"And what does the Hope family have to say?\"",
                "line": 517
            },
            {
                "text": "\"I'm all right as long as you agree to testify on our behalf, Princess Alexia.\" Christina's tone is flat. \"We have the moral high ground here, so I can't imagine things turning out all that badly for us.\"",
                "line": 518
            },
            {
                "text": "Suzuki gives her a small bow. \"I appreciate it.\"",
                "line": 519
            },
            {
                "text": "Christina averts her gaze. \"It's nothing. I'm not made of stone, you know.\"",
                "line": 520
            },
            {
                "text": "With that settled, they start transferring the mana. Eliza ends up with 400, and the other 1,500 goes to the mana-starved students.",
                "line": 521
            },
            {
                "text": "\"I hope I don't have to spell this out, but you're banned from stealing their mana back,\" Alexia tells Eliza.",
                "line": 522
            },
            {
                "text": "\"Let's just get to the auditorium already,\" Eliza replies. \"Wouldn't want to get attacked by any spirits, now, would we?\"",
                "line": 523
            },
            {
                "text": "After the transfers are finished, the party splits in two. Eliza and the students head for the auditorium, and the original group goes back to tracing the magic.",
                "line": 524
            },
            {
                "text": "As they part ways, Eliza shoots Suzuki a glare. \"You'll pay for this, you know.\"",
                "line": 525
            },
            {
                "text": "However, when he passes her, he pays her no more interest than he would a stone by the side of the road.",
                "line": 526
            },
            {
                "text": "With his back facing her, he lets out a profound-sounding whisper:",
                "line": 527
            },
            {
                "text": "\"None of this happened. It's just an illusion, conjured up by the white fog...\"",
                "line": 528
            },
            {
                "text": "The six of them follow the magic all the way out of the school building. The spirits' attacks have died down, and what few skirmishes they end up in are short and sporadic.",
                "line": 529
            },
            {
                "text": "Alexia sidles up to Christina. \"Just who exactly is he?\" she asks under her breath.",
                "line": 530
            },
            {
                "text": "Christina turns her gaze to Suzuki, who's at the very tail end of their procession. \"He's from a distant branch of the Hope family. He's not supposed to have any talents worth mentioning, but...\"",
                "line": 531
            },
            {
                "text": "\"Well, he's a force to be reckoned with. It takes a lot of nerve to go head-on with a major aristocrat like that, and that sort of courage doesn't come easy.\"",
                "line": 532
            },
            {
                "text": "\"I'd never seen those moves he pulled in the fight before, either. He must have been hiding his true strength.\"",
                "line": 533
            },
            {
                "text": "\"But why would he do that?\"",
                "line": 534
            },
            {
                "text": "\"I don't know. But after this, I'm going to have him transferred to the main house.\"",
                "line": 535
            },
            {
                "text": "\"That's probably a good idea...\"",
                "line": 536
            },
            {
                "text": "Leaving him to his own devices would be a waste. Moreover, it would be dangerous.",
                "line": 537
            },
            {
                "text": "\"I'd be careful around him, if I were you. He knows too much. It's almost like he's a whole different person,\" says Isaac, who's just come up alongside them.",
                "line": 538
            },
            {
                "text": "\"What do you mean?\" Alexia asks.",
                "line": 539
            },
            {
                "text": "\"The thing with the collars. He said he did some testing, but we barely spent any time in that classroom. There's no way he could have run all the tests he says he did. He's the one who noticed the mana flowing out of them, too. Maybe, just maybe, he knew everything from the very start. If you look at it that way, it all starts to make sense.\" Isaac narrows his eyes. \"The reason he's been so calm this whole time, and the reason his whole personality changed when the white fog showed up...is because he's a mole.\"",
                "line": 540
            },
            {
                "text": "\"Do you have any proof?\"",
                "line": 541
            },
            {
                "text": "\"Nothing definitive yet. But I'll get some, just you wait. Make sure you stay vigilant, Princess Alexia.\" With that, he strides off.",
                "line": 542
            },
            {
                "text": "Sure enough, there's a logic to Isaac's theory. If Suzuki is working with the Cult, then the sudden transformation he's undergone since the fog appeared makes perfect sense.",
                "line": 543
            },
            {
                "text": "Assuming that's true, they're playing right into his hands.",
                "line": 544
            },
            {
                "text": "\"...What a shallow man,\" Christina mumbles. She's looking at Isaac as he walks on ahead of them.",
                "line": 545
            },
            {
                "text": "\"Shallow?\" Alexia repeats.",
                "line": 546
            },
            {
                "text": "Christina shakes her head. \"It's nothing.\"",
                "line": 547
            },
            {
                "text": "\"Looks like the magic is going into here,\" Claire says as she comes to a stop in front of a small aged church on a far corner of the academy.",
                "line": 548
            },
            {
                "text": "\"I never knew there was a church over here,\" Alexia remarks.",
                "line": 549
            },
            {
                "text": "The answer comes from Nina. \"There isn't.\"",
                "line": 550
            },
            {
                "text": "\"What do you mean?\"",
                "line": 551
            },
            {
                "text": "\"Exactly what I said. There isn't a church here. Or at least, there wasn't, not until the white fog showed up,\" Nina replies as she opens the door and heads on in.",
                "line": 552
            },
            {
                "text": "The inside of the church is so quiet and still, it's like humankind has forgotten it. The chairs are piled high with dust.",
                "line": 553
            },
            {
                "text": "Alexia puts up her guard as the group heads for something that looks like a pedestal in the back.",
                "line": 554
            },
            {
                "text": "\"Under here,\" Claire says.",
                "line": 555
            },
            {
                "text": "There's a faint breeze coming from underneath it.",
                "line": 556
            },
            {
                "text": "\"Hnph!\"",
                "line": 557
            },
            {
                "text": "Without a moment's hesitation, she fires off a swift kick at the pedestal. However, all she accomplishes is causing a dull sound to echo out.",
                "line": 558
            },
            {
                "text": "\"Owww! What the heck?!\"",
                "line": 559
            },
            {
                "text": "\"It's got a magical barrier...,\" Nina explains as she pokes it. \"Looks like it's an artifact. You need a key to move it.\"",
                "line": 560
            },
            {
                "text": "\"A key? What key? Where is it?\"",
                "line": 561
            },
            {
                "text": "\"Beats me. I hope it's somewhere close, but who knows?\"",
                "line": 562
            },
            {
                "text": "\"Let's try looking for it.\"",
                "line": 563
            },
            {
                "text": "The group spends the next little while searching the area. However, there isn't a single clue to be found.",
                "line": 564
            },
            {
                "text": "\"No dice,\" Alexia says. \"I'm coming up empty here.\"",
                "line": 565
            },
            {
                "text": "\"Me too,\" Isaac replies, audibly annoyed. \"Are you sure we're on the right track?\"",
                "line": 566
            },
            {
                "text": "\"We don't have time. We need to hurry...\"",
                "line": 567
            },
            {
                "text": "Alexia's remaining mana is down to 500. Even considering the fighting they've been doing on their way there, it's still draining faster than she expected. The students back at the auditorium can't have much left, either.",
                "line": 568
            },
            {
                "text": "\"Looks like it'd be hard to decipher the artifact,\" Nina says. \"I'm no good at this kinda stuff.\"",
                "line": 569
            },
            {
                "text": "Christina and Suzuki don't find anything, either. \"There's nothing over here.\"",
                "line": 570
            },
            {
                "text": "A heavy silence descends on the group. All they can do is stare powerlessly at the pedestal. They're at a deadlock.",
                "line": 571
            },
            {
                "text": "Then there's a small thud. When they look, they discover that Claire's just struck the pedestal with her hand.",
                "line": 572
            },
            {
                "text": "\"It's no use, Claire,\" Alexia says, trying to stop her.",
                "line": 573
            },
            {
                "text": "However, Claire strikes it again. This time, the noise is even duller than before.",
                "line": 574
            },
            {
                "text": "\"Please...lend me power. I have something I need to do. I can't let things end, not here...\"",
                "line": 575
            },
            {
                "text": "Then she unravels the bandages on her right hand. Isaac and Christina gasp when they see the ominous circle etched on her skin. \"What is that...?\"",
                "line": 576
            },
            {
                "text": "Claire stares at her hand as she talks. \"Please, Aurora, I need your strength. I know you've been keeping quiet this whole time, but I'm sure there's something you can do to help here.\"",
                "line": 577
            },
            {
                "text": "\"What's she doing?\" Isaac asks.",
                "line": 578
            },
            {
                "text": "\"Looks like she's talking to someone,\" Christina replies.",
                "line": 579
            },
            {
                "text": "Alexia shushes them. \"Shhh, be quiet.\"",
                "line": 580
            },
            {
                "text": "\"Please... Please, Aurora. Answer me... Answer my voice!!\"",
                "line": 581
            },
            {
                "text": "Then Claire's magic circle begins glowing. Under its red light, ancient script etches its way across the pedestal.",
                "line": 582
            },
            {
                "text": "\"Wh-what is this?!\" Isaac cries in shock. \"What is this power?!\"",
                "line": 583
            },
            {
                "text": "\"Open, open, opeeeeeeeeeeeeeeeeeeeeeen!\"",
                "line": 584
            },
            {
                "text": "The red magic engulfs the pedestal, then bursts outward.",
                "line": 585
            },
            {
                "text": "When it fades, the pedestal is gone without a trace. Beneath where it once stood, there's a staircase leading underground.",
                "line": 586
            },
            {
                "text": "\"Wow...,\" Christina murmurs. The magic Claire just wielded was so powerful, it was like nothing she'd ever seen.",
                "line": 587
            },
            {
                "text": "\"You answered me, Aurora. Rgh... My hand is throbbing... So this is the toll the power demands...\" Claire clutches her hand in pain. Her breathing is labored.",
                "line": 588
            },
            {
                "text": "Alexia gives her a shoulder to lean on. \"Are you okay?\"",
                "line": 589
            },
            {
                "text": "\"I'm fine. Come on, we need to go. We don't have time.\" Claire pushes herself to catch her breath and to put up a tough front. \"Let's do this\u2014let's save everyone.\"",
                "line": 590
            },
            {
                "text": "With her at their lead, the group descends the staircase.",
                "line": 591
            },
            {
                "text": "It's a long, long set of stairs.",
                "line": 592
            },
            {
                "text": "Thanks to the darkness and the fog, they can barely see anything ahead of or behind them. They say nothing as they go down. The only sound is that of their footsteps.",
                "line": 593
            },
            {
                "text": "By the time they finally reach the bottom of the staircase, Alexia's mana reserves have dropped from 500 to 450.",
                "line": 594
            },
            {
                "text": "\"That's a big door.\"",
                "line": 595
            },
            {
                "text": "Sure enough, there's a massive door down in the underground dimness. It's heavy, so they push it open as a group and head on through.",
                "line": 596
            },
            {
                "text": "Beyond it, there's a wide room lined with broken cells. The cells are empty.",
                "line": 597
            },
            {
                "text": "\"Is this...a dungeon?\"",
                "line": 598
            },
            {
                "text": "The group advances with caution. Then, after proceeding for a bit, they hear something heavy moving behind them.",
                "line": 599
            },
            {
                "text": "\"What was that...?\" Claire wonders aloud.",
                "line": 600
            },
            {
                "text": "There in the darkness, they can't see what it is that just happened. Alexia turns around, feeling as though she's forgotten something terribly important.",
                "line": 601
            },
            {
                "text": "\"Under a church... A long staircase leading to a hidden room... A door, closing behind him...\"",
                "line": 602
            },
            {
                "text": "She thinks back to the librarian's story. It bears a worrying resemblance to the situation they're in at that very moment.",
                "line": 603
            },
            {
                "text": "\"Gah! Go back\u2014it's a trap!!\"",
                "line": 604
            },
            {
                "text": "Alexia dashes back the way they came. However, the door slams shut with a heavy, resounding thud, and as it does, gas begins bursting out of tiny holes in the ceiling. A cloyingly sweet smell begins permeating the area.",
                "line": 605
            },
            {
                "text": "\"Hold your breath!\"",
                "line": 606
            },
            {
                "text": "However, it's too late. One of the six collapses unconscious, then another. Eventually, only Alexia is left.",
                "line": 607
            },
            {
                "text": "\"We can't go out... Not like this...\"",
                "line": 608
            },
            {
                "text": "As everything goes hazy, she sees a young man wearing a gas mask.",
                "line": 609
            },
            {
                "text": "\"Good heavens,\" he says. \"I never imagined you would worm yourself all the way down here, Princess Alexia.\"",
                "line": 610
            },
            {
                "text": "\"It can't be. You were\u2014\"",
                "line": 611
            },
            {
                "text": "\"That's right. I was the mole.\"",
                "line": 612
            },
            {
                "text": "Beneath his gas mask, Isaac lets out a low chuckle. Alexia tries to reach for her sword, but she loses consciousness before she can grab it.",
                "line": 613
            }
        ],
        "c7": [
            {
                "text": "\"Urgh...,\" Christina groans as she wakes from her long slumber.",
                "line": 1
            },
            {
                "text": "Her body feels heavy, and she can't quite get a grip on reality. The last thing she remembers is heading down into that dungeon.",
                "line": 2
            },
            {
                "text": "\"Where am I...?\"",
                "line": 3
            },
            {
                "text": "Her arms and legs are fastened to the wall.",
                "line": 4
            },
            {
                "text": "She tries to break free, but she can't muster any strength. Her magic is sealed.",
                "line": 5
            },
            {
                "text": "\"Ah, you're up. I suppose I shouldn't be surprised.\"",
                "line": 6
            },
            {
                "text": "Christina looks over to where the voice came from and sees Isaac. \"Why...why am I all bound up?\"",
                "line": 7
            },
            {
                "text": "\"Because I bound you.\"",
                "line": 8
            },
            {
                "text": "\"Ah.\"",
                "line": 9
            },
            {
                "text": "\"You don't seem surprised.\"",
                "line": 10
            },
            {
                "text": "\"I always knew you were a shallow man. People who are hiding something usually are.\"",
                "line": 11
            },
            {
                "text": "\"I'll be sure to make a note of that.\"",
                "line": 12
            },
            {
                "text": "\"Where are the others?\"",
                "line": 13
            },
            {
                "text": "\"Claire and the princess are with my master.\"",
                "line": 14
            },
            {
                "text": "\"Your master?\"",
                "line": 15
            },
            {
                "text": "\"That's right. My master.\" All he does is parrot the same phrase back at Christina. Apparently, he doesn't intend to give her any more details than that. Then he points at the far wall. \"And Suzuki is sleeping over there.\"",
                "line": 16
            },
            {
                "text": "On the other side of the room, Suzuki is bound the same way Christina is.",
                "line": 17
            },
            {
                "text": "Christina breathes a sigh of relief. \"Suzuki...\"",
                "line": 18
            },
            {
                "text": "\"Unfortunately, he might never wake up again.\"",
                "line": 19
            },
            {
                "text": "\"Wh-what do you mean?\"",
                "line": 20
            },
            {
                "text": "\"The gas I used to put you all to sleep is especially potent on people with little magic. It's not uncommon for them to fall into a slumber from which they never wake.\"",
                "line": 21
            },
            {
                "text": "\"Suzuki...\"",
                "line": 22
            },
            {
                "text": "\"Whatever's come over you? He's just a low-class aristocrat from a petty branch family. It's not like you to mourn for some nobody.\"",
                "line": 23
            },
            {
                "text": "\"I mean, you're not wrong...\"",
                "line": 24
            },
            {
                "text": "Once Isaac points it out, Christina realizes just how shaken up she is.",
                "line": 25
            },
            {
                "text": "Just as Isaac says, Suzuki is just a low-class aristocrat from a petty branch family. For a duke's daughter like Christina, he should have been utterly replaceable.",
                "line": 26
            },
            {
                "text": "\"I thought his talents would prove useful to the Hope family. That's all there is to it,\" she says.",
                "line": 27
            },
            {
                "text": "\"Ah, I see. Well, to be honest, I couldn't care less whether he lives or dies.\"",
                "line": 28
            },
            {
                "text": "Christina glares at Isaac. \"You're saying that his life means nothing to you?!\"",
                "line": 29
            },
            {
                "text": "\"Not a thing. All I care about is finishing my job.\"",
                "line": 30
            },
            {
                "text": "\"What are you plotting?\"",
                "line": 31
            },
            {
                "text": "\"Your body has a lot of potential. My organization intends to use it to its fullest.\"",
                "line": 32
            },
            {
                "text": "\"And what organization is that? Are you talking about the Shadow Garden?\"",
                "line": 33
            },
            {
                "text": "\"The Shadow Garden? Please. Don't lump us together with those greenhorns. We've been ruling this world for countless\u2014 But I'm forgetting myself. Telling you this won't accomplish anything. After all, it won't be long before you become a soulless puppet.\"",
                "line": 34
            },
            {
                "text": "Isaac pulls out a syringe filled with red liquid.",
                "line": 35
            },
            {
                "text": "\"Now, let's get this over with. If I waste too much time, I'm liable to miss the arm's momentous unsealing. With talent like yours, I imagine you'll become a Second Child. Though poor Suzuki wouldn't even make it as a Third.\"",
                "line": 36
            },
            {
                "text": "With a sneer, Isaac presses the syringe up to Christina's arm.",
                "line": 37
            },
            {
                "text": "\"Don't...! Here's a question: Where did Nina get off to?!\"",
                "line": 38
            },
            {
                "text": "Isaac grimaces. \"She vanished.\"",
                "line": 39
            },
            {
                "text": "\"She what?\"",
                "line": 40
            },
            {
                "text": "\"That gas should have put all of you to sleep, but before I knew it, she was nowhere to be seen. It's not like she could have made it out of the Sanctuary alive, but ugh. It just means more cleanup for me.\"",
                "line": 41
            },
            {
                "text": "Isaac presses more force into the syringe.",
                "line": 42
            },
            {
                "text": "\"No!\"",
                "line": 43
            },
            {
                "text": "\"Good-bye, Christina.\"",
                "line": 44
            },
            {
                "text": "Then something moves in the corner of Isaac's vision.",
                "line": 45
            },
            {
                "text": "\"Why are you making so much noise? I was having such a nice nap...\"",
                "line": 46
            },
            {
                "text": "The voice belongs to Suzuki, who by all rights should be fast asleep.",
                "line": 47
            },
            {
                "text": "\"S-Suzuki...,\" Christina stammers.",
                "line": 48
            },
            {
                "text": "\"Wha\u2014?! You woke up?!\"",
                "line": 49
            },
            {
                "text": "Suzuki lets out a listless yawn. \"Yeah, obviously. Is that really so weird?\"",
                "line": 50
            },
            {
                "text": "\"W-well, no matter. You waking up won't change anything. You're an eyesore, so I'll get rid of you first.\"",
                "line": 51
            },
            {
                "text": "Isaac takes the syringe and heads over to the spot where Suzuki lies tied up.",
                "line": 52
            },
            {
                "text": "\"Get rid of me?\"",
                "line": 53
            },
            {
                "text": "\"Hmph. Maybe once you're a puppet, you'll finally shut up,\" Isaac says, then stabs the syringe at Suzuki's neck.",
                "line": 54
            },
            {
                "text": "\"You're gonna get rid of me?\" Suzuki's lips curl into a smirk. \"Yeah, that's not happening.\"",
                "line": 55
            },
            {
                "text": "The next moment, Isaac's body jolts. The syringe of red liquid tumbles from his hand and rolls across the ground.",
                "line": 56
            },
            {
                "text": "\"What...?! Rgh... Gurk...\"",
                "line": 57
            },
            {
                "text": "Suzuki plants his right hand directly in Isaac's gut.",
                "line": 58
            },
            {
                "text": "That there is a palm strike\u2014and a brutal one, launched straight at Isaac's abdomen.",
                "line": 59
            },
            {
                "text": "Isaac clutches at his chest and reels backward. Bloody froth dribbles from his lips. \"That's impossible... How did you get out of those restraints...? Your magic was supposed to be sealed!\"",
                "line": 60
            },
            {
                "text": "\"It was easy. I just dislocated my joints,\" Suzuki replies as he undoes the restraint on his left hand.",
                "line": 61
            },
            {
                "text": "After folding his joint in a way no human should be able to do, he slips free from the manacle and returns his hand to normal so quickly, it's like watching a video in reverse. Next, he neutralizes the restraints on his ankles in much the same way.",
                "line": 62
            },
            {
                "text": "\"That's not normal...\"",
                "line": 63
            },
            {
                "text": "\"So, what now? Weren't you going to get rid of me?\"",
                "line": 64
            },
            {
                "text": "\"Tch... Don't go getting cocky, loser.\" Isaac's eyes flash with rage. \"You have no right to look down on me!\" He draws his sword.",
                "line": 65
            },
            {
                "text": "Suzuki reaches for the weapon at his waist as well, then tilts his head. \"Where's my sword...?\"",
                "line": 66
            },
            {
                "text": "It turns out his sheath is empty.",
                "line": 67
            },
            {
                "text": "\"Bad news for you,\" Isaac tells him. \"I got rid of your sword.\"",
                "line": 68
            },
            {
                "text": "\"Ah.\" Suzuki reaches into his pocket and pulls out a fountain pen. He uncaps it and levels its tip at Isaac. \"Well...this is all I need.\"",
                "line": 69
            },
            {
                "text": "\"A-a fountain pen? Don't make me laugh!!\"",
                "line": 70
            },
            {
                "text": "Isaac's magic surges.",
                "line": 71
            },
            {
                "text": "After bearing down on Suzuki in the blink of an eye, he gives his sword a big horizontal swing. The arc it's tracing will take it right through Suzuki's midsection and slice him in half.",
                "line": 72
            },
            {
                "text": "Or it would, if a little pen hadn't gotten in the way.",
                "line": 73
            },
            {
                "text": "Suzuki blocks the sword with the tip of his pen, and with a sound like glass shattering, Isaac's sword explodes into tiny pieces.",
                "line": 74
            },
            {
                "text": "Without missing a beat, Suzuki thrusts his pen forward.",
                "line": 75
            },
            {
                "text": "\"Wh\u2014hlurk!\"",
                "line": 76
            },
            {
                "text": "Its pointy tip pierces Isaac's flesh.",
                "line": 77
            },
            {
                "text": "Isaac takes one agonizingly slow step back, then another. With a look of utter disbelief in his eyes, he reaches up and touches the fountain pen embedded in his throat.",
                "line": 78
            },
            {
                "text": "\"Koff... With...a puny fountain pen...?\"",
                "line": 79
            },
            {
                "text": "Drip.",
                "line": 80
            },
            {
                "text": "A drop of red ink trickles down the pen.",
                "line": 81
            },
            {
                "text": "\"I'm gonna need that back, by the way. I can't do my diary entries without it.\"",
                "line": 82
            },
            {
                "text": "Suzuki grabs the pen sticking out of Isaac's throat.",
                "line": 83
            },
            {
                "text": "\"Wait... Don't... No, NOOOOOOOOOO!\"",
                "line": 84
            },
            {
                "text": "When Suzuki wrenches it out, it's accompanied by a gushing burst of blood.",
                "line": 85
            },
            {
                "text": "The bloody ink sprays across the floor.",
                "line": 86
            },
            {
                "text": "\"Ah... Agh...\"",
                "line": 87
            },
            {
                "text": "Isaac crumples to his knees in a daze.",
                "line": 88
            },
            {
                "text": "Then, when he looks up at Suzuki, his eyes go wide. Suzuki's collar has just entered his gaze, and the number on its display represents a truly unbelievable amount of mana.",
                "line": 89
            },
            {
                "text": "\"Where did you get...all that mana...? Hurgh...\"",
                "line": 90
            },
            {
                "text": "He coughs up a mouthful of blood and collapses.",
                "line": 91
            },
            {
                "text": "\"I can't...go out...like this... Hungh...nnng...\"",
                "line": 92
            },
            {
                "text": "Blood spills unceasingly from his neck, and it doesn't take long before his breathing grows shallow, then stops altogether.",
                "line": 93
            },
            {
                "text": "Suzuki gives his blood-soaked fountain pen an unimpressed glance. \"Ugh, it's all gross now. I guess I didn't need it that bad after all.\"",
                "line": 94
            },
            {
                "text": "He dumps it on top of Isaac's corpse.",
                "line": 95
            },
            {
                "text": "Then he turns and walks over to Christina.",
                "line": 96
            },
            {
                "text": "There's an ominous look in Suzuki's eyes, and Christina loses her composure when he looks down at her.",
                "line": 97
            },
            {
                "text": "\"I...um...,\" she stammers.",
                "line": 98
            },
            {
                "text": "Despite herself, her heart is pounding. Still unsure of what to say, she looks up at Suzuki without moving an inch.",
                "line": 99
            },
            {
                "text": "\"All that matters is that you're okay.\"",
                "line": 100
            },
            {
                "text": "Suzuki undoes her restraints.",
                "line": 101
            },
            {
                "text": "\"Th-thank you, Suzuki...,\" she says in a mortifyingly frail voice.",
                "line": 102
            },
            {
                "text": "\"I just did what anyone would. Now, let's get a move on. I'm worried about the others.\"",
                "line": 103
            },
            {
                "text": "\"Um, Suzuki, wait!\"",
                "line": 104
            },
            {
                "text": "Right when he's about to walk off, she stops him.",
                "line": 105
            },
            {
                "text": "\"I...I can see now that I misjudged you. I thought you were just a hopeless underachiever, but...that's clearly not true.\" She hangs her head in embarrassment. \"If you'd be willing, I'd be more than happy to bring you into the main house once this is all\u2014\"",
                "line": 106
            },
            {
                "text": "\"Your judgment was right on the money,\" Suzuki replies, his back still toward her. \"Suzuki was an underachiever.\"",
                "line": 107
            },
            {
                "text": "\"What? But...that doesn't...\"",
                "line": 108
            },
            {
                "text": "\"You weren't wrong. You weren't wrong about a thing.\"",
                "line": 109
            },
            {
                "text": "There's a cold rationality to Suzuki's voice that Christina has never heard before.",
                "line": 110
            },
            {
                "text": "\"Oh... I'm sorry. I must have said something that offended you.\"",
                "line": 111
            },
            {
                "text": "\"Not at all. It's just...you should stay away from me. The path that lies before me is stained with blood. I'm a man who can't live in a world warmed by the sun's light.\"",
                "line": 112
            },
            {
                "text": "Suzuki steadfastly refuses to turn around. The way he's talking with his back to her, it's like he's rejecting the entire world.",
                "line": 113
            },
            {
                "text": "\"Just what kind of burden are you carrying...?\"",
                "line": 114
            },
            {
                "text": "\"I have a duty. A duty I must carry out, even if it means shouldering all the sins of the world. Getting involved with me will get you hurt, and it'll stain your hands with blood.\"",
                "line": 115
            },
            {
                "text": "Then Suzuki finally turns.",
                "line": 116
            },
            {
                "text": "Upon seeing his eyes, Christina gasps. They're as inhuman as glass beads. All the emotion has been stripped from them.",
                "line": 117
            },
            {
                "text": "No, that's not it. Deep, deep within those glass beads, there's a black flame of emotion, smoldering.",
                "line": 118
            },
            {
                "text": "Suzuki quietly reaches for Christina's neck.",
                "line": 119
            },
            {
                "text": "After tilting up her slender jaw, he brings his face in close.",
                "line": 120
            },
            {
                "text": "Christina exhales his name. \"Suzuki...\"",
                "line": 121
            },
            {
                "text": "Lost in the depths of his eyes, she closes her own.",
                "line": 122
            },
            {
                "text": "Then a sharp crack rings out.",
                "line": 123
            },
            {
                "text": "\"Huh...?\"",
                "line": 124
            },
            {
                "text": "She opens her eyes and finds that her collar is gone.",
                "line": 125
            },
            {
                "text": "\"Wait, my collar... But how?\"",
                "line": 126
            },
            {
                "text": "Suzuki offers no answer to her question. She notices that his collar is gone, too.",
                "line": 127
            },
            {
                "text": "\"There's no time,\" Suzuki insists. \"We need to hurry.\"",
                "line": 128
            },
            {
                "text": "He turns and walks off. There's something very solitary about his retreating figure.",
                "line": 129
            },
            {
                "text": "\"S-Suzuki...wait up!\"",
                "line": 130
            },
            {
                "text": "Not wanting to get left behind, Christina rushes after him.",
                "line": 131
            },
            {
                "text": "\"You might want to wake up. The situation's a little dicey.\"",
                "line": 132
            },
            {
                "text": "Claire feels like she's hearing a voice in her head, and she opens her eyes. \"Where am I...?\"",
                "line": 133
            },
            {
                "text": "She's surrounded by white fog and tied to what appears to be a shady-looking examination table. Beside her, Alexia is tied up as well.",
                "line": 134
            },
            {
                "text": "\"Alexia, are you okay?! Wake up!\"",
                "line": 135
            },
            {
                "text": "\"Unh... What is this place?\"",
                "line": 136
            },
            {
                "text": "Alexia opens her eyes. The two of them look around, then gasp.",
                "line": 137
            },
            {
                "text": "\"What the...?\"",
                "line": 138
            },
            {
                "text": "\"What are those things?!\"",
                "line": 139
            },
            {
                "text": "The first things they see are four cylindrical capsules. There are human beings inside them, suspended in red liquid.",
                "line": 140
            },
            {
                "text": "\"Could those be the missing students?\"",
                "line": 141
            },
            {
                "text": "\"It's them, I'm sure of it. Those are the people from the missing persons reports.\"",
                "line": 142
            },
            {
                "text": "\"But what are they doing here?\"",
                "line": 143
            },
            {
                "text": "\"They're being drained of magic...in order to revive Diablos. We need to get out of here fast. We're about to find ourselves in the same boat.\"",
                "line": 144
            },
            {
                "text": "Alexia tries to undo her bindings, but they refuse to yield. Claire does the same, but is similarly unsuccessful.",
                "line": 145
            },
            {
                "text": "\"Looks like our magic is sealed,\" Claire remarks.",
                "line": 146
            },
            {
                "text": "\"Isaac, you bastard... I'll get you for this,\" Alexia says, her voice full of venom.",
                "line": 147
            },
            {
                "text": "Suddenly, the capsules begin moving. Two of them emit a dull mechanical sound as the liquid drains from them.",
                "line": 148
            },
            {
                "text": "\"Wh-what just happened?\"",
                "line": 149
            },
            {
                "text": "\"I don't know...\"",
                "line": 150
            },
            {
                "text": "Then they hear a voice from behind them. \"You're up? Perfect timing. The capsules just finished priming. We've only got ten percent left to go.\"",
                "line": 151
            },
            {
                "text": "With that, a silver-haired boy appears. He's so beautiful, it's like he just stepped straight out of a fairy tale, and for a moment, the two girls are struck speechless.",
                "line": 152
            },
            {
                "text": "\"Who are you...?\" Alexia eventually asks.",
                "line": 153
            },
            {
                "text": "\"I'm Fenrir, fifth member of the Rounds.\"",
                "line": 154
            },
            {
                "text": "\"Yo...you're Fenrir?!\"",
                "line": 155
            },
            {
                "text": "The boy who's just introduced himself as Fenrir looks young enough to be Alexia's and Claire's age, if not younger.",
                "line": 156
            },
            {
                "text": "\"With the power of eternal life, the age one appears is of little import,\" Fenrir says as he stands before the two capsules now empty of their red liquid.",
                "line": 157
            },
            {
                "text": "\"What are you planning on doing to us?\"",
                "line": 158
            },
            {
                "text": "\"Put you in these capsules. That way, I can revive Diablos's right arm. I was planning on draining your magic via the collars, but if you're going to serve yourselves up on silver platters, I'm certainly not complaining.\" Fenrir lets out a cold laugh. \"You've saved me quite a bit of effort.\"",
                "line": 159
            },
            {
                "text": "\"The academy's in an uproar right now,\" Claire shoots back at him. \"Do you really think you'll get away with this?\"",
                "line": 160
            },
            {
                "text": "\"And who's going to punish us, exactly? The Knight Order? You people?\"",
                "line": 161
            },
            {
                "text": "\"Th-that's, uh\u2014\"",
                "line": 162
            },
            {
                "text": "\"We live in the world's underbelly. Those who walk in the light can never reach us.\"",
                "line": 163
            },
            {
                "text": "\"There's still the Shadow Garden...,\" Alexia says quietly.",
                "line": 164
            },
            {
                "text": "Fenrir stops in his tracks. \"Oh, the Shadow Garden's going to punish us?\" He gives a little chuckle. \"Heh-heh.\"",
                "line": 165
            },
            {
                "text": "\"What's so funny?\"",
                "line": 166
            },
            {
                "text": "\"I never thought I'd see the princess of a nation go clinging to the skirts of a group that shady. I feel sorry for you.\"",
                "line": 167
            },
            {
                "text": "\".........\"",
                "line": 168
            },
            {
                "text": "Alexia's face goes bright red. Everyone can hear her clench her jaw.",
                "line": 169
            },
            {
                "text": "\"And besides, is the Shadow Garden going to punish us? You people have no idea what kind of group they truly are.\" As he talks, Fenrir drags the fleshy masses that used to be students out of the capsules and discards them. \"They live in the underworld just as much as we do. They're in no position to judge us. Even if one group does end up vanquishing the other, it'll just leave the victor to resume control of the underworld. Nothing will actually change.\"",
                "line": 170
            },
            {
                "text": "He turns around. His eyes are bright red.",
                "line": 171
            },
            {
                "text": "\"Now, the preparations are all sorted. The time for resurrection is upon us.\"",
                "line": 172
            },
            {
                "text": "The first person he turns to is Claire.",
                "line": 173
            },
            {
                "text": "\"Claire Kagenou. I've gotten reports about you using a strange power.\"",
                "line": 174
            },
            {
                "text": "He walks over to the side of the examination table and tilts up her chin.",
                "line": 175
            },
            {
                "text": "\"Rgh... Get your hands off me!\"",
                "line": 176
            },
            {
                "text": "\"The blood runs thick in you, but not abnormally so. Well, I suppose all will become clear in time.\"",
                "line": 177
            },
            {
                "text": "With that, he holds a syringe of red liquid up to Claire's neck.",
                "line": 178
            },
            {
                "text": "She tries to shake her head to fight him off, but Fenrir is too strong. \"It's no use,\" he says.",
                "line": 179
            },
            {
                "text": "The syringe pierces her skin.",
                "line": 180
            },
            {
                "text": "Then...",
                "line": 181
            },
            {
                "text": "\"I swear, just how long does he plan on keeping me waiting?\"",
                "line": 182
            },
            {
                "text": "Aurora's voice echoes through Claire's head, and rich mana surges up within Claire.",
                "line": 183
            },
            {
                "text": "The syringe shatters, and the restraints burst open.",
                "line": 184
            },
            {
                "text": "Fenrir backs off. \"Wh-what is that magic?!\"",
                "line": 185
            },
            {
                "text": "\"Here. I'll let you borrow a little of my strength.\"",
                "line": 186
            },
            {
                "text": "\"Thank you, Aurora.\"",
                "line": 187
            },
            {
                "text": "Claire draws her swords and slices through Alexia's restraints.",
                "line": 188
            },
            {
                "text": "\"Good going, Claire,\" Alexia says as she brandishes her sword.",
                "line": 189
            },
            {
                "text": "Fenrir fixes his gaze straight on Claire. \"Aurora? Did you just say \u2018Aurora,' Claire Kagenou?\"",
                "line": 190
            },
            {
                "text": "\"Yeah, so what? You know her or something?\"",
                "line": 191
            },
            {
                "text": "\"Heh-heh... I see. Guess I'll have to see if she's the real thing. Bloodfang...heed my call!\"",
                "line": 192
            },
            {
                "text": "Fenrir draws a sword out of thin air. It's longer than he is tall, and its blade is as red as stagnant blood.",
                "line": 193
            },
            {
                "text": "\"Bloodfang...,\" Alexia murmurs. The sword has such a powerful presence, it sends a shiver down her spine. \"That's the magic sword that was once used by the man hailed as the greatest knight ever. Is that truly the real Bloodfang?\"",
                "line": 194
            },
            {
                "text": "\"Be careful, Claire.\"",
                "line": 195
            },
            {
                "text": "\"You don't have to tell me twice. Are you not going to fight, Aurora?\"",
                "line": 196
            },
            {
                "text": "\"You don't have much mana left, right? When I use your body, it puts a heavy strain on you. Besides, it might not be a bad idea to get you used to handling the power yourself.\"",
                "line": 197
            },
            {
                "text": "\"...Fair enough.\"",
                "line": 198
            },
            {
                "text": "Claire marshals the magic in her body. Little by little, she's getting used to the sensation of the two distinct types of mana commingling within her.",
                "line": 199
            },
            {
                "text": "Then, in the space of a breath, she closes in on Fenrir.",
                "line": 200
            },
            {
                "text": "However, he parries her blow with ease.",
                "line": 201
            },
            {
                "text": "\"Is that really all you've\u2014? What?\"",
                "line": 202
            },
            {
                "text": "There are red tendrils wrapping around Bloodfang. They're extending from Claire's right hand, and they wind around Bloodfang on her command.",
                "line": 203
            },
            {
                "text": "\"With this power, I can\u2014!\"",
                "line": 204
            },
            {
                "text": "\"Oh, please.\"",
                "line": 205
            },
            {
                "text": "Fenrir gives Bloodfang a swing. That motion alone is enough to shred through the tendrils.",
                "line": 206
            },
            {
                "text": "Claire moves on to her next maneuver.",
                "line": 207
            },
            {
                "text": "When Fenrir swings Bloodfang at her, she dodges by stepping in too close for him to effectively hit her, then swings an attack of her own at his flank.",
                "line": 208
            },
            {
                "text": "A dull clang rings out. Fenrir just blocked Claire's attack with Bloodfang's hilt.",
                "line": 209
            },
            {
                "text": "\"W-with the handle?!\"",
                "line": 210
            },
            {
                "text": "\"It's no wonder you were able to win a Bushin Festival...but at the end of the day, your swordplay is still that of a child's.\"",
                "line": 211
            },
            {
                "text": "Fenrir spins Bloodfang to swat Claire's sword away, then spins its pommel directly into her jaw.",
                "line": 212
            },
            {
                "text": "\"Hurgh!\"",
                "line": 213
            },
            {
                "text": "The blow itself is light. By immediately leaping backward, Claire is able to blunt its impact. However, it still leaves her with a cut on the inside of her mouth that dyes her lips red. Her stance crumples, and Fenrir moves in to follow up on the blow.",
                "line": 214
            },
            {
                "text": "Then, out of nowhere, he freezes.",
                "line": 215
            },
            {
                "text": "It's unclear why, but there's a sword lodged in his left shoulder.",
                "line": 216
            },
            {
                "text": "\"Dang, you're good. If you hadn't stopped there, I would've nailed you right in the heart.\"",
                "line": 217
            },
            {
                "text": "It's Alexia.",
                "line": 218
            },
            {
                "text": "\"I knew you were looking for an opening,\" Fenrir replies, \"but when did you get there...?\"",
                "line": 219
            },
            {
                "text": "He lowers Bloodfang and backs away a step. There's blood gushing from his shoulder, but he doesn't seem bothered by that in the slightest.",
                "line": 220
            },
            {
                "text": "\"Hrah!\"",
                "line": 221
            },
            {
                "text": "With a sharp exhale, Fenrir lashes out with his blade. The blow is cutting, and it packs a tremendous amount of force.",
                "line": 222
            },
            {
                "text": "Alexia braces herself to parry the blow. Her movement isn't fast by any definition of the word, and there's barely any mana imbued in her sword.",
                "line": 223
            },
            {
                "text": "There's no way she'll be able to block the incoming attack.",
                "line": 224
            },
            {
                "text": "Bloodfang is poised to pulverize Alexia's sword to bits. The moment before it can, though, Alexia pulls half a step back. By changing her sword's angle, she's able to redirect the force from Fenrir's attack.",
                "line": 225
            },
            {
                "text": "\"Impressive,\" he comments.",
                "line": 226
            },
            {
                "text": "From there, she shifts directly into her counter.",
                "line": 227
            },
            {
                "text": "Using the smallest movements necessary and as little mana as possible, she thrusts straight at Fenrir's vitals.",
                "line": 228
            },
            {
                "text": "Fenrir's position is unsalvageable. He's already committed to his swing, and by all accounts, there's nothing he can do but wait for Alexia to run him through.",
                "line": 229
            },
            {
                "text": "However, he smashes his foreleg into the ground.",
                "line": 230
            },
            {
                "text": "The ground splinters from the incredible force of his stomp, and he rights his posture in a way no normal person could have ever pulled off.",
                "line": 231
            },
            {
                "text": "Alexia's thrust slices through the air, leaving merely a thin slash across Fenrir's cheek.",
                "line": 232
            },
            {
                "text": "Fenrir takes the opportunity to put a good bit of distance between them.",
                "line": 233
            },
            {
                "text": "\"So...this is the swordplay of the mediocre,\" he says. \"The fighting style they mock you for when they compare you to Princess Iris...\"",
                "line": 234
            },
            {
                "text": "\"Hey, us mediocre dark knights are nothing to sneeze at.\"",
                "line": 235
            },
            {
                "text": "\"I would love to see what you could amount to in a hundred years. Swordsmanship is built on one's accumulated experience. But that's precisely why the gulf between you and me is so vast...\"",
                "line": 236
            },
            {
                "text": "Fenrir closes his eyes.",
                "line": 237
            },
            {
                "text": "\"Perhaps I'd best get serious for a moment here...\"",
                "line": 238
            },
            {
                "text": "The air itself shifts.",
                "line": 239
            },
            {
                "text": "Unfathomable amounts of magic begin welling up within Fenrir. As it does, his hair goes white, his face grows deep wrinkles, and his limbs grow slender and withered.",
                "line": 240
            },
            {
                "text": "Finally, he opens his eyes back up.",
                "line": 241
            },
            {
                "text": "The cherubic boy has been replaced by an old man.",
                "line": 242
            },
            {
                "text": "\"So that's your true form, huh?\" says Alexia.",
                "line": 243
            },
            {
                "text": "He looks like a feeble dotard, the kind who would blow away in the faintest breeze.",
                "line": 244
            },
            {
                "text": "However, Alexia and Claire know better than to underestimate him. Despite his feeble appearance, the raw pressure he's exuding has just gone up considerably.",
                "line": 245
            },
            {
                "text": "Cold sweat trickles down their brows.",
                "line": 246
            },
            {
                "text": "\"I remember now... The Devil of Midgar.\"",
                "line": 247
            },
            {
                "text": "Claire picks up on Aurora's quiet murmur. \"The Devil of Midgar?\"",
                "line": 248
            },
            {
                "text": "\"Long ago, there was an assassin feared across all Midgar. He killed unceasingly in an avaricious quest to further his own strength. But he should have died of old age years ago...\"",
                "line": 249
            },
            {
                "text": "\"I had no idea anyone still remembered that name. You're Aurora?\" Fenrir asks, his voice now noticeably hoarser. \"It would seem your Calamity Witch is the genuine article... Planning on using that girl as your vessel, are we?\"",
                "line": 250
            },
            {
                "text": "\"Aurora, what's he talking about?\"",
                "line": 251
            },
            {
                "text": "\"Focus. He specializes in getting people distracted like that.\"",
                "line": 252
            },
            {
                "text": "\"But\u2014\"",
                "line": 253
            },
            {
                "text": "\"Claire!!\"",
                "line": 254
            },
            {
                "text": "\"Huh?\"",
                "line": 255
            },
            {
                "text": "Fenrir's Bloodfang extends, stretching out long like a whip as it lashes at Claire's neck.",
                "line": 256
            },
            {
                "text": "Claire stares dumbfounded at her onrushing death.",
                "line": 257
            },
            {
                "text": "A moment later, however, her pupils go violet. Over a hundred tendrils shoot out, swatting Bloodfang away before bearing down on Fenrir.",
                "line": 258
            },
            {
                "text": "\"Heh-heh... That's it\u2014that's the power I'm looking for.\"",
                "line": 259
            },
            {
                "text": "Fenrir sways like a willow to dodge the ceaseless onslaught of red tendrils. They graze him time and time again, shredding his clothes to tatters but never managing to leave a scratch on his body. Then, out of nowhere, the bloody tendrils all burst and vanish.",
                "line": 260
            },
            {
                "text": "\"Gah... My mana...\"",
                "line": 261
            },
            {
                "text": "Claire drops to one knee, her eyes still violet and her breathing ragged. She's down to just 36 mana left.",
                "line": 262
            },
            {
                "text": "\"You've grown weak, Aurora. Or have I just grown strong?\"",
                "line": 263
            },
            {
                "text": "\"...It's this body that's weak, that's all.\"",
                "line": 264
            },
            {
                "text": "Bloodfang comes cleaving toward Claire.",
                "line": 265
            },
            {
                "text": "\"Rrgh...\"",
                "line": 266
            },
            {
                "text": "She manages to avoid taking a fatal wound, but what she doesn't manage is to catch her fall. She goes tumbling across the ground.",
                "line": 267
            },
            {
                "text": "Her eyes fade from violet back to red.",
                "line": 268
            },
            {
                "text": "\"How dare you do that to Claire!!\"",
                "line": 269
            },
            {
                "text": "Alexia launches into an attack.",
                "line": 270
            },
            {
                "text": "Her movements are sharp and efficient. However, Fenrir is so much more than that.",
                "line": 271
            },
            {
                "text": "All Alexia sees is a red afterimage before her sword shatters to pieces.",
                "line": 272
            },
            {
                "text": "\"No, no...\"",
                "line": 273
            },
            {
                "text": "\"Swordsmanship is built on one's accumulated experience. It took me over a millennium to reach the pinnacle, and you haven't even begun your journey.\"",
                "line": 274
            },
            {
                "text": "Fenrir raises his sword overhead.",
                "line": 275
            },
            {
                "text": "\"My...sword...\"",
                "line": 276
            },
            {
                "text": "Seeing the broken shards of her sword brings back all those humiliating memories. She trained so, so hard so she never has to feel like that again\u2014but no matter how much she practiced, that pinnacle of swordsmanship remained forever out of her grasp.",
                "line": 277
            },
            {
                "text": "Tears well up in her eyes.",
                "line": 278
            },
            {
                "text": "\"It's over.\"",
                "line": 279
            },
            {
                "text": "Fenrir swings Bloodfang down.",
                "line": 280
            },
            {
                "text": "Then a sharp whizzing noise cuts through the air. Fenrir stops midswing and quickly backs away.",
                "line": 281
            },
            {
                "text": "With a shunk, a fountain pen buries itself in the ground.",
                "line": 282
            },
            {
                "text": "\"Who are you?\" Fenrir barks.",
                "line": 283
            },
            {
                "text": "\"It's you...,\" Alexia manages.",
                "line": 284
            },
            {
                "text": "There stands Suzuki, looking just as shady and forgettable as ever.",
                "line": 285
            },
            {
                "text": "\"Are you okay?\" he asks her as he slowly strides over and plucks his pen back out of the ground.",
                "line": 286
            },
            {
                "text": "\"Princess Alexia, over here!\" Christina says as she urges Alexia to safety.",
                "line": 287
            },
            {
                "text": "\"B-but I can still fight\u2014\"",
                "line": 288
            },
            {
                "text": "\"Not with that amount of mana, you can't.\"",
                "line": 289
            },
            {
                "text": "At some point, Alexia's readout has dropped below 100. She bites her lip and looks over at Suzuki. \"Fenrir is too strong. He won't stand a chance on his own.\"",
                "line": 290
            },
            {
                "text": "\"I don't think Suzuki is going to go down easy.\"",
                "line": 291
            },
            {
                "text": "There's a serene look in Christina's eyes as Suzuki faces off one-on-one against Fenrir.",
                "line": 292
            },
            {
                "text": "Fenrir stares Suzuki down. \"I'll ask you again. Who are you?\"",
                "line": 293
            },
            {
                "text": "\"I'm Suzuki, a first-year from the Midgar Academy for Dark Knights,\" Suzuki replies, spinning his pen around in his palm.",
                "line": 294
            },
            {
                "text": "\"Just a student, huh?\"",
                "line": 295
            },
            {
                "text": "Out of nowhere, Fenrir swings Bloodfang. Its red blade extends like a whip and shaves a few hairs off Suzuki's bangs.",
                "line": 296
            },
            {
                "text": "\"You sure know a lot about spacing for a student.\"",
                "line": 297
            },
            {
                "text": "\"Spacing? What's that?\" Suzuki replies nonchalantly, then takes a step forward.",
                "line": 298
            },
            {
                "text": "That puts him squarely in Fenrir's range. Fenrir narrows his eyes.",
                "line": 299
            },
            {
                "text": "Thoom. Suzuki's footsteps echo with unnatural volume.",
                "line": 300
            },
            {
                "text": "Another footstep thunders out.",
                "line": 301
            },
            {
                "text": "A moment later, Bloodfang's onslaught begins.",
                "line": 302
            },
            {
                "text": "With blistering speed, red afterimages rain down on Suzuki from every direction. Each stroke is elegant, and they culminate into a sort of dance that transfixes all who behold it.",
                "line": 303
            },
            {
                "text": "At the center of it all, Suzuki stands with his pens at the ready. He holds four in each hand, clutched between his fingers like claws. Their golden tips flash.",
                "line": 304
            },
            {
                "text": "Then the red sword dances, and the golden glints collide.",
                "line": 305
            },
            {
                "text": "Clang, clang, clang, they go, ringing out ad infinitum as the battle rages on. There in the fog, the red afterimages and golden glints are dancing as one.",
                "line": 306
            },
            {
                "text": "\"That's incredible...!\" Alexia gasps.",
                "line": 307
            },
            {
                "text": "Fenrir has mastered the art of swordplay\u2014no question of that. And the fact that Suzuki can keep up with him with nothing more than fountain pens means that she can't even begin to fathom his strength, either.",
                "line": 308
            },
            {
                "text": "Those two could hold their own against the Midgar Kingdom Imperial Guard or the Velgalta Empire's Seven Blades. They might even be stronger...",
                "line": 309
            },
            {
                "text": "\"They're too strong...,\" Christina whispers.",
                "line": 310
            },
            {
                "text": "She's right. Suzuki is far more powerful than a student has any right to be.",
                "line": 311
            },
            {
                "text": "\"Just who is he?\" Alexia asks. It's a fair question.",
                "line": 312
            },
            {
                "text": "\"I don't know. But I can tell that he's carrying a huge burden. He told me that he has a duty...one that he has to carry out, no matter what.\"",
                "line": 313
            },
            {
                "text": "Alexia clenches her fists. \"A duty... And the power to carry it out...\"",
                "line": 314
            },
            {
                "text": "While she's doing that, Christina goes over and helps Claire to her feet. \"Are you okay?\"",
                "line": 315
            },
            {
                "text": "\"I-I'm not sure how, but yeah. And now Suzuki's fighting,\" she replies, her voice strained.",
                "line": 316
            },
            {
                "text": "\"In a fight like that, we'd just be in the way. All we can do is watch him.\"",
                "line": 317
            },
            {
                "text": "\"I know...\" Claire squeezes down tight on the magic circle on her right hand.",
                "line": 318
            },
            {
                "text": "Meanwhile, Fenrir and Suzuki's duel in the fog rages on.",
                "line": 319
            },
            {
                "text": "Little by little, the tides of battle begin to shift. The red afterimages are starting to push the golden glints back, gradually forcing the flashing fountain pen tips back into the fog.",
                "line": 320
            },
            {
                "text": "The reason lies in the two combatants' ranges. Not only is Fenrir's Bloodfang far longer than the average sword, but Suzuki's fountain pens are much shorter. As a result, Fenrir is able to attack without fear of reprisal, whereas Suzuki has to spend the whole time on the defensive.",
                "line": 321
            },
            {
                "text": "Fenrir's voice echoes out amid their furious clash. \"The fight's decided. As a devotee of martial perfection, you should know that you'll never be able to close that gap.\"",
                "line": 322
            },
            {
                "text": "\"I wouldn't be so sure about that.\"",
                "line": 323
            },
            {
                "text": "Suzuki plants his feet firmly, then leaps into the air. Once he does, he takes his fountain pens and hurls them straight at Fenrir.",
                "line": 324
            },
            {
                "text": "The eight pens become streaks of light as they zoom toward their target.",
                "line": 325
            },
            {
                "text": "\"Your efforts are futile,\" Fenrir spits. He falls back and uses Bloodfang to swat away the pens.",
                "line": 326
            },
            {
                "text": "A couple of them manage to nick him, but that's the extent of the damage. Now that Suzuki's thrown away his weapons, he's helpless to fight back.",
                "line": 327
            },
            {
                "text": "Or so one would think.",
                "line": 328
            },
            {
                "text": "\"What?\"",
                "line": 329
            },
            {
                "text": "Up in the air, Suzuki brandishes another eight fountain pens.",
                "line": 330
            },
            {
                "text": "\"Special Move: Golden Downpour.\"",
                "line": 331
            },
            {
                "text": "Suzuki begins firing off one wave of pens after another. There are so many little streaks of light that they look like raindrops, and they all pour down directly on Fenrir.",
                "line": 332
            },
            {
                "text": "\"You think you're real clever, don't you?\"",
                "line": 333
            },
            {
                "text": "However, Fenrir's talents are no less impressive. He dodges the pens with flowing movements, only using Bloodfang to parry the ones he knows he can't evade.",
                "line": 334
            },
            {
                "text": "The golden rain falls to the floor without landing a single hit on Fenrir.",
                "line": 335
            },
            {
                "text": "Finally, the rain stops entirely. An unthinkably large number of pens lie embedded in the ground.",
                "line": 336
            },
            {
                "text": "Standing in the middle of it all is Fenrir. He's not moving\u2014or rather, he can't move.",
                "line": 337
            },
            {
                "text": "\"That's checkmate.\"",
                "line": 338
            },
            {
                "text": "Suzuki is standing right behind him.",
                "line": 339
            },
            {
                "text": "\"The fountain pens were a decoy?\" Fenrir asks.",
                "line": 340
            },
            {
                "text": "\"They do say that the pen's mightier than the sword.\"",
                "line": 341
            },
            {
                "text": "Suzuki is holding a single pen to Fenrir's throat.",
                "line": 342
            },
            {
                "text": "\"You've got me there. I guess I screwed around a bit too much. It's been so long since I had someone to play with, I just couldn't help myself. Call it an old man's bad habit if you\u2014\"",
                "line": 343
            },
            {
                "text": "\"You go ahead and tell yourself that.\"",
                "line": 344
            },
            {
                "text": "Uninterested in hearing Fenrir's speech through to its end, Suzuki stabs the pen into him. It pierces Fenrir's throat clean through and sends blood gushing everywhere.",
                "line": 345
            },
            {
                "text": "\"Glagh... You youngsters are so impatient. Don't you to know to listen when your elders are talking?\"",
                "line": 346
            },
            {
                "text": "Fenrir's eyes go wide, then flash red.",
                "line": 347
            },
            {
                "text": "A massive surge of magic bursts out, sending Suzuki flying. Fenrir's neck wound knits itself back up like it was never there.",
                "line": 348
            },
            {
                "text": "\"Playtime is over. Let's start by dealing with the forgettable one...\"",
                "line": 349
            },
            {
                "text": "Fenrir turns to look at Alexia and the others. There, he finds his first target\u2014Christina.",
                "line": 350
            },
            {
                "text": "\"Ah...\"",
                "line": 351
            },
            {
                "text": "A shiver runs down her spine when faced with those scarlet eyes. The sheer weight of his glare is like nothing she's ever felt before, and it feels like it's going to crush her.",
                "line": 352
            },
            {
                "text": "\"Good-bye, little lady.\"",
                "line": 353
            },
            {
                "text": "A red slash comes carving down on her. That there is her death, and there's nothing she can do but stare blankly at it.",
                "line": 354
            },
            {
                "text": "The moment before Bloodfang cleaves her in twain, however, another figure cuts in, hugging her tight and taking the blow in her place.",
                "line": 355
            },
            {
                "text": "Blood goes flying.",
                "line": 356
            },
            {
                "text": "\"Suzuki... You\u2014!\"",
                "line": 357
            },
            {
                "text": "That figure is Suzuki.",
                "line": 358
            },
            {
                "text": "\"All that matters is that you're okay... Hurk!\"",
                "line": 359
            },
            {
                "text": "He coughs up a tremendous amount of blood.",
                "line": 360
            },
            {
                "text": "\"Suzuki! Suzuki, are you all right?! Why did you do that?\"",
                "line": 361
            },
            {
                "text": "\"I have something I need to apologize to you for...\"",
                "line": 362
            },
            {
                "text": "Every word he says leaves his mouth redder.",
                "line": 363
            },
            {
                "text": "\"You don't have to apologize for anything. Right now, you need to focus on\u2014\"",
                "line": 364
            },
            {
                "text": "\"No, it has to be now. Because the thing is...\"",
                "line": 365
            },
            {
                "text": "\"Huh?\"",
                "line": 366
            },
            {
                "text": "\"...I am not Suzuki.\"",
                "line": 367
            },
            {
                "text": "Suzuki's voice changes, growing so deep, it seems to rumble up from the depths of the abyss, and his pupils turn red.",
                "line": 368
            },
            {
                "text": "\"He died. Now behold my true form...\"",
                "line": 369
            },
            {
                "text": "The array of pens embedded in the ground all melt. After transforming into black slime, they envelop Suzuki's body.",
                "line": 370
            },
            {
                "text": "\"S-Suzuki...\"",
                "line": 371
            },
            {
                "text": "Christina and the others shrink back at the bizarre sight.",
                "line": 372
            },
            {
                "text": "The black slime engulfing Suzuki undulates unnaturally as it peels back to reveal him.",
                "line": 373
            },
            {
                "text": "\"My name is Shadow. I lurk in the darkness and hunt down shadows.\"",
                "line": 374
            },
            {
                "text": "Dressed in a jet-black longcoat and a low-hanging hood, the man draws his ebony blade.",
                "line": 375
            },
            {
                "text": "\"Shadow?!\" Alexia cries in shock.",
                "line": 376
            },
            {
                "text": "\"Shadow...\"",
                "line": 377
            },
            {
                "text": "Christina is surprised as well, but when she looks up at Shadow, she can feel her heartbeat quicken.",
                "line": 378
            },
            {
                "text": "\"Ah, Shadow. I was expecting you might show your face.\" Fenrir looks completely unshaken. Magic swells within him as he squares off against Shadow. \"So you disguised yourself as a student in hopes of catching me off guard, did you? You're a dastardly one, I'll give you that.\"",
                "line": 379
            },
            {
                "text": "\"Am I? I just wanted to put on a little show.\"",
                "line": 380
            },
            {
                "text": "\"Your lies ring hollow. No one would go to the lengths you did for a mere lark. If you think I'm senile enough to misread your intentions, then think again.\"",
                "line": 381
            },
            {
                "text": "\"...Oh?\"",
                "line": 382
            },
            {
                "text": "\"People lie when they have something to hide. But behind every lie lurks the truth.\"",
                "line": 383
            },
            {
                "text": "\"You're not wrong.\"",
                "line": 384
            },
            {
                "text": "\"You went out of your way to disguise yourself as a student, to look for an opening, and to avoid fighting me head-on. What I see there is caution. You lied about doing it for fun to hide just how scared of me you are.\"",
                "line": 385
            },
            {
                "text": "\"Heh... Don't make me laugh, old man.\"",
                "line": 386
            },
            {
                "text": "\"And if that's the case, then it really is a shame. I've been wondering just how strong you are. An eternity of striving has led me to the pinnacle of martial prowess, and I must admit...I was looking forward to seeing if you could exceed my expectations.\"",
                "line": 387
            },
            {
                "text": "Fenrir holds Bloodfang at the ready.",
                "line": 388
            },
            {
                "text": "Shadow nimbly raises his obsidian sword. \"Care to try me, then?\"",
                "line": 389
            },
            {
                "text": "\"That was always the plan.\" Fenrir brings his center of gravity down low, drawing Bloodfang all the way back and assuming a combat stance. \"Don't disappoint me, Shadow.\"",
                "line": 390
            },
            {
                "text": "The white fog swirls, and Fenrir vanishes.",
                "line": 391
            },
            {
                "text": "\"Ancient Hidden Sword Technique: Locust Shell.\"",
                "line": 392
            },
            {
                "text": "Then he appears behind Shadow.",
                "line": 393
            },
            {
                "text": "He's already followed through on his attack and has shifted to preparing himself for the inevitable counter.",
                "line": 394
            },
            {
                "text": "\"So you evaded my blow,\" he remarks with amusement.",
                "line": 395
            },
            {
                "text": "There's a single slash running through Shadow's longcoat\u2014the aftermath of Fenrir's slash.",
                "line": 396
            },
            {
                "text": "\"I've faced quick swordplay more times than I can count,\" Shadow says. He repairs his longcoat as he turns toward his foe. \"But your swordplay...your swordplay is slow.\"",
                "line": 397
            },
            {
                "text": "\"You noticed after just one exchange, did you?\" Fog swirls around Fenrir once more. \"How fascinating.\"",
                "line": 398
            },
            {
                "text": "Shadow quietly fixes his gaze on the flow of mana.",
                "line": 399
            },
            {
                "text": "Once again, Fenrir reappears after a moment, and once again, he cleaves a slice out of Shadow's longcoat. This cut is deeper than the first.",
                "line": 400
            },
            {
                "text": "Fenrir assumes a defensive position behind Shadow's back. \"Again, you dodged it.\"",
                "line": 401
            },
            {
                "text": "Shadow runs his hand over the gash in his coat to mend it. \"You really are slow.\"",
                "line": 402
            },
            {
                "text": "\"Were you about to see through my Locust Shell?\"",
                "line": 403
            },
            {
                "text": "\"No. And I watched until the very last moment, too.\"",
                "line": 404
            },
            {
                "text": "\"Then how were you able to protect yourself?\"",
                "line": 405
            },
            {
                "text": "\"Simple. I pulled away the moment your sword hit me.\"",
                "line": 406
            },
            {
                "text": "\"Ah, the soft style. I've heard of this\u2014this stance where one renders attacks against themselves powerless, much the way a willow tree does.\"",
                "line": 407
            },
            {
                "text": "\"I can't say I ever learned it.\"",
                "line": 408
            },
            {
                "text": "\"What are you, then, a natural?\"",
                "line": 409
            },
            {
                "text": "\"Oh, nothing so pretentious as that.\"",
                "line": 410
            },
            {
                "text": "\"Then how?\"",
                "line": 411
            },
            {
                "text": "\"Practice.\"",
                "line": 412
            },
            {
                "text": "\"Ah... And therein lies the truth of the blade.\" Fenrir stoops down low again and readies Bloodfang. \"Then it's time this old wolf taught you a lesson.\"",
                "line": 413
            },
            {
                "text": "The fog swirls.",
                "line": 414
            },
            {
                "text": "\"...I see.\"",
                "line": 415
            },
            {
                "text": "Shadow swings his sword at a spot with no one in it.",
                "line": 416
            },
            {
                "text": "\"Excellent work.\"",
                "line": 417
            },
            {
                "text": "Then Fenrir vanishes.",
                "line": 418
            },
            {
                "text": "A moment later, he reappears behind Shadow. Blood trickles from Fenrir's shoulder.",
                "line": 419
            },
            {
                "text": "He clutches at the fresh wound. \"So you can see me.\"",
                "line": 420
            },
            {
                "text": "\"Nope. I just followed the flow of magic.\"",
                "line": 421
            },
            {
                "text": "\"Ah... Have you figured it out, then?\"",
                "line": 422
            },
            {
                "text": "\"Locust Shell is a magically formed afterimage. Then you pair that with a slow slash where you mute your presence to the absolute utmost.\"",
                "line": 423
            },
            {
                "text": "\"Right you are. By the time you see the Shell, I've already swung my sword. I'm impressed you were able to see through it. It would appear your talent is genuine.\"",
                "line": 424
            },
            {
                "text": "Fenrir turns around and reassumes his stance.",
                "line": 425
            },
            {
                "text": "\"We're still going, then?\" Shadow asks.",
                "line": 426
            },
            {
                "text": "\"But of course. I've been waiting so, so long for this day. No pleasure compares to that of putting one's practice to the test. Man cannot sword fight alone.\" He extends Bloodfang. \"Now bear witness, Shadow, to Locust Shell's perfected form.\"",
                "line": 427
            },
            {
                "text": "Fenrir swings his sword.",
                "line": 428
            },
            {
                "text": "However, Shadow dodges well before then.",
                "line": 429
            },
            {
                "text": "The white fog parts, and a deep gash runs across the ground. Then, a beat later, Bloodfang races across it, supple as a whip. Cause and effect seem to be reversed, and Fenrir's talent causes the whole process to accelerate even more.",
                "line": 430
            },
            {
                "text": "That's when Bloodfang multiplies.",
                "line": 431
            },
            {
                "text": "First one, then two, then three... Each time Fenrir swings his blade, another appears, until finally there are nine Bloodfangs in all.",
                "line": 432
            },
            {
                "text": "Fenrir laughs as he brandishes all nine. \"This is the pinnacle of swordplay\u2014Bloodfang Locust Shell.\"",
                "line": 433
            },
            {
                "text": "The swords bear down on Shadow from every direction at once.",
                "line": 434
            },
            {
                "text": "\"Intriguing...\" Shadow exhales. \"So every sword I see is an afterimage.\"",
                "line": 435
            },
            {
                "text": "Then he closes his eyes like he's given up.",
                "line": 436
            },
            {
                "text": "A moment later, the nine furious slashes send him flying every whichway. He gets tossed to the right, then the left, then up, then down...and at the end of it all, he gets brutally cast aside like a mutilated rag doll.",
                "line": 437
            },
            {
                "text": "\"Shadow!\"",
                "line": 438
            },
            {
                "text": "\"Shadow, no!\"",
                "line": 439
            },
            {
                "text": "Alexia and Christina scream. It's a testament to just how savage the beating was.",
                "line": 440
            },
            {
                "text": "Fenrir lords over Shadow as the latter falls limp to the ground. One of Shadow's fingers twitches.",
                "line": 441
            },
            {
                "text": "\"...Had enough yet?\"",
                "line": 442
            },
            {
                "text": "The question comes from Shadow.",
                "line": 443
            },
            {
                "text": "\"So I couldn't land even a single hit on you?\" Fenrir replies.",
                "line": 444
            },
            {
                "text": "Their exchange makes no sense. It's like they have the vanquished and the vanquisher reversed.",
                "line": 445
            },
            {
                "text": "Fenrir brings Bloodfang down on Shadow's prone form. It slices him in half with ease, leaving a heavy scar on the ground. However, no blood spills from Shadow's body.",
                "line": 446
            },
            {
                "text": "To the contrary, it fades away entirely.",
                "line": 447
            },
            {
                "text": "Fenrir heaves a defeated sigh. \"An afterimage...\"",
                "line": 448
            },
            {
                "text": "A voice comes from the fog. \"I appreciate you letting me see your technique.\"",
                "line": 449
            },
            {
                "text": "Thmp, thmp, thmp. Nine sets of footsteps ring out as nine Shadows stride forth.",
                "line": 450
            },
            {
                "text": "Fenrir gasps. \"After just a single exchange...\"",
                "line": 451
            },
            {
                "text": "Nine black swords extend outward, dragons dancing in the fog.",
                "line": 452
            },
            {
                "text": "\"Excellent work.\" There are notes of delight in Fenrir's voice.",
                "line": 453
            },
            {
                "text": "\"Hidden Technique: Atomic Locust Shell.\"",
                "line": 454
            },
            {
                "text": "With that, the nine dragons devour Fenrir.",
                "line": 455
            },
            {
                "text": "The first tears through his right arm, the second his left.",
                "line": 456
            },
            {
                "text": "The third crunches through his right leg, the fourth his left.",
                "line": 457
            },
            {
                "text": "The fifth and sixth rip his torso apart, the seventh impales his chest, and the eighth tears through his neck.",
                "line": 458
            },
            {
                "text": "Finally, the ninth takes his head in its mouth.",
                "line": 459
            },
            {
                "text": "\"Still alive, are we?\" Shadow asks.",
                "line": 460
            },
            {
                "text": "\"Hurk... At last...I got to witness the pinnacle of swordplay...,\" Fenrir replies, his voice hoarse. \"Thank you...for the demonstration...\"",
                "line": 461
            },
            {
                "text": "Shadow seems unimpressed. \"The pinnacle doesn't exist.\"",
                "line": 462
            },
            {
                "text": "\"What are you talking about? You've clearly reached\u2014\"",
                "line": 463
            },
            {
                "text": "\"Above the pinnacle lies yet another pinnacle. That's all that is there.\"",
                "line": 464
            },
            {
                "text": "\"What...?\"",
                "line": 465
            },
            {
                "text": "\"Thinking they've reached the pinnacle is when people stop climbing.\"",
                "line": 466
            },
            {
                "text": "\"I see... So that's why I lost...\"",
                "line": 467
            },
            {
                "text": "A look of regret flits across Fenrir's face.",
                "line": 468
            },
            {
                "text": "\"...I have yet to glimpse the pinnacle.\"",
                "line": 469
            },
            {
                "text": "The ninth dragon snaps its jaw shut.",
                "line": 470
            },
            {
                "text": "Fenrir's head shatters. Shadow's longcoat flows out behind him as he strides deeper into the fog.",
                "line": 471
            },
            {
                "text": "\"Sh...Shadow, wait!!\" Alexia shouts.",
                "line": 472
            },
            {
                "text": "Shadow stops.",
                "line": 473
            },
            {
                "text": "\"Please, you have to tell me! Who are you? What are you fighting for?!\"",
                "line": 474
            },
            {
                "text": "Alexia waits for his answer.",
                "line": 475
            },
            {
                "text": "However, he keeps his back to her and says nothing.",
                "line": 476
            },
            {
                "text": "\"I want to protect my country! I want to keep sad things from happening to the people I care about! That's why I fight! But what about you?! How am I supposed to know if I can trust you?!\"",
                "line": 477
            },
            {
                "text": "\"I told you...you'd be best served avoiding me.\"",
                "line": 478
            },
            {
                "text": "\"Don't give me that! Not now!! We're fighting for our lives out here! That might not seem like much to someone as powerful as you. You might think we're beneath you. But what you need to understand...is that weaklings like us work just as hard to live as you do!!\"",
                "line": 479
            },
            {
                "text": "Shadow slowly turns around. He fixes his bloodred eyes straight on Alexia.",
                "line": 480
            },
            {
                "text": "\"We remove those who stand in the way of our goal. Nothing more,\" he tells her, his voice low and booming like it's echoing up from the very depths of the abyss.",
                "line": 481
            },
            {
                "text": "\"What goal...? Just what do you intend on doing with this world?!\"",
                "line": 482
            },
            {
                "text": "Alexia's question is the first thing that earns a proper reaction out of Shadow. His mouth curls into the smallest of smiles.",
                "line": 483
            },
            {
                "text": "Then he swings his jet-black blade. His target is a strange device sitting in the fog.",
                "line": 484
            },
            {
                "text": "A metallic noise rings out as the device splits in two.",
                "line": 485
            },
            {
                "text": "\"My collar...\"",
                "line": 486
            },
            {
                "text": "Alexia and Claire look down and discover that their collars are broken.",
                "line": 487
            },
            {
                "text": "\"Shadow!\"",
                "line": 488
            },
            {
                "text": "When they look back up, Shadow is gone. Try as they might, they can't spot any traces of him.",
                "line": 489
            },
            {
                "text": "Alexia clenches her fists. \"If only I was stronger...\"",
                "line": 490
            },
            {
                "text": "\"Claire...are you all right?\" Christina asks as she helps Claire stay on her feet.",
                "line": 491
            },
            {
                "text": "\"I-I'm okay...,\" Claire replies, clutching at her chest. She might very well need surgery.",
                "line": 492
            },
            {
                "text": "\"Princess Alexia, the sooner we get out of here the better,\" says Christina. \"Do you have any idea where the exit is?\"",
                "line": 493
            },
            {
                "text": "Suddenly, they hear footsteps in the fog.",
                "line": 494
            },
            {
                "text": "\"Heya there! I finally found you!\"",
                "line": 495
            },
            {
                "text": "A short girl appears from within\u2014Nina.",
                "line": 496
            },
            {
                "text": "Despite the pain she's in, Claire's whole face lights up. \"Nina... Oh, thank goodness. Where were you?\"",
                "line": 497
            },
            {
                "text": "\"Hey, yeah, sorry 'bout that. I just barely managed to get away from Isaac, but then I got totally lost. I did find a way out, though.\"",
                "line": 498
            },
            {
                "text": "Nina laughs in embarrassment and points to the exit.",
                "line": 499
            },
            {
                "text": "\"You're a lifesaver,\" Alexia says. \"Let's get a move on.\"",
                "line": 500
            },
            {
                "text": "The moment she turns her back on Nina, Nina swiftly makes her move.",
                "line": 501
            },
            {
                "text": "Alexia is the first to fall. Then Claire and Christina collapse in unison.",
                "line": 502
            },
            {
                "text": "The knife hand strikes are terrifyingly quick.",
                "line": 503
            },
            {
                "text": "\"Man, I always get stuck with the dirty work,\" Nina mutters as she looks down at the unconscious trio. She lets out a small sigh, then turns and calls over to the fog. \"The preparations are all finished...Zeta.\"",
                "line": 504
            },
            {
                "text": "A golden-haired therianthrope and a strawberry blond girl emerge.",
                "line": 505
            },
            {
                "text": "\"Excellent work. Are you sure you don't want to join the Shadow Garden?\" Victora asks Nina.",
                "line": 506
            },
            {
                "text": "\"I'm sure I could become a member of the Numbers with ease, but...,\" Nina replies haltingly, then looks over at Zeta to gauge her reaction.",
                "line": 507
            },
            {
                "text": "\"It's better to have Nina outside the Shadow Garden,\" Zeta says. \"Her ability to act solo is what lets us outwit them.\"",
                "line": 508
            },
            {
                "text": "\"Then I'll continue operating as I have been.\"",
                "line": 509
            },
            {
                "text": "\"Uh-huh. Keep on acting as Claire's friend...until the time comes.\"",
                "line": 510
            },
            {
                "text": "\"...Understood.\"",
                "line": 511
            },
            {
                "text": "Nina conjures a white robe out of slime and pulls its hood down low over her face. Then she hoists up Claire's unconscious body and carries her over to the door at the back of the Sanctuary. Zeta gives the order, and she secures Claire to a pedestal covered in ancient writing.",
                "line": 512
            },
            {
                "text": "When she channels mana into the pedestal, the sconces on either side of the door light up.",
                "line": 513
            },
            {
                "text": "\"Once we do this, there's no turning back,\" Nina reminds Zeta.",
                "line": 514
            },
            {
                "text": "\"Uh-huh.\"",
                "line": 515
            },
            {
                "text": "\"But Alpha's plan\u2014\"",
                "line": 516
            },
            {
                "text": "\"Alpha is too soft. If she had her way, evil would rise once more, and the world would repeat its mistakes. That's why we need to rule the world\u2014to make sure mistakes never happen again.\"",
                "line": 517
            },
            {
                "text": "Zeta gazes at the fire from the pedestal, like the myriad flickering flames are painting some sort of picture for her.",
                "line": 518
            },
            {
                "text": "\"With eternal life, Master Shadow will become a god,\" Victoria says, her eyes gleaming with rapture. \"This world doesn't need Holy Teachings. We're going to be preaching a new doctrine.\"",
                "line": 519
            },
            {
                "text": "\"...Are you're sure we're making the right decision?\" Nina asks.",
                "line": 520
            },
            {
                "text": "\"It's our duty.\"",
                "line": 521
            },
            {
                "text": "With that, Zeta funnels mana into the pedestal. Its ancient writing dances across it and links up to the chains sealing the door shut.",
                "line": 522
            },
            {
                "text": "The chains flash and loudly creak.",
                "line": 523
            },
            {
                "text": "\"Rrrgh! Gah!\"",
                "line": 524
            },
            {
                "text": "Claire's body shudders atop the pedestal. Her red eyes snap open, and her face contorts in agony as she screams.",
                "line": 525
            },
            {
                "text": "\"AHHHHHHHHHHH!!\"",
                "line": 526
            },
            {
                "text": "\"Claire!\" Nina rushes to her side. \"Zeta, just look at her!\"",
                "line": 527
            },
            {
                "text": "\"It's a rejection response. It'll pass.\"",
                "line": 528
            },
            {
                "text": "\"But\u2014\"",
                "line": 529
            },
            {
                "text": "\"If we want to control Diablos after we've revived it, we'll need her body.\"",
                "line": 530
            },
            {
                "text": "Slowly but surely, the chains begin snapping.",
                "line": 531
            },
            {
                "text": "More and more sinister magic circles begin welling up on Claire's hand.",
                "line": 532
            },
            {
                "text": "\"AHHHHHHHHHHHHHHHHHHHHHH!!\"",
                "line": 533
            },
            {
                "text": "As she screams, the chains shatter into dust, and the door at the deepest part of the Sanctuary swings open.",
                "line": 534
            },
            {
                "text": "There's nothing beyond it. Just darkness that goes on forever.",
                "line": 535
            },
            {
                "text": "The magic circles on Claire's hand burn bright.",
                "line": 536
            },
            {
                "text": "A bewitching smile spreads across Victoria's face. \"It worked.\"",
                "line": 537
            },
            {
                "text": "\"We've assembled the right and left arms.\" Zeta inspects Claire's new circles with keen interest. \"Stay close by and observe her, Nina.\"",
                "line": 538
            },
            {
                "text": "Nina wipes the sweat off Claire's unconscious brow. \"So you've really...you've really made your choice,\" she mumbles.",
                "line": 539
            },
            {
                "text": "\"Me and Alpha... Someday, we'll know which of us made the right call.\" Zeta turns her back on Nina and walks off. \"Until then, we lurk in the shadows...\"",
                "line": 540
            },
            {
                "text": "With that, she vanishes into the deep darkness.",
                "line": 541
            },
            {
                "text": "I'm standing in a white space.",
                "line": 542
            },
            {
                "text": "It's been a while since I had a decent fight or a decent chance to role-play, and I gotta say, that totally hit the spot. The terrorist geezer's swordplay was really something else. I guess it's true what they say about old people being wise.",
                "line": 543
            },
            {
                "text": "His technique was so cool, I even decided to steal it for myself, and as a result, I was able to wrap up the battle with the perfect finale. Figuring out your opponent's special move mid-fight, then turning it back against them... That right there is the stuff that dreams are made of.",
                "line": 544
            },
            {
                "text": "Plus, the Suzuki part was awesome, too.",
                "line": 545
            },
            {
                "text": "By disguising myself as him, I bet I was able to make Shadow's character seem even more profound. Being able to show up anywhere and casting a shadow wherever light exists is exactly what being an eminence in shadow is all about.",
                "line": 546
            },
            {
                "text": "While I was reminiscing fondly on everything that just happened, I ended up here before I knew it.",
                "line": 547
            },
            {
                "text": "I take in my surroundings.",
                "line": 548
            },
            {
                "text": "\"This looks familiar...\"",
                "line": 549
            },
            {
                "text": "I know this place. It's where I met kid Violet last time.",
                "line": 550
            },
            {
                "text": "\"Hey, we meet again.\"",
                "line": 551
            },
            {
                "text": "A small girl is clutching her knees smack-dab in the middle of the white space. She's battered and bruised from head to toe.",
                "line": 552
            },
            {
                "text": "\"...Are you okay?\" I ask, channeling mana into her to heal her wounds.",
                "line": 553
            },
            {
                "text": "\"Snff...\" She lifts her head. Her face is stained red from where she's been crying tears of blood. \"Thank you.\"",
                "line": 554
            },
            {
                "text": "\"Happy to help. What happened?\"",
                "line": 555
            },
            {
                "text": "\"Nothing. Just the usual.\"",
                "line": 556
            },
            {
                "text": "\"The usual, huh?\"",
                "line": 557
            },
            {
                "text": "\"Yeah.\" She looks up at me and smiles. \"I'm glad we could finally meet, mister.\"",
                "line": 558
            },
            {
                "text": "\"What do you mean, finally?\"",
                "line": 559
            },
            {
                "text": "\"Well, I'm stronger near the core.\"",
                "line": 560
            },
            {
                "text": "\"Huh. Oh yeah, I have something for you.\" I fish the red jewel out of my pocket. \"It's really important to you, right?\"",
                "line": 561
            },
            {
                "text": "\"...Are you sure?\"",
                "line": 562
            },
            {
                "text": "\"I'll trade it to you for a hundred million zeni. Don't worry, though\u2014you can wait to pay me back until after you've hit it big.\"",
                "line": 563
            },
            {
                "text": "\"Thank you.\" The girl takes the jewel. \"I've been waiting for this.\"",
                "line": 564
            },
            {
                "text": "\"Well, now you've got it. Can I ask what it is?\"",
                "line": 565
            },
            {
                "text": "\"Oh, sure...\" The girl smirks, the corners of her mouth curling upward into the shape of a crescent. \"This right here... This is...\"",
                "line": 566
            },
            {
                "text": "Her face contorts like a horrible monster's as sinister magic begins flowing out. The once-white space gets painted over with black.",
                "line": 567
            },
            {
                "text": "The girl's tiny lips whisper two words:",
                "line": 568
            },
            {
                "text": "\"...my malice.\"",
                "line": 569
            },
            {
                "text": "I can't hear her voice, but that's definitely what she's saying.",
                "line": 570
            },
            {
                "text": "Then a torrent of ugly emotions wells up.",
                "line": 571
            },
            {
                "text": "Men, women, children, and the elderly appear one after another to stare at the girl with contempt. A moment after each one appears, though, they get torn to pulpy shreds by some mysterious monster.",
                "line": 572
            },
            {
                "text": "I watch the process repeat for hundreds and hundreds and thousands and thousands of years, and before I know it, I'm back on the academy rooftop.",
                "line": 573
            },
            {
                "text": "It's the very first place I met the younger Violet.",
                "line": 574
            },
            {
                "text": "Off in the distance, I can see the sun setting.",
                "line": 575
            },
            {
                "text": "Things are normal here at the academy, just like they always are.",
                "line": 576
            },
            {
                "text": "I cock my head.",
                "line": 577
            },
            {
                "text": "\"Huh. In retrospect, maybe I wasn't supposed to give her that.\"",
                "line": 578
            },
            {
                "text": "The silver-haired girl casts her scarlet gaze out over the academy grounds.",
                "line": 579
            },
            {
                "text": "\"All the Knight Order was able to get from their investigation was some testimonies from the students. They didn't find a single piece of hard evidence...\"",
                "line": 580
            },
            {
                "text": "She leans against the windowsill of the empty classroom.",
                "line": 581
            },
            {
                "text": "In addition to the silver-haired girl, there's also an unremarkable dark-haired boy. \"I don't get what that has to do with you wanting to talk to me,\" he says.",
                "line": 582
            },
            {
                "text": "\"Because you're one of the involved parties.\"",
                "line": 583
            },
            {
                "text": "\"I already told you I was asleep in my dorm. I dunno anything about what happened.\"",
                "line": 584
            },
            {
                "text": "\"Claire hasn't woken up since then. The Knight Order wants to talk to you about her.\"",
                "line": 585
            },
            {
                "text": "\"Ohhh, the thing with my sister. Yeah, I have nothing to tell them. It's not like I know anything about that, either.\"",
                "line": 586
            },
            {
                "text": "\"I don't doubt it. You don't know anything. Not about what's happening to the world, or about how deep its darkness runs...\"",
                "line": 587
            },
            {
                "text": "A smile plays on the silver-haired girl's face.",
                "line": 588
            },
            {
                "text": "\"Yeah, so I dunno why they wanna talk to me.\"",
                "line": 589
            },
            {
                "text": "\"They aren't expecting anything to come from it. They're just checking off boxes.\"",
                "line": 590
            },
            {
                "text": "\"Eh, I guess that's fair,\" the dark-haired boy says, sounding a little irked.",
                "line": 591
            },
            {
                "text": "A cold wintry breeze blows through the window, sending the girl's beautiful hair aflutter.",
                "line": 592
            },
            {
                "text": "\"Can you shut that?\" the boy asks. \"It's freezing in here.\"",
                "line": 593
            },
            {
                "text": "\"You know, Fido,\" the girl starts, ignoring the boy's request, \"I really am jealous of how simple your life is.\"",
                "line": 594
            },
            {
                "text": "\"You make that sound like an insult.\"",
                "line": 595
            },
            {
                "text": "\"No, I mean it. I hope it can always stay that way.\"",
                "line": 596
            },
            {
                "text": "\"I don't follow,\" the boy replies. The girl smiles.",
                "line": 597
            },
            {
                "text": "Then the boy hears his name being called from outside the classroom.",
                "line": 598
            },
            {
                "text": "\"Anyways, I'll see you later. Those guys from Knight Order wanna chat with me.\"",
                "line": 599
            },
            {
                "text": "He reaches for the door.",
                "line": 600
            },
            {
                "text": "\"...Tell me, Fido,\" the girl calls after him. \"Have you ever wanted to live forever?\"",
                "line": 601
            },
            {
                "text": "The boy whips his head around so fast, it seems liable to fly off. \"More than anything.\"",
                "line": 602
            },
            {
                "text": "\"R-really?\"",
                "line": 603
            },
            {
                "text": "\"I'd let the whole world burn, if that's what it took.\"",
                "line": 604
            },
            {
                "text": "\"I can see that you were the wrong person to ask.\"",
                "line": 605
            },
            {
                "text": "\"If you find a way to pull it off, let me know,\" the dark-haired boy says, looking dead serious as he leaves the classroom.",
                "line": 606
            },
            {
                "text": "Now alone, the silver-haired girl lets out a sigh. \"Eternal life... Shadow's not some materialist like Fido. If Shadow's after eternal life, then what's going to become of the world?\"",
                "line": 607
            },
            {
                "text": "She looks up at the sky.",
                "line": 608
            },
            {
                "text": "The stagnant gray heavens seem to continue forever.",
                "line": 609
            }
        ],
        "c8": [
            {
                "text": "Alpha ordered me to keep a research journal to include in my reports.",
                "line": 1
            },
            {
                "text": "It's a hassle, but it's a small price to pay for a bump in my research budget.",
                "line": 2
            },
            {
                "text": "Now, what should I write?",
                "line": 3
            },
            {
                "text": "Yesterday, I spent twelve hours sleeping, eleven hours researching, and one hour on other stuff. I think.",
                "line": 4
            },
            {
                "text": "What else...? Uh, I guess I can write about the stuff Beta brought back from the other world.",
                "line": 5
            },
            {
                "text": "It's all broken. Chalk it up to electromagnetic interference.",
                "line": 6
            },
            {
                "text": "We don't have the technical know-how to fix it at the moment, but it should be possible eventually. I'd estimate it at...twenty years from now?",
                "line": 7
            },
            {
                "text": "That said, it'd be way faster to just build magitech knockoffs of all this stuff. It'd be cheaper too. Note to self: Look into this.",
                "line": 8
            },
            {
                "text": "What I'm more interested in are the materials they're made of. My analysis reveals that the metal is both light and sturdy, and we should be able to process it with our current tech.",
                "line": 9
            },
            {
                "text": "It would be interesting to try adding mithril to it.",
                "line": 10
            },
            {
                "text": "Currently, I'm in the middle of analyzing the petroleum- and resin-based materials.",
                "line": 11
            },
            {
                "text": "I believe this will lead to further technological breakthroughs.",
                "line": 12
            },
            {
                "text": "Then there's the bio-specimen Beta retrieved.",
                "line": 13
            },
            {
                "text": "Its physiological makeup is closer to that of a human than of an elf or therianthrope.",
                "line": 14
            },
            {
                "text": "It has magic circuits, but they're underdeveloped. It resembles a human, but it definitely isn't one. Fascinating stuff.",
                "line": 15
            },
            {
                "text": "I tried to dissect it, but Beta stopped me. What a shame. I wasn't even going to kill it.",
                "line": 16
            },
            {
                "text": "Sacrifices have to be made in order to advance Shadow Wisdom.",
                "line": 17
            },
            {
                "text": "The reason Master went to the other world was to bring back their wisdom, I'm certain of it. I can't let his efforts go to waste.",
                "line": 18
            },
            {
                "text": "He wants me to dissect the specimen. As such, I need permission to dissect it.",
                "line": 19
            },
            {
                "text": "When I analyzed the other world's knowledge, I realized just how right Master was.",
                "line": 20
            },
            {
                "text": "\"All knowledge is connected,\" he once said.",
                "line": 21
            },
            {
                "text": "As long as technology continues to progress, it'll always eventually end up at the same point.",
                "line": 22
            },
            {
                "text": "Our magitech is more advanced than the other world's, and their science is more advanced than ours, but there are countless connections between the two.",
                "line": 23
            },
            {
                "text": "Master realized that all on this own, and he imparted so much wisdom to us.",
                "line": 24
            },
            {
                "text": "Compared to his wisdom, the things I used to study back in the elf capital seem downright trivial.",
                "line": 25
            },
            {
                "text": "How exactly does Master's brain work? This is the greatest mystery of our time.",
                "line": 26
            },
            {
                "text": "I want to dissect him.",
                "line": 27
            },
            {
                "text": "But I can't. My drugs didn't work on him. I even put a wonder drug designed to kill dragons in his coffee, and all he said was, \"What a refined bitterness this has...\" He must have noticed me adding the wonder drug, too.",
                "line": 28
            },
            {
                "text": "And to think, all it takes is a few drops of my drug to make Beta weep openly and commence stripping.",
                "line": 29
            },
            {
                "text": "Attacking him in his sleep doesn't work. Catching him off guard doesn't work. Master has no openings. And attacking him head-on is the most futile option of all.",
                "line": 30
            },
            {
                "text": "Ah, what a shame. One of these days, though, I'll find a way...",
                "line": 31
            },
            {
                "text": "Huh, I just got word from a certain someone.",
                "line": 32
            },
            {
                "text": "Sounds like her plan went well. Honestly, I don't actually care which way things go. I just want to be able to conduct my research in peace.",
                "line": 33
            },
            {
                "text": "Looks like Master will be staying in Midgar for the next little while, so I won't be able to see him. Which sucks, because I want to chat with him about Shadow Wisdom.",
                "line": 34
            },
            {
                "text": "Maybe he's finally going to do something about the corrupt politicians and Knight Order there.",
                "line": 35
            },
            {
                "text": "The question is, what will he do? Will he give Midgar an opportunity to escape from the Cult's evil clutches, or is he going to destroy it all and rebuilt it from the ground up?",
                "line": 36
            },
            {
                "text": "Either one would be interesting, but I know he'll pick the kinder option.",
                "line": 37
            },
            {
                "text": "Personally, I think the whole thing's a hassle, so I would just raze the place.",
                "line": 38
            },
            {
                "text": "I'm starting to get bored of writing.",
                "line": 39
            },
            {
                "text": "Plus, I'm sure I've written enough that Alpha will give me a massive bump in research funds.",
                "line": 40
            },
            {
                "text": "Heh-heh-heh... Now it's nap time.",
                "line": 41
            }
        ]
    }
}
//let setDoc = db.collection('data').doc('an_s1_e20').set(data['s1']);

//let setDoc = db.collection('data').doc('ssc_p2_c2-5').set(data['p2']['c2-5']);

//let setDoc = db.collection('data').doc('es_ssitw').set(data['ssitw']);

let setDoc = db.collection('data').doc('ln_v5').set(data['v5']);
setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
