module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
  "eslint.workingDirectories": [
    { directory: "client/", changeProcessCWD: true },
    { directory: "server/", changeProcessCWD: true },
  ],
};
