const express = require('express');
const router = express.Router();

//item model
const Item = require('../../models/Item');

// @route Get api/items
// @desc  Get All Items
// @access Public
router.get('/', (req, res)=>{
    Item.find()
      .sort({date: -1})
      .then(items=> res.json(items))
});


// @route POST api/items
// @desc  Create an item
// @access Public
router.post('/', (req, res)=>{
    const newItem = new Item({
      order: req.body.order,
      task: req.body.task,
      taskGroup: req.body.taskGroup

    });

    newItem.save()
      .then(item => res.json(item));

});

// @route DELETE api/items/:id
// @desc  delete an item
// @access Public
router.delete('/:id', (req, res)=>{
    Item.findById(req.params.id)
       .then(item => item.remove().then(()=> res.json({success: true})))
       .catch(err => res.status(404).json({success: false}));
});



module.exports = router;
