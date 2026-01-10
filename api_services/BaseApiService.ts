import { APIRequestContext, APIResponse } from '@playwright/test';

export class BaseApiService {
    readonly request: APIRequestContext;
    readonly baseURL: string;

    constructor(request: APIRequestContext, baseURL: string) {
        this.request = request;
        this.baseURL = baseURL;
    }

    /**
     * Generic GET request
     */
    async get(endpoint: string, options?: { headers?: Record<string, string>, params?: Record<string, string> }): Promise<APIResponse> {
        const url = `${this.baseURL}${endpoint}`;
        return await this.request.get(url, {
            headers: options?.headers,
            params: options?.params
        });
    }

    /**
     * Generic POST request
     */
    async post(endpoint: string, data?: any, options?: { headers?: Record<string, string> }): Promise<APIResponse> {
        const url = `${this.baseURL}${endpoint}`;
        return await this.request.post(url, {
            data: data,
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers
            }
        });
    }

    /**
     * Generic PUT request
     */
    async put(endpoint: string, data?: any, options?: { headers?: Record<string, string> }): Promise<APIResponse> {
        const url = `${this.baseURL}${endpoint}`;
        return await this.request.put(url, {
            data: data,
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers
            }
        });
    }

    /**
     * Generic DELETE request
     */
    async delete(endpoint: string, options?: { headers?: Record<string, string> }): Promise<APIResponse> {
        const url = `${this.baseURL}${endpoint}`;
        return await this.request.delete(url, {
            headers: options?.headers
        });
    }

    /**
     * Generic PATCH request
     */
    async patch(endpoint: string, data?: any, options?: { headers?: Record<string, string> }): Promise<APIResponse> {
        const url = `${this.baseURL}${endpoint}`;
        return await this.request.patch(url, {
            data: data,
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers
            }
        });
    }
}