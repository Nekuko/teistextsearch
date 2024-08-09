// InfoPage.js
import React, { useState, useEffect } from 'react';
import './InfoPage.css'; // Import the CSS file
import Collapsible from 'react-collapsible';
import * as covers from '../../images/covers';
import { ESMAP } from '../../esMap';
import { fetchInformationData, fetchVersionData } from '../../utils/firebaseFunctions';

const formatNumber = (num) => num.toLocaleString();

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


const sscMap = { 'p1': 'Part 1 | Rise of Garden', 'p1_c1-1': 'Chapter 1-1 | Shadow Garden, Mobilize!', 'p1_c1-1_e1': 'Episode 1 - Prelude', 'p1_c1-1_e2': 'Episode 2 - Garden Policy', 'p1_c1-1_e3': 'Episode 3 - Shadow Garden Covert Op', 'p1_c1-1_e4': 'Episode 4 - Possessed Search', 'p1_c1-1_e5': 'Episode 5 - After the Rescue', 'p1_c1-2': 'Chapter 1-2 | Ancient Dragon of Alexandria', 'p1_c1-2_e1': 'Episode 1 - The Lost City', 'p1_c1-2_e2': 'Episode 2 - Abyss Woods', 'p1_c1-2_e3': 'Episode 3 - Tale of Ruin', 'p1_c1-2_e4': "Episode 4 - Shadow's Sword", 'p1_c1-2_e5': 'Episode 5 - Future Unlocked', 'p1_c1-3': "Chapter 1-3 | Have Mercy! Eta's Protocol", 'p1_c1-3_e1': "Episode 1 - Eta's Scheme", 'p1_c1-3_e2': 'Episode 2 - Defense System', 'p1_c1-3_e3': 'Episode 3 - Magic Gear', 'p1_c1-3_e4': 'Episode 4 - Try, Try Again', 'p1_c1-3_e5': "Episode 5 - The Gear's Value", 'p1_c1-4': 'Chapter 1-4 | Behold! Tuna Chaos', 'p1_c1-4_e1': 'Episode 1 - Day Off Together', 'p1_c1-4_e2': 'Episode 2 - Going Fishing', 'p1_c1-4_e3': 'Episode 3 - Tasty Tuna Sammy', 'p1_c1-4_e4': 'Episode 4 - Victory Formula', 'p1_c1-4_e5': 'Episode 5 - A King is Born', 'p1_c1-5': 'Chapter 1-5 | Here Comes Trouble', 'p1_c1-5_e1': 'Episode 1 - News Beginnings', 'p1_c1-5_e2': 'Episode 2 - Open the Door', 'p1_c1-5_e3': 'Episode 3 - N. Kafka is Born', 'p1_c1-5_e4': 'Episode 4 - Mystery Paladin', 'p1_c1-5_e5': 'Episode 5 - Point Blank', 'p1_c1-6': 'Chapter 1-6 | Intense! Unstoppable Alpha', 'p1_c1-6_e1': 'Episode 1 - Poking the Bear', 'p1_c1-6_e2': 'Episode 2 - Re-Infiltration', 'p1_c1-6_e3': 'Episode 3 - BBQ Provocation', 'p1_c1-6_e4': 'Episode 4 - Merciless Probe', 'p1_c1-6_e5': 'Episode 5 - Grace Thy Blade', 'p1_c1-7': "Chapter 1-7 | Brutal! Delta's Night Hunt", 'p1_c1-7_e1': 'Episode 1 - Mountaineering', 'p1_c1-7_e2': 'Episode 2 - As Cats and Dogs', 'p1_c1-7_e3': 'Episode 3 - Begin the Hunt', 'p1_c1-7_e4': 'Episode 4 - Brutal Diplomacy', 'p1_c1-7_e5': 'Episode 5 - My Fangs Rejoice', 'p1_c1-8': 'Chapter 1-8 | She is Beauty, She is Grace!', 'p1_c1-8_e1': 'Episode 1 - Inspired by Ire', 'p1_c1-8_e2': 'Episode 2 - Presentation Row', 'p1_c1-8_e3': 'Episode 3 - Shadow Power!', 'p1_c1-8_e4': "Episode 4 - Epsilon's Justice", 'p1_c1-8_e5': 'Episode 5 - Pianist Shiron', 'p1_c1-9': 'Chapter 1-9 | Watch Out, Gamma!', 'p1_c1-9_e1': 'Episode 1 - Morning Shopping', 'p1_c1-9_e2': "Episode 2 - Luna's Past", 'p1_c1-9_e3': 'Episode 3 - Luna: The Truth', 'p1_c1-9_e4': 'Episode 4 - Gamma Capriccio', 'p1_c1-9_e5': 'Episode 5 - Shadow World Foe', 'p1_c1-10': 'Chapter 1-10 | Mitsugoshi, Ltd. is Open!', 'p1_c1-10_e1': 'Episode 1 - Info Wars Begin', 'p1_c1-10_e2': 'Episode 2 - Plot at A-Okay Co.', 'p1_c1-10_e3': 'Episode 3 - Deception Op', 'p1_c1-10_e4': 'Episode 4 - Mitsugoshi Credo', 'p1_c1-10_e5': 'Episode 5 - No Shadows Left', 'p1_c1-11': 'Chapter 1-11 | Deal! Arranged Booking', 'p1_c1-11_e1': 'Episode 1 - Beta Reminisces', 'p1_c1-11_e2': 'Episode 2 - Harsh Happenings', 'p1_c1-11_e3': 'Episode 3 - 2 Birds 1 Stone', 'p1_c1-11_e4': "Episode 4 - Sponsor's Intent", 'p1_c1-11_e5': 'Episode 5 - Ebony Swirl', 'p1_c1-12': 'Chapter 1-12 | Natsume & Shiron Hang Out!', 'p1_c1-12_e1': 'Episode 1 - City-State Duo', 'p1_c1-12_e2': 'Episode 2 - Fleeting Vacance', 'p1_c1-12_e3': 'Episode 3 - Jugang Ruins', 'p1_c1-12_e4': 'Episode 4 - Beta—Behind You!', 'p1_c1-12_e5': 'Episode 5 - Great Collapse', 'p1_c1-13': 'Chapter 1-13 | Visions... Zeta and the Prophet', 'p1_c1-13_e1': 'Episode 1 - Spy Request', 'p1_c1-13_e2': 'Episode 2 - Saintly Prayer', 'p1_c1-13_e3': 'Episode 3 - Secret Cathedral', 'p1_c1-13_e4': 'Episode 4 - Wonky Background', 'p1_c1-13_e5': 'Episode 5 - Victoria—Prophet', 'p1_c1-14': 'Chapter 1-14 | The Garden on the Eve of Battle!', 'p1_c1-14_e1': 'Episode 1 - Can You Lift?', 'p1_c1-14_e2': 'Episode 2 - Research & Hair', 'p1_c1-14_e3': "Episode 3 - Garden's Enemy", 'p1_c1-14_e4': 'Episode 4 - Cherish Shadow', 'p1_c1-14_e5': 'Episode 5 - To the Prelude', 'p1_c1-15': 'Chapter 1-15 | Final Battle! Templar Fanatics', 'p1_c1-15_e1': 'Episode 1 - Battlefront: Part 1', 'p1_c1-15_e2': 'Episode 2 - Battlefront: Part 2', 'p1_c1-15_e3': 'Episode 3 - Battlefront: Part 3', 'p1_c1-15_e4': 'Episode 4 - Reunion in Flame', 'p1_c1-15_e5': 'Episode 5 - Prelude to a New Battle', 'p2': 'Part 2 | Sturm of Velgalta', 'p2_c2-1': 'Chapter 2-1 | Operation: Rescue & Recover', 'p2_c2-1_e1': "Episode 1 - Zeta's Departure", 'p2_c2-1_e2': 'Episode 2 - Lurk in Darkness, Hunt Down Shadows', 'p2_c2-1_e3': 'Episode 3 - Possessed Heiress', 'p2_c2-1_e4': 'Episode 4 - Nicoletta Marquez', 'p2_c2-1_e5': 'Episode 5 - Opeartion: Rescue', 'p2_c2-2': 'Chapter 2-2 | A Brilliant Mission!', 'p2_c2-2_e1': 'Episode 1 - Slow and Slay', 'p2_c2-2_e2': 'Episode 2 - The Weakest Link', 'p2_c2-2_e3': 'Episode 3 - Pitfall Experiments', 'p2_c2-2_e4': "Episode 4 - Prophetess' Doubt", 'p2_c2-2_e5': 'Episode 5 - Destined Numbers', 'p2_c2-3': 'Chapter 2-3 | Investigation! In Search of Oil', 'p2_c2-3_e1': 'Episode 1 - Buried Black Gold', 'p2_c2-3_e2': 'Episode 2 - The Land of Madlid', 'p2_c2-3_e3': 'Episode 3 - Nyle River Trouble', 'p2_c2-3_e4': 'Episode 4 - Malak the Malevolent', 'p2_c2-3_e5': 'Episode 5 - The Perfect Base', 'p2_c2-4': 'Chapter 2-4 | Possessed Cult Leader', 'p2_c2-4_e1': 'Episode 1 - Keep Investigating', 'p2_c2-4_e2': 'Episode 2 - Two "Seven Blades"', 'p2_c2-4_e3': 'Episode 3 - Confronting Sergey', 'p2_c2-4_e4': 'Episode 4 - Not Even a Scratch', 'p2_c2-4_e5': 'Episode 5 - Glorious Escape', 'p2_c2-5': 'Chapter 2-5 |  Cult Secrets Revealed!', 'p2_c2-5_e1': 'Episode 1 - Possessed Lady Karen', 'p2_c2-5_e2': 'Episode 2 - Two Ruthless Choices', 'p2_c2-5_e3': 'Episode 3 - Cult Secrets Unveiled', 'p2_c2-5_e4': 'Episode 4 - To Know Thyself', 'p2_c2-5_e5': 'Episode 5 - Loss and Rebirth', 'p2_c2-6': 'Chapter 2-6 | The Garden Heads North', 'p2_c2-6_e1': 'Episode 1 - Mysterious "Tears"', 'p2_c2-6_e2': 'Episode 2 - Countering Regeneration', 'p2_c2-6_e3': 'Episode 3 - Altered History', 'p2_c2-6_e4': 'Episode 4 - Vengeance is Mine', 'p2_c2-6_e5': 'Episode 5 - Journey to the North', 'p2_c2-7': 'Chapter 2-7 | Blood Pact! Unlikely Pair', 'p2_c2-7_e1': 'Episode 1 - Secret Villa Seizure', 'p2_c2-7_e2': 'Episode 2 - Secret Fund in Laugus', 'p2_c2-7_e3': 'Episode 3 - RIP Mundane Man', 'p2_c2-7_e4': 'Episode 4 - Authorized Savagery', 'p2_c2-7_e5': 'Episode 5 - Without Loyalties', 'p2_c2-8': 'Chapter 2-8 | Seven Blades Swordswoman', 'p2_c2-8_e1': 'Episode 1 - Her Name is Annerose', 'p2_c2-8_e2': 'Episode 2 - Naive Swordswoman', 'p2_c2-8_e3': 'Episode 3 - Luna & Annerose', 'p2_c2-8_e4': "Episode 4 - A Knight's Honor", 'p2_c2-8_e5': 'Episode 5 - What is Passed Down', 'p2_c2-9': 'Chapter 2-9 | The Ones We Protect', 'p2_c2-9_e1': 'Episode 1 - Fallout', 'p2_c2-9_e2': 'Episode 2 - Painted Lies', 'p2_c2-9_e3': 'Episode 3 - Reason to Fight', 'p2_c2-9_e4': 'Episode 4 - The Ones We Protect', 'p2_c2-9_e5': 'Episode 5 - Embarkment', 'p2_c2-10': 'Chapter 2-10 | Duel! Defeat Malak!', 'p2_c2-10_e1': 'Episode 1 - Path of the Dragon', 'p2_c2-10_e2': 'Episode 2 - Evolutionary Dead-End', 'p2_c2-10_e3': 'Episode 3 - Muscles Are Stored', 'p2_c2-10_e4': 'Episode 4 - Break Apart!', 'p2_c2-10_e5': 'Episode 5 - White Diamond', 'p2_c2-11': 'Chapter 2-11 | Faith and Conviction', 'p2_c2-11_e1': 'Episode 1 - People in the Stands', 'p2_c2-11_e2': 'Episode 2 - Shadow Actress', 'p2_c2-11_e3': "Episode 3 - Trust's Companion", 'p2_c2-11_e4': 'Episode 4 - A Saint Gone Mad', 'p2_c2-11_e5': 'Episode 5 - False Oracles', 'p2_c2-12': "Chapter 2-12 | Evil Ambition's End", 'p2_c2-12_e1': 'Episode 1 - The First Child', 'p2_c2-12_e2': 'Episode 2 - Numbers Advantage', 'p2_c2-12_e3': 'Episode 3 - "He" is Here', 'p2_c2-12_e4': 'Episode 4 - Dragon Awakes', 'p2_c2-12_e5': 'Episode 5 - Summit of Strength', 'p2_c2-13': 'Chapter 2-13 | Hero...... Lured by Illusions', 'p2_c2-13_e1': 'Episode 1 - A New Journey', 'p2_c2-13_e2': "Episode 2 - Sergey's Hideout", 'p2_c2-13_e3': 'Episode 3 - Artificial Dragons', 'p2_c2-13_e4': "Episode 4 - Ambition's End", 'p2_c2-13_e5': 'Episode 5 - A Mysterious Elf', 'p3': 'Part 3 | Secret of Sacra', 'p3_c3-1': 'Chapter 3-1 | Shadow Garden Revamp', 'p3_c3-1_e1': 'Episode 1 - A Bitter Retreat', 'p3_c3-1_e2': 'Episode 2 - Reorganizing', 'p3_c3-1_e3': 'Episode 3 - Girls Reshuffled', 'p3_c3-1_e4': "Episode 4 - Lambda's Favorite", 'p3_c3-1_e5': 'Episode 5 - Take No One Lightly', 'p3_c3-2': 'Chapter 3-2 | The Hero Revealed!', 'p3_c3-2_e1': 'Episode 1 - Secret of the Heroes', 'p3_c3-2_e2': 'Episode 2 - Church and Heroes', 'p3_c3-2_e3': 'Episode 3 - Truth Amidst Lies', 'p3_c3-2_e4': 'Episode 4 - The Lost Tribe', 'p3_c3-2_e5': "Episode 5 - Olivier's Face", 'p3_c3-3': 'Chapter 3-3 | Alexandria Rebellion', 'p3_c3-3_e1': 'Episode 1 - The Situation Begins', 'p3_c3-3_e2': "Episode 2 - I Won't Hurt You...", 'p3_c3-3_e3': 'Episode 3 - Override Experiment', 'p3_c3-3_e4': 'Episode 4 - Outcome of the Duel', 'p3_c3-3_e5': 'Episode 5 - End of Scenario', 'p3_c3-4': 'Chapter 3-4 | Influencers Ahoy!', 'p3_c3-4_e1': 'Episode 1 - A Bodacious Debut', 'p3_c3-4_e2': 'Episode 2 - Problematic Property', 'p3_c3-4_e3': 'Episode 3 - An Aristocratic Property', 'p3_c3-4_e4': 'Episode 4 - A Thief of the Cult', 'p3_c3-4_e5': 'Episode 5 - A Manor House Reborn' }

