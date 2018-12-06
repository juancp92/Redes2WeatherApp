//import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const http = require('requestify');
const cors = require('cors')({ origin: true });

exports.darkSkyProxy = functions.https.onRequest((req, res) => {

    /// Wrap request with cors
    cors( req, res, () => { 

        /// Get the url params
        const lat = req.query.lat
        const lng = req.query.lng

        const url = formatUrl(lat, lng)

        /// Send request to DarkSky
        return http.get(`https://api.darksky.net/forecast/f38f994939b651fbf607c155d9869591/32.94,60.65`).then( response => {
            return res.status(200).send(response.getBody());
        })
        .catch(err => {
            return res.status(400).send(err) 
        })
        
    });

});

/// Helper to format the request URL
function formatUrl(lat, lng) {
    const apiKey = functions.config().darksky.key
    return `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`
}
