module.exports = function(app, db) {
    app.post('/add-picture', (req, res) => {
        const note = { text: req.body.body, title: req.body.title };
        db.collection('picture').insert(note, (err, result) => {
            if (err) {
                res.send({ 'error': 'ERROR' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
};