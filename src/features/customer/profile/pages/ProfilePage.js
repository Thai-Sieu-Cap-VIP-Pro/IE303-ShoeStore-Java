import React from "react";
import HomeHeader from "../../home/components/HomeHeader";
import HomeFooter from "../../home/components/HomeFooter";
import ProfileBody from "../components/ProfileBody";
import "./style.css";

function ContactPage() {
  return (
    <>
      <div>
        <HomeHeader />
      </div>
      <div>
        <ProfileBody />
      </div>
      <div>
        <HomeFooter />
      </div>
    </>
  );
}

export default ContactPage;
