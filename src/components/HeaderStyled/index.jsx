import styled from "styled-components";
import TextInput from "../TextInputStyled";

const HeaderStyled = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding: 60px 0;

img {
    max-width: 212px;
}
`;

const Header = ({onSearch}) => {
    return (
        <HeaderStyled>
            <img src="/images/common/logo.png" alt="" />
            <TextInput onSearch={onSearch}/>
        </HeaderStyled>
    )
}


export default Header;
