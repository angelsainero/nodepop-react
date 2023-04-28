import Button from "../shared/button";
import { ReactComponent as Icon } from "../../assets/nodepop.svg";
import { logout } from "../auth/service";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../auth/context";

const Header = () => {
  const {isLogged, onLogout} = useAuth();

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return (
    <header>
      <Link to="/">
        <div>
          {/* <img src={logo} alt="nodepop-react" /> */}
          <Icon width="100" height="100" />
        </div>
      </Link>
      <nav>
        {/* se realiza de esta manera porque con el as={link} modifica el style del botón  */}
        <Link to="/adverts/new">
          <Button variant="relleno">Nuevo Anuncio</Button>
        </Link>
        <Link to="/adverts/">
          <Button variant="relleno">Listado Anuncios</Button>
        </Link>
        {/* <NavLink to="/adverts/new">Nuevo Anuncio</NavLink> | <NavLink to="/adverts" end>Listado Anuncios</NavLink> */}
        {isLogged ? (
             
          <Button onClick={handleLogoutClick}>Logout</Button>
         
        ) : (
            <Link to="/login/"> 
          <Button variant="relleno">Login</Button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
