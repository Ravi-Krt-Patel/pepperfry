const mongoose = require("mongoose")
const connect = () => {
    return mongoose.connect("mongodb+srv://ravi_kumar:4uATDeP87brPLwe4@cluster0.ohbas.mongodb.net/pepperfry_database?retryWrites=true&w=majority")
}
module.exports=connect