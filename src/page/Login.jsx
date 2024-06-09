import React, { useEffect, useState } from "react";
import { validateEmail} from "../utills/validation"
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useAuth } from "../Context/AuthContext";
function Login() {
  const { login } = useAuth();
  const navigate=useNavigate()
  const [shouldSubmit,setShoulSubmit]=useState(false)
  const [formdata, setFormData] = useState({
    email: "",
    password: ""
  });
  


  const handleChange = (e) => {
    // const newPassword = event.target.value;
    const { name,value } = e.target;
    // if(name=="password"){
    //     setPassword(value)
    // }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formdata){
        setShoulSubmit(true)
    }
  };
  useEffect(()=>{
    const submitForm = async () => {
        try {
          const response = await fetch('https://wonderon-backend.vercel.app/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
          });
  
          const data = await response.json();
          
          if(response.ok){
            login(data.token)
            navigate("/")
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
      if (shouldSubmit) {
        submitForm(); 
        setShoulSubmit(false); 
      }

  },[shouldSubmit,navigate])

  return (
        <div className="bg-gray-50 m-auto rounded-xl p-4 sm:p-6 md:p-8 max-w-lg">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Login Form
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-400">
                !
              </span>
            </h2>
          </div>
          <form className="mt-4">
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                name="email"
                required
                value={formdata.email}
                className="w-full bg-gray-100 border-0 text-gray-500 p-2 rounded"
              />
              <input
                name="password"
                type="text"
                placeholder="Enter your Password"
                value={formdata.password}
                onChange={handleChange}
                className="w-full bg-gray-100 border-0 text-gray-500 p-2 rounded"
              />     
              <button
              onClick={handleSubmit}
              className={`mt-8 w-full bg-gradient-to-r from-blue-400 to-blue-900 text-white p-2 rounded`}
            >
            Submit
              {/* {dataState.loading ? <Spinner /> : "Submit"} */}
            </button>
            </div>
            
          </form>
          <div className="pt-6">
            <p className="text-gray-500 text-sm sm:text-md">
              If not a user? <Link to="/signup" className="text-blue-400">Sign Up</Link>
            </p>
          </div>
        </div>
   
  );
}

export default Login;
