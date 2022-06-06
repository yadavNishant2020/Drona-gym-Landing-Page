import React from "react";
import Servicecss from "../styles/css modules/services.module.css";

function Services() {
  return (
    <div className={Servicecss.main}>
      <h1 className={Servicecss.heading}>Services</h1>
      <div className={Servicecss.container}>
        <div className={Servicecss.item}>
          <img src="../img/sprt.png" alt="" />
          <p>
            Every member gets a free, personalized Get Started Plan when they
            join. Our friendly, professional staff is trained to help you along
            your fitness journey, no matter how much support you need.
          </p>
        </div>
        <div className={Servicecss.item}>
          <img src="../img/tt.png" alt="" />
          <p>
            Getting to a healthier place is about more than going to the gym.
            That’s why we offer personal training and classes when you’re here,
            and the right tools to keep you on track when you’re not.
          </p>
        </div>
        <div className={Servicecss.item}>
          <img src="../img/time.png" alt="" />
          <p>
            24/7 access to more than 4,500 locations worldwide and nearly 100 in
            India . You’re joining the most convenient gym on the planet!
          </p>
        </div>
        <div className={Servicecss.item}>
          <img src="../img/community.png" alt="" />
          <p>
            You’re not just joining a gym. You’re joining a supportive community
            of like-minded people who are here to give you the encouragement you
            need.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
