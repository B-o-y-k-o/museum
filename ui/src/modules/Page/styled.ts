import styled from 'styled-components';

export const PageStyled = styled.div.attrs({className: 'page'})`
    width: 100%;
    margin: 0 auto;
    max-width: 1440px;
    height: 100vh;
    background: none;
`;

export const HeaderPage = styled.div.attrs({className: 'header-page'})`
    height: 100px;
    width: '100%';
    max-width: 1440px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    color: #F8AA48;
    padding: 20px;
    background: none;
`;

export const MainPage = styled.div.attrs({className: 'main-page'})`
    padding: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
`;

export const CarouselContainer = styled.div.attrs({className: 'main-page__carousel-container'})`
    width: 100%;
    height: calc(100vh - 300px);
    border: solid 10px #008DD2;
    border-radius: 8px;
    padding: 20px 120px;
    vertical-align: top;
    background: none;
    -webkit-box-shadow: -20px -20px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: -20px -20px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: -20px -20px 8px 0px rgba(34, 60, 80, 0.2);;
`;

export const PictureContainer = styled.div.attrs({className: 'main-page__picture-container'})`
    border: solid 10px #008DD2;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 214px;
    height: 214px;
    overflow: hidden;
    position: relative;
    top: -142px;
    left: -230px;
    -webkit-box-shadow: -20px -20px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: -20px -20px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: -20px -20px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const CarouselItem = styled.div.attrs({className: 'main-page__carousel-container_carousel-item'})`
    display: flex;
    flex-direction: column;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    position: relative;
`;

export const CarouselItemName = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    color: #008DD2;
    font-size: 24px;
    font-weight: 600;
`;
export const CarouselItemDescription = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #008DD2;
    padding: 10px;
    text-align: center;
`;
export const CarouselItemPicture = styled.div`
    max-height: calc(100vh - 460px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    overflow: hidden;
`;

export const TitlePage = styled.div.attrs({className: 'title-page'})`
    display: flex;
    justify-content: center;
    color: #E41B45;
    font-size: 60px;
    position: absolute;
    left: calc(50% - 207px);
`;

export const CarouselStyled = styled.div`
    position: relative;
    top: -220px;
`