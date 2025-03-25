import { FC } from 'react'
import {dataBase as data} from '../../../../dataBase/dataBase'
import { AntCarousel } from './antd/AntCarousel'

export const Carousel: FC = () => {
    return (
        <AntCarousel data={data} />
    )
}