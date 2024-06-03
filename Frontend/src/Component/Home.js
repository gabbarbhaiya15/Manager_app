import React from "react";
import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Css/Home.css";   
import Card from "./UserCard";
import axios from "axios";



export default function Home(){

  const [Data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const recordsPerPage = 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const Npage = Math.ceil(Data.length / recordsPerPage);
  const page=Npage/5;
  const numbers = [...Array(page).keys()].map((i) => i + 1);
       
        



    
   useEffect(()=>{
    axios.get("http://localhost:5000/alluser",{withCredentials:true})
    .then((res)=>{
      console.log(res.data);
      const postarray = res.data.map(items=> items);
      setData(postarray)
    
    })
    .catch(()=>{
    
    })
    
    
    },[])




    


   function previouspage(){
    if(currentPage!==1){
      setcurrentPage(currentPage-1)
    }
  
   }
   function nextpage(){
    if(currentPage < Npage){
      setcurrentPage(currentPage +1)
    }
   }
   const changepage = (n) => {
    console.log("running")
    console.log(n)
    setcurrentPage(n )
   
   }

    return(



        
        <div className="Home">

<div className="file">
        {records.map((d, i) => (
          <div className="d-flex " key={i}>
            <div id=" layoutss">
              <Card
                id={d._id}
                first_name={d.first_name}
                last_name={d.last_name}
                email={d.email}
                domain={d.domain}
                avatar={d.avatar}
              />
            </div>
          </div>
        ))}
      </div>
      {
        // pagination
      }
   <div className="page">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous"
      onClick={previouspage}
      >
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
{
numbers.map((n,i) =>(
  <li className= "page-item"  key={i}>
<a  className='page-link'  href='#'  onClick={() =>  changepage(n)}> {n}  </a>

  </li>
))

}
<li className="page-item">
    
      <a class="page-link" href="#" aria-label="Next"
      onClick={nextpage}> >>
       
      </a>
    </li>
  </ul>
-
</div>



        
        </div>
    )
}