const mongoose = require('mongoose');
console.log('before connection');
mongoose.connect('mongodb+srv://admin:Password1@cluster0-z0a1l.mongodb.net/angular', { useNewUrlParser: true } );

const db = mongoose.connection;
db.on('error', () => console.log('connection error:'));
db.once('open', () => {
  console.log('DB connected successfully!');
});

module.exports.db = db;