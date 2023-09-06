import React from 'react'
import { Link } from 'react-router-dom';
import "./Loginn.css"
import { useNavigate } from 'react-router-dom';
function Loginn () {
  const navigate = useNavigate();
  return (
    <>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-info" id="b-img" >
        <div className="border border-3 border-danger p-5 login-box">
        <form>
            <h2 className="text-center">Login</h2>
            <div className="mb-3">
            <label htmlFor="Email">Email</label>
            <input type="email" placeholder="Enter Your Email" name="Email" className="form-control"/>
            </div>
            <div className="mb-3">
            <label htmlFor="Password">Password</label>
            <input type="password" placeholder="Enter Your Password" name="password" className="form-control"/>
            </div>
            <div className="mb-3">
            <input type="checkbox"/>
            <label htmlFor="Checkbox" className="ms-2">
                Remember Your Password
            </label>
            </div>
            <br/>
            <div className="d-grid">
            <button className="btn btn-danger "onClick={()=>navigate("/home")}>Login</button>
            </div>
        </form>
        <p className="abc p-3">Don't have an account?
        <Link to="/signup">SignUp</Link> </p>
        
        </div>
    </div>
    </>
  )
}

export default Loginn;