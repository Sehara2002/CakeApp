import { useEffect, useState } from "react";
import "./CSS/SpecialEvents.css";
import img1 from "./Assets/Images/img2.jpeg";
import weddingcake from "./Assets/Images/weddingcake.jpeg";
import minicake from "./Assets/Images/minicake.jpeg";
import birthdaycake from "./Assets/Images/birthdaycake.jpeg";
import gradcake from "./Assets/Images/gradcake.jpeg";
import gencake from "./Assets/Images/gencake.jpeg";
import cupcake from "./Assets/Images/cupcake.jpeg";
import cakepop from "./Assets/Images/cakepop.jpeg";
import anvcake from "./Assets/Images/anvcake.jpeg";
import specialcake from "./Assets/Images/specialcake.jpeg";
import { SlArrowRightCircle,SlArrowLeftCircle } from "react-icons/sl";


const SpecialEvents = () => {
  const [slide, setSlide] = useState(0);

  useEffect(()=>{
    setTimeout(() => {
        if(slide>=3){
          setSlide(0);
        }else{
            setSlide(slide+1);
        }
        console.log(slide);
        
    }, 7000);
  });
  const next = () => {
    if(slide>=3){
        setSlide(1);
    }else{
        setSlide(slide + 1);
    }
    console.log(slide);
  };

  const prev = () => {
    if(slide<=0){
        setSlide(3);
    }else{
        setSlide(slide - 1);
    }
    console.log(slide);
  };

  return (
    <div className="">
      <h1 className="main-topic">Special Events & Festivals</h1>
      <div className="Special-Events container">
        <div className="row">
          <div className="arrow"onClick={prev}>
            <h1 className="prev"><SlArrowLeftCircle /></h1>
          </div>
          <div className="container">
          <div className={`container-slides ${slide===1?"display-slide":""}`}>
            <div className="row">
              <div className="card">
                <div className="img"><img src={weddingcake} alt="" /></div>
                <div className="title">Wedding Cakes</div>
              </div>
              <div className="card">
                <div className="img"><img src={minicake} alt="" /></div>
                <div className="title">Mini Cakes</div>
              </div>
              <div className="card">
                <div className="img"><img src={birthdaycake} alt="" /></div>
                <div className="title">Birthday Cakes</div>
              </div>
            </div>
          </div>

          <div className={`container-slides ${slide===2?"display-slide":""}`}>
            <div className="row">
              <div className="card">
                <div className="img"><img src={gradcake} alt="" /></div>
                <div className="title">Graduation Cakes</div>
              </div>
              <div className="card">
                <div className="img"><img src={gencake} alt="" /></div>
                <div className="title">Gender Reveal Cakes</div>
              </div>
              <div className="card">
                <div className="img"><img src={cupcake} alt="" /></div>
                <div className="title">Cupcakes</div>
              </div>
            </div>
          </div>

          <div className={`container-slides ${slide===3?"display-slide":""}`}>
            <div className="row">
              <div className="card">
                <div className="img">
                    <img src={cakepop} alt="" />
                </div>
                <div className="title">Cake Pops</div>
              </div>
              <div className="card">
                <div className="img"><img src={anvcake} alt="" /></div>
                <div className="title">Anniversary Cakes</div>
              </div>
              <div className="card">
                <div className="img"><img src={specialcake} alt="" /></div>
                <div className="title">Special Occasion Cakes</div>
              </div>
            </div>
          </div>
          </div>

          <div className = "arrow" onClick={next}>
            <h1 className="next"><SlArrowRightCircle /></h1>
          </div>
        </div>
        </div>
        <div className="container-dots">
            <div className="row">
                <div className={`dot ${slide===1?"active-dot":""}`}></div>
                <div className={`dot ${slide===2?"active-dot":""}`}></div>
                <div className={`dot ${slide===3?"active-dot":""}`}></div>
            </div>
        </div>



        <div className="story">
            <h1>Story</h1>
            <p>
            Since 1979 with years of experience and commitment to our customers, a goal that has remained a constant is to strive for a synergy between traditions from our humble beginnings, and all that we have learnt in the years gone by. This formula, along with our uncompromising quality and taste, is what has strongly grounded us as an indisputable brand name in the food and beverage industry.
Fab is renowned for signature cakes and gateaux. This trademark can be traced back to 1979 when Chandra Madanayake launched her confectionary store in her front garden beside Galle Road. The outlet remains present to this day, still teeming with ever-eager customers. 
In just over five years, subsequent to the demand that was generated, we were able to restructure and change our course, and specialize in the pastry business as well.
<br/><br/><br/><br/><br/><br/>
            </p>
        </div>

    </div>
  );
};

export default SpecialEvents;
