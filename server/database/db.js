import mongoose from 'mongoose';


const dbConnection =async()=>{
    const DB_URL=`mongodb+srv://Shreyansh:Srivastava123@cluster0.emc5wnd.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(DB_URL,{useNewUrlParser:true});
        console.log('DataBase connected successfully')
    }catch(error){
        console.log("error in connection to database",error.message);
    }
}

export default dbConnection;