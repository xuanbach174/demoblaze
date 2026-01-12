export const testData = {
    login: {
        url: 'https://www.demoblaze.com/',
        validUsername: 'admin123321!@#',
        validPassword: 'admin',
        invalidUsername: 'invalidUsername',
        invalidPassword: 'invalidPassword',
        errorMessage: ['User does not exist.', 'Wrong password.'],
        errorMessageWithEmptyUsername: 'Please fill out Username and Password.',
        usernameSQLInjection:"admin' OR '1'='1",
        passwordSQLInjection:"' OR '1'='1"
    },
};
