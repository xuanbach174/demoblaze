import { test as base, APIRequestContext } from "@playwright/test";
import { AuthService } from "../api_services/AuthService";


type ApiFixtures = {
    authService: AuthService;
    request: APIRequestContext;
};

export const test = base.extend<ApiFixtures>({
    request: async ({ request }, use) => {
        await use(request);
    },

    authService: async ({ request }, use) => {
        // You can set the base URL from environment variable in .env file
        const baseURL = process.env.API_BASE_URL || 'https://api.demoblaze.com';
        const authService = new AuthService(request, baseURL);
        await use(authService);
    },

});