import path from 'path';
import type webpack from 'webpack';
import { webpackConfigBuild } from './config/webpack/config_build';
import { type Envs } from './config/webpack/types/types';

export default (env: Envs) => {
	const paths = {
		input: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		public: path.resolve(__dirname, 'public'),
		src: path.resolve(__dirname, 'src'),
	};

	const mode = env?.mode || 'development';
	const PORT = env?.port || 3000;

	const isDev = mode === 'development';

	const config: webpack.Configuration = webpackConfigBuild({
		mode,
		paths,
		isDev,
		port: PORT,
	});

	return config;
};
