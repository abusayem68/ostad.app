const app = require('./app');
require('dotenv').config();

const PORT = process.env.RUNNING_PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
