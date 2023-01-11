# Initial Config

## jest.config

```js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    coverageDirectory: "coverage",
    preset: "ts-jest",
    testEnvironment: "node",
    testRegex: "(/test/.*|(\\.|/)(test|spec))\\.(tsx?|jsx?)$"
}
```

## package.json

```json
{
  "name": "ts-lib-boilerplate",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "ts-node src/main.ts",
    "dev": "nodemon --watch 'src/**/*.ts' --exec ts-node src/main.ts",
    "build": "tsc",
    "test": "jest --coverage"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jest": "^29.2.5",
    "@types/node": "^18.11.18",
    "jest": "^29.3.1",
    "nodemon": "^2.0.20",
    "ts-jest": "^29.0.3",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.4"
  }
}

```

## tsconfig.json

```json
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "outDir": "dist",
        "strict": true,
        "sourceMap": true,
        "esModuleInterop": true
    }
}
```