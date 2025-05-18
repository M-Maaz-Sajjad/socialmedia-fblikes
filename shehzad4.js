// fb-likes.js
const axios = require('axios');

// Replace with your actual values
const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';
const POST_ID = 'YOUR_POST_ID';

async function getFacebookPostLikes() {
  try {
    const url = https://graph.facebook.com/v19.0/${POST_ID}/likes?summary=true&access_token=${ACCESS_TOKEN};
    const response = await axios.get(url);
    
    console.log('Total Likes:', response.data.summary.total_count);
  } catch (error) {
    console.error('Error fetching likes:', error.response?.data || error.message);
  }
}

getFacebookPostLikes();