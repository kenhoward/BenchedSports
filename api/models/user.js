var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
	name: { type: String, required: true },
	googleId: { type: Number, required: true, unique: true },
	picture: { type: String, required: true },
})

module.exports = mongoose.model('User', userSchema);
