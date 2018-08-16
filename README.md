# needtest

Having issues with geofirestore of https://github.com/MichaelSolati/geofirestore

Error:

TypeError: snapshot.docChanges is not a function
    at /home/kenzdozz/WebDev/Gigasec/Node/needtest/node_modules/geofirestore/dist/index.cjs.js:925:26
    at watch.onSnapshot (/home/kenzdozz/WebDev/Gigasec/Node/needtest/node_modules/@google-cloud/firestore/build/src/reference.js:1531:13)
    at push (/home/kenzdozz/WebDev/Gigasec/Node/needtest/node_modules/@google-cloud/firestore/build/src/watch.js:533:17)
    at DestroyableTransform.stream.on.proto (/home/kenzdozz/WebDev/Gigasec/Node/needtest/node_modules/@google-cloud/firestore/build/src/watch.js:560:25)
    at DestroyableTransform.emit (events.js:182:13)
    at addChunk (/home/kenzdozz/WebDev/Gigasec/Node/needtest/node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js:291:12)
    at readableAddChunk (/home/kenzdozz/WebDev/Gigasec/Node/needtest/node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js:278:11)
    at DestroyableTransform.Readable.push (/home/kenzdozz/WebDev/Gigasec/Node/needtest/node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js:245:10)
    at DestroyableTransform.Transform.push (/home/kenzdozz/WebDev/Gigasec/Node/needtest/node_modules/through2/node_modules/readable-stream/lib/_stream_transform.js:148:32)
    at DestroyableTransform.afterTransform (/home/kenzdozz/WebDev/Gigasec/Node/needtest/node_modules/through2/node_modules/readable-stream/lib/_stream_transform.js:91:10)
    
In need of fix...
