var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phraseSchema = new Schema({
  id:  Number,
  writing_style: { type: String, default: null },
  category: { type: String, required: true },
  length_type: { type: Number, default: null },  	//0=short  5=long phrase
  text: { type: String, required: true },
  rating: {type: Number, default: -1 }
});

const Phrase = mongoose.model("Phrase", phraseSchema);

module.exports = Phrase;