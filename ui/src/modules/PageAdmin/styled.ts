import styled from 'styled-components';

export const PageStyled = styled.div.attrs({className: 'page'})`
    width: 100%;
    margin: 0 auto;
    max-width: 1440px;
    height: 100vh;
    background: none;
`;

export const HeaderPage = styled.div.attrs({className: 'header-page'})`
    max-height: 100px;
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

export const TitlePage = styled.div.attrs({className: 'title-page'})`
    display: flex;
    justify-content: center;
    color: #E41B45;
    font-size: 60px;
    position: absolute;
    left: calc(50% - 306px);
`;

export const FormContainer = styled.div.attrs({className: 'admin-form-container'})`
    display: flex;
    position: relative;
    top: -200px;
    left: 190px;
    flex-direction: column;
    gap: 10px;
    border: solid 4px #008DD2;
    border-radius: 8px;
    width: 600px;
    height: 520px;
    -webkit-box-shadow: -20px -20px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: -20px -20px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: -20px -20px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const TableContainer = styled.div.attrs({className: 'admin-form-container'})`
display: flex;
position: relative;
top: -200px;
flex-direction: column;
gap: 10px;
border: solid 4px #008DD2;
border-radius: 8px;
width: 980px;
height: 520px;
overflow-y: auto;
-webkit-box-shadow: -20px -20px 8px 0px rgba(34, 60, 80, 0.2);
-moz-box-shadow: -20px -20px 8px 0px rgba(34, 60, 80, 0.2);
box-shadow: -20px -20px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const FormContentContainer = styled.div.attrs({className: 'modal-content-container'})`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ErrorMessage = styled.span`
    color: red;
`;

export const ButtonContainer = styled.div.attrs({className: 'main-page__picture-container'})`
border: solid 10px #008DD2;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
width: 214px;
height: 30;
overflow: hidden;
position: relative;
top: -142px;
left: -230px;
background-color: #fff;
-webkit-box-shadow: -20px -20px 8px 0px rgba(34, 60, 80, 0.2);
-moz-box-shadow: -20px -20px 8px 0px rgba(34, 60, 80, 0.2);
box-shadow: -20px -20px 8px 0px rgba(34, 60, 80, 0.2);
`;