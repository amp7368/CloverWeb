export interface PlaySessionTerm {
    retrieved: Date;
    playtimeDelta: number;
    combatDelta: number;
    itemsIdentifiedDelta: number;
    mobsKilledDelta: number;
    totalProfLevelDelta: number;
}
export interface PlaySessionSnapshot {
    playtime: number;
    combat: number;
    itemsIdentified: number;
    mobsKilled: number;
    totalProfLevel: number;
}
export interface PlayerTermsResponse {
    requestedStart: Date;
    requestedEnd: Date;
    terms: PlaySessionTerm[];
    startingSnapshot: PlaySessionSnapshot;
    endingSnapshot: PlaySessionSnapshot;
}
