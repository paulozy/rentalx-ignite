import express from 'express';

const app = express();

app.get('/code', (_, res) => {
  res.json({message: 'Already to code!'})
})

app.listen(3001, () => console.log('Server is running'));