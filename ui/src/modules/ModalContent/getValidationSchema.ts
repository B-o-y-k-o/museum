import * as Yup from 'yup';

type Inputs = {
    login: string;
    password: string;
  };

export const getValidationSchema = (): Yup.ObjectSchema<Inputs> =>
    Yup.object({
        login: Yup.string().required(),
        password: Yup.string().required(),
    });