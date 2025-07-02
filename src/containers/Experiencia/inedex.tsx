import { Section } from './styles';

const Experiencia = () => {
  return (
    <Section>
      <h2>
        Experiência <span>Smart Fit</span>
      </h2>
      <ul className="grid">
        <li>
          <img src="https://placehold.co/300x210.png" alt="" />
          Equipamentos de alto padrão
        </li>
        <li>
          <img src="https://placehold.co/300x210.png" alt="" />
          Salas exclusivas de aulas coletivas
        </li>
        <li>
          <img src="https://placehold.co/300x210.png" alt="" />
          Áreas de musculação e cárdio
        </li>
      </ul>
      <a className="btn">Buscar academias</a>
    </Section>
  );
};

export default Experiencia;
