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

const Gallery = ({ photos }) => {
    return (
        <>
            <Tags/>
            <GalleryContainer>
                <SectionContainer>
                    <Title>Navegue pela sua galeria</Title>
                    <PhotosContainer>
                        { photos.map(photo => <PhotoCard photo={photo} key={ photo.id }/>) }
                    </PhotosContainer>
                </SectionContainer>
                <Popular />
            </GalleryContainer>
        </>
    );
}

export default Gallery