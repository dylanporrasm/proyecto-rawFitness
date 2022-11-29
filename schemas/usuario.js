var mongoose = require('mongoose'); //Se llama la libreria Mongoose

var usuarioSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  correo: String,
  foto: { public_id: String, secure_url: String},
  nombre: String,
  apellidos: String,
  nacimiento: Date,
  genero: String,
  peso: Number,
  altura: Number,
  progresos: [{ peso: Number, fecha: Date }]
});

module.exports = mongoose.model('Usuario', usuarioSchema, 'Usuarios');
