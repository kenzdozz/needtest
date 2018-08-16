const express = require('express');
var admin = require("firebase-admin");
const GeoFirestore = require('geofirestore').GeoFirestore;

var serviceAccount = require("./needtest.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pen-down.firebaseio.com"
});
const settings = { timestampsInSnapshots: true };
admin.firestore().settings(settings);

const app = express();


app.use((req, res) => {

    var needCol = admin.firestore().collection('needs');
    const geoFirestore = new GeoFirestore(needCol);

    let lat = 6.5185806;
    let lng = 3.3705713;

    const geoQuery = geoFirestore.query({
        center: new admin.firestore.GeoPoint(lat, lng),
        radius: 10.5
    })

    const onReadyRegistration = geoQuery.on('ready', () => {
        console.log('GeoFirestoreQuery has loaded and fired all other events for initial data');
    });

    const onKeyEnteredRegistration = geoQuery.on('key_entered', function (key, document, distance) {
        console.log(key + ' entered query at ' + document.coordinates.latitude + ',' + document.coordinates.longitude + ' (' + distance + ' km from center)');
    });

    const onKeyExitedRegistration = geoQuery.on('key_exited', function (key, document, distance) {
        console.log(key + ' exited query to ' + document.coordinates.latitude + ',' + document.coordinates.longitude + ' (' + distance + ' km from center)');
    });

    const onKeyMovedRegistration = geoQuery.on('key_moved', function (key, document, distance) {
        console.log(key + ' moved within query to ' + document.coordinates.latitude + ',' + document.coordinates.longitude + ' (' + distance + ' km from center)');
    });

    const onKeyModifiedRegistration = geoQuery.on('key_modified', function (key, document, distance) {
        console.log(key + ' in query has been modified');
    });

    res.end('OK')
})


app.listen(3030, () => {
    console.log('Started')
})