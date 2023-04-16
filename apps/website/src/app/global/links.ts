import normalizeUrl, { Options } from 'normalize-url';

const normalizeOptions: Options = { defaultProtocol: 'https' };
const base_url_v1 = 'https://wynncloud.com/v1';
export const links = {
    playerManyUUID: {
        url: function (name: string) {
            if (!name.match(/^[-a-zA-Z0-9_]+$/))
                throw 'username has invalid character(s)!';
            return normalizeUrl(
                `${base_url_v1}/player/uuid/many/${name}`,
                normalizeOptions
            );
        },
        debounce: 150,
    },
    playerTerm: {
        url: () => `${base_url_v1}/player/term`,
        debounce: 2000,
    },
};
