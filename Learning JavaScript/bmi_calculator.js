// var bmi = bmiCalculator(65, 1.8);

// bmi should equal 20 when it's rounded to the nearest whole number.


function bmiCalculator (weight, height) {
    var bmi = Math.round(weight / (height*height) );

    // return bmi;

    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight."
    }

    if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight."
    }

    if (bmi > 24.9) {
        return "Your BMI is " + bmi + ", so you are overweight."
    }
}

bmiCalculator(65, 1.8);
