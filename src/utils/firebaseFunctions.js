// firebaseFunctions.js

import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL, updateMetadata } from "firebase/storage";
import { openDB } from 'idb';
import { app } from '../firebase.js';

const firestore = getFirestore(app);

export async function fetchLNData(lnCheckedItems, versionData, setVersionData, setResultsText) {
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
        if (setResultsText) {
            setResultsText('Retrieved Version Information.')
        }

        versionDocSnap = versionData;
    } else {
        if (setResultsText) {
            setResultsText('Downloading Version Information.')
        }
        versionDocSnap = (await getDoc(versionDocRef)).data();
        setVersionData(versionDocSnap);
    }

    for (let volume of uniqueVolumes) {
        let firestoreVersion = versionDocSnap.ln[volume];

        let indexedDBVersion = await db.get('firestore-cache', `data-versions-ln-${volume}`);

        let data;
        if (!indexedDBVersion || firestoreVersion !== indexedDBVersion) {
            if (setResultsText) {
                setResultsText(`Downloading data for ln_${volume}`)
            }
            const dataDocRef = doc(firestore, 'data', `ln_${volume}`);
            let dataDocSnap = await getDoc(dataDocRef);
            data = dataDocSnap.data();


            // Store the data in IndexedDB for future use
            if (setResultsText) {
                setResultsText(`Saving data for ln_${volume}`)
            }
            await db.put('firestore-cache', data, `data-ln-${volume}`);


        } else if (firestoreVersion === indexedDBVersion) {
            // Fetch data from IndexedDB
            if (setResultsText) {
                setResultsText(`Retrieving data for ln_${volume}`)
            }
            data = await db.get('firestore-cache', `data-ln-${volume}`);

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
            if (setResultsText) {
                setResultsText(`Saving data for ln_${volume}`)
            }
            await db.put('firestore-cache', firestoreVersion, `data-versions-ln-${volume}`);

        }
    }

    return lnCheckedData;
}

export async function fetchWNData(wnCheckedItems, versionData, setVersionData, setResultsText) {
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
        if (setResultsText) {
            setResultsText('Retrieved Version Information.')
        }
        versionDocSnap = versionData;
    } else {
        if (setResultsText) {
            setResultsText('Downloading Version Information.')
        }
        versionDocSnap = (await getDoc(versionDocRef)).data();
        setVersionData(versionDocSnap);

    }

    for (let volume of uniqueVolumes) {
        let firestoreVersion = versionDocSnap.wn[volume];

        let indexedDBVersion = await db.get('firestore-cache', `data-versions-wn-${volume}`);

        let data;
        if (!indexedDBVersion || firestoreVersion !== indexedDBVersion) {
            if (setResultsText) {
                setResultsText(`Downloading data for wn_${volume}`)
            }
            const dataDocRef = doc(firestore, 'data', `wn_v${volume}`);
            let dataDocSnap = await getDoc(dataDocRef);
            data = dataDocSnap.data();


            // Store the data in IndexedDB for future use
            if (setResultsText) {
                setResultsText(`Saving data for wn_${volume}`)
            }
            await db.put('firestore-cache', data, `data-wn-${volume}`);


        } else if (firestoreVersion === indexedDBVersion) {
            // Fetch data from IndexedDB
            if (setResultsText) {
                setResultsText(`Retrieving data for wn_${volume}`)
            }
            data = await db.get('firestore-cache', `data-wn-${volume}`);


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
            if (setResultsText) {
                setResultsText(`Saving data for wn_${volume}`)
            }
            await db.put('firestore-cache', firestoreVersion, `data-versions-wn-${volume}`);

        }
    }

    return wnCheckedData;
}

