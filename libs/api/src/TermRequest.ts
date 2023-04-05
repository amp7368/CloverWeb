import dayjs, { Dayjs } from 'dayjs';

export interface TermRequest {
    timeResolution: TimeResolution;
    start: Date;
    termsAfter: number;
}

export type TimeResolution = 'HOUR' | 'DAY' | 'WEEK' | 'MONTH';
export type TimeResolutionLower = Lowercase<TimeResolution>;
export const timeResolutionValues: TimeResolution[] = [
    'HOUR',
    'DAY',
    'WEEK',
    'MONTH',
];
export function addTimeResolution(
    start?: Dayjs,
    timeResolution?: TimeResolution,
    termsAfter?: number
): Dayjs {
    if (!start || !timeResolution || !termsAfter) return dayjs();
    return start.add(termsAfter, lowerCase(timeResolution));
}
function lowerCase<T extends string>(val: T): Lowercase<T> {
    return val.toLowerCase() as Lowercase<T>;
}
