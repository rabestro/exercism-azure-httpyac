console.info("Hello!");
const fetch = require('node-fetch');
const response = await fetch(url);
const jsonData = await response.json();
exports.testData = jsonData.cases.filter(testCase => typeof testCase.expected !== 'object');