import { type RuleSetRule } from 'webpack';
import { createBabelLoader } from './loaders/babelLoader';
import { createSassLoader } from './loaders/createSassLoader';
import { Options } from './types/types';

export function createLoaders(options: Options): RuleSetRule[] {
    const codeBabelLoader = createBabelLoader({ ...options, isTsx: false });
    const tsxBabelLoader = createBabelLoader({ ...options, isTsx: true });
    const { isDev } = options;

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    };

    const sassLoader = createSassLoader(isDev);

    return [fileLoader, svgLoader, codeBabelLoader, tsxBabelLoader, sassLoader];
}
