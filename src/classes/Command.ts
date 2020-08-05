export interface CommandRequest {
    elevate: boolean;
    command: string;
}

export interface CommandResponse {
    command: string;
    exception: boolean;
    result: string[];
    tta: number;
}
