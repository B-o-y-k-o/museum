import {FC} from 'react';
import { AntPage } from './antd/AntPage';
import { Header } from '../Header';
import { Carousel } from '../Carousel';

export const Page: FC = () => {
    return (
        <AntPage 
            headerContent={<Header />}
            mainContent={<Carousel />}
            footerContent={'footerContent'}
        />
    )
}