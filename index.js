function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let height2 = (height / 100) * (height / 100);
  let BMI = weight / height2;
  alert(BMI);

  // 1. Below 18.5	Underweight
  //   2. 18.5 – 24.9	Healthy Weight
  //   3. 25.0 – 29.9	Overweight
  //   4. 30.0 and Above	Obesity
  if (BMI < 18.5) {
    console.log("Underweight");
    alert("Underweight");
  } else if (BMI >= 18.5 && BMI < 25) {
    console.log("Healthy weight");
    alert(" Healthy weight");
  } else if (BMI >= 25 && BMI < 30) {
    console.log("Overweight");
    alert("Overweight");
  } else if (BMI >= 30) {
    console.log("Obese");
    alert("Obese");
  }
}
