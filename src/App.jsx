import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/HeaderStyled";
import NavigationList from "./components/NavigationList";
import Banner from "./components/Banner";


const GradientBackground = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
padding: 0 24px;
box-sizing: border-box;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

function App() {
  return (
    <GradientBackground>
     <GlobalStyles />
     <Header />
     <Container>
        <NavigationList />
        <Banner />
     </Container>
    </GradientBackground>
  )
}

export default App
