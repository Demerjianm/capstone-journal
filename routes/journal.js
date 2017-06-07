const express = require('express');
const router = express.Router();
const Journal = require('../models/journal');

//CRUD
//get - fetching data from the database
//post - creating a new document
// put - updating an exsisting doucment
//delete - destroying an exsisting document

// Journal index, getting all the entries
router.get('/', (req, res) => {
  Journal.find( ( err, entries) => {
    res.json(entries);
  });
});


// creating a new entry
router.post('/', (req, res) => {
  let { title, body } = req.body;
  new Journal({
    title,
    body
  }).save( (err, entry) => {
    if (err)
      return res.json(err);
    return res.json(entry);
  });
});

//updates an entry
router.put('/:id', (req, res) => {
  let { title, body } = req.body;
  Journal.findByIdAndUpdate(
    req.params.id,
    { $set: { title, body, updatedAt: Date.now() }},
    { new: true },
    ( err, entry ) => {
      if (err)
        return res.json(err)
      return res.json(entry)
    }
  )
});

router.delete('/:id', (req, res) => {
  Journal.findByIdAndRemove(req.params.id, (err) => {
    if (err)
      return res.json(err)
    return res.sendStatus(204);
  });
});

module.exports = router;