
import "./CSS/Banner.css"
import "./CSS/Container.css"
import img1 from "./Assets/Images/img1.jpeg"
import img2 from "./Assets/Images/img2.jpeg"
import img3 from "./Assets/Images/img3.jpeg"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const Banner = () => {

  const [img,setImg] = useState();
  let images = [img1,img2,img3];
  const [count,setCount] = useState(0);
  useEffect(()=>{
    setTimeout(() => {
      setCount((count)=>{
        if(count>=3){
          setCount(0);
        }
        return count+1});
    }, 2000);
  })

  return (
    <div className='MainContainer'>
        <div className="row">
          <div className="col-sm-6">
            <div className="container name-container">
              <p className="text1">
                Cake
              </p>
              <h1 className="text2">
                Odyssey
              </h1>
            </div>
            <div className="text-container">
              <p className="para1">
              Soft and moist, with layers so fine, Aslice of cake, a moment devine, whipped cream swirls and berries bright, Atreat so sweet, it’s pure delight.    
              </p>
            </div>

            <div className="btn-container">
              <Link to="/cakes">
              <button className="btn-order">
                Order Now
              </button>
              </Link>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="container img-container">
                <img src={img1} alt="" className={`banner-img ${(count===1)?"display":""}`}/>
                <img src={img2} alt="" className={`banner-img ${(count===2)?"display":""}`}/>
                <img src={img3} alt="" className={`banner-img ${(count===3)?"display":""}`}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner