import mongoose from 'mongoose'
const { Schema, model } = mongoose

export const TodoSchema = new Schema({
    id  : { type : String, required : true },
    title  : { type : String, required : true },
    completed   : { type : Boolean, required : true },
}, {timestamps:true});
  
export default model('todo',TodoSchema);