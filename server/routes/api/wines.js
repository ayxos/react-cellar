var fs = require ("fs");
var years = ['2012', '2011', '2010', '2009', '2008', '2007', '2006'];
var pictureUrl = __dirname + "/../../../covers/";
var Busboy = require('busboy');

var path = require('path');

module.exports = function(app, db) {
    app.get('/api/wines', function(req, res) {
        console.log('Wine get started');
        db.Wine.find(function (err, wines) {
            if (err) throw err;
            else {
                res.status(200).send(wines);
            }
        });
    });

    app.get('/api/wine/:id', function(req, res) {
        var id = req.params.id;
        db.Wine.findOne({_id: id}, function (err, wine) {
            if (err) throw err;
            else {
                res.status(200).send(wine);
            }
        });
    })

    app.post('/api/wines', function(req, res) {
        console.log('Wine post', req.body);
        console.log(req.user);

        let fileName = 'generic.jpg';
        let wine = req.body;
        wine.year = years[req.body.year];
        wine.picture = fileName;
        console.log('savingg', wine);
        var aux = new db.Wine(wine);
        aux.save(function(err, wine) {
            if (err) {
                res.status(500).send({status:"DDBB Err"});
            } else {
                console.log('Add Success', wine);
                res.status(200).send({status:"OK", Object: wine});
            }
        });
    });

    app.post('/api/files/:id', function(req, res) {
        const busboy = new Busboy({ headers: req.headers });
        let prodId = req.params.id;

        busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
            let fileName = (new Date()).valueOf() + '_' + prodId + '.png';
            let saveTo = path.join(pictureUrl, path.basename(fileName));
            console.log('saved', fieldname, filename, encoding, mimetype, saveTo, prodId, fileName);
            file.pipe(fs.createWriteStream(saveTo));
            db.Wine.findOne({_id: prodId}, function (err, wineToUpdate) {
                console.log('yeeh!', wineToUpdate);
                if (err) {
                    res.status(500).send({status:"DDBB Err"});
                } else {
                    wineToUpdate.picture = fileName;
                    console.log('updating with', wineToUpdate);
                    wineToUpdate.save();
                }
            });
            file.resume();
        });
        busboy.on('finish', function() {
            res.status(200).send({status:"OK"});
        });
        return req.pipe(busboy);
    });

    app.post('/api/wine/:id', function(req, res) {
        var id = req.params.id;
        let wine = req.body;

        db.Wine.findOne({_id: id}, function (err, originalWine) {
            console.log('OriginalWine', originalWine, wine);
            originalWine.name = wine.name;
            originalWine.grapes = wine.grapes;
            originalWine.country = wine.country;
            originalWine.region = wine.region;
            originalWine.notes = wine.notes;
            if (wine.year) originalWine.year = wine.year;
            originalWine.save();
            if (err) {
                res.status(500).send({status:"DDBB Err"});
            } else {
                console.log('Updated properly', originalWine);
                res.status(200).send({status:"OK", Object: originalWine});
            }
        });
    });

    app.delete('/api/wine/:id', function(req, res) {
        db.Wine.findOne({_id: req.params.id}, function (err, originalWine) {
            originalWine.remove();
            res.status(200).send({status:"OK"});
        });
    });
};
