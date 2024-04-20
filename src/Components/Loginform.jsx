import "./CSS/Loginform.css"

const Loginform = () => {
  return (
    <div>
        <form>
          <div >
            <input 
              type="text"
              id="username"
              name="username"
              placeholder="username"
              className="text_input"

            />
          </div>
          <div >
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className="text_input"

            />
          </div>
          <input
            type="submit"
            value="LOGIN"
            className="btn"

          />
        </form>
    </div>
  )
}

export default Loginform