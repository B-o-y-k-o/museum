import { FC } from 'react'
import { AntCarousel } from './antd/AntCarousel'
import axios from 'axios'

export const Carousel: FC = () => {
    const data = axios.get('http://localhost:3000/app/museumData')
        .then((res) => {
            console.log('@@@res', res.data)
        })

    return (
        <AntCarousel data={} />
    )
}