const apoMap = { 'p1': 'Part 1 | Requiem for Scattered Shadows', 'c1-1': 'Chapter 1-1 | Millenium Past' }
const lnCoverImages = {
    "Volume 1": covers.LNV1Cover,
    "Volume 2": covers.LNV2Cover,
    "Volume 3": covers.LNV3Cover,
    "Volume 4": covers.LNV4Cover,
    "Volume 5": covers.LNV5Cover,
    "Volume 6 [Fan-Translation]": covers.LNV6Cover
}

const apoCoverImages = {
    "Apocrypha": covers.APOCover,
    "p1": covers.APO1Cover,
    "c1-1": covers.APO11Cover,
    "c1-1-e1": covers.APO111Cover,
    "c1-1-e2": covers.APO112Cover,
    "c1-1-e3-1": covers.APO1131Cover,
    "c1-1-e3-2": covers.APO1132Cover,
    "c1-1-e3-3": covers.APO1133Cover,
    "c1-1-e4-1": covers.APO1141Cover,
    "c1-1-e4-2": covers.APO1142Cover,
    "c1-1-e5-1": covers.APO1151Cover,
    "c1-1-e5-2": covers.APO1152Cover,
    "c1-1-e5-3": covers.APO1153Cover,
    "c1-1-e6": covers.APO116Cover,
    "c1-1-e7": covers.APO117Cover,
    "c1-1-e8-1": covers.APO1181Cover,
    "c1-1-e8-2": covers.APO1182Cover,
}

