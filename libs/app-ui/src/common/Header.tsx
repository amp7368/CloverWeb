import { AppBar, Box, Button, Divider, Stack } from '@mui/material';

import { AppTypography } from '../base/AppTypography';
import { Logo } from './Logo';

function AppLink(props: LinkProps) {
    const isRoute = location.pathname === props.route;
    return (
        <Button variant="text" href={props.route}>
            <AppTypography
                color="text.primary"
                sx={{ textDecoration: isRoute ? 'underline' : 'normal' }}
                variant="h4"
            >
                {props.title}
            </AppTypography>
        </Button>
    );
}
export interface LinkProps {
    route: string;
    title: string;
}
export interface HeaderProps {
    variant?: 'column' | 'row';
    home: LinkProps;
    links: LinkProps[];
    bgcolor: string;
    logo: string;
}
export function Header(props: HeaderProps) {
    return (
        <Stack marginBottom={3}>
            <AppBar
                position="static"
                sx={{
                    height: '4rem',
                    bgcolor: props.bgcolor,
                    zIndex: (theme) => theme.zIndex.appBar,
                }}
            >
                <Stack direction="row">
                    <Box height="4rem" width="7.5rem">
                        <Logo
                            size="7.5rem"
                            href={props.home.route}
                            img={props.logo}
                        />
                    </Box>
                    <Stack
                        justifyContent="flex-start"
                        spacing={4}
                        alignItems="center"
                        direction="row"
                        divider={
                            <Divider
                                flexItem
                                orientation="vertical"
                                variant="fullWidth"
                            />
                        }
                    >
                        {props.links.map((link) => (
                            <AppLink key={link.route} {...link} />
                        ))}
                    </Stack>
                </Stack>
            </AppBar>
        </Stack>
    );
}
