const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

const auth = new GoogleAuth({
  keyFile: process.env.SERVICE_ACCOUNT_KEY,
  scopes: ['https://www.googleapis.com/auth/calendar'],
});

const calendar = google.calendar({ version: 'v3', auth });

const fetchGoogle = async () => {
  try {
    const watchResponse = await calendar.events.watch({
      calendarId: 'primary',
      requestBody: {
        id: uuidv4(),
        type: 'web_hook',
        address: 'https://0581-212-221-67-202.ngrok-free.app:3000',
      },
    });

    const { data } = watchResponse;
    console.log('Calendar Webhook created:', data);
    return data;
  } catch (error) {
    console.error('Error creating watch:', error.message);
    throw error;
  }
};

fetchGoogle();

module.exports = fetchGoogle;
