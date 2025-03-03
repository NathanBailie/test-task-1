import { type ResolveOptions } from 'webpack';
import { Options } from './types/types';

export function createResolvers(options: Options): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [options.paths.src, 'node_modules'],
        preferAbsolute: true,
        mainFiles: ['index'],
        alias: {
            '@': options.paths.src,
        },
    };
}
