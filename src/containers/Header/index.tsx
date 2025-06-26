import logo from '../../assets/logo/Smart_Fit_logo.svg.png';
import { HeaderBar } from './styles';

const Header = () => {
  return (
    <HeaderBar>
      <img src={logo} />
      <div>
        <ul>
          <li>
            <a>Academia</a>
          </li>
          <li>
            <a>Espaço do Cliente</a>
          </li>
          <li>
            <a>Seja um franqueado</a>
          </li>
        </ul>
        <button>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </HeaderBar>
  );
};

export default Header;
