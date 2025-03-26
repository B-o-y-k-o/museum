import { FC, useEffect, useState } from 'react';
import { CarouselContainer, CarouselItem, CarouselItemDescription, CarouselItemName, CarouselItemPicture, HeaderPage, MainPage, PageStyled, PictureContainer, TitlePage } from './styled';
import GerbPicture from '../../../public/gerb_svg.svg';
import LogoPicture from '../../../public/logo.jpg';
import InitialPicture from '../../../public/initialPicture.png'
import { Carousel, Image } from 'antd';

// interface IData {
//     id: string
//     name: string
//     description: string
//     picture: string
// }

// const data: IData[] = [
//     {
//         id: '1',
//         name: 'Picture_1',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem illum quis, ab corrupti hic doloremque, molestiae quisquam voluptates maiores magni sapiente dolor, unde perspiciatis. Quam maxime eius facilis dolorum.',
//         picture: '../../../public/initialPicture.png',
//     },
//     {
//         id: '2',
//         name: 'Picture_2', 
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem illum quis, ab corrupti hic doloremque, molestiae quisquam voluptates maiores magni sapiente dolor, unde perspiciatis. Quam maxime eius facilis dolorum.',
//         picture: '../../../public/initialPicture.png',
//     },
//     {
//         id: '3',
//         name: 'Picture_3',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem illum quis, ab corrupti hic doloremque, molestiae quisquam voluptates maiores magni sapiente dolor, unde perspiciatis. Quam maxime eius facilis dolorum.',
//         picture: '../../../public/initialPicture.png',
//     },
//     {
//         id: '4',
//         name: 'Picture_4',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem illum quis, ab corrupti hic doloremque, molestiae quisquam voluptates maiores magni sapiente dolor, unde perspiciatis. Quam maxime eius facilis dolorum.',
//         picture: '../../../public/initialPicture.png',
//     }
// ];

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
    console.log(data)
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
                        {data?.map((item) => (
                            <CarouselItem key={item.id}>
                                <CarouselItemName>
                                    {item.title}
                                </CarouselItemName>
                                <CarouselItemPicture>
                                    <Image 
                                        fallback={InitialPicture} 
                                        src={item.imageUrl}
                                        alt={item.title} 
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