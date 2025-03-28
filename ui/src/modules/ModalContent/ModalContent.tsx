import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { adminAuth, closeModalAuth } from '../PageAdmin/adminSlice';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Modal, Typography  } from 'antd';
import { useState } from 'react';
import { ErrorMessage, InputContainer, ModalContentContainer } from './styled';
import { yupResolver } from '@hookform/resolvers/yup'
import { getValidationSchema } from './getValidationSchema';

const { Text } = Typography;

type Inputs = {
  login: string;
  password: string;
};

export const ModalContent = () => {
    const [showAlert, setShowAlert] = useState<boolean>(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        handleSubmit,
        control,
    } = useForm<Inputs>({
        reValidateMode: 'onChange',
        resolver: yupResolver(getValidationSchema())
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if(data.login === 'admin' && data.password === 'admin') {
            dispatch(adminAuth());
            dispatch(closeModalAuth());
            return
        } 
        return setShowAlert(true);
    };

    const closeAlert = () => {
        navigate('/');
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalContentContainer>
                        <InputContainer>
                            <Text>Имя пользовател:</Text>
                            <Controller 
                                name='login' 
                                control={control} 
                                render={({field, fieldState}) => (
                                    <>
                                        <Input
                                            placeholder='Введите'
                                            {...field}
                                        />
                                        {fieldState.error && <ErrorMessage >Не должно быть пустым!</ErrorMessage>}
                                    </>
                                ) }
                            />
                        </InputContainer>
                    <InputContainer>
                        <Text>Пароль:</Text>
                        <Controller 
                            name='password'
                            control={control}
                            render={({field, fieldState}) => (
                                <>
                                    <Input 
                                        placeholder='Введите'
                                        type='password'
                                        {...field}
                                    />
                                    {fieldState.error && <ErrorMessage >Не должно быть пустым!</ErrorMessage>}
                                </>
                                
                            )}
                        />
                    </InputContainer>
                    
                    
                    <Button htmlType='submit'>Войти</Button>
                </ModalContentContainer>
            </form>
            <Modal
                open={showAlert}
                title='Ошибка'
                footer={null}
                onCancel={closeAlert}
            >
                <p>Неправильный логин или пароль!</p>
            </Modal>
        </>
    );
};
