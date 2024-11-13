import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hostal.css';

function Hostal() {
  // Initialize the navigate hook
  const navigate = useNavigate();

  // Handle the navigation based on user choice
  const handleAdminLogin = () => {
    navigate('/signinadmin'); // Navigate to the Admin login page
  };

  const handleCustomerLogin = () => {
    navigate('/signin'); // Navigate to the Customer login page
  };

  return (
    <div className='hostal'>
      <header>
        <h1 className='head'>Library</h1>
        <h2 className='head2'>Login As</h2>
      </header>

      <button onClick={handleAdminLogin}>Admin</button>
      <button onClick={handleCustomerLogin}>Customer</button>
    </div>
  );
}

export default Hostal;
