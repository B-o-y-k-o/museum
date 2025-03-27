import { FC } from 'react';
import { AuthContainer, CarouselContainer, HeaderPage, MainPage, PageStyled, PictureContainer, TitlePage } from './styled';
import GerbPicture from '../../../public/gerb_svg.svg';
import LogoPicture from '../../../public/logo.jpg';

export const PageAuth: FC = () => {
    return (
        <PageStyled>
            <HeaderPage>
                ГБОУ СОШ № 323 Невского района Санкт-Петербурга
                <img style={{background: 'none'}} src={GerbPicture}/>
            </HeaderPage>
            <TitlePage>
                Панель администратора
            </TitlePage>
            <MainPage>
                <CarouselContainer>
                    <PictureContainer>
                        <img 
                            style={{width: '200px'}} 
                            src={LogoPicture} 
                        />
                    </PictureContainer>
                    <AuthContainer>
                        
                    </AuthContainer>
                </CarouselContainer>
            </MainPage>
        </PageStyled>
    )
}