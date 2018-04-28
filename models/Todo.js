const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new mongoose.Schema({
text: String,
complete: Boolean,
User:{
type: String,
ref: 'users'
}
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo
