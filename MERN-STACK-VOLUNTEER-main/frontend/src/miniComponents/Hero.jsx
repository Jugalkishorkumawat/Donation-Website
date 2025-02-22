import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Basti Ki Pathshalas</h1>
        <h4>Lighting the Path to Change with Basti Ki Pathshala Foundation</h4>
        <p>
        Join us in our mission to break the barriers of education in underserved communities. With your support, we can provide quality education to children living in slum areas, empowering them with the knowledge and skills they need to build a brighter future. Together, let’s make a difference. Take action today and be a part of the change!
        </p>
        <Link to={"/donate"} className="btn">
          Donate Now
        </Link>
      </div>
      <div className="banner">
        <img src="/cover-for-volunteer.png
        " alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
