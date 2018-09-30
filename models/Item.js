const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create schema

const ItemSchema = new Schema({
    order: {
      type: String,
      required: false
    },
    task: {
      type: String,
      required: true
    },
    taskGroup:{
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);
