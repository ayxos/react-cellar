var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Use q. Note that you **must** use `require('q').Promise`.
mongoose.Promise = require('q').Promise;

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }; 

var mongoConnectTo = (process.argv.indexOf('--local') > -1 || !process.env.MONGODDBBLINK)
    ? 'mongodb://localhost:27017/reactCellar'
    : process.env.MONGODDBBLINK;


mongoose.connect(mongoConnectTo, options, function(err) {
    if (err) throw err;
});

var wineSchema = mongoose.Schema({
    name: String,
    grapes: String,
    country: String,
    region: String,
    year: Number,
    description: String,
    picture: String
});

module.exports = {
    Wine: mongoose.model('wine', wineSchema)
};