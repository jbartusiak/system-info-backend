import "dotenv/config";

export const env = {
    port: Number.parseInt(process.env.APPLICATION_PORT || '0'),
    name: process.env.APPLICATION_NAME || '',
    execServiceAddress: process.env.EXEC_SERVICE_ADDRESS || '',
    dockerServiceAddress: process.env.DOCKER_SERVICE_ADDRESS || '',
}
