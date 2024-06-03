import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../Css/Userprofile.css";
import axios from "axios";

export default function Userprofile() {
  const { userid } = useParams();
  const [data, setData] = useState([]);
  const [team, setTeam] = useState("not in team");

  const navigate = useNavigate();

  // Fetch user details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:5000/userdetail/${userid}`, {
          withCredentials: true,
        });
        setData(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("Failed to show card profile ", error);
      }
    };

    fetchData();
  }, [userid]);

  // Fetch team details
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        console.log('Fetching team data for user:', userid);
        const result = await axios.get(`http://localhost:5000/abc/${userid}`, {
          withCredentials: true,
        });
        console.log(result.data);
        setTeam(result.data);
      } catch (error) {
        console.error("Failed to fetch team data ", error);
      }
    };

    fetchTeamData();
  }, [userid]);

  // Add user to team
  const addTeamData = async () => {
    try {
      await axios.post('http://localhost:5000/team', {
        name: `${data.first_name} ${data.last_name}`,
        memberIds: [userid],
        team_pic: `${data.avatar}`
      }, { withCredentials: true });
      alert("Team member added");
    } catch (err) {
      console.error("Error adding team member:", err);
    }
  };

  // Remove user
  const removeUser = async () => {
    try {
      await axios.delete(`http://localhost:5000/remove/${userid}`, { withCredentials: true });
      navigate("/");
    } catch (err) {
      console.error("Error while deleting user:", err);
    }
  };

  return (
    <div className="userprofile">
      <h2 className="heading_profile">User Profiles</h2>
      <div className="profile_page_content_box">
        <div className="profile_function_button_box">
          <div className="profile_function_button">
            <Link to={`/Update/${userid}`}>Edit</Link>
          </div>
          <div className="profile_function_button" onClick={removeUser}>Delete</div>
          <div className="profile_function_button">
            <Link to={'/Dashboard'}>Dashboard</Link>
          </div>
        </div>
        <div className="line_profile_page"></div>
        <div className="profile_detail">
          <div className="profile-detail-box">
            <div className="profile-detail-box-b">
              <div className="icon_container_profile_info">
                <p>Name :</p>
                <h6 className="user_pic_name">
                  <img src={data.avatar} className="user-photo-userprofile" alt="" />
                  {data.first_name} {data.last_name}
                </h6>
              </div>
              <div className="icon_container_profile_info">
                <p>Email :</p>
                <h6>{data.email}</h6>
              </div>
              <div className="icon_container_profile_info">
                <p>Domain :</p>
                <h6>{data.domain}</h6>
              </div>
              <div className="icon_container_profile_info">
                <p>Team :</p>
                <div className="member_confirmation" onClick={addTeamData}>{team}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
