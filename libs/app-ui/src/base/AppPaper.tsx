import { alpha, Paper, PaperProps, Theme } from '@mui/material';

type Opaceness = 'highest' | 'higher' | 'high' | 'normal' | 'low' | 'lower';
const OpacenessMap: Record<Opaceness, number> = {
    highest: 1,
    higher: 0.8,
    high: 0.7,
    normal: 0.5,
    low: 0.2,
    lower: 0.1,
};
export function AppPaper(
    props: PaperProps & { padding?: number; opacity?: Opaceness | number }
) {
    let opacity: number;
    if (typeof props.opacity === 'number') opacity = props.opacity;
    else opacity = OpacenessMap[props.opacity ?? 'higher'];
    return (
        <Paper
            {...props}
            sx={{
                padding: props.padding,
                borderRadius: '10px',
                bgcolor: ({ palette }: Theme) =>
                    alpha(palette.background.paper, opacity),
                ...props.sx,
            }}
        />
    );
}
