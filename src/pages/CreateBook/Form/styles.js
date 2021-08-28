import styled from 'styled-components'

const Container = styled.form`
  width: 100%;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 16px;
    align-self: flex-start;
    margin-left: 20px;
  }

  input {
    background: #FDFCFC;
    border-radius: 10px;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
    height: 48px;
    border: none;
    width: 336px;
    margin: 0 10px;
    padding-left: 20px;
  }

  .textArea {
    height: 150px;
  }

  .errorMessage {
    position: relative;
    top: -20px;
    left: 5px;
    font-size: 12px;
    color: #FF6978;
  }

  button {
    padding: 10px;
    margin-top: 30px;
  }
`;

export { Container }