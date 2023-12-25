const form = document.getElementById("myForm");
const genderCheckboxes = document.querySelectorAll('input[name="gender"]');
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultDiv = document.getElementById("result");

function calculateBMI(height, weight) {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi;
}

function evaluateBMI(bmi) {
  if (bmi < 18.5) {
    return "Zayıf";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal kilolu";
  } else if (bmi >= 25 && bmi < 30) {
    return "Fazla kilolu";
  } else if (bmi >= 30 && bmi < 40) {
    return "Obez";
  } else {
    return "İleri derecede obez (morbid obez)";
  }
}

function displayResult(result) {
  resultDiv.innerHTML = result;
}

function processFemaleData(height, weight) {
  const bmi = calculateBMI(height, weight);
  const result = evaluateBMI(bmi);
  const output = "Female Data - BMI: " + bmi + ", Result: " + result;
  console.log(output);
  displayResult(output);
}

function processMaleData(height, weight) {
  const bmi = calculateBMI(height, weight);
  const result = evaluateBMI(bmi);
  const output = "Male Data - BMI: " + bmi + ", Result: " + result;
  console.log(output);
  displayResult(output);
}

function handleCheckboxChange(event) {
  const clickedCheckbox = event.target;
  genderCheckboxes.forEach((checkbox) => {
    if (checkbox !== clickedCheckbox) {
      checkbox.checked = false;
    }
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const height = heightInput.value;
  const weight = weightInput.value;
  genderCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      if (checkbox.value === "female") {
        processFemaleData(height, weight);
      } else if (checkbox.value === "male") {
        processMaleData(height, weight);
      }
    }
  });
}

form.addEventListener("submit", handleFormSubmit);
genderCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckboxChange);
});
