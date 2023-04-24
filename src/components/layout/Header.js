import Button from "../shared/button";
import logo, { ReactComponent as Icon } from "../../assets/nodepop.svg";
import { logout } from "../auth/service";

const Header = ({ isLogged, onLogout }) => {
    const handleLogoutClick = async () =>{
        await logout();
        onLogout();
    }

  return (
    <header>
      <div>
        {/* <img src={logo} alt="nodepop-react" /> */}
        <Icon width="100" height="100" />
      </div>
      <nav>
        {isLogged ? (
          <Button onClick={handleLogoutClick}>Logout</Button>
        ) : (
          <Button variant="relleno">Login</Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
