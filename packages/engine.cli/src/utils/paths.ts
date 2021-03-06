const { resolve } = require("path");

const ResolveRelativeToModule = (...segments) =>
  resolve(__dirname, ...segments);

const ResolveRelativeToCWD = (...segments) =>
  resolve(process.cwd(), ...segments);

const ResolveRelativeToApp = (appName, ...segments) =>
  ResolveRelativeToCWD(appName, ...segments);

export = {
  relativeToCWD: ResolveRelativeToCWD,
  relativeToApp: ResolveRelativeToApp,
  relativeToModule: ResolveRelativeToModule
};
