import { Schema, model } from 'mongoose';

const animeSchema = new Schema({
    name: { 
        type: String,
        required:true,
        unique:true,
        minlength: [5,'Name must be greater than three']
    },
    image:String,
    categories:{
        type: [Schema.Types.ObjectId],
        ref:'Category',
        required:false,
    },
    chapters:{
        type:Number, 
        validate:{
            validator: Number.isInteger,
            message:'{VALUE} is not an integer value'
        }
    }

});

export default model('Anime',animeSchema);