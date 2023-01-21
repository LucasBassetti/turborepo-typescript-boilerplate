module.exports = {
  root: true,
  extends: ['custom'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['./apps/web/src', 'src'],
      },
    },
  },
};
