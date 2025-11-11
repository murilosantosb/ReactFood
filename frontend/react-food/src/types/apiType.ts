export interface apiRequestProps<T = unknown> {
    endpoint: string;
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body?: unknown
};