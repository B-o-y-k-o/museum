import { FC } from 'react';
import { ErrorMessage, FormContentContainer, InputContainer } from './styled';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button, Input, Typography, message, Upload, UploadProps } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import { getValidationSchema } from './getValidationSchema';
import { InboxOutlined } from '@ant-design/icons';

type Inputs = {
    title: string;
    picture?: unknown;
    description: string;
};

export const FormContent: FC = () => {
    const { handleSubmit, control } = useForm<Inputs>({
        reValidateMode: 'onChange',
        resolver: yupResolver(getValidationSchema()),
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log('data', data);
    };

    const { Text } = Typography;
    const { TextArea } = Input;
    const { Dragger } = Upload;

    const PropsDragger: UploadProps = {
        name: 'file',
        multiple: false,
        action: 'https://660d2bd9',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
        },
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormContentContainer>
            <InputContainer>
                <Text>Название:</Text>
                <Controller
                name='title'
                control={control}
                render={({ field, fieldState }) => (
                    <>
                    <Input
                        placeholder='Введите'
                        {...field}
                    />
                    {fieldState.error && <ErrorMessage>Не должно быть пустым!</ErrorMessage>}
                    </>
                )}
                />
            </InputContainer>
            <InputContainer>
                <Text>Описание:</Text>
                <Controller
                name='description'
                control={control}
                render={({ field, fieldState }) => (
                    <>
                    <TextArea
                        placeholder='Введите'
                        {...field}
                    />
                    {fieldState.error && <ErrorMessage>Не должно быть пустым!</ErrorMessage>}
                    </>
                )}
                />
            </InputContainer>
            <InputContainer>
                <Text>Фото:</Text>
                <Controller
                name='picture'
                control={control}
                render={({ field, fieldState }) => (
                    <>
                    <Dragger {...field} {...PropsDragger}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Кликните или перетащите для добавления фото</p>
                    </Dragger>
                    {fieldState.error && <ErrorMessage>Не должно быть пустым!</ErrorMessage>}
                    </>
                )}
                />
            </InputContainer>

            <Button htmlType='submit'>Войти</Button>
            </FormContentContainer>
        </form>
        </>
    );
};
