let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const DataSchema = Schema({
    product: {type:String, required: true},
    quantity: {type:String, required: true},
    price: {type:String, required: true},
    date: {type: Date,required: true,default: Date.now}
}, {
    timestamps: false, versionKey: false
})


let SalseSchema = mongoose.model("salse", DataSchema);
module.exports = SalseSchema;