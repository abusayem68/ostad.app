const app = require('./app');

const PORT = process.env.RUNNING_PORT || 9000;

app.listen(PORT, () => {
  console.log(`server is runnig on port ${PORT}`);
});
