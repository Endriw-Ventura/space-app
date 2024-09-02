import styled from "styled-components";
import Title from "../TitleStyled";
import photos from "../../dataJson/fotos-populares.json";

const OuterContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
`

const PhotosContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const PhotoImage = styled.img`
    border-radius: 18px;
    max-width: 212px;
    max-height: 158px;
    object-fit: contain;
    object-position: center;
`;


const StyledButton = styled.button`
    width: 208px;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 2px;
    background: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%);
`;

const StyledText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin: 0;
    padding: 0;
    color: white;
    font-size: 20px;
    font-weight: 700;
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
`;

const Popular = () => {
    return(
        <OuterContainer>
            <Title $align={'center'}>Populares</Title>
            <PhotosContainer>
                { photos.map(photo => <PhotoImage src={photo.path} key={ photo.id }/>) }
            </PhotosContainer>
                <StyledButton>
                    <StyledText>
                        Ver Mais
                    </StyledText>
                </StyledButton>
        </OuterContainer>
    );
}

export default Popular;