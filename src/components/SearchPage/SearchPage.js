// SearchPage.js
import React, { useState, useEffect } from 'react';
import './SearchPage.css'; // Import the CSS file
import Filters from '../Filters/Filters'; // Import the Filters component
import Results from '../Results/Results' // Import the Results component
import { searchLN } from '../Search/searchLN';
import { searchAnime } from '../Search/searchAnime';
import { searchSSC } from '../Search/searchSSC';
import { searchES } from '../Search/searchES';
import { searchWN } from '../Search/searchWN';
import { searchAPO } from '../Search/searchAPO';
import * as characterCovers from '../../images/characterIcons';
import * as covers from '../../images/covers';
import { fetchLNData, fetchWNData, fetchAPOData, fetchESData, fetchSSCData } from '../../utils/firebaseFunctions';
import { VERSIONS } from '../../versions';
import { faGaugeSimpleMed, faListNumeric, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ESMAPREVERSE } from '../../esMap';


function SearchPage() {
    const an_s1 = {
        "s1": {
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
                    "name": "Classmate",
                    "subtitle": "Good morning, Nishino-san.",
                    "start_time": "0-01-46.710000",
                    "end_time": "0-01-48.250000",
                    "name_variant": "Classmate",
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
                    "name": "Classmate",
                    "subtitle": "Good morning, Senpai!",
                    "start_time": "0-01-49.880000",
                    "end_time": "0-01-51.830000",
                    "name_variant": "Classmate",
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
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1bczjzYW1sMOHogUIc4Wwphw95yJcLtg3/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "Nishimura-san.",
                    "start_time": "0-02-13.460000",
                    "end_time": "0-02-14.670000",
                    "name_variant": "Minoru Kagenou",
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
                    "name_variant": "Minoru Kagenou",
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
                    "name_variant": "Minoru Kagenou",
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
                    "name_variant": "Minoru Kagenou",
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
                    "name_variant": "Minoru Kagenou",
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
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1OphcAk1UjOsKPUxNovGpiN0CAyfG0qjq/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "You were technically a named NPC, weren't you?",
                    "start_time": "0-02-48.290000",
                    "end_time": "0-02-51.170000",
                    "name_variant": "Minoru Kagenou",
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
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1tUTRR6vt1_CFRpOK56AfNxzdJ7RA1cO3/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "I'm pretty good at remembering the names of all the important characters.",
                    "start_time": "0-02-55.460000",
                    "end_time": "0-02-59.380000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1nZJURKS7TuEtnLp_Nbt5VQ-J94FOsPIL/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "But I haven't been getting enough sleep.",
                    "start_time": "0-02-59.380000",
                    "end_time": "0-03-01.130000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1bG2Nk7kDTARFd9H4Kgcc5MzsoXEviKmv/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "So I guess I got careless.",
                    "start_time": "0-03-01.670000",
                    "end_time": "0-03-03.380000",
                    "name_variant": "Minoru Kagenou",
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
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1SC8HgG55I8x1Zzh0EMXOcoonraGY28KU/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "Nishitani-san.",
                    "start_time": "0-03-15.920000",
                    "end_time": "0-03-17.130000",
                    "name_variant": "Minoru Kagenou",
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
                    "name_variant": "Minoru Kagenou",
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
                    "name": "Classmate",
                    "subtitle": "Akane! You're playing the lead in the upcoming Monday-night drama, right?",
                    "start_time": "0-03-56.420000",
                    "end_time": "0-03-59.540000",
                    "name_variant": "Classmate",
                    "url": "https://drive.google.com/file/d/1t-C-AgpOe8SHrUj_fxjYXNwbFSI1Al4h/view?usp=drivesdk"
                },
                {
                    "name": "Classmate",
                    "subtitle": "That's so cool!",
                    "start_time": "0-03-59.540000",
                    "end_time": "0-04-00.830000",
                    "name_variant": "Classmate",
                    "url": "https://drive.google.com/file/d/1f7Ayw8B9Sz9mvguv5r9TazXED2tMDMbI/view?usp=drivesdk"
                },
                {
                    "name": "Classmate",
                    "subtitle": "How many shows have you done now?",
                    "start_time": "0-04-00.830000",
                    "end_time": "0-04-02.250000",
                    "name_variant": "Classmate",
                    "url": "https://drive.google.com/file/d/1jTe3B6bYbskxm2nbiFsMsPaFZx3VfhRJ/view?usp=drivesdk"
                },
                {
                    "name": "Classmate",
                    "subtitle": "You're even busier than you were last year!",
                    "start_time": "0-04-02.250000",
                    "end_time": "0-04-04.420000",
                    "name_variant": "Classmate",
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
                    "name": "Classmate",
                    "subtitle": "I'm definitely gonna watch!",
                    "start_time": "0-04-07.830000",
                    "end_time": "0-04-09.210000",
                    "name_variant": "Classmate",
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
                    "name_variant": "Minoru Kagenou",
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
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1pLk_rPjbeoyZNUL76Pu8HhiegSVdwkBZ/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "The limits of living things...",
                    "start_time": "0-04-52.540000",
                    "end_time": "0-04-54.250000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/16dJfl5cqal7VmkbBNbDcSPTIJ-J3-QDx/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "More power...",
                    "start_time": "0-04-59.830000",
                    "end_time": "0-05-02.130000",
                    "name_variant": "Minoru Kagenou",
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
                    "name": "Classmate",
                    "subtitle": "Because you've been so busy lately.",
                    "start_time": "0-05-15",
                    "end_time": "0-05-17.420000",
                    "name_variant": "Classmate",
                    "url": "https://drive.google.com/file/d/1iIwnvAVI_4lhxGEsdIzDYLyKVAO6KSwC/view?usp=drivesdk"
                },
                {
                    "name": "Classmate",
                    "subtitle": "This is what makes you so darn lovable, Akane.",
                    "start_time": "0-05-17.420000",
                    "end_time": "0-05-19.960000",
                    "name_variant": "Classmate",
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
                    "name_variant": "Minoru Kagenou",
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
                    "name": "Kidnapper 1",
                    "subtitle": "Akane Nishino, I presume?",
                    "start_time": "0-07-35.790000",
                    "end_time": "0-07-37.830000",
                    "name_variant": "Kidnapper 1",
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
                    "name": "Kidnapper 2",
                    "subtitle": "Come on, stop struggling.",
                    "start_time": "0-07-54.170000",
                    "end_time": "0-07-55.710000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/11lBmGKcBbZnX6mDpkcQYOgc7R3f2XeQw/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "It finally kicked in.",
                    "start_time": "0-08-09.630000",
                    "end_time": "0-08-11.330000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1obeEfAA_PDHQ3v9VeP0gZfJ-ZN5amwEj/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "All right, get her in the car.",
                    "start_time": "0-08-11.330000",
                    "end_time": "0-08-13",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/11Co1pr6oBv4WxbTDG9wIbWaESdwLcm-O/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "Huh? Don't order me around, outsider.",
                    "start_time": "0-08-13",
                    "end_time": "0-08-15.710000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1m9GmSoJv6Qi9th_5Wp6Nr7U4ScnX1s-8/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "You know you shouldn't do that:",
                    "start_time": "0-08-42.080000",
                    "end_time": "0-08-43.710000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1D2s1oJpLgY57aH0VTXkIzjZaoaw6twhA/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "The daughter of the head of the Nishino Zaibatsu, wandering the streets alone at night.",
                    "start_time": "0-08-43.710000",
                    "end_time": "0-08-48.670000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1yaCXtSRVe1XYWCHr-HsbctbGcfmrao12/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "You might get caught by some unsavory characters.",
                    "start_time": "0-08-48.670000",
                    "end_time": "0-08-51.290000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1qe07pK_VtWfpD-t-Y_RmiUVq8YspvDl6/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "Just stay there and don't try anything. We sent the ransom note.",
                    "start_time": "0-08-51.540000",
                    "end_time": "0-08-54",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/1UYXJ3HZ79vq8Hz9WlbkU9iBZMsxqdZ-r/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "As soon as we get the money, you're free to go.",
                    "start_time": "0-08-54",
                    "end_time": "0-08-55.750000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/1vm7ZdwTExcMXCRzcCKCFZ36WlMnXL8u-/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "Or that's the cover story, anyway.",
                    "start_time": "0-08-55.750000",
                    "end_time": "0-08-58.040000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1orwiyKSwBx3UgZ0P1gBkt4dj-5opZP9E/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "Seems like your old man's made a lot of enemies.",
                    "start_time": "0-08-58.040000",
                    "end_time": "0-09-01.380000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1nLMfkODGqRmH1oPMbDIeDcGEq62rJzyn/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "Hey, shut it.",
                    "start_time": "0-09-01.380000",
                    "end_time": "0-09-02.630000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/1E1xWS2v9X-x2DQmR7KC6YQP3hBP1yx6E/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "Huh?",
                    "start_time": "0-09-02.630000",
                    "end_time": "0-09-03.830000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/17BgQPVK593DEUdRwSO-Mi2cMu61MyRRS/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "You shut it, outsider.",
                    "start_time": "0-09-04",
                    "end_time": "0-09-05.330000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1bZApEqqeP43DiBeP3NbPZGmjce7_SmPd/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "You think you can talk down to me?",
                    "start_time": "0-09-05.330000",
                    "end_time": "0-09-07.040000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1z_TEPbabOcX_ZU120yNt-nRGvx-3i3h_/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "I said stop talking, you outdated gangster clich\u00e9.",
                    "start_time": "0-09-07.040000",
                    "end_time": "0-09-10.500000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/1qyIF1QpIKnrTJqQOTr4u3FZHVhtkB9c0/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "This is so annoying.",
                    "start_time": "0-09-29.460000",
                    "end_time": "0-09-31.630000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1z37ZetD3-B9fJSBE2FY9bPugnxoUjfxU/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "I finally caught my lucky break, and now it's all ruined.",
                    "start_time": "0-09-32.830000",
                    "end_time": "0-09-36.040000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1HA45kiPzeuH0X-AfnlouQFQ0ELx9_P45/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "Why don't you help me feel better?",
                    "start_time": "0-09-37.210000",
                    "end_time": "0-09-39.210000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1Y8tt_lqhYURaC0PWiKGRzoZD8CtqLtDx/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "Gimme a little fan service.",
                    "start_time": "0-09-39.210000",
                    "end_time": "0-09-41",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/19o126arvPDDB1DDRM30FJ-JHibStv6bc/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "I'll start with that pretty little mouth of yours.",
                    "start_time": "0-09-41",
                    "end_time": "0-09-43.290000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1XXwe31BkdUCID5DkOGS7q6V6yX78D4Rj/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "Don't you dare fight me!",
                    "start_time": "0-09-45.250000",
                    "end_time": "0-09-47.750000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1-71mH4v-qMeM5leE6FLlMpddUJcI6koE/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "This should be old hat for you.",
                    "start_time": "0-09-51.790000",
                    "end_time": "0-09-53.420000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1ndNRWSVcRlM5mKgkABaTZ2t-92pYxo0K/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "It's your second time being kidnapped, after all.",
                    "start_time": "0-09-53.420000",
                    "end_time": "0-09-56.420000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1zPLedcFXfh_hklevvJOZJf1LmiTTR87i/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "And the last guy was a stalker? Right?",
                    "start_time": "0-09-57.630000",
                    "end_time": "0-10-00.750000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1RXL-HusfhlBHknktRzOAf0LmmfiR7IWT/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "I'll give you much better memories than that other guy.",
                    "start_time": "0-10-01",
                    "end_time": "0-10-04.080000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/13f-Z99SPriDdnMk2TVJ6axSFuUO3srOu/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "Stop struggling!",
                    "start_time": "0-10-05.790000",
                    "end_time": "0-10-07.210000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1atQWNwrKp_y3qQVYMmnxvxj7x_aRkAmc/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "You know no one's coming.",
                    "start_time": "0-10-07.210000",
                    "end_time": "0-10-08.830000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1iY_CbySn0Pkmv-Ecio_z84fH8IGSWtUM/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "What?",
                    "start_time": "0-10-17.210000",
                    "end_time": "0-10-18.210000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1kIt34lt59k7rJdowZN1IjDnXYsMTs2Q-/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "I mean, who's there?!",
                    "start_time": "0-10-18.210000",
                    "end_time": "0-10-19.580000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1G1BW3Ojedcek28iz9qYh96qi4a87Os-8/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "Who the hell do you think you are?!",
                    "start_time": "0-10-36.580000",
                    "end_time": "0-10-38.630000",
                    "name_variant": "Kidnapper 2",
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
                    "name": "Kidnapper 2",
                    "subtitle": "Stylish...",
                    "start_time": "0-10-44.920000",
                    "end_time": "0-10-46.420000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/1F6LuEpn7VXkvStQknRRjCL4u8EOoiiYA/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "...Ruffian Slayer?",
                    "start_time": "0-10-46.420000",
                    "end_time": "0-10-48.330000",
                    "name_variant": "Kidnapper 2",
                    "url": "https://drive.google.com/file/d/18e9PxtE_lb54tZ42pvsEyBGa1lWVMpiC/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 2",
                    "subtitle": "Don't get cute with us, dammit!",
                    "start_time": "0-10-49.420000",
                    "end_time": "0-10-52",
                    "name_variant": "Kidnapper 2",
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
                    "name": "Kidnapper 1",
                    "subtitle": "I see...",
                    "start_time": "0-11-03.040000",
                    "end_time": "0-11-04.040000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/1L4I4OkzdC8oo5AbKFeLXwLKRgnrp8E2p/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "It looks like you have some idea what you're doing,",
                    "start_time": "0-11-04.500000",
                    "end_time": "0-11-06.540000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/1afwEtLeiK0c-3Da6HG4T7f_EaHed-Jdm/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "Stylish Ruffian Slayer.",
                    "start_time": "0-11-06.540000",
                    "end_time": "0-11-09.460000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/1T_v_Ph810EvIRcamfyWeNw_S_4KD0ERm/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "You know, I've been awfully bored since I was booted from the army.",
                    "start_time": "0-11-12.210000",
                    "end_time": "0-11-16.170000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/1XQcspU6u6oa6aTgGFzkV31f_LHaZou8c/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "Doing these little kiddy abductions, partnering with a lowlife amateur...",
                    "start_time": "0-11-16.330000",
                    "end_time": "0-11-20.830000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/1xEEkDNcEnXvtDXdYZs3a9iMer4ym0zME/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "This country is too damn peaceful.",
                    "start_time": "0-11-21.790000",
                    "end_time": "0-11-23.790000",
                    "name_variant": "Kidnapper 1",
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
                    "name": "Kidnapper 1",
                    "subtitle": "I welcome the challenge, Stylish Ruffian Slayer!",
                    "start_time": "0-11-29.460000",
                    "end_time": "0-11-33.500000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/1jNdDVA_gmVRtSRl2wUu7Jjd8b1WUUfeS/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "Welcome to my crazy, messed up world!",
                    "start_time": "0-11-33.880000",
                    "end_time": "0-11-37.170000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/1WB_lGFDAeTsieJpfQpq-TNEymA5DGG2a/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "I can't go back now that I know...",
                    "start_time": "0-11-42.500000",
                    "end_time": "0-11-45.130000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/1WHjBiqv0Kr76dFyPFkGqXdlnmnwwRfnm/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "how good this feels!",
                    "start_time": "0-11-47.040000",
                    "end_time": "0-11-49.500000",
                    "name_variant": "Kidnapper 1",
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
                    "name": "Kidnapper 1",
                    "subtitle": "Dammit!",
                    "start_time": "0-12-11.130000",
                    "end_time": "0-12-12.330000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/1zxMTtrhXweNM-If6uzynpyu9sjyXFUWQ/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "You're definitely a good fighter.",
                    "start_time": "0-12-12.330000",
                    "end_time": "0-12-14.130000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/196r4uxWYQCEZVimj9t9BxsTF7M5tX835/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "But you have a major weakness.",
                    "start_time": "0-12-14.130000",
                    "end_time": "0-12-15.830000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/17Sc9ZomLS0wIIxZsnLAP3w8fKB2HG82g/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "And it's the fact that I'm big enough to crush you!",
                    "start_time": "0-12-16.250000",
                    "end_time": "0-12-19.380000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/14Bz8qlIXuSaIK6JOaNgvRrIz2B-tDZI1/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "I just have to protect my head and I'm fine,",
                    "start_time": "0-12-23.960000",
                    "end_time": "0-12-26.460000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/1kRLdJaI5Ub1Eqo8U9IiqEOeSyfQ3DnAz/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "but if you take one hit from me, you're done.",
                    "start_time": "0-12-26.460000",
                    "end_time": "0-12-29.040000",
                    "name_variant": "Kidnapper 1",
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
                    "name": "Kidnapper 1",
                    "subtitle": "What?!",
                    "start_time": "0-12-45.330000",
                    "end_time": "0-12-46.540000",
                    "name_variant": "Kidnapper 1",
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
                    "name": "Kidnapper 1",
                    "subtitle": "You...",
                    "start_time": "0-13-06.460000",
                    "end_time": "0-13-07.460000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/1-LqOeSFLRUhDOu010L8ypN2eJ-oYTKlW/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "You beat up bikers with a crowbar?",
                    "start_time": "0-13-07.960000",
                    "end_time": "0-13-11.080000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/1SJW8CeYuAYVAKH-_Rmpn5WGWzcNquxAZ/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "You're the Balaclava Berserker?!",
                    "start_time": "0-13-11.920000",
                    "end_time": "0-13-14.500000",
                    "name_variant": "Kidnapper 1",
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
                    "name": "Kidnapper 1",
                    "subtitle": "N-no, don't!",
                    "start_time": "0-13-57.380000",
                    "end_time": "0-13-58.960000",
                    "name_variant": "Kidnapper 1",
                    "url": "https://drive.google.com/file/d/1MM_bD9VoCoLcJeq3hUNP7uoA5evxVC6O/view?usp=drivesdk"
                },
                {
                    "name": "Kidnapper 1",
                    "subtitle": "Stop...",
                    "start_time": "0-14-04.670000",
                    "end_time": "0-14-05.880000",
                    "name_variant": "Kidnapper 1",
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
                    "name": "Classmate",
                    "subtitle": "Good morning, Nishino-san!",
                    "start_time": "0-15-49.960000",
                    "end_time": "0-15-51.250000",
                    "name_variant": "Classmate",
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
                    "name": "Classmate",
                    "subtitle": "Good morning, Senpai!",
                    "start_time": "0-15-53.040000",
                    "end_time": "0-15-54.920000",
                    "name_variant": "Classmate",
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
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1rB66bqGdK86vrm86sqxC30Ci7QQvfl6t/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "Nishino-san.",
                    "start_time": "0-16-09.210000",
                    "end_time": "0-16-10",
                    "name_variant": "Minoru Kagenou",
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
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1ZoiNG-Ig_Y5LWJM1utPRCqAIbcvlY9EI/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "As far back as I can remember, it's what I always wanted to be.",
                    "start_time": "0-18-00.210000",
                    "end_time": "0-18-03.670000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1Ij_Kbx1EjmpFFRsvQ1ibLhHpsnqcOt1G/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "Like how everybody dreams of being a hero when they're a kid.",
                    "start_time": "0-18-04.380000",
                    "end_time": "0-18-07.710000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1HArfiKGzjgcUVuHdchSKbuhaYevStx0e/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "That's what I wanted to be.",
                    "start_time": "0-18-08.170000",
                    "end_time": "0-18-10.170000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1WQm9OcPhOPbw7u9m-ICIJtQt2U035PB5/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "But what made me different from other kids,",
                    "start_time": "0-18-12",
                    "end_time": "0-18-14.960000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1WjK56wMChb2OQecfqDK8ybUhn5jD6z1Q/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "is that my passion was far from a temporary phase.",
                    "start_time": "0-18-14.960000",
                    "end_time": "0-18-18.460000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1Z4WAxd5-W5ObiUXqzNI3vRBo1r2f206h/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "It kept burning, deep, deep inside my heart.",
                    "start_time": "0-18-18.750000",
                    "end_time": "0-18-21.330000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1lza8ZvLeHrFwQCtYVIHjg3YgQV_fZqG-/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "The flame never went out. It kept driving me forward.",
                    "start_time": "0-18-21.330000",
                    "end_time": "0-18-25.210000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/12UPWaY3vh6PcZFfcJV0M6v7bxXTzhI1y/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "I did everything I could to master every skill I needed to be stronger.",
                    "start_time": "0-18-26.170000",
                    "end_time": "0-18-30.330000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1wfo89UG6RXkwZIIT62fUlurRgcYgILHW/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "At school, I was the stubbornly ordinary,",
                    "start_time": "0-18-31.330000",
                    "end_time": "0-18-33.750000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1ZW4mG-m-8z1mLood2a78EfzkrgPMeSds/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "never conspicuous, utterly harmless, Background Character A.",
                    "start_time": "0-18-33.750000",
                    "end_time": "0-18-36.920000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1jpLyzGf3sS5e6H5B807l0xwwHQ_iXDXZ/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "But behind the mask, I gave everything to my training.",
                    "start_time": "0-18-37.330000",
                    "end_time": "0-18-40.630000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1IYm6AKelq6R1gRIYGv-FzvpPH1HU7RR7/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "As everyone around me grew up and forgot about the heroes they dreamed of becoming,",
                    "start_time": "0-18-41.040000",
                    "end_time": "0-18-46.250000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1JnP9nlxUPCgBYzzCmbofoleZzmR_fvoN/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "I started to feel a little - just a very little - sentimental.",
                    "start_time": "0-18-46.250000",
                    "end_time": "0-18-51.080000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1KZxODZAjrU3AXZiOS9W6qwFl6XCQ3lrf/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "But I kept going, I kept working,",
                    "start_time": "0-18-51.420000",
                    "end_time": "0-18-53.290000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1I-JZr2fq6RD3lZYKCnjZkMfb5ntE-tQp/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "for the day I knew would come.",
                    "start_time": "0-18-54.330000",
                    "end_time": "0-18-56.920000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1LZ_CDROozgot8tMgEOl4vNx8Rz95gnqx/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "But the time has come for me to face reality.",
                    "start_time": "0-18-58.210000",
                    "end_time": "0-19-01.460000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1kll_eQCdr0K4jog25Ky4ACt13QlRIfJx/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "None of this is going to mean anything.",
                    "start_time": "0-19-02.170000",
                    "end_time": "0-19-04.330000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1SqSDpDT5RL3pQbdlpFEnXpbyZOlV7OOu/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "The world is overflowing with martial arts, and I can learn all of them,",
                    "start_time": "0-19-04.750000",
                    "end_time": "0-19-07.880000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1fiU4Fs1Hf-d1KxMS8D7rOd00eocc9GLO/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "but I'll never get the kind of overwhelming power you hear about in all the stories.",
                    "start_time": "0-19-07.880000",
                    "end_time": "0-19-11.080000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1SGXdfSvCD72h5SBiaxSv54VITSEDIKqM/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "The best I can do is bust a few delinquent heads.",
                    "start_time": "0-19-11.460000",
                    "end_time": "0-19-14.830000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1i2bgpgIAQtcVBUYPJTreXQFA0eHjCJD1/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "If, for example, I was surrounded by fully armed soldiers,",
                    "start_time": "0-19-17.630000",
                    "end_time": "0-19-20.630000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1Epa69kfrIc_feOhETZsyenietnXD0lEy/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "that would be it for me.",
                    "start_time": "0-19-20.630000",
                    "end_time": "0-19-21.830000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1KaDXvDgDqFFaG7HxzUL3TCoVZaJQUQ5o/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "Well, if I became the strongest martial artist in the world,",
                    "start_time": "0-19-24",
                    "end_time": "0-19-27.460000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1bAcYTLJhdehX8VQ7LSaEXj6U-mhR5hYU/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "there's a chance I'd be able to rough 'em up some.",
                    "start_time": "0-19-27.460000",
                    "end_time": "0-19-30.130000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1yFDRmI3esIr9XRqUBKrMAmTAgQ0sTGa0/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "But then what?",
                    "start_time": "0-19-32.830000",
                    "end_time": "0-19-34.670000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1eyCO7oFOVcRaFWPNiXQ0kXHoZllxPIyR/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "What if a nuclear missile fell from the sky?",
                    "start_time": "0-19-37",
                    "end_time": "0-19-39.630000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1xRYewzUxhubyXfHpzyw7IPfx-ieg8BwU/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "I can tone my muscles, I can hone my mind, I can polish my skills all I want.",
                    "start_time": "0-19-40.420000",
                    "end_time": "0-19-44.830000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1ey9A3Ze2HFC4s8s5ldFmVYnHW1580EJ8/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "But if a nuclear bomb hits, all I can do is evaporate.",
                    "start_time": "0-19-45.500000",
                    "end_time": "0-19-48.670000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1V_4gksRhW9E92GlHYZ65WS9jBfvr39dP/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "That's what it is to be human.",
                    "start_time": "0-19-49.420000",
                    "end_time": "0-19-50.960000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1QBC2EYHDRS2m6Z2Ugd5jJnaHM-arAKgS/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "I have to overcome those limits.",
                    "start_time": "0-19-57.080000",
                    "end_time": "0-19-59.210000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1eb1rBxljq-8fI0SQShe1Zsj2mnwxNHAr/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "The being that I want to be",
                    "start_time": "0-20-00.210000",
                    "end_time": "0-20-02.250000",
                    "name_variant": "Minoru Kagenou",
                    "url": "https://drive.google.com/file/d/1A52P_iSg5rN0rVGkB2f_YEqN33wA2c86/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "subtitle": "would not evaporate in a nuclear explosion.",
                    "start_time": "0-20-02.250000",
                    "end_time": "0-20-04.130000",
                    "name_variant": "Minoru Kagenou",
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
    }

    const [mediumFlash, setMediumFlash] = useState(false);
    const [keywordsFlash, setKeywordsFlash] = useState(false);


    const [animeDropdownState, setAnimeDropdownState] = React.useState(() => {
        const savedState = sessionStorage.getItem('animeDropdownState');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            if (parsedState.version === VERSIONS['animeDropdownState']) {
                return parsedState;
            }
        }

        return {
            mainChecked: false,
            filter: '',
            version: VERSIONS['animeDropdownState'],
            openSeasons: {},
            seasonsChecked: {
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
                }
            },
            episodeFilters: {}
        }
    });

    React.useEffect(() => {
        sessionStorage.setItem('animeDropdownState', JSON.stringify(animeDropdownState));
    }, [animeDropdownState]);


    const [mogDropdownState, setMogDropdownState] = React.useState(() => {
        const savedState = sessionStorage.getItem('mogDropdownState');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            if (parsedState.version === VERSIONS['mogDropdownState']) {
                return parsedState;
            }
        }
        return {
            mogMainChecked: false,
            filter: '',
            openParts: {},
            version: VERSIONS['mogDropdownState'],
            categoryFilters: {},
            sectionFilters: {},
            partsChecked: {
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
                            },
                        },
                        "checked": false
                    },
                    "checked": false
                }
            }
        }
    });

    React.useEffect(() => {
        sessionStorage.setItem('mogDropdownState', JSON.stringify(mogDropdownState));
    }, [mogDropdownState]);




    const [lnDropdownState, setLNDropdownState] = React.useState(() => {
        const savedState = sessionStorage.getItem('lnDropdownState');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            if (parsedState.version === VERSIONS['lnDropdownState']) {
                return parsedState;
            }
        }
        return {
            lnMainChecked: false,
            lnFilter: '',
            openVolumes: {},
            versions: VERSIONS['lnDropdownState'],
            volumesChecked: {
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
                        "title": "P | The Darkness that Lurks in the Academy, Cases of Missing Students!"
                    },
                    "v5c2": {
                        "checked": false,
                        "title": "1 | Nee-san's Return and the Progress of her Illness...!"
                    },
                    "v5c3": {
                        "checked": false,
                        "title": "2 | On a Shocking Morning, the School Murder Case!"
                    },
                    "v5c4": {
                        "checked": false,
                        "title": "3 | Case Closed, Let's Talk About Old Tales!"
                    },
                    "v5c5": {
                        "checked": false,
                        "title": "4 | Today the World is at Peace Again!"
                    },
                    "v5c6": {
                        "checked": false,
                        "title": "5 | An Unexpected Terrorists Attack in the Academy Again!!!"
                    },
                    "v5c7": {
                        "checked": false,
                        "title": "E | If I Could Get it, I Wouldn't Hesitate to Destroy the World."
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
            chapterFilters: {}
        };
    });

    React.useEffect(() => {
        sessionStorage.setItem('lnDropdownState', JSON.stringify(lnDropdownState));
    }, [lnDropdownState]);

    const [wnDropdownState, setWNDropdownState] = React.useState(() => {
        const savedState = sessionStorage.getItem('wnDropdownState');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            if (parsedState.version === VERSIONS['wnDropdownState']) {
                return parsedState;
            }
        }
        return {
            wnMainChecked: false,
            wnFilter: '',
            openVolumes: {},
            version: VERSIONS['wnDropdownState'],
            volumesChecked: {
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
                        "title": "The Basics of Human Relationsh.i.p.s Is Abandonment Play"
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
                        "title": "The b.l.o.o.d.y Demon King who betrayed his dream"
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
            chapterFilters: {}
        };
    });

    React.useEffect(() => {
        sessionStorage.setItem('wnDropdownState', JSON.stringify(wnDropdownState));
    }, [wnDropdownState]);

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
            "Shadow": characterCovers.ShadowIcon,
            "??? (Shadow)": characterCovers.ShadowIcon,
            "Sunraku & Shadow (Shadow)": characterCovers.ShadowIcon,
            "Cid Kagenou": characterCovers.CidKagenouIcon,
            "Minoru Kageno": characterCovers.MinoruKagenoIcon,
            "??? (Minoru Kageno)": characterCovers.MinoruKagenoIcon,
            "Stylish Ruffian Slayer": characterCovers.StylishRuffianSlayerIcon,
            "Mundane Mann": characterCovers.MundaneMannIcon,
            "John Smith": characterCovers.JohnSmithIcon,
            "Stylish Bandit Slayer": characterCovers.StylishBanditSlayerIcon,
            "??? (Stylish Bandit Slayer)": characterCovers.StylishBanditSlayerIcon,
            "Nuru": characterCovers.StylishBanditSlayerIcon,
            "??? (Nuru)": characterCovers.StylishBanditSlayerIcon,
            "Aurora": characterCovers.AuroraIcon,
            "Annerose Nichtsehen": characterCovers.AnneroseNichtsehenIcon,
            "Akane Nishino": characterCovers.AkaneNishinoIcon,
            "Alexia Midgar": characterCovers.AlexiaMidgarIcon,
            "Alpha": characterCovers.AlphaIcon,
            "Beatrix": characterCovers.BeatrixIcon,
            "Beta": characterCovers.BetaIcon,
            "Natsume Kafka": characterCovers.NatsumeKafkaIcon,
            "??? (Natsume Kafka)": characterCovers.NatsumeKafkaIcon,
            "Claire Kagenou": characterCovers.ClaireKagenouIcon,
            "Delta": characterCovers.DeltaIcon,
            "Epsilon": characterCovers.EpsilonIcon,
            "Eta": characterCovers.EtaIcon,
            "Gamma": characterCovers.GammaIcon,
            "Iris Midgar": characterCovers.IrisMidgarIcon,
            "Po Tato": characterCovers.PoTatoIcon,
            "Rose Oriana": characterCovers.RoseOrianaIcon,
            "No. 666": characterCovers.No666Icon,
            "Sherry Barnett": characterCovers.SherryBarnettIcon,
            "Skel Etal": characterCovers.SkelEtalIcon,
            "Zeta": characterCovers.ZetaIcon,
            "Nu": characterCovers.NuIcon,

            "Lambda": characterCovers.LambdaIcon,
            "Yukime": characterCovers.YukimeIcon,
            "Victoria": characterCovers.VictoriaIcon,
            "Lili": characterCovers.LiliIcon,
            "Olivier": characterCovers.OlivierIcon,
            "Pente": characterCovers.PenteIcon,
            "Duet": characterCovers.DuetIcon,
            "Freya": characterCovers.FreyaIcon,
        },
        "lnCoverImages": {
            "v1": covers.LNV1Cover,
            "v2": covers.LNV2Cover,
            "v3": covers.LNV3Cover,
            "v4": covers.LNV4Cover,
            "v5": covers.LNV5Cover,
            "v6": covers.LNV6Cover
        },
        "animeCoverImages": {
            "s1": covers.ANS1Cover,
            "s2": covers.ANS2Cover
        },
        "sscCoverImages": {
            "ssc": covers.SSCCover,
            "1-1": covers.SSC11Cover,
            "1-2": covers.SSC12Cover,
            "1-3": covers.SSC13Cover,
            "1-4": covers.SSC14Cover,
            "1-5": covers.SSC15Cover,
            "1-6": covers.SSC16Cover,
            "1-7": covers.SSC17Cover,
            "1-8": covers.SSC18Cover,
            "1-9": covers.SSC19Cover,
            "1-10": covers.SSC110Cover,
            "1-11": covers.SSC111Cover,
            "1-12": covers.SSC112Cover,
            "1-13": covers.SSC113Cover,
            "1-14": covers.SSC114Cover,
            "1-15": covers.SSC1FCover,
            "2-1": covers.SSC21Cover,
            "2-2": covers.SSC22Cover,
            "2-3": covers.SSC23Cover,
            "2-4": covers.SSC24Cover,
            "2-5": covers.SSC25Cover,
            "2-6": covers.SSC26Cover,
            "2-7": covers.SSC27Cover,
            "2-8": covers.SSC28Cover,
            "2-9": covers.SSC29Cover,
            "2-10": covers.SSC210Cover,
            "2-11": covers.SSC211Cover,
            "2-12": covers.SSC212Cover,
            "2-13": covers.SSC213Cover,
            "3-1": covers.SSC31Cover,
            "3-2": covers.SSC32Cover,
            "3-3": covers.SSC33Cover
        },
        "esCoverImages": {
            "Event Stories": covers.ESCover,
            "hr": covers.ESHRCover,
            "ftgi": covers.ESFTGICover,
            "nvacs": covers.ESNvACSCover,
            "rog": covers.ESROGCover,
            "hd": covers.ESHDCover,
            "clbg": covers.ESCLBGCover,
            "sulp": covers.ESSULPCover,
            "ts": covers.ESTSCover,
            "mt": covers.ESMTCover,
            "dss": covers.ESDSSCover,
            "i": covers.ESICover,
            "lshn": covers.ESLSHNCover,
            "ana": covers.ESANACover,
            "agfms": covers.ESAGFMSCover,
            "rtgi2": covers.ESRTGI2Cover,
            "m": covers.ESMCover,
            "bmsv": covers.ESBMSVCover,
            "tghms": covers.ESTGHMSCover,
            "hd2": covers.ESHD2Cover,
            "tpis": covers.ESTPISCover,
            "ssitw": covers.ESSSITWCover
        },
        "apoCoverImages": {
            "Apocrypha": covers.APOCover,
            "1": covers.APO1Cover,
            "1-1": covers.APO11Cover,
            "1-1-1": covers.APO111Cover,
            "1-1-2": covers.APO112Cover,
            "1-1-3-1": covers.APO1131Cover,
            "1-1-3-2": covers.APO1132Cover,
            "1-1-3-3": covers.APO1133Cover,
            "1-1-4-1": covers.APO1141Cover,
            "1-1-4-2": covers.APO1142Cover,
            "1-1-5-1": covers.APO1151Cover,
            "1-1-5-2": covers.APO1152Cover,
            "1-1-5-3": covers.APO1153Cover,
            "1-1-6": covers.APO116Cover,
            "1-1-7": covers.APO117Cover,
            "1-1-8-1": covers.APO1181Cover,
            "1-1-8-2": covers.APO1182Cover,
        }
    };


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
                    open: false,
                    filters: '',
                    groups: {
                        "Seven Shadows": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Alpha": {
                                    "Alpha": false,
                                    "??? (Alpha)": false,
                                    "Everyone (Alpha)": false,
                                    "Seven Shadows (Alpha)": false,
                                    "None (Alpha)": false,
                                    "Alpha & Beta (Alpha)": false,
                                    "Alpha & Zeta (Alpha)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Beta": {
                                    "Beta": false,
                                    "??? (Beta)": false,
                                    "None (Beta)": false,
                                    "Natsume Kafka": false,
                                    "??? (Natsume Kafka)": false,
                                    "Everyone (Beta)": false,
                                    "Seven Shadows (Beta)": false,
                                    "Alpha & Beta (Beta)": false,
                                    "Beta & Epsilon (Beta)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Gamma": {
                                    "Gamma": false,
                                    "??? (Gamma)": false,
                                    "Everyone (Gamma)": false,
                                    "Seven Shadows (Gamma)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Delta": {
                                    "Delta": false,
                                    "??? (Delta)": false,
                                    "Everyone (Delta)": false,
                                    "Seven Shadows (Delta)": false,
                                    "Delta & Zeta (Delta)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Epsilon": {
                                    "Epsilon": false,
                                    "??? (Epsilon)": false,
                                    "Everyone (Epsilon)": false,
                                    "Seven Shadows (Epsilon)": false,
                                    "Beta & Epsilon (Epsilon)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Zeta": {
                                    "Zeta": false,
                                    "??? (Zeta)": false,
                                    "Everyone (Zeta)": false,
                                    "Seven Shadows (Zeta)": false,
                                    "Alpha & Zeta (Zeta)": false,
                                    "Delta & Zeta (Zeta)": false,
                                    "Zeta & Eta (Zeta)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Eta": {
                                    "Eta": false,
                                    "??? (Eta)": false,
                                    "Everyone (Eta)": false,
                                    "Seven Shadows (Eta)": false,
                                    "Zeta & Eta (Eta)": false,
                                    "checked": false,
                                    "open": false
                                }
                            }
                        },
                        "Numbers": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Lambda": {
                                    "Lambda": false,
                                    "Mound of Flesh (Lambda)": false,
                                    "Tawny Elf (Lambda)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Nu": {
                                    "Nu": false,
                                    "No. 93": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Chi": {
                                    "Chi": false,
                                    "Chi & Omega (Chi)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Omega": {
                                    "Omega": false,
                                    "Chi & Omega (Omega)": false,
                                    "checked": false,
                                    "open": false
                                }
                            }
                        },
                        "Members": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Victoria": {
                                    "Victoria": false,
                                    "??? (Victoria)": false,
                                    "No. 559": false,
                                    "checked": false,
                                    "open": false
                                }
                            }
                        }
                    },
                    characters: {
                        "Cid Kagenou": {
                            "Cid Kagenou": false,
                            "??? (Cid Kagenou)": false,
                            "None (Cid Kagenou)": false,
                            "Shadow": false,
                            "??? (Shadow)": false,
                            "Mundane Mann": false,
                            "John Smith": false,
                            "Minoru Kageno": false,
                            "??? (Minoru Kageno)": false,
                            "Stylish Ruffian Slayer": false,
                            "Stylish Bandit Slayer": false,
                            "??? (Stylish Bandit Slayer)": false,
                            "Sunraku & Shadow (Shadow)": false,
                            "Cid & Sunraku (Cid)": false,
                            "Nuru": false,
                            "??? (Nuru)": false,
                            "checked": false,
                            "open": false
                        }
                    }
                },
                'MIDGAR': {
                    openGroup: false,
                    checked: false,
                    filters: '',
                    open: false,
                    groups: {
                        "Crimson Order": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Iris Midgar": {
                                    "checked": false,
                                },
                                "Marco Granger": {
                                    "Marco Granger": false,
                                    "Dark Knight Trainee": false,
                                    "open": false,
                                    "checked": false,
                                }
                            }
                        },
                        "Midgar Academy": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Alexia Midgar": {
                                    "Alexia Midgar": false,
                                    "??? (Alexia Midgar)": false,
                                    "Alexia & Claire (Alexia Midgar)": false,
                                    "Shelly and Alexia (Alexia Midgar)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Claire Kagenou": {
                                    "Claire Kagenou": false,
                                    "??? (Claire Kagenou)": false,
                                    "Alexia & Claire (Claire Kagenou)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Sherry Barnett": {
                                    "Sherry Barnett": false,
                                    "Shelly and Alexia (Sherry Barnett)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Po Tato": {
                                    "Po Tato": false,
                                    "Skel & Po (Po)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Skel Etal": {
                                    "Skel Etal": false,
                                    "Skel & Po (Skel)": false,
                                    "open": false,
                                    "checked": false,
                                }
                            }
                        }
                    }
                },
                'ORIANA': {
                    openGroup: false,
                    checked: false,
                    filters: '',
                    open: false,
                    groups: {
                        "Generic": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Oriana Noble A": {
                                    "checked": false,
                                },
                                "Oriana Noble B": {
                                    "checked": false,
                                },
                                "Oriana Noble C": {
                                    "checked": false,
                                }
                            }
                        }
                    },
                    characters: {
                        "Rose Oriana": {
                            "Rose Oriana": false,
                            "No. 666": false,
                            "checked": false,
                            "open": false
                        }
                    }
                },
                'CULT OF DIABLOS': {
                    openGroup: false,
                    checked: false,
                    filters: '',
                    open: false,
                    groups: {
                        "Children": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Maximilian": {
                                    "checked": false,
                                },
                                "Nanigashi": {
                                    "Nanigashi": false,
                                    "??? (Nanigashi)": false,
                                    "checked": false,
                                    "open": false
                                }
                            }
                        },
                        "Generic": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Cultist A": {
                                    "checked": false,
                                },
                                "Cultist B": {
                                    "checked": false,
                                },
                                "Cultist C": {
                                    "checked": false,
                                },
                                "Cultist D": {
                                    "checked": false,
                                },
                                "Cultist E": {
                                    "checked": false,
                                },
                                "Cultist F": {
                                    "checked": false,
                                },
                                "Cult Members": {
                                    "checked": false,
                                },
                                "Cult Member Boss": {
                                    "checked": false
                                },
                                "Cult Member A": {
                                    "Cult Member A": false,
                                    "Cult Member A & B (Cult Member A)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Cult Member B": {
                                    "Cult Member B": false,
                                    "Cult Member A & B (Cult Member B)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Cult Member C": {
                                    "checked": false,
                                },
                            }
                        }
                    }
                },
                'OTHERS': {
                    openGroup: false,
                    checked: false,
                    filters: '',
                    open: false,
                    characters: {
                        "Aurora": {
                            "Aurora": false,
                            "??? (Aurora)": false,
                            "checked": false,
                            "open": false
                        },
                        "Beatrix": {
                            "checked": false,
                        },
                        "Goldy Gilded": {
                            "checked": false,
                        }
                    },
                    groups: {
                        "Dragons": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Malak": {
                                    "checked": false
                                },
                                "Mist Dragon": {
                                    "Mist Dragon": false,
                                    "??? (Mist Dragon)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Nidhogg": {
                                    "checked": false,
                                }
                            }
                        },
                        "Lawless City": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Yukime": {
                                    "checked": false,
                                }
                            }
                        },
                        "Shangri-La Frontier": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Arthur Pencilgon": {
                                    "checked": false,
                                },
                                "OiKatzo": {
                                    "checked": false,
                                },
                                "Sunraku": {
                                    "Sunraku": false,
                                    "??? (Sunraku)": false,
                                    "Sunraku & Shadow (Sunraku)": false,
                                    "Cid & Sunraku (Sunraku)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Wethermon": {
                                    "Wethermon": false,
                                    "??? (Wethermon)": false,
                                    "open": false,
                                    "checked": false,
                                },
                            }
                        },
                        "Templars": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Templar": {
                                    "Templar": false,
                                    "????? (Templar)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Templars": {
                                    "checked": false,
                                },
                                "Templar A": {
                                    "checked": false,
                                },
                                "Templar B": {
                                    "checked": false,
                                },
                                "Templar C": {
                                    "checked": false,
                                },
                                "Templar Leader": {
                                    "checked": false,
                                },
                                "Templar Leader A": {
                                    "checked": false,
                                },
                                "Templar Leader B": {
                                    "checked": false,
                                },
                                "Templar Leader C": {
                                    "checked": false,
                                },
                                "Templar Leader D": {
                                    "checked": false,
                                },
                                "Follower A": {
                                    "checked": false,
                                },
                                "Follower B": {
                                    "checked": false,
                                },
                            }
                        }
                    }
                },
                'EARTH': {
                    openGroup: false,
                    checked: false,
                    filters: '',
                    open: false,
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
                        "Akane's Butler": {
                            "checked": false
                        }
                    }
                },
                'APOCRYPHA': {
                    openGroup: false,
                    checked: false,
                    filters: '',
                    open: false,
                    groups: {
                        "Heroes": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Olivier": {
                                    "Olivier": false,
                                    "??? (Olivier)": false,
                                    "Alpha Look-alike": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Freya": {
                                    "Freya": false,
                                    "??? (Freya)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Lili": {
                                    "checked": false,
                                },
                                "Duet": {
                                    "Duet": false,
                                    "Beta Look-alike": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Pente": {
                                    "Pente": false,
                                    "Epsilon Look-alike": false,
                                    "open": false,
                                    "checked": false,
                                },
                            }
                        },
                        "Other": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Diablos": {
                                    "checked": false,
                                },
                                "Mysterious Voice": {
                                    "checked": false,
                                }
                            }
                        }
                    }
                },
                'GENERIC': {
                    openGroup: false,
                    checked: false,
                    filters: '',
                    open: false,
                    characters: {
                        "None": {
                            "checked": false,
                        }
                    },
                    groups: {
                        "General": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Announcer": {
                                    "checked": false,
                                },
                                "Attendees": {
                                    "checked": false,
                                },
                                "Broadcast": {
                                    "checked": false,
                                },
                                "Disciple": {
                                    "checked": false,
                                },
                                "Elven Coachwoman": {
                                    "checked": false,
                                },
                                "Elven Guardswoman": {
                                    "checked": false,
                                },
                                "Fan Passerby": {
                                    "checked": false,
                                },
                                "Female Pilgrim": {
                                    "checked": false,
                                },
                                "Guard": {
                                    "checked": false,
                                },
                                "Junior": {
                                    "checked": false,
                                },
                                "Old Man": {
                                    "checked": false,
                                },
                                "Paladin": {
                                    "checked": false,
                                },
                                "Passerby A": {
                                    "checked": false,
                                },
                                "Passerby B": {
                                    "checked": false,
                                },
                                "Passerby C": {
                                    "checked": false,
                                },
                                "Passerby D": {
                                    "checked": false,
                                },
                                "Margrave": {
                                    "checked": false,
                                },
                                "Mother": {
                                    "checked": false
                                },
                                "Noblewoman": {
                                    "checked": false,
                                },
                                "Researcher": {
                                    "checked": false,
                                },
                                "Spectator Woman": {
                                    "checked": false
                                },
                                "Veteran Paladin": {
                                    "checked": false
                                }
                            }
                        },
                        "Bandits": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Bandits": {
                                    "checked": false,
                                },
                                "Bandit A": {
                                    "checked": false,
                                },
                                "Bandit B": {
                                    "checked": false,
                                },
                                "Bandit Boss": {
                                    "checked": false,
                                },
                            }
                        },
                        "Business": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Branch Manager": {
                                    "checked": false,
                                },
                                "Cake Shop Assistant": {
                                    "checked": false,
                                },
                                "Customer": {
                                    "Customer": false,
                                    "??? (Customer)": false,
                                    "checked": false,
                                    "open": false,
                                },
                                "Merchant A": {
                                    "checked": false,
                                },
                                "Merchant A Secretary": {
                                    "checked": false,
                                },
                                "Merchant B": {
                                    "checked": false,
                                },
                                "Merchant C": {
                                    "checked": false,
                                },
                                "Wounded Merchant": {
                                    "checked": false,
                                },
                                "Quiche Stall Owner": {
                                    "checked": false,
                                },
                                "Shop Staff": {
                                    "checked": false,
                                },
                                "Skewer Stall Owner": {
                                    "checked": false,
                                },
                                "Soup Stall Owner": {
                                    "checked": false,
                                },
                                "Staff": {
                                    "checked": false
                                }
                            }
                        },
                        "Casino": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Joker": {
                                    "Joker": false,
                                    "??? (Joker)": false,
                                    "checked": false,
                                    "open": false,
                                },
                                "King": {
                                    "King": false,
                                    "??? (King)": false,
                                    "checked": false,
                                    "open": false,
                                },
                                "Dealer": {
                                    "checked": false,
                                }
                            }
                        },
                        "Children": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Children": {
                                    "checked": false,
                                },
                                "Boys": {
                                    "checked": false,
                                },
                                "Boy A": {
                                    "checked": false,
                                },
                                "Boy B": {
                                    "checked": false,
                                },
                                "Boy C": {
                                    "checked": false,
                                },
                                "Girl": {
                                    "checked": false,
                                },
                                "Girl A": {
                                    "checked": false,
                                },
                                "Girl B": {
                                    "checked": false,
                                }
                            }
                        },
                        "Committee": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Committee Member": {
                                    "checked": false,
                                },
                                "Committee Members": {
                                    "checked": false,
                                },
                                "Committe Person": {
                                    "checked": false,
                                },
                                "Boy Cmte. Member A": {
                                    "checked": false,
                                },
                                "Boy Cmte. Member B": {
                                    "checked": false,
                                },
                                "Girl Cmte. Member A": {
                                    "checked": false,
                                },
                                "Girl Cmte. Member B": {
                                    "checked": false,
                                }
                            }
                        },
                        "Events": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Announcer": {
                                    "checked": false,
                                },
                                "Audience": {
                                    "checked": false,
                                },
                                "Participant A": {
                                    "checked": false,
                                },
                                "Participant B": {
                                    "checked": false,
                                },
                                "Participant C": {
                                    "checked": false,
                                },
                                "Bearded Participant": {
                                    "checked": false,
                                },
                                "Spectator A": {
                                    "checked": false,
                                },
                                "Spectator B": {
                                    "checked": false,
                                }
                            }
                        },
                        "Knights": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Knight": {
                                    "checked": false,
                                },
                                "Knight A": {
                                    "checked": false,
                                },
                                "Dark Knight": {
                                    "checked": false,
                                },
                                "Female DK Trainee": {
                                    "checked": false,
                                },
                            }
                        },
                        "Mercenarys": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Mercenary A": {
                                    "Mercenary A": false,
                                    "??? (Mercenary A)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Mercenary B": {
                                    "checked": false,
                                },
                                "Mercenary C": {
                                    "checked": false,
                                },
                                "Mercenary Veteran": {
                                    "checked": false,
                                },
                                "Mercenary Boss": {
                                    "checked": false,
                                },
                            }
                        },
                        "Monsters": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Monster": {
                                    "checked": false,
                                },
                                "Boss Monster": {
                                    "checked": false,
                                },
                                "Alpha Wolf": {
                                    "checked": false,
                                },
                                "Basilisk": {
                                    "checked": false,
                                },
                                "Boar": {
                                    "checked": false
                                },
                                "Evil Spirit": {
                                    "checked": false,
                                },
                                "Ghoul": {
                                    "checked": false,
                                },
                                "Merry Whip": {
                                    "checked": false
                                },
                                "Mr. Vendy": {
                                    "checked": false
                                },
                                "Shishiodoshi": {
                                    "Shishiodoshi": false,
                                    "Shishi(?)": false,
                                    "open": false,
                                    "checked": false
                                }
                            }
                        },
                        "Mysterious": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Mysterious Captain": {
                                    "checked": false,
                                },
                                "Mysterious Man A": {
                                    "checked": false,
                                },
                                "Mysterious Man B": {
                                    "checked": false,
                                },
                                "Mysterious Man C": {
                                    "checked": false,
                                },
                                "Mysterious Man D": {
                                    "checked": false,
                                }, 
                                "Mysterious Soldiers": {
                                    "checked": false,
                                },
                                "Mysterious Soldier A": {
                                    "checked": false,
                                },
                                "Mysterious Soldier B": {
                                    "checked": false,
                                },
                                "Mysterious Soldier C": {
                                    "checked": false,
                                },
                                "Mysterious Soldier D": {
                                    "checked": false,
                                },
                                "Mysterious Soldier E": {
                                    "checked": false,
                                },
                            }
                        },
                        "News": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Editor": {
                                    "checked": false,
                                },
                                "MNA Journalist": {
                                    "checked": false,
                                },
                                "Reporter": {
                                    "checked": false,
                                }
                            }
                        },
                        "Rogues": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Rogue A": {
                                    "checked": false,
                                },
                                "Rogue B": {
                                    "checked": false,
                                },
                                "Rogue Leader": {
                                    "checked": false,
                                },
                            }
                        },
                        "School": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Classmate": {
                                    "checked": false,
                                },
                                "Student": {
                                    "checked": false,
                                },
                                "Female Student": {
                                    "checked": false,
                                },
                                "Female Student A": {
                                    "checked": false,
                                },
                                "Male Student A": {
                                    "checked": false,
                                },
                                "Teacher": {
                                    "checked": false,
                                },
                            }
                        },
                        "Therianthropes": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Therianthrope A": {
                                    "checked": false,
                                },
                                "Therianthrope B": {
                                    "checked": false,
                                },
                                "T-thrope Opponent": {
                                    "checked": false,
                                },
                                "T-thrope Spectator": {
                                    "checked": false,
                                },
                                "T-thrope Spectators": {
                                    "checked": false,
                                },
                                "Bearded T-thrope": {
                                    "checked": false,
                                },
                                "Dog T-thrope Priest": {
                                    "checked": false,
                                },
                                "Fox T-thrope": {
                                    "checked": false,
                                },
                                "Pigtailed T-thrope": {
                                    "checked": false,
                                },
                                "Rabbit T-thrope": {
                                    "checked": false,
                                },
                                "Raccoon T-thrope": {
                                    "checked": false,
                                },
                                "Red Horse T-thrope": {
                                    "checked": false,
                                },
                                "Tiger T-thrope": {
                                    "checked": false,
                                },
                                "White Horse T-thrope": {
                                    "checked": false,
                                },
                                "McKen Ro": {
                                    "checked": false,
                                },
                            }
                        },
                    }
                },
            };
        }
    });

    useEffect(() => {
        sessionStorage.setItem('dropdownStates', JSON.stringify(dropdownStates));
    }, [dropdownStates]);

    const [namedActive, setNamedActive] = useState(() => {
        // Get the initial value from sessionStorage or default to false
        const saved = sessionStorage.getItem('namedActive');
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });

    // Use an effect to update sessionStorage when namedActive changes
    useEffect(() => {
        sessionStorage.setItem('namedActive', JSON.stringify(namedActive));
    }, [namedActive]);

    const namedCharacters = ["Cid Kagenou", "Akane Nishino", "Alpha", "Beta", "Gamma", "Delta",
        "Zeta", "Eta", "Alexia Midgar", "Iris Midgar", "Lambda", "Yukime", "Nu", "Victoria", "Rose Oriana", "Claire Kagenou",
        "Olivier", "Freya", "Lili", "Duet", "Pente", "Sherry Barnett", "Po Tato", "Skel Etal"
    ];

    const nameMap = {
        'Cid Kagenou (All)': ['Cid', 'Cid Kagenou', 'Minoru Kageno', 'Shadow', 'Stylish Ruffian Slayer', '??? (Stylish Bandit Slayer)', '??? (Cid Kagenou)',
            '??? (Minoru Kageno)', 'Minoru Kageno', 'Nuru', '??? (Nuru)', 'Sunraku & Shadow (Shadow)', 'Cid & Sunraku (Cid)'
        ],
        'Cid Kagenou': ['Cid', '??? (Cid Kagenou)'],
        '??? (Shadow)': ['???? (Shadow)'],
        'Claire Kagenou (All)': ['Claire', '??? (Claire Kagenou)', "Alexia & Claire (Claire Kagenou)"],
        'Claire Kagenou': ['Claire', '??? (Claire Kagenou)'],
        'Alexia Midgar (All)': ['Alexia', '????? (Alexia Midgar)', 'Shelly and Alexia (Alexia Midgar)', "??? (Alexia Midgar)", "Alexia & Claire (Alexia Midgar)"],
        'Alexia Midgar': ['Alexia', 'Shelly and Alexia (Alexia Midgar)', "??? (Alexia Midgar)"],
        '??? (Alexia Midgar)': ['????? (Alexia Midgar)'],
        'Iris Midgar': ['Iris'],
        'Sherry Barnett (All)': ['Sherry', 'Shelly and Alexia (Sherry Barnett)'],
        'Sherry Barnett': ['Sherry', 'Shelly and Alexia (Sherry Barnett)'],
        'Po Tato (All)': ['Po', 'Skel & Po (Po)'],
        'Po Tato': ['Po'],
        'Skel Etal (All)': ['Skel Etal', 'Skel & Po (Skel)'],
        'Skel Etal': ['Skel'],
        'Rose Oriana (All)': ['Rose Oriana', 'Rose', 'No.666'],
        'Rose Oriana': ['Rose'],
        'No. 666': ['No. 666', 'No.666'],
        'Alpha (All)': ['Alpha', '??? (Alpha)', 'None (Alpha)', 'Everyone (Alpha)', 'Alpha & Zeta (Alpha)', 'Alpha & Beta (Alpha)', 'Seven Shadows (Alpha)'],
        'Alpha': ['??? (Alpha)', 'None (Alpha)'],
        'Beta (All)': ['Beta', 'Natsume Kafka', 'Natsume', '??? (Natsume Kafka)', '??? (Natsume)', 'None (Beta)', 'Everyone (Beta)', 'Beta & Epsilon (Beta)', 'Alpha & Beta (Beta)', '??? (Beta)', 'Seven Shadows (Beta)'],
        'Beta': ['??? (Beta)', 'None (Beta)'],
        'Natsume Kafka': ['Natsume'],
        '??? (Natsume Kafka)': ['??? (Natsume)'],
        'Gamma (All)': ['Gamma', 'Everyone (Gamma)', '??? (Gamma)', 'Seven Shadows (Gamma)'],
        'Gamma': ['??? (Gamma)'],
        "Delta (All)": ['Delta', 'Everyone (Delta)', '??? (Delta)', 'Seven Shadows (Delta)', 'Delta & Zeta (Delta)'],
        "Delta": ['??? (Delta)'],
        'Epsilon (All)': ['Epsilon', 'Everyone (Epsilon)', 'Beta & Epsilon (Epsilon)', '??? (Epsilon)', 'Seven Shadows (Epsilon)'],
        'Epsilon': ['??? (Epsilon)'],
        'Zeta (All)': ['Zeta', 'Everyone (Zeta)', 'Alpha & Zeta (Zeta)', 'Zeta & Eta (Zeta)', '??? (Zeta)', 'Seven Shadows (Zeta)', 'Delta & Zeta (Zeta)'],
        'Zeta': ['??? (Zeta)'],
        'Eta (All)': ['Eta', 'Everyone (Eta)', 'Zeta & Eta (Eta)', 'Seven Shadows (Eta)', '??? (Eta)'],
        'Eta': ['??? (Eta)'],
        'Chi (All)': ["Chi", "(Chi & Omega (Chi)"],
        'Omega (All)': ["Omega", "(Chi & Omega (Omega)"],
        'Lambda (All)': ['Lambda', 'Tawny Elf (Lambda)'],
        'Diablos': ['Massive Mound of Magic'],
        'Olivier (All)': ['Olivier', 'Alpha Look-alike', '??? (Olivier)'],
        'Olivier': ['Alpha Look-alike', '??? (Olivier)'],
        'Duet (All)': ['Duet', 'Beta Look-alike'],
        'Duet': ['Beta Look-alike'],
        'Pente (All)': ['Pente', 'Epsilon Look-alike'],
        'Pente': ['Epsilon Look-alike'],
        'Freya (All)': ['Freya', '??? (Freya)'],
        'Freya': ['??? (Freya)'],
        'Nanigashi (All)': ['Nanigashi', '??? (Nanigashi)'],
        'Nanigashi': ['??? (Nanigashi)'],
        'Victoria (All)': ['Victoria', 'No. 559', '??? (Victoria)'],
        'Victoria': ['??? (Victoria)'],
        'Nu (All)': ['Nu', '93'],
        'No. 93': ['93'],
        'Shishiodoshi (All)': ['Shishiodoshi', 'Shishi(?)'],
        'Customer (All)': ['Customer', '??? (Customer)'],
        'Customer': ['??? (Customer)'],
        'King (All)': ['King', '??? (King)'],
        'King': ['??? (King)'],
        'Joker (All)': ['Joker', '??? (Joker)'],
        'Joker': ['??? (Joker)'],
        'Dog T-thrope Priest': ['Dog T.thrope Priest'],
        'Wethermon (All)': ['Wethermon', '??? (Wethermon)'],
        'Wethermon': ['??? (Wethermon)'],
        'Sunraku (All)': ['Sunraku', '??? (Sunraku)', 'Cid & Sunraku (Sunraku)', 'Sunraku & Shadow (Sunraku)'],
        'Sunraku': ['??? (Sunraku)'],
        'Mist Dragon (All)': ['Mist Dragon', '??? (Mist Dragon)'],
        'Mist Dragon': ['??? (Mist Dragon)'],
        'Templar (All)': ['Templar', '????? (Templar)'],
        'Templar': ['????? (Templar)'],
        'Cult Member A (All)': ['Cult Member A', 'Cult Member A & B (Cult Member A)'],
        'Cult Member B (All)': ['Cult Member B', 'Cult Member A & B (Cult Member B)'],
        'Marco Granger (All)': ['Marco Granger', 'Dark Knight Trainee'],
        'Mercenary A (All)': ['Mercenary A', '??? (Mercenary A)'],
        'None': ['']
    };

    const [canonActive, setCanonActive] = useState(() => {
        // Get the initial value from sessionStorage or default to false
        const saved = sessionStorage.getItem('canonActive');
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });

    // Use an effect to update sessionStorage when canonActive changes
    useEffect(() => {
        sessionStorage.setItem('canonActive', JSON.stringify(canonActive));
    }, [canonActive]);

    const canonES = ["Rose of Garden", "Truth Seekers", "Interlude", "Masquerade"]



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

    const updateWNDropdownState = (key, value) => {
        setWNDropdownState(prevState => ({
            ...prevState,
            [key]: value
        }));
    }

    const [searchResults, setSearchResults] = useState({});
    const [resultsKey, setResultsKey] = useState(0);
    const [savedFilterState, setSavedFilterState] = useState(filterState);

    function clearResults() {
        setSearchResults({});
    }

    const [versionData, setVersionData] = useState(null);


    async function handleSearch() {
        clearResults();
        setSavedFilterState(filterState);
        // Collect all checked items from animeDropdownState
        const animeCheckedItems = Object.entries(animeDropdownState.seasonsChecked)
            .flatMap(([season, episodes]) =>
                Object.entries(episodes)
                    .filter(([episodeId, episodeData]) => episodeData.checked && episodeId !== 'checked')
                    .map(([episodeId]) => {
                        const [season, ep] = episodeId.split('e');
                        return `an_${season}_e${ep}`;
                    })
            );

        const lnCheckedItems = Object.entries(lnDropdownState.volumesChecked)
            .flatMap(([volume, chapters]) =>
                Object.entries(chapters)
                    .filter(([chapter, value]) => value.checked && chapter !== 'checked')
                    .map(([chapter, value]) => {
                        return `ln_${chapter.split("c")[0]}_c${chapter.split("c")[1]}`;
                    })
            );


        let lnCheckedData = await fetchLNData(lnCheckedItems, versionData, setVersionData);



        const wnCheckedItems = Object.entries(wnDropdownState.volumesChecked)
            .flatMap(([volume, chapters]) =>
                Object.entries(chapters)
                    .filter(([chapter, value]) => value.checked && chapter !== 'checked')
                    .map(([chapter, value]) => {
                        return `wn_${chapter.split("c")[0].replace("v", "")}_${chapter.split("c")[1]}`;
                    })
            );

        let wnCheckedData = await fetchWNData(wnCheckedItems, versionData, setVersionData);

        // Helper function to get checked character entries
        const getCheckedCharacterEntries = (character, { checked, ...subnames }) => {
            const entries = [];
            if (checked) {
                const subnamesEntries = Object.entries(subnames);
                const hasSubnames = subnamesEntries.length > 0;
                const checkedSubnames = subnamesEntries
                    .filter(([subname, checked]) => checked && subname !== 'checked' && subname !== 'open')
                    .map(([subname]) => subname);
                if (hasSubnames) {
                    if (subnamesEntries.every(([subname, checked]) => subname === 'checked' || subname === 'open' || checked)) {
                        // If every item of the subnames is checked, add the main name with '(All)'
                        entries.push(character + ' (All)');
                    } else {
                        entries.push(...checkedSubnames);
                    }
                } else {
                    // If the character has no subnames, add the character
                    entries.push(character);
                }
            }
            return entries;
        };

        const checkedCharacters = [];
        Object.entries(dropdownStates).forEach(([group, dropdown]) => {
            // Check if there are groups within the dropdown and iterate over them
            if (dropdown.groups) {
                Object.values(dropdown.groups).forEach(group => {
                    // Add group characters
                    Object.entries(group.characters).forEach(([character, attributes]) => {
                        checkedCharacters.push(...getCheckedCharacterEntries(character, attributes));
                    });
                });
            }
            // Add standalone characters not within groups
            if (dropdown.characters) {
                Object.entries(dropdown.characters).forEach(([character, attributes]) => {
                    checkedCharacters.push(...getCheckedCharacterEntries(character, attributes));
                });
            }
        });




        let sscCheckedItems = [];
        for (let group in mogDropdownState.partsChecked) {
            if (group === "Seven Shadows Chronicles") {
                for (let part in mogDropdownState.partsChecked[group]) {
                    for (let section in mogDropdownState.partsChecked[group][part]) {
                        if (section !== 'checked') {
                            for (let episode in mogDropdownState.partsChecked[group][part][section]) {
                                if (episode !== 'checked' && mogDropdownState.partsChecked[group][part][section][episode].checked) {
                                    sscCheckedItems.push(`ssc_p${part.split(" ")[1]}_c${section.split("|")[0].trim().replace(" Final", "-15")}_${episode}`);
                                }
                            }
                        }
                    }
                }
            }
        }

        let sscCheckedData = await fetchSSCData(sscCheckedItems, versionData, setVersionData);

        let apoCheckedItems = [];
        for (let group in mogDropdownState.partsChecked) {
            if (group === "Apocrypha") {
                for (let part in mogDropdownState.partsChecked[group]) {
                    for (let section in mogDropdownState.partsChecked[group][part]) {
                        if (section !== 'checked') {
                            for (let episode in mogDropdownState.partsChecked[group][part][section]) {
                                if (episode !== 'checked' && mogDropdownState.partsChecked[group][part][section][episode].checked) {
                                    apoCheckedItems.push(`apo_p${part.split(" | ")[0]}_c${part.split(" | ")[0]}-${section.split("|")[0].trim().replace(" Final", "-15")}_${episode}`);
                                }
                            }
                        }
                    }
                }
            }
        }

        let apoCheckedData = await fetchAPOData(apoCheckedItems, versionData, setVersionData);


        // For Event Stories
        let esCheckedItems = [];
        for (let group in mogDropdownState.partsChecked) {
            if (group === "Event Stories") {
                for (let part in mogDropdownState.partsChecked[group]) {
                    for (let episode in mogDropdownState.partsChecked[group][part]) {
                        if (episode !== 'checked' && mogDropdownState.partsChecked[group][part][episode].checked) {
                            esCheckedItems.push(`es_${ESMAPREVERSE[part]}_${episode}`);
                        }
                    }
                }
            }
        }

        let esCheckedData = await fetchESData(esCheckedItems, versionData, setVersionData);

        // Initialize separate objects to hold the anime and light novel results
        let animeResults = {};
        let lnResults = {};
        let sscResults = {};
        let esResults = {};
        let wnResults = {};
        let apoResults = {};

        const an_s1_checked = [...animeCheckedItems].some(item => item.includes('an_s1')) ? an_s1 : {};

        const lnText = { "ln": { ...lnCheckedData } }
        const wntext = { "wn": { ...wnCheckedData } }
        const animeText = { "an": { ...an_s1_checked } }
        const sscText = { "ssc": { ...sscCheckedData } }
        const esText = { "es": { ...esCheckedData } }
        const apoText = { "apo": { ...apoCheckedData } }

        let resultsKeyString = '';

        if (filterState.keywords.length === 0) {
            setKeywordsFlash(true);
            resultsKeyString = resultsKeyString + "1";
        }

        if (lnCheckedItems.length === 0 &&
            wnCheckedItems.length === 0 &&
            animeCheckedItems.length === 0 &&
            sscCheckedItems.length === 0 &&
            esCheckedItems.length === 0 &&
            apoCheckedItems.length === 0
        ) {
            resultsKeyString = resultsKeyString + "2";
        }

        if (resultsKeyString === "1") {
            setResultsKey(1);

        } else if (resultsKeyString === "2") {
            setResultsKey(2);

        } else if (resultsKeyString === "12") {
            setResultsKey(3);
        } else {
            setResultsKey(0);
        }
        console.log(resultsKeyString)

        if (Object.keys(lnText.ln).length === 0 &&
            Object.keys(wntext.wn).length === 0 &&
            Object.keys(animeText.an).length === 0 &&
            Object.keys(sscText.ssc).length === 0 &&
            Object.keys(esText.es).length === 0 &&
            Object.keys(apoText.apo).length === 0
        ) {
            setSearchResults({ anime: {}, ln: {}, wn: {}, ssc: {}, es: {}, apo: {} });
            setMediumFlash(true);
            return;
        } else {
            animeResults = searchAnime(animeCheckedItems, animeText, filterState.keywords, nameMap, checkedCharacters, filterState.caseSensitive, filterState.exactMatch, namedActive, namedCharacters);
            lnResults = searchLN(lnCheckedItems, lnText, filterState.keywords, filterState.caseSensitive, filterState.exactMatch);
            wnResults = searchWN(wnCheckedItems, wntext, filterState.keywords, filterState.caseSensitive, filterState.exactMatch);
            sscResults = searchSSC(sscCheckedItems, sscText, filterState.keywords, nameMap, checkedCharacters, filterState.caseSensitive, filterState.exactMatch, namedActive, namedCharacters);
            esResults = searchES(esCheckedItems, esText, filterState.keywords, nameMap, checkedCharacters, filterState.caseSensitive, filterState.exactMatch, namedActive, namedCharacters);
            apoResults = searchAPO(apoCheckedItems, apoText, filterState.keywords, nameMap, checkedCharacters, filterState.caseSensitive, filterState.exactMatch, namedActive, namedCharacters)
            // Update the state with the search results
            setSearchResults({ anime: animeResults, ln: lnResults, wn: wnResults, ssc: { ...sscResults }, es: { ...esResults }, apo: { ...apoResults } });
        }
    }




    // Add a button in your JSX to trigger the search
    return (
        <div className="search-page">
            <Filters
                wnDropdownState={wnDropdownState}
                updateWNDropdownState={updateWNDropdownState}
                animeDropdownState={animeDropdownState}
                updateAnimeDropdownState={updateAnimeDropdownState}
                lnDropdownState={lnDropdownState}
                updateLNDropdownState={updateLNDropdownState}
                filterState={filterState}
                setFilterState={setFilterState}
                dropdownStates={dropdownStates}
                setDropdownStates={setDropdownStates}
                images={images}
                namedActive={namedActive}
                namedCharacters={namedCharacters}
                canonActive={canonActive}
                setCanonActive={setCanonActive}
                canonES={canonES}
                setNamedActive={setNamedActive}
                mogDropdownState={mogDropdownState}
                setMogDropdownState={setMogDropdownState}
                handleSearch={handleSearch}
                mediumFlash={mediumFlash}
                setMediumFlash={setMediumFlash}
                keywordsFlash={keywordsFlash}
                setKeywordsFlash={setKeywordsFlash}
            />
            <Results
                setSearchResults={setSearchResults}
                wnDropdownState={wnDropdownState}
                lnDropdownState={lnDropdownState}
                mogDropdownState={mogDropdownState}
                animeDropdownState={animeDropdownState}
                results={searchResults}
                images={images}
                filterState={savedFilterState}
                resultsKey={resultsKey}
                setResultsKey={setResultsKey}
            />
        </div>
    );
}

export default SearchPage;
