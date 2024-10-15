import app from './app';

require('dotenv').config();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
