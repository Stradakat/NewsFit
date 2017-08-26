// require mongoose
var mongoose = require('mongoose');
// create a schema class
var Schema = mongoose.Schema;

// create the Note schema
var NoteSchema = new Schema({
  // just a string
  title: {
    type:String
  },
  // just a string
  body: {
    type:String
  }
});

// Mongoose will automatically save the ObjectIds.

// create Note model w/NoteSchema
var Note = mongoose.model('Note', NoteSchema);

// export Note model
module.exports = Note;