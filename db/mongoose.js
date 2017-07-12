var mongoose = require('mongoose');

var uristring =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/App';

mongoose.Promise = global.Promise;

mongoose.connect(uristring, { useMongoClient: true });

module.exports = {mongoose};
