import { Inject, Injectable } from '@nestjs/common';
import path from 'path';
import * as dotenv from 'dotenv';
import * as fs from 'fs';


@Injectable()
export class ConfigService {
    private readonly envConfig: string;

    constructor(@Inject('CONFIG_OPTIONS') private options: Record<string, any>) {
        this.envConfig = options.folder;
    }

    get(): string {
        return this.envConfig;
    }
}
