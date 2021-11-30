import React, {useState} from 'react'
import "./Form.css"

const Form = () => {

    const [isLogin, setIsLogin] = useState(false)

    const changePortal = ()=>{
        setIsLogin(!isLogin)
    }

    return (
      <div className="form-container">
        <div className="form-heading">
          <h2>{isLogin ? "Login" : "Register"}</h2>
        </div>
        <div className="form-content">
          <form>
            <div className="inputs">
              <div className="input">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
              </div>
              {!isLogin && (
                <div className="input">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="text" />
                </div>
              )}
              <div className="input">
                <label htmlFor="password">Password</label>
                <input id="password" type="text" />
              </div>
            </div>
            <div className="button">
              <button type="submit">{isLogin ? "Login" : "Register"}</button>
            </div>
          </form>
        </div>
        <div className="change-portal">
          <p>
            {isLogin ? "Don't have an account ?" : "Already have an account ?"}{" "}
            <button onClick={changePortal}>
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
        <div className="stripe-left"></div>
        <div className="stripe-right"></div>
      </div>
    );
}

export default Form
