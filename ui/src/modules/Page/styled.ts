import styled from 'styled-components';

export const PageStyled = styled.div.attrs({className: 'page'})`
    width: 100%;
    margin: 0 auto;
    max-width: 1440px;
    height: 100vh;
`;

export const HeaderPage = styled.div.attrs({className: 'header-page'})`
    height: 100px;
    background-color: '#006064';
    width: '100%';
    max-width: 1440px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(180deg, #006064 0%, #5DC8CD 100%);
    border-bottom: solid 10px #5DC8CD ;
    font-size: 24px;
    color: #fff;
    padding: 20px;
`;

export const MainPage = styled.div.attrs({className: 'main-page'})`
    padding: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #01939A;
    background: linear-gradient(180deg, #5DC8CD 0%, #006064 100%);
`;

export const CarouselContainer = styled.div.attrs({className: 'main-page__carousel-container'})`
    width: 100%;
    height: calc(100vh - 300px);
    border: solid 10px #01939A;
    border-radius: 8px;
    padding: 20px 200px;
    background-color: #006064;
    overflow: hidden;
`;

export const PictureContainer = styled.div.attrs({className: 'main-page__picture-container'})`
    border: solid 10px #01939A;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 220px;
    overflow: hidden;
    position: absolute;
    top: 110px;
    left: 10px;
`;

export const CarouselItem = styled.div.attrs({className: 'main-page__carousel-container_carousel-item'})`
    display: flex;
    flex-direction: column;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
`;

export const CarouselItemName = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #006064;
    color: #fff;
    font-size: 24px;
    font-weight: 600;
`;
export const CarouselItemDescription = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #fff;
    padding: 10px;
    background-color: #006064;
    text-align: center;
`;
export const CarouselItemPicture = styled.div`
    max-height: calc(100vh - 460px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    overflow: hidden;
    background-color: #006064;
`;

export const TitlePage = styled.div.attrs({className: 'title-page'})`
    background: linear-gradient(180deg, #5DC8CD 0%, #54BEC3 100%);
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 60px;
    position: absolute;
    left: calc(50% - 207px);
`;