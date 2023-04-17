import {
    lowerCaseT,
    PlayerTermsResponse,
    PlaySessionSnapshot,
    PlaySessionTerm,
    TimeResolution,
} from '@app/api';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

export interface PlayerTermChartProps {
    result: PlayerTermsResponse;
    playerFirstRecorded: boolean;
    unit: TimeResolution;
    showField: keyof PlaySessionSnapshot;
}
export function PlayerTermChart(props: PlayerTermChartProps) {
    const allData: ChartData<'bar', PlaySessionTerm[]> = {
        datasets: datasets(props),
    };
    const options: ChartOptions<'bar'> = {
        scales: {
            xAxes: {
                display: true,
                type: 'time',
                bounds: 'data',
                time: {
                    unit: lowerCaseT(props.unit),
                },
            },
        },
    };
    return <Bar height="100vh" options={options} data={allData} />;
}

type Dataset = ChartDataset<'bar', PlaySessionTerm[]>;
function datasets(props: PlayerTermChartProps): Dataset[] {
    let data: PlaySessionTerm[];

    if (props.playerFirstRecorded) {
        data = [...props.result.terms];
        data.shift();
    } else data = props.result.terms;

    const datasets: Dataset[] = [
        {
            label: props.showField,
            data,
            parsing: {
                yAxisKey: `${props.showField}Delta`,
                xAxisKey: 'retrieved',
            },
        },
    ];
    console.log(data);
    return datasets;
}
