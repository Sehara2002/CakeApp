import FooterComponent from "./FooterComponent";
import Navbar from "./Navbar";
import "./CSS/About.css";
import img1 from "./Assets/Images/img1.jpeg"

const About = () => {
  return (
    <div>
      <Navbar activePage="about" />
      <div className="about-container">
        <h1 className="main-topic-about">About</h1>
        <div className="p1">
          <p>
            Since 1979 with years of experience and commitment to our customers,
            a goal that has remained a constant is to strive for a synergy
            between traditions from our humble beginnings, and all that we have
            learnt in the years gone by. This formula, along with our
            uncompromising quality and taste, is what has strongly grounded us
            as an indisputable brand name in the food and beverage industry.
            <br /> <br />
            Fab is renowned for signature cakes and gateaux. This trademark can
            be traced back to 1979 when Chandra Madanayake launched her
            confectionary store in her front garden beside Galle Road. The
            outlet remains present to this day, still teeming with ever-eager
            customers.
            <br /> <br />
            In just over five years, subsequent to the demand that was
            generated, we were able to restructure and change our course, and
            specialize in the pastry business as well.
          </p>
        </div>
      </div>
      <div className="about-image">
        <img src={img1} alt="" />
      </div>
      
      <FooterComponent activePage="about" />
    </div>
  );
};

export default About;
