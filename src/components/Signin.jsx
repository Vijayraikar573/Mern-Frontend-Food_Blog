import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-solod-svg-icons";
import '../styles/Signin.css'
import axios from 'axios';

const Signin = () => {
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[pass, setPass]=useState("");
    const[confirm, setConfirm]=useState("");

    const navigate=useNavigate();

    const Submit=(e)=>{
        e.preventDefault()
        console.log(name,email,pass,confirm);
        let data={name,email,pass,confirm}

        if(name && email && pass && (pass === confirm)){
            axios.post('http://localhost:4000/Signin',data).then((res)=>{
                alert(res.data.message)
                // alert("suceessful signed up")
                navigate('/')
            })
        }else{
            alert("invalid credentials");
        }

    }
   
  return (
    <div className="Signup">
       <h1 className="food">Food Blog</h1>
       <div className="info">


                <div className="check">
                    <p className="Al">Already user?</p>
                    <Link className="Lo" to='/Login'>Login</Link>
                    </div>

                    <div className="Wel">
                        <h1>welcome back!</h1>
                        <p className="grey">Login to continue</p>
                        </div>

                <div className="detail">
                    <div className="confirm1">

                <form action="" onSubmit={Submit}>

                    <div className="name">
                    {/* <FontAwesomeIcon icon={}/> */}
                    <i class="fa fa-user" aria-hidden="true"></i>
                <input type="text" placeholder="enter the name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>

                 <div className="email1">
                 <i class="fa fa-envelope" aria-hidden="true"></i>
                <input type="text" placeholder="enter the email_id" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div className="pass1">
                <i className="fa fa-unlock-alt" aria-hidden="false"></i>
                <input type="text" placeholder="enter the password" value={pass} onChange={(e)=>setPass(e.target.value)} />
                </div>

                <div className="confirm">
                <i className="fa fa-unlock-alt" aria-hidden="false"></i>
                <input type="text" placeholder="enter the confirm password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} />
                </div>

               

                <div className="btn">
                    <button>SIGNUP</button>
                    </div>

                </form>
                </div>
                <div className="imgl">
            <img src="images/uplab1.png" alt=""/>
                </div>

            </div>
    </div>
        </div>
  )
}

export default Signin;