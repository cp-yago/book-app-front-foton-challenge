import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .bookTitleContainer {
    padding: 5px 20px;
    margin-top: 50px;

    .bookTitle {
      color: #36383A;
      font-weight: bold;
    }

    .bookSubTitle {
      color: #36383A;
    }

    .authorName {
      color: #FF6978;
      font-size: 16px;
    }
  }

  .descriptionContainer {
    padding: 5px 20px;
    width: 100%;

    p {
      font-size: 14px;
      color: rgba(49, 49, 49, 0.6);
      -moz-hyphens:auto;
      -ms-hyphens:auto;
      -webkit-hyphens:auto;
      hyphens:auto;
      word-wrap:break-word;
      line-height: 25px;
      letter-spacing: 0.2px;
    }
  }
`;

export { Container }