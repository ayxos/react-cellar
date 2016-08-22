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

    app.post('/api/wines', function(req, res) {
        console.log('Wine post');
        console.log(req.body);
        console.log(req.user);

        var newWine = new db.Wine();
        newWine.title = req.body.title;
        newWine.region = req.body.region;
        newWine.year = req.body.year;
        newWine.tags = [];
        if(req.body.tags && req.body.tags.length) {
            for(var i =0;i<req.body.tags.length;i++) {
                newWine.tags.push(req.body.tags[i].text);
            }
        }

        newWine.save(function(err, wine) {
            if (err) {
                res.status(500).send({status:"DDBB Err"});
            }
            else {
                res.status(200).send({status:"OK", Object: wine});
            }
        });
    });
};