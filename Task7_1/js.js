function findMaxAndMin() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var num3 = parseInt(document.getElementById("num3").value);

  var max = num1;
  if (num2 > max) {
    max = num2;
  }
  if (num3 > max) {
    max = num3;
  }

  var min = num1;
  if (num2 < min) {
    min = num2;
  }
  if (num3 < min) {
    min = num3;
  }

  var result1 = "Max element: " + max + "<br>Min element: " + min;
  document.getElementById("result1").innerHTML = result1;
  console.log("Maximum element: " + max);
  console.log("Minimum element: " + min);
}

function checkVowel() {
  var character = document.getElementById("character").value;
  var vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  var result2 = document.getElementById("result2");

  // Check if the input is a letter
  if (!/^[A-Za-z]+$/.test(character)) {
    result2.innerHTML = "Invalid input. Please enter a letter.";
    return;
  }
  // Check if the input is a single letter
  if (character.length !== 1) {
    result2.innerHTML = "Invalid input. Please enter a single letter.";
    return;
  }

  if (vowels.includes(character)) {
    result2.innerHTML = character + " is a vowel.";
  } else {
    result2.innerHTML = character + " is a consonant.";
  }
  console.log(character + " is a " + (vowels.includes(character) ? "vowel" : "consonant"));
}

function generateTable() {
  var number = parseInt(document.getElementById("n*umber").value);
  var table = document.getElementById("table1");
  table.innerHTML = ""; 
  if (isNaN(number)) {
    table.innerHTML = "Invalid input. Please enter a number.";
    return;
  }

  var tableContent = [];
  for (var i = 1; i <= 12; i++) {
    var result = number * i;
    tableContent.push(result);
  }
  console.log("answer: " +tableContent)
  table.innerHTML = tableContent.join(", ");
  
}

function printEvenNumbers() {
  var number = parseInt(document.getElementById("numberInput").value);
  var evenNumbers = [];

  for (var i = 2; i <= number; i += 2) {
    evenNumbers.push(i);
  }

  console.log("Even Numbers:"+ evenNumbers);

  var tableElement = document.getElementById("table2");
  tableElement.textContent = "Even Numbers: " + evenNumbers.join(", ");
}

function calculateMarks() {
  var marks1 = parseInt(document.getElementById('marks1').value);
  var marks2 = parseInt(document.getElementById('marks2').value);
  var marks3 = parseInt(document.getElementById('marks3').value);
  var marks4 = parseInt(document.getElementById('marks4').value);
  var marks5 = parseInt(document.getElementById('marks5').value);

  var total = marks1 + marks2 + marks3 + marks4 + marks5;
  var average = total / 5;
  var percentage = (total / 500) * 100;

  console.log("Total: " + total);
  console.log("Average: " + average);
  console.log("Percentage: " + percentage + "%");

  document.getElementById('total').textContent = "Total: " + total;
  document.getElementById('average').textContent = "Average: " + average;
  document.getElementById('percentage').textContent = "Percentage: " + percentage + "%";
}

function MarksGrade() {
  var physics = parseInt(document.getElementById('physics').value);
  var chemistry = parseInt(document.getElementById('chemistry').value);
  var biology = parseInt(document.getElementById('biology').value);
  var mathematics = parseInt(document.getElementById('mathematics').value);
  var computer = parseInt(document.getElementById('computer').value);

  var totalMarks = physics + chemistry + biology + mathematics + computer;
  var percentage = (totalMarks / 500) * 100;

  var grade;

  if (percentage >= 90) {
      grade = "Grade A";
  } else if (percentage >= 80) {
      grade = "Grade B";
  } else if (percentage >= 70) {
      grade = "Grade C";
  } else if (percentage >= 60) {
      grade = "Grade D";
  } else if (percentage >= 40) {
      grade = "Grade E";
  } else {
      grade = "Grade F";
  }

  var percentageOutput = "Percentage: " + percentage.toFixed(2) + "%";
  var gradeOutput = "Grade: " + grade;

  document.getElementById('percen2tage').textContent = percentageOutput;
  document.getElementById('grade').textContent = gradeOutput;

  console.log(percentageOutput);
  console.log(gradeOutput);
}