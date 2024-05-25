// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios');

// const app = express();
// const port = 3001; // Choose an available port

// const roboflowUploadUrl = 'https://api.roboflow.com/dataset/agropro-zwwpy/upload',

// app.use(bodyParser.json()); // Parse incoming JSON data

// app.post('/upload', async (req, res) => {
//   try {
//     const response = await axios.post(roboflowUploadUrl, req.body, {
//       headers: {
//         'Content-Type': req.headers['content-type'],
//         // Add any other required headers from Roboflow API
//       },
//       params: {
//         api_key: 'rf_Y16TioAKeQab84H4p4RRSE9qdGA3' // Replace with your actual API key
//       }
//     });
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error forwarding request:', error);
//     res.status(500).send('Error uploading image');
//   }
// });

// app.listen(port, () => console.log(`Proxy server listening on port ${port}`));





const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const os = require("os");
const path = require("path");


const app = express(); // Declare app here
const port = 3001; // Choose an available port

const roboflowUploadUrl = 'https://detect.roboflow.com/plantdoc-pwu4j/1';

app.use(bodyParser.json()); // Parse incoming JSON data

console.log("Hello World!")
console.log(os.type());
console.log(os.version());
console.log(os.homedir())
console.log(__dirname);
console.log(__filename);
console.log(path.parse(__filename));

app.post('/upload', async (req, res) => {
  try {
    const response = await axios.post(roboflowUploadUrl, req.body, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"

        // Add any other required headers from Roboflow API
      },
      params: {
        api_key: '24vMluNhhFnom8D3SqP5' // Replace with your actual API key
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error forwarding request:', error);
    res.status(500).send('Error uploading image');
  }
});

app.listen(port, () => console.log(`Proxy server listening on port ${port}`));
