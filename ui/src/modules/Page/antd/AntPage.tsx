import {FC} from 'react';
import { Flex, Layout } from 'antd';
import { IPageProps } from '../types';
import { contentStyle, footerStyle, headerStyle, layoutStyle } from './antStyle';

const { Header, Footer, Content } = Layout;

export const AntPage: FC<IPageProps> = (props) => {
    const {headerContent, mainContent, footerContent} = props
    
    return (
        <Flex gap="middle" wrap>
            <Layout style={layoutStyle}>
                <Header style={headerStyle}>{headerContent}</Header>
                <Content style={contentStyle}>{mainContent}</Content>
                <Footer style={footerStyle}>{footerContent}</Footer>
            </Layout>
        </Flex>
    )
}