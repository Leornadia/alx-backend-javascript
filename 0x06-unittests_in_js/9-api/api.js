const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('API available');
});

app.get('/cart/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(404).send('Invalid cart ID');
    return;
  }
  res.send(`Payment methods for cart ${id}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
