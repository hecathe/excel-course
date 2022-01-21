module.exports = {
  modulePaths: ['src'],
  moduleNameMapper: {
    '^src/(.*)': '<src>\\yourPath\\$1',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\](?!@myBem)(.+)[/\\\\].+\\.(js|jsx)',
  ],
};
