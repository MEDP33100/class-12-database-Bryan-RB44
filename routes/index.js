var express = require('express');
var router = express.Router();
var database = require('./../config/db');

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    //connect to posts collection.

    // 1. connect to database tboi_game_items
    const isaacGame = database.client.db('tboi_game_items');
    // 2. get collection "discriptions"
    const descriptions = isaacGame.collection('descriptions');
    // 3. get all documents inside collection "descriptions" and match with collection "items"
    const allItems = await descriptions
      .aggregate([
        {
          $lookup: {
            from: 'items',
            localField: 'effectOwner',
            foreignField: '_id',
            as: 'parentItem'
          }
        }
      ])
      .toArray();

    // 4. pass array to handlebars template
    res.render('index', {
      title: 'Binding of Isaac Item Display DEMO',
      descriptions: allItems,
    });
  } catch (e) {
    console.log("An error occured :/", e);
  }
});

module.exports = router;
