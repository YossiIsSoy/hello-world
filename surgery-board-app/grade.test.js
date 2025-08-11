const assert = require('assert');
const { test } = require('node:test');
const { gradeAnswer } = require('./grade');

test('gives full credit when all keywords are present', () => {
  const score = gradeAnswer('We performed resuscitation and laparotomy with abc', ['abc', 'resuscitation', 'laparotomy']);
  assert.strictEqual(score, 1);
});

test('gives partial credit when some keywords are present', () => {
  const score = gradeAnswer('Resuscitation only', ['abc', 'resuscitation', 'laparotomy']);
  assert.strictEqual(score, 1/3);
});

test('gives zero when no keywords are present', () => {
  const score = gradeAnswer('nothing relevant', ['abc']);
  assert.strictEqual(score, 0);
});
