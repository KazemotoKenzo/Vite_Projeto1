import { Card, CardList, Section, Titulo } from './styles';

const Assinaturas = () => {
  return (
    <Section>
      <Titulo>
        <h3>
          Venha treinar na{' '}
          <span>maior rede de academias da América Latina</span>
        </h3>
        <p>
          Os melhores equipamentos e infraestrutura com mensalidades acessíveis.
        </p>
      </Titulo>
      <CardList>
        <Card className="plano-black">
          <span className="vantagem">
            O mais <span>vantajoso</span>
          </span>
          <h4>Plano Black</h4>

          <p>
            Treine em qualquer academia da Smart Fit, seja no Brasil ou na
            América Latina. São +1.700 unidades em 15 países!
          </p>

          <div>
            <p>A PARTIR DE</p>

            <h4>R$ 0,00*</h4>

            <p>
              <span>no 1° mês</span>, depois R$ 149,90/mês
            </p>
          </div>

          <h5>12 meses de fidelidade</h5>

          <button>Contratar agora</button>

          <table>
            <tr>
              <td>
                <i className="bi bi-ban"></i>
              </td>
              <td>Acesso ilimitado a +1.700 academias</td>
            </tr>
            <tr>
              <td>
                <i className="bi bi-ban"></i>
              </td>
              <td>Leve 5 amigos por mês para treinar com você</td>
            </tr>
            <tr>
              <td>
                <i className="bi bi-ban"></i>
              </td>
              <td>Cademira de massagem</td>
            </tr>
            <tr>
              <td>
                <i className="bi bi-check-circle"></i>
              </td>
              <td>Smart Fit GO &lpar;treine online&rpar; no app</td>
            </tr>
            <tr>
              <td>
                <i className="bi bi-check-circle"></i>
              </td>
              <td>Área de musculação e aeróbicos</td>
            </tr>
            <tr>
              <td>
                <i className="bi bi-check-circle"></i>
              </td>
              <td>Smart Fit App</td>
            </tr>
          </table>
        </Card>

        <Card>
          <h4>Plano Black</h4>

          <p>
            Treine em qualquer academia da Smart Fit, seja no Brasil ou na
            América Latina. São +1.700 unidades em 15 países!
          </p>

          <div>
            <p>A PARTIR DE</p>

            <h4>R$ 0,00*</h4>

            <p>
              <span>no 1° mês</span>, depois R$ 149,90/mês
            </p>
          </div>

          <h5>12 meses de fidelidade</h5>

          <button>Buscar academia</button>

          <table>
            <tr>
              <td>
                <i className="bi bi-ban"></i>
              </td>
              <td>Acesso ilimitado a +1.700 academias</td>
            </tr>
            <tr>
              <td>
                <i className="bi bi-ban"></i>
              </td>
              <td>Leve 5 amigos por mês para treinar com você</td>
            </tr>
            <tr>
              <td>
                <i className="bi bi-ban"></i>
              </td>
              <td>Cademira de massagem</td>
            </tr>
            <tr>
              <td>
                <i className="bi bi-check-circle"></i>
              </td>
              <td>Smart Fit GO &lpar;treine online&rpar; no app</td>
            </tr>
            <tr>
              <td>
                <i className="bi bi-check-circle"></i>
              </td>
              <td>Área de musculação e aeróbicos</td>
            </tr>
            <tr>
              <td>
                <i className="bi bi-check-circle"></i>
              </td>
              <td>Smart Fit App</td>
            </tr>
          </table>
        </Card>

        <Card>
          <h4>Plano Smart</h4>

          <p>
            Nosso plano mensal para você que não quer se comprometer, mas quer
            treinar em uma academia de alto padrão
          </p>

          <div>
            <p>A PARTIR DE</p>

            <h4>R$ 0,00*</h4>

            <p>
              <span>no 1° mês</span>, depois R$ 119,90/mês
            </p>
          </div>

          <h5>Sem fidelidade</h5>

          <button>Buscar academia</button>

          <table>
            <tr>
              <td>
                <i className="bi bi-check-circle"></i>
              </td>
              <td>Acesso ilimitado a +1.700 academias</td>
            </tr>
            <tr>
              <td>
                <i className="bi bi-check-circle"></i>
              </td>
              <td>Leve 5 amigos por mês para treinar com você</td>
            </tr>
            <tr>
              <td>
                <i className="bi bi-check-circle"></i>
              </td>
              <td>Cademira de massagem</td>
            </tr>
            <tr>
              <td>
                <i className="bi bi-check-circle"></i>
              </td>
              <td>Smart Fit GO &lpar;treine online&rpar; no app</td>
            </tr>
            <tr>
              <td>
                <i className="bi bi-check-circle"></i>
              </td>
              <td>Área de musculação e aeróbicos</td>
            </tr>
            <tr>
              <td>
                <i className="bi bi-check-circle"></i>
              </td>
              <td>Smart Fit App</td>
            </tr>
          </table>
        </Card>
      </CardList>

      <Titulo>
        Os preços, taxas e condições promocionais podem variar de acordo com a
        academia escolhida.
      </Titulo>
    </Section>
  );
};

export default Assinaturas;
