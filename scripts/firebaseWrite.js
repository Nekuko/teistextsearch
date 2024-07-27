const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "s2": {
        "e1": [
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "There has been no conspicuous activity by the Cult of Diablos in the Midgar Kingdom",
                "line": 1,
                "start_time": "0-00-40.200000",
                "end_time": "0-00-45.240000",
                "url": "https://drive.google.com/file/d/1Gpml71JSd_M0BouV7BPlFpH9mqzvqZn2/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "since the incident at the Bushin Festival.",
                "line": 2,
                "start_time": "0-00-45.240000",
                "end_time": "0-00-47.530000",
                "url": "https://drive.google.com/file/d/1h48ytjKR-hzjvRPZJ32AwKfCui1S9P8q/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "The smaller sects were already at a standstill,",
                "line": 3,
                "start_time": "0-00-47.530000",
                "end_time": "0-00-49.450000",
                "url": "https://drive.google.com/file/d/1sM5ggV7-L2k_N7K1lOM77EfWBAa3U_4u/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "and now the Fenrir sect, which was in the process of restructuring,",
                "line": 4,
                "start_time": "0-00-49.450000",
                "end_time": "0-00-51.490000",
                "url": "https://drive.google.com/file/d/1pNm_gDu3Y7Chi1o7zmFcMcN_8sml1r8L/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "appears to be immobilized by the confusion, as well.",
                "line": 5,
                "start_time": "0-00-51.490000",
                "end_time": "0-00-53.780000",
                "url": "https://drive.google.com/file/d/16AMEARMX8K3TH8KxIWsLAxdsMfoFaZKH/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "It is all going exactly to your plan, My Lord.",
                "line": 6,
                "start_time": "0-00-54.200000",
                "end_time": "0-00-56.950000",
                "url": "https://drive.google.com/file/d/1nwNXqzuRZbEKPlErESXvIFDidOu8Axrf/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Now we can set our sights forward",
                "line": 7,
                "start_time": "0-00-56.950000",
                "end_time": "0-00-59.450000",
                "url": "https://drive.google.com/file/d/1o9kUYaFGPahbBBLWDbEmGxCGML4RlPSd/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "and focus our main efforts on the situation in the Oriana Kingdom.",
                "line": 8,
                "start_time": "0-00-59.450000",
                "end_time": "0-01-02.740000",
                "url": "https://drive.google.com/file/d/1p1ceUI1pgaGILACynDbMD30hmZuJpS0w/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "But there is a troubling bit of news.",
                "line": 9,
                "start_time": "0-01-03.240000",
                "end_time": "0-01-05.830000",
                "url": "https://drive.google.com/file/d/1yxgiyIeAWQZBc73L4YbCLVMYMFHjQoL4/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "There has been a recent acceleration in the flow of funds going into the Lawless City.",
                "line": 10,
                "start_time": "0-01-05.830000",
                "end_time": "0-01-10.460000",
                "url": "https://drive.google.com/file/d/1fkofBJVvuYlyxFLYYjlyyVaBFc03bMMZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Funds?",
                "line": 11,
                "start_time": "0-01-10.780000",
                "end_time": "0-01-12.190000",
                "url": "https://drive.google.com/file/d/1rALdQe7ceX_JwNoJaRLkJ0-UKQ6pT9LA/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "That region doesn't belong to any nation.",
                "line": 12,
                "start_time": "0-01-13.210000",
                "end_time": "0-01-16.080000",
                "url": "https://drive.google.com/file/d/1AqVR-rYjQwWKTl1GtLHFHD3wKv-Z-HzK/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It's a giant slum where the evil, wealth, and power of the world converge.",
                "line": 13,
                "start_time": "0-01-16.080000",
                "end_time": "0-01-20.450000",
                "url": "https://drive.google.com/file/d/1zXoJnGBWuIgwzj5EuryyDAobl3IeIalF/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Any tensions that occur in that region could have an immeasurable effect on the rest of society.",
                "line": 14,
                "start_time": "0-01-20.450000",
                "end_time": "0-01-25.950000",
                "url": "https://drive.google.com/file/d/1yRRUebp8LY3CZlqXeM2qWgXvS-m6RGA6/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Although we would like to focus all of our efforts on accomplishing our plan,",
                "line": 15,
                "start_time": "0-01-25.950000",
                "end_time": "0-01-29.160000",
                "url": "https://drive.google.com/file/d/1xOXtDM2qm93m_1BdHDZPP3svZQzuxQFt/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "unfortunately, I must suggest that we dispatch additional personnel to immediately\u2014",
                "line": 16,
                "start_time": "0-01-29.160000",
                "end_time": "0-01-32.190000",
                "url": "https://drive.google.com/file/d/1CXL58sra_gafn7UppQK9fzVix-neWLCp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I smell it.",
                "line": 17,
                "start_time": "0-01-32.190000",
                "end_time": "0-01-33.780000",
                "url": "https://drive.google.com/file/d/154i0I-qWoUfKVoma8Nn8R8-lkH1n3MQD/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "The Lawless City...",
                "line": 18,
                "start_time": "0-01-35.080000",
                "end_time": "0-01-37.080000",
                "url": "https://drive.google.com/file/d/1Ss8sn5ePMWnxq8gFIEfv83zV5QJsumLu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "reeks of blood.",
                "line": 19,
                "start_time": "0-01-37.080000",
                "end_time": "0-01-38.570000",
                "url": "https://drive.google.com/file/d/1I0P_8wE6AzOPJUuNsYBpa0nSj1BDZ91R/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "A storm is brewing.",
                "line": 20,
                "start_time": "0-01-39.370000",
                "end_time": "0-01-40.910000",
                "url": "https://drive.google.com/file/d/1GN3wRimPv58IOBy-zpApTvB361zZGXN3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "A storm of blood.",
                "line": 21,
                "start_time": "0-01-42.530000",
                "end_time": "0-01-44.440000",
                "url": "https://drive.google.com/file/d/18GvxtWJ1U_1EAUsbOD8hsHE50lXlqNDE/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "The moon...",
                "line": 22,
                "start_time": "0-01-49.870000",
                "end_time": "0-01-51.200000",
                "url": "https://drive.google.com/file/d/1b6R1ecaE75tFA0LXxqvpaAOmHs_rq4Jn/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "It's unusually...",
                "line": 23,
                "start_time": "0-01-51.200000",
                "end_time": "0-01-52.840000",
                "url": "https://drive.google.com/file/d/19qiaK_2vDiHvi1vNL19ueH646gZsoEc1/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Red.",
                "line": 24,
                "start_time": "0-01-52.840000",
                "end_time": "0-01-53.990000",
                "url": "https://drive.google.com/file/d/14CnzmNXWccf4DGihEpuhq73n_ivwT-Gy/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "In fact, it looks just like the legendary...",
                "line": 25,
                "start_time": "0-01-53.990000",
                "end_time": "0-01-56.800000",
                "url": "https://drive.google.com/file/d/1n90cfSCe96-fLL6EiYn-DF-ft06YoKa0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Red Moon.",
                "line": 26,
                "start_time": "0-01-56.800000",
                "end_time": "0-01-58.260000",
                "url": "https://drive.google.com/file/d/1nxiswibzjddojpaMEg4K5T0aRXl1oGAM/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "The tragedy of a thousand years ago...",
                "line": 27,
                "start_time": "0-02-00.220000",
                "end_time": "0-02-02.490000",
                "url": "https://drive.google.com/file/d/1yVX9qlqWFSeenpSVPweBfpWXCYJ9Fwo7/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "In that case, the Lawless City will...",
                "line": 28,
                "start_time": "0-02-02.490000",
                "end_time": "0-02-04.450000",
                "url": "https://drive.google.com/file/d/1F0jERrIbjySqJLBLFoc5uab9P6ePiBL9/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "No, if nothing is done, all surrounding nations will be subjected to catastrophic damage.",
                "line": 29,
                "start_time": "0-02-04.450000",
                "end_time": "0-02-08.100000",
                "url": "https://drive.google.com/file/d/1RJ3NYpv3zivAdfJgQPU-bD1g_A7s4h57/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Silence, all of you.",
                "line": 30,
                "start_time": "0-02-08.370000",
                "end_time": "0-02-09.560000",
                "url": "https://drive.google.com/file/d/1dQumZK2iNJ9-CQmOlQ1nx2JxOvX1KSwe/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "If that is an omen of the Red Moon,",
                "line": 31,
                "start_time": "0-02-11.530000",
                "end_time": "0-02-14.410000",
                "url": "https://drive.google.com/file/d/1Djy64bO5WeB-lNFFJCLnx61oAnq6l0x2/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "we cannot merely sit here and gaze idly at the sky.",
                "line": 32,
                "start_time": "0-02-14.410000",
                "end_time": "0-02-17.620000",
                "url": "https://drive.google.com/file/d/1iZ2P2neHUQw6nNX1E5UxL9OXut2oHKXF/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "We Seven Shadows will\u2014",
                "line": 33,
                "start_time": "0-02-17.620000",
                "end_time": "0-02-18.620000",
                "url": "https://drive.google.com/file/d/12MqN5X_BaJNOy2MfJKkZqDo9jVDMtD2S/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "No.",
                "line": 34,
                "start_time": "0-02-18.620000",
                "end_time": "0-02-19.990000",
                "url": "https://drive.google.com/file/d/1smAVx8mwgHQQzTg-baoLdg1AzKgIT-Bi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Let me handle the money\u2014",
                "line": 35,
                "start_time": "0-02-19.990000",
                "end_time": "0-02-21.580000",
                "url": "https://drive.google.com/file/d/1Co54DPipuQZzzlw0meGoPCA1hWI3sfZl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I mean, this matter.",
                "line": 36,
                "start_time": "0-02-21.580000",
                "end_time": "0-02-22.950000",
                "url": "https://drive.google.com/file/d/1BoWjF3_o9lv9xWBSLVHEPhJInhcr2KyG/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "No! You intend to go there alone?",
                "line": 37,
                "start_time": "0-02-23.330000",
                "end_time": "0-02-25.830000",
                "url": "https://drive.google.com/file/d/1QSNkqOszO2CqwKgcekAg_ak_xX26i5Bo/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "You object?",
                "line": 38,
                "start_time": "0-02-25.830000",
                "end_time": "0-02-27.080000",
                "url": "https://drive.google.com/file/d/10VelJ6A3qDH_vteLibkLWF9BSQBJm4oy/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "We understand that that would be the surest method, but...",
                "line": 39,
                "start_time": "0-02-27.080000",
                "end_time": "0-02-30.830000",
                "url": "https://drive.google.com/file/d/1z1_0ih9W_81rdWt0ggMxq_eLi2mRWXYj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Should the unthinkable happen to you, we would...",
                "line": 40,
                "start_time": "0-02-30.830000",
                "end_time": "0-02-33.540000",
                "url": "https://drive.google.com/file/d/1cO-Uv9rRKgAMkM44LCmUWKhsU4y0H9tX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Fear not.",
                "line": 41,
                "start_time": "0-02-33.540000",
                "end_time": "0-02-35.110000",
                "url": "https://drive.google.com/file/d/1yQxSCn269p5IcV1M13KSXTJugNrt1z4G/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "The moon has turned red, that is all.",
                "line": 42,
                "start_time": "0-02-37.240000",
                "end_time": "0-02-40.490000",
                "url": "https://drive.google.com/file/d/1jwnDKaI2tk4xemhRGeVI4gmoZ342xfpM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Is it not?",
                "line": 43,
                "start_time": "0-02-40.490000",
                "end_time": "0-02-41.900000",
                "url": "https://drive.google.com/file/d/1IYW1Cq1u8VeWrOgJUyFdf05aWPXBEoFt/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "No more than a moon turned red.",
                "line": 44,
                "start_time": "0-02-44.660000",
                "end_time": "0-02-46.660000",
                "url": "https://drive.google.com/file/d/1r9GLsh5-21brCPqrJ_V34vGFzjy-6X_S/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Faced with you, even the legendary Red Moon is stripped of its dignity.",
                "line": 45,
                "start_time": "0-02-46.660000",
                "end_time": "0-02-50.570000",
                "url": "https://drive.google.com/file/d/1R6Ro6MVB5TuNgk05arxCaxzT878zOunU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Do you not find the moon to be just as beautiful when red?",
                "line": 46,
                "start_time": "0-02-51.780000",
                "end_time": "0-02-55.440000",
                "url": "https://drive.google.com/file/d/1mdQYkrNx_80_wvRPs_cvzhgciWdgkqzQ/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "It is because we have you, My Lord, that we, too, are able to see its beauty.",
                "line": 47,
                "start_time": "0-02-57.950000",
                "end_time": "0-03-02.950000",
                "url": "https://drive.google.com/file/d/19seD-U3LBQTkli_hvtOVEyXqUQLA8vPA/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "We wish you the best of luck in battle.",
                "line": 48,
                "start_time": "0-03-02.950000",
                "end_time": "0-03-05.120000",
                "url": "https://drive.google.com/file/d/1JNjOsQPICVtjeZ-N1oIW9bVEZ7Ej9Xl0/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "At first, it was nothing more than an ordinary moon,",
                "line": 49,
                "start_time": "0-03-05.120000",
                "end_time": "0-03-07.700000",
                "url": "https://drive.google.com/file/d/1sc5CoIpQsps2TwEt0LbVwzJxOCpzhyVI/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "At first, it was nothing more than an ordinary moon,",
                "line": 50,
                "start_time": "0-03-05.490000",
                "end_time": "0-03-07.700000",
                "url": "https://drive.google.com/file/d/1aPXyiBw-Ip4gL0JbB9g5g_nlVFFZPv5y/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Your will be done in all things, My Lord.",
                "line": 50,
                "start_time": "0-03-05.490000",
                "end_time": "0-03-07.700000",
                "url": "https://drive.google.com/file/d/1aPXyiBw-Ip4gL0JbB9g5g_nlVFFZPv5y/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "practically unchanged, but with just a hint of red.",
                "line": 51,
                "start_time": "0-03-07.700000",
                "end_time": "0-03-09.160000",
                "url": "https://drive.google.com/file/d/1qTGEjeFV874vo6TjunrzmOA8yYtglPAO/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I'll analyze some dragon tears or something",
                "line": 51,
                "start_time": "0-03-07.700000",
                "end_time": "0-03-09.160000",
                "url": "https://drive.google.com/file/d/1qTGEjeFV874vo6TjunrzmOA8yYtglPAO/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "practically unchanged, but with just a hint of red.",
                "line": 52,
                "start_time": "0-03-09.160000",
                "end_time": "0-03-10.080000",
                "url": "https://drive.google.com/file/d/1asgqyzUiwsCrLHrZt-OD4ZAvHCsnj_gM/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "while I await your return.",
                "line": 52,
                "start_time": "0-03-09.160000",
                "end_time": "0-03-10.080000",
                "url": "https://drive.google.com/file/d/1asgqyzUiwsCrLHrZt-OD4ZAvHCsnj_gM/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "And so no one knew that it was a portent, a harbinger, of the revival of the Blood Queen.",
                "line": 53,
                "start_time": "0-03-10.080000",
                "end_time": "0-03-13.620000",
                "url": "https://drive.google.com/file/d/1WJIGqID3K4C0P4ezB3dcjPYRpu0txK3c/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "No one, save for the Great Shadow!",
                "line": 54,
                "start_time": "0-03-13.620000",
                "end_time": "0-03-16",
                "url": "https://drive.google.com/file/d/1f4cmxZ--9RZWg-lPoRjr0OS0Do3RfwHW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Get these girls involved,",
                "line": 55,
                "start_time": "0-03-16.870000",
                "end_time": "0-03-18.840000",
                "url": "https://drive.google.com/file/d/17Qxra59rFD1BumdTVyBwM3YoRU0IAQQ1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "and the legendary Red Moon comes to life in the blink of an eye.",
                "line": 56,
                "start_time": "0-03-19.160000",
                "end_time": "0-03-21.800000",
                "url": "https://drive.google.com/file/d/1hJhs-bOOuSNbV9uUM2mRgsKAXJoOcEUs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Seriously, their ad-libbing skills are totally worthy of an Academy award.",
                "line": 57,
                "start_time": "0-03-21.800000",
                "end_time": "0-03-25.280000",
                "url": "https://drive.google.com/file/d/1TfiX_QAGWedh01yixBxI92iUeZz9pSGP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "It's just a kind of reddish moon, no big.",
                "line": 58,
                "start_time": "0-03-25.740000",
                "end_time": "0-03-28.610000",
                "url": "https://drive.google.com/file/d/1uR-jFQG1nnetMJFfFU2hbkIC_8hEga_X/view?usp=drivesdk"
            },
            {
                "name": "Goldy Gilded",
                "name_variant": "Goldy Gilded",
                "subtitle": "So, this is it.",
                "line": 59,
                "start_time": "0-03-34.660000",
                "end_time": "0-03-36.490000",
                "url": "https://drive.google.com/file/d/1eK2MMyFjIuYHx_jBPnpWAiTxFVPINNzI/view?usp=drivesdk"
            },
            {
                "name": "Quinton",
                "name_variant": "Quinton",
                "subtitle": "Yeah.",
                "line": 60,
                "start_time": "0-03-36.490000",
                "end_time": "0-03-37.490000",
                "url": "https://drive.google.com/file/d/1SphTPAHq1QhfpqQqMQScV4ixZurLtaFF/view?usp=drivesdk"
            },
            {
                "name": "Quinton",
                "name_variant": "Quinton",
                "subtitle": "The Crimson Tower, ruled by the Blood Queen,",
                "line": 61,
                "start_time": "0-03-37.490000",
                "end_time": "0-03-40.950000",
                "url": "https://drive.google.com/file/d/13pX36du-a78Pnx1-MZOyI6WeRXTcv8q8/view?usp=drivesdk"
            },
            {
                "name": "Quinton",
                "name_variant": "Quinton",
                "subtitle": "one of the three rulers of the Lawless City.",
                "line": 62,
                "start_time": "0-03-40.950000",
                "end_time": "0-03-43.620000",
                "url": "https://drive.google.com/file/d/1rr9K-QXDQLwTdYFvg2bko8gznlrMvw3m/view?usp=drivesdk"
            },
            {
                "name": "Goldy Gilded",
                "name_variant": "Goldy Gilded",
                "subtitle": "A castle of vampires, eh?",
                "line": 63,
                "start_time": "0-03-43.620000",
                "end_time": "0-03-45.910000",
                "url": "https://drive.google.com/file/d/1xIc9X9fhfqbmGjkgM5AFeoSyR2mCKeN7/view?usp=drivesdk"
            },
            {
                "name": "Goldy Gilded",
                "name_variant": "Goldy Gilded",
                "subtitle": "Look at that.",
                "line": 64,
                "start_time": "0-03-45.910000",
                "end_time": "0-03-47.160000",
                "url": "https://drive.google.com/file/d/1ogNZ4BJ5mFONL0WUE2zjAGJjOVJO2zDT/view?usp=drivesdk"
            },
            {
                "name": "Goldy Gilded",
                "name_variant": "Goldy Gilded",
                "subtitle": "Not even the corpse-raiding vultures dare to get near it.",
                "line": 65,
                "start_time": "0-03-47.160000",
                "end_time": "0-03-50.330000",
                "url": "https://drive.google.com/file/d/1EXJ9r-7qtnrgXh_QGeaTa9eOR-mcguwd/view?usp=drivesdk"
            },
            {
                "name": "Goldy Gilded",
                "name_variant": "Goldy Gilded",
                "subtitle": "They think if they get too close, it's all over. They'll end up as hideous ghouls.",
                "line": 66,
                "start_time": "0-03-50.330000",
                "end_time": "0-03-54.370000",
                "url": "https://drive.google.com/file/d/1PMjsh7F3Ho15RrgbKLath-zjsXiuFfDg/view?usp=drivesdk"
            },
            {
                "name": "Quinton",
                "name_variant": "Quinton",
                "subtitle": "What, are you scared?",
                "line": 67,
                "start_time": "0-03-54.370000",
                "end_time": "0-03-55.660000",
                "url": "https://drive.google.com/file/d/1Mu-NM_3PegZaYkIBCCk4_QpFNxS-ouLz/view?usp=drivesdk"
            },
            {
                "name": "Goldy Gilded",
                "name_variant": "Goldy Gilded",
                "subtitle": "Don't be ridiculous!",
                "line": 68,
                "start_time": "0-03-55.660000",
                "end_time": "0-03-56.870000",
                "url": "https://drive.google.com/file/d/1wg_GS1uAfvDxg-lZqXiPyLLm_E32QIF4/view?usp=drivesdk"
            },
            {
                "name": "Goldy Gilded",
                "name_variant": "Goldy Gilded",
                "subtitle": "It's just a hangout for a bunch of shut-ins.",
                "line": 69,
                "start_time": "0-03-56.870000",
                "end_time": "0-03-59.030000",
                "url": "https://drive.google.com/file/d/18uXQAZWqb4qkvX3-jEe-Z5IK9R6HGN2e/view?usp=drivesdk"
            },
            {
                "name": "Goldy Gilded",
                "name_variant": "Goldy Gilded",
                "subtitle": "With the power of Goldy Gilded the Ever-Vict\u2014",
                "line": 70,
                "start_time": "0-03-59.030000",
                "end_time": "0-04-00.550000",
                "url": "https://drive.google.com/file/d/11vdtCjoGzvbmJruQR0wedaPLFipyD2oV/view?usp=drivesdk"
            },
            {
                "name": "White Demon",
                "name_variant": "White Demon",
                "subtitle": "You vermin aren't worthy to pass through this gate.",
                "line": 71,
                "start_time": "0-04-02.550000",
                "end_time": "0-04-06.910000",
                "url": "https://drive.google.com/file/d/19utlCtHQywH4guIS5920KDtCpEABb_6W/view?usp=drivesdk"
            },
            {
                "name": "White Demon",
                "name_variant": "White Demon",
                "subtitle": "The only ones authorized are servants or guests of the Blood Queen, and powerful warriors.",
                "line": 72,
                "start_time": "0-04-06.910000",
                "end_time": "0-04-13.560000",
                "url": "https://drive.google.com/file/d/13J-PP4wobat4GRXbz8WIKQ_Ptdhl1F6e/view?usp=drivesdk"
            },
            {
                "name": "Quinton",
                "name_variant": "Quinton",
                "subtitle": "I get it, and you're right, we're not servants or guests.",
                "line": 73,
                "start_time": "0-04-16.200000",
                "end_time": "0-04-20.160000",
                "url": "https://drive.google.com/file/d/1dmwpUzOsaVpZkXYotbDtjlIuAY38BBv4/view?usp=drivesdk"
            },
            {
                "name": "Goldy Gilded",
                "name_variant": "Goldy Gilded",
                "subtitle": "We are powerful warriors, here to hunt the Blood Queen!",
                "line": 74,
                "start_time": "0-04-20.160000",
                "end_time": "0-04-23.530000",
                "url": "https://drive.google.com/file/d/1YhGDg6k3dRTZx7ZkUM4ZsMxryF-ySNfJ/view?usp=drivesdk"
            },
            {
                "name": "Quinton",
                "name_variant": "Quinton",
                "subtitle": "What's so funny?",
                "line": 75,
                "start_time": "0-04-26.660000",
                "end_time": "0-04-27.990000",
                "url": "https://drive.google.com/file/d/1J59XGvNS-olgSQqEAB9g7GG4pJZSq-xr/view?usp=drivesdk"
            },
            {
                "name": "White Demon",
                "name_variant": "White Demon",
                "subtitle": "I thought I was a fool,",
                "line": 76,
                "start_time": "0-04-27.990000",
                "end_time": "0-04-30.780000",
                "url": "https://drive.google.com/file/d/1Y5OS-6wViGPIlO6PrmJWv7Df8rvMZ4u7/view?usp=drivesdk"
            },
            {
                "name": "White Demon",
                "name_variant": "White Demon",
                "subtitle": "which is why it's always so amusing to find someone more foolish than I am.",
                "line": 77,
                "start_time": "0-04-30.780000",
                "end_time": "0-04-35.360000",
                "url": "https://drive.google.com/file/d/1smdJy5JpV1onH9QM503ny5J0MCcVpHzt/view?usp=drivesdk"
            },
            {
                "name": "White Demon",
                "name_variant": "White Demon",
                "subtitle": "This is what happens to fools who dare challenge the Blood Queen!",
                "line": 78,
                "start_time": "0-04-35.830000",
                "end_time": "0-04-39.580000",
                "url": "https://drive.google.com/file/d/1RMdUS0xDyS_IL7CtY-Uaw5eVRqP7ZWQa/view?usp=drivesdk"
            },
            {
                "name": "White Demon",
                "name_variant": "White Demon",
                "subtitle": "I lost my right arm, and now I'm kept here as a pathetic watchdog on a leash.",
                "line": 79,
                "start_time": "0-04-39.580000",
                "end_time": "0-04-44.760000",
                "url": "https://drive.google.com/file/d/1O35p0Ffh91pB5_Z-TNmenf5RhDHA40Jj/view?usp=drivesdk"
            },
            {
                "name": "Quinton",
                "name_variant": "Quinton",
                "subtitle": "We're not small potatoes like you.",
                "line": 80,
                "start_time": "0-04-45.700000",
                "end_time": "0-04-48.700000",
                "url": "https://drive.google.com/file/d/1SZShm7W3gOBFBG65maa4-fLKREuurBWj/view?usp=drivesdk"
            },
            {
                "name": "Goldy Gilded",
                "name_variant": "Goldy Gilded",
                "subtitle": "Here's something you can think about in the afterlife:",
                "line": 81,
                "start_time": "0-04-48.700000",
                "end_time": "0-04-50.910000",
                "url": "https://drive.google.com/file/d/1gQpQNm60TBCk9pmv55KTukaFethT9r8T/view?usp=drivesdk"
            },
            {
                "name": "Goldy Gilded",
                "name_variant": "Goldy Gilded",
                "subtitle": "My power level is 4,317.5!",
                "line": 82,
                "start_time": "0-04-50.910000",
                "end_time": "0-04-54.330000",
                "url": "https://drive.google.com/file/d/1M6VQgZNc2XxdFymLMcAYy1571dXOmGkT/view?usp=drivesdk"
            },
            {
                "name": "White Demon",
                "name_variant": "White Demon",
                "subtitle": "I was like you once. They called me the White Devil.",
                "line": 83,
                "start_time": "0-04-54.330000",
                "end_time": "0-04-59.440000",
                "url": "https://drive.google.com/file/d/1-T4UJ7CqfKRbR5ur3E7Y4jurrPuIKQ71/view?usp=drivesdk"
            },
            {
                "name": "Quinton",
                "name_variant": "Quinton",
                "subtitle": "The White Devil?",
                "line": 84,
                "start_time": "0-05-00.720000",
                "end_time": "0-05-01.990000",
                "url": "https://drive.google.com/file/d/1EEvc8Sn5AAj5MuVNy1mxlN53zgx2hGu3/view?usp=drivesdk"
            },
            {
                "name": "Quinton",
                "name_variant": "Quinton",
                "subtitle": "The wanted criminal with the huge bounty on his head?",
                "line": 85,
                "start_time": "0-05-01.990000",
                "end_time": "0-05-04.620000",
                "url": "https://drive.google.com/file/d/1ZEGlb45JDzg93mUpu-bbxbJknNj9jQeO/view?usp=drivesdk"
            },
            {
                "name": "White Demon",
                "name_variant": "White Demon",
                "subtitle": "But here, I'm nothing more than a lowly watchdog!",
                "line": 86,
                "start_time": "0-05-04.700000",
                "end_time": "0-05-07.820000",
                "url": "https://drive.google.com/file/d/1CjGOXEQjrD4Aqo_qAvSEbLNNQAcPQr7j/view?usp=drivesdk"
            },
            {
                "name": "White Demon",
                "name_variant": "White Demon",
                "subtitle": "Ripping apart idiots like you who don't know their place",
                "line": 87,
                "start_time": "0-05-07.820000",
                "end_time": "0-05-11.370000",
                "url": "https://drive.google.com/file/d/1cRDCHNLzVP3sgoZPFot24sJay3LmhoHi/view?usp=drivesdk"
            },
            {
                "name": "White Demon",
                "name_variant": "White Demon",
                "subtitle": "is the only joy I have left in life!",
                "line": 88,
                "start_time": "0-05-11.370000",
                "end_time": "0-05-14.400000",
                "url": "https://drive.google.com/file/d/1lSXnzIzMQP_fN58CKdru-nA2XZ2i-9rF/view?usp=drivesdk"
            },
            {
                "name": "Quinton",
                "name_variant": "Quinton",
                "subtitle": "Here he comes!",
                "line": 89,
                "start_time": "0-05-15.290000",
                "end_time": "0-05-16.240000",
                "url": "https://drive.google.com/file/d/14ACNVtwYEyY_ZAB_lkVjZ-m0crqLQWdV/view?usp=drivesdk"
            },
            {
                "name": "Goldy Gilded",
                "name_variant": "Goldy Gilded",
                "subtitle": "Right!",
                "line": 90,
                "start_time": "0-05-16.240000",
                "end_time": "0-05-17.440000",
                "url": "https://drive.google.com/file/d/1V_QUpnGOCHn34A7TA46pPK1xySzDPxxD/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yes, this is perfect!",
                "line": 91,
                "start_time": "0-05-30.370000",
                "end_time": "0-05-32.620000",
                "url": "https://drive.google.com/file/d/1_ioJ_nfbiVyaIBqQqOdqYlfluqEwyQma/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The Lawless City is even more of a dump than I imagined!",
                "line": 92,
                "start_time": "0-05-32.620000",
                "end_time": "0-05-36.620000",
                "url": "https://drive.google.com/file/d/1kQovCK7KmkfquHyWA6kTiJAGf9t0cpfx/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Stop gawking.",
                "line": 93,
                "start_time": "0-05-36.620000",
                "end_time": "0-05-38.440000",
                "url": "https://drive.google.com/file/d/1oVu5NxZwdQ7Y24aQ3YKGyz0qjUQ_z_Gy/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "You don't want to catch the attention of any weirdos.",
                "line": 94,
                "start_time": "0-05-38.830000",
                "end_time": "0-05-41.080000",
                "url": "https://drive.google.com/file/d/17R0fJbFy__DUogYXVSU9j1z597YnlDJh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yes, ma'am.",
                "line": 95,
                "start_time": "0-05-41.080000",
                "end_time": "0-05-42.690000",
                "url": "https://drive.google.com/file/d/1UyvoQyKewD4W15q5t7bmydAo80hljOjl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Hey...",
                "line": 96,
                "start_time": "0-05-43.400000",
                "end_time": "0-05-44.490000",
                "url": "https://drive.google.com/file/d/1_0-Y4_09GzK6GehqzleeeBhY3_54bwvA/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "What?",
                "line": 97,
                "start_time": "0-05-44.490000",
                "end_time": "0-05-45.650000",
                "url": "https://drive.google.com/file/d/1IauwfwalMSz1sVlpuJ-GSqplprnKWkX3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Aren't we going to that tower?",
                "line": 98,
                "start_time": "0-05-45.990000",
                "end_time": "0-05-47.950000",
                "url": "https://drive.google.com/file/d/1yjA3eITtEVvaiJEUrkrvz_k8CY2hFxz9/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "You are so...",
                "line": 99,
                "start_time": "0-05-47.950000",
                "end_time": "0-05-49.610000",
                "url": "https://drive.google.com/file/d/12wDQ6Sk_gH-rMaWyl5i-zaZWrd7WJ9aj/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "First, I'm going to the Dark Knight Association for a strategy meeting.",
                "line": 100,
                "start_time": "0-05-50.280000",
                "end_time": "0-05-53.080000",
                "url": "https://drive.google.com/file/d/1ce93fckMM07FV9ssru6fB6oc6s97vkR2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Dark Knight Association?",
                "line": 101,
                "start_time": "0-05-53.080000",
                "end_time": "0-05-54.580000",
                "url": "https://drive.google.com/file/d/1Ni1crFsEhLs3ien9l7_nxBKh4YvUaeHA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Never saw any of those back home.",
                "line": 102,
                "start_time": "0-05-54.580000",
                "end_time": "0-05-56.280000",
                "url": "https://drive.google.com/file/d/1ezAUA9kWOInYWzjArXmbyAF6vF3XtaFz/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Because we have our own Knight Order.",
                "line": 103,
                "start_time": "0-05-56.280000",
                "end_time": "0-05-58.410000",
                "url": "https://drive.google.com/file/d/1U5QgpBBlJzqJWmVMUPuMQMHv8oNAXZYD/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "The Dark Knight Association is an unofficial organization",
                "line": 104,
                "start_time": "0-05-58.410000",
                "end_time": "0-06-00.910000",
                "url": "https://drive.google.com/file/d/1rbCzjpeHlbdppmrRaaORIvbEDgctatAB/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "founded for Dark Knights that don't belong to any public institutions.",
                "line": 105,
                "start_time": "0-06-00.910000",
                "end_time": "0-06-03.740000",
                "url": "https://drive.google.com/file/d/1LipYRdx0WTvdwABXOo5g__HSwaXGkCtb/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "When a government or landowner cannot cover...",
                "line": 106,
                "start_time": "0-06-03.740000",
                "end_time": "0-06-05.550000",
                "url": "https://drive.google.com/file/d/1_86trxTggZFMLGsBeoWRMrrW0E_gal5M/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The summer of my last year of high school...",
                "line": 106,
                "start_time": "0-06-03.740000",
                "end_time": "0-06-05.550000",
                "url": "https://drive.google.com/file/d/1_86trxTggZFMLGsBeoWRMrrW0E_gal5M/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I, Minoru Kageno, was following the road to becoming the Eminence in Shadow,",
                "line": 107,
                "start_time": "0-06-05.550000",
                "end_time": "0-06-09.370000",
                "url": "https://drive.google.com/file/d/155djgec0kTTdFEUJ0VtCxJl6Sbm09h8q/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "when my journey came to an abrupt end.",
                "line": 108,
                "start_time": "0-06-09.370000",
                "end_time": "0-06-11.610000",
                "url": "https://drive.google.com/file/d/10kTr8ATO9owjKZGQCgoKRrOScn5Q4cwz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Or so it seemed.",
                "line": 109,
                "start_time": "0-06-12.260000",
                "end_time": "0-06-13.660000",
                "url": "https://drive.google.com/file/d/1LHnPmAp9KWVpB0gNG2j98gxtmjJjmEzj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But after one thing and another, this stuff turned into that...",
                "line": 110,
                "start_time": "0-06-13.660000",
                "end_time": "0-06-18.480000",
                "url": "https://drive.google.com/file/d/1mZsTS_iGpDmQsdyyFOXxio1TAD1GcnHD/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And that, I don't even know...",
                "line": 111,
                "start_time": "0-06-18.980000",
                "end_time": "0-06-20.980000",
                "url": "https://drive.google.com/file/d/111x4P21ML4ziDakVm2fVgZf6D34uvUcw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "This, this, and that were all like this...",
                "line": 112,
                "start_time": "0-06-21.230000",
                "end_time": "0-06-22.730000",
                "url": "https://drive.google.com/file/d/1b0mpFMAQdszgglkShnk9cTZied0PjRmm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And it was kind of like this...",
                "line": 113,
                "start_time": "0-06-22.730000",
                "end_time": "0-06-24.480000",
                "url": "https://drive.google.com/file/d/13mrYEEkFAfEgHd28ClH-HkSMLCLMjvrR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Then all this happened, aaand...",
                "line": 114,
                "start_time": "0-06-24.730000",
                "end_time": "0-06-27.740000",
                "url": "https://drive.google.com/file/d/1VijQ0k-EVmz4scxIfKUQbotdRSN3IrgM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Here we are.",
                "line": 115,
                "start_time": "0-06-28.100000",
                "end_time": "0-06-29.080000",
                "url": "https://drive.google.com/file/d/1LEvlAc0UHpNzay3YmwGeOHVVLbubD4am/view?usp=drivesdk"
            },
            {
                "name": "Referee",
                "name_variant": "Referee",
                "subtitle": "And that's it!",
                "line": 116,
                "start_time": "0-06-29.160000",
                "end_time": "0-06-30.200000",
                "url": "https://drive.google.com/file/d/1Jx3ZELxxkvzYbGBoRobgRCbUIi5ggUIe/view?usp=drivesdk"
            },
            {
                "name": "Referee",
                "name_variant": "Referee",
                "subtitle": "Imatry Nottaloos is down for the count!",
                "line": 117,
                "start_time": "0-06-30.620000",
                "end_time": "0-06-33.200000",
                "url": "https://drive.google.com/file/d/1buwMQucAG75LGpuJ9c7MS2bJck5IHJ79/view?usp=drivesdk"
            },
            {
                "name": "Referee",
                "name_variant": "Referee",
                "subtitle": "And the winner is...",
                "line": 118,
                "start_time": "0-06-33.200000",
                "end_time": "0-06-34.660000",
                "url": "https://drive.google.com/file/d/1RRNICr1CXIzpe1f45IOoaUt0p6JXTuVT/view?usp=drivesdk"
            },
            {
                "name": "Referee",
                "name_variant": "Referee",
                "subtitle": "Claire Kagenou!",
                "line": 119,
                "start_time": "0-06-35.120000",
                "end_time": "0-06-36.780000",
                "url": "https://drive.google.com/file/d/1xWJ0m6K4iXuYXp6YVT1dL4Kndsy7Z1P3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "My sister won the Bushin Festival championship.",
                "line": 120,
                "start_time": "0-06-37.830000",
                "end_time": "0-06-40.660000",
                "url": "https://drive.google.com/file/d/1OuVLFynmPVxdPv7qRhAV2Cx772UJupta/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "To celebrate, I used my connections with Gamma and got dressed up for a free...",
                "line": 121,
                "start_time": "0-06-40.950000",
                "end_time": "0-06-46.130000",
                "url": "https://drive.google.com/file/d/1q8CHecNY6w701pb7SCBCqfqlgFr9vkqe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Excuse me, I mean high-end, fancy dinner at a Mitsugoshi restaurant, but...",
                "line": 122,
                "start_time": "0-06-46.130000",
                "end_time": "0-06-50.280000",
                "url": "https://drive.google.com/file/d/1NFr2N7b8DTJCwsGfpWsFgg3ErNG0yBDm/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "I'm going to the Lawless City to exterminate vampires.",
                "line": 123,
                "start_time": "0-06-50.280000",
                "end_time": "0-06-53.590000",
                "url": "https://drive.google.com/file/d/1qZqQRD5330P083Mfa-q4SUF54pj5AaHp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The tournament ended and she headed right off to battle.",
                "line": 124,
                "start_time": "0-06-54.120000",
                "end_time": "0-06-56.280000",
                "url": "https://drive.google.com/file/d/1kMF31AiBx1dJS892LtBtwz8yrC81sMb-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I know she's my sister,",
                "line": 125,
                "start_time": "0-06-56.280000",
                "end_time": "0-06-57.580000",
                "url": "https://drive.google.com/file/d/1KDIdL0bBI90tdG8_wCQ3HPuB3PojvlFY/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "but even I wonder how she can be so hot-blooded.",
                "line": 126,
                "start_time": "0-06-57.580000",
                "end_time": "0-07-00.110000",
                "url": "https://drive.google.com/file/d/1gFjAzJVq484TO_r7W1Ge_9xLjU04HUQA/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "I brought you here with me out of consideration for your future, you know.",
                "line": 127,
                "start_time": "0-07-02.530000",
                "end_time": "0-07-06.080000",
                "url": "https://drive.google.com/file/d/1gt_57WfppFJa2wryRV1IwFsxVNx1HGlo/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "My future?",
                "line": 128,
                "start_time": "0-07-06.080000",
                "end_time": "0-07-07.230000",
                "url": "https://drive.google.com/file/d/1_2CDx9KVnwcR27e96xBehA8MlceZy7i4/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "If you stay behind me and do everything I say,",
                "line": 129,
                "start_time": "0-07-07.230000",
                "end_time": "0-07-09.990000",
                "url": "https://drive.google.com/file/d/1ZQOMJeVApQ1Y5YAcwSpAu-YN1QBhic2G/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "I'll pry open a spot for you in Midgar's Knight Order after you graduate.",
                "line": 130,
                "start_time": "0-07-09.990000",
                "end_time": "0-07-13.200000",
                "url": "https://drive.google.com/file/d/1uMBsvJhpagryAcVBYMrbk8dCzOVe38t4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Oh, okay.",
                "line": 131,
                "start_time": "0-07-13.200000",
                "end_time": "0-07-14.490000",
                "url": "https://drive.google.com/file/d/1RbErRHyZYVgiCbCReYy9a3XaUL-kG7xs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "So she's trying bulk up my resume to make me a government employee.",
                "line": 132,
                "start_time": "0-07-14.490000",
                "end_time": "0-07-17.030000",
                "url": "https://drive.google.com/file/d/12Oj-oXzEljUY3DJbiA_cyGVrghPIpHI0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Come to think of it, I haven't really considered what I'll do after I graduate.",
                "line": 133,
                "start_time": "0-07-17.030000",
                "end_time": "0-07-21.160000",
                "url": "https://drive.google.com/file/d/1UpbPZDoByT3dc-yQ4PjLicwU805iIwXz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Claire will inherit the estate out in the boondocks,",
                "line": 134,
                "start_time": "0-07-21.160000",
                "end_time": "0-07-23.410000",
                "url": "https://drive.google.com/file/d/16dZDEn8VPn_3Pllj0bsuQu8o_CadELWA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "so I think they'll stick me in some kind of job somewhere.",
                "line": 135,
                "start_time": "0-07-23.410000",
                "end_time": "0-07-27.130000",
                "url": "https://drive.google.com/file/d/1OzTQjW0winY3L1Ca4WepPn3Y5dyK-nXN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "As long as I can do what I want to do, I don't think I care what kind of a job I end up in.",
                "line": 136,
                "start_time": "0-07-27.490000",
                "end_time": "0-07-31.120000",
                "url": "https://drive.google.com/file/d/18Yc_Fd4NPJty7hI_YcOHzoCuUvPHPp8T/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "And what is it that you want to do?",
                "line": 137,
                "start_time": "0-07-31.120000",
                "end_time": "0-07-33.090000",
                "url": "https://drive.google.com/file/d/1bGcG4Bekwd9p22Qu79qfgnLb2eiHttpk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "A secret.",
                "line": 138,
                "start_time": "0-07-33.090000",
                "end_time": "0-07-34.330000",
                "url": "https://drive.google.com/file/d/1eml6iCwCMMxn1Fgbb1XirBJ8Svpo83oC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I make it a point not to tell anyone the things that really matter to me.",
                "line": 139,
                "start_time": "0-07-34.330000",
                "end_time": "0-07-37.870000",
                "url": "https://drive.google.com/file/d/1Vk2hHzsKp0VPS0padE6dGjiQvkvkGDqr/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "You're just making that up.",
                "line": 140,
                "start_time": "0-07-37.870000",
                "end_time": "0-07-39.830000",
                "url": "https://drive.google.com/file/d/1_Af0nhsIQ0Su1PPw_7lbvgNxoRlEBmLL/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Stop trying to cover up the fact that you just haven't thought about it.",
                "line": 141,
                "start_time": "0-07-39.830000",
                "end_time": "0-07-42.620000",
                "url": "https://drive.google.com/file/d/1oXi0dfDe80xbUoEeDd2yrumnnHUC2iM4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Why do you assume that?",
                "line": 142,
                "start_time": "0-07-42.620000",
                "end_time": "0-07-44.530000",
                "url": "https://drive.google.com/file/d/1DYAd61bnXLI_mqO0WqSJ59u3bKccLC-U/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Whatever, it's fine.",
                "line": 143,
                "start_time": "0-07-44.530000",
                "end_time": "0-07-46.060000",
                "url": "https://drive.google.com/file/d/1476abcjdTgpGnVHjW207EJdz-yqEKqVb/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "No, it's not.",
                "line": 144,
                "start_time": "0-07-46.060000",
                "end_time": "0-07-47.980000",
                "url": "https://drive.google.com/file/d/1oesUAoOj7vW7y46WCuGf98aeaSqamNbk/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "It's not fine.",
                "line": 145,
                "start_time": "0-07-48.700000",
                "end_time": "0-07-50.280000",
                "url": "https://drive.google.com/file/d/1h6Hx-H7ZxE09qyDvGbU6RgbNqngzKZxb/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "Hello there! Come take a look, my beautiful young lady!",
                "line": 146,
                "start_time": "0-07-52.830000",
                "end_time": "0-07-55.820000",
                "url": "https://drive.google.com/file/d/1Pb7CtIbEgwkSEZ0cfQDhLtzv2sjqjoX5/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "I just got a new stock of high-quality pets!",
                "line": 147,
                "start_time": "0-07-56.080000",
                "end_time": "0-07-58.190000",
                "url": "https://drive.google.com/file/d/1RAhx4rKGQBqyoyVUh7__KsdcT51bUjq8/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "You mean me?",
                "line": 148,
                "start_time": "0-07-59.660000",
                "end_time": "0-08-00.660000",
                "url": "https://drive.google.com/file/d/1l5IWQ18nMOCJ-6unu53xUy1F1zEWu6Ba/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "Yes, I mean you!",
                "line": 149,
                "start_time": "0-08-00.660000",
                "end_time": "0-08-02.030000",
                "url": "https://drive.google.com/file/d/1hqjoSNduYBglYZY72b52A4b97jXP9Cso/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "The most beautiful young lady in the world!",
                "line": 150,
                "start_time": "0-08-02.030000",
                "end_time": "0-08-04.620000",
                "url": "https://drive.google.com/file/d/1d1WGfGdcUNgUw1_Ej7AgKamGPaJqezDT/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "You have a good eye.",
                "line": 151,
                "start_time": "0-08-04.620000",
                "end_time": "0-08-05.910000",
                "url": "https://drive.google.com/file/d/1TkTKz1lu_XaV48TkcZdO6MIonX4g57E5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "He's buttering you up, Sis.",
                "line": 152,
                "start_time": "0-08-05.910000",
                "end_time": "0-08-07.540000",
                "url": "https://drive.google.com/file/d/1qDkdP0pApP-S3oTqIXC4E1vh5vBFlqSn/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "You be quiet.",
                "line": 153,
                "start_time": "0-08-07.540000",
                "end_time": "0-08-09",
                "url": "https://drive.google.com/file/d/1Yt2Bd9GYBpFCPyM_YbeKSmcXbYB-zkTB/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "But please, come look, miss!",
                "line": 154,
                "start_time": "0-08-09",
                "end_time": "0-08-10.910000",
                "url": "https://drive.google.com/file/d/194UeQNL5jcJ-kuGURooc50sJ8_SDDrUL/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "These lucky finds just came in this morning!",
                "line": 155,
                "start_time": "0-08-10.910000",
                "end_time": "0-08-13.490000",
                "url": "https://drive.google.com/file/d/1A-zNWYXiwhkSbkFOlW6L7YgFkfyH3bT4/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "This is today's hot item!",
                "line": 156,
                "start_time": "0-08-13.490000",
                "end_time": "0-08-15.260000",
                "url": "https://drive.google.com/file/d/1QHdPHfjEqKtVO7nQkqyw1f3ypgi-zM14/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "The pet Dark Knight, Little Goldy!",
                "line": 157,
                "start_time": "0-08-15.260000",
                "end_time": "0-08-18.160000",
                "url": "https://drive.google.com/file/d/1EsFpO30102Wn5fsyRHuHwzPzbENApc66/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "What do you say?",
                "line": 158,
                "start_time": "0-08-18.160000",
                "end_time": "0-08-18.970000",
                "url": "https://drive.google.com/file/d/1bG4GOOhiV_sI9rDeuHoLCqrH6l998I4h/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "He's quite the handsome specimen, a perfect fit for such a lovely lady.",
                "line": 159,
                "start_time": "0-08-18.970000",
                "end_time": "0-08-21.780000",
                "url": "https://drive.google.com/file/d/105ZT8C1DXv2CCuBJfAu8URvluprFr7Rb/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "He's all beat up.",
                "line": 160,
                "start_time": "0-08-21.780000",
                "end_time": "0-08-23.160000",
                "url": "https://drive.google.com/file/d/1bgNLH-gWX9BCoxqSxsynET58v1mFta2t/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Can't you at least handle your products more carefully?",
                "line": 161,
                "start_time": "0-08-23.160000",
                "end_time": "0-08-25.730000",
                "url": "https://drive.google.com/file/d/1CS4vgbNoFIoyjDFAiaGM6iRnMTqenxkb/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "I guess he did get a little banged up in transit.",
                "line": 162,
                "start_time": "0-08-26.280000",
                "end_time": "0-08-29.690000",
                "url": "https://drive.google.com/file/d/1vuI1JHyPhdmOZgqjOCNh6WkPA9z2qZCf/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "All right, he's worth 30 million zeni,",
                "line": 163,
                "start_time": "0-08-29.690000",
                "end_time": "0-08-31.780000",
                "url": "https://drive.google.com/file/d/13xBdACq1pw8fpSe-PagdU6LVac3BAnG6/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "but I'll let you have him for 27.",
                "line": 164,
                "start_time": "0-08-31.780000",
                "end_time": "0-08-34.580000",
                "url": "https://drive.google.com/file/d/1fSATMxF4CbFYdA6yIaGiOQ89c9iKoy78/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "but I'll let you have him for 27.",
                "line": 165,
                "start_time": "0-08-33.160000",
                "end_time": "0-08-34.580000",
                "url": "https://drive.google.com/file/d/1ZXFwoWl_PYqJqXY5ANlyGCJn6mRKqZIk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "He looks kind of familiar...",
                "line": 165,
                "start_time": "0-08-33.160000",
                "end_time": "0-08-34.580000",
                "url": "https://drive.google.com/file/d/1ZXFwoWl_PYqJqXY5ANlyGCJn6mRKqZIk/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "It's a little steep.",
                "line": 166,
                "start_time": "0-08-34.580000",
                "end_time": "0-08-35.650000",
                "url": "https://drive.google.com/file/d/1s_D9JGrH1L458zw5M-P4UDbiSazafWHG/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "Okay, I get it.",
                "line": 167,
                "start_time": "0-08-35.650000",
                "end_time": "0-08-37.240000",
                "url": "https://drive.google.com/file/d/16vGjwSJuGpPN2r3vSG0xpMq1BiLuQg9W/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "In that case, I'll give you a special deal, and throw in this little guy!",
                "line": 168,
                "start_time": "0-08-37.240000",
                "end_time": "0-08-39.410000",
                "url": "https://drive.google.com/file/d/1cjc7Wqyv0jaw5kdoc439H7bmNHb8GgE0/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "Another fresh new catch, Cue Ball Quinton!",
                "line": 169,
                "start_time": "0-08-39.410000",
                "end_time": "0-08-42.160000",
                "url": "https://drive.google.com/file/d/1M-qxOoJHos0lAqvdkSvDlpoXsE1o1ve3/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "Whaddaya say? Two pets for the low price of 40 million zeni!",
                "line": 170,
                "start_time": "0-08-42.160000",
                "end_time": "0-08-44.330000",
                "url": "https://drive.google.com/file/d/1hMnAHF4QZicCchzoVCzF3xAdDPQDe3w8/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "You can't possibly say no to that!",
                "line": 171,
                "start_time": "0-08-44.330000",
                "end_time": "0-08-46.280000",
                "url": "https://drive.google.com/file/d/10eYRdt1kKJ1c57O9-oWU25runY-lCMpL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "He's been sliced through the middle.",
                "line": 172,
                "start_time": "0-08-46.280000",
                "end_time": "0-08-47.980000",
                "url": "https://drive.google.com/file/d/1XoB3JHkgW6kV_pAXq3zJKsO4VkkfNfGy/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "Okay, okay! 37 million zeni!",
                "line": 173,
                "start_time": "0-08-48.950000",
                "end_time": "0-08-51.330000",
                "url": "https://drive.google.com/file/d/11cBc9l2D3e7nWst65DWGWC-5YhFCSkko/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "I can't go any lower than that!",
                "line": 174,
                "start_time": "0-08-51.330000",
                "end_time": "0-08-52.830000",
                "url": "https://drive.google.com/file/d/1YOGq-vE2UWa9paBe_fItMI1sb4DMd9Wl/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Not interested.",
                "line": 175,
                "start_time": "0-08-52.830000",
                "end_time": "0-08-53.830000",
                "url": "https://drive.google.com/file/d/138LICJOZK78eMSwh9fm5RVdl25nRKbYI/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "Wow, you drive a hard bargain!",
                "line": 176,
                "start_time": "0-08-53.830000",
                "end_time": "0-08-55.870000",
                "url": "https://drive.google.com/file/d/1qETnQ5M9fSRFO5RVuB0LFt7ugKOQrd9A/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I've seen him somewhere before...",
                "line": 176,
                "start_time": "0-08-53.830000",
                "end_time": "0-08-55.870000",
                "url": "https://drive.google.com/file/d/1qETnQ5M9fSRFO5RVuB0LFt7ugKOQrd9A/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "All right, I'll let you have 'em for 35 million!",
                "line": 177,
                "start_time": "0-08-55.870000",
                "end_time": "0-08-58.780000",
                "url": "https://drive.google.com/file/d/1ve19Ey6_Ao6N5pqCIt9WivD8dK8uPc2F/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "I'm sorry, but...",
                "line": 178,
                "start_time": "0-08-58.780000",
                "end_time": "0-09-00.100000",
                "url": "https://drive.google.com/file/d/1Dhf-AkjCYyyb-nj-5sUbH1pE1PLRJIM1/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "I have all the pets I need.",
                "line": 179,
                "start_time": "0-09-00.530000",
                "end_time": "0-09-02.240000",
                "url": "https://drive.google.com/file/d/1ZWCGvKVfiHs-BNVpIs9EcHPMzZ8ulMa5/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "I see, so you prefer younger pups.",
                "line": 180,
                "start_time": "0-09-02.240000",
                "end_time": "0-09-04.490000",
                "url": "https://drive.google.com/file/d/1H3mowstwMD_8Tqx27mCUoAznjWzUHB6t/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "In that case, I think I'm expecting a Dark Knight Academy student deep in debt...",
                "line": 181,
                "start_time": "0-09-04.490000",
                "end_time": "0-09-05.870000",
                "url": "https://drive.google.com/file/d/10yv-s32IjyraLmUqwUAaefpxD1Nq1prU/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "In that case, I think I'm expecting a Dark Knight Academy student deep in debt...",
                "line": 182,
                "start_time": "0-09-05.870000",
                "end_time": "0-09-08.060000",
                "url": "https://drive.google.com/file/d/1VdxebAjA5X2VKt0Beu0wf5JudeavEpOx/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Come on, we're walking.",
                "line": 182,
                "start_time": "0-09-05.870000",
                "end_time": "0-09-08.060000",
                "url": "https://drive.google.com/file/d/1VdxebAjA5X2VKt0Beu0wf5JudeavEpOx/view?usp=drivesdk"
            },
            {
                "name": "Merchant",
                "name_variant": "Merchant",
                "subtitle": "I think it was Skull, or Skinny...",
                "line": 183,
                "start_time": "0-09-08.060000",
                "end_time": "0-09-10.780000",
                "url": "https://drive.google.com/file/d/1Drcx4U89XKh-JxmqA6oqoJvRmF7g0RUq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I can't walk when you're dragging me.",
                "line": 183,
                "start_time": "0-09-08.060000",
                "end_time": "0-09-10.780000",
                "url": "https://drive.google.com/file/d/1Drcx4U89XKh-JxmqA6oqoJvRmF7g0RUq/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "If I don't keep a hand on you, you'll get lost.",
                "line": 184,
                "start_time": "0-09-10.780000",
                "end_time": "0-09-13.530000",
                "url": "https://drive.google.com/file/d/1mMUpq063fWOv84XRWF3Vj4oxBXng1v6h/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "No, I won't.",
                "line": 185,
                "start_time": "0-09-13.530000",
                "end_time": "0-09-14.530000",
                "url": "https://drive.google.com/file/d/1w8TugDP-iW2JQlq6BDMlFhIEKbKau-BY/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Yes, you will.",
                "line": 186,
                "start_time": "0-09-14.530000",
                "end_time": "0-09-15.530000",
                "url": "https://drive.google.com/file/d/1Rm8RhbVdQagOrm3m_9uiLej8BoE0q6Hw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "No, I will not.",
                "line": 187,
                "start_time": "0-09-15.530000",
                "end_time": "0-09-16.830000",
                "url": "https://drive.google.com/file/d/13YWemehzIGvrEciZRWg4-gqJhp0PtVGz/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "I know for a fact you will.",
                "line": 188,
                "start_time": "0-09-16.830000",
                "end_time": "0-09-18.990000",
                "url": "https://drive.google.com/file/d/1hyEXRbuLzjx_9cCgUYEamUnhlUHb68Zr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I did.",
                "line": 189,
                "start_time": "0-09-18.990000",
                "end_time": "0-09-20.440000",
                "url": "https://drive.google.com/file/d/1yAldqnk3YA9_mBlhOhjwV_UOgjbLtvbO/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I just came out for a minute because I was bored at the inn.",
                "line": 190,
                "start_time": "0-09-23.330000",
                "end_time": "0-09-27.820000",
                "url": "https://drive.google.com/file/d/12ZjW9QHGedFp6LxA9xfAqeD9tIim3MpT/view?usp=drivesdk"
            },
            {
                "name": "Pickpocket",
                "name_variant": "Pickpocket",
                "subtitle": "Oops, sorry.",
                "line": 191,
                "start_time": "0-09-28.660000",
                "end_time": "0-09-30.480000",
                "url": "https://drive.google.com/file/d/1mIABgq7Om1yg2pGhsw6TOutPq9K7RE0W/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And that's what we call karma.",
                "line": 192,
                "start_time": "0-09-33.370000",
                "end_time": "0-09-35.570000",
                "url": "https://drive.google.com/file/d/18r2p4De1kD3SZ7swYxZDmdazbKAXu2Ms/view?usp=drivesdk"
            },
            {
                "name": "Pickpocket",
                "name_variant": "Pickpocket",
                "subtitle": "Coming through.",
                "line": 193,
                "start_time": "0-09-38.080000",
                "end_time": "0-09-39.570000",
                "url": "https://drive.google.com/file/d/1Yk24xPdYRw3h5i-mjS0GXkIlkp-_NqOg/view?usp=drivesdk"
            },
            {
                "name": "Pickpocket",
                "name_variant": "Pickpocket",
                "subtitle": "Sorry about that, kid.",
                "line": 194,
                "start_time": "0-09-44.850000",
                "end_time": "0-09-46.560000",
                "url": "https://drive.google.com/file/d/18uzvNKyNTeGP4RlHPYmzE_yb2Gg0Aq9S/view?usp=drivesdk"
            },
            {
                "name": "Pickpocket",
                "name_variant": "Pickpocket",
                "subtitle": "You need to be getting home, little boy.",
                "line": 195,
                "start_time": "0-09-46.560000",
                "end_time": "0-09-48.770000",
                "url": "https://drive.google.com/file/d/1AoUeXxaf__Sek3PKzUp2txPM14JJ3c4S/view?usp=drivesdk"
            },
            {
                "name": "Pickpocket",
                "name_variant": "Pickpocket",
                "subtitle": "Thanks for doing business!",
                "line": 196,
                "start_time": "0-09-48.770000",
                "end_time": "0-09-50.350000",
                "url": "https://drive.google.com/file/d/1xCMWcy8yyZ3wOz4QOazNAPU4EAPSBPzS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It's always been a dog eat dog world.",
                "line": 197,
                "start_time": "0-09-52.450000",
                "end_time": "0-09-54.830000",
                "url": "https://drive.google.com/file/d/1PnpHU4wEWsJzP9Qwgv_6_ll3hLBm2TUQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I can't believe I'm getting money just by taking a stroll.",
                "line": 198,
                "start_time": "0-09-54.830000",
                "end_time": "0-09-57.370000",
                "url": "https://drive.google.com/file/d/1aUV8w9sXZHnXL_c1OozmpGrQuyRAdJ-Y/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "This city is heaven for me.",
                "line": 199,
                "start_time": "0-09-57.370000",
                "end_time": "0-10-00.070000",
                "url": "https://drive.google.com/file/d/1eESLjPJUgFHuK1xp7UNgX7q4NoG3xU2h/view?usp=drivesdk"
            },
            {
                "name": "Civilian",
                "name_variant": "Civilian",
                "subtitle": "Now you've really done it, punk!",
                "line": 200,
                "start_time": "0-10-00.620000",
                "end_time": "0-10-03.030000",
                "url": "https://drive.google.com/file/d/1_2DOZZmByHDzSK5u-h4e6nJKrDwjgWBe/view?usp=drivesdk"
            },
            {
                "name": "Civilian",
                "name_variant": "Civilian",
                "subtitle": "How are you gonna make it up to us, huh?!",
                "line": 201,
                "start_time": "0-10-05.280000",
                "end_time": "0-10-06.910000",
                "url": "https://drive.google.com/file/d/1HWtlyUKZ-oRJZzEaDS2Kb4bW7Jnqitg5/view?usp=drivesdk"
            },
            {
                "name": "Civilian",
                "name_variant": "Civilian",
                "subtitle": "I'm in a bad enough mood already!",
                "line": 202,
                "start_time": "0-10-06.910000",
                "end_time": "0-10-09.030000",
                "url": "https://drive.google.com/file/d/1KuEUMS86aeOKmUf3C7NpaagBT5dXD-Ek/view?usp=drivesdk"
            },
            {
                "name": "Civilian",
                "name_variant": "Civilian",
                "subtitle": "I lost my bet, my dear sweet Marie turned me down,",
                "line": 203,
                "start_time": "0-10-09.030000",
                "end_time": "0-10-11.380000",
                "url": "https://drive.google.com/file/d/1tvkpN-AvMdTv9tptEwlipC0CqHwrLjsi/view?usp=drivesdk"
            },
            {
                "name": "Civilian",
                "name_variant": "Civilian",
                "subtitle": "and it's all your fault!",
                "line": 204,
                "start_time": "0-10-11.660000",
                "end_time": "0-10-14.030000",
                "url": "https://drive.google.com/file/d/1ic1mp3RnuSG-PRtRJpcc4Zz5q4of8k-8/view?usp=drivesdk"
            },
            {
                "name": "Civilian",
                "name_variant": "Civilian",
                "subtitle": "You rotten little\u2014",
                "line": 205,
                "start_time": "0-10-14.030000",
                "end_time": "0-10-15.580000",
                "url": "https://drive.google.com/file/d/16zTcD_w1Qe5raSTyK3vJg74S6J-Iwzv3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "So, that's a ghoul...",
                "line": 205,
                "start_time": "0-10-14.030000",
                "end_time": "0-10-15.580000",
                "url": "https://drive.google.com/file/d/16zTcD_w1Qe5raSTyK3vJg74S6J-Iwzv3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "a vampire underling.",
                "line": 206,
                "start_time": "0-10-15.580000",
                "end_time": "0-10-17.300000",
                "url": "https://drive.google.com/file/d/1m0y0q8I9iQDk3E0TqJZP3zdpD_OwL-36/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I've heard they have, like, a lot of HP,",
                "line": 207,
                "start_time": "0-10-17.300000",
                "end_time": "0-10-19.950000",
                "url": "https://drive.google.com/file/d/12NIfIKou7soAhJWH0MV21RXdQu2jfE1m/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "but I guess around here, they're just everyone's punching bags.",
                "line": 208,
                "start_time": "0-10-19.950000",
                "end_time": "0-10-22.510000",
                "url": "https://drive.google.com/file/d/1nKpYwXXY10BlorOzG_EiXkGKJd5VQy7K/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It really is a dog eat dog world.",
                "line": 209,
                "start_time": "0-10-22.830000",
                "end_time": "0-10-24.580000",
                "url": "https://drive.google.com/file/d/1iDyC8L__tnRGLOCULgcoM4lQTSiaHPXI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Just what I'd expect from the Lawless City, a town drenched in blood and slaughter.",
                "line": 210,
                "start_time": "0-10-24.580000",
                "end_time": "0-10-28.480000",
                "url": "https://drive.google.com/file/d/1WbDsUELHrZNoRrVj4hOJR8KhbsZEnGhl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "A wave of magical energy?",
                "line": 211,
                "start_time": "0-10-42.820000",
                "end_time": "0-10-44.690000",
                "url": "https://drive.google.com/file/d/1lMYkZC0lnyEA4AY_MjWhxRw1njzeh59R/view?usp=drivesdk"
            },
            {
                "name": "Civilian",
                "name_variant": "Civilian",
                "subtitle": "H-hey!",
                "line": 212,
                "start_time": "0-10-47.120000",
                "end_time": "0-10-48.410000",
                "url": "https://drive.google.com/file/d/1NmMh-jWai1-LvvQcULLw_DUeL2BvSnus/view?usp=drivesdk"
            },
            {
                "name": "Civilian",
                "name_variant": "Civilian",
                "subtitle": "This thing was still alive?!",
                "line": 213,
                "start_time": "0-10-48.410000",
                "end_time": "0-10-50.980000",
                "url": "https://drive.google.com/file/d/1r1gqUh5qYHx9GTUecKZbfJd19eZBLmUE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "A human bitten by a ghoul turns into a ghoul themself.",
                "line": 214,
                "start_time": "0-11-03.030000",
                "end_time": "0-11-05.660000",
                "url": "https://drive.google.com/file/d/1TM4XTtji8aa5AqTzeBfh4ZwpsQ1Fod2N/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Apparently, that was only a rumor, when actually...",
                "line": 215,
                "start_time": "0-11-05.660000",
                "end_time": "0-11-11.530000",
                "url": "https://drive.google.com/file/d/1eJH7usMJ9ALxAWFe3V_CK6lFkZcC7rE3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Oh, is that why?",
                "line": 216,
                "start_time": "0-11-14.660000",
                "end_time": "0-11-16.400000",
                "url": "https://drive.google.com/file/d/1K7spouNp-bo2i5yEH3sSc2aN9sps34fw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The red moon is stimulating all the magical energy in town.",
                "line": 217,
                "start_time": "0-11-16.400000",
                "end_time": "0-11-20.110000",
                "url": "https://drive.google.com/file/d/1ZV2XJWfhJNUAhgbufMx4xy4Bk5enRcKD/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Looks like if I don't do anything, they'll just keep multiplying.",
                "line": 218,
                "start_time": "0-11-20.110000",
                "end_time": "0-11-23.030000",
                "url": "https://drive.google.com/file/d/1cuAE-pFWzmdoVdzUKqTFuJ8EofkcPJDM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "What to do?",
                "line": 219,
                "start_time": "0-11-23.530000",
                "end_time": "0-11-24.830000",
                "url": "https://drive.google.com/file/d/1OodiVG0TvRy0UdNa8iVBiUpNiCgxyc0a/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Do I run away like a background character as usual?",
                "line": 220,
                "start_time": "0-11-24.830000",
                "end_time": "0-11-27.080000",
                "url": "https://drive.google.com/file/d/1SQdzS60XMMnZkLzOkI0P5bI3IWpizcoS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Or do I say what happens in the Lawless City stays in the Lawless City,",
                "line": 221,
                "start_time": "0-11-27.080000",
                "end_time": "0-11-29.410000",
                "url": "https://drive.google.com/file/d/1Gjr75oIIF92xn42xhZhwd5fnyxiVR_Sp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "and try the mysterious young man act?",
                "line": 222,
                "start_time": "0-11-29.410000",
                "end_time": "0-11-32.400000",
                "url": "https://drive.google.com/file/d/1aSGJh-sQ_i7VptaxAif60hxa9wbRDKOn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Anyway, since I do get to be in a zombie apocalypse,",
                "line": 223,
                "start_time": "0-11-36.040000",
                "end_time": "0-11-39.510000",
                "url": "https://drive.google.com/file/d/1jLNye7bJftCTv1kGXYfJAiJ6d2cbg4zx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I think I'll let things get a little bit more out of hand before I...",
                "line": 224,
                "start_time": "0-11-39.510000",
                "end_time": "0-11-42.580000",
                "url": "https://drive.google.com/file/d/18oof1z_df5-kPdaIJ8oDAcfTDezkVsu0/view?usp=drivesdk"
            },
            {
                "name": "Mary",
                "name_variant": "Mary",
                "subtitle": "Get down!",
                "line": 225,
                "start_time": "0-11-42.580000",
                "end_time": "0-11-43.760000",
                "url": "https://drive.google.com/file/d/1C27CudQ_OpsN3ks-U4IJugCCmFfgODY3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You are?",
                "line": 226,
                "start_time": "0-11-57.030000",
                "end_time": "0-11-58.830000",
                "url": "https://drive.google.com/file/d/1HahPowg11JKj3nZ9VitpoLSNknV-S0Bm/view?usp=drivesdk"
            },
            {
                "name": "Mary",
                "name_variant": "Mary",
                "subtitle": "I am Mary...",
                "line": 227,
                "start_time": "0-11-58.830000",
                "end_time": "0-12-00.610000",
                "url": "https://drive.google.com/file/d/12q5_KE_I4i3GDvNOepFPCnw6mmeCF-Uu/view?usp=drivesdk"
            },
            {
                "name": "Mary",
                "name_variant": "Mary",
                "subtitle": "the Ancient Vampire Hunter.",
                "line": 228,
                "start_time": "0-12-00.950000",
                "end_time": "0-12-03.070000",
                "url": "https://drive.google.com/file/d/10SBFhZImtZPOhFnz1anImz4hpOXSfnEZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "\"Ancient\"?",
                "line": 229,
                "start_time": "0-12-03.570000",
                "end_time": "0-12-05.110000",
                "url": "https://drive.google.com/file/d/1THwDZ7wALhWgPW5bEjLzxPe462h8dpUl/view?usp=drivesdk"
            },
            {
                "name": "Mary",
                "name_variant": "Mary",
                "subtitle": "Run, if you value your life.",
                "line": 230,
                "start_time": "0-12-05.700000",
                "end_time": "0-12-07.990000",
                "url": "https://drive.google.com/file/d/1rLV57fOsMUxUzgCPN0hVSgE2C6NhQIS9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "\"Run, if you value your life\"...",
                "line": 231,
                "start_time": "0-12-07.990000",
                "end_time": "0-12-10.980000",
                "url": "https://drive.google.com/file/d/1_kVGxw14puLJHqpWG_H3qIqbP--mgsnl/view?usp=drivesdk"
            },
            {
                "name": "Mary",
                "name_variant": "Mary",
                "subtitle": "The frenzy has begun.",
                "line": 232,
                "start_time": "0-12-12.030000",
                "end_time": "0-12-14.240000",
                "url": "https://drive.google.com/file/d/1x_VJyBXCePX1MqshN3OZ4C470qC-Dals/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "\"The frenzy has begun!\"",
                "line": 233,
                "start_time": "0-12-14.240000",
                "end_time": "0-12-16.500000",
                "url": "https://drive.google.com/file/d/1MmJ_lswGOCYk81vEqXYVrvwamdGCmq4K/view?usp=drivesdk"
            },
            {
                "name": "Mary",
                "name_variant": "Mary",
                "subtitle": "The moon is red.",
                "line": 234,
                "start_time": "0-12-17.030000",
                "end_time": "0-12-18.530000",
                "url": "https://drive.google.com/file/d/1Cjx5WMv2kEHdoohoREFWJsOKjlU_KZdY/view?usp=drivesdk"
            },
            {
                "name": "Mary",
                "name_variant": "Mary",
                "subtitle": "We are out of time.",
                "line": 235,
                "start_time": "0-12-18.530000",
                "end_time": "0-12-20.650000",
                "url": "https://drive.google.com/file/d/15JOlDqsRItAeSY2d88bwKkW2sKLMWvt5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "\"We're out of time.\"",
                "line": 236,
                "start_time": "0-12-21.950000",
                "end_time": "0-12-24.930000",
                "url": "https://drive.google.com/file/d/11DfU2_NrHU-zAaVN8Vjud56-lCq8lVIZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "What is happening?",
                "line": 237,
                "start_time": "0-12-25.580000",
                "end_time": "0-12-28.700000",
                "url": "https://drive.google.com/file/d/1JAO2BzRjAni_eknSU_B77sGHfDm-1V-u/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "What is this feeling?",
                "line": 238,
                "start_time": "0-12-28.700000",
                "end_time": "0-12-30.100000",
                "url": "https://drive.google.com/file/d/12OYLpLUoQcrFNVcGDfBX5SBwUGsfAdkw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "This thrill in my heart?",
                "line": 239,
                "start_time": "0-12-30.910000",
                "end_time": "0-12-33.060000",
                "url": "https://drive.google.com/file/d/1gkFgtFa9SipdfNPeXvEMm6ILLCkvS56G/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "This is...",
                "line": 240,
                "start_time": "0-12-33.620000",
                "end_time": "0-12-35.030000",
                "url": "https://drive.google.com/file/d/1RWqKTingskFGoqaSUvBOb_PwhxEJIlp1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "This is...",
                "line": 241,
                "start_time": "0-12-37.870000",
                "end_time": "0-12-39.280000",
                "url": "https://drive.google.com/file/d/13hjm8vHnUwDEDeloIbPBUCQn872_7uKk/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Did he not hear me?",
                "line": 242,
                "start_time": "0-12-43.530000",
                "end_time": "0-12-45.820000",
                "url": "https://drive.google.com/file/d/1rZoj7ggqNyofLVPwo7ANIDyIO4VCYeDs/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "I told him to be a good boy and wait at the inn.",
                "line": 243,
                "start_time": "0-12-46.280000",
                "end_time": "0-12-48.910000",
                "url": "https://drive.google.com/file/d/15Df6_v-tiNubCGkbj0UDPCSj-FQG8WNR/view?usp=drivesdk"
            },
            {
                "name": "Civilian",
                "name_variant": "Civilian",
                "subtitle": "I-I'm saved...",
                "line": 244,
                "start_time": "0-12-59.950000",
                "end_time": "0-13-01.530000",
                "url": "https://drive.google.com/file/d/1vqY2c_6m10Ya5yFrUai47iqX34R_xtMB/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Hey, you.",
                "line": 245,
                "start_time": "0-13-01.530000",
                "end_time": "0-13-02.780000",
                "url": "https://drive.google.com/file/d/1-Yum9kfBNNEEWM8n0aaUJkmVC7N_W_sM/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Have you seen a boy with black hair and black eyes?",
                "line": 246,
                "start_time": "0-13-02.780000",
                "end_time": "0-13-05.670000",
                "url": "https://drive.google.com/file/d/1nhghtflxP8T1SWq_iVB_hF2DsVWUwCMO/view?usp=drivesdk"
            },
            {
                "name": "Civilian",
                "name_variant": "Civilian",
                "subtitle": "N-no, I haven't!",
                "line": 247,
                "start_time": "0-13-05.670000",
                "end_time": "0-13-07.980000",
                "url": "https://drive.google.com/file/d/16RMiF0jcriz_p-hcH1_VSfaTQ8Xms6N0/view?usp=drivesdk"
            },
            {
                "name": "Civilian",
                "name_variant": "Civilian",
                "subtitle": "Oh.",
                "line": 248,
                "start_time": "0-13-08.700000",
                "end_time": "0-13-09.900000",
                "url": "https://drive.google.com/file/d/1gAb7xCaLy1EAt-JfCGQOZ0UxObKfvfzy/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Where did that idiot wander off to?",
                "line": 249,
                "start_time": "0-13-11.160000",
                "end_time": "0-13-14.150000",
                "url": "https://drive.google.com/file/d/1v4FOMNHy4ziUuz32qZ9lKFuQ_eKhrzLW/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "O-o-our time has come, Po!",
                "line": 250,
                "start_time": "0-13-26.410000",
                "end_time": "0-13-29.240000",
                "url": "https://drive.google.com/file/d/1smuPnmohomVwCnN9qtHxVv1acqCZpURu/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "It has!",
                "line": 251,
                "start_time": "0-13-29.240000",
                "end_time": "0-13-30.280000",
                "url": "https://drive.google.com/file/d/1VeTVNpxQoD06TDuNjU2SJOpqzP_drpli/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Th-th-the academy will never find us here! They can't possibly expel us!",
                "line": 252,
                "start_time": "0-13-30.280000",
                "end_time": "0-13-33.700000",
                "url": "https://drive.google.com/file/d/1dH1bhVZo2xWoo16Ibhs1zKsOYe-PUfpf/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "It was s-s-so worth risking our lives to come here!",
                "line": 253,
                "start_time": "0-13-33.700000",
                "end_time": "0-13-38.080000",
                "url": "https://drive.google.com/file/d/1IGS5yFEYjKaVNa-N1CHStlo10ptYShce/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Our summer may be over!",
                "line": 254,
                "start_time": "0-13-38.080000",
                "end_time": "0-13-40.240000",
                "url": "https://drive.google.com/file/d/1pqhOjHlatGNE_37K91vopIDmWlySip7m/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "But our virginity is still going strong, my dear Skel!",
                "line": 255,
                "start_time": "0-13-40.240000",
                "end_time": "0-13-43.450000",
                "url": "https://drive.google.com/file/d/1u0_Ij1eGxJW8PXb0GTKJ18PLIMMsBbEw/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "You got that right!",
                "line": 256,
                "start_time": "0-13-43.450000",
                "end_time": "0-13-44.450000",
                "url": "https://drive.google.com/file/d/1RNTmpoQbUPjuiEjvNMyOvoaFoVJ40aNa/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "When will we ever become real adults?!",
                "line": 257,
                "start_time": "0-13-44.450000",
                "end_time": "0-13-46.620000",
                "url": "https://drive.google.com/file/d/1ng7WSZ3GQkDsibHtIAkuJwpxyYYJQ8dY/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Now, of course!",
                "line": 258,
                "start_time": "0-13-46.620000",
                "end_time": "0-13-48.080000",
                "url": "https://drive.google.com/file/d/13P7fdcAg74xU02J6iH-GkEcMzB0-pN31/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "Into the splendor...",
                "line": 259,
                "start_time": "0-13-48.080000",
                "end_time": "0-13-49.410000",
                "url": "https://drive.google.com/file/d/1mTer3Vx31h2HswDoYS2qdjKtAGykW67v/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "...of the world of maturity!",
                "line": 260,
                "start_time": "0-13-49.410000",
                "end_time": "0-13-52.100000",
                "url": "https://drive.google.com/file/d/1InfbIMCaQm0yQOI5SLXCrVCf_QIF-5HM/view?usp=drivesdk"
            },
            {
                "name": "Skel",
                "name_variant": "Skel & Po (Skel)",
                "subtitle": "Let's go!",
                "line": 261,
                "start_time": "0-13-52.100000",
                "end_time": "0-13-54.030000",
                "url": "https://drive.google.com/file/d/1UCxBigVIx1l0gPr-qIKRfhdgh9GGb_Wa/view?usp=drivesdk"
            },
            {
                "name": "Po",
                "name_variant": "Skel & Po (Po)",
                "subtitle": "Let's go!",
                "line": 261,
                "start_time": "0-13-52.100000",
                "end_time": "0-13-54.030000",
                "url": "https://drive.google.com/file/d/1UCxBigVIx1l0gPr-qIKRfhdgh9GGb_Wa/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "What was that for?!",
                "line": 262,
                "start_time": "0-13-54.520000",
                "end_time": "0-13-55.740000",
                "url": "https://drive.google.com/file/d/1IyAJMELbA1vEIWbqB0wjmDdcw9-k2SKD/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "You are way too excited!",
                "line": 263,
                "start_time": "0-13-55.740000",
                "end_time": "0-13-57.820000",
                "url": "https://drive.google.com/file/d/1cXKCdg8dfKbCrMuobFgxWROPqAPjI2Xm/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "That dirty old man...",
                "line": 264,
                "start_time": "0-14-07.450000",
                "end_time": "0-14-09.650000",
                "url": "https://drive.google.com/file/d/1yoIQxjQsffHe2ZzqCylxQ5O3oVCSnYkx/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "How long will this go on?",
                "line": 265,
                "start_time": "0-14-13.990000",
                "end_time": "0-14-16.230000",
                "url": "https://drive.google.com/file/d/1zxqdGzYRmUCYCPi1bB64YmSYsvwHAEKY/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "What now? Another street fight?",
                "line": 266,
                "start_time": "0-14-18.870000",
                "end_time": "0-14-21.500000",
                "url": "https://drive.google.com/file/d/1d3jTGDuniANU4-TGy_vsRgCKFPPRY8Iw/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "I'm trying to wallow in misery here.",
                "line": 267,
                "start_time": "0-14-22.240000",
                "end_time": "0-14-24.670000",
                "url": "https://drive.google.com/file/d/1dgPCIP4HpNSoHFR6vUCzA4G_JETa3TuM/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "Who's there?",
                "line": 268,
                "start_time": "0-14-31.910000",
                "end_time": "0-14-33.200000",
                "url": "https://drive.google.com/file/d/1zrF-_YnENBd_d3u5ZOhU-38oGJf0qk-y/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "I'm not taking any more customers today...",
                "line": 269,
                "start_time": "0-14-33.200000",
                "end_time": "0-14-35.070000",
                "url": "https://drive.google.com/file/d/1YLkahKSRdc1U5IIc_EeYdtZqTVOlNeUU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Run, if you value your life.",
                "line": 270,
                "start_time": "0-14-48.950000",
                "end_time": "0-14-51.030000",
                "url": "https://drive.google.com/file/d/1cDMGfE1-z78QYCPvmc-cjBp1GWbJh8-B/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "The frenzy has begun.",
                "line": 271,
                "start_time": "0-14-52.950000",
                "end_time": "0-14-54.280000",
                "url": "https://drive.google.com/file/d/1LHrh35s6us46sDi7aQEhM-Lsr74FSQKK/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "Frenzy?",
                "line": 272,
                "start_time": "0-14-55.120000",
                "end_time": "0-14-56.240000",
                "url": "https://drive.google.com/file/d/11Abl3w7zOCIUljQd4oTpcoxbcvmaVD2V/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "The moon is red.",
                "line": 273,
                "start_time": "0-14-57.030000",
                "end_time": "0-14-58.690000",
                "url": "https://drive.google.com/file/d/1K8IeXML_wjoJnzVnbsKUO4fl_FPM_2A3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "We're out of time.",
                "line": 274,
                "start_time": "0-14-59.910000",
                "end_time": "0-15-01.210000",
                "url": "https://drive.google.com/file/d/1vZC4UrzE_kFe0MaDdkeMjz4_f4a-fGgv/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "W-wait!",
                "line": 275,
                "start_time": "0-15-04.080000",
                "end_time": "0-15-05.040000",
                "url": "https://drive.google.com/file/d/12LSoIEsmRdHIFUvQYrZSKuybUy6nzmuf/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "Wh-who are you?",
                "line": 276,
                "start_time": "0-15-05.450000",
                "end_time": "0-15-07",
                "url": "https://drive.google.com/file/d/1YigTuVwWAQtMlTlML17_wHYpJifDceMd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Shadow.",
                "line": 277,
                "start_time": "0-15-07.330000",
                "end_time": "0-15-08.660000",
                "url": "https://drive.google.com/file/d/1AsEQau7N76kwMIDQ10Vbqjn3T9mKfxNL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Run, if you value your life.",
                "line": 278,
                "start_time": "0-15-08.660000",
                "end_time": "0-15-11.080000",
                "url": "https://drive.google.com/file/d/12FtBeA6MgYJMEhVvUK9ul7fPcEHrR1bK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "The frenzy has begun.",
                "line": 279,
                "start_time": "0-15-11.080000",
                "end_time": "0-15-12.690000",
                "url": "https://drive.google.com/file/d/1-lv2B7EcVWzflRxV5MFUoIec6vCQ0BSY/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "The moon is red.",
                "line": 280,
                "start_time": "0-15-19.280000",
                "end_time": "0-15-21.080000",
                "url": "https://drive.google.com/file/d/13FDi4vx5UKdlLaJzhEBzxytGb-3Qa3m1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "We're out of time.",
                "line": 281,
                "start_time": "0-15-21.080000",
                "end_time": "0-15-22.820000",
                "url": "https://drive.google.com/file/d/1OfZnGTtRIYr7LG4_cPsE7m3zv5iaWuT0/view?usp=drivesdk"
            },
            {
                "name": "Coworker",
                "name_variant": "Coworker",
                "subtitle": "Marie! Marie, are you okay?",
                "line": 282,
                "start_time": "0-15-27.620000",
                "end_time": "0-15-29.450000",
                "url": "https://drive.google.com/file/d/1jmMjE97oo2zKKC3QwGdLNUcpHd8jYxO1/view?usp=drivesdk"
            },
            {
                "name": "Coworker",
                "name_variant": "Coworker",
                "subtitle": "There are ghouls outside, and\u2014",
                "line": 283,
                "start_time": "0-15-29.450000",
                "end_time": "0-15-31.240000",
                "url": "https://drive.google.com/file/d/1vduunuWlxTgRvqOGDdVaJm8stKGFJrjT/view?usp=drivesdk"
            },
            {
                "name": "Coworker",
                "name_variant": "Coworker",
                "subtitle": "What happened in here?",
                "line": 284,
                "start_time": "0-15-31.830000",
                "end_time": "0-15-33.450000",
                "url": "https://drive.google.com/file/d/1ky-QU33xw9hHC036nP50xSQbjoe9wbTH/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "Well, a man named Shadow...",
                "line": 285,
                "start_time": "0-15-33.450000",
                "end_time": "0-15-36.410000",
                "url": "https://drive.google.com/file/d/1JkYc8i73NaESU-pUwxtb6v2KUjnQ2LVp/view?usp=drivesdk"
            },
            {
                "name": "Coworker",
                "name_variant": "Coworker",
                "subtitle": "Shadow?",
                "line": 286,
                "start_time": "0-15-37.030000",
                "end_time": "0-15-38.240000",
                "url": "https://drive.google.com/file/d/1vfI1w_AsJruMZfkv2XEu8GiZuU5rrX0r/view?usp=drivesdk"
            },
            {
                "name": "Coworker",
                "name_variant": "Coworker",
                "subtitle": "You mean the Shadow?",
                "line": 287,
                "start_time": "0-15-38.240000",
                "end_time": "0-15-39.490000",
                "url": "https://drive.google.com/file/d/1qQju6wCTZLh24uVnv4foRZ-3g6PWnKOe/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "You've heard of him?",
                "line": 288,
                "start_time": "0-15-39.490000",
                "end_time": "0-15-40.370000",
                "url": "https://drive.google.com/file/d/1hudwlQjCF71uMtIN8c113CM-xIGT9dtA/view?usp=drivesdk"
            },
            {
                "name": "Coworker",
                "name_variant": "Coworker",
                "subtitle": "He's the evil mastermind who had a field day beating up the corrupt clergy!",
                "line": 289,
                "start_time": "0-15-40.780000",
                "end_time": "0-15-44.330000",
                "url": "https://drive.google.com/file/d/1IpTJdakXpxeOYng_h5L7lMj7j4MumAue/view?usp=drivesdk"
            },
            {
                "name": "Coworker",
                "name_variant": "Coworker",
                "subtitle": "He's at least as dangerous as any of the rulers of this city!",
                "line": 290,
                "start_time": "0-15-44.330000",
                "end_time": "0-15-47.190000",
                "url": "https://drive.google.com/file/d/1V2hVWq4BnxtfW0n6v9pNzIsVvLEla-0I/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "But he...",
                "line": 291,
                "start_time": "0-15-51.240000",
                "end_time": "0-15-52.300000",
                "url": "https://drive.google.com/file/d/1OrQnX2AGB0BciIYJdDrhBczRilMkDIZ0/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "He couldn't be a bad man.",
                "line": 292,
                "start_time": "0-15-53.160000",
                "end_time": "0-15-55.260000",
                "url": "https://drive.google.com/file/d/1W6aLfS6w99kuP3L2nwx9KgkeEgIYsZwC/view?usp=drivesdk"
            },
            {
                "name": "Coworker",
                "name_variant": "Coworker",
                "subtitle": "Marie? What are you doing?",
                "line": 293,
                "start_time": "0-16-01.160000",
                "end_time": "0-16-02.660000",
                "url": "https://drive.google.com/file/d/1UonJPo8Xu2Ar4iRaRK5Lkhfkdt_QKzMq/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "I'm getting out of this crazy, messed-up town.",
                "line": 294,
                "start_time": "0-16-02.660000",
                "end_time": "0-16-05.200000",
                "url": "https://drive.google.com/file/d/1zH9VURQnwympLr3QwttlYAltFBqPm6bh/view?usp=drivesdk"
            },
            {
                "name": "Coworker",
                "name_variant": "Coworker",
                "subtitle": "You're breaking your contract?",
                "line": 295,
                "start_time": "0-16-05.200000",
                "end_time": "0-16-06.360000",
                "url": "https://drive.google.com/file/d/1l4MQFGy-SeV14cAWA1Y0Aci2ErnaD04_/view?usp=drivesdk"
            },
            {
                "name": "Coworker",
                "name_variant": "Coworker",
                "subtitle": "But who knows what they'll do if they find you!",
                "line": 296,
                "start_time": "0-16-06.360000",
                "end_time": "0-16-08.740000",
                "url": "https://drive.google.com/file/d/1-8oVQ1HUKxs8czaaIhrESInPEewArN45/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "Thank you, Shadow.",
                "line": 297,
                "start_time": "0-16-08.740000",
                "end_time": "0-16-10.820000",
                "url": "https://drive.google.com/file/d/1lroMcO1e12z44g-cQpkOa_1SFvz0SbrY/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Try to escape, if you so desire.",
                "line": 298,
                "start_time": "0-16-14.160000",
                "end_time": "0-16-16.700000",
                "url": "https://drive.google.com/file/d/11XImeMvHZUJ45g4766xTZ5I26Ii8QqEh/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "If you are fortunate, you may even be successful in your attempt.",
                "line": 299,
                "start_time": "0-16-16.700000",
                "end_time": "0-16-20.320000",
                "url": "https://drive.google.com/file/d/1sAT_4ByUTuGe2EsaL2W0n8xxHG3IWuqh/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Of course, the past is never so kind as to let anyone go.",
                "line": 300,
                "start_time": "0-16-21.530000",
                "end_time": "0-16-26.170000",
                "url": "https://drive.google.com/file/d/19HvytoXeojlM2wIrRIU-YDbYlUEApnLs/view?usp=drivesdk"
            },
            {
                "name": "Natsu",
                "name_variant": "Natsu",
                "subtitle": "Lady Yukime!",
                "line": 301,
                "start_time": "0-16-27.580000",
                "end_time": "0-16-28.580000",
                "url": "https://drive.google.com/file/d/1sI8keB6V7uJytrizuLAPQbuxVDVgDrZX/view?usp=drivesdk"
            },
            {
                "name": "Kana",
                "name_variant": "Kana",
                "subtitle": "The vampires have set ghouls loose in the city!",
                "line": 302,
                "start_time": "0-16-28.580000",
                "end_time": "0-16-30.530000",
                "url": "https://drive.google.com/file/d/1XKmsR4hHoM9B7BjMAK4aGFRPzDmfzJ3N/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "I'm sorry.",
                "line": 303,
                "start_time": "0-16-39.240000",
                "end_time": "0-16-40.780000",
                "url": "https://drive.google.com/file/d/1IyX6wmlX_CMkYpaRznk5Cc35UjxvzPKa/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "I'm so sorry, Cid.",
                "line": 304,
                "start_time": "0-16-40.780000",
                "end_time": "0-16-42.520000",
                "url": "https://drive.google.com/file/d/1MJiLTzEzpbY-KSJc781hyAD1KDxsQ5ao/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "If only I hadn't brought you to this horrible place...",
                "line": 305,
                "start_time": "0-16-42.990000",
                "end_time": "0-16-45.860000",
                "url": "https://drive.google.com/file/d/1hA-NZ3SUypki-87D2GgajDkfjsxzlK2u/view?usp=drivesdk"
            },
            {
                "name": "Mary",
                "name_variant": "Mary",
                "subtitle": "Are you the woman going around asking about a boy with black hair and black eyes?",
                "line": 306,
                "start_time": "0-16-46.780000",
                "end_time": "0-16-51.620000",
                "url": "https://drive.google.com/file/d/11q1wbwjxVGprYiHuVxg3AuJ2gKKoE1hn/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "I met one not long ago.",
                "line": 307,
                "start_time": "0-16-51.620000",
                "end_time": "0-16-53.450000",
                "url": "https://drive.google.com/file/d/16voD10ynPhduq-sa4fNGjvE7iW6R6Ymu/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "I've already found him.",
                "line": 308,
                "start_time": "0-16-53.450000",
                "end_time": "0-16-55.030000",
                "url": "https://drive.google.com/file/d/1t0rRfKnhHfcQQ1mjZJuZY1YaRS-vBayk/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "He's my brother.",
                "line": 309,
                "start_time": "0-16-56.370000",
                "end_time": "0-16-57.660000",
                "url": "https://drive.google.com/file/d/1istadDIxx41QbQfDmryabupPiJLUzAoM/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "But I've found him now.",
                "line": 310,
                "start_time": "0-16-57.660000",
                "end_time": "0-16-59.650000",
                "url": "https://drive.google.com/file/d/1S1Er6eg3cy4tdmkLqzfYvcb5Ee5GhrQl/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "That boy doesn't have black hair or black eyes.",
                "line": 311,
                "start_time": "0-17-00.450000",
                "end_time": "0-17-03.450000",
                "url": "https://drive.google.com/file/d/1gFd0jB2SXAxw3YkIovTi7kWmhp6u5owV/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "What?",
                "line": 312,
                "start_time": "0-17-03.450000",
                "end_time": "0-17-04.650000",
                "url": "https://drive.google.com/file/d/1117viqWRDu_aa6rAg0iXEUV_hcQDSvrR/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Who the hell are you?",
                "line": 313,
                "start_time": "0-17-06.200000",
                "end_time": "0-17-07.830000",
                "url": "https://drive.google.com/file/d/1K2qw_lApBAtdpnumqwDTdA3xyuOdml0V/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "I met two men who match the description.",
                "line": 314,
                "start_time": "0-17-07.830000",
                "end_time": "0-17-10.490000",
                "url": "https://drive.google.com/file/d/1TQ9qx13r8R0wxSdAX7uau3S_vehEYQBr/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Tell me!",
                "line": 315,
                "start_time": "0-17-10.490000",
                "end_time": "0-17-11.800000",
                "url": "https://drive.google.com/file/d/1V25WsMYkTC0deWfscsviMa8y4N1v0TS2/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "I saw the first one when the moon was beginning to turn red.",
                "line": 316,
                "start_time": "0-17-12.080000",
                "end_time": "0-17-15.240000",
                "url": "https://drive.google.com/file/d/1VXB_gePe2wa1WpXrG6PEk6t_QO0J52_G/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "He was standing in front of a rampaging ghoul and smiling.",
                "line": 317,
                "start_time": "0-17-15.240000",
                "end_time": "0-17-17.800000",
                "url": "https://drive.google.com/file/d/1VAe4fFWtrVJsv40vcR6EAVnGIM3zdyhT/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "That's not him.",
                "line": 318,
                "start_time": "0-17-17.800000",
                "end_time": "0-17-18.780000",
                "url": "https://drive.google.com/file/d/1ERbE62I0EIdAzJGVFATbt1KMQygspjZu/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "My brother may scream, but he would never smile.",
                "line": 319,
                "start_time": "0-17-18.780000",
                "end_time": "0-17-22.030000",
                "url": "https://drive.google.com/file/d/1xf1QSLBZUqG7_KSNlTPBKTMSIej28H7n/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "I saw the second one a few minutes ago.",
                "line": 320,
                "start_time": "0-17-22.030000",
                "end_time": "0-17-24.280000",
                "url": "https://drive.google.com/file/d/1jlIcVXstjg6FAhcgQCMeB3DuAsK3aEfI/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "He was a young Dark Knight with no noticeable features.",
                "line": 321,
                "start_time": "0-17-24.280000",
                "end_time": "0-17-26.780000",
                "url": "https://drive.google.com/file/d/1GqKtyafdeqMwYg9NpYhsFbfDi7rmsnRU/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Where was he?! Tell me!",
                "line": 322,
                "start_time": "0-17-26.780000",
                "end_time": "0-17-28.950000",
                "url": "https://drive.google.com/file/d/1PqPzoKtabmW4ofVFlbJGShSL5H6KsVkd/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "He was about to be taken away by the followers of the Blood Queen.",
                "line": 323,
                "start_time": "0-17-28.950000",
                "end_time": "0-17-32.280000",
                "url": "https://drive.google.com/file/d/16UmM5l4YnKsU_C3djgD0k9O8sc7cY2nB/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "The Blood...",
                "line": 324,
                "start_time": "0-17-32.280000",
                "end_time": "0-17-33.620000",
                "url": "https://drive.google.com/file/d/1YaJ6A_BWqWeIfeVVb3SRXc2cfiSbxAHc/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "They took him away? Where?",
                "line": 325,
                "start_time": "0-17-33.620000",
                "end_time": "0-17-35.650000",
                "url": "https://drive.google.com/file/d/1yuAAw8M-jchDU3t8IkO8p13RPYlMwLY7/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "The Crimson Tower?",
                "line": 326,
                "start_time": "0-17-37.990000",
                "end_time": "0-17-39.370000",
                "url": "https://drive.google.com/file/d/1pyN-6HUozgWPJlLiW4lKrwb-AuoPkFzt/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "Your brother is in the Crimson Tower, the Blood Queen's castle.",
                "line": 327,
                "start_time": "0-17-39.370000",
                "end_time": "0-17-43.830000",
                "url": "https://drive.google.com/file/d/1SlxYXTPEuOvt4KUfgIAZps_H8w63AqHN/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "The vampires wish to offer him as a sacrifice to the Blood Queen.",
                "line": 328,
                "start_time": "0-17-43.830000",
                "end_time": "0-17-48.450000",
                "url": "https://drive.google.com/file/d/1L_gtxc8gDK6BeIyB2cg4utVyqDjRvrLv/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Sacrifice?",
                "line": 329,
                "start_time": "0-17-48.450000",
                "end_time": "0-17-49.490000",
                "url": "https://drive.google.com/file/d/1OfbrWrshpMGnMD9SwzdnAFzA10VWjaVf/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "To awaken Blood Queen Elisabeth from her thousand-year slumber,",
                "line": 330,
                "start_time": "0-17-49.490000",
                "end_time": "0-17-53.830000",
                "url": "https://drive.google.com/file/d/1VOU88-ApDlg_lSPstFqxgS9OE-767zs4/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "they require the blood of a living young man.",
                "line": 331,
                "start_time": "0-17-53.830000",
                "end_time": "0-17-56.200000",
                "url": "https://drive.google.com/file/d/1VZ-aO8CrHiX1hR67WhlObxzTCuUFLov9/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Wait.",
                "line": 332,
                "start_time": "0-17-56.200000",
                "end_time": "0-17-57.330000",
                "url": "https://drive.google.com/file/d/1DzwP_PjlOTS4URX1LDn34MAGmYzBpyXi/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "What's this about the Blood Queen being asleep? That's news.",
                "line": 333,
                "start_time": "0-17-57.330000",
                "end_time": "0-17-59.740000",
                "url": "https://drive.google.com/file/d/1qR3jaI59BPNBJVn6dFyDbD2xwMiZeNII/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "They've kept that fact secret, biding their time.",
                "line": 334,
                "start_time": "0-17-59.740000",
                "end_time": "0-18-02.620000",
                "url": "https://drive.google.com/file/d/14ZpoHSq8_JH6vLnDAg7IJMCPSH5cN1_G/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "Waiting a thousand years,",
                "line": 335,
                "start_time": "0-18-02.620000",
                "end_time": "0-18-04.120000",
                "url": "https://drive.google.com/file/d/1xMlB6_DKcPSa3rhN3I1gnCYnt7L7_9he/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "for the night that would give the vampires tremendous power...",
                "line": 336,
                "start_time": "0-18-04.120000",
                "end_time": "0-18-07.230000",
                "url": "https://drive.google.com/file/d/1_gM7chEKWL71MdtFgpWzUkzLx5XzwM_Y/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "The night the Red Moon would rise again.",
                "line": 337,
                "start_time": "0-18-08.030000",
                "end_time": "0-18-11.190000",
                "url": "https://drive.google.com/file/d/1WZYBP4f4XT5AbvjEmbzXslVMGD7NdJMP/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "It's true, the moon has seemed redder these last few days.",
                "line": 338,
                "start_time": "0-18-11.190000",
                "end_time": "0-18-14.490000",
                "url": "https://drive.google.com/file/d/1vdO0XOdAbL0NY3mdlmNwSv1_qB2tpxN3/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "The Red Moon affects the sleeping queen, as well.",
                "line": 339,
                "start_time": "0-18-14.490000",
                "end_time": "0-18-18.030000",
                "url": "https://drive.google.com/file/d/1fyev0p2kka1W5XFRGWfEG8_qisBqjsvX/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "With the sacrifice's blood as a catalyst, she will surely...",
                "line": 340,
                "start_time": "0-18-18.030000",
                "end_time": "0-18-21.400000",
                "url": "https://drive.google.com/file/d/1c5P1CcMgsuCTXoNL1TcID07dSNEWCJQO/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "But the point is, Cid is in the tower, right?",
                "line": 341,
                "start_time": "0-18-25.030000",
                "end_time": "0-18-27.490000",
                "url": "https://drive.google.com/file/d/12bfjR8QBz_YV9hAKcUnG7yY9pkyUNFA7/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "And if they need blood of the living, then he's still alive.",
                "line": 342,
                "start_time": "0-18-27.490000",
                "end_time": "0-18-29.870000",
                "url": "https://drive.google.com/file/d/1PdcdTuSgaAoKt7ucNNAn6oLp_P4GlFKg/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "My target is is the Blood Queen Elisabeth.",
                "line": 343,
                "start_time": "0-18-30.290000",
                "end_time": "0-18-33.660000",
                "url": "https://drive.google.com/file/d/13Q3wfEfu5QEbfXfF15zNEZIOkX6Ingii/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "To find her, I must go to the Crimson Tower.",
                "line": 344,
                "start_time": "0-18-33.660000",
                "end_time": "0-18-35.700000",
                "url": "https://drive.google.com/file/d/1_WGArcfa5N5Vi93Q25UDpDqDiLEVBL7o/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Then we're heading in the same direction.",
                "line": 345,
                "start_time": "0-18-35.700000",
                "end_time": "0-18-38.050000",
                "url": "https://drive.google.com/file/d/1tIUgQ3w5lePJMmaTwbwQ7-89vevwzLB1/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Let's work together, Miss...",
                "line": 346,
                "start_time": "0-18-38.830000",
                "end_time": "0-18-41.410000",
                "url": "https://drive.google.com/file/d/1UbSYSB_sExFtSjzgie7ZknmwpWyr6ytD/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "Mary.",
                "line": 347,
                "start_time": "0-18-41.410000",
                "end_time": "0-18-42.780000",
                "url": "https://drive.google.com/file/d/1eKtQKcVYnUvbGNjvmt2VvHUgibaP2N60/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "I am a vampire hunter.",
                "line": 348,
                "start_time": "0-18-42.780000",
                "end_time": "0-18-44.220000",
                "url": "https://drive.google.com/file/d/17F7rLcIKW91u50Ff1OhqbKBvqfpjYjnM/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "I'm Claire.",
                "line": 349,
                "start_time": "0-18-44.220000",
                "end_time": "0-18-46.060000",
                "url": "https://drive.google.com/file/d/1kKtr8srI9IvFxZSCYnpIGs_fSGLYQMcN/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "It will be difficult to get in from the ground floor, but there is a way.",
                "line": 350,
                "start_time": "0-18-48.520000",
                "end_time": "0-18-51.770000",
                "url": "https://drive.google.com/file/d/1zcKDkGqnWdfHxtalDiGo7pqGa3EYyBJo/view?usp=drivesdk"
            },
            {
                "name": "Marie",
                "name_variant": "Marie",
                "subtitle": "Follow me.",
                "line": 351,
                "start_time": "0-18-51.770000",
                "end_time": "0-18-52.230000",
                "url": "https://drive.google.com/file/d/14OxTJBm2mNPSPzAZmlCYD5qJbTn80_7_/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Got it!",
                "line": 352,
                "start_time": "0-18-52.530000",
                "end_time": "0-18-53.650000",
                "url": "https://drive.google.com/file/d/1rfGp6P2TsMx25vl0pWi2ddFBOJ2dcH5x/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "I'm coming for you, Cid!",
                "line": 353,
                "start_time": "0-18-53.650000",
                "end_time": "0-18-55.110000",
                "url": "https://drive.google.com/file/d/17QhInpm_HT_HDqMhM9Til_De9n_qv60M/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "We're dead! We're gonna die!",
                "line": 354,
                "start_time": "0-19-02.080000",
                "end_time": "0-19-03.070000",
                "url": "https://drive.google.com/file/d/1dFzLo2IkyEWfEjFNH1jqt6jcbSv0cQoV/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "We're gonna die virgins!",
                "line": 355,
                "start_time": "0-19-03.070000",
                "end_time": "0-19-04.450000",
                "url": "https://drive.google.com/file/d/1gObDAJzsFoNCOsnldCytJBY-lbxy-EGg/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "You gotta be kidding!",
                "line": 356,
                "start_time": "0-19-04.450000",
                "end_time": "0-19-05.520000",
                "url": "https://drive.google.com/file/d/1SLo7_m6If1FTqK6zKhdzNEczAdYXyTdS/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Other than my mom, I've never even kissed a\u2014",
                "line": 357,
                "start_time": "0-19-05.520000",
                "end_time": "0-19-08.120000",
                "url": "https://drive.google.com/file/d/1WqhQMGL7QuhKtd8AEEhgnBMTXbWff4kq/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "Skel, my friend! I'll never forget your virginity!",
                "line": 358,
                "start_time": "0-19-08.620000",
                "end_time": "0-19-11.540000",
                "url": "https://drive.google.com/file/d/11u0s24a5tnSwEfw73msmvgRU0Mrg5Stl/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Hey, wait up! Don't abandon me here!",
                "line": 359,
                "start_time": "0-19-11.540000",
                "end_time": "0-19-13.750000",
                "url": "https://drive.google.com/file/d/1Dkx0P3hUgtb9hFOGcpswcvOGc37Edgu_/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "B-boobs!",
                "line": 360,
                "start_time": "0-19-14.200000",
                "end_time": "0-19-15.940000",
                "url": "https://drive.google.com/file/d/125WE7tl5HP5lRh64UKLy0h78sUcBeG5_/view?usp=drivesdk"
            },
            {
                "name": "Subordinate",
                "name_variant": "Subordinate",
                "subtitle": "J-Juggernaut, boss, sir?",
                "line": 361,
                "start_time": "0-19-19.780000",
                "end_time": "0-19-22.200000",
                "url": "https://drive.google.com/file/d/1P2f08kNA0QnAp9HpNEEer4Qkt643mu52/view?usp=drivesdk"
            },
            {
                "name": "Juggernaut",
                "name_variant": "Juggernaut",
                "subtitle": "I love it, don't you?",
                "line": 362,
                "start_time": "0-19-22.200000",
                "end_time": "0-19-24.180000",
                "url": "https://drive.google.com/file/d/1ik8x8GQaX6ZBi3_bNyra1WKxcOvB8ugi/view?usp=drivesdk"
            },
            {
                "name": "Juggernaut",
                "name_variant": "Juggernaut",
                "subtitle": "It smells like a nice, big battle.",
                "line": 363,
                "start_time": "0-19-24.660000",
                "end_time": "0-19-26.910000",
                "url": "https://drive.google.com/file/d/1Lo3sBPEiBSsnmZi3FJr2E_2v8CRSTEds/view?usp=drivesdk"
            },
            {
                "name": "Juggernaut",
                "name_variant": "Juggernaut",
                "subtitle": "We haven't seen one like this since the therianthrope invasion way back when.",
                "line": 364,
                "start_time": "0-19-26.910000",
                "end_time": "0-19-31.140000",
                "url": "https://drive.google.com/file/d/1zMA-okQ3lWKejjkv2auM59jn_IOw7EFM/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Now's our chance! Retreat!",
                "line": 365,
                "start_time": "0-19-31.530000",
                "end_time": "0-19-33.100000",
                "url": "https://drive.google.com/file/d/1YGOCpB2ueIFxohNuaOAHkBv0ds5LeAbq/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Run across the rooftops to the station!",
                "line": 366,
                "start_time": "0-19-33.100000",
                "end_time": "0-19-34.870000",
                "url": "https://drive.google.com/file/d/1ehQ_4Mo431hCWQOKkQqzFecRJ3jM3c-n/view?usp=drivesdk"
            },
            {
                "name": "Claudia",
                "name_variant": "Claudia",
                "subtitle": "What do you think you're doing?",
                "line": 367,
                "start_time": "0-19-34.870000",
                "end_time": "0-19-36.520000",
                "url": "https://drive.google.com/file/d/1ElHKgtdGRkMYjCltc40h-BAqhi_bUo8k/view?usp=drivesdk"
            },
            {
                "name": "Claudia",
                "name_variant": "Claudia",
                "subtitle": "And you call yourself Association Knights?",
                "line": 368,
                "start_time": "0-19-36.520000",
                "end_time": "0-19-38.740000",
                "url": "https://drive.google.com/file/d/1I-bgRsxbjR8Uwbj7Z4oLQSM4gS5_SrXY/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "I don't give a damn about your association's honor!",
                "line": 369,
                "start_time": "0-19-38.740000",
                "end_time": "0-19-41.280000",
                "url": "https://drive.google.com/file/d/1OVfQ2EpG67LZc6RJEQJB_w3cd6WYhvdq/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "They don't pay us enough for this!",
                "line": 370,
                "start_time": "0-19-41.280000",
                "end_time": "0-19-42.660000",
                "url": "https://drive.google.com/file/d/10fPfmiKmIA1-TKYWM6LQtLnYe2X7GFQq/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Forget it!",
                "line": 371,
                "start_time": "0-19-42.660000",
                "end_time": "0-19-44.410000",
                "url": "https://drive.google.com/file/d/13j47uPLx_X_KARuYsNY5hJnRa9Q3WdOq/view?usp=drivesdk"
            },
            {
                "name": "Claudia",
                "name_variant": "Claudia",
                "subtitle": "Those lousy scavengers...",
                "line": 372,
                "start_time": "0-19-44.410000",
                "end_time": "0-19-46.700000",
                "url": "https://drive.google.com/file/d/1ASo6i3KugU7b7oahDzyIJYFWt7ZjYA4F/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Director, we can't hold the main street any longer!",
                "line": 373,
                "start_time": "0-19-46.700000",
                "end_time": "0-19-49.360000",
                "url": "https://drive.google.com/file/d/1G2e3tEI27ohWyrMgNqcBrhQ-ryVYsMbV/view?usp=drivesdk"
            },
            {
                "name": "Claudia",
                "name_variant": "Claudia",
                "subtitle": "They made it this far?",
                "line": 374,
                "start_time": "0-19-51.330000",
                "end_time": "0-19-52.960000",
                "url": "https://drive.google.com/file/d/1ywMbOdJOHNTYaKQho6vsVOO6pGxzwZZb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Run, if you value your life.",
                "line": 375,
                "start_time": "0-20-00.490000",
                "end_time": "0-20-02.570000",
                "url": "https://drive.google.com/file/d/1iDI2nZsKNuzgUUc1ioQzcGCnnPWQhyoI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "The frenzy has begun.",
                "line": 376,
                "start_time": "0-20-04.370000",
                "end_time": "0-20-06.070000",
                "url": "https://drive.google.com/file/d/1dfxmbpUQrkanhb6vNMyDFKJp_RR1QGqt/view?usp=drivesdk"
            },
            {
                "name": "Claudia",
                "name_variant": "Claudia",
                "subtitle": "Who are you?",
                "line": 377,
                "start_time": "0-20-06.740000",
                "end_time": "0-20-08.160000",
                "url": "https://drive.google.com/file/d/1m1lUqz70-_EPQpm0y4XujjORUKJ4M3a3/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "H-he's the wanted criminal!",
                "line": 378,
                "start_time": "0-20-08.160000",
                "end_time": "0-20-10.570000",
                "url": "https://drive.google.com/file/d/10wi8D2F_twSE-RgPPDImDAv_9OUhPAC0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "The moon is red.",
                "line": 379,
                "start_time": "0-20-11.410000",
                "end_time": "0-20-12.900000",
                "url": "https://drive.google.com/file/d/18Nmpms9T48yR2fbbQnCOlYtb3nXdpCZF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "We're out of time.",
                "line": 380,
                "start_time": "0-20-13.530000",
                "end_time": "0-20-15.150000",
                "url": "https://drive.google.com/file/d/1aVDLZda27NzELsr9pgYmycGs8Wgq4lmO/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "We have little time remaining.",
                "line": 381,
                "start_time": "0-20-15.700000",
                "end_time": "0-20-18.030000",
                "url": "https://drive.google.com/file/d/1Bwy746KxubJMbMaSOlYCbkgNy5VZq0P5/view?usp=drivesdk"
            },
            {
                "name": "Vampire",
                "name_variant": "Vampire",
                "subtitle": "Lord Crimson...",
                "line": 382,
                "start_time": "0-20-19.330000",
                "end_time": "0-20-20.700000",
                "url": "https://drive.google.com/file/d/1Bx_waMiU4DrRYw0fPQx4YYxd3Tp4TrwO/view?usp=drivesdk"
            },
            {
                "name": "Vampire",
                "name_variant": "Vampire",
                "subtitle": "Preparations for the sacrifice are almost complete.",
                "line": 383,
                "start_time": "0-20-20.700000",
                "end_time": "0-20-23.030000",
                "url": "https://drive.google.com/file/d/1TmWx-KgYL0rD6-6dLr49t7fSoiFhRCwL/view?usp=drivesdk"
            },
            {
                "name": "Vampire",
                "name_variant": "Vampire",
                "subtitle": "And our takeover of the city is going as planned.",
                "line": 384,
                "start_time": "0-20-23.860000",
                "end_time": "0-20-26.080000",
                "url": "https://drive.google.com/file/d/1d8rT93CrM99QRWGlUE5OqyHBuagkBc1-/view?usp=drivesdk"
            },
            {
                "name": "Vampire",
                "name_variant": "Vampire",
                "subtitle": "However...",
                "line": 385,
                "start_time": "0-20-26.080000",
                "end_time": "0-20-27.080000",
                "url": "https://drive.google.com/file/d/1a9qK-gxuk3gxhY2wOIuCzL3wwqWDYPFc/view?usp=drivesdk"
            },
            {
                "name": "Crimson",
                "name_variant": "Crimson",
                "subtitle": "However?",
                "line": 386,
                "start_time": "0-20-27.080000",
                "end_time": "0-20-28.080000",
                "url": "https://drive.google.com/file/d/12Ot8NYG5pDW4PdQiOR54a_dfQ2AKa7dg/view?usp=drivesdk"
            },
            {
                "name": "Vampire",
                "name_variant": "Vampire",
                "subtitle": "We're meeting some unexpected resistance in certain locations.",
                "line": 387,
                "start_time": "0-20-28.080000",
                "end_time": "0-20-30.830000",
                "url": "https://drive.google.com/file/d/1y7Cq-mcT7-buCEYCXZqQXFjrBLLaGesq/view?usp=drivesdk"
            },
            {
                "name": "Crimson",
                "name_variant": "Crimson",
                "subtitle": "We know who's behind that.",
                "line": 388,
                "start_time": "0-20-31.740000",
                "end_time": "0-20-33.450000",
                "url": "https://drive.google.com/file/d/1eaTWYLFCvTPWhqoJ1UZdN_uzESSAnfqF/view?usp=drivesdk"
            },
            {
                "name": "Crimson",
                "name_variant": "Crimson",
                "subtitle": "The fools who babble on with their nonsensical ideas that they are my equals:",
                "line": 389,
                "start_time": "0-20-33.450000",
                "end_time": "0-20-37.790000",
                "url": "https://drive.google.com/file/d/1sObrl5xQzVY6Wbgvwug--NiwNL8k0NFm/view?usp=drivesdk"
            },
            {
                "name": "Crimson",
                "name_variant": "Crimson",
                "subtitle": "Yukime the Spirit Fox, ruler of the White Tower.",
                "line": 390,
                "start_time": "0-20-38.160000",
                "end_time": "0-20-40.750000",
                "url": "https://drive.google.com/file/d/1yFN_H2cWUr4FHYlyVRE9NE1TqlJsxRu2/view?usp=drivesdk"
            },
            {
                "name": "Crimson",
                "name_variant": "Crimson",
                "subtitle": "Juggernaut the Tyrant, ruler of the Black Tower.",
                "line": 391,
                "start_time": "0-20-41.200000",
                "end_time": "0-20-43.720000",
                "url": "https://drive.google.com/file/d/1GE8pF_lf8JVsUL2QlWjA09l4aV2fq40M/view?usp=drivesdk"
            },
            {
                "name": "Crimson",
                "name_variant": "Crimson",
                "subtitle": "Let them play their games.",
                "line": 392,
                "start_time": "0-20-43.720000",
                "end_time": "0-20-46.200000",
                "url": "https://drive.google.com/file/d/1FV8eOXlTPPpo5wKG46RzL77jSKk3OSA1/view?usp=drivesdk"
            },
            {
                "name": "Crimson",
                "name_variant": "Crimson",
                "subtitle": "They will meet their end as soon as the Blood Queen revives.",
                "line": 393,
                "start_time": "0-20-46.200000",
                "end_time": "0-20-49.700000",
                "url": "https://drive.google.com/file/d/1NG-nGA0nXA0cNSGrWsEUCX57hJAvaFGr/view?usp=drivesdk"
            },
            {
                "name": "Vampire",
                "name_variant": "Vampire",
                "subtitle": "Yes, Lord.",
                "line": 394,
                "start_time": "0-20-49.700000",
                "end_time": "0-20-50.700000",
                "url": "https://drive.google.com/file/d/1dsQ0X4Q5XDt2RwHXSZ5O4U39iEhUGH70/view?usp=drivesdk"
            },
            {
                "name": "Vampire",
                "name_variant": "Vampire",
                "subtitle": "Oh, but there is one other...",
                "line": 395,
                "start_time": "0-20-50.700000",
                "end_time": "0-20-52.530000",
                "url": "https://drive.google.com/file/d/18dqfnCLAyNdRxScLRziXL7GVKS0s9t_R/view?usp=drivesdk"
            },
            {
                "name": "Crimson",
                "name_variant": "Crimson",
                "subtitle": "What?",
                "line": 396,
                "start_time": "0-20-52.530000",
                "end_time": "0-20-53.430000",
                "url": "https://drive.google.com/file/d/1rSTv2xjKCgQYpQFadEoH6LU66dghp348/view?usp=drivesdk"
            },
            {
                "name": "Vampire",
                "name_variant": "Vampire",
                "subtitle": "There is someone going around the city killing ghouls.",
                "line": 397,
                "start_time": "0-20-53.910000",
                "end_time": "0-20-57.860000",
                "url": "https://drive.google.com/file/d/18Ey_vES4MoHAf0L4ZHj5yRBOiT9l_ddi/view?usp=drivesdk"
            },
            {
                "name": "Juggernaut",
                "name_variant": "Juggernaut",
                "subtitle": "Stay out of this, gruntlings!",
                "line": 398,
                "start_time": "0-21-01.660000",
                "end_time": "0-21-04.110000",
                "url": "https://drive.google.com/file/d/1Yw7Cd3DWPjnKRTtqLBxdLTQDPyoQrcOL/view?usp=drivesdk"
            },
            {
                "name": "Juggernaut",
                "name_variant": "Juggernaut",
                "subtitle": "Go to Hell, she-fox!",
                "line": 399,
                "start_time": "0-21-08.620000",
                "end_time": "0-21-11.420000",
                "url": "https://drive.google.com/file/d/1oG0Ne7hdwpYY92Nwv2bsWFSh9UfZG4PI/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "You truly are a thorn in my side.",
                "line": 400,
                "start_time": "0-21-11.420000",
                "end_time": "0-21-15.330000",
                "url": "https://drive.google.com/file/d/1DgNgtn3MzQhcfh4QbnZL32E-afkZryHs/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "I insist that you cease opening your mouth and spewing your rancid breath across the city.",
                "line": 401,
                "start_time": "0-21-17.660000",
                "end_time": "0-21-21.250000",
                "url": "https://drive.google.com/file/d/1nMIMBXKQjqnvsPR0-A91lQmLNB26cBTy/view?usp=drivesdk"
            },
            {
                "name": "Juggernaut",
                "name_variant": "Juggernaut",
                "subtitle": "You're the one who reeks, animal lady!",
                "line": 402,
                "start_time": "0-21-21.250000",
                "end_time": "0-21-23.960000",
                "url": "https://drive.google.com/file/d/1g4FxWOoslN0BukdZ0z0n4O_rzM43jq5H/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "I do not care for pushy men!",
                "line": 403,
                "start_time": "0-21-23.960000",
                "end_time": "0-21-26.680000",
                "url": "https://drive.google.com/file/d/1eQjHvOycODKASfpjSad_IY2GLc87WWSB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Nothing changes.",
                "line": 404,
                "start_time": "0-21-31.740000",
                "end_time": "0-21-33.850000",
                "url": "https://drive.google.com/file/d/1yEqe5pvF04XbvKBUJ55ldSH3PFkf8pZ0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Someone, somewhere, may be trying to spin a new tale.",
                "line": 405,
                "start_time": "0-21-34.240000",
                "end_time": "0-21-40.150000",
                "url": "https://drive.google.com/file/d/1gAfQdqHCBIHSWu6EFeU23zpEHyDpS2KN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "But I do not change.",
                "line": 406,
                "start_time": "0-21-40.730000",
                "end_time": "0-21-42.230000",
                "url": "https://drive.google.com/file/d/1us26IhEQ9Rz-s8cYVhsEjmwLfipqA_zX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I only continue on my quest to become the Eminence in Shadow!",
                "line": 407,
                "start_time": "0-21-43.030000",
                "end_time": "0-21-46.700000",
                "url": "https://drive.google.com/file/d/1M1VCmDJIoL2z2LRUVctD5ts5wg81Sben/view?usp=drivesdk"
            },
            {
                "name": "Juggernaut",
                "name_variant": "Juggernaut",
                "subtitle": "Who are you?",
                "line": 408,
                "start_time": "0-21-53.160000",
                "end_time": "0-21-54.580000",
                "url": "https://drive.google.com/file/d/1x-2AQJW_qF4F7qulvxcDnQkfX_SXpiQK/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "You're...",
                "line": 409,
                "start_time": "0-21-55.530000",
                "end_time": "0-21-56.980000",
                "url": "https://drive.google.com/file/d/1eTs2TAJg097pc1U-ZRdcZYeVSpP_n6PK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "My name is Shadow.",
                "line": 410,
                "start_time": "0-21-57.870000",
                "end_time": "0-21-59.780000",
                "url": "https://drive.google.com/file/d/1TyfvzL6g6uOpeh-icy_abkjbBR4nQ8ng/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "He who lurks in the shadows",
                "line": 411,
                "start_time": "0-22-01.160000",
                "end_time": "0-22-02.870000",
                "url": "https://drive.google.com/file/d/1YI_qxuH5t-jB06LcXEsb31BWuVK25O-s/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "in order to hunt the shadows.",
                "line": 412,
                "start_time": "0-22-02.870000",
                "end_time": "0-22-05.010000",
                "url": "https://drive.google.com/file/d/1YwIp68ADm9_WZH3OM8ebZKeVDUcqLJVb/view?usp=drivesdk"
            }
        ]
    }
}
let setDoc = db.collection('data').doc('an_s2_e1').set(data['s2']);

//let setDoc = db.collection('data').doc('ssc_p2_c2-5').set(data['p2']['c2-5']);

//let setDoc = db.collection('data').doc('es_ssitw').set(data['ssitw']);

//let setDoc = db.collection('data').doc('ln_v5').set(data['v5']);

// let setDoc = db.collection('data').doc('an_s101').set(data['kj1']);
setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
