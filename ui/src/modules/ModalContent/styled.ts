import {styled} from 'styled-components';

export const ModalContentContainer = styled.div.attrs({className: 'modal-content-container'})`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ErrorMessage = styled.span`
    color: red;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;