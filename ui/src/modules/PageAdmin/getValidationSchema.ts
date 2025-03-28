import * as Yup from 'yup';

type Inputs = {
    title: string;
    picture: unknown;
    description: string;
  };

export const getValidationSchema = (): Yup.ObjectSchema<Inputs> =>
    Yup.object({
        title: Yup.string().required(),
        picture: Yup.string().required(),
        description: Yup.string().required(),
    });