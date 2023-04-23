import  Button  from "../shared/button"
import logo, {ReactComponent as Icon} from '../../assets/nodepop.svg'

const Header = () => {
    return (
        <header>
            <div>
                {/* <img src={logo} alt="nodepop-react" /> */}
                <Icon width="100" height="100" />

            </div>
            <nav>
                <Button variant="relleno">Login</Button>
            </nav>
        </header>
    );
};

export default Header;

