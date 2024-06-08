import React, { useEffect, useState } from "react";
import {validateCriteria, validateEmail, validateName, validatePhoneNumber} from "../utills/validation"
import { Link } from "react-router-dom";
function Signup() {
  const [password, setPassword] = useState("");
  const [shouldSubmit,setShoulSubmit]=useState(false)
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  
  const validatePassword = (password) => {
    for (const criteria of validateCriteria) {
        
      if (!criteria.regex.test(password)) {
        console.log("message",criteria.message)
        return criteria.message;
      }
    }
    return "";
  };

  const handleChange = (e) => {
    // const newPassword = event.target.value;
    const { name,value } = e.target;
    console.log("name",name)
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
    console.log("submit")
    e.preventDefault();
    if (!validateEmail(formdata.email)) {
    //   toast.success('Please enter a valid email address.', {
    //     position: toast.POSITION_CENTER,
    //     className: 'custom-toast',
    //     bodyClassName: 'custom-toast-body',
    // });
    alert(email)
      return;
    }
    if (!validateName(formdata.name)) {
    //   toast.success("Please enter a valid name.", {
    //     position: toast.POSITION_CENTER,
    //     className: 'custom-toast',
    //     bodyClassName: 'custom-toast-body',
    // });
    alert(name)
      return;
    }
    if(formdata){
        setShoulSubmit(true)
    }
  };

  useEffect(()=>{
    const submitForm = async () => {
        try {
          const response = await fetch('http://localhost:5555/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
          });
  
          const data = await response.json();
        console.log("data",data)
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
      if (shouldSubmit) {
        submitForm();
        setShoulSubmit(false); // Reset the state
      }

  },[shouldSubmit])

  console.log("form",formdata)
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto py-10 sm:py-20 lg:py-32 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-32">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-7">
            Join the Experts and Discover the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-400">
              MERN Way
            </span>{" "}
            to Full-Stack Mastery!
          </h1>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 sm:p-6 md:p-8 max-w-lg">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Registration Form
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-400">
                !
              </span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-md">
              Join us to master the MERN stack and unleash your potential in
              full-stack development!
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
              className={`mt-8 w-full bg-gradient-to-r from-red-400 to-pink-400 text-white p-2 rounded`}
            >
            Submit
              {/* {dataState.loading ? <Spinner /> : "Submit"} */}
            </button>
            </div>
            
          </form>
          <div className="pt-6">
            <p className="text-gray-500 text-sm sm:text-md">
              Already a user? <Link to="#" className="text-red-400">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
