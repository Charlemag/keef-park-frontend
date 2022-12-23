import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
 
function Navbar() {

  const { user, isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      {/* {isLoggedIn && (
        <span>Find your vibe {user.name}!</span>
      )} */}

      <Link to="/">
        <button>Home</button>
      </Link>

      

      {isLoggedIn && (
        <>
          <Link to="/strains">
            <button>Strains</button>
          </Link>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
          <Link to="/myprofile">
            <button>My Profile</button>
          </Link>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}

    

      {!isLoggedIn && (
        <>
          <Link to="/login">
            <button>Log In</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </>
      )}


 
      
    </nav>
  );
}
 
export default Navbar;