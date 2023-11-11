import {
    CognitoUser,
    CognitoUserPool,
    AuthenticationDetails
  } from "amazon-cognito-identity-js";

const authProvider = ({ UserPoolId, ClientId }) => {
    const UserPool = new CognitoUserPool({
        UserPoolId,
        ClientId
    });

    return {
        login: ({ username, password }) =>

        new Promise((resolve, reject) => {
            console.log(username)
            const user = new CognitoUser({
            Username: username,
            Pool: UserPool
            });

            const authDetails = new AuthenticationDetails({
            Username: username,
            Password: password
            });
            user.authenticateUser(authDetails, {
            onSuccess: data => {
                resolve(data);
            },
            onFailure: err => {
                reject(err);
            },
            newPasswordRequired: data => {
                reject(data);
            }
            });
        }),
        logout: () => {
        const user = UserPool.getCurrentUser();
        if (user) {
            user.signOut();
        }
        return Promise.resolve();
        },
        // called when the API returns an error
        checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            const user = UserPool.getCurrentUser();
            if (user) {
            user.signOut();
            }
            return Promise.reject();
        }
        return Promise.resolve();
        },
        // called when the user navigates to a new location, to check for authentication
        checkAuth: ({ message, status, body }) =>
        new Promise((resolve, reject) => {
            const user = UserPool.getCurrentUser();
            if (user) {
            user.getSession((err, session) => {
                if (err) {
                reject();
                return;
                }
                resolve();
            });
            } else {
            reject();
            }
        }),
        getPermissions: () => Promise.resolve()
    };
};


export default authProvider
