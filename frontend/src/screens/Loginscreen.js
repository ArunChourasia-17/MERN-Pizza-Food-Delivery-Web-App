
import React, { useState, useEffect } from "react";
import {useDispatch , useSelector} from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
export default function Loginscreen() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector(state=>state.loginUserReducer);
  const {loading , error} = loginstate
  const dispatch = useDispatch()

  userEffect(() => {

    if(localStorage.getItem('currentUser'))
    {
      window.location.href='/'
    }

  }, [])

  function login(){
    const user={email , password}
    dispatch(loginUser(user))
  }

  return (
    <div>
        <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
                <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Login</h2>

                {loading && (<loading/>)}
                {error && (<Error error='Invalid Credentials'/>)}
                
                <div>
                    <input required type="text" placeholder="name" className="form-control" value={name} onChange={(e)=>{setname(e.target.value)}} />
                    <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=>{setemail(e.target.value)}} />
                    <input required type="text" placeholder="password" className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                    <input required type="text" placeholder="confirm password" className="form-control" value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}} />
                    <button onClick={login} className="btn mt-3 mb-3">LOGIN</button>
                    <br/>
                    <a style={{color:'black'}} href="/register" className="mt-2">Click Here to Register</a>
                </div>

            </div>
        </div>

        <div></div>

    </div>
)
}