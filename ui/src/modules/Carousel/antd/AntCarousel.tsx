import React from 'react';
import { Carousel } from 'antd';
import { contentStyle } from './antStyle';
import { Image } from 'antd';
import picture from './picture.png'

interface IAntCarousel {
    data: {
        picture: string,
        name: string,
        description: string,
    }[]
}

export const AntCarousel: React.FC<IAntCarousel> = ({ data }) => (
    <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={3000}>
        {data.map((item) => (
            <div  className='carousel'>
                <h3 className='carousel_name' style={contentStyle}>{item.name}</h3>
                <Image
                    width={600}
                    src={picture}
                />
                <div className='carousel_description' style={contentStyle}>
                    {item.description}
                </div>
            </div>
        ))}
    </Carousel>
);