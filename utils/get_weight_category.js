function getWeightCategory(weight) {
  if (weight < 18.5) {
    return "Underweight";
  } else if (weight >= 18.5 && weight <= 24.9) {
    return "Normal";
  } else if (weight >= 25 && weight <= 29.9) {
    return "Overweight";
  } else if (weight >= 30) {
    return "Obese";
  } else {
    return "Invalid BMI";
  }
}

export { getWeightCategory };
