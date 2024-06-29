import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const UlStyled = styled.nav`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`;


const NavigationList = () => {
    return(
        <aside>
            <nav>
                <UlStyled>
                        <NavigationItem 
                        activeIcon={"/icons/home-ativo.png"} 
                        inactiveIcon={"/icons/home-inativo.png"}
                        active
                        >
                            Início
                        </NavigationItem>
                        <NavigationItem 
                        activeIcon={"/icons/mais-vistas-ativo.png"} 
                        inactiveIcon={"/icons/mais-vistas-inativo.png"}
                        >
                            Mais vistas
                        </NavigationItem>
                        <NavigationItem 
                        activeIcon={"/icons/mais-curtidas-ativo.png"} 
                        inactiveIcon={"/icons/mais-curtidas-inativo.png"}
                        >
                            Mais curtidas
                        </NavigationItem>
                        <NavigationItem 
                        activeIcon={"/icons/novas-ativo.png"} 
                        inactiveIcon={"/icons/novas-inativo.png"}
                        >
                            Novas
                        </NavigationItem>
                        <NavigationItem 
                        activeIcon={"/icons/surpreenda-me-ativo.png"} 
                        inactiveIcon={"/icons/surpreenda-me-inativo.png"}
                        >
                            Surpreenda-me
                        </NavigationItem>
                </UlStyled>
            </nav>
        </aside>
    );
}

export default NavigationList;