import styled from "styled-components"

const ListItemStyled = styled.li`
display: flex;
gap: 22px;
align-items: center;
font-weight: 700;
font-size: 23px;
line-height: 29px;
margin-bottom: 32px;
color: ${props => props.$active ? '#7B78E5' : '#D9D9D9'};
`;

const NavigationItem = ({ children, activeIcon, inactiveIcon, active = false}) => {
    return (
        <ListItemStyled $active={active}>
            <img src={ active ? activeIcon : inactiveIcon } alt=""/>
            <a>
                {children}
            </a>
        </ListItemStyled>
    );
}

export default NavigationItem;