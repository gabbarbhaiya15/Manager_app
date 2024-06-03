import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Newuser.css";
export default function NewUser(){
const [first_name,setfirst_name]= useState("");
const [last_name,setlast_name]= useState("");
const [email,setemail]= useState("");
const [domain,setdomain]= useState("");
const [gender,setgender]= useState("");
const [avatar,setavatar]= useState("");
const [url,seturl]= useState("");

useEffect(()=>{

  
    if(url){
        console.log("registration started")
        
        
         fetch(https://manager-app-8n8c.onrender.com/user',{
            method:"post",
            headers:{
                "Content-Type":"application/json",
               
              
            }
            ,
            body:JSON.stringify({
                first_name, last_name,email,gender,avatar:url,domain
            }),
            credentials: 'include',
        })
         .then((res)=>{console.log("collected")
      
    
      })
        .catch((err)=>{console.log("GADBAD HO GYA BHAIII ")})
    }

},[url])


const profilepic = async ()=>{
    const data = new FormData()
    data.append("file",avatar)
    data.append("upload_preset","insta-clone")
  //  data.append("cloud_name","da8gsmpzs")
    await fetch("https://api.cloudinary.com/v1_1/da8gsmpzs/image/upload",{
 
 
 
    method:"post",

        body:data
    })
    .then(res=>res.json())
    .then(data=>{
   
       seturl(data.url)
       console.log(url)
    })
    .catch(err=>{
        console.log(err)
    })
 
 
 }

return(
    <>
    <h1>hello yash</h1>
    
    <div class="form">
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input"value={first_name} onChange = {(e)=>  setfirst_name(e.target.value) }/>
            <span>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input" value={last_name} onChange = {(e)=>  setlast_name(e.target.value) }/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" class="input" value={email} onChange = {(e)=>  setemail(e.target.value) }/>
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="text" class="input"value={gender} onChange = {(e)=>  setgender(e.target.value) }/>
        <span>Gender</span>
    </label>
    <label>
        <input required="" placeholder="" type="text" class="input"value={domain} onChange = {(e)=>  setdomain(e.target.value) }/>
        <span>Domain</span>
    </label>
    <input type="file" id="images" accept="image/*" required    onChange = {(e)=> setavatar(e.target.files[0])} />
    <button class="btn" onClick={()=>profilepic()}>Submit</button>
    

</div>

    
    
    </>
)
}
