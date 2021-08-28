import styled from 'styled-components'

const Container = styled.div`
  background-color: #FFF6E5;
  height: 30vh;
  display: flex;
  justify-content: center;

  border-radius: 0 0 100px 0;

  .texture1 {
    position: absolute;
    right: 0;
  }

  .texture2 {
    position: absolute;
    left: 70px;
    top: 60px;
  }

  .texture3 {
    position: absolute;
    right: 80px;
    top: 40px;
  }

  .texture4 {
    position: absolute;
    left: 40px;
    top: 70px;
  }

  .texture5 {
    position: absolute;
    right: 80px;
    top: 100px;
  }

  .bookCover {
    width: 130px;
    position: absolute;
    top: 50px;
    z-index: 1;
  }
`;

export { Container }