// firebaseFunctions.js

import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { openDB } from 'idb';
import { app } from '../firebase.js';

const firestore = getFirestore(app);

export async function fetchData(collection, document, field) {
    // Open (or create) the database
    const db = await openDB('firestore-cache-db', 1, {
        upgrade(db) {
            db.createObjectStore('firestore-cache');
        },
    });

    // Try to get the data from IndexedDB
    let data = await db.get('firestore-cache', `${collection}-${document}-${field}`);

    if (!data) {
        console.log("Data not in IndexedDB.")
        // Data is not in IndexedDB, fetch from Firestore
        const docRef = doc(firestore, collection, document);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let firestoreData = docSnap.data();
            if (firestoreData && firestoreData[field]) {
                data = firestoreData[field];

                // Store the data in IndexedDB for future use
                await db.put('firestore-cache', data, `${collection}-${document}-${field}`);
                console.log("LN Data retrieved from firebase.")
            }
        } else {
            console.log("No such document!");
        }
    }

    return data;
}

export async function fetchDataTemp(collection, document, field) {
    // Open (or create) the database
    const db = await openDB('firestore-cache-db', 1, {
        upgrade(db) {
            db.createObjectStore('firestore-cache');
        },
    });

    // Try to get the data from IndexedDB
    let data = await db.get('firestore-cache', `${collection}-${document}-${field}`);

    if (!data) {
        console.log("Data not in IndexedDB.")
        // Data is not in IndexedDB, load from hardcoded JSON object
        const response = await fetch('./jsons/ln.json');
        const hardcodedData = await response.json();

        let firestoreData = hardcodedData;
        if (firestoreData && firestoreData[field]) {
            data = firestoreData[field];

            // Store the data in IndexedDB for future use
            await db.put('firestore-cache', data, `${collection}-${document}-${field}`);
        } else {
            console.log("No such document!");
        }
    }

    return data;
}


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
        console.log("Version already stored.")
        versionDocSnap = versionData;
    } else {
        console.log("Version retrieved from firebase.")
        versionDocSnap = await getDoc(versionDocRef);
        setVersionData(versionDocSnap);
    }

    for (let volume of uniqueVolumes) {
        let firestoreVersion = versionDocSnap.data().ln[volume];
        console.log("Firestore Version", firestoreVersion)
        
        let indexedDBVersion = await db.get('firestore-cache', `data-versions-ln-${volume}`);
        console.log("IndexedDB Version", indexedDBVersion)
        if (firestoreVersion >= indexedDBVersion) {
            let data = await fetchDataTemp('data', `ln_${volume}`);

            if (data) {
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
                }
            }
        }
    }
    console.log(lnCheckedData)

    return lnCheckedData;
}
