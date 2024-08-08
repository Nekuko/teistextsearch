import { openDB } from 'idb';

export async function readVersions() {
    const db = await openDB('firestore-cache-db', 1, {
        upgrade(db) {
            db.createObjectStore('firestore-cache');
        },
    });

    const versionData = new Map();

    const transaction = db.transaction(['firestore-cache'], 'readonly');
    const objectStore = transaction.objectStore('firestore-cache');

    const keys = await objectStore.getAllKeys();
    for (const key of keys) {
        if (key.includes('versions')) {
            try {
                const value = await objectStore.get(key)
                versionData.set(key, value)
            } catch (error) {
                console.error('Error fetching value for key:', key, error);
            }
        }
    }

    return versionData;
}
