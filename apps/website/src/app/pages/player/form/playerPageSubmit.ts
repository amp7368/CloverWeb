import { PlayerRequestForm } from '@app/api';
import { SubmitHandler } from 'react-hook-form';

export const playerPageSubmit: SubmitHandler<PlayerRequestForm> = (form, e) => {
    e?.preventDefault();
    console.log(form);
};
