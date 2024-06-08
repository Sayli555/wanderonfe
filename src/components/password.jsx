import React, { useState } from 'react';

const PasswordForm = () => {
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const validateCriteria = [
    { regex: /.{8,}/, message: 'Password must be at least 8 characters long' },
    { regex: /[a-z]/, message: 'Password must contain at least one lowercase letter' },
    { regex: /[A-Z]/, message: 'Password must contain at least one uppercase letter' },
    { regex: /\d/, message: 'Password must contain at least one number' },
    { regex: /[@$!%*?&#]/, message: 'Password must contain at least one special character' },
  ];

  const validatePassword = (password) => {
    for (const criteria of validateCriteria) {
      if (!criteria.regex.test(password)) {
        return criteria.message;
      }
    }
    return '';
  };

  const handleChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setErrors(validatePassword(newPassword));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errors) {
      console.log({ password });
    }
  };

  return (
    <div className="w-96 mx-auto mt-12">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={`form-control ${errors ? 'border-red-500' : ''}`}>
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
          />
          {errors && (
            <p className="text-red-500 text-sm mt-1">{errors}</p>
          )}
        </div>
        <ul className="mt-4 space-y-2">
          {password && validateCriteria.map((criteria, index) => (
            <li
              key={index}
              className={`text-sm ${criteria.regex.test(password) ? 'text-green-500' : 'text-red-500'}`}
            >
              {criteria.message}
            </li>
          ))}
        </ul>
        <button type="submit" className="w-full p-2 mt-4 bg-teal-500 text-white rounded hover:bg-teal-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordForm;
