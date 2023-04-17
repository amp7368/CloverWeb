import { AppPaper, AppTypography } from '@app/ui';
import { ReactNode } from 'react';

export interface ResultSectionWrapperProps {
    children?: ReactNode;
}
export function ResultSectionWrapper(props: ResultSectionWrapperProps) {
    return (
        <AppPaper
            sx={{
                maxWidth: '50%',
                width: 'auto',
                minWidth: '60rem',
                maxHeight: 'calc(100vh - 10rem)',
                flexGrow: 1,
                padding: 2,
            }}
        >
            {props.children ?? <NoData />}
        </AppPaper>
    );
}
function NoData() {
    return <AppTypography variant="h4">No Data to Display</AppTypography>;
}
