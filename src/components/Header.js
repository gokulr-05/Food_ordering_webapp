import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [loginBtn, setLoginBtn] = useState('Login');
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, [loginBtn]);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7wOSrMcqD_2sy8k4q3MXsoXbyORCJTVP7pQ&s"
          alt="food app logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About Us
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>

          <button
            className="loginBtn"
            onClick={() => {
              loginBtn === 'Login'
                ? setLoginBtn('Logout')
                : setLoginBtn('Login');
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
