import { FC } from 'react';
import { PageUser } from '../Page';
import { PageAdmin } from '../PageAdmin';
import { Route, Routes } from 'react-router-dom';

export const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<PageUser />} />
      <Route path='/admin' element={<PageAdmin />} />
    </Routes>
  )
}
