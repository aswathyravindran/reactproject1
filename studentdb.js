const mongoose = require ('mongoose');
mongoose.connect("mongodb+srv://aswathyravindrant02:aswathy@cluster0.o6i6bub.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected");
})
.catch(err=>console.log(err));

let Schema = mongoose.Schema;
const studentSchema = new Schema({
    sname:String,
    sgrade:Number
})
var studentModel = mongoose.model("students",studentSchema);
module.exports= studentModel