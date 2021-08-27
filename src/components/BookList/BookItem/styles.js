import styled from 'styled-components'

const Container = styled.div`
  width: 30%;
  min-height: 200px;

  display: flex;
  justify-content: center;
  
  button {
    background: none;
    border: none;

    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      height: 153px;
    }
  }

  .bookTitle {
    font-size: 12px;
    font-family: Nunito, sans-serif;
    color: rgba(49, 49, 49, 0.8);
    margin-top: 0.5rem;
  }

  .bookDescription {
    font-size: 10px;
    font-family: Nunito, sans-serif;
    font-weight: 900;
  }
`

export { Container }