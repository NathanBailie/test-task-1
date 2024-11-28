import type webpack from 'webpack';
import { createDevServer } from './createDevServer';
import { createLoaders } from './createLoaders';
import { createPlugins } from './createPlugins';
import { createResolvers } from './createResolvers';
import { type Options } from './types/types';

export function webpackConfigBuild(options: Options): webpack.Configuration {
	const { mode, paths, isDev } = options;
	const { input, output } = paths;

	return {
		mode,
		entry: {
			bundle: input,
		},
		output: {
			filename: '[name].[contenthash].js',
			path: output,
			clean: true,
			publicPath: '/',
		},
		plugins: createPlugins(options),
		module: {
			rules: createLoaders(options),
		},
		resolve: createResolvers(options),
		devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
		devServer: isDev ? createDevServer(options) : undefined,
	};
}
