let express=require("express");
let cors=require("cors");
let app=express();
let multer=require('multer');
let path=require('path');
let {pool}=require('./database.js');

app.use(express.json());
app.use(cors());
app.use(express.static('images'));

app.post('/insert', (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let query = 'INSERT INTO garciastore (username, email, passcode) VALUES (?, ?, ?)';


  pool.query(query, [username, email, password], (err, result) => {
          if (err) {
     res.send(err);
    } else{
      res.send('0');
    }
  });

});


app.post('/select',(req,res)=>{
  const email=req.body.login_email;
  const password=req.body.login_password;
  pool.query('SELECT * FROM garciastore WHERE email=? AND passcode=?',[email,password],(err,result)=>{
  
    if(err){
   res.send({err: err});
    }
    if(result.length>0){
        res.send(result[0].username);
    }else if(result.length===0){
      res.send('no accounts found');
    }
  })

})
app.post('/search',(req,res)=>{
   let user_email=req.body.user_email;
   let user_password=req.body.user_password;
  let query="SELECT username FROM garciastore WHERE email=? AND passcode=?";

pool.query(query,[user_email,user_password],(err,result)=>{
  if(err){
    res.send(err);
console.log(err);
  }else{
   res.send(result);
  }
})

})


const storage=multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,"images");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
  }

})

const upload=multer({
  storage:storage
})
app.post('/add',upload.single('picture'),(req,res)=>{
  let picture=req.file.filename;
  let user;
  if(req.body.user_email){
    user=req.body.user_email
  }else{
    user=req.body.register_email
  }
let query="UPDATE garciastore SET image=? WHERE email=?";

pool.query(query,[picture,user],(err,result)=>{

  if(err){
   return err
  }else{
    return result
  }
})
})
app.post('/getphoto',(req,res)=>{
  let query="SELECT image FROM garciastore where email=?";
let variable;
  if(req.body.profile_email){
   variable=req.body.profile_email;
}else{
 variable=req.body.register_email;
}
  pool.query(query,[variable],(err,result)=>{
 
    if(err){
      res.send(err);
    }else{
      res.send(result);
    }
  })

})

app.listen(3000);