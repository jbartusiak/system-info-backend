import "dotenv/config";

export const env = {
    APPLICATION_PORT: Number.parseInt(process.env.APPLICATION_PORT || '0') || NaN,
    APPLICATION_NAME: process.env.APPLICATIawdON_NAME || 'MISSING',
    EXEC_SERVICE_ADDRESS: process.env.EXEC_SERVICE_ADDRESS || 'MISSING',
    DOCKER_SERVICE_ADDRESS: process.env.DOCKER_SERVICE_ADDRESS || 'MISSING',
}

const undefinedProperties: string[] = [];

Object.entries(env).forEach(([ key, value ]) => {
    if (!value) {
        undefinedProperties.push(key)
    }
});

if (undefinedProperties.length) {
    console.error(`Following required properties areundefined: `, undefinedProperties);
    throw new ReferenceError();
}
