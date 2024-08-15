const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'teistextsearch.appspot.com'
});

const bucket = admin.storage().bucket();
const folderName = 'coverImages'; // Specify the folder name

async function updateImageMetadata() {
    try {
        const [files] = await bucket.getFiles({ prefix: folderName + '/' });

        for (const file of files) {
            // Retrieve existing metadata
            const [metadata] = await file.getMetadata();

            // Modify metadata (add cache control)
            metadata.cacheControl = 'public,max-age=1209600'; // 2 weeks in seconds

            // Update the metadata
            await file.setMetadata(metadata);

            console.log(`Metadata updated for ${file.name}`);
        }
    } catch (error) {
        console.error('Error updating metadata:', error);
    }
}

updateImageMetadata();

updateImageMetadata();