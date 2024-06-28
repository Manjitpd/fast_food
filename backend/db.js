const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://gofood:mern123@cluster0.mrg6df7.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = async()=>{
  try{
    mongoose.set("strictQuery",false); 
    const connect = await mongoose.connect(mongoURI);
    if(connect){
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function(err,data){

          const foodCategory = await mongoose.connection.db.collection("foodcategory");
          foodCategory.find({}).toArray( function(err,catData){
            if(err) console.log(err);
            else{
                global.food_items = data;
                global.foodCategory= catData;
              
               }

          })


            // if(err) console.log(err);
            // else{
            //   global.food_items = data;
            
            // }
        })
    }
  } catch(error){
    console.log('error while connecting',error.message);
  }
}

module.exports=mongoDB;





