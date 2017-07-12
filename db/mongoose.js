var mongoose = require('mongoose');

var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL || 'mongodb://localhost:27017/App';

mongoose.Promise = global.Promise;

mongoose.connect(uristring, { useMongoClient: true });

module.exports = {mongoose};