export async function fetchAPOData(apoCheckedItems, versionData, setVersionData, setResultsText) {
    let apoCheckedData = {};
    const db = await openDB('firestore-cache-db', 1, {
        upgrade(db) {
            db.createObjectStore('firestore-cache');
        },
    });

    const versionDocRef = doc(firestore, 'data', 'versions');
    let versionDocSnap;
    if (versionData) {
        if (setResultsText) {
            setResultsText('Retrieved Version Information.')
        }
        versionDocSnap = versionData;
    } else {
        if (setResultsText) {
            setResultsText('Downloading Version Information.')
        }
        versionDocSnap = (await getDoc(versionDocRef)).data();
        setVersionData(versionDocSnap);
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

        let firestoreVersion = versionDocSnap.apo[`${part}_${chapter}`];

        let indexedDBVersion = await db.get('firestore-cache', `data-versions-apo-${part}-${chapter}`);

        let data;
        if (!indexedDBVersion || firestoreVersion !== indexedDBVersion) {
            if (setResultsText) {
                setResultsText(`Downloading data for apo_${part}_${chapter}`)
            }
            const dataDocRef = doc(firestore, 'data', `apo_${part}_${chapter}`);
            let dataDocSnap = await getDoc(dataDocRef);
            data = dataDocSnap.data();

            if (setResultsText) {
                setResultsText(`Saving data for apo_${part}_${chapter}`)
            }
            await db.put('firestore-cache', data, `data-apo-${part}-${chapter}`);

        } else if (firestoreVersion === indexedDBVersion) {
            if (setResultsText) {
                setResultsText(`Retrieving data for apo_${part}_${chapter}`)
            }
            // Fetch data from IndexedDB
            data = await db.get('firestore-cache', `data-apo-${part}-${chapter}`);
        }


        // Add the episode data if it exists
        let episode = item.split('_')[3];
        if (data && data[episode]) {
            apoCheckedData[part][chapter][episode] = data[episode];
        }

        // Store the version number in IndexedDB for future use
        if (firestoreVersion !== indexedDBVersion) {
            if (setResultsText) {
                setResultsText(`Saving data for apo_${part}_${chapter}`)
            }
            await db.put('firestore-cache', firestoreVersion, `data-versions-apo-${part}-${chapter}`);
        }
    }

    return apoCheckedData;
}

export async function fetchSSCData(sscCheckedItems, versionData, setVersionData, setResultsText) {
    let sscCheckedData = {};
    const db = await openDB('firestore-cache-db', 1, {
        upgrade(db) {
            db.createObjectStore('firestore-cache');
        },
    });

    const versionDocRef = doc(firestore, 'data', 'versions');
    let versionDocSnap;
    if (versionData) {
        if (setResultsText) {
            setResultsText('Retrieved Version Information.')
        }
        versionDocSnap = versionData;
    } else {
        if (setResultsText) {
            setResultsText('Downloading Version Information.')
        }
        versionDocSnap = (await getDoc(versionDocRef)).data();
        setVersionData(versionDocSnap);
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

        let firestoreVersion = versionDocSnap.ssc[`${part}_${chapter}`];

        let indexedDBVersion = await db.get('firestore-cache', `data-versions-ssc-${part}-${chapter}`);

        let data;
        if (!indexedDBVersion || firestoreVersion !== indexedDBVersion) {
            if (setResultsText) {
                setResultsText(`Downloading data for ssc_${part}_${chapter}`)
            }
            const dataDocRef = doc(firestore, 'data', `ssc_${part}_${chapter}`);
            let dataDocSnap = await getDoc(dataDocRef);
            data = dataDocSnap.data();

            if (setResultsText) {
                setResultsText(`Saving data for ssc_${part}_${chapter}`)
            }
            await db.put('firestore-cache', data, `data-ssc-${part}-${chapter}`);

        } else if (firestoreVersion === indexedDBVersion) {
            if (setResultsText) {
                setResultsText(`Retrieving data for ssc_${part}_${chapter}`)
            }
            data = await db.get('firestore-cache', `data-ssc-${part}-${chapter}`);
        }

        let episode = item.split('_')[3];
        if (data && data[episode]) {
            sscCheckedData[part][chapter][episode] = data[episode];
        }

        // Store the version number in IndexedDB for future use
        if (firestoreVersion !== indexedDBVersion) {
            if (setResultsText) {
                setResultsText(`Saving data for ssc_${part}_${chapter}`)
            }
            await db.put('firestore-cache', firestoreVersion, `data-versions-ssc-${part}-${chapter}`);
        }
    }

    return sscCheckedData;
}

