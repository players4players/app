const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);

const appNodeModules = path.resolve(projectRoot, 'node_modules');
const workspaceNodeModules = path.resolve(projectRoot, '..', 'node_modules');
const shimsRoot = path.resolve(projectRoot, 'src', 'shims');
const shimAliases = {
  '@env': path.resolve(projectRoot, 'config', 'env.local.js'),
  '@appType': path.resolve(projectRoot, 'src', 'appType.js'),
  '@controleonline/ui-common/src/api': path.resolve(shimsRoot, 'uiCommonApi.js'),
  '@controleonline/ui-common/src/utils/formatter': path.resolve(
    shimsRoot,
    'uiCommonFormatter.js',
  ),
  '@store': path.resolve(
    projectRoot,
    'node_modules',
    '@controleonline',
    'ui-common',
    'src',
    'react',
    'stores',
    'index.js',
  ),
  '@stores': path.resolve(shimsRoot, 'store.js'),
  '@controleonline/ui-common/src/react/components/MessageService': path.resolve(
    shimsRoot,
    'messageService.js',
  ),
  '@controleonline/../../src/styles/branding': path.resolve(shimsRoot, 'branding.js'),
};

config.useWatchman = false;

config.resolver.nodeModulesPaths = [
  appNodeModules,
  workspaceNodeModules,
];

config.resolver.extraNodeModules = {
  ...(config.resolver.extraNodeModules || {}),
  ...shimAliases,
  react: path.resolve(appNodeModules, 'react'),
  'react-native': path.resolve(appNodeModules, 'react-native'),
};

config.resolver.resolveRequest = (context, moduleName, platform) => {
  const alias = shimAliases[moduleName];

  if (alias) {
    return context.resolveRequest(context, alias, platform);
  }

  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
