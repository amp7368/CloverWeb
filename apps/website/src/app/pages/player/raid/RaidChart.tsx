import {
    PlayerRaidResponse,
    PlayerRaidTerm,
    TimeResolution,
    lowerCaseT,
    raidNameValues,
} from '@app/api';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

export interface RaidChartProps {
    result: PlayerRaidResponse;
    playerFirstRecorded: boolean;
    unit: TimeResolution;
}
export function RaidChart(props: RaidChartProps) {
    const allData: ChartData<'bar', PlayerRaidTerm[]> = {
        datasets: datasets(props.result, props.playerFirstRecorded),
    };

    const options: ChartOptions<'bar'> = {
        scales: {
            xAxes: {
                display: true,
                type: 'time',
                bounds: 'ticks',
                time: {
                    unit: lowerCaseT(props.unit),
                },
            },
        },
    };
    return <Bar height="100vh" options={options} data={allData} />;
}

type Dataset = ChartDataset<'bar', PlayerRaidTerm[]>;
function datasets(result: PlayerRaidResponse, cutData: boolean): Dataset[] {
    let data: PlayerRaidTerm[];

    if (cutData) {
        data = [...result.terms];
        data.shift();
    } else data = result.terms;

    const datasets: Dataset[] = [];
    for (const raidName of raidNameValues) {
        datasets.push({
            label: raidName,
            data,
            parsing: {
                yAxisKey: `raids.${raidName}.total.delta`,
                xAxisKey: 'retrieved',
            },
        });
    }
    return datasets;
}
