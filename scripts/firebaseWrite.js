const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
}
// let setDoc = db.collection('data').doc('an_s2_e8').set(data['s2']);

//let setDoc = db.collection('data').doc('ssc_p3_c3-5').set(data['p3']['c3-5']);

//let setDoc = db.collection('data').doc('apo_p1_c1-2').set(data['p1']['c1-2']);

// let setDoc = db.collection('data').doc('es_dss').set(data['dss']);

// let setDoc = db.collection('data').doc('ln_v5').set(data['v1']);

// let setDoc = db.collection('data').doc('an_s101').set(data['kj1']);

// let setDoc = db.collection('data').doc('info').set(data);

//let setDoc = db.collection('data').doc('characters').set(data);

//let setDoc = db.collection('data').doc('medium_images').set(data);

// setDoc = db.collection('data').doc('dropdowns').set(data);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
