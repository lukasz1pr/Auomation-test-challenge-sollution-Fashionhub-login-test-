import * as fs from 'fs';
import * as path from 'path';

const configPath = path.resolve(__dirname, 'config.json');
const configFile = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

export const getBaseUrl = (): string => {
    
    const env = process.env.TEST_ENV || configFile.defaultEnvironment;

    const urls: Record<string, string> = {
        local: 'http://localhost:4000/fashionhub/',
        staging: 'https://staging-env/fashionhub/',
        production: 'https://pocketaces2.github.io/fashionhub/'
    };

    if (!urls[env]) {
        throw new Error(`Environment '${env}' is not supported.`);
    }

    return urls[env];
};