import { PlayerRequestForm } from '@app/api';
import { AppPaper, AppTypography } from '@app/ui';
import {
    Button,
    ButtonProps,
    Divider,
    Stack,
    TextField,
    useTheme,
} from '@mui/material';
import { DateField } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { ReactNode } from 'react';
import {
    Controller,
    FormProvider,
    useForm,
    UseFormReturn,
} from 'react-hook-form';

import { FieldPlayerUsername } from '../../../components/FieldPlayerUsername';
import { PlayerFormTimeResolution } from './PlayerFormTimeResolution';
import { playerPageSubmit } from './playerPageSubmit';
import { PlayerFormSummary } from './summary/PlayerFormSummary';

interface PlayerPageFormWrapperProps {
    methods: UseFormReturn<PlayerRequestForm>;
    children: ReactNode[];
}
function PlayerPageFormWrapper(props: PlayerPageFormWrapperProps) {
    return (
        <FormProvider {...props.methods}>
            <form onSubmit={props.methods.handleSubmit(playerPageSubmit)}>
                <AppPaper padding={4} sx={{ margin: 5 }}>
                    <Stack alignItems="flex-start" spacing={2}>
                        {props.children}
                    </Stack>
                </AppPaper>
            </form>
        </FormProvider>
    );
}
export function PlayerPageForm() {
    const defaultValues: Partial<PlayerRequestForm> = {
        player: 'appleptr16',
        start: dayjs().subtract(2, 'week'),
        timeResolution: 'DAY',
        termsAfter: 100,
    };
    const methods = useForm<PlayerRequestForm>({
        defaultValues,
        criteriaMode: 'all',
    });
    const control = methods.control;
    return (
        <PlayerPageFormWrapper methods={methods}>
            <PlayerFormSummary />
            <Divider flexItem orientation="horizontal" />
            <FieldPlayerUsername />
            <Divider flexItem orientation="horizontal" />
            <Controller
                name="start"
                control={control}
                render={({ field }) => (
                    <DateField {...field} disableFuture label="start" />
                )}
            />
            <Divider flexItem orientation="horizontal" />
            <Controller
                name="termsAfter"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="termsAfter"
                        helperText="The number of {Time Resolution} to include in the result"
                    />
                )}
            />
            <PlayerFormTimeResolution />
            <CoolButton buttonProps={{ type: 'submit' }}>
                <AppTypography variant="h6" color="text.secondary">
                    Run
                </AppTypography>
            </CoolButton>
        </PlayerPageFormWrapper>
    );
}
interface CoolButtonProps {
    buttonProps?: ButtonProps;
    size?: number;
    children: ReactNode;
}
function CoolButton(props: CoolButtonProps) {
    const { palette } = useTheme();
    const color = palette.background.paper;
    const { dark, light } = palette.augmentColor({ color: { main: color } });

    const size = props.size ?? 2;
    const unit2 = 2 * size + 'px';
    const unit3 = 3 * size + 'px';

    return (
        <Button
            {...props.buttonProps}
            sx={{
                background: `linear-gradient(to right bottom, ${dark}, ${light});`,
                boxShadow: `inset ${dark} ${unit2} ${unit2} ${unit3},
                    inset ${light} -${unit2} -${unit2} ${unit3};`,
                ...props.buttonProps?.sx,
            }}
        >
            {props.children}
        </Button>
    );
}
