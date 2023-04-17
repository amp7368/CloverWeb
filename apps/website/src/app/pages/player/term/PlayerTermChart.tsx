import { PlaySessionTerm, PlayerTermsResponse } from '@app/api';
import { useTheme } from '@mui/material';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

export interface PlayerTermChartProps {
    result: PlayerTermsResponse;
    playerFirstRecorded: boolean;
}
export function PlayerTermChart(props: PlayerTermChartProps) {
    const allData: ChartData<'bar', PlaySessionTerm[]> = {
        datasets: datasets(props.result, props.playerFirstRecorded),
    };
    const options: ChartOptions<'bar'> = {
        scales: {
            xAxes: {
                display: true,
                type: 'time',
                bounds: 'data',
                time: {
                    tooltipFormat: 'll HH:mm',
                    unit: 'day',
                    displayFormats: {
                        day: 'MM/DD/YYYY',
                    },
                },
            },
        },
    };
    const color = useTheme().palette.text.primary;
    return <Bar height="100vh" options={options} data={allData} />;
}

type Dataset = ChartDataset<'bar', PlaySessionTerm[]>;
function datasets(result: PlayerTermsResponse, cutData: boolean): Dataset[] {
    let data: PlaySessionTerm[];

    if (cutData) {
        data = [...result.terms];
        data.shift();
    } else data = result.terms;

    const datasets: Dataset[] = [
        {
            label: 'Playtime',
            data,
            parsing: {
                yAxisKey: 'playtimeDelta',
                xAxisKey: 'retrieved',
            },
        },
    ];
    return datasets;
}