const esCoverImages = {
    "es-hr": covers.ESHRCover,
    "es-ftgi": covers.ESFTGICover,
    "es-nvacs": covers.ESNvACSCover,
    "es-rog": covers.ESROGCover,
    "es-hd": covers.ESHDCover,
    "es-clbg": covers.ESCLBGCover,
    "es-sulp": covers.ESSULPCover,
    "es-ts": covers.ESTSCover,
    "es-mt": covers.ESMTCover,
    "es-dss": covers.ESDSSCover,
    "es-i": covers.ESICover,
    "es-lshn": covers.ESLSHNCover,
    "es-ana": covers.ESANACover,
    "es-agfms": covers.ESAGFMSCover,
    "es-rtgi2": covers.ESRTGI2Cover,
    "es-m": covers.ESMCover,
    "es-bmsv": covers.ESBMSVCover,
    "es-tghms": covers.ESTGHMSCover,
    "es-hd2": covers.ESHD2Cover,
    "es-tpis": covers.ESTPISCover,
    "es-ssitw": covers.ESSSITWCover,
    'es-adswy': covers.ESADSWYCover
}

const sscCoverImages = {
    "ssc": covers.SSCCover,
    "c1-1": covers.SSC11Cover,
    "c1-2": covers.SSC12Cover,
    "c1-3": covers.SSC13Cover,
    "c1-4": covers.SSC14Cover,
    "c1-5": covers.SSC15Cover,
    "c1-6": covers.SSC16Cover,
    "c1-7": covers.SSC17Cover,
    "c1-8": covers.SSC18Cover,
    "c1-9": covers.SSC19Cover,
    "c1-10": covers.SSC110Cover,
    "c1-11": covers.SSC111Cover,
    "c1-12": covers.SSC112Cover,
    "c1-13": covers.SSC113Cover,
    "c1-14": covers.SSC114Cover,
    "c1-15": covers.SSC1FCover,
    "c2-1": covers.SSC21Cover,
    "c2-2": covers.SSC22Cover,
    "c2-3": covers.SSC23Cover,
    "c2-4": covers.SSC24Cover,
    "c2-5": covers.SSC25Cover,
    "c2-6": covers.SSC26Cover,
    "c2-7": covers.SSC27Cover,
    "c2-8": covers.SSC28Cover,
    "c2-9": covers.SSC29Cover,
    "c2-10": covers.SSC210Cover,
    "c2-11": covers.SSC211Cover,
    "c2-12": covers.SSC212Cover,
    "c2-13": covers.SSC213Cover,
    "c3-1": covers.SSC31Cover,
    "c3-2": covers.SSC32Cover,
    "c3-3": covers.SSC33Cover,
    "c3-4": covers.SSC34Cover
}

