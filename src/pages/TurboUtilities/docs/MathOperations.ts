interface MathOperationDoc {
  id: number;
  methodName: string;
  explanation: string;
}
export const MathOperationsDocs: MathOperationDoc[] = [
  {
    id: 1,
    methodName: 'add',
    explanation:
      'Adds two numerical values together and returns their sum.\n' +
      'This method performs basic arithmetic addition operation.\n' +
      'Returns the combined value of both input parameters.',
  },
  {
    id: 2,
    methodName: 'subtract',
    explanation:
      'Performs subtraction between two numbers.\n' +
      'Takes the first parameter and subtracts the second parameter from it.\n' +
      'Returns the difference between the two provided numbers.',
  },
  {
    id: 3,
    methodName: 'multiply',
    explanation:
      'Multiplies two numbers together to get their product.\n' +
      'Performs basic arithmetic multiplication operation.\n' +
      'Returns the result of multiplying the first parameter by the second.',
  },
  {
    id: 4,
    methodName: 'divide',
    explanation:
      'Performs division between two numbers.\n' +
      'Checks for division by zero and throws an error if attempted.\n' +
      'Returns the quotient of the first number divided by the second.',
  },
  {
    id: 5,
    methodName: 'modulus',
    explanation:
      'Calculates the remainder after division of two numbers.\n' +
      'Uses the modulo operator to find the remainder.\n' +
      'Returns the remainder after dividing the first number by the second.',
  },
  {
    id: 6,
    methodName: 'power',
    explanation:
      'Raises a base number to the power of an exponent.\n' +
      'Uses Math.pow() internally for the calculation.\n' +
      'Returns the result of the exponential calculation.',
  },
  {
    id: 7,
    methodName: 'squareRoot',
    explanation:
      'Calculates the square root of a given number.\n' +
      'Uses Math.sqrt() for precise square root calculation.\n' +
      'Returns the positive square root of the input number.',
  },
  {
    id: 8,
    methodName: 'cubeRoot',
    explanation:
      'Calculates the cube root of a given number.\n' +
      'Uses Math.cbrt() for precise cube root calculation.\n' +
      'Returns the cube root, including negative cube roots for negative numbers.',
  },
  {
    id: 9,
    methodName: 'absolute',
    explanation:
      'Determines the absolute (positive) value of a number.\n' +
      'Removes the negative sign if present.\n' +
      'Returns the distance of the number from zero without regard to direction.',
  },
  {
    id: 10,
    methodName: 'factorial',
    explanation:
      'Calculates the factorial of a non-negative integer.\n' +
      'Uses recursive calculation method for computing factorial.\n' +
      'Throws an error if attempting to calculate factorial of a negative number.',
  },
  {
    id: 11,
    methodName: 'gcd',
    explanation:
      'Calculates the Greatest Common Divisor of two numbers.\n' +
      'Uses the Euclidean algorithm for efficient calculation.\n' +
      'Returns the largest positive integer that divides both numbers without a remainder.',
  },
  {
    id: 12,
    methodName: 'lcm',
    explanation:
      'Calculates the Least Common Multiple of two numbers.\n' +
      'Uses the GCD method to help calculate the LCM efficiently.\n' +
      'Returns the smallest positive number that is divisible by both input numbers.',
  },
  {
    id: 13,
    methodName: 'isPrime',
    explanation:
      'Determines if a given number is prime.\n' +
      'Checks divisibility up to the square root of the number for efficiency.\n' +
      'Returns a boolean indicating whether the number is prime.',
  },
  {
    id: 14,
    methodName: 'sine',
    explanation:
      'Calculates the sine of an angle.\n' +
      'Uses Math.sin() for trigonometric calculation.\n' +
      'Returns the sine value of the input angle in radians.',
  },
  {
    id: 15,
    methodName: 'cosine',
    explanation:
      'Calculates the cosine of an angle.\n' +
      'Uses Math.cos() for trigonometric calculation.\n' +
      'Returns the cosine value of the input angle in radians.',
  },
  {
    id: 16,
    methodName: 'tangent',
    explanation:
      'Calculates the tangent of an angle.\n' +
      'Uses Math.tan() for trigonometric calculation.\n' +
      'Returns the tangent value of the input angle in radians.',
  },
  {
    id: 17,
    methodName: 'logBase10',
    explanation:
      'Calculates the base-10 logarithm of a number.\n' +
      'Uses Math.log10() for logarithmic calculation.\n' +
      'Returns the power to which 10 must be raised to obtain the input number.',
  },
  {
    id: 18,
    methodName: 'naturalLog',
    explanation:
      'Calculates the natural logarithm (base e) of a number.\n' +
      'Uses Math.log() for logarithmic calculation.\n' +
      'Returns the power to which e must be raised to obtain the input number.',
  },
  {
    id: 19,
    methodName: 'radiansToDegrees',
    explanation:
      'Converts an angle from radians to degrees.\n' +
      'Multiplies the input by (180/π) for conversion.\n' +
      'Returns the angle measurement in degrees.',
  },
  {
    id: 20,
    methodName: 'degreesToRadians',
    explanation:
      'Converts an angle from degrees to radians.\n' +
      'Multiplies the input by (π/180) for conversion.\n' +
      'Returns the angle measurement in radians.',
  },
  {
    id: 21,
    methodName: 'ceiling',
    explanation:
      'Rounds a number up to the nearest integer.\n' +
      'Uses Math.ceil() for rounding calculation.\n' +
      'Returns the smallest integer greater than or equal to the input.',
  },
  {
    id: 22,
    methodName: 'floor',
    explanation:
      'Rounds a number down to the nearest integer.\n' +
      'Uses Math.floor() for rounding calculation.\n' +
      'Returns the largest integer less than or equal to the input.',
  },
  {
    id: 23,
    methodName: 'round',
    explanation:
      'Rounds a number to the nearest integer.\n' +
      'Uses Math.round() for standard rounding.\n' +
      'Returns the value rounded to the nearest integer.',
  },
  {
    id: 24,
    methodName: 'min',
    explanation:
      'Finds the minimum of two numbers.\n' +
      'Compares two values and returns the smaller one.\n' +
      'Uses Math.min() for comparison.',
  },
  {
    id: 25,
    methodName: 'max',
    explanation:
      'Finds the maximum of two numbers.\n' +
      'Compares two values and returns the larger one.\n' +
      'Uses Math.max() for comparison.',
  },
  {
    id: 26,
    methodName: 'hypotenuse',
    explanation:
      'Calculates the hypotenuse of a right triangle.\n' +
      'Uses the Pythagorean theorem (a² + b² = c²).\n' +
      'Returns the length of the hypotenuse given two sides.',
  },
  {
    id: 27,
    methodName: 'random',
    explanation:
      'Generates a random decimal number between 0 (inclusive) and 1 (exclusive).\n' +
      'Uses Math.random() for pseudo-random number generation.\n' +
      'Returns a floating-point number in the range [0, 1).',
  },
  {
    id: 28,
    methodName: 'sign',
    explanation:
      'Determines the sign of a number, indicating whether it is positive, negative, or zero.\n' +
      "Uses Math.sign() to evaluate the number's sign.\n" +
      'Returns 1 for positive numbers, -1 for negative numbers, and 0 for zero.',
  },
  {
    id: 29,
    methodName: 'truncate',
    explanation:
      'Removes any decimal fraction digits from a number.\n' +
      'Uses Math.trunc() to remove decimal places without rounding.\n' +
      'Returns the integer part of a number by removing any fractional digits.',
  },
  {
    id: 30,
    methodName: 'mean',
    explanation:
      'Calculates the arithmetic mean (average) of an array of numbers.\n' +
      'Sums all numbers and divides by the count of numbers.\n' +
      'Throws an error if the input array is empty.',
  },
];
