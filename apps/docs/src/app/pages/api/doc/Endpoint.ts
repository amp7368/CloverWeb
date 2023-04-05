export interface BaseEndpoint {
    method: EndpointType;
    queryParams: Record<string, JsonType>;
    headers: Record<string, JsonType>;
    body?: JsonType;
}

export type EndpointType = 'GET' | 'POST';
export interface JsonType {}