const kjCoverImages = {
    "kj1": covers.KJ1Cover,
    "kj2": covers.KJ2Cover
}

const animeCoverImages = {
    "1": covers.ANS1Cover,
    "2": covers.ANS2Cover
}

const kjMap = {
    "kj1": "Kage-Jitsu!",
    "kj2": "Kage-Jitsu! 2nd"
}

const customOrder = Object.keys(ESMAP);

const generateCollapsiblesLN = (all_counts) => {
    const volumes = Object.keys(all_counts).filter(key => key !== 'total'); // Exclude the 'total' key
    return (
        <Collapsible trigger="Light Novel">
            <p>Volumes: {formatNumber(volumes.length)}</p>
            <p>Approximate Paragraphs: {formatNumber(all_counts.total.line_count)}</p>
            <p>Approximate Word Count: {formatNumber(all_counts.total.word_count)}</p>
            <p>Approximate Character Count: {formatNumber(all_counts.total.char_count)}</p>
            {volumes.sort().map(volume => (
                <Collapsible key={volume} trigger={
                    <>
                        <div className="volume-trigger">
                            {lnCoverImages[all_counts[volume].total.title] && <img className="cover-image" src={lnCoverImages[all_counts[volume].total.title]} alt={all_counts[volume].total.title} />}
                            {`${all_counts[volume].total.title}`}
                        </div>
                    </>
                }>
                    <p>Chapters: {formatNumber(Object.keys(all_counts[volume]).length - 1)}</p> {/* Exclude the 'total' key */}
                    <p>Approximate Paragraphs: {formatNumber(all_counts[volume].total.line_count)}</p>
                    <p>Approximate Word Count: {formatNumber(all_counts[volume].total.word_count)}</p>
                    <p>Approximate Character Count: {formatNumber(all_counts[volume].total.char_count)}</p>
                    {Object.keys(all_counts[volume]).filter(key => key !== 'total').sort((a, b) => {
                        const chapterA = a.split("c")[1];
                        const chapterB = b.split("c")[1];
                        return chapterA - chapterB; // Otherwise, sort by part
                    })
                        .map(chapter => (
                            <Collapsible key={chapter} trigger={`${all_counts[volume][chapter].title}`}>
                                <p>Approximate Paragraphs: {formatNumber(all_counts[volume][chapter].line_count)}</p>
                                <p>Approximate Word Count: {formatNumber(all_counts[volume][chapter].word_count)}</p>
                                <p>Approximate Character Count: {formatNumber(all_counts[volume][chapter].char_count)}</p>
                            </Collapsible>
                        ))}
                </Collapsible>
            ))}
        </Collapsible>
    );
};

const generateCollapsiblesWN = (all_counts) => {
    const volumes = Object.keys(all_counts).filter(key => key !== 'total'); // Exclude the 'total' key
    return (
        <Collapsible trigger="Web Novel">
            <p>Volumes: {formatNumber(volumes.length)}</p>
            <p>Approximate Paragraphs: {formatNumber(all_counts.total.line_count)}</p>
            <p>Approximate Word Count: {formatNumber(all_counts.total.word_count)}</p>
            <p>Approximate Character Count: {formatNumber(all_counts.total.char_count)}</p>
            {volumes.sort().map(volume => (
                <Collapsible key={volume} trigger={`${all_counts[volume].total.title}`}>
                    <p>Chapters: {formatNumber(Object.keys(all_counts[volume]).length - 1)}</p> {/* Exclude the 'total' key */}
                    <p>Approximate Paragraphs: {formatNumber(all_counts[volume].total.line_count)}</p>
                    <p>Approximate Word Count: {formatNumber(all_counts[volume].total.word_count)}</p>
                    <p>Approximate Character Count: {formatNumber(all_counts[volume].total.char_count)}</p>
                    {Object.keys(all_counts[volume]).filter(key => key !== 'total').map(chapter => (
                        <Collapsible key={chapter} trigger={`${chapter} | ${all_counts[volume][chapter].title}`}>
                            <p>Approximate Paragraphs: {formatNumber(all_counts[volume][chapter].line_count)}</p>
                            <p>Approximate Word Count: {formatNumber(all_counts[volume][chapter].word_count)}</p>
                            <p>Approximate Character Count: {formatNumber(all_counts[volume][chapter].char_count)}</p>
                        </Collapsible>
                    ))}
                    <br />
                </Collapsible>
            ))}
            <br />
        </Collapsible>
    );
};

