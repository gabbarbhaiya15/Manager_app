import React from 'react'
import '../Css/Sidebar.css'
import { navigate, Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className= "demo">
   <div class="area"></div><nav class="main-menu">
          <ul>
          <li>
                    <a href="https://jbfarrow.com">
                        <i class="fa fa-comment fa-2x"></i>
                        <span class="nav-text">
                           User
                        </span>
                    </a>
                  
                </li>
          </ul>


            <ul>
          
                <li>
                    <a href="https://jbfarrow.com">
                        <i class="fa fa-bars fa-2x"></i>
                        <span class="nav-text">
                       
         <Link to={'/'}>
                       View Users
                      </Link>
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav">
                    <a href="#">
                  
                    <i class="fa fa-users">
                        
                           
                    
                     </i>   <span class="nav-text"> 
                     <Link to={'/Newuser'}>
                       Add User
                      </Link>
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-check"></i>
                        <span class="nav-text">
                            Manage Team
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                <a href="#">
                       <i className="fa fa-user-secret"></i>
                        <span class="nav-text">
                        <Link to={'/Newuser'}>
                       Add User
                      </Link>
                        </span>
                    </a>
                   
                </li>
             </ul>

            <ul class="logout">
                <li>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                        <Link to={'/Dashboard'}>
                       Dashboard
                      </Link>
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>




    </div>
  )
}

export default Sidebar