import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/HeaderStyled";
import NavigationList from "./components/NavigationList";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import photos from "./dataJson/fotos.json";
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";


const GradientBackground = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
padding: 0 24px;
box-sizing: border-box;
`
const AppContainer = styled.div`
  margin: 0 auto;
  width: 1440px;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;


function App() {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

function onFavoriteClick(photo) {
  const updatedPhotos = galleryPhotos.map(p => 
    p.id === photo.id ? { ...p, favorite: !p.favorite } : p
  );
  setGalleryPhotos(updatedPhotos);
}

function onFavoriteClickSingle(photo) {
 const updatedPhoto = { ...photo, favorite: !photo.favorite };
 onFavoriteClick(updatedPhoto)
  setSelectedPhoto(updatedPhoto);
}

  return (
    <GradientBackground>
     <GlobalStyles />
     <AppContainer>
        <Header />
        <MainContainer>
          <NavigationList />
          <GalleryContainer>
          <Banner />
          <Gallery onSelectedPhoto={photo => setSelectedPhoto(photo)} photos={galleryPhotos} onFavoriteClick={photo => onFavoriteClick(photo)} />
          </GalleryContainer>
        </MainContainer>
     </AppContainer>
     <ModalZoom photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} onFavoriteClickSingle={photo => onFavoriteClickSingle(photo)}/>
    </GradientBackground>
  )
}

export default App
