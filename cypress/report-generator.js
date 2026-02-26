import report from "multiple-cucumber-html-reporter";

report.generate({
    jsonDir: "cypress/reports",
    reportPath: "cypress/reports",
    metadata: {
        browser: {
            name: "chrome",
            version: "100",
        },
        device: "Local test machine",
        platform: {
            name: "ubuntu",
            version: "20.04",
        },
    },
    customData: {
        title: "Run info",
        data: [
            { label: "Project", value: "Vibrans Barbershop" },
            { label: "Release", value: "0.1.0" },
            { label: "Execution Start Time", value: new Date().toISOString() },
        ],
    },
});