export async function fetchESData(esCheckedItems, versionData, setVersionData, setResultsText) {
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
        if (setResultsText) {
            setResultsText('Retrieved Version Information.')
        }
        versionDocSnap = versionData;
    } else {
        if (setResultsText) {
            setResultsText('Downloading Version Information.')
        }
        versionDocSnap = (await getDoc(versionDocRef)).data();
        setVersionData(versionDocSnap);
    }

    for (let part of uniqueParts) {
        let firestoreVersion = versionDocSnap.es[part];

        let indexedDBVersion = await db.get('firestore-cache', `data-versions-es-${part}`);

        let data;
        if (!indexedDBVersion || firestoreVersion !== indexedDBVersion) {
            if (setResultsText) {
                setResultsText(`Downloading data for es_${part}`)
            }
            const dataDocRef = doc(firestore, 'data', `es_${part}`);
            let dataDocSnap = await getDoc(dataDocRef);
            data = dataDocSnap.data();

            if (setResultsText) {
                setResultsText(`Saving data for es_${part}`)
            }
            await db.put('firestore-cache', data, `data-es-${part}`);

        } else if (firestoreVersion === indexedDBVersion) {
            if (setResultsText) {
                setResultsText(`Retrieving data for es_${part}`)
            }
            // Fetch data from IndexedDB
            data = await db.get('firestore-cache', `data-es-${part}`);
        }

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
            if (setResultsText) {
                setResultsText(`Saving data for es_${part}`)
            }
            await db.put('firestore-cache', firestoreVersion, `data-versions-es-${part}`);
        }
    }

    return esCheckedData;
}

export async function fetchKJData(uniqueKJParts, uniqueKJPartsSeasons, versionDocSnap, db, anCheckedData, setResultsText) {
    for (let part of uniqueKJPartsSeasons) {
        let firestoreVersion = versionDocSnap.an[part]; // Update to 'an' instead of 'es'

        let indexedDBVersion = await db.get('firestore-cache', `data-versions-an-${part}`); // Update to 'an' instead of 'es'

        let data;
        if (!indexedDBVersion || firestoreVersion !== indexedDBVersion) {
            if (setResultsText) {
                setResultsText(`Downloading data for kj_${part}`)
            }
            const dataDocRef = doc(firestore, 'data', `an_${part}`); // Update to 'an' instead of 'es'
            let dataDocSnap = await getDoc(dataDocRef);
            data = dataDocSnap.data();

            if (setResultsText) {
                setResultsText(`Saving data for kj_${part}`)
            }
            await db.put('firestore-cache', data, `data-an-${part}`); // Update to 'an' instead of 'es'
        } else if (firestoreVersion === indexedDBVersion) {
            // Fetch data from IndexedDB
            if (setResultsText) {
                setResultsText(`Retrieving data for kj_${part}`)
            }
            data = await db.get('firestore-cache', `data-an-${part}`); // Update to 'an' instead of 'es'
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
            if (setResultsText) {
                setResultsText(`Saving data for kj_${part}`)
            }
            await db.put('firestore-cache', firestoreVersion, `data-versions-an-${part}`); // Update to 'an' instead of 'es'
        }
    }
    return anCheckedData;
}

