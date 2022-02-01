module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['react-native-reanimated/plugin'],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            services: './src/services',
            screens: './src/screens',
            types: './src/types',
            utils: './src/utils',
            components: './src/components',
          },
        },
      ],
    ],
  };
};
