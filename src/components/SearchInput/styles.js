import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #FDFCFC;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
  min-width: 336px;
  height: 48px;
  border-radius: 10px;
  
  img {
    margin: 0px 10px;
  }
`

const SearchInput = styled.input`
  width: 100%;
  background-color: #FDFCFC;
  border-radius: 10px;
  border: none;
`;

export { SearchInput, Container }