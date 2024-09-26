var Cloudant = require('@cloudant/cloudant');

module.exports = {
    storageModule: require('node-red-contrib-cloudantplus'),

    cloudant: {
        url: process.env.CLOUDANT_URL || "https://21337f10-6ca0-410d-a40e-c8e51e0d7fed-bluemix.cloudantnosqldb.appdomain.cloud",
        username: process.env.CLOUDANT_USERNAME || "apikey",
        password: process.env.CLOUDANT_PASSWORD || "Rj5Ke2dtD5xsEQYRBwAPQUp7Au45TTqBg-HUBEGFp_9G",
        db: process.env.CLOUDANT_DB || "nodered-flows"    }
};
