var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Use q. Note that you **must** use `require('q').Promise`.
mongoose.Promise = require('q').Promise;

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }; 

// mongoose.connect('mongodb://' + config.SERVER_CONFIG.mongodb.credentials + config.SERVER_CONFIG.mongodb.host + config.SERVER_CONFIG.mongodb.port + '/' + config.SERVER_CONFIG.mongodb.dbName, function(err) {
var mongoConnectTo = process.env.MONGODDBBLINK || 'mongodb://user:pass@ds02xxxx3.mlab.com:2xxx5/yourapp';

mongoose.connect(mongoConnectTo, options, function(err) {
    if (err) throw err;
});

var wineSchema = mongoose.Schema({
    title: String,
    region: String,
    year: Number,
    tags: Array
});

module.exports = {
    Wine: mongoose.model('wine', wineSchema)
};
