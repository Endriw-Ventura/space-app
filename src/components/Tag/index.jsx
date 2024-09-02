import styled from "styled-components";

const TagContainer = styled.div`
    background: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%);
    border-radius: 10px;
    padding: ${props => props.$active ? '2px' : '0px'};
`;

const TagTitle = styled.p`
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    color: white;
    margin: 0;
    padding: 10px 8px;
    background: #526170;
    border-radius: 10px;
`;



const Tag = ({children, active = false, onTagSearch, dataKey}) => {
return (
    <TagContainer 
        onClick={() => onTagSearch(dataKey)}
        $active={active}
     >
            <TagTitle>{children}</TagTitle>
    </TagContainer>
);
}

export default Tag;