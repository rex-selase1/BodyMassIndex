let age = document.getElementById('age');
let gender = document.getElementById('gender')
let height = document.getElementById('height')
let weight = document.getElementById('weight')
let button = document.getElementById('btn');
let results = document.getElementById('results')

function checkBodyMass(e){
  e.preventDefault();

  let bmi = weight.value / (height.value * height.value);

  if(bmi < 18.5){
    results.innerText = `Your BMI is ${bmi}. You are underweight`;
  }
  if(bmi > 18.5 && bmi < 24.9){
    results.innerText = `Your BMI is ${bmi}. You are normal`;
  }
  if(bmi > 25 && bmi < 29.9){
    results.innerText = `Your BMI is ${bmi}. You are overweight`;
  }
  if(bmi > 30){
    results.innerText = `Your BMI is ${bmi}. You are obese`;
  }
}

button.addEventListener('click', checkBodyMass)
