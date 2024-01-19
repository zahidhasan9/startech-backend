  require('dotenv').config();
// const chalk = require('chalk');
const mongoose = require('mongoose');

const setupDB = async () => {
  try {
    // Connect to MongoDB
    mongoose.set('useCreateIndex', true);
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
      })
      .then(() =>
        // console.log(`${chalk.green('✓')} ${chalk.blue('MongoDB Connected!')}`)
        console.log('MongoDB Connected!')
      )
      .catch(err => console.log(err));
  } catch (error) {
    return null;
  }
};

module.exports = setupDB;