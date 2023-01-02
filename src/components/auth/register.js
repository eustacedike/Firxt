

import { Link } from 'react-router-dom';

import './auth.css';



function Register() {
  return (
    <div className="Auth">
      
      <h1>Register</h1>
      <form>
        <input type="text" placeholder='First Name' /> <br />
        <input type="text" placeholder='Last Name' /> <br />
        <input type="email" placeholder='Enter your email' /> <br />
        <input type="password" placeholder='Password' /> <br />
        <input type="password" placeholder='Confirm Password' /> <br />
        {/* <input type="checkbox" /> <p>Remember me</p> */}
        <button>Register</button>

      </form>

    <p><Link to="/login">Login</Link>, if you already have an account...</p>
    </div>
  );
}

export default Register;
