import express,{ Request, Response, NextFunction } from 'express';
import bcrypt = require("bcryptjs");
import JsonWebToken = require("jsonwebtoken")
import cors from "cors"

const app = express();
const port = 3000;
const SECRET_JWT_CODE = "psmR3Hu0ihHKfqZymo1m"

app.use(cors())
app.use(express.json())
import connection from "./connection"

// fetch all the movies
app.get("/movies",(req:Request,res:Response)=>{
  const sql="SELECT * FROM MOVIES;"
  connection.query(sql,(err,results)=>{
    if(err){
      console.log(err)
    }
    else{
      res.status(200).send(results)
    }
  })
})
// add new user with hashed password
app.post("/signup/user",(req:Request,res:Response)=>{
  if (!req.body.username || !req.body.password || !req.body.email) {
    res.json({ success: false, error: "send needed params" })
    return
  }
  const sql="INSERT INTO USERS (username,password,email) VALUES(?,?,?)"
  
  connection.query(sql,[req.body.username,bcrypt.hashSync(req.body.password, 10),req.body.email],(error,results)=>{
    
    if(error){
      console.log(error)
    }
    else{
      const token = JsonWebToken.sign({username: results.username,email: results.email }, SECRET_JWT_CODE)
      res.status(201).send({ success: true, token: token })
    }
  })
})
// app.get("/api/users",(req:Request,res:Response)=>{
//   const sql="SELECT * FROM USERS;"
//   connection.query(sql,(err,results)=>{
//     if(err){
//       console.log(err)
//     }
//     else{
//       res.status(200).send(results)
//     }
//   })
// })

// get one user
app.get("/login/user",(req:Request,res:Response)=>{
  const sql=`SELECT * FROM USERS WHERE email=? AND password=?;`
  connection.query(sql,[req.body.email,req.body.password],(err,results)=>{
    if(err){
      console.log(err)
    }
    else{
      res.status(200).send(results)
    }
  })
})



app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
})
