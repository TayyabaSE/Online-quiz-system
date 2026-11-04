// Student 5: Score and percentage calculation
// Score calculation module

function calculateScore(totalQuestions, correctAnswers) {
  const incorrectAnswers = totalQuestions - correctAnswers;
  const totalMarks = totalQuestions;
  const obtainedMarks = correctAnswers;
  const percentage = totalMarks > 0 ? (obtainedMarks * 100) / totalMarks : 0;

  return {
    totalQuestions,
    correctAnswers,
    incorrectAnswers,
    totalMarks,
    obtainedMarks,
    percentage: percentage.toFixed(2),
    result: percentage >= 50 ? "Pass" : "Fail",
  };
}

function showScore(score) {
  console.log("Total Questions:", score.totalQuestions);
  console.log("Correct Answers:", score.correctAnswers);
  console.log("Incorrect Answers:", score.incorrectAnswers);
  console.log("Obtained Marks:", score.obtainedMarks + "/" + score.totalMarks);
  console.log("Percentage:", score.percentage + "%");
  console.log("Result:", score.result);
}

// Test example
const score = calculateScore(5, 4);
showScore(score);