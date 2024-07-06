import styled from "styled-components";

const H5Styled = styled.h5`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: white;
    margin: 0;
    padding: 0;
`;

const CustomText = ({children}) => {
    return (
        <H5Styled>
            {children}
        </H5Styled>
    );
}

export default CustomText