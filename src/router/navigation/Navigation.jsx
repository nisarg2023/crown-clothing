import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../asset/crown.svg"
import './navigation.scss'
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrownLogo />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            sohp
          </Link>
          <Link className="nav-link" to="/shop">
            Contact
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
