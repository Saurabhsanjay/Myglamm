

const express=require("express")
const mongoose=require('mongoose')
const connect=require('./Configs/db')
const authMiddleware =require("./middleware/authMiddleware")
const cors=require('cors')


const authRoute=require('./routes/auth')
const productRoute=require('./routes/auth')

mongoose.set('strictQuery', true);
const PORT = 8080

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 app.use(cors());
app.use(authMiddleware)
app.use("/auth",authRoute)
app.use("/auth",productRoute)

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(PORT, async () => {
 const connection= await connect();
 if(connection){
  console.log("MONGODB Connected")
 }
  console.log(`Server listening on http://localhost:${PORT}`);
});
