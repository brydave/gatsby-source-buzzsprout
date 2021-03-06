module.exports = {
  presets: [
    [
      'babel-preset-gatsby-package',
      { browser: true, debug: process.env.NODE_ENV === 'development' },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
  ],
};
