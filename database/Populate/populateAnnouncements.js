const {createAnnouncement} = require('../Create/createAnnouncement')

async function populateAnnouncements(){
    await createAnnouncement('Welcome to AMS!', 'AMS is LIVE and available for end-users with additional features and an improved interface.')
    await createAnnouncement('Hop on the AMS train!', 'We are hiring! Looking to hire skilled software engineers as part of our exansion plan.')
}

module.exports = {populateAnnouncements}