export async function fetchANData(anCheckedItems, versionData, setVersionData, setResultsText) {
    let anCheckedData = {};
    let allUniqueParts = [...new Set(anCheckedItems.map(item => `${item.split('_')[1]}_${item.split('_')[2]}`))];
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
        if (setResultsText) {
            setResultsText('Retrieved Version Information.')
        }
        versionDocSnap = versionData;
    } else {
        if (setResultsText) {
            setResultsText('Downloading Version Information.')
        }
        versionDocSnap = (await getDoc(versionDocRef)).data();
        setVersionData(versionDocSnap);
    }

    if (uniqueKJPartsSeasons.length > 0) {
        anCheckedData = await fetchKJData(uniqueKJParts, uniqueKJPartsSeasons, versionDocSnap, db, anCheckedData, setResultsText);
    }

    for (let part of uniqueParts) {
        let firestoreVersion = versionDocSnap.an[part]; // Update to 'an' instead of 'es'

        let indexedDBVersion = await db.get('firestore-cache', `data-versions-an-${part}`); // Update to 'an' instead of 'es'

        let data;
        if (!indexedDBVersion || firestoreVersion !== indexedDBVersion) {
            if (setResultsText) {
                setResultsText(`Downloading data for an_${part}`)
            }
            const dataDocRef = doc(firestore, 'data', `an_${part}`); // Update to 'an' instead of 'es'
            let dataDocSnap = await getDoc(dataDocRef);
            data = dataDocSnap.data();

            // Store the data in IndexedDB for future use
            if (setResultsText) {
                setResultsText(`Saving data for an_${part}`)
            }
            await db.put('firestore-cache', data, `data-an-${part}`); // Update to 'an' instead of 'es'
        } else if (firestoreVersion === indexedDBVersion) {
            // Fetch data from IndexedDB
            if (setResultsText) {
                setResultsText(`Retrieving data for an_${part}`)
            }
            data = await db.get('firestore-cache', `data-an-${part}`); // Update to 'an' instead of 'es'
        }


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
            if (setResultsText) {
                setResultsText(`Saving data for an_${part}`)
            }
            await db.put('firestore-cache', firestoreVersion, `data-versions-an-${part}`); // Update to 'an' instead of 'es'
        }
    }

    return anCheckedData;
}

export async function fetchDropdowns(versionData) {
    const db = await openDB('firestore-cache-db', 1, {
        upgrade(db) {
            db.createObjectStore('firestore-cache');
        },
    });

    const versionDocRef = doc(firestore, 'data', 'versions');
    let versionDocSnap;
    if (versionData) {
        versionDocSnap = versionData;
    } else {
        versionDocSnap = (await getDoc(versionDocRef)).data();
    }

    let firestoreVersion = versionDocSnap.info["dropdowns"];
    let indexedDBVersion = await db.get('firestore-cache', `data-versions-info-dropdowns`);

    let data;
    let versionUpdated = false; // Initialize the boolean flag

    if (!indexedDBVersion || firestoreVersion !== indexedDBVersion) {
        const dataDocRef = doc(firestore, 'data', `dropdowns`);
        let dataDocSnap = await getDoc(dataDocRef);
        data = dataDocSnap.data();

        // Store the data in IndexedDB for future use
        await db.put('firestore-cache', data, `data-dropdowns`);
        versionUpdated = true; // Set the flag to true
    } else if (firestoreVersion === indexedDBVersion) {
        data = await db.get('firestore-cache', `data-dropdowns`);
    }


    // Store the version number in IndexedDB for future use
    if (firestoreVersion !== indexedDBVersion) {
        await db.put('firestore-cache', firestoreVersion, `data-versions-info-dropdowns`);
    }

    return { data, versionUpdated }; // Return both data and the boolean flag
}

