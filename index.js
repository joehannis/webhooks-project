// Import app from "./app file
require('dotenv').config();

const ngrok = require('@ngrok/ngrok');

(async function () {
  // Establish connectivity
  const listener = await ngrok.forward({
    addr: 3000,
    authtoken_from_env: true,
  });

  // Output ngrok url to console
  console.log(`Ingress established at: ${listener.url()}`);
  console.log('Ngrok tunnel initialized!');
})();
