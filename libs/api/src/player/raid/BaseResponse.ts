export interface RaidDelta {
    delta: number;
}
export interface RaidSnapshot {
    raidCount: number;
}
export type RaidName =
    | 'The Nameless Anomaly'
    | "Orphion's Nexus of Light"
    | 'Nest of the Grootslangs'
    | 'The Canyon Colossus'
    | string;
export const raidNameValues: RaidName[] = [
    'The Nameless Anomaly',
    "Orphion's Nexus of Light",
    'Nest of the Grootslangs',
    'The Canyon Colossus',
].sort();
