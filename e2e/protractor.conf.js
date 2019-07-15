exports.config = {
    allScriptsTimeout: 50000,
    specs: ['./src/features/**/*.feature'],
    capabilities: {
        browserName: 'chrome',
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        format: ['json:e2e/report/results.json'],
        require: ['report/cucumber-screenshot.js', './src/steps/**/*.steps.ts'],
        tags: true,
        profile: false,
        'no-source': true,
    },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json'),
        });
    },
};
