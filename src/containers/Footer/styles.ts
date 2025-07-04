import styled from 'styled-components';

export const Footerr = styled.footer`
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 90px 20px;

  div {
    padding: 30px 0;
    width: 100%;
    border-top: 1px solid #fff;
  }
`;

export const List = styled.div`
  display: flex;
  text-align: left;
  justify-content: space-between;
  gap: 100px;

  aside {
    margin: 0 40px;
  }
`;
