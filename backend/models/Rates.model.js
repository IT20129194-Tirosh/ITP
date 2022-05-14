const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const RatesSchema = new Schema({
    Name: { type: String, required: true },
    Rate: { type: String, required: true },
    Review: { type: String, required: true },
    

}, {
    timestamps: true,
});



const Rates = mongoose.model('Rates', RatesSchema);

module.exports = Rates;