

import { Link } from 'react-router-dom';

import './auth.css';



function Login() {
  return (
    <div className="Auth">
      
      <h1>Welcome Back</h1>
      <form>
        
        <div className='label'>
          <label>Email</label> <br/>  
        </div>
        
        <input type="email" placeholder='Enter your email' /> <br /> <br/>

        <div className='label'>
          <label>Password</label> <br/>  
        </div>
        <input type="password" placeholder='Password' /> <br />
        
        {/* <input type="checkbox" /> <p>Remember me</p> */}
        <button>Log In</button>

      </form>

    <p><Link to="/register">Register</Link>, if don't have an account yet...</p>
    </div>
  );
}

export default Login;
