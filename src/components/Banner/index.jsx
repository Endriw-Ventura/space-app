import styled from "styled-components";

const BannerStyled = styled.figure`
    background-image: url('/images/common/banner.png');
    background-size: cover;
    border-radius: 20px;
    min-height: 328px;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    margin: 0;
    flex: 1;
`;

const TitleStyled = styled.h1`
    line-height: 48px;
    font-size: 40px;
    font-weight: 400;
    color: #FFFFFF;
    max-width: 400px;
    padding: 0 64px;
    margin: 0;
`;

const Banner = () => {
    return (
        <BannerStyled>
            <TitleStyled>
                A galeria mais completa de fotos do espaço!
            </TitleStyled>
        </BannerStyled>
    );
}

export default Banner;