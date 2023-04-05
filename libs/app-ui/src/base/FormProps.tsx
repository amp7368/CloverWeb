import { Paper, Stack } from '@mui/material';
import { FormHTMLAttributes } from 'react';

type FormProps = FormHTMLAttributes<HTMLFormElement>;
export type CenterFormProps = FormProps & {
    padding?: number;
};
export function CenterForm(props: CenterFormProps) {
    const { children, padding = 3, ...formProps } = props;
    return (
        <form {...formProps}>
            <Stack alignItems="center">
                <Paper sx={{ padding: padding }}>{children}</Paper>
            </Stack>
        </form>
    );
}
