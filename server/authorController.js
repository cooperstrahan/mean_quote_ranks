const { Author } = require('./authorModel');

module.exports = {
    getAll: (req, res) => {
        Author.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    getOne: (req, res) => {
        const ID = req.params.id;
        Author.findOne({_id:ID})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    createAuthor: (req, res) => {
        const DATA = req.body;
        Author.create(DATA)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    editAuthor: (req, res) => {
        const ID = req.params.id;
        const DATA = req.body;
        Author.updateOne({_id:ID}, DATA, {runValidators: true, new:true})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    addQuote: (req, res) => {
        const ID = req.params.id;
        const DATA = req.body;
        Author.updateOne({_id:ID}, {$push: {quotes: DATA}}, {runValidators: true, new:true})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    voteTheQuote: (req, res) => {
        const ID = req.params.id;
        const DATA = req.body;
        Author.findOne({_id:ID})
            .then(author => {
                author.quotes[DATA.index].votes = DATA.votes;
                author.save();
          })
          .then(data => res.json(data))
          .catch(err => res.json(err));
    },

    deleteAuthor: (req, res) => {
        const ID = req.params.id;
        Author.findOneAndDelete({_id:ID})
            .then(data => res.json(data))
            .catch(data => res.json(err));
    },

    deleteQuote: (req, res) => {
        const ID = req.params.id;
        console.log(ID);
        const DATA = req.body;
        console.log(DATA);
        Author.findOne({_id:ID})
            .then(author => {
                author.quotes.splice([DATA.index],1);
                author.save();
            })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}