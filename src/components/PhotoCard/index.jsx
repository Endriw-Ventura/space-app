import styled from "styled-components";
import PhotoDescription from "../PhotoDescription";
import CustomText from "../CustomText";

const Card = styled.figure`
    margin: 0;
    padding: 0;
    border-radius: 20px;
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
    width: 448px;
    height: 258px;
    object-fit: fill;
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
    }
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
`;

const PhotoCard = ({ photo }) => {
    return(
    <Card>
        <Photo src={photo.path} alt="" />
        <figcaption>
            <TextContainer>
                <PhotoDescription>{photo.titulo}</PhotoDescription>
                <CustomText>{photo.fonte}</CustomText>
            </TextContainer>
            <ButtonsContainer>
                <button>
                    <Icon src="/icons/favorito.png" alt="" />
                </button>
                <button>
                    <Icon src="/icons/expandir.png" alt="" />
                </button>
            </ButtonsContainer>
        </figcaption>
    </Card>
    );
}

export default PhotoCard;