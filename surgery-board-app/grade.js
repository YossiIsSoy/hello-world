function gradeAnswer(answer, keywords) {
  let matches = 0;
  const normalized = answer.toLowerCase();
  for (const word of keywords) {
    if (normalized.includes(word.toLowerCase())) {
      matches++;
    }
  }
  return keywords.length ? matches / keywords.length : 0;
}

module.exports = { gradeAnswer };
