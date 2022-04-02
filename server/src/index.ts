import express from 'express';

const PORT = 8081;
const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
