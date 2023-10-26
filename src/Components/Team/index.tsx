import React from "react";
import Main_Heading from "../Main_Heading";
import Profile from "../Profile";

const Team = () => {
  return (
    <div
      className="team-block"
      style={{ backgroundImage: `URL(assets/images/bg-team.jpg)` }}
    >
      <div className="overlay">
        <div className="container">
          <Main_Heading textheading="Our Team"/>
          <div className="profile-wrap">
            <Profile
              img="assets/images/team1.jpg"
              name="David Vigo Michel"
              txt="Founder & CEO"
              role="The MD of Dynamic Consulting, he has been the captain of his team.. "
            />
            <Profile
              img="assets/images/team2.jpg"
              name="Rebecca Garza"
              txt="Administrator & Business Developer"
              role="She is an Dynamic Consulting  technical adviser & business"
            />
            <Profile
              img="assets/images/team3.jpg"
              name="Stepthen Adams"
              txt="Chief Finance Officer"
              role="He managed to bring the company as well as DynamicConsulting"
            />
            <Profile
              img="assets/images/team4.jpg"
              name="Ben Johnson"
              txt="Chief Marketing Officer"
              role="Community Head and has worked tirelessly to help the needy."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
