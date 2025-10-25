const fs = require('fs');
const path = require('path');

const resultsFile = path.join(__dirname, 'results.json');

function loadResults() {
  try {
    const data = fs.readFileSync(resultsFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function aggregate(results) {
  const summary = {};
  for (const r of results) {
    if (!summary[r.subject]) {
      summary[r.subject] = { total: 0, count: 0 };
    }
    summary[r.subject].total += r.score;
    summary[r.subject].count += 1;
  }
  return summary;
}

function display(summary) {
  const subjects = Object.keys(summary);
  if (subjects.length === 0) {
    console.log('No results yet. Run "npm start" to practice.');
    return;
  }
  console.log('Progress:\n');
  for (const subj of subjects) {
    const avg = summary[subj].total / summary[subj].count;
    console.log(`${subj}: ${(avg * 100).toFixed(0)}% over ${summary[subj].count} scenario(s)`);
  }
}

const results = loadResults();
const summary = aggregate(results);
display(summary);
