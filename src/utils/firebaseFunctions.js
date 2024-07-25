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

export async function fetchAPOData(apoCheckedItems, versionData, setVersionData) {
    let apoCheckedData = {};
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

    for (let item of apoCheckedItems) {
        let [_, part, chapter] = item.split('_');
        
        // Ensure the data structure is initialized properly
        if (!apoCheckedData[part]) {
            apoCheckedData[part] = {};
        }
        if (!apoCheckedData[part][chapter]) {
            apoCheckedData[part][chapter] = {};
        }

        let firestoreVersion = versionDocSnap.data().apo[`${part}_${chapter}`];
        console.log("Firestore Version", firestoreVersion)
        
        let indexedDBVersion = await db.get('firestore-cache', `data-versions-apo-${part}-${chapter}`);
        console.log("IndexedDB Version", indexedDBVersion)

        let data;
        if (!indexedDBVersion || firestoreVersion > indexedDBVersion) {
            console.log("Newer version found or no version in IndexedDB.")
            const dataDocRef = doc(firestore, 'data', `apo_${part}_${chapter}`);
            let dataDocSnap = await getDoc(dataDocRef);
            data = dataDocSnap.data();

            // Store the data in IndexedDB for future use
            await db.put('firestore-cache', data, `data-apo-${part}-${chapter}`);
            console.log("Data retrieved from firebase and saved to IndexedDB.")
        } else if (firestoreVersion === indexedDBVersion) {
            console.log("Same version found.")
            // Fetch data from IndexedDB
            data = await db.get('firestore-cache', `data-apo-${part}-${chapter}`);
            console.log("Data retrieved from IndexedDB.")
        }

        console.log(data)

        // Add the episode data if it exists
        console.log(item)
        let episode = item.split('_')[3];
        if (data && data[episode]) {
            apoCheckedData[part][chapter][episode] = data[episode];
        }

        // Store the version number in IndexedDB for future use
        if (firestoreVersion !== indexedDBVersion) {
            await db.put('firestore-cache', firestoreVersion, `data-versions-apo-${part}-${chapter}`);
            console.log("New version saved to indexedDB.")
        }
    }
    console.log(apoCheckedData)

    return apoCheckedData;
}

export async function fetchSSCData(sscCheckedItems, versionData, setVersionData) {
    let sscCheckedData = {};
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

    for (let item of sscCheckedItems) {
        let [_, part, chapter] = item.split('_');
        
        // Ensure the data structure is initialized properly
        if (!sscCheckedData[part]) {
            sscCheckedData[part] = {};
        }
        if (!sscCheckedData[part][chapter]) {
            sscCheckedData[part][chapter] = {};
        }

        let firestoreVersion = versionDocSnap.data().ssc[`${part}_${chapter}`];
        console.log("Firestore Version", firestoreVersion)
        
        let indexedDBVersion = await db.get('firestore-cache', `data-versions-ssc-${part}-${chapter}`);
        console.log("IndexedDB Version", indexedDBVersion)

        let data;
        if (!indexedDBVersion || firestoreVersion > indexedDBVersion) {
            console.log("Newer version found or no version in IndexedDB.")
            const dataDocRef = doc(firestore, 'data', `ssc_${part}_${chapter}`);
            let dataDocSnap = await getDoc(dataDocRef);
            data = dataDocSnap.data();

            // Store the data in IndexedDB for future use
            await db.put('firestore-cache', data, `data-ssc-${part}-${chapter}`);
            console.log("Data retrieved from firebase and saved to IndexedDB.")
        } else if (firestoreVersion === indexedDBVersion) {
            console.log("Same version found.")
            // Fetch data from IndexedDB
            data = await db.get('firestore-cache', `data-ssc-${part}-${chapter}`);
            console.log("Data retrieved from IndexedDB.")
        }

        console.log(data)

        // Add the episode data if it exists
        console.log(item)
        let episode = item.split('_')[3];
        if (data && data[episode]) {
            sscCheckedData[part][chapter][episode] = data[episode];
        }

        // Store the version number in IndexedDB for future use
        if (firestoreVersion !== indexedDBVersion) {
            await db.put('firestore-cache', firestoreVersion, `data-versions-ssc-${part}-${chapter}`);
            console.log("New version saved to indexedDB.")
        }
    }
    console.log(sscCheckedData)

    return sscCheckedData;
}

