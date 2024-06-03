import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../Css/Newuser.css";

export default function Update(){
  const { id } = useParams();
const [first_name,setfirst_name]= useState("");
const [last_name,setlast_name]= useState("");
const [email,setemail]= useState("");
const [avatar,setavatar]= useState("");
const [domain,setdomain]= useState("");
const [gender,setgender]= useState("");
const [Updateurl,setUpdateurl]= useState("");
const [Userdata,setUserdata] =  useState("");

console.log({id});



useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:5000/userdetail/${id}`, {
          withCredentials: true,
        });
        setUserdata(result.data);
        console.log(result.data);

      } catch (error) {
        console.error("Failed to show card profile ", error);
      }
    };

    fetchData();
  }, [id]);
useEffect(()=>{

    if (first_name === "")   setfirst_name(Userdata.first_name);   
    if (last_name === "")    setlast_name(Userdata.last_name); 
    if (email === "")        setemail(Userdata.email);
    if (domain === "")      setdomain(Userdata.domain);
    if (gender === "")      setgender(Userdata.gender);
    if (avatar === "")    setUpdateurl(Userdata.avatar);


    if(Updateurl){
        console.log("registration started")
        
        
         fetch(`http://localhost:5000/update/${id}`,{
            method:"put",
            headers:{
                "Content-Type":"application/json",
               
              
            }
            ,
            body:JSON.stringify({
                first_name, last_name,email,gender,avatar:Updateurl,domain
            }),
            credentials: 'include',
        })
         .then((res)=>{console.log("collected")
      
    
      })
        .catch((err)=>{console.log("GADBAD HO GYA BHAIII ")})
    }

},[Updateurl])




const Updatefunction = async ()=>{
    const data = new FormData()
    data.append("file",avatar)
    data.append("upload_preset","insta-clone")
  //  data.append("cloud_name","da8gsmpzs")
    await fetch("https://api.cloudinary.com/v1_1/da8gsmpzs/image/upload",{
 
 
 
    method:"put",

        body:data
    })
    .then(res=>res.json())
    .then(data=>{
   
       setUpdateurl(data.url)
       console.log(Updateurl)
    })
    .catch(err=>{
        console.log(err)
    })
 
 
 }









return(

 <>

 

 <form class="form">

 <p class="title">Update </p>

 <p class="message">Signup now and get full access to our app. </p>
<div className="profile_flex">

 <div  className="change_image"> 
 <div className="image_box">
<img src= {Userdata.avatar} alt="" className="update_pic"/>

 </div>
 <input type="file" id="upload-cover" accept="image/*" required hidden onChange = {(e)=> setavatar(e.target.files[0])} />
      <label htmlFor="upload-cover"  className="change_photo" >
       <button className="change_photo_button">
        change Photo
       </button>
      </label>
    
</div>
 </div>
 <div class="flex">
 <label>
 <input placeholder="" type="text" class="input"value={first_name} onChange = {(e)=>  setfirst_name(e.target.value) }/>
 <span>Firstname</span>

</label>


 <label>
 <input placeholder="" type="text" class="input" value={last_name} onChange = {(e)=>  setlast_name(e.target.value) }/>

 <span>Lastname</span>

 </label>

 </div> 



 <label>

 <input placeholder="" type="email" class="input" value={email} onChange = {(e)=>  setemail(e.target.value) }/>

 <span>Email</span>
</label> 
 <label>

 <input placeholder="" type="text" class="input"value={gender} onChange = {(e)=>  setgender(e.target.value) }/>

 <span>Gender</span>

 </label>

 <label>

<input  placeholder="" type="text" class="input"value={domain} onChange = {(e)=>  setdomain(e.target.value) }/>

<span>Domain</span>

</label>

<button class="submit" onClick={()=>Updatefunction()}>Update</button>
</form>
</>

)
}