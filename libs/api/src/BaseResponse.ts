export interface AppException {
    message: string;
    status: number;
    isOk: false;
    data?: unknown;
}
export type AppResponseOK<T = unknown> = {
    status: 200 | 201 | 202;
    isOk: true;
} & T;
export type AppResponse<OnOk = unknown> = AppException | (AppResponseOK & OnOk);
