const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/CucumberReports/',
	reportPath: 'cypress/CucumberReports/',
	metadata:{
        browser: {
            name: 'chrome',
            version: '134'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'BrightHorizons'},
            {label: 'Release', value: '1.0'},
            {label: 'Cycle', value: 'Beta01'},
            {label: 'Execution Start Time', value: 'Mar 12th 2024, 9:00 AM IST'},
            {label: 'Execution End Time', value: 'Mar 12th 2024, 10:00 AM IST'}
        ]
    }
});