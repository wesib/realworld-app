module.exports = {
  preset: 'ts-jest',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: '@wesib/realworld-app',
        outputDirectory: './target/test-results',
        classNameTemplate: '{classname}: {title}',
        titleTemplate: '{classname}: {title}',
        ancestorSeparator: ' › ',
        usePathForSuiteName: 'true',
      },
    ],
  ],
  globals: {
    'ts-jest': {
      packageJson: 'package.json',
      tsConfig: 'tsconfig.spec.json',
    },
  },
};
