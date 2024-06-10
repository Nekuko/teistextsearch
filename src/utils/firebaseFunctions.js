// firebaseFunctions.js

import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { openDB } from 'idb';
import { app } from '../firebase.js';

const firestore = getFirestore(app);

export async function fetchLNData(lnCheckedItems, versionData, setVersionData) {
    let lnCheckedData = {};
    let uniqueVolumes = [...new Set(lnCheckedItems.map(item => item.split('_')[1]))];
    const db = await openDB('firestore-cache-db', 1, {
        upgrade(db) {
            db.createObjectStore('firestore-cache');
        },
    });

    const versionDocRef = doc(firestore, 'data', 'versions');
    let versionDocSnap;
    if (versionData) {
        console.log("Version already stored locally (not indexedb).")
        versionDocSnap = versionData;
    } else {
        versionDocSnap = await getDoc(versionDocRef);
        setVersionData(versionDocSnap);
        console.log("Version retrieved from firebase.")
    }

    for (let volume of uniqueVolumes) {
        let firestoreVersion = versionDocSnap.data().ln[volume];
        console.log("Firestore Version", firestoreVersion)
        
        let indexedDBVersion = await db.get('firestore-cache', `data-versions-ln-${volume}`);
        console.log("IndexedDB Version", indexedDBVersion)

        let data;
        if (!indexedDBVersion || firestoreVersion > indexedDBVersion) {
            console.log("Newer version found or no version in IndexedDB.")
            const dataDocRef = doc(firestore, 'data', `ln_${volume}`);
            let dataDocSnap = await getDoc(dataDocRef);
            data = dataDocSnap.data();

            // Store the data in IndexedDB for future use
            await db.put('firestore-cache', data, `data-ln-${volume}`);
            console.log("Data retrieved from firebase and saved to IndexedDB.")
        } else if (firestoreVersion === indexedDBVersion) {
            console.log("Same version found.")
            // Fetch data from IndexedDB
            data = await db.get('firestore-cache', `data-ln-${volume}`);
            console.log("Data retrieved from IndexedDB.")
        }

        for (let item of lnCheckedItems) {
            let [_, volumeChecked, chapter] = item.split('_');
            if (volume === volumeChecked && data[chapter]) {
                if (!lnCheckedData[volume]) {
                    lnCheckedData[volume] = {};
                }
                lnCheckedData[volume][chapter] = data[chapter];
            }
        }

        // Store the version number in IndexedDB for future use
        if (firestoreVersion !== indexedDBVersion) {
            await db.put('firestore-cache', firestoreVersion, `data-versions-ln-${volume}`);
            console.log("New version saved to indexedDB.")
        }
    }
    console.log(lnCheckedData)

    return lnCheckedData;
}

export async function fetchWNData(wnCheckedItems, versionData, setVersionData) {
    let wnCheckedData = {};
    let uniqueVolumes = [...new Set(wnCheckedItems.map(item => item.split('_')[1]))];
    const db = await openDB('firestore-cache-db', 1, {
        upgrade(db) {
            db.createObjectStore('firestore-cache');
        },
    });

    const versionDocRef = doc(firestore, 'data', 'versions');
    let versionDocSnap;
    if (versionData) {
        console.log("Version already stored locally (not indexedb).")
        versionDocSnap = versionData;
    } else {
        versionDocSnap = await getDoc(versionDocRef);
        setVersionData(versionDocSnap);
        console.log("Version retrieved from firebase.")
    }

    for (let volume of uniqueVolumes) {
        let firestoreVersion = versionDocSnap.data().wn[volume];
        console.log("Firestore Version", firestoreVersion)
        
        let indexedDBVersion = await db.get('firestore-cache', `data-versions-wn-${volume}`);
        console.log("IndexedDB Version", indexedDBVersion)

        let data;
        if (!indexedDBVersion || firestoreVersion > indexedDBVersion) {
            console.log("Newer version found or no version in IndexedDB.")
            const dataDocRef = doc(firestore, 'data', `wn_v${volume}`);
            let dataDocSnap = await getDoc(dataDocRef);
            data = dataDocSnap.data();

            // Store the data in IndexedDB for future use
            await db.put('firestore-cache', data, `data-wn-${volume}`);
            console.log("Data retrieved from firebase and saved to IndexedDB.")
        } else if (firestoreVersion === indexedDBVersion) {
            console.log("Same version found.")
            // Fetch data from IndexedDB
            data = await db.get('firestore-cache', `data-wn-${volume}`);
            console.log("Data retrieved from IndexedDB.")

        }
        

        for (let item of wnCheckedItems) {
            let [_, volumeChecked, chapter] = item.split('_');
            if (volume === volumeChecked && data[chapter]) {
                if (!wnCheckedData[volume]) {
                    wnCheckedData[volume] = {};
                }
                wnCheckedData[volume][chapter] = data[chapter];
            }
        }

        // Store the version number in IndexedDB for future use
        if (firestoreVersion !== indexedDBVersion) {
            await db.put('firestore-cache', firestoreVersion, `data-versions-wn-${volume}`);
            console.log("New version saved to indexedDB.")
        }
    }
    console.log(wnCheckedData)

    return wnCheckedData;
}



