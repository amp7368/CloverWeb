import { timeResolutionValues } from '@app/api';
import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export function PlayerFormTimeResolution() {
    const { control } = useFormContext();

    return (
        <FormControl component="fieldset">
            <FormLabel>Time Resolution </FormLabel>
            <FormHelperText>The interval on the time-axis</FormHelperText>
            <Controller
                name="timeResolution"
                control={control}
                render={({ field }) => (
                    <RadioGroup {...field} row>
                        {timeResolutionValues.map((resolution) => (
                            <FormControlLabel
                                value={resolution}
                                key={resolution}
                                label={resolution}
                                control={<Radio />}
                            />
                        ))}
                    </RadioGroup>
                )}
            />
        </FormControl>
    );
}
