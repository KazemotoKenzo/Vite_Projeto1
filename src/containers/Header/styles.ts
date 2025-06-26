import styled from 'styled-components';

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 60px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    max-width: 150px;
  }

  div {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      align-items: center;

      li {
        margin-left: 32px;

        a {
          padding: 8px 16px;
          font-weight: 700;
          border-radius: 26px;
        }
      }
    }

    button {
      margin-left: 36px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 32px;
      height: 24px;
      background: transparent;
      border: none;
      padding: 0;
      cursor: pointer;

      span {
        display: block;
        height: 2px;
        width: 100%;
        background-color: #000;
      }
    }
  }
`;
