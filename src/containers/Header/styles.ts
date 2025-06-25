import styled from 'styled-components';

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 60px;

  img {
    max-width: 150px;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      margin-left: 8px;
    }
  }
`;