export async function fetchESData(esCheckedItems, versionData, setVersionData) {
    let esCheckedData = {};
    let uniqueParts = [...new Set(esCheckedItems.map(item => item.split('_')[1]))];
    const db = await openDB('firestore-cache-db', 1, {
        upgrade(db) {
            db.createObjectStore('firestore-cache');
        },
    });

    const versionDocRef = doc(firestore, 'data', 'versions');
    let versionDocSnap;
    if (versionData) {
        console.log("Version already stored locally (not indexedb).");
        versionDocSnap = versionData;
    } else {
        versionDocSnap = await getDoc(versionDocRef);
        setVersionData(versionDocSnap);
        console.log("Version retrieved from firebase.");
    }

    for (let part of uniqueParts) {
        let firestoreVersion = versionDocSnap.data().es[part];
        console.log("Firestore Version", firestoreVersion);

        let indexedDBVersion = await db.get('firestore-cache', `data-versions-es-${part}`);
        console.log("IndexedDB Version", indexedDBVersion);

        let data;
        if (!indexedDBVersion || firestoreVersion > indexedDBVersion) {
            console.log("Newer version found or no version in IndexedDB.");
            const dataDocRef = doc(firestore, 'data', `es_${part}`);
            let dataDocSnap = await getDoc(dataDocRef);
            data = dataDocSnap.data();

            // Store the data in IndexedDB for future use
            await db.put('firestore-cache', data, `data-es-${part}`);
            console.log("Data retrieved from firebase and saved to IndexedDB.");
        } else if (firestoreVersion === indexedDBVersion) {
            console.log("Same version found.");
            // Fetch data from IndexedDB
            data = await db.get('firestore-cache', `data-es-${part}`);
            console.log("Data retrieved from IndexedDB.");
        }

        console.log(data)


        for (let item of esCheckedItems) {
            let [_, partChecked, episode] = item.split('_');
            if (part === partChecked && data[episode]) {
                if (!esCheckedData[part]) {
                    esCheckedData[part] = {};
                }
                esCheckedData[part][episode] = data[episode];
            }
        }

        // Store the version number in IndexedDB for future use
        if (firestoreVersion !== indexedDBVersion) {
            await db.put('firestore-cache', firestoreVersion, `data-versions-es-${part}`);
            console.log("New version saved to indexedDB.");
        }
    }
    console.log(esCheckedData);

    return esCheckedData;
}

export async function fetchKJData(uniqueKJParts, uniqueKJPartsSeasons, versionDocSnap, db, anCheckedData) {
    for (let part of uniqueKJPartsSeasons) {
        let firestoreVersion = versionDocSnap.data().an[part]; // Update to 'an' instead of 'es'

        let indexedDBVersion = await db.get('firestore-cache', `data-versions-an-${part}`); // Update to 'an' instead of 'es'

        let data;
        if (!indexedDBVersion || firestoreVersion > indexedDBVersion) {
            console.log(part)
            console.log("Newer version found or no version in IndexedDB.");
            const dataDocRef = doc(firestore, 'data', `an_${part}`); // Update to 'an' instead of 'es'
            let dataDocSnap = await getDoc(dataDocRef);
            data = dataDocSnap.data();

            // Store the data in IndexedDB for future use
            await db.put('firestore-cache', data, `data-an-${part}`); // Update to 'an' instead of 'es'
            console.log("Data retrieved from firebase and saved to IndexedDB.");
        } else if (firestoreVersion === indexedDBVersion) {
            console.log("Same version found.");
            // Fetch data from IndexedDB
            data = await db.get('firestore-cache', `data-an-${part}`); // Update to 'an' instead of 'es'
            console.log("Data retrieved from IndexedDB.");
        }

        for (let item of uniqueKJParts) { // Update to 'an' instead of 'es'
            let [partChecked, episode] = item.split('_');
            let split_part = part.split("_")[0];
            if (split_part === partChecked && data[episode]) {
                if (!anCheckedData[split_part]) {
                    anCheckedData[split_part] = {};
                }
                anCheckedData[split_part][episode] = data[episode];
            }
        }

        // Store the version number in IndexedDB for future use
        if (firestoreVersion !== indexedDBVersion) {
            await db.put('firestore-cache', firestoreVersion, `data-versions-an-${part}`); // Update to 'an' instead of 'es'
            console.log("New version saved to indexedDB.");
        }
    }
    return anCheckedData;
}


