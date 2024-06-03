import React from "react";
import axios from "axios";
import Update from "./Update";
import { useState } from "react";
import { navigate, Link } from "react-router-dom";


import "../Css/User-card.css"

export default function Card({id,first_name,last_name,email,gender,domain,avatar,setupdate}){
    const [isPopupOpen, setPopupOpen] = useState(true);
  


    const collectdata =async (e) => { 
       
        console.log("registration started")
      
        await axios.post('http://localhost:5000/team',{    name: `${first_name} ${last_name}`,
        memberIds: [id], team_pic: `${avatar}`},{withCredentials:true})
        .then((res)=>{alert("team member added")
     
      })
        .catch((err)=>{console.log("GADBAD HO GYA BHAIII ")})
    }


    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
      };


   
   
    return(
        <>
        <div class="card">
          <div className="user_detail">
       <img src={avatar} class="user-photo" alt=""/>
       <h5>{first_name}{last_name}</h5>
       </div>
     
       <div>
        <ul className="user_info">
            <li>{email}</li>
            <div className="domain">
            <li>{domain}</li>
            <li> male</li>
            </div>
            
        </ul>
       </div>
       <div className="View_Add">

      
             <button className="add_users">  <Link to={`/Userprofile/${id}`}>
               View
              </Link></button>
             <button className="add_users" onClick={collectdata}> Add Team</button>
       </div>
        </div>

        {/* cards*/ }
        
        
        
        </>
    )
}