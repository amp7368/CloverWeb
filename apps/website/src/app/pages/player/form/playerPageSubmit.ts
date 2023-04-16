import { PlayerRequest, PlayerRequestForm } from '@app/api';
import { SubmitHandler } from 'react-hook-form';
import { requestPlayerTerm } from '../../../elf/player/term/PlayerTerm.request';

export const playerPageSubmit: SubmitHandler<PlayerRequestForm> = (form, e) => {
    e?.preventDefault();
    const request: PlayerRequest = { ...form, start: form.start.toDate() };
    requestPlayerTerm(request);
};
