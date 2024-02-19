import React, { useState } from 'react'
import './Style.css'
import { Link, useNavigate } from 'react-router-dom'
const Signin = () => {
  const navigate =useNavigate();
  const [input,setInput]=useState({
    fname:"",
    lname:"",
    email:"",
    password:"",
    mobile:"",
  })

  const handleSubmit=(e) =>{
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(input));
    navigate("/Login")
    alert("succesfull")
  };
  return (
    <>
    <div className="container-fluid bhyu">
      <div className="container py-5 ">
                <form action="" onSubmit={handleSubmit}>
        <div className="row py-3 d-flex justify-content-center">
          <div className="col-md-6">
            <div className="row">
              <h1 className='text-dark pb-4'>Sign Up</h1>
              <div className="col-md-6">

              <label htmlFor="">First Name :</label>
    <input name="fname" value={input.fname} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}  type="text"  className='oppo' id="" style={{width:'100%'}} placeholder='First Name' />
    
              </div>
              <div className="col-md-6">
              <label htmlFor="">Last Name :</label>
    <input name="lname" value={input.lname} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} type="text" className='oppo' style={{width:'100%'}} id="" placeholder='Last Name' />
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-3 d-flex justify-content-center">
          <div className="col-md-6">
<label htmlFor="">Email :</label>
<input name="email" value={input.email} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} type="text" className='oppo' placeholder='Enter Your Email' style={{width:'100%'}}  />
          </div>
        </div>
<div className="row pb-3 d-flex justify-content-center">
  <div className="col-md-6">
    <label htmlFor="">Mobile Number :</label>
    <input name="mobile" value={input.mobile} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} type="text" className='oppo' placeholder='Mobile Number' style={{width:'100%'}}  id="" />
  </div>
</div>
<div className="row pb-3 d-flex justify-content-center">
  <div className="col-md-6">
    <label htmlFor="">Password :</label>
    <input name="password" value={input.password} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} type="password" className='oppo' style={{width:'100%'}} placeholder='Enter Your Password' />
  </div>
</div>
{/* <div className="row pb-3 d-flex justify-content-center">
  <div className="col-md-6">
  <label htmlFor="">Confirm Password :</label>
  <input type="password" className='oppo' style={{width:'100%'}}  placeholder='Re - Enter Your Password' />
  </div>
</div> */}
<div className="row">
  <div className="col-md-12 py-3 d-flex justify-content-center">
  <p><input type="checkbox" className='chec' />   I accept the Terms of Uses & Privacy Policy </p>
</div>
  </div>
<div className="row ">

<div className="col-md-12 d-flex justify-content-center">

    <button className='vvv bg-info'>Sign Up</button>
</div>
</div>
</form>
<div className="row py-3">
  <div className="col-md-12 d-flex justify-content-center">
  <p>  Already Have An Account? </p><Link to="/Login">Login here</Link>
  </div>
</div>
      </div>
    </div>
    </>
  )
}

export default Signin