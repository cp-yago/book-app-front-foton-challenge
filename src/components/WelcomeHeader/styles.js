import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.5rem;

  span:nth-child(2) {
    color: #FF6978;
    margin-left: 5px;
  }

  img {
    width: 24px;
    height: 24px;
    margin: 0px 5px;
  }
`;

export { Container }