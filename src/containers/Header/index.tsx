import logo from '../../assets/logo/Smart_Fit_logo.svg.png';
import { HeaderBar } from './styles';

const Header = () => {
  return (
    <HeaderBar>
      <img src={logo} />
      <ul>
        <li>Academia</li>
        <li>Espaço do Cliente</li>
        <li>Seja um franqueado</li>
      </ul>
      <span>---</span>
    </HeaderBar>
  );
};

export default Header;
