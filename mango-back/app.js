const express = require('express');
const app = express();

// our first Route
app.get('/home', (request, response, next) => {
  console.log(request);
  response.send('<h1>La ruta del mango</h1>');
});


// ... the previously added code
// Server Started
app.listen(5000, () => console.log('My first app listening on port 5000! '));