export async function fetchCharactersData(versionData) {
    const db = await openDB('firestore-cache-db', 1, {
        upgrade(db) {
            db.createObjectStore('firestore-cache');
        },
    });

    const versionDocRef = doc(firestore, 'data', 'versions');
    let versionDocSnap;
    if (versionData) {
        versionDocSnap = versionData;
    } else {
        versionDocSnap = (await getDoc(versionDocRef)).data();
    }

    let firestoreVersion = versionDocSnap.info["characters"];
    let indexedDBVersion = await db.get('firestore-cache', `data-versions-info-characters`);

    let data;
    let versionUpdated = false; // Initialize the boolean flag

    if (!indexedDBVersion || firestoreVersion !== indexedDBVersion) {
        const dataDocRef = doc(firestore, 'data', `characters`);
        let dataDocSnap = await getDoc(dataDocRef);
        data = dataDocSnap.data();

        // Store the data in IndexedDB for future use
        await db.put('firestore-cache', data, `data-characters`);
        versionUpdated = true; // Set the flag to true
    } else if (firestoreVersion === indexedDBVersion) {
        data = await db.get('firestore-cache', `data-characters`);
    }


    // Store the version number in IndexedDB for future use
    if (firestoreVersion !== indexedDBVersion) {
        await db.put('firestore-cache', firestoreVersion, `data-versions-info-characters`);
    }

    return { data, versionUpdated }; // Return both data and the boolean flag
}

export async function fetchVersionData(versionData) {
    const db = await openDB('firestore-cache-db', 1, {
        upgrade(db) {
            db.createObjectStore('firestore-cache');
        },
    });

    const versionDocRef = doc(firestore, 'data', 'versions');
    let versionDocSnap;
    if (versionData) {
        versionDocSnap = versionData;
    } else {
        versionDocSnap = (await getDoc(versionDocRef)).data();
    }

    return versionDocSnap;
}

export async function fetchInformationData(versionData, setVersionData) {
    const db = await openDB('firestore-cache-db', 1, {
        upgrade(db) {
            db.createObjectStore('firestore-cache');
        },
    });

    const versionDocRef = doc(firestore, 'data', 'versions');
    let versionDocSnap;
    if (versionData) {
        versionDocSnap = versionData;
    } else {
        versionDocSnap = (await getDoc(versionDocRef)).data();
        setVersionData(versionDocSnap);
    }

    let firestoreVersion = versionDocSnap.info["info"];
    let indexedDBVersion = await db.get('firestore-cache', `data-versions-info-info`);

    let data;
    let versionUpdated = false; // Initialize the boolean flag

    if (!indexedDBVersion || firestoreVersion !== indexedDBVersion) {
        const dataDocRef = doc(firestore, 'data', `info`);
        let dataDocSnap = await getDoc(dataDocRef);
        data = dataDocSnap.data();

        // Store the data in IndexedDB for future use
        await db.put('firestore-cache', data, `data-info`);
        versionUpdated = true; // Set the flag to true
    } else if (firestoreVersion === indexedDBVersion) {
        // Fetch data from IndexedDB
        data = await db.get('firestore-cache', `data-info`);
    }


    // Store the version number in IndexedDB for future use
    if (firestoreVersion !== indexedDBVersion) {
        await db.put('firestore-cache', firestoreVersion, `data-versions-info-info`);
    }

    return { data, versionUpdated }; // Return both data and the boolean flag
}

export async function fetchGenericData(versionData, setVersionData, dataName) {
    const db = await openDB('firestore-cache-db', 1, {
        upgrade(db) {
            db.createObjectStore('firestore-cache');
        },
    });

    const versionDocRef = doc(firestore, 'data', 'versions');
    let versionDocSnap;
    if (versionData) {
        versionDocSnap = versionData;
    } else {
        versionDocSnap = (await getDoc(versionDocRef)).data();
        setVersionData(versionDocSnap);
    }

    let firestoreVersion = versionDocSnap.info[`${dataName}`];
    let indexedDBVersion = await db.get('firestore-cache', `data-versions-info-${dataName}`);

    let data;
    let versionUpdated = false; // Initialize the boolean flag

    if (!indexedDBVersion || firestoreVersion !== indexedDBVersion) {
        const dataDocRef = doc(firestore, 'data', `${dataName}`);
        let dataDocSnap = await getDoc(dataDocRef);
        data = dataDocSnap.data();

        // Store the data in IndexedDB for future use
        await db.put('firestore-cache', data, `data-${dataName}`);
        versionUpdated = true; // Set the flag to true
    } else if (firestoreVersion === indexedDBVersion) {
        // Fetch data from IndexedDB
        data = await db.get('firestore-cache', `data-${dataName}`);
    }


    // Store the version number in IndexedDB for future use
    if (firestoreVersion !== indexedDBVersion) {
        await db.put('firestore-cache', firestoreVersion, `data-versions-info-${dataName}`);
    }

    return { data, versionUpdated };
}

