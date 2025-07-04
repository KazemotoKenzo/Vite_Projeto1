import { Footerr, List } from './styles';

import logo from '../../assets/logo/logo-white.svg';

const Footer = () => {
  return (
    <Footerr>
      <img src={logo} />
      <div>
        <h3>Siga a Smart Fit</h3>
        <ul>
          <li>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-tiktok"></i>
            <i className="bi bi-spotfy"></i>
            <i className="bi bi-twitter"></i>
          </li>
        </ul>
      </div>

      <List>
        <aside>
          <h3>Instituicional</h3>
          <ul>
            <li>
              <a>Sobre</a>
            </li>
            <li>
              <a>Conceito</a>
            </li>
            <li>
              <a>Investidores</a>
            </li>
            <li>
              <a>Central de Ajuda</a>
            </li>
            <li>
              <a>Fale Conosco</a>
            </li>
            <li>
              <a>Edital Smart Fit</a>
            </li>
            <li>
              <a>Aviso de Privacidade</a>
            </li>
            <li>
              <a>Portal de Privacidade</a>
            </li>
          </ul>
        </aside>

        <aside>
          <h3>Planos</h3>
          <ul>
            <li>Planos</li>
            <li>
              <a>Contratos</a>
            </li>
            <li>
              <a>Planos corporativos</a>
            </li>
            <li>
              <a>Smart Fit Coach - Consultor Online de Treino</a>
            </li>
            <li>
              <a>Smart Fit Energy</a>
            </li>
            <li>
              <a>Smart Fit Nutri</a>
            </li>
            <li>
              <a>Smart Fit Supps</a>
            </li>
          </ul>
        </aside>

        <aside>
          <h3>Corporativo</h3>
          <ul>
            <li>
              <a>Imprensa</a>
            </li>
            <li>
              <a>Quero ser um franqueado</a>
            </li>
            <li>
              <a>Divulgue sua marca</a>
            </li>
            <li>
              <a>Indique um ponto</a>
            </li>
            <li>
              <a>Trabalhe Conosco</a>
            </li>
            <li>
              <a>Transparência salarial e Critérios remuneratórios Smart Fit</a>
            </li>
            <li>
              <a>Transparência salarial e Critérios remuneratórios BIOMURUM</a>
            </li>
            <li>
              <a>Formulário prévio ao contrato Personal</a>
            </li>
          </ul>
        </aside>
      </List>

      <div>
        <p>
          *Consulte as condições promocionais e regulamentos na página:
          smartfit.com.br/contratos
        </p>
        <p>Avenida Paulista, nº.1294, 2º andar, Bela Vista, CEP 01310-100</p>
        <p>faleconosco@smartfit.com</p>
        <p>Avenida Paulista, nº.1294, 2º andar, Bela Vista, CEP 01310-100</p>
        <p>SMARTFIT ESCOLA DE GINÁSTICA E DANÇA S.A</p>
        <p>CNPJ: 07.594.978/0001-78</p>
      </div>
    </Footerr>
  );
};

export default Footer;
