const mongoose =
require("mongoose");

const interviewSchema =
new mongoose.Schema(
{
user:{
type:
mongoose.Schema.Types.ObjectId,
ref:"User",
required:true,
},

title:{
type:String,
required:true,
},

company:{
type:String,
required:true,
},

date:{
type:String,
required:true,
},

time:{
type:String,
required:true,
},

description:{
type:String,
default:"",
},

},
{
timestamps:true,
}
);

module.exports =
mongoose.model(
"Interview",
interviewSchema
);