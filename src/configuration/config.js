const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
  const URI = process.env.DB_CONNECTION_STRING || '';
  const dbname = process.env.DB_NAME || '';
  const user = process.env.DB_USER || '';
  const pass = process.env.DB_PASS || '';

  const OPTION = {
    dbname,
    user,
    pass,
  };
  try {
    await mongoose.connect(URI, OPTION);
    console.log('Database connection successful');
  } catch (error) {
    console.log(`Database connection failed ${error}`);
  }
};

module.exports = { dbConnection };
