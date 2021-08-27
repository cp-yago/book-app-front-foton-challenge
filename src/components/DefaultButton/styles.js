import styled from 'styled-components'

const Button = styled.button`
  width: 90%;
  height: 48px;
  background-color: #FF6978;
  color: #FFFFFF;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
  border-radius: 10px;
  border: none;
  transition: 0.5s;

  &:hover {
    border: 1px solid #FF6978;
    color: #FF6978;
    background-color: #ffffff;
  }
`;

export { Button }