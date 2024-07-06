import styled from "styled-components"

const H4Styled = styled.h4`
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    color: white;
    margin: 0;
    padding: 0;
`;

const PhotoDescription = ({children}) => {
    return(
        <H4Styled>
            {children}
        </H4Styled>
    );
}

export default PhotoDescription