import React from "react";
import AboutCss from "../styles/css modules/about.module.css";
function About() {
  return (
    <div className={AboutCss.container}>
      <div className={AboutCss.heading}>
        <p>ABOUT US</p>
      </div>

      <div className={AboutCss.innerContainer}>
        <div className={AboutCss.content}>
          <h1><b>Who We Are And What We Do</b></h1>
          <h3>Trainers Who Care</h3>
          <p>
            Our trainers take your fitness goals seriously. We understand that
            losing weight and gaining muscle can be challenging, and our goal is
            to help you overcome hurdles and reach your goals. We analyze your
            body type, BMI, and metabolism, to create your individualized
            fitness plan.
          </p>
          <h3>Training Expertise</h3>
          <p>
            With years of success and experience, we are capable of analyzing
            your body and creating a fitness plan that will help you reach your
            goals. We will show you the best equipment to use and will work with
            you to keep you on track and motivated to reach your goals.
          </p>
          <h3 >Your Success Is Our Goal</h3>
          <p>
            We understand that adapting new fitness habits is difficult and
            often fails. Our goal is to change your view on fitness, so that it
            becomes part of who you are and your lifestyle. We strongly believe
            that if you practice healthy habits, you will be able to obtain a
            healthy lifestyle.
          </p>
        </div>
        <img src="../img/about.png" alt="" srcset="" />

      </div>
    </div>
  );
}

export default About;
