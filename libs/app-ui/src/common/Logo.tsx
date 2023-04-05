import { Box } from '@mui/material';

export interface LogoProps {
    href: string;
    size: string;
    img: string;
}
export function Logo(props: LogoProps) {
    return (
        <Box width={props.size} height={props.size}>
            <a href={props.href}>
                <img
                    src={props.img}
                    alt="Logo"
                    style={{
                        width: '500px',
                        height: '500px',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        border: '3px',
                        borderStyle: 'solid',
                        borderRadius: '50%',
                        borderColor: 'primary',
                    }}
                />
            </a>
        </Box>
    );
}
