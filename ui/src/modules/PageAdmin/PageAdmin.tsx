import { FC } from 'react';
import { CarouselContainer, HeaderPage, MainPage, PageStyled, PictureContainer, TitlePage } from './styled';
import GerbPicture from '../../../public/gerb_svg.svg';
import LogoPicture from '../../../public/logo.jpg';
import { Link } from 'react-router-dom';

export const PageAdmin: FC = () => {
    return (
        <PageStyled>
            <HeaderPage>
                ГБОУ СОШ № 323 Невского района Санкт-Петербурга
                <Link to='/'>
                    <img style={{background: 'none'}} src={GerbPicture}/>
                </Link>
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
                </CarouselContainer>
            </MainPage>
        </PageStyled>
    )
}