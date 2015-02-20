var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema ({
	title: { type: String, required: true },
	body: { type: String, required: true },
	// instead of creating a schema for every sports individually, I can just do the enum rule
	sport: { type: String, enum: ['NFL', 'MLB', 'NBA', 'Soccer', 'Tennis', 'Cricket', 'Running'], required: true, index: true }, // index makes searches a little faster/easier
	timestamp: { type: Date }, // look up type for date and how to have it automatically do a timestamp
	// the below is related to the _id assigned in robomongo gives us access to that id
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Post', postSchema)