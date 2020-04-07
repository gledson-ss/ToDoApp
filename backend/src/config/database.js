const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localshot/todo', {useNewUrlParser: true, useUnifiedTopology: true});
