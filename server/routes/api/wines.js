var fs = require ("fs");
var years = ['2012', '2011', '2010', '2009', '2008', '2007', '2006'];
var pictureUrl = __dirname + "../../public/pics/";

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

        var fileName ='';
        var wine = {};
        if (!req.files.picture || req.files.picture.size === 0) {
            fileName = 'init_data/generic.jpg';
            wine = req.body;
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
        }

        else {
            var file = req.files.picture;
            console.log('REQ', req);
            console.log('REQFILE', file);
            var extension = file.name;
            var i = 0, j = 0;
            for(i = extension.length; i >= 0; i--){
                if(extension.substring(i-1, i)==".")
                    j = i;
            }
            wine = req.body;
            wine.year = years[req.body.year];
            var aux = new db.Wine(wine);
            aux.save(function(err, wineFromDDBB) {
                if (err) {
                    res.status(500).send({status:"DDBB Err"});
                }

                fileName = './uploads/' + wine.name + '_' + wineFromDDBB._id.toString() + '.jpg';
                fs.readFile(file.path, function (err, data) {
                    //here get the image name and other data parameters which you are sending like image name etc.
                    fs.writeFile(fileName, data, function (err) {});
                    //dont forgot the delete the temp files.
                });
                db.Wine.findOne({_id: wineFromDDBB._id}, function (err, wineToUpdate) {
                    console.log('yeeh!', wineToUpdate);
                    if (err) {
                        res.status(500).send({status:"DDBB Err"});
                    } else {
                        wineToUpdate.picture = fileName;
                        console.log('updating with', wineToUpdate);
                        wineToUpdate.save();
                    }
                });
                res.status(200).send({status:"OK", Object: wineFromDDBB});
            });
        }
    });

    app.post('/api/wine/:id', function(req, res) {
        var id = req.params.id;

        var wine = req.body;
        wine.year = years[req.body.year];
        var file = req.files.picture;
        var extension = file.name;
        var i = 0, j = 0;
        for(i = extension.length; i >= 0; i--){
            if(extension.substring(i-1, i)==".")
                j = i;
        }

        db.Wine.findOne({_id: wine._id}, function (err, originalWine) {
            console.log(wine.picture);
            wine.picture = originalWine.picture;
            if (!req.files.picture || req.files.picture.size === 0) {
            }
            else {
                if((wine.picture).substring(0,4)=='init'){
                    wine.picture = id + "" + extension.substring(j - 1, extension.length);
                }
                console.log('path' + file.path, pictureUrl)
                fs.rename(file.path, pictureUrl + wine.picture, function(error) {
                    if(error) {
                        console.log("error");
                    }
                });
            }
            originalWine = wine;
            originalWine.save(function(err, wine) {
                if (err) {
                    console.log('Error updating content: ' + err);
                    res.status(500).send({status:"DDBB Err"});
                } else {
                    console.log('wine has been updated');
                    res.status(200).send({status:"OK", Object: wine});
                }
            });
        });
    });

    app.delete('/api/wine/:id', function(req, res) {
        db.Wine.findOne({_id: req.params.id}, function (err, originalWine) {
            originalWine.remove();
            res.status(200).send({status:"OK"});
        });
    });
};
