import styled from "styled-components";


const H2Styled = styled.h2`
    font-weight: 400;
    font-size: 32px;
    line-height: 38.4px;
    color: #7B78E5;
    text-align: ${ props => props.$align ? props.$align : 'left' };
`;


const Title = ({ children }) => {
    return (
        <H2Styled>{children}</H2Styled>
    );
}

export default Title;