import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.join(__dirname,'../.env')});
const { MongoUri } = process.env;

async function Connect () {
    try {
        await mongoose.connect(MongoUri,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('Db is conneted');
        
    } catch (error) {
        console.log('Db error: ',error);
    }
}

export default Connect;