const generateCollapsiblesAPO = (all_counts) => {
    const parts = Object.keys(all_counts.parts); // Get all part keys
    return (
        <Collapsible trigger="Apocrypha">
            <p>Parts: {formatNumber(all_counts.part_count)}</p>
            <p>Paragraphs: {formatNumber(all_counts.line_count)}</p>
            <p>Approximate Word Count: {formatNumber(all_counts.word_count)}</p>
            <p>Character Count: {formatNumber(all_counts.char_count)}</p>
            <Collapsible trigger="Characters">
                {Object.keys(all_counts.characters).sort().map(character => (
                    <div key={character}>
                        <span>{character}: </span>
                        <span>{all_counts.characters[character]}</span>
                    </div>
                ))}
            </Collapsible>
            {parts.map(part => (
                <Collapsible key={part} trigger={
                    <>
                        <div className="volume-trigger">
                            {`${apoMap[part]}`}
                        </div>
                    </>
                }>
                    <p>Chapters: {Object.keys(all_counts.parts[part].chapters).length}</p>
                    <p>Paragraphs:{formatNumber(all_counts.parts[part].line_count)}</p>
                    <p>Approximate Word Count: {formatNumber(all_counts.parts[part].word_count)}</p>
                    <p>Character Count: {formatNumber(all_counts.parts[part].char_count)}</p>
                    <Collapsible trigger="Characters">
                        {Object.keys(all_counts.parts[part].characters).sort().map(character => (
                            <div key={character}>
                                <span>{character}: </span>
                                <span>{all_counts.parts[part].characters[character]}</span>
                            </div>
                        ))}
                    </Collapsible>
                    {Object.keys(all_counts.parts[part].chapters)
                        .sort((a, b) => {
                            // Extract the numeric part of the chapter keys
                            const aNum = parseInt(a.split('-')[1]);
                            const bNum = parseInt(b.split('-')[1]);
                            return aNum - bNum;
                        })
                        .map(chapter => (
                            <Collapsible key={chapter} trigger={
                                <>
                                    <div className="volume-trigger">
                                        {apoCoverImages[`${chapter}`] && <img className="cover-image-apo-chapter-small" src={apoCoverImages[`${chapter}`]} alt={`${part}-${chapter}`} />}
                                        {`${apoMap[chapter]}`}
                                    </div>
                                </>
                            }>
                                <p>Episodes: {Object.keys(all_counts.parts[part].chapters[chapter].episodes).length}</p>
                                <p>Paragraphs: {formatNumber(all_counts.parts[part].chapters[chapter].line_count)}</p>
                                <p>Approximate Word Count: {formatNumber(all_counts.parts[part].chapters[chapter].word_count)}</p>
                                <p>Character Count: {formatNumber(all_counts.parts[part].chapters[chapter].char_count)}</p>
                                <Collapsible trigger="Characters">
                                    {Object.keys(all_counts.parts[part].chapters[chapter].characters).map(character => (
                                        <div key={character}>
                                            <span>{character}: </span>
                                            <span>{all_counts.parts[part].chapters[chapter].characters[character]}</span>
                                        </div>
                                    ))}
                                </Collapsible>
                                {Object.keys(all_counts.parts[part].chapters[chapter].episodes).sort().map(episode => (
                                    <Collapsible key={episode} trigger={
                                        <>
                                            <div className="volume-trigger">
                                                {apoCoverImages[`${chapter}-${episode}`] && <img className="cover-image-apo-small" src={apoCoverImages[`${chapter}-${episode}`]} alt={`${chapter}-${episode}`} />}
                                                {`Episode ${episode.replace("e", "")}`}
                                            </div>
                                        </>
                                    }>
                                        <p>Paragraphs: {formatNumber(all_counts.parts[part].chapters[chapter].episodes[episode].line_count)}</p>
                                        <p>Approximate Word Count: {formatNumber(all_counts.parts[part].chapters[chapter].episodes[episode].word_count)}</p>
                                        <p>Character Count: {formatNumber(all_counts.parts[part].chapters[chapter].episodes[episode].char_count)}</p>
                                        <Collapsible trigger="Characters">
                                            {Object.keys(all_counts.parts[part].chapters[chapter].episodes[episode].characters).sort().map(character => (
                                                <div key={character}>
                                                    <span>{character}: </span>
                                                    <span>{all_counts.parts[part].chapters[chapter].episodes[episode].characters[character]}</span>
                                                </div>
                                            ))}
                                        </Collapsible>
                                    </Collapsible>
                                ))}
                            </Collapsible>
                        ))}
                </Collapsible>
            ))}
        </Collapsible>
    );
};