export async function fetchANData(anCheckedItems, versionData, setVersionData) {
    let anCheckedData = {};
    let allUniqueParts = [...new Set(anCheckedItems.map(item => `${item.split('_')[1]}_${item.split('_')[2]}`))];
    console.log(allUniqueParts)
    let uniqueParts = allUniqueParts.filter(item => parseInt(item.split('_')[0].replace("s", "")) <= 100);
    let uniqueKJParts = allUniqueParts.filter(item => parseInt(item.split('_')[0].replace("s", "")) > 100);
    let uniqueKJPartsSeasons = [];
    if (uniqueKJParts.length > 0) {
        uniqueKJPartsSeasons = [...new Set(uniqueKJParts.map(item => item.split("_")[0]))]
    }

    const db = await openDB('firestore-cache-db', 1, {
        upgrade(db) {
            db.createObjectStore('firestore-cache');
        },
    });

    const versionDocRef = doc(firestore, 'data', 'versions');
    let versionDocSnap;
    if (versionData) {
        console.log("Version already stored locally (not indexedb).");
        versionDocSnap = versionData;
    } else {
        versionDocSnap = await getDoc(versionDocRef);
        setVersionData(versionDocSnap);
        console.log("Version retrieved from firebase.");
    }

    if (uniqueKJPartsSeasons.length > 0) {
        anCheckedData = await fetchKJData(uniqueKJParts, uniqueKJPartsSeasons, versionDocSnap, db, anCheckedData);
    }

    for (let part of uniqueParts) {
        let firestoreVersion = versionDocSnap.data().an[part]; // Update to 'an' instead of 'es'
        console.log("Firestore Version", firestoreVersion);

        let indexedDBVersion = await db.get('firestore-cache', `data-versions-an-${part}`); // Update to 'an' instead of 'es'
        console.log("IndexedDB Version", indexedDBVersion);

        let data;
        if (!indexedDBVersion || firestoreVersion > indexedDBVersion) {
            console.log(part)
            console.log("Newer version found or no version in IndexedDB.");
            const dataDocRef = doc(firestore, 'data', `an_${part}`); // Update to 'an' instead of 'es'
            let dataDocSnap = await getDoc(dataDocRef);
            data = dataDocSnap.data();

            // Store the data in IndexedDB for future use
            await db.put('firestore-cache', data, `data-an-${part}`); // Update to 'an' instead of 'es'
            console.log("Data retrieved from firebase and saved to IndexedDB.");
        } else if (firestoreVersion === indexedDBVersion) {
            console.log("Same version found.");
            // Fetch data from IndexedDB
            data = await db.get('firestore-cache', `data-an-${part}`); // Update to 'an' instead of 'es'
            console.log("Data retrieved from IndexedDB.");
        }

        console.log(data);

        for (let item of anCheckedItems) { // Update to 'an' instead of 'es'
            let [_, partChecked, episode] = item.split('_');
            let split_part = part.split("_")[0];
            if (split_part === partChecked && data[episode]) {
                if (!anCheckedData[split_part]) {
                    anCheckedData[split_part] = {};
                }
                anCheckedData[split_part][episode] = data[episode];
            }
        }

        // Store the version number in IndexedDB for future use
        if (firestoreVersion !== indexedDBVersion) {
            await db.put('firestore-cache', firestoreVersion, `data-versions-an-${part}`); // Update to 'an' instead of 'es'
            console.log("New version saved to indexedDB.");
        }
    }

    return anCheckedData;
}