export async function fetchMediumImageData(versionData, setVersionData) {

    const db = await openDB('firestore-cache-db', 1, {
        upgrade(db) {
            db.createObjectStore('firestore-cache');
        },
    });
    const versionDocRef = doc(firestore, 'data', 'versions');
    let versionDocSnap;
    if (versionData) {
        versionDocSnap = versionData;
    } else {
        versionDocSnap = (await getDoc(versionDocRef)).data();
        setVersionData(versionDocSnap);
    }

    let firestoreVersion = versionDocSnap.info["medium_images"];
    let indexedDBVersion = await db.get('firestore-cache', `data-versions-info-medium_images`);

    let data;
    let versionUpdated = false; // Initialize the boolean flag

    if (!indexedDBVersion || firestoreVersion !== indexedDBVersion) {
        const dataDocRef = doc(firestore, 'data', `medium_images`);
        let dataDocSnap = await getDoc(dataDocRef);
        data = dataDocSnap.data();

        // Store the data in IndexedDB for future use
        await db.put('firestore-cache', data, `data-medium_images`);
        versionUpdated = true; // Set the flag to true
    } else if (firestoreVersion === indexedDBVersion) {
        // Fetch data from IndexedDB
        data = await db.get('firestore-cache', `data-medium_images`);
    }


    // Store the version number in IndexedDB for future use
    if (firestoreVersion !== indexedDBVersion) {
        await db.put('firestore-cache', firestoreVersion, `data-versions-info-medium_images`);
    }

    return { data, versionUpdated }; // Return both data and the boolean flag
}

export async function fetchCharacterImages(urls) {
    const storage = getStorage();
    const imageMap = {};

    // Create an array of promises for each URL
    const downloadPromises = urls.map(async (reference) => {
        try {
            const url = await getDownloadURL(ref(storage, `gs://teistextsearch.appspot.com/${reference}`));
            imageMap[reference] = url;
        } catch (error) {
            console.error(`Error fetching URL for ${reference}:`, error);
        }
    });

    // Wait for all promises to resolve
    await Promise.all(downloadPromises);
    return imageMap;
}

export async function fetchGenericImages(urls, folder) {
    const storage = getStorage();
    const imageMap = {};

    // Create an array of promises for each URL
    const downloadPromises = urls.map(async (reference) => {
        try {
            const url = await getDownloadURL(ref(storage, `gs://teistextsearch.appspot.com/${folder}/${reference}`));
            imageMap[reference] = url;
        } catch (error) {
            console.error(`Error fetching URL for ${reference}:`, error);
        }
    });

    // Wait for all promises to resolve
    await Promise.all(downloadPromises);
    return imageMap;
}

export async function fetchMediumImages(urls) {
    const storage = getStorage();
    const imageMap = {};
    // Create an array of promises for each URL
    const downloadPromises = urls.map(async (reference) => {
        try {
            const url = await getDownloadURL(ref(storage, `gs://teistextsearch.appspot.com/coverImages/${reference.url}`));
            if (!imageMap[reference.group]) {
                imageMap[reference.group] = {};
            }
            imageMap[reference.group][reference.key] = url;
        } catch (error) {
            console.error(`Error fetching URL for ${reference.url}:`, error);
        }
    });
    // Wait for all promises to resolve
    await Promise.all(downloadPromises);
    return imageMap;
}


