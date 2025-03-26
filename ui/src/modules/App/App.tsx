import { FC } from 'react';
import { Page } from '../Page';
import { ConfigProvider } from 'antd';

export const App: FC = () => {

  return (
    <ConfigProvider
      theme={{
        components:{
          Carousel:{
            arrowSize: 60,
            arrowOffset: -30,
          },
        },
      }}
    >
        <Page />
    </ConfigProvider>
  )
}
