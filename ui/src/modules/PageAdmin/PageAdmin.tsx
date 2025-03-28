import { FC, useState } from 'react';
import { ButtonContainer, CarouselContainer, FormContainer, FormContentContainer, HeaderPage, MainPage, PageStyled, PictureContainer, TableContainer, TitlePage } from './styled';
import GerbPicture from '../../icons/gerb_svg.svg';
import LogoPicture from '../../picture/logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { ModalContent } from '../ModalContent';
import { useSelector } from 'react-redux';
import { adminSlice } from './adminSlice';
import { FormContent } from './FormContent';

export const PageAdmin: FC = () => {
    const [showType, setShowType] = useState<'form' | 'table'>('table')
    const isShowModal = useSelector(adminSlice.selectors.isShowModalAuth);
    const isAdmin = useSelector(adminSlice.selectors.isAdminUser)
    const navigate = useNavigate();

    const isShowForm = Boolean(isAdmin && showType === 'form');
    const isShowTable = Boolean(isAdmin && showType === 'table');

    return (
        <PageStyled>
            <HeaderPage>
                ГБОУ СОШ № 323 Невского района Санкт-Петербурга
                <Link to='/'>
                    <img style={{background: 'none'}} src={GerbPicture}/>
                </Link>
            </HeaderPage>
            <TitlePage>
                Панель администратора
            </TitlePage>
            <MainPage>
                <CarouselContainer>
                    <PictureContainer>
                        <img 
                            style={{width: '200px'}} 
                            src={LogoPicture} 
                        />
                    </PictureContainer>
                    <ButtonContainer onClick={() => setShowType('form')}>Добавить фото</ButtonContainer>
                    {isShowForm && 
                        <FormContainer>
                            <HeaderPage>Добавить фото</HeaderPage>
                            <FormContentContainer>
                                <FormContent />
                            </FormContentContainer>
                        </FormContainer>
                    }
                    {isShowTable &&
                        <TableContainer>

                        </TableContainer>
                    }
                </CarouselContainer>
            </MainPage>
            <Modal 
                open={isShowModal} 
                title="Войдите в систему" 
                onCancel={() => navigate('/')}
                footer={null}
                centered
            >
                <ModalContent />
            </Modal>
        </PageStyled>
    )
}