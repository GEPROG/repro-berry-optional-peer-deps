const mongoose = require('mongoose');

async function connect() {
  console.log('connecting ...');
  await mongoose.connect('mongodb://root:supersecret@localhost:27017?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('connected');
}

connect();