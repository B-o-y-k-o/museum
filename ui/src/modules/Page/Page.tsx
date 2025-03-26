import { FC, useEffect, useState } from 'react';
import { CarouselContainer, CarouselItem, CarouselItemDescription, CarouselItemName, CarouselItemPicture, CarouselStyled, HeaderPage, MainPage, PageStyled, PictureContainer, TitlePage } from './styled';
import GerbPicture from '../../../public/gerb_svg.svg';
import LogoPicture from '../../../public/logo.jpg';
import InitialPicture from '../../../public/initialPicture.png'
import { Carousel, Image } from 'antd';

export const Page: FC = () => {
    const [data, setData] = useState<{
        id: number
        title: string,
        description: string,
        imageUrl: string
    }[]>([]);

    const callBackendAPI = async () => {
        const response = await fetch('http://localhost:8000/photos');
        const body = await response.json();
    
        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    useEffect(() => {
        callBackendAPI()
            .then(res => {
                setData(res)
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <PageStyled>
            <HeaderPage>
                ГБОУ СОШ № 323 Невского района Санкт-Петербурга
                <img style={{background: 'none'}} src={GerbPicture}/>
            </HeaderPage>
            <TitlePage>
                Музейный фонд
            </TitlePage>
            <MainPage>
                <CarouselContainer>
                    <PictureContainer>
                        <img 
                            style={{width: '200px'}} 
                            src={LogoPicture} 
                        />
                    </PictureContainer>
                    <CarouselStyled>
                        <Carousel arrows dots={false}> 
                        {data?.map((item) => (
                            <CarouselItem key={item.id}>
                                <CarouselItemName>
                                    {item.title}
                                </CarouselItemName>
                                <CarouselItemPicture>
                                    <Image 
                                        fallback={InitialPicture} 
                                        src={`http://localhost:8000/${item.imageUrl}`}
                                        alt={item.title} 
                                    />
                                </CarouselItemPicture>
                                <CarouselItemDescription>
                                    {item.description}
                                </CarouselItemDescription>
                            </CarouselItem>
                        ))}
                    </Carousel>
                    </CarouselStyled>
                    
                </CarouselContainer>
            </MainPage>
        </PageStyled>
        
    )
}