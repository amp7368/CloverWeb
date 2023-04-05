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
import { ReactNode } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { PlayerFormTimeResolution } from './PlayerFormTimeResolution';
import { PlayerFormSummary } from './summary/PlayerFormSummary';

export function PlayerPageForm() {
    const defaultValues: Partial<PlayerRequestForm> = {
        player: 'appleptr16',
        start: dayjs().subtract(2, 'week'),
        timeResolution: 'DAY',
        termsAfter: 100,
    };
    const methods = useForm<PlayerRequestForm>({ defaultValues });
    const { control } = methods;
    return (
        <FormProvider {...methods}>
            <AppPaper padding={4} sx={{ margin: 5 }}>
                <Stack alignItems="flex-start" spacing={2}>
                    <PlayerFormSummary />
                    <Controller
                        name="player"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="player"
                                helperText="The player to view"
                            />
                        )}
                    />
                    <Divider flexItem orientation="horizontal" />
                    <Controller
                        name="start"
                        control={control}
                        render={({ field }) => {
                            console.log(field);
                            return (
                                <DateField
                                    {...field}
                                    disableFuture
                                    label="start"
                                />
                            );
                        }}
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
                    <CoolButton>
                        <AppTypography variant="h6" color="text.secondary">
                            Run
                        </AppTypography>
                    </CoolButton>
                </Stack>
            </AppPaper>
        </FormProvider>
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
