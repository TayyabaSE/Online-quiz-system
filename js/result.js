// Student 6: Result screen, pass/fail, restart
// Student 6: Result screen, pass/fail, restart

function showResult(score, total) {
  let percentage = (score * 100) / total;
  let result = percentage >= 50 ? "PASS" : "FAIL";

  let message = "QUIZ RESULT\n" +
    "Total Marks: " + total + "\n" +
    "Obtained Marks: " + score + "\n" +
    "Percentage: " + percentage.toFixed(2) + "%\n" +
    "Result: " + result;

  // Screen pe dikhana
  let resultBox = document.getElementById("result");
  if (resultBox) {
    resultBox.innerText = message;
    resultBox.style.display = "block";
  }

  console.log(message);
  return result;
}

function restartQuiz() {
  let resultBox = document.getElementById("result");
  if (resultBox) {
    resultBox.innerHTML = "";
    resultBox.style.display = "none";
  }

  console.log("Quiz Restart ho gaya");
  location.reload();
}