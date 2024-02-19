import React , {useState} from 'react'
import './Style.css'
import { Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const [input,setInput]=useState({
 
    email:"",
    password:"",
    mobile:"",
  })
  const handleLogin =(e)=>{
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"))
    if(input.email === loggeduser.email && input.password === loggeduser.password)
    {
      localStorage.setItem("loggedin",true)
navigate("/Home")
    } else{
      alert("wrong email or password")
    }
  }
  return (
<>
        <div className="container-fluid bnmb">
          <div className="container">
            <form action="" onSubmit={handleLogin}>

            <div className="row d-flex justify-content-center">
              <div className="col-md-6 pt-5">
               <p className='tyu'>Login</p>
                <label htmlFor="Username" className='pt-3' >Username : </label>
                <input  name="email" value={input.email} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} type="text" className='oppo py-2' placeholder='Enter your email or username' style={{width:'100%'}} id="" />
                <label htmlFor="password" className='pt-3'>Password :</label>
                <input name="password" value={input.password} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} type="password" className='oppo py-2' placeholder='Enter your password' style={{width:'100%'}} id="" />
                <div className="row pt-4">
                  <div className="col-md-12">
                <Link to="" className='newwe mx-auto'>Forget password ?</Link>

                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-md-12  pt-3">
                <button  className='mnmn bg-info text-white'>Log In</button>

                  </div>
                </div>
                <div className="row py-4 text-center">
                  <div className="col-md-12">

                <Link className='asdf' to='/Signin' >Create new account</Link>
                  </div>
                </div>

              </div>
            </div>
            </form>
          </div>
        </div>
</>
    )
}

export default Login