const generateCollapsiblesSSC = (all_counts) => {
    const parts = Object.keys(all_counts.parts); // Get all part keys
    return (
        <Collapsible trigger="Seven Shadows Chronicles">
            <p>Parts: {formatNumber(all_counts.part_count)}</p>
            <p>Paragraphs: {formatNumber(all_counts.line_count)}</p>
            <p>Approximate Word Count: {formatNumber(all_counts.word_count)}</p>
            <p>Character Count: {formatNumber(all_counts.char_count)}</p>
            <Collapsible trigger="Characters">
                {Object.keys(all_counts.characters).sort().map(character => (
                    <div key={character}>
                        <span>{character}: </span>
                        <span>{all_counts.characters[character]}</span>
                    </div>
                ))}
            </Collapsible>
            {parts.sort().map(part => (
                <Collapsible key={part} trigger={`${sscMap[part]}`}>
                    <p>Chapters: {Object.keys(all_counts.parts[part].chapters).length}</p>
                    <p>Paragraphs: {formatNumber(all_counts.parts[part].line_count)}</p>
                    <p>Approximate Word Count: {formatNumber(all_counts.parts[part].word_count)}</p>
                    <p>Character Count: {formatNumber(all_counts.parts[part].char_count)}</p>
                    <Collapsible trigger="Characters">
                        {Object.keys(all_counts.parts[part].characters).sort().map(character => (
                            <div key={character}>
                                <span>{character}: </span>
                                <span>{all_counts.parts[part].characters[character]}</span>
                            </div>
                        ))}
                    </Collapsible>
                    {Object.keys(all_counts.parts[part].chapters)
                        .sort((a, b) => {
                            // Extract the numeric part of the chapter keys
                            const aNum = parseInt(a.split('-')[1]);
                            const bNum = parseInt(b.split('-')[1]);
                            return aNum - bNum;
                        })
                        .map(chapter => (
                            <Collapsible key={chapter} trigger={
                                <>
                                    <div className="volume-trigger">
                                        {sscCoverImages[`${chapter}`] && <img className="cover-image-ssc" src={sscCoverImages[`${chapter}`]} alt={`${part}-${chapter}`} />}
                                        {sscMap[`${part}_${chapter}`]}
                                    </div>
                                </>
                            }>
                                <p>Episodes: {Object.keys(all_counts.parts[part].chapters[chapter].episodes).length}</p>
                                <p>Paragraphs: {formatNumber(all_counts.parts[part].chapters[chapter].line_count)}</p>
                                <p>Approximate Word Count: {formatNumber(all_counts.parts[part].chapters[chapter].word_count)}</p>
                                <p>Character Count: {formatNumber(all_counts.parts[part].chapters[chapter].char_count)}</p>
                                <Collapsible trigger="Characters">
                                    {Object.keys(all_counts.parts[part].chapters[chapter].characters).map(character => (
                                        <div key={character}>
                                            <span>{character}: </span>
                                            <span>{all_counts.parts[part].chapters[chapter].characters[character]}</span>
                                        </div>
                                    ))}
                                </Collapsible>
                                {Object.keys(all_counts.parts[part].chapters[chapter].episodes).sort().map(episode => (
                                    <Collapsible key={episode} trigger={
                                        <>
                                            <div className="volume-trigger">
                                                {sscMap[`${part}_${chapter}_${episode}`]}
                                            </div>
                                        </>
                                    }>
                                        <p>Paragraphs: {formatNumber(all_counts.parts[part].chapters[chapter].episodes[episode].line_count)}</p>
                                        <p>Approximate Word Count: {formatNumber(all_counts.parts[part].chapters[chapter].episodes[episode].word_count)}</p>
                                        <p>Character Count: {formatNumber(all_counts.parts[part].chapters[chapter].episodes[episode].char_count)}</p>
                                        <Collapsible trigger="Characters">
                                            {Object.keys(all_counts.parts[part].chapters[chapter].episodes[episode].characters).sort().map(character => (
                                                <div key={character}>
                                                    <span>{character}: </span>
                                                    <span>{all_counts.parts[part].chapters[chapter].episodes[episode].characters[character]}</span>
                                                </div>
                                            ))}
                                        </Collapsible>
                                    </Collapsible>
                                ))}
                            </Collapsible>
                        ))}
                </Collapsible>
            ))}
        </Collapsible>
    );
};

const generateCollapsiblesES = (all_counts) => {
    const parts = Object.keys(all_counts.parts); // Get all part keys
    return (
        <Collapsible trigger="Event Stories">
            <p>Stories: {formatNumber(all_counts.stories)}</p>
            <p>Paragraphs: {formatNumber(all_counts.line_count)}</p>
            <p>Approximate Word Count: {formatNumber(all_counts.word_count)}</p>
            <p>Character Count: {formatNumber(all_counts.char_count)}</p>
            <Collapsible trigger="Characters">
                {Object.keys(all_counts.characters).sort().map(character => (
                    <div key={character}>
                        <span>{character}: </span>
                        <span>{all_counts.characters[character]}</span>
                    </div>
                ))}
            </Collapsible>
            {parts.sort((a, b) => {
                const aIndex = customOrder.indexOf(a);
                const bIndex = customOrder.indexOf(b);
                return aIndex - bIndex;
            }).map(part => (
                <Collapsible key={part} trigger={
                    <>
                        <div className="volume-trigger">
                            {esCoverImages[`es-${part}`] && <img className="cover-image-es" src={esCoverImages[`es-${part}`]} alt={`es-${part}`} />}
                            {ESMAP[part]}
                        </div>
                    </>
                }>
                    <p>Episodes: {Object.keys(all_counts.parts[part].episodes).length}</p>
                    <p>Paragraphs: {formatNumber(all_counts.parts[part].line_count)}</p>
                    <p>Approximate Word Count: {formatNumber(all_counts.parts[part].word_count)}</p>
                    <p>Character Count: {formatNumber(all_counts.parts[part].char_count)}</p>
                    <Collapsible trigger="Characters">
                        {Object.keys(all_counts.parts[part].characters).sort().map(character => (
                            <div key={character}>
                                <span>{character}: </span>
                                <span>{all_counts.parts[part].characters[character]}</span>
                            </div>
                        ))}
                    </Collapsible>
                    {Object.keys(all_counts.parts[part].episodes).sort().map(episode => (
                        <Collapsible key={episode} trigger={
                            <>
                                <div className="volume-trigger">
                                    {`Episode ${episode.replace("e", "")}`}
                                </div>
                            </>
                        }>
                            <p>Paragraphs: {formatNumber(all_counts.parts[part].episodes[episode].line_count)}</p>
                            <p>Approximate Word Count: {formatNumber(all_counts.parts[part].episodes[episode].word_count)}</p>
                            <p>Character Count: {formatNumber(all_counts.parts[part].episodes[episode].char_count)}</p>
                            <Collapsible trigger="Characters">
                                {Object.keys(all_counts.parts[part].episodes[episode].characters).sort().map(character => (
                                    <div key={character}>
                                        <span>{character}: </span>
                                        <span>{all_counts.parts[part].episodes[episode].characters[character]}</span>
                                    </div>
                                ))}
                            </Collapsible>
                        </Collapsible>
                    ))}
                </Collapsible>
            ))}
        </Collapsible>
    );
};

