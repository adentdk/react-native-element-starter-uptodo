module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            tests: ['./tests/'],
            "@assets": "./src/assets",
            '@components': './src/components',
            "@screens": "./src/screens",
            "@theme": "./src/theme",
          }
        }
    ],
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "safe": false,
      "allowUndefined": true,
      "verbose": false
    }]
  ]
};
