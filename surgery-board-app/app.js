const fs = require('fs');
const readline = require('readline');
const path = require('path');
const { gradeAnswer } = require('./grade');

const resultsFile = path.join(__dirname, 'results.json');

const scenarios = [
  {
    id: 1,
    subject: 'Trauma',
    question: 'A 25-year-old presents with a gunshot wound to the abdomen. What is your initial approach?',
    keywords: ['abc', 'resuscitation', 'laparotomy']
  },
  {
    id: 2,
    subject: 'Vascular',
    question: 'How do you manage a patient with an expanding aortic aneurysm?',
    keywords: ['imaging', 'surgery', 'blood pressure']
  }
];

function loadResults() {
  try {
    const data = fs.readFileSync(resultsFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function saveResults(results) {
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
}

function runScenario(scenario) {
  console.log(`Scenario: ${scenario.question}`);
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.question('Your answer: ', (answer) => {
    const score = gradeAnswer(answer, scenario.keywords);
    console.log(`Score: ${(score * 100).toFixed(0)}%`);
    const results = loadResults();
    results.push({ subject: scenario.subject, score });
    saveResults(results);
    console.log('Feedback saved. Run "npm run dashboard" to view progress.');
    rl.close();
  });
}

const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
runScenario(scenario);
