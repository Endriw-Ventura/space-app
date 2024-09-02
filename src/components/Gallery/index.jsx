import styled from "styled-components";
import Title from "../TitleStyled";
import Popular from "../Popular";
import Tags from "../Tags";
import PhotoCard from "../PhotoCard";


const SectionContainer = styled.section`
    flex-grow: 1;
`;

const GalleryContainer = styled.div`
    display: flex;
`;

const PhotosContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    gap: 24px;
`;

const Gallery = ({ photos = [], tags, onSelectedPhoto, onFavoriteClick, onTagSearch }) => {
    return (
        <>
            <Tags onTagSearch={onTagSearch} tags={tags}/>
            <GalleryContainer>
                <SectionContainer>
                    <Title>Navegue pela sua galeria</Title>
                    <PhotosContainer>
                        { photos.map(photo => <PhotoCard onZoomRequest={onSelectedPhoto} photo={photo} onFavoriteClick={onFavoriteClick} key={ photo.id }/>) }
                    </PhotosContainer>
                </SectionContainer>
                <Popular />
            </GalleryContainer>
        </>
    );
}

export default Gallery