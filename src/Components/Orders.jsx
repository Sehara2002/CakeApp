import "./CSS/Orders.css";

const Orders = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="topic">
          <h1 className="cross" >✖</h1>
          <h1 className="top1">Order A Cake</h1>
          <p className="top2">You can design your own cake, Exactly as you would like it!</p>
          <div className="container form-container">
            <form action="" method="post">
              <div className="input-container">
                <div className="row">
                  <div className="col">
                    <div className="input-group">
                      <label htmlFor="shape" className="label shapeL">Shape</label><br/>
                      <input type="text" id="shape" className="input shape" placeholder="Round" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="input-group">
                      <label htmlFor="level" className="label levelL">Level</label><br/>
                      <input type="text" id="level" className="input level" placeholder="1" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="input-group">
                      <label htmlFor="size" className="label sizeL">Size</label><br/>
                      <input type="text" id="size" className="input size" placeholder="4 inches" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="input-group">
                      <label htmlFor="flavour" className="label flavourL">Flavour</label><br/>
                      <input type="text" id="flavour" className="input flavour" placeholder="cholocate" /></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="input-group">
                      <button className="btn btn1">PickUp</button>
                    </div>
                  </div>
                  <div className="col">
                    <div className="input-group">
                      <button className="btn btn2">Delivery</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details">
                <input type="text" className="inp name" placeholder="Your Name" /><br/>
                <input type="email" className="inp email" placeholder="Your Email"/><br/>
                <input type="text" className="inp number" placeholder="Phone Number"/><br/>
                <textarea className="inp add-txt" placeholder="Address" rows="6" ></textarea>
              </div>
              <div className="order-btn">
                <button className="o-btn">Order</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders