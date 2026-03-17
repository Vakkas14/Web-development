function bmiCalculator (weight, height) {
    var bmi = weight / (height * height);

    var roundedBmi = Math.round(bmi);


    if (roundedBmi < 18.5) {
            return "Your BMI is " + roundedBmi + ", so you are underweight.";
    } 
    else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
            return "Your BMI is " + roundedBmi + ", so you have a normal weight.";
        }

    else{
            return "Your BMI is " + roundedBmi + ", so you are overweight.";
        }
}
