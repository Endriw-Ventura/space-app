import styled from "styled-components";

const H3Styled = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    text-align: left;
`;

const SubtitleStyled = ({ children }) => {
    return (
        <H3Styled>
            {children}
        </H3Styled>
    );
}

export default SubtitleStyled;