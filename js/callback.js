function submitAnswers() {
  var total = 5;
  var score = 0;
  // Get User Input
  var q1 = document.forms['quizForm']['q1'].value;
  var q2 = document.forms['quizForm']['q2'].value;
  var q3 = document.forms['quizForm']['q3'].value;
  var q4 = document.forms['quizForm']['q4'].value;
  var q5 = document.forms['quizForm']['q5'].value;

  // Validation
  for (i = 1; i <= total; i++) {
    if (eval('q'+i) == null || eval('q'+i) == '') {
      alert('You missed question '+ i);
      return false;
    }
  }

  // Set Correct Answers
  var answers = ["d","b","c","a","b"];

  // Check answers
  if (q1 == answers[0]) {
    score++;
  } else if (q2 == answers[1]) {
    
  }
}
