const authorController = require('./authorController');
const path = require('path');

module.exports = app => {
    app
        .get('/authors', authorController.getAll)
        .get('/authors/:id', authorController.getOne)
        .post('/authors', authorController.createAuthor)
        .put('/authors/:id', authorController.editAuthor)
        .put('/authors/quotes/:id', authorController.addQuote)
        .put('/authors/quotes/votes/:id', authorController.voteTheQuote)
        .delete('/authors/:id', authorController.deleteAuthor)
        .put('/authors/quotes/delete/:id', authorController.deleteQuote)
        .all("*", (req, res, next) => {
            res.sendFile(path.resolve('./public/dist/public/index.html'))
        });
}