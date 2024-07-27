const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "kj1": {
        "e1": [
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It seems everyone has gathered.",
                "line": 1,
                "start_time": "0-00-06.150000",
                "end_time": "0-00-07.640000",
                "url": "https://drive.google.com/file/d/1MYoWFqk-7OLZeCX9VCixSJH2Gn8vtPr_/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes, Lady Alpha. The Seven Shadows are all here.",
                "line": 2,
                "start_time": "0-00-08.050000",
                "end_time": "0-00-11.240000",
                "url": "https://drive.google.com/file/d/1OiJsCPfqCd0e_f79VVMrpz4GBYLPnGx8/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "That's unusual isn't it?",
                "line": 3,
                "start_time": "0-00-11.540000",
                "end_time": "0-00-13.620000",
                "url": "https://drive.google.com/file/d/10XzYHH4gthgmQ3yHJ3c5r5k_eZKLcXHT/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "All Seven Shadows are here at the same time.",
                "line": 4,
                "start_time": "0-00-13.640000",
                "end_time": "0-00-15.620000",
                "url": "https://drive.google.com/file/d/1rG7qaMd0M9cEFivXCMIjdtxST484qYfi/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "It's because someone here is usually off somewhere else.",
                "line": 5,
                "start_time": "0-00-15.620000",
                "end_time": "0-00-19.830000",
                "url": "https://drive.google.com/file/d/1yRgankq9Ff8oMla7izknv5x-0xTao2R2/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Zeta is part of the Intelligence unit, so it can't be helped, right?.",
                "line": 6,
                "start_time": "0-00-19.830000",
                "end_time": "0-00-22.750000",
                "url": "https://drive.google.com/file/d/16wYuVgVUi3AYbDYeW-IHJh_-R75oToSw/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "That's right, Doggy.",
                "line": 7,
                "start_time": "0-00-22.750000",
                "end_time": "0-00-24.790000",
                "url": "https://drive.google.com/file/d/1DerVkOAHq0btUpbuBflQ1hNafUab67FX/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Did you say something?",
                "line": 8,
                "start_time": "0-00-24.790000",
                "end_time": "0-00-26.790000",
                "url": "https://drive.google.com/file/d/14fQrzkU7TvoLEdgA0tXsehOPTPO-0Xu8/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I didn't.",
                "line": 9,
                "start_time": "0-00-26.790000",
                "end_time": "0-00-27.450000",
                "url": "https://drive.google.com/file/d/1GL0JIAa5YwkPp-x9xcJNEehxozAEuufM/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I'm sleepy.",
                "line": 10,
                "start_time": "0-00-27.450000",
                "end_time": "0-00-29.570000",
                "url": "https://drive.google.com/file/d/1Ub8v4OHh5vYr6BGnOp4VaGGNwcPrJLgm/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Oh, I'm not sleepy at all!",
                "line": 11,
                "start_time": "0-00-29.570000",
                "end_time": "0-00-31.720000",
                "url": "https://drive.google.com/file/d/1Z_VaHb0xNSogtzJcjN9Jb6fpbhif1iRP/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "That's why I don't listen to what doggy has to say.",
                "line": 12,
                "start_time": "0-00-31.720000",
                "end_time": "0-00-34.120000",
                "url": "https://drive.google.com/file/d/1NpIM-efCsMPYwKQeg_grG4-5AWTk-js4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It's about time. Can I get right to it?",
                "line": 13,
                "start_time": "0-00-38.310000",
                "end_time": "0-00-40.970000",
                "url": "https://drive.google.com/file/d/1Q6eM0F5ub1sHvivjPC_92sTVdYe3losz/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Well then. What's our state of affairs?",
                "line": 14,
                "start_time": "0-00-42.810000",
                "end_time": "0-00-44.520000",
                "url": "https://drive.google.com/file/d/1ew9ga23ffAhmbYjvonNT7b6Jd8GNgGSY/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Let's see.",
                "line": 15,
                "start_time": "0-00-44.520000",
                "end_time": "0-00-45.540000",
                "url": "https://drive.google.com/file/d/19oa4Nc4yt5PgePnJl_-xfu-0Q4m5sjvf/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Thanks to the Demonic Possession Search Device,",
                "line": 16,
                "start_time": "0-00-45.520000",
                "end_time": "0-00-47.540000",
                "url": "https://drive.google.com/file/d/1kjmfHa7dzjcqEn-WFQihOOdP_Y2alQlc/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "developed by Eta, that went operational last month,",
                "line": 17,
                "start_time": "0-00-47.540000",
                "end_time": "0-00-50.810000",
                "url": "https://drive.google.com/file/d/1TGKE5AIjbxIc-RH9d3SiWb970GDTBftZ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Shadow Garden has finally reached 600 members.",
                "line": 18,
                "start_time": "0-00-50.810000",
                "end_time": "0-00-54.020000",
                "url": "https://drive.google.com/file/d/1DVvDeiSLwIHoEkrxISHcV-zwpgZm6jih/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "600?!",
                "line": 19,
                "start_time": "0-00-54.020000",
                "end_time": "0-00-55.110000",
                "url": "https://drive.google.com/file/d/1pv2mv4DUXfF-af49yj4rzno8CsGXKzF_/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Our numbers have skyrocketed, haven't they?",
                "line": 20,
                "start_time": "0-00-55.110000",
                "end_time": "0-00-56.620000",
                "url": "https://drive.google.com/file/d/1V8tF5jgtPuz8qv8Kuj3W--a5uGTbBj9l/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "It was thanks to our master, Lord Shadow's teachings,",
                "line": 21,
                "start_time": "0-00-56.620000",
                "end_time": "0-00-59.010000",
                "url": "https://drive.google.com/file/d/1C1qN5G7yH0I8EdbrbRb0zUXZhqeqvPV5/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "that Eta was able to finish developing the device, you know?",
                "line": 22,
                "start_time": "0-00-59.050000",
                "end_time": "0-01-01.910000",
                "url": "https://drive.google.com/file/d/171q5dqmw21eqtT1xHZHqWY4Y8R34R3hs/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Still, it's an amazing achievement. As expected of you, Eta.",
                "line": 23,
                "start_time": "0-01-04.650000",
                "end_time": "0-01-07.960000",
                "url": "https://drive.google.com/file/d/1BPz4aPiUq_FygURcuR6ReZq_Hxgmq3Xi/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But...",
                "line": 24,
                "start_time": "0-01-09.230000",
                "end_time": "0-01-09.960000",
                "url": "https://drive.google.com/file/d/1i-QTtP8-pvPn1okG89OyXX9jEYpfzcon/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "That's still not enough, is it?",
                "line": 25,
                "start_time": "0-01-12.010000",
                "end_time": "0-01-14.340000",
                "url": "https://drive.google.com/file/d/1HRzZKKeB6zjg7DaJLttIvD_EtPZN_px-/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Right.",
                "line": 26,
                "start_time": "0-01-15.020000",
                "end_time": "0-01-15.600000",
                "url": "https://drive.google.com/file/d/1XyHq8W7H-19Wvd1T3-olNd-30pU6XuD4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "In order to realize Lord Shadow's ideal world,",
                "line": 27,
                "start_time": "0-01-16.520000",
                "end_time": "0-01-19.840000",
                "url": "https://drive.google.com/file/d/1PJ4eEoM07-wzFcTYXHL4h3mfZHvj1qaS/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "we need many, many more comrades.",
                "line": 28,
                "start_time": "0-01-19.840000",
                "end_time": "0-01-22.020000",
                "url": "https://drive.google.com/file/d/1U_0xizMQjFbhDSslYgB80NMn1-OekA8n/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "That's why we have to execute tonight's plan perfectly, right?",
                "line": 29,
                "start_time": "0-01-22.870000",
                "end_time": "0-01-26.950000",
                "url": "https://drive.google.com/file/d/1h_EbawW522m1Fb25c8CaLQyEmdNH4EWz/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Exactly.",
                "line": 30,
                "start_time": "0-01-27.250000",
                "end_time": "0-01-28.490000",
                "url": "https://drive.google.com/file/d/17eOxRRXSPaTRKqnFnSPVQdkH4jzVoR_i/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Then, without further ado, let our plan commence.",
                "line": 31,
                "start_time": "0-01-30.780000",
                "end_time": "0-01-33.920000",
                "url": "https://drive.google.com/file/d/1OgLTNoRWNJ2Ol8MDrQM7ojlh6SkFptZr/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Beta, report to Lord Shadow at once.",
                "line": 32,
                "start_time": "0-01-33.920000",
                "end_time": "0-01-35.650000",
                "url": "https://drive.google.com/file/d/1UNr7fRC14Y4hj9QQYt_1WZzSPx2nClAN/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Understood.",
                "line": 33,
                "start_time": "0-01-35.650000",
                "end_time": "0-01-36.270000",
                "url": "https://drive.google.com/file/d/1AkskM3vWUBkB2zSHL8Dl3W0ZHJGHBmuQ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Everyone, take your assigned positions.",
                "line": 34,
                "start_time": "0-01-37.250000",
                "end_time": "0-01-39.670000",
                "url": "https://drive.google.com/file/d/1NFzRNIjpPMOvBN468puXb1BP7KOjXDbo/view?usp=drivesdk"
            },
            {
                "name": "Everyone",
                "name_variant": "Everyone",
                "subtitle": "Understood!",
                "line": 35,
                "start_time": "0-01-40.020000",
                "end_time": "0-01-40.800000",
                "url": "https://drive.google.com/file/d/1ThJrlc3Oq1-EkE7u2d5R7zEDap9P6y6Y/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "What's wrong?",
                "line": 36,
                "start_time": "0-01-42.390000",
                "end_time": "0-01-43.430000",
                "url": "https://drive.google.com/file/d/15pyp3FXkUj_m3w8Ww8AYdgTviVRrfXb8/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Nothing. There's just one thing I have a question about.",
                "line": 37,
                "start_time": "0-01-44.750000",
                "end_time": "0-01-47.420000",
                "url": "https://drive.google.com/file/d/1aQB4QCRr5Bw1DwK4gg3jhXezX44pwPtm/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "What is it?",
                "line": 38,
                "start_time": "0-01-47.420000",
                "end_time": "0-01-48.590000",
                "url": "https://drive.google.com/file/d/1jeZuf2Y0G3SyDwT9LsyzQvxFOlO9MH4j/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "600... How much is that exactly?",
                "line": 39,
                "start_time": "0-01-48.590000",
                "end_time": "0-01-53.210000",
                "url": "https://drive.google.com/file/d/1qempKcSSAqB80mkZjL9IEvs2V2c7WyuZ/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Let's just say it's a lot.",
                "line": 40,
                "start_time": "0-01-55.590000",
                "end_time": "0-01-57.300000",
                "url": "https://drive.google.com/file/d/1HK9_6whe2_-zD7vCQsqIlYiHBwhnHHTA/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I understand now! It's a lot!",
                "line": 41,
                "start_time": "0-01-57.300000",
                "end_time": "0-01-59.650000",
                "url": "https://drive.google.com/file/d/18fuE_WFVJV2blsTbdDFGz7D2xt5iPj9A/view?usp=drivesdk"
            }
        ],
        "e2": [
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I can't write!",
                "line": 1,
                "start_time": "0-00-04.980000",
                "end_time": "0-00-09.540000",
                "url": "https://drive.google.com/file/d/1aoX_ASrlT3VFxLLe8HVCxRsCu379iTht/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Lady Alpha!",
                "line": 2,
                "start_time": "0-00-10.450000",
                "end_time": "0-00-11.480000",
                "url": "https://drive.google.com/file/d/1VIR8_Risuq_So_KFlxnLOikNrHCJb3hA/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "How is it going?",
                "line": 3,
                "start_time": "0-00-11.730000",
                "end_time": "0-00-12.330000",
                "url": "https://drive.google.com/file/d/1W4sQ3vSauoJjfcaDiK0nhU2q-u-dnkwi/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Making progress writing \"The Chronicles of Lord Shadow\"?",
                "line": 4,
                "start_time": "0-00-12.430000",
                "end_time": "0-00-15.110000",
                "url": "https://drive.google.com/file/d/1wDhaVv3rd3svp6Txz9WvLJKDdhZ4KkMn/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "No...",
                "line": 5,
                "start_time": "0-00-15.110000",
                "end_time": "0-00-16.170000",
                "url": "https://drive.google.com/file/d/10JIxt87KTxfiuWx3gaW52tyOIldqGFV2/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I can make my pen run with fervor",
                "line": 6,
                "start_time": "0-00-16.930000",
                "end_time": "0-00-18.710000",
                "url": "https://drive.google.com/file/d/1ghf7fKI-cBejz4Xt4ParZ7QMVPYrjP4d/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "because just like everyone else, I'm inspired by Lord Shadow's magnificent appearance,",
                "line": 7,
                "start_time": "0-00-18.710000",
                "end_time": "0-00-23.540000",
                "url": "https://drive.google.com/file/d/1cOftPbQPNg7WmCJs4ZZeknhoBk7VNIDh/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "but...",
                "line": 8,
                "start_time": "0-00-23.850000",
                "end_time": "0-00-24.590000",
                "url": "https://drive.google.com/file/d/1mx6e5KvTL1mk5MTFFMAxmcR00dw2YcAn/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But what?",
                "line": 9,
                "start_time": "0-00-24.590000",
                "end_time": "0-00-25.560000",
                "url": "https://drive.google.com/file/d/1P1bB2My1LQEHunHSXoJhgPP5b2hbJzes/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "When I later reread the words I put down,",
                "line": 10,
                "start_time": "0-00-25.560000",
                "end_time": "0-00-28.980000",
                "url": "https://drive.google.com/file/d/1hbdjlgX5zhsPejNQuy6A5tCDXzVgAYa8/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I can't help feeling that they were not quite the right words,",
                "line": 11,
                "start_time": "0-00-28.980000",
                "end_time": "0-00-31.160000",
                "url": "https://drive.google.com/file/d/1RrGEpBJTolCdS9E8uDvAdLGvK0_2IFZf/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "and that I haven't reached the level that would allow me",
                "line": 12,
                "start_time": "0-00-31.580000",
                "end_time": "0-00-34.970000",
                "url": "https://drive.google.com/file/d/1jRKj9yutft-WWT5RbYqURh8NgXCjCQah/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "to fully illustrate the true greatness of Lord Shadow.",
                "line": 13,
                "start_time": "0-00-34.970000",
                "end_time": "0-00-38.190000",
                "url": "https://drive.google.com/file/d/191xdUQJ1FTw8MT1r6Ar-P0KH9BAsSPzT/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You're right.",
                "line": 14,
                "start_time": "0-00-38.870000",
                "end_time": "0-00-39.940000",
                "url": "https://drive.google.com/file/d/1ncJ5R7bPzX8fCdqGZ6AABTQyXdsvTFGX/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Your current writings have not yet reached that kind of level.",
                "line": 15,
                "start_time": "0-00-39.980000",
                "end_time": "0-00-44.180000",
                "url": "https://drive.google.com/file/d/1yX0Hrt9QaJVwYBg9pWAB5idmvuCCl80C/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "But...",
                "line": 16,
                "start_time": "0-00-44.640000",
                "end_time": "0-00-45.430000",
                "url": "https://drive.google.com/file/d/1XVrb-9pFt6N1JIGAWc77sWlXv-GtVC0K/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Still, that shouldn't stop you from pursuing him.",
                "line": 17,
                "start_time": "0-00-45.780000",
                "end_time": "0-00-49.840000",
                "url": "https://drive.google.com/file/d/1Eck96jFCDekpai6tfwoaWThNEsVU2o66/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Don't you agree, Beta?",
                "line": 18,
                "start_time": "0-00-51.160000",
                "end_time": "0-00-52.900000",
                "url": "https://drive.google.com/file/d/1CfYzmV2wkeuXdF6Ymo178CKsXjzzgag0/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes!",
                "line": 19,
                "start_time": "0-00-53.570000",
                "end_time": "0-00-54.500000",
                "url": "https://drive.google.com/file/d/11NZmvoPdagNgFO3zAc0CfZ2HpSSmdHI0/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Thank you!",
                "line": 20,
                "start_time": "0-00-55.850000",
                "end_time": "0-00-57.160000",
                "url": "https://drive.google.com/file/d/1FI9SA7AypguKbfa84o1jVYKtx32l8Ho0/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I feel a little bit better now.",
                "line": 21,
                "start_time": "0-00-57.160000",
                "end_time": "0-00-59.140000",
                "url": "https://drive.google.com/file/d/1HbqK3gyWzyAirqKHAOWhG7aulmgrdaTV/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm glad to hear that.",
                "line": 22,
                "start_time": "0-00-59.410000",
                "end_time": "0-01-00.240000",
                "url": "https://drive.google.com/file/d/1kE0k7niD4a7wS6HYi46x5WHL9MZn0fue/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Your work is appreciated and enjoyed by the girls of Shadow Garden, too.",
                "line": 23,
                "start_time": "0-01-00.710000",
                "end_time": "0-01-04.850000",
                "url": "https://drive.google.com/file/d/1ysZkV39xnYUSJsE7HZeHeBnlGPQroTF2/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I'll keep doing my best!",
                "line": 24,
                "start_time": "0-01-05.890000",
                "end_time": "0-01-06.930000",
                "url": "https://drive.google.com/file/d/1GEPPBsFbpFaADMOCbFKpKCY3yIexoF0t/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Oh, by the way...",
                "line": 25,
                "start_time": "0-01-08.610000",
                "end_time": "0-01-09.830000",
                "url": "https://drive.google.com/file/d/18Dfrpv_36928IPLqWbKCGJ577ExPgKT-/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I wanted to ask you something about Lord Shadow, since you have known him the longest.",
                "line": 26,
                "start_time": "0-01-09.830000",
                "end_time": "0-01-15.050000",
                "url": "https://drive.google.com/file/d/1Q0Hm_iVU8JHyMgKXZAReQIU5VD3D6xuS/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "What is it?",
                "line": 27,
                "start_time": "0-01-15.050000",
                "end_time": "0-01-15.910000",
                "url": "https://drive.google.com/file/d/1OcBF07iMg348d5jg3ETCrc9W9PDGkj8m/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "During the recent battle, when Lord Shadow was tortured by those guys...",
                "line": 28,
                "start_time": "0-01-16.270000",
                "end_time": "0-01-20.570000",
                "url": "https://drive.google.com/file/d/1LgTiwB2ykZbYGSfN61NFVySqq9nCFCMW/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Oh, when he was begging for his life.",
                "line": 29,
                "start_time": "0-01-20.570000",
                "end_time": "0-01-22.410000",
                "url": "https://drive.google.com/file/d/1XXMojWiwnKZzzSYh_j2ZUNIJz5Jqa-R8/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I don't know what his intentions were,",
                "line": 30,
                "start_time": "0-01-22.860000",
                "end_time": "0-01-26.850000",
                "url": "https://drive.google.com/file/d/1DlN2Y4xi-2sPkZayUZQByFI858_7M0Dr/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "but it sure was a convincing act.",
                "line": 31,
                "start_time": "0-01-27.110000",
                "end_time": "0-01-28.640000",
                "url": "https://drive.google.com/file/d/1VUGDGdKXQTOyBYhS_9z6TiF5ha_57pFQ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "What was it like?",
                "line": 32,
                "start_time": "0-01-29.470000",
                "end_time": "0-01-31.410000",
                "url": "https://drive.google.com/file/d/1HXm5P8y0MCiwV0UMyXnaexSqSMRkW4FI/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Huh?",
                "line": 33,
                "start_time": "0-01-32.140000",
                "end_time": "0-01-32.770000",
                "url": "https://drive.google.com/file/d/1gyMh2NgXrCBQAVpndMmPtAZRMlDWQo6n/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Could you please show me your reenactment of the situation?",
                "line": 34,
                "start_time": "0-01-32.770000",
                "end_time": "0-01-35.930000",
                "url": "https://drive.google.com/file/d/1KZEouAMjrPubjMvm7u0KdR_KHoy1gRBb/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Me?",
                "line": 35,
                "start_time": "0-01-36.670000",
                "end_time": "0-01-37.760000",
                "url": "https://drive.google.com/file/d/1mNnbKcRiaw_6ubQa5UaFxNqCb4HLfdaI/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes, since you happened to witness it, Lady Alpha.",
                "line": 36,
                "start_time": "0-01-37.760000",
                "end_time": "0-01-41.180000",
                "url": "https://drive.google.com/file/d/1_KNFIw7c9U3W9InaoQlvw4cbFetof48f/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "P-Please! Just spare my life...",
                "line": 37,
                "start_time": "0-01-45.730000",
                "end_time": "0-01-50.820000",
                "url": "https://drive.google.com/file/d/1iMFqWKdVfmu9gU1EQvO2gegeOlTCWLxT/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Something like that.",
                "line": 38,
                "start_time": "0-01-51.930000",
                "end_time": "0-01-53.560000",
                "url": "https://drive.google.com/file/d/1_Msk8p7g-REJ-IcVvAipVA7oIdGvTkj5/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I see.",
                "line": 39,
                "start_time": "0-01-53.560000",
                "end_time": "0-01-54.700000",
                "url": "https://drive.google.com/file/d/1ZN9MMRy3ZNoNhHjvGJ9U4k8t35wJWef_/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Like this?",
                "line": 40,
                "start_time": "0-01-55.560000",
                "end_time": "0-01-57",
                "url": "https://drive.google.com/file/d/17XYpYU-U6LiMkHRTOmYUw8LoNlNAuzvv/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "No, more like this!",
                "line": 41,
                "start_time": "0-01-57",
                "end_time": "0-01-59.230000",
                "url": "https://drive.google.com/file/d/1FQ3r9W0eSDoumKj9l-5zprGs36vsunZv/view?usp=drivesdk"
            }
        ],
        "e3": [
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Is that chocolate?",
                "line": 1,
                "start_time": "0-00-07.210000",
                "end_time": "0-00-09.200000",
                "url": "https://drive.google.com/file/d/1HYaQYi3w04aZHMM7pFcGoQc153jhGvuF/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "This is no ordinary chocolate.",
                "line": 2,
                "start_time": "0-00-09.200000",
                "end_time": "0-00-14.720000",
                "url": "https://drive.google.com/file/d/10Y2XkG-XqC8zLieaq7ksXeev7a2t0-JW/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "The truth is, this one contains Whiskey.",
                "line": 3,
                "start_time": "0-00-14.720000",
                "end_time": "0-00-16.750000",
                "url": "https://drive.google.com/file/d/12z4LpWLskt-gofLn6m4kyA6M202bJMd6/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Whiskey?",
                "line": 4,
                "start_time": "0-00-17.310000",
                "end_time": "0-00-18.310000",
                "url": "https://drive.google.com/file/d/1vEnYLJlxj0Oow6DnqwIMhtXfwqwagwbe/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "It is made by distilling a certain type of grain that Lord Shadow taught me about,",
                "line": 5,
                "start_time": "0-00-18.310000",
                "end_time": "0-00-22.720000",
                "url": "https://drive.google.com/file/d/1sfGriaMd_TlfI5lwZ876iy28Yi3C1Kv7/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "which is then stored in wooden casks for many years.",
                "line": 6,
                "start_time": "0-00-22.720000",
                "end_time": "0-00-26.510000",
                "url": "https://drive.google.com/file/d/19S5YNQYSjEFdxo4Cd_1bToQLvRvW4-Av/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "It's a golden liquor.",
                "line": 7,
                "start_time": "0-00-26.510000",
                "end_time": "0-00-28.290000",
                "url": "https://drive.google.com/file/d/1r4RQEN_26h9gUg6_dJxEwyTJPo-NEI5d/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Does it really take that long to make?",
                "line": 8,
                "start_time": "0-00-28.290000",
                "end_time": "0-00-31.930000",
                "url": "https://drive.google.com/file/d/13J7GcaOOclfPzcqkUpADZ35Bkven3f-5/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Yes, but that's a problem...",
                "line": 9,
                "start_time": "0-00-31.930000",
                "end_time": "0-00-35.010000",
                "url": "https://drive.google.com/file/d/1QZYI05fRlEd8n6stOW2Dr3qr-BPM_uzM/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "that Eta was able to solve.",
                "line": 10,
                "start_time": "0-00-35.480000",
                "end_time": "0-00-38.400000",
                "url": "https://drive.google.com/file/d/1woe5EYAK2TitvbFX6wymMyj74nlCfCcP/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": ":V",
                "line": 11,
                "start_time": "0-00-38.400000",
                "end_time": "0-00-39.440000",
                "url": "https://drive.google.com/file/d/1EW5LdbItCDNw7gF93Rzq6wH7lEJcZOrS/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "With this device, we can make large quantities of good quality whiskey in a short time.",
                "line": 12,
                "start_time": "0-00-39.440000",
                "end_time": "0-00-45.740000",
                "url": "https://drive.google.com/file/d/1z0yzSWlwMLFfh7d51enC2v42WZQEP0fG/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Delicious!",
                "line": 13,
                "start_time": "0-00-46.310000",
                "end_time": "0-00-47.200000",
                "url": "https://drive.google.com/file/d/1KnEbsWlasT19G3ChlLDas5U8JVGXNXML/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But why put whiskey inside chocolate?",
                "line": 14,
                "start_time": "0-00-48.020000",
                "end_time": "0-00-50.740000",
                "url": "https://drive.google.com/file/d/1VOD_CyVxH7pw-LqirwQ62BDQY_yh8jb1/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Master said, whiskey and chocolate go well together.",
                "line": 15,
                "start_time": "0-00-51.150000",
                "end_time": "0-00-55.570000",
                "url": "https://drive.google.com/file/d/1Zg__UdnwsTH28sHT6vxftCysx9J9jYnB/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "We thought they'd be even more delicious if they were bite-sized,",
                "line": 16,
                "start_time": "0-00-55.570000",
                "end_time": "0-01-00.250000",
                "url": "https://drive.google.com/file/d/1tgVaF6uCTEmXRmYlFuqsEZEM8wXIG1YN/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "so we decided to seal the whiskey inside.",
                "line": 17,
                "start_time": "0-01-00.250000",
                "end_time": "0-01-02.940000",
                "url": "https://drive.google.com/file/d/1Z_e0pjdUVXbsr6pG4ipu1BobT67mRaE6/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Wow, that's a good idea.",
                "line": 18,
                "start_time": "0-01-02.940000",
                "end_time": "0-01-05.540000",
                "url": "https://drive.google.com/file/d/16gkLOmPok5fqFRnA7L7MFemTImQfYUYz/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I'm not sure if this is exactly what Lord Shadow had in mind,",
                "line": 19,
                "start_time": "0-01-05.540000",
                "end_time": "0-01-09.780000",
                "url": "https://drive.google.com/file/d/1I4TaYKe43plA8ZZ__LJGLF6sPyaPWk25/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "but I would like to introduce them as the next brand-new chocolate sold at Mitsugoshi.",
                "line": 20,
                "start_time": "0-01-09.780000",
                "end_time": "0-01-14.600000",
                "url": "https://drive.google.com/file/d/1NTCfvawkLh9gzgTN9PaRiCRPrDdePryr/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I think they're fine.",
                "line": 21,
                "start_time": "0-01-15.020000",
                "end_time": "0-01-14.920000",
                "url": "https://drive.google.com/file/d/12ZxjnQJ1H5vg_sWqDXPAEmEuBbjjaeQt/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "So, what do you call these?",
                "line": 22,
                "start_time": "0-01-15.980000",
                "end_time": "0-01-18.420000",
                "url": "https://drive.google.com/file/d/1GM4ivHF-uJwNTRH5AjHuks5uew3nuOkm/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Oh, haven't decided on a name. What should it be?",
                "line": 23,
                "start_time": "0-01-18.420000",
                "end_time": "0-01-22.230000",
                "url": "https://drive.google.com/file/d/1zyy_YfFC1Ral4k8ytW6B-ThVCo2lpwZq/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Let's think about it while we eat them...",
                "line": 24,
                "start_time": "0-01-23.470000",
                "end_time": "0-01-25.920000",
                "url": "https://drive.google.com/file/d/16n4pKZj_AA3_X3xww3T3ue31XOQqhSSk/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Yes, th-",
                "line": 25,
                "start_time": "0-01-25.920000",
                "end_time": "0-01-26.970000",
                "url": "https://drive.google.com/file/d/1mI7ebx_TNsfWvClqbtbG7YpJ6UB-bSZM/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Eat.",
                "line": 26,
                "start_time": "0-01-26.970000",
                "end_time": "0-01-27.820000",
                "url": "https://drive.google.com/file/d/1b_VsEloXiSVuZktJAUlRk9XDtkz9H221/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Eta, stop. The liquor is... surprisingly strong.",
                "line": 27,
                "start_time": "0-01-28.710000",
                "end_time": "0-01-33.920000",
                "url": "https://drive.google.com/file/d/1yzP-UXcWK70_aXq7SwL5HZlJfJFgZix4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Gamma, you really get drunk easily, don't you?",
                "line": 28,
                "start_time": "0-01-34.280000",
                "end_time": "0-01-36.970000",
                "url": "https://drive.google.com/file/d/1zlO1KskZYpHav4C7XGjSUXDBp9xz-LZO/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "My head is bobbing...",
                "line": 29,
                "start_time": "0-01-39.420000",
                "end_time": "0-01-42.800000",
                "url": "https://drive.google.com/file/d/1rUFKbc4a7ScddqAxXLoraemyhv-KUD2i/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Don't you mean \"throbbing\"?",
                "line": 30,
                "start_time": "0-01-43.390000",
                "end_time": "0-01-44.810000",
                "url": "https://drive.google.com/file/d/1_O2rjH2wn7Ax5OmsK9bR8U1eh0QH9mRh/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I've decided on a name.",
                "line": 31,
                "start_time": "0-01-47.170000",
                "end_time": "0-01-49.570000",
                "url": "https://drive.google.com/file/d/1oarffEVOVny9r36Gbht9910ZuxqNaEfS/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Let's call them... Whiskey Bobs.",
                "line": 32,
                "start_time": "0-01-50.950000",
                "end_time": "0-01-53.920000",
                "url": "https://drive.google.com/file/d/1hyq35C-8T0bB4Inigec532FRT8RtPCSg/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Whiskey Bobs...",
                "line": 33,
                "start_time": "0-01-55.560000",
                "end_time": "0-01-57.420000",
                "url": "https://drive.google.com/file/d/11UrFPMrlIv07tQwwZP8OYGJnN06icyFk/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "That sounds kind of silly, doesn't it?",
                "line": 34,
                "start_time": "0-01-58.030000",
                "end_time": "0-01-59.730000",
                "url": "https://drive.google.com/file/d/1-fPPXgPZum1P6pb4tbNx0PZZBWNdjXuE/view?usp=drivesdk"
            }
        ],
        "e4": [
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Gamma!",
                "line": 1,
                "start_time": "0-00-07.040000",
                "end_time": "0-00-08.950000",
                "url": "https://drive.google.com/file/d/1Rxs6uoQ7omADohid_OM2nBPCQxtNm1xm/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Pass me the chocolate!",
                "line": 2,
                "start_time": "0-00-08.950000",
                "end_time": "0-00-10.330000",
                "url": "https://drive.google.com/file/d/1JAxTb5sTKgNXzoenz9onW0rMoN2Xd1tL/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Ah, Delta...",
                "line": 3,
                "start_time": "0-00-10.330000",
                "end_time": "0-00-11.490000",
                "url": "https://drive.google.com/file/d/1JZ5piBntmhzXOkQjOx5-OLamg7iMq76_/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "When you are irritated, binge eating sweets is the best!",
                "line": 4,
                "start_time": "0-00-11.490000",
                "end_time": "0-00-15.840000",
                "url": "https://drive.google.com/file/d/1gWgAyfjsH251ua7zHRlaYDTfkgRFUFW1/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "What's wrong?",
                "line": 5,
                "start_time": "0-00-15.840000",
                "end_time": "0-00-17.300000",
                "url": "https://drive.google.com/file/d/1p_lXcQBnYRe1rbKJgH9Heynem64irCju/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Those damn minions who always hang around Boss...",
                "line": 6,
                "start_time": "0-00-17.300000",
                "end_time": "0-00-19.770000",
                "url": "https://drive.google.com/file/d/1-os2oAmhgFXeUaHkSTzWVxQYVCO9v60j/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Hyoro and Jaga?",
                "line": 7,
                "start_time": "0-00-19.770000",
                "end_time": "0-00-21.250000",
                "url": "https://drive.google.com/file/d/1aLzJWRbPRJRL8BCxIFuMnSz6CXKeaU3v/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "They're spreading rumors that he pooped his pants!",
                "line": 8,
                "start_time": "0-00-22.120000",
                "end_time": "0-00-25.370000",
                "url": "https://drive.google.com/file/d/14PDGLJdVIqRGr84chz3WdtPDSzdiAwHi/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I won't forgive them!",
                "line": 9,
                "start_time": "0-00-25.370000",
                "end_time": "0-00-26.690000",
                "url": "https://drive.google.com/file/d/1SvKhL8Apk39g1li-733PUAwsY-ORYbZL/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "But I'm sure Lord Shadow has thought that through as well.",
                "line": 10,
                "start_time": "0-00-26.690000",
                "end_time": "0-00-30.640000",
                "url": "https://drive.google.com/file/d/1dp_uviRixreR-1wRusozP4vdWtMX6H9S/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "There's nothing good about being known as a poopypants.",
                "line": 11,
                "start_time": "0-00-30.640000",
                "end_time": "0-00-33.840000",
                "url": "https://drive.google.com/file/d/1XyspWTHI9r4eWI1Pja5CmTAAoA7I-D9F/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Well... I'm not sure either, but...",
                "line": 12,
                "start_time": "0-00-33.840000",
                "end_time": "0-00-36.920000",
                "url": "https://drive.google.com/file/d/1Pys9SoWpXprKwUBi50vvFMlBiqBeqbAk/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Boss doesn't poop his pants!",
                "line": 13,
                "start_time": "0-00-36.920000",
                "end_time": "0-00-39.320000",
                "url": "https://drive.google.com/file/d/1LhuCeqESQ4jFRywjka_F4o17AUles9TF/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Stop talking about poop already!",
                "line": 14,
                "start_time": "0-00-39.320000",
                "end_time": "0-00-41.640000",
                "url": "https://drive.google.com/file/d/1E20QlbnyHcR5IOaJqFAzktqT2E2Dr0DK/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Hello, Zeta.",
                "line": 15,
                "start_time": "0-00-42.030000",
                "end_time": "0-00-43.610000",
                "url": "https://drive.google.com/file/d/1PDzIPdPZe1cLDI-YaTm3siB_8GRsmn9g/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Zeta, what are you here for?",
                "line": 16,
                "start_time": "0-00-43.610000",
                "end_time": "0-00-45.520000",
                "url": "https://drive.google.com/file/d/14oUSduQQUgpaek_bIKhxhdXr6gHTkmyp/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Gamma, about the thing you requested...",
                "line": 17,
                "start_time": "0-00-45.520000",
                "end_time": "0-00-47.630000",
                "url": "https://drive.google.com/file/d/1UFRaG-Bih0xvB2glqvfUrTta-laHRClP/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Listen to me!",
                "line": 18,
                "start_time": "0-00-47.630000",
                "end_time": "0-00-49.120000",
                "url": "https://drive.google.com/file/d/1MFU7S5xIoDzUr9TpKfvRrIZr9QgbS4MW/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Will this do?",
                "line": 19,
                "start_time": "0-00-49.540000",
                "end_time": "0-00-50.510000",
                "url": "https://drive.google.com/file/d/1q9n9ORk0Ne3cBgeKzv_paDXQPUJpMgec/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Oh, you found it already?",
                "line": 20,
                "start_time": "0-00-50.510000",
                "end_time": "0-00-52.820000",
                "url": "https://drive.google.com/file/d/1503JQm6zPTfeBhlHmbY5RpZOYOXxUym6/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Swift work, as usual!",
                "line": 21,
                "start_time": "0-00-52.940000",
                "end_time": "0-00-55.620000",
                "url": "https://drive.google.com/file/d/1sVbNqaTpuS83rws7rubFdJql72s70pt6/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "What are you going to do with this stuff?",
                "line": 22,
                "start_time": "0-00-55.620000",
                "end_time": "0-00-57.940000",
                "url": "https://drive.google.com/file/d/14m0rveOdOh3VIZMqpu4cN810OzkxYbZ2/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I'll use it to make coffee.",
                "line": 23,
                "start_time": "0-00-57.940000",
                "end_time": "0-01-00.040000",
                "url": "https://drive.google.com/file/d/1sl15wEb70p1ieV-K2Sh15r5zhiqtkt85/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Coffee?",
                "line": 24,
                "start_time": "0-01-00.040000",
                "end_time": "0-01-01.490000",
                "url": "https://drive.google.com/file/d/1IjcLBCfDvox41gSTvWZP56jYQyz1kejm/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Yes, Lord Shadow taught me about it.",
                "line": 25,
                "start_time": "0-01-01.490000",
                "end_time": "0-01-04.790000",
                "url": "https://drive.google.com/file/d/1RcoZMRjr4eoGhSyYMx1UOcTfTFIhtQjL/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "There's a certain type of cat that can't digest coffee beans,",
                "line": 26,
                "start_time": "0-01-04.790000",
                "end_time": "0-01-08.370000",
                "url": "https://drive.google.com/file/d/1x9Zuf--ocYh3X4YcizOFS4Kw4Rg2RNg2/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "and the coffee brewed from those is said to be exquisite!",
                "line": 27,
                "start_time": "0-01-08.370000",
                "end_time": "0-01-10.800000",
                "url": "https://drive.google.com/file/d/1nJXF4t2iEiVI3L3p7aSyu97bQ3Ihjfdz/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I think Master has great ideas.",
                "line": 28,
                "start_time": "0-01-11.160000",
                "end_time": "0-01-13.650000",
                "url": "https://drive.google.com/file/d/1hllM2xN58XxJtKasSKBxT6BnE7Ssh7wV/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Normally, you'd never think to make coffee from poop, but...",
                "line": 29,
                "start_time": "0-01-13.650000",
                "end_time": "0-01-17.380000",
                "url": "https://drive.google.com/file/d/15Uf8PVQxplhqQjvGNye0-Rb-RE1frxzT/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Zeta, you're talking about poop, too!",
                "line": 30,
                "start_time": "0-01-17.380000",
                "end_time": "0-01-19.700000",
                "url": "https://drive.google.com/file/d/1qpD2ra410_ZoojXdv9jJthzo7QlkQ5wk/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I'm talking about the mission.",
                "line": 31,
                "start_time": "0-01-19.700000",
                "end_time": "0-01-21.730000",
                "url": "https://drive.google.com/file/d/1bFhisW90Ogq1mfFtSJeuQL80EQJFWaHb/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "You're talking about poop!",
                "line": 32,
                "start_time": "0-01-21.730000",
                "end_time": "0-01-23.150000",
                "url": "https://drive.google.com/file/d/1tyuiT1akSi-_OTYpzg_hzrF-ZYKVk0C4/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "This poop will be used for our mission.",
                "line": 33,
                "start_time": "0-01-23.150000",
                "end_time": "0-01-25.320000",
                "url": "https://drive.google.com/file/d/1nbNh2o34WYLp45Op-sGGP4B-PaZReOmq/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ew, it stinks! Keep it away from my face!",
                "line": 34,
                "start_time": "0-01-25.320000",
                "end_time": "0-01-28.730000",
                "url": "https://drive.google.com/file/d/1hin2pBl-NEJo7YDl7fGr9GE_Te1coO9V/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "No way! I've washed and dried them thoroughly.",
                "line": 35,
                "start_time": "0-01-28.730000",
                "end_time": "0-01-31.470000",
                "url": "https://drive.google.com/file/d/1PRirpTKHStfctL08JucZIszVmqO5IzFS/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Some things stink even if you wash them!",
                "line": 36,
                "start_time": "0-01-31.470000",
                "end_time": "0-01-33.750000",
                "url": "https://drive.google.com/file/d/1bNodBGwqmb-Z8G6TO4dGjws0dOUAJYH-/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "You think so? I think it smells nice.",
                "line": 37,
                "start_time": "0-01-33.750000",
                "end_time": "0-01-36.550000",
                "url": "https://drive.google.com/file/d/1EtgF6tcjrCrOTBC_cVvTZI8kthZ6TvxZ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "You wouldn't know, Gamma.",
                "line": 38,
                "start_time": "0-01-36.550000",
                "end_time": "0-01-38.480000",
                "url": "https://drive.google.com/file/d/1pwDbxQYDnwScU2rjDc_Uf14o6_oBX9YL/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Beast-kin can tell that it stinks!",
                "line": 39,
                "start_time": "0-01-38.480000",
                "end_time": "0-01-40.970000",
                "url": "https://drive.google.com/file/d/1s-VZoniPfkpkkxMpecFr4lBvPmXDXVXj/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Are you picking a fight with me?",
                "line": 40,
                "start_time": "0-01-40.970000",
                "end_time": "0-01-42.870000",
                "url": "https://drive.google.com/file/d/1BO3whyruy9DchhqNHJ6UMoneDFrCwnm8/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Cats can't smell!",
                "line": 41,
                "start_time": "0-01-42.870000",
                "end_time": "0-01-45.020000",
                "url": "https://drive.google.com/file/d/1kcHVS6JehfEFH8CUhyR6a3evOs9YU-15/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "And dogs are stupid!",
                "line": 42,
                "start_time": "0-01-45.020000",
                "end_time": "0-01-47.030000",
                "url": "https://drive.google.com/file/d/1bWB3kDylralXdGwYPcr8SO0RV5kp2WeZ/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Now, now, stop messing around, both of you.",
                "line": 43,
                "start_time": "0-01-49.790000",
                "end_time": "0-01-52.540000",
                "url": "https://drive.google.com/file/d/15BmX-Nl8lYrmf7bKoE77SGwLW2VUmx7Q/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta & Zeta (Delta)",
                "subtitle": "We aren't!",
                "line": 44,
                "start_time": "0-01-52.540000",
                "end_time": "0-01-54.330000",
                "url": "https://drive.google.com/file/d/1n5ythKj0Ouk2DAzAl-zYH3PgQmzYX6KP/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Delta & Zeta (Zeta)",
                "subtitle": "We aren't!",
                "line": 44,
                "start_time": "0-01-52.540000",
                "end_time": "0-01-54.330000",
                "url": "https://drive.google.com/file/d/1n5ythKj0Ouk2DAzAl-zYH3PgQmzYX6KP/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Want some of our new chocolates?",
                "line": 45,
                "start_time": "0-01-55.100000",
                "end_time": "0-01-58.170000",
                "url": "https://drive.google.com/file/d/143IV3kCOK8SzRQAROdUeNJ9DJrw-AHS3/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta & Zeta (Delta)",
                "subtitle": "Of course!",
                "line": 46,
                "start_time": "0-01-58.170000",
                "end_time": "0-01-59.200000",
                "url": "https://drive.google.com/file/d/1YetKdlO7ViQEqVJwGa5AjtsYFXsxv3LV/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Delta & Zeta (Zeta)",
                "subtitle": "Of course!",
                "line": 46,
                "start_time": "0-01-58.170000",
                "end_time": "0-01-59.200000",
                "url": "https://drive.google.com/file/d/1YetKdlO7ViQEqVJwGa5AjtsYFXsxv3LV/view?usp=drivesdk"
            }
        ],
        "e5": [
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Hmm...",
                "line": 1,
                "start_time": "0-00-06.330000",
                "end_time": "0-00-06.860000",
                "url": "https://drive.google.com/file/d/1kI-MM4wtF7ILd3xQiKVbJFyQhwVwx_sK/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Is someone here?",
                "line": 2,
                "start_time": "0-00-07.740000",
                "end_time": "0-00-09.650000",
                "url": "https://drive.google.com/file/d/1TJAQ1mgmkeHov7L_cCAhta4k418iuSVg/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Delta...",
                "line": 3,
                "start_time": "0-00-09.650000",
                "end_time": "0-00-10.630000",
                "url": "https://drive.google.com/file/d/1Lem7Kiff5rNpGoreA8KVw2QhTz74BUbW/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Alpha-sama!",
                "line": 4,
                "start_time": "0-00-10.630000",
                "end_time": "0-00-11.440000",
                "url": "https://drive.google.com/file/d/1kfAPmKvhOVmARhV5OYATWwWY-q-hv1Xs/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...and Eta",
                "line": 5,
                "start_time": "0-00-11.540000",
                "end_time": "0-00-12.860000",
                "url": "https://drive.google.com/file/d/17pfRNtnYKNNssLUUDR5BU3qtNXpw5fI0/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What is that?",
                "line": 6,
                "start_time": "0-00-14.050000",
                "end_time": "0-00-15.950000",
                "url": "https://drive.google.com/file/d/1M3CV7h4wcmkMFPMfCAbN56TuGai2IWxj/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "This is an artifact that I had Eta make.",
                "line": 7,
                "start_time": "0-00-15.950000",
                "end_time": "0-00-18.670000",
                "url": "https://drive.google.com/file/d/1WajlrbQ6ElZb0DngiFBJbffddd7NpxR0/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "\"Archie-fact\"?",
                "line": 8,
                "start_time": "0-00-18.670000",
                "end_time": "0-00-20.310000",
                "url": "https://drive.google.com/file/d/1YOK02AKX6x_8QC5uUes3t1yTneyHs44X/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes",
                "line": 9,
                "start_time": "0-00-20.530000",
                "end_time": "0-00-21.310000",
                "url": "https://drive.google.com/file/d/1lBV-13ZcD29jm5CQCEuqma71Qw0sIRzm/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Alpha-sama, in the end, what is an \"Archie-fact\"?",
                "line": 10,
                "start_time": "0-00-22.190000",
                "end_time": "0-00-26.080000",
                "url": "https://drive.google.com/file/d/1i8HZw9Be7niz0GJktU4Kg5WuL92e3JKQ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Delta......",
                "line": 11,
                "start_time": "0-00-27.750000",
                "end_time": "0-00-30.300000",
                "url": "https://drive.google.com/file/d/1mLAI3GdtyMELkEd8Vddropc2H5RNkzLH/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ugh! Yes! Sorry!",
                "line": 12,
                "start_time": "0-00-27",
                "end_time": "0-00-27.750000",
                "url": "https://drive.google.com/file/d/1jy7rtREMSDx8bTfetH4xiNgB9l_A0YD9/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "How many times has everyone explained it for you?",
                "line": 13,
                "start_time": "0-00-31.130000",
                "end_time": "0-00-33.730000",
                "url": "https://drive.google.com/file/d/1gTKpxMR0BAP1b2kIsH9kb40OjFDs__o3/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Enough is enough! Get it in to your head!",
                "line": 14,
                "start_time": "0-00-33.730000",
                "end_time": "0-00-35.440000",
                "url": "https://drive.google.com/file/d/1PEw3P_s_6zEpBRANwZ-w5MkHk6IUwbEt/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...Yes...",
                "line": 15,
                "start_time": "0-00-35.440000",
                "end_time": "0-00-36.380000",
                "url": "https://drive.google.com/file/d/1m9WNWM8tCSXTTafMrA8vhK4IAYFHZbnZ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Never mind.",
                "line": 16,
                "start_time": "0-00-37.790000",
                "end_time": "0-00-38.780000",
                "url": "https://drive.google.com/file/d/1UUwPCKvz-52jGzVBX9liHPt-hDXZtwSh/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Eta. Please explain it to her.",
                "line": 17,
                "start_time": "0-00-40.570000",
                "end_time": "0-00-42.770000",
                "url": "https://drive.google.com/file/d/1_eI-YJqJMVGQNNT3_7eKVm8FSWqbOE_j/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "All right......",
                "line": 18,
                "start_time": "0-00-42.770000",
                "end_time": "0-00-43.440000",
                "url": "https://drive.google.com/file/d/1TBBwgHL6XoCeUgkOLMXyH7sy6JuAxB1S/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Eta's explanation is hard to get.",
                "line": 19,
                "start_time": "0-00-43.970000",
                "end_time": "0-00-46.680000",
                "url": "https://drive.google.com/file/d/1gIw8rXxhM2bxrVGRPPRj2S_UE5kRmIAi/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Artifacts are......",
                "line": 20,
                "start_time": "0-00-45.050000",
                "end_time": "0-00-46.680000",
                "url": "https://drive.google.com/file/d/1M_wUofrFy8zLLKRRailbm0hZAZWadNyb/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Eta's explanation is hard to get.",
                "line": 20,
                "start_time": "0-00-45.050000",
                "end_time": "0-00-46.680000",
                "url": "https://drive.google.com/file/d/1M_wUofrFy8zLLKRRailbm0hZAZWadNyb/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "relics that have been artificially created in the past...",
                "line": 21,
                "start_time": "0-00-46.680000",
                "end_time": "0-00-49.290000",
                "url": "https://drive.google.com/file/d/1zFWaF0jLBZC-G50m5wby0JuFDNXgJ2mB/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Uhhh...",
                "line": 22,
                "start_time": "0-00-48.960000",
                "end_time": "0-00-50.280000",
                "url": "https://drive.google.com/file/d/1o2fkjueCJVsivABCONoqGrQeH5tYbYvE/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "*continues explaining*",
                "line": 23,
                "start_time": "0-00-49.290000",
                "end_time": "0-00-56.030000",
                "url": "https://drive.google.com/file/d/18TGOmFljaAT0D0pAOyDtdmMsDi5XI03P/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...more or less, it is like that......",
                "line": 24,
                "start_time": "0-00-55.470000",
                "end_time": "0-00-57.170000",
                "url": "https://drive.google.com/file/d/1VjegT2VESmUmF7iRRfMO8GCEtOpNwKp0/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Got it!",
                "line": 24,
                "start_time": "0-00-55.470000",
                "end_time": "0-00-57.170000",
                "url": "https://drive.google.com/file/d/1VjegT2VESmUmF7iRRfMO8GCEtOpNwKp0/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "OK. Then, explain it to me.",
                "line": 25,
                "start_time": "0-00-57.420000",
                "end_time": "0-01-00.330000",
                "url": "https://drive.google.com/file/d/1kH-QQkjpy1R89Nkv5Woolg-AbNP4iTOO/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Huh?",
                "line": 26,
                "start_time": "0-01-00.330000",
                "end_time": "0-01-00.970000",
                "url": "https://drive.google.com/file/d/16qSsDcl1rwFPqP6bdFVATcw89W0v1x43/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You've got it, right?",
                "line": 27,
                "start_time": "0-01-00.970000",
                "end_time": "0-01-02.180000",
                "url": "https://drive.google.com/file/d/1rc2n07S_eqbQwE_XP1hURWExdvMApIRG/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Got it, of course.",
                "line": 28,
                "start_time": "0-01-02.180000",
                "end_time": "0-01-04.210000",
                "url": "https://drive.google.com/file/d/12Rw6AHGb-znp3hQIkMWuOQBoJZVVMrIr/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Can take care of it.",
                "line": 29,
                "start_time": "0-01-04.210000",
                "end_time": "0-01-06.620000",
                "url": "https://drive.google.com/file/d/1OrC5XxGJtgTQCGwr6BjF2VirhSFdFdxt/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Delta can do it if she puts in the effort.",
                "line": 30,
                "start_time": "0-01-06.620000",
                "end_time": "0-01-08.830000",
                "url": "https://drive.google.com/file/d/13qERN2MKJ4PYht1xvKTGztvObyro_OtU/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Can explain it right...",
                "line": 31,
                "start_time": "0-01-08.830000",
                "end_time": "0-01-10.900000",
                "url": "https://drive.google.com/file/d/1xeuduirEZhxrQehNdaEUj3OEyLf5U2Xv/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Never mind.",
                "line": 32,
                "start_time": "0-01-10.900000",
                "end_time": "0-01-12.040000",
                "url": "https://drive.google.com/file/d/1a4fmhF_etLhKLMbcyBx4lmdXTGF17Sqt/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Sorry.",
                "line": 33,
                "start_time": "0-01-12.570000",
                "end_time": "0-01-14.560000",
                "url": "https://drive.google.com/file/d/10HQPWPmmBTG5TLaYWouOcTgjmkmmArTF/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "So, what brings you here?",
                "line": 34,
                "start_time": "0-01-14.560000",
                "end_time": "0-01-16.480000",
                "url": "https://drive.google.com/file/d/1bGq55r0QWSHnNIZLUFe7RsGygcLsc5m3/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Oh, yes, uh...",
                "line": 35,
                "start_time": "0-01-16.480000",
                "end_time": "0-01-19.140000",
                "url": "https://drive.google.com/file/d/1tuuuzTxieFwJlUIzevtvT8MIg2k832Lj/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "uh...",
                "line": 36,
                "start_time": "0-01-19.140000",
                "end_time": "0-01-20.610000",
                "url": "https://drive.google.com/file/d/1kyYN8D1rZR0D1_Oyhfr5B4oiYu5F1o8q/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Forgot what it was for!",
                "line": 37,
                "start_time": "0-01-23.680000",
                "end_time": "0-01-25.290000",
                "url": "https://drive.google.com/file/d/1xPRGq1mc_bs-d_LfYLBEVYQ3cWlsCQ44/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Really, you are something...",
                "line": 38,
                "start_time": "0-01-25.290000",
                "end_time": "0-01-26.960000",
                "url": "https://drive.google.com/file/d/1kgEDozDnlj4s-11gZ_klR7nsi9vhDHdC/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Tee hee hee!",
                "line": 39,
                "start_time": "0-01-26.960000",
                "end_time": "0-01-28.340000",
                "url": "https://drive.google.com/file/d/1Tr3Qn8SRyCi9X-DTzcSQ7nkaO36E4zyf/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "By the way, what is that, after all?",
                "line": 40,
                "start_time": "0-01-28.340000",
                "end_time": "0-01-31.010000",
                "url": "https://drive.google.com/file/d/1Erk5PshyLVPmPkTGdcAvRRjkUMcGs7TY/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "This is an Artifact that negates Magic Inhibition.",
                "line": 41,
                "start_time": "0-01-31.010000",
                "end_time": "0-01-34.430000",
                "url": "https://drive.google.com/file/d/1GEWiwY2aTlaayzEihTt5e_-7StuG2kmy/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "When things like Magic Containment happen, you are prepared if you have this.",
                "line": 42,
                "start_time": "0-01-34.850000",
                "end_time": "0-01-38.700000",
                "url": "https://drive.google.com/file/d/1HOclYz6H6GVPoSSLWCXXZrD6LCVBWEnL/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Don't need that kind stuff.",
                "line": 43,
                "start_time": "0-01-38.700000",
                "end_time": "0-01-40.610000",
                "url": "https://drive.google.com/file/d/1dfptNm-DEH3b-u-ReO2SDSvxzJyCxNLv/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Eh?",
                "line": 44,
                "start_time": "0-01-40.610000",
                "end_time": "0-01-41.380000",
                "url": "https://drive.google.com/file/d/1MR2tH7-MhdHF_wWpJ7TvcjhL31kVO2Ql/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "If you can't use magic, just give a smack.",
                "line": 45,
                "start_time": "0-01-41.380000",
                "end_time": "0-01-44.670000",
                "url": "https://drive.google.com/file/d/1_ETEBuYIa_2vBzzGEJ6IeLr6wO8ftJZs/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Like this!",
                "line": 46,
                "start_time": "0-01-44.670000",
                "end_time": "0-01-45.910000",
                "url": "https://drive.google.com/file/d/1XMn6R_ryCTYGZgCmzWuGc8ewy65ah-Fe/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Here!",
                "line": 47,
                "start_time": "0-01-45.910000",
                "end_time": "0-01-46.650000",
                "url": "https://drive.google.com/file/d/1DR7UZoZRVLwGBpjAPFyLX3qDHDjZ7Cjz/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "It is broken...",
                "line": 48,
                "start_time": "0-01-48.550000",
                "end_time": "0-01-49.480000",
                "url": "https://drive.google.com/file/d/1lom2RdoJ2bu7pHNGwh3WYG0mj1Y_wqdb/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Delta...",
                "line": 49,
                "start_time": "0-01-49.480000",
                "end_time": "0-01-50.290000",
                "url": "https://drive.google.com/file/d/1xVwOTTm83FAqkHPpuv88BwiXMPaLw29Q/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ahhh! Sorry!",
                "line": 50,
                "start_time": "0-01-50.290000",
                "end_time": "0-01-52.720000",
                "url": "https://drive.google.com/file/d/1cPwBohYf-NqFnoU6pqruk3dh9ed5uiUq/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Didn't mean to! Didn't mean to!",
                "line": 51,
                "start_time": "0-01-52.720000",
                "end_time": "0-01-55.740000",
                "url": "https://drive.google.com/file/d/1a1WS2sqg-WaQFY8Rm5YQH84hGxVbJh66/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "The naughty child should be given a smack.",
                "line": 52,
                "start_time": "0-01-55.740000",
                "end_time": "0-01-57.490000",
                "url": "https://drive.google.com/file/d/1LobJ4435xETyTv-fDdkTJWUPrKl2TlLv/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "So really sorry!",
                "line": 53,
                "start_time": "0-01-57.490000",
                "end_time": "0-01-59.520000",
                "url": "https://drive.google.com/file/d/1L2cBKWaj29i3qK6Qf0Xu2RZj-bFjdCWN/view?usp=drivesdk"
            }
        ],
        "e6": [
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "So then, I'll take this underwear.",
                "line": 1,
                "start_time": "0-00-05.390000",
                "end_time": "0-00-07.810000",
                "url": "https://drive.google.com/file/d/17_MTPQjKq0JF8qZE-CaoHe2nY0ZepaLv/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Eh......Alpha-sama?",
                "line": 2,
                "start_time": "0-00-07.810000",
                "end_time": "0-00-09.860000",
                "url": "https://drive.google.com/file/d/14OwsqCtb72l7-Yp9xEDVzAxsWQhcPHEq/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes?",
                "line": 3,
                "start_time": "0-00-10.350000",
                "end_time": "0-00-11.160000",
                "url": "https://drive.google.com/file/d/1Rzav6mX1UhyDSIpcopBKxELtd_35U3U_/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Alpha-sama, since you move about a lot in your private attire for you missions,",
                "line": 4,
                "start_time": "0-00-11.690000",
                "end_time": "0-00-16.280000",
                "url": "https://drive.google.com/file/d/1li03N3ztgU31qKETes9Z5sD89DEhuKd4/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Why not be a little more fussy about your underwear, too?",
                "line": 5,
                "start_time": "0-00-16.280000",
                "end_time": "0-00-19.670000",
                "url": "https://drive.google.com/file/d/1iWDYanJ6lRiHr9vIXXUDtEIC_4ct4R68/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "To my underwear?",
                "line": 6,
                "start_time": "0-00-20.050000",
                "end_time": "0-00-20.990000",
                "url": "https://drive.google.com/file/d/1riiKuj8iJPjs7WpmbgtCjV9RV1bOLAjm/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Yes......Not just sports bra & shorts all the time...",
                "line": 7,
                "start_time": "0-00-21.220000",
                "end_time": "0-00-25.910000",
                "url": "https://drive.google.com/file/d/1Xwo9zVFNGzaHDlE9bW1lAqcdbpA0E5r9/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But they are easy to move in, since they are Mitsugoshi-made.",
                "line": 8,
                "start_time": "0-00-25.910000",
                "end_time": "0-00-28.960000",
                "url": "https://drive.google.com/file/d/1EGtyQG9UCtHszB0P8AfrWsm69uR2JodQ/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Thank you for saying that......",
                "line": 9,
                "start_time": "0-00-28.960000",
                "end_time": "0-00-30.680000",
                "url": "https://drive.google.com/file/d/13cr8pwnQ_Dgts3hPE666yeJ8n1mWafzV/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "but, no, I mean,",
                "line": 10,
                "start_time": "0-00-30.680000",
                "end_time": "0-00-32.370000",
                "url": "https://drive.google.com/file/d/1bMoMPBepbqJ-4qbRDIHxHqtD9jis3FXu/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "There are more fashionable or cuter ones,",
                "line": 11,
                "start_time": "0-00-32.370000",
                "end_time": "0-00-35.520000",
                "url": "https://drive.google.com/file/d/1OPnQCLM6-Dfih9D0vH5OgeD4b590yD3B/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I think you might want to wear those, too.",
                "line": 12,
                "start_time": "0-00-35.880000",
                "end_time": "0-00-38.520000",
                "url": "https://drive.google.com/file/d/1S9ISkuyg58XY3cp_rxDwn_RlYlUMDbZl/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Why?",
                "line": 13,
                "start_time": "0-00-38.520000",
                "end_time": "0-00-39.570000",
                "url": "https://drive.google.com/file/d/1oiQkM0Cd_s_tnoIC_ReIRbWYb_wz0U2h/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Why, you say?",
                "line": 14,
                "start_time": "0-00-39.570000",
                "end_time": "0-00-41",
                "url": "https://drive.google.com/file/d/1MyeEQDfW8L2-24Y5mglNNMyjeGmkJmH4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Fashionable, cute,",
                "line": 15,
                "start_time": "0-00-41.520000",
                "end_time": "0-00-43.520000",
                "url": "https://drive.google.com/file/d/1QHvMN0Kbb1T1ZP4xDoznxsBDP-WKFrjC/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "What is the merit in expressing uniqueness with your underwear?",
                "line": 16,
                "start_time": "0-00-43.520000",
                "end_time": "0-00-47.800000",
                "url": "https://drive.google.com/file/d/1cyEvo4y4G6-yX6mt5qJkSH0Zx3B9he-A/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Merit......eh......",
                "line": 17,
                "start_time": "0-00-48.240000",
                "end_time": "0-00-50.860000",
                "url": "https://drive.google.com/file/d/1Iki2EZTW3JOGjF4MoHGnzETec4ZdPdJC/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I am sorry. I have been demon-possessed since I was very young,",
                "line": 18,
                "start_time": "0-00-51.590000",
                "end_time": "0-00-56.530000",
                "url": "https://drive.google.com/file/d/1grSQsR0UoIe0SuY8DCubnl2zxStQY1R7/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I lack the sensitivity to be mindful about these things.",
                "line": 19,
                "start_time": "0-00-56.530000",
                "end_time": "0-00-58.840000",
                "url": "https://drive.google.com/file/d/1kmqM4dFV8-JAQPAOuejPSXV77U2xNkYK/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...Alpha-sama!",
                "line": 20,
                "start_time": "0-00-59.240000",
                "end_time": "0-01-00.460000",
                "url": "https://drive.google.com/file/d/1muOJFPI_OTLh5-gs3lP9pnN7RB4OOkOc/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But, maybe I will pay more attention.",
                "line": 21,
                "start_time": "0-01-00.900000",
                "end_time": "0-01-03.920000",
                "url": "https://drive.google.com/file/d/1dD0e0ADMvliUZBdFbZoZwzLVb25tyVOZ/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Do you have any recommendations?",
                "line": 22,
                "start_time": "0-01-03.920000",
                "end_time": "0-01-05.520000",
                "url": "https://drive.google.com/file/d/1ss3tl0JLwphpyeibFZAEmOZLbtHcwiCa/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...Yes, I do!",
                "line": 23,
                "start_time": "0-01-06.090000",
                "end_time": "0-01-06.540000",
                "url": "https://drive.google.com/file/d/11zcuJ8OFfheTeKLNbI4nRe2fSttBJGFc/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Since you body has a beautiful contour, Alpha-sama,",
                "line": 24,
                "start_time": "0-01-07.590000",
                "end_time": "0-01-10.110000",
                "url": "https://drive.google.com/file/d/1MzL-FWcEuc9NnldhfPqyQiu-VTsYWCN5/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "The idea here is to show off your body line nicely.",
                "line": 25,
                "start_time": "0-01-10.110000",
                "end_time": "0-01-12.930000",
                "url": "https://drive.google.com/file/d/1Wq_3LxiSGnBn5nK3CteCDohpd3kHDMpV/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Show my body line nicely?",
                "line": 26,
                "start_time": "0-01-12.930000",
                "end_time": "0-01-15.070000",
                "url": "https://drive.google.com/file/d/1WwGXgGp3N0lbLKCrb6dqyye40nMF9GM1/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Yes!",
                "line": 27,
                "start_time": "0-01-15.070000",
                "end_time": "0-01-15.930000",
                "url": "https://drive.google.com/file/d/1elKzlQVwu5VMQqByQBjrvsy-Xjf69_Nr/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Hmmm?",
                "line": 28,
                "start_time": "0-01-15.930000",
                "end_time": "0-01-16.400000",
                "url": "https://drive.google.com/file/d/1cKao-WzF0hyxFnoTSuvA8tx7BQ1fP0lV/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Why are you hiding?",
                "line": 29,
                "start_time": "0-01-17.250000",
                "end_time": "0-01-18.880000",
                "url": "https://drive.google.com/file/d/10G2SQFBzZ-LazJFsp7f9UlNMKAf6KBWZ/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Zeta. Since when have you been here?",
                "line": 30,
                "start_time": "0-01-20.180000",
                "end_time": "0-01-22.860000",
                "url": "https://drive.google.com/file/d/19CyYhHmUXHoz1LWbcwmJ8UEzIVtG08f1/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Ah, slow to notice, as always, Gamma",
                "line": 31,
                "start_time": "0-01-22.860000",
                "end_time": "0-01-26.150000",
                "url": "https://drive.google.com/file/d/1seGDpWzgRht8uAJ4Ag832nVG8wzWSBFx/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Mwww......",
                "line": 32,
                "start_time": "0-01-26.150000",
                "end_time": "0-01-27.550000",
                "url": "https://drive.google.com/file/d/1w_JAT0xuMNNUNB9cV5AHCpghWjPq_3pa/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "You are selecting underwear for Alpha-sama?",
                "line": 33,
                "start_time": "0-01-28.250000",
                "end_time": "0-01-30.570000",
                "url": "https://drive.google.com/file/d/1ryp3AA5VmwPEFHn7a8kXbGfUUSVeOGmD/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes. I have been recommended underwear that show off my body line nicely.",
                "line": 34,
                "start_time": "0-01-30.570000",
                "end_time": "0-01-35.280000",
                "url": "https://drive.google.com/file/d/1U_iFfleSMo3KCUioIgJyD37pvfMNlJet/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I see.",
                "line": 35,
                "start_time": "0-01-35.280000",
                "end_time": "0-01-36.180000",
                "url": "https://drive.google.com/file/d/19i_AQZBdgGHP26ipAHwoqTgXa82YNoX9/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "By the way......",
                "line": 36,
                "start_time": "0-01-36.180000",
                "end_time": "0-01-37.510000",
                "url": "https://drive.google.com/file/d/1yRy4SwlR_HHh2M75-nlCgwhv7O6JXswI/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "What kind of underwear do you wear, Zeta?",
                "line": 37,
                "start_time": "0-01-37.510000",
                "end_time": "0-01-39.810000",
                "url": "https://drive.google.com/file/d/1H0XNoqroPhR5b2wmUBpnjQLKujgjEZFi/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Uh, me? I......",
                "line": 38,
                "start_time": "0-01-39.810000",
                "end_time": "0-01-42.030000",
                "url": "https://drive.google.com/file/d/1V5Nz_bPhd5qVaBDIYkK9wENKDjEWBIhF/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Come to think of it, I have never seen you in underwear",
                "line": 39,
                "start_time": "0-01-42.030000",
                "end_time": "0-01-45.760000",
                "url": "https://drive.google.com/file/d/15tdjCetdqVcCyjDFAtej9BAxaB7gX9Sp/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I. I......don't wear one......",
                "line": 40,
                "start_time": "0-01-46.330000",
                "end_time": "0-01-49.820000",
                "url": "https://drive.google.com/file/d/1pjlWJnLtAYCDWdH__dV59PnQKTrXe1tX/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha & Gamma (Alpha)",
                "subtitle": "What?!",
                "line": 41,
                "start_time": "0-01-49.820000",
                "end_time": "0-01-50.580000",
                "url": "https://drive.google.com/file/d/1f_1onoEB61SeQa-9D03NONyINmMYi4Cx/view?usp=drivesdk"
            },
                        {
                "name": "Gamma",
                "name_variant": "Alpha & Gamma (Gamma)",
                "subtitle": "What?!",
                "line": 41,
                "start_time": "0-01-49.820000",
                "end_time": "0-01-50.580000",
                "url": "https://drive.google.com/file/d/1f_1onoEB61SeQa-9D03NONyINmMYi4Cx/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "We beast-kins usually don't wear them......",
                "line": 42,
                "start_time": "0-01-51.400000",
                "end_time": "0-01-54.190000",
                "url": "https://drive.google.com/file/d/1uYBF67ImelQnDVphD-cGeVYceUi6bq9g/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "That is a bit too......",
                "line": 43,
                "start_time": "0-01-55.370000",
                "end_time": "0-01-57.110000",
                "url": "https://drive.google.com/file/d/1LToshWW9giZB2Pr0kiDVKK-vd6j7AM6V/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Too daring!",
                "line": 44,
                "start_time": "0-01-57.110000",
                "end_time": "0-01-59",
                "url": "https://drive.google.com/file/d/1ame42ePslCBIN30Ek9Q-2izvqqRqK-Ya/view?usp=drivesdk"
            }
        ],
        "e7": [
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Mmm, mmmmm...",
                "line": 1,
                "start_time": "0-00-05",
                "end_time": "0-00-08.080000",
                "url": "https://drive.google.com/file/d/1OkHrrtUtlsYWal2SEF5Y3BMcJNDcf1mE/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Does Shadow-sama prefer these over others?",
                "line": 2,
                "start_time": "0-00-08.080000",
                "end_time": "0-00-11.490000",
                "url": "https://drive.google.com/file/d/1yn5q1x2Xvxalr1z5aXE1Qj5Pt7XVcvOT/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Gamma? Oh?",
                "line": 3,
                "start_time": "0-00-11.930000",
                "end_time": "0-00-12.860000",
                "url": "https://drive.google.com/file/d/1v0FbBbjav9881xF-4Q4CBxeSq2nuQHVA/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Well, well, well, Beta.",
                "line": 4,
                "start_time": "0-00-14.420000",
                "end_time": "0-00-16.420000",
                "url": "https://drive.google.com/file/d/1mNY9yQ2kqS7wMikU6ErfpIHmXJNtguSY/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What has come over you, staring intensely at underwear?",
                "line": 5,
                "start_time": "0-00-16.420000",
                "end_time": "0-00-20.080000",
                "url": "https://drive.google.com/file/d/1fdqFX5NSTT5FK3C9vRwWCVsj4eDtd9li/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Uhgm",
                "line": 6,
                "start_time": "0-00-20.080000",
                "end_time": "0-00-20.580000",
                "url": "https://drive.google.com/file/d/1Xvkmf0AYvTfY6p3zMr1aeNA4X-gA7fGK/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "No way, NO WAY can it be that, you, too, Beta, desire a passionate gaze from Master so much",
                "line": 7,
                "start_time": "0-00-21.150000",
                "end_time": "0-00-26.710000",
                "url": "https://drive.google.com/file/d/1VUPfUEPFsblZFyUXBAlBc07hhthfa-Zr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "so, that you'd be looking for \"Game Day\" underwear, or do you?",
                "line": 8,
                "start_time": "0-00-26.710000",
                "end_time": "0-00-29.870000",
                "url": "https://drive.google.com/file/d/1cuWAtpaD3UaCR-_UEKlyc_I63b-tlg7S/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Ha ha ha!",
                "line": 9,
                "start_time": "0-00-29.870000",
                "end_time": "0-00-30.830000",
                "url": "https://drive.google.com/file/d/1EmXj3RlPN2wpJUXH-dTcRJXJewgS6PN0/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Epsilon, you...",
                "line": 10,
                "start_time": "0-00-31.710000",
                "end_time": "0-00-32.920000",
                "url": "https://drive.google.com/file/d/1G5E19O9bJiYw903RUtklOMh8ph95yyvo/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Uh?",
                "line": 11,
                "start_time": "0-00-33.220000",
                "end_time": "0-00-33.800000",
                "url": "https://drive.google.com/file/d/1CO3yvMWNU17MP507yoOK_5KTmPWYlxJW/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Epsilon...What do you...?",
                "line": 12,
                "start_time": "0-00-34.830000",
                "end_time": "0-00-37.790000",
                "url": "https://drive.google.com/file/d/1HYpF7CNh9t6IfP6pwWZb_VhlgEonn-zb/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What do I what?",
                "line": 13,
                "start_time": "0-00-37.790000",
                "end_time": "0-00-38.640000",
                "url": "https://drive.google.com/file/d/1VDSI78lOZkS4m0tMPaBWDJhiGikWtWBf/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "What kind of underwear do you wear?",
                "line": 14,
                "start_time": "0-00-39.430000",
                "end_time": "0-00-41.470000",
                "url": "https://drive.google.com/file/d/1-eSANI89eYqy0418-qiKOyBNEBGkvV-K/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Eh?!",
                "line": 15,
                "start_time": "0-00-41.470000",
                "end_time": "0-00-42.380000",
                "url": "https://drive.google.com/file/d/1Cn6u8BxHSHongeEkgxqvRRSzwN8bjEOY/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Beta! What, what are you talking about?",
                "line": 16,
                "start_time": "0-00-42.400000",
                "end_time": "0-00-45.260000",
                "url": "https://drive.google.com/file/d/1sT5SSoPDCjNcesFsi1G4fwiWC7Nub1L_/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "This, this is just an ordinary, everyday conversation.",
                "line": 17,
                "start_time": "0-00-45.260000",
                "end_time": "0-00-47.980000",
                "url": "https://drive.google.com/file/d/1k1NleKdcYx2k8D3ipBWRbm4EJIPyZgok/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I just happened to be looking at some underwear, and then you, Epsilon, shows up,",
                "line": 18,
                "start_time": "0-00-47.980000",
                "end_time": "0-00-53.280000",
                "url": "https://drive.google.com/file/d/1ovEUGzJuXzV8U6IRXPNU7V4SaHy5JdXy/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "So I asked, merely as an ordinary conversation.",
                "line": 19,
                "start_time": "0-00-53.280000",
                "end_time": "0-00-56.320000",
                "url": "https://drive.google.com/file/d/1p7caaqCVUQrTxMODskNWOApp3bz_qttO/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Uh, right, just an ordinary question......Yes.",
                "line": 20,
                "start_time": "0-00-56.710000",
                "end_time": "0-01-00.710000",
                "url": "https://drive.google.com/file/d/1kbt1unqQZOxpQbDrMnQYP_NF4ztwxhin/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Epsilon?",
                "line": 21,
                "start_time": "0-01-02.450000",
                "end_time": "0-01-03.710000",
                "url": "https://drive.google.com/file/d/1IXCvx8tdxIGEmP3YaWZQdmf4-uMczvqz/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Uh, no, nothing.",
                "line": 22,
                "start_time": "0-01-03.710000",
                "end_time": "0-01-05.340000",
                "url": "https://drive.google.com/file/d/1yLdahLNVmOvkJkpaFbDr00gpzN1OlSUH/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "So?",
                "line": 23,
                "start_time": "0-01-05.820000",
                "end_time": "0-01-06.480000",
                "url": "https://drive.google.com/file/d/1UPWQeYmuaL0F6hKjgADwXjuT6ZUsb13x/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "What kind of underwear do you wear?",
                "line": 24,
                "start_time": "0-01-06.830000",
                "end_time": "0-01-09.120000",
                "url": "https://drive.google.com/file/d/1KV-P2i46QMQYfccstenM4p9EUqloCvU0/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I wear the \"T-Back\" bikini shorts Gamma recently told me about...",
                "line": 25,
                "start_time": "0-01-09.530000",
                "end_time": "0-01-13.520000",
                "url": "https://drive.google.com/file/d/1tbK46jxPukpU0fiWIOi50lQH2Ib79UBN/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Not bottoms. I mean tops.",
                "line": 26,
                "start_time": "0-01-14.070000",
                "end_time": "0-01-15.790000",
                "url": "https://drive.google.com/file/d/13iBfshqe7D2kwMxGiIcYgEkZAMLJ15ci/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Tops...? My tops are......",
                "line": 27,
                "start_time": "0-01-15.790000",
                "end_time": "0-01-19.870000",
                "url": "https://drive.google.com/file/d/1FEAI_owlgAuStG0V-tcVw50ZZgKr2pbO/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...New...bra...?",
                "line": 28,
                "start_time": "0-01-21.430000",
                "end_time": "0-01-23.100000",
                "url": "https://drive.google.com/file/d/1v2FUrT_RZxpqra_Wmw6chjiwts5hLkp0/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "\"Newbra\"...?",
                "line": 29,
                "start_time": "0-01-23.460000",
                "end_time": "0-01-24.710000",
                "url": "https://drive.google.com/file/d/1E4PNHo1FAUnGQEaZiLfUj2N6gaBt4C4A/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Uhm, that's right...\"Newbra\"...",
                "line": 30,
                "start_time": "0-01-24.710000",
                "end_time": "0-01-26.960000",
                "url": "https://drive.google.com/file/d/1pqFS65dV051dYmPgTmcH0avJJPb-0wjg/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Which ones are they?",
                "line": 31,
                "start_time": "0-01-26.960000",
                "end_time": "0-01-28.190000",
                "url": "https://drive.google.com/file/d/1LahsS7OFZ91-S12U7wZrMvT-zmG2muvT/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Uhm, unfortunately,",
                "line": 32,
                "start_time": "0-01-28.190000",
                "end_time": "0-01-29.900000",
                "url": "https://drive.google.com/file/d/1043YeZ-QyCD1w7NHSk_kcDaSpcl8FU1L/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Mine are not Misugoshi-made. A \"Special\" brand, I should say.",
                "line": 33,
                "start_time": "0-01-29.900000",
                "end_time": "0-01-35.620000",
                "url": "https://drive.google.com/file/d/1Jmk7xlDJbKX98R-HPifDLQTKwDB6d2Wv/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Bras that are better-made than Mitsugoshi?",
                "line": 34,
                "start_time": "0-01-35.880000",
                "end_time": "0-01-37.800000",
                "url": "https://drive.google.com/file/d/1rNGjzZgAJK1F3MAedAvlOo4j7cXA_5Sl/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Uhm, it's not about which is better, how should I say it...That they are more to my taste?",
                "line": 35,
                "start_time": "0-01-37.800000",
                "end_time": "0-01-42.950000",
                "url": "https://drive.google.com/file/d/15-m7uwTKV-cVl3ukoefUrrQuM3Kpxz3N/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Have that \"something\" which suits me...",
                "line": 36,
                "start_time": "0-01-42.950000",
                "end_time": "0-01-45.540000",
                "url": "https://drive.google.com/file/d/1Nqqe8GQ8kA81zySEQk8Zi7-eKCP0K67X/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Maybe I will ask Gamma about it next time.",
                "line": 37,
                "start_time": "0-01-45.540000",
                "end_time": "0-01-47.720000",
                "url": "https://drive.google.com/file/d/1G2hedoeJE4Mv3-CJpLs4gweiozWiGOCG/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh, my! Just remembered I have some business to attend to!",
                "line": 38,
                "start_time": "0-01-47.720000",
                "end_time": "0-01-50.160000",
                "url": "https://drive.google.com/file/d/1dkWS0sTn7FPBS6G4wKgG8UqQ5GM7nPzM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Well, then, see you, Beta!",
                "line": 39,
                "start_time": "0-01-50.590000",
                "end_time": "0-01-53.150000",
                "url": "https://drive.google.com/file/d/1E4IpReuuEeI8rGYTa5Cgk_jq2-DyxPCN/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Eh, yes, right.",
                "line": 40,
                "start_time": "0-01-53.150000",
                "end_time": "0-01-54.770000",
                "url": "https://drive.google.com/file/d/1fqy7E1Dl16Lr6mD5OxWR214WmvFf4rlM/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "\"Newbra\"... noted!",
                "line": 41,
                "start_time": "0-01-56.110000",
                "end_time": "0-01-57.630000",
                "url": "https://drive.google.com/file/d/1WDh4ufzY70nMhoUxsNEnw1UkYOi8I_Wc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Forget that! Please forget I said that!",
                "line": 42,
                "start_time": "0-01-57.630000",
                "end_time": "0-01-59.520000",
                "url": "https://drive.google.com/file/d/1ew7ps6xyhLFspZehpwJ7gL3_fCU8BCQt/view?usp=drivesdk"
            }
        ],
        "e8": [
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Ahhh, this makes tiredness go away!",
                "line": 1,
                "start_time": "0-00-05.410000",
                "end_time": "0-00-08.530000",
                "url": "https://drive.google.com/file/d/1JzSpN2jE3RtY9Q6ev5s8IjzHXtGePTEG/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Eta, the hot spa water today is way better than before!",
                "line": 2,
                "start_time": "0-00-08.530000",
                "end_time": "0-00-12.900000",
                "url": "https://drive.google.com/file/d/1tpPra-ReFRZVKCfMg5icuPmWc5watFCa/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Succeeded in the mineralization of...Artifact...",
                "line": 3,
                "start_time": "0-00-12.900000",
                "end_time": "0-00-16.290000",
                "url": "https://drive.google.com/file/d/1HWGER0gZ7J-fQkn_-P4cFmADi4euoMRd/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "That has potency for...recovery from fatigue...",
                "line": 4,
                "start_time": "0-00-16.290000",
                "end_time": "0-00-20.160000",
                "url": "https://drive.google.com/file/d/1KxJeIjT0Lts2CU5oj-35_ZJWkn6NlejV/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "This spa water is fine because it uses that? Ahhh, it works!",
                "line": 5,
                "start_time": "0-00-20.160000",
                "end_time": "0-00-22.790000",
                "url": "https://drive.google.com/file/d/1-DsE5i99l-9-t0mztvy2NNjhVQD7iMty/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Paradise...paradise...",
                "line": 6,
                "start_time": "0-00-24.920000",
                "end_time": "0-00-27.320000",
                "url": "https://drive.google.com/file/d/1P72_o1CJS8iSwe0IT9m2NM2wmZjOj2ze/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "So, prospects for building that facility Gamma was talking are pretty good now!",
                "line": 7,
                "start_time": "0-00-27.960000",
                "end_time": "0-00-32.390000",
                "url": "https://drive.google.com/file/d/1b7e4QPVFnMTAGOqVtNMLY7IR454XnqnC/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Yeah...",
                "line": 8,
                "start_time": "0-00-32.390000",
                "end_time": "0-00-33.230000",
                "url": "https://drive.google.com/file/d/19RXBPMtFB0fxTxNaGb-c-M4Lvfzl18vi/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "This is really great...oh?",
                "line": 9,
                "start_time": "0-00-33.240000",
                "end_time": "0-00-34.930000",
                "url": "https://drive.google.com/file/d/1CX7CUtNFYpR26itneCD6Wr-_3wvjRYYI/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Epsilon, why aren't you getting in the spa?",
                "line": 10,
                "start_time": "0-00-37.040000",
                "end_time": "0-00-39.620000",
                "url": "https://drive.google.com/file/d/1YsZniWXnOCi041p-SohWh4yG4ek04Mh4/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I am here because I have business with Eta.",
                "line": 11,
                "start_time": "0-00-39.620000",
                "end_time": "0-00-42.340000",
                "url": "https://drive.google.com/file/d/17_ft89VFB8A38Q_m-cNmgA9TH36DLppK/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "So I am just waiting over here.",
                "line": 12,
                "start_time": "0-00-42.340000",
                "end_time": "0-00-44.510000",
                "url": "https://drive.google.com/file/d/18GikzQ549FFMdRguAFn27SuLCYyLz80y/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "We just got in, so it will take some time.",
                "line": 13,
                "start_time": "0-00-44.510000",
                "end_time": "0-00-47.740000",
                "url": "https://drive.google.com/file/d/1pnqe3tDSnYZ7ctDUxbCe7LW6HL4_nb6O/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "A long bath...that's my resolve...",
                "line": 14,
                "start_time": "0-00-47.740000",
                "end_time": "0-00-50.030000",
                "url": "https://drive.google.com/file/d/1v9TDmy2NfQg9XrLkae9_rPaDup5HVYtG/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Why don't you get in, too, and wait?",
                "line": 15,
                "start_time": "0-00-50.030000",
                "end_time": "0-00-52.690000",
                "url": "https://drive.google.com/file/d/1atFvC2zXyQQDfoppwzh_EOlakqqog-o6/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Well, yeah...but I will save that pleasure for later.",
                "line": 16,
                "start_time": "0-00-52.690000",
                "end_time": "0-00-56.190000",
                "url": "https://drive.google.com/file/d/1tLoQCJsHSiT9Wt1W3E6nNreFno6JYBwM/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "? How come?",
                "line": 17,
                "start_time": "0-00-56.190000",
                "end_time": "0-00-58.330000",
                "url": "https://drive.google.com/file/d/11zH2QsHHbK8a36uuLwBXdqYl5A0qIAEc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "No, later if fine with me.",
                "line": 18,
                "start_time": "0-00-58.330000",
                "end_time": "0-01-00.920000",
                "url": "https://drive.google.com/file/d/1jJJ23lPBz_c3edAuNBgEJ-iS7_ABNgon/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Why?",
                "line": 19,
                "start_time": "0-01-00.920000",
                "end_time": "0-01-01.790000",
                "url": "https://drive.google.com/file/d/1Fq1goEsxOb9zkdM5X72xY19zUuPVPJnM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Why, you ask? ...Uh, why, because...",
                "line": 20,
                "start_time": "0-01-01.790000",
                "end_time": "0-01-05.300000",
                "url": "https://drive.google.com/file/d/13LWbSUGrC5iUy3VfiFtoVVw7BlhCfmhK/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "So you won't get into...the hot spa water...that I made?",
                "line": 21,
                "start_time": "0-01-05.300000",
                "end_time": "0-01-10.240000",
                "url": "https://drive.google.com/file/d/1lH3ZMNJfe6B_tnQajmEmNEudVyEeJrrc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "That doesn't sound nice!",
                "line": 22,
                "start_time": "0-01-10.240000",
                "end_time": "0-01-11.870000",
                "url": "https://drive.google.com/file/d/1SzYjbQMXHgJRJmFmS4Iz3dBJLKr1Snc4/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "\"If you won't go in...Then, I will make you go in, little Cuckoo...\"",
                "line": 23,
                "start_time": "0-01-11.870000",
                "end_time": "0-01-16.100000",
                "url": "https://drive.google.com/file/d/1eglLKZoZ9Txk-DJfh38z5dR2fvSxTEyF/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Little Cuckoo?",
                "line": 24,
                "start_time": "0-01-16.430000",
                "end_time": "0-01-17.960000",
                "url": "https://drive.google.com/file/d/1uxDJ5ZFcmXyOPw3qGPaQIVh1QeXU1os4/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Master's teachings.",
                "line": 25,
                "start_time": "0-01-17.960000",
                "end_time": "0-01-19.840000",
                "url": "https://drive.google.com/file/d/1iVbs8J52KIEC1wSBspKwrVqEiP3yRwQk/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Eh? What is this!?",
                "line": 26,
                "start_time": "0-01-19.840000",
                "end_time": "0-01-22.040000",
                "url": "https://drive.google.com/file/d/1UOEOhhuXGd_-1o6psjqpwyPKaFgM9uwu/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "\"Bath Enforcing Machine\"",
                "line": 27,
                "start_time": "0-01-22.040000",
                "end_time": "0-01-23.740000",
                "url": "https://drive.google.com/file/d/1yC9yNKpDKQ5PyMLzeIZ5d9WGxmptaHVu/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Bath Enforcing Machine?",
                "line": 28,
                "start_time": "0-01-23.740000",
                "end_time": "0-01-25.490000",
                "url": "https://drive.google.com/file/d/1zFFfyQmZujDpXwvmUAi9jcLG2TjVCJhM/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Little Cuckoo-kun",
                "line": 29,
                "start_time": "0-01-25.490000",
                "end_time": "0-01-26.790000",
                "url": "https://drive.google.com/file/d/1Wu-CWYUHFjxAVu1ckNmq43GCAXlKv5T9/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Why that name!?",
                "line": 30,
                "start_time": "0-01-26.790000",
                "end_time": "0-01-28.330000",
                "url": "https://drive.google.com/file/d/1cBxZl9nKj5IhzbY3tUcshdbashhmg4uA/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Little Cuckoo-kun...Dump Epsilon into the spa!",
                "line": 31,
                "start_time": "0-01-28.330000",
                "end_time": "0-01-32.920000",
                "url": "https://drive.google.com/file/d/1evJhutkTdSV-durFUCjblK1LsaXOKZ58/view?usp=drivesdk"
            },
            {
                "name": "Little Cuckoo-kun",
                "name_variant": "Little Cuckoo-kun",
                "subtitle": "Yes, sir!",
                "line": 32,
                "start_time": "0-01-32.920000",
                "end_time": "0-01-35.220000",
                "url": "https://drive.google.com/file/d/16AMSb-ZTNK4jfpKV38Sxcir0rjXFvyEf/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Eta?",
                "line": 33,
                "start_time": "0-01-41.590000",
                "end_time": "0-01-42.880000",
                "url": "https://drive.google.com/file/d/1MJBn7XTtXPjXSkyS5ewvio2RLp7MUbSx/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "What?",
                "line": 34,
                "start_time": "0-01-43.330000",
                "end_time": "0-01-44.110000",
                "url": "https://drive.google.com/file/d/1geEd8a9cX8ArFRsVfQqsnEu-BgfoOeGB/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Is Epsilon really bathing in spa water this way?",
                "line": 35,
                "start_time": "0-01-44.770000",
                "end_time": "0-01-48.020000",
                "url": "https://drive.google.com/file/d/1V6b6AsPRgdw0Wye5lrtp_sTrBBqD2SEx/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Its structure lets the spa water go inside, so... should be OK...",
                "line": 36,
                "start_time": "0-01-48.020000",
                "end_time": "0-01-52.730000",
                "url": "https://drive.google.com/file/d/1-6U5FUxXwe5MtQmGh4mTlgALHtR3Eodj/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "In theory...",
                "line": 37,
                "start_time": "0-01-53.170000",
                "end_time": "0-01-54.350000",
                "url": "https://drive.google.com/file/d/12NcMMTi1DAqes8ldIpi9mpVAF3ZSVedj/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Huh?",
                "line": 38,
                "start_time": "0-01-54.350000",
                "end_time": "0-01-55.090000",
                "url": "https://drive.google.com/file/d/1QjbLXw1Oldp78Zg1RLr8LgPM5vBTeQiQ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I'm relieved...",
                "line": 39,
                "start_time": "0-01-55.960000",
                "end_time": "0-01-57.110000",
                "url": "https://drive.google.com/file/d/1JHR2sRb0vF6V8s1VdaDk3hUA8XLCSke1/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "What does that mean?",
                "line": 40,
                "start_time": "0-01-57.510000",
                "end_time": "0-01-58.820000",
                "url": "https://drive.google.com/file/d/1d4qg5vu5HW5IB_saspihf0z0O0Zx37-3/view?usp=drivesdk"
            }
        ],
        "e9": [
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "A Molly should just shut up!",
                "line": 1,
                "start_time": "0-00-05.940000",
                "end_time": "0-00-08.150000",
                "url": "https://drive.google.com/file/d/1Kz_rSknuKtgYnRDDDFBlBFkoFwA8NMRf/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "And a Doggy can do nothing but bark!",
                "line": 2,
                "start_time": "0-00-08.340000",
                "end_time": "0-00-11.120000",
                "url": "https://drive.google.com/file/d/1VAYVuwstcjiR1BmAGANRSB_keApld_sU/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ahhh, I won't put up with this anymore!",
                "line": 3,
                "start_time": "0-00-11.120000",
                "end_time": "0-00-13.630000",
                "url": "https://drive.google.com/file/d/1mMY62z3E3r9BQ6gbHi2QESX1herArqpf/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Oh, so what will you do then? Woof, woof!",
                "line": 4,
                "start_time": "0-00-13.630000",
                "end_time": "0-00-17.210000",
                "url": "https://drive.google.com/file/d/1y1q_iBe3ea8feInuIFMSFIPZlGmBGndI/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Grrrr...Yeee!...!",
                "line": 5,
                "start_time": "0-00-17.210000",
                "end_time": "0-00-19.220000",
                "url": "https://drive.google.com/file/d/1itZTEXMC6Ldp2b7JvYsxSPFbGqo6m2Kb/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "OK, you two, enough with that!",
                "line": 6,
                "start_time": "0-00-19.220000",
                "end_time": "0-00-21.690000",
                "url": "https://drive.google.com/file/d/1nKTC0YSDAT_FUSTMZacsMi0UR8Lc5J7Y/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ah, yes...!",
                "line": 7,
                "start_time": "0-00-21.690000",
                "end_time": "0-00-23.570000",
                "url": "https://drive.google.com/file/d/1r3t95A9NCBR1ZJmkMqPNH3vehY-pLyEE/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Yes...",
                "line": 7,
                "start_time": "0-00-21.690000",
                "end_time": "0-00-23.570000",
                "url": "https://drive.google.com/file/d/1r3t95A9NCBR1ZJmkMqPNH3vehY-pLyEE/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Really, you two are always...",
                "line": 8,
                "start_time": "0-00-24.880000",
                "end_time": "0-00-27.410000",
                "url": "https://drive.google.com/file/d/1qUnuMz6xcSwfB4t8FSBrNtxAlXRi-Gh9/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...It is Zeta's fault.",
                "line": 9,
                "start_time": "0-00-28.440000",
                "end_time": "0-00-30.480000",
                "url": "https://drive.google.com/file/d/1bJDMaig5AeE3WWWhTfOF25eL3wW16psW/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Well, I was just baby-sitting you.",
                "line": 10,
                "start_time": "0-00-30.480000",
                "end_time": "0-00-32.760000",
                "url": "https://drive.google.com/file/d/1htKkMMJBJ6WGcIaRKhdzCRgfasE1rLuy/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Baby-sitting? Say you are baby-sitting Delta?",
                "line": 11,
                "start_time": "0-00-32.760000",
                "end_time": "0-00-35.770000",
                "url": "https://drive.google.com/file/d/1kbAEgxK-erBUn6NYVTLh6kVoss_C3YT-/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "All right, now!",
                "line": 12,
                "start_time": "0-00-38.150000",
                "end_time": "0-00-39.080000",
                "url": "https://drive.google.com/file/d/1c1LRWzVdNMn-upvax8z_oCoQ-kW8r2nd/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "We are the Seven Shades, OK?",
                "line": 13,
                "start_time": "0-00-40.720000",
                "end_time": "0-00-43.070000",
                "url": "https://drive.google.com/file/d/1913b4N9UQjHzMopQrtw5QFnJeyoHWdPX/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Those that lurk in the shadows to assist Shadow-sama.",
                "line": 14,
                "start_time": "0-00-43.070000",
                "end_time": "0-00-45.790000",
                "url": "https://drive.google.com/file/d/1dGD0RMArdw0PgPWhoqhqUpLJlwqRu2Ni/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Aren't you ashamed that those Seven Shades keep bickering over ridiculous matters every time they meet?",
                "line": 15,
                "start_time": "0-00-46.220000",
                "end_time": "0-00-51.370000",
                "url": "https://drive.google.com/file/d/1tTs5bVg_dsy17Nz_2hyrk5DWNs5dtfQ8/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "But...",
                "line": 16,
                "start_time": "0-00-51.370000",
                "end_time": "0-00-53.080000",
                "url": "https://drive.google.com/file/d/1qV749FDN6ARmO_mBwoR8yuG1AobbKWvc/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "But what do we do if that Shade that serves Shadow-sama is this stupid?",
                "line": 17,
                "start_time": "0-00-53.080000",
                "end_time": "0-00-58.810000",
                "url": "https://drive.google.com/file/d/1ikA_ZhqKSjM-Ha4UPlZya6U3ufgNFoWA/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Delta has her good sides.",
                "line": 18,
                "start_time": "0-00-58.810000",
                "end_time": "0-01-01.190000",
                "url": "https://drive.google.com/file/d/15diEj2d2CZz4wRVPUVu8ngro1yGzxKez/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "~~ !",
                "line": 19,
                "start_time": "0-01-01.190000",
                "end_time": "0-01-03.340000",
                "url": "https://drive.google.com/file/d/1sKfEbTAgf_5udTaTVE5mRLrH8iniM3Ow/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But maybe you should try to do a little bit better, too, Delta.",
                "line": 20,
                "start_time": "0-01-03.340000",
                "end_time": "0-01-07.160000",
                "url": "https://drive.google.com/file/d/19jX3b5sIahydMsdtlJaLauBG8SJbs6BZ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Uh...",
                "line": 21,
                "start_time": "0-01-07.160000",
                "end_time": "0-01-08.580000",
                "url": "https://drive.google.com/file/d/1qkYMkHOOXnrQwstf-EwpGbhFer1bpvxz/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Delta?",
                "line": 22,
                "start_time": "0-01-09.230000",
                "end_time": "0-01-10.200000",
                "url": "https://drive.google.com/file/d/1tsLRjXogB-WWjB5S9q3vjevrd-u-dR6y/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Yes...",
                "line": 23,
                "start_time": "0-01-10.200000",
                "end_time": "0-01-11.500000",
                "url": "https://drive.google.com/file/d/1cxxTZvH8PjR0YB8_4XlqFnCEU3U25fZd/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Try getting along with Zeta.",
                "line": 24,
                "start_time": "0-01-12.300000",
                "end_time": "0-01-14.650000",
                "url": "https://drive.google.com/file/d/1yK5ZrG5o9i9BE9sBztM6ppjqa40yldJ8/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Uh...",
                "line": 25,
                "start_time": "0-01-14.650000",
                "end_time": "0-01-17.170000",
                "url": "https://drive.google.com/file/d/1lgyDfgnaOxzvoVterBhdaqYPD0mlmYZB/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Meanwhile, Zeta will not react by teasing.",
                "line": 26,
                "start_time": "0-01-17.710000",
                "end_time": "0-01-19.550000",
                "url": "https://drive.google.com/file/d/1vjp5rW9bnBzjEdl_qecNiu99k-Vy6cev/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Yes...",
                "line": 27,
                "start_time": "0-01-20.060000",
                "end_time": "0-01-21.040000",
                "url": "https://drive.google.com/file/d/1dRNqy-gWk8y0cSpykivjbJ05SOD8iz0H/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...Zeta...",
                "line": 28,
                "start_time": "0-01-23.650000",
                "end_time": "0-01-24.630000",
                "url": "https://drive.google.com/file/d/1hwplVYPcazFfqQJ_CRIsD5-wwt23uXEP/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Yeah?",
                "line": 29,
                "start_time": "0-01-25.060000",
                "end_time": "0-01-25.780000",
                "url": "https://drive.google.com/file/d/1dDrSPYE4IElnecXfRnfs5wu2iYVeuE-o/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Wah!",
                "line": 30,
                "start_time": "0-01-27.070000",
                "end_time": "0-01-32.310000",
                "url": "https://drive.google.com/file/d/1IICY9mmxIQotJAL1b-cIQuAMM6xc_XIx/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "!!......",
                "line": 31,
                "start_time": "0-01-28.130000",
                "end_time": "0-01-28.940000",
                "url": "https://drive.google.com/file/d/12LwJBd-a9niarLSyZ4W0UtU5m4goAdNE/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Get along, will get along with Zeta!",
                "line": 32,
                "start_time": "0-01-33.140000",
                "end_time": "0-01-37.030000",
                "url": "https://drive.google.com/file/d/19H9skZniIHXgQVFj_nyV_lMKjINqTcHr/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Zeta, you can do the same! As a sign of friendship!",
                "line": 33,
                "start_time": "0-01-38.430000",
                "end_time": "0-01-42.750000",
                "url": "https://drive.google.com/file/d/17WG2YOXcXjqDsMPYTwSNBnd4XlGfTr8F/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Uh...",
                "line": 34,
                "start_time": "0-01-43.220000",
                "end_time": "0-01-46.210000",
                "url": "https://drive.google.com/file/d/1KK5SakX8U54MomS7Pp9Q8Qjxl1vix52I/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "You can lick-lick me, too! Lick-lick, yes!",
                "line": 35,
                "start_time": "0-01-46.210000",
                "end_time": "0-01-48.860000",
                "url": "https://drive.google.com/file/d/1f3rdQdSoF--MI50MZPfs5oayXrVnbFEH/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Even if it's Alpha-sama's order, this is too much to endure!",
                "line": 36,
                "start_time": "0-01-48.860000",
                "end_time": "0-01-52.120000",
                "url": "https://drive.google.com/file/d/1Ho10NFCIZ65waqNkV1KdCb4OP0hpCvqu/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You went a bit too far.",
                "line": 37,
                "start_time": "0-01-55.880000",
                "end_time": "0-01-57.450000",
                "url": "https://drive.google.com/file/d/1z-2vvalYpcNghhChuC2cSped59KO3Zsb/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Dejected, I am...",
                "line": 38,
                "start_time": "0-01-57.450000",
                "end_time": "0-01-59.260000",
                "url": "https://drive.google.com/file/d/1NPH5CxLBW6uehSumTPePH5DYS3DDYhtq/view?usp=drivesdk"
            }
        ],
        "e10": [
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Eta?",
                "line": 1,
                "start_time": "0-00-05.970000",
                "end_time": "0-00-07.230000",
                "url": "https://drive.google.com/file/d/12e7Fcm55UZNqiUidD0teD10R4JSOABOB/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "What?",
                "line": 2,
                "start_time": "0-00-07.230000",
                "end_time": "0-00-08.120000",
                "url": "https://drive.google.com/file/d/1w_-BjOURrzu7_4RJx1xI-HVhZp_ERQVq/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I am getting bored of this...",
                "line": 3,
                "start_time": "0-00-08.710000",
                "end_time": "0-00-10.870000",
                "url": "https://drive.google.com/file/d/1FKcjP9CrOiUiyVb_7HJb9moZKKW9e5PZ/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "No, you don't...",
                "line": 4,
                "start_time": "0-00-10.870000",
                "end_time": "0-00-11.700000",
                "url": "https://drive.google.com/file/d/1sp0pRjL9W-9KXhdN1jw--h9qBVzMCV4r/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Sure enough, Delta did say \"I want more strength!\"",
                "line": 5,
                "start_time": "0-00-13.250000",
                "end_time": "0-00-17.010000",
                "url": "https://drive.google.com/file/d/1T_KjZt6UEMGQjew2LqV-Hf404pKsdTXx/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "But this is no fun!",
                "line": 6,
                "start_time": "0-00-17.010000",
                "end_time": "0-00-19.820000",
                "url": "https://drive.google.com/file/d/1u-L9eWWLbYj6_zcMxzGJQzk16yyGyt07/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "If this experiment goes well...",
                "line": 7,
                "start_time": "0-00-19.820000",
                "end_time": "0-00-23.190000",
                "url": "https://drive.google.com/file/d/1ZNVJsRrAX9PZ5yi9KRRYZzJYbTsiPieI/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Delta...can become...",
                "line": 8,
                "start_time": "0-00-23.190000",
                "end_time": "0-00-24.480000",
                "url": "https://drive.google.com/file/d/1td_7PP9PvMRvnTFepLz6QmXagUQaiETQ/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "\"Muscle Macho\"...",
                "line": 9,
                "start_time": "0-00-24.480000",
                "end_time": "0-00-28.360000",
                "url": "https://drive.google.com/file/d/1QLjCZ6dLhq2ULYzt79g7rH_TtWHFpQhu/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Delta does want to be \"Muscle Macho!\"",
                "line": 10,
                "start_time": "0-00-28.360000",
                "end_time": "0-00-31.020000",
                "url": "https://drive.google.com/file/d/1jP79CL9m_scbiv8EZJkkTC_4X2WEXHil/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "OK, so Delta will hang in!",
                "line": 11,
                "start_time": "0-00-31.020000",
                "end_time": "0-00-32.800000",
                "url": "https://drive.google.com/file/d/1Dr9jV22R80GtCHzrkw70OmksUWRCXw7W/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "? Wait...",
                "line": 12,
                "start_time": "0-00-32.800000",
                "end_time": "0-00-33.440000",
                "url": "https://drive.google.com/file/d/1blh1DGrxvxciWaLFbWPLPM51m8Cj9tIC/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Did you just say \"Experiment?\"",
                "line": 13,
                "start_time": "0-00-33.880000",
                "end_time": "0-00-35.660000",
                "url": "https://drive.google.com/file/d/1r_sCEnz5CsQfUunPaxnakHNUn4JA7Qa1/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Pout...",
                "line": 14,
                "start_time": "0-00-35.660000",
                "end_time": "0-00-36.520000",
                "url": "https://drive.google.com/file/d/1vaDGCfQGIkTusr5X500JikbYn2T4xhTE/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Preparations...all set...",
                "line": 15,
                "start_time": "0-00-37.870000",
                "end_time": "0-00-40.510000",
                "url": "https://drive.google.com/file/d/1Lv_RMDEP3kH_yd6dclNRrPbhFWWSKLjG/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "will commence...",
                "line": 16,
                "start_time": "0-00-41.080000",
                "end_time": "0-00-42.260000",
                "url": "https://drive.google.com/file/d/1bvZqHnhUzZA-pjmsTApacwH5YQXa0SJl/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I am excited!",
                "line": 17,
                "start_time": "0-00-42.260000",
                "end_time": "0-00-44.330000",
                "url": "https://drive.google.com/file/d/14u12IYHT2PkM8JRFvFEBTiAqYr3auy0C/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "\"Amusing Metamorphosis Machine\"...activated...",
                "line": 18,
                "start_time": "0-00-44.330000",
                "end_time": "0-00-47.340000",
                "url": "https://drive.google.com/file/d/1tngaTQojn-jvR0Tma8tzyXLEpzIhbKi8/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Did you just say \"Amusing?\"",
                "line": 19,
                "start_time": "0-00-47.340000",
                "end_time": "0-00-49.180000",
                "url": "https://drive.google.com/file/d/12SuX__lrSb0Ouu8l3xl3oX2QbtH7YMMr/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Click!",
                "line": 20,
                "start_time": "0-00-49.180000",
                "end_time": "0-00-50.430000",
                "url": "https://drive.google.com/file/d/1Q3d-MAVxq6CBpxKV9D0fGsnnhgPVTGSL/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Wow! Can't exactly tell how, but this is awesome!",
                "line": 21,
                "start_time": "0-00-52.570000",
                "end_time": "0-00-57.350000",
                "url": "https://drive.google.com/file/d/1uEk5boyR-hvgM50BPt_jS_9bJUsMBye-/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Wow, wow! Although this is a slime suit, it is about to get ripped!",
                "line": 22,
                "start_time": "0-00-57.350000",
                "end_time": "0-01-02.150000",
                "url": "https://drive.google.com/file/d/1eNeBeQB0FJ45qUuVZ-_xIwUeyRFu6Evd/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Tend to...see the clothes get ripped...",
                "line": 23,
                "start_time": "0-01-02.150000",
                "end_time": "0-01-05.510000",
                "url": "https://drive.google.com/file/d/1tVPlU-Bgxpj21Ee-q6A98Mzibg0Ymcbu/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Master...said so...",
                "line": 24,
                "start_time": "0-01-05.510000",
                "end_time": "0-01-07.830000",
                "url": "https://drive.google.com/file/d/1L9OK4_qCMip-BK76AMRMOyAINzkw54Zv/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Boss said so, eh?",
                "line": 25,
                "start_time": "0-01-07.830000",
                "end_time": "0-01-10",
                "url": "https://drive.google.com/file/d/1eY2UrMy8xnRkKQEOgqozeBqqZ1rZYdxj/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Master...said this as well...",
                "line": 26,
                "start_time": "0-01-10",
                "end_time": "0-01-13.170000",
                "url": "https://drive.google.com/file/d/1VOWWWmX4SmnDjFfISGb9bMS7w9pWeqfi/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Let out a voice that sounds strong...while ripping your clothes...",
                "line": 27,
                "start_time": "0-01-13.170000",
                "end_time": "0-01-17.670000",
                "url": "https://drive.google.com/file/d/1RCbGXufY702ZvrGMGez_Pb69gn0E-rYo/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Will do that!",
                "line": 28,
                "start_time": "0-01-17.670000",
                "end_time": "0-01-19.430000",
                "url": "https://drive.google.com/file/d/1OpQwJurCECD_aXuRl7vBK7EEvtbK2t32/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Whowaaaaaaaaaa!",
                "line": 29,
                "start_time": "0-01-19.880000",
                "end_time": "0-01-22.900000",
                "url": "https://drive.google.com/file/d/1fOFqU_CyGpyRin_AQGNvQ7PljEF2qi1M/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Whowa! Whowa! Whowaaaaaaaaaa!",
                "line": 30,
                "start_time": "0-01-23.270000",
                "end_time": "0-01-27.480000",
                "url": "https://drive.google.com/file/d/1e1m6_XUDqtSd-T_Sm55Gq9jFE5rIYXTE/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Whowatahhhhh!!!!!",
                "line": 31,
                "start_time": "0-01-28.860000",
                "end_time": "0-01-30.260000",
                "url": "https://drive.google.com/file/d/1K_yVi11ri5NpKX5YbLv2A8c3vNLMNJQr/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Experiment...is a success...",
                "line": 32,
                "start_time": "0-01-31.580000",
                "end_time": "0-01-34.060000",
                "url": "https://drive.google.com/file/d/1BHkJN8TUlw6kLGWJtm6xLOISNgd4MCxJ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Awesome! This is awesome!",
                "line": 33,
                "start_time": "0-01-34.060000",
                "end_time": "0-01-36.200000",
                "url": "https://drive.google.com/file/d/1ieaTzhqZCEZNgQW5EGZ5zpxB4nwO4Pc8/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "This is truly \"Muscle Macho!\"",
                "line": 34,
                "start_time": "0-01-36.200000",
                "end_time": "0-01-38.620000",
                "url": "https://drive.google.com/file/d/1LxzbFPxJAIZQN1vUyDdh57Digl0DmIAt/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "But...",
                "line": 35,
                "start_time": "0-01-38.620000",
                "end_time": "0-01-40.160000",
                "url": "https://drive.google.com/file/d/1M10Ecq6aXE5UHsQCEuGqjJUTFnfIt6Es/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "No strength overflowing in me particularly...",
                "line": 36,
                "start_time": "0-01-41.290000",
                "end_time": "0-01-44.620000",
                "url": "https://drive.google.com/file/d/1RNHZFh5dVTnNYcgQHIZZXKJuqESYR_Iz/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "That is to be expected...",
                "line": 37,
                "start_time": "0-01-44.620000",
                "end_time": "0-01-46.200000",
                "url": "https://drive.google.com/file/d/1JJkfIyB4IO8BB2zpNGkeJlSTyQpczjIn/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "?",
                "line": 38,
                "start_time": "0-01-46.200000",
                "end_time": "0-01-47.060000",
                "url": "https://drive.google.com/file/d/1rNhxYZuOhqYvOTKXkL6-I8dJlj5BZ3qj/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "This machine...just makes the muscles look larger...",
                "line": 39,
                "start_time": "0-01-47.060000",
                "end_time": "0-01-52.010000",
                "url": "https://drive.google.com/file/d/1KAtJ2Inj7ox6F_YI9AEPiD7vyZNOZxL3/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "That is meaningless!",
                "line": 40,
                "start_time": "0-01-52.010000",
                "end_time": "0-01-55.090000",
                "url": "https://drive.google.com/file/d/1mRLmuglZ0bMBUU0jlYW9x9x_4VHieAbP/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "This will get back to what it was like before?",
                "line": 41,
                "start_time": "0-01-56.290000",
                "end_time": "0-01-57.800000",
                "url": "https://drive.google.com/file/d/1yjORvAaZM4gspIgKHaHQWPcc9U2Xk3J7/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I don't know...",
                "line": 42,
                "start_time": "0-01-57.800000",
                "end_time": "0-01-58.830000",
                "url": "https://drive.google.com/file/d/1tgu-lIIarA7cwxv4nxGFCbrhoRqPFRIN/view?usp=drivesdk"
            }
        ],
        "e11": [
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "First, divide them into compartments and promote them gradually in phases, thereby controlling the supply flow...",
                "line": 1,
                "start_time": "0-00-05",
                "end_time": "0-00-10.070000",
                "url": "https://drive.google.com/file/d/11AIbZu1u7Rjk264kJiFSOyC3eviFIaAD/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "The capital needed for accelerating the loans will turn to be remarkably available by doing that...",
                "line": 2,
                "start_time": "0-00-10.070000",
                "end_time": "0-00-13.850000",
                "url": "https://drive.google.com/file/d/1q6jcpczFAxEGa-u1kBXKUjidH6h-m-jr/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Envision that as the timing for kick-off...",
                "line": 3,
                "start_time": "0-00-13.850000",
                "end_time": "0-00-15.450000",
                "url": "https://drive.google.com/file/d/1vjXx3abJi03FvBeT6p4ECR6Q5iuzbfxy/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Ah, Gamma?",
                "line": 4,
                "start_time": "0-00-15.46000",
                "end_time": "0-00-15.910000",
                "url": "https://drive.google.com/file/d/1S8KxsHMXdJaHJTT3-Y8k22NpC3sXFaoS/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Envision that as the timing for kick-off...",
                "line": 4,
                "start_time": "0-00-15.46000",
                "end_time": "0-00-15.910000",
                "url": "https://drive.google.com/file/d/1S8KxsHMXdJaHJTT3-Y8k22NpC3sXFaoS/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "The reason that the \"Bubble\" busted at that time, as explained by Master...",
                "line": 5,
                "start_time": "0-00-15.910000",
                "end_time": "0-00-18.830000",
                "url": "https://drive.google.com/file/d/1r1l9-Vn8FeYKpRUjy3YAsMXCoUu8w24H/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Avoid that from happening, and..., Oh, yes?",
                "line": 6,
                "start_time": "0-00-18.830000",
                "end_time": "0-00-20.710000",
                "url": "https://drive.google.com/file/d/1LBka84cQ3GBfiGKyrUi5DwvL07CAxZv_/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Am I interrupting you?",
                "line": 7,
                "start_time": "0-00-20.710000",
                "end_time": "0-00-21.880000",
                "url": "https://drive.google.com/file/d/1sLwM_gfnX5dPlL8coJODBPQMx4veIOCY/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "That's all right. Some tea for me, too, please?",
                "line": 8,
                "start_time": "0-00-21.880000",
                "end_time": "0-00-24.880000",
                "url": "https://drive.google.com/file/d/1ZGXpa7Pg3Gm9c4ORWCHcKq-W2L5Xz5FL/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...So, Gamma is setting up this \"Real-Estate Bubble\" thing?",
                "line": 9,
                "start_time": "0-00-25.420000",
                "end_time": "0-00-30.210000",
                "url": "https://drive.google.com/file/d/1eP6WQhbij-VGZIIyHJLByx8BRqLEt_st/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Right.",
                "line": 10,
                "start_time": "0-00-30.210000",
                "end_time": "0-00-30.760000",
                "url": "https://drive.google.com/file/d/1oub4xEoC6gbPS-wOo_P-r5HW0nzZYy59/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hmmm. I see why it would make some money.",
                "line": 11,
                "start_time": "0-00-30.760000",
                "end_time": "0-00-34.070000",
                "url": "https://drive.google.com/file/d/1c0WsJrRvXO4eBR-qZa3Ksw3sUIbw5RHu/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But how can it create such an enormous profit?",
                "line": 12,
                "start_time": "0-00-34.070000",
                "end_time": "0-00-38",
                "url": "https://drive.google.com/file/d/1timtx1D-hpgnRYGOhCe8cRSeawFy01lH/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Well, it is because the banks start lending out money to an excessive level.",
                "line": 13,
                "start_time": "0-00-38",
                "end_time": "0-00-41.890000",
                "url": "https://drive.google.com/file/d/1zJolDemnYKA2bm92FXqZLb12E1T5lTka/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But those lands, they aren't worth that much originally, right?",
                "line": 14,
                "start_time": "0-00-41.890000",
                "end_time": "0-00-44.800000",
                "url": "https://drive.google.com/file/d/1uA46N02e25nFtnc8J_rPqyw9pXC6cQmV/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Right. But make people feel that their worth will rise in the future,",
                "line": 15,
                "start_time": "0-00-44.800000",
                "end_time": "0-00-49.290000",
                "url": "https://drive.google.com/file/d/1ZVUYoRDa8fk_45fcN63dLPcs5NDgsWHU/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Then you will have people dabbling in them, even if the price is high.",
                "line": 16,
                "start_time": "0-00-49.290000",
                "end_time": "0-00-51.600000",
                "url": "https://drive.google.com/file/d/1w0owVGiXpEzhlyAUrJAE2UWcwN6_Er0f/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hmmm...",
                "line": 17,
                "start_time": "0-00-51.600000",
                "end_time": "0-00-52.310000",
                "url": "https://drive.google.com/file/d/1Ihv4TK-QA87ikFJW8zSSrOhuTP5HMGOU/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "In short, by inflating and inflating \"something that isn't worth much\"...",
                "line": 18,
                "start_time": "0-00-52.310000",
                "end_time": "0-00-57.450000",
                "url": "https://drive.google.com/file/d/15e6CLfdHL1f_1EqARzLOf0r5pQlS7gVK/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "You can make them \"look like they have great worth\"...",
                "line": 19,
                "start_time": "0-00-57.450000",
                "end_time": "0-01-00.970000",
                "url": "https://drive.google.com/file/d/10Qzzr6NdK47-JCxUSiPeAAo7Dcu5Bhy0/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "\"Something that isn't worth much\"...",
                "line": 20,
                "start_time": "0-01-00.970000",
                "end_time": "0-01-03.750000",
                "url": "https://drive.google.com/file/d/1U_QqEmc3oCuDZBot7yOdyEKg6tqt1z0j/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "It is not that they don't really have any value.",
                "line": 21,
                "start_time": "0-01-03.750000",
                "end_time": "0-01-06.630000",
                "url": "https://drive.google.com/file/d/1d0rkuQeQzgvK7GS-9sNlzgkCCGyNzs8q/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "But a bit of exaggeration will be appreciated by people.",
                "line": 22,
                "start_time": "0-01-06.630000",
                "end_time": "0-01-10.600000",
                "url": "https://drive.google.com/file/d/10M_Vilj8foER_Biuzcfts-No3364n4kQ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "A bit of... exaggeration...?",
                "line": 23,
                "start_time": "0-01-10.600000",
                "end_time": "0-01-12.690000",
                "url": "https://drive.google.com/file/d/1A8q1I2yPTEfMctF_gTCKKRfCHJrokkeG/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Right! A bit of exaggeration!",
                "line": 24,
                "start_time": "0-01-12.690000",
                "end_time": "0-01-15.080000",
                "url": "https://drive.google.com/file/d/17jBTn15Wz4LxUoOeDqvfOHLVpoWmTxXQ/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "But of course, sometimes they do burst, too.",
                "line": 25,
                "start_time": "0-01-15.080000",
                "end_time": "0-01-18.930000",
                "url": "https://drive.google.com/file/d/1lBOFifMrOOxEdyl8JQYg3ZZfx3oZbFuS/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Burst!?",
                "line": 26,
                "start_time": "0-01-17.430000",
                "end_time": "0-01-18.930000",
                "url": "https://drive.google.com/file/d/1qon_oVqQFrNLAv19Cp4xfQb6bUnARG8j/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Yes!...uh, Epsilon? You look pale.",
                "line": 27,
                "start_time": "0-01-18.930000",
                "end_time": "0-01-22.730000",
                "url": "https://drive.google.com/file/d/1dTlzQSEJfW8ZrRY6MrnndcTO7PUDUq49/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Huh?...no, I am OK.",
                "line": 28,
                "start_time": "0-01-22.730000",
                "end_time": "0-01-25.100000",
                "url": "https://drive.google.com/file/d/1c9zWGyhrGdQXMsUsGssev3IY5c0y1sGM/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Really? Is something wrong with your breasts?",
                "line": 29,
                "start_time": "0-01-25.100000",
                "end_time": "0-01-27.550000",
                "url": "https://drive.google.com/file/d/1ZjuZvY9ycleMcpe_7xg1cFPsoaKfj0bb/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Breasts? Nothing is wrong with my breasts!",
                "line": 30,
                "start_time": "0-01-27.550000",
                "end_time": "0-01-30.310000",
                "url": "https://drive.google.com/file/d/19yRLUE9SYMMQTqFLdMzcuR2OiAZnQJB7/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "And my breasts are not worthless!",
                "line": 31,
                "start_time": "0-01-30.310000",
                "end_time": "0-01-32.520000",
                "url": "https://drive.google.com/file/d/1KecDozIiUD2bA6fxlMA3AYA50eb97234/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Not what....?",
                "line": 32,
                "start_time": "0-01-32.520000",
                "end_time": "0-01-33.430000",
                "url": "https://drive.google.com/file/d/1F1FzbgGGtR2hsPCyqB1thiFtXxUk-dzb/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Uhm, eh, well...",
                "line": 33,
                "start_time": "0-01-33.430000",
                "end_time": "0-01-35.510000",
                "url": "https://drive.google.com/file/d/1DxsyrNjgkYM8iSD_V6tvRQo-U_KS3twH/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Drank too much yesterday. So I feel \"nauseous\" in my stomach, not my breasts...",
                "line": 34,
                "start_time": "0-01-35.510000",
                "end_time": "0-01-41.150000",
                "url": "https://drive.google.com/file/d/1SKVwJLNoRmSmoMqRUX1HF5B_rpNMNOm2/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Oh, I see.",
                "line": 35,
                "start_time": "0-01-41.150000",
                "end_time": "0-01-42.860000",
                "url": "https://drive.google.com/file/d/1IwumDg7puymRjP872gXDFI0gFBZesvw0/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "We happen to have the new stomach medicine developed by Eta. Want to take that?",
                "line": 36,
                "start_time": "0-01-42.860000",
                "end_time": "0-01-46.640000",
                "url": "https://drive.google.com/file/d/1cp2jdxbjZ8qfp8COQUx7U552VWfPB2Yr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes, please...",
                "line": 37,
                "start_time": "0-01-46.640000",
                "end_time": "0-01-47.590000",
                "url": "https://drive.google.com/file/d/114HDYMwZKgiYuvU9Zn5WjmOwkT-CQV37/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "OK, I'll get them for you.",
                "line": 38,
                "start_time": "0-01-47.590000",
                "end_time": "0-01-49.240000",
                "url": "https://drive.google.com/file/d/11Ce3l_Up1mTSiEmBQI2QLYVIbSMUYN2b/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...My breasts are not worthless...",
                "line": 39,
                "start_time": "0-01-51.250000",
                "end_time": "0-01-53.090000",
                "url": "https://drive.google.com/file/d/1iJJDZacHX02hiBR8d0VCzTkwm9ZPag9s/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "My breasts are not worthless...",
                "line": 40,
                "start_time": "0-01-53.220000",
                "end_time": "0-01-55.090000",
                "url": "https://drive.google.com/file/d/1KVTiYug5w4s586I_v6gKN-wumAuxp137/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Neither the Bubble, nor my breasts, shall burst...",
                "line": 41,
                "start_time": "0-01-55.770000",
                "end_time": "0-01-57.690000",
                "url": "https://drive.google.com/file/d/1ThkHFjTEjcS6hdK6mbK0a4AutpWBDaYR/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "What won't burst, you say?",
                "line": 42,
                "start_time": "0-01-57.690000",
                "end_time": "0-01-59.280000",
                "url": "https://drive.google.com/file/d/1ZjFulXW8gEdLVaCTdREfojDgJz14ZzaG/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yeee!",
                "line": 43,
                "start_time": "0-01-59.280000",
                "end_time": "0-01-59.890000",
                "url": "https://drive.google.com/file/d/1VISLRj2keiWOt6kpGHqdUML3r57dzk9E/view?usp=drivesdk"
            }
        ],
        "e12": [
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Here, here, have some!",
                "line": 1,
                "start_time": "0-00-05.550000",
                "end_time": "0-00-06.860000",
                "url": "https://drive.google.com/file/d/1iUQs2NqafEKvI9qu9fAaQ41HlGCHN92S/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "What are you two doing?",
                "line": 2,
                "start_time": "0-00-06.530000",
                "end_time": "0-00-07.860000",
                "url": "https://drive.google.com/file/d/1D8dHsRLZS2t5MpK0opBRs36zkwBJU4oi/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Alpha-sama!",
                "line": 3,
                "start_time": "0-00-07.860000",
                "end_time": "0-00-09.370000",
                "url": "https://drive.google.com/file/d/10o9ePEXrSsFjKUcvWDD4no327R1QKjeq/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Eta is now developing her new burger for \"MagRonald's\"",
                "line": 4,
                "start_time": "0-00-09.730000",
                "end_time": "0-00-13.850000",
                "url": "https://drive.google.com/file/d/18XTSjFh6R06fg769zcMRL7DZG56EEE-6/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, that's why I am here, too.",
                "line": 5,
                "start_time": "0-00-13.850000",
                "end_time": "0-00-16.020000",
                "url": "https://drive.google.com/file/d/1EJaQ8DqxRvElY7mZP_uK80oYV1ADUeL-/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Alpha-sama, you really like MagRonald's, don't you?",
                "line": 6,
                "start_time": "0-00-16.020000",
                "end_time": "0-00-19.470000",
                "url": "https://drive.google.com/file/d/1HVKMMeE-6ej9WPbLiIOOawrEnmdl0JgC/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "True. He likes the taste, too.",
                "line": 7,
                "start_time": "0-00-19.470000",
                "end_time": "0-00-22.530000",
                "url": "https://drive.google.com/file/d/1-FecfUygRKVNyUP-KGfnmxxbjNcXKOCD/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "But this one is going too far...",
                "line": 8,
                "start_time": "0-00-22.530000",
                "end_time": "0-00-24.560000",
                "url": "https://drive.google.com/file/d/1HEEmuD5N5VpkgM1TYLlhV4TZV7GGPVUF/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "This one is... really... groundbreaking...",
                "line": 9,
                "start_time": "0-00-24.560000",
                "end_time": "0-00-27.340000",
                "url": "https://drive.google.com/file/d/1VNF2oxDezVVRKiuYdHlwLZc3YFbDmBtl/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "What's wrong?",
                "line": 10,
                "start_time": "0-00-27.340000",
                "end_time": "0-00-28.560000",
                "url": "https://drive.google.com/file/d/1NRYCrj9Mh1DS5W1wQ_T_IBfHTSs2PtaV/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "New products that Eta have developed so far,",
                "line": 11,
                "start_time": "0-00-28.560000",
                "end_time": "0-00-31.390000",
                "url": "https://drive.google.com/file/d/1NmqyL5Z8sKuZw6wtQVy_LGt5WSQVUG2G/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "They have all been a great success, right?",
                "line": 12,
                "start_time": "0-00-31.390000",
                "end_time": "0-00-33.250000",
                "url": "https://drive.google.com/file/d/1zEiw4t8LVTcpxmszPQuBUKq2vQ_xiHbr/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Sure, \"Kapper\"with charcoal-grilled cucumber slices sandwiched in buns,",
                "line": 13,
                "start_time": "0-00-33.250000",
                "end_time": "0-00-36.520000",
                "url": "https://drive.google.com/file/d/1Z5feGOYzRuX8GdAtELrVzxGEBaJbGeXv/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Or \"Carbohydrate Burger\" with cream croquettes inside,",
                "line": 14,
                "start_time": "0-00-36.520000",
                "end_time": "0-00-39.410000",
                "url": "https://drive.google.com/file/d/1ZRlCDEyr3F6t7Bd0NnQABTqIITh6XXyz/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "All of them were able to offer innovative new tastes, and sold well.",
                "line": 15,
                "start_time": "0-00-39.410000",
                "end_time": "0-00-43.580000",
                "url": "https://drive.google.com/file/d/1c70PY3IaWpbWjzpC0ufcfnjGjNHu9DLK/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "V...",
                "line": 16,
                "start_time": "0-00-43.580000",
                "end_time": "0-00-44.210000",
                "url": "https://drive.google.com/file/d/1RoGtlR0CpVhyMSqd6ntQFPhKg-4KbLKp/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "But this time...",
                "line": 17,
                "start_time": "0-00-44.210000",
                "end_time": "0-00-45.660000",
                "url": "https://drive.google.com/file/d/1xJXwqQK1SnDWSjiuqJVNGyb7Aai1hPkL/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Only this time, frankly...",
                "line": 18,
                "start_time": "0-00-45.660000",
                "end_time": "0-00-48.180000",
                "url": "https://drive.google.com/file/d/1_j0BMEJLtKYJp-6USsNr9lWwljer2phx/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Eta, explain.",
                "line": 19,
                "start_time": "0-00-48.180000",
                "end_time": "0-00-49.570000",
                "url": "https://drive.google.com/file/d/1T1YUyvLfczakibMP-XEGzYNQvBkwNSud/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Hamburger... revolutionizing... its concept...",
                "line": 20,
                "start_time": "0-00-50.020000",
                "end_time": "0-00-53.330000",
                "url": "https://drive.google.com/file/d/1lE2Ml0iYvFmB1oxZ9yy-IZbboUTduJ2E/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Its concept?",
                "line": 21,
                "start_time": "0-00-53.330000",
                "end_time": "0-00-54.430000",
                "url": "https://drive.google.com/file/d/1pXCffMufddrxNtkroZLk-ZvK86U4Vl1G/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Patty... sandwiched by buns...",
                "line": 22,
                "start_time": "0-00-54.430000",
                "end_time": "0-00-56.590000",
                "url": "https://drive.google.com/file/d/12_iLjXzT7YMyqtFCdeEhZStzojv9H_ze/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Turned that concept upside down...",
                "line": 23,
                "start_time": "0-00-56.590000",
                "end_time": "0-00-58.340000",
                "url": "https://drive.google.com/file/d/1E5QRNLIIOlWdKOUzgCR6dlLIce4uIwcp/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Hmmm...",
                "line": 24,
                "start_time": "0-00-58.340000",
                "end_time": "0-00-59.310000",
                "url": "https://drive.google.com/file/d/1iyZgEzmSANadYcEV5HUjMW7HxwPut7Og/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Instead of buns... use Tuna...",
                "line": 25,
                "start_time": "0-00-59.310000",
                "end_time": "0-01-02.010000",
                "url": "https://drive.google.com/file/d/1d1JTfB2B3YU0d6oc1aYiQbO86yLbLQDH/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Fillings are not sandwiched... but rather, sandwich WITH fillings...",
                "line": 26,
                "start_time": "0-01-02.820000",
                "end_time": "0-01-05.920000",
                "url": "https://drive.google.com/file/d/1F_hQbwnQuGUBEgbFAoAvfRPM7RfH2r9_/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...... Interesting...",
                "line": 27,
                "start_time": "0-01-05.920000",
                "end_time": "0-01-07.560000",
                "url": "https://drive.google.com/file/d/1VDI8JjSKxBcy1TG4guU8PZi4jvoCyXGL/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Alpha-sama!",
                "line": 28,
                "start_time": "0-01-07.560000",
                "end_time": "0-01-09.080000",
                "url": "https://drive.google.com/file/d/1kv4q9eIlqtvFm7Giazn9nfjNI3eRVTEx/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Hamburgers, by nature, sandwich fillings with buns.",
                "line": 29,
                "start_time": "0-01-09.080000",
                "end_time": "0-01-11.950000",
                "url": "https://drive.google.com/file/d/1PH0TIrP5L4yLCO1nBMSF25qFAicj09HU/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "So, it tends to become high in calories.",
                "line": 30,
                "start_time": "0-01-11.950000",
                "end_time": "0-01-14.120000",
                "url": "https://drive.google.com/file/d/1gn_vlcdyg36ZobvJLRp6iA0MUrhOK1hc/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "If we are to appeal to female customers...",
                "line": 31,
                "start_time": "0-01-14.120000",
                "end_time": "0-01-16.010000",
                "url": "https://drive.google.com/file/d/1pljdejiUMBVFZQ8VpwNPUUn0bYLmqCWr/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Should be interesting to have a burger where the fillings stand out.",
                "line": 32,
                "start_time": "0-01-16.010000",
                "end_time": "0-01-18.980000",
                "url": "https://drive.google.com/file/d/1OwSTWdHbHFECxRPwqNYJLEX_KXM_XywM/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "That might well be so... but...",
                "line": 33,
                "start_time": "0-01-18.980000",
                "end_time": "0-01-21.690000",
                "url": "https://drive.google.com/file/d/1NPgsU08jLI2u7kQU24pCW7fmM-O0fnb2/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "So, Eta, what do you sandwich inside",
                "line": 34,
                "start_time": "0-01-22.350000",
                "end_time": "0-01-25.640000",
                "url": "https://drive.google.com/file/d/1HJv32uIORiRh9NMbDVGF9RiJSAIYtL7M/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Sandwich... rice...",
                "line": 35,
                "start_time": "0-01-25.640000",
                "end_time": "0-01-27.920000",
                "url": "https://drive.google.com/file/d/1Xg23drAviUsAZpR73NB6GtC93FDJdKmQ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Excellent. That combination is exquisite.",
                "line": 36,
                "start_time": "0-01-27.920000",
                "end_time": "0-01-30.530000",
                "url": "https://drive.google.com/file/d/1V4s8e_nKC7Rvu0J8knjGwnm1KYV2L34j/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But with heat, they will go bad quickly, so they should be cooled down.",
                "line": 37,
                "start_time": "0-01-30.530000",
                "end_time": "0-01-34.030000",
                "url": "https://drive.google.com/file/d/1kBvWEA8YmAPAjei-hTOBlZal544jH7UI/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Considering preservation... mix in vinegar...",
                "line": 38,
                "start_time": "0-01-34.030000",
                "end_time": "0-01-36.840000",
                "url": "https://drive.google.com/file/d/1mBvUBdlLpfxnImWVPl6UjNEhnqk_n4Bm/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "What do you have in mind for the sauce?",
                "line": 39,
                "start_time": "0-01-36.840000",
                "end_time": "0-01-38.850000",
                "url": "https://drive.google.com/file/d/1NwKhgn8kscR-AtJ2TtTu6LQ4cC5x12cw/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Japanese style... Soy Sauce is best...",
                "line": 40,
                "start_time": "0-01-38.850000",
                "end_time": "0-01-41.390000",
                "url": "https://drive.google.com/file/d/1vxXfkhy-q2sqvwhCJtHfDRq6bPKUtmq4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Right. And then, we want some kind of accent.",
                "line": 41,
                "start_time": "0-01-41.390000",
                "end_time": "0-01-44.300000",
                "url": "https://drive.google.com/file/d/1npsmdhAYYkjz1w3jYqxjkNX6EuywUYj8/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "If we are to add something...",
                "line": 42,
                "start_time": "0-01-44.300000",
                "end_time": "0-01-45.930000",
                "url": "https://drive.google.com/file/d/1ae4FP3LfWqZ3UWoLfMyBCsanUwRvrMJX/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Wasabi horseradish...",
                "line": 43,
                "start_time": "0-01-45.930000",
                "end_time": "0-01-47.010000",
                "url": "https://drive.google.com/file/d/1ya5_TozDX0H3dDdssWqS-7FzUc2IjAWr/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Perfect. We need to choose a name for this...",
                "line": 44,
                "start_time": "0-01-47.010000",
                "end_time": "0-01-50.250000",
                "url": "https://drive.google.com/file/d/17zo6UUCh-zdh1RGO9e3M2We5lZ2WrHL6/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "A simple one would be preferable",
                "line": 45,
                "start_time": "0-01-50.250000",
                "end_time": "0-01-52.190000",
                "url": "https://drive.google.com/file/d/1Xa8qEDf2MkCsVj4smIm9wmSEns7anud7/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha & Eta (Alpha)",
                "subtitle": "... \"Sushi?\"",
                "line": 46,
                "start_time": "0-01-54.310000",
                "end_time": "0-01-55.100000",
                "url": "https://drive.google.com/file/d/1ctjjM7mapIF-6wvh5KMkNm3pvDltZHMa/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Alpha & Eta (Eta)",
                "subtitle": "... \"Sushi?\"",
                "line": 46,
                "start_time": "0-01-54.310000",
                "end_time": "0-01-55.100000",
                "url": "https://drive.google.com/file/d/1ctjjM7mapIF-6wvh5KMkNm3pvDltZHMa/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Launched them at a separate line of restaurants, and they proved to be a hit!",
                "line": 47,
                "start_time": "0-01-55.600000",
                "end_time": "0-01-58.190000",
                "url": "https://drive.google.com/file/d/1YO6K9cNul9OB9XTJuLHPy4B9liYFGgNf/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "V!",
                "line": 48,
                "start_time": "0-01-58.190000",
                "end_time": "0-01-58.720000",
                "url": "https://drive.google.com/file/d/1iJCqE58mSDbXZBLKbIYj5aQH0XfThSl9/view?usp=drivesdk"
            }
        ],
        "e13": [
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "This tastes good!",
                "line": 1,
                "start_time": "0-00-05.610000",
                "end_time": "0-00-06.840000",
                "url": "https://drive.google.com/file/d/1P9MckqimHU_ScqElHU8Z7LsDqWb88uLS/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Told you so!",
                "line": 2,
                "start_time": "0-00-06.840000",
                "end_time": "0-00-07.610000",
                "url": "https://drive.google.com/file/d/1pWo1L66x94FSqwDcVcyvQ35cN3OtJz76/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Right, when I first heard how you make this, I was astonished, but...",
                "line": 3,
                "start_time": "0-00-07.610000",
                "end_time": "0-00-11.220000",
                "url": "https://drive.google.com/file/d/1ijkOlS0UX9tr8aHgspvKDdSUyFcyQ70B/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "No way can you guess it causes a chemical reaction like this!",
                "line": 4,
                "start_time": "0-00-11.220000",
                "end_time": "0-00-13.860000",
                "url": "https://drive.google.com/file/d/1oUcAgk6WNZu_bvOezAQBOrq7fipEqMRv/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "That's true!",
                "line": 5,
                "start_time": "0-00-13.860000",
                "end_time": "0-00-14.770000",
                "url": "https://drive.google.com/file/d/1GSMRiHgDxU6TPdOHuL_vIvJaRWLZjBPg/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Ah?",
                "line": 6,
                "start_time": "0-00-14.770000",
                "end_time": "0-00-15.540000",
                "url": "https://drive.google.com/file/d/1xx99hzOzSmOV2HJzckx5QgHjkoXJlFeo/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Zeta!",
                "line": 7,
                "start_time": "0-00-15.540000",
                "end_time": "0-00-16.380000",
                "url": "https://drive.google.com/file/d/1vE4Yq5Glg9CrncuzpzgqjsjAn6EHFifg/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Hi there.",
                "line": 8,
                "start_time": "0-00-16.380000",
                "end_time": "0-00-16.980000",
                "url": "https://drive.google.com/file/d/1yL8S0auXF-Ocsff--CF8gGw_qJi8HwPx/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Oh! When did you arrive here?",
                "line": 9,
                "start_time": "0-00-16.980000",
                "end_time": "0-00-19.020000",
                "url": "https://drive.google.com/file/d/1VoT52X_BIc_rU-8UrnJhbJ32GnstGksG/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Really, Gamma, you are...",
                "line": 10,
                "start_time": "0-00-19.020000",
                "end_time": "0-00-20.670000",
                "url": "https://drive.google.com/file/d/1J2K7hXPbzRXqm2GzWoJGoYVchZzlXCoI/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Zeta, I just heard that you were the one who went to get these coffee beans.",
                "line": 11,
                "start_time": "0-00-20.670000",
                "end_time": "0-00-25.210000",
                "url": "https://drive.google.com/file/d/1J0GjMWhkxTQ7Z6PnQ8j_E3-iO5eNMRfZ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "They taste very good, and above all, the aroma is exquisite!",
                "line": 12,
                "start_time": "0-00-25.210000",
                "end_time": "0-00-27.660000",
                "url": "https://drive.google.com/file/d/1_j10l4-GTmVkfYq3ft8x4rOimCJoh-cb/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Yes, they are, right!",
                "line": 13,
                "start_time": "0-00-27.660000",
                "end_time": "0-00-28.710000",
                "url": "https://drive.google.com/file/d/1ZVvYsxnwIAjcNLI2b4St_HPwJIVQSJ7j/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Eh?",
                "line": 14,
                "start_time": "0-00-29.090000",
                "end_time": "0-00-29.590000",
                "url": "https://drive.google.com/file/d/1nXU-ynKC_YaWaJZiwlwgI5T6JbTx-lTr/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I think the aroma of these beans is really wonderful",
                "line": 15,
                "start_time": "0-00-29.590000",
                "end_time": "0-00-32.970000",
                "url": "https://drive.google.com/file/d/1dhTobrIO3mAKq9SKpCT20SXseJDqEjFd/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yeah, that's what I am telling you, too",
                "line": 16,
                "start_time": "0-00-32.970000",
                "end_time": "0-00-34.850000",
                "url": "https://drive.google.com/file/d/10dHdVxgFQHObuBAMslO0vCCLcmUrZEZT/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "But that stupid Doggy...",
                "line": 17,
                "start_time": "0-00-34.850000",
                "end_time": "0-00-37.050000",
                "url": "https://drive.google.com/file/d/1QlofXegZ0Ul3JK1vbv6K4LsIiFUcfmQj/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Did something happen between you and Delta?",
                "line": 18,
                "start_time": "0-00-37.050000",
                "end_time": "0-00-38.770000",
                "url": "https://drive.google.com/file/d/16HWGyBAHDY0gb-ZSV0MCEceaWt3PMaOU/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "A while ago, she and Delta were being playful over these coffee beans.",
                "line": 19,
                "start_time": "0-00-38.770000",
                "end_time": "0-00-43.310000",
                "url": "https://drive.google.com/file/d/1gfYZSILk_cUKXfOhxNV4cLxxIWAwJZdk/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "We were not being playful!",
                "line": 20,
                "start_time": "0-00-43.310000",
                "end_time": "0-00-45.540000",
                "url": "https://drive.google.com/file/d/14TldvptX4HI8yeY_lJBewSKSM-2qdmgo/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "She is always a total moron, and I feel ashamed as a fellow beast-kin.",
                "line": 21,
                "start_time": "0-00-45.540000",
                "end_time": "0-00-49.530000",
                "url": "https://drive.google.com/file/d/1xj8Jr1WaZj1ApKlltfhVb8gimlfhPRb7/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "But she is a cheerful, nice girl",
                "line": 22,
                "start_time": "0-00-49.530000",
                "end_time": "0-00-51.480000",
                "url": "https://drive.google.com/file/d/1Lbq-eEjDCco-uTJ0diRdXSyT-pwHcL4J/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Delta being such, you don't hate her at all, do you, Zeta?",
                "line": 23,
                "start_time": "0-00-52.060000",
                "end_time": "0-00-55.820000",
                "url": "https://drive.google.com/file/d/1wP6mW_LkXRUD9uDaMKrTUl9-hTEZVzd-/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I do not like her!",
                "line": 24,
                "start_time": "0-00-55.820000",
                "end_time": "0-00-56.610000",
                "url": "https://drive.google.com/file/d/1b40c4IChKPjGxFQQqBwBkxGBFA5Y1nwE/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Fond of each other so much that you can't help quibbling",
                "line": 25,
                "start_time": "0-00-56.610000",
                "end_time": "0-00-59.420000",
                "url": "https://drive.google.com/file/d/1Pg-1dKic4H2RvQKGCSSVgiJu7rREfZ_K/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I don't like her at all!",
                "line": 26,
                "start_time": "0-00-59.420000",
                "end_time": "0-01-00.420000",
                "url": "https://drive.google.com/file/d/18Zb0pF05sCGV0I5lRBdRnr5O8swgLu0S/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "You can spat only with someone you are really fond of.",
                "line": 27,
                "start_time": "0-01-00.420000",
                "end_time": "0-01-03.170000",
                "url": "https://drive.google.com/file/d/1Oa3g8dq5Y5_GuMKHG-2Q4fNmxsS-fmok/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Well, that's true",
                "line": 28,
                "start_time": "0-01-03.170000",
                "end_time": "0-01-05.100000",
                "url": "https://drive.google.com/file/d/1WphAA0EsdMh_3Uaxq0cNyJ2dzZVW0GK2/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Like Beta and Epsilon!",
                "line": 29,
                "start_time": "0-01-05.980000",
                "end_time": "0-01-09.130000",
                "url": "https://drive.google.com/file/d/1_R4m7_dC3Un7m-Ph8iHDbnyz6qp2Ibsd/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Bghhh!",
                "line": 30,
                "start_time": "0-01-08.340000",
                "end_time": "0-01-09.130000",
                "url": "https://drive.google.com/file/d/11VT7hBMqcjPmS_ROqL7PXXrAXDEDf4TY/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Me and Epsilon?",
                "line": 31,
                "start_time": "0-01-09.910000",
                "end_time": "0-01-11.480000",
                "url": "https://drive.google.com/file/d/1b2wy0NDiheuh_zEIVv6Mxs-qfNsQC36b/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Yes, you two are always being playful with each other.",
                "line": 32,
                "start_time": "0-01-11.480000",
                "end_time": "0-01-13.810000",
                "url": "https://drive.google.com/file/d/1Mj0wuzhlzTiuB0MxxLajazIMpJH9hzDk/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I...In certain respects, I don't share the same curves, so to speak, with Epsilon, that's all...",
                "line": 33,
                "start_time": "0-01-13.810000",
                "end_time": "0-01-19.130000",
                "url": "https://drive.google.com/file/d/1oouMehgiStKbknsfZ0Vya1E87RsE6DVO/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Curves?",
                "line": 34,
                "start_time": "0-01-19.130000",
                "end_time": "0-01-20.340000",
                "url": "https://drive.google.com/file/d/17AJC0703hqeo9HwyNWhNBjhLc76gRZoJ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Curves, or rather, the matter in question is about our bulges, but...",
                "line": 35,
                "start_time": "0-01-20.340000",
                "end_time": "0-01-23.360000",
                "url": "https://drive.google.com/file/d/1QAP4eMFqK_Eyx2V2uStE4YYVo4FYK7o4/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Well...how can I explain it...",
                "line": 36,
                "start_time": "0-01-23.360000",
                "end_time": "0-01-25.270000",
                "url": "https://drive.google.com/file/d/1CP4AO_deiH343gnhInDko0YU1lxemllI/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "It is good that you get along well!",
                "line": 37,
                "start_time": "0-01-25.270000",
                "end_time": "0-01-27.610000",
                "url": "https://drive.google.com/file/d/12659EB_gvZOwQyjftpzEIjuIr3TA4bQT/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Uhm, yes...Better than being on bad terms...guess it is much better...",
                "line": 38,
                "start_time": "0-01-27.610000",
                "end_time": "0-01-32.070000",
                "url": "https://drive.google.com/file/d/1ciPNI0oPeBaj69OOw7Rctxys3363qC6q/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I wish I had someone I could spat with, too.",
                "line": 39,
                "start_time": "0-01-32.540000",
                "end_time": "0-01-36.310000",
                "url": "https://drive.google.com/file/d/1b1EPktub9mUj4uFXtopkcyPB8QQD_uWo/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I see no particular need for you to find one.",
                "line": 40,
                "start_time": "0-01-36.310000",
                "end_time": "0-01-38.730000",
                "url": "https://drive.google.com/file/d/1rPZ1cCBTfgQ6ceWmvGNLX6tnSnBMxvH7/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Oh, why not? It would be nice,having a spat over silly things.",
                "line": 41,
                "start_time": "0-01-38.730000",
                "end_time": "0-01-41.850000",
                "url": "https://drive.google.com/file/d/1XR3B_hNWBhFwvIlMWG7-Fn4IuVwhfmJR/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "\"What's that?\"\"Asking for a fight, huh?\"...That kind of stuff.",
                "line": 42,
                "start_time": "0-01-41.850000",
                "end_time": "0-01-44.360000",
                "url": "https://drive.google.com/file/d/17gdeK8p6bNcU3ceXqxD3qpsGYoblxMU6/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Uh, that is...",
                "line": 43,
                "start_time": "0-01-44.360000",
                "end_time": "0-01-45.350000",
                "url": "https://drive.google.com/file/d/124KYaZA5V5t9gXGVeg9BaNlFm6vtoJpO/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "So what?",
                "line": 44,
                "start_time": "0-01-45.350000",
                "end_time": "0-01-46.120000",
                "url": "https://drive.google.com/file/d/1ghLAYI7bvvikf0KccLQefuV4QpWPWzAV/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Do you make talk like \"Gamma is impossible since she lacks athletic reflexes?\"",
                "line": 45,
                "start_time": "0-01-46.120000",
                "end_time": "0-01-49.930000",
                "url": "https://drive.google.com/file/d/1cOc_s4udjVn0US2V_slFBiRvthFcxWnq/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Stop it! Not getting comments at all makes me miserable just the same!",
                "line": 46,
                "start_time": "0-01-51.740000",
                "end_time": "0-01-55.090000",
                "url": "https://drive.google.com/file/d/1x4MStjJJtH0ARWhGAubxfr4QRi-HpgB3/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Waaah!",
                "line": 47,
                "start_time": "0-01-55.500000",
                "end_time": "0-01-56.520000",
                "url": "https://drive.google.com/file/d/1DJ2SSdaHVjBi9T7QzbEma11k417lO1qh/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "This is impossible...",
                "line": 48,
                "start_time": "0-01-56.520000",
                "end_time": "0-01-57.640000",
                "url": "https://drive.google.com/file/d/1JT5fKX-KXPdfSI2wiOIo_EhgpgLX5f91/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Indeed!",
                "line": 49,
                "start_time": "0-01-57.640000",
                "end_time": "0-01-58.780000",
                "url": "https://drive.google.com/file/d/1kgctjB7M0fg86qNR_6zyw3nbHxXeZdCc/view?usp=drivesdk"
            }
        ],
        "e14": [
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "As always, Epsilon has a nice figure♪",
                "line": 1,
                "start_time": "0-00-05.530000",
                "end_time": "0-00-08.210000",
                "url": "https://drive.google.com/file/d/16Uuu9XVrJtNd3tKkloIzIDHoQ4r9NxMV/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "As always, Epsilon has a nice figure♪",
                "line": 2,
                "start_time": "0-00-08.210000",
                "end_time": "0-00-10.890000",
                "url": "https://drive.google.com/file/d/1BWN-pDKX7qVO4OlQhh__QDWBumjf65N7/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Epsilon, what's up with you?",
                "line": 3,
                "start_time": "0-00-08.840000",
                "end_time": "0-00-10.890000",
                "url": "https://drive.google.com/file/d/1nQTS_vxFDXgWicZmSCSIs23HbMLduPcj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "As always, Epsilon has a nice figure♪",
                "line": 3,
                "start_time": "0-00-08.840000",
                "end_time": "0-00-10.890000",
                "url": "https://drive.google.com/file/d/1nQTS_vxFDXgWicZmSCSIs23HbMLduPcj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hehehe...Delta, how are you doing?",
                "line": 4,
                "start_time": "0-00-10.890000",
                "end_time": "0-00-13.350000",
                "url": "https://drive.google.com/file/d/1pNx7gphPPWsBXA6eH-6BAYz-VCDKHuUJ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Delta is always doing great!",
                "line": 5,
                "start_time": "0-00-13.350000",
                "end_time": "0-00-15.400000",
                "url": "https://drive.google.com/file/d/1sBQljrdsxiJZlrzJmgzUa1EMVhEDsyTB/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Epsilon, you are skipping, so you are in a good mood, too.",
                "line": 6,
                "start_time": "0-00-15.400000",
                "end_time": "0-00-18.160000",
                "url": "https://drive.google.com/file/d/1ITzAC-TAP0Cd4-pX9BsKLPu1KcWB1RBO/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes, I am, I tell you!",
                "line": 7,
                "start_time": "0-00-18.160000",
                "end_time": "0-00-20.110000",
                "url": "https://drive.google.com/file/d/1n8HzteudHwpGgMcb6kEb1TwYSmcTpX56/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Guess what?",
                "line": 8,
                "start_time": "0-00-20.110000",
                "end_time": "0-00-21.410000",
                "url": "https://drive.google.com/file/d/1Yg7jzwyz8QtO8MU_R6KBfubG-m0fSzUQ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I am getting hungry, so I am off to eat my lunch.",
                "line": 9,
                "start_time": "0-00-21.410000",
                "end_time": "0-00-23.870000",
                "url": "https://drive.google.com/file/d/1b1HjZ1GdKV3mnG18YxPjQRDoSUj0jO5J/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hear me out. It will only take a minute.",
                "line": 10,
                "start_time": "0-00-23.870000",
                "end_time": "0-00-27.130000",
                "url": "https://drive.google.com/file/d/1iSI8hvsvexXKEcRmQ5TCWg2SnhiNdRin/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Uhm?",
                "line": 11,
                "start_time": "0-00-27.130000",
                "end_time": "0-00-27.520000",
                "url": "https://drive.google.com/file/d/1o83DSn9Z-gpoRWE0E9No8Adyv6CIrZ2y/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What happened?",
                "line": 12,
                "start_time": "0-00-27.580000",
                "end_time": "0-00-28.820000",
                "url": "https://drive.google.com/file/d/1wRscbXFGVYVweXB_bpmtNMmWu57FH_Lu/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "The reason that I am in a good mood is...",
                "line": 13,
                "start_time": "0-00-28.820000",
                "end_time": "0-00-31.630000",
                "url": "https://drive.google.com/file/d/1HTIVqPN29GGceS87YMzwUUwan6EE7rgV/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Oh!",
                "line": 14,
                "start_time": "0-00-31.630000",
                "end_time": "0-00-32.210000",
                "url": "https://drive.google.com/file/d/1osFdm60zALGdOmR-nQlgeFhdzmhx2j65/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "MagRonald's \"Limited Time Special Menu\" starts today!",
                "line": 15,
                "start_time": "0-00-32.210000",
                "end_time": "0-00-35.150000",
                "url": "https://drive.google.com/file/d/1_MM00_uGEB--m-QF6UHC01tBFqF4jaE-/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hear me out. Just for a minute.",
                "line": 16,
                "start_time": "0-00-35.150000",
                "end_time": "0-00-37.610000",
                "url": "https://drive.google.com/file/d/1g1uqEa6K0_jmxMtf0UU0RntdwVZflBVC/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I have a promise with Alpha-sama to eat together!",
                "line": 17,
                "start_time": "0-00-37.610000",
                "end_time": "0-00-40.710000",
                "url": "https://drive.google.com/file/d/16UuxoXnJT1Qpr7Zs0q34RWMGc7YShRCz/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Is that so?",
                "line": 18,
                "start_time": "0-00-40.710000",
                "end_time": "0-00-41.830000",
                "url": "https://drive.google.com/file/d/1Xh8C7y4BlPLZA2eqr3KKXZc4NZIYURZQ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But hear me out, just for a minute.",
                "line": 19,
                "start_time": "0-00-41.830000",
                "end_time": "0-00-44.870000",
                "url": "https://drive.google.com/file/d/1OzaUbXGHmLtAEOeeHm_2olQCJEbUthdl/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Uhm...",
                "line": 20,
                "start_time": "0-00-44.870000",
                "end_time": "0-00-45.830000",
                "url": "https://drive.google.com/file/d/1N4v69EBrMoOPFQxcsJlY83bkhSWiQjvU/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "yeah, if it is just for a minute.",
                "line": 21,
                "start_time": "0-00-45.830000",
                "end_time": "0-00-47.850000",
                "url": "https://drive.google.com/file/d/1IzhFVqtAd6INhqbvNG20sEs2-YbpktDi/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "So, what happened?",
                "line": 22,
                "start_time": "0-00-47.850000",
                "end_time": "0-00-49.110000",
                "url": "https://drive.google.com/file/d/1EkJK9iuT6Q-0pui9H8dAJxCLOT2-eGIU/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Guess what? Shadow-sama...",
                "line": 23,
                "start_time": "0-00-49.110000",
                "end_time": "0-00-51.230000",
                "url": "https://drive.google.com/file/d/1FprsCJy7u8H2-FMS2flW71nEGH6Pv_mh/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Praised me that \"Epsilon has a nice figure♪\"",
                "line": 24,
                "start_time": "0-00-51.230000",
                "end_time": "0-00-54.990000",
                "url": "https://drive.google.com/file/d/1kDTIGEDefMVLJavto00glu8vNioZhh_P/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Me, mind you, I am no big deal there, but,",
                "line": 25,
                "start_time": "0-00-54.990000",
                "end_time": "0-00-58.910000",
                "url": "https://drive.google.com/file/d/1DMfHVniSGm7-WqKdN3UpIWTgRMEDtfSS/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Shadow-sama is really too kind for saying so!",
                "line": 26,
                "start_time": "0-00-58.910000",
                "end_time": "0-01-01.550000",
                "url": "https://drive.google.com/file/d/1mX7DPSskdoIeGghhyoJfHhlkobI4zH_L/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "That is totally right.",
                "line": 27,
                "start_time": "0-01-01",
                "end_time": "0-01-02.560000",
                "url": "https://drive.google.com/file/d/1hGmRErylb_ZrWzpKF1NtDmXiVQcZM83U/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Eh?",
                "line": 28,
                "start_time": "0-01-02.560000",
                "end_time": "0-01-03.060000",
                "url": "https://drive.google.com/file/d/1I7jhwjeCuB8Cn6qkRyyLVFHGCBgCqO20/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Epsilon, you have too much useless flesh on you.",
                "line": 29,
                "start_time": "0-01-03.460000",
                "end_time": "0-01-06.210000",
                "url": "https://drive.google.com/file/d/1Di0GaR9geDmRhNdX9DMlfmO4ZKsxPNIK/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "You should increase your muscles, like Delta!",
                "line": 30,
                "start_time": "0-01-06.210000",
                "end_time": "0-01-09.930000",
                "url": "https://drive.google.com/file/d/1k355K1Lv2hz5dx5bK1qb97ZUnS7FQjwd/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Uhm...",
                "line": 31,
                "start_time": "0-01-09.930000",
                "end_time": "0-01-10.760000",
                "url": "https://drive.google.com/file/d/186TagzUwoiMj8MbypQqtenQVU6sm6BPm/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "That isn't what...",
                "line": 32,
                "start_time": "0-01-10.760000",
                "end_time": "0-01-12.100000",
                "url": "https://drive.google.com/file/d/10IbW0HcqaQIbW7lAQtbt3XinFDTJ3721/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Is that all?",
                "line": 33,
                "start_time": "0-01-12.100000",
                "end_time": "0-01-13.410000",
                "url": "https://drive.google.com/file/d/1WPZ55OHuTCSMjDULxHcraAuPVgVK1oXo/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I am hungry.",
                "line": 34,
                "start_time": "0-01-13.410000",
                "end_time": "0-01-15.050000",
                "url": "https://drive.google.com/file/d/1gAtAuadQP8pz-kNkUWx0k67ILhglJVP1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Uh...",
                "line": 35,
                "start_time": "0-01-15.050000",
                "end_time": "0-01-16.030000",
                "url": "https://drive.google.com/file/d/1qc8ZuIql7HWAUbh6pcep9bw2hL3s5qGc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "yeah, that would be all.",
                "line": 36,
                "start_time": "0-01-16.030000",
                "end_time": "0-01-17.310000",
                "url": "https://drive.google.com/file/d/1P09Rq1usXgIVQv9-GoasxPlQWrD5jtpY/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Thank you.",
                "line": 37,
                "start_time": "0-01-17.310000",
                "end_time": "0-01-18.430000",
                "url": "https://drive.google.com/file/d/1bZIS8IFsOP0gBYTgl09uHHS6ugw3pocy/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "So then, I am going now!",
                "line": 38,
                "start_time": "0-01-18.430000",
                "end_time": "0-01-19.900000",
                "url": "https://drive.google.com/file/d/1tpVtN1sy-BS6SS0OdpE_FfFtNKhuals2/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "On second thought, in the end this is for \"her\"only...",
                "line": 39,
                "start_time": "0-01-22.290000",
                "end_time": "0-01-24.610000",
                "url": "https://drive.google.com/file/d/13AxDYVz5dX66__WxuzmoV2cYwhsMzxn3/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "\"As always...\"",
                "line": 40,
                "start_time": "0-01-26.150000",
                "end_time": "0-01-27.750000",
                "url": "https://drive.google.com/file/d/1vsDA67Q4hUhB4FdjJaJfQZQstqFunJ11/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "\"As always, Epsilon...\"",
                "line": 41,
                "start_time": "0-01-27.900000",
                "end_time": "0-01-29.100000",
                "url": "https://drive.google.com/file/d/1Ud0FO4U72EMJhn2rOBkqQ_NEGRy4Xygo/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "\"Epsilon has a shapely figure today\"",
                "line": 42,
                "start_time": "0-01-29.230000",
                "end_time": "0-01-31.320000",
                "url": "https://drive.google.com/file/d/1xHWeTQAXuPNzySu2mkyJ_ktdkQQGbBTY/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...that was it?",
                "line": 43,
                "start_time": "0-01-31.320000",
                "end_time": "0-01-32.410000",
                "url": "https://drive.google.com/file/d/1QUwWm7IrZtG9-czoVSmUaqCdLWy1ll1Z/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Yes...",
                "line": 44,
                "start_time": "0-01-32.410000",
                "end_time": "0-01-33.280000",
                "url": "https://drive.google.com/file/d/1FlNFtQL85Sw5BY-ChO7hE2Iinv27-Nq8/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Uhm, Nu?",
                "line": 45,
                "start_time": "0-01-33.280000",
                "end_time": "0-01-35.030000",
                "url": "https://drive.google.com/file/d/1srTXQFv7RLSm-chqIjj-GM9EWrAsgbQ1/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Yes?",
                "line": 46,
                "start_time": "0-01-35.030000",
                "end_time": "0-01-35.840000",
                "url": "https://drive.google.com/file/d/17AFcPG8rDIjFdRiVHH9vc8LlrEhcd7cx/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "So, in order to report only just that,",
                "line": 47,
                "start_time": "0-01-35.840000",
                "end_time": "0-01-38.550000",
                "url": "https://drive.google.com/file/d/1XxeXPn0-VCQV3T4DkNB5Zc9NKgkzzGgY/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Epsilon sent you to me?",
                "line": 48,
                "start_time": "0-01-38.550000",
                "end_time": "0-01-41.120000",
                "url": "https://drive.google.com/file/d/1QcdgsbuwRyON894EW8zthN6scvolEN-_/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "They were words from Shadow-sama,",
                "line": 49,
                "start_time": "0-01-41.120000",
                "end_time": "0-01-43.510000",
                "url": "https://drive.google.com/file/d/1lZLBV5KGeNNoCCt3z1__nMCK5rVAYTgW/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "so it must be some kind of code...",
                "line": 50,
                "start_time": "0-01-43.510000",
                "end_time": "0-01-44.950000",
                "url": "https://drive.google.com/file/d/1TzJdWRi1QIqR7IuBDldlh8OjW-6_3sht/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Nu?",
                "line": 51,
                "start_time": "0-01-44.950000",
                "end_time": "0-01-45.900000",
                "url": "https://drive.google.com/file/d/1bNbjND1ko8nrR52agI8_QW_fPlWCmKVY/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Yes?",
                "line": 52,
                "start_time": "0-01-45.900000",
                "end_time": "0-01-46.750000",
                "url": "https://drive.google.com/file/d/1S87wztfrYp_aRCZ2FRL8nDBi8tTKGo3l/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Thank you for your trouble...",
                "line": 53,
                "start_time": "0-01-47.370000",
                "end_time": "0-01-49",
                "url": "https://drive.google.com/file/d/12vZ8FmqKUfX7tsFL3z5cmYdeGR7mABvt/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "You may leave now.",
                "line": 54,
                "start_time": "0-01-49",
                "end_time": "0-01-50.250000",
                "url": "https://drive.google.com/file/d/1Xhd1Lpz2QpZn144uM5DgdZip07jW5jrK/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Yes, I will excuse myself now...",
                "line": 55,
                "start_time": "0-01-50.250000",
                "end_time": "0-01-52.090000",
                "url": "https://drive.google.com/file/d/1sjrOE-Xf992SOhgE8xChDqUVcowaf7xM/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Hnnnngggghhhh!!",
                "line": 56,
                "start_time": "0-01-55.720000",
                "end_time": "0-01-57.500000",
                "url": "https://drive.google.com/file/d/1VlRfED1mRZu_NHjPZpVQTw2J3otrbwL1/view?usp=drivesdk"
            }
        ],
        "e15": [
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "No surprise, but Epsilon, you are amazing!",
                "line": 1,
                "start_time": "0-00-07.450000",
                "end_time": "0-00-09.660000",
                "url": "https://drive.google.com/file/d/1pxSi-LtpppEXwC56RA65gFp-z3FP3ItE/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Thank you",
                "line": 2,
                "start_time": "0-00-09.660000",
                "end_time": "0-00-10.820000",
                "url": "https://drive.google.com/file/d/1GBqYaLvgyUg6N8o1eMyL3emKwfmM8S5F/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But you know who is really amazing?",
                "line": 3,
                "start_time": "0-00-10.820000",
                "end_time": "0-00-11.250000",
                "url": "https://drive.google.com/file/d/1KaBN7UG8_SWsc8RsnpiNRru4k3AdX_3_/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "It is Shadow-sama, who knows so many excellent pieces of music like this!",
                "line": 4,
                "start_time": "0-00-11.550000",
                "end_time": "0-00-15.250000",
                "url": "https://drive.google.com/file/d/1wgELG85fMHZO-la62eehLSiDfo3ApxSl/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I can never perform with so much emotion like you do...",
                "line": 5,
                "start_time": "0-00-15.250000",
                "end_time": "0-00-18.500000",
                "url": "https://drive.google.com/file/d/1V1otzqOLqwmReR0vmhZ2AtPT6z5cD8Dv/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Hey, Doggie!",
                "line": 6,
                "start_time": "0-00-18.500000",
                "end_time": "0-00-19.920000",
                "url": "https://drive.google.com/file/d/1_vx89_8QCS96jxdI5S5cd8Bco8rxZY9n/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Yaaawwwnn, is it over?",
                "line": 7,
                "start_time": "0-00-19.920000",
                "end_time": "0-00-21.790000",
                "url": "https://drive.google.com/file/d/10-Fc2Yec0oQ02tFP2O26DwU0O3JLODSg/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Really...",
                "line": 8,
                "start_time": "0-00-21.790000",
                "end_time": "0-00-22.840000",
                "url": "https://drive.google.com/file/d/15D4P_snRAn7XStYfnT-uB6qHp-nyptv9/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Delta gets sleepy listening to a music piece like this.",
                "line": 9,
                "start_time": "0-00-22.840000",
                "end_time": "0-00-26.420000",
                "url": "https://drive.google.com/file/d/1QPE5vpMnRE8sAsZ_xqWd2EcxPHA_xYGy/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "If Epsilon played a piece that isn't drowsy, Delta wouldn't fall asleep!",
                "line": 10,
                "start_time": "0-00-26.420000",
                "end_time": "0-00-30.510000",
                "url": "https://drive.google.com/file/d/1hTwCDNK7-DxQBjES2foAwV-psSCL6m2X/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Like what?",
                "line": 11,
                "start_time": "0-00-30.510000",
                "end_time": "0-00-31.430000",
                "url": "https://drive.google.com/file/d/16kw0A5oiT0pXnobkAGJQqPFiauh-DlOF/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Like the one that goes \"Da-Da-Da-Daaam!\"",
                "line": 12,
                "start_time": "0-00-31.430000",
                "end_time": "0-00-33.430000",
                "url": "https://drive.google.com/file/d/1TkLU3wnG6yeB2t2tiRKSVbdGaGqhtZFw/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "The \"Symphony of Fate\", right?",
                "line": 13,
                "start_time": "0-00-33.430000",
                "end_time": "0-00-34.510000",
                "url": "https://drive.google.com/file/d/1dqvrltqru8HpI7yXZtPeNen29k4KqQa6/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "That piece hits Delta right in the feels!",
                "line": 14,
                "start_time": "0-00-34.510000",
                "end_time": "0-00-37.310000",
                "url": "https://drive.google.com/file/d/1vNat5dxpWkNNvYdvm-cCS6472ELT3HCz/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "True, that one expresses the amazing encounter between us Seven Shades and Master!",
                "line": 15,
                "start_time": "0-00-37.310000",
                "end_time": "0-00-42.690000",
                "url": "https://drive.google.com/file/d/167dCReOgzg2_lPuk5TZn5mlPLTQzqGQs/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Your expression is poetic!",
                "line": 16,
                "start_time": "0-00-42.690000",
                "end_time": "0-00-44.150000",
                "url": "https://drive.google.com/file/d/1kEq6pTOCm0OHGlb_b_iNbGAJ84FOEzHM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hahaha, thank you!",
                "line": 17,
                "start_time": "0-00-44.150000",
                "end_time": "0-00-45.530000",
                "url": "https://drive.google.com/file/d/18Y9S1Vx8Ib_5wKzX-TKMFdIXZFdCEq-w/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "And you, Zeta?",
                "line": 18,
                "start_time": "0-00-45.530000",
                "end_time": "0-00-46.610000",
                "url": "https://drive.google.com/file/d/116LUHlgGM6Mk28Pe6TsW1cpou6s_o4TW/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "And I also like \"Waltz of the Puppy\"!",
                "line": 19,
                "start_time": "0-00-45.860000",
                "end_time": "0-00-48.110000",
                "url": "https://drive.google.com/file/d/1pg3vW5OwsRHvOiBsR2Z_tqBCAshV36IM/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Don't cut into our conversation!",
                "line": 20,
                "start_time": "0-00-48.110000",
                "end_time": "0-00-50.030000",
                "url": "https://drive.google.com/file/d/1gbpQ_MvPXgBSUYwjj4H0Mj2jNu7w-vkf/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I feel like dancing when I hear that piece!",
                "line": 21,
                "start_time": "0-00-49.360000",
                "end_time": "0-00-52.070000",
                "url": "https://drive.google.com/file/d/1SrBk-my4VIVf_Je9LshBES4R5Wqy2CCj/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Are you listening to me?",
                "line": 22,
                "start_time": "0-00-51.700000",
                "end_time": "0-00-53.700000",
                "url": "https://drive.google.com/file/d/14kzz3W-bppvDBSJeLuy2lLAz4tRBZsIA/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Can't stop my tails from moving!",
                "line": 23,
                "start_time": "0-00-52.910000",
                "end_time": "0-00-55.700000",
                "url": "https://drive.google.com/file/d/117lo1aZInpdOxuCoexlRTNhNzFL6b-Ks/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Epsilon, make a piece titled \"Death Metal of the Moron Doggie!\"",
                "line": 24,
                "start_time": "0-00-55.700000",
                "end_time": "0-00-59.580000",
                "url": "https://drive.google.com/file/d/1D2FmlmWdzh1P94Wehm6iWRLAKp-YVrwp/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Molly, are you picking a fight with me?",
                "line": 25,
                "start_time": "0-00-59.580000",
                "end_time": "0-01-01.870000",
                "url": "https://drive.google.com/file/d/1UdQcHVqJF5t7gBwUzDKrb5tt1vTcCUyd/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Not particularly.",
                "line": 26,
                "start_time": "0-01-01.870000",
                "end_time": "0-01-03",
                "url": "https://drive.google.com/file/d/18TVrOcOMJPgKnXEGGt8X_Tx4ts4aLYnU/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Zeta is jealous because there is no music piece about cats!",
                "line": 27,
                "start_time": "0-01-03",
                "end_time": "0-01-05.800000",
                "url": "https://drive.google.com/file/d/1_AdmenWEb7XKUuYv7xWqt2BeVrEftbm-/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Jealousy is ugly!",
                "line": 28,
                "start_time": "0-01-05.800000",
                "end_time": "0-01-07.590000",
                "url": "https://drive.google.com/file/d/1_xcxOLXMskktZbI5UzavwZjBmmpH6-f-/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I am not jealous at all.",
                "line": 29,
                "start_time": "0-01-07.590000",
                "end_time": "0-01-10.130000",
                "url": "https://drive.google.com/file/d/1ql4KsScir8RZ4wCcrXNE7MPnBPr2r8y_/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "A piece about cats? There is one.",
                "line": 30,
                "start_time": "0-01-10.130000",
                "end_time": "0-01-11.840000",
                "url": "https://drive.google.com/file/d/1HdUSwmL88GHThnghoSqmXJ7nWaUeToWK/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Oh!?",
                "line": 31,
                "start_time": "0-01-11.840000",
                "end_time": "0-01-13.050000",
                "url": "https://drive.google.com/file/d/1J-c9n07mYR4SuGpf2LSyzFwVpVeTINtq/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Zeta looks happy!",
                "line": 32,
                "start_time": "0-01-13.510000",
                "end_time": "0-01-15.390000",
                "url": "https://drive.google.com/file/d/1pwRkvudTX6us9fdKWrjF7kdWdfbyEfZ5/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "N, no, I am not...",
                "line": 33,
                "start_time": "0-01-15.390000",
                "end_time": "0-01-17.470000",
                "url": "https://drive.google.com/file/d/1GJ1JI5CkoYfF1dlT25WvDHD5PWFPtM_0/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "So, what kind of piece is it?",
                "line": 34,
                "start_time": "0-01-17.470000",
                "end_time": "0-01-19.100000",
                "url": "https://drive.google.com/file/d/1k4PQmqmj3uyFbHFMt4hRLlb7Rg1HJlOO/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Well...",
                "line": 35,
                "start_time": "0-01-19.100000",
                "end_time": "0-01-20.100000",
                "url": "https://drive.google.com/file/d/1xwcR9rEs0lJlhThsBPg8jZA6euJs9mit/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...Hahaha, this is an enjoyable piece!",
                "line": 36,
                "start_time": "0-01-24.480000",
                "end_time": "0-01-26.150000",
                "url": "https://drive.google.com/file/d/1T8xnQ777N2Ea0pA8ztFAs8I72FaJyDtA/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "True,",
                "line": 37,
                "start_time": "0-01-26.150000",
                "end_time": "0-01-27.070000",
                "url": "https://drive.google.com/file/d/1d3iDGUF6teJR9eXXUFFlus4OQPB_0EuN/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "it is rhythmical and sticks in your head...",
                "line": 38,
                "start_time": "0-01-27.070000",
                "end_time": "0-01-28.860000",
                "url": "https://drive.google.com/file/d/1hrlJ0dSPXl55Sxqrq7lRd0XvBZlgTgqx/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Went like this, I think.",
                "line": 39,
                "start_time": "0-01-28.860000",
                "end_time": "0-01-30.280000",
                "url": "https://drive.google.com/file/d/1xsFaFbv5kKM42a_PrjEmCJHDJAvM63At/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "It is nice.",
                "line": 40,
                "start_time": "0-01-31.030000",
                "end_time": "0-01-32.070000",
                "url": "https://drive.google.com/file/d/1cPvh-8tbaJhBEZWvQqNICevZxGRmH0mg/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "And what's the name of the piece?",
                "line": 41,
                "start_time": "0-01-32.070000",
                "end_time": "0-01-33.820000",
                "url": "https://drive.google.com/file/d/1DpMVZ9jz0W9Znwr37Bg5L9IIB0SU-cJj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Uhm, well...what was it?",
                "line": 42,
                "start_time": "0-01-33.820000",
                "end_time": "0-01-36.580000",
                "url": "https://drive.google.com/file/d/1g1R0iY6MQtm8qzljxebI6jQCFypl2I_O/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Just slipped from my memory...",
                "line": 43,
                "start_time": "0-01-37.200000",
                "end_time": "0-01-39.830000",
                "url": "https://drive.google.com/file/d/1Wq0fbP1LZQ6Xm4n_CEO83e3xpZmqlCjH/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Epsilon, you never let anything slip from your memory!",
                "line": 44,
                "start_time": "0-01-39.830000",
                "end_time": "0-01-42.500000",
                "url": "https://drive.google.com/file/d/1h2uDMwCVce0dTK2j3-l3tsFOlECgZWxo/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "This taste means she is lying!",
                "line": 45,
                "start_time": "0-01-42.500000",
                "end_time": "0-01-45.170000",
                "url": "https://drive.google.com/file/d/1WoQdfgu8IedAjOr0cv87kwfAJO2k1n-V/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Why won't you tell me?",
                "line": 46,
                "start_time": "0-01-45.170000",
                "end_time": "0-01-47.050000",
                "url": "https://drive.google.com/file/d/1acuo0EncmjKo-ZiIPvupxvo9KUdY6FL1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Because...the name of this piece is...",
                "line": 47,
                "start_time": "0-01-47.050000",
                "end_time": "0-01-49.630000",
                "url": "https://drive.google.com/file/d/1_rTpc71MeZc4_jQ3qQ4cbUtw1xT86wpG/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "The name is...?",
                "line": 48,
                "start_time": "0-01-49.630000",
                "end_time": "0-01-50.670000",
                "url": "https://drive.google.com/file/d/1_tcF-TSLQUYe9_pMfOaeD1XILOOs0Wve/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Cat...",
                "line": 49,
                "start_time": "0-01-50.670000",
                "end_time": "0-01-51.550000",
                "url": "https://drive.google.com/file/d/1HnUeVnYYZtCuS03hRWKn2QWKTYvuUEAz/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Cat...?",
                "line": 50,
                "start_time": "0-01-51.550000",
                "end_time": "0-01-52.050000",
                "url": "https://drive.google.com/file/d/1dpW8nR_WMCFcw60QvKjsGYhuE36ayFzS/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "It is \"Stepped on the Cat\"...",
                "line": 51,
                "start_time": "0-01-52.050000",
                "end_time": "0-01-54.220000",
                "url": "https://drive.google.com/file/d/1ylYTMYdQ98qtWsH6hHt3YMLCT4WegFkr/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Ah...",
                "line": 52,
                "start_time": "0-01-55.050000",
                "end_time": "0-01-56.100000",
                "url": "https://drive.google.com/file/d/1hbxij9YpiBEx5R-bReVE6N7XBted7PQY/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "But...I kind of understand why...",
                "line": 53,
                "start_time": "0-01-57.470000",
                "end_time": "0-01-59.470000",
                "url": "https://drive.google.com/file/d/16RpbWiZms8dft8qG_nz8US2sy5PSWjvW/view?usp=drivesdk"
            }
        ],
        "e16": [
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Eta, thank you!",
                "line": 1,
                "start_time": "0-00-05.580000",
                "end_time": "0-00-07.060000",
                "url": "https://drive.google.com/file/d/1H0f3bcATVGt-_i-OmAZ3Br1HNG0-yCfI/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "V, V!",
                "line": 2,
                "start_time": "0-00-07.060000",
                "end_time": "0-00-08.050000",
                "url": "https://drive.google.com/file/d/1oCLOUbBO7Z4j0EcVsPT8qrd-nbkhmgdj/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "This bra that brings out the softness of one's breast to the fullest...",
                "line": 3,
                "start_time": "0-00-08.050000",
                "end_time": "0-00-11.340000",
                "url": "https://drive.google.com/file/d/1e62xpWdRTqcNfSn5lcR3oTSp1eeKnIWb/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It showed amazing effect at the Goddess's Trial, too!",
                "line": 4,
                "start_time": "0-00-11.340000",
                "end_time": "0-00-13.850000",
                "url": "https://drive.google.com/file/d/1475TizsgAOXAIw7KrJgnosebS0nJ7Oxj/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Revolutionizing... the concept of...bra..",
                "line": 5,
                "start_time": "0-00-13.850000",
                "end_time": "0-00-17.270000",
                "url": "https://drive.google.com/file/d/1syYN4LBjKBhJGJEREfixav5FBjvTNaYl/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Not cover, but just support from below!",
                "line": 6,
                "start_time": "0-00-17.270000",
                "end_time": "0-00-19.770000",
                "url": "https://drive.google.com/file/d/1i2DYtoEJak2OAbPzq9iGONd2aac7koGm/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "How did you come up with it?",
                "line": 7,
                "start_time": "0-00-19.770000",
                "end_time": "0-00-21.390000",
                "url": "https://drive.google.com/file/d/1nTBmhfs2YfGSQcrUp1GfAEy_xlj9lFaT/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Some time ago...Master...was muttering...",
                "line": 8,
                "start_time": "0-00-21.390000",
                "end_time": "0-00-25.190000",
                "url": "https://drive.google.com/file/d/1Z1g4MytFcR3vekMw3HqTjArwJ2d0Stao/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...\"Those who don't have breasts...pushes them up from below\"...",
                "line": 9,
                "start_time": "0-00-25.710000",
                "end_time": "0-00-30.340000",
                "url": "https://drive.google.com/file/d/17I39Na5RkwF5tLeJppMS_Tg4OT1Eos20/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Beta is well-endowed in the first place...",
                "line": 10,
                "start_time": "0-00-30.950000",
                "end_time": "0-00-33.260000",
                "url": "https://drive.google.com/file/d/1lMx3cLNcTGPXErDvQY7D3j8pL7g4svNL/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "so the effect...is devastating",
                "line": 11,
                "start_time": "0-00-33.550000",
                "end_time": "0-00-36.560000",
                "url": "https://drive.google.com/file/d/1_sIuusVoropW7iev-rGZQJ8SZ8Ywuszt/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It is part of Natsume's role",
                "line": 12,
                "start_time": "0-00-36.560000",
                "end_time": "0-00-38.020000",
                "url": "https://drive.google.com/file/d/12lC3q-Ssi2Lh8NToSsgtbUE4DV_cYnh3/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "to enthrall people in many ways, so,",
                "line": 13,
                "start_time": "0-00-38.110000",
                "end_time": "0-00-41.740000",
                "url": "https://drive.google.com/file/d/1vArBgWrItaoe90IBVmV01uTq4PXfT2eZ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "In that sense, it proved to be really amazing!",
                "line": 14,
                "start_time": "0-00-41.740000",
                "end_time": "0-00-44.670000",
                "url": "https://drive.google.com/file/d/1FG8Q_0Vt1UzeyRNXIqX9PMOSfU1Xn5o3/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Even if they were false...",
                "line": 15,
                "start_time": "0-00-44.670000",
                "end_time": "0-00-46.890000",
                "url": "https://drive.google.com/file/d/1npvVdpbPV2pzPEG5q_ysabwW-p6V0oaO/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...breasts!",
                "line": 16,
                "start_time": "0-00-46.890000",
                "end_time": "0-00-48.270000",
                "url": "https://drive.google.com/file/d/1HYn7vxTwVe1uo7msRa80-f7Q65TQ1Tad/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Is she talking about mmm, me?",
                "line": 17,
                "start_time": "0-00-49.780000",
                "end_time": "0-00-52.270000",
                "url": "https://drive.google.com/file/d/1NAgY3g-1fwYDNbnKQz7u0I9XSjpSI1Qp/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But she said \"Natsume\"...",
                "line": 18,
                "start_time": "0-00-52.270000",
                "end_time": "0-00-54.150000",
                "url": "https://drive.google.com/file/d/1jgY_XQNUXUu5DY2p7iwDus_NOnMrmwX5/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What does it mean?",
                "line": 19,
                "start_time": "0-00-54.150000",
                "end_time": "0-00-55.350000",
                "url": "https://drive.google.com/file/d/1Wvpt8bmYg_4VOElxZWXP24uuaAfWQSkT/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "My...slime..has it been",
                "line": 20,
                "start_time": "0-00-55.350000",
                "end_time": "0-00-56.950000",
                "url": "https://drive.google.com/file/d/1Ec67Ku6-Qt8YMuG_JIszKdV_hiD38vQ3/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "ex...ex...exposed?",
                "line": 21,
                "start_time": "0-00-57.030000",
                "end_time": "0-00-58.670000",
                "url": "https://drive.google.com/file/d/1w7y_qsvOPk6uuaHY5VWOI_uJpvAISkHX/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "What are you doing?",
                "line": 22,
                "start_time": "0-00-58.670000",
                "end_time": "0-00-59.870000",
                "url": "https://drive.google.com/file/d/1wH79Vuz0rtRaCR68ZeOK5iHoiVi-Uovp/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Epsilon. What's the matter?",
                "line": 23,
                "start_time": "0-01-01.310000",
                "end_time": "0-01-03.130000",
                "url": "https://drive.google.com/file/d/1XTZwADC8GCYSM-G8xGMMpUUKX2DZFouE/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Eh?! Oh, nothing...nothing!",
                "line": 24,
                "start_time": "0-01-03.130000",
                "end_time": "0-01-05.210000",
                "url": "https://drive.google.com/file/d/1Fs3yrENRNvATbfE23EjzDZ3btLKPv8zp/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What...what is that?",
                "line": 25,
                "start_time": "0-01-05.210000",
                "end_time": "0-01-06.890000",
                "url": "https://drive.google.com/file/d/1NKLJvVpbkEclKdtPV8JBshC1gwqmXnV8/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Makes breasts...",
                "line": 26,
                "start_time": "0-01-06.890000",
                "end_time": "0-01-07.760000",
                "url": "https://drive.google.com/file/d/1nwntbWHpxBIxNL9vuYa6JRoyLL07GEqG/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Dramatically...",
                "line": 27,
                "start_time": "0-01-08.260000",
                "end_time": "0-01-09.420000",
                "url": "https://drive.google.com/file/d/1M-UOpYe8KtKHSLLrwwp1k-GfoqqobTsA/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...look larger...",
                "line": 28,
                "start_time": "0-01-10.170000",
                "end_time": "0-01-11.510000",
                "url": "https://drive.google.com/file/d/1hu5DXbYHa9Ae_9zuZOMU8qn2TpJryMo7/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Bra",
                "line": 29,
                "start_time": "0-01-12.370000",
                "end_time": "0-01-12.920000",
                "url": "https://drive.google.com/file/d/1_X0o6NpPLbsk8m-DHDWxUdxXJaFMcWXt/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Epsilon?",
                "line": 30,
                "start_time": "0-01-15.160000",
                "end_time": "0-01-16.230000",
                "url": "https://drive.google.com/file/d/1O5ZYEhQ8J4QxnemAn0zfX5hHg9rHj3zh/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "What's the matter? You look pale.",
                "line": 31,
                "start_time": "0-01-16.700000",
                "end_time": "0-01-19.430000",
                "url": "https://drive.google.com/file/d/1cdxVnpoYWpp3mxjLoJ8Y_zHcuZcI32fc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "That bbb, bra",
                "line": 32,
                "start_time": "0-01-19.430000",
                "end_time": "0-01-21.960000",
                "url": "https://drive.google.com/file/d/13qLdsRx3EymzMQt7iuBiCoSfcSTmK2rn/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "what is it for?",
                "line": 33,
                "start_time": "0-01-22.030000",
                "end_time": "0-01-23.480000",
                "url": "https://drive.google.com/file/d/1-SxSS0BtW1zVl2ECxBBCi70Hz4Ep_K3q/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Could it be?",
                "line": 34,
                "start_time": "0-01-23.480000",
                "end_time": "0-01-25.400000",
                "url": "https://drive.google.com/file/d/1kEl-czJsrZJ6MC3nxQdl0qtAU79ckXlB/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Mmm, my... sss, secret...?",
                "line": 35,
                "start_time": "0-01-25.400000",
                "end_time": "0-01-31.070000",
                "url": "https://drive.google.com/file/d/1tKGwq_l7CavplIcWh9dk3R85_CFlQK9I/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Eta made it for me to make my breasts look larger.",
                "line": 36,
                "start_time": "0-01-27.040000",
                "end_time": "0-01-31.070000",
                "url": "https://drive.google.com/file/d/1J_txS5sDHvq5bvEYUR_ya984DZKx_Saf/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Huh?",
                "line": 37,
                "start_time": "0-01-31.070000",
                "end_time": "0-01-31.570000",
                "url": "https://drive.google.com/file/d/1IUuDCRprH5Ah7vEwTlGHzAazKPC1aRtN/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "For occasions where I go outside as Natsume-sensei...well,",
                "line": 38,
                "start_time": "0-01-32.940000",
                "end_time": "0-01-36.230000",
                "url": "https://drive.google.com/file/d/1VEjupwLfmgw45FOWEC3DsiO15VdK80WP/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Thought maybe I should emphasize my breasts a bit!",
                "line": 39,
                "start_time": "0-01-36.230000",
                "end_time": "0-01-38.850000",
                "url": "https://drive.google.com/file/d/12GJDzdPnqLkf4Q0zIiI0wutZpl_uCwTM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh...so that was it!",
                "line": 40,
                "start_time": "0-01-38.850000",
                "end_time": "0-01-42.200000",
                "url": "https://drive.google.com/file/d/1s5E5rIm9oVlROuMZdGdJDtUShFDnxjDE/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Right, that kind of thing is important, I know!",
                "line": 41,
                "start_time": "0-01-42.940000",
                "end_time": "0-01-45.210000",
                "url": "https://drive.google.com/file/d/1z3jNdO2zQK0SUYFKYQuY-pLzmrUPor0J/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I know that! Nice thinking, Eta.",
                "line": 42,
                "start_time": "0-01-45.210000",
                "end_time": "0-01-47.630000",
                "url": "https://drive.google.com/file/d/1cH-5YrPYc6-soxaGVFqBBlBIUt1YVmj8/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh! I just remembered I had some errands to do!",
                "line": 43,
                "start_time": "0-01-47.630000",
                "end_time": "0-01-50.340000",
                "url": "https://drive.google.com/file/d/1TtryF_ZTsgebXYxRfFqJ-3Fn341OBCnG/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Thought she would make fun of me more!",
                "line": 44,
                "start_time": "0-01-51.880000",
                "end_time": "0-01-54.250000",
                "url": "https://drive.google.com/file/d/1LQ-uAT9YV6vzUaeUgX7HBlu2ASFWliqD/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Fishy...",
                "line": 45,
                "start_time": "0-01-54.250000",
                "end_time": "0-01-55.090000",
                "url": "https://drive.google.com/file/d/17tXMwEpi1KtVBN5FFSygezi--KiYKlRI/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Lie Discerning Device!",
                "line": 46,
                "start_time": "0-01-56.170000",
                "end_time": "0-01-57.480000",
                "url": "https://drive.google.com/file/d/1TZO-P6W_Vu_E0Bo7KZXWwbA9tmLzFKz5/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Wait! Not those things, please!",
                "line": 47,
                "start_time": "0-01-57.480000",
                "end_time": "0-01-59.420000",
                "url": "https://drive.google.com/file/d/1l2GUZtdvwJVghw9dDPaAH9vygWyBOx21/view?usp=drivesdk"
            }
        ],
        "e17": [
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Is everyone is here?",
                "line": 1,
                "start_time": "0-00-05.860000",
                "end_time": "0-00-07.410000",
                "url": "https://drive.google.com/file/d/1IQia1CsjiZJq77lCrYUzO-MH01xUqb3f/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes, Alpha-sama.",
                "line": 2,
                "start_time": "0-00-08.030000",
                "end_time": "0-00-09.640000",
                "url": "https://drive.google.com/file/d/13HQec530Z7xYTEloQQsv_SYxsSskd_ka/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "The Seven Shades are all here.",
                "line": 3,
                "start_time": "0-00-09.640000",
                "end_time": "0-00-11.210000",
                "url": "https://drive.google.com/file/d/1XgULsM1Ukf6YBj3hBhOW3osXvPtAFtt1/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "The Numbers have now expanded to 666 members...",
                "line": 4,
                "start_time": "0-00-13.250000",
                "end_time": "0-00-16.540000",
                "url": "https://drive.google.com/file/d/1NzhtduSg_XfCfn_F-Xc8aGR3IVREOLCp/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes, Lambda is all pumped up, says she looks forward to breaking them in.",
                "line": 5,
                "start_time": "0-00-18.350000",
                "end_time": "0-00-22.450000",
                "url": "https://drive.google.com/file/d/16ZuHRPFSyYBEZhImObsEomZHwiDqmiN3/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "And how is Mitsugoshi?",
                "line": 6,
                "start_time": "0-00-23.650000",
                "end_time": "0-00-25.190000",
                "url": "https://drive.google.com/file/d/1ZH1z_1rf7lUd_JjTEG8l73vbJtDhgiFd/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "..Well, buyout of real estate is going smoothly!",
                "line": 7,
                "start_time": "0-00-31.470000",
                "end_time": "0-00-34.960000",
                "url": "https://drive.google.com/file/d/1nn7AmmRLdBevU3r-pV9LJobnRcQPuZMs/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Working with Kai and Omega to check for any disturbing developments.",
                "line": 8,
                "start_time": "0-00-36.570000",
                "end_time": "0-00-40.510000",
                "url": "https://drive.google.com/file/d/1k-ytzjAItiiMgwpZI6TiHkMxkTFsdxPG/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Movements of people around Master, too, are all kept in track.",
                "line": 9,
                "start_time": "0-00-42.370000",
                "end_time": "0-00-45.900000",
                "url": "https://drive.google.com/file/d/1Ng01qxM9pmssVavRLc5M0y99_0FceMDG/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "All matters...no problem...",
                "line": 10,
                "start_time": "0-00-47.610000",
                "end_time": "0-00-54.530000",
                "url": "https://drive.google.com/file/d/1OQctHJ4N6kaJoJPae6Jn2qt08O1zoe1I/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Alright!",
                "line": 11,
                "start_time": "0-00-58.340000",
                "end_time": "0-00-59.580000",
                "url": "https://drive.google.com/file/d/1-0NxpLkuiJl-IVcijWVhgz9V5NIwMxGd/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "So then, everyone continue their missions!",
                "line": 12,
                "start_time": "0-00-59.580000",
                "end_time": "0-01-02.960000",
                "url": "https://drive.google.com/file/d/1mXY-H76T1Q0eO2vM5MYcEHQjJMb2P55T/view?usp=drivesdk"
            },
            {
                "name": "Everyone",
                "name_variant": "Everyone (Beta)",
                "subtitle": "Roger!",
                "line": 13,
                "start_time": "0-01-02.960000",
                "end_time": "0-01-03.920000",
                "url": "https://drive.google.com/file/d/1aeYdSoWju0JgtIEAkrHDip98yJLbl2GW/view?usp=drivesdk"
            },
            {
                "name": "Everyone",
                "name_variant": "Everyone (Gamma)",
                "subtitle": "Roger!",
                "line": 13,
                "start_time": "0-01-02.960000",
                "end_time": "0-01-03.920000",
                "url": "https://drive.google.com/file/d/1aeYdSoWju0JgtIEAkrHDip98yJLbl2GW/view?usp=drivesdk"
            },
            {
                "name": "Everyone",
                "name_variant": "Everyone (Delta)",
                "subtitle": "Roger!",
                "line": 13,
                "start_time": "0-01-02.960000",
                "end_time": "0-01-03.920000",
                "url": "https://drive.google.com/file/d/1aeYdSoWju0JgtIEAkrHDip98yJLbl2GW/view?usp=drivesdk"
            },
            {
                "name": "Everyone",
                "name_variant": "Everyone (Epsilon)",
                "subtitle": "Roger!",
                "line": 13,
                "start_time": "0-01-02.960000",
                "end_time": "0-01-03.920000",
                "url": "https://drive.google.com/file/d/1aeYdSoWju0JgtIEAkrHDip98yJLbl2GW/view?usp=drivesdk"
            },
            {
                "name": "Everyone",
                "name_variant": "Everyone (Zeta)",
                "subtitle": "Roger!",
                "line": 13,
                "start_time": "0-01-02.960000",
                "end_time": "0-01-03.920000",
                "url": "https://drive.google.com/file/d/1aeYdSoWju0JgtIEAkrHDip98yJLbl2GW/view?usp=drivesdk"
            },
            {
                "name": "Everyone",
                "name_variant": "Everyone (Eta)",
                "subtitle": "Roger!",
                "line": 13,
                "start_time": "0-01-02.960000",
                "end_time": "0-01-03.920000",
                "url": "https://drive.google.com/file/d/1aeYdSoWju0JgtIEAkrHDip98yJLbl2GW/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But really...",
                "line": 14,
                "start_time": "0-01-04.580000",
                "end_time": "0-01-05.730000",
                "url": "https://drive.google.com/file/d/1YkHccP9sjM2ufMdoztZ7LR20AyLcbryr/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "This new product...is delicious...isn't that it?",
                "line": 15,
                "start_time": "0-01-07.740000",
                "end_time": "0-01-11.550000",
                "url": "https://drive.google.com/file/d/12La-a39AnOAIRg0bQa2cHbR7g40w1vK-/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, this Tsukimiru Burger is far too delicious to keep it a Limited Time Only product!",
                "line": 16,
                "start_time": "0-01-11.550000",
                "end_time": "0-01-17.600000",
                "url": "https://drive.google.com/file/d/1gHHk2bwdZ9Fx9SkDRVaYcDkMy6Rx_7dL/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "By deliberately not making it a Regular Menu item, we hope to stir consumer appetite!",
                "line": 17,
                "start_time": "0-01-18.050000",
                "end_time": "0-01-24.120000",
                "url": "https://drive.google.com/file/d/1IJOKhcKyosZwR5FZmQBNYs9jcKjNhcEH/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I see, right.",
                "line": 18,
                "start_time": "0-01-24.120000",
                "end_time": "0-01-24.980000",
                "url": "https://drive.google.com/file/d/1bviaJKKlL4sVu7SvxEZTvpijbC5mpAGQ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "So we will schedule another meeting before the Limited Time menu ends!",
                "line": 19,
                "start_time": "0-01-26.820000",
                "end_time": "0-01-30.850000",
                "url": "https://drive.google.com/file/d/1GXmpKLdzTvPiCZYRFJpsscTm_13CDkte/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Copy that!",
                "line": 20,
                "start_time": "0-01-31.330000",
                "end_time": "0-01-32.380000",
                "url": "https://drive.google.com/file/d/1ueyCeAypM60DCjQCXEE8FOr-Ed8vzr3M/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Eta, what are you doing?",
                "line": 21,
                "start_time": "0-01-33.980000",
                "end_time": "0-01-36.050000",
                "url": "https://drive.google.com/file/d/1DbUzZwelXJJnKGQSikx3jG-ydkIQ3fe2/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Even at times like this...constantly...develop new products...",
                "line": 22,
                "start_time": "0-01-36.050000",
                "end_time": "0-01-40.080000",
                "url": "https://drive.google.com/file/d/1rcDTLTiIG7WFvXYI78Z-6JuAYzKBAf_k/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Delta wants to eat it!",
                "line": 23,
                "start_time": "0-01-40.080000",
                "end_time": "0-01-41.660000",
                "url": "https://drive.google.com/file/d/1CCqobRN9ooTRrP4gQckikzmOXLjNm_Sr/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ugh!",
                "line": 24,
                "start_time": "0-01-41.660000",
                "end_time": "0-01-43.410000",
                "url": "https://drive.google.com/file/d/1TU6s3FhsAI6E7iSu-Qv0JKKa2X3sKPZU/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "The smell is so sharp!",
                "line": 25,
                "start_time": "0-01-43.410000",
                "end_time": "0-01-45.860000",
                "url": "https://drive.google.com/file/d/1TEFOh9qqcq_2i1-KhbIaHr3TgVG9FcSX/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Too much chilli sauce!",
                "line": 26,
                "start_time": "0-01-45.860000",
                "end_time": "0-01-48.130000",
                "url": "https://drive.google.com/file/d/1nhAaPLgd59_FR3trl8kHhPsp-M8p-P5q/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Name it...Red Tsukimiru Burger...",
                "line": 27,
                "start_time": "0-01-48.730000",
                "end_time": "0-01-51.950000",
                "url": "https://drive.google.com/file/d/1wCpN-5tES8E6zwXXhhHMJN8EasOxQsYX/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "The name is a bit disturbing...",
                "line": 28,
                "start_time": "0-01-52.380000",
                "end_time": "0-01-54.310000",
                "url": "https://drive.google.com/file/d/1fD4bd9VCX8gZq-Km1Y4GRFQreTcrKli8/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But it is delicious",
                "line": 29,
                "start_time": "0-01-55.820000",
                "end_time": "0-01-57.210000",
                "url": "https://drive.google.com/file/d/12nwZo0vCbxgD890eAi2pCqEnUP-smIDK/view?usp=drivesdk"
            }
        ]
    }
}
let setDoc = db.collection('data').doc('an_s101').set(data['kj1']);

//let setDoc = db.collection('data').doc('ssc_p2_c2-5').set(data['p2']['c2-5']);

//let setDoc = db.collection('data').doc('es_ssitw').set(data['ssitw']);

//let setDoc = db.collection('data').doc('ln_v5').set(data['v5']);

// let setDoc = db.collection('data').doc('an_s101').set(data['kj1']);
setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
