import {React, useState} from 'react'
import { useEffect } from 'react';
import '../Css/Demo.css'
const Demo = () => {




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
          
          
           fetch('https://manager-app-8n8c.onrender.com/user',{
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




  return (
    <div className="popup-container">
      <div className="popup">
      
        <h3 className='heading'> Add User Card</h3>
        <div className='line' ></div>
        <form >
          <label>
            First Name:
            <input required="" placeholder="" type="text" class="input"value={first_name} onChange = {(e)=>  setfirst_name(e.target.value) }/>
          </label>
          <label>
          Last Name:
          <input required="" placeholder="" type="text" class="input" value={last_name} onChange = {(e)=>  setlast_name(e.target.value) }/>
          </label>
          <label>
            Email:
                    <input required="" placeholder="" type="email" class="input" value={email} onChange = {(e)=>  setemail(e.target.value) }/>
          </label>


        
          <label>
             Domain:
             <input required="" placeholder="" type="text" class="input"value={domain} onChange = {(e)=>  setdomain(e.target.value) }/>
          </label>
   
  <label>
    Gender:
          <div class="custom-select-wrapper">
  <select class="custom-select"  value={gender} onChange={(e) => setgender(e.target.value)}>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>

</div>
</label>

<input type="file" id="images" accept="image/*" required    onChange = {(e)=> setavatar(e.target.files[0])} />

          <button type="submit"   className='submit_button' onClick={()=>profilepic()}>Submit</button>
        </form>
      </div>
    </div>
  );

}

export default Demo
