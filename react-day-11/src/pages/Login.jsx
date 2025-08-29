import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");

  const error = useSelector(LoginError => LoginError.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleLogin = async (e) => {
    e.preventDefault();

    try{
      const res = await axios.get("http://localhost:8081/users");

      const user = res.data.find(data => data.email === email && data.password === password);
      if(user){
        dispatch({type: "LOGIN_SUCCESS", payload: user});
        navigate("/Home");
      }else{
        dispatch({type: "LOGIN_ERROR", payload:"Invalid username(or)password"});
      }
    }catch{
      dispatch({type: "LOGIN_ERROR", payload: "Server Error"});
    }
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-lime-100'>
      <form onSubmit={handleLogin} className='bg-sky-200 p-6 rounded shadow w-80'>
        <h2 className='text-2xl font-bold text-center mb-4'>Login Form</h2>
        <input placeholder='jashon@gmail.com' className='border p-2 w-full mb-4'  type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder='******'className='border p-2 w-full mb-4'  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        {error && <p className='text-red-600 text-sm mb-2'>{error}</p>}
        <button className='bg-indigo-600 rounded p-2 mb-2 font-bold cursor-pointer items-center justify-center w-full text-white hover:bg-green-600'>Login</button>
        <p className='text-sm mt-3'>Don't have an account? <Link to="/Register" className='text-lime-900 font-bold hover:text-blue-500'>Register</Link></p>
      </form>

    </div>
  )
}

export default Login