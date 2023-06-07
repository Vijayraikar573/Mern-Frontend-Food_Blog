import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import "../styles/Login.css"
import axios from "axios"

const Login = () => {
  let [email,setEmail]=useState("")
  let [pass,setPass]=useState("")

  const navigate=useNavigate()

  const Submit=(e)=>{
    e.preventDefault()
    let data={email,pass}
    axios.post('http://localhost:4000/Login',data)
    .then((res)=>{
      if(res.data.status=== 200){
        navigate('/home')
      }
      else{
        alert(res.data.message)
      }
    })
  }
  return (
    <div className="Login">
      {/* <div className='container'>
        <div className='carousel'>
            <div className="image"><span>simple</span></div>
            <div className="image"><span>carousel</span></div>
            <div className="image"><span>animation</span></div>
            <div className="image"><span>with</span></div>
            <div className="image"><span>beautiful</span></div>
            <div className="image"><span>follow</span></div>

        </div>
      </div> */}
        <h1 className="food1">Food Blog</h1>
        <div className="login">

            <div className="imgo">
            <img src="images/uplab.png" alt=""/>
                </div>

                <div className="W">

                <div className="L1">
                    <div className="L2">
                    <p>New User?</p>
                    </div>

                    <div className="L3">
                    <Link to='/Signin'>Sign up</Link>
                    </div>

                    </div>

                    <div className="A">
                        <h1>welcome back!</h1>
                        <p className="grey">Login to continue</p>
                        </div>
                        <div className="detail">
                <form action="" onSubmit={Submit}>
                    
                <div className="email">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <input type="text" placeholder="enter the email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className="pass">
                <i className="fa fa-unlock-alt" aria-hidden="false"></i>
                <input type="text" placeholder="enter the password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                </div>

                <div className="btn">
                    <button>LOGIN</button>
                    </div>

                </form>
            </div>
                        
                        </div>

                
    </div>
    </div>
  )
}

export default Login;