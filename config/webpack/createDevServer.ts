import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { type Options } from './types/types';

export function createDevServer(options: Options): DevServerConfiguration {
    return {
        open: true,
        port: options.port,
        historyApiFallback: true,
        hot: true,
    };
}
