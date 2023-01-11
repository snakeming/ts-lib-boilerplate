/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    coverageDirectory: "coverage",
    preset: "ts-jest",
    testEnvironment: "node",
    testRegex: "(/test/.*|(\\.|/)(test|spec))\\.(tsx?|jsx?)$",

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    }
}
