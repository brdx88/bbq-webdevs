// var bmi = bmiCalculator(65, 1.8);

// bmi should equal 20 when it's rounded to the nearest whole number.


function bmiCalculator (weight, height) {
    var bmi = Math.round(weight / (height*height) );

    return bmi;
}

bmiCalculator(65, 1.8);
