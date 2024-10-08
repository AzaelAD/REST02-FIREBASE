const admin = require('firebase-admin');
const serviceAccount = require('./rest-da95a-firebase-adminsdk-f9fjy-da9baf7f2d.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;
