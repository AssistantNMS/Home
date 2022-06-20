const fs = require('fs');
const axios = require('axios');

async function generateLiveJson() {

    const appReviewJson = await axios.get('https://api.assistantapps.com/AppReview/1');

    const contributorsJson = await axios.get('https://api.nmsassistant.com/Contributor');

    const testimonialsJson = await axios.get('https://api.nmsassistant.com/Testimonial');

    const donationJson = await axios.get('https://api.assistantapps.com/Donation?page=1');
    let donationList = [...donationJson.data.value];
    for (let donationIndex = 2; donationIndex < donationJson.data.totalPages; donationIndex++) {
        const donationPageJson = await axios.get(`https://api.assistantapps.com/Donation?page=${donationIndex}`);
        donationList = [...donationList, ...donationPageJson.data.value];
    }

    let fullJson = {
        testimonials: testimonialsJson.data,
        googlePlayRating: appReviewJson.data[0],
        appleAppStoreRating: appReviewJson.data[1],
        contributors: contributorsJson.data,
        donations: donationList,
    };

    fs.writeFile('./seo/data/live.json', JSON.stringify(fullJson), ['utf8'], () => { });
}

generateLiveJson();