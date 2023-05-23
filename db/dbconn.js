import mongoose from "mongoose";

const db_url = 'mongodb://localhost:27017/college'
const connection = async () => {
  try {
    const conn = mongoose.connect(db_url)
    console.log(`database connection successfully`);
  }
  catch (err) {
    console.log(`database connection failed ${err} `);
  }
}


export default connection
