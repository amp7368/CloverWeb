import normalizeUrl, { Options } from 'normalize-url';

const normalizeOptions: Options = { defaultProtocol: 'https' };

export const links = {
    playerManyUUID: {
        url: function (name: string) {
            if (!name.match(/^[-a-zA-Z0-9_]+$/))
                throw 'username has invalid character(s)!';
            return normalizeUrl(
                'https://wynncloud.com/v1/player/uuid/many/' + name,
                normalizeOptions
            );
        },
        debounce: 150,
    },
};
