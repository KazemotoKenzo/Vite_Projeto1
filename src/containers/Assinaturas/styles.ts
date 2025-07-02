import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;
`;

export const Titulo = styled.div`
  padding: 40px 0;
  text-align: center;

  h3 {
    font-size: 32px;
    margin-bottom: 8px;

    span {
      color: #ffad12;
    }
  }
`;

export const CardList = styled.div`
  .plano-black {
    background-color: rgb(59, 59, 64);
    color: #ccc;

    span,
    h4,
    td {
      color: #fff;
    }

    .vantagem {
      position: absolute;
      background-color: rgb(255, 182, 18);
      top: -12px;
      left: 24px;
      border-radius: 8px;
      width: 172px;
      text-align: center;
      color: #3b3b40;

      span {
        font-weight: 700;
        color: #000;
      }
    }
  }
`;

export const Card = styled.div`
  border: 2px solid #e2e8f0;
  padding: 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #63636b;
  position: relative;

  span {
    color: #3b3b40;
  }

  h4 {
    font-size: 24px;
    font-weight: 700;
    color: #000;
  }

  h5 {
    font-weight: normal;
    color: #9f9fa7;
  }

  table {
    border-spacing: 8px 8px;
    tr {
      td {
        i {
          color: #1e8654;
        }
        vertical-align: middle;
      }
    }
  }
`;
