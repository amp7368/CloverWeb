import { PlaySessionTerm } from '@app/api';
import { useTheme } from '@mui/material';
import { ChartData } from 'chart.js';
import { Line } from 'react-chartjs-2';

export interface PlayerTermChartProps {
    terms: PlaySessionTerm[];
    playerFirstRecorded: boolean;
}
export function PlayerTermChart(props: PlayerTermChartProps) {
    const xAxisKey = 'retrieved';
    let data: PlaySessionTerm[];
    if (props.playerFirstRecorded) {
        data = [...props.terms];
        data.shift();
    } else data = props.terms;

    const allData: ChartData<'line', PlaySessionTerm[]> = {
        datasets: [
            {
                label: 'Playtime',
                data,
                parsing: {
                    yAxisKey: 'playtimeDelta',
                    xAxisKey,
                },
            },
        ],
    };
    const color = useTheme().palette.text.primary;
    return <Line data={allData} />;
}
