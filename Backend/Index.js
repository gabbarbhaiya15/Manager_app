const express = require('express');
const mongoose =  require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt  = require('jsonwebtoken'); 
const  bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const alluser = require('./Controller/Alluser');
const  Delete = require('./Controller/Delete');
const search = require('./Controller/Search');
const Update = require('./Controller/Update');
const  User = require('./Controller/User');
const Userprofile = require('./Controller/Userprofile');
const team = require('./Controller/Team');
const allteams = require('./Controller/Allteam');
const Teammember = require('./Controller/Team_member');
const path = require('path');


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const  port = process.env.PORT || 5000;
app.use(bodyParser.json() );
app.use(cors({credentials: true,
origin:[ 'http://localhost:3000' ]
}));
app.use(cookieParser());
mongoose.connect('mongodb+srv://gabbarbhaiya:Shubham123@gabbarbhaiya.2lvenhx.mongodb.net/Project5',{

useNewUrlParser: true,
useUnifiedTopology: true,

},)
.then(()=>{console.log('connect')})
.catch((err)=>{console.log(err)}) ;
app.use('/user',User)
app.use('/alluser',alluser)
app.use('/search',search)
app.use('/update',Update)
app.use('/remove',Delete)
app.use('/userdetail',Userprofile)
app.use('/team',team)
app.use('/allteam',allteams)
app.use('/abc',Teammember)


app.use(express.static('Frontend/public'))
    
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'Frontend','public','index.html'))
    })




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
