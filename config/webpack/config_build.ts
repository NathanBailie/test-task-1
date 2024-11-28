import type webpack from 'webpack';
import { type Options } from './types/types';
import { createPlugins } from './createPlugins';
import { createLoaders } from './createLoaders';
import { createResolvers } from './createResolvers';
import { createDevServer } from './createDevServer';

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
