import { FC } from 'react';
import { CarouselContainer, CarouselItem, CarouselItemDescription, CarouselItemName, CarouselItemPicture, HeaderPage, MainPage, PageStyled, PictureContainer, TitlePage } from './styled';
import GerbPicture from '../../../public/gerb_svg.svg';
import LogoPicture from '../../../public/logo.jpg';
import { Carousel, Image } from 'antd';

interface IData {
    id: string
    name: string
    description: string
    picture: string
}

const data: IData[] = [
    {
        id: '1',
        name: 'Picture_1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem illum quis, ab corrupti hic doloremque, molestiae quisquam voluptates maiores magni sapiente dolor, unde perspiciatis. Quam maxime eius facilis dolorum.',
        picture: '../../../public/initialPicture.png',
    },
    {
        id: '2',
        name: 'Picture_2', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem illum quis, ab corrupti hic doloremque, molestiae quisquam voluptates maiores magni sapiente dolor, unde perspiciatis. Quam maxime eius facilis dolorum.',
        picture: '../../../public/initialPicture.png',
    },
    {
        id: '3',
        name: 'Picture_3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem illum quis, ab corrupti hic doloremque, molestiae quisquam voluptates maiores magni sapiente dolor, unde perspiciatis. Quam maxime eius facilis dolorum.',
        picture: '../../../public/initialPicture.png',
    },
    {
        id: '4',
        name: 'Picture_4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem illum quis, ab corrupti hic doloremque, molestiae quisquam voluptates maiores magni sapiente dolor, unde perspiciatis. Quam maxime eius facilis dolorum.',
        picture: '../../../public/initialPicture.png',
    }
];

export const Page: FC = () => {
    return (
        <PageStyled>
            <HeaderPage>
                ГБОУ СОШ № 323 Невского района Санкт-Петербурга
                <img src={GerbPicture}/>
            </HeaderPage>
            <TitlePage>
                Музейный фонд
            </TitlePage>
            <MainPage>
                <PictureContainer>
                    <img 
                        style={{width: '200px'}} 
                        src={LogoPicture} 
                    />
                </PictureContainer>
                <CarouselContainer>
                    <Carousel arrows dots={false}> 
                        {data.map((item) => (
                            <CarouselItem key={item.id}>
                                <CarouselItemName>
                                    {item.name}
                                </CarouselItemName>
                                <CarouselItemPicture>
                                    <Image 
                                        fallback={item.picture} 
                                        src={item.picture}
                                        alt={item.name} 
                                    />
                                </CarouselItemPicture>
                                <CarouselItemDescription>
                                    {item.description}
                                </CarouselItemDescription>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </CarouselContainer>
            </MainPage>
        </PageStyled>
        
    )
}