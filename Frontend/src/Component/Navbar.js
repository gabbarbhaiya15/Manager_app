import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Navbar.css";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [userDetail, setUserDetail] = useState([]);
  const [pop, setPop] = useState(false);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/allteam');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const toggle = () => {
    setPop(!pop);
  };

  const fetchUser = async (query) => {
    setSearch(query);
    if (query) {
      try {
        const response = await axios.post(
          "http://localhost:5000/search",
          { query },
          { withCredentials: true }
        );
        setUserDetail(response.data);
      } catch (error) {
        console.error("Error in searching", error);
      }
    } else {
      setUserDetail([]);
    }
  };

  return (
    <>
      <div className="d-flex" id="navbar">
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FA5252/old-vmware-logo.png" alt="logo" />
        <input
          type="search"
          placeholder="Search user"
          id="search"
          value={search}
          onChange={(e) => fetchUser(e.target.value)}
        />
        <ul className="list-group" id="collection">
          {userDetail.map((item) => (
            <li className="list-group-item" key={item._id}>
              <Link to={`/Userprofile/${item._id}`} className="list-item">
                {item.first_name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="d-flex" id="tagbox">
          <p id="tags" onClick={toggle}>
            <img width="34" height="34" src="https://img.icons8.com/arcade/64/user-group-man-woman.png" alt="team" />
          </p>
          {pop && (
            <div id="box">
              <h1 className="heading">Team</h1>
              <ul className="list-group">
                {users.map((item) => (
                  <li className="list-group-items" key={item._id}>
                    <Link to={`/Userprofile/${item.members[0]}`} className="list-item">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
