import { model, Schema } from 'mongoose';


const Category = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'Name must be greater than five']
    }
});

export default model('Category',Category);