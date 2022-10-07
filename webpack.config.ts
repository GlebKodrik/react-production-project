import path from 'path';
import buildWebpackConfig from './config/build/buildWebpackConfig';
import { BuildEvn, BuildMode, BuildPaths } from './config/build/types/types';

export default (env: BuildEvn) => {
  const PATHS: BuildPaths = {
    BUILD: path.resolve(__dirname, 'dist'),
    ENTRY: path.resolve(__dirname, 'src', 'index.tsx'),
    HTML: path.resolve(__dirname, 'public', 'index.html'),
  };

  const ANALYZER = env.analyzer;
  const PORT = env.port || 3000;
  const MODE: BuildMode = env.mode || 'development';
  const IS_DEV = MODE === 'development';

  return buildWebpackConfig({
    MODE,
    PORT,
    PATHS,
    IS_DEV,
    ANALYZER,
  });
};
