import * as Keychain from 'react-native-keychain'

const ACCESS_TOKEN_KEY = 'jwtToken';

const secureStorage = {
    saveToken: async (token) => {
        try {
            await Keychain.setGenericPassword(ACCESS_TOKEN_KEY, token, {service: ACCESS_TOKEN_KEY});
        } catch(error) {
            console.error(`Error: ${error}`);
        }
    },

    getToken: async (key) => {
        try {
            const result = await Keychain.getGenericPassword({ service: key });
            return result.password;
        } catch(error) {
            console.error(`Error: ${error}`);
        }
    }
}

export { ACCESS_TOKEN_KEY, secureStorage }