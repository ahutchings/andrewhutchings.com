const express = require('express');

const app = express();
app.disable('x-powered-by')
app.use(express.static('public'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('andrewhutchings listening at http://%s:%s', host, port);
});
