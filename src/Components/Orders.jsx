import { useEffect,useState } from "react";
import "./CSS/Orders.css";
import { Link, useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  //const [usedata, setUser] = useState({});
  //const [orderData, setOrder] = useState({});
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    let date = new Date();
    setData({ ...data, ["OrderedTime"]: date.toLocaleTimeString(), ["OrderedDate"]: date.toLocaleDateString() });
  }, []);


  const placeOrder = async () => {
    fetch("http://localhost:8000/orders",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data),
    }).then(alert("Order Placed Successfully"))
    .then(navigate("/"))
    

    console.log(JSON.stringify(data));
  }

  const getUser = async (username) => {
    const user = await fetch(`http://localhost:8000/users/${username}`);
    const user_json = await user.json();
    console.log(user_json["name"]);
  }
  const orderPlace = () => {
    // let d = new Date();
    // setData({...data,["OrderedTime"]:d.toLocaleTimeString(),["OrderedDate"]:d.toLocaleDateString()})
    placeOrder();
    getUser(localStorage.getItem("username"));
  }
  return (
    <div className="background">
      <div className="container">
        <div className="topic">
          <Link to='/'><button><h1 className="cross">✖</h1></button></Link>
          <h1 className="top1">Order A Cake</h1>
          <p className="top2">You can design your own cake, Exactly as you would like it!</p>

          <div className="con form-con">
            <form method="post">
              <div className="input-container">
                <div className="row">
                  <div className="col">
                    <div className="input-group">
                      <label htmlFor="shape" className="label shapeL">Shape</label><br />
                      <input type="text" id="shape" className="input shape" name="shape" placeholder="Round" onChange={(e) => inputHandler(e)}/>
                    </div>
                  </div>
                  <div className="col">
                    <div className="input-group">
                      <label htmlFor="level" className="label levelL">Level</label><br />
                      <input type="text" id="level" name="level" className="input level" placeholder="1" onChange={(e) => inputHandler(e)}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="input-group">
                      <label htmlFor="size" className="label sizeL">Size</label><br />
                      <input type="text" id="size" name="size" className="input size" placeholder="4 inches" onChange={(e) => inputHandler(e)} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="input-group">
                      <label htmlFor="flavour" className="label flavourL">Flavour</label><br />
                      <input type="text" id="flavour" name="flavour" className="input flavour" placeholder="cholocate"  onChange={(e) => inputHandler(e)}/></div>
                  </div>
                </div>

              </div>
              <div className="details">
                <input type="text" className="inp name" name="customerName" placeholder="Your Name" onChange={(e) => inputHandler(e)} /><br />
                <input type="email" className="inp email1" name="customerEmail" placeholder="Your Email" onChange={(e) => inputHandler(e)} /><br />
                <input type="text" className="inp number" name="customerContact" placeholder="Phone Number" onChange={(e) => inputHandler(e)} /><br />
                <textarea className="inp add-txt" placeholder="Address" name="customerAddress" rows="6" onChange={(e) => inputHandler(e)}></textarea>
              </div>
              <div className="order-btn">
                <input type="button" className="o-btn" value="Order" onClick={() => { orderPlace() }} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders