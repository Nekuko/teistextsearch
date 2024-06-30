const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "nvacs": {
        "e1": [
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Beta's Notes",
                "line": 1,
                "url": "https://drive.google.com/file/d/1tANLDUvQjwFA-fXbSvX0_cOi7GUCg5rB/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "None (Beta)",
                "subtitle": "The Valentine season is just around the corner, and the capital of Midgar has recently become tinted in the color of love.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1RMCCQAQIZ-d9XEiw1Q_XNATjimcF5vLw/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "None (Beta)",
                "subtitle": "This event, that many say has been popularized by Mitsugoshi, has taken hold faster than expected because of it's link with love.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1r885S4KaopjC9t6gF_-ulD_bsVTBhADi/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "None (Beta)",
                "subtitle": "No matter the era, love has always driven people to do crazy things. And of course, I have also made chocolate to give to Master Shadow...",
                "line": 4,
                "url": "https://drive.google.com/file/d/1w5OWgAXRlxxgiBq85mQYCul3vIkPG9gV/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "A gift, my gift... When, where and how shall I give it to him...",
                "line": 5,
                "url": "https://drive.google.com/file/d/1rM7ZN5aCK6LeSyJ6l3xFjJvVRxGMptmz/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "At the end of the day at Shadow Garden? No, too normal and no impact at all.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1lBAT4YwNuqU96EBpzA_Mxo9Z_Z8wQlqf/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "If I'm going to give him chocolate, then maybe I should do it like this...",
                "line": 7,
                "url": "https://drive.google.com/file/d/1oAZE9vAS5WKhJRz20p9HkLHjbVMyi-gN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Crap, I'm late!",
                "line": 8,
                "url": "https://drive.google.com/file/d/1DtqTRx0pdHK8bycHKNV8StEqByG3xtRE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hey, there's something in my locker... A heart-shaped box and a letter?",
                "line": 9,
                "url": "https://drive.google.com/file/d/1N70x7eJsC2AF07BAFEy02Nrcf9LhPEmP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "None (Cid Kagenou)",
                "subtitle": "Dear Master Shadow, thank you for always being so kind to me.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1lz_FgWLyCzcwckdpejd_7_opm59i7uOn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "None (Cid Kagenou)",
                "subtitle": "I appreciate what you do every day, and how you put so much love into everything... My eyes are always upon you. From your gorgeous silver-haired, blue-eyed, with-a-mole-under-her-eye, elf.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1rEepactm1h6SpilwcN6EwTrwb52OssFJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Gorgeous silver-haired, blue-eyed, with-a-mole-under-her-eye, elf... That can only be Beta!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1kq35K6xQaSXysg1NWvtFJaeWfuEGQ1nH/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "What a graceful and dreamy woman, she doesn't say things directly, instead writing such a beautiful letter...",
                "line": 13,
                "url": "https://drive.google.com/file/d/1_CDbgSuNkgruQuwYAhZZ3-eOpUmYUVpy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Beta! For me, there is only you!!!",
                "line": 14,
                "url": "https://drive.google.com/file/d/1siwLGhbf5f3_StWAZRJ6XcAlgbIEOBwk/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Oh my, if it went like that...hehehe.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1B86EO94u0peD7KTnlNeJSsz9L5tFtVEz/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Oh! If it's going to be at school, then there is another way it could go...",
                "line": 16,
                "url": "https://drive.google.com/file/d/1IU563ErGiLZZHTQrZvP2zxSzhX5YLwjV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "\"I have something to tell you. Here, after school...\"",
                "line": 17,
                "url": "https://drive.google.com/file/d/1QTmG-RV65h7Vgj-BeuzB_EBLYm_3bvqe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I wonder who this is from, and for what?",
                "line": 18,
                "url": "https://drive.google.com/file/d/19RRmXbcbvKWZ4n6SLF1ZvyUZrJiV93-G/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Master Shadow...it was me. Beta.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1yPrlyWzDzpRyv_xrIdGr0xEW2sRQ6RvH/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "What's up, Beta? Do you need someth\u2014 Oh! This is...!",
                "line": 20,
                "url": "https://drive.google.com/file/d/1OcZTKeuV1h1LAbu3adqC7glS5HeRKirt/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes, chocolate. Hand-made chocolate for my lord, Master Shadow...",
                "line": 21,
                "url": "https://drive.google.com/file/d/1aTlk9P0nzkjngA4wpbkpL878YpntlO56/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So beautiful...",
                "line": 22,
                "url": "https://drive.google.com/file/d/1IHexntW6P9hTLQGoRGOHWQLj0omJM36Q/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Thank you. I was able to make it look this beautiful\u2014",
                "line": 23,
                "url": "https://drive.google.com/file/d/16UNMeR7Sh6RrRZXqwIEbvk7ixwA4UDNT/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "No, Beta, I'm saying you're beautiful.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1YLgEQVJ9pCj5RwYfddS3mWMmbQlYcXvO/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Ulp...!",
                "line": 25,
                "url": "https://drive.google.com/file/d/18JLlwfab7t9mHeXTVtNN_2SUcTRpbcBW/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Classes over, the school is bathed in the glow of sunset. There, I confess my love while giving him chocolate!",
                "line": 26,
                "url": "https://drive.google.com/file/d/1xteAuHalH1OtDKGG8N-qLQzX15wjdM6D/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Our shadows grow long, and then become one...! Oh...!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1FrItF_fCKHsqIcZYUNhXLjRWu6UCIEwQ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Oh my oh my, the fantasy started with chocolate but ended with a kiss...",
                "line": 28,
                "url": "https://drive.google.com/file/d/14pZ7kbZ2D-9pzZQzL3unilJlWJIy_yNz/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "B-But, if I'm going to do this I could go further...and use a way that gets us straight to the final stage...",
                "line": 29,
                "url": "https://drive.google.com/file/d/1sj4QS10Z_aomdvWnXozFnHB9nk2Ss5Z-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Even though today is Valentine's Day, I didn't see Beta at all.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1CN6oDT29J3KTS72tN1uA6w8W_lYOjLTy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I was looking forward to getting some chocolate from her...",
                "line": 31,
                "url": "https://drive.google.com/file/d/1KQNcLoet28oEv0lEfy0W4rx1YeJt3kEX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "At a time like this, all you can do is sleep and forget about...it? Huh? What's this bulge in my bed...",
                "line": 32,
                "url": "https://drive.google.com/file/d/1EgYrlNSAJbYFj1erlyythBDXqA6TVi4W/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Is there someone in my bed?!",
                "line": 33,
                "url": "https://drive.google.com/file/d/15JsjMj0ybBKoYVnEi8cSj0qmNXWj2dzf/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Ack! B-Beta, you're naked apart from that ribbon wrapped around you, and your delicate white skin is covered in chocolate!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1yfOGUR7c84pucK-rr4IfredoZzmQOuOk/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Master Shadow, happy Valentine's Day. I was waiting for you.",
                "line": 35,
                "url": "https://drive.google.com/file/d/16GutqQLfFtZMh6JW35ygLEDDGilkN8jg/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "The chocolate gift is...me. Please e-a-t me!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1mkoOlA8lBTqirvpiRatg1mT0EHY3sQdb/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "N-No, I don't think that will go as expected... Also, Master Shadow's bed will get dirty from the chocolate...",
                "line": 37,
                "url": "https://drive.google.com/file/d/1NP7UUjWnSDQzns_g5CVPvk5cYW8fWo7T/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "How I give my gift is important, but I also need to think about what kind of chocolate to give him.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1o0QaDh8ZxEOPOUAZI2cafkGrBH-vz921/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "If I were to say who would give the best chocolate in Shadow Garden...then it has to be Epsilon.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1DLXFIeZeIrv8zgB4FqBVugoFasET57St/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "When it comes to \"Faithful\" Epsilon, there is no doubt that she will give Master Shadow elaborate chocolate...",
                "line": 40,
                "url": "https://drive.google.com/file/d/11qW8Q5PeN6N6XvN1iyU0JUHYeZkgp9HP/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I need to make the ultimate chocolate, one that surpasses Epsilon. If I don't, I won't be able to make the biggest impact on Master Shadow!",
                "line": 41,
                "url": "https://drive.google.com/file/d/11xrdVbmRdKTIXJHHBoAzW56_7OQ1gUv8/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Meanwhile, at that time\u2014",
                "line": 42,
                "url": "https://drive.google.com/file/d/1jEUXYLNfB8wbzhlz5-wr3fLy5Pgx-5sq/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "My main rival on Valentine's Day will probably be Beta...",
                "line": 43,
                "url": "https://drive.google.com/file/d/1XiJvHWiBP_kcQDLpVtIXGIrBNvKhyCfa/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "When it comes to cooking, I am unbeatable, but Beta's love for Master Shadow is really something else.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1s_y4Hy9Uh9LCHrn6dpoOLOpDx6mpG-j1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I can't just hand over delicious chocolates, I need some flair. Bend my knees and lean forward a bit like this, with a 45 degree tilt to the left.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1jWU5mSbUjPvdsNN11xV2RXqeVGIUQHHT/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I have to pull back and bend my arms, emphasize my chest and give him my chocolate while looking up at him.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1_I-2M7ObqJHt_FCjWbkD9LrZe7TGQ37a/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Beta doesn't realize that her weapons are weapons! She is strong but ignorant and proud!",
                "line": 47,
                "url": "https://drive.google.com/file/d/1rJUoAa7buDhQiVU04MTRVd9zAeUk4Ewp/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "However, I am neither ignorant nor proud. I make the maximum use of my weapons...",
                "line": 48,
                "url": "https://drive.google.com/file/d/1CXDtteIUQfLTNfgJNlR7JnwOJX1eZ3Kp/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "A pose to compliment my superior chocolate! My pose alone will make my chocolate the best!",
                "line": 49,
                "url": "https://drive.google.com/file/d/16-z6_5CxfbYUFPAxZ7QeDU9LDAEXYckd/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You had better get yourself ready Beta! In the moment, artificial will triumph over natural!",
                "line": 50,
                "url": "https://drive.google.com/file/d/1yZlJzkdMxgPU0dLRLUFfdT9qcYaKb4SH/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Also around that time\u2014",
                "line": 51,
                "url": "https://drive.google.com/file/d/1nUEtWSH0L_zPJrrtUqSY1SeOJiYzRlw6/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Hmm...the estimates come out to roughly this amount. But, I want to get them up by single\u2014no, double digits.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1RWnjB2xuXonxVFUQaFD5HC5jajRtFjW7/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Valentine's Day is an ideal selling season. I need to think about Mitsugoshi's chocolate potential.",
                "line": 53,
                "url": "https://drive.google.com/file/d/1v4loMo4uCVaRXRK6yWviDgb-eLKaKNeV/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "In recent years our Valentine's Day events have become fairly well known, so...",
                "line": 54,
                "url": "https://drive.google.com/file/d/1nYwX4_S6XEZrKmjAW-UPaocHa99j0BPR/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "We should liven things up for this year's campaign! A collaboration with the popular writer Natsume! And!",
                "line": 55,
                "url": "https://drive.google.com/file/d/1xRhDrw8bKGr4NytgTOZVA-MylxvnFttB/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "We can really fire up our Valentine's Day with a collaboration with popular pianist Shiron!",
                "line": 56,
                "url": "https://drive.google.com/file/d/1PB4CTUggZhb_t_-nM8VOExxNsAlf_Yks/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "This will surely increase Shadow Garden's assets! I need to ask them at once!",
                "line": 57,
                "url": "https://drive.google.com/file/d/1Xvl5AhBnKFjSH_ncbpEwoMKsMlZWN6Ue/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Beta, otherwise known as Natsume, and Epsilon, otherwise known as Shiron! Here I come...!",
                "line": 58,
                "url": "https://drive.google.com/file/d/1pDTz-7JRadW1-8EbEjEj0nTl1sZzrize/view?usp=drivesdk"
            }
        ],
        "e2": [
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "So I have been selected for Mitsugoshi's Valentine campaign...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1uLeW-5rzG3rq_tOgs4iTtjdystXbGNIn/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "It appears that Gamma really sees my value as a performer.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1r_BKI6xrM7_IiG088BPDk6y-P8Wvh3s3/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(This is where I can get more popular, and get ahead of Beta.)",
                "line": 3,
                "url": "https://drive.google.com/file/d/18wg9BwpAjAbXa8HmKxqiyOTVX-7MYv0z/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(If I can achieve that, then it will be even more certain that Master Shadow will choose me over that all-natural girl!)",
                "line": 4,
                "url": "https://drive.google.com/file/d/1quD9ExExvvCpGhS8SbY6HctJijYk3-uY/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Sorry I'm late. I was busy with a deadline...",
                "line": 5,
                "url": "https://drive.google.com/file/d/1fLneROR12bueRldmHma0QvYvTCRhsNys/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh, Beta?",
                "line": 6,
                "url": "https://drive.google.com/file/d/1G8DhxG2MRz-kppLWJNoe0tkHtlDTZACU/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Epsilon? What are you doing here? I'm here for the meeting about the Valentine campaign...",
                "line": 7,
                "url": "https://drive.google.com/file/d/1C0XsslKEgi9mXpOabJ2MHRYvcQ4hCLeY/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I've been waiting for you both, Natsume, Shiron.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1Ipr5FmUjEt7Lx9LpKLUP_LfZlAnY370b/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hold on a moment, what's the meaning of this?! No one told me that Beta was coming.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1rf6wlQN6QZ3B1SOuYOofbnFuNPn741Pt/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Maybe a communication mix-up? Sorry about that.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1QJZjoQUCoQ-RG3wHc6S1IIhYfrTJkqfC/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "(If had said that in advance I'm sure they wouldn't have agreed to come. This is another business technique...)",
                "line": 11,
                "url": "https://drive.google.com/file/d/1bZ-7_ijJf35_4xLixcInhjhVdks6Roci/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Oh, are you going to break your promise...? You wouldn't do such a thing, would you?",
                "line": 12,
                "url": "https://drive.google.com/file/d/1WL0xKMFiRqGlZuNv7Xfx8wyv_AaPTj46/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Ulp, o-of course not.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1C8qo-0JOliQ6QmwUJ3LZdkDNd5KXRTjw/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I can't be seen as untrustworthy...",
                "line": 14,
                "url": "https://drive.google.com/file/d/1rWfFVmYHPjP8Ish4qwVGsac4_vlnG1O9/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(I really can't believe she is here, I was totally unprepared for this.)",
                "line": 15,
                "url": "https://drive.google.com/file/d/1vhBFIo13lyXna1D_tKHZLWHzKoszOPnS/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Wait, I can think of this as a chance to beat her directly! I am absolutely not going to lose!)",
                "line": 16,
                "url": "https://drive.google.com/file/d/1iwcbCnRCKxhnqcpx8jnK-OEjEPuSLmmV/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Good. You two seem ready. Let's get started...",
                "line": 17,
                "url": "https://drive.google.com/file/d/15p_akA1hXl5mkdzJno_rRndzQuYjZsYM/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Where did that measuring tape come from? Are you going to measure something?",
                "line": 18,
                "url": "https://drive.google.com/file/d/123gxT86SfGT_S-kUsLbEebX_K-5wHNXN/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Yes, I want to make life-size chocolate statues of the two of you for the campaign...",
                "line": 19,
                "url": "https://drive.google.com/file/d/1ftEx9nLnZn1AY4E8b8xA9MFRmadnmwd6/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Ugh! Measurements? That would be be bad! They'll discover my \"adjustments\"...)",
                "line": 20,
                "url": "https://drive.google.com/file/d/1F20aVYbsl9iqJnd_GMMzdk7Y4IFJErY5/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "The measurements will take just a moment. Please stay still.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1y6ipFJWO1S5sYOu6Fn9e7CEizPf7uaSb/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I guess I have no choice... I'll cooperate, but please make it quick.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1L5d8heknT3gOTF5NRWr-M19mnyyI0VY-/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Yes yes... Hmm, have your breasts got a bit bigger?",
                "line": 23,
                "url": "https://drive.google.com/file/d/1Dm3-8VL3I0ILl2d5xSGHIWCUnO68yuwJ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Probably...my clothes have gotten tighter.",
                "line": 24,
                "url": "https://drive.google.com/file/d/11wLxZTmDUzZNE6P_VufLrmUqIfN79AJt/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Grrrr! So envious!!!)",
                "line": 25,
                "url": "https://drive.google.com/file/d/1cWASUFe-GgU_vC9IpyyHQOTySSnRz7ap/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Okay, all done. Next, Shiron.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1j0Z-xr4wd4YWEEyQF_ijI3CZMTOc5bo5/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "N-Not necessary.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1BbNy16AZ_ssy6cOmMvfWjmDuvKkJtyiJ/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Oh, but...",
                "line": 28,
                "url": "https://drive.google.com/file/d/1sbV0pm-7DcvpdHwYGYqOxpZ9X7pA-BJC/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I can remember all of my measurements. I wrote down all the numbers you need here.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1UFna6z9hLO0fKP4yjyVCLwoyihGkIC3b/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(If I'm not touched right, and my pride collapses... I absolutely can't let such a tragedy happen!)",
                "line": 30,
                "url": "https://drive.google.com/file/d/1__ki5l20W_I5rtHz6xuWWf0-kyR20qxz/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "But, you might have grown...",
                "line": 31,
                "url": "https://drive.google.com/file/d/1PzfWLLNTP8HYBOIP9yfS0UfvweMztoZy/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I measure myself every day. Here you go, these are today's numbers.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1vbOHGWDImIxps-EPsN11aavBVUlSHoJR/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "E-Every day? Well...it's great that you've saved me some time.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1CGUrn8zBBE6uIDebxEBngrod8x2yg-9-/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Whew, I escaped that pinch somehow...)",
                "line": 34,
                "url": "https://drive.google.com/file/d/1zpf5x9ejF_lRleIKTuGtU4B3SEGvIn17/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Now that I have your measurements, let's begin our meeting about the event.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1rN4O-VVZu9d6RQ9JneIGkH74qjQPHxgt/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "As this will be a collaboration between Mitsugoshi and two creatives, I would like you both to produce something.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1n2R5nojbESG-iwyEIkXpI6xtgWCW0rCd/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Produce... In my case, you mean like a theme song?",
                "line": 37,
                "url": "https://drive.google.com/file/d/1XvKolON4ADESorgIc0y-6srrec6p7hAO/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "You catch on quickly. Yes, exactly that.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1MVu9843If9zvuThzGWBGWMj-MnHRsdBM/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "As you are a songwriter, Shiron, I would like a special song for our event.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1i0wbsUr9KcMVH7u53hG4BH55bvnmvnss/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "And Natsume, as our resident writer, I would like you to write an advertising slogan for this event.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1XwTGHGnz8_AyBUit6o8_Xf-aoVq9eaL2/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Huh? An advertising slogan?!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1GQwZMEDmczc6ya1f4r7qwXZqy3WWo_mI/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(What should I do? I write novels\u2014I've never thought about advertising slogans.)",
                "line": 42,
                "url": "https://drive.google.com/file/d/1VZo3XVfi93-K_9BjSUKKd2n2Hyw2_buW/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Yes, just something short and catchy which captures the essence of the event.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1atwfagu9YfZDkJzlVBK1rWxRk3aiKU3V/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(You got to be kidding me?! You think it's that simple?!)",
                "line": 44,
                "url": "https://drive.google.com/file/d/1x5Hx2nDS68ctlPlApnPcl0lympgyGotz/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(It takes far more time and effort to write something short and-catchy than my usual long and elaborate sentences...!)",
                "line": 45,
                "url": "https://drive.google.com/file/d/1V7JTkA6RATwOnU5JGJFZuGhS1oVjtQB8/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "That's a bit...",
                "line": 46,
                "url": "https://drive.google.com/file/d/1U77S10nOVyFMSO5Jg_kZ7LuXeQqX6R1A/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "A special song for the event... All right, I'll do it.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1AMDXj4wOQL5byE3g703Kio51LEIZY3r2/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "!!!",
                "line": 48,
                "url": "https://drive.google.com/file/d/1dWPUDJwB5BIUPiNS7StrsrN5i_RGXacT/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Can you tell me afterwards what kind of song would be good? And whether an existing song will do?",
                "line": 49,
                "url": "https://drive.google.com/file/d/1yRRSyHWqdf24JAhAK3K-I0GIVJU_ca0Q/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "You want an image of the event...understood. Thank you very much, Shiron!",
                "line": 50,
                "url": "https://drive.google.com/file/d/1QwaUOqzl_X5gBH7feVbZhmJeqiMnie4w/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Urk... If Epsilon can manage this, and I can't, I will lose status...)",
                "line": 51,
                "url": "https://drive.google.com/file/d/14UX2GYrV35aAosr9IzPg91fsPg9QXnQ5/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "O-Okay. I will think up some advertising slogans.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1RIj-6ez2iImeMxyA7o6tSMFEo-DQNWSx/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Thank you for consenting, Natsume. As Director Luna of Mitsugoshi, I appreciate it.",
                "line": 53,
                "url": "https://drive.google.com/file/d/18kaxfW6SdWUSPjrSf642U3umdlg4c7r3/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Ugh, I felt pressured and said okay. Will it really be okay?! Can I do it? I mean, I'm...)",
                "line": 54,
                "url": "https://drive.google.com/file/d/17jXtqUZc1xoSG9UCbGdOaaW3pFo-Lmjv/view?usp=drivesdk"
            }
        ],
        "e3": [
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "\"It has transient sweetness, like an enchantment...\" No, too dull!",
                "line": 1,
                "url": "https://drive.google.com/file/d/1C_wNI2LXn_mSspUHz7w4GccM-rfzM9US/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Urk, I wish I hadn't been swept up in the excitement and said okay...",
                "line": 2,
                "url": "https://drive.google.com/file/d/1xlsO-XnTF_fynk4RdwmZS8poalXmDCKl/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Gamma... No, Director Luna of Mitsugoshi, made a request of the writer Natsume.)",
                "line": 3,
                "url": "https://drive.google.com/file/d/1DSsJiIxnVbBwn0maHfq-0TfdRCO3HGcY/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Write an advertising slogan that matches the Mitsugoshi Valentine campaign.)",
                "line": 4,
                "url": "https://drive.google.com/file/d/1cds2DuP941r9q_XBh5PqSWJMffooYIYC/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(It's so much harder than I thought... I'm surrounded by a mountain of thrown away, crumpled up paper.)",
                "line": 5,
                "url": "https://drive.google.com/file/d/1pb32nQEqk8h8QBZOUHDQ9EujJPk0qNi5/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Epsilon is lucky. Writing songs is her usual work.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1e87dFxzB8iVUNkBy7qSyK16Jc42OJR7m/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Epsilon, as the singer Shiron, was asked at the same time to arrange a song.)",
                "line": 7,
                "url": "https://drive.google.com/file/d/1SFgRtT84VH3eotBgNAypAn3cCkblXPDz/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It is like asking an amazing long-distance marathon runner to do a 100 meter sprint!",
                "line": 8,
                "url": "https://drive.google.com/file/d/1aRiLWTlil23k_cLo1zjxVqSf9jCPwnxE/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(My sentences usually become elaborate. I want to use metaphors and adjectives!)",
                "line": 9,
                "url": "https://drive.google.com/file/d/1GFo0ZQUsn5VxQynf88_XdW3IkxlHJNFm/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Ask me to write a long novel with as many words as I want, then you'll get Natsume the genius writer.)",
                "line": 10,
                "url": "https://drive.google.com/file/d/1xH59qPWTnfyJSy-y2DpOjtY8rYCkrmz-/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Short, blunt... Don't waste a single letter...",
                "line": 11,
                "url": "https://drive.google.com/file/d/1iflfpdKAzIT96_rWBkvJmAikppBDON2h/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(This is as difficult as writing that \"haiku\" that Master Shadow taught me.)",
                "line": 12,
                "url": "https://drive.google.com/file/d/1gZyBMqY4H_gIZYq3uoRH2577o-KDlcIM/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "After all, this is not my field! Ugh, it's impossible. Impossible, impossible!!!",
                "line": 13,
                "url": "https://drive.google.com/file/d/1EIKi1kQ6cplzC-3elKoUtoZ_PBwwWUQn/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Even if I wail like a brat or go sulk in my bed, the fairies aren't going to come do my work for me.)",
                "line": 14,
                "url": "https://drive.google.com/file/d/1gcIH6qKvtggGIpts0qLH6C3cJSt6phLY/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Still though, I don't think this situation will improve if I sit here glued to my desk...)",
                "line": 15,
                "url": "https://drive.google.com/file/d/1FZNs0HSSdantmHz1P6T7H3lyNeLlvbYK/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(I will slowly stand up, and make a declaration!)",
                "line": 16,
                "url": "https://drive.google.com/file/d/16YQD8EJbU4sSJ8Mme3rIM2I8WSyQaxXd/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Right, before anything else I should practice making chocolate for Master Shadow!",
                "line": 17,
                "url": "https://drive.google.com/file/d/1dmr9lKoStxjSjzJkxFj8mbV2l7u2yYtd/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Because I really need to practice, and um...it'll be good to stretch my legs!)",
                "line": 18,
                "url": "https://drive.google.com/file/d/1VOPh5xRv0RoIqsF1ugrXD-CmISauIMMB/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Though, I know that actually I am just running from the reality that haven't written even one slogan...)",
                "line": 19,
                "url": "https://drive.google.com/file/d/14EoKNYYZj4t__0u3-GDPNcsA2VLdldkc/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "The ingredients I asked Gamma to get should be here...",
                "line": 20,
                "url": "https://drive.google.com/file/d/1f04Nlf5q2lxCuB5R08GtELU6mJ69y80m/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta & Epsilon (Beta)",
                "subtitle": "Ah.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1Ln57pbQwENEvLDmkw9EUx75w4ikTosjb/view?usp=drivesdk"
            },
                        {
                "name": "Epsilon",
                "name_variant": "Beta & Epsilon (Epsilon)",
                "subtitle": "Ah.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1Ln57pbQwENEvLDmkw9EUx75w4ikTosjb/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Hey, Epsilon. Wh-What are the chances, right?",
                "line": 22,
                "url": "https://drive.google.com/file/d/1Na2-Zui-au0tSqsyZuOvkAxNHHrJCAJG/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Um, yes. I was just going to cook a little something...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1JtAP_n5r3cwkFGdpQTv6Ha6dbWpG_6sU/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Like what?",
                "line": 24,
                "url": "https://drive.google.com/file/d/11O-howclM4YDiyv7YrudFW5ryL-j-3QY/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Is she...out stretching her legs too?)",
                "line": 25,
                "url": "https://drive.google.com/file/d/1lApxkzOA6SKA8lfhKg3Rm-PpxllRx-Q4/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Well...maybe something sweet, you know, like chocolate...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1wJ1dJTgzLTx0B0bkqnuiCwK1bt9Entac/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Just to be sure, I was going to review my chocolate-making process...)",
                "line": 27,
                "url": "https://drive.google.com/file/d/1fFOI6pj52wrYayIQYHC8p6ehnT2-2nXa/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Beta being here to practice as well... Were we both thinking the same thing?)",
                "line": 28,
                "url": "https://drive.google.com/file/d/1oEMeYv2caLOGvnOwLTNAM-spN49RAOgC/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Why are you here?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1c03pV5Zw6IoV3uYtfuVycVSZF-zlAKmY/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Well, obviously the only reason why anyone would come here is to cook or eat.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1CoVU5Py64I2wySDttseEJOJNeZER7VHX/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Wow, you've got so much time that you can cook while working on slogans?",
                "line": 31,
                "url": "https://drive.google.com/file/d/1xQe95NyepWtVoiPi_ytKB-YFG5X7ir_N/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "That goes for you too...!",
                "line": 32,
                "url": "https://drive.google.com/file/d/1ppT5QJJ4lUIe747ACV9NRtgLbOB_ZPFU/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta & Epsilon (Beta)",
                "subtitle": "(Good chance! I can see for myself what chocolate she is going to make!)",
                "line": 33,
                "url": "https://drive.google.com/file/d/18imdBlqY8_b6v9vKDglrnS5JgNbtp6E6/view?usp=drivesdk"
            },
                        {
                "name": "Epsilon",
                "name_variant": "Beta & Epsilon (Epsilon)",
                "subtitle": "(Good chance! I can see for myself what chocolate she is going to make!)",
                "line": 33,
                "url": "https://drive.google.com/file/d/18imdBlqY8_b6v9vKDglrnS5JgNbtp6E6/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Let's see, cacao, cacao...",
                "line": 34,
                "url": "https://drive.google.com/file/d/1_ptp5hZJUiUw8Ogrp6SKstx-syxkzdtf/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Milk, and eggs too...",
                "line": 35,
                "url": "https://drive.google.com/file/d/1lo8Mj96-zYUuySSTZqq1UlwhhaTxyUJH/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Eggs? Chocolate? Gateau chocolate? No... She is going to use egg white...meringue?)",
                "line": 36,
                "url": "https://drive.google.com/file/d/1oRg16wIbOH0YwZNgmqLXcCywbyJK2uqU/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Rather than melt cooking, chocolate with hot water, you ordered raw cacao beans?!)",
                "line": 37,
                "url": "https://drive.google.com/file/d/1wxxRSPB51GHdU20WqcRB0FKKoO0TYlcI/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta & Epsilon (Beta)",
                "subtitle": "Not bad...! Not bad at all...!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1VUg8i9-2yVsl27fjWsA4-pPaRbwSnMLt/view?usp=drivesdk"
            },
                        {
                "name": "Epsilon",
                "name_variant": "Beta & Epsilon (Epsilon)",
                "subtitle": "Not bad...! Not bad at all...!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1VUg8i9-2yVsl27fjWsA4-pPaRbwSnMLt/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "10 minutes later.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1rKAzU-LyZEdbFp1uPn60rCyjla3Wzm-i/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...",
                "line": 40,
                "url": "https://drive.google.com/file/d/1T_bfpJ_xSljAqdKmrQLddUtd4vw4YQCd/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(She finely chopped the cooking chocolate, and made it more fine by indirectly melting it with hot water...)",
                "line": 41,
                "url": "https://drive.google.com/file/d/165g97Nyy0LjOkxN-_aeOQke4NJwMxFTj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Room temperature 17.56 degrees, humidity 23% 50.23 degrees... That's it, there. Okay.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1bCMBm18LCB8Ik5zqOQsrw4BDj_0m1FV-/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Epsilon's \"tempering\" involves centipoise unit adjustments using a thermometer created by Eta.)",
                "line": 43,
                "url": "https://drive.google.com/file/d/1mU9GB0mM2wzn1EsF87Mvf7GHk-Sr4zAj/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(She is controlling the room temperature and humidity, even her own body temperature... This is why she is \"Precision\" Epsilon...)",
                "line": 44,
                "url": "https://drive.google.com/file/d/1WewvKgm414QqSHw8tTUuNhWoUGnkkTa_/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...",
                "line": 45,
                "url": "https://drive.google.com/file/d/1fOoQMbSPEdn_n1Hn-u0ujSaey4mlxAUr/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(I see how you're moving your hands. I'll use that as a reference, thanks!)",
                "line": 46,
                "url": "https://drive.google.com/file/d/1kquJqueNJZ-izWKcoEwUSMU70RoCUKr4/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(I can sense the smell of that chocolate from here. It's so good...)",
                "line": 47,
                "url": "https://drive.google.com/file/d/1VP8U_nsYiLzc1xa-O_nIPNlEvPjYNXUf/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(And their color...maybe I need to casually check inside that box.)",
                "line": 48,
                "url": "https://drive.google.com/file/d/1XPru5PWbwtEdWipeWKW0hK4p3F_Ua0E_/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Whoa! A premium brand cacao from the secret island of Chocoray in the Southern Kingdom!)",
                "line": 49,
                "url": "https://drive.google.com/file/d/1tOLR-dcJVdUd11oigAeGxmzEgz-3c-O1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(And that dish! It's a replica of silverware used by an ancient queen!)",
                "line": 50,
                "url": "https://drive.google.com/file/d/1PP4jQWdBvftAVgL-bTzvoZDt5YzckiTB/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(As you would expect of a writer, even her meals have a story.)",
                "line": 51,
                "url": "https://drive.google.com/file/d/1QVtMEppaSi5-qspm7iJSjV1BVIVX1fCd/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(I can't lose if it's any old dish, but this opponent has \"added value!\")",
                "line": 52,
                "url": "https://drive.google.com/file/d/19ybLxKCLq7LnCaui0xti9ZV_Fl7pmM18/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(I see, she does have a point. I'll use that as a reference.)",
                "line": 53,
                "url": "https://drive.google.com/file/d/1q-CowJWgr79mP-ESp8oAeUfik3kkWUKI/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Whew... Now to let it cool and harden.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1WeDir3tmT-1oAdUurcOEVZVxf34YSIG9/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Done.",
                "line": 55,
                "url": "https://drive.google.com/file/d/1YRJY3d4I7usDNbTYhmVUWPYuC3AXHbWV/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta & Epsilon (Beta)",
                "subtitle": "...",
                "line": 56,
                "url": "https://drive.google.com/file/d/1X4vMTte5sEabMihhQKvjVzb3hFuJE74x/view?usp=drivesdk"
            },
                        {
                "name": "Epsilon",
                "name_variant": "Beta & Epsilon (Epsilon)",
                "subtitle": "...",
                "line": 56,
                "url": "https://drive.google.com/file/d/1X4vMTte5sEabMihhQKvjVzb3hFuJE74x/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "As you worked so terribly hard, would you mind if I dip my little finger in for a taste?",
                "line": 57,
                "url": "https://drive.google.com/file/d/1CrYHMw9GqyyotPkb9dlyrONIIUgXUAn5/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Sure, I was thinking I need someone, anyone, to taste it. In return, let me put my pinky in yours...",
                "line": 58,
                "url": "https://drive.google.com/file/d/11y6t5OUhtey2kpEy8tZGFibKd6a32D0N/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "!!!",
                "line": 59,
                "url": "https://drive.google.com/file/d/16-Z7eY6eoECG3KZlE3ADNEwfFaObkEq-/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "!!!",
                "line": 60,
                "url": "https://drive.google.com/file/d/1MyelxW3DCBgWIgxmjp_VE5MIugKLynXg/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(It's delicious....amazing technique!)",
                "line": 61,
                "url": "https://drive.google.com/file/d/1U8MCUUXe8u-0eJ-xeeZ1-Sm1QQBOO4ID/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Delicious...amazing ingredients!)",
                "line": 62,
                "url": "https://drive.google.com/file/d/1swbRCMpvGlYlDJdibS_uiq4-gTZBwJL_/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Goodness! You've got some talent, Shiron.",
                "line": 63,
                "url": "https://drive.google.com/file/d/1PEst2PRt4sps68UVJhiSomIm-PNuJJdB/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You too, Natsume!",
                "line": 64,
                "url": "https://drive.google.com/file/d/1wNhVqy7xKpWyxMQoH2IHGZfZd27GiYdJ/view?usp=drivesdk"
            }
        ],
        "e4": [
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "D-Done! The Mitsugoshi Valentine's Day campaign song!",
                "line": 1,
                "url": "https://drive.google.com/file/d/1SKJYxLLkkJgejtsNUSEm9o5ZXjLHIrIx/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I have to admit it wasn't easy. I did some chocolate-making as an act of escapism...",
                "line": 2,
                "url": "https://drive.google.com/file/d/1U3e1WVInQeVCRhSLfUqyKpGm1183i8u6/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Because I competed with Beta in the kitchen, I was able to write a great song...",
                "line": 3,
                "url": "https://drive.google.com/file/d/1HY_k_XCZvwju3vzfYWs0jPygfyHDkH3J/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "She's my rival in many ways, but I should be grateful.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1mIBb5b2G4ApRui5sYqHrqdFeVpBxZoA9/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Beta, your existence pushes me to get stronger and stronger. But, in the end I, Epsilon, will be the last one standing!",
                "line": 5,
                "url": "https://drive.google.com/file/d/1Trx1_Us62haa-8oobAkSpodFtBB0Kl9j/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(~?)",
                "line": 6,
                "url": "https://drive.google.com/file/d/10cEE8KwzkI3XdQPUwFyTxFNDnx3eNp98/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Wow...!",
                "line": 7,
                "url": "https://drive.google.com/file/d/14X3XEsoj5unu4VNbNd_QdR7KZpneKGIK/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "So, the song I just played is the one I wrote with the Mitsugoshi event in mind.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1XiJL1P3bzzP0y9GLOYIfwsIICXfttd-o/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Thank you so much! It was just as I imagined... No, it is a song even better than I imagined!",
                "line": 9,
                "url": "https://drive.google.com/file/d/11ZuzCT2mCrkjMhyuqXM24BGuN5g2emyy/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "And this is the score for the campaign song. I made some adjustments so that even amateurs can play it.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1xzkAbupeCh9OyJBH41Yy5gt6CYFrssE1/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "You even thought about the musicians! I really appreciate all of this.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1Ki5nDAayR7EPIgU3NrUBtSoSNq-Of8Wd/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "A melting melody, which is sweet like chocolate...",
                "line": 12,
                "url": "https://drive.google.com/file/d/1WSS1wv9C7hST-uI1CQYArw02lpCgCyz2/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...and yet it was a superb song that somehow contained a feeling of sharp sparks.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1K--7ywQg_Ag8GN3wyWM6T4YyLxsgxrbT/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(She really got it. Gamma's eye for quality...no, her ear? Is always reliable.)",
                "line": 14,
                "url": "https://drive.google.com/file/d/192BUHT3vZWFvD7evt1BmtxonEu62d_8V/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I was concerned if you would be able to create a song that matches our advertising slogan, but it is perfect.",
                "line": 15,
                "url": "https://drive.google.com/file/d/10nFfIt1nZdTChNzxV3KDqk5LL6PZSDZ8/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "The advertising slogan? Beta beat me to it...",
                "line": 16,
                "url": "https://drive.google.com/file/d/1rVSDuOqF-WfAbzQppq1Ct5lYFYlCyG-f/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "The advertising slogan is short. Here, I've put it on this poster!",
                "line": 17,
                "url": "https://drive.google.com/file/d/1tp8bpVBALFkcYrAPCP5K-NTWmjN51efn/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "\"Sweet Fight.\" I see...",
                "line": 18,
                "url": "https://drive.google.com/file/d/1ZHYeIZ6-iNMEeTKaSQ_ev6F7keEs5pAf/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "There is a gap between \"sweet\" and \"fight,\" it impacts customers quickly, in a good way.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1p0ioiILMDQ23vnUIXKzMQapSf5Pit1_q/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "What is that \".\" at the end I wonder. Could it be a symbol for chocolate?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1PVp_WQoEnMS4CZ2szQizU64wD1ZyMp72/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "When you use a period it marks the end of a sentence. It marks the conclusion. It has the effect of emphasis.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1L_KSo0LOK1L1NRsHXbZs_aqFKJBGADfr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "For example, in music we use a mark called an accent to indicate a strong emphasis.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1qZ6X6qLXJ_pT2U61eUxcB9-C6F-yivlI/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Wow. I guess it is to be expected that experts know about other experts. It is a bit beyond me.",
                "line": 23,
                "url": "https://drive.google.com/file/d/14hZOX7q6JBcqBduas8Ryw79qvY78pOTl/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Beta and I were on equal footing in that chocolate-making practice...)",
                "line": 24,
                "url": "https://drive.google.com/file/d/1BxZaMpSOIKyiG3xd_74ZYEdFAWS-MgL_/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(There is no mystery or surprise here. She can achieve it if she tries.)",
                "line": 25,
                "url": "https://drive.google.com/file/d/1pLaC9JmZgh72lzpfTHep11uERQIsbS8H/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(There would be no competition here otherwise!)",
                "line": 26,
                "url": "https://drive.google.com/file/d/1sQ93QKM8t2UpQCNF5rqnOltdFM_RzRcS/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Anyway, we will probably need to make some adjustments to the score...",
                "line": 27,
                "url": "https://drive.google.com/file/d/1PCkplUtiEoQEZNgwhc2BcEq6zmE-8_Qn/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "But, you successfully did your part. Thank you very much.",
                "line": 28,
                "url": "https://drive.google.com/file/d/16Aobiz6vokXAFaP70_6knEWhtMssHoo3/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...It's not enough.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1yYr1hy0594H-3jzPNH4OkEATFvUdvw4L/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Huh?",
                "line": 30,
                "url": "https://drive.google.com/file/d/1vv22_q3mlUt9ndBBtZYnH_WE_JZ78qKT/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I am saying just a song and slogan aren't enough to make an impact and draw in customers.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1Eho3VsBCMvAdrhTojjEfWqNm2CK_eY_o/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Let's make another event to liven things up on the day.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1F_XW12kmvSd-J94N245RcwY3_8P29Op-/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "We should hold a chocolate-making event, a cooking battle, between me and Natsume!",
                "line": 33,
                "url": "https://drive.google.com/file/d/1bcynEREiKf6YMOm-SEP_UdCAoPGljVkM/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "What...?! Well...it would be interesting!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1MPEqj0WIh8UFZ8AjRLVaxziKa35dDmbJ/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "But, I wonder if Natsume can fit it into her schedule...",
                "line": 35,
                "url": "https://drive.google.com/file/d/1g0_TP2-24wQ6-xMVc2zn28V5P5MMZXuN/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "She'll make time. I mean, even if she doesn't have time, she'll force open her schedule to participate.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1OudcMONvn_glWHFVyFK2CXg2uAUilBz1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Isn't that right Beta? Let's settle this!)",
                "line": 37,
                "url": "https://drive.google.com/file/d/1l5V8zqMuSe-j8-vgUxsCX6FTod1RZyOB/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Very well then...I will arrange a venue immediately and make an announcement!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1we4GtcLQWOfeiYuFx4wtHYXpv7rrwDOG/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "A few days later, in a certain room.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1qovvJkhfNRFNfrg3wWwEOzVJSQxk4luk/view?usp=drivesdk"
            },
            {
                "name": "Mysterious Man A",
                "name_variant": "Mysterious Man A",
                "subtitle": "I assume you are all aware of why I have summoned you here today. This Mistugoshi flier.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1ikaiG76Y3to6OC_3FCS3ykfN5SpF6Zni/view?usp=drivesdk"
            },
            {
                "name": "Mysterious Man B",
                "name_variant": "Mysterious Man B",
                "subtitle": "\"Sweet Fight.\", a collaboration with popular creators. It even has a special song.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1MT01UvV79UmaeyCOMn68s4Kkoa0nHOfn/view?usp=drivesdk"
            },
            {
                "name": "Mysterious Man C",
                "name_variant": "Mysterious Man C",
                "subtitle": "There will also be a chocolate-making battle on the day. Jeez, how much is this all costing them...?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1OX8X03eBlWkF7exbGXGdAWgG_oJqngly/view?usp=drivesdk"
            },
            {
                "name": "Mysterious Man D",
                "name_variant": "Mysterious Man D",
                "subtitle": "If this continues then Mitsugoshi is going to reap the benefits this year too.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1EVbDQWLJruYZOPYc7_3vItXXEuaScTpv/view?usp=drivesdk"
            },
            {
                "name": "Mysterious Man A",
                "name_variant": "Mysterious Man A",
                "subtitle": "The question, gentlemen, is how do we sabotage it... Are there any cracks in their armor that we, the Akindo League, can exploit?",
                "line": 44,
                "url": "https://drive.google.com/file/d/1uff0byRtFHUnpMP5EeD9dHO_E8QG94dS/view?usp=drivesdk"
            },
            {
                "name": "Mysterious Man B",
                "name_variant": "Mysterious Man B",
                "subtitle": "With all due respect...I have a suggestion.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1egQdJDpkuG8nv99GSayDHc6zZNeE5xCB/view?usp=drivesdk"
            },
            {
                "name": "Mysterious Man B",
                "name_variant": "Mysterious Man B",
                "subtitle": "Mitsugoshi has rushed this campaign. For example, they're hiring a lot of staff at high salaries to get everything set up on the day of the event.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1PDoWC6KUUNXEIPVuSH-GnfQgytONbnE1/view?usp=drivesdk"
            },
            {
                "name": "Mysterious Man B",
                "name_variant": "Mysterious Man B",
                "subtitle": "They don't have time to look into the background of the staff they are hiring, so they aren't checking people properly...",
                "line": 47,
                "url": "https://drive.google.com/file/d/1bJX2O7673zukGkOZXNmD5hnykWQ8DqdH/view?usp=drivesdk"
            },
            {
                "name": "Mysterious Man C",
                "name_variant": "Mysterious Man C",
                "subtitle": "I see. So you mean we can send troops in to make it look like they've made mistakes.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1lYXuO9feiZk7xbczbbR8Er6j4vBUT37R/view?usp=drivesdk"
            },
            {
                "name": "Mysterious Man B",
                "name_variant": "Mysterious Man B",
                "subtitle": "Yes, that's it exactly. We plan it so that there is an incident, which leaves the impression that it was caused by Mitsugoshi itself...",
                "line": 49,
                "url": "https://drive.google.com/file/d/1QFGKgustjAuh9pf9u51upqlukLMsTqRL/view?usp=drivesdk"
            },
            {
                "name": "Mysterious Man D",
                "name_variant": "Mysterious Man D",
                "subtitle": "Hohoho... How dastardly!",
                "line": 50,
                "url": "https://drive.google.com/file/d/1R9kjviNSH7JhfFiYUYJPbGHfmgZoJwZ5/view?usp=drivesdk"
            },
            {
                "name": "Mysterious Man B",
                "name_variant": "Mysterious Man B",
                "subtitle": "What are you saying. I can't match you even in your retirement... Hahaha!",
                "line": 51,
                "url": "https://drive.google.com/file/d/1zRJ9jd7pfLT3A6RGPn1teK0BovRBh49m/view?usp=drivesdk"
            },
            {
                "name": "Mysterious Man A",
                "name_variant": "Mysterious Man A",
                "subtitle": "Right...anyway, I will leave the details to you. I'll cover the costs.",
                "line": 52,
                "url": "https://drive.google.com/file/d/188g4tAsCgZzezfKusbN_1g8be11HigeU/view?usp=drivesdk"
            },
            {
                "name": "Mysterious Man C",
                "name_variant": "Mysterious Man C",
                "subtitle": "Don't underestimate our strength, Mitsugoshi!",
                "line": 53,
                "url": "https://drive.google.com/file/d/1uD0yujOanNskrevHLBH1gkdsowgWaXen/view?usp=drivesdk"
            }
        ],
        "e5": [
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Valentine's Day, Mitsugoshi Cooking Stadium",
                "line": 1,
                "url": "https://drive.google.com/file/d/1KxOdn981jH5Y9woItnk8SM8pEYnFT61s/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Ladies and gentlemen, thank you for coming to Mitsugoshi today.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1U6P4iV11kNvz0fH4rsR0rDHHln3AaKiq/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I, Luna, Director of Mitsugoshi, declare this event to be open.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1aTTlPyrhZXhwzuA2LU-Ocq2A6Flv67vu/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "First, allow me to introduce you to the famous writer! Natsume Kafka!",
                "line": 4,
                "url": "https://drive.google.com/file/d/1xQQAItPuy4seKE6L6EWKY0mzl86n1EWN/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Hello everyone, good to see you.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1IztQB3OOE-MWz-kZ-Ni3vwCLyxUFyUHo/view?usp=drivesdk"
            },
            {
                "name": "Attendees",
                "name_variant": "Attendees",
                "subtitle": "Natsume! We're rooting for ya!",
                "line": 6,
                "url": "https://drive.google.com/file/d/1m_ghiEzEBRH3IRi6yPqf4LBof9joN6ch/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "And, Natsume's chocolate-making challenger, the popular singer Shiron!",
                "line": 7,
                "url": "https://drive.google.com/file/d/1Z7kq7rMjzvKEU8AR_hCkvNZB2ufDkkar/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Everyone, I'm here to give you a great performance.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1wQ5C0QEccA7XWwcap77Eh9saHTQCqARM/view?usp=drivesdk"
            },
            {
                "name": "Attendees",
                "name_variant": "Attendees",
                "subtitle": "Shiron! She looks so lovely today!",
                "line": 9,
                "url": "https://drive.google.com/file/d/1qK857IQuixOvZrv04xZEYuOIXKYvoAjn/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "For your chocolate-making, you may freely use any ingredients inside the stadium.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1D3baINovu3sUlcgJGMAalX0jCk7t_4-n/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Once the cooking time is over, our 3 judges will have a vote. The one with the most votes wins.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1RWF7rmdiiuWTL2SBNmyUwur0DaYWdEAX/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "The judges will include myself, and a representative of the Kingdom of Art, Oriana! She is currently studying in Midgar. Princess Rose!",
                "line": 12,
                "url": "https://drive.google.com/file/d/19sxUkd2zFRV7UNdStnMk1SQv9RQg74FN/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose",
                "subtitle": "I am really looking forward to seeing what kind of delicious chocolate you two make.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1OpOvtneM1C--x4_4e_lFo_12K-uyMMms/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Also, as a representative of our customers, a student who was blessed with great luck to be chosen. Cid!",
                "line": 14,
                "url": "https://drive.google.com/file/d/17r3DumPbP-LV_Go8uddx_48G6kPcpzOB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Haha, hahaha... I'm so lucky.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1UMH151GzLYOVYkWglbQgtROuni4-QBHb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I hate standing out, but Gamma said me being around really motivates those two...)",
                "line": 16,
                "url": "https://drive.google.com/file/d/1vbQa86DZSZQbZPymF-XqyvbUERnvvaIo/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Natsume, perhaps it is a good idea to think about what you will say when you are defeated now, before we start?",
                "line": 17,
                "url": "https://drive.google.com/file/d/1RiAd5jruvImhiaHSuidCxuMjKtsY1hQQ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Unfortunately, the word \"defeat\" isn't in my dictionary.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1psxaJ-65pJ9MmAGcJOCMCc3jeIsWisEu/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Wow, sparks are flying! The writer and musician are glaring at each other.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1_HhnHSaDmuoIrQjq9ulVumgtkyagCYq8/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(To the outside world this contest looks like a battle for the most votes...but!)",
                "line": 20,
                "url": "https://drive.google.com/file/d/1tInCsZIknA4x9LXO0S_8vThK8soq2mf6/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(It doesn't matter who Gamma or the princess votes for, whoever gets Master Shadow's vote will be the real winner!)",
                "line": 21,
                "url": "https://drive.google.com/file/d/1iZ-YQzPR1SQ9eaNhahcJt8Ktq_MW8Gis/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Crap... I'll have to choose one.)",
                "line": 22,
                "url": "https://drive.google.com/file/d/17AGWbdbAB6izRZcOHE_v0hMEVn3hQrpw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(A real extra would beg a girl to make him home-made chocolate for Valentine's Day.)",
                "line": 23,
                "url": "https://drive.google.com/file/d/1Tr0urB_e4lNrsEn4O94RhkTlSR6ZbJao/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Or you only get chocolates from your mom, right? But this? This is...)",
                "line": 24,
                "url": "https://drive.google.com/file/d/1tC7LrSRQL4f7_U1CL6eiSW0vqCzYwYdX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Anyway, being in this position to choose someone is taboo in my Theory of Extras...)",
                "line": 25,
                "url": "https://drive.google.com/file/d/1bCVSc4cHsYnnO_5FfF0PGW7KCPLkBEIs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I have to figure out how to manage this...)",
                "line": 26,
                "url": "https://drive.google.com/file/d/11n3R7ZC1NsRHBJ05Dt0fwWUoYd3Vz1BI/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Now, I will hit the gong to signal that you can start cooking!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1w1MJvkHHgZBEndn7DkHvY1Nz52QRBmox/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Thanks to our previous chocolate-making practice, I know her movements!)",
                "line": 28,
                "url": "https://drive.google.com/file/d/1GQeeszEIWR3gbR2GXUq3ccdpdb00FcxV/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Ahh...!",
                "line": 29,
                "url": "https://drive.google.com/file/d/1obUwnlhEGhZaNvAfJ3rDZdgyqTtiW7P5/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Is she planning to make me choose my ingredients first and then compete with the same ones?!)",
                "line": 30,
                "url": "https://drive.google.com/file/d/1ZEMkdMf3caR-6byVpyKRXWnU5-uqSBs6/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(If we compete with the same ingredients, my skills will win out!)",
                "line": 31,
                "url": "https://drive.google.com/file/d/1bye_HC3pVGJJwBxF5sCqlgqXEZBKe3HW/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(If she is thinking about out-competing me in skill, then she is way too naive!)",
                "line": 32,
                "url": "https://drive.google.com/file/d/1FxCyAulOjwjFClXYQNfKLd54gPWmaE9T/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "What is that?! Natsume chose cacao beans, and then pulled some kind of powder from her bosom!",
                "line": 33,
                "url": "https://drive.google.com/file/d/1MLSP40PTIob9JMALxMceDv6MEV6aHqvG/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "She brought in her own ingredients?! Isn't that against the rules?!",
                "line": 34,
                "url": "https://drive.google.com/file/d/159QFVKhkCpQ3lbtKAvHRttXPvCcFKM3P/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Check the rules! \"Please freely use the ingredients inside the stadium.\"",
                "line": 35,
                "url": "https://drive.google.com/file/d/1h8_K5t3hlLtYEV-L03C_-Ad44VBsCu0h/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "This ingredient is in the stadium! So no rules have been broken!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1lIB3MNV2sxuKyY7ocXRHp606dKs4ZK0U/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Pulling a plot twist from between her...?! That's why she is a writer!)",
                "line": 37,
                "url": "https://drive.google.com/file/d/1-UtrH76N58m5oGbjirKN5yi0zy0f8ACA/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Hehehe, this is \"Original Seasoning,\" a multi-purpose condiment that I asked Eta to make for me!)",
                "line": 38,
                "url": "https://drive.google.com/file/d/18Yqzf4BZLLCR9QL7-qzoasaOc0BKCD4O/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(I need to cover the difference in technique with wisdom and inspiration! I hope this is delicious in the end!)",
                "line": 39,
                "url": "https://drive.google.com/file/d/1oMnM0jujKO8ppgvn44sP1iRctTwKE0Ui/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I'll tell you one thing Shiron, cooking is about more than taste...",
                "line": 40,
                "url": "https://drive.google.com/file/d/16YtGAiU6wja6wY63ecOnDoy1RPFEp4OZ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Sorry to tell you this, but I learnt that beginner lesson long ago!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1bXCT987iW5HsbK1kYzJj6eYwWrEWhmeH/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(You can't jump the gap to my technical prowess with a bit of cheating!)",
                "line": 42,
                "url": "https://drive.google.com/file/d/1deFvwOJH1hBd4XZIHH0vxhl0J_D0LoNj/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Oh! Shiron is assembling her chocolate at a dizzying pace!",
                "line": 43,
                "url": "https://drive.google.com/file/d/1JjJCR4bW2mVk9g7M0pxam-CfaBCqRU_2/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(It isn't your taste buds, it is your eyes! You have to taste it by...sight and by smell. With your nose!)",
                "line": 44,
                "url": "https://drive.google.com/file/d/1IlEB_eBpHddDvVbFOF6Seh-CgobfzY7z/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "A chocolate tower built so high you have to look up!",
                "line": 45,
                "url": "https://drive.google.com/file/d/1s98PM-DPMoJxf5FSYoFd6xdV462tTRu8/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "A perfect tower, she's proud of it's height, but it is impossible to move!",
                "line": 46,
                "url": "https://drive.google.com/file/d/1OLFKO6Lj8K-M3yprE3-10r-zA33ykzfh/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Do you see it?! This is a \"Precision\" technique! Before the judges can even eat your chocolate...)",
                "line": 47,
                "url": "https://drive.google.com/file/d/1E-ylc4Z9L_7WhcimJNcxJwSUXXow82Xb/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Their stomachs will be full of my tower!)",
                "line": 48,
                "url": "https://drive.google.com/file/d/1XS5iKQOKoPGIqThe8iiNoSGtMu1981Yq/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "S-So that was your plan! To physically fill up the judges!",
                "line": 49,
                "url": "https://drive.google.com/file/d/1rZqWGxgvv1GRkAfZQITE2-HcJuUkc53K/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Then, could they eat my chocolate first? No, but...)",
                "line": 50,
                "url": "https://drive.google.com/file/d/1eatyoB1ucJ49w4fZLYOAEQo5wbQMbHK5/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(I will need to throw the precious Shadow Wisdom that Master Shadow taught me in the trash. \"In a cooking battle the one batting second has an absolute advantage!\")",
                "line": 51,
                "url": "https://drive.google.com/file/d/1UTRq0mExbxg-sqhEN_lSVzAx4PF9M8fx/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(...Yes, sometimes the one who goes first can win! I will prove it!)",
                "line": 52,
                "url": "https://drive.google.com/file/d/16g4k_6Qbqn3SIc79Cd_pu4k4s7GchfV_/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Meanwhile, Natsume has started making a thick bar of chocolate?!",
                "line": 53,
                "url": "https://drive.google.com/file/d/1Ae_ptFv7EhExmblGpUCU7DNbSWs8KvBY/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "What is it...? It's like a book...",
                "line": 54,
                "url": "https://drive.google.com/file/d/1wQfHBHbm9St0vSs14lOAAZh8R6VdH_zJ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes, I'm making a book! Shiron, your strategy is not nearly enough!",
                "line": 55,
                "url": "https://drive.google.com/file/d/1hIAAMyBFfvqjavWpXqST8eiOJhzzWn8W/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(It's true that you can taste food with your other senses... But, there aren't just five senses!)",
                "line": 56,
                "url": "https://drive.google.com/file/d/1RjkRpj50TNnrwco9CN3b4g8uBQDCbWt7/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Natsume has split the book! Now she is writing on the dark chocolate pages with white chocolate!",
                "line": 57,
                "url": "https://drive.google.com/file/d/1SP3ui67G3u49dIB5voP-d74vkiLetRW2/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(People live by eating information... Satisfaction, feelings of superiority, possessiveness... Stimulate them!)",
                "line": 58,
                "url": "https://drive.google.com/file/d/17hNP82Femzq7pUVnfa7GwlLXM-fhDvS6/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Is she making a real book?! It will be a special story newly written by a best-selling author! An edible chocolate book!",
                "line": 59,
                "url": "https://drive.google.com/file/d/1L1ecGVAHePCbOtkTARipNbyRA331IxJ8/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose",
                "subtitle": "There is nothing like it in this world... What a luxurious chocolate it will become.",
                "line": 60,
                "url": "https://drive.google.com/file/d/1dWr-DycchovfSDWCT0rH2y6hcT30DWMq/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Damn... Can I involve music somehow? No... I can't think of anything like that!",
                "line": 61,
                "url": "https://drive.google.com/file/d/1_ks3ISHJ5CIMrcJ8AZHuFc90_slTUVsV/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(This is a precisely calculated tower, I can't add anything to it, or remove anything!)",
                "line": 62,
                "url": "https://drive.google.com/file/d/1a3-BdkhCfCv2ck1Sf4i-x7VTK5yH7dzQ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(There is nothing I can do except trust myself, and run with it...!)",
                "line": 63,
                "url": "https://drive.google.com/file/d/1iwCMylijcsHtn4CcpMfVJ1JTOf9oLMjy/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Stop! Your time is up!",
                "line": 64,
                "url": "https://drive.google.com/file/d/1A044bp5y8jlxBzwtYh9y5rd4uA9BxprJ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Somehow I managed to finish writing...",
                "line": 65,
                "url": "https://drive.google.com/file/d/1m5GT-hchDPrSIDinqJd-REk-Snkwb69o/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I finished too... *huff* Tower...finished...",
                "line": 66,
                "url": "https://drive.google.com/file/d/1BdJQtSkWw8b8HeQEa9nHUdiw-kxUON62/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Great work both of you! Their chocolate creations are ready! Now for the judging!",
                "line": 67,
                "url": "https://drive.google.com/file/d/1jzQC6GgBnKPYMuC6RRZtqopvG00ENIZ5/view?usp=drivesdk"
            }
        ],
        "e6": [
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "A chocolate-making battle between Natsume and Shiron!",
                "line": 1,
                "url": "https://drive.google.com/file/d/1u4Znj5ITxq2_56EfsGJCh3PLYi01beR8/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "What a spectacular show! Now to try their finished creations.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1SqVwdDq35wcyish79ufcrCNxO-eW15UY/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "First, Natsume's chocolate book!",
                "line": 3,
                "url": "https://drive.google.com/file/d/1D5Ndj7E2_HEduefFfPFLM7iXvoZbH_95/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "It's a waste to eat it after she wrote such an amazing story!",
                "line": 4,
                "url": "https://drive.google.com/file/d/1_TBy0CepTG4xhmR8SX6vwUzbeOAljPmf/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(You're saying that, but at the same time you are cutting it into little pieces...)",
                "line": 5,
                "url": "https://drive.google.com/file/d/1jtA14w7mdjlg-lf-CBHYgsBhv3oJozEg/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "And the taste... *munch* ...",
                "line": 6,
                "url": "https://drive.google.com/file/d/1_2GSTGc51XEKVAshvXOo1gxPY2xMKK9b/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Ugh... My nerves are in a twist about the evaluation since she stopped talking...)",
                "line": 7,
                "url": "https://drive.google.com/file/d/112SkWiKQcnwNFiaJK3CcvHjb7UobeDUy/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Delicious!",
                "line": 8,
                "url": "https://drive.google.com/file/d/1wXxP7gbMVIHqBNBRHNeykY_0opccNuLF/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I did it!",
                "line": 9,
                "url": "https://drive.google.com/file/d/1btgpu5GnZ3VX4Efy6XQSQPRIFbGu7R6C/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "The chocolate has a fine texture, and it melts so smoothly on the tongue!",
                "line": 10,
                "url": "https://drive.google.com/file/d/1qXWix96yhib_XmwYFBW97urXm1fzRk-w/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Though, this is the technique I saw and stole from Epsilon. Temperature...)",
                "line": 11,
                "url": "https://drive.google.com/file/d/1GoVV3mskptLyplsC5IQiP-MuObbGNii9/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Sorry Epsilon, I borrowed your technique.)",
                "line": 12,
                "url": "https://drive.google.com/file/d/18p5src8NXfbFswHAqY1K2BysuvA2g-9a/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I thought it would be heavy, but this dark chocolate is crispy.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1nrw9o9artFF0cveuoIqOuKDS8Xnmf6TM/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Rather than being plate-shaped, I used a cross-shape to bind air inside the chocolate.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1pVsVJm9mvtKq9SzUUpztCkRF_cleNayq/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It would be absolutely terrible if you get full before you eat Shiron's chocolate.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1zBuurwLyLnfTJFAElNWONqO4NE2hc0po/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Are you pouring salt on my wounds after stealing my technique? I wonder how far she will push it.)",
                "line": 16,
                "url": "https://drive.google.com/file/d/1CNRKI_HFR8tNYAqYCZQQVZULY19JqTMD/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "But, this powder that was sprinkled all over it, it doesn't match the chocolate taste very well...",
                "line": 17,
                "url": "https://drive.google.com/file/d/1rbIBrCVsRZed1ENYN7NHfkp9pDnZmhUH/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I-Is that so...?",
                "line": 18,
                "url": "https://drive.google.com/file/d/1iOcB_OIhUeg1-oEFNJ3Tpk884dHMXoyk/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(The seasoning Eta made and gave me, her Original Seasoning... I didn't have time to test it out with chocolate...)",
                "line": 19,
                "url": "https://drive.google.com/file/d/1izTKgB8FU44hIiAfGPC3NNXd8ksAspwQ/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose",
                "subtitle": "Now, the chocolate tower made by Shiron.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1cmrj8sjfvlsZI78VMH2QM6a_dF-ydQQf/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes, I hope you enjoy it.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1IJl4wyBssZbiU30z4tBFMcQD1jBR3UoA/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose",
                "subtitle": "Well, first of all my eyes are drawn to the many detailed designs...",
                "line": 22,
                "url": "https://drive.google.com/file/d/1qU8sbOdgvausTbwrn9bq_GhUfkajE_Fy/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose",
                "subtitle": "She didn't just build a tower, there are detailed patterns drawn on the pillars...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1KVp7S4RjwS6EEncOVF18MMyHMrTFhJnK/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose",
                "subtitle": "In the Kingdom of Oriana, this kind of chocolate would be popular, and would also receive praise.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1i9j3wjdfqNRYDvW2XYOs_sqLxsFw9tHy/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Wow... Coming from a lady of culture, there isn't any higher honor...!",
                "line": 25,
                "url": "https://drive.google.com/file/d/1hyJG0tnrWKCm8mCSjOj8ID8ScbsvKOfq/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Shad... Cid, please have a bite.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1yWPAL5hzpK93BTFpoiNBiFGNgeclqz79/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Uhh, yeah, I'll try it...",
                "line": 27,
                "url": "https://drive.google.com/file/d/1-iwSjeMVlFKLro00Ypr5yYbNRomwGzZp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Double damn, I still can't think up a reason not to choose either one.)",
                "line": 28,
                "url": "https://drive.google.com/file/d/117eFKLqACaOaaKd69c1iHmnzIDWzO2lK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I'm almost at my escape card limit, but maybe...)",
                "line": 29,
                "url": "https://drive.google.com/file/d/1_9WTwUzupdNFKaTpwhA4Nj1YpYP90qsg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Um, how do I eat it? If I cut a piece from the bottom it'll collapse.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1Ve6MzaJ-TWqXUrevD2NXTu5X8pnGFlQL/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes, but you can cut from the top...",
                "line": 31,
                "url": "https://drive.google.com/file/d/1leOgZNSIiIPwvE_EYZgyINdeB-_iN0T7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Well, not even my hand can reach the top...",
                "line": 32,
                "url": "https://drive.google.com/file/d/15pW26BDyV18NIz137KiecRVkX7peOR5m/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Craaaap!! I got carried away and made it too high!",
                "line": 33,
                "url": "https://drive.google.com/file/d/1HKWGdPD9NaLQCqQ70KXvTQ_sRoHWkEAY/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Then, let's use the stepladder over there and just cut the top tier.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1TDYZWYDDWx6LbrxgzR0KCZn-A3Q4BGWf/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Erm, absolutely not, Gamm...Luna, your clumsiness will cause a catastrophe.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1QL7R_wbKyuei5vXtbm8yBEVe3QOfasn9/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "No no, I won't be clumsy. Please trust me.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1apfGgxa3p_7OuuNk8CAZzByTn4TTUFAn/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Ugh... I have a sinking feeling about this...",
                "line": 37,
                "url": "https://drive.google.com/file/d/1OvTcrBzGrTw9QbVlPaLuZIs3hwyRB-lN/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Here we are! Now I will cut the chocolate\u2014",
                "line": 38,
                "url": "https://drive.google.com/file/d/14icSsCUPobMdJnxD5kfBUU5oDCPScVG9/view?usp=drivesdk"
            },
            {
                "name": "Rogue B",
                "name_variant": "Rogue B",
                "subtitle": "Aaah!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1FkQz-bfNNq3SdCcOrvwpthEMhuYTH490/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Eek?!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1SO-dMpLmBEvaV0wicd0kx7R8Zpa34auZ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Ohhhh, Gamma on the stepladder got a shock and lost her balance!)",
                "line": 41,
                "url": "https://drive.google.com/file/d/1xn_zYkVBpJsxYR6Q0OJvZJ11fJCLWgYr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Are you okay?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1TDAKmeaNW4kj77xKC-HzD2Dc1CpQhM-D/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Oh that was close...but somehow my tower was protected...)",
                "line": 43,
                "url": "https://drive.google.com/file/d/11S0DagTgRVVGFnJiWkrlr0APCivF5Yb8/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hey, what are you doing?",
                "line": 44,
                "url": "https://drive.google.com/file/d/1KYa48fS9O6l-GgncLaW4xA7ISsY6nPKc/view?usp=drivesdk"
            },
            {
                "name": "Rogue A",
                "name_variant": "Rogue A",
                "subtitle": "We were hired to work backstage! But we've had enough!",
                "line": 45,
                "url": "https://drive.google.com/file/d/1e6R8WyjOia14wZ0exw7uz94ANDsVHWne/view?usp=drivesdk"
            },
            {
                "name": "Rogue Leader",
                "name_variant": "Rogue Leader",
                "subtitle": "Mitsugoshi won't pay us, they just demanded we turn up today!",
                "line": 46,
                "url": "https://drive.google.com/file/d/1xSmRR02UrVTTttJeGYGo4X4ZRky0j13T/view?usp=drivesdk"
            },
            {
                "name": "Rogue B",
                "name_variant": "Rogue B",
                "subtitle": "We've had it! Mitsugoshi, raise our salaries!",
                "line": 47,
                "url": "https://drive.google.com/file/d/1hYeiYsJSEJ9eDk-i31vc9qObR4As1-Dp/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Stop this at once! You are ruining our special event!",
                "line": 48,
                "url": "https://drive.google.com/file/d/1GJ-46z9KBd7Ck9ftfLjd4OKNfuO8RsnO/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Gamma, one question\u2014are they really part-time staff at Mitsugoshi?",
                "line": 49,
                "url": "https://drive.google.com/file/d/1PcU1pFJR0u6dAAkkSwExkFqbTylOotuh/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "They...might be. This event was suddenly thrown together, so I omitted a few background checks.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1l2S0-FJLxcggDTJC_TmwEjWd-g9tg4V8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So, is that chocolate grenade you're about to throw a prop?",
                "line": 51,
                "url": "https://drive.google.com/file/d/1lcZ2GgTmxzIX_YlOlm6-3r4D29uGw3x4/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "No, I wasn't thinking anything of the sort!",
                "line": 52,
                "url": "https://drive.google.com/file/d/1h3_amlTzAYsbSODvC39jkdPC5A9YWaay/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So maybe it's some kind of harassment arranged by a rival company that hired mercenaries...",
                "line": 53,
                "url": "https://drive.google.com/file/d/1SVowRWi5DbYow_YmeRqL57ITELXNLO2S/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Would they go that far? However, we've garnered so much resentment we wouldn't know who did it...",
                "line": 54,
                "url": "https://drive.google.com/file/d/1LdoeYjxxaNOMZFQ6wyz4c5NB1lh4mvKA/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I think in all probability this would have been backed by a company that sees Mitsugoshi as an enemy.",
                "line": 55,
                "url": "https://drive.google.com/file/d/1WWwYcxdwBKRXc1oAstinNOAl_B-KwP-J/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Well, regardless of who's behind it, I'm gonna make use of the chaos and quietly take them out.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1UVzjHkl_o8Dz5oP77cBcN6MS7fT2lJsU/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Th-Thank you... We can't resort to force so publicly.",
                "line": 57,
                "url": "https://drive.google.com/file/d/1UgYJIburxNuOXcX6XhNu5toYvXTRAAMB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Saying that, how do you think I became Shadow...",
                "line": 58,
                "url": "https://drive.google.com/file/d/19TVgICZ3fyKvCj3ThL2_xML0VvUU0_jj/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose",
                "subtitle": "Cid, it's too dangerous here!",
                "line": 59,
                "url": "https://drive.google.com/file/d/1H0itmOjKtzIU7oNCcLlslZepxuaWXect/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Huh? When did she grab me by the scruff of the neck)",
                "line": 60,
                "url": "https://drive.google.com/file/d/1MZtD4vnrCJgOQfSxhreKpHnV2hD7qtvY/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Nah, I'm safe...but I think Natsume and Shiron are in danger...",
                "line": 61,
                "url": "https://drive.google.com/file/d/1vyyXxllh51B-WE_gQ9YEUxQs5Wbr-C-y/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose",
                "subtitle": "Don't panic! This time I will protect you! They will have to kill me to get to you!",
                "line": 62,
                "url": "https://drive.google.com/file/d/1uZ6Xhw65acmJY2DpQwo9veDaS5-EEAfP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Aaaah! Gaaaaaaah!!!",
                "line": 63,
                "url": "https://drive.google.com/file/d/1Gyn_cS3ktF5TGGw0QEMfBDL8QEfqlQnU/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(A cat burglar has carried away Master Shadow!)",
                "line": 64,
                "url": "https://drive.google.com/file/d/1mFnmXmfczs93vs1cfwQZN8jcM_pX0t2e/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(If Princess Rose and her fighting ability are gone, there is no one left who can go all out...)",
                "line": 65,
                "url": "https://drive.google.com/file/d/1MDY2SDzde8I9nWPjrHrwEjHtj0lUxZ50/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(But do you bastards really think you can interrupt this duel between me and Beta with your pitiful interference?!)",
                "line": 66,
                "url": "https://drive.google.com/file/d/18hW0nthHi2lrr4wyFRR9ym4wD91tyTa7/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "(~?)",
                "line": 67,
                "url": "https://drive.google.com/file/d/11678kzsTe02TH2nApOSJ5ncjuOfFdg0I/view?usp=drivesdk"
            },
            {
                "name": "Rogue A",
                "name_variant": "Rogue A",
                "subtitle": "Wh-What's up with the song?!",
                "line": 68,
                "url": "https://drive.google.com/file/d/1YPoJdSnPfwV1PHdc-QiS90_CH0SeWiNN/view?usp=drivesdk"
            },
            {
                "name": "Rogue Leader",
                "name_variant": "Rogue Leader",
                "subtitle": "It's her, Shiron! She's playing the piano!",
                "line": 69,
                "url": "https://drive.google.com/file/d/1GUJ-bpYijsjVpuVyEnUvFI44pR30pY6V/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Epsilon, what are you doi\u2014 Oh! Nice!)",
                "line": 70,
                "url": "https://drive.google.com/file/d/1aznI7VJr8uizb_Ev3YCJqYt8VGP54VLi/view?usp=drivesdk"
            },
            {
                "name": "Rogue B",
                "name_variant": "Rogue B",
                "subtitle": "Agh!",
                "line": 71,
                "url": "https://drive.google.com/file/d/1hw-fFnh7vEiIht7G6jZXiMSlM0GCOffs/view?usp=drivesdk"
            },
            {
                "name": "Rogue A",
                "name_variant": "Rogue A",
                "subtitle": "Ahh...!",
                "line": 72,
                "url": "https://drive.google.com/file/d/14j1Z1KohNSDz5_PNR4VD-KC4JtvEMqoY/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Everyone is focusing on Epsilon! I'll take this chance to pick off some of the enemy!)",
                "line": 73,
                "url": "https://drive.google.com/file/d/1g519yAYbTlejbWaQ5fVGvkWTc4X6MYWh/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Everyone, this is Shiron's magic song! It has the power to make even bad people behave!",
                "line": 74,
                "url": "https://drive.google.com/file/d/1lntFTTC9oMBoJRmk3ssoGqQagQh01w4s/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Heh, she is throwing the ball to me and directing everyone's attention to the stage... I'm the human sacrifice in her improvised plot...)",
                "line": 75,
                "url": "https://drive.google.com/file/d/1Cosb-FLCGjiVqGPMKAb1pt5daeeohMGN/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "(~?)",
                "line": 76,
                "url": "https://drive.google.com/file/d/1xpWUwR-3dKS8BWpbSpWrpMmEnALmnihC/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(She really is a third-rate writer. But, no other choice here so I'll play along!)",
                "line": 77,
                "url": "https://drive.google.com/file/d/1MABOCmt-COu_j0cH2BmfKqg5cO6dOpzu/view?usp=drivesdk"
            },
            {
                "name": "Rogue Leader",
                "name_variant": "Rogue Leader",
                "subtitle": "Damn, we were goin' for a surprise attack, but they are surprise attacking back! Get the others in 'ere! Get ready for a melee!",
                "line": 78,
                "url": "https://drive.google.com/file/d/1ahAwu-q6XTlyPSvquJhBOhLtUpDvMOvi/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(As if we will let you. This improvisation will end secretly, in the shadows!)",
                "line": 79,
                "url": "https://drive.google.com/file/d/1-GTnyM_eF_EfFWrpvcDlxvzRxt85bouH/view?usp=drivesdk"
            }
        ],
        "e7": [
            {
                "name": "Rogue Leader",
                "name_variant": "Rogue Leader",
                "subtitle": "Damnit, I didn't say do that! It's an easy job you fools, just work up a riot!",
                "line": 1,
                "url": "https://drive.google.com/file/d/1pCfFwc7nFbCfK39TBxw_q7RQNDO3rT2F/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Easy jobs always have a catch... If you don't know that, you really are hopeless!",
                "line": 2,
                "url": "https://drive.google.com/file/d/1At0n5rCo3eLHpnqsycniGBydONZsfIen/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Time to play the last movement... Time for the grand finale!",
                "line": 3,
                "url": "https://drive.google.com/file/d/1mvqzPTbNN4-KxPrK5GD2vA24GNTJgVsj/view?usp=drivesdk"
            },
            {
                "name": "Rogue Leader",
                "name_variant": "Rogue Leader",
                "subtitle": "Damnit, she's a decoy! The other finalist is taking us out separately!",
                "line": 4,
                "url": "https://drive.google.com/file/d/1-OFhZaAsJn_FxFQQKWXMjJdNdg-V9rkl/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "You noticed too late.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1inrhjsFM8ETIxzAOociMYJ4EZovFRhuW/view?usp=drivesdk"
            },
            {
                "name": "Rogue Leader",
                "name_variant": "Rogue Leader",
                "subtitle": "Ah! You're that writer...",
                "line": 6,
                "url": "https://drive.google.com/file/d/1wwh7B6j74nyVxUJkNQeU1qdpewBQJiSy/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It's time to put a period on the last sentence of this drama.",
                "line": 7,
                "url": "https://drive.google.com/file/d/15kWvVEElTac4t6tLTOSpIka9M-sDdzzs/view?usp=drivesdk"
            },
            {
                "name": "Rogue Leader",
                "name_variant": "Rogue Leader",
                "subtitle": "Ugh! Damnit...! If we gotta retreat, I'm takin' you with me...!",
                "line": 8,
                "url": "https://drive.google.com/file/d/1KSF3MtR2Q7j4W_tKzwchWQIJ4TBmhFz9/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Huh? Me?",
                "line": 9,
                "url": "https://drive.google.com/file/d/1MlptTat6IW_7ocUnu14jTfUZLbWEviYk/view?usp=drivesdk"
            },
            {
                "name": "Rogue Leader",
                "name_variant": "Rogue Leader",
                "subtitle": "Director Luna of Mitsugoshi! If I can take you out of the picture then it'll be mission complete!",
                "line": 10,
                "url": "https://drive.google.com/file/d/108HcX9v5pjDxi5Y1mUnmaU1bXMZpPrMf/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "S-Stop that! Let go of me!",
                "line": 11,
                "url": "https://drive.google.com/file/d/1nzA6rLia__0nyTsaNNqQDDOJkMhOr7-_/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh, that's...!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1_xYbTeFtVXYIDtWXK9Z8E2yr-XJMsClj/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Oh, that's...!",
                "line": 13,
                "url": "https://drive.google.com/file/d/1x7hEENrY0XpFSuVW1VEGIF5X-t1FR6X9/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "What the...?! Oh...!!!",
                "line": 14,
                "url": "https://drive.google.com/file/d/1wx0e0465Hv_PBt7VWcZQSQMO-XBkkLve/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Noooo, my tower!",
                "line": 15,
                "url": "https://drive.google.com/file/d/1cxLrRWy0TstUGGiY54BpB-oAft90fQ4I/view?usp=drivesdk"
            },
            {
                "name": "Rogue Leader",
                "name_variant": "Rogue Leader",
                "subtitle": "Wh-Whoa, the tower! Aaagggh!!!",
                "line": 16,
                "url": "https://drive.google.com/file/d/1FYSPGQLXgRITyGK9z0DxJij0fJshQodQ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Urk... You didn't need to make our enemies eat my tower before I got a chance to let Master Shadow eat it!",
                "line": 17,
                "url": "https://drive.google.com/file/d/1OQQIIgZxzNr8wBaR6edUxamB1Nbd_OI5/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "That's exactly why I said it's dangerous... It's too reckless to let them take clumsy Gamma hostage...",
                "line": 18,
                "url": "https://drive.google.com/file/d/11XFOGv6p8WGU_yrFmX9y-rTvWBhxsGHj/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I-It couldn't hurt you two to be a little worried about me...!",
                "line": 19,
                "url": "https://drive.google.com/file/d/1Ng9CbyzgN3IRhKusUHg18tBoXO1lSzz9/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I'll listen to your complaints later. Quick, lend me your ear...",
                "line": 20,
                "url": "https://drive.google.com/file/d/1sjggFqAkcDsC5d9qOC8nhsTfxxBAeSBm/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Hmm, I see... Okay, as you wish.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1GtxQLQaabHPBaU9WK2P8ac4MtoMU3LF_/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Ladies and gentlemen! Tell me, how was the Chocolate Hero Show?!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1gIGbwPr31dwHEv_tE_HjEiI4KPBZXo0-/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose",
                "subtitle": "Oooh, so that's what it was? It was like a real attack...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1KR4g2Pnr1vVa8OO5VIckSi2mvRdjQ5rl/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Everyone, please give a big round of applause to how Mitsugoshi's chocolate power completely routed the Evil Granulated Faction!",
                "line": 24,
                "url": "https://drive.google.com/file/d/147FsXOktApyYWyYGzNjI4T0YFhaOaH12/view?usp=drivesdk"
            },
            {
                "name": "Spectator Woman",
                "name_variant": "Spectator Woman",
                "subtitle": "Don't give me that nonsense about a show! Look at my clothes! There is chocolate everywhere!",
                "line": 25,
                "url": "https://drive.google.com/file/d/14ycKlfk-TO-QcqkoiLbDPUSvuxl7GxVs/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Yes, we pulled off quite the surprise, I am deeply sorry that we could not give advance warning.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1pIUazz58qP4wnpyPkz3e_YlW41WW8Zsh/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "If anyone has clothing or property that got messy, we will let you exchange them for anything you want at Mitsugoshi!",
                "line": 27,
                "url": "https://drive.google.com/file/d/17OlfsU-X3rQ2g-ogXHy-QosBDlgTbBKB/view?usp=drivesdk"
            },
            {
                "name": "Spectator Woman",
                "name_variant": "Spectator Woman",
                "subtitle": "Oh? Really? Well if that's the case...",
                "line": 28,
                "url": "https://drive.google.com/file/d/1ODmv-7A_fM5CVqZPj-egIIfm6Ym9KJ12/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "It was really thrilling, but I'm glad no one got hurt.",
                "line": 29,
                "url": "https://drive.google.com/file/d/13YBPTv6El4xjgNzoApthpupkEl9GAfJi/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose",
                "subtitle": "Yes, both the performance and action were amazing!",
                "line": 30,
                "url": "https://drive.google.com/file/d/12SUfw_wBmrv_G5e2hJ2PHF77NfcDclm7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(More than that, I escaped having to choose anyone! Yeah, I got through it!)",
                "line": 31,
                "url": "https://drive.google.com/file/d/1arrHXJ9KmyHAa0hNdhlMXOzhqnfZGcZG/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Phew, somehow the Valentine event finished safely...",
                "line": 32,
                "url": "https://drive.google.com/file/d/1JpCyvi5qURhKUNBjJeN5L11Auwz4oO_W/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Now, you lot. Which company hired you?",
                "line": 33,
                "url": "https://drive.google.com/file/d/1aF9dsg1orn6HfPduMy5EP5a3k4A25tJ0/view?usp=drivesdk"
            },
            {
                "name": "Rogue Leader",
                "name_variant": "Rogue Leader",
                "subtitle": "...I ain't gonna sing. It's all about trust in the merc world.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1eeXXzOdNoNyGpJcF4ZNvEkmMKraGAFhe/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Is that so? That isn't what I heard you say earlier. You thought it was an easy job to cause an uproar and then run, right?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1z-SPX_RnnnhlBkvUkKDNFJCCliwix4rO/view?usp=drivesdk"
            },
            {
                "name": "Rogue Leader",
                "name_variant": "Rogue Leader",
                "subtitle": "That's...um.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1NNN1ombr3aEMx6U_SJ1JNjmJ313bmLiA/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Well, I am not interested in who it is. You can tell your employer that.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1WPfAru_J7bAtADMYPXkl5QNzI4JoWyY_/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "You tell them, next time come at us as a business and play fair.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1Y1qLobvPddN-tRtJqiQ-3eMKAReD6PgP/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Master Shadow, finally... Please tell us whose chocolate you choose. Mine or Epsilon's.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1LDNkBL9tQkhXKhL3Ke2-gonpjy6U2-70/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "No, I can't decide that since I didn't eat Epsilon's chocolate...",
                "line": 40,
                "url": "https://drive.google.com/file/d/1lj9lE0GPeLdMfP5F45v2lKNZmk7t3MUI/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I thought you'd say that, so I'm in the middle of building a mini chocolate tower in the Shadow Garden kitchen.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1rGerFEkf1Oz_ZsIf9aGLqboRhFXTbeLQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I thought I had an escape route, but then a mini-tower fell on it!)",
                "line": 42,
                "url": "https://drive.google.com/file/d/1mKmIVXtpc7loZ02seSDnaC4JQCbEix6K/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Come on, you two. Shadow had a tough day at the event as well, let him rest.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1y8HL6SdnHQfuqf03qkd1C4iS0D04ofsx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alpha...",
                "line": 44,
                "url": "https://drive.google.com/file/d/1qncQoSBN3JfNRtvgffyEigjASE1aNqFn/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Moreover, it is not just the two of you that wants to give chocolate to Shadow. Going behind the others' backs is forbidden.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1R0qXVOVWWw-HgrGlqWZz0wRfZU7wfRPI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh?",
                "line": 46,
                "url": "https://drive.google.com/file/d/1D7IZzyUyw2ITnbs1H9RYfEGstJJwZqLE/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "All of the Seven Shadows will make chocolate here, and give it to Shadow.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1f4tDTmkpVJthVsKmvwmcZuvOmEWcA4pp/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But that's... But I worked so hard...!",
                "line": 48,
                "url": "https://drive.google.com/file/d/1YLHCU332-1SO__yPtGpl7i0pYJaWXr16/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "That's completely different to what I had planned...!",
                "line": 49,
                "url": "https://drive.google.com/file/d/1n-7eNYdSDUyvzvlzivYvU9YAonFjMndl/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Is that clear?",
                "line": 50,
                "url": "https://drive.google.com/file/d/1gRj908Mixi9dbJT4-weBPAWDUjRQ0CZX/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta & Epsilon (Beta)",
                "subtitle": "Y-Yes, ma'am.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1CZxzrAvnHNkbsbaU4tMJTksvWYwFbLaU/view?usp=drivesdk"
            },
                        {
                "name": "Epsilon",
                "name_variant": "Beta & Epsilon (Epsilon)",
                "subtitle": "Y-Yes, ma'am.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1CZxzrAvnHNkbsbaU4tMJTksvWYwFbLaU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Whoa, scary! No one can disobey this side of Alpha...)",
                "line": 52,
                "url": "https://drive.google.com/file/d/1vPIGgTC3Yd_H47lBTh8jqUzjaR2ugflg/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Done! Fruit chocolate!",
                "line": 53,
                "url": "https://drive.google.com/file/d/1se71lVQw9YXDdXaYEbntrmtIG-6nlNhf/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Didn't you just cut some fruit and stuff a bar of cooking chocolate between them?",
                "line": 54,
                "url": "https://drive.google.com/file/d/1ym4k1DhLhzeqyTcWVbAIhw2zr-UMutvN/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Err... I don't like really sweet chocolate. So that's why it's more fruit than chocolate!",
                "line": 55,
                "url": "https://drive.google.com/file/d/1FHLYRiaQZru1hQqoD84CDdUJOA8TSI4m/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Could you at least wash the fruit? You don't want to give Master Shadow a stomachache.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1fDBDlrc76HgTANvyhb9qqtI0FMYkjNOl/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Beta...my....original seasoning...how was it?",
                "line": 57,
                "url": "https://drive.google.com/file/d/1W0RQCwwC0QswK-URS1izW5TQwS166Z2L/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "The judges didn't care for it... It's a delicious powder, but it might be too salty.",
                "line": 58,
                "url": "https://drive.google.com/file/d/1OsG4fxNc7QOLrOdm6zHYl8bG9UPBue-l/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Sweet and delicious...hmm. Maybe, a chocolate jelly pack...that can efficiently supply sugar...?",
                "line": 59,
                "url": "https://drive.google.com/file/d/1vDaHU4N73KA5kmHDUQmhHwOb_H8J54VZ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Your ideas place too much emphasis on efficiency and lack in presentation...",
                "line": 60,
                "url": "https://drive.google.com/file/d/1bLTMk3ihVqnWC2wCjuM1uEIq-tcs1dQd/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Epsilon, I wonder if you could show me how to make chocolate?",
                "line": 61,
                "url": "https://drive.google.com/file/d/1dMXH3LESVQozZclDqIkxlvxXyZ8TaZmm/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Ulp, Me? Show Lady Alpha? Too scary...",
                "line": 62,
                "url": "https://drive.google.com/file/d/1aAAVpMeJtBViMRkNsNDn3Fpa-XDF5OWR/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Everyone recognizes your cooking skill. Here, you could be everyone's teacher.",
                "line": 63,
                "url": "https://drive.google.com/file/d/1Sz8IKcL4SQkAYPM_sp5Hmh1bMi45KZTB/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Teacher...! Th-Then with your permission! Ahem, the temperature has to be\u2014",
                "line": 64,
                "url": "https://drive.google.com/file/d/1PrRGlV5CfmezjuGd4nzt8i9dwdTVqm95/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I don't understand why you put it in hot water to begin with. It would be much faster if you just put it into a pot\u2014 Owwww!!!",
                "line": 65,
                "url": "https://drive.google.com/file/d/1NyI58SB78MX57ctZ5z1RvlqR-8Z-5w_A/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Because you will burn the pot! It is so that it melts smoothly at a low temperature! Gamma! Don't make your own original recipes!",
                "line": 66,
                "url": "https://drive.google.com/file/d/1dglAaTV80YvX3nBuidjKxU9pEiL9JNG6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Everyone is busy and noisy, but it looks like they're having a lot of fun.)",
                "line": 67,
                "url": "https://drive.google.com/file/d/1KfOPTaCX_uCm-c1bbKb60ZrvwEu8R90W/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Delta has Zeta helping her, and Gamma has Epsilon as well as Alpha. I don't think anyone is going to make any big mistakes.)",
                "line": 68,
                "url": "https://drive.google.com/file/d/1j5xRVfrT8fPLM_qtgLCKx1UybR7d8XN4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(If the chocolate is from everyone, then I don't need to choose someone. It's a good thing that it seems like I can get through this in peace.)",
                "line": 69,
                "url": "https://drive.google.com/file/d/1wtHKPB_btXtssRNCCLBTL8SSrMWcdsBt/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Next year, Master Shadow...)",
                "line": 70,
                "url": "https://drive.google.com/file/d/11RiYcu6RJg6YT98XGR7Kt68j5QHgwG-U/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(The first chocolate you get will be mine...!)",
                "line": 71,
                "url": "https://drive.google.com/file/d/1NK1pGACKa5AWETh2esX_FJZtl2rejUUc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...Next year will be fine, right?)",
                "line": 72,
                "url": "https://drive.google.com/file/d/1mNpiuj-ueSZDqm6VwtL3SA2KTX7i381b/view?usp=drivesdk"
            }
        ]
    }
}

let setDoc = db.collection('data').doc('es_nvacs').set(data['nvacs']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
