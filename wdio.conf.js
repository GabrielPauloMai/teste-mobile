export const config = {
    // runner: 'local',
    // port: 4723,
    user: 'gabriel.mai',
    key: '4343fba2-28fd-4a9d-b279-94559f226f7c',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    // capabilities: [{
    //     platformName: 'Android',
    //     'appium:deviceName': 'ebac_estudos',
    //     'appium:platformVersion': '14.0',
    //     'appium:automationName': 'UiAutomator2',
    //     'appium:app': `${process.cwd()}/app/ebacshop.apks`,
    //     'appium:appWaitActivity': '.MainActivity',
    //     'appium:disableIdLocatorAutocompletion': true,
    // }],

    capabilities: [{
        platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
        'appium:deviceName': 'Google.*',
        'appium:platformVersion': '14',
        'appium:automationName': 'UiAutomator2',
        'appium:disableIdLocatorAutocompletion': true,
        'sauce:options': {
           build: 'appium-build-teste-ebacshop',
           name: 'Ebac Shop Test',
           deviceOrientation: 'PORTRAIT',
            appiumVersion: 'latest',
         },
       }],
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
