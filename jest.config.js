module.exports = {
  "preset": 'ts-jest',
  "testEnvironment": 'node',
  "roots": [
    "<rootDir>/"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/src/**.{js,jsx,ts,tsx}",
    "!**/*.{d.ts}",
    "!**/node_modules/**",
    "!**/dist/**"
  ]
  // "coverageThreshold": {
  //   "global": {
  //     "branches": 100,
  //     "functions": 100,
  //     "lines": 100,
  //     "statements": 100
  //   }
  // }
}