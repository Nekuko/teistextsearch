const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "notes": {
        "groups": {
            "1": "Season 1",
            "2": "Season 2",
            "m1": "Lost Echoes"
        },
        "0": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "06/10/2022",
            "jp_image": "directors_note_an1_1.jpg",
            "jp_text": "",
            "en_text": [
                "Hi this is the Director.",
                "I've been requested to write something..",
                "So lets get straight to the point. I'm going to talk about the left thing.",
                "We changed the steps from the original(LN) to make the current episode 1.",
                "Some may think",
                "\"Why change the important part?\"",
                "No,its a misunderstanding.",
                "The left(buffed minoru) was Airi-sensei's(teis comic artist) idea.",
                "In the original(LN), Minoru's appearance was written as how it is drawn in the Anime monologue. So everyone read the LN! Still on Sale!",
                "Anyways, you may think again.. \"its unreasonable to bring a story from the middle to the the top.\"",
                "And you're wrong again.",
                "We submitted a proposal(submitted by me) in the meeting where we decided how to script(compose) the whole Anime.",
                "And episode 1 was written in that proposal like this.",
                "「epi 1 is going to be 30mins of Chapter 146 of the WN.」",
                "At that time(where we start to discuss how to make the anime) there were only 3 LN volumes.",
                "Me as the one who proposed thinking I was  bold. But so are the staffs who approved my proposal.",
                "Btw the reason why I submitted that proposal is because it makes it easier to understand what this series is all about.",
                "It's not like we were aiming for the impact.(we wont deny aiming for it tho)",
                "Well we cant talk about this series without his abnormality.......",
                "But we are going to talk about that in the future.",
                "Now if you'll excuse me here.",
                "Enjoy the 20 episodes of TEIS",
                "PS: I was casually talking to a executive and he asked me \"Who do you want to VA Akane?\" Cuz it was formal I answered \"Let's choose Horie-san(Kushieda from toradora, Hanekawa from Monogatari, Kouko from GoldenTime etc..)\"",
                "And there were no vetoes. And thus an absolute popular academic idol was born. Thankful Thankful!"
            ],
            "ml": false,
            "episode": "1",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1577856169351282689"
        },
        "1": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "13/10/2022",
            "jp_image": "directors_note_an1_2.jpg",
            "jp_text": "",
            "en_text": [
                "Hi this is the Director.",
                "I cant hide my emotions that the last text(directors msg) was approved to be published. So I'm going to write another one.",
                "In the episode 2, if you reread the Original(LN) you may feel that TEIS is using a format of a Classic Isekai Fantasy.",
                "「Reincarnated in a local known family」",
                "「While training—」",
                "「Sworn loyalty from a slave girl—」",
                "「Solving a kidnapping case—」",
                "Blah blah blah",
                "And after that it follows,",
                "「Academy in the Capital—」",
                "「With the Princess—」",
                "Yada yada",
                "You can say \"It is a Classic Isekai Fantasy\". But it changes vibes by just adding Formula X in it. So there is still a sleeping Treasure in this \"Isekai\" genre.",
                "———Well",
                "If the Original(LN) was like I said. We wanted the anime to be like that too. So we made the Episode 2 a Classical Isekai episode 1.",
                "I think what sets TEIS and the other Isekai Fantasies apart is the \"Cutted Training\" part.",
                "We didn't just cut it cuz we didn't have the time. We decided to cut it because if the MC was like this we wanted the audience to not know(to be surprised) whats going to happen.",
                "Well. Now we have \"a kinda classical but not that classic Isekai Fantasy episode 1\" Episode 2.",
                "PS: When I saw the design of Olba. I heard the Voice of Rikiya Koyama(Yukichi Fukuzawa from Bunbougu Stray Dogs, Kogorou Mouri from Detective Conan, etc...).",
                "Even tho Olba had a short screen time, thanks to Koyama-san making Olba a worthy opponent of the MC to be shredded. Olba looks strong..... no..... He is strong... He just fought the wrong guy..."
            ],
            "ml": false,
            "episode": "2",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1580392890399805441"
        },
        "2": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "20/10/2022",
            "jp_image": "directors_note_an1_3.jpg",
            "jp_text": "",
            "en_text": [
                "Hi this is the Director.",
                "The set is moving from countryside to the Capital, and the MC is matured.",
                "Looks like we are standing in the starting line of the first episode of the story... HUH",
                "The Episode 1 is episode 1, and then the Episode 2 is actually the episode 1, and now Episode 3 is the episode 1 of the main story..... How many times do we need to repeat \"episode 1\".....",
                "Anyways,",
                "If you're feeling that the visuals are different from the LN..... You're correct!",
                "It's so different.",
                "We have plenty of reasons for that, but the main reason is the appearance.",
                "The characters that Touzai-sensei made revolves around High-school Girls with mini skirt and High heels that is confused about human relationships, and worrying about the gap of \"fantasy and reality\".",
                "——— I think its impossible to put such characters in a idyllic medieval set.",
                "So we decided to make the visual settings into the Early Modern Era. The LN's fantasy-ness is focused on「Spellswords」",
                "and that's why we made the technology that looks like the modern stuffs with a scarce connection to magical elements, just to match the settings.",
                "Oh by the way, Season 1 Opening was drawn like that because I thought \"wait.. maybe we can make TEIS into a Modern ESP Action Anime.....\"",
                "(There is plenty of other reasons but) that is the reason why the OP looks like that.",
                "Anyways,",
                "I can say showing visuals that doesn't directly affect the story is a unique part of \"Anime\"",
                "PS: Alexia is Hanazawa-san(Ichika from Quintessential Quintuplets, Nadeko from Monogatari series, Mitsuri from Demon Slayer).",
                "Sarcastic, Bad attitude, Bad personality. Alexia has all the traits for being a troublesome women. And yet she is elegant. Her anger is always directed to those worthless spineless people.",
                "We had many staffs requesting for someone that is capable to VA such a high demanding character. I was thinking the same too.",
                "And yes. A greater big shot came than I imagined",
                "I'm thankful for the Main VA cast and the Guest VA cast.......",
                "This series is blessed with Voice actors and actresses."
            ],
            "ml": false,
            "episode": "3",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1582929607866597376"
        },
        "3": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "27/10/2022",
            "jp_image": "directors_note_an1_4.jpg",
            "jp_text": "",
            "en_text": [
                "Hi this is the Director.",
                "Alpha wearing a school uniform is just her spiting Alexia.",
                "Alpha might not in screen but she maybe keeping an eye....",
                "Let's talk seriously.... ",
                "What if Alpha appeared in a dress...",
                "What if Alpha did that bed scene in Slime body suit...",
                "I think it would be strange...",
                "So Alpha wearing a school uniform was the decision that most of us felt comfortable.",
                "Alpha is casted as a main character visual-wise. But, LN readers know the fact that MC and Alpha's interaction is not that common. She is that type of strange character.",
                "It was a precious face to face scene. She has to appeal to him at least a little bit. That is how I felt it.",
                "The main topic is Alexia going hard mode. If this series was about 「an outsider MC sweeping to solve the problems」We still need a reason that allows the MC to sweep in.",
                "But due to the nature of this genre. It's also difficult to create a classic \"MC getting cornered and makes a great comeback\" type of story flow.",
                "So we needed an alternative way to do it.",
                "We wanted the audience to feel the \"it doesn't matter which side you're in. Punch that mf bastard\" flow.",
                "And this episode was a preparation. Its not surprising that Alexia going in Hard Mode",
                "So! Next Episode is going to be that scene!!",
                "It took 6takes for Yamashita-san(Shadow's VA) to pull it. Please look forward for it!!!",
                "PS: Alpha's VA is going to be Asami Seto-san(VA of Kugisaki Nobara from JJK, Sakurajima Mai from Rascal Does Not Dream of Bunny Girl Senpai, etc.)",
                "From numerous of tape audition entries. She survived the whole audition with some others. While other were discussing on \"what character fits their voice or whose voice fits the character\" Seto-san is the only actress to pick Alpha without changing her mind from the start till the end. Other characters were already decided, and its time to decide Alpha's VA... Seto-san's name was the only one left on Alpha's VA list. So we offered the role.",
                "While being surrounded with bunch of jerk-offs, Alpha's calm voice is TEIS only hope of it being serious."
            ],
            "ml": false,
            "episode": "4",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1585466314352574464"
        },
        "4": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "03/11/2022",
            "jp_image": "directors_note_an1_5.jpg",
            "jp_text": "",
            "en_text": [
                "Thanks for your time. Director here.",
                "Speaking of which, there are some original elements in the anime, such as guns. This is partly due to the fact that the level of technology in the work has been raised to match the visuals of the characters. This is an alternative to the so-called \"level\" and \"skill\" numerical elements.",
                "The standard numeric element in recent Isekai works can easily measure the \"who is stronger and weaker than whom\" part.",
                "I would have liked to be able to explain the logic behind each character's strength in text as in the original work, but the limited length of the anime and the fact that it is not available ...... made me wonder if there was some way to make the story easier to understand.",
                "Ordinary people from Isekai use guns, just like us earthlings. So, in a cutting edge world there are superhumans who wield swords, there are monsters that mow down the superhumans, and there are great superhumans who can obliterate them.",
                "I thought, \"If I escalate the story in steps, it will be a little easier to see...\" and that's how I made the story.",
                "This kind of thing becomes unnecessary after the tone and manner of the work is conveyed, so you could say it's a fun thing to do in the early stages.",
                "",
                "The instructor is Masaya Matsukaze.",
                "I had hoped that he would be able to bring out this big, pretentious rat with his kind and hostile voice, and I was not disappointed. In addition to that, the design of the awakened state in the original anime is also good. It is really a pity for the character to disappear after just one time!"
            ],
            "ml": true,
            "episode": "5",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1588003029466259457"
        },
        "5": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "10/11/2022",
            "jp_image": "directors_note_an1_6.jpg",
            "jp_text": "",
            "en_text": [
                "Thanks for your time, this is the director.",
                "The sixth episode has been delivered. I guess you could say that this is a Nichijou (ordinary life) episode before the incident. No, you see, it's always bloody... really, so far everything has been bloody except for this episode ......",
                "Anyway, no matter what I write, it seems to get caught up in the flow of the next episode, so I'd like to talk about the OP this time.",
                "If you ask me with a straight face \"What is that\"? The image I had when I received the song (it was a tentative song at the time) was \"flying at high speed through a valley of buildings under a blue sky.\" I had a rule of thumb that if you keep working from this kind of first impression or initial impulse, it will come together in a good way.",
                "But, on the contrary, it was decided that Shadow-sama was not to be filmed under a blue sky... Or, to begin with, it was the role of the \"hero\" to fight coolly in the groovy chorus part, not the job of the \"powerful person behind the scenes\"...? And then I thought, \"Well, what should I do?\" I had already used up all the ideas I had originally planned to use for the OP by the end of the first episode....",
                "As a result, it ended up looking like that. I think that the drama of this work would work even if it were a modern xenomorphic story instead of a Isekai reincarnation story.",
                "The red and white suit is completely different from the one in the original story, and it looks just like a sci-fi suit. I guess it fits well with school parody in that sense as well. I wonder if it is a three-dimensional object or not...",
                "Anyway, this is how it looks this time. It will be a little different from now on. We will use this song throughout all 20 episodes, but we will continue to make changes little by little.",
                "",
                "Gamma is Mimori Suzuko.",
                "As I look back at the documents from that time, I found that I had made a note of \"99 points\" in Mimori's audition. I also made a note that she had the same image I had envision in the early days of the show.",
                "She is an intelligent and beautiful woman and is also a comedian. She is the only person who could play this role."
            ],
            "ml": true,
            "episode": "6",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1590539749852205056"
        },
        "6": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "17/11/2022",
            "jp_image": "directors_note_an1_7.jpg",
            "jp_text": "",
            "en_text": [
                "Thanks for your time, this is the director. We have delivered the 7th episode. The main character died, he also died in the first episode, so let's look forward to the next episode.",
                "\"School\" and \"terrorists\" are staples of storytelling... But I wonder which one will be well received? I think it's because there are fewer school battle stories these days, and there are fewer straight-up terrorist stories coming our way. It has been a long time since Isekai stories became the mainstream in the industry these days, and perhaps the story of a large monster appearing in the forest would be more familiar? Or is that too old-fashioned?",
                "In this work, the story is often depicted in the city, so I can't use such a standard setting very much, but I was thinking of using it to create a unique \"urban Isekai story\".",
                "As a creator, it was fun to depict the foolishness of school boys. I'd like to continue to create scenes with Cid Hyoro-Jaga where they are just talking about stupid things as long as time permits, but, well, there's a lot to do in this work: ...... terrorists are here, and there are more characters appearing....",
                "Anyway, it was a fun episode in that sense. But the nature of this work is like a battle with one's skills. Because of that, the staff is sometimes almost crushed by the volume of work. To everyone involved, thank you for your effort...",
                "As for the terrorists, we'll get to that next time. This time, it's a classic fighting tournament (for the first time). I'm sure there are many readers of the original work who wanted to see this."
            ],
            "ml": true,
            "episode": "7",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1593076467830759425"
        },
        "7": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "24/11/2022",
            "jp_image": "directors_note_an1_8.jpg",
            "jp_text": "",
            "en_text": [
                "Thanks for your time, director here.",
                "We have delivered episode 8. It was an episode that made me think, \"I knew it was a bad idea to have terrorists come to the academy...\". After all, the number of students in this school alone is estimated to be more than 1,000. And the teachers and instructors who instruct them, and the servants who take care of them...",
                "By the way, I assume that the population of Baron Kagenou, the hometown of the main character, is about 1,000~1,500 people in all.",
                "And the terrorists to detain all of them, no matter how many underhand techniques they use, would require a certain number of people. Furthermore, if we count the people outside the school and the people who are planning to attack on the side, the blistering volume of material is outrageous.",
                "Thanks again to everyone involved for all your hard work, and next week is the big day.",
                "",
                "The characters that were added like new medicine are dying in a hurry.",
                "In the midst of that, the play by Okamoto Nobuhiko, also known as Rex-kun, who showed a splendid explanation of his death was fun. There were parts I wanted to dig deeper into, such as the frustration of Glenn and Marco having to fight with a handicap, has helped me every time."
            ],
            "ml": true,
            "episode": "8",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1595613173133897729"
        },
        "8": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "01/12/2022",
            "jp_image": "directors_note_an1_9.jpg",
            "jp_text": "",
            "en_text": [
                "Thanks for your time. Director here.",
                "I feel like this is a story one don't need to think much about, but let's say: If an old man who lost his strength and has been maintaining his strength by sharpening his skills, suddenly gains a strong body. Will he be able to control it immediately?",
                "And what if he is not even aware that he is doing so, even though he is a seeker who is willing to \"Give up everything for his dreams\"? I wonder if he feels he have to see it right in front of his eyes. That is the story.",
                "...but in the sense that he is living for his dream and neglecting his dependents... I don't think he has any right to feel anything about it. The story is just unfortunate for the girl who was involved in it.",
                "However, although the structure of the story itself is not so different from that of Alexia's, the fact that the punchline is so polarizing is due to the character of the heroine, I suppose. She seems to come back on her own without any help, even if she sacrifices a limb or two. In this work, where the only salvation is \"an ending that barely ends in a bad end,\" it was difficult for the beautiful girl to live happily....I wonder what will happen to that girl in the future. .... To be continued .... in the Original work ...",
                "Well from the story title, the atmosphere is different from usual, and the mood is darker this time. The series is 20 episodes, so we can say that the next episode is the second half of the series.",
                "",
                "Lutheran role is Ootsuka-san. He is a master of his craft, especially in expressing the despair of being an enemy so perfectly.",
                "Sherry, who is voiced by Aizawa-san, is a girl who lives in a happy dream but is forced to face reality when that dream was suddenly shattered. Thank you for your wonderful performance."
            ],
            "ml": true,
            "episode": "9",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1598149893201096704"
        },
        "9": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "08/12/2022",
            "jp_image": "directors_note_an1_10.jpg",
            "jp_text": "",
            "en_text": [
                "Thank you for your time. This is the director, bringing you the 10th episode. Can you feel the difference in the mood from last week's serious atmosphere? This is normal as we are entering a new stage and a new arc.",
                "From this time on, the story will be led by the guys who have been working behind the scenes for a while. So, the story will be lighter than before...I guess.",
                "By the way, this time is a long-distance travel episode. I think this is one of the reasons why I proposed the use of train in the anime. For us modern people, it is difficult to measure the distance even if we are told \"X days by horse-drawn carriage\". I thought it would be easier to grasp the distance by adding the familiar element of a train.... And, if we prepare a carriage room at the back of the train, we can handle both travel and rest in one place. As for horse-drawn carriages for the travel... it was very difficult to draw horses.... I didn't know if we could do it at the time, so I couldn't take the risk.",
                "The screen hog during the breast comparison scene... was Mori-san, who also plays the role of Gamma.",
                "",
                "Beta is Minase Inori. The character's popularity demands an actress who is highly sought after inside and outside the work. Currently, Minase is popular among anime fans... It is true that the person who can show Beta's character correctly is also an actress in such a position.",
                "I thought the only one who can play the role of Beta is one who is No. 1 in the industry and is able to stay at the top in a group of elites. The amount of effort put in and the hardships of the actors off-screen are unknown to the masses. But isn't this industry not so different from that of the voice actors? If that is the case, I think the actors are portraying the characters as they should be portrayed."
            ],
            "ml": true,
            "episode": "10",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1600686606960263170"
        },
        "10": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "15/10/2022",
            "jp_image": "directors_note_an1_11.jpg",
            "jp_text": "",
            "en_text": [
                "Thank you for your time. This is the director. Welcome to another episode of the \"Fighting Tournament\" (2nd time) series! I've been thinking about the new characters in this series, and yes, there are a lot of unfamiliar faces, both on the high side and on the low side...? But I think they are doing the most fantasy-like thing ever, with magic circles, summons, beams, etc.!",
                "Speaking of fantasy, there are monsters in the story. The author states, \"Slime doesn't appear anywhere near human villages\", just like wild animals living in the mountains today. I think this is an excellent setting, because you don't have to make any unnecessary assumptions when creating a story, and yet, since it exists as a setting, you can bring it out whenever you want to.",
                "That's why I mentioned some of them in the last issue.",
                "I'd like to do something like an otherworldly fantasy once in a while... or something like that, but I don't know...",
                "",
                "The role of Nelson is played by Mugihito. Well, as you can imagine, he's definitely a bad guy, but he's a charming and lovable priest, and he's oozing hardship from every corner... He's going to have a lot of trouble next week."
            ],
            "ml": true,
            "episode": "11",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1603223323629985794"
        },
        "11": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "22/12/2022",
            "jp_image": "directors_note_an1_12.jpg",
            "jp_text": "",
            "en_text": "",
            "ml": false,
            "episode": "12",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1605760044980736001"
        },
        "12": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "29/12/2022",
            "jp_image": "directors_note_an1_13.jpg",
            "jp_text": "",
            "en_text": [
                "Hi, the director here, and that was Episode 13. Now then, let's talk about Chi(Kai) and Omega.",
                "They are characters from the original work, and by now surely none out there remaineth who still asketh \"Who the heck are they!?\" They are characters from the original work. They are not anime-original characters. They are characters from the original work.",
                "And when I say 'original work', I mean the 'Web Novel' as it is labeled by the general public.",
                "As a fan of the OG, my intention is to pick up as many OG elements as possible. Oh, but of course there are also elements that we cannot pick up, nor do we intend to pick up in the future. But anyways.",
                "Chi and Omega are WN-only characters, and I fear the opportunity for them to appear in the light novel is very far into the distance.",
                "Explanation for the circumstances behind their appearances this episode:",
                "Apparently Epsilon is operating separately within the Holy Sanctuary",
                "I wanted a dedicated scene to illustrate this properly in the anime",
                "As a bonus, we'll use this as a chance to explain the kind of members Shadow Garden, as an organization, is made of",
                "And so we may need some conversational scenes. Should we give the mobs some lines?",
                "It is at this point, while we were going through the script, a certain WN-stan budded in: \"Well, since we need somebody to interact with Epsilon, how about Chi and Omega?\" to which he was met with the \"The heck he's on about?\" look.",
                "By the way, when I suggested to the author for the inclusion of these two, he couldn't help contain his bewilderment: \"Include them and do what?\"",
                "To be fair, I would have had the same reaction if I were in their shoes.",
                "So I pushed through with the reasoning that WN fans (a.k.a. me) will be happy to see them, and while we were at it we also commissioned Mr Touzai for their character designs...",
                "That said, the 'original work' as defined by the general public does not have these two characters, and so they are treated as nothing more than 'flashy-looking mobs' within the anime.",
                "Perhaps many of you would have noticed, they were never once called by their names within the show. Blonde hair is Chi(Kai), black hair is Omega.",
                "Please do take this opportunity and give them your support."
            ],
            "ml": false,
            "episode": "13",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1608310297432924160"
        },
        "13": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "05/01/2023",
            "jp_image": "directors_note_an1_14.jpg",
            "jp_text": "",
            "en_text": [
                "Thank you for your time. This is the director, and we have delivered episode 14!",
                "This is the end of the sanctuary, the end of the amount of things to be done. Well, it's impossible to make everyone wear armor if it's going to be like this, so we had to simplify the costumes and make the background art look unnatural with those outfits.",
                "As for the tron suit... Well, originally, it was half-naked beautiful girls fighting against a half-naked old man... I was originally thinking of dressing it up like an ancient Roman swordfight, and then I came up with the gimmick of a sci-fi style sanctuary...... And then I thought, \"Well, what's the best way to do it?\" Therefore, I thought that the full-body tights type would have to be the chosen style. Well, the whole concept of the \"Diabolos cult power-up\" is \"power-up\". Because of that, Nelson thinks he has become a superior being.",
                "And so, the story towards the end will begin in the next episode. Please stay with us.",
                "",
                "Nazuka Kaori is Aurora. Aurora's voice could only be described as perfect, with an aloof mischievousness and a shadowy air that gave off a sense of piled up years.",
                "She was like a beautiful, mysterious, bloodthirsty sister.",
                "It's a pity that her appearance is limited to this episode!",
                "I wonder if she will ever come back?"
            ],
            "ml": true,
            "episode": "14",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1610833465208934402"
        },
        "14": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "12/01/2023",
            "jp_image": "directors_note_an1_15.jpg",
            "jp_text": "",
            "en_text": [
                "Thank you for your time. This is the director and we have delivered episode 15.",
                "The OP has changed again, and the final chapter has begun, and it's a standard martial arts competition (for the third time). Why cast Midorikawa Hikaru all of a sudden? Well, because I've been a fan since I was watched \"Pa 0°7-kun\".... I am 90% serious and 10% joking.",
                "There is the casting of the new characters around Jimina, more than for Jimina himself. It's just the nature of the genre. The new characters in the middle of the story turns against the main character if it is necessary. And I'm talking about the case where the entire street turn against him. But the creator wants the characters to be adored and cared for, even though they appear as mobs in the street at large.",
                "My choice would be Midorikawa Hikaru (honorific title omitted) as Jimina. There are probably not many anime viewers who don't know who Midorikawa is. With the image of his voice from the many roles he has played, the many characters who point at him saying \"Small fry, small fry\" are beyond pathetic and seem more like adorable creatures.",
                "I am trying to do something a little tricky by borrowing power outside of the screen. This is because the work itself was originally designed to enjoy the confusion of the whole situation from a remote position, rather than to enjoy the work by getting emotionally involved in someone or to engage deeply with the world."
            ],
            "ml": true,
            "episode": "15",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1613370304755105792"
        },
        "15": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "19/01/2023",
            "jp_image": "directors_note_an1_16.jpg",
            "jp_text": "",
            "en_text": [
                "Thanks for your time. This is the director and we have delivered episode 16. Now, it's time to talk about these two. Zeta is Asai Ayaka and Eta is Kondou Reina. The main characters! But even though the characters are mentioned in the material, there is almost no dialogue, and since they have not appeared in any existing productions, there is almost no data on them.",
                "Shadow Garden Seven Shadows, seven mysterious and beautiful girls who follow the main character is an element that I definitely want to write and promote in terms of sales but it's not that kind of story. I checked the original work and found that it was necessary to depict all seven girls together at least once at some point. Specifically, it seems that all seven members are already together around page 64 of the first volume of the original work. And since the main story starts after break up of the seven, it would be bad if the seven didn't line up at least once.",
                "By the way, in the anime, unlike the original, the members of the Shadow Garden hide their faces with hooded cloaks instead of masks. It's tough to increase the cost of the work where the modern anime characters, with their eyes and complex tangled bangs, have to be further hidden. And that's a big part of the reason why, there was also the decision to consider whether it might actually be necessary to hide the faces of the two who are not in the original work.. At the time, I was thinking that if I put a hood over everyone's head, I would be able to \"show them without revealing them\". Well, when I checked with the original work author, he replied, \"You can show them and let them talk,\"....No matter how hard we try to animate the characters who have not appeared in the original work, their characterization will be blurred. So we decided to treat the two characters in the anime in such a way that you may think, \"Well, they are interesting in their own way, so maybe it's possible.\"",
                "The original has not yet appeared...the anime precedes it...the characterization...I feel like I've heard it somewhere..."
            ],
            "ml": true,
            "episode": "16",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1615907035064766464"
        },
        "16": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "26/01/2023",
            "jp_image": "directors_note_an1_17.jpg",
            "jp_text": "",
            "en_text": [
                "Thank you for your time. This is the director and we have delivered episode 17. As a side note, the color of \"magic power\" indicates the character's position or stance. It's like \"low,\" \"chaos,\" \"light,\" \"dark,\" or something along those lines. I have not decided what color means what attribute, so you should think about which force the characters belongs to.",
                "So, now that we are almost at the end of the story, let's talk about the ending theme while we still can. The main beautiful girls with illustrations that have nothing to do with the main story will take turns doing character songs. I am sorry but I had to make the words bigger at the site's request. One of the reasons is that there were not so many shades of gray in the ED!",
                "I thought it would not make anyone happy if I forced their \"appearance for appearance's sake\" into the main story. And I was not happy with the way they were presented in the main story. If that's the case, I thought we should reserve the OPED as their exclusive slot! If the ED is not connected to the main story from the beginning, it will save us from increasing our workload!",
                "The reason that the ED theme consists of cute picture and song, is because of the intense (opposite) content. By the way, the order of the EDs is decided by Dice-san after the first episode. Considering the number of songs and the number of remaining episodes in the main story, please understand that some of the characters will not be featured...",
                "By the way, there is a pattern in the processing of the ED images and the results shows the professionalism of the cinematographer.",
                "",
                "Hayami Show is Doem Ketsuhat (Perv Asshat). It's a scam, isn't it? I don't think it's funny if this handsome guy calls himself a \"doujamu\" or \"doumu\" or something like that, maybe..."
            ],
            "ml": true,
            "episode": "17",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1618443719195398145"
        },
        "17": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "02/02/2023",
            "jp_image": "directors_note_an1_18.jpg",
            "jp_text": "",
            "en_text": [
                "Thank you for your time. This is the director, and we have delivered the 18th episode. This is the last harmonious story, I guess.",
                "Fushianasu-san... No, Fushianasu... The full names of the original characters, with their last names, are all decided by the original author. Nelson (I didn't know it was a last name...) and Midgar and Oriana, too.",
                "I thought it was unbalanced that Jimina gave his full name in the meeting scene, but Annerose only gave her first name. And this is what I came up with. There is a color illustration of her in the original work and a standing picture at the end of the book. It made me think that she is definitely a new heroine...Fushianasu! I was influenced by the way the story was presented after all. I've come up with a lot of names for mob characters, but I think it's hard to beat the original...",
                "",
                "Annerose is Wakayama Shion. Wakayama's line \"I have completely seen through your movements\" left a lasting impression on me. Actually it was \"I have seen through your movements\" in the script. The word \"completely\" was ad-libbed by the performer, but she was not even aware of it! We did not NG the line. I thought \"Well, but it's Fushianasu, and it sounds like Fushianasu, so it's OK to adopt it\".",
                "At this point, I thought \"Isn't the character too pathetic if you add 'completely'\"? It was a word that was supposed to be omitted from the script. But if it came from the performer's subconscious, it can't be helped. That's the kind of star you're born under, Fushianasu."
            ],
            "ml": true,
            "episode": "18",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1620980326733434880"
        },
        "18": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "09/02/2023",
            "jp_image": "directors_note_an1_19.jpg",
            "jp_text": "",
            "en_text": [
                "Thank you for your time. This is the director and we have delivered episode 19.",
                "What did they do to deserve all these? Of course, they didn't. In fact, they only done what is good and needed for the masses and stopped when it was necessary.",
                "I felt that the essense of the story is that these righteous people are not rewarded, which is the impression I had when I re-read the original work upon accepting this job. The story also follows the usual trend of where the righteous person is hurt for picking a fight with the protagonist but somehow, it didn't make me laugh a bit.",
                "The original author wrote a really harsh story, but as you know, this is also where his (Cid) story starts. I hope you will see it through to the end and I look forward to seeing you in the next and final episode.",
                "",
                "Iris is played by Hikasa Youko.",
                "While the story centered on the heroine of each chapter, when we put all 20 episodes of the anime series together as a story, we need a central character. And Iris is the one we need. Since we knew that it was going to be like this, it was only natural that the actress we should ask would be her.",
                "Beatrix is played by Komatsu Mikako.",
                "Although she is mentioned as the strongest in the series, there are almost no battle scenes. So we had to give the impression of strength only by the atmosphere... In this situation, Mikako Komatsu's voice was a great help.",
                "A strong person is one who can afford to be composed, and a composed person is one who can enjoy a meal. And it really helped that the burger looked delicious!"
            ],
            "ml": true,
            "episode": "19",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1623517280712761344"
        },
        "19": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "16/02/2023",
            "jp_image": "directors_note_an1_20.jpg",
            "jp_text": "",
            "en_text": [
                "Delta is Fairouz Ai. I was rereading the original, and I happened to hear Delta's voice on TV. And I decided that she was to be Delta. I remember the character was carrying dumbbells...",
                "I'm very sure that I didn't feel like asking anyone else and she is the only person I would have asked. But if there was any miscalculation, it would be that she went on to become a popular actress at a very fast pace but I'm glad she accepted the role.",
                "There was almost no dialogue (for Delta), especially in the anime....but if only there was a continuation!!",
                "Note: Fairouz Ai voiced Sakura Hibiki in \"Dumbbell Nan Kilo Moteru?\"",
                "",
                "The main character Cid is played by Yamashita Seiichiro.",
                "I am sure that everyone who first heard the news of the anime adaptation probably had a certain person in mind when they thought of him, dressed in a black coat and performing in an exaggerated manner. We could probably guess the actor everyone had in mind.",
                "But we decided to go with him (Yamashita). After all that is said and done, I can put it into words. I would like to summarize it vaguely as \"Because it was necessary\". I think that's a good reason, isn't it?"
            ],
            "ml": true,
            "episode": "20",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1626061306309517313"
        },
        "20": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "22/02/2023",
            "jp_image": "directors_note_an1_th.jpg",
            "jp_text": "",
            "en_text": [
                "The Eminence in Shadow",
                "2nd Season",
                "Hello, this is the director.",
                "Nice to meet you, thank you for watching \"first season\", and the broadcast of the \"second season\" was decided.",
                "As you can see from the past tense, there are a lot of intersting stories around here, but I'll probably have a chance to talk about them elsewhere.",
                "In any case, we are currently working hard on the production, so please wait it's short but that's all for now.",
                "Thank you for your continued support."
            ],
            "ml": false,
            "episode": "th",
            "anime": "1",
            "link": "https://twitter.com/Shadowgarden_PR/status/1628369009648467968"
        },
        "22": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "23/02/2023",
            "jp_image": "directors_note_an1_a.jpg",
            "jp_text": "",
            "en_text": [
                "Sherry",
                "A conversation one day.",
                "\"It's about Sherry\"",
                "\"Yes.\"",
                "\"It's just the way the story is supposed to flow.\"",
                "\"I've checked the original work. That's why we've come up with this storyboard.\"",
                "\"Yes\"",
                "\"But I am not sure if it's a good idea to add this to the anime that wasn't done in the original work.\"",
                "\"Huh? I see your point.\"",
                "\"That's right\"",
                "\"Yes\"",
                "\"Aizawa-san, anything from you?\"",
                "\"No.\"",
                "\"Any opposition to this?\"",
                "\"No\"",
                "\"Are you upset about this?\"",
                "\"No\"",
                "\"Should I do a retake?\"",
                "\"No\"",
                "\"Really\"",
                "\"Yes\"",
                "\"And Sherry?\"",
                "\"Yes\"",
                "\"Yes\"",
                "That's what happened.",
                "Rose",
                "Q. It's not a good time to introduce the haircut (of Rose)!",
                "A. I think so, too.",
                "In episode 1, Rose....666 appeared. 664 and 665 as well. But the original work had only been published up to the third volume at that time, there was no character design. Our policy was to ask Tozai-san to come up with designs for the more important characters. So naturally, we ordered designs for these girls as well. And then, he came up with the following: A rough design with their hair short. Naturally, we proceeded with the work according to the rough design.",
                "Just as I was thinking that with this design, the hair cut (of Rose) would be performed in the final episode... I read the fourth volume of the original work and could not believe my eyes. Sad news: Rose's hair is still long in the illustration. No, no, no, no.... What should we do, forget about the first episode and stop the cutting of her hair in the last episode? I even went so far as to ask the author about it, and as a result, he said, \"Don't worry, I'll have it cut in the original story too!\". He said he had thought of a good time to do it. So, he decided to adapt it to the original work afterwards.",
                "Conclusion. A rough design is just that, a rough design. Things happen.",
                "Shadow",
                "Q.They will know, right?",
                "A. No, they won't.",
                "I'm serious. It is not for the sake of the animation, but for the sake of the story. The change from Cid to Shadow is not only in his costume, but also in his height, build, hair length, and eyes. It's easy to understand if you look at the settings. In other words, it is not a \"disguise\" but a \"metamorphosis\" or \"transformation\".",
                "Of course, people in that world cannot instantly change their height and weight. If there is a person with a clearly different physique in front of them, that is a different person. They will not be able to recognize them. We, who are looking at it from omniscient point of view, are able to tell by the color, the voice, and the transformation scene, but there is a difference in consciousness for the people who are seeing it in front of their eyes and those who are not. This is the reason why Shadow is not exposed. Of course, this is just an excuse I prepared for the fact that I had to leave out the mask due to the work schedule.",
                "What about the girls? I have a feeling that if they were to wear hoods and their silhouettes were uniformly inconspicuous, they wouldn't be noticed too. If they just put on masks as in the original story, it would be obvious from their hair style.",
                "In case you are wondering, there is no problem when Shadow Garden comes out showing their face...because there are \"no witnesses\". Like in episode 2 or 4...."
            ],
            "ml": true,
            "episode": "a",
            "anime": "1",
            "link": "https://x.com/yaduka301/status/1628591706278084609"
        },
        "23": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "05/10/2023",
            "jp_image": "directors_note_an2_1.jpg",
            "jp_text": "",
            "en_text": "",
            "ml": false,
            "episode": "1",
            "anime": "2",
            "link": "https://twitter.com/Shadowgarden_PR/status/1709765845164171346"
        },
        "24": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "12/10/2023",
            "jp_image": "directors_note_an2_2.jpg",
            "jp_text": "",
            "en_text": [
                "Hi this is the Director. That was Ep2.",
                "Even if it's a little bit stiff, there is something we can gain from an Exploding PunchLine.",
                "Plus Sugita-san's beautiful voice adds further more impact to the punchline.",
                "Anyways Let's talk about the OP and ED.",
                "The OP is what the OP is. According to the series' MC it was a \"Cutting everything down except for the necessary stuff\".",
                "The S1 OP was made in a jumpy way.",
                "The fact that S2 OP was done straight may have been surprising.",
                "Aaaand about the ED.....",
                "The story that I'm going to tell is kind of a non-fiction story but hear me out....",
                "-One day-",
                "\"Umm about the ED.\"",
                "\"What about it?\"",
                "\"We spent too much money on S1's ED.\"",
                "\"I wonder.\"",
                "\"So I propose...\"",
                "\"(Looks like we are going to have single song and no characters singing)\"",
                "\"4 characters singing!\"",
                "\"(What the hell is this man talking..)\"",
                "\"So who are we picking?\"",
                "\"Hmmmm let's separate 7 into 1,2,2, and 2.\"",
                "\"That would be 7 recordings and the cost will stay the same.\"",
                "\"I see.\"",
                "\"So pick 4 characters.\"",
                "Alpha aside, I don't want to make it like I'm ranking the other six.\"",
                "\"Naruhodo.... So Alexia and others?\"",
                "\"Nope, I don't want the characters that is involved in the main story to do meta-fiction elements in the anime.\"",
                "\"What about the Seven Shadows (Shades)?\"",
                "\"Shadow Garden characters (7shades) is our PR characters outside this work.\"",
                "\"Naruhodo, soo the characters from SG side that is likely to appear in S2 are...\"",
                "\"Yes, but I don't want to use 664 and 665 because they are involved with 666...\"",
                "\"So a character that some reputation but doesn't get involved with the main story..\"",
                "\"Nu, Lambda, Chi(Kai), and Omega?\"",
                "\"Let's roll with that\"",
                "\"Really?! Chi and Omega hasn't even appeared in the LN yet.\"",
                "\"I don't see any problems.\"",
                "And thats how it turned out.",
                "There are many stories that went like the story I told. I'm sure the people who were involved was having a rough time.",
                "Oh btw the artist of the art behind this msg is not the S1 legendary super animator... his schedule was full so I asked someone who is close to me.",
                "Anyways",
                "Stay tune for the next episode where the trigger gets lighter and lighter to pull.",
                "PS: Juggernaut's VA is Tsuyoshi Koyama-san! *Not to be confused by Rikiya Koyama (Olba's VA)",
                "Tsuyoshi-san's voice is what I heard when I saw Juggernaut's design.",
                "Wild and excellent!",
                "Oh as you know,",
                "its not \"ジャガー (jagā)\"",
                "Its z\"ジャガ (jaga)\"",
                "We made the mistake in front of the author Daisuke himself. When we found out that we were pronouncing it wrong we froze.",
                "Crimson's VA is Tomokazu Sugita-san!!",
                "Beautiful voice. It is really beautiful when you hear it in person.",
                "I love Crimson's design that adds more beauty to Sugita-san's voice.",
                "So thats why he got that treatment...."
            ],
            "ml": false,
            "episode": "2",
            "anime": "2",
            "link": "https://twitter.com/Shadowgarden_PR/status/1712302076674658740"
        },
        "25": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "19/10/2023",
            "jp_image": "directors_note_an2_3.jpg",
            "jp_text": "",
            "en_text": [
                "Hi, this is the Director.",
                "Episode 3 was Lawless City-Arc's final episode.",
                "Ummm... when I was drawing the storyboard, I realized about something.... Or should I say something fell from the heavens.",
                "\"Wait? Maybe it's time to show it.... It's natural to pull it in this story flow\"",
                "Let me paint the picture. There is no characters that adversely affects the future story of the LN in the screen..",
                "Hmmm.... Looks like it's doable... Wait... Maybe we are changing it too much...",
                "But since I came up with the idea, might as well draw it and show it to Daisuke- sensei. If we get rejected, I'm just going fix it....",
                "Long story short, the idea was accepted. So thank you Nazuka-san (Aurora's VA). Yamashita-san (Shadow's VA) teaching Nazuka-san how to say it was a funny sight to see. But lets keep it secret.",
                "We have another topic. Many people might be thinking \"Why is it on the left arm?\"",
                "Well..... this is.... ummm.... You know.. haha",
                "Well in the LN's ■■■ the ■■■ is ■■■",
                "and that ■■ is \"■■■\" with ■■.",
                "This time it was",
                "\"■■■'s ■■\" \"■■■'s ■■\"!",
                "We asked the author about but he replied",
                "-\"I had no such intentions to make it like this at that time.\"",
                "Yes. I expected this answer.",
                "So now we are told to do whatever we want to do and maybe this",
                "■■■■■■■■■.",
                "So we decided to make the ■■■ on the left arm.",
                "In terms of Evil eye contents, It's true that its harder to understand it, but to make the story after this easy to understand. It must be done.",
                "We still have problems left but next episode is a new story!!! That voice.... Is that...",
                "",
                "PS: Elisabeth is voiced by Saori Hayami-san",
                "This character called Elisabeth is only explained by other characters through their flashbacks. Even in LN.",
                "Actually she has no single phrase. There is no problem with that... Wait If she doesn't speak, the last battle is going to end up like the Lindvurm (Sacred Land) arc....",
                "So we decided to make her say a phrase and make it understandable to the audience what kind of a character she is...",
                "Well I'm sure she is a \"good person\".",
                "And I wanted her to sound like a \"good person\" so I asked Hayami-san to voice over Elisabeth."
            ],
            "ml": false,
            "episode": "3",
            "anime": "2",
            "link": "https://twitter.com/Shadowgarden_PR/status/1714838791972896995"
        },
        "26": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "26/10/2023",
            "jp_image": "directors_note_an2_4.jpg",
            "jp_text": "",
            "en_text": [
                "Hi this is the Director.",
                "That was Episode 4 and Fake Bill arc starts!",
                "That means \"John Smith\" is here!",
                "John Smith's VA is Jun Fukuyama-san. A lot of people might expected it. I'm with the \"a lot of people\" side. I couldn't think of someone else other than him.",
                "In this arc, there is no need to go crazy.",
                "Therefore I think he is the most fitting VA. So sit back, relax, and enjoy.",
                "Anyways, Finally we are in the Fake Bill arc. This arc made me think back. Reading Chapter 21's (WN) \"■■\" text made me sure that this series is getting novelized.",
                "And then Chapter 136 is where I thought",
                "\"This series is definitely getting an anime adaption.\"",
                "It was exactly at the Fake Bill arc. October 2018 was the date which the revisions were added.",
                "It was 5 years ago..... Damn we've come so far.",
                "When I was told to be the Director.",
                "Visualizing this arc was the first thing that came to my mind.",
                "Now, how to recreate that feeling after reading the WN in the anime.",
                "I wanted to recreate it, so that is why we used 20 episodes to adapt the Vol.1 and 2.",
                "Audience might say \"We thought there was was no 2nd Season\"",
                "Well back then I was thinking \"If we made the 20 episodes with our heart, They might want us to make additional 2 or 3 seasons.",
                "At that time, I was aiming for \"I want to do this arc in here and that scene in that.\"",
                "I'm amazed that it came true....",
                "I'm so thankful for everyone and the staffs for giving me such an opportunity.",
                "With that being said. Stay tuned for the next episode!"
            ],
            "ml": false,
            "episode": "4",
            "anime": "2",
            "link": "https://twitter.com/Shadowgarden_PR/status/1717375511838556625"
        },
        "27": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "02/11/2023",
            "jp_image": "directors_note_an2_5.jpg",
            "jp_text": "",
            "en_text": [
                "Hi this is the Director. That was Episode 5.",
                "Just in case you're wondering. Gamma's scene was written by me and passed to the Filming Director.",
                "In other words it was our methods. Yes.",
                "Oh Btw,",
                "Us and the girls had same reaction while making the series in the advant (The scenes before the OP). For some reason someday in the S1's Dubbing session, we had a time to look back S1's character profiles.",
                "Our reaction was \"Eh?\". The staffs were surprised by the \"16\" and \"17\". What a healthy girls.",
                "Anyway, New characters again! And his name is \"月丹(Gettan)\"...",
                "Hmm? \"月丹(Gettan)\"?",
                "\"ユキメ (Yukime)\" is \"ユキメ (Yukime)\"",
                "But \"月丹(Gettan)\" is not \"ゲッタン (Gettan)\"?",
                "What is the meaning of this?",
                "I think its impossible for Kanji to exist on this world. So maybe they use Kanji to translate the ideograms in this world into modern language. And looking at Gettan's outfit, His origin must be close to irl Asian culture.",
                "If the series's main stage is European-like, and the culture is molded by the endemism of that region. There has to be distance between culture spheres just like in reality.",
                "And yet Gettan holds a position in a distant foreign land. (even though it's an underground)",
                "He is used to accept different cultures...",
                "Interact with lots of ppl...."
            ],
            "ml": false,
            "episode": "5",
            "anime": "2",
            "link": "https://twitter.com/Shadowgarden_PR/status/1719912315502657838"
        },
        "28": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "09/11/2023",
            "jp_image": "directors_note_an2_6.jpg",
            "jp_text": "",
            "en_text": [
                "Hi this the Director!",
                "That was Episode 6.",
                "Since the Mc is the MC, I was expecting that \"no way he hurts the heroine.\" Looking at his past scenarios. The Mc's might sound like a moron but his attitude was willing to help. I had some kind of level of trust for him..... but this MC..... Not only the heroines, he also betrayed the audience with no reason at all.",
                "\"How to finish the MC's mistakes?\"",
                "\"Can we completely erase the reader's frustration?\"",
                "I was thinking about those stuffs while waiting for some updates.",
                "This chapter(arc) is really my favorite.",
                "The plot makes me want to jump into a fire just to take a risk of getting burned.",
                "I bet there is only few people that are willingly to write this arc.",
                "And I was thinking. How great could it be if I landed it perfectly.....",
                "With that being said, it was a battle episode!",
                "Money related gang wars,,,,,",
                "Stack of cash,,,,",
                "Train robbery,,,,",
                "Insane fast paced fights inside and outside a moving train,,,,",
                "This is it. This is the one. I'm surely it will be great to watch.",
                "If we are going to add some stuff, I'm going to make this part the action part that is worth to watch.",
                "I was thinking of adding Delta's fight scene in S1 which is not in the original work(LN). Well it got added to the S2 so we protraited action as much as we could as a TV series.",
                "Phew... as always my words were unorganized, but I'm looking forward to see you next time!",
                "Does this story even ends....",
                "PS: I want to listen to the convo of Gettan and Garter all day.",
                "Mentioning Namikawa-san (Gettan) and Chafuurin-san (Garter) might be needed but, they are funny even though both of them are just talking about bad stuff.",
                "So Gettan's VA is Daisuke Namikawa-san!",
                "There is a lot of actors that can act as a \"cool adult\" but Namikawa-san is an actor with a voice that can express the miserable and shameful part of the adults. Sounds strong and cool, but somehow a hopeless aura comes with it.",
                "Muy Excelente"
            ],
            "ml": false,
            "episode": "6",
            "anime": "2",
            "link": "https://twitter.com/Shadowgarden_PR/status/1722448932230287734"
        },
        "29": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "16/11/2023",
            "jp_image": "directors_note_an2_7.jpg",
            "jp_text": "",
            "en_text": [
                "Hi this is the Director.",
                "That was Episode 7 with Special ending.",
                "In this genre, it's hard to end a story with a MC not gaining a thing.",
                "Putting the story together with what the MC wanted being stolen, while the genre likes to take the method of \"Take Everything\" makes hard to convince the audience. If we wanted to do it till the end, we need to wait and see the expression of the audience. That kind of balancing skills are wanted.",
                "If we made the audience laugh while watching the MC gets no gain or gets robbed by \"the Enemies\" is a accomplishment. There is nothing to say than \"We did well\".",
                "Its no wonder why one of our troublesome reader (definitely not the Director) was convinced that this WN is getting an adaptation.",
                "Anyways, What is the best way to end the story if we animate it.....",
                "I don't want to cut any dialogues but, adding the whole conversation makes it boring. Although we need a \"desecrate the scene\" type of punchline.....",
                "Desecrate...... I see.....",
                "Let's make it a Special Ending!",
                "First, make a sentimental music about Yukime and Gettan's years of love-hatred relationship, and put a shi*ty convo above the music to shatter the scene.",
                "\"————. As I requested, I want it to be blasphemous. So make a sentimental music\"",
                "\"Ok\"",
                "And just like that, the music that I requested was used in the Ending. I swear there was no \"tricking the composers to make the best song they can do.\". We already told them about the usage of it. I promise.",
                "Let me express my gratitude to the staffs again. Thank you for your work.",
                "Even one of our high position staff said \"Forget about those character songs. Make this the normal ending song.\"",
                "So make sure to enjoy the song as a single song too!",
                "And with that being said,",
                "Next episode is going to be a new arc....",
                "Hmmmm..... Huh?",
                "PS: It's a unnecessary topic but we made this Delta (The one in the background of the raw) appear in S1's last part, to make the reunion in the S2EP4.",
                "Well she was already bound to reunite with BOSU in this arc. But yeah, that's when I figured that she can't appear in the First Episode along with 6 others.",
                "So that is why the avant of the season was like that."
            ],
            "ml": false,
            "episode": "7",
            "anime": "2",
            "link": "https://twitter.com/Shadowgarden_PR/status/1724985653954494784"
        },
        "30": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "23/11/2023",
            "jp_image": "directors_note_an2_8.jpg",
            "jp_text": "",
            "en_text": [
                "Hi! This is the Director!",
                "That was Episode 8.",
                "It's Anime Original time.....",
                "(\"It's Hunting time\" reference)",
                "Why? Let me explain.",
                "I already said it a million times but I'm going to say it again.",
                "\"I LOVE FAKE MONEY ARC\" but thats that and this is this.",
                "After all the things that the MC did to the heroines, just to appear next week like nothing happened is a bit weird.",
                "Also he himself said \"Maybe it's correct to put some distance.\"",
                "Reading the WN, you can feel the Mc and Author had a burnout syndrome in the Prison Break Arc.",
                "Even the LN..... you know....",
                "There was a time that it took a year to publish a new volume...",
                "I was even relieved for his come back.",
                "Anyways,",
                "Following the LN, having an interval in the anime is inevitable. And using this episode as an interval between arcs was all according to plan.",
                "So it's obvious for \"what to do next?\" to rise to the surface.",
                "Personally I wanted to do the Prison Break Arc, but we don't really have that much time.",
                "Actually the reason that I can't make it is because I couldn't think of methods to solve the setting differences between the WN and LN.",
                "I did came up with a solution right now, but unfortunately its too late.",
                "So, we had a meeting about \"what to do next?\". Make a story about the past? Make an original story for the anime? Those sort of stuffs.",
                "And suddenly a bigwig said \"Can't we just request Sensei (the author) to write something?\"",
                "All of us looked at each other unintentionally.",
                "\"What if the new volume gets delayed due to our request?\" Says the Director. Well let's just ask sensei and pray for the best. —————",
                "And thus this Episode was born.",
                "By the way, the request was \"Seven shades (shadow) with Po and Skel, NO CID\"",
                "Thank you for your help Aizawa-sensei. Let me borrow this place to express my gratitude.",
                "Oh and by the way, It was me. It was me who said",
                "\"If the author himself is helping, It should be natural for the illustrator to help.\"",
                "and pressed such demands.",
                "Thank you too Touzai-sensei.",
                "PS: 原作 (gensaku) \"Original work\" is",
                "different from 原案(gen・an) \"Original Plan\"",
                "Just like how 監督 (kantoku)\"Director\" and",
                "監修(kanshū)\"Supervisor\" different is.",
                "Well it depends on the series so it's slightly difficult to understand.",
                "But in our case Author writes the \"Original work\"",
                "↓ Make a script based on the \"Original work\"",
                "↓ The Author checks the script....",
                "That's how the anime was made.",
                "Oh speaking of \"Original work\".",
                "I wonder if the short Original work gets published somewhere."
            ],
            "ml": false,
            "episode": "8",
            "anime": "2",
            "link": "https://twitter.com/Shadowgarden_PR/status/1727522366631141837"
        },
        "31": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "30/11/2023",
            "jp_image": "directors_note_an2_9.jpg",
            "jp_text": "",
            "en_text": [
                "Hi! This is the Director and that was Episode 9.",
                "It was all performance including the staff roll. By the way, in the art context and setting names are.....",
                "Wait, in the script it is different....",
                "It's hard to Explain...",
                "Anyways,",
                "Bushin Festival was in the summer and the anime is currently in the middle of winter.",
                "In exchange for his own work, he was supposed to agree to help us achieve our goals. But I realized I was just a Vanguard for the Organization. (this is bu-shi-!)",
                "Based on those circumstances, it's been months already. The current situation must be \"One's heart is festering\"",
                "Although, the industry is still hard for those who are not thorough with their actions as usual.",
                "I have a feeling that the closing chapter is going to be pain in the ......",
                "Anyways, we are entering Vol 4 from today. We are entering and I wrote \"closing chapter\" earlier....",
                "Some of you might already guessed it based on the remaining episodes. Yes, S2 is going to end in the middle of Vol4.",
                "After S2 with 12 episodes got decided to be made, I was thinking \"How to assign the Chapters (arcs)\".",
                "12 episodes is too long for a single volume, and its too short for 2 volumes.",
                "Its basically 「帯に短し襷に長し (Obi ni mijikashi, Tasuki ni nagashi)」 *Meaning: It's good for neither this nor that",
                "\"So let me do 1 and a half Volume.... though I haven't heard other series doing it\"",
                "\"Oh... Ok...\"———— and thus another unheard lighthearted decision was made.",
                "S1 having 20 episodes and S2 ending in the middle of a volume....",
                "This anime really loves doing special things..... Well, streaming is the mainstream nowadays, so organizing stories per cour mightt be turning into an old method.",
                "Oh speaking of \"Organizing\"",
                "There is a rumor that there was a human who wanted to make S2 starts in April",
                "after the S1 ends in February.....",
                "Stahp. You want us dead?",
                "That's all. Stay tuned till the end.",
                "",
                "PS: Two girls that couldn't get to wear swimsuits due to the story.",
                "664 is Miyu Tomita-san",
                "665 is Hina Yōmiya-san",
                "There was nothing to say, they slayed their roles and did a good work.",
                "Comparing them to the Religious Euthusiasts girls, both of them prioritize their work. \"If they prioritize their private lives nothing will be left\". We made both of them to move under such images.",
                "They are not slacking off. I think.",
                "Well both of them are those type of girls that will put their lives when necessary.",
                "Just like in the episode."
            ],
            "ml": false,
            "episode": "9",
            "anime": "2",
            "link": "https://twitter.com/Shadowgarden_PR/status/1730059076229550537"
        },
        "32": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "07/12/2023",
            "jp_image": "directors_note_an2_10.jpg",
            "jp_text": "",
            "en_text": [
                "Hi it's the Director! That was Episode 10.",
                "The topic that I'm about to tell is nothing special. But hear me out.",
                "Imagine you're in a Cinema (Theater) and you're leaning forward from your seat because its the climax scene.",
                "\"But you feel thirsty, so you take a sip.\"",
                "\"But you feel peckish, so you reach for the popcorns.\"",
                "Those kind of behaviors are not an act of bad will.",
                "\"Being Impressed\" and \"Physiological Needs\" can exist at the same time.",
                "In other words...... how do I put it...",
                "Hmmmmmm.... Yeah....",
                "Now I know you want to say \"what is he talking about?\"",
                "Don't worry that's the normal reaction.",
                "Anyways,",
                "We've been making 30 Episodes of this anime.",
                "And the current episode is the first episode that has no battle scenes.",
                "S1E3 had no battle scenes but there was a sword wielding scene, so this episode is the first one to totally have no \"fighting scenes\"",
                "There were some plans to bring a battle scene from the WN or make some anime-original fighting scenes. But adding them would make us choke ourselves time-wise.",
                "So the plan was rejected.",
                "Well the current situation is boiling, And the powder keg is about to blow!",
                "That's all for today!",
                "It's been long since I wrote a short note..",
                "Maybe I've been writing long notes the whole time....",
                "",
                "PS: Natsu and Kana, Yukime's underlings.",
                "Natsu is Kaya Ichinose-san",
                "Kana is Madoka Asahina-san",
                "It's slightly confusing but generally speaking. The base that SG was using in the episode was from Yukime's company.",
                "So Natsu and Kana was to appear.",
                "But in the Editing phase, they didn't make it to the cut. Wait.... One made it through..",
                "By the way,",
                "Both of them have a line in the Original Work, and they were close to the main characters.",
                "And I thought they would had good amount of screen time. So we went to ask Touzai-sensei to draw their Character designs.",
                "We wanted to use both of them as more as possible. But it was difficult."
            ],
            "ml": false,
            "episode": "10",
            "anime": "2",
            "link": "https://twitter.com/Shadowgarden_PR/status/1732595796866953653"
        },
        "33": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "14/12/2023",
            "jp_image": "directors_note_an2_11.jpg",
            "jp_text": "",
            "en_text": [
                "Hi! It's the Director. That was Episode 11!",
                "Some of you guys might noticed that this episode was longer than the other eps.",
                "If you felt the advertisement was short, you're correct!",
                "We reduced the length of the Ads.",
                "When I measured the storyboard, there were too many task to deal while heading to the final episode.",
                "After making the script, I had a feeling that adjusting the lines might not be enough.",
                "Oh well. There's nothing we can do. So I told the Bigwig.",
                "Nakanishi: We don't have enough airing time. So I think we'll be scraping off some scenes.",
                "Bigwig: Hmm scraping off you say...",
                "N: Yeah (especially the Avant and the A- part)",
                "B: Understood. Let's cut off some scenes.",
                "N: Okay",
                "B: Lets cut off some advertisements.",
                "N: WHAT?",
                "B: Oh we can cut off the sponsor credits too.",
                "N: Wait wha? We can't cut off the Sponsor Credits!!",
                "Most of it is based on real story.",
                "By the way,",
                "Playing the OP and ED every episodes with no inserting main story on them was our original plan since the first planning.",
                "Cutting off OP and ED might get us 3mins max of airing time, but that would add 3 more minutes of work to do. That would burden the studio.",
                "If we cut the OP and ED repeatedly, \"oh We accidentally made an unnecessary episode\" could happen.....",
                "Having more works to do doesn't mean that our deadline will be extended.",
                "Long time ago,",
                "I had an opportunity to help an anime studio that was making an Anime that doesn't use OP and ED that much.",
                "Before numbers of work and the approaching deadline, the main staffs were close to see the heave.... No, their faces were not in this world.",
                "Recalling that memory made me swear, to not cut stuffs that were not originally planned to make some airing time.",
                "Well the oath didn't really mean something in the face of reality. And that's why we delivered a special episode.",
                "Oh yeah, THERE WERE NO SPONSOR CREDITS HARMED IN THIS EPISODE.",
                "With that being said, stay tune for the final episode!",
                "",
                "PS: Queen Reina's VA is Yuuko Minaguchi-san!",
                "We wanted a \"stupid\" character and not a \"villain\" character. So we requested a person that has a voice with no evil intentions.",
                "Reina having no evil intentions made her uncontrollable. So we decided to give her the Red card in this Episode."
            ],
            "ml": false,
            "episode": "11",
            "anime": "2",
            "link": "https://twitter.com/Shadowgarden_PR/status/1735135856489627858"
        },
        "34": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "21/10/2023",
            "jp_image": "directors_note_an2_12.jpg",
            "jp_text": "",
            "en_text": [
                "Thank for you watching!! 2023.12",
                "PS: The Anime started with Yui Horie-san's line.",
                "So ending the anime with her voice should make it better",
                "We decided our decision with an easygoing mind.",
                "But, Kobayashi-san and Kagawa-san (VAs of the kidnappers) joining in made it more wonderful.",
                "With the music in the background. It felt like we are back at the beginning, and it felt like a long long prologue has just ended too.",
                "Anyways. that's all for today's notes.",
                "Once again thank you for watching."
            ],
            "ml": false,
            "episode": "12",
            "anime": "2",
            "link": "https://twitter.com/Shadowgarden_PR/status/1737673437341159577"
        },
        "35": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "29/12/2023",
            "jp_image": "directors_note_an2_a.jpg",
            "jp_text": "",
            "en_text": [
                "Special",
                "Hi it's Nakanishi. This note is guerrilla. Handwriting the previous notes was a pain in the ass, so I'm going to use digital.",
                "But unlike the previous notes this one might have less jokes and is more focused on small details. Lets begin.",
                "",
                "•King Oriana",
                "Raphael Geerk Oriana.",
                "There's a particular reason why he has a middle name, and it's a simple reason.",
                "The god who made this world forgot to name himself. And god spread his name differently throughout the land.",
                "By the way my first knowing about this information was when I checked the panflet in the package.",
                "Resulting \"What are we going to do... the name is different...\" type of situation.",
                "And the creator gave us an oracle that says \"Let there be Middlename\" and time continue till present day.",
                "But the question of \"Rose's Middle Name\" is still not yet answered and is left vague.",
                "Maybe Oriana Kingdom has a custom of naming a saint's name that is attached to the king's title.",
                "The king's name was \"Geerk\" throughout the anime. Because that's what I was told.",
                "",
                "•559",
                "559 is like a Seven Shades (Shadows) but has no heroine plot armor. That's how we wanted to draw her.",
                "Her face expression was something... But looks like the audience enjoyed it and is accepting how she act?",
                "Making her extreme probably made her cute?",
                "Anyways, Her behavior towards 666 is 99% personal. In the S2E9 where 666 spotted the queen in the ruins. 559 was staring at 666.",
                "In the background there was this conversation.",
                "But Rose, She doesnt know.",
                "It's surely that she will know about it with a little effort of searching. But she has no will to know.",
                "Rose wont even question, even her mom is wearing a bright colored pink dress, while she is in her mourning dress.",
                "As I wrote earlier 559's behavior towards her is 99% personal, but only hitting her in that situation is quite warm-hearted.",
                "Maybe 559 was feeling pity, beyond Anger and Dismay.",
                "",
                "•Mordred",
                "Weak. Even with Koyasu's Voice, the characters weakness cant be hidden.",
                "I think a lot of people know about this, but Mordred got huge nerf in the LN.",
                "He got nerfed so hard to the point where he made me question \"How did you even manage to make Perv listen to you.\"",
                "Man, what should we do about him. A final boss with a Huge Nerf....",
                "Well we tried our best to do some tricks and the outcome was aired.",
                "We also did some adjustments to his line to make him sound like a scholarly person.",
                "We added out-of-place settings to his weapon. Well not only the weapon, but also in his Full Armor and him wearing it.",
                "Maybe the idea was \"I'm not a monkey. So instead of training let me just wear a strong equipment.\"",
                "As for his plan in that situation. He threw the towel for resurrecting Diablos and changed it to \"Summon someting from a different dimension to buy some time or (kill shadow) if lucky.\"",
                "Practically, He actually controlled the Ragnarok (around at the end of S2E11)",
                "It was pretty reasonable for a plan. But such retreating strategy is not well received by the Elites, so it wont be a main strategy idea in the organization————",
                "And that's how I thought about it, So I don't really know what will happen.",
                "",
                "•Effects",
                "Its brand new! Not from the stash!",
                "Oh... but the Color and Image Processing is still the same.",
                "•Episode 8",
                "Let me tell you a fact that will blow your mind.",
                "We \"The Animator Side\" didn't request any Bikini episodes. I swear.",
                "",
                "•戒名\"Kaimyō\"",
                "(The name written on the tombs)",
                "We did our research about rules and laws about tombs.",
                "And the results was \"We don't know!\", even we did it correctly, it would probably make some unnecessary problems.",
                "So we did it vaguely. Is it not \"童子 (Douji)\" If one dies at 18?",
                "",
                "•By the way...",
                "In this anime, there's same scene that has little different stories.",
                "For example S1 E13, E14 and S2 E11, E12. A scene that was shown on the previous episode is moved to the back... or something getting added in the next Ep that was not in the previous episode.",
                "If you try connecting the anime, you will realize that it won't connect perfectly. It's on purpose.",
                "The point is each scenes have their own place. A scene that goes to the advant, a scene goes to the middle and to the end.",
                "We prioritized how to make each episode good and made our decision.",
                "Regardless of the pros and cons, we wont be changing how we do the anime.",
                "",
                "Anyways,",
                "It was a disorganized note but thats all for this note.",
                "Next time is...... next time.",
                "Next time hmm?",
                "No, let's not go any further.",
                "With that being said.",
                "Thank you for reading and I bid you all farewell.",
                "",
                "PS: Ahh, this one. It's Zeta's casual clothing.",
                "The reason why it looks like a dress is to match her clothing with the other shades.",
                "We ordered Zeta's Casual clothing along with the other shades/shadows very early in the process.",
                "But my idea of \"If most of her mission is infiltration, she needs to be in a cosplay.\" gave her 0 screen time.",
                "We manage to force her in to the last episode... its too good to be wasted.",
                "We left it to the character designers to decide how to draw the designs.",
                "So actually there was no intention or whatsoever. But the circle and triangles on the necklace that you can find around the Isekai world is... ummm",
                "Let's just say it's a symbol of a tribe."
            ],
            "ml": false,
            "episode": "a",
            "anime": "2",
            "link": "https://x.com/yaduka301/status/1740569072516178260"
        },
        "36": {
            "en_author": "Nakanishi Kazuya",
            "jp_author": "中西 和也",
            "date": "24/05/2024",
            "jp_image": "directors_note_anm1_t.jpg",
            "jp_text": "",
            "en_text": [
                "Hi this is Nakanishi. Bringing you a special release commemorative edition letter.",
                "Makers have the balls to say that this is a new information.",
                "I ordered the makers with a vague description \"We are having an event, might as well make something.\"",
                "But I didn't know that they were making \"New Information\" or a theme about it.",
                "Well I guess we can say that officially announcing the main staffs is new information....",
                "Putting that topic aside.",
                "The video that was published was a \"PV exclusive video\".",
                "Unlike the normal PV's out there that uses cuts from the main animation, this one is a Video only for the Promotion Video.",
                "You can receive the video as \"Wow! An animation only for the PV! How wonderful!\"",
                "Or",
                "\"Does that mean.... The movie isnt ready yet.....?\"",
                "I'll leave the imagining for the audience.",
                "Its \"How you receive it\" matters.",
                "By the way,",
                "The staffs are",
                "Director: Me",
                "Storyboard: Me",
                "Production: Me",
                "Key frames: Me",
                "Animation Director: Me",
                "Chief Animation Director: Character designer",
                "After saying \"This is my maiden work movie.\" I received fired up retouch.",
                "And Animations, Finishing Touch, VFX, Editor, SE and etc are brought to you by the same staffs who worked in the anime.",
                "They have my gratitude.",
                "About the mysterious professor's VA....",
                "Well I think you don't need any explanation about him.",
                "———— thats about it. Only the Ani Director is different.Its my first time doing Animation Director. And it felt like eternal since I drew key frames.",
                "Oh, I did all the \"KeyFrame Director\" and \"2nd KeyFrame\" works.",
                "\"Soloing Key frame\" in the rare and correct sense of the word.",
                "Well it only was 30cuts so its not a story to brag.",
                "There were no scripts, so I went straight from the storyboard..... so might as well call my self \"the scriptor\". Just kidding.",
                "Anyways. It was a short PV so imma end it here.",
                "I apologize about the \"new information\" of the movie.",
                "You'll have to wait for the official announcement, not out from the blue. If there is one thing I can say, I'll be saying the same thing that is written in the PV. \"銳意制作中(We are working hard on it)\"",
                "And thats it for this message",
                "See you next time"
            ],
            "ml": false,
            "episode": "t",
            "anime": "m1",
            "link": "https://twitter.com/yaduka301/status/1794926995085971512"
        }
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

// let setDoc = db.collection('data').doc('es_fthasg').set(data['fthasg']);

// let setDoc = db.collection('data').doc('ln_v2').set(data['v2']);

// let setDoc = db.collection('data').doc('an_s1_e1').set(data['s1']);

// let setDoc = db.collection('data').doc('info').set(data);

// let setDoc = db.collection('data').doc('characters').set(data);

// let setDoc = db.collection('data').doc('medium_images').set(data);

// let setDoc = db.collection('data').doc('dropdowns').set(data);

let setDoc = db.collection('data').doc('media').set(data);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
