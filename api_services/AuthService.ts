import { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApiService } from './BaseApiService';

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface LoginResponse {
    token?: string;
    message?: string;
    error?: string;
}

export class AuthService extends BaseApiService {
    constructor(request: APIRequestContext, baseURL: string) {
        super(request, baseURL);
    }

    /**
     * Login with credentials
     */
    async login(credentials: LoginCredentials): Promise<APIResponse> {
        return await this.post('/login', credentials);
    }

}