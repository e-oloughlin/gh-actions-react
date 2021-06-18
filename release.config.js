module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/e-oloughlin/gh-actions-react/',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ]
};
