import express from  'express';
import router from './router/route.js';
import connection from './db/dbconn.js';


const app = express();
const PORT = process.env.PORT||'3000'; 

connection()
app.use(express.json())
app.use('/',router);


 app.listen(PORT , ()=>{
    console.log(`Server run on http://localhost:${PORT}`);
 })