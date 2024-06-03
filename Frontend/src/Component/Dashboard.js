import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import '../Css/Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [latestUsers, setLatestUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalTeamMember, setTotalTeamMember] = useState(0);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/allteam');
        setUser(data);
        setTotalTeamMember(data.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeamData();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/alluser", { withCredentials: true });
        setLatestUsers(data.slice(0, 4));
        setTotalUsers(data.length);
      } catch (error) {
        console.error("Error fetching users");
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className='dashboard'>
      <div className='upper_box'>
        <div className='up_box_content'>
          <h5>New User</h5>
          <div className='up_box_a_type'>
            {latestUsers.map((user, index) => (
              <div className='user_dashboard' key={index}>
                <div className='pic_name'>
                  <img src={user.avatar} alt='Avatar' className='dashboard_avatar' />
                  <h6>{user.first_name}</h6>
                </div>
                <button className='view'>
                  <Link to={`/Userprofile/${user._id}`}>View</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className='up_box_content'>
          <h5>Team Goal</h5>
          <div className='up_box_a_type'>
            {['Achieve Milestone', 'Working Together', 'Added new goal'].map((goal, index) => (
              <div className='icon_container_text' key={index}>
                <div className='icon_container'>
                  <img src="https://img.icons8.com/ios-filled/50/EBEBEB/conference-call.png" alt='Icon' className='icon' />
                </div>
                <p>{goal}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='up_box_content'>
          <h5>User Card</h5>
          <div className='up_box_b_type'>
            <div className='total_user'>
              <h7>{totalUsers}</h7>
              <p>Users</p>
            </div>
            <div className='total_team_member'>
              <div className='icon_container_text'>
                <div className='icon_container'>
                  <img src="https://img.icons8.com/ios-filled/50/EBEBEB/conference-call.png" alt='Icon' className='icon' />
                </div>
                <p>{totalTeamMember} Members</p>
              </div>
              <div className='icon_container_text'>
                <div className='icon_container'>
                  <img src="https://img.icons8.com/ios-filled/50/EBEBEB/conference-call.png" alt='Icon' className='icon' />
                </div>
                <p>4 New Users</p>
              </div>
            </div>
          </div>
        </div>
        <div className='up_box_content'>
          <h5>Team Member</h5>
          <div className='up_box_a_type'>
            <ul>
              {user.map(teamMember => (
                <div className='user_dashboard' key={teamMember._id}>
                  <img src={teamMember.team_pic} alt='Avatar' className='dashboard_avatar' />
                  <Link to={`/Userprofile/${teamMember.members[0]}`}>
                    <li className="list">{teamMember.name}</li>
                  </Link>
                  <button className='view'>
                    <Link to={`/Userprofile/${teamMember.members[0]}`}>View</Link>
                  </button>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='lower_box'>
        <div className='left'>
          <h5>Creator</h5>
          <div className='creator_detail'>
            <div className='creator_profile'>
              <img src='' alt='Creator Profile' className='creator_profile_pic' />
            </div>
            <div className="Creator_name">Yash Raj</div>
            <div className="creator-subtitle">FullStack Developer</div>
            <div className='Link_box'>
              {['https://github.com/gabbarbhaiya15', 'https://www.linkedin.com/in/yash-raj-bhardwaj-72a79825a', 'https://mail.google.com/mail/u/1/?view=cm&fs=1&to=keniyashraj@gmail.com&tf=1'].map((link, index) => (
                <a href={link} key={index}>
                  <img src={`https://img.icons8.com/ios-filled/50/EBEBEB/${['github', 'linkedin', 'gmail-new'][index]}.png`} alt='Link Icon' className='link_icon' />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='middle'>
          <h5>Other Projects</h5>
          <div className='total_team_member_box-middle'>
            {[
              { link: 'https://gofirfrontend.onrender.com', text: 'GoFire Social Media' },
              { link: 'https://todo-frontend-65o8.onrender.com', text: 'To-do List' },
              { link: 'https://car-sale-webapp.onrender.com', text: 'Car-Sale React App' }
            ].map((project, index) => (
              <div className='icon_container_text' key={index}>
                <a href={project.link}>
                  <div className='icon_container'>
                    <img src="https://img.icons8.com/ios-filled/50/EBEBEB/conference-call.png" alt='Icon' className='icon' />
                  </div>
                </a>
                <p>{project.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='right'>
          <h5>Help Desk</h5>
          <div className='total_team_member_box-middle'>
            {[
              { link: 'https://github.com/gabbarbhaiya15', text: 'Source Code', icon: 'github' },
              { link: 'tel:+9455887824', text: '9455887824', icon: 'ringer-volume' },
              { link: 'https://mail.google.com/mail/u/1/?view=cm&fs=1&to=keniyashraj@gmail.com&tf=1', text: 'Mail Me', icon: 'gmail-new' }
            ].map((help, index) => (
              <div className='icon_container_text_help' key={index}>
                <a href={help.link}>
                  <img src={`https://img.icons8.com/ios-filled/50/EBEBEB/${help.icon}.png`} alt='Link Icon' className='link_icon' />
                </a>
                <p>{help.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
