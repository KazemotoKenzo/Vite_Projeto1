import styled from 'styled-components';

export const Section = styled.section`
  text-align: center;

  h2,
  a {
    margin: 40px auto;
  }

  a {
    padding: 12px 18px;
    border-radius: 24px;
    max-width: 300px;
  }

  ul {
    column-gap: 30px;

    li {
      box-shadow: 0 3px 17px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      outline: 2px solid transparent;
      overflow: hidden;
      height: 250px;

      img {
        width: 100%;
      }
    }
  }
`;
