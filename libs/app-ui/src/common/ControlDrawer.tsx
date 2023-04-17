import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Box, IconButton, Slide, useTheme } from '@mui/material';
import { ReactNode, useCallback, useRef, useState } from 'react';

export interface ControlDrawerProps {
    children: ReactNode;
    bgcolor: string;
    width: string;
}
export function ControlDrawer(props: ControlDrawerProps) {
    const [isOpen, setOpen] = useState(true);
    const toggleOpen = useCallback(() => setOpen((s) => !s), [setOpen]);
    const zIndex = useTheme().zIndex.appBar;
    const ref = useRef(null);
    return (
        <Slide direction="right" appear={false} in={isOpen}>
            <Box
                id="sidebar"
                position="fixed"
                left={0}
                top={0}
                height="100vh"
                width={props.width}
                bgcolor={props.bgcolor}
            >
                <Box
                    ref={ref}
                    height="100%"
                    marginTop="7.5rem"
                    padding={2}
                    sx={{ zIndex: zIndex + 1 }}
                >
                    {props.children}
                </Box>
            </Box>
        </Slide>
    );
}
