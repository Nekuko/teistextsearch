// SearchPage.js
import React, {useMemo, useState, useEffect} from 'react';
import './SearchPage.css'; // Import the CSS file
import Filters from '../Filters/Filters'; // Import the Filters component
import Results from '../Results/Results' // Import the Results component
import { searchLN } from '../Search/searchLN/searchLN';
import { searchAnime } from '../Search/searchAnime/searchAnime';
import { AkaneNishinoIcon, AlexiaMidgarIcon, AlphaIcon, BetaIcon, CidKagenouIcon, ClaireKagenouIcon, DeltaIcon, EpsilonIcon, EtaIcon, GammaIcon, IrisMidgarIcon, MinoruKagenoIcon, PoTatoIcon, RoseOrianaIcon, ShadowIcon, SherryBarnettIcon, SkelEtalIcon, StylishRuffianSlayerIcon, ZetaIcon } from '../../images/characterIcons';
import { ANS1Cover, ANS2Cover, LNV1Cover, LNV2Cover, LNV3Cover, LNV4Cover, LNV5Cover } from '../../images/covers';

function SearchPage() {
  const ln_v1 = {
    "v1": {
      "c1": [
        "I honestly can't remember what catalyzed this desire. All I know is I've admired shadowbrokers for as long as I can remember.",
  
        "Was it a certain anime? Or was it a manga—or a movie? Eh, I guess it doesn't matter. I was all in for anything that featured a mastermind, or an eminence in shadow as I like to call them. These characters were never the protagonists or final bosses but were relegated to a role behind the scenes where they flaunted their powers and meddled in the affairs of others. I've always looked up to the men in the shadows. I wanted to be one of them.",
  
        "Think of children who worship their favorite superheroes. That was me but with master puppeteers.",
  
        "Well, there was one thing that set us apart: My reverence for them wasn't short-lived. In fact, it buried itself deeper in my heart, never dying out and always guiding me through life. To become stronger, I learned everything from karate to boxing, from swordplay to mixed martial arts. I hammed it up during all my practices, concealing my true power from the world and preparing for the fated day.",
  
        "At school, I played the part of being pleasantly mediocre, an unassuming face in the crowd. Like an NPC in a game or a part of the mob. I didn't do any harm. But behind this facade of normalcy, I was training full throttle. That's how I spent my entire youth.",
  
        "But as time passed, an uneasy feeling started to haunt me: I was due for a reality check.",
  
        "Yeah, that's right.",
  
        "This was all for nothing.",
  
        "I realized I'd never become as powerful as shadow commanders in the stories. It didn't matter how hard I trained in martial arts. Sure, I could clobber a few punks... but that was it. It'd be a tough fight if anyone drew a gun, and if I was surrounded by soldiers in full gear, I'd be toast, donezo, old news.",
  
        "The idea of a shadowbroker getting curb stomped by some soldiers... Ha! Ridiculous! Let's say I trained for ten more years—or that I became the greatest martial artist in the world. I'd still get rekt by a gang of commandos.",
  
        "Or maybe I'd manage to escape by the skin of my teeth or train hard enough to fight back. It's all in the realm of possibility. But even if I somehow managed to do that, these guys could set off a nuke and vaporize me in an instant. There is a limit to the human body. That much I know.",
  
        "That said, my master puppeteers would never be taken down by a nuke. Which means I needed to be impervious to them, too.",
  
        "What does one need to survive a nuclear attack?",
  
        "Is it the ability to pack a punch?",
  
        "Could it be a body of steel?",
  
        "How about unlimited stamina?",
  
        "Wrong, wrong, and wrong again. You need a totally different kind of power.",
  
        "Some call it magic. Others, mana. Or chi, or aura, or... you get the point. Anything will do. I needed to obtain this clandestine ability. I'd managed to reach this conclusion when I finally confronted reality head-on.",
  
        "I'll try to explain. Let's say someone is on a quest for magical powers. Anyone would think they're nuts. Hell, I know I would. I'd think they'd gone bonkers.",
  
        "But consider this: No one in the world has proved that magic exists—or disproved it.",
  
        "I couldn't find these powers with my sanity intact. I had to dive to the depths of lunacy.",
  
        "I started training in a new way that was damn near impossible.",
  
        "After all, no one knows how to acquire magic, mana, chi, auras, or what have you.",
  
        "I practiced Zen meditation; I braved the purification ceremony of standing under waterfalls; I focused my entire being inward; I fasted; I mastered the art of yoga; I converted religions; I searched for holy spirits; I prayed to god; I strapped myself to a cross. There was no right answer, which meant I groped my way through the darkness and sprinted down my chosen path.",
  
        "Which brings us here. I'm just about ready to start my final summer as a high schooler, and I've yet to discover magic or mana or chi or auras...",
  
        "It is already dark by the time I finish my daily training session.",
  
        "I pick up and put on my underwear, which I'd chucked to the side, and wiggle my arms through the sleeves of my school uniform. I have yet to pick up these secret magical skills, but I've been starting to feel the effects of my training, I think, of late.",
  
        "Like right now.",
  
        "I can see flashing lights going off in my mind and sense the world is spinning.",
  
        "It could be magic... or auras... In either case, I'm feeling its effects—that's for sure. I'm proud to announce that I've completed another successful session.",
  
        "When I'm in the thick of it, I rip off every single article of clothing and get buck naked in the forest. It makes me one with the universe. I bash my skull into the trunk of a giant tree to physically force out my worldly thoughts. Plus, it stimulates my brain and urges my latent powers to awaken.",
  
        "You know, I'm all about logic when it comes to these things.",
  
        "Yeah, everything's beginning to get all blurry right about now. It's a sensation comparable to giving myself a concussion. I make my way out of the forest with the lightest of footsteps, feeling like I'm treading on clouds.",
  
        "Just then, I see light—two beams floating in the air and slicing through space. How strange. They're beckoning me, guiding me somewhere.",
  
        "\"Ma-magic...?\" I whisper, tiptoeing toward the illumination.",
  
        "It must be... It's gotta be! I finally found the powers of the unknown!",
  
        "I notice that I've gone from walking to sprinting, tripping over the roots of trees and continuing to stagger forward—on and on like a beast in the forest.",
  
        "\"Magic! Magic! Magic! MAGIC, MAGIC, MAGIC!!!!!\" I chant, bounding toward the lights and ready to snatch them out of midair...",
  
        "\"Hmm...?\"",
  
        "As a pair of headlights flood my vision with a blinding whiteness, I hear the shrill whine of a sudden brake ringing and ringing.",
  
        "And then a collision. Its impact pierces through my body... And my magic...",
  
        "In conclusion, I was able to find magical powers.",
  
        "When I open my eyes, I sense that I'm surrounded by its energy, though I gotta admit it looks different from the two lights. Eh, no biggie.",
  
        "Oh, and one other small detail: As a side effect, I manage to reincarnate. I bet I opened a door to another world when I found magic or something. Whatever.",
  
        "As for right now, I'm a baby boy, a few months old. I only recently started forming thoughts, but it's still hard for me to guess how much time has elapsed at any given moment. Plus, I don't know any words, but I guess it's plenty to recognize that this civilization is more or less the same as Europe in the Middle Ages.",
  
        "But none of that's important. I've acquired magical powers. That's the end-all be-all. I couldn't care less about how it happened or any bonus features.",
  
        "I notice magic as soon as I start displaying glimmers of consciousness. All around me, I can see minuscule grains of light floating and shimmering. It reminds me of those times in my past life when I frolicked through a field of flowers stark naked—to train and find spirits, obviously.",
  
        "As it turns out, my training wasn't a total waste after all. I mean, my ability to detect this energy is proof enough, and I can control it as easily as my limbs. It's comparable to when I strapped my naked body to a cross, a nod to Jesus... or maybe when I flip-flopped religions and danced around in prayer in my birthday suit... I bet every little thing in my training sessions helped me in the long run. It's already taught me that I can get stronger.",
  
        "Plus, time is of no consequence for a baby. I'm ready to use these years to train and become an eminence in shadow, once and for all... Oops, I think I've made a doodie.",
  
        "Which reminds me. I heard somewhere that birds let their droppings dribble out involuntarily, and I think human babies are the same. I can fight the good fight with logic and reasoning, but it feels as though my instincts take over, whispering Just do it in my ear.",
  
        "That said, this is me we're talking about. I spent my waking hours training in my past life. Pooling together all the strength in my body, I tighten my sphincter, buying me some time...",
  
        "\"Wwwaaaahhhhh!\" ...to summon people.",
  
        "I think it's been ten years.",
  
        "You know, magic is something else. It means I can surpass the bodily limitations of humans: lift ginormous boulders with a single finger, dash twice as fast as a horse, leap higher than a house.",
  
        "That said, I'm no match for nukes. Well, I know my defenses will increase with my magical capacity, but have you seen the firepower of those weapons on Earth? There was a time when I contemplated forgetting about them entirely, 'cause we don't have nukes in this world.",
  
        "But what good is a master puppeteer who settles for less?",
  
        "No good. Not at all.",
  
        "That means my next mission is to become strong enough to beat weapons of mass destruction. After extensive research and training, I found one potential solution, which I've been incorporating into my daily experiments.",
  
        "Oh yeah. And it seems I've been born into a noble family. For generations, members of this family have trained to become dark knights, who use magic to power up and slay enemies in battle. And as my family's rising star of a son (...NOT), I'm living my days as your average apprentice. After all, shadowbrokers need to be extremely selective about when, where, and to whom they reveal their powers. Yeah... I'll lie in wait until then.",
  
        "I know I'm not exerting my true potential and that I am cutting corners, but I learned some skills as an apprentice that have come in handy. Like how magic is used on the battlefield in this world. It's been a good opportunity for me to reflect on my own techniques.",
  
        "To be completely honest, it's clear to me the fighting styles from my past life were a hundred times more logical and refined than the ones here. I mean, look at any contemporary martial arts battle. These fighters rebuke unnecessary movements, drawing from various combat schools and whittling them down to the cre me de la cre me. This creates the conditions for the \"perfect\" fight. It relies on the rules of the game, of course, but this mental attitude can be used to identify the best of the best in any situation.",
  
        "And then consider this world. First and foremost, their fighting techniques stay in their country of origin. Which means different schools of combat don't cross borders. Plus, there are certain secret skills that countries won't allow out of their jurisdiction—not that we'd be able to spread them to begin with, since no forms of media are readily available to us. This means we can't combine techniques from other forms of fighting, much less reject or improve our own.",
  
        "If I had to describe this system in one word, I'd call it unrefined.",
  
        "But there's one fundamental difference between the two worlds. That's right: magic. It completely changes the baseline of physical performance.",
  
        "Take physical strength, for example.",
  
        "I can lift someone up with one hand, which means any knowledge about hand-to-hand combat and wrestling, or \"ground fighting,\" goes out the window. Even if we're in a mounted grappling position, I can soar through the air by flexing my abs. If I've got my foot hooked on an opponent in an offensive guard, I can blast them off me by activating my leg muscles. Yeah. Ground fighting is out of the question.",
  
        "It's like how humans have their method of combat and gorillas have a breed of their own. And I'll just leave it at that.",
  
        "There are also differences in the distance and speed at which combatants step into their attacks—meaning it's harder to predict their movements in battle. This might be the most important thing. I mean, martial arts are all about reading your opponent at an appropriate range. The angle, position, and distance of your attacks are everything.",
  
        "It took me a while to get the hang of the last one, especially because these fighters attack from afar. Like sixteen feet apart. I mean, I guess I get it. They're lightning fast and take ginormous steps, and I'd just assumed this was their way of fighting... until I realized it was to compensate for their poor defense tactics.",
  
        "I'm sure this is relatable to all martial artists: Those who can't guard will stand too far from their opponents.",
  
        "It's really scary to get hit. I get it. It's tempting to retreat to where your opponent can't reach you. But this results in a contest where one fighter attacks and the other retreats, and vice versa, which is a real snore. You call this outboxing? Try again. This is just an exercise of running back and forth.",
  
        "It doesn't matter if the fighters are five or a hundred meters apart. They can't land a decent hit either way. It could be six or seven or ten meters—it's all the same.",
  
        "This has been a public service announcement to close the gap and duke it out.",
  
        "But once you cross a certain threshold, one millimeter can make a huge difference. And it stands at the exact point where I can both land a blow and react to an attack. Throw in other factors like the angle of my hits, and the slightest turn can mean an advantage—or a disadvantage. The narrowest of margins is the best range between two fighters.",
  
        "A battle shouldn't be about one combatant dashing in sixteen feet and the other leaping back nineteen.",
  
        "I guess I came into this whole thing with an idea of what to expect from other worlds, which—compounded with my unfamiliarity with magic—left me confused about their combat scene. But, eh, I've gotten my bearings straight as of late. It's all chill now.",
  
        "I train every day at home, where our dad basically directs us on how to throw down, and I grapple with my older sister. I know she's only two years older than me, but she has natural talent, according to everyone else. If she keeps it up, she's the one who will take over as head of the family, which isn't uncommon in this world, since magic can make women powerful enough to become the heir.",
  
        "\"Geez, you're so strong...,\" I whimper every day as she kicks my ass.",
  
        "But I can't win. If I want to become a shadow commander, I've got to establish myself as the most average of all background characters.",
  
        "That's how I've been living out my day-to-day. Tack on lessons about how to act as an aristocrat and hanging out with people to secure my place as a low-profile extra, and I've barely got any free time during the day.",
  
        "Which means the only time for me to train is after everyone else has gone to bed, late into the night. I may be cutting into my beauty sleep, but I've been using magic to recover super-quick and meditation to catch some z's in new ways. And now, I've pretty much got short sleeper syndrome. I make it work.",
  
        "Okay, time to get down to business. I blast through my usual training regimen in the forest. I've got something special planned today.",
  
        "I heard that rogues have taken up residence in the ghost town nearby. According to my investigation, it's a large gang of thieves—and the perfect opportunity to test my new weapon.",
  
        "I take down bandits here and there. But a whole group of criminals? That's the event of the year. And I'm always short on sparring partners, so I welcome evildoers with open arms.",
  
        "Oh, please, please, please infest this place with more crime!",
  
        "I think it's standard for villages to try to deal with offenders on their own terms, but they mostly get away scot-free. I mean, our judicial system is in the city, which is why I've decided to take the law into my own hands.",
  
        "Today marks the historic day of my first official battle with my newest weapon. I've been experimenting with it for months and call it the \"slime bodysuit.\"",
  
        "Allow me to explain.",
  
        "We can use magic in this world to strengthen our bodies and weapons, but there are energy losses when it's transferred from one form to another. For example, if I run one hundred currents of magic through an average steel sword, only 10 percent of them will be of use in combat. A whopping 90 percent is lost. Even a mithril sword, which is known to be compatible with magic. It's considered high-end if it performs at 50 percent capacity.",
  
        "That's when slimes caught my eye. A slime is a magical being that uses energy to change form and wobble from place to place. According to my research, I've found they have a conductivity of an astonishing 99 percent. On top of that, they're in a liquid state, which means they can change their shape at will.",
  
        "I started testing slime jellies after capturing and crushing their cores—easily more than a thousand of them. In fact, I pushed them to the brink of extinction in my area by killing too many and had to go on an expedition to find more.",
  
        "The jellies are easy to handle and strong, to boot. I successfully molded the slime into a wearable bodysuit, which is super-lightweight and silent, unlike armor. Plus, it almost, like, supports my movements? And I've given it killer defenses, of course.",
  
        "As for right now, I'm wrapped in a black slime bodysuit. It's a simple, no-frills getup that fits my body perfectly, except for eyes, nostrils, and mouth. I'm virtually indistinguishable from the criminal in a certain famous detective manga.",
  
        "I might want to think up a more suitable design when I'm intervening in a scheme as a full-fledged shadowbroker.",
  
        "I manage to arrive at the ghost town late into the night, but I can see a few lights in the darkness. The thieves seem to be having a feast to celebrate their robbing of merchants.",
  
        "Wow, I'm super-lucky.",
  
        "You see, thieves aren't good at planning, and they immediately squander what they steal, which means they only have something decent right after a successful attack. And one man's treasure is another man's treasure. What's theirs is mine. This is how I'll get the funds to become a puppet master.",
  
        "Anyway, I crash their feast, excited as all hell—not with a surprise attack, because that won't make for a good practice session.",
  
        "\"Yahoo! Hand over the loot, scumbags!\" I shriek in the middle of their banquet.",
  
        "\"Wh-who the hell is this puny dude?!\"",
  
        "I mean, I'm only ten years old. Like, duh. It's only natural that I'm short.",
  
        "\"You heard me! Now fork over the goods!\" I shout, punting the rude man across the room for calling me small.",
  
        "The other thieves finally draw their weapons.",
  
        "\"Hey, keep it up, and we ain't gonna hold back, you bra—...!\"",
  
        "\"Take that!\" I exclaim as I slice through his neck, severing his head from his shoulders midsentence.",
  
        "That's right. My sword is made of slime, which means I can draw it from my bodysuit when the situation calls for it. And it has a bunch of nifty functions.",
  
        "Number one. It can elongate.",
  
        "\"Take that! And that! And that!\" I extend my sword and slay all the dinky thieves in the vicinity.",
  
        "I stretch the slime out in the shape of a whip with edges as sharp as a sword. It's my first time wielding it, so I'm a tad nervous, but I can totally see how it might come in handy.",
  
        "\"And that! And that! And... huh?\"",
  
        "I notice the room has gone all silent as I get a little too carried away with slashing and slicing around me.",
  
        "Wait, is there only one guy left?",
  
        "\"Wh-who are you...?\"",
  
        "\"Eh, I guess you'll be my guinea pig for function number two.\"",
  
        "\"Th-the hell do you mean...?!\"",
  
        "\"To break it down, you look stronger than the rest of them. I'm assuming you're like their boss or something, right? Your chances of winning are squat, but if you let me practice on you, I bet you'll live for, like, two extra minutes. Good luck.\"",
  
        "\"S-stop playing, you brat! In the capital, I'm the—...!\"",
  
        "\"Hey, you. Skip the speech and come at me.\"",
  
        "\"Die, dammit!\" booms the Boss (or whatever) as he closes the distance between us, taking his sweet old time to swing at me, and I obviously... don't budge.",
  
        "His sword plunges straight into my chest, and I'm thrown to the ground on impact.",
  
        "\"Ha-ha! That's what you get for messin' with me! I've mastered the Royal Bushin method, and... Wh-what?!\"",
  
        "\"Ta-daa!... You couldn't even scratch me.\"",
  
        "I rise to my feet as if nothing happened, and wow, I couldn't be happier with my suit's defenses! I mean, these weak-as-shit attacks can't even touch me.",
  
        "\"I've heard it seems to be all the rage in the capital. Show me.\"",
  
        "\"Damn you!\" swears the Boss as he strikes me.",
  
        "Yeah. No sweat. As he swings his sword with all his might, I don't even ready mine, sidestepping and ducking to dodge him, no problem.",
  
        "The Royal Bushin method, was it? I could get into their ways of wielding the sword.",
  
        "I mean, it's not every day you get to see someone fighting over something other than spirituality, old-fashioned standards, or personal beliefs in this world. This was a fight motivated by logic. I can see it from his clumsy set of attacks.",
  
        "In the length of a second, a small step forward.",
  
        "I see him calculate his next strike and take creative approaches. That said, his attacks leave a lot to be desired, and in the next free moment, I step just out of his range.",
  
        "\"Wh-why... why can't I hit you?!\"",
  
        "\"I mean, you're weaker than my old man. Though I guess you're stronger than my sister. Not that it means anything. And I bet she'll whup your butt in another year.\"",
  
        "\"You little shiiiiiiiiiiit!\" he screeches, frantically bashing his sword in my direction.",
  
        "I parry his advances before kicking him lightly in the shin—snapping my leg forward quickly as though on reflex.",
  
        "\"Gwah, ah! Why...?\" the Boss whimpers, curling into a fetal position and clutching his leg.",
  
        "Blood drips from his shin and pools on the ground.",
  
        "It's a cheap trick, you know. I have a blade as sharp as an ice pick sticking out from my toes.",
  
        "The second handy-dandy feature of the slime sword is that I can wield my blade from wherever and whenever I want. I thought this tactic showed the most potential. All I have to do is get in front of the enemy and slash him with the sword in my shoe, since lower-body attacks are hard to block. I parry hits, lock blades, and give my opponent a kick. It's nothing flashy, but it gets the job done.",
  
        "\"I guess we're through.\"",
  
        "\"W-wait...!\"",
  
        "\"You didn't even last two minutes,\" I note before kicking the Boss in the chin with the blade on my foot.",
  
        "Death by impalement.",
  
        "He twitches as I roll him to the side and rummage through his loot.",
  
        "\"Artwork? I can't sell that. Hard pass on food. Come on. Where are the cash, jewels, and precious metals? Gimme, gimme, gimme.\"",
  
        "There are several carriages' worth of spoils. And many dead merchants.",
  
        "I whisper to the corpses, \"I've avenged you. Now you can rest, knowing your treasures will be put to good use. I hope you make it to heaven.\"",
  
        "I gather my haul and pray in silence. I'm guessing I found about five million zeni. One zeni is more or less equal to one Japanese yen. All this will help fund my activities as a shadowbroker. You know, the world would be a much better place if it were overrun by criminals. Oh, how I wish life were like a video game and I could encounter enemies by walking down the street.",
  
        "\"Please wreak more havoc in your next life,\" I say to the Boss, giving him a thumbs-up, when I notice... something past my fingertip.",
  
        "\"Is that... a cage?\"",
  
        "It looks sturdy and pretty big.",
  
        "\"Did they have slaves? Eh, hard pass on anything I can't trade for cash.\"",
  
        "But what if there's something valuable inside? I lift its cover.",
  
        "\"Well, this is... unexpected.\" I'm not sure how to describe it, but this cage holds... a mound of rotting flesh. I can kinda tell it's human maybe, but no clue as to its age or gender.",
  
        "But it's alive. Wait, it might even be conscious. I peer into the cage, and the flesh jolts all of a sudden.",
  
        "I've heard of the Church executing these creatures. I think they're called the \"possessed.\" They're born as normal humans until their flesh rots out of nowhere, fated for death. But the Church goes out of its way to purchase them, executing them in the name of purification. They claim they're exorcising demons, but they're really just murdering the sick. But the ignorant masses applaud and praise them for keeping peace on earth. It's just as you'd expect from the Middle Ages. What a friggin' downer.",
  
        "I bet I'd get more zeni than this entire load of spoils if I were to sell this to the Church, but that's pointless to say since I can't sell it.",
  
        "Well, I guess I should put it out of its misery.",
  
        "I stick my slime sword into the cage... when I notice something else.",
  
        "Namely, this mound of flesh contains an abundance of magic. I've been training my magic since childhood, but this surpasses mine—it's honestly beastly. And this...",
  
        "\"Is this wavelength... the effects of a magical overload?\"" ,
  
        "I guess a magical overload must be the reason this turned into a pile of flesh. I've suffered its effects firsthand before. If I hadn't gotten it under control back then, I might've ended up suffering the same fate.",
  
        "I know magic has certain effects on the body, which I felt all too well that fated day. I could sense its potential to raise my tolerance for magic and allow me to handle more of it, but it would be too dangerous to induce a magical overload. I'd tossed the idea.",
  
        "But if I were to hypothetically conduct experiments on a product of this phenomenon... I can get closer to being a shadow commander without any risks.",
  
        "\"I can use this...,\" I say as I reach out to the flesh and infuse it with magic.",
  
        "Wow, it's been a whole month, huh...? I think as I recall my first encounter with the mound and heave a sigh, back in the same abandoned village.",
  
        "I wonder why things turned out this way.",
  
        "All my experiments on the flesh were going swimmingly—well, until recently. I spent my days pumping the flesh with magical energy. I mean, it wasn't my body, so I could go buck wild on it. I was plugging away at my little experiment, testing this and that.",
  
        "In all honesty, it was fun. After all, one of my greatest joys in life is sensing that I'm getting closer to the essence of magic and watching my power grow before my eyes. I pushed forward, inching toward the boundaries of magic with more precision, power, and detail, until I finally had the magical overload under the tip of my thumb when... a blond elven girl appeared.",
  
        "I guess it would be more accurate to say I was too fixated on improving my command of magic to notice the flesh was a blond elf until that moment. Huh. To think that stinking pile of flesh would return to its original form. I tried sending her off with a lighthearted farewell—you know, the typical You're a free elf and Happy trails and You've got a bright future ahead of you. But she said she didn't have a home, insisting on repaying me for saving her life, which, er, I didn't actually do. It was all a coincidence.",
  
        "I considered ditching her before things got annoying, but I ended up making her Shadowbroker Subordinate A. I mean, she doesn't strike me as the type to betray me, and she seems smart... There's something about her that makes me suspect she has too much talent.",
  
        "And even though she's also ten years old, she's more than enough proof that elves develop faster mentally than humans.",
  
        "\"And from this day forward, you will be Alpha.\"",
  
        "A or Alpha. Either works.",
  
        "\"Understood,\" she replies with a nod.",
  
        "She's your stereotypical elf—a beauty with blond hair, blue eyes, and fair skin.",
  
        "\"And your job is...\" I stop to think for a moment.",
  
        "This is a big one. Her job is to be the assistant to a shadow commander. No mistakes there. Which means I gotta set the scene by answering some basic questions. Like, what exactly is an eminence in shadow? And what purpose do they serve?",
  
        "Flushing out the appropriate narrative is key. I mean, if I said I was fighting to get revenge for losing at pachinko slots, I wouldn't seem too cool, right?",
  
        "I have to choose wisely. I mean, all my daydreams are filled with puppeteers from even before I came into this world and certainly after. I've mixed and matched thousands—no, tens of thousands—of possible scenarios in my mind. And I have the perfect one for the occasion.",
  
        "\"To hide in the shadows and prevent the resurrection of Diablos the demon.\"",
  
        "\"Diablos the demon...?\" Alpha cocks her head in confusion.",
  
        "\"I'm sure you've heard of him. You know, the stories of long, long ago. Diablos brought our world to the brink of destruction when three brave warriors—a human, an elf, and a therianthrope, or a hybrid beast—teamed up to destroy him and protected the world.\"",
  
        "\"Oh yeah. But isn't that a fairy tale?\"",
  
        "\"Nope, it really happened. But the truth is way more complicated than that...,\" I continue, as a small, wry smile appears on my face. I mean, getting to my level and twisting out a scenario from a legend is a piece of cake.",
  
        "\"Just before the heroes slayed the demon, with his very last breath, he put a curse on them, which is known as the Curse of Diablos.\"",
  
        "\"The Curse of Diablos? I've never heard of that before.\"",
  
        "\"Oh, but it exists. It's the curse of the possessed... and the very disease that ravished your body.\"",
  
        "\"What? No way...\" Alpha goes bug-eyed in horror.",
  
        "\"The descendants of the heroes have suffered from this illness. Back in the day, the Curse of Diablos used to be curable. Just like yours.\"",
  
        "No one would believe that Alpha was possessed until recently. Her smooth and unblemished skin is evidence to back up my story.",
  
        "I mean, even though this is a big fat lie.",
  
        "\"It's proof that one is a descendant of the heroes who saved the world. You know, the possessed used to be lauded, appreciated, and protected—in the past.\"",
  
        "\"But no one appreciates us anymore, let alone...\" Alpha trails off, screwing up her face.",
  
        "\"There's someone out there who twisted history—erasing the truth about the lineage of the possessed and hiding the cure to the curse. What's worse, these people became targets of shame.\"",
  
        "\"Ngh...! Who would do such a thing?!\"",
  
        "\"Those who scheme to resurrect Diablos. That's because those with the curse carry the bloodline of the heroes and high levels of magical energy. In other words, they serve as a major military force for us. On the flip side, they're a nuisance to his supporters.\"",
  
        "\"Which is why we're called the possessed and disposed of...\"",
  
        "\"Exactly. You lost your hometown and family—all because you've been accused of committing a false sin. Aren't they despicable?\"",
  
        "\"Yeah. There's no way I wouldn't find them absolutely detestable.\"",
  
        "\"The Cult of Diablos. That's our enemy. They only work behind the scenes, which is why we must conceal ourselves, too. Lurk in the darkness and hunt down shadows.\"",
  
        "\"I'm guessing they've gotta be formidable if they have enough say to pull the strings behind the scenes. Which means that our enemies hold positions of power... and that hordes of people under their control don't know the truth...\"",
  
        "I nod seriously. \"Our journey may be perilous. But we must go forward. Are you with me?\"",
  
        "\"If that's what you want, then I'll devote my life to it. We'll punish these sinners with death...\" Alpha stares at me with her intense blue eyes and smiles defiantly. Her face is lovely even in its youth and teems with determination and resolve.",
  
        "I fist pump in my mind. Whoo-hoo! This elf girl is super-gullible!",
  
        "Obviously, the Cult of Diablos doesn't exist, which means we'll never find them. It also provides grounds for me to accuse and slaughter any thief syndicate in the area for being in the Cult. And I bet we can stake out battles between fighters and intervene as shadow commanders. And—and we can say fake-deep stuff for our parting words! Like The end is near... Or The resurrection of the demon is nigh... And it would be so cool if we could arrive with the wind on a battlefield, saying You fools... You're being controlled..., before completely wiping everyone out...! Wow. I could honestly go on and on.",
  
        "Right. I almost forgot. The most important part. This name of this organization...",
  
        "\"We are the Shadow Garden... We lurk in the darkness and hunt down shadows...\"",
  
        "\"The Shadow Garden. That's a nice name.\"",
  
        "I know, right? It's sick.",
  
        "This is the very moment the Shadow Garden and the World's Greatest Enemy—the Cult of Diablos—is born. I move one step closer to becoming a mastermind.",
  
        "\"I guess we can start by wielding our magic and practicing sparring with each other. I'll act as the main fighter in battle, but you've got to get stronger to wrangle in the small fry.\"",
  
        "\"I know. We've got a tough enemy on our hands. I have to raise the bar for myself.\"",
  
        "\"Right. That's the spirit.\"",
  
        "\"And we have to find other descendants of heroes and protect them.\"",
  
        "\"Uh, erm, yeah. All in moderation.\"",
  
        "It would be fun to play shadowbroker with more people, since that'd make it feel more like a legit organization. But I don't need that many people. I honestly wouldn't have a problem if it just stayed the two of us.",
  
        "\"Well, for now, let's just focus on getting stronger,\" I suggest, readying my wooden sword.",
  
        "I block Alpha's attack, which has an unexpected bite to it. To think she was only a novice until recently. Alpha has a good feel for things and plenty of magical energy, which means I can make good use of her.",
  
        "Under the moonlight, I swing my wooden sword as these thoughts run through my mind."
      ],
      "c2": [
        "It's been three years since the establishment of the Shadow Garden—give or take. Alpha and I turned thirteen years old, and my older sister Claire, fifteen.",
  
        "There isn't anything special about turning thirteen, but fifteen is another story. That's when aristocrats begin their three-year education at a school in the royal capital. As the bearer of the hopes and dreams of the Kagenou household, Claire had a crazy farewell party thrown for her, which was organized by our mother. Like, wow, you can't get more clichéd than that.",
  
        "And that's fine. Well, it was fine until she vanished the day of her departure. Read: All hell broke loose in the Kagenou household.",
  
        "\"The room was like this when I came in,\" explains my dad in a low, suave voice. His face isn't bad, either. \"No signs of a struggle. But it looks like the window has been pried open. The culprit must have been skilled to do this without me and Claire noticing.\"",
  
        "He touches the windowsill and stares wistfully at the sky. A glass of whiskey would complete the scene.",
  
        "Now, if only he had hair...",
  
        "\"And?\" replies a chilly voice. \"Are you saying we're out of luck since the kidnapper was skilled?\"",
  
        "That was my mom.",
  
        "\"Th-that's not what I'm saying. I was just stating a fact...,\" answers my dad as cold sweat drips down his cheeks.",
  
        "There's a pause.",
  
        "\"Shut it, baldyyyyyy!!\"",
  
        "\"Eep! I-I'm sorry! I'm sorry!!\"",
  
        "By the way, it's like I'm invisible. They don't expect much from me, and I don't cause any trouble. I'm trying to keep this up to lie low in the background.",
  
        "It's really too bad that my sister disappeared, since she was cool and all. But they nabbed her in the middle of the night when I was out training in the abandoned town, which meant I couldn't do anything to stop it. After watching with a concerned expression while my parents bicker, I sneak into my room and roll into bed.",
  
        "\"You can come out now.\"",
  
        "\"Okay,\" replies a voice accompanied by the sound of the curtains swishing gently.",
  
        "A girl in a black slime bodysuit steps out from behind them.",
  
        "\"Oh, it's you. Beta.\"",
  
        "\"Yes,\" says a girl, an elf like Alpha.",
  
        "But while Alpha's hair is blond, Beta's is silver, framing her blue feline eyes and the mole right under one of them. She's the third member of the Shadow Garden, after me and Alpha. I know I told Alpha to do things in moderation, but I swear, she keeps taking people in like they're stray cats or something.",
  
        "\"Where's Alpha?\"",
  
        "\"She's searching for signs of Miss Claire.\"",
  
        "\"Dang, she's fast. Is my sister alive?\"",
  
        "\"Most likely.\"",
  
        "\"Can we rescue her?\"",
  
        "\"It's possible... but it requires your assistance, Master Shadow.\"",
  
        "Oh, I have them call me Shadow. It's fitting for the leader of the Shadow Garden, right?",
  
        "\"Did Alpha say that?\"",
  
        "\"Yes. She said we must take every precaution in a hostage situation.\"",
  
        "\"Huh.\"",
  
        "If I'm being honest, Alpha is plenty powerful on her own. If she's asking for backup, we must be dealing with a big shot.",
  
        "\"It makes my blood boil...,\" I say, compressing the magic in my hand down further. In a flash, I release it, causing the air to quiver around us.",
  
        "There's no particular reason for that. I just love to put on a good show.",
  
        "Plus, it startles Beta, who even murmurs, \"Incredible.\" Nice.",
  
        "As of late, I haven't run out of training partners with Alpha, Beta, and Delta around, but I do like switching things up every once in a while. And I'm obsessed with playing the part of a mastermind, which makes this a perfect opportunity.",
  
        "\"It's been a while since I've showed my true strength...,\" I mumble.",
  
        "At this point, I'm used to giving off a mysterious vibe. And with Alpha and Beta creating an optimal environment for pretend play, I've been very hyped up lately.",
  
        "\"As we'd expected, the perpetrator is a member of the Cult of Diablos—presumably one of their highest-ranking officers.\"",
  
        "\"A high rank, huh...? But what do they want with my sister?\"",
  
        "\"They must suspect that she's one of the heroes' descendants.\"",
  
        "\"Well, those bastards guessed right...\"",
  
        "And that's how she thickens the plot.",
  
        "On top of that, she takes out a pile of documents and starts saying all kinds of cryptic things.",
  
        "Like \"Your story was true after all...\"",
  
        "And \"The Children of Diablos from one thousand years ago have...\"",
  
        "And \"This monument may be a sign of the Cult...,\" but I don't know for sure, 'cause I can't read ancient texts. I have a feeling that Alpha can't even understand them.",
  
        "Y'know, I bet the two of them scrounged up some paperwork that looked appropriately suspicious to feel as if we're getting closer to the truth. Yeah, that sounds about right.",
  
        "\"Take a look at this report. According to our most recent investigation, Miss Claire seems to have been brought to this hideout...\"",
  
        "Beta begins laying out a huge heap of files. It's complete gibberish to me. The majority is written in an ancient alphabet, and the others are a series of nonsensical numbers and symbols. Dang, they really have a knack for creating fake reports. In this regard, they're way better than me.",
  
        "I ignore her explanation and chuck a small knife at the map on my wall. I aim for wherever feels right or something.",
  
        "Zing. It sinks into the map.",
  
        "\"There.\"",
  
        "\"There? What are you...?\"",
  
        "\"That's where my sister is.\"",
  
        "\"But there's nothing... Wait. No way...!\" She balks, hastily rummaging through her reports as if she's realized something.",
  
        "Erm, ah, it's really just a random throw. But Beta is a great actress.",
  
        "Lemme take a guess. You're gonna say the secret hideout is located right at the tip of the knife, right?",
  
        "\"After cross-referencing my reports, it appears the hideout is at that location.\"",
  
        "See? What did I say?",
  
        "\"To think you instantly interpreted these documents and uncovered hidden details... You never cease to amaze me.\"",
  
        "\"Beta, you gotta train more.\"",
  
        "\"I'll do my best.\"",
  
        "Bravo! I know it's all an act, but whew! It pulls on my heartstrings. Oh, Beta! You've got me on the edge of my seat.",
  
        "\"I'll report to Alpha right away. Will we attempt our rescue tonight?\"",
  
        "\"Yeah.\"",
  
        "Beta bows to me and leaves the room with eyes all sparkly. Like, I can almost feel that you totally respect me.",
  
        "Cheers to her Academy Award–winning performance!",
  
        "A man walks down a dimly lit underground tunnel. Appearing to be in his late thirties, he has a piercing gaze and a well-built body, and all his gray hair is slicked back.",
  
        "He stops at the end of the tunnel, where there's one door flanked by two soldiers.",
  
        "\"The daughter of Baron Kagenou,\" he orders.",
  
        "\"In here, sir,\" one soldier pipes up, bowing to Grease and unlocking the door. \"We've got her restrained, but she's extremely hostile. Please proceed with caution.\"",
  
        "\"Hmph. Who do you think I am?\"",
  
        "\"M-my apologies, sir!\"",
  
        "Grease pushes through the door and enters the stone dungeon, where a girl is shackled to the wall with magic chains.",
  
        "\"You must be Claire Kagenou.\"",
  
        "When she's addressed by her name, the girl looks up at Grease in response.",
  
        "She's stunning, wrapped in the dainty negligee she wore to bed. It lightly veils her voluptuous breasts and shapely thighs, and her silken black hair is cut straight across her back.",
  
        "Claire glares defiantly at him. \"I've seen you around the capital. You're Viscount Grease, aren't you?\"",
  
        "\"Oh, well, I used to be a royal guard... or you saw me at the Bushin Festival.\"",
  
        "\"Right, the tournament. Princess Iris really tore you a new one.\" Claire smirks.",
  
        "\"Hmph. We're bound by tournament rules, which makes that an exception. I would never lose to her in a real battle.\"",
  
        "\"You would lose then, too, Viscount Grease... you first-round flunker.\"",
  
        "\"Shut it. A brat will never know the struggles of getting to the finals.\" Grease scowls at Claire.",
  
        "\"I'll make it in a year.\"",
  
        "\"I hate to break it to you, but you don't have a year left.\"",
  
        "The chains that bind her clang loudly as she closes the distance between them, snapping her teeth a hairbreadth away from the nape of Grease's neck.",
  
        "Chomp.",
  
        "If Grease hadn't slightly turned his head, she would have severed his carotid artery.",
  
        "\"Which of us won't see another year? Want to test it out?\"",
  
        "\"You won't be testing anything out, Claire Kagenou.\"",
  
        "Claire is howling with laughter when he punches her in the jaw, slamming her against the stone wall. But her glare remains unchanged and locked on Grease the entire time.",
  
        "His next punch doesn't land.",
  
        "\"Jumping backward now, eh?\"",
  
        "Claire smiles fearlessly. \"Oh, I assumed you were trying to hit a fly.\"",
  
        "\"Hmph. I guess you're not letting your strong magical powers overwhelm you.\"",
  
        "\"I learned that it's all about how you use magic, not how much.\"",
  
        "\"Your father taught you well.\"",
  
        "\"Baldy didn't teach me a thing. I'm talking about my brother.\"",
  
        "\"Your brother...?\"",
  
        "\"He's a cheeky one. I win every time we battle, but I'm the one learning from his techniques, not the other way around. Which is why I make life hard for him.\" A playful grin splays across her face.",
  
        "\"My condolences to your brother. I guess this makes me the hero who saves him from his wicked sister. Enough chitchat...\" Grease pauses, observing her intently.",
  
        "\"Claire Kagenou, has your physical condition... felt off recently? As in, has it gotten harder to use and handle magic? Have you experienced any pain when you use it? Is your body starting to turn dark with rot?... Do you have any of these symptoms?\"",
  
        "\"Did you abduct me to play doctor?\" The corners of Claire's glossy lips lift to a smile.",
  
        "\"You know, I used to have a daughter. I don't want to knock you around more than I already have. Answering honestly would benefit us both.\"",
  
        "\"Is that a threat? When I feel threatened, I tend to get hostile... even when I shouldn't.\"",
  
        "\"Are you saying you won't tell me the truth?\"",
  
        "\"We'll see.\"",
  
        "Grease and Claire glare at each other for a while.",
  
        "She's the one to break the silence. \"Fine. I'll answer your dumb question, since it's no big deal. What was it? About my condition and magic, right? Well, everything's fine now. If I wasn't chained up, I'd be doing pretty darn good.\"",
  
        "\"What do you mean by 'now'?\"",
  
        "\"Well, I first noticed the symptoms a year ago.\"",
  
        "\"What? Are you saying it got cured—on its own?\" Grease has never heard of a case where it healed on its own.",
  
        "\"Yeah, I didn't do anything to... Oh, right. What was it? A 'stretch'? I don't know what that means, but my little bro asked me to stretch with him, and I felt better after that.\"",
  
        "\"Stretch? I've never heard of that before... but if you had symptoms, that means I wasn't mistaken in thinking you're compatible.\"",
  
        "\"Compatible...? What does that mean?\"",
  
        "\"Nothing that should concern you. Either way, you're going to break soon enough. Oh, and I'll make sure to look into your brother...\"",
  
        "Before he can finish his sentence, he suffers a blow to the nose.",
  
        "\"Wha—?!\" he barks, stumbling back to the door and glowering at Claire. He holds his bloody nose. \"Claire Kagenou, you wretch...!\"",
  
        "All four limbs should have been bound, but she somehow managed to free her right arm, where blood trickles down her wrist.",
  
        "\"You scraped off your own flesh and dislocated your finger...?!\"",
  
        "These are no ordinary chains. They're sealed with magic. In other words, she unleashed the full extent of her physical strength to slice the flesh off her hand, break her own bones, and slide out of the chains to punch Grease. This rattles him to his core.",
  
        "\"If you do anything to my brother, I'll never forgive you! I'll kill you, your loved ones, your family, your friends... Ngh...?!\"",
  
        "Grease clobbers Claire in the gut with all his might. There's no way she can defend herself from his spells, especially when she's strapped down by chains.",
  
        "\"You bitch...!\" spits Grease as she crumples to the ground.",
  
        "On the floor, there's a pool of dark-red blood fed by a trickle from her right hand.",
  
        "\"Well, then. I'll know when I've used this...,\" he murmurs, reaching out to touch her blood when a winded soldier flings the door open.",
  
        "\"Viscount Grease, we're in trouble! Intruders!\"",
  
        "\"Intruders?! Who the hell are they?\"",
  
        "\"We don't know! There are only a few of them, but we don't stand a chance without you!\"",
  
        "\"Ugh, I'll take care of it! The rest of you, stay on guard!\" Grease clicks his tongue in irritation before turning on his heel and making his way from the cell.",
  
        "By the time Grease arrives on the scene, the area is already smeared with blood.",
  
        "The soldiers who protect the major facility aren't weak by any means, and some even rival the royal guard.",
  
        "\"Why? This can't be...!\"",
  
        "Illuminated by a single light streaming in from the outside, countless dead bodies litter the ground of the underground hall in the facility.",
  
        "Each bears a single slash—sliced by an unimaginably destructive force.",
  
        "\"Son of a bitch...!\"",
  
        "Grease glares at a group of figures dressed in black bodysuits. From their curves, he can guess they're petite girls—seven in total. Under the dim light of the moon, they're stealthy enough that it's easy to lose sight of them without a concerted effort. These women are using a rare technique to control their magical presence, and Grease recognizes this group might just rival him in strength.",
  
        "There's one who's drenched in blood, eyeing him under the moonlight.",
  
        "\"Nnr...!\"",
  
        "In this moment, instinct overtakes Grease—not for any explicit reason, but he can sense danger.",
  
        "Blood drips down her bodysuit and onto the floor, and she lets her katana drag behind her apathetically, creating a trail of gore.",
  
        "\"Who the hell are you? What's your purpose?\" he asks, attempting to suppress his unease.",
  
        "But he's faced with seven rivals as powerful as him. To fight would be asinine. Grease curses his bad luck as he searches for a way out.",
  
        "The blood-splattered girl isn't listening to him. She laughs, snickering from behind her bloodied mask.",
  
        "She's going to hunt me down...! Grease thinks, just as he hears another voice.",
  
        "\"Back off, Delta.\"",
  
        "The girl halts in place before retreating without resistance. Grease lets out a huge sigh of relief.",
  
        "Another girl walks forward to take her place.",
  
        "\"We are the Shadow Garden.\"",
  
        "If they were anywhere else, her angelic voice would have entranced him.",
  
        "\"I'm Alpha.\" He realizes she's revealed her face at some point, and her pale skin gleams under the moonlight. She steps forward.",
  
        "\"Nn...!\"",
  
        "He sees she's an elf with golden hair and beauty that leaves him gasping for breath.",
  
        "She takes another step.",
  
        "\"Our purpose... is to eliminate the Cult of Diablos.\"",
  
        "He doesn't take notice of her black sword until it slices through the air and parts the night sky. Or at least, it seems to create that illusion, and Grease is overcome with intimidation by the force of her swing and the wind that follows it.",
  
        "How did she acquire such power at this age? He trembles with jealousy and fear—but more than anything, he's petrified by her declaration.",
  
        "\"How... how do you know our group?\"",
  
        "The Cult of Diablos. Grease is one of the few people in the facility who knows the name of this organization.",
  
        "\"We know everything. We know all about Diablos the demon, his curse, and the heroes' descendants. And... the truth about the possessed.\"",
  
        "\"H-how did you...?\"",
  
        "Grease was only recently informed of this top secret information, which couldn't—No, shouldn't have been leaked.",
  
        "\"You're not the only ones after the Curse of Diablos.\"",
  
        "\"Ksh...!\"",
  
        "He knows he can't forgive them for getting access to classified information. But would slaying them prevent it from spreading?",
  
        "No, no good.",
  
        "Which means he needs to live—to survive to inform headquarters about the girls, which is why Grease moves forward.",
  
        "\"Aaaaaaaaagh!!\" he shouts, unsheathing his sword and swiping at Alpha.",
  
        "\"How reckless,\" she notes, dodging and countering it with ease.",
  
        "Her blade grazes his cheek, where blood pours from the fresh wound.",
  
        "And yet, that doesn't stop him. He continues to pursue victory, even as none of his attacks land. Grease misses by a hairbreadth each time.",
  
        "On the other side, Alpha is focused on eliminating unnecessary movements and calculating the trajectory of his sword to sidestep oncoming assaults.",
  
        "And all the while, Grease's arms are slashed, legs cut, shoulders sliced.",
  
        "But none of his wounds are fatal.",
  
        "Grease sneers when he realizes she won't kill him until she gets intel out of him, and a new path to victory comes into view. After he slices through nothing again and again, he's finally slashed in the chest, causing him to retreat.",
  
        "\"Let's not waste any more time,\" says Alpha.",
  
        "Grease doesn't answer, kneeling and clutching his wounded chest. A smile then spreads across his face... and he swallows something.",
  
        "\"What... are you doing?!\" His body doubles in size—his complexion darkens, his muscles bulge, his eyes glow red. And most importantly, his magic capacity increases... dramatically.",
  
        "\"Unnh...!\"",
  
        "Grease's steel sword zings through the air without warning, which Alpha manages to block instantly. But she grimaces on impact, using the momentum to leap back and create distance between them.",
  
        "\"Interesting trick,\" she notes, shaking her arm as pins and needles shoot through it. She cocks her head to the side. \"Based on the wave frequency, I'm guessing it's a magical overload... that's been forcibly induced...\"",
  
        "\"Lady Alpha, is everything all right?\" asks a voice from behind, surprised to see Alpha back down during a fight for the first time.",
  
        "\"It's fine, Beta. Just a messy situation... Hmm?\"",
  
        "When Alpha turns her gaze back to Grease, there's no one in sight. Well, more accurately, there's a rectangular hole in his place, leading to a lower level of the facility—a trapdoor.",
  
        "\"...He got away.\"",
  
        "\"Yeah... let's go after him,\" Beta responds, ready to leap in behind him.",
  
        "Alpha stops her in the nick of time. \"That won't be necessary. He'll take care of it.\"",
  
        "\"He...? Now that I think about it, Master Shadow said he'd go ahead of us... No way.\"",
  
        "\"Yeah. I have to admit I was worried he'd get lost when he sprinted down a different route.\" Alpha giggles.",
  
        "\"He knew this would happen... He's done it again.\" Their eyes glow with respect as they peer down the hole together.",
  
        "\"I'm lost,\" I mumble to myself in an empty underground facility.",
  
        "It was all fine and well when we infiltrated the hideout, but I got sick of fighting off small fry. I thought I'd go ahead and kill their boss, which brings us... here. Bummer. I mean, I even practiced what I'd say when I faced their leader and everything.",
  
        "Anyway, this place is huge. I get the vibe of a group of bandits living in an abandoned military facility.",
  
        "\"Hmm?\" I sense someone running toward me from the other side of the tunnel. It takes a few beats before the figure notices me, too, leaving a wide gap between us.",
  
        "\"You've been expecting me...,\" he assumes.",
  
        "He's super-jacked, and his eyes have a crimson glow for some reason or another. He looks... really friggin' cool. I can imagine him shooting laser beams with his eyes.",
  
        "\"But if it's just you, this should be a breeze,\" he remarks with a twisted smile on his face.",
  
        "Then he vanishes—well, more like moves fast enough that an average person would've thought he disappeared.",
  
        "But I parry his attack with one hand. As long as I can spot the course of the attack, I'm not scared by the velocity of the assault. Even power is all about how you use it.",
  
        "\"Nnr!\" he yelps.",
  
        "I push him away in the shoulder and retreat.",
  
        "His magic is incredible—much stronger than Alpha, if I'm being honest. But his command over it is dismal, unfortunately. He's nothing but a dope jacked with magic.",
  
        "I'm not a big fan of people who go bananas with their magic, getting yoked with spells and moving at unimaginable speeds, and I don't like relying on physical force. Not that I'm trying to reject it. I mean, if I was forced to choose between strength and technique, I'd take strength in a heartbeat, since advanced tactics without the power to back them up are useless.",
  
        "That said, I absolutely despise half-baked strategies that solely depend on physical abilities—like power alone, or speed alone, or reaction time alone. They overlook and disregard the subtleties of battle.",
  
        "You see, strength is natural, but mastery requires effort. Shadowbrokers never lose when it comes to skill and expertise. And I want to be the same. My techniques will bolster my strength. My ingenuity will dictate speed. My reaction time will let me scope out potential attacks. Physicality is important, but I'd never screw up a fight by relying on it. That's all part of my battle aesthetic.",
  
        "If I'm being honest, this hulky slugger is starting to piss me off.",
  
        "Let's teach him a lesson... about the right way to use magic.",
  
        "\"Lesson one.\"",
  
        "I wield my slime sword and walk forward—one step, two steps, three.",
  
        "On that last one, he takes a swing at me, which means I'm in his fighting range and is my cue to speed up. I take the tiniest quantity of magic possible, focus it in my feet, compress, and then release it in one shot. That's all there is to it, and you can create an explosive impact with the smallest magical force.",
  
        "His sword slices through the air.",
  
        "And now he's in my range.",
  
        "I don't need speed or power or magic. I graze his neck with my ebony katana, slicing through the topmost layer of skin and leaving the veins untouched.",
  
        "I back up. His blade scathes my cheek at the same time.",
  
        "\"Lesson two.\"",
  
        "I make my move as he readies his sword again. I don't use magic, letting his movements stay quicker than mine. But he can't attack and move at the same time—no matter his speed.",
  
        "Which is why I can get closer and take one tiny step.",
  
        "It's a distance that's too long for me and too short for him.",
  
        "There's a moment of silence that follows.",
  
        "I see him looking uncertain of his next move, but he ultimately chooses to back away.",
  
        "I knew he was going to do that, based on the shift of magical energy inside him, and I close the distance before he has a chance to back up.",
  
        "This time, my sword scrapes against his leg, cutting a little deeper than the last laceration.",
  
        "\"Gah...!\" He groans in pain and continues his retreat.",
  
        "I don't pursue him.",
  
        "\"Lesson three.\" I'm just getting started.",
  
        "Have I ever felt this overpowered before? Grease wonders as the ink-black sword continues to break skin.",
  
        "Even when he fought Alpha the elf, even when the princess claimed victory at the Bushin Festival, Grease didn't feel weak. In fact, the last time he'd felt a power imbalance... was when he was a kid. It was the first time he'd ever held a sword and squared off with his mentor—an adult versus a child, a champion versus a novice. It was hardly anything that could be considered a fight.",
  
        "Grease is experiencing that same feeling right about now.",
  
        "The boy in front of him doesn't look tough whatsoever. At the very least, he doesn't emit the same menacing aura as Alpha when Grease fought her. He's a total natural; his stance, magic, and swordsmanship all seem to come effortlessly. In fact, his strength and speed are unremarkable, honestly—nothing special at all. But his strategy perfects his swordplay. And he manages to stand against Grease's powers of mass destruction using that alone.",
  
        "Which makes Grease feel an overwhelming sense of defeat.",
  
        "He knows the only reason he's alive is because the boy allows it. If his opponent wanted it, Grease would be dead in an instant.",
  
        "But Grease could regenerate his body as long as he didn't suffer fatal wounds. Of course, there are limits and nasty side effects. Meanwhile, he's shed pails of blood and had his bones broken, his flesh shredded, which means he'll need more time to fully recover.",
  
        "But even in this time of crisis, Grease survives.",
  
        "No. It's more accurate to say he's been spared.",
  
        "Grease lets out a single question: \"Why...?\"",
  
        "Why are you letting me live?",
  
        "Why are we enemies?",
  
        "Why are you so strong?",
  
        "Why?",
  
        "The young boy shrouded in black looks down at Grease. \"Lurk in the darkness and hunt down shadows. That's the only reason we exist.\"",
  
        "There's a distant sadness to his voice.",
  
        "And that's all it takes for Grease to understand the situation.",
  
        "\"Are you going up against them...?\" he asks.",
  
        "There are certain people in this world who the law cannot touch. Grease knew this and considered himself above that threshold—special concessions, privileges, and those with hidden personas. After all, the light of the law doesn't shine to the very edge of the world.",
  
        "While Grease enjoyed certain privileges, he was trampled and crushed by those at the top, which made him yearn for more power... and led to his downfall.",
  
        "\"Even if you... Even if your gang of twats becomes stronger, you'll never defeat them. The darkness of this world... is a deeper abyss than your wildest dreams,\" he says—not to warn the boy but to express his diabolical hopes.",
  
        "Grease wants the boy to get pulverized, lose everything, and become totally disillusioned with society. But, overcome with petty envy and spite, he frets that this wish is out of reach.",
  
        "\"Then we dive deeper,\" offers the boy without a hint of eagerness or ambitiousness.",
  
        "But Grease can sense his steadfast resolve and unshakable confidence.",
  
        "\"It's not easy.\" Unacceptable.",
  
        "Utterly unacceptable, thinks Grease, who's doomed for attempting to take them down himself.",
  
        "This is the moment he decides to cross the final frontier. He removes a pill from his breast pocket and swallows it whole when he realizes he's not going to survive. If that's the case, he thinks, I'll use this life to teach him the truth.",
  
        "The truth about the darkness of this world.",
  
        "The aura surrounding Grease changes.",
  
        "Until now, his magical energy had been rampaging around his body, but it starts to withdraw, replaced by its densely compressed twin. His veins rupture and burst with blood, his muscles tear, his bones shatter—but his body heals instantly. He defies the physical limitations of a human form and hosts an immeasurable amount of magical power.",
  
        "The Cult calls this the \"awakening.\" Once one assumes this form, there's no turning back.",
  
        "But in return... one is bestowed with Herculean strength.",
  
        "\"Aaaaghhh!\" Grease roars in a beastly fashion before vanishing into thin air.",
  
        "The dull sound of impact hangs in the air. In the same moment, the boy in black is flung off his feet toward a wall, which he kicks to shift his body and land on the ground.",
  
        "But Grease continues swinging at him, propelling the boy back again.",
  
        "\"Too slow! Too flimsy! Too frail! This is reality!\" Grease aggressively hounds him.",
  
        "With another thump, the boy is catapulted backward by more of Grease's attacks—quick, heavy, and merciless. It's all because he possesses an overwhelming force.",
  
        "Grease thinks he has it all figured out: The tiger doesn't have to be cunning to kill a hare. He just needs strength. By pushing back, it makes it impossible for the boy to fight—and he's destined to fall apart.",
  
        "But this is all wrong.",
  
        "\"Hgh?!\" Grease whines as blood erupts from his chest.",
  
        "He takes notice of a laceration—one that breaks past the surface of his skin. Grease halts in place for a split second, but he recovers fast enough to knock his enemy back in the next instant.",
  
        "\"It's hopeless! You can't get me!!\" he shrieks, even as his flesh is shredded down to his bones.",
  
        "But his wounds begin to bubble up and heal in the next beat.",
  
        "\"This is true power! This is true strength!!\" Grease starts to accelerate, slashing his weapon through the air, even as blood spouts from his body.",
  
        "He appears as a flash of scarlet light.",
  
        "Ebony and crimson—the two colors clash, causing the one in black to get slung back and the one in red to spew fresh blood.",
  
        "Their battle is too quick for the human eye to catch, and the afterimage of crimson and the backward movements of ebony are the only indicators of something uncanny in the making.",
  
        "Their skirmish doesn't last long. There's a clear power imbalance, and it's easy to guess that the figure in black would be the one to break. It's a fight that the one in red shouldn't have lost—slinging his sword on repeat and pulverizing the other into submission with his cataclysmic strength.",
  
        "But why?",
  
        "Why does he look unfazed...?",
  
        "\"Why... why can't I hit you...?\"",
  
        "The boy in black hasn't changed from the beginning of the fight. He's barely unleashed any magic or moved on his own accord, instead choosing to go with the flow and let Grease fling him around. It's as if he's a fallen leaf swept away in a rapid stream.",
  
        "Except he's not completely passive. He uses the momentum of these blows to land a direct hit—without seeming showy or expending any unnecessary energy.",
  
        "It's natural. As if it's supposed to happen.",
  
        "\"Terrible,\" states the boy in black, staring down Grease and looking as if he can read his thoughts.",
  
        "\"You know nothing... Nothing, you bastard!\" Grease barks back, pooling every bit of magic into his body and sword before taking his shot.",
  
        "He's ready to eliminate this boy, even if it costs him his life, raring for the biggest assault of his existence.",
  
        "\"No more games.\" Grease is sliced in two—by an unconstrained swing of a sword. It's hurled down on him with the ease of a walk in the park. A singular stroke bisects it all—his sword, his enhanced magical powers, his muscular physique.",
  
        "The viscount thought the reason behind the boy's advanced swordplay was pure skill—not magic, strength, or speed. But he's wrong.",
  
        "\"What is this...?\" It's a single stroke that destroys everything.",
  
        "Grease watches the blade cut through his sword, his magic, his flesh, and his bones as he stands on the verge of death. It's a strike fortified with impenetrable magic, titanic strength, sonic speed, and most importantly... natural talent.",
  
        "It's perfect.",
  
        "The boy in black has everything at his disposal. But he chose not to use all of it until now.",
  
        "Nothing could withstand that single stroke containing every ounce of his power.",
  
        "\"I guess... this is it...,\" mutters Grease as blood rushes out of him, and his upper body topples and hits the ground. There's a beat before his other half crashes to the floor.",
  
        "Grease tries to regenerate the bisection, but nothing is salvageable. His flesh is putrid and rotten, excreting black fluid that soaks the area around him.",
  
        "Ebony looks down. Grease glances up.",
  
        "Having crossed swords with the boy in black, the viscount understands that one's temperament can be seen through one's swordplay. His opponent appears as a serious, naive nobody—who trained with blood, sweat, and tears to reign victorious in battle.",
  
        "I thought he was just a brat who knew nothing, but I was wrong.",
  
        "His enemy had known everything and had still chosen to fight.",
  
        "Powerless, he thinks of himself. He's been powerless for his entire life. He's tried to succeed but returned empty-handed, while this whelp in black...",
  
        "\"Mi... llia...\" Grease groans, reaching for a dagger encrusted with a blue jewel and closing his eyes.",
  
        "As consciousness slips away from him, he sees the smiling face of his beloved daughter who passed long ago.",
  
        "Anyway, that's how we ended our slaughter of some bandits—I mean, our little rescue mission.",
  
        "I found my sister totally unconscious, so I undid her chains and left her there, which contributed to her crankiness when she returned home the next day. But she's a real tough cookie—tough enough that the wound on her hand almost healed overnight.",
  
        "After a hectic week or so of hospital treatments and follow-up investigations, my sister finally made her way to the capital—though she pestered me more than usual during that time for some annoying reason.",
  
        "The girls in the Shadow Garden were busy, conducting their own research, taking care of the remaining bandits, and other stuff. Oh, right, we're not calling them bandits. Whatever. The Cult. I mean, they're all thieves in the end.",
  
        "But that geezer with red eyes was outstanding. I mean, he inspired me to come up with \"then we dive deeper,\" which sounds like something a shadowbroker would say. I owe him my thanks. I would've loved to have him play a supporting role to my part as an eminence in shadow.",
  
        "This was a must-see performance. My ability to improvise and portray a master puppeteer was off the rockers. It's a real shame there wasn't a live audience. But I only have to wait two more years—which is when I go to the capital. You know the one. It's a world-famous metropolis and the only city in this country that houses one million people.",
  
        "I bet protagonists are a dime a dozen, and there might be Final Bosses, too.",
  
        "There's bound to be conspiracies, rebellions, and incidents—none of which would ever happen in the boonies. And that's when the mastermind bursts onto the scene... Huh. Now that I think about it, I guess I'm just a toad who feels cocky about beating some bandits. At this moment in time, my prologue hasn't even been written.",
  
        "And then one day, Alpha and the other girls gather before me, just as I'm yearning to get stronger for school, which is two years down the line. They want to share their reports on the Cult and lab findings on the curse and all that jazz.",
  
        "It's unusual to have all seven of them in a room at once, especially since it seems they've got their hands full as of late.",
  
        "Geez, go easy on the research and investigations. I mean, it's all pointless anyway, I think as I listen to their reports.",
  
        "Here's a simple summary of their findings.",
  
        "Their first claim is that the heroes who slayed Diablos the demon were all women, which is why they're the ones who suffer exclusively from the curse.",
  
        "How creative. But I hate to break it to you that all the heroes were men in the most common theory. Oh, wait, I bet they came up with that since the Shadow Garden is comprised of seven women apart from me.",
  
        "Their next report was on how the curse was most common among elves, followed by hybrid beasts and then humans. According to their research, it has to do with the life spans of the respective species. With humans living short lives with weak traces of the heroic bloodline, they're least susceptible to the curse. On the other hand, elves have long life expectancies with potent concentrations of blood, which makes them the most prone to fall victim to the curse. The therianthropes, or hybrid beasts, are in the middle.",
  
        "Now that I think about it, I'm the only human in the Shadow Garden, and I've never been possessed. Besides me, we have two therianthropes and a posse of five elves—and all seven have been possessed. You know, they did a stellar job coming up with this backstory.",
  
        "And then they proceed to report on a bunch of other things, which I pretend to absorb.",
  
        "They move on to their reports about the Cult, which is supposedly a massive organization that operates on a global scale. Fascinating.",
  
        "In terms of being the possessed or cursed or whatever, they tell me the Cult calls them \"compatibles,\" and their members are supposedly going the extra mile to locate, acquire, and wipe them from existence or some crap.",
  
        "Anyway, they suggest that the Shadow Garden scatter across the world to prevent this from spreading. Their plan would leave me with one rotating subordinate, the rest of them scattering to every corner of the world to protect the possessed, investigate the Cult, and sabotage their activities.",
  
        "When they suggest this new plan, it hits me all of a sudden: They must have realized that the Cult doesn't exist.",
  
        "They're through with this stupid charade and demanding their freedom. What else could scattering across the world mean? I'm guessing they feel indebted to me for curing them, which is why they're going to stick with me on a rotating basis. I just have to deal with it. I know that's what they're trying to tell me.",
  
        "I'm bummed out. In my past life, the kids idolized the heroes as much as I adored masterminds—until we grew up, and they didn't even notice that they'd forgotten all about their precious heroes. I was left alone. I guess the girls have grown up, too.",
  
        "I'm feeling all soppy but agree to send them on their way. I never planned on having seven members to begin with. If they leave me with one subordinate, that's enough for me. I see them off, and we reluctantly exchange good-byes.",
  
        "I make a vow to myself: I'll never stop trying to become a mastermind, even if that means I have to face this world alone.",
  
        "She no longer fears killing others.",
  
        "Beta whips her inky katana, splattering congealed blood off her blade and onto the ashen ground in a clean line. She stands cloaked in the darkness of night and surrounded by a group of soldiers lying facedown.",
  
        "\"End him,\" orders Beta.",
  
        "The girls in black bodysuits pierce their blades into the guard. One of their hands in particular shakes violently, but it doesn't stop the girl from thrusting her sword into his pressure point.",
  
        "\"Guh... Gaaaah!\" shrieks the soldier with his final breath, causing her blade to freeze in place.",
  
        "It's the type of cry that'll haunt her in her sleep until she becomes accustomed to killing.",
  
        "Beta envelops the girl's hands on the helm with her own before giving the blade a sharp twist. Together, they feel the soldier's life leaving his body.",
  
        "\"Ah, ahhh...!\" gasps a voice.",
  
        "This time, the cries are the girl's.",
  
        "Beta wraps her arm around her subordinate's trembling shoulders and issues her next instructions. \"Secure the target.\"",
  
        "The group makes its way to the carriage, boarding the loading deck. Following the shrill sounds of a chain snapping, the girls emerge from the wagon with a dark mound of rotting flesh.",
  
        "It's still breathing.",
  
        "\"Return to Lady Alpha—fast.\" They haul the mound, carrying it tenderly, and start to pick up speed, followed by the member of their order previously nestled in Beta's bosom.",
  
        "Beta squints slightly, watching them go.",
  
        "She's raising them well.",
  
        "These girls used to know nothing about combat. They'd never held a sword, and it goes without saying that they'd never murdered anyone before meeting her.",
  
        "Beta is reminded of her own past, and old memories begin to resurface.",
  
        "She still remembers how it felt when she killed for the first time—her sword piercing their heart, their hand grabbing hers. Beta couldn't believe the strength of their grip even as they suffered a fatal wound.",
  
        "\"There's a short period of time when people can move after they've been stabbed through the heart. Don't let your guard down. Hey, Beta, are you listening?\"",
  
        "Beta was listening to Alpha's calm voice but couldn't understand what she meant for the life of her.",
  
        "She was paralyzed with fear—incapable of moving or thinking.",
  
        "\"You're impossible.\"",
  
        "The head of her enemy soared through the air.",
  
        "Alpha had beheaded him.",
  
        "The corpse dropped to the floor, spurting blood that splatted Beta, and large teardrops fell from her eyes.",
  
        "\"Find a reason to fight.\"",
  
        "Those words sounded so cold.",
  
        "Beta was a child who had trouble doing things on her own.",
  
        "After joining the Shadow Garden, she always followed Alpha around. After all, they were old acquaintances, and she knew she would go down the right path if she stuck by Alpha's side.",
  
        "But Beta couldn't find a reason to fight by following Alpha's footsteps—or understand the importance of finding said motivation. As a result, she couldn't get used to the idea of murder, vomiting violently after killing someone on a mission and shaking in fear every night as she tried to fall asleep. It wasn't unusual for her to wake up screaming in the middle of the night.",
  
        "On one particular evening, Shadow approached the tormented girl.",
  
        "\"Do you seek wisdom...?\"",
  
        "\"Y-yes?\" Beta answered all jittery as she cocked her head to the side.",
  
        "In her eyes, he was enigmatic and extremely powerful.",
  
        "\"If you seek wisdom... I shall give it to you.\"",
  
        "He might mean the knowledge of easing my emotional turmoil from murdering others, she thought.",
  
        "With great expectations, Beta nodded. \"I—I want wisdom.\" Her voice trembled.",
  
        "\"Then I shall give it to you...\"",
  
        "Shadow began telling a story. \"Once upon a time, in a faraway place, there was an old man and an old woman...\" It was an ordinary fairy tale—no smidgen of wisdom or anything else.",
  
        "What the heck?",
  
        "She wasn't sure how to respond—not that she was brave enough to oppose the one revered by Alpha—and shut her trap to listen to his story. It was more interesting than she'd initially imagined. In fact, she realized she'd been so absorbed in the tale that she'd forgotten the time.",
  
        "That evening, Beta had a deep, peaceful night's rest.",
  
        "And ever since then, Shadow recited a bedside story to Beta before she went to sleep.",
  
        "Beta had always been a bookworm, but she'd never heard any of his tales before. They were gripping and original to her ears. Time flew by as she listened to them, and she'd be fast asleep in no time—and stopped jolting awake in the middle of the night. Her favorites were \"Cinderella\" and \"Snow White.\"",
  
        "This may have been around the time Beta began chasing Shadow with her eyes.",
  
        "She noticed she was spending more and more time around him. At first, she observed him with a timid gaze. But after a year had passed, Beta was attached to him at the hip.",
  
        "Shadow was indispensable to the Shadow Garden—absolute strength, knowledge, and wisdom. His unconditionality comforted Beta. Soon enough, she found he'd become a necessity to her, too.",
  
        "She realized her doubts had disappeared somewhere along the way.",
  
        "Without Shadow, Beta would have been killed for being possessed.",
  
        "She'd been disowned by her family, chased out of her home country, and this series of tragedies made Beta slow in processing her new situation. She'd lost too much to notice her gains.",
  
        "With her skepticism gone, Beta was able to realize something: Shadow had given her a new life and strength.",
  
        "She could feel this truth swelling in her heart.",
  
        "Beta had found a reason to fight.",
  
        "She began keeping a journal to write about him every day—for her to keep in touch with her memories and feelings, for her to never doubt anything again.",
  
        "Beta had found a reason to live.",
  
        "At first, she'd jotted down words and adjectives, but she noticed it had turned into sentences, and that flourished into a story somewhere along the way.",
  
        "The faint sound of movement brings Beta back to reality. She unsheathes her sword before approaching the loading deck and peers under the wagon.",
  
        "\"Eek!\"",
  
        "She locks eyes with a young soldier about her age.",
  
        "He panics and drags himself out of the confines, trying desperately to escape.",
  
        "He didn't know a thing when he chose to guard the carriage hauling the possessed—and he will know nothing in death.",
  
        "\"S-stop...!\" Beta swings her sword down without hesitation, and blood squirts out of his neck as he sprints for his life.",
  
        "He staggers a few more steps before collapsing to the ground. Swiping the blood spatter off her cheek, Beta gazes at the night sky, where a full moon peeks out from between the clouds. Under the moonlight, she smiles innocently—as if she's a lovely flower fraught with danger in the night.",
  
        "Beta has no doubts.",
  
        "If it would make him happy, she would even walk down the path of evil."
      ],
      "c3": [
        "I turned fifteen and started attending the Midgar Academy for Dark Knights at the royal capital. This academy is known as the cre me de la cre me of schools on our continent and where promising knights gather not only from this nation but all over the world. I kept my grades on the meh tier to blend in with the crowd and my eye on the protagonists of my dreams.",
  
        "One of them is Princess Alexia Midgar, the biggest fish of them all.",
  
        "Honestly, even a chimpanzee would know she's on the top tier.",
  
        "I've heard there's an ultra-famous super–big shot named Princess Iris Midgar, but she already graduated, to my chagrin.",
  
        "Anyway, I'll have you know that I unlocked a special event with Princess Alexia... er, I mean, my punishment for losing a game. Yeah, you've heard that right. I'm about to take part in your ye old punishment of confessing to a girl.",
  
        "Which brings us to the rooftop of the school. I face Princess Alexia from a distance.",
  
        "Her platinum hair is cut straight across at her shoulders, and her red eyes are almond-shaped and, um, pretty? And she looks all aloof with her perfect face. It's like Yeah, yeah, we get it already. She's gorgeous. Yeah, whatever.",
  
        "I hate to break it to you, but I'm bored of beautiful women, thanks to Alpha and company. I prefer a touch of ugliness. It makes you unique, you know.",
  
        "Anyway, I'm not the only reckless challenger who's gone after Alexia. It's been two months since the beginning of school, and more than a hundred schmucks have already tried to win her over.",
  
        "And all of them were met with one bitter phrase: \"I'm not interested.\"",
  
        "I mean, I get it. I'm guessing she's got a political marriage or something lined up for her when she graduates. I bet she's trying to say she doesn't have time to engage in child's play.",
  
        "That said, the aristocratic students in love with her share the same fate—political marriage and all. But I think that's why they want to have a little fun while they're still in school.",
  
        "Well, it doesn't matter either way. In the end, it's nothing but the amusement of those who know nothing of the shadow realm.",
  
        "And it's my duty as a background character to join in on this charade. To get brutally rejected by the most popular girl in school? I can't think of a role more fitting for an extra. If I can get through this event and play the role of a real loser, I will become my ideal and take another step toward becoming a hidden mastermind.",
  
        "I stay up all night to prepare for this moment. What should I say? How should I confess to her...? This is gonna be the greatest confession by a minor character of all time.",
  
        "Choosing the right words is a given. But I take it a step further by experimenting with articulation, pitch, and vibrato. I finally master the ultimate confession.",
  
        "On this day, at this very moment, I'm standing on the battlefield of a lifetime.",
  
        "Ready, fight.",
  
        "It's a momentous battle for a background character.",
  
        "Sure, shadowbrokers have their own way of combat, but fighting as a side character creates a breed of its own.",
  
        "Which means I'm gonna pull out all the stops as one.",
  
        "I'm secure in my decision when I turn toward her.",
  
        "Princess Alexia... She's standing there looking all high-and-mighty, but I could unsheathe my sword and detach her neck from her torso in a heartbeat. You're a human like the rest of us.",
  
        "Watch closely.",
  
        "I present to you, the greatest confession in the world!",
  
        "\"Pwinshesh A-A-A... Alexia.\" Did you hear how I stuttered on the A-A-A? And that staccato? I threw in a bit of vibrato, changed pitch midway through, and added a lisp to Pwinshesh to give a convincing performance.",
  
        "\"I—I love you...!\" I lower my eyes to evade her gaze, making sure my knees are knocking against each other. \"W-will you be my girlfriend...?\"",
  
        "I choose to go with your average confession—cliché , if not boring. But I let my pitch and tone go hog wild. And that upward lilt at the end? It shows my complete lack of confidence.",
  
        "It's perfect...!",
  
        "This is the performance of my dreams. I'm satisfied! I'm completely satisfied!",
  
        "\"Sure.\"",
  
        "\"Huh?\" I'm pleased with myself and just about to leave when I experience an auditory hallucination. \"What did you just say?\"",
  
        "\"I said... sure.\"",
  
        "\"Um, okay.\" Something's not right.",
  
        "\"L-let's head back to campus together.\"",
  
        "From there, I walk Princess Alexia to her dorm room. After a \"See you tomorrow\" with a smile on my face, I head to my own room, bury my face in my pillow, and scream at the top of my lungs.",
  
        "\"When did I become the protagonist of a roooooooooooomcom!!\"",
  
        "\"It's weird, right?!\"",
  
        "\"Bizarre.\"",
  
        "\"Absolutely bonkers.\"",
  
        "It's the next day. I'm having at lunch in the cafeteria and just told my two friends about yesterday. We're all in agreement: There's definitely something strange going on.",
  
        "\"No offense, but Princess Alexia is way out of your league. If she said yes to me? I'd still think it was fishy. Right?\"",
  
        "That's Skel, the second son of the Baron Etal. He's slim and tall, and though it seems he cares about his outer appearance, he has zero style. If you look at him from far away, he could trick you into thinking he's hot. Erm, maybe not. I take that back.",
  
        "Either way, Princess Alexia is way out of Skel Etal's league, too. I know this for a fact, because I consider him my \"minor character\" friend.",
  
        "\"If Cid's good enough for her, I bet I would've been good enough, too. Gah, I really should have confessed to her earlier.\"",
  
        "That's Po, the second son of the Baron Tato. He's short and somewhat stocky. You know how there's one potato-esque guy on every baseball team? That's basically him.",
  
        "It doesn't matter if you look at him from afar, from up close, or from any and all angles. With his looks, he could never scam anyone into thinking he's cool. It goes without saying that he has absolutely no chance with Princess Alexia. After all, he's your cold, hard background character.",
  
        "Oh, and by the way, my name's Cid. When I'm playing the part of Cid Kagenou, I'm also playing the part of your average Joe.",
  
        "\"To be honest, it's terrible. I have a feeling she's got an ulterior motive, which freaks me out. Plus, we basically live in two totally different worlds.\"",
  
        "\"Yeah, I hear you. And unlike me, you're not blessed in the looks department. I'd give it a week before she calls it quits.\"",
  
        "\"Three days. Just look around you.\"",
  
        "I scan the cafeteria and see everyone whispering and observing me.",
  
        "\"Over there! That's...\"",
  
        "\"You're kidding! He's super average...\"",
  
        "\"It must be some kind of mix-up...\"",
  
        "\"Oh, I think he's pretty cute...\"",
  
        "\"No way!\"",
  
        "Et cetera.",
  
        "\"I heard he blackmailed her... according to Skel Etal.\"",
  
        "\"I'll kill that son of a bitch...\"",
  
        "\"And make it look like an accident during practice...\"",
  
        "\"If I don't do it now, I'd bring shame to mankind...\" And the like.",
  
        "I've got pretty good ears, and I'd caught almost all their chatter. I take a moment to glare at Skel.",
  
        "\"Hmm? What's up?\"",
  
        "\"Nothing.\"",
  
        "I guess friendships between minor characters can be fickle and fleeting.",
  
        "\"But seriously, what do I do? It'd be weird if I mentioned breaking up when I just confessed my love for her.\"",
  
        "And it would break character to dump a princess—though I guess people in this role wouldn't date them in the first place.",
  
        "\"Come on, give it a try. If you're lucky, you might make some nice memories,\" Skel encourages with a sly grin.",
  
        "\"He's right. Let's say this is all a misunderstanding. You still get to date a princess. Don't waste your time dealing with bullies,\" Po adds.",
  
        "\"It doesn't work that way.\"",
  
        "Even as we waste time now, rumors about me will continue to circulate around the school—meaning I'm getting pushed further and further away from my existence as an average nobody.",
  
        "\"But now that you two are actually going out,\" Po muses, \"you've gotta stay quiet about losing that game.\"",
  
        "\"Yeah. I can see things getting messy if word got out. Please don't say anything. I'm looking at you, Skel.\"",
  
        "\"Me? I'd never say anything!\"",
  
        "\"I'm serious.\" I sigh as I reach for my daily lunch for broke aristocrats—which costs exactly 980 zeni. I'm starting to get annoyed by the vibe of this place. I'm just going to eat as quickly as possible and skedaddle out of here.",
  
        "Erm, well, that was the plan.",
  
        "But a group of maids set the lunch course of the super-duper filthy rich—which costs a whopping ten thousand zeni—in the seat across from me with marked efficiency.",
  
        "\"Is this seat available?\"",
  
        "Enter Alexia. Ugh, I knew she was here. That's why I was trying to scarf down my lunch.",
  
        "\"P-p-pwease do!\"",
  
        "\"Y-y-you can sit here! It's our pleasure!\"",
  
        "Skel and Po respond, basically shriveling into nothing. These are the same guys who were talking big game about how they could date her if they wanted to. Yep, just as expected of my friends.",
  
        "\"Yeah, sure. Go ahead,\" I say to Princess Alexia, who's waiting for my answer.",
  
        "\"I don't mind if I do,\" she replies, taking a seat.",
  
        "\"Nice weather we're having.\" It seems like an obvious way to fill the silence.",
  
        "\"Indeed.\"",
  
        "Our innocuous conversation continues, and with the elegant movement of her hand, she starts eating her extravagant lunch.",
  
        "\"There's so much food in the super-duper filthy-rich lunch course.\"",
  
        "\"Yeah. I can never finish it.\"",
  
        "\"What a waste.\"",
  
        "\"I would be fine buying a cheaper lunch, but if I don't get the expensive one, the others might feel too shy to ask for it.\"",
  
        "\"Uh-huh, I see. Can I eat your leftovers?\"",
  
        "\"Yes, but...\"",
  
        "\"Oh, don't worry about being polite around me. I mean, this is the section for low-ranking aristocrats.\"",
  
        "Alexia looks baffled as I swipe the meat from her main dish and cram it into my mouth before she can get a word in edgewise.",
  
        "Oh, it's good.",
  
        "\"Um...\"",
  
        "\"Pass the fish.\"",
  
        "\"Wait...!\"",
  
        "Whoo-hoo, it's my lucky day. Thanks to the princess, I get to fill my stomach, which is blissed the hell out. You might notice that my attitude toward her has changed from yesterday and that I'm acting super-casual around her.",
  
        "And if you want to know why...",
  
        "It's 'cause I'm in the middle of Operation: Get Dumped ASAP!",
  
        "\"Sigh... Sure, whatever.\"",
  
        "\"Thanks for the meal. See ya later.\"",
  
        "\"Halt!\"",
  
        "Dammit. My plan to dine and dash fails, and I reluctantly slink back to my seat.",
  
        "\"I assume you're taking Royal Bushin for your practical elective in the afternoon.\"",
  
        "\"Yurp.\"",
  
        "The academy requires its students to take general courses in the morning and practical electives in the afternoon. The former takes place in set classrooms, but the latter is a mishmash of students from all classes and grades. We're basically allowed to choose one of many weapon arts electives that we feel suits us best.",
  
        "\"I'm in that class, too. I thought it'd be nice to take it together.\"",
  
        "\"Yeah, no. I mean, you're in section one. I'm in section nine.\"",
  
        "Bushin arts is so popular that it has nine different sections, with fifty students in each, divided up by skill level. For now, I'm performing poorly enough to be in section nine, so I can scope things out. I plan to eventually settle for section five.",
  
        "\"No, it's okay. With my recommendation, I got you into section one.\"",
  
        "\"It's totally not okay. I know that for a fact.\"",
  
        "\"Would you rather that I enroll in section nine?\"",
  
        "\"No, stop. That'd make me look bad.\"",
  
        "\"It's one or the other. Choose.\"",
  
        "\"No.\"",
  
        "\"This is a royal order.\"",
  
        "\"I'm off to section one.\"",
  
        "With that, lunch is over. Skel and Po were completely still from start to finish, basically melting into the background.",
  
        "\"This place is huge...,\" I marvel the moment I step into the classroom for section one. I can't help myself.",
  
        "To put it simply, it looks like a ginormous gymnasium. In addition to the standard locker room, it is fully equipped with a shower room, a cafe , and a maid who opens the entrance, which technically makes it a manually operated automatic door.",
  
        "As for section nine, we meet outdoors—rain or shine, sleet or snow. There isn't even a door for a maid to open, much less a maid.",
  
        "To avoid getting bullied by the other students, I hastily change into my uniform and wait for Alexia in the corner for a while.",
  
        "\"Let's loosen up,\" she suggests as soon as she enters the room in her Bushin uniform.",
  
        "Think plain cheongsam, one of those tight-fitting dresses you might see in a movie about the 1920s, with a high leg slit. That's the uniform for girls. Hers is black, which indicates she's one of the strongest fighters. In Bushin, each color represents a different level of strength: Black is at the top, and white is at the bottom.",
  
        "I'm in white, obviously. And since I'm the only one in white in this entire room, I stick out like a sore thumb.",
  
        "I ignore the stares of other students—70 percent hostile, 30 percent curious—and warm up with some light stretches.",
  
        "\"Interesting,\" remarks Alexia, mirroring my movements.",
  
        "In this world, it's common knowledge that it's beneficial to loosen your muscles before working out. But with no how-to guides on stretching, everyone does it in their own way. I mean, if you're a die-hard for sports, you'll hurt yourself if you don't stretch properly. I've heard of others using magic to force their muscles to loosen up, but this still affects their performance.",
  
        "Alexia is well versed in that sense, which is nice. I mean, I'm a high-maintenance purist when it comes to battle. Like, I won't lose to the average pretentious snob.",
  
        "We're getting ready when class begins.",
  
        "\"Starting today, we have a new friend joining us,\" our instructor starts, introducing me.",
  
        "\"I'm Cid Kagenou. It's nice to meet you.\"",
  
        "There isn't a hint of friendliness in my classmates' eyes.",
  
        "Ah, section one. A quick glance around, and I can already spot some VIPs. That hot guy over there is the second son of a duke, and that beauty is the daughter of the current leader of the Dark Knights. Then there's our teacher, who's the fencing instructor for the country. And on top of that, he's a young blond hunk who's only twenty-eight years old.",
  
        "\"Let's welcome him to our class.\"",
  
        "With that, we start training, suppressing our magic through meditation first before practicing our swings and going over the basics of swordplay.",
  
        "Nice, nice. I'm all for reviewing the basics. They're important to know. In section nine, we'd wave our swords for a few seconds and play-fight the whole time. It's nice to seethe strongest fighters value their fundamentals. Plus, all the students are skilled. I can say it's a neat environment—and I'm not trying to suck up or anything.",
  
        "And most importantly, the techniques taught in this class are hyper-logical. It feels great to take part in training that doesn't leave me bored out of my mind.",
  
        "\"Do ya like the Royal Bushin method?\" Our hunky blond instructor approaches me.",
  
        "I think his name is Zenon Griffey.",
  
        "\"Does it seem that way?\"",
  
        "\"Yeah, you look like you're enjoying yourself.\"",
  
        "\"I guess I am.\"",
  
        "Mr. Zenon grins in an easy-breezy type of way. \"As you know, the Royal Bushin method is a relatively new fighting style, a deviation from traditional Bushin. There was some resistance at first between the traditional supporters and the trailblazers. But thanks to Princess Iris, it's now being recognized as the artistic heir of its traditional counterpart.\"",
  
        "\"And I hear you're one of the swordsmen who's spread the art throughout the country, Mr. Zenon.\"",
  
        "\"Yeah, but my contributions are nothing compared to Princess Iris's. In any case, the Royal Bushin method practically raised me, which is why it makes me happy to see others enjoying it, too. Oh, I'm sorry. I didn't mean to interrupt you.\"",
  
        "With that, Mr. Zenon goes to check in on the other students. I totally understand his feelings. I mean, I get all giddy when Alpha and the other girls watch me show off my swordplay. I've developed these techniques on my own, which makes me all the more excited when others take them on, too.",
  
        "\"What did you two talk about?\" Alexia asks.",
  
        "\"The Royal Bushin method.\"",
  
        "\"Hmm. We're going to spar next. Let's pair up.\"",
  
        "Sparring is basically a form of light training where we review techniques, reversals, and battle processes without actually hitting our opponent.",
  
        "\"Aren't you too strong for me?\"",
  
        "\"It'll be fine.\"",
  
        "We pick up our wooden swords and start exchanging blows.",
  
        "I swing, and she blocks.",
  
        "She strikes, and I guard.",
  
        "We don't hit each other, moving at a sluggish pace, and skimp on magical energy. All around us, the other pairs are locked head-to-head in all-out fights, blasting each other with spells. But to my surprise, Alexia is matching my pace.",
  
        "No. That's not it... This is normal for her. After all, the purpose of this activity is to review our strategies, meaning that speed and power are pointless. Alexia is focused on this goal—and that alone. I can tell by the way she handles her sword.",
  
        "This entire country sings the praises of Princess Iris, Alexia's older sister—brilliant and fiendish, the strongest combatant in the kingdom. On the other hand, they don't have much to say about Alexia. She possesses magic and forthright techniques, but she's inferior to her sister. That's what people generally say when talking about Alexia.",
  
        "But as I spar with her, I think she's good. She adheres to the basics and grasps the foundations of combat, though it feels uninspired.",
  
        "Yeah, it's run-of-the-mill. But that's the fruit of her labor: Her swordplay is polished, refined, and devoid of all excess. That's the proof that she's mastered the basics step-by-step.",
  
        "Delta, you could learn a thing or two from her, I think, engaging in a fake conversation with a certain hybrid beast—one whose swordsmanship I find hard to forgive.",
  
        "\"Your swordplay isn't bad,\" Alexia notes.",
  
        "\"Thanks.\"",
  
        "\"But I don't like it.\"",
  
        "She likes lifting me up to bring me down.",
  
        "\"It's like I'm watching myself fight. Let's stop here for today.\"",
  
        "She begins packing up, leaving it at that. Class is over.",
  
        "Never in my wildest dreams did I expect to get through this elective without a hitch. If I can just get my stuff together, change, and book it to my dorm room, I might be able to...",
  
        "\"Hold it.\"",
  
        "My bubble bursts.",
  
        "Alexia drags me by the nape of my neck.",
  
        "\"This is your answer, I'm guessing,\" observes Mr. Zenon, who's standing in front of me for some reason.",
  
        "\"I've decided to go out with him.\"",
  
        "\"You can't keep running forever,\" he warns, narrowing his eyes.",
  
        "\"I'm just a kid. This situation is too grown-up for me,\" Alexia replies, following it with a pompous burst of laughter.",
  
        "This is enough for me to figure out how I could get into this section and why she's chosen to go out with me. Watching their cutscene play out and melting into the background, I pray these two protagonists won't drag me into their drama.",
  
        "\"I know that Mr. Zenon is your fiancé and that you're pushing the onus on me.\" I confront Alexia after school behind the academic building.",
  
        "\"He's not my fiancé , just one of the suitors,\" Alexia corrects, looking all calm and composed.",
  
        "\"It's the same thing.\"",
  
        "\"It's not. He keeps pressing the issue as if it's a done deal, and it's stressing me out.\"",
  
        "\"That has nothing to do with me. I hate to break it to you, but I have no plans to get sucked into this mess.\"",
  
        "\"You're awfully cold for a lover.\"",
  
        "\"A lover? Come on. You just needed a red herring to take the fall for you. Isn't that right?\"",
  
        "\"Fine. But that goes for both of us,\" she quips, a devious smile spreading across her face.",
  
        "\"Both of us? What the hell are you talking about?\"",
  
        "\"Playing dumb, huh? Mr. I-confessed-to-a-girl-as-a-punishment, Cid Kagenou.\" Her grin broadens.",
  
        "Okay... hold up. Let's chill out for a sec.",
  
        "\"Oh, to play with the heart and purity of a maiden,\" she laments. \"How cruel.\"",
  
        "Says the girl without a trace of purity in her entire body. Alexia lets a few fake tears fall from her eyes.",
  
        "It's okay. I'm totally calm.",
  
        "\"I have no idea what you're talking about. Do you have any proof?\"",
  
        "Right, evidence first. As long as the guys didn't stab me in the back, it won't matter how suspicious she is of my intentions...",
  
        "\"I think his name's Po. When I approached him, he turned bright red and blabbed everything, including things I didn't ask about. Nice friend you've got there.\"",
  
        "I imagine myself beating him into a pile of mashed potatoes to regain my mental composure.",
  
        "\"Are you all right? Your cheeks look all puffy.\"",
  
        "\"I'm fine. I break into a smile 'cause I'm broken inside.\"",
  
        "\"Oh. Huh.\"",
  
        "\"But I'm not as bad as you.\"",
  
        "\"Hmm? Did you say something?\"",
  
        "\"Nothing. What do you want from me...?\"",
  
        "I have no choice but to accept defeat. My fatal flaw is choosing the wrong friends.",
  
        "\"Well...\" Alexia crosses her arms and leans against the wall of the academic building. \"Let's keep pretending we're together for now—until that man gives up.\"",
  
        "\"I'm only the son of a baron, you know. I'm not enough to stop him.\"",
  
        "\"I know. I just need to buy time. I'll figure something out.\"",
  
        "\"And I don't want you to put me in harm's way. I mean, the dude is a master swordsman. If things don't work out, I'm gonna get my ass handed to me.\"",
  
        "\"Stop whining,\" Alexia snaps before fishing some coins out of her pocket and scattering them onto the ground. \"Pick them up,\" she orders.",
  
        "Each coin is worth ten thousand zeni, and I count at least ten on the floor.",
  
        "\"What? Do I look like I'd be swayed by cash?\" I ask from all fours, carefully retrieving the coins one by one.",
  
        "\"You do.\"",
  
        "\"You're damn right.\"",
  
        "Eleven... twelve... thirteen coins... Oh, snap! I found another one!",
  
        "Just as I extend my hand to collect the last coin, she stomps on the change with her loafer.",
  
        "I look up at Alexia, and her red eyes bear down on me.",
  
        "I can see up her pleated skirt.",
  
        "\"Are you going to do as I say?\" she asks with a grin that oozes wickedness.",
  
        "\"Of course.\" I smile from ear to ear.",
  
        "\"Good dog.\"",
  
        "Alexia pats my head before briskly walking away with her short skirt billowing behind her. I wipe her footprint from the coin and gently place it in my pocket.",
  
        "Even as I attend the academy, I continue cutting down on sleep to keep training, but this fake courtship with Alexia is really sucking up my time.",
  
        "\"Come with me.\"",
  
        "With this order, I'm dragged into the classroom for section-one students in the Royal Bushin elective at the wee hours of the morning. We're the only ones here. The sun is streaming into the room, and it's peaceful.",
  
        "It's time for morning practice.",
  
        "Alexia swings her sword, and I follow suit next to her.",
  
        "She's very serious when it comes to practice. It's the one thing I don't mind about her. We never speak, just practice in absolute silence, and I'm not annoyed about spending time with her—for once in my life.",
  
        "\"Your swordplay is strange,\" Alexia comments. \"You've got the basics down. That's it, but...\" She pauses.",
  
        "I'm obviously subduing my strength, magic, and abilities as I slice through the air. Which leaves me with the fundamentals.",
  
        "\"...But I can't take my eyes off it.\"",
  
        "\"Thanks.\"",
  
        "I can hear the birds chirping outside, but I know they aren't whistling a tune to themselves. It's a war cry to claim their territory, which means they're really duking it out.",
  
        "\"But I still don't like it,\" Alexia adds.",
  
        "We don't speak after that. We just keep practicing.",
  
        "Two more weeks pass, and I'm somehow managing to survive as Alexia's \"boyfriend.\"",
  
        "Every once in a while, the other students will bully me, but it's nothing I can't handle. I'm just relieved Mr. Zenon hasn't beaten the living shit out of me or availed himself of any quick and savage tricks to erase me from existence.",
  
        "In fact, Mr. Zenon is polite to the two of us during class, instructing us as if he and I don't have beef with each other. He doesn't approach me to shoot the breeze anymore, but I would say he's a proper adult who can keep his work and private life separate.",
  
        "And then there's the royal pain in my ass.",
  
        "\"That jerkwad pisses me off. Thinks he's all that just because he's all right with a sword.\"",
  
        "Alexia acts nice to his face, but behind closed doors, she's a foulmouthed tornado.",
  
        "\"Uh-huh, yup. Whatever you say.\"",
  
        "I've turned into a yes machine. By this point, I know disagreeing only wastes time.",
  
        "\"Pooch, I'm guessing you saw his fake-ass grin, too.\"",
  
        "\"Yep, yep. I saw it all right.\"",
  
        "We're on our way home after school.",
  
        "Of late, we've gotten into the habit of taking a small detour down a quiet path through the forest on the way back to her dorm. I spend the whole time yessing her and seldom retain more than 10 percent of our conversations.",
  
        "It's sunset as we walk at an excruciatingly slow pace down the road. It should take ten minutes to walk its entirety, but it always takes us half an hour.",
  
        "There are days it takes so long that the stars come out, but I keep my cool. There are days when I feel like telling her to talk to a brick wall, but I show some self-restraint then, too.",
  
        "Patience, patience, patience. But there's one thing I feel I have to say.",
  
        "\"Hey, can I ask you something?\"",
  
        "\"What is it, Fido?\" Alexia sits on her favorite stump and crosses her legs.",
  
        "Don't just sit there. Let's get a move on, I don't say as I sit down beside her.",
  
        "\"What don't you like about Mr. Zenon? Objectively speaking, he seems like a home run of a husband.\"",
  
        "\"Have you been listening to me at all?\" Alexia asks, slightly vexed. \"I hate everything about him. His very existence.\"",
  
        "\"I mean, he's a hot expert swordsman with titles, prestige, money—not to mention a good work-life balance and personality. And he's popular with the ladies.\"",
  
        "Alexia snorts. \"Yeah, on the surface. Anyone could pretend. Take me, for an example.\"",
  
        "\"Wow, I'm suddenly completely convinced.\"",
  
        "Now that she mentions it, she's super-popular because she's the master at wearing a mask in front of others.",
  
        "\"That's why I don't judge people by their looks.\"",
  
        "\"Then what do you look at?\"",
  
        "\"Their flaws.\" Alexia smiles smugly.",
  
        "\"What a negative approach. It suits you perfectly.\"",
  
        "\"Why, thank you. And just so you know, I don't mind you, even though you've got nothing going for you.\"",
  
        "\"Thanks. I've never received a compliment that's made me feel worse.\"",
  
        "Alexia chuckles dryly. \"You're scum through and through, and I like it that way. It's also why I can't stand our instructor.\"",
  
        "\"What are his flaws?\"",
  
        "\"He doesn't seem to have any.\"",
  
        "\"Sounds like a keeper.\"",
  
        "\"I told you before: Perfect people don't exist. I bet he's either a big fat liar or totally messed up in the head.\"",
  
        "\"I see. Thanks for that totally arbitrary and biased answer.\"",
  
        "\"You're welcome, my flawed pooch. Now fetch!\" Alexia tosses a coin into the air, and I scramble to retrieve it.",
  
        "Whoo-hoo! Another ten thousand zeni. I'm gonna catch 'em all.",
  
        "I shove the coin in my pocket and return to Alexia, who's clapping her hands in delight.",
  
        "\"Good doggy.\" She rubs my head.",
  
        "Patience, I tell myself.",
  
        "\"Ooh, you hate this so much,\" she observes as she vigorously tousles my hair.",
  
        "I take this opportunity to remember she's the worst.",
  
        "\"I can see the disgust in your face,\" Alexia notes.",
  
        "\"I'm letting you see it.\"",
  
        "She giggles and gets up. \"All right. Let's head home.\"",
  
        "\"Yep, yep.\"",
  
        "\"And, Fido, note that I'm going to lodge my wooden sword into that damned instructor's face tomorrow. Make sure you're watching.\"",
  
        "This compels me to ask another question.",
  
        "\"Would you seriously do that?\"",
  
        "\"What do you mean?\" she replies, turning back to glare at me.",
  
        "I think I'm butting into something when I should stay in my lane. But I can't let this slide.",
  
        "\"Mr. Zenon is definitely stronger than you but not to the point where you wouldn't be able to fight back.\"",
  
        "I like the way she handles her sword. Her skills evolve every day with her efforts, one step at a time. But in an actual fight, there would be too many extra movements. I would hate to see it sully her swordsmanship, especially since I think it's good.",
  
        "\"You make it sound so easy. Even though you're the one wearing white.\"",
  
        "\"Don't mind me. It's just the ramblings of a white coat.\"",
  
        "\"Fine, I'll let you know the truth. It's not as easy as you think.\"",
  
        "\"Hmm?\"",
  
        "\"I have no talent. I was born with a significant amount of magical energy, and I've worked hard to get to this point. I think I'm all right now, but I know I don't stand a chance against a true genius.\"",
  
        "\"Maybe.\"",
  
        "\"I've always been compared to my older sister, Iris. Everyone expected great things from me. And more importantly, I respected Iris and wanted to be at her level. But I realized I'll never be as good as her. I mean, we weren't born on the same playing field. I tried my best to get stronger. But I'm guessing you already know how people describe my fighting style.\"",
  
        "There's a certain phrase that's always uttered when the two sisters are compared.",
  
        "\"The swordplay of an amateur.\"",
  
        "\"That's right. And yours is, too. How unfortunate.\" Alexia flashes me a lopsided smirk.",
  
        "\"I don't think it's unfortunate. I like your swordplay.\"",
  
        "Alexia reacts by holding her breath for a moment and scowling.",
  
        "\"I've been told that before. By Iris—when she beat me onstage at the Bushin Festival.\" Alexia curls her lips and imitates her sister: \"'I like your swordplay.'",
  
        "\"She doesn't understand me at all. I felt pathetic, and she had no idea. Ever since then, I've always hated the way I fight.\"",
  
        "Alexia smiles, but I don't know why. At the very least, I know she isn't happy.",
  
        "There's something I need to tell her. If I don't say it now, I'll be stabbing myself in the back.",
  
        "\"You know, I'm as apathetic as they come. If there was a catastrophe that wiped out a million people on the other side of the world, it wouldn't affect me. If you went nuts and became a serial killer, I wouldn't be bothered,\" I say.",
  
        "\"If I lost my mind, you'd be the first person I'd kill.\"",
  
        "\"But there are certain things I care about. They might be insignificant to others, but to me, they're more precious than anything. I live this life protecting these few things. Which is why I really mean what I'm about to tell you.\"",
  
        "One simple phrase.",
  
        "\"I like your swordplay.\"",
  
        "After a brief silence, Alexia replies, \"So what?\"",
  
        "\"Nothing. I guess the main takeaway is that it peeves me when other people tell me what I can and can't like. That's all.\"",
  
        "\"I see.\" Alexia pivots on her heels. \"I'm heading home alone today.\"",
  
        "And then she walks away.",
  
        "\"It's been a while since the three of us have eaten together,\" comments Po the Traitor.",
  
        "\"That's 'cause he was dining with the princess every day,\" adds Skel.",
  
        "\"Shit happens,\" I say.",
  
        "It's the first time in a long while that the three of us sit together in the cafeteria. Alexia isn't here, which is rare.",
  
        "\"Come on, Cid, cheer up.\"",
  
        "\"Yeah! Real men don't hold grudges, you know.\"",
  
        "\"We even bought you the lunch for broke aristocrats today, costing nine hundred and eighty zeni.\"",
  
        "\"Our treat! Let bygones be bygones, and let's be friends again.\"",
  
        "\"All right already.\" I let out a heavy sigh.",
  
        "\"Yeah, that's our man!\"",
  
        "\"Thanks for forgiving us, Cid.\"",
  
        "\"Whatever.\"",
  
        "\"So how far did you get?\" Skel asks, holding back his excitement.",
  
        "\"With what?\"",
  
        "\"Well, did you do the deed with the princess? You've been dating a whole two weeks, so you must've done something.\"",
  
        "I know we're about to have a dumb conversation, based solely on the fact that he said \"Do the deed.\"",
  
        "\"We didn't do anything. That would never happen.\"",
  
        "\"Huh. You're a friggin' wuss. I would've gone all the way for sure.\"",
  
        "\"Right? I would've smooched her—at the very least.\"",
  
        "\"I told you. Our relationship isn't like that.\" I deflect and nod through their conversation indifferently as I chow down.",
  
        "\"Can I have a moment?\"",
  
        "Enter Mr. Zenon, the blond-haired hunk.",
  
        "\"Yes, of course!\"",
  
        "\"By all means!\"",
  
        "With that, my two pals melt into the background again.",
  
        "\"Can I help you?\" I ask, slightly on guard. I'm wary that he might pull something while Alexia's not around.",
  
        "\"Indeed. You might have heard already, but Alexia hasn't returned to her dormitory since yesterday.\"",
  
        "This is the first I've heard of it. I'm guessing she's gone off on a journey to find herself or whatever. The timing seems about right for her age.",
  
        "\"I was searching for her this morning when I found this.\" Mr. Zenon holds out a loafer in one hand.",
  
        "It's Alexia's.",
  
        "\"There's evidence of a struggle nearby. The Knight Order is investigating this case as a potential kidnapping.\"",
  
        "\"No way...!\" I shout in torment as I vigorously fist pump in my mind.",
  
        "Ha! Serves you right, princess!!",
  
        "\"We narrowed the culprit down to the person who last came into contact with her.\" Mr. Zenon looks me square in the eye. \"The Knight Order would like to have a word with you.\"",
  
        "I notice the entire Order is in full gear, standing menacingly at the entrance of the cafeteria.",
  
        "\"I'm assuming you'll cooperate, right?\"",
  
        "That's when it hits me.",
  
        "This ain't good."
      ],
      "c4": [
        "I was interrogated in a room comparable to a detention cell and released after five days. It's evening now.",
  
        "\"Go on. Scram.\"",
  
        "They shove me out of the building and chuck my suitcase behind me. I'm in nothing but my underwear, and I rummage through my suitcase to change and shove my feet into my shoes. It takes me a while to get dressed. I'm guessing it has to do with the fact that all my fingernails were ripped off.",
  
        "When I get everything on, I heave out a big sigh and start walking. I stand out among the people on the busy street since I'm beaten up and drenched in my own blood.",
  
        "I sigh again. \"Chill out, relax. There's no point getting worked up over every little thing.\"",
  
        "I manage to stay calm by blocking the faces of the interrogating knights out of my mind.",
  
        "\"They were just doing their job.\"",
  
        "Their punches only left surface-level wounds on my body. If I felt like it, I could grow my missing fingernails back. But I don't, because I'm fully immersed in acting out my role as a nobody.",
  
        "\"Yeah, I'm always cool and collected.\"",
  
        "Right. Calm.",
  
        "I let out another long exhale, and my field of vision clears. I pay attention to my surroundings and sense strange shadows lurking behind me.",
  
        "\"Two of them are tailing me.\"",
  
        "The kidnapper hasn't been caught. Which obviously means that the state of Alexia's well-being is up in the air.",
  
        "Just because I've been released doesn't mean it's all sunshine and roses. They just don't have enough evidence to convict me, and my name hasn't been cleared yet.",
  
        "I trudge back to my dorm room, pretending to hang my head from exhaustion.",
  
        "\"Later...,\" whispers a quiet voice.",
  
        "It reaches my ears, accompanied with the faint scent of a familiar perfume.",
  
        "\"Alpha...?\"",
  
        "But I can't find her anywhere among the city folk scurrying past one another on the main road after sunset.",
  
        "When I flick the lights on in my dorm room, the silhouette of a girl emerges from the darkness.",
  
        "\"You must be hungry.\"",
  
        "Her black suit fits her perfectly, accentuating her feminine curves. She's holding out a sandwich with a thick slab of tuna in her hand from Tuna King, the famous restaurant in the capital.",
  
        "\"Thanks. It's been a while, Alpha. Where's Beta?\"",
  
        "I'm famished after not eating a proper meal in five days, and I devour the sandwich. Beta is the one who's supposed to be on rotation to assist me.",
  
        "\"She contacted me. What a mess.\" Alpha sits cross-legged on the bed.",
  
        "There's a nostalgic quality to her shiny golden locks that trail down her back and those blue eyes the shape of almonds. She's grown up since last time.",
  
        "\"Yep.\" I stuff the last piece of sandwich into my mouth.",
  
        "\"There's water in there.\"",
  
        "\"Thanks.\" I chug it from a large glass. \"Ahhh! I'm alive again.\"",
  
        "I strip off my jacket and shoes and dive into bed.",
  
        "\"Hey, at least change out of your clothes.\"",
  
        "\"Can't. Gonna go to bed now.\"",
  
        "\"Don't you know the position you're in?\"",
  
        "\"I'll leave the preparations to you.\"",
  
        "Alpha is brilliant. She'll prepare the best stage for our performance if I just let her do her thing. Until then, I'm gonna sleep... I mean, save up my energy.",
  
        "Alpha lets out a frustrated sigh. \"I'm sure you already know this, but they're going to think you're the culprit if you don't do something.\"",
  
        "\"True that.\"",
  
        "If the real culprit is never found, I can almost guarantee the next suspect in line will be punished. Especially since this involves the kidnapping of a royal. Someone has to die or else the case will never be closed.",
  
        "Ya gotta love the Middle Ages.",
  
        "\"Wake up. I've got more sandwiches.\"",
  
        "\"I'm awake.\"",
  
        "Alpha hands them over. \"Someone is trying to escalate the situation and frame you as the culprit.\"",
  
        "\"Huh. Like, I'm gonna be convicted even if they don't do anything?\"",
  
        "\"I'm guessing they want to settle this matter quickly, and an unassuming student from a poor noble family is the perfect target.\"",
  
        "\"Agreed. I would do the same thing.\"",
  
        "\"We can't trust the Knight Order.\"",
  
        "\"Has the Cult infiltrated them?\"",
  
        "\"Yes, without a doubt. The abductor is a member of the Cult. Their goal is to obtain high concentrations of the blood of the heroes.\"",
  
        "The girls are still pretending that there's a Cult—for me. What a great bunch.",
  
        "\"Is she still alive?\"",
  
        "\"If she dies, they won't be able to extract any more of her blood.\"",
  
        "\"True.\"",
  
        "\"Though I'm not sure why you decided to woo the princess.\" Alpha glares at me.",
  
        "\"That's not how it happened.\"",
  
        "\"I'm sure you have your reasons—reasons you can't tell us.\" I don't let out another peep and avert my eyes to avoid her gaze. I have no real reason, of course.",
  
        "\"I understand. I know you're struggling with something deep down in your heart.\"",
  
        "How do I respond when that's totally not the case?",
  
        "\"But I hope you can trust us even a little bit more. If you told us about this earlier, it wouldn't have gotten out of hand. Don't you agree?\"",
  
        "\"Y-yeah.\"",
  
        "\"It's okay. Our job is to make sure you're covered,\" she adds with a smile. \"Once we solve this case, you're treating me to Tuna King. That last sandwich was supposed to be mine.\"",
  
        "\"Of course. Sorry for stealing your sandwich, Alpha.\"",
  
        "\"Don't worry about it,\" she insists, standing up and heading to the window.",
  
        "Once she gets it open, she hooks one foot out of the room, wiggling her tiny hips.",
  
        "\"I'll be leaving now. Lay low for a while.\"",
  
        "\"Got it. What's our strategy?\"",
  
        "\"We'll assemble an army. There aren't enough members in the capital. And I believe we should summon Delta.\"",
  
        "\"You're sending for Delta?\"",
  
        "\"She wants to see you.\"",
  
        "Gunshot Delta. Otherwise known as Suicide Weapon Delta. Put simply, she's a blockhead who's spent all her experience points on her battle skills.",
  
        "A little reunion would be nice, I guess. I'm begging that all of them turned out all right.",
  
        "\"I'll let you know the details when the preparations are complete. See you soon.\"",
  
        "Alpha flashes me a final smile before yanking on her bodysuit to hide her face and slipping out the window into the night.",
  
        "\"Is that the end of your report?\" asks a redheaded beauty.",
  
        "Her fiery, straight hair reaches to the small of her back, illuminated under the flickering lights of a candle, and her wine-red eyes are set on the investigation papers on her desk. The reporting knight blushes in the presence of her poise and allure.",
  
        "\"Y-yes, Princess Iris. We'll continue our search to the best of our abilities.\"",
  
        "Iris nods, cuing him to take his leave.",
  
        "When the door clicks closed behind him, Iris is left alone with a handsome man with blond hair.",
  
        "\"Marquess Zenon. Thank you for your cooperation.\"",
  
        "\"The incident took place on school grounds. I was responsible for keeping her safe, and more importantly, I'm worried about her well-being...\"",
  
        "He lowers his eyes and bites his lower lip in frustration.",
  
        "\"You had to attend to your duties as an expert swordsman. No one blames you. And we don't have time to point fingers right now. We need to focus on getting Alexia back safe and sound.\"",
  
        "\"I suppose you're right...\"",
  
        "\"Another thing.\" Iris stops speaking for a moment and snaps the report closed. \"Is it true that this Cid Kagenou is most likely the perpetrator?\"",
  
        "\"I don't want to believe one of our students could be the culprit, but based on the circumstances, I have to say I find him suspicious... though I don't think he's strong enough to overpower Alexia in a duel.\" Mr. Zenon tacks on the last bit, carefully choosing his words.",
  
        "\"Which means he either had an accomplice or drugged her. But he didn't crack during interrogation. Do you really think it's him?\" Iris asks.",
  
        "\"I can't say for certain. But I want to believe him.\"",
  
        "Iris nods and narrows her eyes. \"I have my most trusted knights surveilling him. We'll wait for the next report.\"",
  
        "\"I pray for Alexia's safety.\" Mr. Zenon offers a bow before taking his leave.",
  
        "Just as he opens the door, a young girl skids through it into the room.",
  
        "\"Your Highness! Please listen!\"",
  
        "\"Claire! What are you doing here? Excuse us, we'll be leaving!\"",
  
        "Mr. Zenon grabs the girl with black hair, Claire Kagenou, attempting to push her out of the room.",
  
        "\"Marquess Zenon, who is she?\"",
  
        "He halts. \"She's...\"",
  
        "\"Claire Kagenou! I'm Cid's older sister!\"",
  
        "\"Claire! Sh-she's currently one of our top students, and she's shadowing the members of the Knight Order.\"",
  
        "\"I see... All right. I'll listen.\"",
  
        "\"Thank you so much!\" Claire exclaims, approaching Iris and pleading her case. \"My brother would never kidnap Princess Alexia! This must be a mistake!\"",
  
        "\"The Knight Order is taking every precaution in its search to avoid any mistakes. It hasn't been confirmed that your brother is the criminal.\"",
  
        "\"Yes, but if no one finds the real culprit, he'll take the fall!\"",
  
        "\"Our knights are carefully investigating the matter. I can assure you that no one will be wrongfully convicted.\"",
  
        "\"But!\"",
  
        "\"Claire!\" Mr. Zenon warns, stopping Claire from desperately pressing Iris any further. \"Settle down. I know how you feel, but any more would be an insult to the Knight Order.\"",
  
        "\"Ksh...!\" Claire lets out before glaring at Zenon and then Iris. \"If anyone lays a hand on my brother, I'll...!\"",
  
        "\"That's enough!!\" Mr. Zenon cuts her off and yanks her out of the room.",
  
        "Slam.",
  
        "Iris lets out a sigh, staring at the closed door behind them.",
  
        "\"Huh. We feel the same way about our respective families...,\" Iris murmurs. \"Alexia, I hope you're all right...\"",
  
        "The two sisters used to be close, but somewhere along the way, they started drifting apart. In fact, they haven't spoken in years, and Iris knows they may never again.",
  
        "\"Alexia...\"",
  
        "Iris shuts her wine-red eyes and lets a single tear trail down her face.",
  
        "When Alexia opens her eyes, she finds herself in a dimly lit room with no windows and a candle as the only source of light. A heavy door is embedded in the stone wall before her.",
  
        "\"Where am...?\"",
  
        "She doesn't remember anything after saying good-bye to Fido on her way home from school.",
  
        "Upon shifting her body, Alexia hears the clang of metal striking metal and looks down to see her limbs bound to a low table.",
  
        "\"A magical restraint...\"",
  
        "That means her magic is being subdued, and it might be tough for her to escape on her own.",
  
        "Who brought her here and for what purpose? She goes down the list of possibilities: Abduction, blackmail, human trafficking... There's no definitive answer. Though Alexia may not be the heir to the throne, she knows she has enough leverage as a princess to attract criminals.",
  
        "That said, she has too little information to figure out the current situation.",
  
        "She takes a step back. A new thought pops into her mind.",
  
        "Is Fido okay?",
  
        "Yeah, Fido. An asshole of a friend. But she likes him for speaking his mind without fear.",
  
        "If he's dragged into this mess, his life would be... Alexia stops herself from finishing that thought, shaking her head to clear it before scanning the room.",
  
        "A stone wall, a steel door, a candlestick, and... something that looks like a black pile of trash. That heap is chained up for some reason, seated beside her.",
  
        "Alexia is staring at it curiously when she thinks she sees it move slightly.",
  
        "It's breathing—something in tattered clothes.",
  
        "\"Can you hear me? Can you understand—...?!\"",
  
        "The being turns to look at her.",
  
        "It's a creature.",
  
        "Alexia has never seen one this malnourished before. She can barely make out its eyes, nose, and mouth in its black, festering face. Its entire body is distorted and bloated, and its right arm is longer than Alexia's legs. In contrast, its left arm is thinner and stumpier than hers, and there is a protrusion in its body as if it is carrying something in its stomach.",
  
        "The creature is right next to Alexia.",
  
        "Her hands and feet are chained to the table, but it's only bound by its neck. If it were to just extend its long arm, the monstrosity could potentially touch her.",
  
        "Alexia hushes her breath, averting her eyes to avoid provoking it.",
  
        "She's being observed.",
  
        "There is a long pause that seems to freeze time... and then its chains begin to rattle.",
  
        "Alexia shifts her gaze to the side, and the creature is lying facedown as if it has fallen asleep. She heaves a huge sigh of relief.",
  
        "It isn't long before the door opens.",
  
        "\"Finally. I've finally got you.\" A lanky man in a white coat enters the room.",
  
        "His cheeks are sunken, his eyes caved in, and his lips cracked. The little wisps of hair left on his thinning head are slicked down with the oil from his scalp, from which wafts a dreadful smell.",
  
        "Alexia calmly watches the man.",
  
        "\"Royal blood, royal blood, royal blood.\"",
  
        "Royal blood.",
  
        "As the man in the white coat repeats this phrase, he retrieves a device equipped with a thin syringe. Maybe he's planning on drawing her blood. The castle doctor took it many times before.",
  
        "But she doesn't know why this man would kidnap a princess for her blood.",
  
        "\"May I ask you a question?\" Alexia asks coolly.",
  
        "\"Hmm, hmm?\" A strange gurgle emerges from the man.",
  
        "\"What will you use it for?\"",
  
        "\"Y-y-you have the blood of a demon. I'll use it to resurrect them in the modern day.\"",
  
        "\"I see. Pretty neat idea you've got there.\"",
  
        "Although she can't understand what he's trying to say, she's very aware he's gone completely mad and realizes he must be motivated by religion—or something.",
  
        "\"Hey, I'll have a hard time staying alive if you take too much blood. I'm not ready to die, you know.\"",
  
        "\"Heh-heh-heh... I kn-know. I want all the blood you can give me. I'll siphon bit by bit from you each day.\"",
  
        "\"Yes, please do.\"",
  
        "As long as he needs her blood, he won't kill her. Which is why she keeps docile and doesn't try to resist. For the time being, she decides to wait to be rescued instead.",
  
        "\"Th-th-this wasn't supposed to happen. I blame those morons for all this.\"",
  
        "\"Uh-huh, I hate idiots, too.\"",
  
        "She stares at the man in the white coat as she mumbles under her breath, \"Because dealing with them wears me out.\"",
  
        "\"They destroyed my... my laboratory. It all started with that dumbass Grease.\"",
  
        "\"Uh-huh, dumbass Grease is the one who started it.\"",
  
        "\"And then they kept coming and coming and—Aaaghh!\"",
  
        "\"That's a shame. I'm sorry to hear that.\"",
  
        "\"Yes! Yes, it is! My research is almost done! If I don't finish it soon, I'll be banished... banished...!\"",
  
        "\"That sounds terrible.\"",
  
        "\"C-curse it all! That good-for-nothing... nothing!\"",
  
        "The man in the white coat approaches the chained creature and punts it as far as its chain will allow. He kicks it over and over, stomping on its body, as the creature all but keeps still, huddling into itself.",
  
        "\"Weren't you going to take my blood?\"",
  
        "\"Oh, right. Right. With your blood... With your blood, everything will be complete.\"",
  
        "\"Good for you.\"",
  
        "The man in the white coat readies the device and sets the syringe against her arm.",
  
        "\"With this... With this, it will be complete... I—I won't be banished.\"",
  
        "\"Don't hurt me.\"",
  
        "It'll make me want to clock you, Alexia adds in her mind.",
  
        "The needle enters her arm, which she watches as though someone else's blood is filling the glass tube.",
  
        "\"Heh-heh... heh-heh-heh...\"",
  
        "When it's full, the man in the white coat lovingly carries it out of the room, and Alexia waits for the door to close before releasing a heavy sigh.",
  
        "I've prepared everything for this day.",
  
        "Two days after I'm released from interrogations, I look through the prized mastermind collection in my dorm room and grab everything of potential use.",
  
        "These cigars... aren't fitting for my age. But this vintage wine... a rare collector's bottle worth nine hundred thousand zeni from Pordeaux in the southwest of French. Yes, it's perfect for tonight—when the moon remains hidden behind the clouds. Now, I'll pair it with my finest glassware... This Buitton is the best in French and costs 450,000 zeni. And with this antique lamp and that elusive painting The Shriek, which I just so happened to stumble upon, on the wall... Voilà . Fantastic.",
  
        "Oh, my heart is full.",
  
        "I've hunted bandits and scrounged for coins on my hands and knees, all for this.",
  
        "Tears of joy stain my cheeks as I gaze upon my bedroom—a product of my superior collection. All I have to do is set up the invitation I just received today and wait.",
  
        "I will wait for that moment.",
  
        "Waiting.",
  
        "Waiting...",
  
        "And waiting...!",
  
        "Then... the moment arrives.",
  
        "I murmur to myself at the same time the girl in ebony enters through the window.",
  
        "\"The time is ripe... The shadows run the world tonight...\" Yes.",
  
        "I've prepared everything for this day...",
  
        "\"The time is ripe... The shadows run the world tonight...\"",
  
        "Those were the words he used to greet his underling, Beta.",
  
        "He sits in a chair with his legs crossed, his back to his subordinate. It might be unguarded, but Beta knows that it's distant and lives in a world completely separate from hers.",
  
        "The wineglass in his hand glows in the light of the antique lamp. It's even clear to Beta, who isn't too familiar with alcohol, that he's casually sipping on one of the rarest, most unattainable wines of all time.",
  
        "Beta is stunned not only by the luxury items that color his room but also by the painting she spots on his wall. The unobtainable masterpiece The Shriek. No amount of cash could ever purchase this work of art. Beta almost asks how he came to possess the painting, but she suddenly realizes it would be meaningless and stops herself in time.",
  
        "Everything falls into his hands because he is who he is.",
  
        "That explains it all.",
  
        "It's only natural for him to own The Shriek. In fact, even if one searched every corner of the world, one could never find a more suitable owner for that painting than Shadow.",
  
        "\"A world of shadows. The clouds cascade over the moon tonight. How fitting. For us,\" Beta adds.",
  
        "Shadow silently glances at her and places his mouth on the rim of his glass.",
  
        "\"We're ready.\"",
  
        "\"Uh-huh.\"",
  
        "He knows everything. Or perhaps it's his omniscient tone that creates this illusion. Well, the truth is, he actually knows almost everything Beta is about to say.",
  
        "But Beta continues to speak regardless, as is her duty.",
  
        "\"Under Lady Alpha's command, we've assembled all the people in the area and mobilized them in the capital. There are one hundred fourteen in total.\"",
  
        "\"A hundred fourteen?\"",
  
        "\"—... gh!\"",
  
        "Is that too few?",
  
        "Considering the strength of the Shadow Garden, she imagined that 114 new members would be more than enough.",
  
        "But it doesn't take long for Beta to realize she misunderstood him.",
  
        "After all, these people are supporting characters, and less than 10 percent of them are qualified for the job. He's the star of tonight's show. As sidekicks to bring the main character's story to light, 114 seems outrageously small in number.",
  
        "\"I'm s-sorr—...!\"",
  
        "\"You've hired extras...?\" Shadow asks, interrupting her, but that last word isn't in Beta's vocabulary. \"Never mind. Just talking to myself.\"",
  
        "\"Understood.\"",
  
        "Beta doesn't inquire any further, because she knows his words contain more depth than she could ever fathom, and she has neither the right nor the power to ask for more details.",
  
        "That said, she can't stop hoping for a day when she'll stand beside him and support his every secret. But until then, she's going to keep these feelings hidden.",
  
        "She continues to speak.",
  
        "\"Our strategy is to launch synchronized attacks against the hideouts of the Fenrir sect in the Cult of Diablos scattered throughout the capital. At the same time, we'll search for traces of Princess Alexia's magic. Once we locate her whereabouts, we'll switch plans and prioritize her rescue.\"",
  
        "Shadow nods, silently encouraging her to keep going.",
  
        "\"Gamma will handle tactical commands. Lady Alpha will command the battlefield, and I will serve as her assistant. Epsilon will lead support from behind, and Delta will ambush them, marking the beginning of our entire operation. The troops will be formed by...\"",
  
        "Shadow raises his hand, stopping short her detailed explanation.",
  
        "He's holding a letter.",
  
        "\"An invitation,\" he adds, flicking it behind him.",
  
        "Beta catches the sheaf of paper, which he urges her to read.",
  
        "\"This is...\" She trails off, shocked and angered by the crass message.",
  
        "\"Send my apologies to Delta... but this prelude is mine to perform.\"",
  
        "\"Yes, we'll make sure that happens.\"",
  
        "\"Come with me, Beta.\" He turns to her. \"Tonight, the world will find out who we are.\"",
  
        "Beta trembles with joy upon knowing she gets to fight beside him.",
  
        "The ransom note brought him to the forest path deep in the woods. Shadow makes his appearance in his school uniform, close to where Princess Alexia was abducted, and Beta covertly lurks a short distance away from him.",
  
        "It only takes a little while before he senses two energies approaching.",
  
        "Something flies in his direction, which he catches in one hand and glances at.",
  
        "\"Is this... Alexia's shoe?\" he mutters.",
  
        "And then they appear—two men on the path.",
  
        "\"Hey there, chick magnet. What're you doing with Princess Alexia's shoe?\"",
  
        "\"Ooh, and it contains traces of magic. You're the culprit, Cid Kagenou.\"",
  
        "Both are in the armor of the Knight Order. There's no doubt they're the ones who interrogated him before.",
  
        "\"I see. That's what you're trying to do.\"",
  
        "The men unabashedly sneer at Cid's words.",
  
        "\"If you'd cracked sooner, we wouldn't have had to get in this mess.\"",
  
        "\"You could've gone through it without getting messed up.\"",
  
        "The two wield their swords and brazenly close the distance separating them from Cid.",
  
        "How stupid... Beta can't find the words to describe their idiocy.",
  
        "\"Okay, Cid Kagenou. You're under arrest for the abduction of a princess.\"",
  
        "\"Don't fight back. Struggling will get you nowhere.\"",
  
        "One of them haughtily chuckles as he thrusts his sword toward Cid.",
  
        "\"Hmm?\"",
  
        "But Cid has stopped the blade with two of his fingers. Then, there's a flash of light as his right foot grazes the man's neck.",
  
        "Blood subsequently erupts from that exact location.",
  
        "There's an ebony dagger sticking out of Cid's right shoe.",
  
        "\"AAAH... Agh... augh!!\" The knight drops to the ground, clutching his neck.",
  
        "He'll die in time.",
  
        "\"You bastard!!\" His partner panics and tries to slash Cid, but his attack is too simple and careless.",
  
        "Cid dodges by tilting his head, then literally swipes the man off his feet, leaving him empty below the knees.",
  
        "\"Aaaaaaaggghhhhh!!\" shrieks the knight as blood gushes from his thighs, which he clutches. \"My... my leeeeegs...!\"",
  
        "He starts crawling away from Cid.",
  
        "\"D-don't think you can get away with hurting the Knight Order, you swine...! I-if we die, you're gonna be the first one they suspect!\"",
  
        "Cid leisurely treads the man's trail of blood and draws closer.",
  
        "\"E-eek...! I-it's over for you...! Over...!\" screeches his prey, desperately and fumblingly dragging himself across the ground.",
  
        "\"When dawn breaks... they'll find the corpses of two knights.\"",
  
        "\"Y-yeah! Come morning, it's game over...!\"",
  
        "The man inches forward. Cid follows his bloody path.",
  
        "\"But you don't have to worry anymore.\"",
  
        "It's at that very moment the fool realizes that Cid is behind him.",
  
        "\"Eek!\"",
  
        "There's a flash of light from Cid's right leg.",
  
        "\"Because when dawn breaks... everything will be done.\"",
  
        "The man's head is flung into the sky, and Cid turns around, blood raining down on him. Beta shudders at the sight.",
  
        "But Cid is no longer there in his school uniform.",
  
        "Instead, there's Shadow, head to toe in ebony. Adorned in an inky bodysuit and boots, he holds a black katana in his hand as his coat sways in the breeze. His hood hangs over his forehead, hiding the upper half of his face. Only the lower half sees light. It's as if he's wearing a magician's mask, where the only real visible parts of him are his mouth and the red eyes peering out from the darkness.",
  
        "After nearly fainting upon seeing his commanding and arresting silhouette, Beta hastily retrieves The Chronicles of Master Shadow from between her breasts and draws a rough sketch of the scene. Next to it, she records his utterings from that day. And voilà. All this takes but five seconds.",
  
        "On an unrelated note, these drawings and lists of his catchphrases comprise the wallpaper in Beta's bedroom. Writing a new entry in The Chronicles of Master Shadow every night before bed brings her one of her greatest joys in life.",
  
        "The roar of a distant explosion drags her back to reality.",
  
        "\"Is that Delta...? Nocturne has begun. Let's go, Beta.\"",
  
        "\"O-okay! Coming!\"",
  
        "Beta stuffs the notepad back into her cleavage and dashes after him. And, of course, Shadow is totally unaware that she's done any of that in the first place.",
  
        "\"Eek... What the hell are you? We've done nothing to deserve this!\"",
  
        "A sea of blood.",
  
        "That's what this is. And there's a man screaming in the middle of it.",
  
        "It has come unannounced. Without any warning or stating its reasons, it burst through the wall and commenced its slaughter.",
  
        "Yet another man becomes prey to its black katana blade.",
  
        "No one wants to fight it. The men wish to make a hasty escape and nothing more. But it is blocking the only exit.",
  
        "\"What have we ever done to you?! Nothing, right?!\"",
  
        "It turns to the man and starts to cackle.",
  
        "\"Eek...!\"",
  
        "From behind its ebony mask, it laughs viciously.",
  
        "\"H-help...!\" he sputters. His body is split down the middle, sliced from the top of his skull to his crotch. Blood bursts from each side as the two halves fall to the right and left.",
  
        "As it submerges its body in blood, it catches the falling drops tenderly. It might have the appearance of a woman, but the temperament is of a devil.",
  
        "Upon noticing there are only a few spoils in the area, it extends its weapon, elongating its black blade.",
  
        "Without exaggeration, the katana literally extends far enough to smash through the wall.",
  
        "With a mighty swing...",
  
        "\"S-stop...!!\"",
  
        "...it destroys the building and everything in it.",
  
        "\"It's begun.\"",
  
        "From atop a clock tower, an alluring elf watches the complete annihilation and fall of a building. It's a joke, almost. The breeze tousles her long golden locks, which glisten in the dark of the night.",
  
        "\"Oh, Delta... She always overdoes it.\" She sighs, shaking her head.",
  
        "But she can't undo what's already done. Alpha looks over the capital from the top of the tower.",
  
        "The entire capital begins moving frantically. Everything commences as planned. And most of the attention is directed at Delta, who just hacked a building to bits.",
  
        "\"I have to give it to Delta for making it easier for the others to start...\"",
  
        "If she could just ignore the victims, she could admit Delta's moves are exceptional.",
  
        "\"Guess I should get going, too,\" she murmurs.",
  
        "Alpha hides her face behind a pitch-black mask.",
  
        "There is something going on outside.",
  
        "Alexia opens her eyes for the first time in hours.",
  
        "The only ones who ever enter the room are a female caretaker and the man in the white coat, which gives Alexia nothing to do except sleep on the same table that binds her hands and feet. Neither Alexia nor the creature bother the other, which means they are getting along all right. The clamor intensifies, indicating there's some kind of conflict beyond this room.",
  
        "Alexia smiles, expecting to be rescued.",
  
        "\"I wonder if they'll crash through the wall all dramatically,\" she mumbles for no particular reason.",
  
        "The stress must be getting to her. And even though she knows it's meaningless, she shakes the chains that bind her.",
  
        "\"I'm sorry for waking you.\"",
  
        "The creature next to her lifts its head.",
  
        "\"But I think it's best to stay awake. You don't want to miss out on the fun.\"",
  
        "Alexia knows it won't answer her, but she talks to it anyway. Boredom can have strange effects on the mind.",
  
        "It takes a while before the sound of the key unlocking the door echoes throughout the room in a flustered and apprehensive way.",
  
        "\"Shit, shit, shit!!\" The man in the white coat barrels into the room.",
  
        "\"Good day to you, too.\"",
  
        "\"I was so close! So close!!\" He ignores Alexia, who is clearly having fun with all this. \"Those bastards... They're here!! This is the end! The end...!\"",
  
        "\"Give it up. Resistance is futile. If you unchain me now, I'll ask them to spare you,\" Alexia tells him.",
  
        "\"But no guarantees,\" she adds quietly.",
  
        "\"Th-those brutes would never let me go scot-free...!! Th-they'll kill everyone... everyone!!\"",
  
        "\"The Knight Order doesn't kill without reason. If you don't resist and go quietly, they won't take your life.\"",
  
        "A voice in her mind chimes in Not.",
  
        "\"The Knight Order? I don't give a shit about them! Th-the fiends will kill everyone, everyone, I tell you!!\"",
  
        "\"You're not talking about the Knight Order?\"",
  
        "Then who? Alexia can't imagine anyone else. But then again, she knows it's completely possible he's gone nuts.",
  
        "\"Either way, this is the end for you. Turn yourself in.\"",
  
        "\"No, no, no, no, no!! N-not until it's complete!!\" The man in the white coat claws at his head and shifts his bloodshot eyes toward the creature. \"I-I've made a prototype. I-if I use this, even a worthless shit like you might be useful.\"",
  
        "He pushes the device with the syringe against the creature's arm.",
  
        "\"You shouldn't do that. I don't have a good feeling about this,\" Alexia warns, sounding quite serious.",
  
        "But he obviously just ignores her, shoving the needle in its arm and injecting it with an unknown fluid.",
  
        "\"B-behold! I give you a glimpse of Diablos!!\"",
  
        "\"Ooh, how exciting.\"",
  
        "The creature begins swelling, its muscles bulging before their eyes, and even its skeletal structure starts to expand. Its right arm, which was long and thick, morphs into a malicious and ominous form. Its fingertips sprout nails as long as human legs. Its left arm appears to be holding something and stays stuck to its body.",
  
        "It lets out a high-pitched shriek.",
  
        "\"I-incredible! Astounding!!\"",
  
        "\"This... is surprising.\"",
  
        "But the chains cannot endure the rapid growth of the creature and snap off on their own.",
  
        "\"I told you it was a bad idea.\"",
  
        "Splat.",
  
        "The man in the white coat isn't even spared a final scream of agony before he's crushed by its right arm.",
  
        "\"Well, then.\"",
  
        "Alexia and the creature lock eyes.",
  
        "She studies its movements. Her hands and feet are bound, which means there isn't much she can do. But she can move around a little bit. Plus, she can't stand the thought of dying as a consequence of some idiot's mistake.",
  
        "The creature swings its right arm.",
  
        "Alexia twists out of the way as much as she can. As long as her injuries aren't fatal, she can survive...!",
  
        "\"—... gh!\"",
  
        "It avoids Alexia and pulverizes the table that binds her. The impact sends her flying against the wall, where she writhes in pain.",
  
        "\"Augh...!\"",
  
        "But she doesn't have any broken bones or visible wounds and can still move. After checking herself for injuries, she quickly rises to her feet.",
  
        "But the creature is gone, leaving behind a shattered table and demolished wall.",
  
        "\"Did it... really save me...?\"",
  
        "Even if she hadn't shifted away, its arm wasn't anywhere close to hitting her. Which would mean... Nope, it can't be. Maybe it missed.",
  
        "\"Well, anyway.\"",
  
        "Alexia swipes the keys from the man's corpse and removes her magical restraints. With this, her magic can flow free. She stretches once to loosen up, then heads through the wall the creature destroyed.",
  
        "There is a long, dimly lit hallway before her. Piles of trampled soldiers litter the ground.",
  
        "\"I'll be taking that.\"",
  
        "Alexia borrows a mithril sword from a corpse. It's flimsy, but it'll get the job done.",
  
        "When she goes down the hallway and turns the corner, she sees someone.",
  
        "\"We can't have you leaving on your own.\"",
  
        "\"Y-you. Why are you here...?\" Alexia's eyes widen with fear.",
  
        "What in the world is going on?",
  
        "Iris's red hair swirls behind her as she dashes through the capital late at night.",
  
        "She was told that a building had been destroyed. At first, she thought she'd misheard the news. But as Iris sprints toward the city, half in disbelief, her subordinates keep receiving report after report.",
  
        "There are many ambushes occurring in the capital simultaneously.",
  
        "It doesn't take long for her to reach that conclusion. But there's nothing logically connecting the various locations under attack: firms, warehouses, restaurants, private homes of nobles... The crimes must be premeditated, but she can't figure out the goal.",
  
        "That said, the capital is shaking.",
  
        "The Knight Order is mobilized in a state of emergency, and they begin evacuating high-profile leaders. Even though it's late, the residents crack open their windows to check what's happening, and there are more than a few onlookers outside. Iris shouts at the meandering residents, telling them to go home, and rushes to the scene.",
  
        "Something strange is happening. This is in no way a normal incident.",
  
        "Iris can sense it.",
  
        "It's right at that moment when a scream reaches her ears.",
  
        "\"M-monster!! Help...!!\"",
  
        "They are shouts from the Knight Order. They aren't too far away. Iris changes directions and books it toward the cries for help. When she turns the corner down a back street to the main road, she spots the monster.",
  
        "It's a colossal, hideous beast.",
  
        "With a swipe of the enormous, blood-soaked fingernails on its right hand, it transforms the knights into piles of flesh.",
  
        "\"What is that?\" Iris mutters as she dashes toward it. \"Stand back!\"",
  
        "With one fluid movement, her unsheathed blade shimmers in the darkness as it slices through the creature's chest.",
  
        "And completely bisects it.",
  
        "She cuts down its immense body in one fell swoop.",
  
        "\"Are you hurt?\" Iris calls out to the Knight Order and forgets all about the creature as it slowly falls to the ground.",
  
        "\"Princess Iris, you've saved us!\"",
  
        "\"That's our princess! She slayed the monster in one stroke!\"",
  
        "The men are unharmed. Almost all the soldiers are completely unscathed. Well, the ones who survived, at least.",
  
        "\"The monster killed eight of our men.\"",
  
        "A single hit took them down.",
  
        "Her red-wine eyes tremble with sorrow when they fall upon the ghastly corpses.",
  
        "\"Gather the bodies and head back. Please inform the lieutenant that...\"",
  
        "\"Princess Iris!\" shouts one of the knights all of a sudden.",
  
        "He's standing there, pointing at something behind her, and the other knights try to raise their muted voices.",
  
        "\"What...?!\"",
  
        "Iris turns and strikes without missing a beat.",
  
        "Her sword collides with the right arm of the creature.",
  
        "\"Ksch...!\"",
  
        "For a moment, it seems as though Iris has been beaten until she quickly releases a huge quantity of magic that effectively blasts its mighty arm. From there, she dives into its bosom, severing its leg, and leaps back to prepare for a counterattack.",
  
        "In the following second, the monster swings its right arm where Iris had stood and retrieves a few strands of her long red hair.",
  
        "\"Is it regenerating...?\"",
  
        "The injuries from the bisection vanish, and the new wound on its leg is starting to heal.",
  
        "\"Ridiculous... How can it regenerate when Princess Iris sliced it in two...?\"",
  
        "\"This can't be...\"",
  
        "\"Stay back,\" Iris calls to the shaken knights as she blocks its next attack.",
  
        "Its moves are quick, powerful, and heavy—but bland.",
  
        "\"It's only a creature, after all.\"",
  
        "Iris counters ruthlessly: She slices its arm to pieces, chops off its legs, and beheads it. Successive strikes rain down on the creature, as if to mock, Try healing from all that.",
  
        "She won't let it retaliate. She's the only one attacking.",
  
        "\"Is it still healing?\"",
  
        "But the creature survives. In the brief moment Iris stops her assault, it regains its form and swats her away with its right arm.",
  
        "And then it shrieks into the night sky.",
  
        "As if in response, rain begins falling from the moonless sky. It drizzles at first but quickly becomes a torrent. White steam rises where the droplets hit the creature's blood.",
  
        "\"This might take a while...\"",
  
        "Iris straightens her posture, preparing for a long fight.",
  
        "She doesn't think she'll lose. Even now, she never considers that she might see defeat. But it seems this battle is going to require more time.",
  
        "Iris readies her sword. When the monster finishes healing, she rushes toward it.",
  
        "The next moment, her sword is knocked out of her hands, accompanied by a shrill sound, and the impact sends pins and needles up her arm.",
  
        "She glares at a sudden intruder, ignoring the fact that her beloved sword whirls into the distance. The newcomer glances at her.",
  
        "They stare each other down. The first to break the silence is the interloper.",
  
        "\"Why won't you see it's hurt?\"",
  
        "The uninvited guest is a girl in an ebony bodysuit. Iris can't see her face but notices that her voice sounds young.",
  
        "\"Who are you?\" Iris cautiously keeps both the intruder and the creature in view.",
  
        "\"Alpha.\" After uttering a single word, the girl turns her back to Iris as if she has lost interest in the conversation.",
  
        "\"Wait, what are you planning to do? If you plan to oppose the Knight Order, we won't go easy on...\"",
  
        "\"Oppose...?\" Alpha cuts in, giggling condescendingly at Iris while continuing to face away from her.",
  
        "\"What's so funny?\"",
  
        "\"Oppose... I think that might be the most ridiculous word in the world. Opposing an ignoramus would be senseless.\"",
  
        "\"Excuse me...?!\" Iris's magic begins to swell, transforming into a massive wave that sweeps the rain away and forms violent gusts of wind.",
  
        "But Alpha doesn't even glance in her direction. She stands there unfazed, her back still turned to Iris.",
  
        "\"Play your assigned role as the spectator and keep your eyes on the stage. Don't disturb our performance,\" she utters before approaching the creature.",
  
        "From behind, she seems solemn. She's already completely forgotten about Iris.",
  
        "\"Did you just call me a spectator...?\" Iris clutches her tingling hands as she glares at Alpha.",
  
        "\"Poor thing. That must've hurt,\" says Alpha, walking toward the monster. \"There is no more pain. No more sadness.\"",
  
        "Alpha extends her ebony sword longer than her entire body.",
  
        "\"You don't have to cry anymore.\"",
  
        "Then, with a step forward, she slices the creature in two.",
  
        "No one has time to react.",
  
        "Iris and the creature can only watch as Alpha bisects it. Everything about it feels natural. There is no bloodlust; it's as if this is the only reasonable solution.",
  
        "The monster's massive body crashes onto the ground, and white smoke rises from the husk as it gradually shrivels to the size of a little girl. A dagger has fallen from its left hand.",
  
        "There is a red jewel embedded in it, along with an engraving on its hilt: To my beloved daughter, Millia.",
  
        "\"I pray... you achieve peace in your next life.\"",
  
        "With that, Alpha vanishes within the white smoke.",
  
        "A clap of thunder sounds in the distance. Iris is stunned in place. Raindrops run down her hair and fall onto her face.",
  
        "She's trembling, but she doesn't know why.",
  
        "\"Alexia...,\" Iris murmurs. She senses that her little sister is at the epicenter of this chaos, and this premonition pushes her forward.",
  
        "\"Alexia, please be safe...\"",
  
        "Iris picks up her sword and starts running. The storm rages on.",
  
        "\"Wh-why are you here?\"",
  
        "When Alexia turns the corner, she sees an all-too-familiar visage.",
  
        "\"Because this is my facility, that's why. I invested thousands of zeni into that man. That's all there is to it.\"",
  
        "Confidence overflows from the smile stretched across the face of a dashing blond. It's Instructor Zenon.",
  
        "\"That's nice to know. I always thought you were messed up in the head. I guess I was right.\"",
  
        "Alexia takes one step back and then two. There's a staircase behind him, and she guesses it's her best bet to escape.",
  
        "\"Huh. Think whatever you want. But I don't mind as long as I have your blood.\"",
  
        "\"All anyone talks about around here is blood. Is this a research facility for vampires?\"",
  
        "\"If that's what you want to think. More or less.\"",
  
        "\"Skip the explanation. I'm not into the occult.\"",
  
        "\"Figures.\"",
  
        "\"I'm sure you're aware, but the Knight Order will be here any minute now. This is the end for you.\"",
  
        "\"The end? What do I have that can possibly end?\" Zenon is still all smiles.",
  
        "\"Your title and reputation will be ruined, and you'll obviously be put to death. I'll be happy to drop the guillotine on your neck.\"",
  
        "\"You're off the mark. You and I will be escaping through a secret route.\"",
  
        "\"What a romantic offer. Too bad I can't stand you.\"",
  
        "\"You're coming with me. With my research and your blood, I'm destined to receive the twelfth seat in the Rounds. I shall bid farewell to my meaningless position as an instructor.\"",
  
        "\"The Rounds? Is that a group for lunatics?\"",
  
        "\"The Knights of Rounds is a gathering of twelve superior knights from my religion. Becoming a member brings me rank, honor, and fortune like you'd never believe. They've already acknowledged my power. All I'm lacking is experience, but my research on your blood should fix that right up.\"",
  
        "Zenon melodramatically spreads his arms out and lets out a guffaw.",
  
        "\"Whatever. I'm just sick of all this blood talk,\" mutters Alexia.",
  
        "\"I would have preferred Princess Iris, but it looks like I'll have to settle for you.\"",
  
        "\"I'm gonna kill you.\"",
  
        "\"Oh, excuse me. I forgot you hate being compared to your sister.\"",
  
        "\"—... gh!\"",
  
        "A forceful swing from Alexia's sword signals the start of their battle. She goes straight for the jugular.",
  
        "\"Ooh, how scary.\" Zenon repels her attack at the last second and blocks the following strike.",
  
        "Sparks fly from the colliding blades.",
  
        "Judging this skirmish merely by the manner in which their swords dance in the air, one might be inclined to say their skills are equally matched.",
  
        "But the sword bearers wear very different expressions. Alexia angrily glowers, whereas Zenon has a relaxed smile.",
  
        "And Alexia is the one burning with wrath, sure enough. She clicks her tongue with frustration and backs away.",
  
        "\"You start using shoddy swords the moment I stop seeing you.\"",
  
        "Zenon zeroes in on her weapon. She glances at it with a pained expression. The battle has only just started, but her blade is already filled with countless nicks.",
  
        "\"They say the choice of weapon shouldn't matter to an expert.\" Alexia grimaces and stands her ground.",
  
        "\"I see. If we're talking about experts, I'm sure that's true.\" Zenon sneers. \"But you're mediocre. As a sword-fighting instructor, I guarantee it.\"",
  
        "Alexia visibly screws up her face. For a moment, it looks as if her urge to cry is drowned out by pure fury.",
  
        "\"Just watch me. Then you can say if you really think I'm mediocre.\"",
  
        "With that, she lunges at him with all the energy she can muster.",
  
        "Alexia knows. She knows full well she isn't strong enough to beat Zenon, and her flimsy weapon won't last long. But Alexia hasn't spent all those days training with her head in the clouds. In her mission to become as strong as her sister, she's realized her own shortcomings and worked hard to make up for them. She's observed her sister's swordplay more than anyone else and can picture every move with impeccable accuracy.",
  
        "Which is why it's easy for her to replicate.",
  
        "\"Haaaah!!\" It's a stroke reminiscent of her sister's assaults.",
  
        "\"G...!\"",
  
        "For the first time, Zenon's smile vanishes. The sword he's blocked is filled with magic.",
  
        "The two swords violently clash and repel each other.",
  
        "They're equally matched...",
  
        "No. Alexia might be a bit stronger.",
  
        "A red line is carved into Zenon's cheek. Visibly taken aback, he looks at the blood he wipes off his cheek.",
  
        "\"I'm stunned.\"",
  
        "There is no hidden meaning behind his words.",
  
        "\"I had no idea you were hiding your strength.\"",
  
        "Zenon tilts the palm of his hand. He studies it as if checking the color of his own blood.",
  
        "\"I'm going to make you regret looking down on me.\"",
  
        "\"Pfft.\" Zenon laughs. \"I was certainly taken aback, but you're just a poor imitation, after all. You've a long way to go before you're the real deal.\" He shakes his head.",
  
        "\"You're asking for it.\"",
  
        "\"Since we're both here, let me give you a taste of my true power.\" Zenon readies his sword.",
  
        "\"...g!\"",
  
        "The air changes as Zenon's magic takes on a sharper and deeper quality.",
  
        "\"Let me tell you one thing. I've never shown my true powers to an outsider. I'm about to show you the skills of a true swordsman... of the next generation of the Rounds!\"",
  
        "The air pulses around them.",
  
        "\"That's...\"",
  
        "This isn't in the same ballpark as before. Alexia has never seen an attack with so much power lurking behind it. Their skills are as hopelessly different as a genius and a clod. He may even rival her older sister.",
  
        "Alexia doesn't have the means to defend herself against the devastating force of the approaching blade.",
  
        "Her reaction is involuntary, something that's become a part of her after many years of training.",
  
        "There is no impact.",
  
        "The two swords clash, and Alexia's weapon is pulverized into fluttering bits of dust. She feels as though she's watching these sparkling fragments of mithril pass by her from far away.",
  
        "Somewhere far from here.",
  
        "Alexia's childhood memories resurface in her mind of times when swinging her sword brought nothing but pure joy.",
  
        "Her sister is always beside her, and this is a distant memory that should have faded long ago.",
  
        "\"You'll never be as good as your sister.\"",
  
        "A single tear falls from Alexia's eye.",
  
        "\"You're coming with me.\"",
  
        "Falling from her hand, the measly hilt that was once a sword hits the floor with a dry, metallic clang.",
  
        "Click, click.",
  
        "There's a sound coming from the stairwell behind Zenon.",
  
        "Click, click, click.",
  
        "Someone is coming down the stairs.",
  
        "Click, click, click, click.",
  
        "When the noise ceases, there's a man in an ebony coat in front of them, dressed entirely in black. He has his hood pulled up and wears the mask of a magician.",
  
        "The man calmly saunters forth, stopping one step outside the range of their weapons.",
  
        "\"The man clad in ebony... So you're the feral dog who dares to nip at the Cult.\" There's a sharp glint in Zenon's eyes as he glares at the intruder.",
  
        "\"My name's Shadow. I lurk in the darkness and hunt down shadows...\" His voice is as deep and as dark as the abyss.",
  
        "\"I see. You seem to have an inflated ego from destroying our smaller facilities, but you haven't even taken down one of our main fighters. You're just a coward who picks on the little guys.\"",
  
        "It seems the man who calls himself Shadow is at odds with Zenon. This is good news for Alexia, but she doesn't think this man is her ally.",
  
        "\"It doesn't matter who or what we choose to destroy. It's all the same.\"",
  
        "\"You're sadly mistaken. The main army of the Cult is here. Today, I'll hunt you down with my bare hands. This is your fate.\"",
  
        "Zenon turns his sword to Shadow.",
  
        "\"I'm Zenon Griffey, the next one to fill the twelfth chair of the Rounds. Taking your life will be my achievement for them.\"",
  
        "With that, Zenon unleashes a gale of an attack at Shadow.",
  
        "But Shadow is gone, and he slashes through empty space.",
  
        "\"What the...?!\"",
  
        "The next moment, Shadow is standing behind him. It only takes a second before Shadow takes this position.",
  
        "Zenon can't move.",
  
        "As if Zenon has lost track of the time, he stills his sword—even holds his breath—to focus every ounce of his energy on the man standing behind him.",
  
        "Nobody budges.",
  
        "That's right. Shadow stands back-to-back with Zenon, arms crossed.",
  
        "He utters one sentence: \"Well then... where are the main troops of the Cult?\"",
  
        "Zenon twists his face in humiliation. He then slices downward from over his shoulder.",
  
        "But no one is there.",
  
        "\"Absurd...!\"",
  
        "Zenon hears a coat rippling through the air and looks back to find Shadow standing where he originally appeared, as if nothing has changed.",
  
        "Even Alexia has completely lost track of Shadow as she watches from the sidelines. If this isn't a magic trick or gimmick, then she'd consider him a mastermind... No, he's much stronger than that.",
  
        "Suppressing his frustration, Zenon slowly turns around.",
  
        "\"I seem to have slightly underestimated your power. While you only destroyed the smaller bases, there were several of them.\"",
  
        "This time, Zenon strengthens his magic as he keeps an eye on Shadow. The air undulates from its power. This is more intense than the strike that shattered Alexia's sword.",
  
        "Shadow is certainly an extraordinary warrior. But Zenon is mightier than the average soldier. A once-celebrated child prodigy, he grew up to win numerous tournaments and climbed the rungs to become a master swordsman. There isn't a knight in the country who doesn't know Zenon Griffey's name.",
  
        "\"I'll show you the power of the one to join the Rounds next term.\"",
  
        "So fast...! Alexia barely manages to follow Zenon's sword with her eyes.",
  
        "The afterimage of the bare blade tears the air and heads straight for Shadow's neck.",
  
        "\"That's one sharp move...\"",
  
        "Somewhere along the way, Shadow raises his black sword and effortlessly blocks Zenon's attack.",
  
        "\"Guh...!\"",
  
        "They're locked in place. Zenon tries to push his way to victory.",
  
        "But Shadow draws backward, using the swordsman's momentum to send him flying.",
  
        "\"Heh...!\"",
  
        "Just before he slams into the wall, Zenon narrowly manages to tumble on the ground and reposition his sword. But he can't hide his unease.",
  
        "Neither of them moves.",
  
        "Shadow has chosen not to move whereas Zenon can't. He feels as if his entire body is being controlled.",
  
        "\"I thought you were going to hit me, Mr. Next-Gen Rounds.\"",
  
        "\"Nngh...!\"",
  
        "Zenon's face burns a furious red. He's frustrated with his opponent but even more so with himself.",
  
        "\"That's enouuuugh!!\" Zenon howls as he executes a sweep attack.",
  
        "His thrusts forward are as piercing as a squall.",
  
        "His consecutive strikes are as fierce as a raging fire.",
  
        "But none of them land.",
  
        "\"Aaaaaagghhhhh!!\"",
  
        "His ferocious roar sounds hollow. It's as if an adult is practicing with a child.",
  
        "Alexia is in shock watching the fight. She has never seen Zenon reveal this side of himself before. He has torn off his calm smile and mask of integrity, and it's as if they're now out of his reach. The strongest person Alexia knows is her older sister. Even so, Alexia doesn't think her sister would be capable of overwhelming Zenon.",
  
        "Clang, clang, clang.",
  
        "The scant noise from their clashing blades echoes through the area and seems almost out of place. It's the exact sound of light practice.",
  
        "The ebony blade and its white counterpart etch their trajectories through the air.",
  
        "Alexia's gaze is fixed on this imitation practice session, mesmerized by the black sword. There's a reason her eyes can't stray from it.",
  
        "\"Mediocre swordplay...\"",
  
        "The figure in front of Alexia fights the same way she does.",
  
        "When Alexia was a child, she had her own idea of perfect swordplay. It isn't about talent, strength, or speed but building up from the basics. Yet others keep comparing her to her sister and mock her for being average, which makes Alexia feel as if she's lost her direction in life.",
  
        "But despite all her struggles, Alexia never gives up.",
  
        "And she's just witnessed these unremarkable moves slay the genius Zenon Griffey.",
  
        "\"Amazing...,\" she mutters admiringly.",
  
        "Witnessing this, she can see the path he's walked in life. It's a direct result of his serious and unwavering efforts.",
  
        "Alexia's sister might have the same thought.",
  
        "\"Iris...\"",
  
        "Alexia feels she finally understands her sister's words from long ago.",
  
        "\"Gaghh... d-dammit...!\"",
  
        "Shadow's blade lashes out at Zenon. He's been hit too many times to keep count.",
  
        "Zenon breathes raggedly as he glares at Shadow. His enraged eyes still haven't accepted reality.",
  
        "\"Y-you bastard! Show me who you are...! Why do you hide your identity when you possess this much power?\"",
  
        "Those with Shadow's strength hold riches and respect within arm's reach—with the potential to be known worldwide.",
  
        "But no one knows about Shadow's swordplay. Even if he hides his face, those lucky enough to get a glimpse of his swordplay will never forget it. But this is the first time either Zenon or Alexia have seen such phenomenal swordsmanship.",
  
        "\"We are the Shadow Garden. We lurk in the darkness and hunt down shadows. That's the only reason we exist...\"",
  
        "\"You're out of your mind...!\"",
  
        "Zenon and Shadow exchange glances. Alexia is completely excluded from this exchange. She doesn't know why they're fighting or what they're trying to accomplish.",
  
        "Blood. Creature. Cult. There are many key words to remember.",
  
        "But Alexia doesn't know what they mean. To her, it all sounds like the ravings of a madman.",
  
        "But what if? What if it isn't just nonsense? What if there is something going on behind the scenes that Alexia doesn't know about?",
  
        "\"Fine. If you're ready to get serious, it looks like I'll have to answer to your needs.\"",
  
        "Zenon produces a pill from his breast pocket.",
  
        "\"With this pill, I shall be awakened and surpass all human limitations. An ordinary human would break under this power and eventually self-destruct. But those in the Rounds are different. Only those who can manipulate this devastating power have the privilege of joining the Rounds.\"",
  
        "Zenon swallows the pill.",
  
        "\"I am the Third Awake.\"",
  
        "Zenon's wounds instantly begin healing. His muscles tighten up, his eyes become bloodshot, and his capillary vessels protrude. It looks as if he's being crushed by a tremendous force.",
  
        "\"I'll show you almighty power,\" boasts Zenon, his calm smile returning.",
  
        "In his current form, there is no doubt Zenon is stronger than Princess Iris.",
  
        "Alexia thinks Zenon is the strongest being in the world and shrinks back in despair. No... she would if she'd never seen Shadow's swordplay.",
  
        "She doesn't think Zenon's current form is the strongest at all. If fact, she thinks it's something else entirely.",
  
        "\"How ugly...\"",
  
        "\"That's ugly...\"",
  
        "Alexia's and Shadow's voices overlap. After all, they're striving to achieve the same type of sword technique, which is why they share the same sentiment.",
  
        "\"Did you just call me ugly?\" Zenon's smile slips away.",
  
        "\"Don't call that pathetic form almighty. It's a disgrace to those who are.\"",
  
        "\"You son of a bitch.\"",
  
        "\"With borrowed power, you'll never walk the path of the almighty.\"",
  
        "This is the first time in this battle that Shadow intensifies his magic. Until now, he's barely used it. It is so exceptionally precise that it's impossible to perceive.",
  
        "But what is this?",
  
        "This surge of magic shows itself in the form of blue-violet rays of light. There are hundreds of ultrathin strands. These create a dazzling pattern as they wrap themselves around Shadow like veins.",
  
        "\"It's beautiful...\" Alexia is mesmerized by this sight.",
  
        "She isn't admiring the beauty of the lights, though, but the precision of his magic.",
  
        "\"What is this...?\" Zenon is once again shocked.",
  
        "No one has ever created such beauty through magic.",
  
        "\"I'll show you true almighty power... and carve it into your mind forever.\"",
  
        "Magic gathers in the ebony blade and etches out a pattern, starting to form a large spiral. Shadow continues focusing his power.",
  
        "It seems as if that spiral will swallow everything whole.",
  
        "A frightening power is absorbed into the black weapon.",
  
        "\"This is me at my peak.\" Shadow readies his blade in the lunging position.",
  
        "This stance is only to strike down an enemy.",
  
        "\"S-sto...\"",
  
        "Is the ground trembling? Or the air? Or Zenon himself?",
  
        "No, it's everything.",
  
        "Everything is rippling. Alexia notices that she's shaking, too. It isn't out of fear, though, but joy.",
  
        "That's the final destination.",
  
        "That... swordplay is the strongest.",
  
        "\"Watch closely...\"",
  
        "Draped in light, the ebony blade pulls back...",
  
        "\"Hidden Technique: I AM ATOMIC.\"",
  
        "...and releases.",
  
        "All sound is lost.",
  
        "A torrent of light shoots past Alexia and engulfs Zenon's body. It penetrates everything, consuming the walls and the earth, blasting upward into the night sky.",
  
        "Then it explodes.",
  
        "As patterns of light are etched into the night sky, the entire capital assumes a blue-violet hue.",
  
        "From impossibly far away, the delayed blast ripples across the city, sweeping away the rain clouds, shaking the ground and the private residences, before passing.",
  
        "All that's left is a full moon and the beautiful night sky full of stars.",
  
        "Zenon has been vaporized. He doesn't even leave behind a single speck of dust.",
  
        "The large hole blasts though the wall all the way aboveground.",
  
        "And then... Shadow flings open his coat and slips into the night.",
  
        "Once... there was a man who challenged nuclear power and trained his body and mind to hone his techniques.",
  
        "But it remained far beyond his reach.",
  
        "And then, after many hours of exhaustive training, he finally found the answer.",
  
        "Q: How can I withstand nuclear power?",
  
        "A: Become nuclear power.",
  
        "From this, the esoteric technique I AM ATOMIC was born. And its power is most certainly comparable to a weapon of mass destruction!",
  
        "How long did time stand still? Alexia suddenly notices someone calling her.",
  
        "\"Alexia... Alexia...!\"",
  
        "The person gasps for air and shouts from far away. It's a voice she instantly recognizes.",
  
        "\"Iris... Iris...!\" screams Alexia, dashing out through the large hole in the wall to the outdoors.",
  
        "\"Alexia! Alexia!!\" Iris hurries toward her.",
  
        "\"Iris... I—I... gh.\"",
  
        "Alexia is embraced before she can tell her sister she's unharmed. Iris is soaking from head to toe, and her body feels chilly and warm at the same time.",
  
        "\"I'm so glad you're safe... I really am.\" Iris hugs her sister tightly.",
  
        "With some hesitation, Alexia wraps her arms around Iris's back.",
  
        "\"I'm sorry. I must be cold.\"",
  
        "Alexia shakes her head against her sister's chest. Tears flow from her eyes and won't stop coming.",
  
        "Two students stand on the roof. It's early in the summer. One is an attractive girl with silvery-white hair. The other is an ordinary boy whose hair is black.",
  
        "\"This incident has been resolved on the surface, but I can sense something brewing behind the scenes. Iris is preparing to dispatch a special brigade, and I plan to help her. So we're only just getting started,\" says the girl.",
  
        "\"All in moderation,\" adds the boy.",
  
        "\"Which means you've been cleared of the charges. I really dragged you into that mess.\"",
  
        "\"Don't worry about it.\"",
  
        "A gust of wind passes between them, and her skirt billows to reveal her white legs.",
  
        "\"It's hot as balls out here. Can we go inside?\"",
  
        "The midday sun is beating down on them, and two shadows extend from their feet. They can hear the distant voices of the cicadas chirping.",
  
        "\"Wait. There's two things I have to say.\"",
  
        "\"Here?\"",
  
        "\"Here,\" she confirms, squinting and looking up at the blue sky. \"First, I want to give you my thanks. You said you liked my swordsmanship, right? Well, I know I'm late, but I really appreciate it.\"",
  
        "\"No problem.\"",
  
        "\"I finally like it. Not that I attribute that development to you.\"",
  
        "\"Did you really have to throw in that last bit?\"",
  
        "\"It's the truth.\"",
  
        "They lock eyes, and he's the first to look away.",
  
        "\"Anyway, if you've learned to like your swordplay, that sounds good to me.\"",
  
        "\"Yeah, it is.\" The girl smiles.",
  
        "\"So what's the second thing?\"",
  
        "\"We've pretended to date until now, but Instructor Zenon died in that incident.\"",
  
        "\"Which means I'm freed from my duties.\"",
  
        "\"But I do have one proposition.\" The girl looks sort of uncomfortable as she searches for the right words.",
  
        "\"If you're all right with it...\" Her red eyes dart around, and her voice softens ever so slightly. \"Maybe we can do this a little while longer?\"",
  
        "The boy beams at her.",
  
        "\"No thanks,\" he answers, flipping her off.",
  
        "The girl unsheathes her sword in one fluid motion.",
  
        "That night, a student discovers a large pool of blood on the rooftop.",
  
        "Despite the heinous amount, there's no corpse in the vicinity. Even when the students and school authorities investigate the matter, there are no wounded or missing persons, and the case is never solved.",
  
        "Subsequently, this is dubbed the Incident of the Corpseless Murder and considered one of the seven wonders of the school.",
  
        "One day, out of the blue, Alexia asks her older sister something odd.",
  
        "\"Can you please tell me what kind of apology guarantees forgiveness?\"",
  
        "Iris frowns when she hears the question.",
  
        "What does she expect from me? She tells Alexia the obvious: \"There is no such thing.\"",
  
        "Which is common sense, but all of it goes in one of her disgruntled sister's ears and out the other.",
  
        "\"I hate apologizing to begin with,\" complains Alexia, turning away, at which point Iris throws in the towel and calls it a day.",
  
        "But Iris is fired up by a sense of duty to do something to help her sister.",
  
        "From what she gathers, her silly sister annoyed someone close to her. The problem is she hasn't made up for it yet.",
  
        "Iris realizes this is the first time her sister has ever asked her how to apologize.",
  
        "Alexia always says sorry when she does something wrong. Of course, this is a superficial apology with no real emotion, but others sharing shallow relationships with her are none the wiser. Until now, Alexia has gotten along just fine.",
  
        "But if she's asking how to apologize, that means she isn't referring to a fake acquaintance but to a friend.",
  
        "That little sister of hers has made a friend.",
  
        "Iris's heart bursts with happiness, a hint of loneliness, and an overwhelming sense of duty.",
  
        "But telling Alexia will only cause her to rebel. Iris contemplates this situation all night but ultimately can't come up with a good solution.",
  
        "To start things off, Iris is very direct in conversation but has almost no social grace, as opposed to Alexia, who doesn't like to confront others. Even if Iris suggests something, she knows Alexia won't lend an ear, saying something like \"I'm getting goose bumps from being so uncomfortable,\" and that will be the end of it. In every way, the sisters are natural-born opposites.",
  
        "That's why Iris decides to rely on a certain rumor.",
  
        "On a rare day when both sisters have spare time, Iris invites Alexia to a department store that's been the talk of the town.",
  
        "\"Iris, what is this place?\"",
  
        "\"It's called Mitsugoshi. I think it's all the rage in the capital. I heard they sell some tasty treats.\"",
  
        "\"Treats? I don't hate that, but...\" Alexia looks unamused.",
  
        "Seeing her sister's expression, Iris panics. \"H-hey, I hear girls are really into this new snack called chocolate. Maybe you'd want to give it to someone as a gift!\"",
  
        "Alexia stares coldly at Iris.",
  
        "\"F-for example, a new friend. I bet it'd make them happy.\"",
  
        "Iris is very bad at hinting at things. It's painfully pathetic to see her try to force a smile.",
  
        "\"All right, I get the idea. Let's go inside,\" Alexia suggests, looking terribly bored. \"Wait, we can't go in yet. Just look at the line.\"",
  
        "A crowd has formed in front of Mitsugoshi, snaking around in a long line in a frenzy.",
  
        "\"We'll cause more trouble for them if we stand in it,\" she adds.",
  
        "As if on cue, a member of the staff immediately approaches them.",
  
        "\"Princess Iris and Princess Alexia. Thank you for coming. Welcome.\"",
  
        "The woman in a blue uniform politely bows and leads the pair inside. A quick look around shows the two princesses have attracted a lot of attention from the crowd.",
  
        "\"I see,\" Iris says with a nod. Alexia sighs at her sister.",
  
        "They pass by the packed shops before they're escorted to a quiet corner of the mall. According to their guide with the dark-brown hair, she's taken them to a special boutique for their most honored customers.",
  
        "The two princesses find the simple yet tasteful decor of the boutique refreshing, especially because they're accustomed to ornate designs and decorations. Every new and unique product brings a sparkle to Alexia's once-apathetic eyes.",
  
        "A stunning blue-haired elf appears before them.",
  
        "\"Thank you for your patience. I'm Luna, the president of Mitsugoshi, Ltd. Here is our newest product, chocolate.\"",
  
        "A brown, bite-size morsel is placed in front of Iris and then Alexia.",
  
        "\"This is called a chocolate truffle. We've only just put it on the market.\"",
  
        "\"A truffle...?\"",
  
        "\"It doesn't look very appetizing,\" Alexia comments, sounding indifferent.",
  
        "\"B-but it has a lovely aroma,\" interjects Iris, immediately trying to make amends for her sister.",
  
        "\"If you'd like, please try a sample,\" Luna responds with a confident smile.",
  
        "\"Why, thank you.\"",
  
        "\"If you insist.\"",
  
        "The moment they pop the samples into their mouths, their faces light up.",
  
        "\"This is... very sweet. A complex flavor profile. I feel like I could eat a dozen.\"",
  
        "\"The bitter notes highlight its sweetness. It's smooth and rich and smells divine, and I'll take it.\"",
  
        "Iris buys one of everything, naturally. And surprisingly, Alexia follows suit. Mitsugoshi arranges to have the items delivered straight to the castle. Even their service is exceptional.",
  
        "\"Alexia, shouldn't you ask them to gift wrap it?\"",
  
        "\"No need.\"",
  
        "\"O-oh, okay.\"",
  
        "Luna approaches the duo as they get ready to leave. \"Would you like to view some of our other products? I'm positive they'll tickle your fancy.\"",
  
        "\"Well...\"",
  
        "The girls didn't intend to stay long, but they're too curious to see other offerings from the company that developed chocolate—it's even enough to pique Alexia's interest.",
  
        "\"Yes, please.\"",
  
        "\"Wonderful.\"",
  
        "With a quick word to her staff, Luna introduces one product after another—and not just candy. They have tea, liquor, accessories, daily goods, gourmet and preserved foods... All overflow with novel and fascinating qualities. The products basically force unexpected wads of cash out of their wallets.",
  
        "And then a piece of cloth is set before them.",
  
        "\"What's this...?\" Alexia tilts her head, pinching the lacy black material between two fingers.",
  
        "\"One of our panties for women,\" Luna introduces with a smile.",
  
        "\"Underwear.\"",
  
        "\"Really...?\"",
  
        "Iris and Alexia scrutinize the black T-shaped garment embroidered with white lace.",
  
        "They can tell it's underwear when they look at it up close, but the size of the fabric seems way too small. Their butts would hang out if they wore these panties. Plus, some of the parts are see-through.",
  
        "\"We call them G-strings.\" \"G... G-strings?\" Iris shudders and balks at the design that hides as little as possible.",
  
        "While it's cute and all, its intentions are all too vulgar for Iris to stomach.",
  
        "Sh-should these panties even be allowed to exist?",
  
        "\"As for gentlemen, they seem to like them very much.\"",
  
        "Alexia's ears perk up.",
  
        "\"Iris...\"",
  
        "\"Alexia, you can't be serious...?\"",
  
        "\"I'm confident about the shape of my butt.\"",
  
        "\"Th-that's not the problem!!\" Iris stammers.",
  
        "What's this crazy kid saying?!",
  
        "\"P-p-p-p-please don't wear these! A princess should never don lewd clothing!\"",
  
        "\"I'm confident about the shape of my butt.\"",
  
        "\"You've already said that! It's improper! Out of the question! I forbid it!\"",
  
        "\"You can try it on, if you'd like.\"",
  
        "Iris stops herself in the nick of time from snapping at Luna to mind her own business.",
  
        "\"Yes, please,\" replies Alexia.",
  
        "\"Don't do this!\" Iris counters.",
  
        "\"Come on, Iris, I'm just trying it on.\"",
  
        "\"Yeah, right! I mean, you're basically setting up a situation where you have to purchase it! You're gonna act all indecisive, and then you'll just go and buy it anyway. I know how this works!\"",
  
        "Alexia irritably clicks her tongue in response.",
  
        "\"Your Highness, I hope there aren't any misunderstandings about our product. G-strings are made for women.\" Luna stands up. \"In fact, I'm wearing that same model right now.\"",
  
        "Luna turns her back to them, and the pair zero in on the shapely butt under her tight black dress.",
  
        "\"Look. Even though my dress is thin, you can't see my panty lines.\"",
  
        "\"Y-you're right.\"",
  
        "Underwear lines are always visible under lightweight fabrics. There are girls who refuse to wear underwear to formal events to prevent them from showing.",
  
        "But this G-string eliminates that problem. It can't be detected under clothing.",
  
        "\"Are you really wearing it...?\"",
  
        "\"Would you like to see?\" Luna asks, slowly peeling up her dress to reveal her milky thighs.",
  
        "\"I-I'm good!\"",
  
        "\"Just kidding.\" Luna seductively grins and unfurls her dress. \"Would you like to try it on, at least?\"",
  
        "\"Yes.\"",
  
        "\"A-as long as you're just seeing how it looks...\"",
  
        "The duo trail after Luna into a large fitting room. Iris nervously watches Alexia cheerfully slip out of one pair of underwear into another.",
  
        "Alexia yanks her skirt up to her waist and pulls her white pair down, letting them fall to her ankles before lifting one foot and then the other. After hanging them on a hook on the wall of the fitting room, she spreads out the G-string in front of her.",
  
        "\"It's practically transparent...,\" notes Iris, sounding utterly baffled.",
  
        "\"Seems pretty airy to me,\" chirps Alexia, amused.",
  
        "Alexia bends forward and raises her right foot, sliding the G-string up one leg and then the other. She tugs it up under her skirt and tilts her head curiously.",
  
        "\"It feels kinda weird...,\" Alexia comments.",
  
        "Iris is at a loss for words when she sees her sister hiking her skirt up.",
  
        "\"That's...\" Iris's vision goes completely white.",
  
        "\"Your Highness. You have it on backward.\"",
  
        "\"Oh, that explains it,\" Alexia replies to Luna, leaving her dumbfounded sister be as she slips off the G-string and puts it on the right way.",
  
        "\"Ooh, it feels nice.\"",
  
        "\"Yes, it's made from our new prized fabric.\"",
  
        "Alexia kicks up, crouches down, and spreads her legs to test it out.",
  
        "\"Iris, look at this.\"",
  
        "That pulls Iris back to reality. \"Look.\" Alexia jerks her skirt up to reveal a perfectly shaped butt that's almost completely exposed.",
  
        "Her delicate white skin glows in the light of the fitting room. Alexia playfully shimmies her waist, and her buttocks jiggle around.",
  
        "\"S-stop that shameful behavior right now!\"",
  
        "\"And see? No visible panty lines,\" adds Luna.",
  
        "When Alexia lowers her skirt, Iris certainly can't see them.",
  
        "\"And check out the front. It's very cute.\"",
  
        "Alexia hikes up her skirt again, turning to Iris. The design is cute, but it's...",
  
        "\"A-A-Alexia, it's completely sheer...\"",
  
        "\"It hides enough.\"",
  
        "Iris chants three times in her mind, It's not enough, not enough, not enough.",
  
        "\"I'll take three of these and all the other colorways.\"",
  
        "\"Thank you for your business.\"",
  
        "\"You can't! I absolutely forbid it!!\" Iris snaps out of her trance. \"Th-those undergarments are too perverse for the royal princesses of Midgar. I simply won't allow it!!\"",
  
        "\"Iris...!\"",
  
        "\"Neeeeeeeeeever, never, ever!!\"",
  
        "\"But it's just a pair of panties!!\" The duo glare at each other. Luna can almost see the steam coming out of their ears.",
  
        "\"Fine.\"",
  
        "\"Alexia, you've come around.\"",
  
        "\"You know, I want to listen to you. I've always been swayed by meaningless words and lost sight of what matters. Like the time you told me you liked my swordplay.\"",
  
        "With her see-through panties on full display, Alexia keeps her eyes warmly on Iris.",
  
        "\"Yeah, I remember that.\"",
  
        "\"My swordplay is a symbol of my small, insignificant life. That's why I want to listen to those who accept that about me.\"",
  
        "\"Alexia...\" Iris is touched to the point of trembling. They're finally on the same page.",
  
        "\"If you can't accept G-strings, I won't buy them. I really, really, really want to wear them, but I won't if you don't want me to. So tell me: Are you absolutely sure G-strings are out of the question?\"Alexia bores into her sister's eyes, as if peeking into her soul.",
  
        "Iris wavers. \"Um, I... Well, they're not totally unacceptable...\"",
  
        "\"Not totally unacceptable?\"",
  
        "\"...No.\"",
  
        "\"Then I'll take 'em!\"",
  
        "\"Thank you for your purchase!\"",
  
        "Iris can tell she's been bamboozled, but she smiles and lets it go when she sees her sister beaming giddily."
      ],
      "c5": [
        "Summer's almost here.",
  
        "I swing my wooden sword on a day in late spring. I'm in the middle of my practical elective. Now that I'm free from Alexia's clutches, I've transferred to be with Skel and Po. And because a bunch of students dropped out of the Royal Bushin elective after the Instructor Zenon scandal, all of us in section nine have been bumped up to section seven.",
  
        "\"Whatever happened with you and Princess Alexia?\" Skel asks as he practices beside me.",
  
        "\"We haven't talked since the breakup.\"",
  
        "Also, she tried to kill me.",
  
        "\"That's a shame. And you never even kissed?\" prompts Po.",
  
        "\"No, never.\"",
  
        "We're having a dumb conversation as we wave our swords around as usual. This is what life in section seven is all about. Even though it's a huge waste of time, this is the path I must take to maintain my status as a minor character.",
  
        "\"The Bushin Festival's coming up. Did you guys sign up for the qualifying round?\"",
  
        "\"Of course! If I do well enough in the tournament, I can easily go home with two or three lovely ladies,\" boasts Skel. He's a virgin, by the way.",
  
        "\"Oh-ho-ho, with three, I'd have my hands full,\" comments Po, another big virgin.",
  
        "\"Cid, you didn't sign up for the qualifying round, right?\"",
  
        "The Bushin Festival is a massive, semiannual tournament. Besides the local fighters, famed knights from around the world come to participate. There's a special bracket for students, and there are going to be preliminaries for our tournament. But an ordinary side character would never stand on a stage in front of everyone. Not in a million years.",
  
        "\"I'm not go—...\"",
  
        "\"But don't worry! I went and signed you up! Show me your gratitu—... Guhh!!\"",
  
        "Skel suddenly clutches his stomach and crumples to the ground.",
  
        "\"H— Skel!! What's happened to you?\" Po cries.",
  
        "It's a frighteningly fast hit. I'm the only one who can see it.",
  
        "\"Hey. Hey, Skel. You should have seen yourself. It was like someone slammed you in the stomach with a right hook. What's up with you?\" I ask as I loosen my right fist.",
  
        "\"Th-that's a really accurate description, Cid.\"",
  
        "\"This is bad. He's a goner. Gimme a hand to get him to the nurse's office. Hey, do you know if we're able to take back tournament applications?\"",
  
        "\"Hmm, I'm not sure. Oh, Skel, you're foaming at the mouth.\"",
  
        "Our instructor gives us permission to carry Skel to the nurse's office for his \"sudden seizure\" that knocked him out.",
  
        "It's on the way there that I notice something.",
  
        "\"Who's that?\" I ask about a solemn-looking group entering the school.",
  
        "\"It looks like... Princess Iris is with them.\"",
  
        "Alexia is there, too. Our eyes meet for a moment before she scornfully turns away.",
  
        "I still haven't told anyone she went all cuckoo on me and attempted to go on a wild killing spree. And I don't plan on telling anyone about the incident on the roof if she keeps her distance. With our peace treaty, she can kill whomever she pleases. Her swordplay seems to have really improved, and I think it's great that she's trying to get stronger. Well, as long as she doesn't try to kill me, that is.",
  
        "\"By the way, I heard Princess Iris is coming to campus to request some kind of investigation.\"",
  
        "Po doesn't look it, but he's always in the know. The Midgar Academy for Dark Knights is a massive building that contains the Midgar Academy of Science. I hear they conduct research and do science-y stuff. I dunno.",
  
        "\"I see.\"",
  
        "Wait, didn't Alexia mention Iris is building a new army?",
  
        "After Po and I watch the Knight Order enter the building, we drop Skel off in the nurse's office and just skip class.",
  
        "There are a few people engaging in a discussion in a large reception room.",
  
        "\"We'd like to ask you, the most distinguished scholar in the kingdom, to interpret this artifact for us,\" continues a beauty with scarlet locks, Iris, holding a large pendant-shaped object.",
  
        "\"But I'm just a student,\" objects a lovely young girl with hair as pink as a peach upon taking one look at the artifact in question.",
  
        "\"Everyone in the world knows about your incredible work. You're Sherry Barnett, the best researcher in your field. No one could do it better than you.\"",
  
        "\"But...\"",
  
        "\"It's a good opportunity for you. You should give it a try,\" interrupts a man in his early forties, encouraging Sherry.",
  
        "\"Assistant Principal Lutheran Barnett...\"",
  
        "\"You can call me Father, you know,\" Lutheran nudges gently, chuckling.",
  
        "In return, Sherry smiles awkwardly.",
  
        "\"Sherry, it's your time to go out into the world of professional research. Princess Iris's request will bring you closer to the bright future that's waiting for you.\"",
  
        "\"But I'm not...\"",
  
        "\"Don't I say it all the time? Have confidence. I know you can do this. You're the only one who can.\" Lutheran places a hand on Sherry's slender shoulder.",
  
        "\"Fine, I'll do it...\"",
  
        "Iris hands Sherry the artifact.",
  
        "\"An ancient alphabet? It's written in a secret code,\" Sherry observes.",
  
        "\"There is a religious group that calls themselves the Cult of Diablos. This artifact was in their facility. They seem to be doing research on ancient civilizations, but we don't know the details. There must be a connection between the code and the ancient civilizations,\" explains Iris.",
  
        "\"Well, you certainly came to the right person.\" Sherry scrutinizes the object.",
  
        "\"I want a member of the Knight Order to guard it,\" Iris adds.",
  
        "\"What do you mean by guard...?\" asks Lutheran.",
  
        "\"In all truth, the Cult of Diablos—that religious group—is after that artifact.\"",
  
        "\"That's unsettling.\" Lutheran sharpens his gaze.",
  
        "\"We originally obtained this from their facility. Of course, this isn't the only item we've confiscated. We've been storing other classified documents and objects in our warehouse, but I'm embarrassed to admit that an unidentified person burned down our warehouse the other day. This artifact is all that remains.\"",
  
        "\"Oh, I've heard about the recent fire. Which reminds me, Princess Iris, you established the new Knight Order after that.\"",
  
        "\"Yes, but it's still quite small.\"",
  
        "\"I believe it's called the Crimson Order, correct? I see you've brought your Crimson Knights here today.\"",
  
        "\"I have...\"",
  
        "\"Are you that distrustful of the previous Order?\"",
  
        "Iris doesn't reply to Lutheran's razor-sharp question, looking back at him without changing her expression.",
  
        "\"Hmm. Fine by me. I'll approve up to two guards,\" concedes Lutheran.",
  
        "\"Two...? Well, I guess that won't be a problem if I'm guarding the artifact.\" Iris looks troubled.",
  
        "\"The work of the Knight Order will experience delays if Princess Iris is off-site.\"",
  
        "The speaker is a broad-shouldered knight sitting to Iris's left. He's muscular with a beard as bushy as a lion's mane. A large scar runs across his cheek.",
  
        "\"Indeed... Glen, I leave the guarding to you.\"",
  
        "\"Understood, Your Highness,\" he says with a bow.",
  
        "\"Iris, I'll help, too,\" says Alexia from Iris's right. \"If you split up the guards, fewer knights will be available to respond to the Ebony Incident.\"",
  
        "Iris goes silent.",
  
        "\"The Crimson Order has its hands full, and I know who he is. I'm perfect for this role.\"",
  
        "\"But, Alexia, you're still...\"",
  
        "\"A student. I'm a student, but age is irrelevant if you've got skill. You said it yourself.\"",
  
        "\"No, I didn't.\"",
  
        "\"That's what you've just told Miss Sherry.\" Alexia grins confidently at her peeved older sister.",
  
        "\"And you used to be so cute...,\" mumbles Iris.",
  
        "\"I heard that. Anyway, Iris, I want to know. I want to know why they're doing this and... if they plan to oppose us.\"",
  
        "\"But it's going to be dangerous.\"",
  
        "\"I know.\"",
  
        "The sisters silently exchange glances.",
  
        "\"Fine. I formally request that you accept low-risk missions only and to the degree that it doesn't interfere with your schoolwork.\"",
  
        "\"Thank you.\" Alexia smiles and bows.",
  
        "\"I hope all goes well with the artifact,\" Iris addresses Sherry after letting out a deep sigh.",
  
        "That evening, I try to cancel my application for the preliminaries after class.",
  
        "\"Thank you.\"",
  
        "I bow and leave the student services office.",
  
        "\"Well, how'd it go?\"",
  
        "Skel and Po approach me outside the office. They were waiting for me.",
  
        "\"They said everyone's been paired up, and it's impossible to withdraw.\" I sigh.",
  
        "\"Hey, look on the bright side. If you do well, you're gonna be swimming in girls, right?\"",
  
        "\"Yeah! They say tough times bring opportunity, if you know what I mean.\"",
  
        "I shake my head. \"I don't care if I win or lose. I just don't want to do it.\"",
  
        "\"Geez, you're hopeless. C'mon, I'm gonna introduce you to this special shop. Try to lose the long face.\"",
  
        "\"S-special shop?\" stutters Po, taking ragged breaths through his nose.",
  
        "\"Oops, not that kind of special. I meant the Mitsugoshi that everyone's talking about. I've heard they've got all sorts of new items, and one of 'em is a snack called chocolate. It's supposedly sweet and hella delicious.\"",
  
        "\"Treats? I'd love some.\"",
  
        "\"You doofus! It's not for you.\" Skel slaps Po atop his head. \"We're gonna give the chocolate to girls. Y'know, women go gaga for you if you give 'em something sweet!\"",
  
        "\"O-oh, I get it. Spoken like a true professional, Skel. You always teach me so much.\"",
  
        "\"I know, right?\" crows Skel, feeling full of himself.",
  
        "\"Come on, Cid. Let's get going.\"",
  
        "\"Let's go, Cid.\"",
  
        "There's a sparkle in their eyes. \"Fine, I'll go,\" I agree with a sigh.",
  
        "I have to admit I'm a bit curious to see what the chocolate of this world is like.",
  
        "Skel takes us to the main street in the capital. The bustling evening streets are overflowing with people, and every store in this super-high-scale area seems packed to the brim. Mitsugoshi is more crowded than the rest of the shops by a long shot.",
  
        "\"Wow, it's so friggin' cool.\"",
  
        "A brand-new, swanky building stands tall in the sky—trendy to the point that it seems almost contemporary. I haven't felt this out of my element since I walked into a high-end store in my past life.",
  
        "There's an enormous line snaking out from the entrance. All the people waiting for their turn seem to be members of noble families or their guests. One glance is all I need to know these are wealthy, special customers. At the very end of the line is a woman in uniform holding a sign. The wait time is approximately eighty minutes.",
  
        "\"It's an eighty-minute wait,\" I protest.",
  
        "\"I'm sure we'll make it back before our dorm curfew,\" argues Po.",
  
        "\"We've already gotten this far. Let's go,\" insists Skel.",
  
        "\"But I've heard there are slashers on the loose. I don't want to stay out too late...\"",
  
        "\"The three of us are friggin' dark knights, you nitwit. We'll slash 'em right back!\" Skel pats the sword on his lower back.",
  
        "\"Y-you're right.\"",
  
        "\"Did you say slashers?\" I ask, interrupting their conversation.",
  
        "\"I've heard there were recent killings in the capital, happening at night. And they've been carried out by expert fighters who've already taken down members of the Knight Order...,\" whispers Po.",
  
        "\"Ooh, creepy. I wouldn't be caught dead walking around at night.\"",
  
        "A slashing cutscene? Sounds fun. Sign me up.",
  
        "\"Chop-chop! If we don't get in line, we won't make it in time for curfew,\" presses Skel.",
  
        "Po and I trudge to the end of the line.",
  
        "\"Hi, m-m-ma'am. Y-you're pretty. G-g-got any hobbies?\" Skel attempts to pick up the employee with the sign as soon as we get there.",
  
        "But she flashes him a battle-hardened smile and proceeds to ignore him before staring at me with a cheerful grin for reasons unknown.",
  
        "\"Excuse me, sir. Could I have a moment of your time?\"",
  
        "She's an exquisite woman whose face is calm and refined with dark-brown hair that matches the color of her eyes. Her work uniform is a short and simple navy-blue dress marked with the Mitsugoshi logo. It reminds me of the flight attendants I saw in my past life.",
  
        "\"Who? Me?\" I ask, pointing to myself.",
  
        "\"Yes. Please participate in our short survey.\"",
  
        "A survey? That's a rarity in this world.",
  
        "\"Sure, I guess...\"",
  
        "\"Thank you.\"",
  
        "\"I-I-I'll take the survey, too!\"",
  
        "\"S-so will I!\"",
  
        "Skel and Po make a last-ditch effort to charm her.",
  
        "\"One customer will suffice,\" she replies, hooking her arm in mine.",
  
        "Together, we cut the long line and make a beeline into the store. When I look behind me at the last second, I can see the disappointment in Skel's and Po's eyes.",
  
        "I follow the woman into a boutique that seems excessively lavish. The interior isn't outwardly garish, but I can tell every last detail of decor has been carefully selected, and it gives off a chill vibe. Even the untrained eye can tell it's decorated in a modern and tasteful fashion.",
  
        "She escorts me through the sales floor to a door labeled EMPLOYEES ONLY. I manage to sneak a few peeks around me, and every product that fills my vision is incredible.",
  
        "Of course, I notice the rumored chocolate, but I also see coffee, makeup, and soap. It's the first time I've seen any of these in this world. Plus, their clothes, accessories, shoes, and underwear are all designed with class and novelty in mind. Even I know these items will fly off the shelves in this world. It's a no-brainer.",
  
        "This place is unbelievable. It'll take the world by storm. It's only a matter of time, I'm certain.",
  
        "We walk through the staff door and down a passage to a humongous stairway. I swear I've seen it in a certain movie about a luxury cruise ship. We ascend the stairs and continue walking through a bright and spacious hallway. At the very end of the hall is a large, sparkling door carved with exquisite engravings.",
  
        "Two lovely ladies stand in front of the door. They bow to me and open it slowly.",
  
        "What lies beyond is a space that looks like an enormous hall. There are tall pillars that resemble those in ancient Greek temples and marble floors that glisten under the light.",
  
        "A red carpet has been unfurled, extending to the back of the room and flanked by two rows of attractive women.",
  
        "\"Huh?\"",
  
        "The moment I set foot in the room, they all kneel simultaneously.",
  
        "\"Um... So how about that survey...?\"",
  
        "An enormous chair has been positioned in the backmost part of the room. A crimson sunset pours down from the skylight and onto that delicate masterpiece.",
  
        "The seat remains empty.",
  
        "A lovely blue-haired elf stands next to it. She's a refined woman with a model-esque figure covered by an entrancing black dress. I know that face.",
  
        "\"We've waited a long time for you, my lord.\" Another woman stoops down to one knee with the elegance of an actress.",
  
        "\"Gamma...\"",
  
        "She's the third original member after Alpha and Beta. Anyone can tell she's a genius by taking one look at her clever face and sharp blue eyes. That's Gamma, the brains of the Shadow Garden.",
  
        "Gamma is clever, I give her that. But she has one major flaw.",
  
        "Her nickname is Gamma the Weak.",
  
        "Even though she's one of the longest-serving members in the Seven Shadows, Gamma is the weakest by far. To backtrack, the Seven Shadows refers to the first seven members of the Shadow Garden. I chose that name because it's badass. Obviously.",
  
        "When it comes to fighting and physical activities, Gamma's instincts are fatally poor. If Delta is the most talented fighter in the Seven Shadows, Gamma is the worst. I personally think the two of them are similar. If I said that out loud, I bet Gamma would blow her fuse and Delta would tremble with mirth, but I know for a fact they're the same type of person.",
  
        "I learned two things when I was teaching Gamma and Delta how to fight.",
  
        "One: Intuition is wasted on an idiot.",
  
        "Two: Intelligence means nothing without intuition.",
  
        "At that point, I decided to try giving them the same instructions: \"Infuse your slash attack with a bunch of magic.\" And that's all.",
  
        "I was suggesting they physically pummel the shit out of their enemy—which is the brutish method I find absolutely abhorrent. That's right; my core beliefs crumbled before this duo without pomp or circumstance. If I even think about that day, I get a headache. Yeah, let's not go there. Forget about it.",
  
        "\"Nice to see you again, my lord.\" Gamma gracefully walks toward me like a model on a runway.",
  
        "Her hips sway salaciously as I listen to the heart-stopping tap, tap, tap of her heels against the floor.",
  
        "\"ZOINKS!\" She trips and falls over nothing.",
  
        "\"Th-these heels are too darn tall.\"",
  
        "And she blames it on her shoes.",
  
        "Gamma clutches her nose as she rises to her feet. Meanwhile, the women around her break into a lightning-fast whirlwind to produce shorter pumps.",
  
        "\"W-well, then. Come this way, Master,\" Gamma continues as if nothing happened, sauntering forward in totally different shoes.",
  
        "But I don't really mind. There are only two ways to react when a girl embarrasses herself: either pretend not to notice or go all out and tease her. Even though I'm in the former camp myself, there's something I have to say.",
  
        "\"Your nose is bleeding.\"",
  
        "The girls around her hastily wipe the blood away.",
  
        "\"R-right this way, my lord.\"",
  
        "I glance at Gamma's burning-red cheeks. She hasn't changed a bit.",
  
        "She escorts me to the giant chair, where I take a seat. The view is... fantastic.",
  
        "Mighty fine, indeed.",
  
        "There's a big and open space where a scarlet glow tumbles in through the skylight, and two rows of hotties are kneeling beside the red carpet. It's as if I've become king—the king of the Shadow Realm. Gamma must have spent a fortune preparing this set for me.",
  
        "My heart is pumping. I'm moved to the core. I cross my legs, rest my cheek in my left hand, and raise the other, focusing my blue-violet magic into my palm and shooting it into the heavens.",
  
        "It almost blasts into the ceiling before it dissolves into a myriad of lights that flood the entire room.",
  
        "\"Receive your reward...\"",
  
        "There is a downpour of light, falling upon the kneeling girls and temporarily dyeing their skin a bluish violet. It only replenishes energy, promotes magic circulation, and heals minor wounds... In other words, nothing much.",
  
        "\"I'll treasure this day forever.\" Gamma's voice wavers as she kneels at my side. Her performance is very convincing.",
  
        "But she isn't the only one trembling. All the lovely ladies on both sides of the long red carpet are quivering, and some are even weeping. The employee who brought me here sniffles through her tears. Gamma is the perfect director for her troupe of actresses.",
  
        "\"You've done well, Gamma. By the way, I have a question about this company.\"",
  
        "Yes, back to business. From the chocolate to the products on the sales floor to the architectural design of the building—I can't imagine them coming from this world.",
  
        "\"Ask me anything.\"",
  
        "\"Is this Mitsugoshi merchandise based off my stories?\"",
  
        "Gamma has always been interested in picking my brain for some reason. Every time Delta beat the living shit out of her, she would pester me in tears, begging me to tell her a story. That was when I told Gamma about my Shadow Wisdom, which included randomly embellished stories about chocolate and the other goodies in Japan from my past life.",
  
        "\"Yes, my lord. I've only re-created a fraction of the divine knowledge that you've imparted unto me.\"",
  
        "\"I s-see.\"",
  
        "I only told her she could make chocolate by throwing together bitter beans and sugar and waiting till it hardens. Calling that knowledge is overkill. And how did she re-create all this? This must be what it means to have a brain. I mean, she's eons smarter than me.",
  
        "But that doesn't bother me. The world has its fair share of geniuses and idiots. That's all there is to it.",
  
        "But I do have one question.",
  
        "\"Do Alpha and the others know about this company?\"",
  
        "\"Of course.\"",
  
        "Oh, I get it.",
  
        "They've fallen into their usual shindig of leaving me out. I understand if it's hard for them to include the only guy here in their clique of girls, but come on.",
  
        "\"A-and have you been making money?\"",
  
        "\"Right now, we have shops in every major city both domestically and abroad. Our business is expanding at a rapid pace. But how long will we be able to hide in the shadows under the guise of a company? This is the most important consideration.\"",
  
        "What's with the cheesy, slipshod setup? It's unnecessary. Just get to the point!",
  
        "Basically, she's telling me that everyone is raking in dough from my knowledge. Everyone but me. If they just gave me a teeny-tiny portion of it, I wouldn't have scrounged for cash or chased down coins like a dang dog.",
  
        "Whatever, it's fine. The girls have prepared this huge prop for me, so I can't complain.",
  
        "But if I could just have a little slice of the pie.",
  
        "\"Um, I hope you don't mind me asking this, but could I borrow a few zeni?\"",
  
        "I'll pay her back someday... maybe.",
  
        "\"Yes, I'll prepare it right away,\" Gamma responds quickly.",
  
        "She gives orders to the woman who brought me here.",
  
        "A few moments later, a wheelbarrow full of coins rolls into the room, as tall as a mountain. I've never seen this many sparkling coins in one place. This is easily over a billion zeni.",
  
        "\"Th-this is a bit...\"",
  
        "I can't borrow all this. I could never pay them back.",
  
        "\"—gh! Is this not enough? I'll send for more right aw—...\"",
  
        "\"No, it's fine.\" I stop Gamma midsentence and reach toward the coins, making a big show of thrusting my hand into the mountain.",
  
        "The coins loudly clink together.",
  
        "Now I've got their attention locked on my right hand. I concentrate with all my might.",
  
        "\"Hmph!\"",
  
        "I take about fifteen coins in my right hand and show it to everyone in the room, before slowly putting it into my right pocket. I've just gotten one and a half million zeni richer.",
  
        "And I have another one and a half million zeni in my left pocket, too.",
  
        "While focusing their attention on my right hand, I snatched some coins in my left at top speed, stuffing them into my pocket before anyone could notice. Alpha or Delta might have picked up on it, but Gamma never stood a chance.",
  
        "\"I-is that it? You can have all—...\"",
  
        "Watching her is hilarious to me. She thinks I'm only borrowing one and a half million zeni, but I actually pocketed three million!",
  
        "\"That's enough for now,\" I say, holding back laughter.",
  
        "\"All right. Take this back.\" Gamma claps, and the gaggle of women roll the wheelbarrow away.",
  
        "Gamma kneels before me. \"My lord, I think I know why you've come today. It must be about the incident.\"",
  
        "\"Yes.\"",
  
        "I nod. What incident?",
  
        "\"My sincerest apologies. We're currently investigating the matter but haven't caught the culprit. Please be patient. I'll hunt down the slasher in the capital—the fools in ebony, pretending to be in the Shadow Garden.\"",
  
        "\"Hmm...\"",
  
        "This is the first I'm hearing about this.",
  
        "\"Hmm...\"",
  
        "Gamma gazes at Shadow as he trails off and begins contemplating. Somewhere in her blue eyes, there's a hint of unease.",
  
        "A tear streams down from the corner of her eye without warning. Seeing those blue-violent rays reminds her of her past.",
  
        "Gamma's life began with a light of the same hue.",
  
        "If he'd never come, she would have died a rotting mound of flesh. She was abandoned by her family, chased out of her home country, stripped of everything in her possession. She fell into an abyss of pain and fear and disappointment—and the one who rescued her was the boy who produced the blue-violet light. She would likely never forget that glow for her entire life. To Gamma, it represents the light of survival.",
  
        "Alpha once told Gamma there was life in it, and Gamma agreed, not for logical but for instinctual reasons.",
  
        "It didn't just heal external wounds—but a much deeper part of the soul. When she touched the bluish light, it was as if she was released from her shackles, liberated from something holding her back. She finally felt like she had reclaimed her identity.",
  
        "On that day, she was reborn. The moment she received the name Gamma, she vowed to devote her new life only to him.",
  
        "While her intentions were sincere, she was the least powerful member of the Seven Shadows. She was defeated and surpassed by newer members, left crawling on the ground and deeply humiliated. Somewhere along the way, Gamma realized she couldn't beat her peers. It didn't matter how hard she trained.",
  
        "She was in anguish. What was she worth? She would rather die than display her stupidity and bring everyone down. But he randomly called out to her the day she planned to end it all. And he imparted his Shadow Wisdom to her.",
  
        "That insight showed her how to fight with her intelligence over strength, and she dived headlong into his ways. And since she thought this was her only chance at survival, she literally put her life on the line to re-create his Shadow Wisdom.",
  
        "When Gamma looks back on it, she's certain he recognized her pain—that he shared his knowledge because he knew she was hurting and had foretold the path she would walk in life.",
  
        "It made her feel forlorn. It saddened her to know he was out of her reach.",
  
        "Does Shadow need me? Tears well up in her eyes whenever she thinks about it. But that's why she needs to wipe the tears away and keep fighting.",
  
        "She'll make the Shadow Garden bigger and stronger, a more suitable organization for Shadow... and on that day, she believes her wish is certain to come true.",
  
        "\"I see. Very interesting.\" His voice pulls Gamma back to reality. \"I think I know who did this. I'll take a look around.\"",
  
        "Gamma's chest tightens when she hears his omniscient tone.",
  
        "She'd failed to help him once again. He could surmise the correct answer with a snippet of information. Even if she mobilizes all her subordinates, he could easily find hints she never could.",
  
        "But Gamma refuses to give up. One day, he's bound to notice her... so she has to persist.",
  
        "\"Nu, come forward.\" Gamma calls over the dark brunette who brought him here. \"This is Nu. She's number thirteen.\"",
  
        "\"Wow.\"",
  
        "He peers at Nu through narrowed eyes. His gaze seems sharp enough to see to the depths of her power.",
  
        "\"Even though Nu only just joined us, even Lady Alpha has recognized her for her strength. Feel free to use her as a liaison, for chores or whatever you like.\"",
  
        "\"I'm Nu. It's a pleasure to meet you.\" Her voice trembles slightly from nerves.",
  
        "\"I'll call you if something comes up.\"",
  
        "\"Understood.\" She bows and steps back.",
  
        "\"I guess I'll be going now.\" He stands. \"Oh, almost forgot. I'd like to buy some chocolate —the cheapest kind. If you could give me a friends and family discount, that'd be great.\"",
  
        "\"We prepare our best chocolate in-house.\"",
  
        "\"Um... how much will that be?\"",
  
        "\"With the friends and family coupon, that'll be one hundred percent off.\"",
  
        "\"One hundred percent... That makes it free! Yippee, it's my lucky day! In that case, I'll take three of 'em.\"",
  
        "\"Thank you for your business.\"",
  
        "Gamma smiles when she sees him return to the role of Cid Kagenou the normie.",
  
        "\"We're not gonna make curfew!\"",
  
        "\"That's 'cause Cid took too long!\"",
  
        "\"I said sorry and gave you chocolate.\"",
  
        "The three of us sprint down the pitch-black streets of the capital.",
  
        "I'm definitely one of the two reasons we're late. But Skel's and Po's constant questions about that lady are the other reason. Nu—was that her name? Either way, I just batted away their interrogation with a bunch of maybes.",
  
        "That said, I never would have pinned Alexia as the type to become a real-life serial killer. If Delta's not the culprit, it's got to be Alexia. I knew it was her the moment I heard about the recent crimes. She's a princess who has it all. What could have possibly set her off...?",
  
        "The woman's heart is an enigma.",
  
        "You know, I don't look down on mass murderers. That's a way of life. But sullying the name of the Shadow Garden is a whole different story. Those unfortunate souls won't be getting away with this.",
  
        "\"Hey, did you hear that?\"",
  
        "\"Nope, nothing.\"",
  
        "Skel and Po are running ahead of me as they talk between themselves.",
  
        "It doesn't seem they heard it well, but to me, it was crystal clear.",
  
        "It was the sound of two blades colliding, which means people are fighting nearby.",
  
        "I stop in my tracks.",
  
        "\"Yo, what's wrong?\"",
  
        "\"We're gonna miss curfew!\"",
  
        "The duo pause shortly after I do.",
  
        "I point to a back alley. \"I'm gonna go take a shit.\"",
  
        "They look like they can't believe I'm for real.",
  
        "\"If I don't go now, it's gonna stream down my legs when I run.\"",
  
        "\"That's an emergency.\"",
  
        "\"A question of curfew or pride.\"",
  
        "Their faces turn serious.",
  
        "\"You guys go ahead. I don't want anyone to see me...\"",
  
        "\"Ew... Gotcha! I won't tell anyone you took a dump outdoors!\"",
  
        "\"No matter what anyone says... I think you made the right decision!\"",
  
        "\"Oof, I can't hold it in. Hurry... Just leave me behind!\"",
  
        "\"Cid... We'll never forget you!\"",
  
        "\"Cid... Even if you poop outside, we'll always be friends!\"",
  
        "\"Go! Goooooooooooo!!\"",
  
        "The pair turn on their heels and book it out of there.",
  
        "After I watch them skitter away, I head down the back alley, following the sounds of a duel. When I trace it to its source, I'm in the heart of the dark alley.",
  
        "Two dark knights are in the midst of a fierce battle.",
  
        "There's no doubt in my mind that the one in the school uniform and short skirt is Alexia. But the other is a masked man dressed entirely in black.",
  
        "Something obviously isn't right. I could understand if Alexia wore jet-black, pretending to be in the Shadow Garden, but not the other way around. I climb to a rooftop and covertly watch them from above.",
  
        "\"Give it up already. There's no way you can win,\" says Alexia.",
  
        "She seems to have the upper hand. The man in black isn't necessarily weak; he just can't touch Alexia, who greatly improved with her recent training.",
  
        "His black coat is torn and tattered, and his blood is dyeing the cobblestones a dark crimson. One final push will determine the winner.",
  
        "\"Why do you kill the innocent? Is that why you fight?\"",
  
        "\"We are the Shadow Garden...\"",
  
        "Just now, the man in jet-black definitely said, \"Shadow Garden.\"",
  
        "\"Is that the only thing you can say? Is that what the man Shadow seeks?\"",
  
        "\"We are the Shadow Garden...\" The man in jet-black repeats himself.",
  
        "Without a doubt, this man is the Shadow Garden impostor.",
  
        "Sorry for doubting you, Alexia. It looks like you're innocent. My sincerest apologies.",
  
        "But why is this guy impersonating the Shadow Garden?",
  
        "That is the obvious next question, and I know the answer all too well. I can fully understand him, because I am who I am.",
  
        "The answer is adoration.",
  
        "This man is enamored by the Shadow Garden... and secret masterminds. I can't say I blame him. I mean, my whole journey began because I loved shadowbrokers. I fell in love with the hidden commanders in movies, anime, and manga and started imitating them.",
  
        "This impostor walked that same path and found the Shadow Garden. Yes, he's the Shadow Garden's first follower in the world.",
  
        "A warm feeling rises in my chest. I'm just happy to know a total stranger accepts us and our ways. I'm glad to know I've chosen the right path.",
  
        "But this is unforgivable. Why? Because I'm a mastermind. If I forgive those who tarnish my organization's name, then I no longer am one. Right now, we can both call ourselves shadowbrokers, and I won't stand or settle for that.",
  
        "\"It's over for you.\"",
  
        "When Alexia thwarts his counterattack by knocking the sword out of his hands, I feel another energy drawing near.",
  
        "\"It's over for you.\"",
  
        "Alexia sends his sword flying, which clangs onto the cobblestone road.",
  
        "\"...Hngh!\" Alexia tumbles, evading a sudden attack from behind.",
  
        "She blocks another rapid strike, drives her foot into the assailant's stomach, and swiftly backs away. Glaring at her new opponents, she steadies her breath.",
  
        "There are two more dark knights dressed in jet-black.",
  
        "Alexia clicks her tongue as she watches the first man lift his sword.",
  
        "This makes three, and she guesses they're all strong, too.",
  
        "Against one of them? She could win easy. She has a good chance of taking two down. But to fight against three opponents is...",
  
        "\"It isn't very nice to pit three of you against a dainty girl.\"",
  
        "I pray they humor her with an answer.",
  
        "\"How about three one-on-one battles? Or is that no good?\" she suggests.",
  
        "They're slowly surrounding her from all sides. She's making sure her back is covered as she inches away.",
  
        "\"Hey, look behind you. The moon is beautiful tonight.\"",
  
        "One man nears her back, and she keeps him in check with her eyes. Their swords dart around with small movements as they attempt to gauge the other's intentions.",
  
        "\"Oh my. You're not going to look? I think you should.\" Alexia smiles. Her red eyes glisten in the moonlight.",
  
        "\"Because there's a lovely lady behind you.\"",
  
        "\"—gr...!\"",
  
        "She gets him.",
  
        "Alexia moves instantly, swinging her bare blade down to slice her blockheaded opponent who turned back to check it out.",
  
        "Die. She doesn't say it out loud but sneers at him instead. She rips through the black cloak, spraying fresh blood.",
  
        "But the cut isn't deep enough. She just needs one more hit to finish him...",
  
        "And in that moment, Alexia suffers a blow to the abdomen.",
  
        "\"Augh...!\"",
  
        "A black boot sinks into the side of her body, and she can hear her ribs snapping under impact. As she spits blood and slashes her weapon, she jams her sword into the black boot.",
  
        "But the enemy evades her attack at the last second, and her blade bounces off the cobblestones.",
  
        "The men are too far to attack.",
  
        "Alexia hacks up blood and wipes her mouth. Her hand is stained red.",
  
        "At this point, she successfully distracted two of them, but there is one left—the one who kicked her to stop her from killing the other man. Alexia glares at him spitefully.",
  
        "Three against one. The numbers haven't changed.",
  
        "But the situation has gotten worse. Two of them are unharmed, and the other is severely injured but capable of using his sword. She can't ignore the last man.",
  
        "On the other hand, Alexia's lungs are punctured by her broken ribs. They'll kill me, she thinks. I guess this is it.",
  
        "Alexia extracts a red pill from a pocket on her school uniform. She secretly nabbed the drug before the warehouse burned down. She's against brutish swordplay, but she prefers it to death. Alexia brings it to her lips. While praying that her impromptu strategy will work, she raises the pill to her lips.",
  
        "At that moment, something inky comes down from the sky, landing as silently as an owl gliding through the night.",
  
        "The black blade bisects one opponent, from which blood erupts. The suffocating stench of gore penetrates the alleyway. With a sharp swing, the man in ebony, Shadow, splatters the blood off his sword in a red line along the wall.",
  
        "\"To the fools who mock the name of the Shadow Garden...\"",
  
        "This is Shadow, the strongest being in existence. He's the one who demonstrates perfect swordplay—and the one she could never forget.",
  
        "Is Shadow... fighting them?",
  
        "That's what it looks like.",
  
        "\"Pay for your sins with your lives,\" Shadow continues.",
  
        "In the next moment, the men in jet-black are set in motion, making an instant decision to spring from the cobblestones, bound off the wall, jump onto the rooftop, and flee.",
  
        "\"How pathetic...\" Shadow moves to pursue them.",
  
        "\"Please wait...!\"",
  
        "Her voice stops him in his tracks. He turns back slowly, fixing his eyes on her.",
  
        "Her sword trembles violently. She realizes... she is doing something stupid.",
  
        "\"I am Alexia Midgar, one of two princesses in this kingdom.\"",
  
        "Shadow just stares at her. She knows he can take her life if he feels like it.",
  
        "\"State your purpose. What are you fighting for? Who are you fighting against? And... do you pose a threat to my country?\"",
  
        "Shadow turns his back to her.",
  
        "\"Stay out of it. Ignorance is bliss.\"",
  
        "\"Wha—...?! Wait, if you're saying you oppose the kingdom...!\"",
  
        "\"And what would you do if I did?\"",
  
        "She's taken aback by his bloodlust.",
  
        "Faced with an insurmountable force, she instinctively cowers. But defying our instincts is what makes us human.",
  
        "\"I'll fight you. I know you're going to try to kill my big sister, and I can't let that happen.\"",
  
        "Shadow lets his coat billow behind him.",
  
        "\"I understand your swordplay. I may not be able to now, but someday, I'll...\"",
  
        "\"Kill me?\" he guesses.",
  
        "With those parting words, Shadow vanishes into the darkness.",
  
        "Alexia murmurs in the dark to herself. \"Yeah, that's right...\"",
  
        "Silence returns to the night. Deserted and alone, Alexia clutches her stomach and huddles into herself. Her sword falls from her quivering hands. She knows she's done something stupid. But she's recently discovered a reason to fight: to protect the few things she holds dear—her only sister and her one friend.",
  
        "\"This isn't good...\"",
  
        "Alexia is about to pass out.",
  
        "She knows something bad will happen to her if she blacks out in the alleyway. She tries using the wall to lift herself up.",
  
        "\"Alexia... Alexia!\" A voice calls to her in the distance.",
  
        "\"Hey, Iris... Iris! Over here!\"",
  
        "\"Alexia...!!\"",
  
        "The footsteps draw closer. Something soft catches Alexia in midair before her body hits the ground.",
  
  
        "\"Alexia! What have you done...?!\"",
  
        "\"Iris...\" Alexia buries her face in her sister's chest.",
  
        "\"Prepare yourself. I'll have you fill me in on all the details later.\"",
  
        "\"...Okay.\"",
  
        "\"Including this.\"",
  
        "\"Huh...?\" Alexia sees the scattered red pills on the cobblestone road, where she dropped them. \"Listen, Iris. I don't know anything about them.\"",
  
        "\"Quiet.\"",
  
        "\"I don't know. Honest.\"",
  
        "\"This is unforgivable.\"",
  
        "\"Oh, my head...\" Alexia decides to let herself pass out and leave these things up in the air.",
  
        "Two shadows dash through the dark streets of the capital. As they grow concerned about attacks from behind, the men in black veer down an alley and skid to a halt. They appear to be in a hurry. They place their hands against the wall, trying to steady their ragged breath. For a few moments, only their harsh inhales echo through the dark alleyway.",
  
        "Thunk.",
  
        "A sound from the depths of the alley.",
  
        "They quickly turn to peer into the darkness. A black silhouette takes form in the shadows, coming toward them.",
  
        "Thunk, thunk.",
  
        "The sound of his boots draws closer.",
  
        "The men cautiously ready their swords. But then, a black blade is jabbed into one of their heads, instantly passing through the hapless soul's skull without warning.",
  
        "\"Agh... Aghh... Aghhh...!\"",
  
        "The ebony katana is withdrawn as the man shrieks in agony, spouting blood and dropping to the ground.",
  
        "The remaining impostor starts backing away in fear when the figure emerges from the shadows and makes his appearance. In a black coat, he possesses a sword and keeps half his face hidden behind a magician's mask.",
  
        "\"Did I keep you waiting?\" His voice is deep, as if resounding from the depths of the earth.",
  
        "\"Eek...!\" yelps the man in black as he steps backward.",
  
        "\"Why are you afraid?\" he asks. \"Did you really think... you could escape?\"",
  
        "The man in black turns to flee.",
  
        "\"Wha—?!\"",
  
        "\"Great work, Master Shadow.\"",
  
        "He turns to find a woman standing there. She's alluring and elegant, wearing a short dress.",
  
        "\"You secured the culprit in no time at all. I'm in awe,\" she comments.",
  
        "\"Is that you, Nu?\"",
  
        "\"Yes,\" she replies, continuing the conversation with the assassin sandwiched between them.",
  
        "He backs up against a wall.",
  
        "\"Please leave the rest to me. I'll extract information from him.\"",
  
        "The man in ebony lowers his sword.",
  
        "\"...Don't mess this up,\" he warns.",
  
        "\"Understood.\"",
  
        "He turns on his heels and vanishes into the darkness. The lovely woman bows her head as she watches him depart.",
  
        "The beauty and the man in jet-black are left in the narrow alley. The latter is fully armed, but the former is weaponless in a dress and heels.",
  
        "The man acts quickly. With a series of rapid slashes, he stabs the unarmed girl to death.",
  
        "At least... that's what he hoped to do.",
  
        "With her dress upturned, she rends the night asunder with her white, sensual legs.",
  
        "Ka-chank. The man's sword falls to the cobblestone road.",
  
        "There's a beat before eight of his fingers drop next to it.",
  
        "\"A-aghh...!\"",
  
        "It's hard to tell if he's trying to retrieve his eight fingers or his sword. With only the thumbs remaining, he extends one of his hands.",
  
        "But it's crushed by a high heel.",
  
        "\"Gyah...!\"",
  
        "With that, an ebony blade emerges from the toe of her stiletto. The blood from his fingers flows over the cobblestones.",
  
        "\"I'm not as kind as Master Shadow.\"",
  
        "He can hear the bitterness in her voice. The man looks up to find a gaze cold enough to freeze him to death.",
  
        "\"Don't think I'll let you die in peace.\"",
  
        "With the hem of her dress rippling through the air, she slams his chin with her milky knee.",
  
        "The next morning, a ghastly corpse is found hanging over the main street in the capital. There is a message written in blood on its stomach:",
  
        "THE PATH OF FOOLS",
  
        "The face of the dead man is warped with agony and fear.",
  
        "Lying in an immaculate bed, Alexia looks up to see her sister's stern face.",
  
        "\"I know what happened.\" Iris is seated next to the bed. \"The murders weren't committed by the Shadow Garden but by impersonators from another organization.\"",
  
        "\"Shadow mentioned that,\" Alexia adds.",
  
        "\"Shadow, huh...? We still don't know what this organization is.\" Iris lowers her eyes in contemplation. \"During the attacks on the capital, I identified the existence of a dark knight who may be in the Shadow Garden.\"",
  
        "\"The one who goes by Alpha.\"",
  
        "Iris nods. \"Other sources have indicated the Shadow Garden is an extraordinarily powerful organization. And your report confirms their name and the existence of a man called Shadow. But that's all we know. Everything else is a mystery. We don't even know their goal.\"",
  
        "\"Shadow was fighting the Cult of Diablos. Maybe their purpose has to do with them.\"",
  
        "\"Which makes the Cult our clue...\" Iris lets out a sigh.",
  
        "\"Iris...?\"",
  
        "\"I thought they were a normal religion that believes in Diablos the demon, but it looks like they're pulling the strings in more operations than we'd thought.\"",
  
        "\"Like that fire?\"",
  
        "\"There's that. And the budget for the Crimson Order. I can't get the go-ahead, so I'll be funding it out of pocket for now.\"",
  
        "Alexia knits her brows together. \"Does that mean the Cult not only infiltrated the Knight Order but that they're also civil officers?\"",
  
        "\"I don't know. They're either members of the Cult or taking bribes... but I can't say for sure. After all, I was reckless in throwing together the new Order.\"",
  
        "\"I'll help you pay for it.\"",
  
        "\"It's the thought that counts. You know how many members are in the Crimson Order, right?\" Iris smiles bitterly.",
  
        "\"Eight.\"",
  
        "\"Right, just eight. With my contributions, they could easily survive for over ten years.\"",
  
        "\"Then can't we make the Order bigger?\"",
  
        "\"It would be senseless to make it bigger now. We don't even know who we're fighting yet.\"",
  
        "\"Iris, um...\" Alexia apprehensively looks up at her sister. \"Which is the enemy of the Crimson Order: the Shadow Garden or the Cult of Diablos?\"",
  
        "Iris smiles. \"Both. I refuse to allow any mischief in this kingdom.\"",
  
        "\"Iris... We shouldn't fight Shadow.\" Alexia clenches the bedsheets.",
  
        "\"Alexia, drop it...\"",
  
        "\"Iris, you wouldn't say this if you knew him. I know you saw that attack that colored the night sky throughout the capital!\"",
  
        "\"We've already concluded that was just the artifacts burning.\"",
  
        "\"But I saw him use his magic!\"",
  
        "Iris huddles close to Alexia and peers into her red eyes. \"That sort of power is impossible for humans to achieve. Spending too much time in captivity has made your memory foggy. And I bet all those strange drugs made you hallucinate. I don't think you're lying, but I do think you need rest.\"",
  
        "\"Iris!\"",
  
        "Iris places both of her hands on top of Alexia's. \"And even if it really did come from that Shadow, we can't turn a blind eye to him. Who will protect our country if I flee?\"",
  
        "\"Iris...\"",
  
        "Iris strokes Alexia's hair, then rises to her feet. \"Get some rest until you're healed.\"",
  
        "\"...I'll help you when I get better.\"",
  
        "\"That won't be necessary.\"",
  
        "\"Huh?\"",
  
        "\"Oh, you're under house arrest. I must've forgotten to tell you.\"",
  
        "\"You can't be serious!\"",
  
        "\"For stealing evidence.\" Iris shows her the red pills, and Alexia's jaw drops to the floor.",
  
        "\"Think about what you've done.\"",
  
        "The door slams closed behind her."
      ],
      "c6": [
        "I'm being watched.",
  
        "I feel their gazes when I walk into class. Everyone's watching me and whispering.",
  
        "\"That's him.\"",
  
        "\"The one who shit himself as he ran...\"",
  
        "\"I heard he crapped on the street so everyone could see.\"",
  
        "I shoot daggers at Skel and Po. Their eyes nervously flicker around the room.",
  
        "\"Th-that was a real disaster yesterday.\"",
  
        "\"G-good morning. It must've been tough for you.\"",
  
        "\"Yeah, morning. And today is much worse.\"",
  
        "They wear a pair of stiff smiles, and I heave a huge sigh.",
  
        "\"A-anyway, did you bring your chocolate from yesterday?\" Skel takes out a baggie.",
  
        "\"I brought mine,\" Po chimes in.",
  
        "\"Yeah, I guess,\" I say.",
  
        "\"All right. Come lunchtime, Operation: Give-a-Gift begins!\"",
  
        "\"Ooh, I'm so excited!\"",
  
        "\"Yeah, whatever you say.\"",
  
        "Which brings us to lunch.",
  
        "We follow Skel, who claims he'll show us how it's done.",
  
        "He stands in the hallway near a classroom for the second-year students. We observe him from a distance.",
  
        "\"He's going for an upperclassman? Go, Skel.\"",
  
        "\"Yeah, whatever you say.\"",
  
        "After a few seconds pass, a cute girl exits the classroom.",
  
        "\"Uh, um... here.\" Skel holds out the chocolate.",
  
        "\"Hey, you got some business with my fiancée?\" A pair of large hands clutch his shoulders.",
  
        "There's a crazy-buff senior behind him.",
  
        "\"Oh... I... I just...\"",
  
        "\"Let's take this outside. Y'know, to talk it out.\"",
  
        "The two of us ignore his distressed stare and turn away.",
  
        "\"Let's go.\"",
  
        "\"Yeah, whatever you say.\"",
  
        "I can hear Skel screaming behind me.",
  
        "Po takes me to the library. It's an enormous resource shared between the academies for dark knights and sciences. Naturally, this isn't where the jocks of the school hang out. Though, of course, it's not for me, either.",
  
        "\"Which means you're after someone from the Academy of Science.\"",
  
        "\"Yes. I'm not taking Skel's approach. See, I did a thorough investigation on her. I know her friends; her favorite foods; her dorm room number; which bathroom she uses; her shoe size and the smell of her feet; the color of her underwear; her hip, bust, and waist measurements; and I used a cup she drank from to...\"",
  
        "\"All right, enough. Just go already.\"",
  
        "I drag Po into the library and walk away. I don't see what happens next.",
  
        "\"Eeeeeeeeek!! It's that guy! My stalker!\"",
  
        "Almost instantly, I hear screaming behind me.",
  
        "The bag of chocolate sways as I walk around the library. I usually never come here. It's nice.",
  
        "I speak to the first girl from the Academy of Science that I pass. \"Here's some chocolate.\"",
  
        "\"Huh?\" She's a hottie with light-pink hair.",
  
        "I hand off the bag of chocolate and leave.",
  
        "\"Wait! What?\"",
  
        "I can hear her getting all confused. I think I've seen her face before, but I can't remember where.",
  
        "\"I wonder what this is.\"",
  
        "A cute girl with peach-colored hair in the study room cocks her head to the side. She scrutinizes the brown objects in the box with relaxed eyes. Even after taking the fragrant thing in her hand, she can't identify it. She's almost certain the boy had called it chocolate when he gave it to her.",
  
        "\"Sherry, are you all right?\"",
  
        "There's a middle-aged man standing behind her with salt-and-pepper hair all slicked back.",
  
        "\"Assistant Principal Lutheran...\"",
  
        "\"You promised to call me Father in private.\"",
  
        "\"Foster Father.\" Sherry smiles uncomfortably.",
  
        "\"Why do you have that box of chocolate?\"",
  
        "\"Chocolate? A boy from the Academy for Dark Knights gave it to me.\"",
  
        "\"You don't say.\" Lutheran thoughtfully strokes his beard. \"That's the luxury snack. All the girls have been talking about it. I think he gave it to you as a gift.\"",
  
        "\"What? But I don't even know him.\"",
  
        "\"They call it 'love at first sight.' That's the finest chocolate in the world. You can line up for it at the crack of dawn and still not be able to purchase it. He must have done the impossible to get it for you.\"",
  
        "\"Love at first sight...,\" Sherry murmurs, her cheeks tinged pink.",
  
        "\"How will you answer him?\"",
  
        "\"Answer him...?\"",
  
        "\"He must be waiting for your response.\"",
  
        "\"B-but I...\" Her face flushes bright red, and her eyes dart back and forth.",
  
        "\"You're not just here to do research. You should learn how to interact with your peers. That's what school is for.\"",
  
        "\"...I will.\"",
  
        "He gently grins at Sherry, who's hung her head.",
  
        "\"Is all going well with the artifact?\"",
  
        "\"I've only just started.\" Sherry smiles uneasily, her cheeks still slightly flushed.",
  
        "\"That's totally understandable.\"",
  
        "\"But I do know one thing: It's written in a unique code.\"",
  
        "\"A unique code?\"",
  
        "Sherry spreads documents across a table. \"I'm guessing it was used by an ancient country or organization. And... it's almost identical to the one from Mother's research.\"",
  
        "\"Oh, Lukreia's... She was a great researcher, too.\" Lutheran closes his eyes as if remembering the past.",
  
        "\"I need to crack the code that Mother researched right before she died.\"",
  
        "The face examining the documents was that of a brilliant researcher, no question.",
  
        "\"It's just the right job for you.\"",
  
        "\"Thank you.\" When Lutheran lightly pats her head, Sherry is bashful.",
  
        "\"Where is the artifact now?\" he asks.",
  
        "\"A knight is guarding it in the other room.\"",
  
        "\"You're not holding on to it?\"",
  
        "\"Only if it's necessary. It's important for me to think in peace. Plus, I get too nervous around the knights.\"",
  
        "\"I see. Cough, cough... E-excuse me...\" Lutheran turns away to hack.",
  
        "\"Foster Father! Are you all right?\" Sherry panics and rubs the back of a skeletal man with sunken-in cheeks.",
  
        "\"I-I'm fine. It's okay.\" Lutheran calms his breath. \"And I was just feeling good the other day. I guess illness can be unpredictable.\"",
  
        "\"Foster Father...\"",
  
        "\"Don't worry about me. More importantly, I received another message from the college town asking if you'd like to study abroad.\"",
  
        "\"The college town, Laugus...\"",
  
        "\"The most brilliant scholar in the world has acknowledged your research. If you study in Laugus, your skills will only improve. It's a fantastic offer.\"",
  
        "Sherry shakes her head. \"I can't leave you alone sick, Foster Father.\"",
  
        "\"You don't have to worry about me, Sherry.\"",
  
        "\"I would have died if you hadn't taken me in when Mother passed away. I'm going to help you... for helping me,\" she states with tears forming in her eyes.",
  
        "\"Sherry... you're a wonderful daughter,\" Lutheran replies with a kind smile. \"Good luck on your research. And eat your chocolate.\"",
  
        "\"...I will.\"",
  
        "Lutheran exits the study room. Sherry puts the chocolate in her mouth.",
  
        "\"It's sweet... It's delicious.\"",
  
        "She reaches for a second piece.",
  
        "I'm on my way back home after an Alexia-less, Skel-less, Po-less day.",
  
        "The campus has assumed the orange hue of the setting sun. I walk through the campus, where there aren't many students, when a girl suddenly approaches me. Her uniform indicates she's in her second year at the Academy of Science. Her dark-brown hair is pulled back into bun. A drab pair of glasses covers her dark-brown eyes.",
  
        "But a seasoned extra can tell: She's an inconspicuous beauty who's pretending to be a minor character.",
  
        "\"Hey, can I talk to you for a minute?\"",
  
        "I've heard that voice before.",
  
        "\"Nu?\" I whisper. She nods in reply.",
  
        "It's crazy how a change of hair and makeup can conceal an elegant woman.",
  
        "\"Are you planning on going to school here?\" I ask in a hushed voice.",
  
        "\"No, I'm just borrowing the uniform. It helps me blend in with the others.\"",
  
        "\"I see.\"",
  
        "I don't know most of the students here. As long as she's in uniform, there's a good chance she'll stay undetected.",
  
        "\"Where do you want to talk?\"",
  
        "\"Let's head to that bench.\"",
  
        "There's no one near the seats that overlook the campus, and the two of us sit under the dazzling glow of the sunset.",
  
        "Nu surveys the academy. Behind her glasses, she narrows her eyes.",
  
        "If her life had gone differently, she would have been in her second year. Until the day she was abandoned for being possessed, she always believed she would have a peaceful, successful future.",
  
        "But that ended up being nothing more than a fantasy.",
  
        "For little did she know, everything she took for granted—her friends, family, life itself —rested atop a thin tower of ice. Nu was a happy child who didn't know what lurked underneath that fragile construct.",
  
        "Her eyes observe the students in envy and sorrow, and she recognizes a few of their faces.",
  
        "In many social circles, Nu was known as the daughter of the marquess, living an affluent lifestyle.",
  
        "But that time in her life has passed. She's been erased from the history of her household, as if she never existed.",
  
        "She wonders how many of her friends still remember her.",
  
        "Maybe they talk about her. But she guesses they'd rather spread hateful rumors.",
  
        "That's what happens to the possessed.",
  
        "There's no reason she has to meet Shadow at school in daylight, but she can't relinquish her last shred of hope. She wants to believe she has a place in a tranquil corner on this campus. She wants to relish in this foolish dream.",
  
        "Nu smirks.",
  
        "She has no place to call home, but she has comrades who share the same goal. And sitting right next to her... is her beloved master.",
  
        "He started fighting all by himself. Even if he was the last man in the world, he would continue to fight. His existence is what keeps the Shadow Garden afloat.",
  
        "People are frail and want to rely on something definite. If god is essential to Earth, then Shadow is essential to the Shadow Garden.",
  
        "But she believes he's better than god. If she opens her eyes, she can see him—and if she reaches out, she can touch him.",
  
        "\"Hmm? What's up?\"",
  
        "\"There's something on you.\" Nu wipes a stray thread off his shoulder and looks at his profile. \"Please don't tell Gamma about this. She'd be so mad if she found out I snuck onto campus in broad daylight.\"",
  
        "\"You got it. But I was really surprised. That makeup makes you look totally different.\"",
  
        "\"My face is bland, so it's easy for me to change my appearance. I've always been good with makeup. I guess you could call it one of my old hobbies.\"",
  
        "\"Wow, and your Mitsugoshi persona?\"",
  
        "\"When I'm there, I make myself look much older than I really am.\"",
  
        "\"I see. By the way, how old are you?\"",
  
        "\"It's a secret.\" Nu flashes a beguiling smile. \"I'm here to report on the incident yesterday with the man in black.\"",
  
        "\"Great.\"",
  
        "\"I interrogated the pretender but couldn't get anything out of him. I suspect rigorous brainwashing destroyed his psyche. Judging from his other physical characteristics, I believe he is a Third Child.\"",
  
        "\"Huh?\"",
  
        "The Children of Diablos.",
  
        "If the Cult finds impoverished orphans or young citizens who possess even the slightest bit of magic, its members will snatch them from the streets and raise them in a special facility. There, the children undergo brutal training and brainwashing. They're loaded with drugs, and it's said that fewer than 10 percent of them manage to \"graduate.\"",
  
        "The Third Children are those in the 10 percent who are deemed worthless. They only exist to be sacrificed and abandoned. With minds too corrupted to leak classified information, the Thirds are more powerful than the average knight.",
  
        "The Seconds are mentally stable. The few Firsts in existence are said to be the greatest warriors in the world.",
  
        "Nu doesn't tell Shadow that, of course. She doesn't think she has to explain common knowledge to him.",
  
        "\"The Cult is clearly pulling the strings in these incidents. I imagine their purpose is to lure us in.\"",
  
        "\"Hmm.\"",
  
        "\"But that isn't their only goal. The other day, we confirmed the existence of a Named First Child in the capital. He's called Rex, the Game of Betrayal. I'm guessing they're gathering for a particular purpose. Right now, we're not sure where Rex is, but we're currently investigating the matter.\"",
  
        "\"Hmm?\"",
  
        "The Named Children.",
  
        "They are the Children of Diablos who have made extraordinary contributions to the Cult. Most of the Named are First Children, but there are rare cases of a Second. There are Named who have risen through the ranks to the Knights of Rounds, which is why it's said this title is the gateway to success.",
  
        "And one member of the Shadow Garden used to be a Named First Child. All this information has been provided by that same woman.",
  
        "But Nu skips over these details, of course. She figures he already knows this.",
  
        "\"Please be careful. The Cult is up to something. We'll keep investigating and report back as soon as we know more.\"",
  
        "\"Hmm.\"",
  
        "The evening sun is sinking beneath the horizon. This dim glow of the sun turns the clouds vermilion.",
  
        "Nu fans her neck, which is slightly sweaty from the heat, and stands up. After stretching beside her, Shadow rises to his feet.",
  
        "There could have been a future where they spoke as lovers and spent their days together at school. Nu smiles wistfully, imagining what might have been.",
  
        "And even if it's a moment of indulgence...",
  
        "\"Hey, don't you know how to escort a lady?\"",
  
        "\"Escort? You mean like this?\"",
  
        "He sticks out his left arm, and she links with him, walking side by side, and smiles.",
  
        "This was the future she should have had.",
  
        "A male student screams from far away. \"Shit spillerrr!!\"",
  
        "Nu crossly clicks her tongue. She recognizes the boy who ruin the mood. He's the piece of trash who would constantly hit on her in social circles. She decides to beat him up afterward.",
  
        "Next to her, Shadow looks around nervously for some reason. Nu squeezes his left arm.",
  
        "Who's the strongest dark knight in school? Two years ago, the answer would have been Iris Midgar.",
  
        "After she graduated, there would come a time when no champion reigned over the Midgar Academy for Dark Knights. At least, that was what everyone thought.",
  
        "But a champion appeared out of the blue.",
  
        "An unexpected person assuming an unusual form rose to absolute dictatorship over the academy.",
  
        "And her name is Rose Oriana.",
  
        "She's a transfer student from the land of art and culture, known as the Oriana Kingdom, where she is daughter of its ruler, King Raphael Oriana.",
  
        "The Oriana Kingdom and the Midgar Kingdom are allies. And although she was expected to transfer to the Midgar Academy for Dark Knights, no one ever imagined she'd become the unrivaled champion at school.",
  
        "Frankly, it doesn't matter whether it was expected.",
  
        "The problem is Rose Oriana is my opponent in the first round of the preliminary tournament.",
  
        "I do have the option to withdraw.",
  
        "Skel got tough love from an upperclassman in a body slam. Po got disciplinary action for sneaking into the girls' dormitory. Which basically means I can get out of the preliminaries if I make up an excuse.",
  
        "But now that I think about it, losing to the undefeated champion in the first round is exceedingly normcore.",
  
        "It's fitting for a minor character—there's no mistaking it.",
  
        "I won't be withdrawing. My mission is to partake in the most normie fight in the world—for normies, by normies!",
  
        "Which is why I'm now drawing my sword in front of a huge audience.",
  
        "Princess Rose Oriana is standing right before my eyes.",
  
        "With her honey-colored locks elegantly curled, Rose dons stylish fighting gear and wields a slender sword. The curves in her face are gentle, her figure is stellar, and everything about her is just plain chic. It's what one could expect from the princess of the country of the arts.",
  
        "To top it off, Rose is also Student Council president despite being a transfer student in her second year. Thanks to her beauty, strength, and popularity, people are cheering enough to rock the stadium.",
  
        "No one is shouting my name. I sort of wish they would cheer for a fellow countryman, but whatever.",
  
        "This is the stage for a side character. The best one of all.",
  
        "My sword violently shakes in my hands.",
  
        "I wonder if I've ever felt this nervous before a fight. She could claim victory, commit murder, vaporize me without a trace, but that's all too simple. No one wants to see a cop-out. They want to see me lose harder than anyone else.",
  
        "How does one define normie-ness?",
  
        "I'm stepping into philosophical territory here.",
  
        "But have no fear. I've mastered the Forty-Eight Hands of Minor Mystery technique in preparation for this day.",
  
        "\"Rose Oriana versus Cid Kagenou!\" the judge announces.",
  
        "Electric sparks shoot from our eyes—her honey-colored irises and my normie ones.",
  
        "Hey, Rose Oriana. Can you keep up?",
  
        "Keep up in the ultimate fight with a background character!",
  
        "\"Let the battle begin!!\"",
  
        "Rose's rapier begins dancing through the air the moment the match starts. It draws beautiful, sharp spirals as it approaches my chest.",
  
        "If I was a real side character, I wouldn't be able to react in time.",
  
        "But I can see it.",
  
        "I see it... and I don't flinch. I can't let her see a single reaction.",
  
        "Why? 'Cause that's how we roll.",
  
        "I won't move an inch until the rapier hits my chest. The tip of the weapon is blunt for this preliminary round, but that doesn't mean I'll come out unscathed.",
  
        "The rapier touches my chest.",
  
        "At that moment, I make my move.",
  
        "Without showing any other movements, I lunge back using the strength in my toes, and I use the force of the rapier pushing against my chest to add a spin.",
  
        "From a secret pocket near my wrist, I tear open a bag filled with blood that I collected for this day.",
  
        "All this has taken less than ten deciseconds.",
  
        "I'm spinning backward as I spout blood like a fountain.",
  
        "\"PLEEEEEEEEEEEEEGH!!\"",
  
        "As a ruby tornado, I create a beautiful masterpiece of splattered blood.",
  
        "I call this my Hidden Normie Technique: Spinning Guard, Bloody Tornado.",
  
        "I clumsily bounce off the floor and roll over.",
  
        "The cheers from the audience shake the arena.",
  
        "\"Guh... guh... gyaaaaaahhhhhh!\" I slice open another bag and start spewing blood everywhere.",
  
        "It's perfect!",
  
        "Everyone in this venue totally buys that I'm a side character. I almost flash my pearly whites after my perfect-ten performance, but I stop myself.",
  
        "It isn't over yet.",
  
        "That's right. This isn't the end.",
  
        "\"Gurg, ga-aaah, AAAAAARGH!!\" I rise to my feet, pretending I'm literally ten seconds away from death.",
  
        "Yeah... that's because there are still forty-seven techniques left.",
  
        "How is he standing?",
  
        "Rose Oriana is stunned by the boy who keeps getting back up no matter how many times she knocks him down.",
  
        "He's soaked in blood, and no one can tell if he can lift up his sword. He doesn't look like he can fight—No, it's a miracle he can even stand.",
  
        "Although her sword is thin, her attack certainly isn't light. The tip of her blade may be blunt, but the magic inside of it is real. If she got one decent shot, he'd be rendered useless.",
  
        "But... exactly how many times has she hit him?",
  
        "It wasn't just once or twice. Even though he endured at least ten strikes, he still rises to his feet with unrelenting vigor.",
  
        "How is he still standing after all that? His body has exceeded its physical limits, but his eyes seem devoid of death.",
  
        "His fierce gaze tells her he still has something left to do.",
  
        "That's right. His soul surpasses the limitations of the body, and his unyielding soul is holding his broken being together.",
  
        "His valor leaves a deep impression on Rose. How badly does he want to win this battle and why? He must have a reason he can't allow himself to lose.",
  
        "There is an immense difference in skill. He doesn't have so much as a one-in-a-million chance, but even then, he refuses to give up.",
  
        "His fiery eyes glare at Rose.",
  
        "It isn't over yet. This isn't the end.",
  
        "Rose is moved that the tenacious spirit of a hero can defy death in the face of an undefeatable opponent. She has great respect for him, offering her deepest apologies for assuming it'd be an easy victory. He's certainly hopeless when it comes to a sword fight, but as for the battle of spirits, Rose has completely lost.",
  
        "\"You'll perish with my next attack.\"",
  
        "Which is why she chooses to end it quickly. If he keeps this up, he'll get up until he dies. That and... she didn't want to kill a promising young fighter.",
  
        "No one is cheering in the arena anymore. Everyone watches the boy in horror.",
  
        "Her sword reaches the apex of magic on this day. The sky quakes, and the people in the audience, concerned, mumble to one another.",
  
        "\"Looks like you're not giving up.\"",
  
        "His eyes burn brighter and brighter, not even slightly fearful of her oncoming attack but instead displaying an insatiable determination to fight.",
  
        "He leaves her with no choice but to unleash her full power.",
  
        "Rose's sword hums through the air.",
  
        "\"Stop!! That's enough. This battle is over!\"",
  
        "The referee steps between them and ends the match. He judges it would be too dangerous to continue.",
  
        "Rose is relieved, simply put.",
  
        "But the boy feels differently.",
  
        "\"Come on! I've still got thirty-three left...\"",
  
        "His eyes are screaming, I can still fight!",
  
        "\"The winner is Rose Oriana!!\"",
  
        "A mighty applause congratulates Rose.",
  
        "She waves back at the audience before bowing deeply to Cid, who's in a heap on the floor.",
  
        "I was almost brought to the first aid office after preliminaries, but I slip away when no one's looking.",
  
        "That was a close one.",
  
        "If anyone saw I was unscathed, it'd be a huge mess. Had I stayed any longer, I might've had to start taking swings at myself.",
  
        "I leave through the player entrance and walk down an empty hallway.",
  
        "I guess I'll have to wait until next year to show off the rest of the thirty-three esoteric techniques. Or I bet I'll have a good opportunity to use them before then.",
  
        "\"U-umm...\"",
  
        "\"Hmm?\"",
  
        "An unfamiliar student calls over to me out of the blue. I don't recognize her voice. I'm not sure, but I feel like I've seen this peach-haired cutie in her uniform for the Academy of Science before.",
  
        "\"Are you hurt?\"",
  
        "\"I've just barely avoided... anything serious... maybe?\" I casually pose with my hand to the wound on my chest.",
  
        "\"I'm glad to hear that. I watched your fight.\"",
  
        "\"O-oh, really.\"",
  
        "\"I don't usually watch battles, but I thought it was really cool the way you stood up over and over again.\"",
  
        "\"Er, 'cool'...?\"",
  
        "\"Yeah...\" Her cheeks turn pink, and she nods.",
  
        "To think a normie is cool. Geez, she has weird taste. I guess there were a lot of spectators, so it isn't too odd there were oddballs in the bunch.",
  
        "\"Um, here...\" She timidly holds out a small pouch.",
  
        "\"What's this?\"",
  
        "\"I baked you cookies. In return for the...\"",
  
        "It must be a thank-you for putting on a good show.",
  
        "\"Thanks.\"",
  
        "I figure Why not? and take them.",
  
        "She smiles cheerfully.",
  
        "\"I-if you wouldn't mind, I'd like to start off as friends.\"",
  
        "\"Friends? Sure thing.\"",
  
        "My general policy is to not embarrass women—with a few exceptions.",
  
        "\"Yay! Foster Father, I've made a friend!\"",
  
        "Foster father?",
  
        "I follow her line of sight to see a middle-aged man walking toward us. He has black, slicked-back hair with gray streaks. I know I've seen this skeletal fellow before.",
  
        "\"Assistant Principal Lutheran...\"",
  
        "I've heard the assistant principal of this school is a master swordsman who's won the Bushin Festival.",
  
        "Which means this girl who loves him as her foster father must be...",
  
        "\"Sherry Barnett...!\"",
  
        "\"Yes?\"",
  
        "According to my personal research, she has the most potential to become the main character in the Academy of Science. I believe she's supposed to be in a position where she gives the protagonist advice, solves the greatest mysteries, and creates powerful, Boss-toppling devices. I never thought I would have to fight someone from the Academy of Science, so I honestly didn't care and forgot all about her.",
  
        "\"You must be Cid Kagenou.\" Assistant Principal Lutheran stands next to Sherry.",
  
        "\"Yes.\"",
  
        "\"Any injuries?\"",
  
        "\"I—I was miraculously... Oh yeah. Maybe she went easy on me?\"",
  
        "The assistant principal strokes his chin, quietly confirming my suspicion.",
  
        "\"Yes, I think Rose was holding back. But you must get yourself to a doctor.\"",
  
        "\"Yes, absolutely.\"",
  
        "I absolutely won't be doing that.",
  
        "Lutheran nods and places a hand on Sherry's shoulder.",
  
        "\"This girl always has her nose in her research, so she doesn't have many friends.\"",
  
        "\"Foster Father!\"",
  
        "The assistant principal merrily chuckles and continues to speak. \"I wasn't always able to laugh like this, you know. Sherry and I have been through a lot. I hope you two can get along. It's all a father could wish for.\"",
  
        "Lutheran's face is stern as Sherry stands beside him with an uncomfortable smile.",
  
        "I only befriend side characters... but there's no way I can say that.",
  
        "\"...Sounds great.\"",
  
        "\"Well, I'll leave the rest up to you youngsters.\" The assistant principal pats my shoulder and leaves.",
  
        "\"Um, it's nice to officially meet you.\"",
  
        "\"Nice to meet you, too.\"",
  
        "\"So what do you want to do?\" She tilts her head. \"Oh, right. We have to get you to a doctor before anything else. I'm sorry for getting carried away.\"",
  
        "She smiles uneasily.",
  
        "\"No, don't worry about me. I'm fine.\"",
  
        "\"That may be true, but...\"",
  
        "\"I don't need to see a doctor. I'll go later. Seriously, I will. Okay? Yeah, so let's go out for tea or something.\"",
  
        "\"Um, are you sure you're okay?\"",
  
        "\"Positive.\"",
  
        "\"Dark knights are incredible.\"",
  
        "\"Yep.\"",
  
        "This stunner flashes me a smile. She's the furthest thing imaginable from a background character.",
  
        "After that, the two of us eat her cookies and talk over tea. We go our separate ways when we finish. Though a perfectly average girl in conversation, she seems to be flooded with requests from the Knight Order, currently conducting research on a sacred artifact. I went the extra mile and told her I was impressed. Oh, by the way, her cookies were simple but downright delicious. She can never be a normie's friend. But she goes to the Academy of Science, so we probably won't meet again anyway.",
  
        "The next day, I notify the school that I'll be taking five days off for medical treatment to ease their suspicions.",
  
        "My classmates are a little nicer to me when I finally come back.",
  
        "Ever since Sherry befriended Cid, she feels like she's floating on air.",
  
        "Cid has been absent from school due to the injuries he sustained at the preliminaries.",
  
        "He said he felt fine after the tournament and even joined her for tea, but he seems to have overdone it after all. She's worried about his condition.",
  
        "She thinks about visiting him but doesn't want to be a bother. But something is gnawing at her, and she needs to talk.",
  
        "\"Whew...\" Sherry stops analyzing the artifact and lets out a sigh.",
  
        "She can't focus on her work. Her head is too far in the clouds.",
  
        "The afternoon sunlight flows into the study room.",
  
        "No matter what she does, he's all she can think about.",
  
        "She thinks back to the moment he gave her the chocolate, about his unrelenting stance during preliminaries, about their conversation over tea—over and over again.",
  
        "She thinks about him during class and as she conducts her research, right until she goes to bed.",
  
        "\"I wonder what's wrong with me...?\"",
  
        "She retrieves the empty box of chocolate from a drawer in her desk.",
  
        "Even though she had already eaten the contents, she could not find it in herself to throw away the beautifully decorated box.",
  
        "The sweet aroma of chocolate still clings to it.",
  
        "Sherry is also curious about a certain rumor.",
  
        "From what she's heard, Cid and Princess Alexia are in love.",
  
        "She doesn't know the specifics, but she imagines the rumor holds up for it to make its way from the Academy for Dark Knights to the Academy of Science.",
  
        "\"Mm!\" Sherry stretches as she watches the curtain billow with the wind.",
  
        "\"Okay. I'll do it.\"",
  
        "She can't concentrate on anything.",
  
        "Sherry decides she has to talk it out in person.",
  
        "Knock, knock.",
  
        "Sherry gives a few quick raps on a door in the dormitory for girls. That's where the student in question is supposedly under house arrest.",
  
        "\"It's me, Sherry Barnett, the second-year student at the Academy of Science.\" She introduces herself through the door and waits for a response.",
  
        "\"Hello,\" replies a voice at the same time the door swings open. \"Is there anything I can do for you, Sherry?\"",
  
        "\"Yes. Apologies for the sudden visit.\"",
  
        "\"Come on in,\" suggests the room's resident, Alexia.",
  
        "Her place is spacious and serene, much larger than the average dorm lodgings. Sherry is told to make herself at home and perches on the couch.",
  
        "\"Would you like black tea? I've also got coffee. Seems to be really popular recently.\"",
  
        "\"Oh, I don't need anything.\"",
  
        "\"It's no trouble.\"",
  
        "\"O-okay. I'll take a coffee.\"",
  
        "\"All right.\" Alexia begins gracefully brewing a pot.",
  
        "Sherry starts getting nervous. I'm in my second year, and she's only in her first. No need to get worked up, she reassures herself with nonsensical logic, thinking it's all good because she's Alexia's senior. But on second thought, Alexia is royalty.",
  
        "Maybe this isn't such a good idea.",
  
        "No, no—she's the upperclassman here. She has to be confident.",
  
        "\"I can guess why you're here, Sherry.\"",
  
        "Sherry jolts at those words. \"U-umm...\"",
  
        "\"This is about the artifact, right?\"",
  
        "\"Well, not exactly.\"",
  
        "There's the clink of a coffee cup. Alexia places it on the table in the midst of an awkward lull in the conversation.",
  
        "\"Here you go.\"",
  
        "\"Th-thank you very much.\"",
  
        "Alexia takes a seat opposite Sherry.",
  
        "\"Whoa, that's bitter...,\" Sherry whispers after taking a sip.",
  
        "\"It's easier to drink if you add milk and sugar.\"",
  
        "\"O-okay.\"",
  
        "Sherry didn't mean for Alexia to hear that comment, but it looks like she did. Sherry's automatic reflex is to add tons of milk and sugar and chug it.",
  
        "\"Oh, it's so good.\"",
  
        "\"G-great... Those are the finest coffee beans from Mitsugoshi. I'm glad you like it.\"",
  
        "\"Mitsugoshi... Oh, the place that sells chocolate. You know, that place really is something. This coffee is so sweet and creamy.\"",
  
        "\"Uh, yeah, it sure is...,\" Alexia comments, looking as if she wants to say, Because you're basically drinking sugar and milk.",
  
        "\"So what can I do for you?\"",
  
        "\"Oh, right. Yes.\" Sherry puts down her cup, looking slightly pained as she mumbles, \"Actually, I'd like to ask you something.\"",
  
        "\"Okay.\"",
  
        "\"Um, like... if you've had a boyfriend recently and stuff.\"",
  
        "\"I'm sorry...?\"",
  
        "\"A-and if you went out with Cid Kagenou and whether you're still together and stuff.\"",
  
        "\"U-um...\" Alexia scrutinizes her face to find out if she's being serious.",
  
        "Sherry's eyes are darting around the room, and there's obvious tension in her shoulders.",
  
        "Alexia guesses she may not be good at conversation in general. She's picked up that Sherry is nervous, but Alexia can't figure out the reason behind her question.",
  
        "\"We broke up.\" Alexia speaks as calmly as possible.",
  
        "\"Really? Phew...\" Sherry sounds elated, as if she feels relieved from the bottom of her heart.",
  
        "Alexia's cup clinks as she sets it down.",
  
        "\"Oh, but... but does that mean you actually dated...?\" Her tone changes drastically and sounds uneasy.",
  
        "\"It wasn't a real relationship. There were some circumstances that required us to pretend.\"",
  
        "\"Oh, I see. That's great.\" Sherry giggles cheerfully.",
  
        "Alexia's cup clangs.",
  
        "\"I just befriended Cid the other day.\"",
  
        "\"What? Y-you don't say...\"",
  
        "\"Yes. I couldn't stop thinking about your relationship.\"",
  
        "\"Um, was that the only reason for your visit?\" \"Yep! It distracted me so much, I couldn't focus on my research. I'm just so happy to know you two aren't dating!\"",
  
        "\"Y-yeah, great.\"",
  
        "Alexia brings the cup to her mouth with a trembling hand. It's empty.",
  
        "\"Thank you so much! Oh, and thanks for the coffee!\" Sherry takes her leave with a bright smile—the exact opposite of the expression she wore when she came in.",
  
        "The moment she steps out of the room, there's a sound of something breaking, but Sherry is too ecstatic to hear it."
      ],
      "c7": [
        "The day after I return to school, my last class of the afternoon ends a bit early.",
  
        "\"The candidates for Student Council and our current student president will now give speeches. Everyone, please return to your seats.\" The instructor addresses the students trying to book it out of class.",
  
        "\"Where are the third-year students anyway?\"",
  
        "\"Who knows.\"",
  
        "I answer Skel's random question with a yawn. He's sitting next to me.",
  
        "\"The third-years are out the whole week for an after-school program...\"",
  
        "Right when Po turns back in his seat to inform us, the door swings open. Two girls enter as the instructor leaves the room. I know one of their faces. She was my opponent from the other day: Rose Oriana, the Student Council president. I've always wondered how a normal school uniform can exude chicness when someone trendy is wearing it.",
  
        "\"Um, today, our instructor has given us this precious time to tell you about the Student Council election...,\" starts a girl in her first year stiffly, as if she isn't used to public speaking.",
  
        "Am I the only one who feels like this speech is going in one ear and out the other?",
  
        "Skel and I yawn as we space out through the speech. Po seems to be taking notes.",
  
        "Wait, I'm pretty sure I just made eye contact with the student president. I would be surprised if she remembered the insignificant background character she squashed in the first round.",
  
        "\"Hey, the student president just looked at me,\" says Skel, fixing his bangs.",
  
        "\"Yup,\" I respond.",
  
        "\"Hey, hey. She might scout me for Student Council.\"",
  
        "\"Yup.\"",
  
        "\"Hey, hey, hey. Being on the council would bug me. I'd hate it.\"",
  
        "\"Yup.\"",
  
        "This is how we pass the time. Then, out of nowhere, my magic feels off.",
  
        "\"Huh?\"",
  
        "\"What is this?\"",
  
        "I'm constantly training by manipulating magic particles in my body, but now it feels like I can't contain them anymore. Something is blocking my magic flow. I'll probably have to pry it open or make the magic particles even smaller to permeate the barrier.",
  
        "As these thoughts run through my mind, I feel something rush toward the classroom.",
  
        "\"It's here...,\" I say ominously, just because.",
  
        "At that moment, I hear an explosion. The door flies off its hinges, and my classmates fall into a frenzy. Just then, men in black burst into the room with drawn swords.",
  
        "\"All of you, don't move! We are the Shadow Garden, and we're taking over this school!\" they scream, blocking the entrance.",
  
        "\"Are you serious...?\" My groan is muted by the clamor around me.",
  
        "The students can't move.",
  
        "Maybe this is some kind of special training or a prank... or it was real. Most of the students can't grasp that the Academy for Dark Knights is under attack.",
  
        "I'm the only one who completely understands what's happening. I'm the only one who knows they're serious, that they're blocking our magic, and that the same thing is happening in all the other classrooms.",
  
        "\"Incredible...,\" I involuntarily utter in awe.",
  
        "These guys did it. I mean, they're really going for it. They're doing what all the boys in the world dream about, what fills a page in the fantasies of boyhood adolescence.",
  
        "They're reenacting the scenario where terrorists take over the school!",
  
        "I'm so moved, I'm shaking.",
  
        "I can't tell you how many times I've imagined this scene. Hundreds, thousands... millions of times. I've thought out countless iterations, and right before me, my dream is coming to life.",
  
        "\"Stay in your seats! Put your hands up!\" The men in jet-black swing their swords to threaten the students, who are slowly piecing together the situation.",
  
        "They must be high-spec professionals with a cult following. I mean, they chose to side with terrorists.",
  
        "But the focus is, of course, on the student protagonists.",
  
        "What will they do?",
  
        "How will they act?",
  
        "The possibilities are endless.",
  
        "\"You seem to have no idea where you are,\" echoes a gallant voice across the room. A girl with a sword on her waist has confronted them.",
  
        "\"Take over the Academy for Dark Knights? You must be out of your mind.\"",
  
        "Rose Oriana is standing up to them, completely alone.",
  
        "\"I think we asked you to put down the weapon, missy.\"",
  
        "\"No.\" She wields her rapier.",
  
        "\"Hmph. You'll be a good lesson for the others.\" He readies his katana.",
  
        "This is bad.",
  
        "She hasn't realized she can't use magic.",
  
        "\"...What in the—?\" With her sword at the ready, her face turns a perplexed shade of red.",
  
        "\"Seems you've finally caught on.\" He sneers behind his mask.",
  
        "At this rate, this is going to be really, really bad.",
  
        "\"But you're too late.\"",
  
        "The all-black blade plummets toward Rose. She can't possibly defend herself with her magic restrained.",
  
        "I kick a chair over and run.",
  
        "\"—... nr!\"",
  
        "Stop. Don't do that. I process the situation at a breakneck speed, and the world around me slows down. I'm both exhausted and furious in this moment.",
  
        "\"...Aaaah!\"",
  
        "If this continues, she'll be the first person killed by the terrorists.",
  
        "And that can't happen. I won't let it.",
  
        "\"Aaaaaaaah, AAAAAAH!!\"",
  
        "To be the first victim of these terrorists... is my duty... as an extra!",
  
        "\"Stooooooooopppppppppppppppp!!\" I let out a soul-wrenching howl as I leap between them.",
  
        "As she watches the bare blade draw closer to her, Rose knows this is the end.",
  
        "Her fragile body can't tame the magic. Neither can she block nor evade the attack. She tries to twist her torso to lighten the blow, but even that movement is frustratingly sluggish.",
  
        "She won't make it in time.",
  
        "Her death has come. That's reality.",
  
        "At that moment, a shout rings out that she can feel in her eardrums.",
  
        "\"Stooooooooopppppppppppppppp!!\"",
  
        "Something shoves her out of the way.",
  
        "\"Aaah...!\" She instantly switches to a defensive posture as she crashes to the floor. When she gets up, her eyes fill with a shocking view.",
  
        "\"What the hell...?\"",
  
        "In front of her... a stricken boy is lying helplessly on the floor. She can clearly see the pool of blood beneath him growing larger and larger.",
  
        "He's sustained a fatal wound.",
  
        "\"Nooooooooooooo!!\" A scream reverberates through the classroom.",
  
        "Indifferent to the blood staining her clothes, Rose cradles the boy in her arms—the one who's recently left a deep impression on her.",
  
        "\"Cid Kagenou...,\" Rose murmurs. The boy slightly opens his eyes. \"You idiot. Why did you protect me?\"",
  
        "They only met the other day. They've never even spoken properly to each other. She can't imagine why he risked his life to save her.",
  
        "The boy opens his mouth. \"Gack, kaff!\"",
  
        "He vomits a stream of blood.",
  
        "\"Cid!\"",
  
        "His hacked-up blood splatters across her porcelain cheeks, and he smiles at her... before drawing his last breath. He wears the dying expression of a man who completed his mission.",
  
        "\"Why...?\"",
  
        "A tear cascades down her face. She stops herself from weeping as she holds him in her arms. When she looks at the dead boy's face, she feels as if she's figured everything out.",
  
        "She knows why he was so strangely persistent during the preliminaries.",
  
        "She knows why his eyes burned when he gazed at her.",
  
        "And she knows why he laid down his life to protect her.",
  
        "They are all connected.",
  
        "Rose isn't dumb. Ever since she was young, she's had suitors chasing after her for being a beautiful princess. But she's never been pursued with this much fervor before. No suitor ever loved her enough to sacrifice his life.",
  
        "\"Thank you...\"",
  
        "She can never tell him how she felt, but she vows to avenge him.",
  
        "\"Let this be a valuable lesson for you.\" The man in jet-black stands before Rose.",
  
        "\"—... h!\" Rose bites down on her lower lip and glares up at him.",
  
        "\"Still thinking of defying us, huh.\"",
  
        "\"Tch... I'll obey your orders.\" Rose hangs her head, knowing it isn't yet the time to get her revenge.",
  
        "\"Hmm. Head to the auditorium!\" the men in black order, making their move.",
  
        "They get the students to stand, shackle their hands one behind the other, and lead them out of the room. No one dares to resist.",
  
        "Two male students at the end of the line turn back toward the classroom.",
  
        "\"Cid...\"",
  
        "\"Poor Cid...\"",
  
        "The boys stare at his stiff face, looking as if they have more to say.",
  
        "\"Keep it moving.\"",
  
        "The terrorists force the duo out of the classroom. The sound of footsteps in the hallway grows distant. It's silent again.",
  
        "And then, the arm of the alleged corpse begins twitching.",
  
        "When I confirm the classroom is clear, I pound on my chest.",
  
        "Beat! Beat, dammit!",
  
        "I hit myself over and over, forcing myself to suck in air.",
  
        "Up and at 'em!!",
  
        "Until...",
  
        "\"Koff, hack, gak!\" It stirs, and my once-stopped heart starts pumping again.",
  
        "This is another esoteric technique, Ten-Minute Death: Heartbreak Mob.",
  
        "With this technique, I let tiny magic particles trickle into my brain from my stopped heart, preserving blood flow and allowing me to stay in cardiac arrest for a long time without any consequences. It's a risky technique: One slipup, and I go to the other side. But sometimes, I have to endanger my life for the art of performance. And that's what happened today. Nothing more, nothing less.",
  
        "\"Oww...\"",
  
        "I check the gash on my back. I let him cut me because I knew I might be examined up close. I avoided getting fatally injured, of course, but it was deep enough to be convincing.",
  
        "I try using my magic to heal myself. It looks like my magic can get around the barrier if I process it in teeny-tiny amounts. Alternatively, if I apply pressure and release magic, I think I'll be able to remove the membrane by force.",
  
        "\"Good enough for now.\"",
  
        "It'll take too long for them to completely heal, and I'll be in a tough spot if someone catches me in the act. I heal to the point where I have no trouble moving, and with my trusty \"I-somehow-miraculously survived\" routine, I should be good to go.",
  
        "\"All right,\" I grunt, rising to my feet.",
  
        "I make sure I can control my body and magic, wiping the blood off my face and straightening the wrinkles out of my school uniform.",
  
        "The white curtains ripple in the midday breeze that flows through the window. As they billow and fall, the patches of bright sunlight and black shadows change form.",
  
        "The fallen chairs and scattered desks. The broken door and bloody ground. The sight announces the end of a normal life.",
  
        "I close my eyes and take a deep breath.",
  
        "\"All right. Let's go.\"",
  
        "I leave the classroom and start down the empty, silent hallway.",
  
        "Sherry Barnett is too focused on deciphering the pendant-shaped artifact to notice the commotion right away.",
  
        "\"This is...\"",
  
        "She picks it up and studies it up close, noticing something and narrowing her light-pink eyes.",
  
        "\"This... can't be.\"",
  
        "Her gaze remains focused on the artifact as her pen begins twirling across the paper.",
  
        "She doesn't seem cognizant of the chaos around her. The explosive sounds, the footsteps in the hallway—all of this is beyond her scope of awareness.",
  
        "\"What's going on?\"",
  
        "\"Someone is attacking the school.\"",
  
        "\"You can't use magic, so don't be careless.\"",
  
        "Even the conversation between the two knights doesn't reach her ears.",
  
        "\"But how...? There's no way...\"",
  
        "She's completely fixated on the artifact. She tends to forget her surroundings during her research, but it's never been this extreme. There's something important about that relic that's captured her attention.",
  
        "Her quill makes crisp movements across the paper.",
  
        "Those light-pink eyes come one step closer to uncovering the truth.",
  
        "At that moment, a man in jet-black comes crashing through the window of the lab. Flying shards of glass leave small cuts on Sherry's face.",
  
        "\"What the...?!\"",
  
        "\"Who goes there?!\"",
  
        "The two knights ready their swords. The stinging sensation in her cheeks finally makes Sherry aware of the situation.",
  
        "\"Huh? What?\"",
  
        "She grabs the artifact and crawls under her desk to hide. After touching her cheek, she finds a little blood on her hand.",
  
        "\"We are the Shadow Garden. Or was it the Shadow Guardian? Oh, who gives a crap. I'm Rex. Rex, the Game of Betrayal.\" He scoffs behind his mask. \"This thing is such a nuisance.\"",
  
        "He flings his mask aside, revealing a flippant man with dull red hair, laughing with the eyes of a starving, feral dog.",
  
        "\"Eek.\" The mask lands near Sherry's feet, causing her to back away, still concealed.",
  
        "\"You're the Shadow Garden I've heard so damn much about...\"",
  
        "\"I don't know your motives, but did you really think you could get away with attacking the school?\"",
  
        "Rex chuckles. \"I guess that'd be too easy. Oh, the Shadow Garden has it tough. By the way...\" He stops midsentence. \"I forgot why we're attacking.\"",
  
        "He cackles evilly.",
  
        "\"Stop messing around.\"",
  
        "\"Oh, but I'm serious. Though that doesn't matter. My job is to acquire the artifact. Once I have it, you can struggle and squirm to your heart's content...\"",
  
        "Rex narrows his eyes sharply.",
  
        "\"Do you know where it is?\" He glares at the knights.",
  
        "\"...I have no idea what you're talking about.\"",
  
        "\"We know nothing.\"",
  
        "Rex smiles from ear to ear. \"Your faces tell me otherwise...!\"",
  
        "The air quivers, and his magic overpowers the room.",
  
        "\"A—...!\" Sherry clasps her hands over her mouth to prevent herself from screaming as she crawls. It's just a bit farther to the door.",
  
        "\"So who wants to go first?\" Rex's ravenous, feral gaze scours the room.",
  
        "\"Let's start with the girl.\"",
  
        "He disappears into thin air. That's when Sherry realizes he's standing before her.",
  
        "\"Aaaaaaahhhh!\"",
  
        "\"Farewell.\"",
  
        "\"No!\" Sherry closes her eyes as she covers her head, huddling.",
  
        "\"I won't let you!\"",
  
        "The sword hurls toward her and strikes the floor.",
  
        "Sherry fearfully peeks through her clenched eyes to find a stocky knight—with a beard as bushy as a lion's mane—standing in front of her with his sword at the ready.",
  
        "\"Ooh, impressive. Considering you're working without magic.\"",
  
        "\"Magic isn't everything. If I'm fighting a weakling, I can easily dodge any attack.\"",
  
        "\"Weakling...? Damn buffoon. Do you really think you're stronger than me?\" Rex ferociously scowls at the large man.",
  
        "\"I do.\"",
  
        "\"Why don't you tell me your name?\"",
  
        "\"I am Glen, the Lion's Mane, vice commander of the Crimson Order.\"",
  
        "Another knight lines up next to him.",
  
        "\"I'm Marco of the Crimson Order.\"",
  
        "\"I didn't ask you.\"",
  
        "In that last moment, Marco looks down at Sherry.",
  
        "\"Run.\"",
  
        "With that, the battle begins.",
  
        "Sherry crawls into the hallway and proceeds to sprint at full speed. She covers her ears to muffle the bloodcurdling screams behind her.",
  
        "I walk onto the rooftop and peer down at the campus.",
  
        "I can see all the faculty bound up by the auditorium, which is a massive hall that can easily fit all the students. It's where the school hosts its entrance ceremonies and the occasional lecture by a public figure or a theatrical performance.",
  
        "The Knight Order has gathered outside the campus in response to the commotion, but there's a clear threshold beyond which they aren't advancing. That could be the boundary of whatever's blocking everyone's magic. There didn't seem to be any students left in the school buildings, just men in black scrounging for anyone still hiding.",
  
        "I scoff as I look down at the school.",
  
        "I've always wanted to do this.",
  
        "I peer at the ravaged school, the shackled students, and the mysterious terrorist organization. I can cross this off my bucket list.",
  
        "Gaze down at the campus from the rooftop. Check.",
  
        "Well, I guess I'll have some fun before it gets dark. The truth is, I realized something when the men in jet-black barged into class.",
  
        "They have no sense of style.",
  
        "Imagine a light breeze, a clear blue sky, a sunny afternoon—and someone coming out onstage in a long black cloak. Who does that?",
  
        "Unheard of.",
  
        "They made one dire mistake. Right... They've underestimated the importance of TPO: There's a Time, Place, and Occasion for everything. If you don't adhere to it, fashion sense will be totally out of whack. Their disregard for TPO is tacky. I mean, black cloaks should only be worn at night.",
  
        "I'm planning on taking them out nice and slow; time isn't an issue. I would rather hold out and savor the fun.",
  
        "Which is why I'm going with the strategy Operation: Slow 'n' Steady Till Nightfall.",
  
        "I'm thinking all this as I observe the campus when I spot two men in black walking down the corridors. Yuck, wearing jet-black on a sunny day? Talk about uncool.",
  
        "Yeah... they make me want to play sniper.",
  
        "I slice off a thumb-size piece of slime from my suit. I roll it into a ball, infuse it with magic, lay it on the rooftop, and prepare to give it a good flick.",
  
        "\"You're in my line of fire, you dummies,\" I mutter to myself, then send it flying.",
  
        "Whiz. Zooming through the air, my slime ball zips through one of their skulls.",
  
        "\"Augh...\"",
  
        "In the same way, I pierce the second man's heart. I've already defeated them in two hits. Unbelievable. I'm bummed. I was in the mood to launch one more.",
  
        "\"Oh well. My next target is...\"",
  
        "With my slime bomb at the ready, I close one eye to scope out my next victim.",
  
        "In the school building across from me, I spot a defenseless blockhead.",
  
        "\"Target acquired. It's a girl with light-pink hair... Wait, what?\"",
  
        "That's Sherry.",
  
        "What's she doing over there? She's giving herself away by blatantly looking back after each step.",
  
        "\"Sherry, you're blowing your cover.\"",
  
        "I confirm that a man in black is lunging at Sherry from behind. I lock onto my slime bomb target... and shoot.",
  
        "Whir.",
  
        "The man's head flies off.",
  
        "\"Mission complete.\"",
  
        "Completely oblivious, Sherry keeps moving until she disappears from view.",
  
        "Hmm. I wonder what's up.",
  
        "My normie senses are tingling, telling me there's a major cutscene about to happen. And then, right around the climax, I shall grace the stage as the mastermind behind it all...",
  
        "Ooh, I can't wait.",
  
        "Okay, here I go. I infuse my legs with magic and bound into the air when no one's looking.",
  
        "\"Yahoo!\"",
  
        "I safely land on the school building across the way. After that, I jump down, grab hold of a window ledge, and swing into the building. I glance around the hallway... and there she is.",
  
        "The girl with light-pink hair looks around like a gopher.",
  
        "\"Like I said, you're blowing your cover.\"",
  
        "There's a man in jet-black behind Sherry. Right before he grabs her, I rush at him at full speed.",
  
        "\"Huh?\" Sherry senses something moving and looks behind her.",
  
        "She hears a whoosh... but no one is there. A silent hallway extends into the distance.",
  
        "\"Maybe I'm just paranoid...?\"",
  
        "Sherry cautiously peers around her, her shoes lightly tapping against the floor. She presses the artifact against her chest.",
  
        "Just a moment ago, the knights said they couldn't use magic. If that's true, it would mean it has something to do with her, and she might know what caused it. And in terms of the artifact...",
  
        "Sherry hugs it tightly one more time.",
  
        "\"I've got to do something about this...!\"",
  
        "The image of the two knights bravely fighting to help her escape floats into her mind. She knows she can't let them die in vain.",
  
        "Wrestling with these thoughts, she turns the corner.",
  
        "\"Ack!\"",
  
        "There's a man in black. Sherry panics and attempts to conceal herself.",
  
        "She thinks she's done for. She swears they lock eyes.",
  
        "There's another whish.",
  
        "\"It's fine. I'm still good... I haven't been caught...\" Sherry prays as she looks ahead once more...\"Phew, I'm still safe...\"",
  
        "Her ebony assailant has vanished.",
  
        "She bravely yet cautiously surveys the area while her shoes tap rhythmically on the floor.",
  
        "\"Oh!\"",
  
        "Another of the enemies gazes down the hall from the classroom window.",
  
        "Sherry tries to hide in a frenzy, but it's too late. The door swings open to reveal the man in jet-black.",
  
        "\"Eep!\" Sherry covers her head and closes her eyes.",
  
        "...",
  
        "......",
  
        "Another whiz.",
  
        "\"What?\" Upon nervously opening her eyes, she finds he's gone.",
  
        "\"Phew. They haven't found me...\"",
  
        "Sherry braces herself even more as her feet softly patter against the floor. She checks every inch of the hallway, the classrooms, and, most obviously, behind her. Her eyes flicker left and right. She's surveying the area when she trips over herself.",
  
        "\"Oof!\" She crashes on the ground, looking up in time to see the artifact whirling into the air.",
  
        "\"Ahhh!\"",
  
        "It's about to crash onto the floor... when someone catches it. Sherry glances up to find her newest friend.",
  
        "\"Cid!\"",
  
        "But he's covered in blood.",
  
        "\"Are you okay?! You're hurt...\"",
  
        "\"Don't worry about it. I miraculously escaped death. No biggie.\"",
  
        "He seems exhausted for some reason and stares at Sherry through half-closed eyes.",
  
        "\"I've got to tell you a few things. Like, you've gotta stop talking to yourself. And thinking while you're walking. And you should watch your step.\"",
  
        "He lets out a deep sigh.",
  
        "\"And your tap-tap-tapping down the hall is super-loud. Let's start with taking off your loafers.\"",
  
        "Sherry nods in response.",
  
        "I guard Sherry as we head to the back end of the first floor into the assistant principal's office. Oh, and I secretly kill five more of them along the way.",
  
        "We open a thick door and walk in.",
  
        "There's a tasteful lounge in the center of the room and an entire wall stacked with oversized books. Files are piled high on a desk in the back. Sunlight gently pours in from the northern window. It's obviously a space for proper adults.",
  
        "Sherry sits at a desk she seems to know well and rummages through the drawers.",
  
        "\"Try not to make so much noise.\"",
  
        "Her light-pink hair sways as she obediently nods.",
  
        "\"Whew.\" I lie across the love seat and take a deep breath.",
  
        "I'm beat.",
  
        "I know Sherry is the main character, but there's no way this is going to work out. She won't be able to beat the Final Boss. Under these circumstances, it's normal for the character to have a sidekick, but I don't sense any allies around here. It's a flawed scenario.",
  
        "But after significant consideration, I've decided to intervene as the savior type of background character. I'm an extra who will never act where others can see—never ever.",
  
        "\"Found it.\" Sherry comes back from the desk with a pile of documents, spreading them across the coffee table.",
  
        "\"What's this?\" I don't know anything about these strange alphabets, landforms, or formulas.",
  
        "\"This artifact is called the Eye of Avarice. I believe this is what's currently blocking our magic.\"",
  
        "She shows me a sketch of an ominous-looking sphere that's the size of a Ping-Pong ball.",
  
        "\"The Eye absorbs and collects the magic around it. When it's activated, it's harder to hone magic in the area.\"",
  
        "\"But the men in black had no problems using magic.\"",
  
        "\"They must have programmed the Eye to recognize their magical wavelength. I've already confirmed it doesn't consume preregistered magic. It also has difficulties absorbing microscopic particles with powerful energy, but neither of us would recognize those in the first place.\"",
  
        "Hey.",
  
        "\"And as if that's not troubling enough, it can also use the magic stored inside it. I'm guessing they were originally planning to use this artifact as a weapon, but it can't store magic for long periods. I believe it's defective.\"",
  
        "\"But it's effective in the short-term, even if it can't store the power very long.\"",
  
        "\"Correct. Right now, there are hundreds of dark knights held hostage in the auditorium. In theory, if they released the magic in the artifact... they might just be able to obliterate the school.\"",
  
        "\"Whoa...\"",
  
        "\"I was the first one to decode the Eye with my research. When I realized its potential dangers, I kept it away from the world of academia and asked the kingdom to store it for safekeeping... Oh, why did this happen?\" Sherry looks at me with gentle eyes.",
  
        "\"It's either a replica or it was stolen. Is there a way to operate it?\"",
  
        "\"Yes.\" Sherry nods and produces a large pendant.",
  
        "\"That's a real dirty pendant you got there.\"",
  
        "\"This seems to control it. The Eye cannot move on its own; I believe it can only be used when attached to this device. When they act together, the artifact is no longer defective and is limited to storing magic short-term.\"",
  
        "\"It'll be able to hold magic for longer?\"",
  
        "\"I would have to put them together and experiment to know for sure. But yes, I believe it's possible.\"",
  
        "\"Huh.\"",
  
        "\"This device has the power to temporarily disable the Eye. We should be able to free the people in the auditorium in that time.\"",
  
        "\"Sounds good. And then?\"",
  
        "\"Well, I haven't finished examining the artifact, so I'd like to prioritize that.\"",
  
        "\"I see.\"",
  
        "\"After I interpret it, we can bring the activated artifact closer to the Eye.\"",
  
        "\"How?\"",
  
        "\"Um... they're vigilantly patrolling the ground level, so I think we might have to get closer underground.\" Sherry smiles somewhat nervously.",
  
        "\"Underground?\"",
  
        "\"Yes.\" Sherry takes a few books off the bookshelf, and it swings back to reveal a staircase leading to a lower level.",
  
        "\"Neat.\"",
  
        "I love these kinds of gimmicks.",
  
        "\"There are still a few hidden escape tunnels left in some of the on-campus facilities, but no one's used this passage in a while.\"",
  
        "There's a hint of sadness in her eyes.",
  
        "\"The stairs are dusty... and there aren't any footprints. I wish my foster father had escaped though here...\"",
  
        "\"Ah, Assistant Principal Lutheran. He adopted you, right?\"",
  
        "\"He used to help my mother with her research, and he's taken care of me for as long as I can remember. Even after Mother died and I had nowhere to go, he took me under his wing and raised me as his own.\"",
  
        "\"Sounds like a great guy.\"",
  
        "\"Yes, he really is. He's always the one saving me... and this time, I want to be the one to save him.\" Sherry beams.",
  
        "\"I hope he's all right. After we get closer underground, what should we do?\"",
  
        "\"Oh, um... we go through the tunnels and throw the active artifact into the auditorium.\"",
  
        "\"Won't it break?\"",
  
        "\"Even if it does, it'll still disable the Eye temporarily. All we'll need is the dark knights to give us a hand...\"",
  
        "The climax sounds a bit weak, but I could spice it right up if I turn into Shadow and go on a rampage. To tell you the truth, I'm thankful she prepared a great scene for me to show off what I can do.",
  
        "\"Fantastic. Let's do it.\"",
  
        "\"Great! I'll just hurry up and finish deciphering this.\"",
  
        "\"My back hurts, so I can't help too much. But good luck.\"",
  
        "I'm glad she has a decent tactic. I guess I won't have to be the supporting side character after all.",
  
        "\"Cid, don't overdo it. I'll do the best I can. I've never been able to help anyone, but now it's my turn to save my foster father and everyone else.\"",
  
        "\"Yeah, you got this. Oh, I'll be right back—gotta go to the bathroom.\"",
  
        "I leave Sherry to her research so I can go out and play.",
  
        "With the wild eyes of a starving dog, Rex opens the auditorium doors and boldly saunters through the room. A group of men follow.",
  
        "The students are forced to stay in their chairs, lowering their heads when the group approaches them. There are three floors in the enormous, drafty auditorium, and all of the exits are guarded by men enshrouded in jet-black. The students are being monitored and not allowed to make a single peep. An insincere smile plays on Rex's face as he slips out of the auditorium and heads toward a waiting room.",
  
        "\"How was it?\" asks a man in black as soon as Rex shuts the door.",
  
        "His voice is deep and dignified. Even though he hides his face with a mask and is dressed like the others, his superiority is instantly recognizable.",
  
        "\"You don't waste time, do you, Sir Gaunt? We've almost completely taken over the school. The Knight Order is making a ruckus outside, but they're not even worth our breath.\"",
  
        "\"Irrelevant. I'm asking whether you've obtained the artifact.\"",
  
        "\"Oh, the artifact. About that...\" Rex shrugs as he looks at Sir Gaunt. \"I'm pretty sure it's in that young girl's possession. You know, the one with peach hair.\"",
  
        "\"Are you saying you couldn't retrieve it?\"",
  
        "Rex scratches his head and averts his gaze. \"Well, I guess.\"",
  
        "\"Quit screwing around.\" Sir Gaunt's magic heightens, and the surrounding air undulates under its pressure.",
  
        "Rex's cheeks go stiff as he feels the knight's bloodlust. \"Take it easy. I've secured its general location and shall be retrieving it soon.\"",
  
        "\"Your antics are interfering with my plans. The next time you screw up, I'm taking your head. How's that?\"",
  
        "\"All right, I get it.\"",
  
        "Sir Gaunt's piercing eyes follow Rex, who's heading toward the door with his hands lifted above his head.",
  
        "\"Oh, almost forgot.\" Rex stops before making his exit. \"We may have trouble.\"",
  
        "He looks back to see Sir Gaunt's reaction and receives the cue to continue.",
  
        "\"A bunch of Thirds have been slain. Two of the Seconds are dead. One man's heart has been crushed, and the other had a small incision in his pressure points. My best guess is the latter was stabbed by a rapier. All of them were only struck once. The enemy seems dexterous,\" comments Rex, sniggering like a ravenous wolf.",
  
        "\"Well, well... perhaps it's the Shadow Garden. The bait has finally worked.\"",
  
        "\"Seems that way. You might want to watch your back.\"",
  
        "\"Keh-heh... You think a man like me needs to be cautious?\"",
  
        "\"Oh, I think you'll be just fine, Mr. Ex-Rounds.\"",
  
        "\"Hmph. Make sure to bring the Shadow Garden's heads along with the artifact.\"",
  
        "\"That goes without saying.\" Rex leaves the room with the corner of his lips curled into a grin.",
  
        "Sir Gaunt sneers to himself. \"Finally, everything will fall into place...\" He takes the ominous artifact out of his breast pocket and stares at it suspiciously.",
  
        "\"This will mark my return to the Rounds.\"",
  
        "The man continues snickering to himself creepily.",
  
        "When Rex and his subordinates are walking through the corridor, something strange suddenly attacks them while they're searching for the artifact. Rex's subordinate vanishes before his eyes.",
  
        "\"What the—?\"",
  
        "Rex scans the area to determine what it was, but there aren't any suspicious shadows around him. The only hint he has is a whoosh in the air.",
  
        "Buzz, zip. A sound slices through space.",
  
        "\"Nng...!\"",
  
        "And the lackey next to Rex is gone.",
  
        "But this time, he manages to catch a glimpse of it. There was a boy in a school uniform—drenched in blood. Using the heel of his palm, the boy knocked the man out and stole him away.",
  
        "Rex powers up, intensifying his vision to its limit and focusing his gaze. Only then can he detect these rapid movements.",
  
        "\"Stay alert! Enemy!\" Rex shouts, vigilantly scoping the area. \"...Oh?\"",
  
        "He stands in place, bewildered.",
  
        "The subordinates who were at his back are gone. Before he's realized it, he's standing alone in the corridor.",
  
        "Then there's a whiz.",
  
        "Hearing it, Rex immediately channels all his strength into protecting his heart.",
  
        "\"Guh...!\"",
  
        "The heel of someone's palm hits his arm.",
  
        "Crack. The force of it snaps Rex's bones and sends him flying backward.",
  
        "\"That... little shit!!\" Rex promptly resets his stance and brandishes his sword.",
  
        "But no one's there. He clucks his tongue in frustration.",
  
        "A single palm strike has broken the bones in his left arm, which he'd been protecting with magic. His heart might have shattered if he hadn't shielded himself when he did.",
  
        "Whish. Rex moves with the noise, tuning in to the presence behind him and swinging. His timing is perfect.",
  
        "The runt... is getting faster! How dare he! Rex takes stabs at the air behind the boy, quickly resuming his posture with the sole aim of protecting his heart.",
  
        "\"Agh...!\"",
  
        "He suffers a blow to the ribs.",
  
        "Rex jumps back to reduce the impact as he tracks the boy with his eyes. He can barely make out his afterimage.",
  
        "\"Ts...\" Rex hacks out a mix of saliva and blood and stands on the defensive.",
  
        "It's nearly impossible to detect the enemy, and countering is out of the question. Only he's taking damage. From an objective standpoint, there's no graver situation. But... Rex has a wealth of experience worming himself out from between a rock and a hard place.",
  
        "For he is Rex, a Named Child.",
  
        "\"That's a handy artifact you're using,\" Rex comments so his enemy can hear.",
  
        "He's figured out the enemy's shtick.",
  
        "It doesn't take him long to piece it together. His opponent moves faster than humanly possible, which means he requires extraordinary power to keep it up.",
  
        "\"At first glance, I have the disadvantage. But you can't fool me. You're pushing yourself, right?\"",
  
        "With inhuman speed comes sacrifice. He sees the traces of it already.",
  
        "\"Don't you know your uniform is covered in blood?\"",
  
        "Yes... Rex solved the riddle when he saw the red uniform: His opponent used the power of the artifact to achieve logic-defying speeds. And in exchange, it's wearing him down. It's clear from the rivers of blood pouring out of his enemy. The boy will reach his limit. If Rex can hold out until then... victory is his.",
  
        "That's Rex, the Game of Betrayal, the Named Child, who can completely expose his victims with minimal information.",
  
        "\"I'd guess that you have a few hits left. That's when you'll have reached your limit!\" Rex declares in a powerful voice.",
  
        "But his enemy doesn't reply. He's been silent and still ever since Rex started his little speech.",
  
        "\"Guess I've hit the nail on the head.\" The corners of Rex's lips form a sinister smile.",
  
        "He can see his victory. But... it's not as easy as Rex makes it out to be. In fact, he still has to evade the undetectable palm strike a few more times.",
  
        "\"Hey, why so silent?\" Rex starts feeling confident, refusing to show any sign of weakness.",
  
        "This battle is one of... intense psychological warfare.",
  
        "\"Come out, you chicken!\"",
  
        "Whoosh.",
  
        "Just as the sound rushes through the air, Rex evades the attack using only his instincts, twisting his upper body to avoid the trajectory of his hand.",
  
        "That fast?! He uses his right arm as a shield at the very last second.",
  
        "\"Gaaaah!!\"",
  
        "It snaps in every possible place. He backs away, retaining his grip on his sword through sheer determination.",
  
        "And yet, his opponent persists. Rex has only seen the enemy's most basic moves, and he's drawing near.",
  
        "In other words... this is the turning point in their battle.",
  
        "\"Come at meeeeeeeeee!!\" Rex shrieks as he protects his weak points.",
  
        "His enemy has reached his limit. If Rex can endure this final strike, victory is his.",
  
        "Seconds later, a palm slams into his stomach.",
  
        "\"Gah!! Aaaaaghhhh!!\"",
  
        "Rex vomits a stream of blood as he's thrown backward. He blasts through the wall into a classroom, tumbling into desks and chairs before crashing onto the ground.",
  
        "\"Kah-kah...!\" Clutching his stomach, he coughs up blood. His ribs tear his internal organs.",
  
        "But... he's alive. Guarding with all his might pays off.",
  
        "\"Heh-heh...\" Rex's bloody lips curl into a sneer as he lifts his head.",
  
        "That's when he sees them.",
  
        "\"The hell is this...?\"",
  
        "Corpses lie in a heap in the classroom.",
  
        "All of them are men in black. It's clear they hardly bear any wounds; each was slain with a single attack.",
  
        "Did that one child kill all these Named Children by himself...?",
  
        "Tap, tap, tap.",
  
        "He hears someone walking toward him in the hallway.",
  
        "Tap, tap.",
  
        "The sound of footsteps ceases at the doorway.",
  
        "Silence.",
  
        "Rex notices the palm gripping his sword is abnormally sweaty.",
  
        "Click. The doorknob turns and breaks the silence.",
  
        "Then... the entrance opens.",
  
        "There's no one there.",
  
        "With a whir, Rex's right arm is ripped to pieces.",
  
        "Another hum, and his left arm is torn off.",
  
        "Whoosh.",
  
        "Whish.",
  
        "Whiz.",
  
        "And so it goes.",
  
        "Every time there's a sound, Rex loses more flesh.",
  
        "\"AAAAAAGH... Aaaaaaaghhhh... aghh...\"",
  
        "Right before his head whirls into the air, Rex realizes the boy possesses an infinite amount of power.",
  
        "\"You're doing great.\"",
  
        "That's the voice Rex hears when he dies.",
  
        "In the ransacked lab, Nu looks down at a corpse. With dark-brown eyes and matching hair, Nu wears a pair of frumpy glasses and the uniform for the Academy of Science as a disguise to blend in, but she can't hide her sensuality.",
  
        "\"You're Glen, the Lion's Mane, from the Crimson Order.\"",
  
        "The corpse glares into space, wearing an anguished expression. He seems to have suffered profoundly. Without magic, he whose name is known throughout the Knight Order is feeble.",
  
        "Nu's attention is directed elsewhere. There's one more knight in the room, and he's still breathing.",
  
        "\"Marco Granger. You joined the Crimson Order.\"",
  
        "Nu recognizes his face, which is handsome with luscious blue hair. Not only is he one of the strongest dark knights, but he is also rumored to be the future commander of the Order. She remembers him having a strong sense of justice.",
  
        "Marco was supposed to be Nu's husband in their arranged marriage.",
  
        "They sent many letters to each other and shared dances at the ball. But in the end, he was nothing but the man her parents chose for her. She never knew how he felt about the situation, but she could never bring herself to love him.",
  
        "But she doesn't necessarily hate him. She may not have loved him, but she thought he was kind. She wouldn't have minded marrying him one day. She imagines that tying the knot with a respectable man would have led to a bright future.",
  
        "An arranged path, an arranged partner, an arranged future. Nu never used to have much of an opinion. In the past, she conformed to the values of those around her and lived as per their dictates. She didn't mind at the time. But looking back on it now, she finds that lifestyle terribly confining.",
  
        "As she gazes at his face, she suddenly remembers the ball. Nu wryly smiles as she recalls showing off Marco's attractive face around it like some kind of accessory.",
  
        "Somehow, memories always stick with us the more we try to forget about them.",
  
        "\"What's up, Nu?\"",
  
        "She hears a voice behind her and turns. That she hasn't sensed him doesn't surprise her. She knows him by his voice.",
  
        "\"Master Shadow...\"",
  
        "She didn't notice that an average-looking black-haired boy had entered the lab. He walks past Nu and flings open one cabinet after another.",
  
        "\"This used to be my arranged fiancé .\"",
  
        "\"Oh. What will you do?\"",
  
        "\"I personally have no reason to kill him or keep him alive.\"",
  
        "\"And that's fine,\" he replies, rummaging through the cabinets and continuing his search.",
  
        "Nu leaves Marco's side and stands next to the boy. \"Master Shadow, I know it's a bit late, but I have something to report.\"",
  
        "\"Go ahead.\"",
  
        "\"The Shadow Garden has infiltrated the campus. We're waiting on standby and will move at your command.\"",
  
        "\"Got it.\"",
  
        "\"But fighting when our magic is blocked comes with a risk. Only the Seven Shadows can operate at their usual speed, but the only one of them in the capital is Lady Gamma. And... well, this kind of thing isn't her strong suit...\"",
  
        "\"She's got no game.\"",
  
        "\"Um... correct. As for me, I-I'm only at about half my normal strength...\"",
  
        "\"I see.\"",
  
        "\"Lady Gamma is currently leading the entire organization. She's suggested they won't be in control of our magic for much longer and that we should wait it out until then.\"",
  
        "\"All right.\"",
  
        "\"The men in jet-black are holed up in the auditorium and haven't moved. At the moment, they don't seem to have any demands. The Knight Order has the campus surrounded, but Iris Midgar and the other commanders are the only ones strong enough to take them on. Given that they weren't fond of us in peaceful times, I don't think they'll lend us a hand.\"",
  
        "\"Okay.\"",
  
        "\"Master Shadow. We'll stay on standby until further orders.\"",
  
        "\"Okay.\"",
  
        "\"Is that all right?\"",
  
        "\"Okay... Oh, wait a sec.\"",
  
        "\"Sure.\"",
  
        "\"I'm looking for a few things. I need mithril tweezers, the bone powder of earth dragons, and the enchanted stone of ash...\"",
  
        "Nu retrieves each item from the cabinet.",
  
        "\"Thanks. Whew, you saved my butt.\"",
  
        "\"My pleasure. May I ask what they're for?\"",
  
        "He holds the various items in both arms. \"Oh, this stuff? I'm going to use this to alter the artifact.\"",
  
        "\"Alter the artifact, huh?\" Nu parrots.",
  
        "She couldn't have guessed in a million years that he was so well versed in artifacts, but it wouldn't be odd for him to know such things. Why would he want to alter it in this dire situation?",
  
        "\"Something called the Eye of Avarice is impeding our magic. I'm currently making the final adjustments to a different artifact to temporarily disable it.\"",
  
        "\"Incredible... You never let us down.\"",
  
        "She's stunned. Not only has he identified the source blocking their magic, he's even preparing to nullify it. Plus, disabling a powerful artifact requires extraordinary knowledge. Without the wisdom of one of the greatest minds in the nation, this is an impossible feat. She shudders in the presence of his limitless mind.",
  
        "\"I should be done around sunset.\"",
  
        "\"Understood. We'll be ready to mobilize when it's complete.\"",
  
        "\"I can't wait.\"",
  
        "\"Yes.\"",
  
        "Nu watches him leave the room with his items before checking to see if her ex-fiancé is still conscious.",
  
        "She runs her ebony blade down the nape of his neck.",
  
        "His breathing and pulse are normal—stable. He's alive but clearly unconscious.",
  
        "\"I'll spare you your life.\"",
  
        "Nu leaves a shallow cut in his neck and disappears.",
  
        "\"I'm back.\"",
  
        "Upon seeing Cid return with the ingredients, Sherry smiles, retrieving them from him and lining them up on her desk.",
  
        "\"Thank you so much. I should be able to finish it now.\"",
  
        "\"Good luck.\"",
  
        "Sherry quickly sets to work on the artifact. Cid is lying on the sofa, reading a book.",
  
        "It's silent for a while.",
  
        "The light that flows in through the window slowly turns vermilion.",
  
        "Cid occasionally gets up to go to the bathroom. When Sherry offers him medicine to relieve his upset stomach given his frequent visits, he accepts it with a complicated expression.",
  
        "Time passes, and the sun begins to set. The red hue intensifies, and the shadows grow darker. When Sherry turns on the lantern, everything becomes a shade darker outside the room. She finally approaches the end of her task around sunset.",
  
        "\"I'm done.\" Sherry holds up the pendant and shows it to Cid.",
  
        "\"It's amazing.\"",
  
        "\"Thank you. It's the best I could do.\"",
  
        "\"Yeah, and it's nice that it's just after sunset. The future of the school depends on you.\" Cid stands up and pats Sherry on the back. \"I can't help you anymore. You must save the world with your own hands.\"",
  
        "\"I-I'll do my best,\" she says nervously, picking up the lantern and facing the stairs. \"My sincerest gratitude. Thanks to you, I'll be able to rescue my foster father.\" Sherry glances back at him once more, then lowers her head.",
  
        "\"It was nothing. I hope he's okay.\"",
  
        "\"Thanks.\" Sherry grins and descends.",
  
        "After a long trip down the damp staircase, she arrives at the bottom. The air is completely different down here. The dark tunnels are illuminated by the light from her lantern, and the paths start forking off: One wrong move, and she'll never reach her destination.",
  
        "\"Erm...\" Sherry takes out her map to confirm the path to the auditorium.",
  
        "\"Go straight and then take a left at the third turn...\"",
  
        "At first, she timidly scampers down the path.",
  
        "But then she remembers having walked these tunnels with her foster father. Even though she pestered him while he was working, he came down to play with her anyway. This is an incredibly precious memory to Sherry.",
  
        "The young woman doesn't remember her biological father. He died soon after she was born. And the memory of her mother has almost entirely faded from her mind. Her mother was murdered during a robbery one night when Sherry was only nine years old.",
  
        "Sherry remembers the black shadow she saw through the crack between the closet door. Her dreams were occasionally plagued by her mother's screams and the sound of ghastly laughter.",
  
        "For many years after the incident, Sherry couldn't speak. She rejected those around her, instead choosing to work on the artifact her mother left behind. As if following in her footsteps, Sherry devoted herself to research.",
  
        "Her foster father was her savior. He took her in, supported her research, and gave her a loving family. Through that, Sherry finally regained her voice. Almost all her memories of family are of him.",
  
        "Her entire life, she's been supported by her foster father. And now it's time to repay him.",
  
        "\"I've got to keep going.\"",
  
        "Sherry walks the dark path alone. Her steps are no longer frightened or timid.",
  
        "It isn't long before she arrives.",
  
        "\"I think I'm under the auditorium...\"",
  
        "The single path split into many: the path to the first floor, then the middle, then up to the second floor...",
  
        "She follows her map.",
  
        "\"Oh...!\"",
  
        "She's found it. It's a small air vent running between the second and third floors. While it can't fit a person, there's plenty of room for her to toss the pendant inside.",
  
        "Sherry furtively peers through the vent to see what's happening.",
  
        "She remembers Cid's words: When in hiding, it's important to release the tension in the body—to breathe slowly and relax.",
  
        "There are hundreds of students sitting in the auditorium and a few instructors, who were present nonetheless. Then there are a handful of men in black. Sherry believes all the hostages can escape once their magic is free.",
  
        "She's ready.",
  
        "First, she steps away from the vent and takes out the pendant. When she connects it to the enchanted stone, a white light and shining letters float in the air.",
  
        "Sherry tosses the glowing pendant into the air vent without hesitation."
      ],
      "c8": [
        "Rose observes the men in black with her honey-colored eyes.",
  
        "It's been several hours since she's been brought to the auditorium. The sun has already set, and the warm light from the ceiling illuminates the auditorium.",
  
        "She's cut the restraints off her arms with a small concealed knife. Keeping up the pretense of being bound to her chair, she passes the knife to a girl in the Student Council, who then hands it off to the next student in line.",
  
        "Rose can move at any time, but she's fully aware that acting now would be a waste.",
  
        "Her enemies may be few, but they're all too powerful to neglect. Plus, they're terribly efficient. Of the group, a man known as Rex and his superior officer, Sir Gaunt, are immensely stronger than the rest. The professors who underestimated and opposed them have been helplessly slain. Even if the hostages could use magic, their chances of winning would be questionable.",
  
        "Luckily, Rex hasn't been back in a while. She hopes the Knight Order has slaughtered him outside... but she knows a fierce warrior can't be taken down so easily. Rose's honest thought is that she needs to improve the situation somehow before he returns.",
  
        "While Sir Gaunt spends most of his time in the waiting room, he occasionally shows up in the auditorium to search for Rex, at whom he curses under his breath for his prolonged absence. Judging by his appearance and dense magic, Rose believes he can surpass an expert fighter. He might even be able to topple Iris Midgar... not that she wants to believe it. If that's true, Rose's chances of defeating him—even if she regains her magic—are remarkably low to none.",
  
        "In any case, Rose knows it isn't the right moment to move yet. But the truth of the situation is she has no time.",
  
        "As the minutes elapse, Rose can feel magic slipping out of her body. She doesn't know the reason, but her best guess is that it's related to the phenomenon that blocks it. Even though Rose is far from feeling weak, the students with less magic are starting to feel sick. In a few more hours, some of them may even suffer from magic deficiency, which means they'll lose the chance to fight back forever.",
  
        "There's a figure who always suppressed panic and unease as it rose in his chest.",
  
        "Every time Rose remembers the heroic stance of the boy who sacrificed himself to save her, a burning sensation rises up in her body. She isn't going to let his wishes be forgotten. As she repeats this promise to herself, she waits for her time to come.",
  
        "And just then, the moment arrives, unexpectedly.",
  
        "The auditorium is suddenly lit up by a radiant white light.",
  
        "Rose doesn't know what it is, but she reacts before she can think.",
  
        "She couldn't care less where it came from. Her instincts are telling her this is her final chance.",
  
        "While everyone is captivated by the blinding light, Rose squints as she rushes toward one of her captors. The moment she wraps her hands around his unguarded neck, Rose has a realization.",
  
        "I can use magic! She chops his head off with her hand.",
  
        "Rose doesn't know why she can use magic again, but it doesn't matter. She snatches the sword from the waist of the headless man.",
  
        "Raising it, she howls. \"We've got our magic back! Everyone, rise! This is our time to fight back!\"",
  
        "The auditorium erupts with movement.",
  
        "The girl in the Student Council is set in motion, slicing through the restraints binding the students, and the liberated ones begin scrambling. The air pulses with the collective, feverish excitement of the students.",
  
        "Rose knocks a man off his feet by releasing a surge of magic on him.",
  
        "All for victory. That's what is on her mind.",
  
        "At that moment, Rose realizes she is the symbol of their insurrection.",
  
        "If she keeps fighting, they'll fight, too. She'll keep showing them an indisputable victory. Rose swings her sword at full power without focusing on how she's distributing magic in her body.",
  
        "\"Pursue the Student Council president!!\"",
  
        "\"Swipe her sword!!\"",
  
        "She's the subject of attention and hate and applause as she slaughters multitudes of enemies and frees masses of students, all while continuing to fight.",
  
        "Everyone admires and aspires to her valiancy.",
  
        "But her combat style is also reckless, and she doesn't give her internal regulation of magic a second thought. Her power may be immense, but it's leaving her body, and she's rapidly approaching her limit. She can feel it as she calmly keeps an eye on her cap. Her magic is slipping away, causing her swordplay to dull as her body grows heavy.",
  
        "One-hit kills become two hits, then three.",
  
        "I'm almost done... Just a few more..., she thinks. But Rose can feel them closing in on her.",
  
        "Just need to kill one more. She realizes something as she approaches her breaking point.",
  
        "The zeal of the students has consumed the auditorium. Even if Rose is defeated, they won't stop fighting.",
  
        "The boy has passed his wish on to Rose, who's distributed it to everyone. As countless lives are lost in battle, someone continues carrying his torch.",
  
        "It hasn't been a waste.",
  
        "His death—and the one that awaits her—haven't been for naught.",
  
        "Rose from the kingdom of the arts has her reasons for studying the sword. She's never told anyone about them; it's nothing but a foolish dream she had as a child. And yet, it's a dream she chases earnestly. She hopes that she's come even slightly closer to actualizing it.",
  
        "As those thoughts run through her mind, she takes her final swing.",
  
        "It's nearly devoid of magic—not to mention weak and sluggish.",
  
        "But she beheads the enemy with the most beautiful strike of her life.",
  
        "It's the best sensation she's ever experienced. At that moment, she feels as if she's finally acquired a precious awareness of something.",
  
        "And yet... it pains her to know she's achieved this when the end is nigh. Rose watches swords rain down on her from all sides, wishing she could live for just one more day.",
  
        "And then it comes true.",
  
        "An ebony whirlwind blasts through the enemies, causing them to spew gallons of blood and wiping them out in a flash.",
  
        "Silence settles on the area, as if all time stands still.",
  
        "In the eye of the hurricane stands a man wearing an ebony coat.",
  
        "\"Astounding. You're one who possesses beautiful swordplay...,\" he says to Rose in a voice that seems to echo from the depths of the earth.",
  
        "He appears to be praising the way she handled her sword. His compliment affects her more than words can express.",
  
        "\"My name is Shadow.\"",
  
        "The man who calls himself Shadow... is nothing short of frightening.",
  
        "\"I-I'm Rose. Rose Oriana...\" Her voice trembles. She's too startled to rise to her feet.",
  
        "His swordsmanship is far superior to hers. His abilities are the result of assiduous training, of eliminating excess, of honing, of integrating varied techniques. Rose feels as if time has ground down to a halt. She's never seen swordsmanship as flawless as this.",
  
        "\"Come to me... My loyal servants...\"",
  
        "Shadow releases magic with a blue-violet hue into the sky. As Rose bathes in that light, a group clad entirely in black drops into the auditorium.",
  
        "Oh no, is this their backup...? Rose wonders.",
  
        "But her fears are unfounded.",
  
        "The team gracefully touches down and jumps into action.",
  
        "This can't be an internal feud... But they also don't seem like they're from the Knight Order. Upon further inspection, she realizes the troop is comprised entirely of women. And on top of that...",
  
        "\"They're so strong...\"",
  
        "Every one of them is tough—a force of nature.",
  
        "They chop down the captors in the blink of an eye.",
  
        "The women possess the same sword techniques as Shadow. These fearless warriors are under his command.",
  
        "\"Master Shadow, I'm glad you're safe.\"",
  
        "\"Ah, Nu.\"",
  
        "A woman clad in black approaches Shadow with a bow. \"Their leader has torched the campus, fleeing the area.\"",
  
        "\"How pathetic... Leave him to me.\"",
  
        "\"Understood.\"",
  
        "\"Does he think he can escape...?\" Shadow lets out a low chuckle.",
  
        "Flinging his coat open, he slices open the auditorium doors with a single stroke of his sword. As an added bonus, the opponents in his vicinity become mounds of unmoving flesh.",
  
        "He's slightly imitating Rose's swordsmanship, waving his weapon as if to flaunt it before calmly disappearing into the night.",
  
        "Each of his movements sets a perfect example for Rose.",
  
        "\"Are you all right?\" The girl known as Nu approaches her.",
  
        "\"Yes...\"",
  
        "\"Those were some fantastic techniques,\" Nu comments, readying her ebony katana and leaping into the fight.",
  
        "Her swordplay is extraordinary. She mows down the men in jet-black, leaving them facedown on the floor.",
  
        "Rose can feel her common sense—no, her common sense as a dark knight—shattering into pieces. The swordsmanship exhibited by these warriors doesn't fit into any preexisting molds.",
  
        "It's an entirely new art of its own.",
  
        "Where did this powerful group and methodology come from? Rose is stunned she's never known of them until now.",
  
        "\"Fire! There's fire coming this way!\"",
  
        "The voice pulls Rose back to reality. She can see the flames rising in the back of the auditorium.",
  
        "\"Escape if you're near the exit!\" Rose shouts, directing the students. Thanks to the all-women group, they can avoid needless sacrifices.",
  
        "The end of the battle is near.",
  
        "Rose escorts the wounded to the exit.",
  
        "\"The Knight Order is coming!!\"",
  
        "Everyone is relieved by that message. Rose releases the tension in her body and almost collapses but manages to pull herself together in a fluster.",
  
        "The students are being evacuated from the auditorium one by one. The fire intensifies, and the men in black are exterminated.",
  
        "Before Rose realizes it, the black-clad gang of women are gone.",
  
        "They skillfully disappeared undetected, leaving no traces behind, as if they were never there at all.",
  
        "Rose helps each student out of the auditorium until none remain and looks back at the overpowering flames that consume the structure.",
  
        "\"Who are they...?\"",
  
        "A distant blaze casts a faint glow over the assistant principal's office in the night.",
  
        "A silhouette moves in the dark room, yanking several books off the shelves and letting them burn on the floor.",
  
        "The books are consumed by the small fire that fiercely illuminates the room.",
  
        "The figure is that of a scrawny man in jet-black.",
  
        "\"What're you doing dressed like that, Assistant Principal Lutheran...?\"",
  
        "The black shadow trembles. He should be the only one here, but a young boy managed to enter before he noticed.",
  
        "The boy sits cross-legged on the sofa, reading a book. He's average-looking with black hair—a dime a dozen. But he doesn't even glance at the flames that spread from the shadow. His gaze is focused instead on a thick book. The sound of turning pages echoes throughout the room.",
  
        "\"How perceptive of you,\" notes the man, removing his mask to reveal a middle-aged face.",
  
        "It is indeed Assistant Principal Lutheran, sporting gray streaks in his slicked-back hair.",
  
        "Lutheran tosses his mask into the fire. Then he throws off his black clothes and incinerates them. The light intensifies.",
  
        "\"For my reference, I suppose you'll let me ask how you figured it out, Cid Kagenou.\"",
  
        "Lutheran takes a seat across from the boy.",
  
        "\"I knew it the moment I saw you.\"",
  
        "Cid glances up at Lutheran for a second before returning to his book.",
  
        "\"You knew just by looking at me, huh? Maybe it's the way I walk or my physique... Either way, you have a keen eye.\"",
  
        "Lutheran glances at Cid, who's focused on his book.",
  
        "Their two shadows quiver under the light of the flames.",
  
        "\"May I also ask you something for my reference?\" Cid asks while staring at his book.",
  
        "Lutheran silently urges him to proceed.",
  
        "\"Why did you do it? You don't seem the type who enjoys this kind of thing.\"",
  
        "\"Why? Well, it started long ago,\" mutters Lutheran, crossing his arms. \"I was at the height of my career. Before you were even born.\"",
  
        "\"I've heard you won the Bushin Festival.\"",
  
        "\"Yes, but that's nowhere near my proudest moment. The height of my career was greater than that. You wouldn't understand if I told you.\"",
  
        "Lutheran grins. He doesn't seem to be speaking facetiously but appears somewhat tired instead.",
  
        "\"Soon after I peaked, I fell terribly ill and was forced to retire. After years of struggle, all my honor instantly evaporated. As I was searching for a way to cure my illness, I found potential in an artifact researcher named Lukreia.\"",
  
        "\"I'm sorry. Is this story gonna take long?\"",
  
        "\"A bit. Lukreia was Sherry's mother, an unfortunate woman hated by those in her field for being too smart for her own good. As a researcher, she possessed knowledge that was unmatched, and I found her beneficial to me. I supported her work and gathered artifacts for her, and she focused on her research, which I later used. She wasn't interested in fame or fortune, so we got along just fine. And then I stumbled upon the Eye of Avarice. It was the artifact for which I'd been searching. But you see, Lukreia... that stupid woman claimed it was unsafe, and she was about to request the nation store it for her. Which is why I killed her. After I cut her from her extremities inward, I impaled her heart and twisted my blade.\"",
  
        "Cid's book remains open as he closes his eyes and listens to Lutheran's story.",
  
        "\"I acquired the Eye, but the research was incomplete. That's when I conveniently met another researcher—Sherry, Lukreia's daughter. She was naive and unknowing, catering to my every whim. She never knew I was the enemy, that sweet, stupid child. Thanks to mother and daughter, the Eye is now complete. All I had to do was set the stage to gather magic and prepare the perfect camouflage. Today... will be my greatest day, when all my dreams will come true.\"",
  
        "Lutheran spitefully chortles to himself. \"How's that for reference?\"",
  
        "In response, Cid cracks open his eyes. \"I think I understood most of it. But... there's one thing I don't get.\"",
  
        "\"Try me.\"",
  
        "\"You said you killed Lukreia and used her daughter. Is that really true?\" Cid shifts his eyes off the book and fixes his gaze on Lutheran.",
  
        "\"Of course it is. Does that anger you, Cid?\"",
  
        "\"You'll never know... I can clearly separate what's important to me and what's not, you know.\" Cid slightly lowers his eyes.",
  
        "\"May I ask why?\"",
  
        "\"I do it to stay focused. I have this one dream I always wanted to achieve, and it used to seem unattainable. Which is why I kept cutting things out of my life.\"",
  
        "\"Oh?\"",
  
        "\"We all go through life amassing things we cherish. We acquire friends and lovers and jobs... and it keeps going from there. But on the other hand, I cut things out of my life. Deciding what I don't need. I've thrown so much away. At the end of the day, all that's left are the things I couldn't live without. That's all I live for, and I don't really care what happens otherwise.\"",
  
        "Cid snaps the book closed. He rises to his feet and tosses it into the fire.",
  
        "\"You're telling me the fates of the foolish mother and daughter don't matter to you.\"",
  
        "\"No. I said I don't really care, but that doesn't mean I don't care at all. Right now, I feel slightly... disturbed.\" Cid brandishes the sword at his waist. \"I think it's about time we start. Someone might barge in if we take too long.\"",
  
        "\"Yes. Sadly, we must part.\"",
  
        "Two naked blades glisten in the flames, and the battle ends instantly.",
  
        "Lutheran's sword pierces Cid's chest, which gushes with blood.",
  
        "Cid crashes through the door, thrown into the blazing hallway. In a flash, his body is concealed by the crimson flames that engulf him.",
  
        "\"Farewell, young lad.\"",
  
        "Lutheran withdraws his sword. The fire in the hallway has entered the room, becoming more intense, and he turns on his heels, about to leave the office.",
  
        "\"Where do you think you're going?\"",
  
        "\"Nnr...!\"",
  
        "As if bouncing off the depths of an abyss, a deep voice resounds behind Lutheran.",
  
        "When he looks back, he finds a man in ebony wearing a magician's mask, a hood, and an ebony coat burning bright red. The newcomer pays no attention to the flames as he unveils his sword.",
  
        "\"Curse you...!\" Lutheran readies his weapon.",
  
        "\"My name is Shadow. I lurk in the darkness and hunt down shadows...\"",
  
        "\"So you're the one I've heard about...\" Lutheran holds his naked sword steady.",
  
        "Loosely gripping the hilt of his katana, Shadow confronts him.",
  
        "The pair lock eyes for a moment. Lutheran is the first to look away.",
  
        "\"I see you're quite strong.\"",
  
        "\"Hmm...\"",
  
        "\"I've also lived with my sword. I can understand almost everything once I confront my opponent... even the fact that I'm at a disadvantage right now. Sorry, but I must fight with all my might.\"",
  
        "Lutheran retrieves a red pill from his breast pocket and swallows it before producing the Eye of Avarice and its command device.",
  
        "\"The Eye's true worth becomes apparent when the items are combined. Like this.\"",
  
        "The two artifacts clank as they're joined, emitting a radiant light that forms into a helix of shining letters from an ancient alphabet. Lutheran laughs as he holds the artifacts to his chest.",
  
        "\"Here and now, I'll be reborn.\"",
  
        "It sinks into his chest and clothes and skin, as if submerged into water.",
  
        "\"AAAAAAAAAaaaaaaaaaah!!\" Lutheran roars as he claws at his chest.",
  
        "The glowing ancient letters gather around him, engraving themselves into his body. A blinding luminescence dyes the room white.",
  
        "Then the light dims, and Lutheran is found kneeling in white smoke.",
  
        "He rises to his feet at a leisurely pace. When he looks forward, a series of small, glowing letters has been etched into his face like a tattoo.",
  
        "\"Fantastic... Incredible... My powers are returning, and my disease will be cured!\"",
  
        "Lutheran stands in the middle of a torpedo of flames that undulate under the force of his powerful magic. The glowing letters aren't just engraved in his face but also his hands and neck.",
  
        "\"You can never fathom my frenzied strength! This magic has far surpassed all human limitations!\" Lutheran sneers.",
  
        "\"Let's try it out on you.\"",
  
        "And then he vanishes.",
  
        "The next moment, Lutheran takes a big swing at Shadow from behind. There's a high-pitched echo, and the air between them ripples from impact.",
  
        "\"Oh, impressive parry.\"",
  
        "Upon inspection, Shadow has blocked the attack with his ebony blade as he continues facing forward. Lutheran uses all his might to grind against it, but his opponent's weapon won't budge.",
  
        "\"I underestimated you. But how's this?\"",
  
        "Lutheran disappears again.",
  
        "This time, there are shrill noises in succession.",
  
        "One, two, three.",
  
        "Every time, Shadow's blade adjusts slightly, his movement as minimal as possible.",
  
        "On the fourth, Lutheran appears before him.",
  
        "\"I didn't think you would block that one. I acknowledge your strength.\" He stares at Shadow and grins calmly.",
  
        "\"To properly respect it, I'll now unveil my true power.\" Lutheran shifts his stance.",
  
        "He focuses a devastating amount of magic on the sword raised above his head.",
  
        "\"In the afterlife, you can pride yourself on making me unleash my might.\"",
  
        "That single blow comes at Shadow with the power and speed to crush him into smithereens.",
  
        "But the ebony blade parries it with ease.",
  
        "\"What?!\"",
  
        "A burst of sparks flies between the black blade and the sword of light.",
  
        "\"You dare block that, too?!\"",
  
        "\"At your level... I'd hope so.\"",
  
        "The two glare at each other from a dangerously close distance.",
  
        "\"Ksh... I've only just begun!\"",
  
        "Lutheran's sword slashes rapidly, leaving behind a beautiful trajectory of white afterimages in the air.",
  
        "\"RAAAAaaaah!!\"",
  
        "As Lutheran roars, the ebony blade repels all his attacks.",
  
        "\"AAAAAaauugh!!\"",
  
        "The white strikes slam into the ebony blade, the two crashing loudly together as if composing a song. It adds another layer to the burning night.",
  
        "But that's about to end.",
  
        "With one swipe of the ebony blade, Lutheran is flung backward, crashing into the desks and tumbling to the floor.",
  
        "\"Gak... Impossible...!\"",
  
        "Lutheran clutches his stinging body as he gets to his feet. His wounds will heal quickly, but it looks as if the ancient text is growing dim.",
  
        "\"I didn't think this would be a struggle. Heh, I'm impressed. But no matter how strong you are, I'll end all of you.\"",
  
        "\"What do you mean...?\"",
  
        "\"Well, I've arranged for the incidents to look like they're the work of the Shadow Garden. From the evidence to the testimonies—everything has been prepared. Regardless of your strength in battle, you'll only suffer in the end.\"",
  
        "Lutheran chortles, screwing up his face before observing Shadow's response.",
  
        "But Shadow is laughing. A dreadfully deep guffaw spills out of him.",
  
        "\"What's so funny?\"",
  
        "\"It's amusing how you think something this insignificant could end us.\"",
  
        "Lutheran stops smiling. \"You're just afraid to admit defeat.\"",
  
        "Shadow shakes his head as if to say, You don't know a thing.",
  
        "\"From the beginning, we've walked the path of neither justice nor evil. We walk our own path.\"",
  
        "Shadow holds out his burning ebony coat.",
  
        "\"You talk big. Accuse us for the sins of the world. We'll accept them as our own, but nothing will change. We'll still do what we're meant to do.\"",
  
        "\"You say you don't fear opposing the world? Mighty arrogant of you, Shadow!\"",
  
        "\"Then crush it out of me.\"",
  
        "Lutheran lunges, his bare sword swinging down on Shadow from overhead.",
  
        "But Shadow evades the attack, right before his head is split in two.",
  
        "\"What?!\"",
  
        "There's a spray of fresh blood.",
  
        "The ebony blade has been thrust into Lutheran's right wrist, and he immediately switches his sword in his left hand and starts retreating.",
  
        "\"Impossible!\"",
  
        "This time, the black sword slices through his left wrist. While Lutheran falls back, Shadow's katana plunges toward him.",
  
        "\"Guh... gah...!\"",
  
        "Lutheran is soiled with his own blood as he fails to counter the swift slashes that his eyes can't even perceive. His wrists, feet, upper arms, and thighs are stabbed hundreds of times.",
  
        "The next series of attacks concentrate on his core.",
  
        "\"Cut from your extremities inward...\"",
  
        "Shadow's deep voice echoes between each stab. \"...And twist my blade in your heart, I believe?\" he confirms, plunging his blade into Lutheran's chest at the same time.",
  
        "\"Wha—...?!!\"",
  
        "Even as blood gushes into his mouth, Lutheran grabs the weapon wedged in his heart and resists. His eyes meet the boy's gaze from behind his mask.",
  
        "\"It can't be. You're Ci—...!\"",
  
        "The moment he's about to finish his sentence, the blade twists.",
  
        "\"Ga... agh... aghh...!\"",
  
        "When it's yanked out, a river of blood pumps from his chest. The light in Lutheran's eyes and the ancient text begin to fade. All that remains is the corpse of a gaunt, middle-aged man.",
  
        "And then there's the quiet pattering of footsteps.",
  
        "\"Foster Father...?\"",
  
        "Head to toe in splattered blood, Shadow whips around to see... a girl with peach hair.",
  
        "\"Foster Fatherrrr!!\" She sprints past Shadow and cradles the corpse.",
  
        "\"No... How...? Why...?!!\"",
  
        "She clings to the gaunt body and weeps. Her foster father moves no more. Shadow watches her tears fall and wet the corpse's face before turning away.",
  
        "\"It's better you don't know...\"",
  
        "And then he disappears into the madder-red flames, leaving her cries behind him.",
  
        "She hears that the boy with a major back injury is being protected at school.",
  
        "When the news reaches Rose, she can't help but hurry to the first aid tent at the school that burns in the darkness of the night.",
  
        "Students and instructors with hands to spare assist with a bucket brigade.",
  
        "The Knight Order makes moves to treat the injured and track down the Shadow Garden.",
  
        "And Rose finally arrives at the tent after maneuvering through the flustered crowd.",
  
        "The boy in treatment is a first-year dark knight with black hair, and he has the same features as the one for whom she's searching.",
  
        "But he should've died back there—though it wasn't like she checked his vital signs. She hadn't had the time or composure for that.",
  
        "Which means maybe—just maybe—he could be alive. He could be the one inside that tent.",
  
        "Rose can't abandon that faint glimmer of hope.",
  
        "Her mind negates the prospect while her heart hopes it's true. Rose notices how weak this is making her.",
  
        "Inside the tent reeks of blood and alcohol. The first aid team are in a rush, busily attending to patients. Rose makes her way through the tent, checking each face—until she finds the boy with black hair.",
  
        "He's lying facedown on a bed, being treated for his back wound.",
  
        "The doctor is talking to him.",
  
        "He's conscious... maybe.",
  
        "\"U-ummm... Are you Cid Kagenou?\" Rose sounds as if she wants to ask a favor.",
  
        "\"Yes...?\" He twists around to look at her. It's the face of that same heroic boy.",
  
        "\"I'm glad... so glad...\"",
  
        "\"Wait... huh?!\"",
  
        "At some point, she's embraced Cid, clinging to him tightly as his head squirms against her breast. Rose vows to never lose him again.",
  
        "Something hot rises to her chest.",
  
        "\"Um... We're in the middle of treatment...\"",
  
        "\"Oh! Right.\"",
  
        "The timid voice of the doctor snaps Rose out of her daze, and she releases Cid.",
  
        "\"And how are his wounds?\" \"The gash on his back is deep. It's a miracle it didn't damage his nerves or internal organs. It's not fatal.\"",
  
        "\"Oh my gosh! Really?!\"",
  
        "\"Yes, really.\"",
  
        "\"Wow! That's great!\" Her entire body quivers with joy.",
  
        "\"Um, yeah, so I think I unconsciously dodged a fatal attack. No, I was passed out, so I don't really know, but that's how I survived.\" Cid sounds defensive for some unfathomable reason.",
  
        "\"You must have acted on reflex, thanks to your persistent training. Amazing.\"",
  
        "\"Um, not exactly.\"",
  
        "Rose kneels before him and looks into his eyes. \"No, that's it. Your undying efforts and passion gave life to this miracle.\"",
  
        "She caresses Cid's cheek as she gazes at him, standing close enough for him to almost feel her breath.",
  
        "\"Um...\"",
  
        "\"You don't have to say anything. I absolutely accept your feelings.\" Her eyes well up with tears as she peers at him, and her cheeks turn as red as a rose.",
  
        "\"That's fine if you're convinced I miraculously survived. But don't go saying it was some strange anomaly afterward.\"",
  
        "\"All right. For now, please get some rest.\"",
  
        "\"Negotiation complete. Good night.\"",
  
        "Rose fondly watches him close his eyes and fall asleep. Her heart has never raced so fast in her life.",
  
        "Bu-dump, bu-dump, it throbs.",
  
        "Up until this point, she's only heard tell of this feeling, but now she's finally experiencing it firsthand.",
  
        "\"Since you've saved my life... I shall give my heart to you...\"",
  
        "She strokes Cid's hair and stays by his side until dawn.",
  
        "\"Don't you think they did a good job?\" asks an alarmingly attractive blond elf, presenting a sheet of paper.",
  
        "In an ebony dress that makes her look like darkness itself, she's in the Mitsugoshi building late at night.",
  
        "Gamma takes the paper from the beauty and mumbles, \"Lady Alpha... Um, I don't know what to say.\"",
  
        "\"I'm sorry. It's a tough question to answer.\"",
  
        "Alpha snickers to herself. The paper she handed over is a wanted poster containing a sketch of Shadow in his ebony coat.",
  
        "\"SHADOW: ENEMY OF THE ROYAL KINGDOM. WANTED FOR MASS MURDER, ARSON, THEFT, KIDNAPPING... What a naughty man.\"",
  
        "\"You're also on the wanted poster for the Shadow Garden, Lady Alpha. Though it only mentions your name.\"",
  
        "\"Where?\"",
  
        "Gamma takes out another paper for Alpha to read.",
  
        "\"The Shadow Garden... What a horrible organization.\"",
  
        "The glow of the fireplace lights up her profile, and her supernatural beauty radiates from the darkness.",
  
        "\"But it's a shame. I can't believe we rushed back here to find it almost over.\"",
  
        "Alpha tosses the wanted poster into the fire, muttering to herself as she watches the flames lap it up and black char creep onto the edges of the paper.",
  
        "\"Accuse us for the sins of the world. We'll accept them as our own, but nothing will change. We'll still do what we're meant to do. How beautiful...\"",
  
        "Alpha watches the poster turn to ash.",
  
        "\"Deep down, I used to think I stood on the side of justice. But he wasn't like that.\"",
  
        "The light and shadows across her alluring face shift with the swaying flames. At times, she has the looks of a goddess, and at others, a devil. The fire capriciously switches between the two.",
  
        "\"He's prepared, and we must follow suit.\"",
  
        "Alpha turns back to Gamma, who nervously gulps upon seeing her face.",
  
        "\"Gather every available member of the Seven Shadows.\"",
  
        "\"I will. Right away.\" Gamma bows her head. Cold sweat trails down her neck and vanishes between her breasts.",
  
        "After a chilly evening wind blows by her, Gamma lifts her head. There's no one there.",
  
        "All that's left is the flames in the fireplace flickering violently.",
  
        "\"Excuse me...!\"",
  
        "Hearing someone call out to him in front of the half-charred campus, the ordinary boy with black hair turns.",
  
        "\"Oh, sorry about that. I was totally spacing out. What's up?\"",
  
        "\"I heard I might be able to meet you if I waited here. There's something I want to talk to you about...,\" admits a girl with peach hair, gazing at him.",
  
        "\"Sure. It'll be a while before the authorities question me anyway. Plus, classes are gonna be canceled for a while.\"",
  
        "\"Um... thank you for the other day.\" She lightly bows her head. \"You really saved me, Cid.\"",
  
        "\"It was nothing.\"",
  
        "\"I couldn't have done it without you.\"",
  
        "\"It's all good. Don't worry about it.\"",
  
        "\"Also, there's something else I have to tell you. Um, I've decided to study abroad.\"",
  
        "\"Oh, that explains all that luggage.\"",
  
        "There are heaps upon heaps of bags around her.",
  
        "\"Yes. I'll be taking a carriage to Laugus.\"",
  
        "\"So you're going to the college town... Wow, that's great.\"",
  
        "\"There's something I must do. I have to go because I can't do it with the knowledge I have now.\"",
  
        "\"All right. I wish you the best.\"",
  
        "\"And because... there's no longer a reason for me to be here.\" She mournfully turns back to the school. \"I wish we could've talked more, Cid...\"",
  
        "\"Me too. But we'll meet again someday.\"",
  
        "\"Yeah, I look forward to it.\" She grins and walks past him.",
  
        "\"Oh, wait a sec.\"",
  
        "\"Yes?\" She halts at the sound of his voice and turns.",
  
        "\"Can I ask what it is you have to do?\"",
  
        "The girl smiles uneasily. \"It's a secret.\"",
  
        "\"I see.\"",
  
        "\"But when it's all over... will you listen to my story?\"",
  
        "\"...Sure.\"",
  
        "The pair grin before walking away from each other.",
  
        "As they part, the billowing clouds overhead block the summer sun, and the lukewarm breeze carries the scent of rain.",
  
        "\"I promise to...\"",
  
        "And the wind carries her whisper to his ears.",
  
        "He seems to have heard the entire sentiment—a string of words unintended for his ears. He turns to look back at her as she gets smaller and smaller, farther and farther away from him.",
  
        "Small raindrops drip down from the sky, moistening her light-pink hair, and he continues walking as if nothing happened.",
  
        "And neither turns back again."
      ],
      "c9": [
        "By Beta",
  
        "To lurk in the darkness and hunt down shadows. That's the path Master Shadow has chosen. That's why the fruits of his labor will stay hidden in the shadows and forgotten without recognition.",
  
        "It doesn't matter what evil he slays, how many things he protects, or if he saves the world—no one will praise him. This is the path Master Shadow has chosen.",
  
        "Which is why I'll write about his battles, his beliefs, his journey... in hopes that the world will someday acknowledge and reward him.",
  
        "When Master Shadow was a child, he learned the truth about the Cult of Diablos and trained for years to defeat the powerful enemy himself. After training endlessly, he finally acquired great power and shadow intelligence.",
  
        "But I wonder how much he had to sacrifice in return. To lose one's childhood dreams and happy future. To throw away friends and family and lovers and everything else. It must have been a hellish road to travel... He sacrificed his happiness to save others. That's how Master Shadow saved me. He's given those of us who were shunned for being possessed, who were left to die on the edge of hopelessness, a new lease on life.",
  
        "We decided to fight the Cult of Diablos and want to do anything we can to assist Master Shadow. We believe that the downfall of this cult will grant him true happiness...",
  
        "[Contents Omitted]",
  
        "And now, I will relate two of Master Shadow's earliest battles.",
  
        "The first incident happened when a member of the royal family was kidnapped by the wicked Cult of Diablos to resurrect the power of Diablos the demon. The victim was a beautiful princess with silver hair and a cry and then Master Shadow came to the rescue of the princess!",
  
        "He gallantly appeared on the scene right when the beautiful princess was in danger and slayed the Cult's assassin, Zenon. Even though the man was the greatest fencing instructor in the country, he couldn't lay a hand on Master Shadow. That's the extent of our leader's frightening power.",
  
        "Master Shadow brought out the greatest esoteric technique to exterminate that numbskull Zenon. That one strike colored the sky, blew away the rain clouds, and Master Shadow's almighty majesty was shown to the entire world!",
  
        "The second incident was when Lutheran, a former member of the Rounds in the Cult of Diablos, foolishly attacked Master Shadow's school. Lutheran used an artifact to seal the magic of all his students, but that would obviously never stop Master Shadow! While the students were taken hostage, Master Shadow plucked off the terrorists from the shadows, one by one.",
  
        "Using his shadow wisdom, Master Shadow had no trouble freeing the magic sealed in the artifact. I bet Lutheran tipped his hat to him for that heroic deed. They say it's not his overwhelming might that makes him scary—but his brain. After freeing the hostages, Master Shadow ambushed the ringleader of the operation who tried to flee and destroyed his sinister ambitions. And he bore the burden of Lutheran's sins, choosing to save a girl on his own...",
  
        "All right... that's where I'll leave off for Volume 1. There aren't enough pages to describe his splendid battles.",
  
        "But rest assured, I promise to log two more in Volume 2.",
  
        "In the next installment, we'll discover if a guard to the sanctuary actually dares to block Master Shadow!",
  
        "Upon sneaking into a sanctuary to unravel the mystery of Diablos the demon, Aurora the Calamity Witch appears before him. As they proceed through the sanctuary together, there's someone blocking their path: the hero who fought the demon in the past! What might await them at the end of their battle?!",
  
        "And we'll also uncover what malice lurks around the Bushin Festival!",
  
        "Master Shadow takes the stage at the Bushin Festival as he hides his true identity. What could his motives be...? Will Master Shadow clash with the Cult of Diablos as he pulls the strings behind the scenes?! And at the end of his fight, what will he think?... Who will he rescue?!",
  
        "A must-see for die-hard Master Shadow fans!! Bear witness to this spectacular double feature of his outstanding feats!!",
  
        "And stay tuned for the complete version of the Chronicles of Master Shadow in Volume 2!!"
      ]
    }
  }








  const ln_v2 = {"v2": {"c1": ["It all started when Alpha sent me a letter that was only a sentence long.", "\"Come to the Sacred Land if you're bored.\" End of message.", "Summer vacation had started early on account of the fire damage at the academy, which meant I didn't have all that much going on.", "Based on experience, I've found that taking Alpha up on her invitations leads to all sorts of fun times.", "The day after I got the letter, I set out for the destination.", "Lindwurm, the Sacred Land.", "I've actually been there once before.", "It's one of the holy sites in Divine Teachings, the most popular religion in the world.", "Their shtick is that the Goddess Beatrix blessed the heroes with strength and that she's the one true deity.", "Anyway, it takes about four days to get from the academy to the Sacred Land by carriage.", "They're both in Midgar, so it's relatively close.", "I hem and haw for a little while: Should I travel there by carriage like a background character or just sprint there?", "I eventually settle on dutifully playing my role and using a carriage.", "\"One must always be conscious of these things,\" I tell myself, putting on an affected air of superiority.", "If only I could go back in time and punch myself.", "I should've just run.", "If I had just dashed there during the night, I would've made it in no time.", "But because I didn't, I find myself sharing a carriage with our student council president, Rose Oriana.", "The carriage is classy and spacious for just the two of us.", "After I made my way to a rest stop in my cheap-ass carriage, I bumped into her by chance, at which point she invited me to join her.", "I swiftly turned her down.", "But I'm no match for royalty.", "When all was said and done, we ended up riding to the Sacred Land together.", "According to Rose, there's some event going on there called the Goddess's Trial, and she's been invited as a special guest.", "As I listen to Rose's explanation, I realize Alpha must have asked me to come so we could watch this thing together.", "Somewhere along the way, though, I stop being able to make heads or tails of Rose's monologue.", "\"It would have been a tragedy to lose a young man with as gallant a spirit as yours in that incident, Cid,\" she says with a gentle smile.", "I have a number of rebuttals to this statement: I'm just a nobody, so I'm certainly not gallant, and when exactly did she stop calling me by my full name?", "Well, at least this part still makes sense.", "\"When I found out you'd survived, I could sense it was destiny at work. We can only talk about this because the world has granted us its blessing.\"", "This is the part where it stops making sense.", "First of all, I don't believe in", "\"destiny,\" and I have no idea what a", "\"blessing\" even is.", "If you ask me, I'd just as soon flip the world the bird.", "\"Our path together will no doubt be paved with thorns. Nobody will give us their blessing, and nobody will recognize us for who we are.\"", "You literally just said the world has given you its blessing.", "\"But it's said that, after receiving the goddess's power, the heroes of legend were granted wealth and renown from the people and went on to marry princesses of major kingdoms. So though the path may be harsh and trying, I believe a happy future is waiting at its end.\"", "Is this what they preach in the Holy Teachings or something?", "Bringing up the outliers of society\u2014read: heroes\u2014to push their agenda sounds super-churchy.", "\"Completing this Goddess's Trial will mean taking one more step down that thorny road. Afterward, I'll be able to regale my father with tales of a gallant young man.\"", "The young man who's gonna clear the Goddess's Trial sounds like a lucky guy.", "\"The two of us can travel down that treacherous path one step at a time. Each pace we advance will only serve to deepen our love.\"", "Oh, so like a three-legged race.", "The spirit of mutual cooperation, huh?", "That totally sounds like something the Holy Teachings would preach.", "\"We have to keep it to ourselves for now, but let's try to make a happy future a reality.\"", "\"Uh-huh.\" Rose offers me her hand, and I take it.", "I dunno much about religion or the teachings thereof, but if she says it's to bring about a happy future, then I'm on board.", "Happiness is important, after all.", "My happiness is, at least.", "As I feel Rose's passionate gaze and slightly sweaty palms, I realize I should probably put some distance between the two of us.", "I certainly don't plan on mocking her for her faith, but it's the kind of thing where both people need to be on the same page.", "When all the zealots get together and go do their own thing, everyone ends up better off.", "\"Nice weather today, huh?\" I say as I look out the carriage window toward the clear sky and pastoral plains.", "When you want to steer a conversation away from a tiresome topic, talking about the weather is always a solid plan.", "\"Yes. The sun is out, and I imagine it's quite warm outside,\"", "replies Rose as she gazes out in kind.", "Though the inside of the carriage is shaded, it's still hot enough to make us sweat.", "The nape of Rose's fair neck is already glistening, and her curled honey locks sway in the breeze as she narrows her pale eyes to keep out the sun.", "For a little while, we shoot the shit, talking about stuff like school and the weather, occasionally lapsing into silence as we search for new topics to discuss.", "There are several types of silences, which can broadly be classified into comfortable and uncomfortable ones.", "Popular opinion has it that lulls in conversation are always unpleasant, but my take is they aren't all that bad.", "After all, when you realize you're both working in concert to continue to talk, it gives you kind of a warm tingle of satisfaction.", "After all, there's only two of us, and we've been in this carriage forever.", "It's only natural for there to be pauses in the conversation.", "The fact that we're working so hard to avoid that is exactly what makes it so rewarding.", "After the nth pause, Rose breaks the ice.", "The afternoon sun has almost sunk, and its light has begun taking on a vermilion hue.", "\"I suspect there were things going on behind the scenes in that incident back at the academy.\"", "\"Hmm?\" Rose turns to gaze at the distant sunset.", "\"Those men in black calling themselves the Shadow Garden must have been in a different organization than that man named Shadow.\"", "\"What makes you say that?\"", "\"Their sword-fighting techniques are completely different. All the men in black were fighting with standard styles, but Shadow and the women obeying him were wielding their swords in an usual way. I'd never seen those techniques before. They must be new.\"", "\"Huh.\"", "\"I told all this to the Midgar Knight Order, but even though I insisted that Shadow and the group in black were fighting, the Knight Order's public statement revealed they view the two parties as part of the same organization. None of their reasons were convincing. I'm certain there's more going on than meets the eye.\"", "\"Are you sure you're not just overthinking it?\"", "\"I hope I am. If I'm not, though\u2014if the Midgar Kingdom has the wrong enemy in mind... calamity could be on the horizon. The Oriana Kingdom has launched an investigation, but you can afford to be careful.\"", "I nod.", "Rose smiles softly, nodding back.", "\"We should be reaching the resting town soon. I'll have them prepare you the room next to mine.\"", "\"Nah, don't worry about it. I'll just find some cheap place on my own.\"", "\"You mustn't. It's dangerous out there. I'll take care of the fee, of course, so please don't worry about a thing.\"", "\"Oh, no, no, no. I couldn't impose on you.\"", "\"There's no need for modesty.\" And that's how I end up staying in a top-of-the-line room, the kind that costs three hundred thousand zeni a night.", "We go out for dinner at a classy restaurant, pick out chic outfits as we window-shop, then partake in a little gambling at the casino before heading back to the inn.", "All of it's fit for a king.", "The bed is fluffy, and the room is even a suite.", "It's awesome.", "Better yet, I don't need to spend a single zeni.", "Maybe the ultimate kind of background character is one who leeches off their loaded friend.", "I guess there's value to be found in overlooking a little bit of Bible-thumping.", "We reach the Sacred Land, Lindwurm, around noon two days later.", "Lindwurm is home to a massive church that looks like it's been carved directly out of the mountain, and the townscape laid out below it has whitewashed buildings.", "The main street running through the town is swarming with tourists, and it ends in a long set of stairs leading directly to the church.", "After eating lunch at one of our usual high-class establishments, we idly browse the street stalls as we walk down the main drag.", "As we do, I spot a little trinket.", "It looks like the kind of metal key chain with a dragon wrapped around a sword that you'd find at tourist sites back in Japan.", "I guess some things are the same, even in other worlds.", "What piques my interest, though, is discovering that it's not a dragon wrapped around the sword but some sort of sinister- looking left arm.", "I pick it up.", "\"Did that catch your eye?\"", "\"Just a little. Why do they all have arms wrapped around them?\"", "Rose looks down at my hands.", "Excuse me, ma'am, but it's a little hot for you to be pressing yourself up against my shoulder.", "The heat isn't too bad at this altitude and all, but it is still summer, y'know.", "\"It's the hero Olivier's sword and the left arm of Diablos the demon. It's said that the great hero cut off Diablos's left arm and sealed it away on this very land. Up there,\"", "says Rose, pointing up beyond the long stretch of stairs and the church at the apex.", "\"At the top of that steep mountain are ruins called the Sanctuary, and that's where Diablos's left arm is sealed. Of course, it's all just a fairy tale.\"", "She smiles.", "\"It's a popular souvenir among men.\"", "\"I'll bet. Excuse me\u2014could I get one of these?\"", "I buy one to take back as a gift for Skel.", "Three thousand zeni sets me back a little, but I do have the decency to pay for it myself.", "As for Po, he gave me a list of junk he wants.", "It sounds like a pain, so I haven't looked at it yet.", "After I stuff the trinket in my pocket, we get back to wandering about.", "The hustle and bustle of the tourists and vendors all makes me feel kind of nostalgic.", "Suddenly, Rose yanks on my hand.", "\"It looks like Natsume, the author, is autographing books. I'm the biggest fan!\"", "There's a huge throng of people in front of us.", "It looks like they're standing in front of a bookstore, but I don't see a sign or anything.", "\"Would you mind if I joined the line? It might take a little while, but...\"", "Rose looks up at me with puppy-dog eyes.", "\"Yeah, go for it. I'll wait here.\"", "\"Oh, thank you! Care to join me?\"", "\"Nah, I'm good.\" Rose buys one of the books from the display, then goes and joins the line.", "Left with nothing better to do, I grab one of the books and idly flip it open.", "\"I am a dragon. As yet, I have no name.\"", "Wait, this is bald-faced plagiarism.", "No.", "Some literary genius must have miraculously had the exact same aesthetic sensibilities in this other world.", "I pull myself together and reach for another book.", "Romeo and Julietta.", "I take that back.", "Definitely theft.", "And it's not the only one.", "Asherella.", "Little Crimson Riding Hood.", "Some of the many books even have stories ripped from Hollywood movies, manga, and anime.", "At this point, it all finally clicks.", "Someone else must have reincarnated here, too.", "I buy a book, then get in line to get it signed by this so-called Natsume.", "I just want to find out more about this author.", "The line continues moving as I think about my approach, and before long, the author comes into view.", "It's a little difficult to tell because of the hood covering her head, but it's definitely a woman.", "Her elegant silver hair comes down to her shoulders, framing her blue feline eyes and the beauty mark under one of them.", "Her blouse is open at the chest, letting her cleavage peek out.", "\"What the hell is she doing?\" It's a face I know all too well.", "Massaging my temples, I shake my head and try to leave the line.", "\"Excuse me, sir. Where do you think you're going?\"", "However, I'm unsuccessful.", "She must have seen me moments before I recognized her.", "The line inches forward, and I eventually end up directly in front of Natsume.", "The fair, silver-haired elf and I face each other.", "Yeah, I know that elf, all right.", "It's Beta.", "\"The book, please?\" Beta pretends not to know who I am, instead taking my copy with a broad grin on her face.", "As I watch Beta sign it with clean, practiced movements, I can't help but ask.", "\"So how's business?\" I quietly whisper.", "\"Could be better. But I'm gaining quite a reputation.\"", "Oh, I get it.", "We've got another one.", "She's making bank off my wisdom, too.", "Back in the day, I used to tell Beta stories from my original world.", "Since she seemed tobe into literature, I figured she could use tales from Earth as a foundation to come up with badass plots of her own, but I never imagined she'd be plagiarizing them wholesale and making a killing in the process.", "Dearest Beta, I'm disappointed in you.", "I look down on Beta with a frigid stare as she hands me the signed book.", "\"I was invited here as a special guest, so I've been able to get access to inside information. I wrote the specifics of the plans in the inscription,\"", "she informs me as I stand up to leave, moving her mouth as little as possible.", "We then part ways without so much as exchanging a glance.", "This is sweet.", "It feels like I'm in a spy movie.", "Maybe I was too harsh on you, dear Beta.", "Upon exiting the shop, I'm greeted by a strangely delighted Rose.", "\"I knew you were a fan of Natsume, too, Cid.\"", "\"No, I...\"", "\"I understand. It must be hard to bring yourself to admit it, since most of the fans are women. Nevertheless, even though almost everyone who comes to signings are women, Natsume has a fair share of male fans.\"", "\"...Sure, I guess.\"", "\"The stories are compelling because they're so inventive! The plots are all so new, their worldview is so novel, and the characters have fresh and fascinating values.\"", "New, novel, and fresh?", "Yeah, I'll bet.", "\"And Natsume is versed in so many genres: romance, mysteries, action, children's stories, literary fiction... It's almost like each story is being written by a different person. That diversity is precisely what's allowed these pieces to capture the hearts of so many readers.\"", "That's 'cause they were each written by different people.", "\"Oh, and look at this autograph. I even got Natsume to write my name,\"", "says Rose gleefully as she opens up her book.", "Inside are Rose's name and Natsume the Fraud's signature.", "Now that I think about it, she mentioned something about having written the specifics of some plan or other in mine.", "I flip my book open.", "\"Are those... ancient letters?\" asks Rose as she takes a peek.", "\"Looks like it. Yeah.\"", "And I can't read a lick of it.", "\"Can you read 'em?\"", "\"I'm afraid not. I've had a difficult time learning how to read ancient texts. I can only make out a few symbols. And it seems it's written in the modern equivalent of cursive, so I'm not sure I could make it out, even if I was fluent.\"", "\"Ooh.\" Awesome, so it's like a cipher or something.", "I gave up trying to learn how to read the ancient alphabet, so I'm super-fascinated by it.", "\"Why write in ancient letters?\"", "\"'Cause it looks cool.\"", "\"It looks cool?\"", "\"Yup.\"", "\"I guess that's the kind of thing that appeals to men.\" Next, we go check into our super-ritzy hotel, but Rose has to say hi to some big shots or something, so we split up.", "She says she can't introduce me because we're still just friends from school for now.", "I dunno what she meant by \"for now.\" Is she planning on trying to convert me or something?", "Unfortunately for her, I have a policy of not getting involved in any religion.", "The only time I'd consider it is if I was founding one.", "I'm the type of guy who doesn't have many likes or dislikes... mainly because most of those things aren't worth thinking about.", "That's not to say I don't have any preferences.", "None of them are particularly important, and I could certainly make do without them, but I still like the stuff I like and dislike the stuff I dislike.", "Even when you try to separate those things out with logic, you can't logic away your emotions.", "I call stuff like that unimportant likes and unimportant dislikes.", "Incidentally, one of those unimportant likes is hot springs.", "Back in my previous life, I had a period when I didn't bathe.", "At the time, I considered time spent soaking time wasted.", "Of course, I had my life as a faceless extra to consider, so I made sure to take a three-minute shower every day, but I eliminated all time in the tub so I could train instead.", "This was around the point when I was pushing the limits of the human species, by the way.", "In other words, I had to make every minute count.", "I mean, this was during the period when I was seriously planning on repelling nukes with my right straight-hand punch.", "When I finally realized I was losing my mind, I went back to bathing.", "The trigger for that was a hot spring.", "Hot water fosters composure in the soul, which has a direct effect on my training.", "That was the reason I could do the mental gymnastics to realize I needed to find magic or vibrational auras.", "Anyway, I'm just trying to say I'm in a hot spring right now.", "Lindwurm is famous for them, which is a fact I'd secretly been super-excited about.", "It's early in the morning.", "It happens to be my favorite time to soak in hot springs.", "I certainly wouldn't decline taking one in the evening, but mornings are superior.", "After all, there usually aren't as many people around.", "Sometimes, I even get the place all to myself.", "I came today hoping that would happen, but unfortunately, it looks like someone else had the same idea.", "To make matters worse, that someone is Alexia.", "Her platinum hair is all bundled up, and her red eyes go wide as they momentarily lock with mine.", "We both immediately avert our gazes.", "Afterward, we tacitly agree on a policy of mutual nonintervention and go on pretending the other doesn't exist.", "The spring is designed for nobility, which means few people use it, especially early in the day.", "That's why all the dividers were cleared away, opening it up for mixed bathing.", "It's spacious.", "Everything below eye level is covered by the steam, and the sun is starting to rise.", "It would have been perfect if I had this all to myself.", "I bask in the water and the morning sunlight.", "Alexia and I are on opposite ends of the outdoor bath with the best view, watching the sun rise in uncomfortable silence.", "From the corner of my eye, I see Alexia's white skin move.", "Ripples spread out across the water's surface.", "Bummer, I think.", "Guess I'll have to make this dip a quick one.", "Just as the thought crosses my mind, though, Alexia breaks the silence.", "\"Have your injuries all healed?\" Her voice is quiet, by her standards.", "\"Yeah, I'm all better,\" I respond, wondering what she's talking about.", "\"I did fly off the handle when I sliced you up. I'm glad you survived.\"", "\"Thanks, I guess.\" Ah.", "Those injuries.", "I've spent enough time around her that I can tell this is her attempt at an apology.", "I'd originally doubted if anyone had actually taught her what an apology was, but I guess this is her version of one.", "\"While we're apologizing for stuff, I'm sorry I suspected you of being a serial killer.\" Hot water splashes against the side of my face.", "\"Obviously not.\"", "\"Yeah? So what are you doing in Lindwurm?\"", "\"I'm a guest at the Goddess's Trial. You?\"", "\"A friend of mine told me something exciting was going on. My guess is she was talking about the Goddess's Trial. Do you know what it is?\"", "I can hear Alexia sigh.", "\"You came here without knowing? The Goddess's Trial is a battle that happens once a year when they open the door to the Sanctuary. Memories of ancient warriors are awoken from within, and challengers come to fight them. Any dark knight who applies in advance can participate, but there's no guarantee an ancient warrior will answer their call. Several hundred dark knights enter each year, but only about ten end up actually getting to fight.\"", "Sounds interesting.", "I bet Alpha's planning on entering.", "\"How are they selected?\"", "\"Supposedly, it's based on whether there's an appropriate warrior for that challenger. Usually, the warrior is a little stronger than the challenger, which is why it's called the Goddess's Trial. Ten years ago, everyone was talking about how Venom the Wandering Swordsman managed to call forth the great hero Olivier.\"", "\"Ooh, did he win?\"", "\"He lost, or so I heard. That said, I didn't see it for myself, so who knows? I can't even be sure if it really was Olivier or not.\"", "\"Huh.\" Would Alpha be able to call forth a hero of legend?", "If she did, I bet it'd be exciting.", "\"And you're not participating?\" I ask.", "\"Word is you've gotten strong lately.\"", "\"I can't. I'm too busy this year. There are some unsavory rumors floating around about the archbishop here, so I'm supposed to investigate him.\"", "\"Unsavory rumors?\"", "\"I'm not going to repeat them. If you want to know, join the Crimson Order.\"", "\"No thanks.\"", "\"When you graduate, I'm ordering you to join.\"", "\"No thanks.\"", "\"I'll submit the application on your behalf.\"", "\"Please don't do that.\"", "\"You're so stubborn.\" At this point, the conversation breaks off.", "We sit there in silence for a little longer.", "This time, it isn't nearly so unpleasant.", "Then, I see Alexia move out of my periphery.", "Her long legs are floating on the surface, making more ripples in the warm water.", "\"I'd expected you to be ogling me up and down, but I suppose I was wrong.\" Alexia doesn't mention what in particular she thought I'd be looking at.", "\"Someone's confident.\"", "\"When you're unassailably beautiful like me, it's annoying to constantly put up with lusty gazes.\" Big words coming from someone wearing nothing.", "\"I try to avoid looking at other people when I'm in hot springs. That way, we can all share it in peace.\"", "\"How admirable.\"", "\"And on that note, would you please stop trying to catch a glimpse of my Excalibur?\"", "\"Pfft,\" Alexia laughs.", "It's like she's looking down on me.", "\"Excalibur, huh? Are you sure you didn't mean Earthworm?\"", "\"If that's what you think, it's no skin off my back. Earthworm, Excalibur, I'm fine with whatever, but let me give you a warning.\"", "I stand up, making waves across the pool.", "\"You shouldn't judge things based on appearances. Sometimes, an earthworm just hasn't left its scabbard yet.\"", "And with my goods all out in the open, I turn around and get out of the pool.", "\"Wh-what do you mean...?\" stammers Alexia.", "Her cheeks are flushed pink.", "\"When the holy sword is drawn from its scabbard, its ivory blade will be unleashed, sending you on a journey to the Garden of Chaos...\" With that suggestive line, I give my wet towel a strong snap, sending it up between my legs to clap loudly against my butt.", "Old geezers do it all the time when they're getting out of the bath, and I can't get enough of it.", "There's no rhyme or reason to it, but the hot springs experience just doesn't feel complete unless I do it, too.", "After a second and third time, I head over to the dressing room.", "As I finish changing, I can hear the sound of snapping coming from the hot spring.", "The warm lamplight illuminating the majestic cathedral makes it appear more ethereal.", "Only one person stands within it: a beautiful blond elf.", "She's wearing a pitch-black dress, and her blue eyes are fixated on a statue of the great hero Olivier.", "She could have been the moon shining radiantly against the dark of the night.", "Her name is Alpha.", "\"All we want is to know the truth,\" she prays, almost as if she were talking to the statue.", "\"Great hero, what did you do at the Sanctuary? Each time we pull back a layer of our dark history, we find more truths and lies interwoven together.\"", "Her high heels click as she begins walking, resounding throughout the cathedral as Alpha walks across its marble floor toward the red mass spread across it.", "\"Archbishop Drake, what were you hiding? If only you could talk. I really would have liked an answer.\"", "The red mass is composed of blood and chunks of flesh.", "The corpulent man breathing his last at its center has been brutally sliced to pieces.", "The high heels come to a stop atop the pool of blood.", "White legs extend down from beneath Alpha's knee-length dress.", "\"Who was it who killed you? Who was it who could easily dispose of a man with your status?\"", "The dying archbishop's eyes are filled with the sublime light of the grave.", "Dark rumors about him had reached as far as the royal capital, and he had been likely to come under investigation in the near future.", "Before that could happen, though, he had been made to disappear.", "\"Tomorrow, we shall wait for the door to the Sanctuary to be cast open.\" After shooting another glance at the statue of Olivier, Alpha turns around.", "From the other side of the cathedral's doors, the voices of people searching for the archbishop grow closer.", "Paying them no heed, Alpha opens that same set of doors and leaves.", "As the sound of high heels recedes into the distance, it's replaced with a throng of the Church's paladins surging into the cathedral.", "Though they find the body of their archbishop, not one of them says a word about the blond elf.", "None of them even realizes she's gone by... ...but the bloodstained stiletto marks continue down the marble hallway.", "It's the night before the big event, and I'm gazing down at Lindwurm from atop its clock tower.", "The Goddess's Trial is tomorrow, and everyone's all abuzz.", "Stalls line the main street, and the lamps along the road make it look like a veritable river.", "Rose is off at some party at the church.", "I wasn't invited.", "Not that I would have gone.", "I smile as my hair dances in the night wind.", "I gotta say, I'm loving this whole series of episodes where I get to look down on people and places from on high.", "The fact that it's nighttime and there's an event going on below makes it even better.", "\"It begins...,\" I mutter, getting swept up in the mood.", "\"So... They've made their decision...\" I narrow my eyes.", "\"Then I shall do my part to stand against it.\" In a flash, I transform into my Shadow outfit.", "\"For that choice is something we cannot allow...\" With that, I leap into the night sky.", "My obsidian long coat flutters behind me as I make my landing.", "My destination is a back alley removed from the celebrations.", "A masked man is standing before me.", "He looks sketchy, so I've been tracking him with my gaze ever since he fled from the church.", "He's probably a robber or something.", "No, wait, I can smell blood on him.", "A mugger maybe?", "\"Did you really think you could escape...?\" I ask him.", "The masked man shrinks back a step.", "\"At night, the world dims, transforming it into our domain...\"He draws his sword.", "\"...and none can escape it.\" The man squares off against me, his sword at the ready.", "I leave my katana undrawn, waiting for the moment to come.", "Then it happens.", "As soon as the masked man tries to swing his blade, his head goes flying through the air.", "I watch in silence as I wait for the woman behind his corpse to approach me.", "\"It's been some time, my lord.\" The woman kneeling before me is Epsilon, the fifth member of the Seven Shadows.", "She uncovers her face from behind her bodysuit, then looks up at me.", "She's an elf with hair the color of a clear lake, and her eyes are just a smidgen darker.", "Beauty comes in many varieties, and hers is decidedly flashy.", "Her looks are accentuated by sharp facial features, and her figure is exaggerated, too.", "Her body sways with each step she takes.", "It's enough to catch the eye of anyone, man or woman, whether they're interested in her or not.", "I know her secret, though.", "\"A clean slash. Nice work.\"", "\"I'm honored.\" Epsilon's cheeks flush a little when she smiles.", "Her crisp tone might come across as haughty to some, but I don't think it sounds bad.", "It reminds me of a piano.", "Of all the members of the Seven Shadows, she's the best at controlling her magic with precision.", "Magic can be super-hard to manipulate when it leaves your body, but she has no problems striking from a distance.", "Her nickname is Epsilon the Faithful.", "She has buckets of pride and an intense personality, but she's pretty mellow around me.", "Though she may be quick to jump to misunderstandings, she used to brew tea for me back in the day.", "She's a good kid and obediently follows Alpha's orders.", "I know she's the type to respect the chain of command.", "Honestly, it's been forever since the last time I saw her, and I have a bunch of stuff to catch her up on.", "Based on her behavior, though, I can tell she's in Shadow Garden mode.", "Well, that works, too.", "If that's the case, I'd better respond in kind.", "\"How is the plan proceeding?\" Epsilon scrunches up her face a bit.", "I bet she's frantically trying to figure out an appropriate plot for our little game of pretend.", "\"The Executioner of the Cult put down our target. We dealt with the henchmen, but the Executioner in question seems to have vanished.\"", "\"I see...\" So an Executioner is in it, huh?", "I dig it.", "\"We're switching to our other strategy.\" Oh, so it's one of those scenarios where we scrap plan A and place our bets on plan B.", "\"Very well. But you know what that means...\"", "\"We're ready. We've prepared to make enemies of the Church and for our reputation to be dragged through the mud...\"", "\"I'll act on my own. Don't fail me...\"", "\"Yes, sir.\" I cast a sidelong glance at Epsilon as she bows, then exit stage right by concealing my presence and slipping into the darkness."], "c2": ["How disagreeable, Alexia silently mutters to herself.", "She's sitting in one of the seats for the special guests, waiting for the opening ceremony of the Goddess's Trial to begin.", "The seats in question are occupied by Natsume, Alexia, and Rose.", "There are a number of other guests behind them, but they're the main attractions.", "It's painfully obvious they're being used to draw an audience as de facto booth babes, but she can overlook that.", "There are two things Alexia finds disagreeable.", "The first is Nelson.", "The acting archbishop is busy pompously greeting everyone in the center of the grounds.", "When she talked with him earlier about the archbishop's murder the day before, he obstinately refused to let her look into the incident.", "It all started when Nelson spouted some nonsense about the inspection being called off because the subject was dead.", "Alexia had replied that made the investigation all the more necessary, dumbass, though she'd obviously used more diplomatic language.", "Nelson insisted she needed to get her request reapproved if she wanted to conduct an inspection.", "Even if she hurried, it would take her three days to get back to the capital, at least a week to get approval, and another three days to return to Lindwurm.", "Who knows how long it would take Nelson to accept her permit once she actually brought it to him?", "Depending on his mood, he could easily end up making her wait an additional week.", "It went without saying that after all that time passed, crucial evidence could be lost forever.", "That said, Alexia knew she was acting as a representative of her country, so she couldn't exactly force his hand.", "Holy Teachings wasn't just practiced in the kingdom of Midgar but in all the nearby nations, too.", "If she tried to push the issue, she was liable to receive backlash from their neighbors, not to mention lose the support of the populace.", "Religion made for a handy ally, but as a foe, it was an absolute nuisance.", "She glares at Acting Archbishop Nelson as he jovially continues giving his address.", "At least grieve a little, baldy, she silently mutters to herself.", "The archbishop's death hasn't been reported to the public, but still.", "Oh, and by the way, Nelson is bald.", "Alexia sighs, then glances at the woman in her periphery, Natsume or whatever, sitting to her left.", "Natsume is the other thing that irks Alexia.", "Natsume sits politely beside her, responding to the crowd's cheers with a broad smile.", "Her elegant silver hair frames her blue feline eyes and accompanying mole, and her features only serve to enhance her likability.", "Thanks to her pearly smile and queenly wave, her lovely appearance, and her graceful conduct, she's wildly popular.", "As Alexia looks at her, she becomes more and more certain there's something fishy about her.", "Maybe Natsume is the kind of genius author who comes around once in a millennium and maybe she isn't, but the fact of the matter is that Alexia hadn't so much as heard of her prior to that day.", "True, Alexia doesn't have a shred of interest in literature, but as a princess, she does put some effort into knowing who's who.", "In other words, Natsume must have only just risen to prominence recently.", "For a rookie to have such presence, to conduct herself so well, and to be so popular?", "That is fishy.", "She isn't jealous!", "If anything, it's the kind of hate that arises from being cut from the same cloth.", "Alexia knows how to conduct herself flawlessly in front of the public.", "She lives her life repressing her true self and playing the part of a perfect princess.", "Most people in positions of power are playing a role in some capacity, but it's hard to come by someone willing to sacrifice themselves to perform the part to perfection.", "It's a safe bet to say that the more an actor sacrifices to pull off the ultimate performance, the darker their underside.", "\"Thank you all,\" Natsume calls out to the crowd.", "Alexia clicks her tongue.", "She finds that soft, ingratiating voice of Natsume's grating.", "Her exposed chest is too calculated as she stoops over to show off her cleavage... Well, aren't you just the cutest?", "As she internally bad-mouths Natsume, Alexia waves at the gathered masses with an unchanging smile.", "However, the crowd clearly reacted to Natsume better.", "For a moment, Alexia's cheek twitches, and she crosses her arms.", "As she uses them to push up her breasts, she hunches over.", "Just a little.", "The crowd's cheers grow ever so slightly louder.", "Emphasis on ever so slightly.", "W-well, my neckline isn't very low, so it's hardly my fault, Alexia silently reassures herself as she returns to her seat.", "She casts a fleeting glance to her right, where Rose is smiling happily.", "She's been like that all morning.", "Then, just in case, the princess glances to her left.", "In that moment, she sees something: the corners of Natsume's lips curled up in a mocking smirk.", "Something inside Alexia snaps.", "How disagreeable, Beta silently mutters to herself as she plays the role of Natsume the novelist.", "There is just one thing she finds annoying, and it's sitting to her right: Alexia Midgar.", "She's the vermin who used her position as a princess and a friend to get close to Beta's beloved master.", "Everything is fishy about that woman, behaving like a model princess by cajoling the crowd with her sickeningly soft, ingratiating voice and waving at them with that questionable smile.", "When it comes to women who pretend to be perfect as a matter of habit, it's generally a safe bet they have a dark underside.", "There isn't a doubt in Beta's mind that her master would never fall for such a wench, but even a one-in-a- million chance is still a chance.", "And even if that didn't end up being a problem, the woman was still a nuisance, one whose presence was most unwelcome in the pages of Beta's The Chronicles of Master Shadow.", "When Beta heard Shadow saved that woman during The Case of the Kidnapped Princess, her blood boiled.", "It filled her with rage that she hadn't been the one who'd... er, wait, uh... at the fact that girl had caused so much trouble for her master.", "Right.", "It wasn't jealousy, obviously!", "In order to contain her fury, Beta rewrote that section, replacing the role of the victim saved by Shadow with an adorable silver-haired, blue-eyed elf with a beauty mark.", "She stayed up late at night reading and rereading that section over and over.", "But now, the harlot was threatening to barge in on The Chronicles of Master Shadow again.", "Beta was more powerful, more beautiful, and more devoted to her master, so what did that woman think she was doing butting in?", "I-it was ridiculous!", "As Beta internally spews vitriol at that vulgar princess, she responds to the crowd's cheers on autopilot.", "When she snatches a glance to the side, she sees, of all things, that tawdry princess trying to push up her shoddy chest to curry favor with the masses.", "How sickening.", "And besides, those things don't come close to hers in terms of volume.", "They're totally average.", "Thoroughly pleased at herself for emerging victorious yet again, Beta glances down at her voluminous cleavage and lets out a little snort.", "Oops.", "Did Alexia hear that?", "Beta turns away to play dumb, which is exactly when a sharp pain shoots through her right foot.", "\"Ah...?!\" She stifles her yelp and looks down to discover Alexia's heel being driven into her foot.", "As she strains to keep herself from snapping, Beta calmly addresses her.", "\"Excuse me, Princess Alexia, but would you please move your foot?\" Alexia stares fixedly at Beta as she removes her heel, feigning that she only just realized what she was doing.", "Then, without so much as an apology, she even has the nerve to let out a little laugh.", "You absolute piece of shiiiit!!", "Beta is about to scream out loud, but between her devotion to her master and her loyalty to the Shadow Garden, she manages to rein herself in.", "Only barely.", "A drop of blood trickles from Beta's lip.", "Rose just keeps on happily smiling.", "I gaze out vacantly over the Goddess's Trial from the stands.", "It's the middle of the day, so things have only just gotten started.", "They're still giving speeches, introducing the guests, and marching in the parade.", "The main event, the actual Trial, isn't slated to start until after sundown.", "Currently, I'm just in the bleachers as another face in the crowd.", "I let out a sigh, looking at the three girls all getting along in the guest box.", "I wanna do something.", "Specifically, something shadowbrokery.", "Resigning myself to the role of a normal spectator during an awesome event is killing me.", "Like, I should be partaking in that standard trope where I participate in the Trial myself while keeping my identity hidden or something.", "You know, the bit where I make some huge display of my powers, and everyone goes, Who is that guy?!", "If this were a tournament, that would be sweet.", "Unfortunately, though, everyone only gets one round here, and after some research, I found out it'd be pretty hard to nab a slot while keeping my identity under wraps.", "I consider barging in by force, but I figure I'd rather save that for something more important.", "As I wrestle with one nonstarter of an idea after another, the event gradually proceeds.", "Sometimes that's just how it goes.", "I couldn't think of a decent plan yesterday, and it's not like I was expecting some convenient stroke of genius to strike me on the spot.", "And even though it sorta feels like I'm giving up, I'll still be able to enjoy myself in the normie way.", "This world is short on big events, so I find myself able to have a surprisingly good time.", "I even manage to gamble my way into a little pocket money.", "Eventually, the sun makes its way down, and the main attraction finally starts.", "A brilliant light fills the grounds, and ancient letters rise up from the ground in the arena.", "Then the letters release a dome of white light.", "The crowd goes wild.", "Once the challenger goes into the dome, the Sanctuary picks out an appropriate opponent, and the battle starts.", "That's it.", "No one in the wings is able to interfere until one side or the other is unable to continue.", "Apparently, people have even died.", "The whole bit about being forced to fight until one party literally can't anymore makes me reevaluate the merits of playing a background character through this event.", "There is a real risk that my true strength could be discovered if I enter.", "Meanwhile, the first challenger steps into the dome after the introductions.", "He's some sort of tough guy from the Knight Order.", "But the dome offers no response.", "The man curses as he leaves the arena.", "You can't blame the guy: The entrance fee is one hundred thousand zeni, after all.", "And apparently, there are over 150 participants this year.", "It makes sense in a way.", "Passing the Goddess's Trial is supposedly a great honor.", "You get a commemorative medal, and I hear everyone falls all over themselves going, You beat the Goddess's Trial?", "Wow!", "Here's a job!", "to the victor.", "As I watch the challengers go up one by one, I find myself wondering just how long it's gonna be until Alpha's turn.", "The first ancient warrior who shows up to fight is for lucky challenger number fourteen.", "Annerose is a traveler from Velgalta, a country that prizes swordplay, and when she enters the dome, the ancient script reacts and begins glowing.", "The light coalesces into a humanoid shape\u2014a translucent warrior.", "According to the commentators, he's Borg, a warrior from ancient times.", "The two of them have a fairly ordinary battle, and Annerose secures a fairly ordinary victory.", "I was pretty pumped up to see what the ancient warriors could do, so I'm bummed at how mundane the fight turns out.", "Fingers crossed that the next ones will be stronger.", "As the event goes on, it dawns on me that I had it wrong.", "Annerose herself is strong.", "Eight warriors have been summoned at this point, but she's the only challenger who's won so far.", "When I think about it like that, I realize Borg must've been a tough nut, too.", "The night wears on, and the pool of remaining challengers is reduced to a mere few.", "As I feel the event starting to wind down to its conclusion, I hear the name of the next contestant get called out.", "\"Our next challenger is from the Midgar Academy for Dark Knights: Cid Kagenou!\" Cid Kagenou?", "Who's that?", "Wait... That's me!", "I'm definitely the only Cid Kagenou who goes to the Midgar Academy for Dark Knights, but... I definitely don't remember signing up.", "\"Let's give our brave contender a warm welcome!\"No!", "Stop!", "Pause!", "A wave of applause washes over me.", "Someone even whistles, and excited cheers fill the stadium.", "I'm not liking the vibe here.", "My cheek twitches as I rack my brain.", "Given the situation, I have three options.", "Option one: I can give up and go fight.", "If nothing happens, my position as a nobody is safe, but if some superpowerful warrior appears, I'm at risk of having my powers discovered.", "Option two: I can make a run for it.", "I'm just some rando from the Academy for Dark Knights, after all.", "Nobody knows what I look like, so it would be a breeze.", "Unfortunately, I'd piss off the Church.", "If they complain to my school, I might even get expelled.", "Option three: I can cause a shitstorm.", "Looks like this is my only choice.", "I erase my presence, dashing at top speed to find a hiding place.", "Once I've made sure I'm alone, I transform into my Shadow guise and leap out into the air.", "I'm a fervent believer in the philosophy that there's no problem you can't get rid of with an explosion.", "And on that note... Commence Operation: A Mysterious Badass Causes a Shitstorm!", "As I land atop the domed platform, my long coat flutters behind me.", "\"My name is Shadow. I lurk in the darkness and hunt down shadows...\"", "The crowd stirs.", "\"Ancient memories slumber within the Sanctuary...\" The ancient script reacts and begins forming a humanoid shape.", "\"And tonight, we shall release them...\" I draw my ebony katana and slice through the night sky.", "Over in the guest seats, Beta's mouth is open impressively wide.", "\"Shadow!!\"", "\"Shadow?!\"", "\"Mas\u2014?!\" Realizing she's about to call him Master Shadow, Beta frantically stops herself mid- sentence.", "Fortunately for her, everyone else in the guest box has their eyes glued to Shadow, so nobody hears her.", "Alexia, Rose, and even Acting Archbishop Nelson are visibly shaken at the appearance of a sudden intruder.", "As she closes her gaping mouth, Beta begins thinking.", "This wasn't part of the plan.", "At the same time, though, she realizes something.", "She knows her beloved master would never take such measures without good cause.", "There must be some key reason for his actions, and it's her job as his backup to figure out what it is.", "A moment later, Beta is calm and collected again.", "What should she do?", "What's the best course?", "\"I see. So that's Shadow,\"", "murmurs Nelson.", "\"I don't know what he's trying to do, but the Church's paladins are stationed all around the arena. You've overestimated yourself, fool. We won't let you escape.\"", "Nelson gives the order for the paladins to assemble.", "These are knights chosen from baptism to protect the Church.", "Normal knights can't even begin to compare to their strength.", "Back when she was a kid, Beta found herself struggling to take one down in the process of saving a \"Compatible.\" Nowadays, of course, she would never let something so unseemly happen.", "\"Why is Shadow here...?\" mutters Alexia.", "\"Is he okay? I hope he doesn't get needlessly caught up in all this...,\"", "says Rose.", "Keeping one eye on Shadow, she restlessly surveys the area.", "Suddenly, the arena is flooded in white.", "The ancient letters flash, then coalesce into the shape of a warrior.", "Beta puts together the minute description listed in the ancient letters and reads it aloud.", "\"Aurora the Calamity Witch...\"", "\"Aurora? Impossible...\"", "Beta's and Nelson's voices overlap.", "When the light dies down, a woman stands in its place.", "Her hair is long and black, and her eyes are a vivid shade of violet.", "She wears a thin black robe, and her dark-purple dress and pale skin are almost translucent.", "She has an artistic beauty to her, as though she were a sculpture come to life.", "\"Aurora? Who's that?\"", "Alexia asks Nelson, deliberately ignoring Beta.", "\"She's the Calamity Witch. Long ago, she rained chaos and destruction down on our world.\"", "\"The Calamity Witch... I've never heard of her.\"", "\"Neither have I. Miss Natsume, you suggested that you had?\"", "asks Rose.", "\"Yes, but little more than her name alone,\" replies Beta.", "Which was the truth.", "Aurora the Calamity Witch.", "Each time Beta finds out more about ancient history, Aurora's name invariably shows up.", "Even so, she still has no idea what kind of chaos Aurora sowed or the destruction she wrought.", "Other than the mysteries surrounding Diablos, her history is the one the Shadow Garden is putting the most effort into researching.", "And now, she's here in person.", "This is a massive breakthrough.", "Beta withdraws her notepad from the gap in her cleavage, then jots down a hasty sketch of Aurora.", "Then she sketches Shadow squaring off against her.", "She spends considerably more time on the latter.", "\"Gathering ideas for your novels?\" Rose comments.", "\"...Something along those lines.\" After scribbling", "\"Master Shadow was just as sublime as always,\" Beta snaps her notepad closed.", "\"If you wouldn't mind, could you tell me a little more about Aurora?\" asks Beta flirtatiously.", "Nelson swells with pride.", "\"I can hardly blame you two for your ignorance. In fact, I'm more surprised that Miss Natsume had heard about her. Only a small fraction of people are familiar with Aurora, even among the Church,\"", "he says with a smile.", "His gaze never leaves the cleavage peeking out from Beta's blouse.", "\"Still, it looks like we won't need those paladins after all. Shadow's luck appears to have run out.\"", "\"Is Aurora really that strong?\" asks Rose.", "\"She's the most powerful woman in recorded history. She could crush someone like him with one hand tied behind her back. Sadly, though, that's as much as I can tell you.\"", "Nelson goes quiet, as if to say See for yourselves.", "Beta becomes indignant\u2014there's no doubt in her mind her lord will emerge victorious, but that's not to say she's completely free of worry.", "Aurora the Calamity Witch was resilient enough to etch her name in the annals of history.", "If the battle against this foe tires her master out, the paladins might take advantage of that opportunity and... It's unthinkable... but not impossible.", "Plus, enough time has passed for Beta to get a dim idea of Shadow's plan.", "He mentioned something about releasing ancient memories slumbering in the Sanctuary.", "He'd taken action to call forth Aurora.", "There must be some sort of merit in doing so.", "If her master has judged Aurora to be the key to all this, then Beta intends to follow his lead.", "Beta gently touches the beauty mark on her cheek.", "That's the signal that indicates a change in plans.", "Lurking somewhere in the area, Epsilon has probably picked up on her cue.", "Even if she hasn't, Beta is confident Epsilon will act appropriately.", "\"It's about to begin.\" Prompted by Nelson, Beta turns her gaze toward the arena.", "There, she sees Shadow with his ebony katana in hand and Aurora with arms crossed and a relaxed smile.", "It makes her seem so alive and beautiful, it's hard to believe Aurora is composed of nothing but distant memories.", "\"I find it hard to believe Shadow would go down so easily...,\" whispers Alexia.", "Her expression is serious, and she's watching Shadow closely.", "Beta finds herself ever so slightly impressed.", "At least Alexia isn't totally blind.", "The air in the stadium is tense.", "The silence is stifling.", "Shadow.", "Aurora.", "They continue standing there, staring at each other.", "Maybe this moment is critical for them.", "Maybe they're each trying to get a read on the other.", "Finally, with an air of seeming reluctance, the battle begins.", "I haven't felt this way in a really long time.", "As I stand facing the woman with violet eyes, I grin beneath my mask.", "She's smiling, too.", "There's no doubt in my mind that she feels the same as I do.", "In my opinion, each battle is a conversation.", "A tremor in their sword's tip, a shift in their gaze, the position of the feet... There's meaning to be found in all those tiny things, and seeking those meanings and figuring out how best to deal with them are what fights are all about.", "It's no exaggeration to say that the most skilled in combat hold the power to perceive purpose in the smallest of actions and prepare a superior response.", "That's why I think of it as a conversation.", "With stronger communication skills, you can anticipate further ahead, allowing you to respond appropriately, which they can guess before you can follow through and react, and so on and so forth, in an endless exchange.", "On the other hand, if your conversational skills are lacking, or if there's too big a difference between you and the other guy, you won't be able to get a dialogue started in the first place.", "One side, or sometimes even both, will act on impulse until the fight ends.", "That's no conversation.", "It's not even a process.", "Just a result.", "In my opinion, if you aren't planning on having a discussion, you might as well just go ahead and decide your fight with a good old game of rock-paper-scissors.", "Delta, I'm talking to you here.", "Her rules let rock beat the living shit out of paper and scissors.", "That said, I'm hardly in any position to talk.", "It's been forever since I've had anything even resembling a conversation.", "Unlike Delta, though, I do at least go in trying to communicate... It just always ends with me playing rock and smashing in their face.", "That's why this chick is getting me more excited than I've been in a while.", "She's watching me.", "The tip of my sword, my gaze, my footwork... While she pretends to smile nonchalantly, she's watching every meaningful move I make.", "I think I'll call her Violet.", "My dear, beloved Violet.", "For the first few moments, our conversation consists of merely staring at each other.", "Bit by bit, we're learning.", "She's the type who likes to keep her distance, and I'm fundamentally the kind of guy who likes to match my opponent's rhythm.", "I'm definitely not the type who likes smashing people with my rock.", "And because of that, I begin our conversation by ceding the initiative.", "After you, I imply.", "The very next moment, I yank back my front leg.", "As I do, something like a red spear explodes from the ground where my foot was.", "I retreat half a step.", "Gotta say I wasn't expecting her first move to come from below me.", "The red spear splits into two, rushing at me from both sides.", "The first step is to observe.", "I want to judge its speed, mobility, and destructive capacity.", "For these reasons, I dodge the spear on my left, then block the one on my right with my katana.", "The impact has weight to it.", "It's definitely enough to kill me.", "The dodged spear proceeds to split again.", "There are probably a thousand red wires now, and they all look sharp as needles.", "Then, they converge on my position.", "I gather magic in my blade and sweep the lot of them away, obliterating the red spear completely.", "\"A swarm of mosquitoes can never take down a lion,\" I tell her.", "Violet beams with grace.", "We go back to staring at each other for a bit.", "With stronger communication skills, it takes less time to gauge the other party, including their condition for the most part.", "I know how this battle will end.", "Violet probably does, too.", "Suddenly, the silence is broken when a series of spears as thick as logs burst out of the ground.", "There are nine of them in total.", "I'm able to dodge the wide ones, but they can change their shape like tentacles and keep coming\u2014trying to stab at me with spears, wrap around me with string, chomp at me like jaws.", "That's the way she likes to fight: a lethal, one-sided game with those shape-shifting tentacles.", "I continue observing.", "As I watch how the feelers operate, I refine my movements.", "By doing so, I'm able to remove any unnecessary motion when I dodge.", "Full steps turn to half steps.", "Two moves turn to one.", "Even if I avoid them forever, I can't win, but evasion is a necessary first step to counterattacking.", "The less I have to move to dodge, the faster my subsequent counterattack can come.", "Eventually, my evasion and my counterattack will coincide.", "With a single step, I bring myself directly in front of Violet.", "At some point, a scythe appears in her hands.", "It cleaves toward me.", "As I repel the blow with my katana, I kick her in the leg.", "A slime sword extends from the tip of my foot and impales her.", "As of late, I've mostly been using it as a prop for when I want to get theatrical, but it's invaluable against strong enemies as a way to throw them off-balance.", "For a beat, she stops moving, and a moment is all I need.", "Violet smiles, accepting the outcome.", "\"I wanted to fight you at your full strength.\" As fresh blood sprays through the air, I whisper in a low voice only Violet can hear.", "\"Like I said, Shadow doesn't have a leg to stand on,\" says Nelson proudly.", "Alexia ignores him.", "Since the beginning of the battle, Aurora has been pushing Shadow back nonstop.", "Alexia gazes in astonishment at the terrifying speed of the red tendrils.", "Those things are unlike any weapon she's ever seen.", "They change their form so freely, it's like they're an extension of Aurora's own body.", "She could probably even extend them out even farther and run an entire group through at once.", "Anyone insisting on fighting her with a sword would be doomed from the get-go.", "So this is the power of ancient battle techniques.", "Alexia is forced to admit she would be no match for Aurora.", "\"He's more persistent than I expected, but the difference in skill is clear.\" You're wrong.", "Alexia silently rejects Nelson's observation.", "Although it may look like Shadow is being pushed back by Aurora's onslaught, he hasn't actually tried to attack yet.", "He's just observing, taking stock of this unfamiliar attack.", "Aurora is strong, make no mistake.", "She's powerful enough to give Shadow a decent fight, after all.", "But those red spears haven't so much as touched him yet.", "\"A swarm of mosquitoes can never take down a lion.\" As Shadow speaks, he blasts away over a thousand slender spikes in a single blow.", "The red spears regroup into thick poles and rush at Shadow from all directions.", "They hum through the air as they rain down on him with enough force to kill a lion, splitting apart and gnashing at him like fangs.", "But they just can't connect.", "Much to the contrary\u2014with each pass, Shadow's evasions get smoother.", "Each time it seems they can't possibly get any more efficient, they do.", "Each moment, Alexia thinks the battle has reached its apex, only for it to be overwritten with an even loftier summit the next.", "\"Amazing...\"", "\"As always...\" Alexia and Natsume whisper in unison.", "The truly strong are able to drive their opponents into a deadlock with defense alone.", "Alexia's instructor taught her that once.", "This fight is a prime example.", "\"What are you doing, you stupid witch? Finish him off already!\"", "Nelson screams in a tone tinged with irritation.", "But the moment has passed.", "Aurora is no longer capable of stopping Shadow.", "The fight was decided in the blink of an eye.", "Alexia was only able to make out a fraction of the exchange.", "Shadow stepped in, Aurora swung her scythe, and before Alexia knew it, there was blood everywhere.", "And the one who'd gone down... was Aurora.", "The result was quick and unsatisfying.", "It was like watching a lion snap a lamb's neck.", "Nobody could tell what Shadow had done or what happened in that final exchange.", "That was why it was so disappointing.", "The stadium is dead silent, as if that fierce fight never happened.", "\"Did she... just lose? That's impossible! She was on the attack!\"", "yelps Nelson.", "He probably thought Aurora was the favorite up until the very last moment.", "When the tables turn in the space of a single instant, it takes a minute for people to process the situation.", "Nelson isn't alone in that.", "Most of the spectators still aren't sure they haven't mistaken the defeated for the victor.", "\"What just happened? There's no way Aurora could lose! She's...!\"", "Shadow's ebony long coat flutters behind him as he leaps into the night sky.", "\"S-stop there! After him! Don't let him get away!\"", "cries Nelson after returning to his senses.", "The confused paladins rouse themselves into motion and scramble after Shadow.", "Alexia suddenly realizes she's been holding her breath.", "As she exhales, she tries to memorize Shadow's sword work so as not to forget it.", "\"His tricks are as astounding as always...\" Rose's voice escapes her like a sigh.", "Just as Alexia is about to concur, a blinding light pours into the arena."], "c3": ["Rose narrows her eyes and waits for the light to die down.", "A massive white door looms in its place.", "\"What is that...?\" whispers Rose.", "\"Is it opening...?\" It is.", "Slowly but surely, the door opens, glowing dimly as it does.", "It makes for a rather strange sight.", "\"Impossible... Did the Sanctuary respond?\" murmurs Nelson, audibly flabbergasted.", "\"What do you mean by that?\" asks Rose", "\"As you're aware, today is the one day a year that the door to the Sanctuary opens.\"", "\"But I'd heard the door was located inside your church.\"", "\"True, there is one in the church. But it isn't the only one. Depending on who comes knocking, there are multiple doors the Sanctuary can send to receive them. The Unsolicited Door, the Beckoning Door, the Welcoming Door... And until we go in, there's no telling which one it is,\"", "replies Nelson.", "His gaze is fixed on the white portal.", "\"Now that things have come to this, we cannot allow the Goddess's Trial to continue. Remove the spectators from the grounds.\"", "Upon receiving Nelson's orders, the officials begin directing the audience outside.", "The special guests begin leaving as well.", "All the while, the door continues to open.", "\"Don't let anyone near it!\" barks Nelson.", "Once the door is open wide enough for a person to fit through, he calls out to Rose and the others.", "\"Please evacuate the premises.\"As he does, Rose draws her sword.", "Alexia does the same, and the two stand back-to- back as they ready their blades.", "\"What are you...?!\" cries Nelson, flustered.", "When he looks around, he discovers a group of people clad all in black have already surrounded them.", "Even Rose and Alexia only notice a moment before Nelson does.", "A clear, sonorous voice rings out.", "\"Sorry. I'm going to have to ask that you all remain there until the door fully closes.\"", "The speaker is a woman whose garb is noticeably different from the others'.", "\"You... Are you from the damn Shadow Garden?!\" In her dress-like robe, the woman steps forward from her comrades in black bodysuits and strides gracefully toward the door.", "For a moment, her gaze lights upon Rose and Alexia.", "Their shoulders shiver, and their spines freeze up, locking them together.", "She's strong...!", "Her gaze carries with it a terrifying intensity, and her presence is so overwhelming, it feels as if she commands the very night.", "Rose and Alexia both consider Shadow to be pushing the limits of strength, but this woman has reached at least his footing.", "That much they know.", "\"Epsilon, I leave the rest to you. And as for the two princesses, be good.\"", "\"Understood, Alpha.\"", "\"Stop right there! I won't let you enter the Sanctuary!!\"", "Ignoring Nelson's shouts, the woman named Alpha slips through the door of light.", "\"Oh, that's Alpha...,\" Rose hears Alexia murmur.", "She barely holds herself back from crying,", "\"You know her?!\"", "\"And what do you intend to gain from all this?\" asks Alexia.", "\"All we want from you is to stand down until the door disappears. Acting Archbishop Nelson will be coming with us,\"", "replies the curvy woman named Epsilon.", "Hearing his name, Nelson begins panicking.", "\"What are you people planning to do to the Sanctuary?\"", "\"It's not a question of what we're planning on doing but what we expect to find. Do as we say, and nobody needs to get hurt.\"", "Epsilon holds Rose and Alexia at bay with her gaze alone.", "Her eyes are like still lakes, and they're focused vigilantly on the two of them.", "She's strong, too.", "Not to the same extent as Alpha, but she has that intensity to her that only the powerful possess.", "That said, if it came down to it... \"If you so much as move, what happens to her will be on your heads.\" Epsilon clearly senses their hostility.", "She's looking straight at Natsume, who's been captured by one of the women in black.", "\"I-I'm so sorry...\" Natsume casts her gaze down apologetically.", "\"Miss Natsume...!!\" Seeing Natsume choking back tears, Rose feels her chest tighten.", "Their ability to fight back has been neutralized... or so she thinks.", "\"We could just abandon her,\" suggests Alexia quietly enough that only Rose can hear.", "\"Absolutely not.\" Rose's veto is firm.", "\"Honestly, we'd be better off. I don't trust her.\"", "\"Absolutely not, I said.\" As the two of them argue back and forth, the door to the Sanctuary stops opening.", "This time, it's swinging shut.", "Slowly but surely, it closes.", "The group in black enter the door one after another, dragging Natsume and Acting Archbishop Nelson along with them.", "Rose and Alexia can do nothing but stand by and watch.", "Their foes show no openings.", "Not only are the members of the group in black all powerful on their own, they're also working together in perfect harmony.", "By moving in three-woman units, they're able to cover one another's backs.", "Even if Alexia and Rose found a chink in their armor, it's clear their adversaries would seal it immediately.", "The group's teamwork is polished to a sheen.", "The door keeps closing.", "\"No! Please! Don't hurt me!\"", "As she's being shoved through the door, Natsume lets out a pained cry.", "\"Miss Natsume!!\"", "\"I-I'll be fine! Please don't worry about me!\"", "Natsume bravely calls out, her voice trembling, as she's dragged through the portal.", "Rose watches her go with tears in her eyes.", "She hears someone mutter, \"Fishy, fishy, fishy,\" but chooses to ignore it.", "The last ones to move are Epsilon and Nelson, bound.", "After glancing around to make sure everything looks normal, Epsilon makes for the door with her captive in tow.", "But he resists, distracting Epsilon momentarily.", "It happens in a flash.", "A dark shadow swoops down and cleaves through Epsilon.", "\"Excellent work, Executioner Venom!!\" Nelson booms with a laugh.", "As Epsilon watches herself get cut, her concentration is at its peak.", "Although she was taken completely by surprise, her skills are sharpened to the point where she's able to bend her torso backward to evade the blow.", "However, this movement gives birth to tragedy.", "Epsilon's life flashes before her eyes.", "She remembers being an elf of noble bearing, becoming a \"possessed,\" and being cast aside and hunted by her people.", "Then, she remembers the day her life began anew.", "On that fateful day when Shadow rescued her, everything Epsilon thought she knew crumbled around her, and her life received new meaning.", "From childhood, Epsilon was strong-willed.", "She never once doubted her exceptionality, and her personality was such that she couldn't help but show off her talents.", "She came from a well-off family, and her beauty, brains, and martial arts talent were all the pinnacle of her generation.", "Though she had an abundance of pride, she always had the skills to back it up.", "Perhaps that was the reason.", "The day she became one of the possessed, the moment she lost everything, she was stricken with profound grief.", "She'd lost her reason to live, but she didn't have the courage to die, either.", "On that day, as she dragged her rotting flesh along a mountain trail, Shadow appeared before her.", "\"Do you seek power...?\"His voice had been deep, as though it were echoing from a bottomless abyss.", "Epsilon's mind was fuzzy, and she thought that perhaps she'd stumbled upon a demon.", "But she desired power all the same.", "With power, she could take revenge on all those who'd forsaken her.", "She could torture them to death.", "Make them regret what they'd done to her.", "\"Then I shall grant it to you...\" And with that, she found herself enveloped in soft magic with a blue-violet hue.", "Even now, she'd never once forgotten its light or its warmth.", "The warm, healing light felt almost nostalgic, and before Epsilon noticed it, she'd started crying.", "That day, Epsilon had been weak, ugly, and pathetic.", "Yet Shadow had saved her anyway.", "\"If you wish to descend into madness amid a world of lies, then do so. However, if you wish to see the world's true face... then follow me.\"", "And Epsilon chased after him.", "After losing everything, she'd been hideous.", "But once he saved that version of her, she felt as though he'd acknowledged her true self.", "She didn't need class.", "Neither did she need beauty nor pride in her talents.", "There were other things that were more important.", "After discovering the world's true nature and meeting her four predecessors, though, she amended that assessment.", "It was true: She had no need for her heritage, but talent was essential.", "And her prized combat skills had her ranked second from the bottom.", "Furthermore, the slots above her were occupied by monsters and flawless superhumans she had no chance of surpassing.", "The intellect she regarded so highly was second from the bottom as well.", "The geniuses before her had shattered her confidence.", "Even when it came to being well-rounded, she was beaten by perfect specimens and human machines who never made mistakes.", "At this rate, there would be nowhere left for her to excel.", "Except beauty.", "For Epsilon, her looks were essential.", "Her beloved master was a man, after all.", "When she evaluated her attractiveness objectively, she realized she was heading into an uphill battle.", "If faces were the only relevant criteria, Epsilon didn't have anything to be worried about, but she had to consider the future.", "The fact of the matter was, the women from her family had categorically been cursed with small, flat chests.", "Just as men lament their forefathers' hairlines, so, too, did Epsilon lament her chest lineage.", "She knew if things kept going as they were, the day would inevitably come when she suffered a crushing defeat.", "And so, when Epsilon encountered a certain thing for the first time, she felt like she'd been struck by lightning.", "The slime bodysuit.", "It took but a glance for her to realize the possibilities contained within it, and her heart instantly belonged to the suit.", "Although she normally hung on Shadow's every word, she didn't pay a lick of attention when he was explaining the slime bodysuit to her.", "She couldn't take her eyes off it.", "She realized something.", "She could push those puppies up.", "It only took her three days before she could control the slime bodysuit as she pleased.", "From that day forth, she wore the slime bodysuit everywhere under the pretext of practicing her control over it, and bit by bit, she added volume to her chest.", "The progress went little by little, so as not to arouse suspicion, but a smidgen audaciously, because she was, after all, a growing girl.", "Once they'd gotten reasonably large, though, she noticed something.", "They felt wrong to the touch.", "At the end of the day, slime was still slime.", "Her boobs felt different from the real thing, and the way they moved wasn't quite right, either.", "From that day forward, Epsilon observed Beta as though performing reconnaissance on an enemy, and a few days later, she was able to perfectly control her slime to replicate the jiggle and feel of the real deal.", "By this point, Epsilon's control over her magic had far surpassed even Alpha's.", "Though the others acknowledged her superiority and dubbed her Epsilon the Faithful, she had long since stopped caring about that.", "Instead, she observed Beta with a discerning eye, trembling all the while.", "How did hers keep growing?!", "This called for war: a battle without honor or humanity between the natural and the artificial.", "In the end, Epsilon padded some more and eventually emerged victorious.", "Mankind is a beast that consistently triumphs over the horrors of nature.", "However, the price for that victory was steep.", "On that day, as Epsilon saw her reflection in a mirror and lost the small shred of pride she'd regained, she realized something.", "Her proportions were off.", "Much to her dismay, her build was petite and dainty.", "However, Epsilon set her mind to work and eventually came up with a solution.", "All she needed to do to balance her figure was to make her butt bigger, too.", "In the end, though, she didn't just stop at the butt, which she used slime to reshape.", "She tightened up and corseted her belly.", "She used slime insoles to lengthen her legs and attain the best proportions.", "She... It would take forever to list out all the little things.", "In short, she used the slime bodysuit to obtain the perfect figure.", "It had taken incalculable effort, being constantly on guard without anyone knowing, and in the process, she developed the presence of a detestably worthy rival.", "More than anything, though, it had been a display of her feelings for her beloved master.", "Epsilon's precision was nothing more than a byproduct of that labor.", "Her true power was the amazing physical protection her many layers of slime padding provided.", "The flashback ends.", "The swooping shadow brings down its blade.", "When it does, the crystallization of all of Epsilon's hard work is lopped off.", "The two softest lumps of the slime bodysuit fly into the air.", "In that moment, Epsilon awakens.", "This can't be happening here... No...!", "She refuses to be exposed for her shiiiiiiiiiit!!", "By manipulating the dregs of magic left in the two flying lumps, Epsilon forces them to retain their shape.", "To the trained eye, her ability to manipulate magic once it's left her body is enough to take one's breath away.", "At the same time, she yanks that magic back to her, instantly adhering the blobs back to their original position.", "Maintaining that level of inch-perfect control in the blink of an eye\u2014it's nothing short of superhuman.", "As a final touch, she makes them jiggle just the way real breasts would.", "Such is the power of Epsilon the Faithful.", "\"Excellent work, Executioner Venom... Hmm?\" Nelson takes another look at Epsilon.", "She was supposed to have been in bloody pieces, yet she's standing there without a scratch on her.", "In fact, quite the contrary.", "\"See anything...?!\"", "\"Huh...?\" What's with that terrifying intensity of hers?!", "Nelson's knees start to rattle.", "\"Did you... see anything?\"", "\"Ahhh... N-no! Nothing...!\"", "\"What about you two?\" Epsilon's question is directed at Rose and Alexia.", "They both shake their heads.", "\"Good. Now come.\"", "Epsilon grabs Nelson by the scruff of his neck and drags him off.", "\"Ahhh! What are you doing, Executioner Venom?! Hurry up and save me!!\"", "\"If you want the Executioner...\" Epsilon leans in and talks straight into Nelson's ear.", "\"...I already killed him.\" The Executioner's head thuds onto the ground.", "\"AAAAAAAH!!\" With Nelson in tow, Epsilon vanishes behind the door.", "It's almost shut.", "The moment before it can close, one more person rushes forward.", "\"Alexia?!\" Ignoring Rose's admonition, she slips inside the gap.", "\"Oh, heavens!\"Rose dashes after her and tumbles inside.", "Immediately afterward, the door clicks closed.", "It then vanishes, leaving behind a faint afterglow.", "\"Ack?!\" Rose lands atop something strangely soft.", "Shaking her head and sitting up, she discovers there are two women pinned beneath her.", "\"Oh, I'm so sorry.\"", "\"Rose, will you please get off me as soon as humanly possible?\"", "\"Princess Alexia, I would ask you to avoid touching me.\" The women in question are Alexia and Natsume, both of whom are glaring at each other despite their predicament.", "The moment Rose stands, the two of them instantly separate and look away from each other.", "Realizing the pair are on bad terms makes Rose feel worse.", "\"You really shouldn't fight... Oh.\" After calling out to them, Rose finally realizes that people are staring at her.", "They're occupying a space that's dim and drafty, surrounded on all sides by women in black.", "Alpha, Epsilon, and the captured Nelson number among them.", "\"Um, well... you see...\" Rose raises her arms, realizing that fighting will get her nowhere.", "She forces a smile in an attempt to demonstrate she's not hostile.", "Beside her, Natsume is cowering pitiably.", "When Rose decides she needs to take action, Alexia steps forward.", "\"I'm so sorry. We tripped and fell. And when we did, why\u2014there was a door right there. It really wasn't our fault.\"", "It's in that moment Rose learns that having no shame can be persuasive in its own right.", "Alexia is obviously lying, but nobody can bring themselves to expend the effort calling her out on it, especially since she's speaking with the haughty attitude of a demon lord who's conquered the world.", "Whatever.", "Let's just let her have it, they all think as they look at her.", "\"If you agree to behave, you can do as you please. In fact, you probably have a right to know a few things,\"", "says Alpha, shooting a glance Alexia's way.", "Then, on her orders, the group in black fans out.", "\"Hooray!\" says Alexia as she quietly pumps her fist.", "The only ones left are Alpha, Nelson, Rose, Alexia, Natsume, and one other unidentified woman in black.", "She isn't Epsilon, though.", "\"What do you people intend to do here?\" Still bound by the woman in black, Nelson glares at Alpha.", "Beneath her mask, the elf smiles.", "\"It's said the great hero Olivier once cut off the left arm of Diablos the demon and sealed it away here.\"", "\"And? What? Have you come looking for the arm?\"", "Nelson laughs.", "\"That sounds fun, but... that isn't what we're here to find out. We want to learn more about the Cult of Diablos.\"", "Alexia visibly flinches at the mention of the organization.", "Rose casts a sidelong glance at her and sees her gaze has gone steely.", "\"What are you talking about...?\"", "\"I knew you wouldn't be able to tell us anything. That's why we had to come see for ourselves, why we had to come searching for the truth\u2014concealed from the very beginning within the shadows of history.\"", "Alpha turns around, then begins walking toward a large stone statue.", "Her heels echo throughout the spacious chamber.", "\"A statue of the great hero Olivier, I see.\" Upon hearing Alpha, Rose cocks her head to the side.", "\"Olivier...? Isn't he supposed to be a man?\"", "She's right\u2014Alpha had referred to a statue of a woman holding a holy sword aloft.", "She is beautiful, with the fierce divinity of a Valkyrie.", "\"We have a general understanding of what happened. However, there is still some uncertainty: the historical truths, the real objective of the Cult, and\"", "\u2014Alpha reaches out toward the statue and gently strokes its face\u2014\"why Olivier's face is identical to mine.\" Alpha turns around.", "The mask that was covering her face is gone.", "\"You're an elf...?\" someone murmurs.", "It's unclear who.", "However, as their breath is collectively taken away by her beauty, they all realize something.", "Alpha's face looks like the mirror reflection of Olivier's.", "\"Impossible! You're that elf who... But the possession should have killed you...\"", "\"See? You know what I'm talking about after all.\"", "\"...!\" Nelson quickly shuts up.", "\"We know the truth about the possessed, too. For a cult that wants to control society, that must be quite the thorn in your side, no?\"", "Nelson looks down, refusing to answer.", "Rose can't make heads or tails of their conversation.", "However, it looks like Alexia is picking up on a bit, and the things Alpha is saying certainly don't sound like nonsense.", "It's hard to believe these two powerful organizations are dabbling in archaeology just because.", "There must be some important reason.", "The Shadow Garden must have an agenda, and the Cult of Diablos must have one of their own.", "The recent attack on her school immediately floats to the front of Rose's mind.", "There's no way that's unrelated to all this.", "A war between two powerful organizations is unfolding in the shadows.", "Rose shivers at this realization.", "If their conflict becomes more intense, Rose strongly doubts the uninformed government officials will be able to deal with it.", "\"We'd suspected the Cult's objective isn't as simple as just resurrecting a demon. However, we aren't certain. That's why we came to see for ourselves.\"", "As she speaks, Alpha channels magic into the statue.", "As her magic surges, the very air starts vibrating.", "\"...You are one of the possessed. Your powers. Did you awaken on your own...?\"", "When Rose sees the exceptional quantity of magic at work, a chill runs down her spine.", "If that woman were to turn her power against the nation, it would take an inordinate amount of military resources to stop her.", "\"There was a great battle here in the past. The hero sealed away the demon, and many valorous lives were lost. Afterward, the demon's and the warriors' magic twisted together, trapping all the memories that had lost their destinations. This land is a resting place for those ancient memories and that demon's wrath. A graveyard.\"", "The statue begins glowing, reacting to the magic.", "Ancient letters rise to its surface, and colors start spreading across it.", "\"Olivier, our great hero, I knew you would answer my call.\" And there stands Olivier, the spitting image of Alpha.", "\"Impossible... This can't be...\" Nelson's legs tremble.", "Olivier turns her back to them and begins walking.", "Her destination fills with light, and before long, it illuminates the entire area.", "\"Now, then. Let's take a little journey to the world of fairy tales.\"", "Alpha's voice is the last thing they hear before the world floods with light.", "Upon defeating Violet, I sprinted away from my pursuers, fled Lindwurm entirely, and took refuge in the mountains.", "Just to be safe.", "After deciding the coast is probably clear, I return to my normal getup and let out a sigh of relief.", "Looks like I managed to pull it off somehow.", "Back at the stadium, the only thing anyone's talking about has to be Shadow the mysterious badass.", "That nobody from the Academy for Dark Knights must be long erased from the public imagination.", "I pulled out all the stops today, so I think I'll just head back, take a dip in the hot springs, and go to bed.", "Just as I stand up to leave, though, a weird door suddenly appears right in front of me.", "A dirty door is just floating out in the middle of the mountains.", "Huh.", "And it's covered in dark stains.", "Clearly dried blood.", "\"What's that?\" This is dodgy in the extreme.", "Even I know better than to mess with this.", "I turn on my heel.", "\"Hey!\" I turn around again.", "\"No way.\" I leap back.", "\"Are you for real?\" The door is following me... with a vengeance!", "It doesn't matter how far I get from it.", "It doesn't matter which way I turn.", "It doesn't matter if I do a hundred backflips in a row.", "The door keeps appearing in front of me.", "I guess that only leaves one choice.", "\"Time to slice 'n' dice.\" As soon as that leaves my mouth, I draw my sword and cleave the door in twain.", "But... the moment I bisect it, it's back to normal.", "I put my katana away and think.", "Obviously, I can't head back to town with this seedy-looking door in tow.", "It would stick out like a sore thumb.", "And what even is this thing?", "I don't sense anyone else around, so I doubt it's some kind of weird prank.", "And there isn't anything behind it.", "\"Is it, like, their version of D\u2014remon's Anyw\u2014ere Door?\" This door is acting pretty desperate, so if I go in, I imagine this will all get resolved.", "I really just want to go soak in the hot spring and call it a day, though.", "I give it thirty seconds of earnest thought, then come to a decision.", "Fine.", "Whatever.", "Let's get this over with.", "When I open the door up, I'm greeted by a dark abyss that makes me feel like I'm gonna get sucked in.", "Praying this isn't that trope where I die the moment I enter, I take the leap.", "I find myself in a room built of stone.", "It's pretty barren.", "There's just a door and a woman bound to the wall.", "Oh, hey, it's Violet.", "\"'Sup,\" I say to her.", "She looks at me, and her eyes go wide in surprise.", "\"...'Sup,\" she eventually mimics.", "\"Short time no see.\"", "\"Uh-huh. Hey, are you the one who called me here?\"", "\"\u2018Called'...? I certainly didn't intend to do that. I did rather enjoy myself back there, though.\"", "\"Yeah. Me, too.\"", "\"My memories are incomplete, but I'm certain you're the strongest one in them. If only you'd been around back during my era...\"", "\"I'm honored.\"", "\"So what are you doing here?\" She looks at me quizzically.", "\"A door showed up out of nowhere, I went in, and here I am.\"", "\"I'm not sure I follow.\"", "\"Yeah, me neither. By the way, do you know any way out of here?\"", "\"I'm not certain. I don't have any memories of ever leaving.\"", "\"You just came and fought me, though.\"", "\"I was there when I came to. It's the first time that's ever happened to me. As far as I can remember, that is.\"", "\"Oh, huh. Well, that's a bummer.\"", "I rack my brain trying to figure out what to do.", "There is a door, I suppose, but right as I decide to try going through it, Violet calls out to me with her lips pursed.", "\"There's a beautiful woman bound before your very eyes,\" she says.", "I look at her and, seeing her limbs strung up to a crucifix, nod.", "\"Yup.\"", "\"Would you please help me down for starters?\" I tilt my head to the side a little, realizing I've been misinterpreting things.", "\"Oh, my bad. I figured you were training.\"", "\"Why?\"", "\"That's how I used to train.\"", "\"...How novel.\" I take out my school-issued sword and free Violet from her restraints.", "Using my slime sword isn't an option.", "She stretches elatedly, a nostalgic smile crossing her face.", "\"Thank you. It's been a thousand years or so since I felt this free.\"", "\"Really?\"", "\"Basically. I don't recall exactly, but it's been at least that long.\"", "After smoothing out her thin robe, Violet tucks her silky black hair behind her right ear.", "I guess that's how she likes to wear it.", "\"Now then, let's agree on our objectives,\" she starts, seemingly unruffled.", "\"Huh?\"", "\"Mine is freedom, yours is escape. Am I correct?\"", "\"Yup, sounds right to me.\"", "\"Shall we work together, then?\"", "\"I'm down, but do you actually know a way out?\"", "\"I don't. I do, however, know a way to get free. The Sanctuary is a prison for memories, and there's a magical core at its center. If we destroy it, I'll be freed.\"", "\"Just you?\"She looks at me from the corner of her eye, smiling coquettishly.", "\"Everything. And you should be able to leave.\"", "\"Won't that destroy the Sanctuary?\"", "\"Oh, I certainly hope so. Do you mind?\"", "I turn Violet's question over in my head.", "\"Now that I think about it, I guess not. Sounds good.\"", "\"Then it's decided. I imagine you've noticed already, but we can't use magic here. We're close to the center of the Sanctuary. If we try to practice magic, it'll immediately be sucked into its core.\"", "\"Looks that way.\" It's stronger than the doodad the terrorists used when they attacked.", "When I try to fire my magic up, it immediately vanishes.", "I'm testing a bunch of different options, but it might take me a while to find a loophole.", "\"Don't worry. I'm great at breaking stuff.\"", "\"Love that I can depend on you. Incidentally, without my magic, I'm nothing but a delicate maiden. I always wanted to be protected by a gallant knight.\"", "This smile is just as impish as the last.", "For a self-proclaimed delicate maiden, she sure seems calm about all this.", "She takes the lead, throwing the door open without hesitation.", "\"By the way, what'll happen to you once you're free?\" I ask Violet from behind.", "\"I'll disappear. I'm nothing but a memory, after all.\"", "She doesn't turn to look back.", "On the other side of the door is a sunlit forest.", "Light streams between gaps in the trees, and beads of morning dew glisten on the grass.", "This place doesn't seem familiar, so I glance around, taking in my surroundings.", "\"We're inside a memory,\" Violet explains.", "\"One of yours?\"", "\"I think I remember something like this.\" And with that, she strides forward.", "I follow her so as not to get left behind.", "After advancing through the quiet forest for a little while, we suddenly reach a clearing.", "Within it, a small girl is sitting on the ground clutching her knees, lit by the morning sun.", "The girl's hair is black.", "\"It looks like she's crying,\" I observe.", "\"So it does.\" The two of us approach her.", "When I crouch down and look at her face, I find tears streaming from her violet eyes.", "\"She looks just like you.\"", "\"A coincidence, I'm sure.\"", "\"Why is she crying?\"", "\"Maybe she wet herself,\" offers Violet unhelpfully.", "The girl silently continues weeping.", "Her body is covered in bruises.", "\"So what do we do?\"", "\"If we want to keep going, we need to end the memory.\"", "\"What do you mean?\" Violet yanks the crying child up by the face.", "\"Crying won't do you any good,\" she snaps, slapping the girl across the cheek.", "\"That's awful.\"", "\"It's fine. It's me, after all.\"", "\"So you admit it.\" The world rends apart.", "The sunlit forest shatters into tiny pieces like a fractured mirror, then vanishes into the abyss.", "Empty darkness surrounds us.", "I can faintly make Violet out in it.", "\"Let's continue.\"", "\"Got it.\" We advance through the void in the direction our magic is being siphoned.", "It's the only sensation we have to go on.", "I can barely feel the ground beneath my feet, and I can't even tell which way is up anymore.", "To test it out, I try walking upside down.", "It's kinda like a handstand: feet up, head down.", "It works.", "Violet casts a lazy glance at me.", "\"Don't go peeking under my skirt now.\"", "\"Worry not. I can't see a thing.\"", "After proceeding a little farther, we're engulfed in vermilion light.", "\"Ow!\"I practically crack my skull, but I manage to break the fall at the last minute.", "\"This is what you get for goofing around.\" Violet looks down at me sprawled on the ground, then extends her hand my way.", "\"Thanks.\" I grab her cold hand and haul myself back to my feet.", "We're standing on a battlefield flush with the light of the evening sun, which is bloodred and shining just above the horizon line.", "\"They're all dead.\" The land is covered with fallen soldiers and stained dark with their blood.", "The corpses continue all the way to the horizon.", "\"Let's be on our way.\" Violet begins walking, almost as though she has a destination in mind.", "There are bodies everywhere.", "As we're forced to trample over them, dusk descends on the scene.", "I dream about a chance to cut loose on a big battlefield like this one.", "After walking a little while, we reach the center of the field and find a blood-drenched girl in tears.", "We stop in front of her.", "She's kneeling atop the corpses and weeping.", "Even without seeing her face, I can tell it's Violet.", "\"You're crying again.\"", "\"I was a crybaby. Lend me your sword.\"", "\"Here you go.\" I hand it to Violet.", "She stands before the girl, sword at the ready.", "Her face is expressionless, and it looks almost as though she's driving her emotions away.", "Then, she brings down the blade.", "At that moment, I lunge.", "I grab Violet by the waist and drag her backward.", "\"Was that... a corpse?!\" Sounds like she noticed it, too.", "One of the soldiers' corpses got up and tried to cut her down.", "If I hadn't acted fast, it would have had her.", "\"The Sanctuary is rejecting it, hmm...? How troublesome.\"", "\"You mean, like antivirus software going after malware?\" I ask as I kick away the zombies.", "\"I'm afraid I don't follow.\"", "\"Yeah, sorry. I don't really know how they work, either. By the way, what happens to you if you die here?\"", "\"I imagine I'll be back in chains in the room where you found me.\"", "\"That would be annoying. How good are you with a sword?\"", "\"I can muddle through.\"", "\"Sounds like it'd be easier if I just took it.\" Violet returns my sword, and I slash at a nearby soldier.", "I cut him in half with a single strike, but more and more of them keep getting up and surrounding us.", "I quickly give up on eradicating them and instead choose to charge forward and break their ranks.", "Violet stomps one of the downed zombies beneath her heel.", "\"Looks like you're struggling without magic,\" I comment.", "\"I think I told you I'm just a dainty girl. You seem to be doing okay.\"", "\"Like I said: Don't worry.\" I swing my sword in a wide sweep and slice apart an onrushing zombie.", "\"I've been able to use magic since I was a baby, so I restructured myself as I grew. My body is the optimal shape for combat. My muscles, my nerves, my bones... I used magic to manipulate them all into their best shapes.\"", "I take out three in one swing, then, with a kick, blast away another attacking me from the side.", "Individually, each zombie is slow.", "There's a bunch of them, but I can more or less mow them down.", "\"How unfair. You're like an adult beating up children.\"", "\"I'd rather you make me sound a little cooler than that.\"", "\"If they held a tournament where no one could use magic, I'm sure you'd emerge the victor.\"", "\"I'll take it,\" I say, but if I have to keep fighting like this, my body's gonna reach its limit at some point or another.", "The crowd of zombies stretches all the way to the horizon.", "Taking them out without magic is gonna be impossible.", "Man, if only I could use magic and go hog wild.", "I force my way into the throng, running the crying girl through.", "\"Sorry.\" Blood pours from her mouth, and as Violet and I are swallowed up by the horde, the world splinters once more.", "As the landscape shatters, the two of us find ourselves back in the darkness.", "\"You good?\"", "\"Thanks to you,\" Violet responds as I sheathe my sword.", "We start walking through the void again until we're eventually engulfed in light.", "We've finally reached the center of the Sanctuary.", "When Alexia comes to her senses, she finds herself standing in a white corridor.", "It seems to stretch on forever; at least, she can't make out where it ends.", "The walls are lined with rooms like prisons, covered up by iron bars.", "There don't seem to be any lights, but the corridor is bright all the same.", "It all feels very real and yet disorienting, like a dream.", "Olivier takes point and begins walking.", "Alpha follows right after her, and the rest hurry to not be left behind.", "The hero starts off a beautiful adult elf but grows younger with each step she takes, and before long, she looks like a little girl.", "The young hero slips through the iron bars and crouches down within one of the cells.", "\"Children without relatives used to be rounded up.\" Alpha's voice echoes through the endless white corridor.", "Then she walks on.", "At some point, the cells became populated with young children.", "Boys and girls, humans, elves, and therianthropes\u2014that is, hybrid beasts\u2014are all caged up.", "They don't seem to share any commonalities besides their age.", "\"Here, they were subjected to an experiment.\" Alpha stops in front of one cell in particular.", "Inside is a girl.", "She seems to have lost her sanity, raging within her cage as if she's in pain.", "She's banging her head, scratching at the walls, and rolling around on the floor.", "Alpha keeps moving.", "The girl in the next cell is covered in blood, but not all the damage appears to be self- inflicted.", "Her body seems to have undergone some bizarre change, causing her skin to tear and drench her body with blood.", "Alexia recognizes that blackened, rotting flesh.", "\"She's one of the possessed...,\" someone murmurs.", "\"Most of the children died, unable to adjust to it.\" Alpha resumes walking.", "The next cell is unoccupied.", "The only things of note are the bloodstains coating the walls and floor and the handprints of someone plainly pleading for help.", "Alpha just keeps going, unfazed.", "The rest of the cells tell the same story: children suffering and dying.", "\"This is horrible...\" Rose gasps, covering her mouth.", "Alexia silently agrees.", "There is one pattern to their deaths.", "The girls' bodies are falling victim to the possession, but the boys' aren't.", "\"The only ones able to adapt were a handful of the girls.\" Then Alpha stops.", "The cell before her houses a slightly older Olivier.", "She bears no injuries and doesn't seem to be in pain.", "She's just sitting motionless, clutching her knees and staring at the opposite cell.", "That cage, on the other hand, is covered in blood.", "The next moment, however, it's as clean as though it had just undergone a scene change, and there's a girl inside.", "She suffers, then dies.", "Another girl appears shortly thereafter.", "The young Olivier just keeps watching.", "\"Why are they doing something so dreadful...?\" asks Rose, her voice trembling.", "\"Care to answer, Acting Archbishop Nelson?\" Alpha turns to the man in question.", "After turning his head away and faltering for a moment, Nelson quietly speaks.", "\"They needed the power to stand up to Diablos...\"", "\"Or so the Cult claims. Regardless of the truth, though, it's fact that Olivier cut off Diablos's left arm. She was one of the few children who could adapt to it,\"", "says Alpha as she proceeds.", "\"What is this \u2018it' you keep mentioning?\" At Alexia's question, Alpha stops for a second to answer.", "\"Diablos cells. That's what we call them, at least. In order to fight Diablos, they decided to try stealing his power.\"", "\"Steal his power...? That wasn't just a fairy tale?\"", "\"We haven't seen it for ourselves. That's how history has recorded it. If you want to think of it as a fairy tale, that's your choice.\"", "Alpha starts walking again.", "\"After all this time, there isn't much point debating the veracity of ancient history. We can't even know if these memories are all true. After all, they fade with time, reshaping themselves to fit their owner's narrative.\"", "They pass by caged room after caged room.", "As they trudge farther down the corridor, they find more empty cells.", "Olivier ages, eventually growing into a lovely young woman.", "Her face really does resemble Alpha's.", "\"After she grew older and obtained Diablos's power, Olivier was given a mission.\"", "\"Slaying Diablos...?\" Rose tries to confirm.", "Alpha shakes her head.", "\"That's how the history books tell it, but we suspect that's a lie. In all likelihood, Olivier was tasked with harvesting more Diablos cells.\"", "\"That's bullshit!\" booms Nelson.", "He glares at Alpha, his face flushed.", "The woman in black hoists him up by the scruff of his neck, and he lets out a frog-like croak.", "\"Even after she grew powerful, Olivier still obeyed the Cult. It's unclear why, but we suspect it's because she truly believed that defeating Diablos would bring about peace. That's why she was cooperating with the Cult.\"", "Olivier leaves her caged prison.", "After putting on a suit of armor and strapping a sword to her back, she sets out on a journey.", "Seeing Olivier's face, Alexia finds herself agreeing with Alpha's assessment.", "Olivier must truly have wanted the world to be at peace.", "Her expression is one of hope and resolve.", "As she walks down the endless white corridor, her destination becomes flooded with a blinding light.", "\"But that wasn't what the Cult was after.\"Then, the beam drowns out the world.", "\"The Cult wanted to take all the power for their own...\" The illuminated reality cracks like the surface of a mirror, then shatters into tiny fragments and reveals a new world in its place.", "They are on a battlefield, but there are no soldiers.", "The landscape is steeped in twilight and littered with corpses, and a group of men in white robes are crowded around a black lump.", "Olivier is nowhere to be found.", "Alexia and the others follow Alpha and draw nearer.", "\"What is that...?\" Rose asks under her breath.", "The lump in question is a massive arm.", "It's a monster's arm\u2014black, thick, and horrifically engorged.", "Chunks of torn flesh hang off its massive nails.", "\"Diablos's left arm. Severed but still alive.\"", "Just as Alpha said, the arm still lives.", "One of the men in white robes accidentally steps too close and finds himself fatally run through by one of its nails.", "Even though it's pinned down by chains and stakes, the arm is still pumping out massive amounts of magic.", "\"Using a high-grade artifact, the Cult was successful in sealing the arm away. However, their seal was imperfect, and its distortions eventually gave birth to the Sanctuary. But, well, that's a whole other story. The Cult was after the incredible life energy contained within Diablos cells.\"", "A robed man draws blood and slices away skin from the sealed arm.", "After a little while, the extracted blood and skin regenerate completely.", "\"Thanks to their research on Diablos's arm, the Cult was able to develop medicine that strengthened humans. It still had side effects, but unlike before, it was effective on men now as well.\"", "Alpha draws a pill from between her breasts, then flicks it with her nail.", "After arcing through the air, it lands on the ground and knocks against Nelson's shoe.", "The pill is red, and Alexia recognizes it as a kind she's seen before.", "\"The Cult has used these to support their endeavors, but the source of their true strength lies elsewhere. After sealing Diablos's flesh away and experimenting on it for ages, they were able to come up with another drug.\"", "The scene changes.", "Now they're in a white laboratory.", "Men in white robes are crowding around a desk, waiting anxiously.", "Finally, a single drop of something falls into a small bowl.", "\"That shiny red liquid is said to be akin to Diablos's own blood.\" The liquid does, in fact, resemble blood and emits a vibrant red glow.", "The men celebrate and cheer, and their representative imbibes it.", "\"By consuming that liquid, one gains tremendous power... and an eternally youthful body. It seems our hypothesis was right on the mark.\"", "Alpha's gaze shifts to Nelson.", "He silently looks down, trying to hide his face.", "\"Now then, does anyone here think the robed man over there\" \u2014she points to the man in white at the end of the group\u2014", "\"looks a little like our friend Nelson?\"", "\"...That can't be!\" cries Alexia.", "She looks at Nelson's face.", "But Alpha is right.", "Nelson's face is a perfect match for that of the man robed in white.", "They're more than similar\u2014the two are undoubtedly one and the same.", "\"Would you please tell us the name of this marvelous drug of yours?\"", "\"...Beads of Diablos,\" Nelson mutters.", "\"Why, thank you. However, these droplets were imperfect. They had two major flaws.\"", "Alexia has already picked up on one of them.", "In the present, Nelson is bald.", "But the Nelson of the past... \"Acting Archbishop Nelson used to have hair. It looks like \u2018eternal youth' has some drawbacks.\"", "Alexia laughs.", "\"That's not it,\" Alpha rebuts her.", "Nelson agrees.", "\"Stress made my hair fall out.\"", "\"I'm sorry,\" apologizes Alexia.", "\"The first of the two major flaws is that the pills have to be taken at regular intervals or the effect wears off. Am I wrong?\"", "\"Once a year, yes.\"", "\"I suspected as much. And the second is that only a tiny number of them can be produced at a time.\"", "\"That's right. Twelve a year.\"", "\"Twelve? That reminds me, aren't there twelve members in the Knights of Rounds?\"", "\"Heh...\" Still hanging his head, Nelson laughs.", "\"There are twelve knights in the Cult called the Knights of Rounds who have powers far beyond those of its other members. Everyone in the Cult hopes to join the Rounds, seeking the power and eternal life that accompany the title. Isn't that right?\"", "Nelson lets out a throaty laugh.", "\"The Cult devotes resources to perfecting these droplets. The key to doing so lies in the descendants who've inherited the blood that runs through Diablos's sealed body and the heroes. People like me. People who've inherited a strong concentration of Olivier's blood.\"", "\"Precisely. I am Nelson the Avaricious, the eleventh member of the Knights of Rounds.\"", "When Nelson lifts his head, his eyes are glowing red.", "Sensing a surge of magic, Alexia readies her guard.", "That's when a jet-black blade runs through Nelson's heart.", "In the blink of an eye, the woman who'd been restraining him has mowed him down.", "Nelson's body goes limp and collapses to the ground.", "\"Sorry, Alpha. Thought it'd be best if I hunted him.\"", "Her voice sounds somewhat listless.", "\"Delta...\"", "\"I'm good at hunting. Back at the mountain with the boars, I\u2014\"", "\"Shut up.\" Delta glances around, realizes she messed up, and covers her mouth.", "\"Now, take a better look at your prey.\" Nelson's corpse is cracking apart.", "It crumbles from the ends, then vanishes into nothingness.", "That's not how people are supposed to die.", "It almost looked like a mirror shattering... \"He's coming,\" warns Alpha.", "Delta's reaction is simultaneous.", "The moment before the longsword can cleave her in two, Delta drops to the ground.", "Then, as the blast wave reaches all the way to Alexia, Delta leaps up like a beast.", "Her fangs and the sword cross paths.", "\"What are you, an animal...?\"", "\"I'm good at hunting,\" Delta responds to Nelson's query with a bestial laugh.", "Her large fangs drip with blood, and Nelson's cheek is torn.", "However, he seems unconcerned as he wipes the blood from his face.", "The wound has already healed.", "Delta extends her ebony katana out as she drops into an animal like stoop.", "She's immediately interrupted.", "\"Delta. Wait.\"", "Hearing Alpha's voice, she twitches in surprise.", "\"Your ears are showing.\"", "\"Ah...!\" Delta's animal ears are sticking out from an opening in her bodysuit.", "She frantically tries to hide them, but her pale buttocks end up exposed when she does, revealing her wagging tail.", "\"A therianthrope...,\" murmurs Rose.", "\"Hey, um, Alpha, I feel like my magic is being sucked away.\"", "\"That's because we're close to the Sanctuary's center.\" The one who replies to Delta's question is Nelson.", "\"The Sanctuary is our territory. The closer you get to it, the more power you'll lose.\"", "His voice cracks.", "At some point, his body split into two, but before they know it, he's back to one again.", "\"I'd hoped to get you all a little closer to the core, but... this will be plenty. Now, allow me to introduce myself again.\"", "As he effortlessly balances a longsword as tall as he is on his shoulder, Nelson gives a small bow.", "\"I am Nelson the Avaricious, the eleventh member of the Knights of Rounds. You will regret baring your fangs against the Cult.\"", "There are no vestiges of a clergyman in his expression.", "His face is that of a savage warrior.", "The scene changes.", "They're now in a space that's endlessly white.", "The sky, the ground, and even the area beyond the horizon line are all level and blank.", "Alpha and Delta square off against Nelson.", "Nelson's body flickers, then splits into two.", "Still crouching, Delta inches forward and slowly closes the distance between them.", "Alpha's arms, on the other hand, are crossed, and she isn't even holding her weapon.", "Instead, she's staring at the two Nelsons, almost as though she's observing them.", "\"...Hah!\" As Delta exhales, she goes on the offensive.", "From the way she's stooped over low, she looks like an animal dashing along the ground.", "Then, barreling forward, she swings her ebony katana in a wide sweep.", "The katana in question is far longer than a person is tall, and her attack has no technique or craft behind it.", "Just pure, unbridled violence.", "Wind follows the force of the impact.", "The destructive wave strikes Nelson and sends him flying.", "He seems to have been able to block the blow, but astonishment is written all over his face.", "\"What kind of monster are you...?\" Delta laughs.", "She's about to go for a follow-up attack, but at that second, Nelson lashes out to stop her.", "As she dashes forward, a longsword bears down on her from the side.", "\"One down.\"", "\"Wha...?\" As Nelson holds his longsword aloft, an ebony katana bursts through his face.", "At some point, Alpha made her way behind him and cut into his body.", "She slices his neck.", "There's no sound.", "No bloodlust.", "Just Nelson's head toppling through the air.", "Blood gushes from the wound and stains the white ground.", "The next moment, though, the corpse shatters like a broken mirror and vanishes into the ether.", "\"The body felt human\u2014from the way it moved and smelled. Part of how the Sanctuary protects itself, perhaps?\"", "murmurs Alpha as she gazes at her sword, from which the blood has completely vanished, too.", "\"Precisely.\" Hiding his astonishment, Nelson stands at the ready.", "His body splits into two, then again into four.", "\"It seems I was a bit careless. Perhaps four will do the trick.\"", "One of them hangs back, and the other three Nelsons charge.", "Delta barrels into their midst.", "She doesn't care about being outnumbered or that she's at risk of being surrounded.", "All she sees is prey.", "\"So you're just a simple brute...,\" Nelson chuckles.", "Delta laughs, too.", "Then, she smashes the frontmost Nelson to pieces, longsword and all.", "However, the other two move to box her in, and they level attacks at her.", "The two longswords slice through the air horizontally, bearing down on Delta like a pair of scissors closing around her.", "With her avenue of retreat cut off, Delta blocks the longsword in front of her with her katana, then twists her neck to turn her head backward.", "Then... she catches the blade coming up from behind her in her teeth.", "When she brings down her canines, the longsword snaps with a dull ring.", "\"What...?\" Nelson is dumbfounded.", "While he's rubbing his eyes, Alpha kills the two of him remaining.", "\"That's impossible...\" Most of Alpha and Delta's magic is supposed to be restrained.", "With the power of the Sanctuary, they shouldn't have been able to control or manipulate it.", "It should have been impossible for them to put up a decent fight.", "Yet even under these restrictive conditions, they downed several Nelsons.", "It defies all common sense.", "\"Did the two of you really awaken on your own...? That technique was supposed to be long lost...\"", "Alpha replies with a smile.", "Delta, on the other hand, seems to be having difficulty controlling her bodysuit.", "She grabs the slime with her hands, then manually stretches it over her breasts and lower body into a simple suit of bikini armor.", "Her face and body are only minimally covered, but Delta nods regardless, clearly pleased with herself.", "\"W-well, this is totally what I expected from you...\" Nelson's voice trembles a little.", "\"Come, then\u2014let me show you my true power.\" His body multiplies.", "This time, the number dwarfs his past displays.", "There are well over ten of him, probably close to a hundred.", "\"So much prey...\" Delta grins ecstatically and, sure enough, charges into the fray.", "\"You don't even understand you're outnumbered, you stupid animal?!\" But as Delta and the Nelsons collide, his face twitches.", "Several of the Nelsons go comically flying through the air.", "\"HRAAAAAAAAAAAAH!!\" Delta howls, which echoes like cruel laughter.", "The slaughter begins.", "From a safe distance, Alexia gazes in shock as Delta spins her ebony katana like an electric fan.", "Delta's sword work is unlike Shadow's, and it's different from Alpha's and Epsilon's.", "She has no form or technique, simply unbridled violence.", "It diverges from what Alexia considers strength.", "It makes her want to ask, Are you really okay with that?", "However, the fact of the matter is that Delta is powerful.", "Preposterously so.", "Alpha joins in as well, and in the blink of an eye, the Nelsons are exterminated.", "\"How? How could you do that so easily...?\"", "\"You were a researcher, weren't you?\" asks Alpha, sounding oddly sympathetic.", "\"Even with infinite copies, there's still only one brain. And humans aren't smart enough to effectively control multiple bodies at once. By the time you get to a hundred, they're little more than scarecrows.\"", "Delta slays the final copy.", "Her tail wags as she strides forward.", "\"One left...,\" she snarls.", "A brutal smile is glued to her face.", "For all intents and purposes, she resembles a bloodthirsty beast.", "\"Aaah...!\" Nelson cries, shrinking back.", "\"It looks like there's a limit to how many copies you can make,\" Alpha says dispassionately as she watches him.", "She's right.", "Nelson doesn't have the strength to produce any more copies.", "And that's why... ...he finds himself calling upon the Sanctuary's final guardian.", "\"Come to me! And quick...!\"", "In response to his pathetic plea, the air rips to shreds.", "Light spills forth from the opening, then coalesces into the shape of a woman.", "A woman who rather resembles Alpha... \"Olivier...,\" Alpha murmurs.", "There stands the great hero.", "However, there's no strength in her eyes.", "They're hollow, like glass beads, and appear sad.", "She steps in front of Delta, as though to protect Nelson.", "Delta laughs.", "Strangely, though, she doesn't charge or inch closer.", "She merely surveys her prey through bloodshot eyes, as though making light of her.", "\"Olivier, the great hero... So you really are...\" Alpha bites down on her lip.", "Delta licks her lips, wiping up her drool.", "But then they're interrupted.", "\"Alpha, we're finished with the investigation!\" A voluptuous woman clad in black appears.", "For whatever reason, though, she's a good ways away.", "\"Epsilon... I suppose that means our preliminary survey is over.\" Alpha turns around and begins walking.", "\"A-are you trying to escape...?!\" yelps Nelson, audibly relieved.", "\"We've no interest in taking the life of a weakling. Our objective was to cut off your power at its source. And now, we're better informed as to the Sanctuary's defenses. All that remains is to go pry it open.\"", "\"Y-you think I'll just let you get away?\"", "\"Oh? Will you indulge us in a wild chase?\"", "\"Eek!\" Nelson takes refuge behind Olivier's back.", "\"Delta, we're leaving... Delta!\" When Alpha grabs Delta by the scruff of her neck, Delta shakes her off and bares her fangs.", "\"Grrr!!\"", "\"Excuse me?\" With a start, Delta returns to her senses.", "\"Grrr. I'm sorry...\"", "\"We're going.\"", "\"Okay...\" With her ears tucked down and her tail rolled up between her legs, Delta scampers after Alpha.", "\"Lady Alpha! Hurry! The exit is this way! Quickly!\"", "Epsilon waves her hands and repeatedly urges them on.", "Her two mounds of slime jiggle.", "After everyone has entered the slit of light, led by Epsilon, silence descends upon the Sanctuary once more.", "Nelson sits down and breathes a sigh of relief.", "\"W-well, no matter. Now I know that Alpha woman's face. With her blood, we'll get even closer to completion. This is all according to plan,\"", "he grunts.", "\"F-first, I should report to the bosses. I can say I lured them into the Sanctuary, sprung my trap, and discovered Alpha's true nature.\"", "Describing it like that, he'll be able to cover his ass.", "\"Then, I'll... Hmm?\" Suddenly, Nelson notices something off about his surroundings.", "\"Strange... It seems a little mouse has slipped into the center of the Sanctuary.\" He glances around, and a wicked smile curls at his lips.", "\"Heh, tormenting it will prove a welcome distraction. Come along, Olivier.\"", "With that, Nelson and Olivier vanish from the scene."], "c4": ["It feels like we're in an archaeological ruin.", "There's no longer that dreamlike sensation that permeated all the places we'd been in up until now, and the cool air brings me back to reality.", "The ceiling is high, and magic illuminates our surroundings.", "\"This must be the center.\" Violet turns, surveying the area.", "\"So what do I need to smash?\" I'm not seeing anything that looks like a magical core.", "Just a massive door off to the side.", "\"It's probably beyond that door.\" Violet treads atop the stone floor as she heads for it.", "\"Makes sense.\" I follow her.", "The door is so big, it could probably let a hundred people through at once.", "Okay, maybe that's a bit of an exaggeration.", "Anyway, it's still a big-ass door.", "It looks old as hell, and its surface is covered in dark bloodstains and densely packed with ancient letters.", "Several chains, each link wider than a human body, are wrapped around it, keeping it sealed.", "\"We can probably make it through if we cut the chain.\"", "\"Seems plausible.\" I grab one of the links and give it a yank.", "No dice.", "\"Yeah, that's not happening.\" I might be strong enough to win a magicless tournament, but tearing these chains is physically impossible.", "And if I try chopping through them with my sword, my weapon will probably break before the links do.", "\"You know, there must be a key somewhere,\" offers Violet.", "\"Ooh, yeah, checks out.\" It takes all of three seconds to find.", "There's a pedestal next to the door with some sort of fancy sword stuck in it.", "\"This is clearly it.\"", "\"It clearly is.\" As expected, the pedestal is covered in tiny ancient letters, too.", "\"This sword should be able to break the chains,\" says Violet as she reads the inscription.", "But I know better.", "A sword stuck in a pedestal?", "This ain't my first rodeo.", "\"But I won't be able to draw it out...\"", "\"I beg your pardon...?\"", "\"I know these things...\" With that, I grab the sword by the handle and try pulling it out, but sure enough, it doesn't budge an inch.", "\"As I thought... I get it now...,\" I murmur suggestively.", "\"This blade can only be drawn by the chosen one...\"", "\"What...?!\" Violet cries.", "She frantically traces over the ancient writing on the pedestal with her finger.", "As she does, I let go of the sword.", "\"The blade... is rejecting me...\" I'm just building up the mood here, upping the ante.", "I'm pretty sure it isn't actually rejecting me.", "But the fact that the chosen hero is the only one to draw this kind of sword is just common sense.", "It's a time-honored plot device.", "\"Only a hero's direct descendant can draw the holy sword... You're right, it's all written here. I'm amazed you were able to read that encrypted magic script so quickly.\"", "\"Heh... I know all the devices...\"", "\"Oh, I see. You designed a device that encompasses ways to encode magical script.\"", "\"Yeah, that. Definitely.\"", "I nod proudly.", "Looks like we've got a holy sword stuck in a pedestal and a sealed door that only the sword can unlock.", "It's clich\u00e9d, sure, but I love this kind of setup.", "Nice!", "Now it really feels like I'm in a fantasy world.", "\"What to do...?\" Violet mutters as she sits down on the pedestal.", "\"Is there another way through?\" I ask, taking a seat beside her.", "\"No leads in writing, in any case.\"", "\"Oof.\" We think in silence for a little bit.", "We must each be running through different scenarios in our minds.", "Finally, I speak up.", "\"Do you want to disappear?\"", "\"What?\"", "\"When we destroy the core, I imagine you'll disappear.\"", "\"Ah, right. But call it liberation. That's more apt.\"", "Not looking my way, Violet smiles.", "\"What's the difference?\"", "\"This place is a prison, one where memories repeat for eternity. It... pains me.\"", "Her voice almost disappears, like a whisper.", "\"I see. In that case, let's just wait a little longer.\"", "\"Wait for what...?\"", "\"If we take enough time, I should be able to do something about the door. Before that... looks like we have guests.\"", "A sliver of light has appeared in front of the door, gradually widening, until eventually a bald geezer and a cute elf emerge.", "\"Huh...?\"", "\"What's the matter?\"", "\"Nothing. That elf just kinda looks like a friend.\"", "However, she's definitely someone else.", "Her bone structure is different, as are her mannerisms and gait.", "\"Ah... So you brought along Aurora,\" Baldy says as he looks at Violet.", "The two of us engage in a surreptitious convo.", "\"You know this guy?\" I ask incredulously.", "\"Who knows? I don't recognize him, but my memories are incomplete. It's possible we've met before.\"", "Baldy laughs.", "\"A shame, really. It's impossible for the likes of you to breach this door. You seem to have suffered a stroke of misfortune, boy.\"", "\"Me?\" I point at myself.", "\"I don't know where you stumbled in from, but that witch has deceived you, leading you to your death. At the hands of my Olivier, that is.\"", "Upon receiving the bald geezer's orders, the pretty elf strides forward.", "The old fogy is just a pushover, but this cutie is strong.", "Violet and I have another quiet exchange.", "\"We can't... She's...,\" I start.", "\"I can tell. She's strong, huh?\"", "\"We have to run.\"", "\"Why?\" Baldy cuts in.", "\"If you want someone to blame, blame the witch, not me. Curse her and your own folly...! Go, Olivier, kill him!\"", "She readies her sword, which happens to be a perfect replica of the holy sword.", "I match her by drawing my shitty school-issued sword.", "Her eyes are like glass beads, and they're fixed solely on me.", "I can feel my lips curl into a grin.", "\"Stop! You can't fight her!\"", "Why?", "Violet's voice echoes behind me.", "The battle begins with Cid getting blasted backward.", "He violently crashes into the stone wall, then coughs up a mouthful of blood.", "Even though he looks about ready to crumple into a heap, Olivier doesn't let up.", "She swings her holy sword and aims for the boy's neck.", "She lops it clean off\u2014or so it appears in that rapid exchange.", "By leaning forward, Cid just barely ducks clear of Olivier's slash.", "Instead, she carves a deep horizontal line in the wall.", "Still, he knows her follow-up attack will come quickly.", "That's why he immediately steps forward, closing the space between them.", "However, his resistance ends up having been for naught.", "Cid takes a full step to the front, but Olivier's half step backward is far faster.", "Because he hadn't finished taking his step, he's defenseless in the face of her strike.", "Metal whines against metal, and Cid's sword snaps.", "He barely manages to protect himself, but his flimsy sword splits in two while his body bounces and rolls atop the stone floor.", "It hardly qualifies as a fight.", "One side is obviously dominating.", "But that's just to be expected.", "Technique has nothing to do with it.", "Her strength, speed, resilience, and all-around power are just fundamentally dimensions beyond his.", "Just like how an adult can't have a fair fight against a baby, the end result is predetermined when a young man who can't use magic goes up against a hero who can.", "The very fact that it isn't settled in a single blow is practically a miracle.", "\"Olivier, finish that child off,\" demands Nelson, clicking his tongue in annoyance.", "During the time Olivier stops moving, Cid struggles to his feet.", "His face is covered in blood from his nose, and when he spits, that's red, too.", "He looks at his bisected sword, giving it a small swing to test it out.", "It's almost as though he thinks he'll have another chance to use it.", "\"What do you think you're doing?\"", "\"Hmm?\" Cid responds to Nelson's question by tilting his head.", "\"You still think you can accomplish something with that piece of scrap?\"", "\"Maybe. I don't have many options, that's for sure.\"", "\"What's wrong with you?\"", "\"Hmm?\"", "\"Why are you smiling?\" Cid responds by reaching up and touching his cheek.", "Sure enough, there's a smile there.", "\"There's nothing I hate quite as much as a man who doesn't know his place. The only reason you're still alive is a stroke of dumb luck,\"", "Nelson barks.", "With a sweep of Nelson's hand, Olivier bounds forward.", "She slips behind Cid with the utmost ease, then brings her holy blade down on him from above.", "No counterattack, self-defense, or evasive trick can be made in time.", "The only thing he's able to do is throw his body forward.", "Blood gushes from Cid's back.", "The blow tears his skin and rends his flesh, but he manages to avoid suffering a fatal wound.", "All he's accomplished is to briefly prolong his life, though.", "Olivier advances on the helpless young man once more.", "Her strike is merciless, leaving no room for a counterattack.", "Blood sprays as shallow wounds etch themselves into Cid's body.", "Yet he lives.", "\"Impossible...,\" Nelson mutters.", "His tone carries with it a sizable degree of shock.", "\"How are you still alive?\" Cid checks to make sure no further attacks are coming his way, then forces his bloody body upright.", "\"Battles without dialogue are empty. That's why I'm still alive.\"", "\"What are you babbling about?\"", "\"She doesn't have a heart, so she isn't answering any of my questions.\" Cid's smile is tinged with disappointment, and his mouth is caked in blood.", "\"Enough of this! Kill him!\"", "Nelson's eyes are those of a man looking at the deranged.", "Olivier springs into motion, but a figure intercedes at the last moment.", "\"Please stop.\" The woman in question has jet-black hair and violet eyes.", "Aurora embraces Cid's shoulder and helps prop him up.", "\"What's the matter?\"", "\"Please. You need to stop,\"", "Aurora begs him.", "She knew this would happen from the very start.", "The moment Aurora laid eyes on Olivier, she'd known how powerful the elf was.", "Aurora's memories aren't completely intact.", "They only cover about half her life, but even though Olivier doesn't appear in these memories, for some reason, Aurora knows she's dangerous.", "Despite not knowing Olivier, her heart trembles, almost as if she does.", "That's why Aurora desperately wants to stop Cid.", "Contrary to her expectations, though, Cid fought.", "Maybe he could be the one to... She didn't stop him in time, held back by that fleeting hope.", "But this is plenty for her.", "She's been scorned all her life, and not once has anyone ever put their life on the line for her sake.", "She's made a memory she'll never forget, and that's enough for her.", "\"There's no need for you to die. I can handle the rest.\"", "Nelson laughs.", "\"What can a witch do without her magic?\"", "\"I can secure his escape at least.\" Aurora strides forward, protecting Cid.", "\"A witch saving a human? Wonders never cease. But... if you agree to help me, I could be convinced to spare the boy's life.\"", "\"Help you?\"", "\"Indeed. You've been oh so uncooperative, and it's caused us no shortage of delays.\"", "\"What are you talking about?\"", "\"Oh, you're just an incomplete memory. No matter. All you have to do is agree to cooperate. Don't dawdle, or I'll kill the boy.\"", "Aurora casts a brief glance back at Cid's face.", "\"Okay, I'll do it...\" Cid interrupts them, his voice completely free from fear.", "\"Hey, could you guys not start deciding stuff on your own?\" Aurora looks back and glares at him.", "\"I'm doing this for you, you know...\"", "\"I'm good.\" Cid steps in front of Aurora.", "\"So I've been listening, and I'd really appreciate it if you guys could just stop assuming I'm gonna lose. It's really starting to piss me off.\"", "\"What a tragic young man. Imagine being this oblivious to your situation. To think\u2014if you'd just shut up and done what you were told, I was prepared to let you live.\"", "\"I told you\u2014I'm good.\" Cid turns and looks at Aurora.", "\"As for you, just stay and watch.\"", "\"Enough. Kill him.\"", "\"No!!\" Aurora reaches out, but she's unable to stop him.", "Cid has already stepped forward and engaged Olivier.", "As soon as he blindly steps forward, she greets him with her holy blade.", "She leads with a thrust.", "The attack cleaves through the air at a blistering clip, then pierces his abdomen.", "The merciless strike runs him through.", "\"Gotcha.\" As he's stabbed, a grin spreads across Cid's bloodstained face.", "He grabs Olivier's arm, then yanks with all his might.", "His muscles bulge, screaming as they exceed their limits.", "For just one instant, Olivier's movements are locked in place.", "And she's in the perfect range for a half-broken sword.", "Cid's blade slices toward the arteries in her neck, and Olivier bends backward to evade the blow.", "However, doing so ruins her center of gravity.", "Tossing aside his sword, Cid grabs Olivier and pins her.", "Then he bites down on her carotid artery.", "His teeth impale her slender neck, then sink into the vein.", "He holds her tight and presses down on her struggling arms as he chews.", "Each time his teeth dig into her artery, Olivier's body convulses.", "Eventually, Olivier cracks like a mirror.", "She shatters into pieces, then disappears.", "The only one left is Cid, covered in blood.", "\"I-it can't be happening... Olivier can't...! Curse you! How are you still alive after she impaled you?!\"", "The wound in Cid's chest should have been fatal.", "No question.", "The fact that he's alive is strange, and taking down Olivier in that state borders on inhuman.", "\"It's so easy for people to die. Most of the time, all it takes is a small blow to the back of the head. And hey, I'm no different. One little knock on my skull, and that could be it for me.\"", "Cid stands, patting his wound as if to make sure his body is still in one piece.", "\"But as long as you protect your vitals, you're surprisingly sturdy. You can get stabbed through the chest, but if you protect your arteries and important organs, you won't die. Kinda sweet, don't you think?\"", "\"\u2018Sweet'...?\"", "\"Totally. You can eliminate the time spent dodging before you counterattack. Just punch their face while they're punching yours. Rip apart their neck while they're stabbing you in the gut. Offense and defense become one and the same, and the tempo of your counterattacks accelerates to its absolute limit. They become nearly unavoidable.\"", "\"There's... something wrong with you.\" Nelson's face scrunches up, as though he's looking at something grotesque.", "\"Are you okay...?\" Cid responds to Aurora with a nod.", "\"So the elf chick's gone. You up to bat next, Gramps?\"", "Nelson gulps, clearly flustered.", "\"I\u2014I get it. I never imagined you'd defeat Olivier! You're clearly very powerful. I was wrong. I'm so sorry!!\"", "Nelson bows, but a chuckle soon escapes his lips.", "\"...Heh, did you really think I'd say that? Sure, I was surprised a boy with no magic was able to take down Olivier. You're not just a child, even if your victory was dumb luck. But a win is a win. Congratulations.\"", "Nelson raises his head, clapping.", "\"But don't get cocky over beating a single low-grade copy. You could never conceive of the quantities of magic slumbering within the Sanctuary. That's why it can even do this.\"", "Nelson waves his arm, and light floods the area.", "When it dies down, Olivier is there.", "And she's not alone.", "An incalculable number of Oliviers, enough to fill the entire ruin, stand where the light once was.", "\"This can't be happening...!\" Aurora cries.", "Cid's wound may not be fatal, but that doesn't mean it isn't serious.", "There's no way he's in any state to fight.", "\"This is the power of the Sanctuary!!\" The Oliviers rush toward Cid.", "Cid lets out a weak laugh.", "\"Sorry, but... your time's up.\" The Oliviers are charging at him from all directions, but... he mows them all down.", "\"What?!\" It's unclear when it appeared, but he's holding an obsidian katana in his hand.", "\"Where did you get that...? Wait\u2014can you use magic?!\"", "Cid's body is bursting with bluish-purple energy.", "The magic is so incredibly concentrated, it's visible.", "It glitters beautifully, compressed to an unimaginable degree.", "\"If my magic is getting sucked away, all I have to do is thicken it until it's too dense to be absorbed. It took a little time, but it's pretty simple, really.\"", "It definitely wasn't simple.", "Aurora was widely referred to as a witch, but that technique is beyond even her.", "\"Th-this can't be...!! How can you do that?! Qu-quick! Kill him!!\"", "Nelson screams, his face frozen in fear.", "The Oliviers bear down on Cid once more.", "However, Cid stretches his jet-black blade out wide and fells them in a single sweep.", "\"This isn't supposed to... Olivier isn't supposed to...!!\"", "\"I told you\u2014time's up.\" One after another, the Oliviers attack Cid.", "Although the black sword blasts them away, most don't immediately disappear.", "After blocking the attacks with their holy swords, they rush back at Cid.", "\"Man, you guys really are strong, and you keep on coming.\" The Oliviers swarm, and Cid sweeps them back.", "The pattern repeats itself faster than the eye can see.", "Each time, blood drips from Cid's wound, and his face contorts in pain.", "The equilibrium won't last.", "That fact is clear as day.", "\"Ha-ha! Good! Good! Keep it up!!\"", "Nelson laughs, though his face has taken on a scary look.", "As Aurora watches Cid's predicament worsen, tears well up in her eyes.", "\"Please... Don't die...\" All she wants is for him to survive.", "\"We were supposed to draw the holy sword, cut through the chains, and destroy the core, right?\" Cid calls out to Aurora from the thick of his desperate battle.", "\"What? I mean, yes...,\"", "Aurora replies, confused.", "\"That sounds like too many steps. What if I just blew everything up?\"", "\"That would be fine, but... you can't be serious, right?\" Cid smiles, slashing in every direction.", "The Oliviers are all scattered, giving him a brief moment of respite.", "He flips his sword to an underhand grip, then holds it overhead.", "Bluish-purple energy spirals around him, collecting in the length of his obsidian katana.", "\"I AM...\"", "\"Wh-what is that?! N-no! Stop!!\"", "The Oliviers charge.", "The one in front strikes with her holy sword.", "The full-strength blow pierces Cid's defenseless chest.", "More specifically, it strikes the location of his heart.", "Covered in blood, her blade bursts out his back.", "Aurora screams and extends her hand.", "\"...ATOMIC. ALL-RANGE ATTACK.\"", "His chest impaled, he brings his sword down and stabs the ground.", "\"NOOOOOOOOOOOOOOOOOOOOOOOO!!\" The bluish-purple magic immediately fills their vision.", "The Oliviers vanish, Nelson disintegrates, and the holy sword melts away.", "Then, the magic continues swallowing the surroundings.", "His attack is an esoteric technique designed to annihilate everything within a small range in all directions.", "And on that day, the Sanctuary is completely wiped out.", "When he comes to his senses, Cid finds himself surrounded by darkness.", "Even when he squints, all he can make out is an endless black abyss.", "But amid that darkness, where left and right, up and down, and even his perception of self start to fade away, he senses something floating up.", "It's a hideous left arm bound in chains.", "It looks like it's far off in the distance, yet if he reached out, it seems almost close enough to touch.", "Suddenly, the chains crumble, their fragments cascading downward.", "The arm, now free, reaches out as though to grab Cid.", "Cid readies his obsidian blade, and the world... is engulfed in light.", "It's early in the morning, and Cid finds himself standing in a forest.", "It's where he was when he first went through the door.", "He glances around, but the arm is nowhere to be seen.", "He squints as the morning light strikes his eyes.", "\"You got stabbed through the heart, but you seem none the worse,\" he hears a voice call out from behind him.", "He turns to find Aurora there, looking somewhat fuzzy.", "\"I shifted it out of the way. I'm a little tired, though...\"", "He looks up at the morning sky, sighs, then steadies himself against a tree as he sits down.", "\"You're just full of surprises. More than little old me...\"", "Aurora sits down beside him, reaching out to touch the wound on his chest.", "When she pulls her hand back, though, there isn't any blood.", "Her hand has passed right through him.", "\"You're disappearing, huh?\"", "\"It would seem that way.\" The two of them sit side by side and gaze at the splendor of the sunrise.", "\"I was the one who called you there. I'm sorry for lying to you.\"", "\"It's all good.\"", "\"I lied about other things, too.\"", "\"It's all good.\" Small birds start chirping.", "The morning dew glistens in the sunlight.", "\"For so long, I'd just wanted to get it over with and disappear. I wanted to forget everything.\"", "\"Mm.\"", "\"But now, I was able to make a memory I never want to forget. Even if I disappear, I hope to carry that one with me.\"", "She smiles.", "\"Thank you for giving me something so precious.\" With that, she begins fading away.", "Her forced smile is sorrowful.", "\"Hey, I had fun, too. Thanks for that.\"", "\"If, by any chance, you ever find the real me...\" She cups Cid's cheek in her hand as she speaks, but he can't even see her anymore.", "There's nothing before him but the silent, lonely forest.", "\"\u2018Please kill me,' huh...?\" Cid reaches up and touches his cheek as he murmurs Aurora's final words.", "He can still feel her warmth on it.", "Alpha and Epsilon gaze down upon Lindwurm from atop the mountain's summit.", "Alpha's dress flutters in the wind, exposing her pale legs.", "\"The Sanctuary has been annihilated.\"", "\"I noticed.\" Alpha squeezes the bridge of her nose.", "\"Were we able to recover the holy sword?\"", "\"It evaporated.\" She sighs.", "\"What about a sample of the core?\"", "\"All gone, too.\" Alpha shakes her head.", "\"He chose the simplest, most decisive solution. Very like him.\"", "\"That's what makes him Master Shadow, after all,\" Epsilon replies triumphantly.", "\"His path is the one we must take.\" The morning sunlight reflects off Alpha's luscious blond hair, causing it to shine.", "She squints at Lindwurm, off in the distance.", "\"And Beta?\"", "\"She's guiding the princesses. She says that if she plays her cards right, she might be able to infiltrate their ranks.\"", "\"I see. And the survey of the Sanctuary?\"", "\"We've completed everything we still can.\"", "\"What do we know?\" Alpha closes her eyes as she listens to Epsilon's report.", "Her head is clear, and she's able to sort through the information instantly.", "\"That's plenty. And what about the other matter?\"", "\"It appears our hypothesis was on the mark.\" Epsilon wavers for a moment, then delivers her answer as simply as possible.", "\"Aurora the Calamity Witch... is also known as Diablos the demon.\" Alpha's blue eyes are fixed on the distant sunrise.", "\"I see... That explains why he...\" Another piece of the puzzle clicks into place.", "After Alexia leaves the Sanctuary, she finds herself in a forest.", "When she looks around, she discovers Rose and Natsume are standing beside her.", "The three of them had all been near each other when they fled the Sanctuary.", "Rose tilts her head.", "\"Where are we...?\"", "\"Lindwurm Forest, I think. I can see the town off in the distance,\"", "replies Natsume.", "The other two check, and sure enough, they can make out the town, too.", "It's impressive that she noticed, given how hard it is to see between the slim gaps in the trees.", "\"I think we should head back.\"", "\"Agreed.\" Before Rose and Natsume can get far, though, Alexia calls out to stop them.", "\"Wait.\"", "\"What is it?\"", "\"Is something the matter?\" The two stop and look at her.", "\"Hey, don't you hate it?\"", "\"What do you mean...?\"", "\"I'm afraid I don't quite follow.\" Alexia looks back and forth between them.", "\"We were completely powerless back there. But that's not the worst of it. We couldn't even tell who was good and who was bad. We were useless spectators who couldn't so much as make out who was in the right...\"", "\"Alexia...\"", "\"If we keep on this way, if we stay in the dark, then we're sure to eventually lose everything we hold dear. I can't be the only one who thinks that, right...?\"", "\"Alexia, the truth is... something's been on my mind, too. Back when the academy was attacked, I think there were powerful organizations secretly pulling the strings. After all, we don't know anything about either the Shadow Garden or the ones opposing them...\"", "\"I understand how you feel, but what are you planning to do, Princess Alexia?\" Alexia crosses her arms.", "\"We're weak and missing vital information, but surely, there's at least something we can do together. I'm a princess of the Midgar Kingdom, and Rose is the princess of the Oriana Kingdom. You're an author, so you must have made some connections that way. What say we gather information, then share it?\"", "\"You've laid out the beginnings of a plan. What's the endgame?\"", "\"That depends on what we find, but if the three of us join forces, we can probably fight back or something. Or we can try to gather allies, or...\"", "\"Your plan seems alarmingly vague.\" When Natsume points that out, Alexia glares at her.", "\"Th-that's why I'm saying we need to gather information, so we can scrutinize it and decide what to do from there!\"", "\"That's all well and good if you're smart enough to parse intelligence,\" Natsume quietly mutters.", "\"I'm sorry. Did you say something?\"", "\"Oh, nothing.\" Alexia continues glaring, and Natsume flashes a wide smile.", "The two stare at each other for a little while.", "\"So what will it be? Will you form an alliance with me or not?\"", "Rose is the first to extend her hand.", "\"I'm in. I'll try finding out what I can in the Oriana Kingdom.\"", "Next, Natsume lays her hand atop Rose's.", "\"I'll use my connections as an author to dig around, too.\" Finally, Alexia places her hand on the pile.", "\"Then it's decided. From now on, we're allies. We come from different countries and backgrounds, and none of us really knows what lies in one another's hearts, but I have faith we're on the same side.\"", "Rose smiles.", "\"I like the sound of that. Allies trying to lay bare the world's hidden truths... It's like the start of a legend or something.\"", "\"We have the roles of hero, sage, and deadweight all present and accounted for,\" remarks Natsume, smiling at Alexia.", "\"With you being the deadweight, of course,\" counters Alexia, grinning back at Natsume.", "Their pact sealed, the three of them stride forth side by side.", "Off in the distance, the morning sun shines bright on the town of Lindwurm.", "The vast majority of Gamma's job is taken up managing the business side of Mitsugoshi, Ltd.", "Whether she's content with this or not, the fact of the matter is that her lack of combat prowess leaves her with few other options.", "In truth, she dreams of fighting chicly by her master's side, but that's her little secret.", "This is what compels her to spend another day dutifully minding Mitsugoshi's affairs.", "Her job has taken her to Madlid, which is on the outskirts of the Velgalta Empire.", "Currently, she's in the middle of negotiating with a feudal lord about opening a new storefront for Mitsugoshi.", "\"Ms. Luna, I personally recommend this property.\" Gamma's guide, Rude, bears a flashy smile.", "He's the eldest son of the lord in question.", "Luna is the name Gamma uses in public when she's acting as the president of Mitsugoshi.", "\"It faces out onto the main road, and it gets great sun. The property boasts a generous frontage. With the land, it comes out to one hundred forty million zeni, but as a special favor, I'm prepared to let it go for one hundred twenty. We would be overjoyed to have Mitsugoshi here.\"", "\"I see.\" The man is right; the plot is excellent.", "The building isn't bad, either.", "It's a bit on the older side, but it's three stories tall, spacious, and sturdily built.", "A little remodeling is all it would take to establish a usable storefront.", "Demolishing the old and constructing a new building is another option.", "Most of the property's value is in its location, after all.", "However, the problem lies in the fact that he's willing to give up a prime piece of real estate for a mere 120 million zeni.", "An identical plot in the capital of the Midgar Kingdom would easily run ten times that, and even in other similar provincial areas, it would probably go for five times more.", "However, there's a perfectly good reason this bargain is still on the market.", "The issue isn't the plot but the town as a whole.", "Madlid is a minor region of the Velgalta Empire, and to be blunt, its population is in decline.", "There are all sorts of reasons for that, but of them, two are most prominent.", "The first is its location.", "It's horrible.", "It takes over a month for a carriage fully loaded with goods to get from Madlid to the next closest town.", "Considering the time and cost involved, it quickly becomes clear why the town is ill-suited for commerce.", "The second is that the imperial capital of Velgalta is experiencing a new wave of prosperity, drawing all of Madlid's youth and merchants to uproot their lives and move there.", "Well, much of this is due to Mitsugoshi opening up a branch in the capital and the subsequent redevelopment, but both she and Rude are avoiding making any allusions to that fact.", "Anyhow, for these reasons, Madlid as a town is rather short on merit.", "Furthermore, firms are the only ones who would want to buy such a ridiculously large parcel of land off the town's main drag.", "Similar lots could be found all over town.", "In other words, opening a new store is financial suicide unless you can come up with a way to solve those fundamental problems.", "\"We would love it if you opened a store here!\" Rude is visibly desperate.", "He had, of course, heard rumors about the effect Mitsugoshi had on the imperial capital.", "If the retailer opened a store in Madlid, it would stop the city's population from dwindling further, and the graph of their failing financial situation would suddenly soar\u2014or at least, that is what Rude has deluded himself into thinking.", "That's not how it'd actually go down.", "Until the underlying problems were solved, a new branch would be nothing more than a drop in the bucket.", "\"Should I...?\"", "\"I\u2014I hear you loud and clear. I'm willing to drop it to a flat one hundred million zeni!\"", "Seeing Gamma's indecision, he slashes the price even further.", "However, Gamma has no intention of giving him an answer for a reduction of a mere twenty million zeni.", "She's already spent over a week indecisively touring the town's real estate, and she hasn't given him a single definitive answer yet.", "She's already seen everything she needs to.", "Now she's just waiting.", "\"\u2014Ms. Luna.\"", "And there it is.", "An attractive young woman dressed in a Mitsugoshi uniform comes up behind Gamma and whispers in her ear.", "\"We've finished the survey.\"", "\"And?\"", "\"It will work.\"", "\"Is it here?\"", "\"Petroleum? We're certain of it.\"", "\"\u2014I see.\" That day, Gamma shows Rude a smile for the first time.", "\"I'll take it.\"", "\"Oh my, you will?! In that case\u2014\"", "\"In fact, I'll take every plot along this road.\"", "\"\u2014Excuse me?\"", "\"I'm saying if you're willing to meet our conditions, we're prepared to redevelop Madlid into the best town in the empire.\"", "\"\u2014What?\"", "\"Would you be willing to expand the Nyle River's tributaries and build a canal?\"", "\"Um... yes?\"", "\"Excellent, then let's get started.\" Gamma begins issuing orders to her subordinate.", "\"Buy up all the necessary land downstream of the Nyle. We're about to have a real estate bubble on our hands...\"", "With that, they take off briskly.", "Eventually, only the dumbfounded Rude remains.", "He gapes at his surroundings, then mutters, \"Oh, right... I have to report to Father...\"\u2014The weak are worthless.", "Born and raised a therianthrope, she had this lesson drilled into her by her family.", "Her clan was large, even for canine therianthropes, and her father\u2014the chief\u2014had over a hundred children to his name.", "She had been born to one of his lower-ranked mistresses, so no one expected much from her.", "At mealtimes, her portions were meager, and she was always skinny and famished.", "When she turned three, they eventually stopped feeding her altogether.", "She was little more than skin and bones by the first time she staggered into the forest to hunt for herself.", "There, she slew a boar twice her size by bashing in its skull, then she drank its lifeblood and gorged herself on its organs.", "She realized then that not only could she sustain herself with her own two hands but doing so was surprisingly easy.", "Now she knew that was what it meant to live.", "Food handed to you was worthless.", "It only held value if you hunted it yourself.", "After she returned to her village, drenched in her prey's blood, word began to spread.", "Even among therianthropes, a three-year-old girl killing a boar was hardly normal.", "Yet that was precisely what she had done.", "Her senses and physical strength were superlative, and she could even use magic despite never having had any formal training.", "If a child her age came picking a fight, she'd take them down in a single blow, and whenever she got hungry, she'd go off and hunt her own food.", "Her malnourished frame quickly filled out, and before long, she'd grown into a young girl with fair looks and supple muscles.", "By the time she turned twelve, the only person in her clan who could best her was the chief.", "It would only have taken a few more years\u2014or maybe even just one\u2014and she might well have surpassed him, too.", "However, that never happened.", "Instead, black bruises spread all across her body.", "She was... one of the possessed... ...and the possessed had to be driven from the pack.", "That was an ironclad rule.", "After fleeing with her disease-ridden body, she began hunting throughout the forest and prowling aimlessly.", "She loved to hunt.", "Hunting had given her life.", "Every instinct in her body told her that hunting was what she had been born to do.", "Consequently, being driven from her pack didn't bother her much.", "As long as she could keep on living and hunting, she was fine with that.", "However, the illness ate away at her.", "Her body rotted, and she gradually grew so weak that it became impossible for her to hunt.", "She collapsed by a woodland stream and looked up at the heavens.", "\"I can... still... hunt...\" She could smell the beasts, sense their footsteps, hear their cries.", "The forest was massive, but she could make out traces of distant prey like it was right in front of her.", "If her body would only move the way she wanted it to, she could hunt them all down with ease.", "\"My prey... calling out... to me...\" But even though she extended her blackened, rotting hand, all she caught was air.", "\"But I... can still... hunt...\" Eventually, her vision grew dim.", "Knowing she didn't have long to live, she smiled when she heard a wolf howling nearby.", "The wolf had come to hunt her.", "This was her chance.", "She couldn't move anymore, but she could lure her prey to her.", "The moment the wolf tried to bite her, she would tear out its throat with her teeth.", "She stifled her breathing and waited for the wolf to come.", "But it never did.", "\"Wh... y...?\" The wolf's presence grew distant, and a blond elf appeared in its place.", "\"It's progressed pretty far... You must have an incredible force of will to be able to stay conscious in that state,\" the elf observed.", "She offered her hand but was frantically forced to retract it a moment later.", "Chomp.", "The therianthrope girl's fangs met empty air.", "She turned her inflamed face toward the elf, glared at her, and smiled.", "\"Looks like... I found... a big one...\"With the last of her strength, she willed herself to her feet.", "Animals weren't the only prey she knew.", "Strife between therianthrope tribes was common, and hunting foes was something else she lived for.", "The moment she laid eyes on the elf, she knew: The girl standing before her was the kind of big game that really got her blood boiling.", "\"What...?! How can you still stand...?!\"", "The elf girl started to back away.", "\"Grah!!\" That's when the therianthrope girl pounced at her.", "No ailing person should have been able to move so fast.", "\"...?!\" The elf dodged her fangs and retreated a good distance, but the therianthrope forced her unstable body to pursue.", "\"Stop that! I'm trying to help\u2014! Seems like talking isn't getting me anywhere. I might end up hurting you, so it looks like I'll need to ask for his help...,\"", "she muttered, then turned around and left.", "\"W-wait... wai... t...\" The therianthrope chased her for a few steps, then collapsed headfirst.", "She no longer had the strength to go after her.", "The fight had drained the last of her energy... just when she thought she'd have one last chance to hunt a big one... Despondent, she closed her eyes.", "For a little while, all she heard was the quiet ambiance of the forest until nearby footsteps caught her ears.", "She opened her eyes in surprise.", "Standing beside her was a dark-haired boy dressed all in black.", "She couldn't feel his presence at all.", "\"My name is Shadow...\"When she looked up into his eyes, her whole body trembled.", "\u2014She wouldn't win.", "She wouldn't be able to beat him, no matter how hard she tried.", "What told her that wasn't logic but instinct, and she comprehended it instantly.", "The only person stronger than her was her father, the chief of her clan, and even he didn't scare her.", "But this boy was different.", "His strength as a living creature was fundamentally beyond hers.", "When she saw his toned body, she could tell it was built for combat.", "When she sensed his sharpened magical skills, she could tell they were potent enough to blow the entire area to kingdom come.", "When she looked at his steely eyes, she knew he could tell exactly how strong she was.", "The gulf between their strengths was so vast, though, she couldn't even muster the will to fight.", "She feared his strength and, as a matter of course, obeyed what her instincts told her to do in the face of a mightier being.", "In other words\u2014she submitted.", "\"Purr...\" She flopped over, exposing her belly and wagging her tail.", "\"She seems perfectly docile...\"", "\"When I tried to get close to her, she was rabid.\" The boy and the elf shared a puzzled exchange.", "\"Eh, whatever. I'm gonna heal her now.\"", "\"Allow me to help.\" With that, the boy surrounded the therianthrope with his dark-blue magic.", "The elf awkwardly tried to assist.", "\"Purr...\" As they did, the therianthrope just kept wagging her tail with her belly exposed.", "A little while later, after the first round of treatment was finished, they were joined by two more elves, one with silver hair and one with blue.", "The girl wasn't fully healed but had recovered enough to be able to walk around again.", "\"I'm Alpha. I'm sorry for springing this on you, but I'd like to explain a few things about our organization and your body\u2014\"", "As the elf named Alpha began droning on about some incomprehensible nonsense, the therianthrope girl examined her body.", "Thanks to the Shadow boy's magic, she'd recovered remarkably.", "She would never forget the strength and warmth of his magic.", "Now, she could hunt again.", "\"\u2014and because of that, we fight against the Cult.\" She didn't fully follow but understood this was to be her new pack.", "She had no objections to that.", "After all, its chief, Shadow, was the strongest being she knew.", "To serve the strong was her pride.", "As long as it had Shadow, this pack would become the strongest in the world.", "On to world domination!!", "That thought glistened in her mind.", "\"Delta. From now on, that will be your name.\"", "\"Del-tuh... My new name from Boss man...\" She liked it far better than her old name.", "After all, it was something Boss man had given her.", "Boss man was amazing!", "He was the strongest.", "As far as she was concerned, he was the best in all the world!", "That was why there was something she needed to do.", "She glanced at the three elves standing around her.", "The blue one wasn't even in contention.", "The silver one was so-so.", "The blond one, though, was strong.", "Shadow was the pack's undisputed top dog, which meant Alpha was surely his number two.", "In other words, Delta needed to\u2014 \"Hey, Blondie!\" Glaring, Delta pointed at Alpha.", "\"From now on, I'm number two!\" Fighting to determine pack hierarchy was extremely important to therianthropes.", "\"Submit and show me your belly!\"", "\"\u2014Excuse me?\" Hearing that, Alpha's magic started to flare.", "Epsilon's mornings start early.", "She's up before the sun rises and stands before a large mirror clad in her negligee.", "She only sleeps for three hours.", "However, her master taught her a technique that removes fatigue with magic while she sleeps, so three hours is plenty for her.", "Ample beauty sleep.", "By only sleeping three hours a day, she's able to spend the other twenty-one productively.", "She takes care of her training and missions, of course, but her number one priority is self-improvement.", "That's why she wakes up early to stand in front of the mirror.", "The first thing she needs to inspect are her slime-padded breasts.", "Standing before the mirror, she turns the massive slime blobs over in her hands.", "Are they bodacious and shapely?", "Are they firm yet soft to the touch?", "Most importantly, do they look natural?", "She absolutely can't let anyone find out about her padded little secret.", "They have to be realer than real, more natural than natural.", "That's the standard to which she holds her chest as she inspects the slime.", "After almost an hour of rotating and massaging, she finishes her inspection and fine- tuning.", "Next, she makes sure her figure is well proportioned.", "Does her waist corseted in slime cast an appropriate silhouette?", "Are her thickened hips beautiful?", "What about the slim plumpness of her butt, the form of her calves... the length of her legs...?", "By the time she's finished all of her checks, the morning sun has long since risen.", "She then sheds her negligee, dons a casual dress atop her slime, applies her makeup, and does her hair.", "At this point, she's finally fit to appear in front of others.", "As the finishing touch, she stands in front of the mirror one last time, twirls, and readies her Epsilon-style Hidden Technique: Master Shadow Come-Hither Pose.", "\"Beautiful as ever,\" she sighs with a smile.", "Her voice is rich with confidence.", "All of this is for her master's sake.", "This is the extent to which she's pushed her daily routine.", "However, she holds the Master Shadow Come-Hither Pose longer than usual today.", "As she maintains the position, which serves to emphasize her slime breasts, an unpleasant smile spreads across her face.", "\"Heh-heh... Heh-heh-heh... Ah-ha-ha-ha-ha!\" She's smiling because she's reminiscing.", "Specifically, she's thinking about something that happened the other day in Lindwurm, back when she was reunited with her master after a long absence.", "She'd elegantly dispatched one of the Cult's assassins as she swooped down before Lord Shadow.", "Whenever she was reunited with her master, her heart always beat even harder than usual.", "This time, though, he'd been staring right at her... ...and his fierce gaze had locked on her breasts!", "Epsilon's beauty, glamour, and effort had finally snatched her master's attention.", "Her cheeks had reddened, but she'd pretended not to notice her master's fervent gaze.", "As soon as he left, though, her feelings erupted, and she let out a loud victory cry.", "\"I won! I beat Mother Nature!\"", "Immediately after, she snapped back to her senses.", "This isn't Lindwurm, the Sacred Land.", "It's her bedroom.", "However, the memory is etched in her heart: that fleeting moment with her master's gaze burning into her chest\u2014 \"Heh-heh! Heh-heh-heh...\"", "Finally, she releases the Master Shadow Come-Hither Pose.", "However, the wicked smile is still plastered on her lips.", "That day, that moment, was unmistakably the pinnacle of her life.", "Simply thinking back to it, she can return to the peak of her existence.", "She feels like a phoenix, coming back again and again... Thus, Epsilon's day once again begins at its zenith.", "After leaving her bedroom, Epsilon walks down the hallway and runs into Beta for the first time in a while.", "They trade superficially amiable greetings.", "\"Good morning, Beta.\"", "\"Good morning, Epsilon.\" The exchange is casual.", "However, neither looks at her comrade-in-arms' face for so much as an instant.", "Their gazes are focused elsewhere\u2014each other's breasts.", "Each of their chests sticks out like a pair of rockets, and they stare at their opponent's assets as if gazing upon an archnemesis.", "Then, they both thrust out their chests.", "Each sucks in as much air as they possibly can, projecting their breasts forward to their absolute limit.", "This is a battle neither woman is willing to lose.", "The protruding boobs and slime smash into each other, then wobble.", "\"Heh-heh...\"", "\"Rrr...\" Once again, the victor is Epsilon.", "After all, she's shaped her slime specifically to beat Beta.", "Originally, their battle had been one-sided hostility on Epsilon's part.", "However, as Epsilon used her slime to push up and pad, a sense of rivalry took root in Beta, and today, Epsilon isn't the only one with something black and ugly stuffed in her chest.", "Still, they are teammates.", "They've suffered through difficult training and fought side by side, and the two of them definitely share a sense of comradery.", "Each trusts and considers the other important.", "Most of the time, they're able to get along peacefully.", "Key word: most of the time.", "Normally, after exchanging greetings, they simply pass by and continue on their ways.", "Having spent countless hours together since childhood, they feel little need to share prolonged pleasantries.", "However, today is different.", "Epsilon's mountainous pride refuses to simply let her rival walk off in silence.", "\"You know, something surprising happened to me recently...\"", "\"What could that be?\" Epsilon breaks the ice, and Beta freezes.", "The boobs and slime continue their squishy collision as the girls talk.", "\"It happened the other day, during the mission in the Sacred Land... I felt our lord's gaze burning a hole in me...\"", "\"What?!\"", "\"I felt his hot gaze... focused... right... here...\" Epsilon's cheeks redden, and she fidgets restlessly as she speaks.", "\"Wh-wh-wh-wh-wh-wh\u2014? Th-that can't be! Y-you must be mistaken!\"", "\"Oh, no, it was not a mistake. You should know, Beta. We're very aware when people look at us.\"", "\"Rrr... Y-you're right...\" The two of them are both curvy from head to toe, and they find themselves on the receiving end of the male gaze all the time.", "They've both naturally grown conscious of when it's happening.", "\"That was what I found so surprising. I never thought he would fix so fervent a stare on the likes of me...\"", "\"Gh... Our lord...? There's no way...\"", "Mortified, Beta glares at Epsilon.", "\"I mean, is it even proper for our lord to fall for someone as lowly as me...?\" Epsilon sniggers as she puts emphasis on that last bit.", "\"After all, think about it. Your figure is so much nicer than mine, Beta, and you're so much prettier!\"", "\"Wh\u2014?!\" Epsilon is lording over Beta.", "Her triumphant face makes it abundantly clear she doesn't consider herself lowly in the slightest.", "It's the hollow modesty of the victor.", "Her words are the proclamation of a woman whose figure is better, whose looks are stronger, and who's earned the affection of their lord.", "Each and every one of her compliments is backhanded.", "Epsilon speaks from a place of superiority.", "Spurred by her pride, she always does.", "\"Your boobs are so big...\"", "\"Urk\u2014\"", "\"And your waist is so small...\"", "\"Urrrk\u2014\"", "\"And your legs are so long...\"", "\"Urrrrrk\u2014\"", "\"Why, you're so pretty!\"", "\"Urrrrrrrk\u2014\" To deliver the clincher to her wounded foe, Epsilon unveils Hidden Technique: Master Shadow Come-Hither Pose and flaunts its overwhelming power directly before Beta's eyes.", "Tears immediately begin welling up.", "\"Surely you must have felt his hot gaze on you before, right?\"", "\"I\u2014I\u2014I\u2014I\u2014I\u2014I\u2014I\u2014I\u2014I...\"", "\"Don't tell me you haven't.\"", "\"I\u2014I\u2014I\u2014I\u2014I\u2014I\u2014I\u2014I\u2014I...\"", "\"That can't possibly be true...\"", "\"I\u2014I\u2014I\u2014I\u2014I\u2014I\u2014I... I, I... Boo-hoo!\" Beta weeps as she runs off.", "\"Heh-heh-heh... All the natural ones should just be culled from the world... Now I'll be on the receiving end of his affection... Only me...\" Epsilon smiles as she watches Beta flee.", "Some say her beloved master once muttered in an empty room, \"Epsilon's head is as swollen as her slime pads.\" Just as he said, her pride swells beyond the heavens.", "If her ego wasn't so big, she would be incredibly docile and caring.", "If she wasn't so proud, that is..."], "c5": ["Rose can hear rain falling.", "The sound of the droplets striking outside pulls her attention away.", "She steadies her breathing, then lowers her practice rapier.", "After using her hand to wipe away the sweat trickling down her face, she fixes her hair.", "Only the rain breaks the silence in the dim training facility.", "For a little while, Rose merely closes her eyes and focuses on its noise.", "The damp air causes a lump to form in her throat, but she swallows it down.", "She's always found the sound of water to be beautiful.", "Rose was born in the Oriana Kingdom, a land of art and culture.", "She'd been exposed to countless art forms in her childhood, and her aesthetic sensibilities were superb.", "Over the course of their lives, every member of Oriana royalty chose a single art form in which to excel.", "It could be painting, or music, or acting.", "Each was free to choose as they pleased.", "Although the young Rose expressed great interest in the arts, she was never able to settle on one.", "In her eyes, all forms of art were beautiful and unique.", "Painting, music, acting, fashion design, sculpture, and the rest were all so wonderful\u2014 it was impossible for her to pick just one.", "Consequently, she dabbled in them all and received high praise for her work in each.", "Every artist in the Oriana Kingdom waited with bated breath to see which artistic path Rose would choose to continue down.", "But she chose the art of the blade.", "One day, out of the blue, she cast aside all the mediums and began training with the sword.", "\"Why the sword?\" they all asked her.", "She said little on the subject.", "Only that she had seen beauty in swordsmanship.", "However, the people of the Oriana Kingdom looked down on it as the purview of brutes and savages.", "Few were willing to acknowledge it as a legitimate art form.", "Ignoring her family's objections, Rose enrolled in the Midgar Academy for Dark Knights.", "A certain beautiful sword work is etched deep in her heart.", "She's never told anyone about it, but it's a memory she holds dear.", "The sole reason she's embarked on this path is out of quiet admiration for a single swordsman.", "She knows she'll never forget the beauty of the swordplay she saw that day.", "Her life's work is to someday emulate that beauty.", "Nobody back in her own country will acknowledge it, but she doesn't care.", "She isn't pursuing this out of a desire for praise.", "She's determined to walk this path, even if no one else deems it worthy.", "She's been fine with that.", "A few days ago, though, she received a letter.", "\"Father will be attending the Bushin Festival...,\" she mutters, her lips the color of cherry blossoms.", "It's a rarity for the king, a man who holds swordplay in contempt, to come watch the event.", "Rose is certain he's coming to drag her back home.", "There is a lot of speculation, but one rumor in particular that catches Rose's attention.", "Word is that a man has been unofficially chosen as her fiance .", "As soon as she heard that, she immediately sent a letter off to her family asking if this was true.", "However, she hasn't gotten a response yet.", "But she's already decided on another man.", "That man, who doesn't fear death and whose soul is fiery and pure, is the one she's chosen as her life partner.", "That's why she needs to force her father to see her abilities at the Bushin Festival... with her sword.", "Then, she prays, he just might... Rose slaps her cheeks.", "\"Focus,\" she mutters, flinging off her sweat-soaked tunic.", "Her skin, glistening with sweat, is laid bare.", "The only thing hiding her sizable breasts is her sports bra from Mitsugoshi.", "It's a little immodest of her, but she knows nobody else is going to come, so she chooses not to worry about it.", "She readies her practice rapier, then summons an image to her mind.", "She envisions her finest performance... back when the academy was under attack.", "The Bushin Festival is going to start soon.", "She has to re-create that feeling before it does.", "Rose's rapier flashes through the air, and beads of sweat go flying.", "Her elegant honey hair comes unraveled.", "She brushes aside the strands that have fallen in her face, then continues swinging.", "The whole time, she can hear the rain falling outside.", "The feeling refuses to return.", "The Bushin Festival season is upon us.", "I walk down the bustling roads of the capital.", "The makeup of the crowd is different than usual.", "The people passing me on the street all have different races, nationalities, and jobs, but they share the common goal of wanting to enjoy the event.", "They've never talked to one another before and probably never will again, but they nonetheless share a strange sense of unity.", "That's just how festivals work.", "I don't hate this kind of vibe.", "After all, it's necessary for one thing: When everyone is collectively focused on something, it makes for the greatest stage imaginable.", "The Bushin Festival.", "\"There's a big wave coming through, and I'll be damned if I don't ride it.\" I'm gonna check off the top item on my bucket list.", "It's that trope where a mysterious badass joins a big tournament, and everyone goes from Hold up, that guy's gonna get himself killed!", "to Wait, he's superstrong!", "to Just who is that guy?!", "To do that, I'm gonna need everyone's cooperation.", "After pushing my way through the crowd, I eventually end up at the royal capital branch of Mitsugoshi.", "Ignoring the line of people patiently waiting their turn, I stroll right in.", "I'm friends with the owner, so it's fine, right?", "The store is hectic since it's the busy season and all, but it isn't long before an attractive saleswoman spots me and drags me off.", "\"I know it totally sounds like I'm lying, but I'm friends with the owner. I swear.\"", "\"I'm aware.\" I was a little concerned whether she really knew me or not, but it turns out to be the former.", "She takes me to that room from last time with the awesome chair.", "I take my seat atop it.", "Damn!", "Sitting on this thing really makes you feel like a king.", "They even bring me a glass of iced apple juice.", "Not from concentrate.", "Good catch on their part, knowing I prefer apple juice to orange.", "It's nice and crisp, so it really hits the spot on these hot summer days.", "The summer wind comes through the room.", "Ting, ting, something rings.", "\"Wind chimes, eh...?\" I look at the window and see them hanging against a backdrop of blue skies and big summer clouds.", "\"Please wait here a moment.\" I nod.", "The shop lady goes to find Gamma, and another one comes in to fan me.", "Her summer dress leaves a lot of her skin exposed.", "\"Y'know, I'm feeling kinda peckish.\"", "\"I'll have something prepared immediately.\" As I gaze at the clouds, I decide I'll definitely come mooch off this place whenever I'm short on food.", "Hearing that her beloved master has arrived, Gamma immediately leaves the rest of her work to her subordinates and hurries over to the Hall of Shadows.", "She wears a thin, black knee-length dress, and she's paired it with a summery white set of high heels.", "After applying a fragrant perfume, she steps into the hall.", "\"I'm here, my lord.\" Her master sits atop the Shadow throne, gazing at the sky with his arms crossed.", "Is that piercing gaze of his directed at the clouds or something deeper?", "Gamma can't tell.", "\"I have a request.\" Her master turns his sight on her as he speaks.", "When she meets his ever-dignified gaze, Gamma's heart flutters.", "It's a little inappropriate of her to hope in this way, but she wonders if he notices she changed her hairstyle.", "\"Ask, and I will make it happen.\"", "\"I want to disguise myself and enter the Bushin Festival,\" her master says.", "The instant the words leave his mouth, Gamma's considerable intellect is already at work.", "She thinks fervently, trying to suss out not only her master's intent but also his true goal, the one that lies beyond it.", "However... she comes up blank.", "Why is it necessary for him to take this action?", "No matter how hard she tries, she can't unravel that mystery.", "She's forced to shamefully ask.", "\"Why?\" Her master averts his eyes from Gamma and looks back up at the sky.", "And when his gaze leaves her, Gamma feels almost as though his interest has been stolen.", "Her eyes dart around.", "\"Would you mind... not asking me that question?\" he requests, a distant look in his eyes.", "Gamma casts her gaze down and bites her lip.", "When she heard he'd fought Aurora the Calamity Witch, a thought had crossed Gamma's mind.", "If she'd been there, would she really have been able to figure out his plan?", "She had no faith she would have succeeded.", "None of the members of the Shadow Garden who were on-site had been able to fathom it.", "In the end, his choice turned out to be optimal, but no one had been able to get on the same page as him.", "If Gamma had been there, she'd have had no choice but to determine her master's intentions.", "Gamma is the brains of the Shadow Garden.", "That's her raison d'e tre.", "If she can't do that, then she is worthless to the organization And even though she knows that, she's messed up again.", "\"Forgive me... It must be something you can't tell anyone about.\" Gamma hasn't been able to deduce so much as a shred of her master's motives or emotions.", "She's an utter failure.", "It would be far better if she just stopped trying to be clever and did as she was told.", "\"I won't ask any more, but it will be done.\" Gamma kneels, hiding her face to conceal the tears of chagrin welling up in the corners of her eyes.", "After wiping them away, she issues swift instructions to her subordinates.", "They go and fetch something.", "\"What is that?\" her master asks as he eyes what they've brought.", "\"Slime\u2014modified based on your Shadow Wisdom. By running magic through it, it takes on the exact same feeling as skin.\"", "\"Oh...?\" Gamma offers the flesh-colored slime to her master.", "\"So I just put it on my face?\"", "\"Correct.\" Her master stretches the slime over his face.", "\"It looks like I'm wearing clay,\" he observes as he looks in a mirror.", "\"This is where Nu comes in.\"", "\"Pardon me.\" Nu steps in front of their master and pulls out a small chisel-like knife.", "\"I'll carve the slime.\"", "\"Ah, I see.\"", "\"What kind of face would you like?\"", "\"Good question... One that looks kinda weak.\"", "\"Weak, huh...?\" Nu thinks for a minute.", "\"What about this man?\" Gamma opens a folder and shows Nu a young man's census data.", "\"Mundane Mann. A member of the aristocracy in the Altena Empire. Twenty-two years old. He's lazy, weak by dark knight standards, and was disowned five years ago. Afterward, he worked in a variety of places as a mercenary and guard. His final job was protecting a carriage full of the possessed.\"", "The man had been lazy, but that was hardly a sin.", "He'd been guarding the carriage, unaware of what lay within.", "That was when his luck ran out.", "\"His bone structure is similar, so it should work out. We also already have his identification papers.\"", "\"Good. That'll be safer than forging them. Is this acceptable, my lord?\"", "\"Yeah, let's go with this Mundane guy.\"", "\"Then without further ado.\" Nu takes her knife and begins shaving away at the slime.", "She's excellent with makeup.", "In fact, when it comes to cosmetics, she's their go-to girl.", "She finishes carving in no time, and a plain man's face is etched atop their master's.", "He lets out an impressed grunt as he looks in the mirror.", "\"Ooh, this is nice...\"", "\"Will this do?\"", "\"Yeah, this is great. I look so weak.\"", "The face lacks any notable traits but gives off a plain impression.", "It sports sickly bags under its eyes, a pathetic five-o'clock shadow, a sagging mouth, and dull skin.", "The man looks thoroughly unreliable.", "It warms Gamma's heart seeing her master so pleased.", "\"The face will harden once you run magic through it, so afterward, you can take it off and put it on as you please.\"", "\"Sweet.\"", "\"As far as its weaknesses, it's less elastic than the slime bodysuits, and it offers almost no physical protection.\"", "\"Got it, so it's for cosmetic use only. It wouldn't make sense to make a full bodysuit out of this stuff.\"", "\"Correct. Also...\"", "After Nu finishes her brief explanation, their master stands.", "\"I'd probably look the part more if I hunched my back.\" He tries walking around with his back twisted a little.", "\"Bravo,\" commends Gamma, smiling as she claps.", "It's possible to tell how physically adept someone is just by assessing their posture and gait.", "Strength largely comes from the feet.", "People who are good at manipulating their bodies carry themselves in a way to transfer as much strength throughout themselves as possible.", "Of course, that isn't the end-all be-all of gauging someone, but it's a useful point of reference.", "Gamma's master once taught her that, and she understands it perfectly.", "However, that perfection doesn't extend to her ability to put it into practice.", "Her posture is elegant but nothing more.", "She's a textbook example of how this rule doesn't apply to everyone.", "\"I should drop my shoulders, too... Yeah. And I want to be careful not to misalign my pelvis. It'd be a pain if it got stuck that way.\"", "Gamma is filled with pleasant feelings as she watches her master practice walking in a way to give the impression of weakness.", "She gives instructions to her subordinates.", "\"Prepare clothes and a cheap sword.\"", "\"Ah, good thinking.\" Hearing those three words, Gamma's heart is filled to the brim.", "\"Yeah, those look good. I'm gonna go register for the Bushin Festival.\"", "Her master must have been messing with his vocal cords, as his voice comes out low and husky.", "\"Here are his papers. Take care out there.\"", "Gamma lowers her head and watches her master recede.", "\"Thanks. Oh yeah, one other thing.\"", "Her master stops in front of the door.", "\"That hairstyle looks nice on you.\" Gamma's brain freezes.", "The door clicks shut.", "\"Plergh!\" And Gamma's heel snaps.", "\"Gamma?!\" Her face plants straight into the floor, but despite the blood gushing from her nose, her expression is one of absolute bliss.", "Registration for the Bushin Festival is handled at the arena's reception desk.", "I get in line, glancing at the other dark knights around me.", "The guy in front of me, being tall and brawny, comes off strong at first glance, but his center of balance is garbage.", "Hmm.", "It's a close call, but I think I just barely look weaker than him.", "More warriors line up behind me.", "One guy has a solid center of mass, but he's kinda tubby.", "Hell, that's probably why his balance is so good.", "That's what you get when you drink too much, man.", "But I think I'm good.", "He's got an intimidating expression, so I still look weaker.", "I continue looking around and judging people.", "It's like I'm holding my own little tournament of who looks weakest.", "After all, I wanna go from Hold up, that guy's gonna get himself killed to Just who is that guy?!", "so I have to start out looking like the puniest dude around.", "That guy's a nobody; that dude over there's no big deal; the guy across from him is a runt; this chump's less than nobody... Damn, there's just too many shitters.", "But I'll be fine.", "Right now, I'm Mundane Mann.", "After conducting my fair and impartial assessment, I determine I'm still probably the least impressive of the lot.", "As I nod in satisfaction, someone calls out to me.", "\"Hey, kid. You'd best give up now.\"", "\"Hmm?\"", "\"If you don't, you'll die.\" I turn and find a female dark knight standing behind me.", "My heart pounds.", "Could it be that classic clich\u00e9 ?", "\"Who are you?\"", "\"I'm Annerose. If you're planning on entering without thinking it through, you'd be better off leaving now.\"", "Annerose casts a stern glare at me.", "When she does, I pump my fist internally.", "I knew it... This is the scene that always happens when a weakling tries to enter a big tournament.", "\"You're an amateur. I can tell just by looking at you.\"", "Annerose walks toward me, then stops an arm's length away.", "Her pale-blue eyes give off a stubborn vibe, and they match the color of her shoulder- length hair.", "\"Your sword is cheap, and your body is frail.\" Annerose lightly taps my weapon and chest with her index finger.", "\"The tournament is fought with dulled blades, but if you take it lightly, you'll die.\" She glares at me again.", "I return her gaze and think for a moment.", "What would be the best reaction...?", "\"You shouldn't go judging people by their looks,\" I end up saying, then turn away.", "The premise is that I look weak, but I'm secretly strong.", "It wouldn't make sense for me to get all timid here.", "It serves me best if she thinks I'm too cocky for my own good.", "\"Hey, there's no need to get snippy. I'm just trying to look out for you, and...\"", "\"Save your concern.\" I make my tone as confident as possible.", "\"You really need to...\" Suddenly, another man butts into our conversation.", "\"Yo, kid. You should listen to what the lady's telling ya.\"", "If I had to describe his appearance, I'd say he looks like a rude pro wrestler.", "On the other hand, the ease with which he wears the large greatsword on his back and the battles' worth of scars etched across his face make him seem more like a grizzled warrior.", "Honestly, he's probably the strongest person nearby besides me and Annerose.", "\"The name's Quinton. I've entered a couple of these Bushin Festivals, but every year, there're some weak-ass punks who ruin the mood. I'm begging ya here: Just run on home and suck on your momma's titties.\"", "When the people around us hear the bald-faced scorn that Quinton is laying on me, the crowd whoops with crude laughter and hollers of approval.", "My only response is to cast a sidelong glance at Quinton and let the corner of my mouth curl into a grin.", "\"I'm stronger than you at least.\" Quinton's face goes red.", "\"Ah-ha-ha-ha! Hey, Quinton! The kid's making fun of you!\"", "\"Quinton, you gonna let that brat talk to you like that?!\"Goaded by the hecklers, Quinton frowns and hoists me up by the collar.", "\"Yo, watch who you're mouthing off to. What was that about being stronger than me?\"", "I offer no answer.", "I merely grin.", "\"Looks like someone... needs to teach you a lesson!!\" As the words leave his mouth, Quinton hurls me back.", "I crash into someone, collapsing onto the ground.", "\"Yeah, get him!!\"", "\"Ah-ha-ha-ha! Go easy on the kid!!\"", "By now, a ring has gathered around us.", "That's ne'er-do-wells for you: never ones to miss a fight.", "\"If you're gonna apologize, now's the time to do it,\" threatens Quinton as he cracks his neck.", "I shake my head.", "\"Man, you really are third-rate.\"", "\"Your ass is grass!\" Quinton brandishes his fist and charges at me.", "His form is complete garbage.", "To put it bluntly, the people of this world suck when it comes to hand-to-hand combat.", "Or rather, they're stronger when they use weapons.", "Unless one side either feels utterly assured of victory or finds their backs against a wall leaving no other alternatives, fistfights just don't happen that often.", "If someone held a tournament where no one could use weapons, I would end up winning.", "I'm pretty confident of that fact.", "Countless strategies for what to do next pass through my mind.", "Countering him with a right straight punch or a left hook would be simple but effective.", "Stopping him with a jab or a front kick, then hanging back, would be safe.", "Going on the defensive right away would be even safer.", "There are other options, too\u2014 using my knees or elbows is a strong choice, and tackling before hitting him while he is down could also be good.", "If he were a powerful foe I was planning on fighting seriously, I'd probably go in with a jab.", "However, I wouldn't clench my fist; instead, I'd hold my hand flat, extend my reach, and go straight for his eyes.", "Against this guy, though, there's no need to go that far.", "Plus... I don't feel like fighting yet.", "\"Take that!!\" Quinton's fist sinks into my cheek.", "It sends me flying, crashing into the wall of spectators.", "\"I ain't done with you yet!!\" Quinton's fists bear down on me.", "Left, right, left, right, right, right.", "I don't lay a finger on him, taking the blows and collapsing when I feel that the timing is just right.", "\"Hey, that guy's weak! He's weak as shit!\"", "\"Ah-ha-ha-ha! He got his ass beat!\"", "I bask happily in the jeers of the peanut gallery.", "\"What? Cat got your tongue? Spineless punk.\"", "Quinton looks down at me and grins.", "I look up at him and return the smile.", "\"My fists are too valuable to waste on you.\"", "\"Looks like someone hasn't learned his manners yet!\"", "\"That's quite enough!!\" Annerose stops Quinton's brandished fist with her comment.", "\"You're taking this too far. If you want to keep having a go, you'll have to do it with me.\"", "She looks up at him and glares.", "\"Hey, yo, that chick just said she'd \u2018have a go' with you!!\"", "\"\u2018Have a go' with me, too, lady!!\" Contrary to everyone around him, though, Quinton's expression is grave.", "He clicks his tongue and turns around.", "\"What's wrong, Quinton? Gotta take a piss or something?\"", "\"What? It's over already? Boo!\"", "Quinton leaves, and the crowd dissipates.", "\"I'm so sorry. I didn't think it would get that bad.\"", "Annerose offers me her hand.", "I ignore it and stand up on my own.", "\"If you were gonna stop him, you could have done it from the start. Am I wrong?\"", "When she hears my question, Annerose flinches.", "\"I figured it would be better for you to take some licks here than suffer something irreparable at the Bushin Festival proper, but he took it too far. How badly are you injured?\"", "Annerose reaches out to touch me, but I hold up a hand and stop her.", "\"I'm fine.\"", "\"No, you... What?\" It looks like she noticed.", "Despite the fact that I got beaten up six ways to Sunday, I haven't sustained any notable damage.", "My only wound is a small cut on my mouth.", "I use my thumb to wipe away the blood, then turn my back on her.", "\"Been a while... since the last time I tasted my own blood...,\" I murmur loud enough for Annerose to hear.", "\"...! Wait! What's your name?!\"", "I can feel Annerose's gaze burning into my back.", "\"...Mundane.\" With that, I vanish into the crowd... ...and pump my fist.", "Hell yeah!", "Nailed it.", "\"Everyone looks down on him, but a select few notice there's something strange about him...!\" I love that trope.", "If you ask me, people who show off their true strength before a tournament are third- rate.", "After all, how are you supposed to enjoy yourself?", "What's the point if you're just gonna reveal your true power in the most boring way and place imaginable?", "It's better if everyone thinks you're a chump until the actual battles start.", "Then, once you actually get into the rounds, you can make them think, Wait, he's kind of strong!", "And then, at the climax, that transitions into No... He's got a lot of power!", "Now that's some first-rate stuff.", "Controlling the audience's expectations right up until that decisive moment is my mission during this Bushin Festival.", "For a little while, I lurk behind cover while reflecting on what I just pulled off.", "Then, once I see that Annerose and the others are gone, I sneak back into line and finish registering.", "The Bushin Festival prelims start next week.", "I go back to looking like Cid, spend some time gazing down from the top of the arena and envisioning various outcomes for the tournament, then buy two sandwiches from Tuna King and eat them on my way back to the dorm.", "As I walk a path lit by the setting sun, I suddenly remember I promised to treat Alpha to Tuna King at some point.", "Alpha seems like she's always busy, so we never actually got around to it.", "Oh well.", "I'm sure I'll end up buying her that sandwich one of these days.", "She's an elf, so she can easily live to three hundred, and I'm planning on using magic to break two hundred.", "As long as I get to it before we die, it's fine.", "No need to rush.", "The closer I get to campus, the louder the cicadas get.", "Summer evenings are their domain, after all.", "At least, that's how I like to conceptualize it.", "The academy glows in the evening light, and I can tell the restoration work from the fire is progressing smoothly.", "At this rate, it'll finish up right on schedule just as summer break ends.", "Once, Skel got riled up and said, \"I wish the whole damn thing had burned down,\" and I couldn't help but agree with him.", "Heck, the whole student body was hoping summer vacation would get extended, so I bet they felt the same way.", "I pass alongside the schoolhouse and head down the path to the dorms.", "There's no one around.", "Most of the students went back to their homes.", "Actually, now that I think about it, my sister got all pissed and told me to come home with her, too.", "I ignored her and headed for the Sacred Land, of course, but I wonder what became of her after that.", "She'll probably be back around when the primary rounds of the festival start.", "As those thoughts float through my mind, I shove the last bite of my first sandwich into my mouth.", "Then, I'm shaken from my reverie.", "\"Carelessness is the greatest of all foes, you know.\" I feel a practice rapier's sheath tap on my shoulder.", "I don't feel any murderous intent, so I don't bother responding.", "The wielder of the sheath lets out a small chuckle and stows her sword.", "She's an attractive young woman with honey locks and gentle looks\u2014Rose.", "\"Hey. Training?\"", "\"Mm-hmm. I had some free time, so I came to get some swings in. I see you went to Tuna King?\"", "\"Yeah, I'm friends with the owner of one of the stores near it. I only found that out recently, though.\"", "\"The three of us went there ourselves the other day. It was really quite tasty.\"", "\"The three of you?\"", "\"Yes. Me, Miss Natsume, and Alexia.\"", "I'm still not sure what the three of them have in common, but now that I think about it, I saw them together in the Sacred Land, too.", "\"Are you guys friends?\"", "\"Miss Natsume and I get along wonderfully. And Alexia is a good person, so I'm sure she'll come around.\"", "I doubt she'll ever be able to befriend Alexia as long as Rose still thinks of her as a decent person.", "\"Unfortunately, though, Alexia and Miss Natsume seem to be on poor terms,\" she remarks sadly.", "It's not hard to imagine Beta and Alexia in the same group.", "I feel like they're cut from the same cloth.", "\"I'm sure they'll get over it eventually.\"", "\"I certainly hope so... If I ever have to leave, I'm concerned about how they'd get along. We all have to work together. I don't know if we'll be able to accomplish anything, but I do hope we're able to change the world for the better.\"", "\"World peace is important, after all.\"", "\"Uh-huh.\" Rose smiles happily.", "\"Oh, forgive me. It's getting late, and I really have to go.\"", "Little by little, our surroundings have grown darker.", "\"Cool. Catch you later.\"", "\"Um...\" Even though she just claimed she had to go, Rose looks like she wants to say something.", "\"What's up?\" Rose hesitates for a moment.", "\"I'm heading to see my father. He's introducing me to my fiance .\"", "\"Really?\"", "\"Yes.\"", "\"Well, congrats... or not, I guess.\" It's written all over Rose's face that this isn't what she wants.", "\"I'm a princess of the Oriana Kingdom. As such, I've lived my life carrying the weight of various expectations, but out of selfishness, I betrayed them.\"", "\"Uh-huh.\"", "\"After this, I may go on to betray them even further.\" Rose smiles sadly.", "\"This time, though, it won't be out of selfishness. I hope these fears of mine don't come to pass, but... if something happens... will you believe in me?\"", "\"Yeah, sure.\"", "\"All I ask is that you believe in me, Cid, nothing more. I pray we'll have another chance to talk like this.\"", "Rose hangs her head, concealing her face, and turns to try and leave.", "\"Hey.\" I call out to stop her, then hand her my other Tuna King sandwich.", "\"Here. You should try and relax a bit.\"", "\"Thank you.\" Rose flashes me a gentle smile.", "The next day, I'm woken up by Skel shouting.", "\"Rose, the student council president, stabbed her fiance and ran off!!\" Still lying in bed, I tilt my head.", "I wonder what made her want to go and do that.", "\"What does that girl think she's doing...?\" Alexia clicks her tongue.", "Natsume makes a practical remark from the couch in Alexia's room.", "\"It appears Princess Rose fled to the north side of the capital. She's probably still in the city.\"", "Alexia casts an annoyed look at Natsume, then clicks her tongue again.", "It's thanks to Natsume that she's heard the particulars of Rose's attempt on her fiance 's life.", "As inscrutable as Natsume is, her information network is useful.", "She's even been able to dredge up a number of rumors regarding the Cult of Diablos.", "\"King Oriana likely wants to deal with this matter internally. He's asked the Midgar Kingdom not to get involved.\"", "\"That's suspicious.\"", "\"Very. Rose's actions fall under the jurisdiction of Midgar's laws, but prosecuting her would have a pronounced effect on the relationship between the two countries. Midgar will probably refrain from intervening.\"", "\"True. My father will probably wait and see how things play out.\"", "Alexia's father is a man who believes strongly in not rocking the boat, and as his face floats to the front of her mind, she clicks her tongue yet again.", "\"Rose's fiance is Perv Asshat, the second son of one of the Oriana Kingdom's dukes. If she's caught, I imagine her punishment won't be light.\"", "\"She's royalty, so she won't get the death penalty, but she'll either be imprisoned or exiled... Anyway, we should find Rose before the Oriana Kingdom does so we can ask her what's up.\"", "\"Well, let's think about this. Princess Rose didn't discuss any of this with us. It's possible she was trying to avoid getting us involved and making this an international incident.\"", "\"So what?\" Natsume stares into Alexia's eyes.", "\"I think we should avoid doing anything reckless.\"", "\"You're saying we should abandon her?\"", "\"I never said that. I just think we should consider our next move before we act.\"", "\"What, so you're trying to say I'm not thinking?\"", "\"I never said that. I just think we should take a little more time weighing our options.\"", "\"What, so you think I'm a dumbass?\"", "\"I never said that. I just think we each have our strengths and weaknesses.\"", "\"What? If you've got something to say, just come out and say it already!\"", "\"Oh, I could never be so rude...,\" says Natsume.", "Her eyes dart anxiously.", "Alexia strides briskly toward her, then hoists Natsume up by the collar.", "The two mounds on Natsume's exposed chest jiggle.", "Alexia glares at her.", "\"Don't go playing all innocent with me.\"", "\"Eek! P-please don't kill me...!\"", "Natsume squirms to try and get free, making her chest wobble even more.", "Alexia notices there's a mole on one of those blobs, and it pisses her off even more.", "\"See? You're doing this all on purpose.\"", "\"Eeeep...\"", "\"I'll beat your ass.\"", "\"W-w-w-w...\" Natsume looks up with tears in her eyes, and Alexia clicks her tongue and lets her go.", "The author collapses onto the sofa.", "\"Rose must have had some reason for what she did, and I know she was trying to keep us from getting wrapped up in it. That's what pisses me off.\"", "\"Wh-what?\" Natsume asks.", "\"When someone tells me not to do something, it makes me want to do it even more, and when someone says they don't want me getting involved in something, it makes me want to get in up to my neck.\"", "\"Um...\" Natsume looks up at Alexia, unsure how to respond.", "\"We're allies. None of us really knows what lies in the others' hearts, but we agreed we'd act as a team. Didn't we?\"", "\"R-right.\"", "\"Since that's the case, I'm not going to abandon a teammate. That means I'm not abandoning you, either. Got it?\"", "\"...Yes.\" Natsume stands with her head downcast.", "\"Then I'm going to go collect information on Princess Rose. I've heard some unsavory rumors about her fiance , so I'll try digging there, too.\"", "\"Look who's cooperative. I'll start by consulting with my sister.\"", "\"Let's meet back up tonight to exchange intel.\"", "\"Wow, you get back on your feet quick.\"", "\"Until then.\"", "\"Oh, and stay safe out there.\"", "\"You, too, Princess Alexia.\" Natsume bows, then takes her leave.", "Alexia watches her go, then heaves a heavy sigh.", "\"Well, looks like I've got work to do...\" She smooths out her wrinkled clothes, then heads out after her."], "c6": ["The week ends, and the preliminaries for the Bushin Festival begin.", "I'm currently watching the fights from the arena stands with Skel.", "The sun is high in the sky, and attendance is sparse.", "Well, that's just how these rounds are.", "In fact, the turnout is usually worse.", "Yesterday, I had my second round of prelims.", "They weren't held in the arena, though, but in a nearby meadow.", "You heard that right\u2014the first and second prelim rounds take place in a grassy field outside the capital.", "There aren't any spectators, and the quality of competition is abysmal.", "I knock both of my opponents out with lariats, but it doesn't bring me a shred of joy.", "The third round is when we finally get to fight in the actual arena.", "By this point, the quality of the fights is starting to barely approach respectability.", "There aren't many people watching, but honestly, it's a surprise that there are even as many as there are.", "The Bushin Festival's main attraction isn't the primary rounds, after all.", "\"By the way, what happened to Po?\" I ask Skel.", "He seems to be jotting down notes of some sort.", "\"He had to plow the fields back at his parents' place.\"", "\"Ah.\" Skel continues fervently scribbling as he watches the fights.", "I spot a necklace in the shape of a holy sword draped around his neck.", "It's the souvenir I bought him back in the Sacred Land.", "I'm glad he's actually wearing it, but it also makes me question his taste in fashion.", "\"What do you have going on there?\"", "\"Collecting data on the battles. Noobs gamble on the fights with just their gut, but I'm different. I make my bets based on stats, probabilities, and hard data.\"", "\"Huh.\" I glance at Skel's notepad.", "The first few entries I spot read", "\"seems strong,\"", "\"seems weak,\" and", "\"hell if I know.\"", "\"You know, the trick to gambling is ending in the black,\" says Skel boastfully.", "He keeps writing as he speaks.", "\"Who'da thunk?\"", "\"See, when noobs gamble, they go ride or die on single fights. But not me. I don't get attached to any one outcome. I count my fights by the dozen\u2014the more often I bet, the sooner the odds converge.\"", "\"Uh-huh.\"", "\"After all, I'm a man who always ends in the black...\" I yawn.", "\"That's crazy, dude.\"", "\"It sounds like you're talking about something interesting.\" Suddenly, another man appears behind me.", "\"We are?\" I ask.", "\"It certainly sounded that way.\" The man, a showy blond hunk, grins.", "\"W-wait! I know you...!\"", "\"You know this guy, Skel?\"", "\"You're Goldy Gilded the Unbeaten Legend, right?!\" Goldy responds to Skel's glistening gaze by combing up his hair.", "\"That nickname is alittle embarrassing. Call me Goldy Gilded the Victorious Golden Dragon.\"", "\"O-of course! Goldy the Victorious Golden Dragon!\"", "I think Unbeaten Legend sounds cooler myself.", "\"So I see you're summing up data on the battles?\"", "\"That's right!\"", "\"That's some good thinking. I always make sure to do the same.\"", "\"R-really?!\"", "\"Of course. To make sure I always win.\"", "\"That's so badass! Do you have any cool stories you could tell me?\"", "\"Oh, one or two, I suppose.\" I suspect it isn't gonna stop at just two.", "My fight's coming up soon, so the timing is perfect.", "\"I gotta go take a dump.\"", "\"Hurry back so you don't miss anything.\" I go to the toilet and don my disguise before heading to the entrants' waiting room.", "Skel is listening to Goldy Gilded the Victorious Golden Dragon's theory on victory with rapt attention.", "\"For instance, I'll use this next fight as an example.\"", "\"Got it!\" The next challengers are being called to the arena.", "\"Round three, match twelve! Gonzales versus Mundane Mann!\"", "The two dark knights square off against each other.", "\"My theory holds that it's possible to figure out roughly how strong each side is before the fight even starts. Let's start with Gonzales. We can figure out his physical prowess by analyzing how balanced his muscles are. Also, based on the glint in his eyes and his arrogant disposition, he gives off an aura of a tough, experienced fighter. His power level looks like it's around 1,364.\"", "\"P-power level?! What's that?!\"", "\"By analyzing the battle data, it's possible to quantify someone's combat capabilities\u2014 1,364 isn't bad.\"", "\"That's awesome!\"", "\"As for his opponent, Mundane Mann... hmm.\" Goldy Gilded the Victorious Golden Dragon casts a sharp stare Mundane's way, then sinks into silence.", "\"Wh-what's the matter?\"", "\"No... it's just that it's absurd. But... it's just so...\"", "\"M-Mr. Goldy, sir?\"", "\"Ah, forgive me. I lost myself a little there.\"", "\"Wait... Is Mundane really that...?\"", "\"Yeah... that man, Mundane Mann... is unbelievably incompetent!\" Goldy Gilded the Victorious Golden Dragon bursts into laughter.", "\"Huh...? Incompetent?\"", "\"It boggles the mind that he's made it as far as the third round! An act of god, maybe?\"", "\"H-he does look weak, I guess...\"", "\"His face looks weak, his body looks weak\u2014even his aura looks weak! Mundane's power level is thirty-three! Ha! That's the lowest I've ever seen for a dark knight!\"", "\"So Gonzales is going to win?\"", "\"Yeah, it's gonna be over in a heartbeat. Hell, the fight almost isn't worth watching.\"", "And with that, the round begins.", "Gonzales is the first to act.", "With surprising agility given his brawny build, he closes the gap and bears down on Mundane.", "His movements are far more refined than those showcased in the other third-round matches.", "It appears Goldy's estimation of him as a tough, experienced fighter was on the mark.", "Mundane doesn't even react to Gonzales's slash.", "Everyone is certain Mundane's defeat is imminent, but then... Gonzales collapses.", "Right before he reaches Mundane, he trips and tumbles down.", "His head hits the ground, and he's out like a light.", "The crowd goes silent.", "Surely, he's going to get up, they all think.", "But Gonzales doesn't move a hair.", "When Mundane sheathes his sword and turns around, the verdict is finally called.", "\"Th-the winner is Mundane Mann!\"", "\"Th-this is bullshit!!\"", "\"We want our money back, jackass!!\" Boos pour from the crowd around Gonzales's unconscious body.", "Unsure of how to react, Skel looks over at Goldy Gilded the Victorious Golden Dragon.", "\"W-well, these things happen, too,\" says Goldy Gilded the Victorious Golden Dragon.", "His cheek is twitching.", "\"Battle data can give us an idea of who will win, but when the chips are down, nothing is ever certain. This was educational, I hope?\"", "\"D-did you know this would happen...?\"", "\"Heh...\" Goldy Gilded the Victorious Golden Dragon doesn't offer him a definitive answer.", "\"Let me tell you a secret.\"", "\"Huh...?\"", "\"There are two ways to win at betting. The first is figuring out who's strong, then betting on them to win. The other is figuring out who's weak, then betting on their opponents.\"", "Goldy Gilded the Victorious Golden Dragon stands and turns to leave.", "\"Tomorrow is the fourth round, and the sixth match is Goldy Gilded the Victorious Golden Dragon versus Mundane Mann.\"", "\"Wait! That means...!\"", "Goldy Gilded the Victorious Golden Dragon whirls around and points at Skel.", "\"Can you... find the winning line?\" Then, he combs back his sparkling blond hair and makes his exit.", "\"He... he's so cool...\" Amazed, Skel watches Goldy Gilded the Victorious Golden Dragon leave.", "\"I finished taking my dump.\" A young, dark-haired man returns to his seat.", "\"Hey, Cid! There's a fight tomorrow with a guaranteed win. Let's go all in!\"", "\"What? No.\"", "\"C'mon! Just take my word for it!\"", "\"Screw that.\"", "\"Tch, fine. Your loss, man!\"", "And with that, the two of them go back to watching the matches.", "The fourth round of the Bushin Festival has begun.", "Annerose is sitting in the front row of the stands, waiting for a certain match to start.", "Her pale-blue hair sways in the breeze, and her identically colored eyes are fixed on the arena.", "There are more spectators than the previous day, but the arena isn't even half-full.", "\"You came to watch that guy's fight, too, lady?\" Annerose hears someone call out to her and turns around.", "\"I remember you. You're...\"", "\"Quinton.\" Quinton still looks like a pro-wrestling villain and plants himself beside Annerose.", "\"You saw his third round yesterday, right, lady?\"", "\"I did. I take it you did, too?\"", "\"Not on purpose, but I happened to catch it. Whaddaya make of Mundane Mann's round?\"", "Quinton stretches his legs as he asks Annerose the question.", "\"It certainly didn't look like he just lucked out and his opponent tripped.\"", "\"Yeah. That guy did somethin'. I don't have a rat's ass of a clue what it was but thought you might. You're Annerose, one of Velgalta's Seven Blades, after all.\"", "For a moment, Quinton's arrogant gaze meets the steely glint in Annerose's eyes.", "Annerose immediately looks away and crosses her legs.", "Her white skin is exposed beneath the slits in her skirt.", "\"I gave up that title. Now I'm just Annerose.\"", "\"My bad. Oh, and I know I'm late, but congrats on passing the Goddess's Trial.\"", "\"Thank you.\"", "\"So you couldn't tell what Mundane did?\"", "\"I\u2014I couldn't.\" Annerose sounds a little sullen.", "\"I didn't think there was a chance I'd miss it, so I let my guard down. But... it looked like his right hand moved.\"", "\"His right hand, huh?\"", "\"I don't know what he did with it. All I know is that whatever it was, he did it incredibly quickly.\"", "\"Huh. I guess that makes my guess wrong.\"", "Quinton exhales through his nose, annoyed.", "\"Your guess?\" I figured he'd used some kinda banned artifact or something.", "\" \" Interesting... We can't fully rule that out.", "\" \" Either way, we'll know after the match today.", "\" \" I suppose we will.", "His opponent is Goldy Gilded the Unbeaten Legend.\" \"Never heard of the guy, but I guess he's supposed to be famous.", "Apparently, he's never lost a match.\" A wry smile crosses Annerose's face.\"Famous, yes.", "For better or for worse.", "\"\" He strong?", "\" \" Interesting question... I've fought in a number of different countries before, both actual battles and tournaments in arenas like this.", "In my time competing in tournaments, I've been matched up against Goldy Gilded three times.\" \"Ah.", "And if Goldy's never lost... I guess that means he beat you.\" Annerose glares at Quinton.\"Don't be ridiculous.", "We never actually fought.", "Whenever he's up against a strong foe, he simply drops out.\" \"What?", "The hell's up with that?\" \"He's a man who'll never fight an opponent if he thinks there's a chance he'll lose.", "He only fights those he knows he can beat, then withdraws once he has to contend with anyone stronger.", "That's why they call him the Unbeaten Legend\u2014nobody has a chance to defeat him.", "I hear he doesn't like the name, so he's been calling himself the Victorious Golden Dragon.\" \"Unbeaten and victorious, huh?", "They sound similar but mean totally different things.", "\" Quinton laughs.\" So you're saying we shouldn't expect much from our friend the Unbeaten.", "\" The corner of Annerose's mouth curls upward.\" I wouldn't be so certain.", "\" \" Whaddaya mean?", "\" \" Even fighting those he's sure he can beat, the Unbeaten Legend places highly in his tournaments.", "He's even won a few of the smaller ones.", "\" \" Ah... so it's not like he's weak.", "\" Quinton's gaze intensifies.\" Exactly.", "Figuring out the difference in strength between himself and his opponent is the man's forte.", "And he chose not to run from Mundane.", "In other words...", "\" Quinton laughs violently.\" Ah, it's all coming together.", "\" \" Not even the Unbeaten Legend could tell how strong Mundane is.", "\" \" Either that or Mundane's just a coward who uses artifacts to cheat.", "\"\" And to add another twist, the Unbeaten Legend has only ever fought those he knows he can best.", "He's never shown off the true extent of his strength.", "\" \" Damn, things are starting to sound interesting.", "\" \" That they are.", "\" Quinton smiles a beastly grin, and Annerose licks her lips. Then, they both turn their attention to the arena. Cheers and jeers flood the stadium, and Mundane Mann and Goldy Gilded stare each other down. Of all the spectators in the stands, only two understand the true significance of this fight.\"", "Round four, match six!", "Goldy Gilded versus Mundane Mann!", "Ready?", "Begin!\" Goldy seizes the initiative. The moment the match starts, he immediately closes the gap. Then, he swings his excessively decorated greatsword straight at Mundane's neck. His target, Mundane, hasn't even drawn his weapon yet. He's just standing there, not even reacting. Goldy, certain of his victory, flashes his pearly whites. A loud crack rings out.\"", "Huh?\" Goldy lets out a small exclamation of surprise. But he's not the only one\u2014nobody in the stands is ready to believe what they just saw. Goldy's sword passed clean through Mundane's neck, connecting with air and air alone. Goldy realizes his torso is wide open.\"", "Tch!\" His face twitches. Offered that decisive window, Mundane finally moves. And yet. He merely draws his sword slowly from its sheath. That's all. His movements are sluggish, and he's completely overlooking this nugget of opportunity. It doesn't seem like he's even noticed. Goldy puts some space between them, then glares at Mundane and spits out a few words.\"", "You making fun of me?", "\" His annoyance is all too clear.\" Didja catch it?", "\" Quinton asks Annerose over in the stands.\" Just barely.", "\" She continues staring at Mundane with the eyes of a hawk.\" I knew ya were the real deal.", "I couldn't see shit.", "I thought the Unbeaten Legend got Mundane's head good.\" \"Right.", "It wouldn't normally be possible to dodge the blow at that point.", "But... before the sword hit him, Mundane cracked his neck.\" Annerose's voice is filled with unconcealed shock.\"He cracked his neck?", "I don't follow.\"\"All he did was crack his neck.", "You know, like this.\" Annerose tilts her neck to the side and cracks her joints.\"Nah, hold up.", "That doesn't make any sense.\" \"I know.", "But the moment he tilted his neck, it made that cracking sound, and Goldy's sword missed.\" \"You're yanking my chain here!", "He tilted his neck to crack it and just so happened to dodge the attack?", "\" \" I think that's what happened.", "\" \" You're full of it!", "There's no way a coincidence like that's possible!", "!", "\" A serious look fills Annerose's eyes.\" What if it wasn't a coincidence?", "\" \" What?", "\" \" He cracked his neck so fast, even I would have missed it if I hadn't been specifically watching him.", "A normal person can't do that.\" Common sense held that people couldn't crack their necks so fast as to render the motion invisible to the eye.\"Gah!", "You're right...\" \"It's possible that dodging the sword was just an afterthought to him.", "Mundane started with a desire to crack his neck while the attack happened to be coming his way, so in addition to cracking his neck, he also dodged it.\" \"Bullshit!", "That right there, that's impossible!", "Goldy's swing was fast!", "You're trying to say the kid dodged it as an afterthought?", "!\" \"I'm only half-certain myself.", "Maybe it was all just a coincidence.", "But if it wasn't...\" \"...!", "There's no way I'm gonna believe that!\"Goldy glares at Mundane.\"You piss me off.", "Right there, you just missed a golden opportunity.", "You had a real shot at beating me, a once-in-a-lifetime chance, and you let it slip away like it was nothing.", "Meanwhile, you're just standing there cool as a cucumber.\" Goldy grinds his teeth.\"You should be mad.", "You should be grieving.", "You should be scratching and clawing to try and win.", "The fact that you aren't is basically an act of blasphemy against me.\" Mundane just listens to Goldy in silence.\"Did you not even notice what you just missed?", "If that's the case, then I guess I can't blame you.", "That's power level thirty-three for you.\" Goldy tries and fails to stifle a laugh.\"But hell if I'm gonna let myself lose face to a nobody like you.", "I'm gonna come at you with everything I've got.", "So don't come complaining to me if you die.", "Capisce?\" Goldy readies his sword, then begins gathering magic in its blade. The air vibrates as the magic accumulates. A murmur runs through the crowd.\"", "Here's a fact you can take with you to the grave: My power level's four thousand three hundred.\" And in one fluid motion, Goldy closes the distance between them and strikes.\"Demonic Golden Dragon!", "Fatality Strike!", "!\" The wave of golden magic seems to take the form of a golden dragon, devouring Mundane whole. Or at least, it's supposed to. Suddenly, an achoo! rings out, and the dragon vanishes.\"", "Blargh!", "!\" And as it does, Goldy gets sent spinning through the air. The crowd stops murmuring. Instead, they gape, dumbfounded, as Goldy crashes to the ground and stops moving.\"", "Th-the winner is Mundane Mann!", "!", "\" As Mundane turns to leave, they're chanting his name in the stands.\" That Goldy Gilded guy wasn't no pushover...", "\" That's the first thing to leave Quinton's mouth post-match. After hearing Annerose's description of the man, Quinton's opinion of him had been low. He hadn't expected Goldy to be capable of materializing his magic to that extent. That final attack of Goldy's had enough power that it wouldn't have been surprising if he'd advanced to the finals.\"", "He was definitely more powerful than I thought.", "If he'd been aiming for the top and actually took on stronger opponents, he could've made an outstanding dark knight.", "\" \" So what'd Mundane do at the end there?", "\" Annerose crosses her arms, sighing.\" If I'm not mistaken... he sneezed.", "\" \" What?", "\" \" The Golden Dragon must not have been too bright.", "When he sneezed, he brought his sword down, and Goldy ran right into it.\" \"No, that doesn't make any sense.", "You're saying a sneeze beat a dragon?\" \"It certainly seems that way.", "Goldy said Mundane missed a golden opportunity, but maybe Mundane didn't see it as one.", "He could have taken Goldy down whenever he wanted.", "In other words, he didn't need to seize every opening... Or maybe to Mundane, Goldy was never not defenseless...?\" Just considering this sends shivers down Annerose's spine. It's impossible. At the end of the day, it is only a theory... She assumes she must simply be wildly overthinking things.\"", "This is nonsense.\" Quinton scoffs, then aggressively abandons his seat.\"But hey, it was my bad for taking you seriously.", "I ain't never gonna believe in that kid.", "Even if he keeps winning, he's gonna run into me in the prelim finals.", "I'll show everyone what a poser he really is.\" Quinton casts one last glare at the Mundane-free arena, then leaves. Annerose, on the other hand, stays seated and recalls Mundane's movements.\"", "Would I be able to pull off the same moves...?\" Still sitting, she cracks her neck and sneezes. She tries it again and again, each time faster and with fewer wasted movements. Crack, achoo, crack-achoo-crack!\"", "A-achoo...\" Then, conscious of the strange looks she's getting from the people around her, she goes bright red and flees. The Unbeaten Legend has finally been broken. News of his defeat spreads among the tournament fanatics like wildfire. Even though it's still just the prelims, Goldy the Unbeaten Legend is a dark knight to whom people pay attention. They are astonished to hear he's lost to some nobody named Mundane, but their shock dwindles when they are told how the fight went down. Oh, sounds like he just won by some fluke. That is more or less how most of the fanatics see it. However, a few of them\u2014along with some of the people who have actually been watching the match\u2014have doubts about how Mundane is being assessed. Because of that, they decide to attend Mundane's matches and judge his strength firsthand.\"", "What's this?!", "Quinton is down!!", "And he's not getting back up!!", "Mundane wins another match with a single blow!", "!\" The B-Block finals for the preliminary rounds end with Mundane's victory. Another one-hit win. The fanatics can't figure out what to make of him. That day's victory qualifies him for the primary rounds, but nobody is quite sure how he's actually done it. There's no way he could have won so many times off pure luck, so he has to have at least some skill. In fact, his opponent in the prelim finals, Quinton, was a dark knight held in high estimation by the enthusiastic crowd. The fact that Quinton lost to Mundane without being able to put up a fight leaves the fanatics with little choice but to acknowledge Mundane's strength. However, because they can't figure out how he won, they can't really pin down his true strength. He's probably stronger than Quinton, but is he really fit to stand atop the main stage? He might be strong, but can he really stack up against the historic winners of the Bushin Festival? Arguments on the topic are heated. In the end, most people decide he's probably on the weaker end among the combatants scheduled to appear in the primaries. Considering his lack of history, that's to be expected. Everyone else has earned his or her reputation in tournaments or on the battlefield, but Mundane has no notches in his belt to compare against theirs. Objectively speaking, Mundane has nothing that proves his worth. So, of course, expectations for him are low. Still, a couple of the fanatics think he's a dark horse. Given the list of contestants this time around, it's pretty much a guarantee that Iris is going to take the Bushin Festival this year, but if anyone can upset her... it's probably the miracle boy whose strength is yet unknown. Such are the expectations being foisted upon Mundane as he leaves the arena. The primaries start the following week. Round one is Mundane Mann versus Annerose. Ninety percent of people expect Annerose to take the match. As I leave the stage, I think how the older guy I fought today seemed oddly feisty. His name was Qui... something or other. I could literally feel the hostility emanating from him. It was kinda invigorating. Now I've qualified for the primary rounds that start next week. The crowd's been pretty unimpressed with me so far, but next week is when I'm gonna show off my true strength, so I need to run through some scenarios in the interim. As I walk down the long hallway to the players' entrance and think about my regimen for the coming week, a woman with pale-blue hair steps in front of me. I'm pretty sure she's named Annerose.\"", "Can I help you...?\" \"I never imagined you'd make it to the primaries.", "Good work.", "\"Her firm gaze bores into me.\" It was a foregone conclusion.", "\" \" Uh-huh.", "I see I misjudged your strength, but that's it.", "I have one warning for you.", "\" \" Yeah...?", "\" \" I've seen through your movements.", "Don't expect to be able to beat me the same way.", "\" A confident smile crosses Annerose's face.\" Heh...", "\" The corner of my mouth curls upward, and I pass by her indifferently, as though to say There's nothing more to discuss. I scream internally. Please call after me!\"", "What's so funny?\" Annerose glares at me. You're the best! I look back over my shoulder and cast a glance at her.\"", "I've got a warning for you, too...\" With that, I take off the wristband I've been wearing in the hopes that something like this would happen. I toss it at Annerose's feet. Thud. The band makes a hefty noise as it crashes to the floor.\"", "Th-those are... No way.", "You mean you had all these weights on you when you were fighting...?", "!", "\" \" These were the chains holding me back... But now, playtime is over...", "\" Thud. Thud. Thud. I remove the weights from my other wrist and both ankles, then start walking off again.\"", "Wh\u2014...?", "W-wait!", "\" This time, I don't stop.\" Wait, I said!", "\" Annerose frantically rushes in front of me.\" Don't think this means you've won.", "See, look...\" She cracks her neck. And for whatever reason, she does it super-fast.\"", "I can do this, too, you know...\" \"...I see.\"", "Not at all following, I pass by Annerose and her triumphant expression.", "I wonder what she was trying to do just now."], "c7": ["It's a brisk summer morning.", "As I gaze out my window at the clear blue sky, I stretch my arms wide.", "Then, I flop down on my bed with plans to idle away my day.", "There isn't much summer vacation left.", "Also, the Bushin Festival primaries start next week, so I gotta run through some scenarios at some point.", "However, the fact remains that people can't go on living if they don't carve out time for lazing.", "Okay, I might have just made that up.", "It's still true for me, though.", "\"Hey, Cid! I've got big news, so open up!\"", "Suddenly, Skel starts banging on my door and shouting.", "As two people grow familiar with each other, they will inevitably end up annoying each other.", "Why is it that people seek out the company of others, knowing it brings such grief?", "These are the kinds of questions I'm forced to confront during one of the few summer vacation mornings I have left.", "Honestly, I'm kinda digging it.", "It feels like I'm one of those masterminds who always keep others at arm's length.", "\"Yeah, yeah, I'm coming.\"I unlock the door and greet Skel.", "\"Look, it's a wanted poster for President Rose. Ten million zeni if she's captured alive and half a million for useful information on her.\"", "\"Huh.\" I take the poster from Skel and glance at it.", "\"Let's go catch her.\"", "\"Wait, why?\"", "\"'Cause I'm broke.\" Skel's expression is one of abject desperation.", "\"Didn't you say you had some match that was guaranteed to go a certain way?\"", "\"I don't wanna talk about it.\"", "\"Weren't you gonna make bank off that?\"", "\"Shut up. Look, I don't wanna get into the details, but I'm broke. Which means I need money.\"", "\"I see.\"", "\"C'mon, man. You gotta help me.\"", "\"I don't wanna. Do it yourself.\"", "\"Wait. Think about it. It's way better for two people to search than just one. Our odds of finding her will double.\"", "\"I mean...\" As Skel shakes me by the collar, I rapidly lose interest.", "After all, I already decided I supported Rose embracing her rebellious spirit and stabbing her fiance .", "Always nice to see some enthusiasm, that's what I say.", "In other words, I'm pretty much rooting for Rose to escape.", "\"I'm begging you here!\" Skel is bowing his head in a rare display of supplication.", "Right as I start to say, \"Yeah, but...,\" the dorm supervisor's head pops in.", "\"Cid, your sister is here to see you.\"", "\"My who?\"", "\"Your sister. She's waiting out front for you, so you'd best not keep her there long.\"", "After relaying the information, the supervisor leaves.", "\"Claire, huh...? I guess she's back.\"", "I've got a bad feeling about this.", "In the space of an instant, I weigh which of my two options sounds like a bigger pain.", "\"All right, let's begin Operation: Capture Rose!\"", "\"I knew I could count on you, Cid! This is why you're such a great friend!\"", "I grab Skel by the scruff of the neck and open the window.", "\"Wait, Cid! What are you doing?\"", "\"There's no time. We gotta take the window.\"", "\"Huh? Wait, what are you talking about?! Wait! No! Hey!!\"", "\"Onward!\" And with that, I leap.", "\"Iris says she's grateful for your information and she looks forward to working with you again.\"", "\"It's an honor,\" says Beta as she watches Alexia walk in front of her.", "Alexia carries a magic lamp, and the two of them descend a dark set of spiral stairs.", "They've already come a decent way down.", "The air is damp and nippy, reminding them that they're underground.", "\"It's probably safe to assume that Perv Asshat is connected to the Cult,\" says Alexia.", "\"Agreed,\" replies Beta.", "\"The problem is we don't have any proof.\"", "\"That it is. And this is a matter of national and religious significance, so normal evidence won't be enough.\"", "\"Don't I know it. My father made it abundantly clear\u2014if we want to link the Cult of Diablos to the Holy Teachings, we need something that'll convince both the masses and our neighboring countries.\"", "\"And if we're pegged as heretics, we're done for.\"", "\"It's not like every follower of the Holy Teachings is involved with the Cult. It's probably just a few members of their top brass.\"", "\"That's what makes this such a mess.\"", "\"Preach.\" Their footsteps echo through the stairwell.", "\"My father has a long-standing policy of not getting into fights with the Holy Teachings. I wonder what he plans to do about the Cult of Diablos.\"", "\"He's going to keep ignoring them, I suspect.\"", "\"Keep ignoring them...?\" The sound of Alexia's footsteps skips a beat.", "\"Just a baseless theory of mine. Please forget I said anything.\"", "\"...Well, I can let it drop for now. My sister said something that caught my attention, by the way. She said that King Oriana seemed kind of hollow.\"", "\"Hollow, huh...?\"", "\"It was my first time meeting him, so I wouldn't know the difference. He also smelled sort of sweet, though.\"", "A sweet aroma\u2014Beta knows exactly what drug can cause that.", "\"It seems we might already be too late...\"", "\"The Cult's definitely making their move, and given the way my father is handling things, our country is bound to be next...\" The two go silent as they continue their descent.", "\"We're here.\" There's a large pit with a ladder right in front of where Alexia's stopped.", "\"It's one of the subterranean tunnels that run beneath the capital. You've heard of these, right?\"", "\"I have, in fact. The tunnels were built beneath the entire capital so the royal family could escape in a pinch.\"", "\"Exactly. Many of the maps, keys, and ciphers went missing, so now it's basically just a labyrinth.\"", "\"So why come here?\"", "\"To get rid of you.\" Alexia grabs the sword hanging from her waist and... laughs.", "\"Just kidding. Nothing shakes you, does it?\"", "\"Eep! Please don't kill me...!\"", "\"There's a good chance Rose used these tunnels to make her escape.\" Beta feels a little upset at having her brilliant performance ignored.", "\"I'm going to go look for her.\" Alexia grabs the ladder, prepared to immediately head down.", "\"Um, would you mind waiting a moment?\"", "\"Why?\"", "\"Have you told anyone where you're going?\"", "\"Of course not. They would have tried to stop me.\"", "\"You say it's like a labyrinth down there. Are you confident you'll be able to find your way back out?\"", "\"Oh, that's easy. I'll just come back the way I came.\"", "\"Um, I'm not quite sure how to put this politely, but could you find it in yourself not to drag me into danger on ill-conceived whims?\"", "\"Nope.\" The two of them glare at each other for a few beats.", "\"If you have complaints, you're free to leave.\" With that, Alexia leaves Beta there and begins descending the ladder on her own.", "Beta strongly considers taking her up on that offer, but she can't let Alexia die just yet.", "\"Protecting her is part of your job, too, Beta,\" she mutters quietly, then follows the princess down.", "It's early in the morning, and I'm walking around the capital.", "Skel ran off somewhere, saying he was gonna gather information.", "In this world, people get to work as soon as the sun rises.", "The main drag is already up and at 'em.", "I said I'd help him search for Rose, but I'm not planning on taking this very seriously.", "I still want her to make it out safely, but pretending to look for her seems like a decent way to idle the day away.", "I do kinda want to find out what provoked her rebellious spirit enough to end up stabbing her fiance , though.", "If possible, I'd like to ask her about it in person.", "One way or another, I'll be happy as long as I can kill some time.", "Rage tends to dwindle as the hours and days wear on, and my sister definitely needs some time to cool off.", "As those thoughts float through my mind, I hear the sound of a piano coming from somewhere.", "\"Mmm...\" To tell you the truth, I'm pretty decent at playing the piano.", "Back in my previous world, I practiced it so I could become a better shadowbroker.", "Okay, sorry, that's a lie.", "My parents forced me to learn as part of my educational regimen.", "My motivation was pretty much nil, as I would have much rather been spending my time training to become a mastermind than practicing the piano.", "That desire, however, was no match for the almighty educational regimen.", "Even so, while my piano lessons may have commenced under protest, I started hating it less and less as I kept it up.", "After all, just knowing you're good at piano fills people's heads with all sorts of preconceived notions.", "When he gets home, he'll be super-busy practicing, they all think.", "I kept my social commitments to an absolute minimum so I could become a shadowbroker, so that false assumption came in real handy.", "Also, I realized that piano fit the aesthetic.", "A mastermind playing piano under the moonlight... Sounds nice, right?", "You make them think you aren't just strong but cultured, too.", "It's so good... When I realized that, I started taking my practice seriously.", "My top priority was still my training, but I just couldn't get the image out of my mind of me playing the piano to set the mood before a big battle.", "Because of that, I ended up getting pretty decent at it, if I do say so myself.", "\"Not bad, not bad...,\" I murmur.", "Whoever's playing right now is pretty decent themselves.", "Beethoven's Piano Sonata no.", "14, the \"Moonlight Sonata,\" huh...?", "I'm a big fan of this piece.", "In fact, it's my favorite\u2014the composition gives off the best vibe for a budding mastermind.", "Even though I'm pretty sure I could take them in a \"Moonlight Sonata\" contest, the current instrumentalist's rendition has a unique flair.", "\"This is pretty good... It's like I can see the moonbeams in my mind... Even though it's morning...\" As I do my whole shtick to get myself in the mood, I finally realize something.", "Isn't it weird for someone in this world to be playing one of Beethoven's pieces?", "A serious look crosses my face as I wade through the crowd and head in the direction of the music.", "I'm gonna be honest.", "I have a pretty good idea of what's going on.", "I'm not an idiot, after all.", "I can hear the tune coming from the cafe on the first floor of one of the capital's foremost hotels.", "Security is so strict, the riffraff can't so much as get in the door, but they recognize me and wave me through.", "I step inside just as the woman with hair the color of a clear lake is finishing her performance.", "\"Epsilon...\" She's wearing a sleeveless dress, but it covers just enough of her chest to hide the slime.", "As expected.", "Her legs are clad in tights to avoid showing her skin, and the fact that her shoes have insoles to make her taller is well concealed.", "Her work is perfect.", "When I approach her, she seems to notice me.", "Epsilon bows to the customers, then leads me into a side room.", "She closes the door and smiles.", "\"Did you listen to my performance, my lord? How embarrassing...\"", "Her face reddens a little, and she looks at me with puppy-dog eyes.", "That isn't enough to fool me.", "\"Epsilon, that was the \u2018Moonlight Sonata,' right?\"", "\"Yes, it's my favorite out of all the many pieces you taught me.\"", "\"Really? It's my favorite, too.\"", "It's not like I meant to teach her, but it's always kind of gratifying when you discover someone else likes the same things as you.", "\"Thanks to you, my lord, I've been able to develop a number of powerful connections as both a pianist and a composer.\"", "\"Wait, a composer...?\"", "\"Of course. \u2018Moonlight Sonata,' \u2018Turkish March,' \u2018Minute Waltz'...\"", "Epsilon goes on to boast about how she put out a number of famous modern and historic pieces, gained popularity among the aristocratic class, won various awards, and was invited to migrate to some artistic-minded nation.", "Sorry, Beethoven, Chopin... and all you other famous composers.", "In this world, all the credit for your work went to Epsilon.", "\"...And my last concert was received wonderfully. The next job I'm heading for is in the Oriana Kingdom. As you're well aware, there's a lot to be done there...\"", "\"Right, 'cause they value the arts.\"", "\"That they do... And this time, in particular, there's a very important job I have to take care of there.\" Epsilon smiles bewitchingly.", "\"Well, go break a leg.\"", "\"I'll try my best to complete my job successfully and give a performance worthy of your sublime compositions, my lord.\" Epsilon gives me a graceful bow.", "\"Oh, right, apropos of nothing, but do you have any idea where Princess Rose is?\"", "\"Princess Rose, you say. Beta was in charge of that incident, but as far as what I know goes... I did hear she'd fled underground, beneath the capital. You could try asking Beta for more specifics...\"", "\"Oh, no worries. That's plenty to go off of.\"", "If I'm lucky enough to run into Rose, maybe I'll get a chance to chat with her.", "\"Thanks. Uh...\"", "As I look at Epsilon's smile, I try to think of what to say to thank her.", "I was super-happy when she said she liked the \"Moonlight Sonata,\" so she'll probably feel the same way if I say something she wants to hear, too.", "\"Your figure looks great, as always.\"", "\"O-oh, no\u2014no\u2014no, i-it really doesn't! I'm still working on it...!\"", "Unable to keep looking at Epsilon's face, I turn my attention to the scenery outside the window.", "This is how the world goes round, I think as I gaze at the endless blue summer sky.", "Rose walks down the dark underground tunnel.", "Blood is still trickling from the wound she sustained on her back during her escape.", "The cut isn't deep, but it definitely isn't shallow, either.", "It should have been treated immediately, but Rose's pursuers haven't given her time to indulge in such luxuries.", "Instead, she's focusing her magic on the wound to prevent it from getting any worse.", "As time presses on, though, the pain grows and her stamina dwindles.", "Her breathing is shallow.", "As she keeps an eye out for her assailants, her mind keeps racing.", "What had been the right thing for her to do?", "What would have brought about the best outcome?", "The questions spiral around in her mind, but no answers seem forthcoming.", "Stabbing Perv, her fiance , had been a spur-of-the-moment decision.", "She hadn't done it impulsively, though.", "She'd used the limited time she had to figure out her best option, then acted on it... or at least, she'd tried to.", "But she'd failed.", "Perv had survived, and she had to flee.", "However, it was only a failure in hindsight.", "She'd misjudged Perv's skill, but the choice to eliminate him hadn't been wrong in and of itself.", "In fact, she'd had no choice.", "The moment she'd seen her father's\u2014King Oriana's\u2014 lifeless eyes, she knew she had to get rid of Perv.", "In her estimation, all the rumors\u2014 Perv's connection to the Cult and the empty puppet that was left of her father\u2014had changed to fact.", "That was why she'd drawn her blade.", "Had she been overly impulsive?", "Had she acted in haste?", "Could she really say she hadn't been spurred on by impatience and rage?", "Rose had thought she was making the rational choice.", "She hadn't wanted to rely on Alexia and Natsume.", "After all, the Oriana Kingdom had to resolve the matter internally.", "That had only been a hunch, but Rose had been confident in it.", "And politically, at least, she'd been right.", "Her gambit had ended in failure because of it, but it was still Rose's mistake and the Oriana Kingdom's problem.", "The Midgar Kingdom still hadn't gotten wrapped up in the mess.", "She'd subconsciously dodged the worst-case scenario.", "It was just a matter of time, though, before that came to pass, too.", "The words Perv yelled after her as she'd fled echo within her ears.", "\"Turn yourself in before the Bushin Festival ends! Or I'll make King Oriana kill one of the other guests of honor!\"", "If King Oriana really did kill another dignitary like Perv said... it would mean war.", "Rose isn't sure how serious he was about that, but it's possible the Cult only sees King Oriana as a minor pawn.", "And if that's the case... Rose grinds her teeth.", "Her face contorts in anguish.", "Her father is no brilliant leader, and Oriana is no vast kingdom.", "To her, though, they're the only father and motherland she has.", "All she wanted was to protect them.", "But that desire led to impatience.", "Rose slams her fist against the tunnel wall.", "At the end of the day, she let her emotions get the better of her and acted impulsively.", "She'd thought she could just kill Perv and fix everything, but that had been naive.", "Perv was nothing more than a sacrificial pawn.", "She should have realized how deep the Cult's roots ran throughout Oriana and that killing him wouldn't accomplish anything.", "There has to be some other option... some magical action she can take that would fix everything... Rose slumps onto the damp ground.", "Implausible scenarios dance through her mind, taunting her.", "If only she'd done something cleverer and everything had lined up neatly...But now, it's all over.", "She isn't even sure why she's fleeing.", "What good would escaping do her?", "What would it change?", "Shouldn't she turn herself in?", "Yeah... that'd be for the best.", "\"I see... All I have to do is turn myself in.\" She still doesn't know what the optimal course had been then.", "However, her best option now is simple.", "By turning herself in, she can at least prevent a war.", "Thinking that makes her feel a little better.", "At the same time, she's assailed with sorrow and grief, as though she's lost something precious to her.", "Rose pulls the Tuna King wrapper from her pocket.", "She ate the sandwich long ago, but it still smells faintly of bread.", "It reminds her of a certain boy with black hair.", "He's almost certainly heard what's happened by now.", "She wonders what he thinks of it.", "Is he worried about her?", "Does he still believe in her?", "Is he perhaps... searching for her himself?", "If she'd been able to kill Perv and bring the king back to his senses... If a future existed where everything had gone right... Would she have been able to marry him and live out her life by his side?", "That is, no doubt, what she's been dreaming of.", "\"I'm sorry...\" Rose chokes out the words.", "A single tear rolls down her cheek.", "Her actions had shattered that picturesque dream into pieces.", "Rose delicately folds up the Tuna King wrapper and puts it in her skirt pocket.", "She thinks of it almost as her dream's last remaining fragment.", "\"Ow...!\" A sharp pain runs through her chest.", "When she parts her clothes to look at it, she finds a series of dark bruises.", "It's a symptom of the possession.", "The bruises only appeared recently.", "Rose hangs her head and lets out an empty laugh.", "Her dream was never destined to come to fruition.", "Suddenly, a small noise reaches Rose's ears.", "Is it her pursuers' footsteps?", "No\u2014it's too gentle, too lovely to be footsteps.", "When she strains her ear, she recognizes it as a piano.", "\"\u2018Moonlight Sonata'...?\" She's well versed in music, so she's familiar with the piece.", "The composition received unusually high praise, even in Oriana, a kingdom of the arts, and now she can hear it coming from the end of the tunnel.", "\"It's beautiful...\" It's as though the", "\"Moonlight Sonata\" is all there is.", "The performance is polished to a profound degree of perfection, almost as though the pianist's entire life was spent building up to this one piece.", "Rose follows the music toward the source as if a ray of moonlight is beckoning her.", "The tunnels are referred to as the capital's underground labyrinth, but they feel less like a labyrinth and more like ruins.", "The walls are made of sturdy stone and covered in carvings and ancient glyphs.", "Each has a number of doors in it, but the majority of them don't open.", "Maybe they need keys, or perhaps some mechanism inside the ruins is stuck.", "Rose can hear herself getting closer to the piano.", "When she turns the corner, she discovers a massive, dilapidated door.", "The noise is coming from beyond it.", "When she slips through one of the door's large holes, she finally reaches the source of the music.", "She's in a cathedral filled with fantastical light.", "On the wall, there's a set of stained- glass windows depicting the heroes and a dismembered demon.", "Light rains down from beyond the stained glass.", "It's all centered on a grand piano.", "\"Shadow...\" He's the one playing", "\"Moonlight Sonata\" in the abandoned cathedral.", "Rose closes her eyes and takes in the beautiful melody.", "Shadow's \"Moonlight Sonata\" is different from all the other renditions Rose has ever heard.", "The composition is the same, but thanks to the instrumentalist, the tone is different.", "Shadow's \"Moonlight Sonata\" is one of darkness.", "The deep, permeating darkness of the night with a single ray of light shining through it.", "Perhaps that ray is coming from the moon, or perhaps... The piece reaches its conclusion before Rose can come up with an answer.", "She takes in the music's final reverberations, then claps.", "Her solo applause echoes through the cathedral.", "Shadow, of course, hears it.", "He rises from his seat and replies with an elegant bow.", "\"Shadow, that was...\" When Rose gets to that point in her sentence, though, she realizes that she doesn't know what to say next.", "She just knows she has to say something or Shadow will leave.", "\"That was, without a doubt, the finest rendition of \u2018Moonlight Sonata' I've ever heard. Um...\"", "Rose finds herself wondering what she's trying to get at.", "This isn't what she needs to ask him.", "\"What have you wrought...?\" Shadow's voice echoes like it's coming from the abyss itself.", "\"What...?\" Rose thinks for a moment, then understands.", "He's asking why she did what she did.", "\"I...\" She casts her gaze down, then chokes out the words.", "\"I just wanted to protect everyone... I wanted to reach a happier future... But I couldn't make that happen...!\"", "\"Is this where it ends...?\"", "\"What...?\"", "\"Is this where your fight ends...?\"", "\"It's not like... I wanted it to end here...\" Rose clenches her fists.", "She wanted to make things better.", "She still does, even now.", "But there's nothing left that she can do.", "\"If you have the will to fight... then I shall bestow it upon you,\" says Shadow.", "Bluish- purple magic gathers atop his palm.", "\"I shall grant you power...\"", "\"Power...?\" The bluish-purple magic flares, casting its radiance over the entire cathedral.", "The air trembles from the magic's density.", "\"Will I be able to change the future... with your powers?\"", "\"That depends on you.\" Rose suddenly realizes she's drawn to the magic.", "If she was as strong as Shadow... she'd be able to change everything.", "If she had power... then there were things she'd still be able to do.", "Things that, as a princess of the Oriana Kingdom, she had to do.", "Light returns to her eyes.", "\"I want it... I want power...\"", "\"Very well...\" And the bluish-purple magic bursts.", "It makes a beeline for Rose, then plunges into her chest and body.", "The power's warmth suppresses her raging magic and settles it.", "It was heavy and uncontrollable a moment ago, but now she can command it with ease.", "\"It's amazing...\"Her voice is full of sincerity.", "So this is Shadow's magic... This is the world he sees... \"Revolt... And prove to me... that you have the strength to fight alongside me.\" She suddenly realizes she can't see where Shadow's gone.", "His voice is the only thing left of him still in the cathedral.", "\"Remember... True strength comes not from power but from the way you live your life...\" And with that, Shadow's presence vanishes completely.", "Rose finds herself alone in the cathedral.", "She can hear her pursuers' footsteps.", "She can sense the subtle movements in the air.", "Unprecedented amounts of magic are churning within her body.", "She had been prepared to let them catch her, but with this power... she still has a hand to play.", "Rose draws her rapier and stares at the broken door.", "A group clad all in black bursts through it... and blood fills the air.", "They die before they can even perceive Rose's blade.", "Having drenched the cathedral in blood, Rose stows her rapier and closes her eyes.", "This must be how Shadow has fought against the Cult.", "Unseen and unceasing.", "Rose is reminded of Shadow's rendition of \"Moonlight Sonata.\" She feels as though she finally understands what the sole ray of light amid the darkness means.", "Perhaps the light is Shadow himself.", "He isn't the darkness but the light standing against it.", "That's how Rose sees it, at least.", "\"If we keep rolling out this string, we'll be able to find our way back just fine.\" Alexia strides forward through the underground labyrinth.", "\"I can only hope you're right about that,\" replies Beta from behind her.", "She yawns.", "\"Wait, did you just yawn?\"", "\"Why would I do that? I will say, though, it's already been more than half a day. Would you consider turning back? It seems most unlikely that she's even down here.\"", "\"Maybe you're right. I was pretty confident in my source, though...\"", "\"Once we get back, we can try digging around for information again.\" Their footsteps echo through the lamplit tunnel.", "It continues on monotonously.", "Suddenly, Beta senses a powerful burst of magic and stops in her tracks.", "Alexia stops a beat slower and whirls around.", "\"Just now... someone was using magic. And a lot of it...\"", "\"It could have been Princess Rose.\"", "\"Wait, did you notice it before I did?\"", "\"Only by chance. And the only magic I can perform myself is defensive.\"", "\"Well, if you say so. We should hurry.\"", "The two of them rush toward the magic.", "After passing through a massive, broken door, they find themselves in an old cathedral.", "\"Rose...\" Rose is standing there with her eyes closed.", "Strewn at her feet are a group of corpses all clad in black.", "Seeing that Rose is clearly different than normal, Alexia stops in her tracks.", "\"Alexia, is that you...?\" Rose slowly opens her eyes.", "\"What is with your magic...?\"", "\"I've obtained power... and now, I have to follow through on my beliefs.\" With that, Rose strides past Alexia.", "\"W-wait! What's going on?! Why did you stab your fiance ? !\"", "Rose looks over her shoulder.", "\"Alexia... I'm sorry. I don't want to get you wrapped up in this.\"", "She gazes at her as though something is too bright.", "\"Please tell me why! At the very least! If you don't, I won't know what's going on!\"", "\"If I tell you, you'll be part of it.\" Alexia returns Rose's look with a glare.", "\"Back at the Sanctuary... we were all powerless. We were just there, spectating. We didn't even know who was in the right and who was in the wrong. We only knew that if we stayed in the dark, we'd eventually lose everything we held dear... That's why we got together and talked. We agreed we'd protect that stuff together, the three of us.\"", "As Rose listens to Alexia's speech, she looks as though she's gazing at something distant and hazy.", "\"I believed in what we said that day, so why are you looking at me like that? Do you think I'm just a spectator, too?\"", "\"I'm sorry...\"", "\"Answer me!\" Rose offers Alexia a sad smile.", "\"It's too late for me to go back. That's why... I'm jealous of you.\"", "\"I don't follow. You're jealous of an ignorant spectator?\"", "\"That's not what I mean. I've already lost so much, and I'm sure I'll lose even more. People will disavow me, call me evil.\"", "\"What are you planning on doing...?\"", "\"I'm sorry... I have to go.\" Rose makes to leave, but Alexia clicks her tongue to halt her in her tracks.", "\"Stop right there.\" With that, Alexia draws her sword.", "\"Enough of this. I'll just make you listen by force. I'm no spectator.\"", "Rose draws her rapier in kind.", "The two of them stare at each other.", "Alexia's red eyes are filled with rage, Rose's honey eyes with a deep sadness.", "The tip of Rose's rapier twitches.", "Then, they move in unison.", "Their reactions are simultaneous, their speed is identical, and their overall skill is a perfect match.", "For an instant, surprise colors Rose's face.", "She's supposed to be the strongest dark knight in the academy.", "There's supposed to be a definitive gap between her skill and Alexia's.", "That was true when she enrolled, at least.", "In that tiny time frame, though, Alexia's sword work has progressed so rapidly, it's nigh unrecognizable.", "It bears a striking resemblance to the style of a certain man.", "That's right, Alexia's technique... is Shadow's.", "The two blades collide.", "Magic explodes, covering the cathedral.", "The two of them are evenly matched, yet the result is clear.", "Alexia's sword goes flying into the air, and Rose strikes her in the chin with her rapier's hilt.", "Alexia crumples.", "Rose simply has more magic.", "If Alexia's magic had been on the same level... who can say how the fight would have gone?", "\"I'm sorry.\" Rose apologizes to Alexia one last time, then stands to leave.", "That's when she notices Natsume.", "Oddly, Natsume has been completely outside of Rose's view.", "\"Miss Natsume... I'm sorry, but I have to go.\"", "\"I won't try to stop you. I don't have the right.\"", "Natsume's expression is impossible to read.", "Rose remembers Natsume as having been a much softer person than this.", "\"But... I will say that this is a surprise. Even idiots have their worries, I see. We may have come from different countries, belonged to different organizations, possessed different dispositions, and held different beliefs. Nevertheless, we were all working toward the same goal. Maybe this alliance of ours wasn't so bad after all...\"", "\"Miss Natsume...?\"", "\"Godspeed. Someday, our paths will cross again... Until then, I have a little more babysitting to do.\"", "With that, Natsume kneels and starts tending to Alexia.", "\"Miss Natsume, who are...?\"", "\"You'd best be on your way. She's only fainted, so she'll be up any minute now.\"", "Natsume grins impishly.", "There are so many things Rose wants to ask her.", "It's clear, though, that neither of them has any intention of saying more.", "\"Farewell...\" Rose turns, then vanishes.", "Natsume lays Alexia's head on her lap and sighs.", "\"Is this what you've chosen, Master Shadow...?\" The stained-glass depiction of the three heroes and the demon's tragic form seems as though it's hinting at something."], "c8": ["It's difficult to sustain any emotion over a long period of time.", "Even if you lose something precious to you, you won't be as sad about it in ten years.", "Emotions fade by nature.", "Positive ones are no different.", "It's impossible to make a single moment of joy or happiness last for a decade, either.", "Even anger diminishes with time.", "And thus, I have a theory I'd like to propose.", "Most interpersonal problems will solve themselves given enough time, which means it's fine to ignore them.", "\"Do you know what I was thinking as I waited for you outside your dorm?\"", "\"Nope.\" I answer the intruder's\u2014Claire's\u2014question honestly in my room.", "It seems one day wasn't enough.", "I guess my sister needed longer to cool off.", "\"I visualized beating you to a pulp. In my mind, I could see myself hitting you over and over and over and over. But my anger still doubled every second you kept me waiting.\"", "\"I see.\" Discovering there's a type of anger that grows with time has been a valuable learning experience for me.", "But people eventually die.", "Even though my sister is furious, she won't be able to sustain those feelings to the grave.", "In other words, time is still the ultimate solution.", "\"But you probably don't even care.\"", "\"What? No. That's not true.\"", "I gaze up at the ceiling of my dorm room as my sister sits atop my chest and strangles me.", "Her red eyes and black hair flicker in and out of my vision.", "\"Wanna test to see how long someone can survive without air?\"", "\"When you strangle someone, they pass out because you're cutting off the blood flow through their carotid artery. Air doesn't have anything to do with it.\"", "\"Oh, I see. Well, whatever.\"", "Her grip tightens.", "Actually, this is great.", "I can just go limp and take a nap.", "\"You're thinking of going limp and taking a nap, aren't you?\"", "\"O-of course not.\"", "\"It's written all over your face.\"", "\"I'm sure you're just imagining things.\"", "\"The next time you break a promise to me, I'll make you pay. Understood?\"", "\"I will do my best to become a man who upholds his promises. Now, would you mind getting off?\"", "Claire removes her hands from my neck, but she's still sitting astride me.", "\"They say you're supposed to sit on your dogs when you're teaching them who's boss.\"", "\"Oh, I see. Don't worry. I'm well aware of the pecking order here.\"", "\"Nope. I don't like your attitude.\"", "With that, Claire drops a piece of paper on my face.", "\"What is this...?\" I look at it and discover it's a ticket.", "\"A reserved seat for the Bushin Festival. You can't get your hands on them anywhere.\"", "\"Huh.\"", "\"I'm giving it to you so you can go watch the fights and learn something. I think there's hope for you.\"", "\"I dunno...\"", "\"I see promise in you, and that's why I'm going to help you practice. If you put in the work, you're sure to see something come out of it. And I'm ordering you to put in the work.\"", "\"No. I can't.\"", "\"You can. Are we clear? And you're coming and watching the festival.\"", "\"Okay, okay.\"", "\"Excellent.\" Claire stands up, still looking a little displeased.", "\"Oh, right. You aren't participating this year, right?\"", "\"Excuse me?\" Claire glares at me with murder in her eyes.", "\"I'm entering as Princess Rose's replacement as the academy representative. Don't tell me you didn't know that your own sister was participating.\"", "\"O-of course I knew. I\u2014I was just double-check\u2014Urk!\"", "Claire reaches out with her right hand and grabs my neck in a claw grip.", "Then, she leans in and glares at me.", "You know, that thing delinquents do when they're trying to intimidate someone.", "\"By the way, you remember my birthday, right?\"", "\"O-of course.\"", "\"I would hope so. And you've memorized all my tournament results?\"", "\"O-of course.\"", "\"And the day I won my first tournament?\"", "\"Y-yeah.\"", "\"Good. There are some things you should really make sure not to forget. Things you'll want to remember... if you want to live a long and happy life.\"", "I bob my head up and down.", "Claire gives my head a good rap, then releases me.", "\"I'm going to take the trophy this year, so you'd better make sure you're there.\"", "\"Yeah, absolutely.\" As she leaves my room, she continues glaring at me until she rounds the corner.", "\"Man, I'm tired.\" The primary rounds finally start tomorrow.", "\"Guess I should get some visualization exercises in.\" With that, I close my eyes.", "It's the start of a new week, and the Bushin Festival primaries are here.", "Apparently, Claire went to the venue ahead of me.", "I hold the ticket I got from her and search for my seat.", "The ticket in question is covered in extravagant gold leaf, so it definitely has that \"reserved seat\" feel to it.", "After following the directions on its back, I find myself in front of a room guarded by an ostentatious door.", "For some odd reason, it's segregated from the general spectator area.", "This can't possibly be it, I think.", "After checking with the staff member standing by the door, though, I find that it can.", "They lead me inside with utmost politeness, and the moment I enter the room, I immediately want to leave.", "These aren't just reserved seats.", "These are the hyper-VIP.", "Everywhere I look, I see the faces of famous aristocrats and their families.", "The who's who of the academy is all here, as are the daughter of the current leader of the dark knights, who was in section one of Royal Bushin with me, and the hot second son of a duke.", "Everyone here is notable in some way.", "When I get to my seat, I find myself sitting next to royalty.", "\"Oh, and who might you be?\" It's a woman with fiery red hair and eyes: Alexia's older sister, Princess Iris Midgar.", "\"My name is Cid Kagenou. It would appear I'm sitting in the wrong seat. Please excuse me.\"", "I perform a beautiful spin and try to retreat.", "\"Oh, Claire's younger brother. I guess that must mean you're the one she gave the ticket to.\"", "\"...You know my sister?\" My escape attempt ends in failure.", "If a member of the royal family starts talking to me, it's not like I can just ignore her.", "Alexia being the exception, of course.", "\"I do. We became close during my sister's kidnapping. I'm planning on having her join my Crimson Order after she graduates. Do have a seat.\"", "\"Oh, I couldn't...\"", "\"You have the number correct. Please make yourself comfortable.\"", "\"...Thank you.\" Princess Iris's sincere smile pains me.", "If only her smile had been as full of malice as Alexia's, I could have just flipped her off and bailed.", "\"Claire has told me so much about you. I'm a little jealous of the bond you two share.\"", "\"I think you might be overstating our relationship.\"", "\"Oh, that reminds me. You were friends with Alexia, weren't you?\"", "\"Friends is... one way to put it. It's more like I pick up the gold coins she chucks on the ground.\"", "\"The coins she chucks on the ground?\" Iris repeats.", "\"You know, like when you toss a stick and get your dog to fetch it.\"", "\"Oh, so the two of you played with a dog together? Thank you for taking such good care of her.\"", "\"We didn't play with a dog. I was the... You know what, never mind. Actually, those gold coins came from the royal coffers, so I should be the one thanking you for taking such good care of me.\"", "Upon hearing that, Princess Iris beams happily.", "\"It sounds like you and my sister are like two peas in a pod.\"", "\"Yeah, no, that's definitely not how I'd put it.\"", "\"You know, Alexia was supposed to be here today, but she suddenly said she didn't want to come at the last minute...\"", "\"Ha-ha. Is that so?\"", "\"I'm really sorry about that.\"", "\"Oh, no, no, no. Please, don't worry about it. I mean it.\"", "I make ample use of the free beverage service as we talk.", "The daughter of the dark knights' leader joins our conversation.", "\"Princess Iris, which contestant do you have your eyes on this year?\" The duke's hot second son pipes up.", "\"I'm interested in your thoughts, too.\" Apparently, the two of them know Iris through Royal Bushin.", "\"Well, they all look quite strong, but if I had to pick one\" \u2014Iris touches her cheek as she thinks\u2014", "\"it would be Annerose, the former member of Velgalta's Seven Blades. I recognize many of the other faces from past Bushin Festivals, but this is her first year competing. When I watched her preliminary matches, I could tell she was strong. I'm looking forward to facing her in the second round if we both make it that far...\"", "She smiles, full of confidence.", "\"I watched her fights, too, and man, is she strong. If we fought right now, I doubt I could beat her...\"", "\"Yeah, me, too, but I'm sure Princess Iris can take her. The Royal Bushin method has been getting a bad rap ever since the terrorist attack. If Princess Iris wins here, though...\"", "\"Hey, don't go putting that pressure on her.\"", "\"No, that's not what I meant...\" As the two of them start arguing, Iris cuts in.", "\"It's fine. I was planning on winning from the outset, after all. I'm prepared to carry the weight of the Royal Bushin method, as well as this very country, on my back.\"", "I feel bad for interrupting when things are getting so intense, but I wanna be part of this conversation, too.", "\"Um, is there anyone else who's piqued your interest...?\"I probably come across as socially awkward right now.", "\"Wait, who are you again?\"", "\"He looks familiar... Oh, right, you're that guy who used to be in section one.\"", "\"Ah, now I remember. You were Princess Alexia's...\"", "Iris interjects.", "\"He's Cid Kagenou, Claire's younger brother.\" The other two nod, seemingly satisfied with that.", "\"Unlike Claire, you're the one without any talent, right? Make sure you keep up your training.\"", "\"Your sword work was pretty uninspired, but there's no point comparing yourself to others. Slow and steady wins the race, after all.\"", "\"Thanks for those words of wisdom. So, Princess Iris, anyone else you found interesting?\"", "\"Hmm...\"", "\"L-like, uh, y'know, that Mundane guy that Annerose is fighting in the first round, for example. This, uh, this is his first time participating, too.\"", "I bring up Mundane in the smoothest manner imaginable so I can gauge their reactions.", "Iris's is noncommittal.", "\"Mundane... I haven't seen any of his matches yet, so I really can't say.\" Great.", "That means that Princess Iris doesn't know much about him yet.", "\"Oh, I saw him fight. He was fast but not much else. And his stance was amateurish, so it feels like most of his wins were just dumb luck. Annerose will beat him.\"", "\"I saw him, too, but... He really doesn't seem like the primary-round type. He's got guts but no talent.\"", "The other two have written him off as a scrub, it seems.", "Everything's going pretty much according to plan.", "I've been able to control Mundane's public perception just the way I wanted.", "All the groundwork has been laid.", "Now, the fun starts... \"There is one other person I'm interested in, though she's not a contestant.\" I said my bit, so I'm already satisfied, but Iris pipes up again.", "\"Apparently, the winner of the first Bushin Festival, the elf swordmaster hailed as the War Goddess, is here in the capital.\"", "\"An elf swordmaster... You don't mean...?!\"", "\"She hasn't made a public appearance in over a decade!\" Uh...", "\"I would be surprised to find a single person fighting on that main stage today who doesn't have what Beatrix the War Goddess is doing on their radar.\" Who?", "Whoever this chick is, she certainly wasn't on my radar.", "It's almost time for my fight, so I say I have to go to the bathroom and hurry on over to the players' waiting room.", "Looks like Claire won her first round, and she has a chance of making it pretty far.", "As I walk down the corridor, I pass alongside someone wearing a gray robe coming the other way.", "Suddenly, I stop.", "A moment later, they stop, too.", "We turn around in unison.", "Vibrant blue eyes peek out from beneath the robe and stare straight at me.", "\"You smell like elf.\" The voice is feminine and husky.", "Her faded gray robe is worn and frayed.", "I stay, waiting for her to continue.", "\"Do you have any elf friends?\" Her blue eyes peer into mine as though searching for something.", "\"A couple, yeah.\" I don't see any reason to lie, so I tell her the truth.", "\"There's an elf I'm looking for.\"", "\"Okay.\"", "\"She's cute.\"", "\"Cool.\"", "\"Do you have any idea where she is?\"", "\"That's not a lot to go off of.\"", "\"She should look just like me.\"", "\"Uh-huh.\"", "\"She's my late sister's daughter.\"", "\"Huh.\"", "\"Do you know of any elves who look like me?\"", "\"Um...\"", "\"Do you know of any?\"", "\"Your robe is covering your face...\"", "\"Ah, right.\" She removes her robe, laying her face bare.", "I offer no reaction.", "It's an intentional act on my part.", "After all, she looks a lot like Alpha.", "\"Not ringing any bells. Sorry.\"", "\"Are you sure?\"", "\"Yeah.\" I'll have to ask Alpha about this next time I see her.", "They aren't 100 percent identical, but they look similar enough that I wouldn't be surprised if they were related.", "\"I see.\" She shrugs dejectedly.", "Then, in one fluid motion, she draws her sword.", "There's no bloodlust or wasted motions behind her swing, only certain death.", "As I watch her out of the corner of my vision, I accept what's happening.", "I get it.", "She's gonna stop right before she hits me.", "And sure enough, her blade stops right as it touches my neck.", "All it does is touch it, though.", "She doesn't cut so much as a single layer of my skin.", "Her timing is exquisite.", "\"Whoa?!\" Pretending to go weak in the knees, I collapse to the ground.", "I think that was believable.", "\"Hmm?\" She tilts her head to the side and draws back her sword.", "\"I was mistaken. Sorry.\"", "She gives me a neat bow.", "\"I'd thought you were stronger. What's your name?\"", "She offers me her hand as she speaks.", "\"C-Cid Kagenou...,\" I reply, making my voice tremble as I take her hand and rise to my feet.", "\"I'm Beatrix.\" Beatrix doesn't let go of my hand.", "\"Um...?\"", "\"This is a good hand. I'm sure you'll grow stronger.\"", "With that, she flashes me a pretty smile.", "It resembles Alpha's.", "\"I'm sorry for startling you.\" After apologizing one last time, she turns her back on me and leaves.", "I watch her recede, then mutter \"...I bet she's pretty strong\" to myself before turning around to leave.", "Iris sits in her reserved seat and waits for the match to start.", "She can see the entire stadium from the reserved seating area, and it has a private staircase that leads directly to the arena.", "The two dark knights are already being called to the ring.", "One is the woman with pale-blue hair whom Iris has set her sights on, Annerose.", "The other is a black-haired man named Mundane Mann.", "It's the first time she's laid eyes on him.", "Iris's gaze sharpens when she sees the two of them.", "A man sits down next to her.", "\"It looks like it's about to start.\" He's sitting in Cid's seat.", "\"I'm sorry, but that seat is...\"", "\"Hmm?\" Iris looks up at his face and goes silent.", "She whispers a silent apology to Cid.", "\"Perv...\"", "\"I trust you're keeping well, Princess Iris?\" Perv grins gracefully, but the smile doesn't reach his eyes.", "\"It's like a dream, watching a match with you.\"", "\"What a flirt. Don't you have a fiance e?\"", "\"She seems to have flown the coop, unfortunately. Don't worry, though. Just a little lovers' spat.\"", "Perv lets out a light laugh.", "His looks are handsome for a man around thirty, but something about his smile rubs Iris the wrong way.", "\"Is King Oriana in good health?\" Perv answers Iris's question without missing a beat.", "\"I'm afraid he wasn't able to make it today. He told me he's confident he'll be able to come tomorrow, though.\"", "\"King Midgar plans to start showing up tomorrow, as well.\"", "\"What a coincidence.\" Iris tries to scope out what lies behind Perv's unsmiling eyes, but she can't get a read on him.", "\"Is that the Annerose I've heard so much about?\" asks Perv as he gazes down at the arena.", "\"The one and only.\"", "\"She's the talk of the town. I hear she left Velgalta and is currently in the middle of her journey of training, but I'd love to be able to invite her back to my country.\"", "\"I agree. I'd love to invite a swordswoman of her caliber to stay here in Midgar.\"", "\"Ha-ha. Midgar has plenty of talented dark knights already. Unlike Oriana...\"", "\"That's what our alliance is for.\"", "\"It pains me that we're so reliant on you, though.\"", "\"Is that so...?\" Talking to him is exhausting.", "Iris sighs internally.", "It feels like she's trying to have a conversation with a puppet.", "\"What about her opponent, Mundane?\"", "\"This is my first time watching him fight. The rumors about him aren't flattering, though, and he doesn't look particularly strong.\"", "\"Then Annerose's victory is all but assured.\" Iris's tone grows vague.", "\"Not necessarily. Something about Mundane seems... uncanny.\"", "\"Uncanny?\"", "\"There isn't any other way to put it. He certainly doesn't seem strong, but there's one trait of his that makes it impossible for me to see him as weak.\"", "\"...Oh? What might that be?\"", "\"His absolute confidence. As far as I can tell... it's as though he feels certain he'll win.\"", "\"Hmm... Could it just be hubris?\"", "\"I'm not sure. But there's no hesitation in his eyes. He sees... a path toward certain victory.\"", "\"He sees a path, eh? Can you see it, Princess Iris?\"", "\"No. You?\"", "\"Me? Oh, I'm useless with swords. Don't know my points from my hilts.\"", "\"Is that so?\" As Perv plays dumb, Iris snatches a glance at his well-trained sword arm.", "He laughs bitterly.", "\"I can't hide anything from you, can I? Swordplay is looked down upon in the Oriana Kingdom, so I hope you'll forgive me this little lie. To be frank with you, I'm decent with a blade.\"", "\"Decent, huh?\"", "\"Just decent, yes.\" Once again, Perv's smile doesn't quite reach his eyes.", "\"Now then... why don't you show us how much this \u2018absolute confidence' of yours is worth?\" They look down at the arena.", "\"Annerose versus Mundane Mann!!\" The two names are called out...", "\"Ready? Begin!!\"", "And so it does.", "As soon as the match starts, Annerose immediately charges into Mundane's reach.", "She's well aware of his true skills, and she knows the secret to his strength is his overwhelming speed.", "He destroys his opponents by moving so fast that not even a former member of Velgalta's Seven Blades can track him.", "That's the way he fights, and that's what makes him strong.", "She also knows, however, that in contrast to his speed, his technical skills are lacking.", "In all his victories so far, he's basically never crossed blades with his opponent.", "Why is that?", "One reason is they simply couldn't keep up with him.", "But Mundane's stance is practically that of an amateur.", "She finds it hard to imagine he's ever had any proper training.", "What if the reason is that Mundane himself has avoided doing so?", "What if he's afraid his clumsy sword work will be exposed?", "In other words, maybe he's won all his fights without crossing blades to hide his own lack of proficiency.", "If that's the case, then all she has to do to win is avoid being dazzled by his speed.", "That's the theory under which Annerose is operating.", "The only thing that worries her... is those weights he took off.", "If removing his shackles lets him move so fast that she can't even react... she could end up losing.", "As the fight begins, Annerose makes sure to crush that tiny fear of hers.", "She's fighting an enemy who wins with speed, so all she has to do is restrain his movements.", "If she can do that, victory is hers.", "\"HAAAAAAH!!\" Having closed the gap in a mere instant, Annerose lets out a battle cry and slashes at Mundane.", "There's no way he sees this coming.", "Even so, he blocks the blow.", "He's fast, all right.", "It shouldn't have been possible for him to block the attack in time, but Mundane manages to pull it off.", "Because he's blocking her attack, though, his legs are pinned in place... ...and those are what Annerose has been aiming for.", "\"Uragh!!\" While Mundane's legs are still immobile, Annerose strikes at him again.", "He blocks this attack, too, but Annerose's tempestuous flurry leaves him no room to take advantage of his speed.", "Annerose wears down Mundane's guard a third time, then a fourth, then a fifth, and eventually his stance breaks.", "She's won!", "Certain of her victory, Annerose launches a thrust at her opponent's chest.", "It pierces him... or does it?", "\"Huh...?\" His skin offers her blade no resistance.", "In fact, his entire body vanishes lazily from her sight.", "\"...That was my afterimage.\" She can hear his voice coming from behind her.", "A shiver runs across her shoulders.", "Calm down.", "She carefully turns around.", "She's trembling but commands her body not to let it show.", "\"You're even faster than I thought...\" Her voice is steady.", "At least, she thinks it is.", "As she trains her sight on Mundane, she thinks.", "What should I do?", "His speed far surpasses what she can react to.", "What can she do to overcome it?", "Think of something.", "Anything...!", "Anything at all......!!", "\"What...?!\" Before she knows what's happened, Mundane is gone again.", "Annerose's body responds faster than her mind.", "Her ability to react to the subtle shift in the air isn't birthed from skill or experience but dumb luck.", "Kschhhhh!!", "She feels a terrifying impact and finds herself launched backward.", "She can feel her consciousness start to fade and her sword toppling out of her hand, but she frantically reels them back in and stands up.", "\"Rgh...!\" A pained wheeze escapes her mouth.", "She can see Mundane in her periphery.", "He's holding his sword listlessly and standing stock-still.", "His stance is nonexistent, and he's making no effort to chase her down.", "However, Annerose doesn't see that as arrogance.", "He's just simply that strong.", "\"I'll admit it: You're good.\" Annerose steadies her ragged breath and steels herself.", "Mundane is simply fast.", "Overwhelmingly so.", "Annerose doesn't find that fact unfair.", "After all, speed is just another form of strength.", "Besides, she still has a shot at winning.", "Her odds are slim, but they aren't zero yet.", "If speed is all her opponent has... she just needs to catch him.", "She needs to land a counter.", "The moment Mundane attacks her will be her final shot at victory.", "The problem is whether she'll be able to react in time.", "Luck was the only thing that let her block the previous strike.", "She doubts she can pull that off again.", "She can't rely on chance to snatch this victory; she'll need talent.", "If her reflexes aren't good enough, she'll fall back on experience.", "And if that won't get her there, she'll rely on intuition.", "She'll use any means she can get her hands on.", "As long as she can land the timing... from there, all she'll need to cut him down are the skills she's spent her life building.", "Silently, but with utmost concentration, Annerose waits for the crucial moment.", "It comes.", "There isn't a shred of warning.", "Mundane's body vanishes, and the moment it does... a moment before it does, Annerose swings her sword.", "Nobody is in its path yet.", "But a second later, that changes.", "She's won!", "Mundane appears, and Annerose is certain she's got him.", "Her blade is traveling on an intercept course with his body.", "At that speed, dodging is impossible.", "She's sure of that.", "\"What...?\"She gazes at his movement, dumbfounded.", "He stops.", "It's as though he planned it ahead of time\u2014right before he enters Annerose's reach, he halts.", "Her sword grazes the tip of his nose as it swings through the empty air.", "This is no coincidence.", "It is the product of perfect spacing.", "It is the product of terrifying foresight.", "Annerose thought she'd been timing her counter to match his attack, but that wasn't what had happened.", "He had been timing his attack to match her counter.", "\"I see...\" It's then that she realizes something.", "After that fleeting exchange, she's certain of it.", "Mundane Mann... possesses superlative skill as well.", "Her posture is broken, and his sword approaches her.", "It's the slowest move he's performed that day.", "But though slow... its technique is transcendent, almost to the point of art.", "\"Ah...\" It's beautiful.", "It's also the last thing Annerose remembers seeing before she blacks out.", "\"He's incredible...,\" Perv hears Iris mumble from the seat beside him.", "Down in the arena, Mundane has just taken down Annerose and starts to leave the stage.", "Perv hides the unrest in his heart.", "\"\u2018Absolute confidence'...It seems your intuition was right on the mark, Princess Iris.\"", "\"I never imagined he'd be that good... I find it nigh impossible to believe a dark knight of his skill has gone unnoticed for this long.\"", "\"I concur. Mundane Mann... I'd never even heard his name.\"", "\"And I've never seen that technique, either. It was sharp yet beautiful beyond compare.\"", "\"It doesn't come from any established style, right?\" Perv has never seen a sword move so elegantly in his life.", "He doubts Iris has, either.", "Does this mean a practitioner of an underground style just made his first public appearance?", "\"Not that I know of, although there's no way to know for sure without asking him directly. The surprises never end, it seems.\"", "Iris leans back in her seat, then lets out a sigh as though trying to relieve tension.", "Nobody saw this result coming, so the reserved seating area is abuzz.", "Everyone's attention has shifted from Annerose to Mundane, and the conversation is centered around his next opponent.", "\"Princess Iris, you're up against Mundane in the second round, right?\" Iris smiles.", "\"I am.\"", "\"You sound confident.\"", "\"I do plan on winning.\"", "\"Oh...?\"", "\"Mundane's sword work was fast, sharp, and of unparalleled beauty. Sadly, mine doesn't measure up to his in that regard. Looks, however, aren't what decide matches. If his fight just now is the best he can do, then he's still no match for me.\"", "\"I agree.\" Perv nods, then adds a silent addendum.", "If that was Mundane's full strength, Iris can still win.", "A little skill isn't going to be enough to contain her magic.", "But what if that wasn't his true strength?", "Iris continues, \"In all likelihood, he's hiding something. His posture, stance, and skills are all fake, yet he made it all this way.\"", "\"Knowing all that, you still think you can win?\"", "\"I may not know what his secret is, but I plan on taking him down, secret and all. I have a competitive side, you see.\"", "Iris beams as she stands.", "Her smile bleeds hostility.", "\"I see.\"", "\"Now, I'm afraid you'll have to excuse me. I have a match to get to.\"", "Perv watches Iris leave, then sighs.", "He investigated everyone who might pose a threat to the plan beforehand, but Mundane's name never came up.", "If Mundane is going to interfere, he needs to be disposed of quickly, but... there is no need to rush.", "He can leave that decision until after Mundane's match against Iris.", "Mundane Mann.", "A master of a beautiful, perfected style.", "Perv can't understand how he went unnoticed.", "There must be some reason.", "Some reason Mundane needed to hide his strength.", "Some reason he'd never taken the spotlight.", "He could belong to a school lost to history but passed down from father to son.", "Or no, he could be from the Lawless City and just have faked his papers.", "The Lawless City doesn't belong to any country\u2014it's a hive of evil and greed.", "The Cult has yet to worm its way into the inner circles of any of its three warring rulers.", "If he comes from the Lawless City, that means Mundane must be a member of the Blood Queen's family.", "Given his strength, he has to at least be part of the leadership.", "Perv realizes he needs to run more background checks... There's also a chance that Mundane is affiliated with the Shadow Garden.", "Mundane is a man, though, and the Shadow Garden should have no motive to do anything conspicuous at the Bushin Festival.", "All in all, it seems unlikely.", "One way or another, though, Perv can sense something unfathomable about him.", "He's probably a member of the underworld, just like Perv... \"What's his secret...?\" Perv's murmur is lost in the stadium's clamor.", "\"Mundane, wait!!\" Upon waking up, Annerose rushes down the corridor after him.", "He turns around, and she stops in front of him.", "\"You trounced me back there. I was completely powerless.\"", "She looks up at him and smiles.", "\"I left my homeland to become stronger, and I like to think I've done so. It seems I got a little conceited, too.\"", "She holds out her hand.", "Mundane looks down at it, then slowly extends his.", "\"I learned a lot today. Thank you,\"", "she says.", "\"This was the first time I've had to remove my shackles. You have nothing to be ashamed of.\"", "\"...That makes me proud to hear.\" Annerose smiles again and exchanges a handshake.", "\"Mundane, who exactly are you? How did you become so strong?\"", "He smiles sadly, then averts his gaze.", "He seems to be looking far off into the distance.", "\"I threw away everything... I'm just a fool who pursued strength and strength alone...\"", "\"Mundane...\" Seeing his lonesome expression, Annerose feels her chest tighten.", "He must have had a tragic past that left him no other choice.", "\"You know... if you want, would you be interested in joining the military in Velgalta? I'm sure I could find a post worthy of you.\"", "Mundane just shakes his head.", "\"...I can't walk a path that bright.\" He turns away and begins walking.", "\"Wait! I'm leaving to continue my journey tomorrow! If you change your mind before then, come find me!\"", "Mundane doesn't stop.", "Annerose watches him go, then turns around.", "In this world, greatness is relative, and there's always someone stronger.", "To her, fighting Mundane and watching his sword work in action was an irreplaceable experience.", "His swordplay was polished almost to the point of being an art.", "To Annerose, it looked as though he'd put everything into it.", "She's certain he'll win.", "Before long, the world will know his name.", "He'll climb to the height of heights.", "Right now, all she can do is watch him rise, but she's determined to become stronger.", "Mundane has shown her the path she needs to take.", "Once she becomes stronger, they will meet again.", "Until that happens, she pledges to keep fighting.", "Ahhhhh, that went well.", "Prettttty darn well.", "I was able to focus on making my performance as elegant as possible.", "There was a time in my training to become a mastermind when I pursued a fancy brand of swordplay.", "It was a little bit too graceful, so I don't use it these days as Shadow, but I'm glad the work I put in back then is finally paying off.", "Thanks to Annerose, I'm able to check off about 70 percent of my goals for this Bushin Festival.", "All that's left is figuring out how I'm gonna drop out.", "There are a bunch of choices, though, so I'm at an impasse.", "The simplest route would be to just win the whole thing, but looking at the tournament holistically, this next match against Iris is the best place to stage the climax.", "One option is defeating Iris and then just vanishing.", "That one has a badass feel to it.", "It's the scene where the mastermind defeats someone widely acknowledged as strong, then disappears, leaving them with a simple My work here is done... I'm digging it.", "Also, if I defeat Iris and vanish, my sister has a decent shot of winning the whole tournament.", "But a scenario where I go evil is pretty appealing, too.", "Halfway through my match with Iris, I can go, I'm an assassin from the Assassins Guild... and now your life is mine!", "and start ignoring the rules to go all out.", "That scenario gets bonus points for giving me an elegant reason to exit stage right.", "Still, winning the whole thing really would give me the biggest sense of accomplishment.", "There are plenty of other exciting options to pick from, too.", "I need to give this some good, hard thought.", "As my various choices fill my mind, I make my way back to the deluxe suite.", "When I get there, I find some guy I don't know sitting in my seat, so I decide to bail.", "Claire's match is over already, so whatever.", "After heading back to the dorm, I start running through scenarios."], "c9": ["It's a new day.", "I sit in my reserved seat and sip my free coffee.", "Apparently, nobody except Mitsugoshi has figured out how to make this stuff yet.", "Hats off to them.", "\"Mmm.\" I take mine with loads of milk and sugar, by the way.", "I wasn't huge on the reserved seating at first, but now that I've gotten used to it, it certainly has its perks.", "The friendly maids bring me pretty much anything I ask for free of charge, and it makes me feel kinda like a celebrity.", "As I'm basking in the stadium's energy, Princess Iris makes her appearance.", "\"Good morning.\"", "\"Morning.\"", "\"Is that coffee I see? It's been trendy lately. I enjoy the smell, but the bitterness is a bit much for me...\"", "\"You could always just make it into coffee milk with loads of sugar.\"", "\"Coffee milk...?\" Iris calls over one of the maids and orders one.", "She really is a woman of action.", "\"Oh, this is nice...\"", "\"Right? It's like a magic trick you can use to make every cup of coffee taste the same.\"", "I follow her lead and order myself a fine banquet of toast and eggs.", "If only this world had social media.", "The only way to make this meal better would be if I could upload a smug selfie with the caption \"Eating breakfast in the deluxe suite with royalty!\" I finish eating right as various socialites begin trickling in.", "As the name would suggest, their advent brings with it the beginning of the socializing.", "Being the lowly son of a baron, I am completely left out of the conversation.", "It's fine, though\u2014I'd just as soon stay out.", "So please, Princess Iris, stop trying to be nice enough to include me.", "Things end up getting kind of awkward, but eventually, the second round of the primaries gets underway.", "The socialites take their seats, but right as things start settling down, the door opens up.", "I turn around and see a woman in a faded robe.", "It conceals her face like it did before, but I can tell it's Beatrix.", "She notices me and gives me a little wave, and I reply with a nod and a smile.", "We meet again.", "However, the rest of the socialites' gazes are cold.", "I can practically hear them all thinking.", "Who is this woman wearing a filthy robe?", "Remove her at once!", "The silence is stifling.", "\"Ma'am, I'm sorry, but you can't...\" One of the maids calls out to her but gets interrupted.", "\"It's fine. She's with me. Please come on in,\"", "beckons Iris as she invites Beatrix in.", "Beatrix comes and sits two seats down from me.", "Iris is between us.", "Apparently, that was going to be Alexia's seat, if she was here.", "\"Princess Iris, who is she?\"", "\"Beatrix the War Goddess.\" Iris's answer sends a stir through the socialites.", "\"Is she really...?\"", "\"She said she's the War Goddess...\"", "\"The legendary swordmaster...\" Hey, this is cool!", "I wanna hear someone say That's the legendary Shadow... at some point!", "\"It's been a while since you appeared in public.\"", "\"It has. I'm looking for someone.\"", "Beatrix nods as she answers the socialite's question.", "\"My niece. She looks just like me.\"", "Making sure not to repeat the mistake she made with me, she takes off her hood.", "\"Damn, you're fine...\"", "\"Do any of you recognize my face? I heard this country had sightings of an elf bearing my visage.\"", "\"In this country, huh...? If I saw an elf as fair as you, Beatrix, I'd never forget it.\"", "\"Have any of you seen her?\"", "\"Sorry...\" The socialites all shake their heads.", "\"I see...\" Disappointed, she puts her hood back up.", "Iris apologizes to her.", "\"I'm so sorry. Everyone here is well connected, so I thought you might have some luck asking them.\"", "\"It's fine. I'm an elf, so I have time.\"", "\"By the way, did you watch any of the Bushin Festival?\"", "\"Not much.\"", "\"Oh. Well, based on what you've seen, did any of the contestants catch your interest?\"", "\"My interest... Hmm...\" She glances around as she thinks.", "\"Cid.\" She points at me.", "\"Um, Beatrix...?\"", "\"Cid caught my interest. Someday, he'll be strong.\"", "I instantly deny it.", "\"Oh, no, I definitely won't.\" I can feel everyone staring at me.", "\"That boy's going to become strong...?\"", "\"It's true he was in the same class as me, but his fundamentals were kinda... eh...\"", "\"He is Claire's little brother, but he doesn't take to it the way she does...\" Finally, Iris cuts through the strained atmosphere, and that's the end of that.", "\"If that's what you think, Beatrix, then I'm certain you're right.\" Still, though, the socialites eye Beatrix skeptically.", "I can see them glancing at one another, as though asking themselves, Is she the real deal...?", "To them, she probably just looks like a dirty wanderer.", "The way I see it, though, she carries herself naturally in the best sense of the word.", "Her form, her personality, her bearing, and her strength as a whole are all so unembellished that nobody realizes her real power.", "\"Now, would you mind if I was forward enough to ask you to point out anything interesting you notice during the matches?\"", "\"Okay.\" Thanks to Iris's deference, though, it starts to feel like Beatrix is getting a bit of respect.", "The air is still a little strained as the second round of the Bushin Festival primaries begins.", "When Perv walks into the deluxe suite, a figure in a gray robe turns and stares at him.", "The person's face is hidden beneath a hood, but given the build, he can tell it's probably a woman.", "After looking at Perv, she turns her gaze to King Oriana, who's standing beside him.", "Her assessment is brief.", "\"It stinks.\"", "\"That's pretty rude, lady.\"", "\"Sorry.\" Perv suppresses his beating heart as he glares at the woman.", "He's using a highly addictive herb to make a puppet of King Oriana.", "He has no complaints about the drug's effectiveness, but it has the downside of causing its users to exude a characteristic aroma.", "However, he's masking the smell with perfume.", "There's no way anyone has found him out.", "\"Perv, this is Beatrix the War Goddess.\"", "\"She's...\" Beatrix the War Goddess.", "Perv heard she'd made her way to the capital, but here she is in the flesh.", "She certainly doesn't look talented enough to merit the title of War Goddess.", "Her robe is faded, and her manners are nonexistent.", "After a single word of apology, she's already back to watching the match.", "But even though she doesn't look strong... if she's as talented as the rumors say, there's a chance he just can't perceive her strength.", "Given that Princess Iris acknowledges her as the real thing, he should assume she's right.", "He knows that the War Goddess's face looks reminiscent of the great hero Olivier's.", "If he could just get a good look...", "\"It seems I was being quite offensive without realizing it.\"", "\"Me, too.\" Perv and Beatrix both apologize, and things settle down a bit.", "Now everyone will think Beatrix's verbal gaffe had been a reference to Perv himself.", "Perv desperately wants to get off the topic of the smell.", "He never imagined Beatrix would show up at the Bushin Festival, though.", "And today of all days... He quietly clicks his tongue.", "\"King Midgar, I trust you're well today?\"", "\"Oh, very.\" Perv changes his tone and offers salutations to King Midgar, who's sitting atop a large throne placed among the deluxe suite's seats.", "After exchanging a set of standard greetings, King Oriana sits down beside King Midgar.", "Perv takes the next seat down and turns his attention to covering King Oriana's conversational back.", "The king can answer simple questions, but anything more complex will give him trouble.", "Perv has no choice but to guide the conversation and prevent King Oriana from screwing up.", "That said, everything has gone according to plan so far.", "His primary objective is securing Rose.", "During their last encounter, she was already starting to show symptoms.", "Her blood would undoubtedly prove a valuable asset to the Cult.", "In order to ensure he gets her, he made a point of properly incentivizing her.", "Specifically, he threatened to have King Oriana kill King Midgar if Rose doesn't show up at the Bushin Festival.", "It was just a threat, of course, but Perv wouldn't particularly mind following through with it.", "King Midgar's death would incite a war, and the Oriana Kingdom would be finished.", "However, they already had plans underway to install a puppet leader in Midgar afterward.", "If all went well, everything would fall into his lap.", "There was a risk of abject failure, sure, but the potential rewards were worth it.", "The only thing that made him feel uneasy was the fact that Iris was there.", "Perv could see she distrusted the hollow King Oriana.", "There was a chance she'd be able to stop him.", "However, he could easily remove that threat by simply conducting the assassination during Iris's match.", "There shouldn't have been any additional impediments.", "But now Beatrix is here.", "Getting rid of her will be tough, and she's probably even stronger than Iris.", "If Beatrix tries to stop him, she'll be a greater obstacle than Iris.", "Also, he still doesn't know what Mundane is after.", "Mundane is undoubtedly a denizen of the underworld, meaning he must have some objective.", "No matter how hard Perv searches, though, he keeps coming up blank.", "This guy's a pro.", "Perv needs to be on high alert.", "He lets out a heavy sigh.", "Everything's going according to plan, but there are too many variables.", "He doesn't feel remotely at ease.", "Still, if Rose just shows up, everything's golden.", "He won't need to take any risks.", "And she's sure to.", "She can't just abandon her homeland and her father.", "Perv knows her well enough to be certain of that.", "True, there are a bunch of variables, but none of them matter.", "Everything's going to be fine.", "Perv keeps telling himself that as he shifts his focus to the match.", "Time passes, and Claire Kagenou wins her bout handily.", "\"Oh-ho...\" He hadn't taken much notice of her before, but it turns out she's unexpectedly skilled.", "Her magic is powerful, yet she doesn't let it control her.", "As strong as she is now, she has the potential to become even stronger.", "\"It would seem... that Claire's gotten better.\" After watching Claire take down her opponent, Iris stands from her seat.", "\"My match is starting, so I'm afraid I must be off.\" Everyone around her offers words of encouragement, and the dark-haired boy sitting next to her stands as well.", "\"I gotta hit the can.\" Nobody much cares about his comings and goings.", "Well, nobody except Beatrix, who watches as he leaves.", "His name is Cid, and he's utterly unremarkable.", "Perv was a little curious how he ended up sitting next to the princess, but other than that, he doesn't see much reason to care.", "He immediately forgets about Cid and turns his attention to the next round.", "Iris and Mundane's bout is a very important one for Perv.", "He needs to figure out Mundane's strength and agenda as well as take advantage of the opportunity Iris's absence poses.", "After the two of them leave, a little time passes... and Iris and Mundane take the stage.", "When Iris arrives on the field, she's greeted with a thunderous round of applause.", "Her popularity makes it abundantly clear which one of the pair is the tournament's protagonist.", "She stares at Mundane and composes herself.", "Mundane Mann is obviously going to be a fierce opponent.", "Even now that she's standing across from him, she can't get a read on his strength but senses something unfathomable lurking within him.", "His appearance is out of sync with his actual ability.", "It makes him seem irregular, like he's hiding his true nature.", "However, Iris still is confident she can prevail.", "She has no other choice.", "She believes it's her duty to win the Bushin Festival.", "She isn't skilled at politics, and she herself knows that.", "The only thing she can do for Midgar is act as a symbol of its strength.", "It's her duty to instill faith in people that as long as Iris Midgar is around, the kingdom will be safe.", "Even if that means letting herself be carried on the shoulders of others.", "She's at peace with that.", "Her strength is her only asset, and she was content letting herself be used as a political pawn.", "Until recently, that is.", "That was a price she paid for being carried by others for so long: She stumbled the first time she tried to stand on her own two feet.", "Fearing for her country's future, she'd tried to assemble the Crimson Order but found herself powerless, unable to secure personnel or funds.", "If she tried gathering members gradually, it would take ages before the Crimson Order lived up to her expectations.", "Even if she attempted to involve herself in politics, people would still just treat her with superficial respect while using her for their own ends.", "That's why she's opted to leave the politics to others and gather strength in areas in which she's more skilled.", "For example, she knows that popularity among the masses is a strength in and of itself.", "She's also gathered allies she trusts to be the brains behind her Order.", "All that's left todo is win the Bushin Festival and solidify the people's love for her, and she's sure things will turn out well.", "With that belief firm in her heart, she readies her sword and waits for the announcer.", "Her condolences to Mundane, but she plans on going all out from the get-go.", "Even if he does have something up his sleeve, she intends to end the match before he has time to pull it out.", "\"Iris Midgar versus Mundane Mann!! Ready? Begin!!\"", "She wastes no time.", "As soon as the match starts, she steps forward, then stops.", "\"...What?\" A tiny cry of confusion slips from her lips.", "For some reason, Mundane seems farther away than he did before.", "Has she misjudged the distance between them?", "That's her first thought, but she knows she didn't.", "Still, it feels like the gap between them has widened.", "She doesn't know why.", "Maybe it's just nerves.", "Whatever the cause of her confusion, though, it definitely stops her.", "She tries starting over.", "She resets her emotions, readies her sword, and goes for a simple feint.", "When she's sure she's drawn Mundane's gaze, she rushes him.", "However... \"...?!\" Once again, she stops in her tracks.", "She leans backward as though dodging something, then leaps back.", "She had seen a sword.", "She had seen Mundane's sword severing her neck.", "However, Mundane's actual sword hadn't moved an inch.", "And of course, her neck was still attached to her shoulders.", "\"Why...?\" Iris can't keep the question inside.", "She's sure she saw Mundane's blade.", "The moment she advanced, she saw his sword and the colossal power lurking within it cutting her throat.", "She thought he'd read her like a book.", "And she'd seen her own defeat... no, her death.", "However, Mundane is still just standing there.", "His sword isn't even at the ready.", "It's as though it had all been just an illusion.", "She can't comprehend what just happened.", "Iris slowly paces around him, trying to figure out what's up with his sword.", "One lap, two laps, three laps... They're the exact same distance from each other as before.", "So why does Mundane look so far away?", "\"...Aren't you coming?\" Mundane asks.", "Yet she can't take that step.", "Every bone in her body is screaming for her not to go.", "\"Hrrraaaaahhhhhhh!!\" She roars in an attempt to dispel her hesitation.", "After rocking back and forth, she puts one foot forward.", "It's the fastest step she's ever taken.", "But\u2014he's looking at her!!", "Unblinking, Mundane's eyes are trained on her.", "His gaze shifts, as though implying something.", "\"...Aahhhhhhh!!\" The moment it does, Iris's instincts force her to stop.", "Doing so places a massive strain on her body, and her knee joints make an unpleasant noise.", "She stops in spite of that, then practically tumbles backward.", "She's certain she just saw Mundane's sword running her through.", "\"No...\" However, her chest doesn't have a scratch.", "There's no sign Mundane's weapon ever moved.", "\"You're kidding...\" He's still just standing there, not even bothering to put up a defense.", "\"...What's wrong?\" he asks.", "Faced with something unknowable, Iris's body shudders.", "She has to do something.", "Unease and fear swirl up inside her.", "Mundane's gaze shifts again.", "As he stares straight ahead, the tip of his sword twitches as though he's predicting the future.", "The moment it does, Iris envisions her arm getting lopped off.", "\"Oh no...\" Now she finally realizes.", "Mundane had simply been making feints.", "He understood her movements in their entirety, then used his eyes and minute movements of the tip of his sword to send her a warning.", "If you don't stop, you'll get cut, he'd been telling her.", "That had been enough to make her hallucinate.", "That's how real the illusion had been.", "Iris recalls something her mentor once taught her: \"An expert's \u2018lies' seem all too real.\" And sure enough, she'd fallen for her mentor's feints time and time again.", "Mundane's moves felt even realer than her mentor's.", "Was that even possible?", "Iris isn't conceited enough to think she's the strongest person in the world.", "She understands that greatness is relative.", "Objectively speaking, though, she's supposed to be one of the best dark knights alive.", "To be able to drive a woman like her into a corner with feints alone?", "That would make Mundane, without a doubt, the world's strongest fighter.", "It would represent a degree of skill no one could hope to match.", "Was that really possible?", "Like hell it was.", "Iris forces herself to believe that.", "Don't get rattled.", "He hasn't even raised his sword yet.", "Don't go deciding the match on mere speculation.", "\"...Don't stop me,\" Iris quietly instructs her instincts.", "After steeling her resolve not to stop, she takes that one step forward.", "Something whizzes through the air.", "A second passes.", "Then, a fierce impact rocks Iris's body.", "Her mind goes blank for a few seconds, and before she knows it, she's looking up at the sky.", "She's collapsed faceup in the dead center of the arena.", "What happened?", "She had been unable to see Mundane's blade, but he'd caught her in his gaze the moment the impact landed.", "It's a miracle she's still holding on to her sword.", "She forces her unresponsive torso to rise.", "\"Iris Midgar... I expected more from you.\" She finds a sword being thrust into her face.", "Mundane is looking down at her.", "She can't detect any emotion in his eyes.", "They're close enough that she could reach out and touch him, yet he seems impossibly far away.", "Far, far away... Ah... so that's what it is.", "Iris finally understands.", "The reason he looks so far away isn't because of an illusion or a hallucination.", "From the very start, he's been looking down on her from the pinnacle of heights.", "Even if she extends her entire hand, he's standing eternally beyond her reach... Iris's sword falls from her grip and topples to the ground with a clang.", "The noise echoes throughout the silent stadium.", "Iris Midgar is defeated in a single blow.", "The fact of it has everyone frozen in shock.", "Not a sound can be heard.", "That is, until the click, click, click of footsteps rings out from behind her.", "The stadium begins to stir.", "The footsteps continue forward.", "Click, click, click.", "Then, they come to a stop.", "The audience's eyes are glued to the person walking.", "Even Mundane looks a little surprised.", "\"Father, I've returned.\" There stands the Oriana Kingdom's beautiful princess, Rose Oriana.", "Rose doesn't spare a glance for Iris and Mundane.", "Her honey-colored eyes are glued to the deluxe suite.", "The legendary Iris Midgar was beaten by a single sword stroke.", "That simple fact stupefies Perv.", "He knows members of the underworld more skilled than her, but could even the strongest dark knight with whom he is familiar really bring Iris Midgar down in a single swing?", "No.", "Unless they caught her by surprise or got incredibly lucky, there was no way.", "In other words, something unthinkable just happened.", "Because Mundane took out Iris with one attack, it means he's the strongest dark knight Perv knows of.", "But he's practically a child...!", "Nothing wounds Perv's pride as much as getting overtaken by someone he considered below him.", "The astonishment in his heart is quickly painted over with fiery envy.", "His brain races to reject Mundane.", "Mundane's one-hit takedown of Iris must have been dumb luck.", "Even if it wasn't, it probably has to do with their compatibility in combat.", "Iris just happened to be a good match for Mundane, that's all.", "Iris's strange behavior gives him cause for doubt, too.", "She stopped all of a sudden as though wary of something, and she paced around Mundane for seemingly no reason.", "Perhaps she's been under the weather, or maybe Mundane took advantage of some weakness.", "There are plenty of ways he can deny Mundane's strength.", "And yet... Perv found Mundane's swordplay daunting.", "He realizes that he and Mundane see the world through different lenses.", "Their assessment and approach to combat are fundamentally different.", "Perv knows he could spend centuries training and never be able to catch up with that boy.", "That's how polished Mundane's swordplay is.", "It's like he's kneaded together the best parts of countless other martial arts and refined them into a single, incomparable masterpiece.", "As Perv tries to disavow Mundane's mastery, his heart is filled with the innocent admiration of a child.", "Mundane's sword style has a devilish charm that draws Perv.", "It's like how he was captivated by his instructor's sword work as a boy.", "He grinds his teeth.", "He refuses to accept this.", "He can't be sure this boy's skills reign supreme just yet.", "Perv is no stranger to masters.", "However, he still hasn't met the Cult's leadership.", "Mundane can't possibly be the strongest.", "\"What did you think of the fight, Beatrix?\" he asks, hoping to hear her denounce him.", "The blue eyes peeking out from within her robe are fixed on the boy.", "The look in them... is one of wonder.", "\"...I want to fight him.\"", "\"What?\" Just as Perv is about to ask for clarification, though, a stir runs through the crowd.", "He turns to look at the arena, and there, he sees... \"Rose Oriana...\" His mouth curls up into a sneer.", "She's come.", "What a stupid girl.", "The king and kingdom are beyond saving.", "The puppet king is no more than a shell, and thanks to that, they control the country's leader.", "Showing up here without even realizing that fact reveals a na\u00efv ete unbefitting a princess.", "Covering his mouth so his twisted grin won't be noticed, Perv steps forward with King Oriana in tow.", "\"My dear Princess Rose. I see you've decided to return.\"", "There's a long staircase leading straight from the deluxe suite to the arena.", "Perv and King Oriana start descending it.", "\"Rose, I'm so glad you're back. Come up here.\"", "On Perv's instructions, King Oriana speaks.", "His words are hollow and lifeless.", "As Perv descends, he issues orders to his men with a glance, telling them to be ready to capture Rose.", "The princess begins ascending.", "\"Father, I've come to apologize. For everything I've done and for what I'm about to do... I've made many mistakes, and I'm sure I'll make many more. But as the princess of Oriana, and as your daughter... I'm walking down a path I believe in.\"", "Rose's voice is trembling.", "Her eyes are moist with tears.", "But they're still filled with resolve.", "Seeing that, Perv takes a step back.", "He should send in the king first.", "If he uses the king as a shield, the girl will be powerless.", "As long as he has his puppet king, his plan can succeed without a hitch.", "\"I forgive you for your sins,\" replies King Oriana, but Perv hadn't told him to say that.", "\"Thank you, Father.\" Afterward, everything happens in a flash.", "Rose draws her blade, and Perv reacts by hiding behind the king.", "His men make their move.", "Rose is too fast for them, though.", "Perv's eyes widen in shock.", "\"Wh\u2014?!\" Abandoning everything, the girl stabs King Oriana through the heart with her rapier.", "\"As the princess, and as your daughter... this will be my final responsibility.\" The king had been reaching out as though to embrace Rose, but halfway through, his hand slumps lifelessly in the air.", "The rapier passes cleanly through his heart and into Perv's chest.", "\"Thank you for everything.\" She wrenches the rapier free.", "Blood gushes from the king's heart as he topples to the ground.", "Tears burst from Rose's eyes.", "\"H-how dare youuuu!!\" Perv screeches.", "Blood pours from Perv's chest, too, but his wound isn't lethal.", "His rage stems from the loss of his puppet.", "His whole plan\u2014in ruins.", "\"Get herrrrrrrr!!\" His men charge at Rose.", "She doesn't attempt to flee.", "As Perv watches her place the tip of her rapier against her throat, he smiles.", "She won't really\u2014 His face goes pale.", "\"No! No! NOOOOOOOOOOOOOOOO!!\"", "But just as Rose is about to pierce her neck... \"\u2014So that's the choice you've made.\" A beautiful, almost artistic flash cleaves through the air, slicing through both Rose's rapier and the swords of the men bearing down on her.", "Standing there is Mundane, the most unassuming of men.", "\"Y-you're...\" However, the sword he's holding is as black as night."], "c10": ["Until she saw that beautiful arc, Rose had been prepared to die.", "If she was captured and turned into a pawn, her father's death would have been in vain.", "She wasn't going to let that happen.", "Death is petrifying.", "However, it was the only option she had left.", "She'd been allowed her indulgences as a princess, but she still intended to carry out her royal duties.", "This was to be her final task.", "She'd been prepared for that.", "\"Y-you're...\" However, the instant she sees that boy beautifully cleave through everything, she's reminded of a memory from her childhood.", "\"The time for lies is over...\" And with that, Mundane rips off his face.", "The crowd stirs.", "Beneath Mundane's skin sits an all-too-familiar mask.", "Black liquid swirls and spirals around him.", "When the spiral subsides, it leaves a man wearing a jet-black long coat in its wake.", "\"Shadow...,\" someone murmurs.", "But to Rose, he isn't Shadow.", "He's the man who made her want to take up the sword.", "The one whose blade embodies beauty.", "\"Shadow, are you...? Are you the Slayer?\"", "The memories flash through Rose's mind.", "Once, long ago, Rose was kidnapped.", "Her father had official business to attend to in Midgar, and she'd secretly snuck out of their inn to play outside.", "As she was playing with the commoner kids, though, everything suddenly went black.", "Then, she passed out.", "When she came to her senses, she found herself confined in a small, dark room.", "Her hands and legs were bound with rope, and there was a gag stuffed in her mouth.", "Although she was outwardly free of injury, her body trembled from worry and fear.", "She could hear bandits talking in the room next door.", "\"Man, I knew her clothes looked nice, but we got us the princess here!\" They'd probably figured it out from her personal effects.", "Now they knew who she was.", "\"You did it again, boss! We hit the jackpot!\"", "\"This wasn't luck, dumbass! This was all skill!!\"", "Crude laughter echoed out.", "Terrified for her safety, Rose fell into despair.", "The bandits had two options: They could either use her as a hostage to bargain with Oriana, or they could sell her to someone who knew what she was worth.", "She was certain they'd pick the latter.", "Although she was valuable as a hostage, mere bandits would be hard-pressed to use her right.", "By selling her, they could make some easy gold.", "Then, she would end up falling into the hands of political enemies... That prospect terrified her.", "She twisted her body to try and undo the ropes.", "She shouted through her gag.", "But her efforts were for nothing.", "\"Hey, sounds like the princess is up.\"", "\"Go check on her, then.\" She could hear footsteps drawing closer.", "Her muffled shouts turned to screams as tears began running down her cheeks.", "But just as the door was about to open... \"Yahoo!! Gimme all your money!!\"", "She heard a child's voice saying some rather unchildish things.", "\"Wh-who the hell is this kid?!\"", "\"He just showed up outta nowhere! Kill his ass!!\"", "\"C'mere, you!!\" Something made a sound as if it had sliced through the air.", "A scream rang out.", "\"Wh-who the hell is this?! He's too strong!!\"", "\"What?! He took out three people at once?!\"", "\"You guys can help me practice my fancy swordplay.\" Something ripped through the air again.", "Rose could smell blood.", "She timidly peeked through the crack in the door.", "Outside, there was a boy wearing a sack over his head and a group of bandits fleeing.", "\"If you run, you're just bandits! But if you don't, that means you're trained bandits!!\"", "\"Ah, ahhhhh!\"", "\"P-please\u2014!!\" The sack-clad boy swung his sword.", "\"...?!\" The arc was so beautiful that Rose forgot what was going on and simply stared at it.", "She didn't know much about swords, but that technique... was far more beautiful than any work of art.", "The blade sliced skillfully through the bandits' necks, and the screaming stopped.", "Dumbfounded, Rose just gazed at the boy with the sack.", "\"Man, I came all the way out here, and they don't have any gold. Huh? Oh, there's more of them.\"", "Noticing Rose's gaze, the boy in the sack opened up the door.", "Light streamed into the room as their eyes met.", "\"Ah, a kidnapped kid. Rough day for you, huh?\"", "The sack boy swung his sword.", "Rose was captivated by the elegance of his sword work.", "\"Bye now. Take care on your way home.\"", "The sack boy began briskly walking off.", "Before she noticed, Rose's bindings had been cut.", "She called out to him in desperation.", "\"W-wait!\"", "\"Hmm?\" The boy stopped and turned back toward her.", "\"Wh-who are you?\"", "\"Me? Hmm. I'm still in the middle of my training, so... just think of me as a fancy bandit slayer who happened to pass by.\"", "\"The Fancy Bandit Slayer... Um, I want to thank you somehow.\"", "\"Uh... All right, well, then I'd appreciate it if you didn't tell anyone about me.\"", "\"O-okay, I won't.\"", "\"Cool, I'm counting on ya.\" And with that, the Fancy Bandit Slayer vanished.", "\"The Fancy Bandit Slayer...\" He had saved her from the depths of despair and, in doing so, changed her very life.", "Out of admiration for the beauty of his swordplay and the way he lived his life, Rose took up the sword that very day.", "It's a precious memory of her childhood, one that she's never told anyone.", "It's Rose's little secret.", "In that moment, though, she gives voice to that secret for the first time.", "\"Shadow... you're the Fancy Bandit Slayer, aren't you?\" Shadow doesn't answer.", "But to Rose, his silence is answer enough.", "Ever since he was a child, he's fought tirelessly against evil.", "He's been saving people behind the scenes this whole time, just like he once saved Rose.", "Shadow's words run through Rose's mind.", "If true strength comes not from power but from the way one lives their life... then Shadow must be strength incarnate.", "Rose feels ashamed at having chosen death so readily.", "She could still have fought, but living is painful, and failure is terrifying.", "She wanted to put an end to it all.", "She had sought refuge in death.", "But she could still fight... because she admired his beautiful swordplay and his way of life.", "\"Your battle is yet unfinished...\" Shadow thrusts his jet-black sword forward.", "It impales the stadium's wall and creates a large hole.", "\"Go...\"", "\"Got it!\" Rose scoops up her rapier and leaps without hesitation through the opening.", "She still has things she needs to do.", "\"S-stop her!!\"", "\"No one else goes through...\" Shadow plants himself in front of the hole.", "Thick clouds roll in at some point and obscure the sun, blanketing the stadium in shadows.", "Thunderclaps echo within the clouds.", "Drop by drop, rain begins to fall.", "\"What are you waiting for?! After her!!\"", "bellows Perv, and his men burst into action.", "They move to surround the hole's guard, Shadow, then leap at him in unison.", "The moment they do, an obsidian arc cleaves through them.", "A single blow is all it takes to send all of Perv's handpicked dark knights flying.", "\"This can't...\" So this is Shadow.", "True to the rumors Perv heard, he cannot be contained by the riffraff.", "He presses down on his bleeding gut and falls back.", "\"H-help! Is there anyone?! Anyone who can take him down?!\"", "he cries.", "The only response he hears is the sound of the rain.", "The knights of Midgar surround Shadow from a distance, but that's all.", "There isn't a single person present who plans on making light of the man who defeated Iris.", "The rain is now a bona fide deluge.", "Massive droplets cascade from the skies.", "The lightning reflects off Shadow's drenched long coat.", "Each time it strikes, his figure is illuminated amid the gloom.", "\"I will go.\" As the gray-robed woman speaks, she leaps into the air.", "She casts her robe off while airborne and lands with her longsword drawn.", "\"Beatrix the War Goddess...,\" someone murmurs.", "The beautiful blond elf readies her blade in the rain.", "She's wearing nothing more than a loincloth and a breastplate, and the lightning makes her pale, drenched skin flash.", "Shadow and Beatrix silently gauge the distance between themselves as they square off.", "A violent thunderclap underscores the commencement of their battle.", "Shadow stretches out his obsidian katana to match Beatrix's longsword.", "He slashes.", "His black blade cleaves through the air.", "The rain parts.", "For a brief instant, a trail of empty, rainless air follows in his sword's wake.", "He misses.", "\"Oh...?\" Beatrix reacts instantly by taking a half step back to dodge Shadow's strike.", "Then, she counters.", "Her deadly thrust bears down on Shadow.", "Beneath his mask, Shadow grins.", "He evades the attack by leaning to the side, then swings his sword as he pulls back upright.", "But she recovers quickly, too.", "As she retracts her longsword, she stoops low to avoid Shadow's blow.", "Then, she counters once more.", "The only thing either of them hits is the rain.", "Slashes fly through the air, each rending a path through the downpour.", "The droplets spread in little splashes as they're sliced aside, casting beautiful streaks as the lightning illuminates them.", "Everyone in the stands holds their breath as they watch the battle unfold.", "It's like watching a dance.", "The rain and the lightning leave etchings in the sky of a battle that no normal eyes can follow.", "It's a beautiful sword dance.", "It's plain to see that the two combatants stand at the apex of swordsmanship.", "The spectators want the dance to last forever, but Shadow brings it to an end.", "\"It seems this sword cannot reach you...\" He puts some distance between them, then stares at Beatrix.", "Beatrix doesn't chase him down, instead choosing to steady her breathing.", "Her chest heaves up and down.", "\"Incredible...\" She lets out the word of admiration as one would a sigh.", "Her blue eyes are fixed on Shadow.", "For a moment, they just stare at each other.", "\"Allow me to show you my true blade.\" With that, Shadow returns his black sword to its original length.", "This is his preferred distance.", "\"Here I come.\" As soon as he speaks, he instantly steps forward.", "The field between them vanishes.", "\"...?!\" Then the impact.", "The moment he closes the gap, Beatrix immediately abandons attacking and shifts all her focus to defense.", "However, she can't even see his sword.", "It's not just her.", "Nobody can.", "And his assault doesn't cut so much as a single raindrop.", "\"\u2014Rgh!!\" The impact sends her flying, and she collapses in the rain.", "She can't see the blow but manages to block it on instinct alone.", "But only barely.", "She ends up sprawled unceremoniously on the ground, unable to mount a counterattack.", "She promptly rises to her feet, preparing herself to pursue.", "The thunder roars, and as the lightning flashes, Shadow disappears.", "In that one instant, he's right in front of her again.", "He swings his imperceptible blade.", "Beatrix focuses every cell in her body on Shadow's sword, then finds herself besieged again.", "\"\u2014!!\" She can't see it.", "Ignoring the mud caked on her face, she stands back up and leaps away to put some distance between them.", "Instinct and luck are the only things that let her narrowly deflect the strike.", "She has no reason to believe she can fend off the next one.", "No follow-up comes.", "As she looks at Shadow readying his blade beneath the lightning, she thinks, Why can't I see it?", "It's not just that he's fast.", "There's something off about his sword.", "After searching her memories of a lifetime of battles, she finds the answer.", "Shadow's techniques are natural.", "Of the many types of swordplay in battle, fast swords are certainly menacing.", "However, even a quick swing starts with some preliminary action.", "Even if it doesn't, you can still tell when the attack will land with enough experience.", "As long as you're conscious, you can react to it.", "No, the most dangerous type of attack is the kind that comes from outside your perception.", "It doesn't need to be fast.", "You just need to be unaware of it.", "And Shadow's performance is natural.", "There's no bloodlust, no hesitation, no swagger.", "His swings are just... natural.", "And people can't pick them out.", "Just like she isn't actively conscious of the individual raindrops falling, she isn't cognizant of Shadow's sword.", "\"Incredible...\" Beatrix regards the depth of Shadow's mastery with utter admiration.", "His skill lies at the bottom of an abyss nobody else can reach.", "She prepares herself for her inevitable defeat.", "\"Show me your fangs, War Goddess...\" Shadow brandishes his ebony blade.", "Beatrix knows she can't block it.", "\"Wait.\" A clear voice interrupts their battle.", "\"I, too, will join the fray.\" Iris stands there with her sword drawn.", "\"Princess Iris...\" Beatrix looks at Iris as though she wants to say something.", "\"I know. I know I'm not strong enough...\"", "Iris smiles to hide her frustration.", "\"But I won't back down. I'm not going to stand by and let him flee after laying waste to the Bushin Festival. I have my pride, and so does Midgar...\"", "She glares at Shadow.", "\"I'll stop him from moving, even if it costs me my life. When I do, Beatrix, use that to bring him down.\"", "\"...Understood. I'll follow your lead.\"", "Beatrix sympathizes with Iris's resolve.", "Fire burns in their eyes as they square off against Shadow.", "\"Come, then... Show me your fangs.\" Shadow lowers the tip of his sword and assumes a defensive posture.", "As Iris waits for an opportunity, she slowly closes the gap.", "For a little while, the only sounds are the rain and the thunder.", "\"Please let me land a blow.\" A massive thunderclap rings out, and Iris makes her move.", "She charges forward, aiming for Shadow's neck with her longsword.", "However, all it takes for Shadow to escape her range is to take a half step backward.", "He watches the attack miss and turns his attention to Iris's next move.", "But Iris's sword extends.", "By letting go of it, she forcibly lengthens its range.", "Shadow immediately shifts gears.", "He abandons his attempt at a counterattack and instead knocks Iris's sword aside.", "Her offense is ruined.", "That's what anyone would think.", "However, she stoops down and uses the momentum from her charge to grab Shadow's torso and grapple him.", "It's a valiant move, one designed to restrain his movements in exchange for her own life.", "He won't be able to evade in time.", "\"Bravo.\" Shadow's knee smashes into Iris's face.", "There's no way she could have known, but hand-to-hand combat is Shadow's specialty.", "Iris crumples to the ground.", "However, she still achieves her mission.", "When he lashes out with his knee, there is a brief moment when Shadow becomes immobile.", "That one moment is all she needs.", "\"Hyah!!\" Beatrix's slash bears down on him.", "She pours all her strength into her longsword and slams it into his ebony blade.", "A thunderous noise explodes as Shadow's katana, hand, and arm are sent reeling backward.", "His posture is shot.", "This is her chance.", "Beatrix's follow-up is impossibly fast.", "But Shadow releases his sword faster.", "He makes the split-second decision to cast aside his weapon, then vanishes.", "He's outside Beatrix's vision.", "\"Is he below me?!\" After leaning forward so low he's practically crawling, he grabs Beatrix by the waist.", "However, his movements are miles more polished and flowing than when Iris attempted the same move.", "He's too close for her longsword to connect.", "Shadow hoists Beatrix up with ease, then slams her into the ground.", "\"Gah!!\" The stone floor shatters.", "The air in her lungs is forcibly expelled.", "But in that split second, she has a chance to use her sword.", "As her consciousness wavers, she swings it.", "Shadow pays her no heed, instead lifting her up and slamming her down again\u2014but halfway through, he lets go.", "Beatrix's sword meets empty air, and she crashes hard into the stadium wall.", "A sickening noise resounds as her body is embedded in it.", "Then, a slice cuts through the air as something pitches down from the sky.", "Shadow reaches out and grabs it\u2014his ebony sword.", "It's as though he planned it all out... Lightning illuminates the bodies of the two downed women.", "Even together, Beatrix and Iris are helpless.", "The shock of that overwhelms the spectators with confusion and fear.", "\"...It's over.\" Shadow looks down at his two opponents, then turns to leave.", "\"S-stop right there...\" He hears a voice and stops.", "\"I... I can still fight...\" Iris staggers to her feet.", "Beatrix follows her lead, brushing away the debris from the wall as she rises in turn.", "\"As can I...\" The two swordswomen rise.", "However, Shadow merely casts a glance at them before walking off again.", "\"Stop right there! Are you going to flee?!\"", "Hearing Iris, Shadow stops.", "\"...Flee?\" he repeats.", "Bluish-purple light fills the stadium.", "\"Wh\u2014?!\"", "\"...!!\" It's a torrent of magic, whirling as it floods out of Shadow's body.", "Swallowed up by the magic, the rain stops.", "\"This can't... Is this even real...?!\"", "\"This is... impossible.\" The unimaginable force stops Iris and Beatrix in their tracks.", "With power like this, annihilating the entire stadium would have been trivial for him.", "Iris, Beatrix, and the spectators are all equally helpless in the face of such might.", "\"Why would I need to flee...?\" Nobody can possibly stop him.", "They have no choice but to acknowledge that.", "\"Why...?\" asks Iris, her voice shaking.", "\"If you had all that power... you could have killed us whenever you wanted.\"", "\"...I achieved my objective. I have no interest in your lives... The only ones we butcher are our enemies...\"", "Shadow looks at Iris as he makes his magic converge on his sword.", "\"Make sure you remember... who your true enemy is.\" With that, Shadow releases the energy into the sky.", "A blinding light floods the stadium and spreads out across the entire capital as it blots out the heavens and blasts away the rain clouds.", "When it fades, all that's left is a clear blue sky.", "Shadow is nowhere to be seen.", "The clouds, the rain, the lightning, and Shadow himself... It's like they were never even there.", "\"Remember who my true enemy is...? Shadow. Who are you...?\"", "Iris gazes up at the cloudless sky as she ruminates on the words with which Shadow left her.", "What was his objective...?", "Who was her true enemy...?", "Far up above, a massive rainbow stretches across the firmament.", "Rose runs through the rain.", "She has no destination in mind.", "She just keeps running, and before she notices, the rain stops.", "She's in a forest.", "Sunlight streams through the gaps in the dampened trees.", "Rose collapses against a trunk and catches her breath.", "All sorts of thoughts are racing through her head.", "She thinks about her father, about her homeland, about what's going to happen to her now... All of those worries and more get tangled up inside her, sending her heart into disarray.", "She may have had her reasons, but that doesn't change the fact that she's now a criminal guilty of murdering a king.", "She isn't going to deny that, and she has no intention of seeking death to flee responsibility.", "She fully intends to shoulder the burden of committing patricide alongside her duties as a princess.", "But it's all too much for her.", "The more she thinks, the more the anxiety makes her shiver.", "The weight of her responsibilities is crushing her resolve.", "She can still fight.", "She has to fight.", "But what can a frail seventeen-year-old girl really hope to accomplish...?", "She buries her head in her knees.", "Then, she curls into a ball and trembles.", "She stays that way until the sunlight takes on the vermilion hue of twilight.", "At that point, she tells herself it's time to go and stands.", "She doesn't know where she's going, but she knows she has to press on.", "Right when she faces forward and starts walking, a lovely voice calls out from behind her.", "\"You have two choices you can make.\"", "\"?!\" Rose whirls around and finds an elf wearing a jet-black dress.", "She has blond hair, blue eyes, and features so elegant they could have been chiseled from stone.", "\"You're... Alpha...\" Alpha crosses her arms and smiles mysteriously.", "\"You can fight alone, or you can fight with us. But you have to choose.\"", "\"With you...?\" Rose's enemy and the Shadow Garden's enemy are one and the same.", "However, having the same foe is no guarantee they'll be able to work together.", "Still, it's true she's short on options.", "People will be after her soon.", "If she's going to fight alone, she needs somewhere to hide.", "For now, her only option on that front is taking refuge in the mountains... Well, she could also head for the Lawless City, she supposes.", "But in this moment, she's the criminal who murdered King Oriana.", "If she goes to the Lawless City, people will come seeking the bounty on her head.", "\"Can you save the Oriana Kingdom?\"", "\"That depends on you. Right now, we have no reason to act on your behalf. If you want to save your country, you'll need to prove your worth.\"", "\"My worth...?\"", "\"Your worth... and the Oriana Kingdom's worth...\"", "\"And if I prove those, can you save it...?\"", "\"It's within our means.\" Alpha's reply is succinct.", "All she's doing is presenting Rose with her choices.", "She's neither giving Rose advice nor offering her aid.", "The decision is Rose's to make.", "\"...Is the Slayer... I mean, Shadow the leader of your organization?\"", "\"...He is.\" An image of the boy who saved her as a child and tirelessly fought evil flashes through her mind.", "She decides to believe in him.", "\"...Then my blade is yours.\"", "\"I see. Welcome aboard. Now follow me.\"", "There's no emotion in Alpha's voice as she leads Rose deeper into the forest.", "\"Can I ask you a question?\" asks Rose as she follows her.", "\"You may.\"", "\"Who exactly is Shadow...?\" He's a man with an iron will who's fought evil since he was a child, and he has so much power, he can actually vanquish it.", "But Rose doesn't know anything about the secret to his strength, his beliefs, or even his identity.", "He's utterly shrouded in mystery.", "\"If you want to know, you'll need to earn our trust.\"", "\"Your trust...\"", "\"But if you end up being worthy of it, you're sure to find out eventually...\" Afterward, the two of them proceed through the forest in silence.", "They make their way through a dense fog untouched by the sun's light.", "\"Where are we? Is this...?\"", "\"These are the Abyss Woods,\" Alpha answers.", "Rose has heard the stories.", "Nobody knows where it is, but rumor has it that anyone who enters can never leave.", "Rose can't even make out Alpha, who's supposedly right in front of her.", "The magic-rich fog that's almost blue or purple is messing with her senses.", "\"This fog is caused by a sigh of a dragon...\"", "\"A dragon...\" They were practically a thing of legend.", "Once in a blue moon, someone would report seeing one, but the records of the most recent dragon hunt were over a century old.", "\"Long ago, he came to this land and battled the Mist Dragon.\"", "\"...Who's he?\"", "\"In his youth, he was powerful enough to defeat the dragon, but he couldn't slay it. So the dragon accepted him and let out the sigh.\"", "So this fantastical bluish-purple mist was from the dragon... \"By the way, it's a deadly poison.\" Rose twitches.", "\"Don't get too far from me. If you do, you'll die in a heartbeat.\"", "\"Understood...\" As they trod through the thick fog, the air suddenly clears.", "\"Wait, this is...\" The sun's rays beat down upon a venerable white castle.", "\"This is Alexandria, the ancient capital destroyed by the Mist Dragon. This is our base.\"", "Alexandria, the old capital.", "Rose had once seen that name in a book.", "But no book could have possibly described its beauty.", "Massive fields spread out around the capital, and they're all full of crops she's never seen before.", "Women are enthusiastically harvesting the produce.", "\"That one there is a cocoa field. It's the main ingredient in chocolate. We may have you working in it at some point.\"", "\"Wait, chocolate? You mean that Mitsugoshi is part of the Shadow Garden?\"", "Alpha only smiles.", "Currently, Mitsugoshi remains the only place that sells chocolate.", "Nobody knows anything about the ingredients or manufacturing process.", "The two of them pass through the portcullis and enter the castle.", "\"Is Lambda around?\"", "\"I'm here.\" A woman responds to Alpha's call and kneels before her.", "\"We have a new recruit. Train her.\"", "\"As you wish.\"", "\"Start by showing us your strength. I'm sure you'll be able to forge your path quickly...\"", "After speaking to Rose, Alpha takes her leave.", "Rose remains behind with the woman named Lambda.", "She's an elf with dark skin, gray hair, and gold eyes.", "She's tall, and her muscles are evident even through her black bodysuit.", "Also, her eyes are sharp and her lips are plump.", "\"I'm Lambda, your instructor. Come.\"", "\"Yes, ma'am.\" Rose follows Lambda, and they exit through the rear of the castle.", "Many girls are fervently training here.", "\"Wow...\" All it takes is a single glance for Rose to realize\u2014every single one of them is powerful.", "\"Number 664, number 665!\"", "\"Present, ma'am!\"", "\"Yes, ma'am!\" Two of the women come running at Lambda's summons.", "One is an elf, the other a therianthrope.", "\"Instructor, you called?\" asks the elf, practically shouting.", "The therianthrope stands at attention beside her.", "\"This is the new recruit. I'm putting her on your squad.\"", "\"Understood!\"", "\"Number 666, strip.\"", "\"Huh?\" Rose doesn't understand what had just been said to her.", "\"Number 666 is you. Here, your number is your name.\"", "\"I'm number 666...\"", "\"If you got that, then hurry up and strip.\"", "\"What?\"", "\"Don't make me repeat myself!\" Immediately, Rose finds her clothes sliced off her body.", "It happens in the blink of an eye.", "Now she's buck naked.", "\"Wh-what are you doing?!\" Rose squats down in an attempt to cover herself.", "\"From today on, you're the scum of the world. You're nobody. Discard your name! Abandon your clothes! Throw away everything so you can become the perfect soldier!\"", "Lambda throws a dark lump at Rose's feet.", "It's a springy black slime.", "\"Number 664, teach the worm how to use it!\"", "\"Yes, ma'am!\"", "\"Hmm? What is this?\"", "A piece of paper flutters up from the tatters that were once Rose's clothes.", "Instructor Lambda picks it up and holds it in front of Rose.", "\"That's...!\" It's the wrapper from the Tuna King sandwich Cid gave her.", "The moment she sees it, all the bottled-up feelings she has for him begin bursting out.", "He was her first love.", "He'd fought her in the preliminary tournament, saved her life in the terrorist attack, and gone on a journey with her.", "She considers each of those memories irreplaceable.", "A mere week ago, she'd dreamed of taking his hand in marriage.", "But she can't go back anymore.", "Their paths will never cross again.", "\"What's with that look? I told you to throw everything away!\"", "Lambda shreds the paper before Rose's eyes.", "The scraps catch on the wind and soar high up into the sky.", "The fragments of a dream that will never come to pass... Drops of tears begin spilling from Rose's eyes."], "c11": []}}

  const an_s1 = {"s1": {
        "e1": [
            {
                "name": "Akane Nishino",
                "subtitle": "I must have fallen asleep.",
                "start_time": "0-00-24.380000",
                "end_time": "0-00-26.710000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1Aitol8rnBFHtiOPSGzekleuuGD4_IUIz/view?usp=drivesdk"
            },
            {
                "name": "Akane's Butler",
                "subtitle": "Miss?",
                "start_time": "0-01-12.750000",
                "end_time": "0-01-13.750000",
                "name_variant": "Akane's Butler",
                "url": "https://drive.google.com/file/d/1_jh9FzYawqnw12d6xHoG4L7QC_aJe-cR/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "It's nothing.",
                "start_time": "0-01-21.790000",
                "end_time": "0-01-23",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/182zIlk7gTN8xs8ADQGL0YkFuEjsk9PKn/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Let's go.",
                "start_time": "0-01-25.500000",
                "end_time": "0-01-26.710000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1RqBuPURtcnRLAhxu2GSThqFuRSN-VSKX/view?usp=drivesdk"
            },
            {
                "name": "Akane's Classmate",
                "subtitle": "Good morning, Nishino-san.",
                "start_time": "0-01-46.710000",
                "end_time": "0-01-48.250000",
                "name_variant": "Akane's Classmate",
                "url": "https://drive.google.com/file/d/15Epwe1h7mrETNsqlwtY3QDmuWne3RSAP/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Good morning to you, too!",
                "start_time": "0-01-48.250000",
                "end_time": "0-01-49.630000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1TNwU9t32u5xjcmcExwRuU-vb3y3sSzcG/view?usp=drivesdk"
            },
            {
                "name": "Akane's Classmate",
                "subtitle": "Good morning, Senpai!",
                "start_time": "0-01-49.880000",
                "end_time": "0-01-51.830000",
                "name_variant": "Akane's Classmate",
                "url": "https://drive.google.com/file/d/1caMD7jmET7xyigzFCacI18RFzN0astOl/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Thank you, good morning.",
                "start_time": "0-01-51.830000",
                "end_time": "0-01-53.460000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1yDfcZBfsUe_YwoT4pzurzykICJqwPd2w/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "There was a boy that I despised.",
                "start_time": "0-02-00.290000",
                "end_time": "0-02-03.040000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1UAkdSgZTOdHSnKPVTyL_zuKze1g6gzme/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Good morning, Kageno-kun.",
                "start_time": "0-02-05.080000",
                "end_time": "0-02-06.540000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1qol5M_oMgFABehzGHPA_Jv9C9hSuG__F/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "His grades were just below average.",
                "start_time": "0-02-06.790000",
                "end_time": "0-02-08.420000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1YTTTnHHOfZnHoXjVvBPS8SH7CpcndPaN/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Athletically, he was just below average.",
                "start_time": "0-02-08.540000",
                "end_time": "0-02-10.130000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1Gpip4AtJqsdwde_vuqibpaDSQfPZbcu7/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "His looks were exceedingly ordinary.",
                "start_time": "0-02-10.130000",
                "end_time": "0-02-12.250000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1siH4oIgSSntSvfzwRsVlQQ62mt1uI2J0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Good morning,",
                "start_time": "0-02-12.250000",
                "end_time": "0-02-13.460000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1bczjzYW1sMOHogUIc4Wwphw95yJcLtg3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Nishimura-san.",
                "start_time": "0-02-13.460000",
                "end_time": "0-02-14.670000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1U_1ZpOkCW11boEkaJkql-wYbN7nvSdaH/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Excuse me, Kageno-kun.",
                "start_time": "0-02-19.960000",
                "end_time": "0-02-21.790000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1mAZnmqIUxCVFJV2-tDLCKWBauaCq9vtT/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "What is it, Nishimura-san?",
                "start_time": "0-02-21.790000",
                "end_time": "0-02-23.670000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1FgHjS8GWwUc6kU_7nELo9nIW4Ff1NbVV/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "My name...",
                "start_time": "0-02-23.670000",
                "end_time": "0-02-25.040000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1ZtedoSjcmVMsqEMrCBIcSMThdfkrxtK_/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "It isn't Nishimura.",
                "start_time": "0-02-25.040000",
                "end_time": "0-02-26.880000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1VWA5cJD6jkb4lQVwnXuV12lD6ZG8LfME/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "What?",
                "start_time": "0-02-28.710000",
                "end_time": "0-02-29.710000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1wfsfzzK_-VXD7oIxlo_ZHpwHQJnl94t2/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "My name....",
                "start_time": "0-02-33.920000",
                "end_time": "0-02-35.130000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1M9qsuXlSq3OJuX15OHmNGTnEZ9mg9eMm/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "It isn't Nishimura.",
                "start_time": "0-02-35.130000",
                "end_time": "0-02-36.920000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1JJxF3ERfZwyCB42a1N2dau4DXUgtg4ro/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "What?",
                "start_time": "0-02-37.540000",
                "end_time": "0-02-38.540000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1ONJtqXUtgjLgi1IYYShlHuywhLWta3Sq/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "It's not Nishimura.",
                "start_time": "0-02-39.080000",
                "end_time": "0-02-40.960000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1dkS45QWfLD1vxjqvmEyqH08eVUmUtnf5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Oh, I got it wrong?",
                "start_time": "0-02-41.540000",
                "end_time": "0-02-43.330000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1N6sG475fXqnpbcTlrJOYpkPe4aaJNGaM/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Yes, my name is-",
                "start_time": "0-02-43.500000",
                "end_time": "0-02-45.330000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1nC_DygK6Bx0Q0lRx7sQQ2iIT3DcLSDPH/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Oh, hold on, I remember now.",
                "start_time": "0-02-45.330000",
                "end_time": "0-02-47.330000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1OphcAk1UjOsKPUxNovGpiN0CAyfG0qjq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "You were technically a named NPC, weren't you?",
                "start_time": "0-02-48.290000",
                "end_time": "0-02-51.170000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1T5f1EMq_Gq2IyWD-OElEiAF10Plho8nq/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "\"Named\" what?",
                "start_time": "0-02-51.500000",
                "end_time": "0-02-53.170000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1HgxsI3-lLosuzwqChxueZDGy71TSjs_K/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Sorry, talking to myself.",
                "start_time": "0-02-53.170000",
                "end_time": "0-02-54.710000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1tUTRR6vt1_CFRpOK56AfNxzdJ7RA1cO3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I'm pretty good at remembering the names of all the important characters.",
                "start_time": "0-02-55.460000",
                "end_time": "0-02-59.380000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1nZJURKS7TuEtnLp_Nbt5VQ-J94FOsPIL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "But I haven't been getting enough sleep.",
                "start_time": "0-02-59.380000",
                "end_time": "0-03-01.130000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1bG2Nk7kDTARFd9H4Kgcc5MzsoXEviKmv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "So I guess I got careless.",
                "start_time": "0-03-01.670000",
                "end_time": "0-03-03.380000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1Djr9SDiTXXT3NpzNp99YWQMutamFnCdg/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "A careless mistake, I see.",
                "start_time": "0-03-04.290000",
                "end_time": "0-03-05.920000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1GcI2cX1Bu-apxBTlx7huIR3gY2NMxReL/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "You have been in my class, sitting right next to me for three months.",
                "start_time": "0-03-05.920000",
                "end_time": "0-03-08.880000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1UcdliE_X44TENq0k-3SnPGZbhsoU5QYo/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Three months!",
                "start_time": "0-03-08.880000",
                "end_time": "0-03-10.210000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1t9B8l5k0q8uZu6D7wxU4FhHkKiMowdOG/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "That's okay, everybody makes mistakes.",
                "start_time": "0-03-10.630000",
                "end_time": "0-03-13.710000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/16UG87IEe9bmVFZYoIeTP1Uh_BM4EJX9B/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Yeah, sorry...",
                "start_time": "0-03-14",
                "end_time": "0-03-15.460000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1SC8HgG55I8x1Zzh0EMXOcoonraGY28KU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Nishitani-san.",
                "start_time": "0-03-15.920000",
                "end_time": "0-03-17.130000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1_QfE2RJuGqc15TdP3g7cZ6hRY0veGr3U/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "I ain't Nishitani, jerk!",
                "start_time": "0-03-17.130000",
                "end_time": "0-03-18.830000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1Pt6KbBHtNWUnqjt0jEtC0ROdn_EBP43u/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "It's Nishino.",
                "start_time": "0-03-19.170000",
                "end_time": "0-03-20.380000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1ifR2jmqAaNZ7ebezh030TgxoJ10_pJQD/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "I'm Akane Nishino.",
                "start_time": "0-03-20.880000",
                "end_time": "0-03-23",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1jPpUGYnxehfAfh-Lqsr9zGoyR4m8PUMQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Oh, well, see you later, Nishimura-san.",
                "start_time": "0-03-29.420000",
                "end_time": "0-03-31.290000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1s0Ajs5uhwca6YstFP9QwZfKcqtk4hH-C/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "It's Nishino! You went backwards!",
                "start_time": "0-03-31.290000",
                "end_time": "0-03-33.790000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1oUMBVdfiA76FKPvNCsTRTDeNAxI9QsTl/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "His most unforgivable crime was not his failure to get my name right.",
                "start_time": "0-03-38.500000",
                "end_time": "0-03-42.670000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1-z-aiQ8vgYW8v1d5jHl5VtJEz04zQXPC/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "He never looked at me.",
                "start_time": "0-03-43.170000",
                "end_time": "0-03-45.540000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1a98ZbazSISiaWnZsmkYhjuWB6lMSSbhL/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "He turned his eyes in my direction, but they were always distant,",
                "start_time": "0-03-46.250000",
                "end_time": "0-03-50.080000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1JbP3SsTnVhzc_Hgfqq4HI49xhnjneMmF/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "like he was looking at some different, far-off place.",
                "start_time": "0-03-50.080000",
                "end_time": "0-03-52.250000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1nCdzNAwT0H7Unhbx4q7HsEslYTAdIJ_H/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "When I realized that about him, my hatred was complete.",
                "start_time": "0-03-52.790000",
                "end_time": "0-03-56.250000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1yWnb9VpXN0rGGRlXJChyUfRJXsVxPn6o/view?usp=drivesdk"
            },
            {
                "name": "Akane's Classmate",
                "subtitle": "Akane! You're playing the lead in the upcoming Monday-night drama, right?",
                "start_time": "0-03-56.420000",
                "end_time": "0-03-59.540000",
                "name_variant": "Akane's Classmate",
                "url": "https://drive.google.com/file/d/1t-C-AgpOe8SHrUj_fxjYXNwbFSI1Al4h/view?usp=drivesdk"
            },
            {
                "name": "Akane's Classmate",
                "subtitle": "That's so cool!",
                "start_time": "0-03-59.540000",
                "end_time": "0-04-00.830000",
                "name_variant": "Akane's Classmate",
                "url": "https://drive.google.com/file/d/1f7Ayw8B9Sz9mvguv5r9TazXED2tMDMbI/view?usp=drivesdk"
            },
            {
                "name": "Akane's Classmate",
                "subtitle": "How many shows have you done now?",
                "start_time": "0-04-00.830000",
                "end_time": "0-04-02.250000",
                "name_variant": "Akane's Classmate",
                "url": "https://drive.google.com/file/d/1jTe3B6bYbskxm2nbiFsMsPaFZx3VfhRJ/view?usp=drivesdk"
            },
            {
                "name": "Akane's Classmate",
                "subtitle": "You're even busier than you were last year!",
                "start_time": "0-04-02.250000",
                "end_time": "0-04-04.420000",
                "name_variant": "Akane's Classmate",
                "url": "https://drive.google.com/file/d/1mqVQEBNjmS0Uf4Ce-TdEPuuU3KylhC4_/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Please! I'm so nervous about it, I could die!",
                "start_time": "0-04-04.420000",
                "end_time": "0-04-07.830000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1PVVHGsMSA8D2rHvyrXxQwKdS8qexpvtK/view?usp=drivesdk"
            },
            {
                "name": "Akane's Classmate",
                "subtitle": "I'm definitely gonna watch!",
                "start_time": "0-04-07.830000",
                "end_time": "0-04-09.210000",
                "name_variant": "Akane's Classmate",
                "url": "https://drive.google.com/file/d/1_bgWTwPwIiVEUK25ekFZF2SaqPHrH7QI/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "I had done everything in my power to avoid associating with Kageno-kun.",
                "start_time": "0-04-10.630000",
                "end_time": "0-04-14.040000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/17QDfS1gLs6NYX8WdKh4Ls2oQebwPVsvA/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "If I could have had my way, I would have ignored him entirely.",
                "start_time": "0-04-14.630000",
                "end_time": "0-04-17.170000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1qYKEH1X6IRWJmfA4kVorrDL2YxeQgBK_/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "But there were reasons that I wanted to avoid making a big deal of it.",
                "start_time": "0-04-17.330000",
                "end_time": "0-04-20.080000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1XFENdgO3lXcR69qH2Oxj1RRdt6TWj0Ro/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "20,553... 20,554... 20 thousand-",
                "start_time": "0-04-21",
                "end_time": "0-04-24.790000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1l2S4opnB4GWS6APxmnlR0ks5hE05jyqi/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "When I was in middle school,",
                "start_time": "0-04-36.130000",
                "end_time": "0-04-37.920000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1p4JU3uIZ8r1qMGpqDNzKjBPZK6ev0nyE/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "I had to take a break from show business because of a scandal.",
                "start_time": "0-04-37.920000",
                "end_time": "0-04-41.540000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1eYdJjuxqlevwb7Ubml8-ud-Oub0X9IL_/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Ever since the incident...",
                "start_time": "0-04-45.210000",
                "end_time": "0-04-46.960000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1yrf87bIJq5-sXMhWdb0x3VDGiyrEfv9l/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "I've been hiding behind a mask.",
                "start_time": "0-04-47.420000",
                "end_time": "0-04-50.710000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1Vb37nLBqwiiArl712evwPIdgilRCAycn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Nuclear...",
                "start_time": "0-04-51.500000",
                "end_time": "0-04-52.540000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1pLk_rPjbeoyZNUL76Pu8HhiegSVdwkBZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "The limits of living things...",
                "start_time": "0-04-52.540000",
                "end_time": "0-04-54.250000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/16dJfl5cqal7VmkbBNbDcSPTIJ-J3-QDx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "More power...",
                "start_time": "0-04-59.830000",
                "end_time": "0-05-02.130000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1TfqxqSWX7-YeVzurktQGCyFEZ7VtWrx8/view?usp=drivesdk"
            },
            {
                "name": "Teacher",
                "subtitle": "Will anyone volunteer to tally up the school festival survey answers?",
                "start_time": "0-05-04.080000",
                "end_time": "0-05-07.250000",
                "name_variant": "Teacher",
                "url": "https://drive.google.com/file/d/1Ri17YRpu6fJvxPm4UFz8he5EMA6I7TIr/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Oh, Sensei, I can-",
                "start_time": "0-05-07.250000",
                "end_time": "0-05-09.330000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1n-CcZXqSm5abyhRoCzIau5Kx23JyNUvm/view?usp=drivesdk"
            },
            {
                "name": "Teacher",
                "subtitle": "Oh, but Nishino-san, you have makeup lessons right now.",
                "start_time": "0-05-09.330000",
                "end_time": "0-05-12.210000",
                "name_variant": "Teacher",
                "url": "https://drive.google.com/file/d/1aq8AEUgZAIMg8CohQ-T7REAQ8QNI0Lnr/view?usp=drivesdk"
            },
            {
                "name": "Akane's Classmate",
                "subtitle": "Because you've been so busy lately.",
                "start_time": "0-05-15",
                "end_time": "0-05-17.420000",
                "name_variant": "Akane's Classmate",
                "url": "https://drive.google.com/file/d/1iIwnvAVI_4lhxGEsdIzDYLyKVAO6KSwC/view?usp=drivesdk"
            },
            {
                "name": "Akane's Classmate",
                "subtitle": "This is what makes you so darn lovable, Akane.",
                "start_time": "0-05-17.420000",
                "end_time": "0-05-19.960000",
                "name_variant": "Akane's Classmate",
                "url": "https://drive.google.com/file/d/1390kOZBdK9lPtq9-fiqYRrc5Hr43fMCr/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Come on, don't laugh so much.",
                "start_time": "0-05-19.960000",
                "end_time": "0-05-21.920000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1gFhxRa0StSNFtDmOUirKLFAvitmDQOE5/view?usp=drivesdk"
            },
            {
                "name": "Teacher",
                "subtitle": "Then, um, you, sitting next to her.",
                "start_time": "0-05-21.920000",
                "end_time": "0-05-23.500000",
                "name_variant": "Teacher",
                "url": "https://drive.google.com/file/d/1lhjnIcPFbkWV34nwIz7HBRCysAl6sWMP/view?usp=drivesdk"
            },
            {
                "name": "Teacher",
                "subtitle": "If you would?",
                "start_time": "0-05-23.500000",
                "end_time": "0-05-24.880000",
                "name_variant": "Teacher",
                "url": "https://drive.google.com/file/d/12tj-G9mXcsIXxstVgB5tm2u31hFMpTir/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Yes, ma'am.",
                "start_time": "0-05-24.880000",
                "end_time": "0-05-25.880000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/16XDNkvoeNuproAFD6vBMJVs-eLuVf6Vc/view?usp=drivesdk"
            },
            {
                "name": "Student",
                "subtitle": "Okay, time for club!",
                "start_time": "0-05-26.750000",
                "end_time": "0-05-28.460000",
                "name_variant": "Student",
                "url": "https://drive.google.com/file/d/1K8Ofsi6fI_SLfgfAMpq2vKy-b_yO0dHg/view?usp=drivesdk"
            },
            {
                "name": "Student",
                "subtitle": "Wanna stop by Mitsugoshi on the way home?",
                "start_time": "0-05-28.460000",
                "end_time": "0-05-30.630000",
                "name_variant": "Student",
                "url": "https://drive.google.com/file/d/1tQxR1M626q8ualMmla6VCOSBWtB6P9KN/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "I play the teacher's pet so the teachers will like me.",
                "start_time": "0-05-31.130000",
                "end_time": "0-05-35.380000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1mHHyf_PzahfdPwsGBef10iHHTF-KwX_J/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "I play the popular girl so the students will like me.",
                "start_time": "0-05-35.630000",
                "end_time": "0-05-38.830000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1G4_OzVMPX3SWdf1ypve6xY7lZ5-J2zGS/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "I've been very careful to make sure no one hates me.",
                "start_time": "0-05-39.420000",
                "end_time": "0-05-42.540000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1KEUiKQi-tK-3vKbExg5LEqLoQLoDCvLV/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "That's how I've lived my life up to this point.",
                "start_time": "0-05-43.710000",
                "end_time": "0-05-46.630000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1mO7v9CFPI4HW7xC1JM5-yspUQtsPimvP/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "He's not answering.",
                "start_time": "0-06-54.500000",
                "end_time": "0-06-55.710000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1aGQeXGYbca-_ceS67sc8XWejg02hZENl/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "I haven't walked home since the incident.",
                "start_time": "0-07-12.790000",
                "end_time": "0-07-15.790000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1-dRpQ2yIb29XowNLigoKcUwxkD7SBN2k/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "Akane Nishino, I presume?",
                "start_time": "0-07-35.790000",
                "end_time": "0-07-37.830000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/12Avi3ZHAFG7pfWeYaDE9vGmWwbtq_82B/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Why?! How?!",
                "start_time": "0-07-40.040000",
                "end_time": "0-07-41.460000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1nKPdRu-DCX7CpuDBJuMLXMKXrdB-ItpN/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Not again!",
                "start_time": "0-07-42.250000",
                "end_time": "0-07-43.460000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1llTSEwSrg7YFlrZhsQnvgA2YJ6fQ6xQE/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "No!",
                "start_time": "0-07-49.250000",
                "end_time": "0-07-50.250000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1sOpW57ufPpWzwRI-9W7sxER39jb04lbu/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "Come on, stop struggling.",
                "start_time": "0-07-54.170000",
                "end_time": "0-07-55.710000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/11lBmGKcBbZnX6mDpkcQYOgc7R3f2XeQw/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "It finally kicked in.",
                "start_time": "0-08-09.630000",
                "end_time": "0-08-11.330000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1obeEfAA_PDHQ3v9VeP0gZfJ-ZN5amwEj/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "All right, get her in the car.",
                "start_time": "0-08-11.330000",
                "end_time": "0-08-13",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/11Co1pr6oBv4WxbTDG9wIbWaESdwLcm-O/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "Huh? Don't order me around, outsider.",
                "start_time": "0-08-13",
                "end_time": "0-08-15.710000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1m9GmSoJv6Qi9th_5Wp6Nr7U4ScnX1s-8/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "You know you shouldn't do that:",
                "start_time": "0-08-42.080000",
                "end_time": "0-08-43.710000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1D2s1oJpLgY57aH0VTXkIzjZaoaw6twhA/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "The daughter of the head of the Nishino Zaibatsu, wandering the streets alone at night.",
                "start_time": "0-08-43.710000",
                "end_time": "0-08-48.670000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1yaCXtSRVe1XYWCHr-HsbctbGcfmrao12/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "You might get caught by some unsavory characters.",
                "start_time": "0-08-48.670000",
                "end_time": "0-08-51.290000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1qe07pK_VtWfpD-t-Y_RmiUVq8YspvDl6/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "Just stay there and don't try anything. We sent the ransom note.",
                "start_time": "0-08-51.540000",
                "end_time": "0-08-54",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1UYXJ3HZ79vq8Hz9WlbkU9iBZMsxqdZ-r/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "As soon as we get the money, you're free to go.",
                "start_time": "0-08-54",
                "end_time": "0-08-55.750000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1vm7ZdwTExcMXCRzcCKCFZ36WlMnXL8u-/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "Or that's the cover story, anyway.",
                "start_time": "0-08-55.750000",
                "end_time": "0-08-58.040000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1orwiyKSwBx3UgZ0P1gBkt4dj-5opZP9E/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "Seems like your old man's made a lot of enemies.",
                "start_time": "0-08-58.040000",
                "end_time": "0-09-01.380000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1nLMfkODGqRmH1oPMbDIeDcGEq62rJzyn/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "Hey, shut it.",
                "start_time": "0-09-01.380000",
                "end_time": "0-09-02.630000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1E1xWS2v9X-x2DQmR7KC6YQP3hBP1yx6E/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "Huh?",
                "start_time": "0-09-02.630000",
                "end_time": "0-09-03.830000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/17BgQPVK593DEUdRwSO-Mi2cMu61MyRRS/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "You shut it, outsider.",
                "start_time": "0-09-04",
                "end_time": "0-09-05.330000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1bZApEqqeP43DiBeP3NbPZGmjce7_SmPd/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "You think you can talk down to me?",
                "start_time": "0-09-05.330000",
                "end_time": "0-09-07.040000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1z_TEPbabOcX_ZU120yNt-nRGvx-3i3h_/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "I said stop talking, you outdated gangster clich\u00e9.",
                "start_time": "0-09-07.040000",
                "end_time": "0-09-10.500000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1qyIF1QpIKnrTJqQOTr4u3FZHVhtkB9c0/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "This is so annoying.",
                "start_time": "0-09-29.460000",
                "end_time": "0-09-31.630000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1z37ZetD3-B9fJSBE2FY9bPugnxoUjfxU/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "I finally caught my lucky break, and now it's all ruined.",
                "start_time": "0-09-32.830000",
                "end_time": "0-09-36.040000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1HA45kiPzeuH0X-AfnlouQFQ0ELx9_P45/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "Why don't you help me feel better?",
                "start_time": "0-09-37.210000",
                "end_time": "0-09-39.210000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1Y8tt_lqhYURaC0PWiKGRzoZD8CtqLtDx/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "Gimme a little fan service.",
                "start_time": "0-09-39.210000",
                "end_time": "0-09-41",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/19o126arvPDDB1DDRM30FJ-JHibStv6bc/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "I'll start with that pretty little mouth of yours.",
                "start_time": "0-09-41",
                "end_time": "0-09-43.290000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1XXwe31BkdUCID5DkOGS7q6V6yX78D4Rj/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "Don't you dare fight me!",
                "start_time": "0-09-45.250000",
                "end_time": "0-09-47.750000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1-71mH4v-qMeM5leE6FLlMpddUJcI6koE/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "This should be old hat for you.",
                "start_time": "0-09-51.790000",
                "end_time": "0-09-53.420000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1ndNRWSVcRlM5mKgkABaTZ2t-92pYxo0K/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "It's your second time being kidnapped, after all.",
                "start_time": "0-09-53.420000",
                "end_time": "0-09-56.420000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1zPLedcFXfh_hklevvJOZJf1LmiTTR87i/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "And the last guy was a stalker? Right?",
                "start_time": "0-09-57.630000",
                "end_time": "0-10-00.750000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1RXL-HusfhlBHknktRzOAf0LmmfiR7IWT/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "I'll give you much better memories than that other guy.",
                "start_time": "0-10-01",
                "end_time": "0-10-04.080000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/13f-Z99SPriDdnMk2TVJ6axSFuUO3srOu/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "Stop struggling!",
                "start_time": "0-10-05.790000",
                "end_time": "0-10-07.210000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1atQWNwrKp_y3qQVYMmnxvxj7x_aRkAmc/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "You know no one's coming.",
                "start_time": "0-10-07.210000",
                "end_time": "0-10-08.830000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1iY_CbySn0Pkmv-Ecio_z84fH8IGSWtUM/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "What?",
                "start_time": "0-10-17.210000",
                "end_time": "0-10-18.210000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1kIt34lt59k7rJdowZN1IjDnXYsMTs2Q-/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "I mean, who's there?!",
                "start_time": "0-10-18.210000",
                "end_time": "0-10-19.580000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1G1BW3Ojedcek28iz9qYh96qi4a87Os-8/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "Who the hell do you think you are?!",
                "start_time": "0-10-36.580000",
                "end_time": "0-10-38.630000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1h6EAdezi2AWbMHpocQvuAgI7Qh7MCTks/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Me?",
                "start_time": "0-10-38.630000",
                "end_time": "0-10-39.830000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1PVQafQkJeMZ1jh0a6WLFzuv0PQiSTt-S/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I'm just a Stylish Ruffian Slayer.",
                "start_time": "0-10-39.830000",
                "end_time": "0-10-43.960000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1ercioREE7D43uDnXTnVO3GvGL5mDxyfj/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "Stylish...",
                "start_time": "0-10-44.920000",
                "end_time": "0-10-46.420000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1F6LuEpn7VXkvStQknRRjCL4u8EOoiiYA/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "...Ruffian Slayer?",
                "start_time": "0-10-46.420000",
                "end_time": "0-10-48.330000",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/18e9PxtE_lb54tZ42pvsEyBGa1lWVMpiC/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper B",
                "subtitle": "Don't get cute with us, dammit!",
                "start_time": "0-10-49.420000",
                "end_time": "0-10-52",
                "name_variant": "Kidnapper B",
                "url": "https://drive.google.com/file/d/1mXrGJM7X-OgaxChx5p_S5vUD8CQHwr8r/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Too much pointless movement. Your guard is way down.",
                "start_time": "0-10-53.750000",
                "end_time": "0-10-56.250000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1SUV31bOrjCNYWhxGP3dhr_Fm3lBmJHf_/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "I see...",
                "start_time": "0-11-03.040000",
                "end_time": "0-11-04.040000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1L4I4OkzdC8oo5AbKFeLXwLKRgnrp8E2p/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "It looks like you have some idea what you're doing,",
                "start_time": "0-11-04.500000",
                "end_time": "0-11-06.540000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1afwEtLeiK0c-3Da6HG4T7f_EaHed-Jdm/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "Stylish Ruffian Slayer.",
                "start_time": "0-11-06.540000",
                "end_time": "0-11-09.460000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1T_v_Ph810EvIRcamfyWeNw_S_4KD0ERm/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "You know, I've been awfully bored since I was booted from the army.",
                "start_time": "0-11-12.210000",
                "end_time": "0-11-16.170000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1XQcspU6u6oa6aTgGFzkV31f_LHaZou8c/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "Doing these little kiddy abductions, partnering with a lowlife amateur...",
                "start_time": "0-11-16.330000",
                "end_time": "0-11-20.830000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1xEEkDNcEnXvtDXdYZs3a9iMer4ym0zME/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "This country is too damn peaceful.",
                "start_time": "0-11-21.790000",
                "end_time": "0-11-23.790000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1kqQJGeAsKtprmtpC4eUz_4ytIwPfDOra/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I see, this is perfect.",
                "start_time": "0-11-24.170000",
                "end_time": "0-11-25.790000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1YqkoSj9dVIawyj7Sn95wO-ahsGV9vRLw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I've always wanted to fight a military man.",
                "start_time": "0-11-25.790000",
                "end_time": "0-11-28.380000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1i6g_lMgtrmd42ohVpBXo5G-AEOMiR4gk/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "I welcome the challenge, Stylish Ruffian Slayer!",
                "start_time": "0-11-29.460000",
                "end_time": "0-11-33.500000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1jNdDVA_gmVRtSRl2wUu7Jjd8b1WUUfeS/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "Welcome to my crazy, messed up world!",
                "start_time": "0-11-33.880000",
                "end_time": "0-11-37.170000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1WB_lGFDAeTsieJpfQpq-TNEymA5DGG2a/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "I can't go back now that I know...",
                "start_time": "0-11-42.500000",
                "end_time": "0-11-45.130000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1WHjBiqv0Kr76dFyPFkGqXdlnmnwwRfnm/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "how good this feels!",
                "start_time": "0-11-47.040000",
                "end_time": "0-11-49.500000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1OS7HRT7i7vcxFrELTGohkNy3B4rxaGMK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Crowbars are great, Mr. Ex-Military.",
                "start_time": "0-11-57.250000",
                "end_time": "0-11-59.420000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1cNmNyv1LbbieHc3MkAL4TxPj2e2WF3SN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "They're sturdy and don't break.",
                "start_time": "0-11-59.670000",
                "end_time": "0-12-01.130000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1nmNBugB3LzX1VE7jOhal5osACzzmfzzl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "They're easy to carry around.",
                "start_time": "0-12-01.130000",
                "end_time": "0-12-02.630000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1sWyTuN9Uq_8tOTHTjbmXh6HOGgow_LR6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "If you end up in police questioning, you might be able to make excuses.",
                "start_time": "0-12-02.630000",
                "end_time": "0-12-05.500000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1gWSYkxfY7EYaZ2qpf6yN1EjCQNCYUHLm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "And best of all...",
                "start_time": "0-12-06.790000",
                "end_time": "0-12-08.080000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1phB-ik6CUKueULf-LkSZHtoud_eaQrEq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "you can use them like tonfa batons.",
                "start_time": "0-12-08.670000",
                "end_time": "0-12-10.880000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1F_9Gt_35ngA5Owpkj_vmVk1s5A0ZGYKS/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "Dammit!",
                "start_time": "0-12-11.130000",
                "end_time": "0-12-12.330000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1zxMTtrhXweNM-If6uzynpyu9sjyXFUWQ/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "You're definitely a good fighter.",
                "start_time": "0-12-12.330000",
                "end_time": "0-12-14.130000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/196r4uxWYQCEZVimj9t9BxsTF7M5tX835/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "But you have a major weakness.",
                "start_time": "0-12-14.130000",
                "end_time": "0-12-15.830000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/17Sc9ZomLS0wIIxZsnLAP3w8fKB2HG82g/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "And it's the fact that I'm big enough to crush you!",
                "start_time": "0-12-16.250000",
                "end_time": "0-12-19.380000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/14Bz8qlIXuSaIK6JOaNgvRrIz2B-tDZI1/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "I just have to protect my head and I'm fine,",
                "start_time": "0-12-23.960000",
                "end_time": "0-12-26.460000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1kRLdJaI5Ub1Eqo8U9IiqEOeSyfQ3DnAz/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "but if you take one hit from me, you're done.",
                "start_time": "0-12-26.460000",
                "end_time": "0-12-29.040000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1-pY6wQV2VvnODIpCIWWnBIgWeKaa3h6e/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "You make a good point.",
                "start_time": "0-12-29.630000",
                "end_time": "0-12-30.880000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/12GOD9JU2x-tNfajIlC6m8egkCxs5AOLj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "At my current level, an ex-military guy is still a bit of a challenge.",
                "start_time": "0-12-31.790000",
                "end_time": "0-12-35.080000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1BTin0ZMKTUkxwKjJYBAN8qUS16jucfdN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "That's the reality.",
                "start_time": "0-12-35.460000",
                "end_time": "0-12-36.920000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1boIz6fyL9GOatLAA08cj2loc3Ubq3jxd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "So I should get a little more serious about this.",
                "start_time": "0-12-38.460000",
                "end_time": "0-12-40.330000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1tncZ_Kot4zPTFpsO-QEFtEZXQ5h7QghN/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "What?!",
                "start_time": "0-12-45.330000",
                "end_time": "0-12-46.540000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1Y5cMe_6Io20gq8TymjOAlBQAcdCmxsg6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I discovered the real potential of crowbars.",
                "start_time": "0-12-47.630000",
                "end_time": "0-12-50.250000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1XlJBiUb-YrRHjRjUKsH8y22TrRYl7dc5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "They're shaped very much like tonfa.",
                "start_time": "0-12-50.250000",
                "end_time": "0-12-52.290000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1Op8l6OTfc3rUx3Z3Ayl-ezN_OxJCVsRf/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "They're heavy, sturdy, and portable.",
                "start_time": "0-12-52.290000",
                "end_time": "0-12-55.210000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1NvHoQHTm6kP5_TqaoPPhgE1mnl4YlhG-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Everything about them has immense potential.",
                "start_time": "0-12-55.210000",
                "end_time": "0-12-57.830000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1dvtDL-sOOYbHmyPAfaoZg2OE2UNQY3MF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Then I made it a regular practice to beat up the motorcycle gangs",
                "start_time": "0-12-58.130000",
                "end_time": "0-13-01.330000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1MrUHL-YL42wHu-0tfSQ1gCzUYz4TFde1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "that disturbed the peace night after night.",
                "start_time": "0-13-01.330000",
                "end_time": "0-13-02.790000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1TjFBG1ZyY49TPu5aWV03b4ZPXnaUQuUv/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "You...",
                "start_time": "0-13-06.460000",
                "end_time": "0-13-07.460000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1-LqOeSFLRUhDOu010L8ypN2eJ-oYTKlW/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "You beat up bikers with a crowbar?",
                "start_time": "0-13-07.960000",
                "end_time": "0-13-11.080000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1SJW8CeYuAYVAKH-_Rmpn5WGWzcNquxAZ/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "You're the Balaclava Berserker?!",
                "start_time": "0-13-11.920000",
                "end_time": "0-13-14.500000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1ayfmcUAQkYB7vTNvd-hpB-dzKPUY0g0M/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "They recently started wearing helmets,",
                "start_time": "0-13-16.710000",
                "end_time": "0-13-19.580000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1NJH4_5UhtvmYQdJ8Y0asl6M58Zc9DSDu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "so it wouldn't kill them if I hit them in the head.",
                "start_time": "0-13-19.920000",
                "end_time": "0-13-22.540000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1PvJ1LSuJKIu7zGANisDKDWnxr0I4DAXJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "And...",
                "start_time": "0-13-23.630000",
                "end_time": "0-13-24.630000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1MMQ22PxQXipqpfpCB7yyQbu-PbngoqRL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "the solution I found to that problem...",
                "start_time": "0-13-24.920000",
                "end_time": "0-13-27.210000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1kihUp3dAqmVhcvSMcDSne9u4-FQB60JQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "was to stop using the crowbars like tonfa.",
                "start_time": "0-13-29.960000",
                "end_time": "0-13-32.580000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1nPO8orHHq_sZA6UDETwOP0tV6IHEYBOl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Because using it like a regular club...",
                "start_time": "0-13-36.330000",
                "end_time": "0-13-38.580000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1lzCwmJOphFdHG-tmp0jef-WUfvImTjEz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "...is more effective!",
                "start_time": "0-13-40.040000",
                "end_time": "0-13-41.290000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1bJw6f0UJA9BSNOZwipHZRvb70fj0fJY6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "That is the potential of a crowbar.",
                "start_time": "0-13-43.880000",
                "end_time": "0-13-46",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1NPPpKfM-GtB5am134Qgo-2WawySvgvVZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "The trick is to hit with the heel of the \"L...\"",
                "start_time": "0-13-46.580000",
                "end_time": "0-13-48.750000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1kwK0tqnPdIxDufbqVXfT6GYutFjPNq_E/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "...because it magnifies the shock.",
                "start_time": "0-13-51.040000",
                "end_time": "0-13-53.170000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1pKM1nIGooGJQ3B8HCI7-Ctwircu0Mv0L/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "N-no, don't!",
                "start_time": "0-13-57.380000",
                "end_time": "0-13-58.960000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/1MM_bD9VoCoLcJeq3hUNP7uoA5evxVC6O/view?usp=drivesdk"
            },
            {
                "name": "Kidnapper A",
                "subtitle": "Stop...",
                "start_time": "0-14-04.670000",
                "end_time": "0-14-05.880000",
                "name_variant": "Kidnapper A",
                "url": "https://drive.google.com/file/d/12A9xdm_J8yve3eyIuYh9d8QAesX7wnJB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Next time, be more careful walking home.",
                "start_time": "0-14-50.830000",
                "end_time": "0-14-53",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1Xf6yNgx-NF5oVA3tf_WZtrq9sygR7-NM/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "What?",
                "start_time": "0-15-09.630000",
                "end_time": "0-15-10.830000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/18j_OP2rEsoqKPUZ1LEO2WUnHuBpGpu4F/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "It's no good.",
                "start_time": "0-15-17.210000",
                "end_time": "0-15-18.420000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1anzyRmkb2lZ6dMYIGZvmLlV4T_2MlY-Q/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "If that's how I do against an ex-soldier, I'll never make it.",
                "start_time": "0-15-18.750000",
                "end_time": "0-15-22.540000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1xJiowknNFOCuGtTzZ8urUGdw4DWj21S5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I'll never be the Eminence in Shadow.",
                "start_time": "0-15-24.380000",
                "end_time": "0-15-26.080000",
                "name_variant": "Stylish Ruffian Slayer",
                "url": "https://drive.google.com/file/d/1BG7Tup91D3s4_gJvv2sUtO2dkqBSd7W7/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "After that, I called the police, and things got pretty hectic.",
                "start_time": "0-15-29.710000",
                "end_time": "0-15-33.710000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1FXX0Mj_BtPGGI0tqeO67mZGDR-xggcQh/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "But Daddy pulled some strings,",
                "start_time": "0-15-34.290000",
                "end_time": "0-15-35.960000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1TDNbEmhCMOlHRl16JMKKgBh6uOSo2HwK/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "and the public never found out about what happened.",
                "start_time": "0-15-35.960000",
                "end_time": "0-15-38.460000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/11xJx6DUTq0Y93xQsioctT4EPJwkk8iiS/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "In the end, I never did discover the true identity of the Stylish Ruffian Slayer.",
                "start_time": "0-15-39.210000",
                "end_time": "0-15-44.830000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1wulwORPwZ1bngG6C4NuGYrY1WCAy9jCG/view?usp=drivesdk"
            },
            {
                "name": "Akane's Classmate",
                "subtitle": "Good morning, Nishino-san!",
                "start_time": "0-15-49.960000",
                "end_time": "0-15-51.250000",
                "name_variant": "Akane's Classmate",
                "url": "https://drive.google.com/file/d/1X_so33VBVi4xGr-nlivrm3LZh_-twRCz/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Good morning to you, too!",
                "start_time": "0-15-51.250000",
                "end_time": "0-15-53.040000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/15HbCkWWwQAI3BQeaAKvexrYDyDyswVB7/view?usp=drivesdk"
            },
            {
                "name": "Akane's Classmate",
                "subtitle": "Good morning, Senpai!",
                "start_time": "0-15-53.040000",
                "end_time": "0-15-54.920000",
                "name_variant": "Akane's Classmate",
                "url": "https://drive.google.com/file/d/1C1l1XKfCDFgkVvI0KASlYGioHdXP6Sv0/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Thank you, good morning.",
                "start_time": "0-15-54.920000",
                "end_time": "0-15-56.630000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1UKBuMphP9pCKaD35eLLBxg2ABcoBgNcU/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Good morning, Kageno-kun.",
                "start_time": "0-16-04.330000",
                "end_time": "0-16-05.790000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1x6LI7YUUvVdkT6dctpooUbXvsdfjxvd7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Good morning,",
                "start_time": "0-16-07.920000",
                "end_time": "0-16-09.130000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1rB66bqGdK86vrm86sqxC30Ci7QQvfl6t/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Nishino-san.",
                "start_time": "0-16-09.210000",
                "end_time": "0-16-10",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1KoSW0VcTUqCGX5MmgrncgZCTsKyTpc4L/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "Okay, okay, my name isn't Nishino-",
                "start_time": "0-16-11.250000",
                "end_time": "0-16-13.710000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/18aaMgL1c9RAroZrbT0QrssNT6YPUE3H1/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "He didn't get my name wrong.",
                "start_time": "0-16-15.710000",
                "end_time": "0-16-18.130000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1Aqa9HU9cT_cE6yFD5Mh0tjIv_nCoufv0/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "And I got the feeling his eyes were looking directly at me.",
                "start_time": "0-16-18.670000",
                "end_time": "0-16-22.460000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1FyBwKD3JAAuRrif4kTMqRI64QaBx9M6b/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "\"Kageno-kun is like me. He lives his life hiding behind a mask.\"",
                "start_time": "0-16-23.250000",
                "end_time": "0-16-28.210000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1V53i1RMhb-fjrnJWIV2Z_3kRHdXEeh_U/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "That's the thought that crossed my mind.",
                "start_time": "0-16-28.710000",
                "end_time": "0-16-30.710000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/15_jAOJFiazbp8FuVfxLYAKJeGDLB5NJL/view?usp=drivesdk"
            },
            {
                "name": "Akane Nishino",
                "subtitle": "But now there's no way to ever know for sure.",
                "start_time": "0-16-31.460000",
                "end_time": "0-16-34.330000",
                "name_variant": "Akane Nishino",
                "url": "https://drive.google.com/file/d/1ivJRNUKYDh5_K97s6hcWb_zi0k3rsGpO/view?usp=drivesdk"
            },
            {
                "name": "News Reporter",
                "subtitle": "On to our next story.",
                "start_time": "0-16-36.500000",
                "end_time": "0-16-37.750000",
                "name_variant": "News Reporter",
                "url": "https://drive.google.com/file/d/10haUWCBptIcXXrUN4WV5IZlQ0EqjnB3V/view?usp=drivesdk"
            },
            {
                "name": "News Reporter",
                "subtitle": "Just before dawn this morning, on a city road in Sakurazaka,",
                "start_time": "0-16-38.170000",
                "end_time": "0-16-41.330000",
                "name_variant": "News Reporter",
                "url": "https://drive.google.com/file/d/1iwJVLTV7Y-C41x8Ln9JJyQLlChH9RCAi/view?usp=drivesdk"
            },
            {
                "name": "News Reporter",
                "subtitle": "local high school student Minoru Kageno-san was hit by a truck.",
                "start_time": "0-16-41.330000",
                "end_time": "0-16-46",
                "name_variant": "News Reporter",
                "url": "https://drive.google.com/file/d/1zAHueNSRikWNfIQmqi55OCkkWHkxJiUJ/view?usp=drivesdk"
            },
            {
                "name": "News Reporter",
                "subtitle": "He did not survive.",
                "start_time": "0-16-46",
                "end_time": "0-16-47.250000",
                "name_variant": "News Reporter",
                "url": "https://drive.google.com/file/d/12-4Jw58be-Qitloo19vS5SxZRRdtTgt0/view?usp=drivesdk"
            },
            {
                "name": "News Reporter",
                "subtitle": "The police have determined that the driver was not watching the road,",
                "start_time": "0-16-47.670000",
                "end_time": "0-16-51.790000",
                "name_variant": "News Reporter",
                "url": "https://drive.google.com/file/d/1OzD4dUanyp_SL-mLJptYajehH0MU-EwL/view?usp=drivesdk"
            },
            {
                "name": "News Reporter",
                "subtitle": "and have begun to investigate-",
                "start_time": "0-16-51.790000",
                "end_time": "0-16-53.540000",
                "name_variant": "News Reporter",
                "url": "https://drive.google.com/file/d/1Wa6RDDIj4UCyluaGVNRAcyGbfQOdkZve/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I don't remember how it started.",
                "start_time": "0-17-57.040000",
                "end_time": "0-17-59.380000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1ZoiNG-Ig_Y5LWJM1utPRCqAIbcvlY9EI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "As far back as I can remember, it's what I always wanted to be.",
                "start_time": "0-18-00.210000",
                "end_time": "0-18-03.670000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1Ij_Kbx1EjmpFFRsvQ1ibLhHpsnqcOt1G/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Like how everybody dreams of being a hero when they're a kid.",
                "start_time": "0-18-04.380000",
                "end_time": "0-18-07.710000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1HArfiKGzjgcUVuHdchSKbuhaYevStx0e/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "That's what I wanted to be.",
                "start_time": "0-18-08.170000",
                "end_time": "0-18-10.170000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1WQm9OcPhOPbw7u9m-ICIJtQt2U035PB5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "But what made me different from other kids,",
                "start_time": "0-18-12",
                "end_time": "0-18-14.960000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1WjK56wMChb2OQecfqDK8ybUhn5jD6z1Q/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "is that my passion was far from a temporary phase.",
                "start_time": "0-18-14.960000",
                "end_time": "0-18-18.460000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1Z4WAxd5-W5ObiUXqzNI3vRBo1r2f206h/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "It kept burning, deep, deep inside my heart.",
                "start_time": "0-18-18.750000",
                "end_time": "0-18-21.330000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1lza8ZvLeHrFwQCtYVIHjg3YgQV_fZqG-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "The flame never went out. It kept driving me forward.",
                "start_time": "0-18-21.330000",
                "end_time": "0-18-25.210000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/12UPWaY3vh6PcZFfcJV0M6v7bxXTzhI1y/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I did everything I could to master every skill I needed to be stronger.",
                "start_time": "0-18-26.170000",
                "end_time": "0-18-30.330000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1wfo89UG6RXkwZIIT62fUlurRgcYgILHW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "At school, I was the stubbornly ordinary,",
                "start_time": "0-18-31.330000",
                "end_time": "0-18-33.750000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1ZW4mG-m-8z1mLood2a78EfzkrgPMeSds/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "never conspicuous, utterly harmless, Background Character A.",
                "start_time": "0-18-33.750000",
                "end_time": "0-18-36.920000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1jpLyzGf3sS5e6H5B807l0xwwHQ_iXDXZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "But behind the mask, I gave everything to my training.",
                "start_time": "0-18-37.330000",
                "end_time": "0-18-40.630000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1IYm6AKelq6R1gRIYGv-FzvpPH1HU7RR7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "As everyone around me grew up and forgot about the heroes they dreamed of becoming,",
                "start_time": "0-18-41.040000",
                "end_time": "0-18-46.250000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1JnP9nlxUPCgBYzzCmbofoleZzmR_fvoN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I started to feel a little - just a very little - sentimental.",
                "start_time": "0-18-46.250000",
                "end_time": "0-18-51.080000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1KZxODZAjrU3AXZiOS9W6qwFl6XCQ3lrf/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "But I kept going, I kept working,",
                "start_time": "0-18-51.420000",
                "end_time": "0-18-53.290000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1I-JZr2fq6RD3lZYKCnjZkMfb5ntE-tQp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "for the day I knew would come.",
                "start_time": "0-18-54.330000",
                "end_time": "0-18-56.920000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1LZ_CDROozgot8tMgEOl4vNx8Rz95gnqx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "But the time has come for me to face reality.",
                "start_time": "0-18-58.210000",
                "end_time": "0-19-01.460000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1kll_eQCdr0K4jog25Ky4ACt13QlRIfJx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "None of this is going to mean anything.",
                "start_time": "0-19-02.170000",
                "end_time": "0-19-04.330000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1SqSDpDT5RL3pQbdlpFEnXpbyZOlV7OOu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "The world is overflowing with martial arts, and I can learn all of them,",
                "start_time": "0-19-04.750000",
                "end_time": "0-19-07.880000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1fiU4Fs1Hf-d1KxMS8D7rOd00eocc9GLO/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "but I'll never get the kind of overwhelming power you hear about in all the stories.",
                "start_time": "0-19-07.880000",
                "end_time": "0-19-11.080000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1SGXdfSvCD72h5SBiaxSv54VITSEDIKqM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "The best I can do is bust a few delinquent heads.",
                "start_time": "0-19-11.460000",
                "end_time": "0-19-14.830000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1i2bgpgIAQtcVBUYPJTreXQFA0eHjCJD1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "If, for example, I was surrounded by fully armed soldiers,",
                "start_time": "0-19-17.630000",
                "end_time": "0-19-20.630000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1Epa69kfrIc_feOhETZsyenietnXD0lEy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "that would be it for me.",
                "start_time": "0-19-20.630000",
                "end_time": "0-19-21.830000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1KaDXvDgDqFFaG7HxzUL3TCoVZaJQUQ5o/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Well, if I became the strongest martial artist in the world,",
                "start_time": "0-19-24",
                "end_time": "0-19-27.460000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1bAcYTLJhdehX8VQ7LSaEXj6U-mhR5hYU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "there's a chance I'd be able to rough 'em up some.",
                "start_time": "0-19-27.460000",
                "end_time": "0-19-30.130000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1yFDRmI3esIr9XRqUBKrMAmTAgQ0sTGa0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "But then what?",
                "start_time": "0-19-32.830000",
                "end_time": "0-19-34.670000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1eyCO7oFOVcRaFWPNiXQ0kXHoZllxPIyR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "What if a nuclear missile fell from the sky?",
                "start_time": "0-19-37",
                "end_time": "0-19-39.630000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1xRYewzUxhubyXfHpzyw7IPfx-ieg8BwU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I can tone my muscles, I can hone my mind, I can polish my skills all I want.",
                "start_time": "0-19-40.420000",
                "end_time": "0-19-44.830000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1ey9A3Ze2HFC4s8s5ldFmVYnHW1580EJ8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "But if a nuclear bomb hits, all I can do is evaporate.",
                "start_time": "0-19-45.500000",
                "end_time": "0-19-48.670000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1V_4gksRhW9E92GlHYZ65WS9jBfvr39dP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "That's what it is to be human.",
                "start_time": "0-19-49.420000",
                "end_time": "0-19-50.960000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1QBC2EYHDRS2m6Z2Ugd5jJnaHM-arAKgS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I have to overcome those limits.",
                "start_time": "0-19-57.080000",
                "end_time": "0-19-59.210000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1eb1rBxljq-8fI0SQShe1Zsj2mnwxNHAr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "The being that I want to be",
                "start_time": "0-20-00.210000",
                "end_time": "0-20-02.250000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1A52P_iSg5rN0rVGkB2f_YEqN33wA2c86/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "would not evaporate in a nuclear explosion.",
                "start_time": "0-20-02.250000",
                "end_time": "0-20-04.130000",
                "name_variant": "Minoru Kageno",
                "url": "https://drive.google.com/file/d/1TF5M8EKmxlGIuAFMA7THPERa1YE0cOSk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Compromise is not an option.",
                "start_time": "0-20-06.380000",
                "end_time": "0-20-08.170000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/1-Bpg5bxsCI5PtS0r2npNwfxv0o0AO03d/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "subtitle": "Don't worry.",
                "start_time": "0-20-24.290000",
                "end_time": "0-20-25.580000",
                "name_variant": "Alpha",
                "url": "https://drive.google.com/file/d/10m7g6wZNj6KXii0GXnePCiMAmztn5sdu/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "subtitle": "We have them completely surrounded.",
                "start_time": "0-20-28.790000",
                "end_time": "0-20-31.080000",
                "name_variant": "Alpha",
                "url": "https://drive.google.com/file/d/1249PA-dGtBYUbWv8r36YK1fEIScpzl4k/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "subtitle": "They have nowhere to run.",
                "start_time": "0-20-31.580000",
                "end_time": "0-20-33.420000",
                "name_variant": "Alpha",
                "url": "https://drive.google.com/file/d/1MPp9n_wv4dd3Wuf8RKACVKKJNYhUz2wg/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "subtitle": "It's exactly as you predicted, My Lord.",
                "start_time": "0-20-34.130000",
                "end_time": "0-20-36.580000",
                "name_variant": "Gamma",
                "url": "https://drive.google.com/file/d/1xWKHOhs6DtiSD5quNTHPrSDYttMtKThQ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "subtitle": "I have only words of admiration for your foresight and meticulous planning.",
                "start_time": "0-20-37.290000",
                "end_time": "0-20-41.290000",
                "name_variant": "Beta",
                "url": "https://drive.google.com/file/d/1mUpDekDlrJk02TXuk2PVDgZ_GIApjg9C/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "subtitle": "We haven't had a big hunt in ages. I can't wait!",
                "start_time": "0-20-41.540000",
                "end_time": "0-20-44.500000",
                "name_variant": "Delta",
                "url": "https://drive.google.com/file/d/13VlhKJOL_5D6uSKYaFhy5xhMgiLQs-kc/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "subtitle": "I'll show no mercy.",
                "start_time": "0-20-44.500000",
                "end_time": "0-20-46.170000",
                "name_variant": "Zeta",
                "url": "https://drive.google.com/file/d/133lkSmj5bajFdPTsJejNLnD7zvWAFNpQ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "subtitle": "We're all waiting for your orders, My Lord.",
                "start_time": "0-20-49.630000",
                "end_time": "0-20-52.460000",
                "name_variant": "Epsilon",
                "url": "https://drive.google.com/file/d/1lggV6haCl0e75_5q-7DeFHNC6yiL3_Jr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Excellent.",
                "start_time": "0-20-58.130000",
                "end_time": "0-20-59.130000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/1D1QxpIctPzlMvDrsGw7zqrnUaA9OETpe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I'm not sure exactly what's excellent, but I'm sure that it is.",
                "start_time": "0-20-59.130000",
                "end_time": "0-21-02.290000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/17_ElROT5xgYVW4E8WKRyVScNJDcpY9PX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I was blessed with a new life, and in a new world, no less.",
                "start_time": "0-21-03.040000",
                "end_time": "0-21-06.210000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/10w62aJ-4fA56OvoAOBKTTJXAb0bOWnYQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "And I was given...",
                "start_time": "0-21-06.630000",
                "end_time": "0-21-08.080000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/1jfMJQy3MRE_iI6Kkdec0C2j400Z81MzP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I need more power.",
                "start_time": "0-21-08.920000",
                "end_time": "0-21-13.040000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/1zAd-M0gHG9VqKJ7y-x6GlNy_P8g9LDnV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "...magic.",
                "start_time": "0-21-16.670000",
                "end_time": "0-21-17.880000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/1yWAslkV3n1TMQtAehMLv3QVIWAJvgXwo/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "With this new power at my disposal...",
                "start_time": "0-21-18.250000",
                "end_time": "0-21-20.630000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/1cJ68N2ThLe5I-dzL8f-am0LzhHSASC60/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "There is but one summit we aim to reach.",
                "start_time": "0-21-22.040000",
                "end_time": "0-21-24.250000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/1CI0hhfaMG8_0yaicQhJry1xx3Ci3lT7o/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "Let's go.",
                "start_time": "0-21-25.630000",
                "end_time": "0-21-26.830000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/1eH7zerHOZRL3_CfzMR8H_uYEe1IYsWxQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "This time, I'm going to make it.",
                "start_time": "0-21-38.880000",
                "end_time": "0-21-41.290000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/1D8-QUFHi-fgmDNLGfSmm0haG8qBGnhAd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I would give up everything to get there.",
                "start_time": "0-21-41.670000",
                "end_time": "0-21-43.960000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/1iIAU3o5pMP1lBwCQHppN1WfANw0nWjg2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "No, I will give up everything!",
                "start_time": "0-21-44.710000",
                "end_time": "0-21-46.830000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/1Oj-aRXqbKG9CHNeRX3oAgMMGybkh8Ybu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "If that's what it takes to get there, that's how badly I want it.",
                "start_time": "0-21-47.080000",
                "end_time": "0-21-50.540000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/1QOJlaTJ2kKqrCuWrvxoe5jEfWbfhDMKB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I don't want to be the hero.",
                "start_time": "0-21-51.210000",
                "end_time": "0-21-52.920000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/1HXL5TyhZ1XuFpEclcir0DcoWFWZpgQsl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I don't want to be the last boss.",
                "start_time": "0-21-53.830000",
                "end_time": "0-21-55.250000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/1tZZVK4O8adPtQwEYG0HdrqSxeS2Wm0t4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "I want to be the one in the story who operates from the shadows,",
                "start_time": "0-21-56.920000",
                "end_time": "0-21-59.210000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/1IxnUDf_rHbQEGkZZs7LQ9pPnnHzde6T0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "showing everyone their greatness:",
                "start_time": "0-21-59.210000",
                "end_time": "0-22-01.380000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/1pDD2ASu8Db-tRNYhhM2QDpkHGIx52Vwt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "subtitle": "The Eminence in Shadow!",
                "start_time": "0-22-09.040000",
                "end_time": "0-22-10.630000",
                "name_variant": "Shadow",
                "url": "https://drive.google.com/file/d/1kl9xY84mNASaG3EbPl70rbjle4_ayMKu/view?usp=drivesdk"
            }
        ]
    }
  };


  const [animeDropdownState, setAnimeDropdownState] = React.useState(() => {
    const savedState = sessionStorage.getItem('animeDropdownState');
    if (savedState) {
      return JSON.parse(savedState);
    } else {
      return {
        mainChecked: false,
        filter: '',
        openSeasons: {},
        seasonsChecked: {
      "Season 1": {
          "s1e1": false,
          "s1e2": false,
          "s1e3": false,
          "s1e4": false,
          "s1e5": false,
          "s1e6": false,
          "s1e7": false,
          "s1e8": false,
          "s1e9": false,
          "s1e10": false,
          "s1e11": false,
          "s1e12": false,
          "s1e13": false,
          "s1e14": false,
          "s1e15": false,
          "s1e16": false,
          "s1e17": false,
          "s1e18": false,
          "s1e19": false,
          "s1e20": false,
          "checked": false
      },
      "Season 2": {
          "s2e1": false,
          "s2e2": false,
          "s2e3": false,
          "s2e4": false,
          "s2e5": false,
          "s2e6": false,
          "s2e7": false,
          "s2e8": false,
          "s2e9": false,
          "s2e10": false,
          "s2e11": false,
          "s2e12": false,
          "checked": false
      }
    },
    episodeFilters: {}
  };
}
});

    React.useEffect(() => {
    sessionStorage.setItem('animeDropdownState', JSON.stringify(animeDropdownState));
  }, [animeDropdownState]);

  const [lnDropdownState, setLNDropdownState] = React.useState(() => {
    const savedState = sessionStorage.getItem('lnDropdownState');
    if (savedState) {
      return JSON.parse(savedState);
    } else {
      return {
        lnMainChecked: false,
        lnFilter: '',
        openVolumes: {},
        volumesChecked: {
      "Volume 1": {
          "v1c1": false,
          "v1c2": false,
          "v1c3": false,
          "v1c4": false,
          "v1c5": false,
          "v1c6": false,
          "v1c7": false,
          "v1c8": false,
          "v1c9": false,
          "checked": false
      },
      "Volume 2": {
          "v2c1": false,
          "v2c2": false,
          "v2c3": false,
          "v2c4": false,
          "v2c5": false,
          "v2c6": false,
          "v2c7": false,
          "v2c8": false,
          "v2c9": false,
          "v2c10": false,
          "v2c11": false,
          "checked": false
      },
      "Volume 3": {
          "v3c1": false,
          "v3c2": false,
          "v3c3": false,
          "v3c4": false,
          "v3c5": false,
          "v3c6": false,
          "v3c7": false,
          "v3c8": false,
          "v3c9": false,
          "v3c10": false,
          "checked": false
      },
      "Volume 4": {
        "v4c1": false,
        "v4c2": false,
        "v4c3": false,
        "v4c4": false,
        "v4c5": false,
        "v4c6": false,
        "v4c7": false,
        "v4c8": false,
        "v4c9": false,
        "v4c10": false,
        "checked": false
    }
},
chapterFilters: {}
};
}
});

React.useEffect(() => {
sessionStorage.setItem('lnDropdownState', JSON.stringify(lnDropdownState));
}, [lnDropdownState]);

  const [filterState, setFilterState] = useState(() => {
    // Try to get the state from sessionStorage
    const savedState = sessionStorage.getItem('filterState');
    if (savedState) {
      // If found, parse and return the saved state
      return JSON.parse(savedState);
    } else {
      // If not found, return the initial state
      return { keywords: [], caseSensitive: false, exactMatch: false };
    }
  });
  
  // Use an effect to update sessionStorage whenever the state changes
  useEffect(() => {
    sessionStorage.setItem('filterState', JSON.stringify(filterState));
  }, [filterState]);
  

  const images = {
    "characterImages": {
        "Shadow": ShadowIcon,
        "Cid Kagenou": CidKagenouIcon,
        "Minoru Kageno": MinoruKagenoIcon,
        "Stylish Ruffian Slayer": StylishRuffianSlayerIcon,
        "Akane Nishino": AkaneNishinoIcon,
        "Alexia Midgar": AlexiaMidgarIcon,
        "Alpha": AlphaIcon,
        "Beta": BetaIcon,
        "Claire Kagenou": ClaireKagenouIcon,
        "Delta": DeltaIcon,
        "Epsilon": EpsilonIcon,
        "Eta": EtaIcon,
        "Gamma": GammaIcon,
        "Iris Midgar": IrisMidgarIcon,
        "PoTato": PoTatoIcon,
        "Rose Oriana": RoseOrianaIcon,
        "Sherry Barnett": SherryBarnettIcon,
        "SkelEtal": SkelEtalIcon,
        "Zeta": ZetaIcon,
    },
    "lnCoverImages": {
        "v1": LNV1Cover,
        "v2": LNV2Cover,
        "v3": LNV3Cover,
        "v4": LNV4Cover,
        "v5": LNV5Cover,
    },
    "animeCoverImages": {
        "s1": ANS1Cover,
        "s2": ANS2Cover
    }
}



  const [dropdownStates, setDropdownStates] = React.useState(() => {
    //const savedState = sessionStorage.getItem('dropdownStates');
    const savedState = null;
    if (savedState) {
      return JSON.parse(savedState);
    } else {
      return {
        'SHADOW GARDEN': {
          openGroup: false,
          checked: false,
          filters: '',
          characters: {
            "Cid Kagenou": {
              "Cid Kagenou": false,
              "Shadow": false,
              "Minoru Kageno": false,
              "John Smith": false,
              "Mundane Mann": false,
              "Stylish Ruffian Slayer": false,
              "checked": false
            },
            "Alpha": {
              "checked": false
            },
            "Beta": {
                "Beta": false,
                "Natsume Kafka": false,
                "checked": false
            },
            "Gamma": {
                "checked": false
            }
            ,
            "Delta": {
                "checked": false
            }
            ,
            "Epsilon": {
                "checked": false
            }
            ,
            "Zeta": {
                "checked": false
            }
            ,
            "Eta": {
                "checked": false
            }
          }
        },
        'MIDGAR': {
            openGroup: false,
            checked: false,
            filters: '',
            characters: {
              "Alexia Midgar": {
                "checked": false
              },
              "Iris Midgar": {
                "checked": false
              }
            }
          },
        'EARTH': {
            openGroup: false,
            checked: false,
            filters: '',
            characters: {
              "Akane Nishino": {
                "checked": false
              },
              "Kidnapper A": {
                "checked": false
              },
              "Kidnapper B": {
                "checked": false
              },
              "Akane's Classmate": {
                "checked": false
              },
              "Teacher": {
                "checked": false
              },
              "Student": {
                "checked": false
              },
              "Akane's Butler": {
                "checked": false
              }
            }
          },
      };
    }
  });

  useEffect(() => {
    sessionStorage.setItem('dropdownStates', JSON.stringify(dropdownStates));
  }, [dropdownStates]);

  const volume1Chapters = useMemo(() => [
    { id: 'v1c1', name: 'P | Preparing the Perfect Stage!' },
    { id: 'v1c2', name: '1 | Starting the Shadowbroker Tutorial!' },
    { id: 'v1c3', name: '2 | Assuuming the Role of a Side Character at School!' },
    { id: 'v1c4', name: "3 | My Official Beginning as a Mastermind in Action!" },
    { id: 'v1c5', name: '4 | The Two Sides of the Shadow Garden?!' },
    { id: 'v1c6', name: '5 | Mastering the Peaceful Life of a Nobody!' },
    { id: 'v1c7', name: '6 | That Scene Where Terrorists Take Over the School' },
    { id: 'v1c8', name: 'F | My Idea of the Ultimate Shadow Commander!' },
    { id: 'v1c9', name: 'A | Appendix' },
  ], []);

  const volume2Chapters = useMemo(() => [
  { id: 'v2c1', name: 'P | To Lindwurm, the Sacred Land!' },
  { id: 'v2c2', name: "1 | Fun Times at the Goddess's Trial!"},
  { id: 'v2c3', name: '2 | Investigating the Sanctuary!' },
  { id: 'v2c4', name: "3 | When Things Get Borings, It's Time for Explosives!" },
  { id: 'v2c5', name: '4 | This Situation Calls for a "Who Is That Guy?!"'},
  { id: 'v2c6', name: '5 | A Battle to Attract Only MVPS!' },
  { id: 'v2c7', name: '6 | A Mastermind Always Plays Piano Under Moonlight!' },
  { id: 'v2c8', name: '7 | Showing Off a Smidgen of My Strength' },
  { id: 'v2c9', name: '8 | Lay Your Eyes on My True Powers!' },
  { id: 'v2c10', name: 'F | Just Who Is This Mysterious Badass?!' },
  { id: 'v2c11', name: 'A | Appendix' },
  ], []);

  const volume3Chapters = useMemo(() => [
    { id: 'v3c1', name: 'P | Heading to the Lawless City over Fall Break!' },
    { id: 'v3c2', name: "1 | Lawless City Bandit Hunting!"},
    { id: 'v3c3', name: '2 | Storming the Crimson Tower' },
    { id: 'v3c4', name: "3 | Pursuing the Blood Queen" },
    { id: 'v3c5', name: 'X | Field Notes on a Little Brother—by Young Claire!'},
    { id: 'v3c6', name: "4 | I'll Destroy It All and Start from Scratch!" },
    { id: 'v3c7', name: '5 | Printing Fake Money as Mitsughoshi Throws Down with the Major Corporate Alliance!' },
    { id: 'v3c8', name: '6 | Circulating Counterfeit Cash!' },
    { id: 'v3c9', name: 'E | The One to Destroy It ALl and Start from Scratch—with Fake Bills!' },
    { id: 'v3c10', name: 'A | Appendix' },
    ], []);

  const volume4Chapters = useMemo(() => [
    { id: 'v4c1', name: "P | It's Time for a War in the Oriana Kingdom!" },
    { id: 'v4c2', name: "1 | Putting the Kibosh on Rose Oriana's Wedding!"},
    { id: 'v4c3', name: '2 | Begin Operation Obstruction!' },
    { id: 'v4c4', name: "3 | Crashing the Ceremony!" },
    { id: 'v4c5', name: 'X | Rise of the Fancy Hoodlum Slayer!'},
    { id: 'v4c6', name: "4 | Lurking in the Darkness in Fantastical Japan!" },
    { id: 'v4c7', name: '5 | Sneaking around in Japan, Just Like the Old Days!!' },
    { id: 'v4c8', name: '6 | Something Smells Fishy...But an Eminence in Shadow Always Cracks the Case!' },
    { id: 'v4c9', name: 'E | Behond, a Full-Fledged Eminence in Shadow!' },
    { id: 'v4c10', name: 'A | Appendix' },
    ], []);

  const volumes = useMemo(() => [
  { name: "Volume 1", chapters: volume1Chapters },
  { name: "Volume 2", chapters: volume2Chapters },
  { name: "Volume 3", chapters: volume3Chapters },
  { name: "Volume 4", chapters: volume4Chapters }
  ], [volume1Chapters, volume2Chapters, volume3Chapters, volume4Chapters]);

  const [namedActive, setNamedActive] = useState(false);
  const namedCharacters = ["Cid Kagenou", "Akane Nishino", "Alpha", "Beta", "Gamma", "Delta", "Epsilon", 
    "Zeta", "Eta", "Alexia Midgar", "Iris Midgar", "Shadow", "Minoru Kageno", "Stylish Ruffian Slayer"
  ];
  
  

  const updateAnimeDropdownState = (key, value) => {
    setAnimeDropdownState(prevState => ({
      ...prevState,
      [key]: value
    }));
  }

  const updateLNDropdownState = (key, value) => {
    setLNDropdownState(prevState => ({
      ...prevState,
      [key]: value
    }));
  }

  const [searchResults, setSearchResults] = useState({});
  const [savedFilterState, setSavedFilterState] = useState(filterState);

  function handleSearch() {
    setSavedFilterState(filterState);
    // Collect all checked items from animeDropdownState
    const animeCheckedItems = Object.entries(animeDropdownState.seasonsChecked)
      .flatMap(([season, episodes]) => 
        Object.entries(episodes)
          .filter(([episode, checked]) => checked && episode !== 'checked')
          .map(([episode]) => {
            const [season, ep] = episode.split('e');
            return `an_${season}_e${ep}`;
          })
      );
  
    // Collect all checked items from lnDropdownState
    const lnCheckedItems = Object.entries(lnDropdownState.volumesChecked)
      .flatMap(([volume, chapters]) => 
        Object.entries(chapters)
          .filter(([chapter, checked]) => checked && chapter !== 'checked')
          .map(([chapter]) => {
            const [volume, ch] = chapter.split('c');
            return `ln_${volume}_c${ch}`;
          })
      );

      const checkedCharacters = [];
        Object.entries(dropdownStates).forEach(([group, { characters }]) => 
        Object.entries(characters).forEach(([character, { checked, ...subnames }]) => {
            if (checked) {
            const subnamesEntries = Object.entries(subnames);
            const hasSubnames = subnamesEntries.length > 0;
            const checkedSubnames = subnamesEntries
                .filter(([subname, checked]) => checked && subname !== 'checked' && subname !== 'open')
                .map(([subname]) => subname);
            if (hasSubnames) {
                if (subnamesEntries.every(([subname, checked]) => subname === 'checked' || subname === 'open' || checked)) {
                // If every item of the subnames is checked, add the main name with '(All)'
                checkedCharacters.push(character + ' (All)');
                } else {
                checkedCharacters.push(...checkedSubnames);
                }
            } else {
                // If the character has no subnames, add the character
                checkedCharacters.push(character);
            }
            }
        })
        );

      
      console.log(checkedCharacters);
      console.log(dropdownStates)
      

    // Initialize separate objects to hold the anime and light novel results
    let animeResults = {};
    let lnResults = {};

    const ln_v1_checked = [...lnCheckedItems].some(item => item.includes('ln_v1')) ? ln_v1 : {};
    const ln_v2_checked = [...lnCheckedItems].some(item => item.includes('ln_v2')) ? ln_v2 : {};
    const an_s1_checked = [...animeCheckedItems].some(item => item.includes('an_s1')) ? an_s1 : {};
    
    const lnText = {"ln": { ...ln_v1_checked, ...ln_v2_checked}}
    const animeText = {"an": {...an_s1_checked}}

    animeResults = searchAnime(animeCheckedItems, animeText, filterState.keywords, checkedCharacters, filterState.caseSensitive, filterState.exactMatch, namedActive, namedCharacters);
    lnResults = searchLN(lnCheckedItems, lnText, filterState.keywords, filterState.caseSensitive, filterState.exactMatch);
  
    // Update the state with the search results
    setSearchResults({ anime: animeResults, ln: lnResults });
  }
  
  
  // Add a button in your JSX to trigger the search
  return (
    <div className="search-page">
      <Filters
        animeDropdownState={animeDropdownState}
        updateAnimeDropdownState={updateAnimeDropdownState}
        lnDropdownState={lnDropdownState}
        updateLNDropdownState={updateLNDropdownState}
        filterState={filterState}
        setFilterState={setFilterState}
        dropdownStates={dropdownStates}
        setDropdownStates={setDropdownStates}
        volumes={volumes}
        images={images}
        namedActive={namedActive}
        namedCharacters={namedCharacters}
        setNamedActive={setNamedActive}
      />
      <button onClick={handleSearch}>Search</button> {/* Search button */}
      <Results results={searchResults} images={images} filterState={savedFilterState} />
    </div>
  );
}  

export default SearchPage;