const generateCollapsiblesKJ = (all_counts) => {
    const parts = Object.keys(all_counts.seasons); // Get all part keys
    return (
        <Collapsible trigger="Kage-Jitsu!">
            <p>Seasons: {formatNumber(all_counts.season_count)}</p>
            <p>Subtitles: {formatNumber(all_counts.line_count)}</p>
            <p>Approximate Word Count: {formatNumber(all_counts.word_count)}</p>
            <p>Character Count: {formatNumber(all_counts.char_count)}</p>
            <Collapsible trigger="Characters">
                {Object.keys(all_counts.characters).sort().map(character => (
                    <div key={character}>
                        <span>{character}: </span>
                        <span>{all_counts.characters[character]}</span>
                    </div>
                ))}
            </Collapsible>
            {parts.map(part => (
                <Collapsible key={part} trigger={
                    <>
                        <div className="volume-trigger">
                            {kjCoverImages[part] && <img className="cover-image" src={kjCoverImages[part]} alt={`kj-${part}`} />}
                            {kjMap[part]}
                        </div>
                    </>
                }>
                    <p>Episodes: {Object.keys(all_counts.seasons[part].episodes).length}</p>
                    <p>Subtitles: {formatNumber(all_counts.seasons[part].line_count)}</p>
                    <p>Approximate Word Count: {formatNumber(all_counts.seasons[part].word_count)}</p>
                    <p>Character Count: {formatNumber(all_counts.seasons[part].char_count)}</p>
                    <Collapsible trigger="Characters">
                        {Object.keys(all_counts.seasons[part].characters).sort().map(character => (
                            <div key={character}>
                                <span>{character}: </span>
                                <span>{all_counts.seasons[part].characters[character]}</span>
                            </div>
                        ))}
                    </Collapsible>
                    {Object.keys(all_counts.seasons[part].episodes).sort((a, b) => {
                        const episodeA = parseInt(a.split("e")[1], 10);
                        const episodeB = parseInt(b.split("e")[1], 10);
                        return episodeA - episodeB;
                    }).map(episode => (
                        <Collapsible key={episode} trigger={
                            <>
                                <div className="volume-trigger">
                                    {`Episode ${episode.replace("e", "")}`}
                                </div>
                            </>
                        }>
                            <p>Subtitles: {formatNumber(all_counts.seasons[part].episodes[episode].line_count)}</p>
                            <p>Approximate Word Count: {formatNumber(all_counts.seasons[part].episodes[episode].word_count)}</p>
                            <p>Character Count: {formatNumber(all_counts.seasons[part].episodes[episode].char_count)}</p>
                            <Collapsible trigger="Characters">
                                {Object.keys(all_counts.seasons[part].episodes[episode].characters).sort().map(character => (
                                    <div key={character}>
                                        <span>{character}: </span>
                                        <span>{all_counts.seasons[part].episodes[episode].characters[character]}</span>
                                    </div>
                                ))}
                            </Collapsible>
                        </Collapsible>
                    ))}
                </Collapsible>
            ))}
        </Collapsible>
    );
};

const generateCollapsiblesAN = (all_counts) => {
    const parts = Object.keys(all_counts.seasons); // Get all part keys
    return (
        <Collapsible trigger="Seasons">
            <p>Seasons: {formatNumber(all_counts.season_count)}</p>
            <p>Subtitles: {formatNumber(all_counts.line_count)}</p>
            <p>Approximate Word Count: {formatNumber(all_counts.word_count)}</p>
            <p>Character Count: {formatNumber(all_counts.char_count)}</p>
            <Collapsible trigger="Characters">
                {Object.keys(all_counts.characters).sort().map(character => (
                    <div key={character}>
                        <span>{character}: </span>
                        <span>{all_counts.characters[character]}</span>
                    </div>
                ))}
            </Collapsible>
            {parts.sort().map(part => (
                <Collapsible key={part} trigger={
                    <>
                        <div className="volume-trigger">
                            {animeCoverImages[`${part}`] && <img className="cover-image" src={animeCoverImages[`${part}`]} alt={`an-${part}`} />}
                            {`Season ${part}`}
                        </div>
                    </>
                }>
                    <p>Episodes: {Object.keys(all_counts.seasons[part].episodes).length}</p>
                    <p>Subtitles: {formatNumber(all_counts.seasons[part].line_count)}</p>
                    <p>Approximate Word Count: {formatNumber(all_counts.seasons[part].word_count)}</p>
                    <p>Character Count: {formatNumber(all_counts.seasons[part].char_count)}</p>
                    <Collapsible trigger="Characters">
                        {Object.keys(all_counts.seasons[part].characters).sort().map(character => (
                            <div key={character}>
                                <span>{character}: </span>
                                <span>{all_counts.seasons[part].characters[character]}</span>
                            </div>
                        ))}
                    </Collapsible>
                    {Object.keys(all_counts.seasons[part].episodes).sort((a, b) => {
                        const episodeA = parseInt(a.split("e")[1], 10);
                        const episodeB = parseInt(b.split("e")[1], 10);
                        return episodeA - episodeB;
                    }).map(episode => (
                        <Collapsible key={episode} trigger={
                            <>
                                <div className="volume-trigger">
                                    {`Episode ${episode.split("e")[1]}`}
                                </div>
                            </>
                        }>
                            <p>Subtitles: {formatNumber(all_counts.seasons[part].episodes[episode].line_count)}</p>
                            <p>Approximate Word Count: {formatNumber(all_counts.seasons[part].episodes[episode].word_count)}</p>
                            <p>Character Count: {formatNumber(all_counts.seasons[part].episodes[episode].char_count)}</p>
                            <Collapsible trigger="Characters">
                                {Object.keys(all_counts.seasons[part].episodes[episode].characters).sort().map(character => (
                                    <div key={character}>
                                        <span>{character}: </span>
                                        <span>{all_counts.seasons[part].episodes[episode].characters[character]}</span>
                                    </div>
                                ))}
                            </Collapsible>
                        </Collapsible>
                    ))}
                </Collapsible>
            ))}
        </Collapsible>
    );
};



