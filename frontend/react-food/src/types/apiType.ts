export interface apiRequestProps<T> {
    endpoint: string;
    method: "get" | "post" | "put" | "patch" | "delete";
    body?: any;
    autofetch?: boolean;
};