import React, { use, useState } from 'react'
import { useDispatch} from 'react-redux';
import { useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [username, setUsername]= useState("");
  const [dob, setDob]= useState("");
  const [mobilenumber, setMobilenumber]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]  = useState("");
  const [qualification, setQualification]= useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:8081/users",{
        username,dob,mobilenumber,email,password,qualification,role
      });
      dispatch({type: "REGISTER_SUCCESS", payload: res.data});
      navigate ("/Home");
    }catch{
      console.error("Registration failed");      
    }

  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-lime-100'>
      <form onSubmit={handleRegister} className='bg-cyan-200 p-6 rounded shadow w-80'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Register form</h2>

        <input placeholder='Enter Username' className='border p-2 w-full mb-3 rounded ' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input placeholder='09/11/2000' className='border p-2 w-full mb-3 rounded' type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        <input placeholder='0123456789' className='border p-2 w-full mb-3 rounded' type="number" value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} />
        <input placeholder='john@mail.com' className='border p-2 w-full mb-3 rounded' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder='******' className='border p-2 w-full mb-3 rounded' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input placeholder='B.Sc/M.Sc' className='border p-2 w-full mb-3 rounded' type="text" value={qualification} onChange={(e) => setQualification(e.target.value)} />
        <select className='border p-2 w-full mb-3 rounded' value={role} onChange={(e) => setRole(e.target.value)} name="" id="">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type='submit' className='bg-green-700 cursor-pointer font-bold text-white px-4 py-2 w-full hover:bg-blue-500 rounded'>Register</button>
        <p className='text-sm mt-3'>Already have an account? <Link className='text-blue-600 font-bold hover:text-violet-600' to="/login">Login</Link></p>
      </form>

    </div>
  )
}

export default Register