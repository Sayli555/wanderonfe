import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import {validatePassword,validateCriteria, validateEmail, validateName} from "../utills/validation"
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  const [shouldSubmit,setShoulSubmit]=useState(false)
  const [errors, setErrors] = useState("");
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    const { name,value } = e.target;
    if(name=="password"){
        setPassword(value)
        setErrors(validatePassword(value));
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formdata.email)) {
      toast.info('Please enter a valid email address.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
      return;
    }
    if (!validateName(formdata.name)) {
      toast.info("Please enter a valid name.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
      return;
    }
    if(formdata){
        setShoulSubmit(true)
    }
  };

  useEffect(()=>{
    const submitForm = async () => {
        try {
          const response = await fetch('https://wonderon-backend.vercel.app/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
          });
          const data = await response.json();
          if(response.ok){
            navigate("/")
          }
          else{
            toast.success(data.message, {
              position: toast.POSITION_CENTER,
              className: 'custom-toast',
              bodyClassName: 'custom-toast-body',
          });
          }
          
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
      if (shouldSubmit) {
        submitForm();
        setShoulSubmit(false); 
      }

  },[shouldSubmit])

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto py-10 sm:py-20 lg:py-32 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-32">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-7">
            Sign Up For More Details of {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900">
              Trip
            </span>
            
          </h1>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 sm:p-6 md:p-8 max-w-lg">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Registration Form
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900">
                !
              </span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-md">
              Register For Explore More details
            </p>
          </div>
          <form className="mt-4">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter your Name"
                onChange={handleChange}
                name="name"
                value={formdata.name}
                required
                className="w-full bg-gray-100 border-0 text-gray-500 p-2 rounded"
              />
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
               {errors && (
            <p className="text-red-500 text-sm mt-1">{errors}</p>
          )}
              <ul className="mt-4 space-y-2">
                {formdata.password &&
                  validateCriteria.map((criteria, index) => (
                    <li
                      key={index}
                      className={`text-sm ${
                        criteria.regex.test(password)
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                     * {criteria.message}
                    </li>
                  ))}
              </ul>
              <button
              onClick={handleSubmit}
              className={`mt-8 w-full bg-gradient-to-r from-blue-400 to-blue-900 text-white p-2 rounded`}
            >
              Submit
            </button>
            </div>
            
          </form>
          <div className="pt-6">
            <p className="text-gray-500 text-sm sm:text-md">
              Already a user? <Link to="/login" className="text-blue-400">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
