import styled from 'styled-components';

const TextInputStyled = styled.div`
position: relative;
height: fit-content;
width: 50%;
padding: 2px 2px 2px 2px;
border-radius: 10px;
background: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%);
`;

const SearchInput = styled.input`
    width: 100%;
    font-size: 20px;
    padding: 12px 75px 12px 16px;
    border-radius: 10px;
    color: white;
    border: transparent;
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);

    &::placeholder{
      color: #D9D9D9;
    }

    &:focus{
    overflow: hidden;
    outline: none;
    }
    `;

const SearchIcon = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  right: 26px;
  top: 23%;
  `;

const TextInput = () => {
  return (
    <TextInputStyled>
      <SearchInput type="text" placeholder="O que você procura?" />
      <SearchIcon src='/icons/search.svg'/>
    </TextInputStyled>
  );
};

export default TextInput;