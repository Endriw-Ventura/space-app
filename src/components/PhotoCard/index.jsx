import styled from "styled-components";
import PhotoDescription from "../PhotoDescription";
import CustomText from "../CustomText";

const Card = styled.figure`
    margin: 0;
    padding: 0;
    border-radius: 20px;
    width: auto;
    min-width: 448px;
    box-shadow: 0px 4px 4px 0px #00000026;

    figcaption{
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        background-color: #001634;
        max-height: 80px;
        padding: 16px;
        display: flex;
        justify-content: space-between;
    }
`;

const Photo = styled.img`
    width: ${props => props.$expanded ? '100%' : '448px'};
    height: ${props => props.$expanded ? '90%' : '258px'};
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;


const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 24px;

    button{
        margin: 0;
        padding: 0;
        border: none;
        background-color: transparent;
        display: ${props => props["aria-hidden"] ? 'none' : ''}; 
    }
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
    display: ${props => props["aria-hidden"] ? 'none' : 'visible'}; 
`;

const PhotoCard = ({ photo, onZoomRequest, onFavoriteClick, expanded = false }) => {
    return(
    <Card $expanded={expanded}>
        <Photo $expanded={expanded} src={photo.path} alt="" />
        <figcaption>
            <TextContainer>
                <PhotoDescription>{photo.titulo}</PhotoDescription>
                <CustomText>{photo.fonte}</CustomText>
            </TextContainer>
            <ButtonsContainer>
                <button onClick={() => onFavoriteClick(photo)}>
                    {
                        photo.favorite ?  
                         <Icon src="/icons/favorito-ativo.png" alt="" /> :
                         <Icon src="/icons/favorito.png" alt="" /> 
                    }
                </button>
                { !expanded &&
                    <button  onClick={() => onZoomRequest(photo)}>
                        <Icon  src="/icons/expandir.png" alt="" />
                    </button>
                }
            </ButtonsContainer>
        </figcaption>
    </Card>
    );
}

export default PhotoCard;