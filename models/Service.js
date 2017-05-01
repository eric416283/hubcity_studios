const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    validate: {
      validator: function(v){
        return !v.includes("-")
      },
      message: "name cannot contian hyphens"
    }
  }
})


const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
