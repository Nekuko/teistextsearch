const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.beforeUserSignedIn = functions.auth.user().beforeCreate((user) => {
  const userEmail = user.email; // The email of the user.

  // Reference to the Firestore collection of allowed emails.
  const allowedEmailsCollection = admin.firestore().collection("allowedEmails");

  return allowedEmailsCollection.where("email", "==", userEmail).get()
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log("No matching documents. User will be blocked.");

          // Block the sign-in attempt.
          throw new functions.https.HttpsError(
              "invalid-argument", "Unauthorized",
          );
        } else {
          console.log("User email found in the list. User can continue.");
          return null;
        }
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
});