function InfoPage() {
    const [versionData, setVersionData] = useState();
    const [loading, setLoading] = useState(true);
    const [informationData, setInformationData] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                let versionDataTemp;
                const storedVersionData = sessionStorage.getItem('versionData');
                if (storedVersionData) {
                    const parsedData = JSON.parse(storedVersionData);
                    const currentTime = Date.now();
                    const expirationTime = 5 * 60 * 1000; // Set expiration to 5 minutes

                    if (parsedData.timestamp && currentTime - parsedData.timestamp < expirationTime) {
                        // Data is still valid, use it
                        setVersionData(parsedData.data);
                        versionDataTemp = parsedData.data;
                    } else {
                        // Fetch new data
                        const data = await fetchVersionData(versionData);
                        versionDataTemp = data;
                        setVersionData(data);
                        sessionStorage.setItem('versionData', JSON.stringify({ data, timestamp: currentTime }));
                    }
                } else {
                    // Fetch data if not found in session storage
                    const data = await fetchVersionData(versionData);
                    versionDataTemp = data;
                    setVersionData(data);
                    sessionStorage.setItem('versionData', JSON.stringify({ data, timestamp: Date.now() }));
                }

                if (!informationData) {
                    let infoData = await fetchInformationData(versionDataTemp, setVersionData);
                    setInformationData(infoData.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [informationData]);

    if (loading) {
        return (
            <div className="info-page">
                <h1 className="filters-header">INFORMATION</h1>
                <div className="info-content">
                    <h1 className="info-header">MEDIUMS</h1>
                    <p>Lines: 0</p>
                    <p>Approximate Word Count: 0</p>
                    <p>Character Count: 0</p>
                    <h1 className="info-header">CHARACTERS</h1>
                </div>

            </div>
        );
    }

    const mg_info = {
        "line_count": informationData['apo']["line_count"] + informationData['ssc']["line_count"] + informationData['es']["line_count"],
        "word_count": informationData['apo']["word_count"] + informationData['ssc']["word_count"] + informationData['es']["word_count"],
        "char_count": informationData['apo']["char_count"] + informationData['ssc']["char_count"] + informationData['es']["char_count"],
        characters: {},
    }
    for (const info of [informationData['apo'], informationData['ssc'], informationData['es']]) {
        for (const [character, count] of Object.entries(info.characters)) {
            mg_info.characters[character] = (mg_info.characters[character] || 0) + count;
        }
    }

    const all_an_info = {
        "line_count": informationData['an']["line_count"] + informationData['kj']["line_count"],
        "word_count": informationData['an']["word_count"] + informationData['kj']["word_count"],
        "char_count": informationData['an']["char_count"] + informationData['kj']["char_count"],
        characters: {},
    }

    for (const info of [informationData['an'], informationData['kj']]) {
        for (const [character, count] of Object.entries(info.characters)) {
            all_an_info.characters[character] = (all_an_info.characters[character] || 0) + count;
        }
    }

    const all_info = {
        "line_count": mg_info["line_count"] + informationData['ln']["total"]["line_count"] + informationData['wn']["total"]["line_count"] + all_an_info["line_count"],
        "word_count": mg_info["word_count"] + informationData['ln']["total"]["word_count"] + informationData['wn']["total"]["word_count"] + all_an_info["word_count"],
        "char_count": mg_info["char_count"] + informationData['ln']["total"]["char_count"] + informationData['wn']["total"]["char_count"] + all_an_info["char_count"],
    }

    return (
        <div className="info-page">
            <h1 className="filters-header">INFORMATION</h1>
            <div className="info-content">
                <h1 className="info-header">MEDIUMS</h1>
                <p>Lines: {formatNumber(all_info.line_count)}</p>
                <p>Approximate Word Count: {formatNumber(all_info.word_count)}</p>
                <p>Character Count: {formatNumber(all_info.char_count)}</p>
                <br />
                {generateCollapsiblesLN(informationData['ln'])}
                <br />
                {generateCollapsiblesWN(informationData['wn'])}
                <br />
                <Collapsible trigger="Anime">
                    <p>Seasons: {formatNumber(4)}</p>
                    <p>Subtitles: {formatNumber(all_an_info.line_count)}</p>
                    <p>Approximate Word Count: {formatNumber(all_an_info.word_count)}</p>
                    <p>Character Count: {formatNumber(all_an_info.char_count)}</p>
                    <Collapsible trigger="Characters">
                        {Object.keys(all_an_info.characters).sort().map(character => (
                            <div key={character}>
                                <span>{character}: </span>
                                <span>{all_an_info.characters[character]}</span>
                            </div>
                        ))}
                    </Collapsible>
                    <br />
                    {generateCollapsiblesAN(informationData['an'])}
                    <br />
                    {generateCollapsiblesKJ(informationData['kj'])}
                </Collapsible>
                <br />
                <Collapsible trigger="Master of Garden">
                    <p>Paragraphs: {formatNumber(mg_info.line_count)}</p>
                    <p>Approximate Word Count: {formatNumber(mg_info.word_count)}</p>
                    <p>Character Count: {formatNumber(mg_info.char_count)}</p>
                    <Collapsible trigger="Characters">
                        {Object.keys(mg_info.characters).sort().map(character => (
                            <div key={character}>
                                <span>{character}: </span>
                                <span>{mg_info.characters[character]}</span>
                            </div>
                        ))}
                    </Collapsible>
                    <br />
                    {generateCollapsiblesSSC(informationData['ssc'])}
                    <br />
                    {generateCollapsiblesES(informationData['es'])}
                    <br />
                    {generateCollapsiblesAPO(informationData['apo'])}
                </Collapsible>
                {/* ... Other mediums ... */}
                <h1 className="info-header">CHARACTERS</h1>
                {/* ... Character information ... */}
                <button title={"To Top"} className="scroll-top-button" onClick={scrollToTop}>UP</button>
            </div>

        </div>
    );
}

export default InfoPage;
