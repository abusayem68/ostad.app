const { connect } = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
  const URI = process.env.APP_DB_URI || '';
  // const dbName = process.env.APP_DB_NAME || '';
  const user = process.env.APP_DB_USER || '';
  const pass = process.env.APP_DB_PASS || '';
  const OPTIONS = {
    user,
    pass,
  };
  try {
    await connect(URI, OPTIONS);
    console.log('Database connection successful');
  } catch (error) {
    console.log('Database connection failed!');
  }
};

module.exports = { dbConnection };
