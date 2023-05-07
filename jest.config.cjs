module.exports =  {
  "moduleFileExtensions": [
    "js",
    "json",
    "ts"
  ],
    "bail": true,
    "notify": true,
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "collectCoverageFrom": [
    "*/.(t|j)s"
  ],
    "coverageDirectory": "coverage",
    "moduleNameMapper": {
    "^@src/(.*)$": "<rootDir>/src",
      "^@app/(.*)$": "<rootDir>/src/$1",
      "^@config/(.*)$": "<rootDir>/src/Configurations/$1",
      "^@common/(.*)$": "<rootDir>/src/Common/$1"
  },
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/dist/",
    "<rootDir>/src/main.ts",
    ".*\\.e2e-spec\\.ts"
  ],
    "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/dist/",
    "<rootDir>/src/main.ts",
    ".*\\.e2e-spec\\.ts"
  ]
}
