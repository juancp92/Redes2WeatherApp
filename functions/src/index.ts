const functions = require('firebase-functions');
const http = require('requestify');
const cors = require('cors')({ origin: true });

exports.darkSkyProxy = functions.https.onRequest((req, res) => {

    /// Wrap request with cors
    cors( req, res, () => { 

        /// Get the url params
        const lat = req.query.lat
        const lng = req.query.lng
        const apiKey = 'f38f994939b651fbf607c155d9869591';
        // Set URL with KEY and location
        const url = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;

        /// Send request to DarkSky
        return http.get(url).then( response => {
            return res.status(200).send(response.getBody());
        })
        .catch(err => {
            return res.status(400).send(err) 
        })
        
    });

});
