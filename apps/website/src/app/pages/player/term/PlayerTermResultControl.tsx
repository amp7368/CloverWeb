import { playerTermKeys, PlaySessionSnapshot } from '@app/api';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

export interface ResultControlProps<T> {
    state: T;
    setState: (state: T) => void;
}
export function PlayerTermResultControl(
    props: ResultControlProps<keyof PlaySessionSnapshot>
) {
    return (
        <RadioGroup>
            {playerTermKeys.map((key) => (
                <FormControlLabel
                    key={key}
                    checked={props.state === key}
                    value={key}
                    label={key}
                    onClick={() => props.setState(key)}
                    control={<Radio />}
                />
            ))}
        </RadioGroup>
    );
}
