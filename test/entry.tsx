const requireHacker = require('require-hacker');

[ 'png',
  'jpg',
  'jpeg',
  'gif',
  'woff',
  'woff2',
  'ttf',
  'eot',
  'css',
  'svg',
].forEach((type) => {
  requireHacker.hook(type, () => `module.exports = ""`);
});
