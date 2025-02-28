const mongosse = require("mongoose")

const userSchema= new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    role:{type:String,require:true},
    tasks:{
        task:{
            id:{type:int},
            title:{type:String, required:true},
            description:{type:String, required:true},
            do:{type:Boolean, required:true}
        }
    }
})

module.exports = mongoose.model("users",userSchema)