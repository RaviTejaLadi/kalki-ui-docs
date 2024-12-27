class MathOperations {
  // 1. Addition
  static add(a: number, b: number): number {
    return a + b;
  }

  // 2. Subtraction
  static subtract(a: number, b: number): number {
    return a - b;
  }

  // 3. Multiplication
  static multiply(a: number, b: number): number {
    return a * b;
  }

  // 4. Division
  static divide(a: number, b: number): number {
    if (b === 0) throw new Error('Division by zero is not allowed');
    return a / b;
  }

  // 5. Modulus
  static modulus(a: number, b: number): number {
    return a % b;
  }

  // 6. Exponentiation
  static power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  // 7. Square Root
  static squareRoot(a: number): number {
    return Math.sqrt(a);
  }

  // 8. Cube Root
  static cubeRoot(a: number): number {
    return Math.cbrt(a);
  }

  // 9. Absolute Value
  static absolute(a: number): number {
    return Math.abs(a);
  }

  // 10. Factorial
  static factorial(a: number): number {
    if (a < 0) throw new Error('Factorial is not defined for negative numbers');
    return a === 0 ? 1 : a * MathOperations.factorial(a - 1);
  }

  // 11. GCD
  static gcd(a: number, b: number): number {
    return b === 0 ? a : MathOperations.gcd(b, a % b);
  }

  // 12. LCM
  static lcm(a: number, b: number): number {
    return Math.abs(a * b) / MathOperations.gcd(a, b);
  }

  // 13. Is Prime
  static isPrime(a: number): boolean {
    if (a <= 1) return false;
    for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i === 0) return false;
    }
    return true;
  }

  // 14. Sine
  static sine(angle: number): number {
    return Math.sin(angle);
  }

  // 15. Cosine
  static cosine(angle: number): number {
    return Math.cos(angle);
  }

  // 16. Tangent
  static tangent(angle: number): number {
    return Math.tan(angle);
  }

  // 17. Logarithm (Base 10)
  static logBase10(a: number): number {
    return Math.log10(a);
  }

  // 18. Natural Logarithm
  static naturalLog(a: number): number {
    return Math.log(a);
  }

  // 19. Radians to Degrees
  static radiansToDegrees(radians: number): number {
    return radians * (180 / Math.PI);
  }

  // 20. Degrees to Radians
  static degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  // 21. Ceiling
  static ceiling(a: number): number {
    return Math.ceil(a);
  }

  // 22. Floor
  static floor(a: number): number {
    return Math.floor(a);
  }

  // 23. Round
  static round(a: number): number {
    return Math.round(a);
  }

  // 24. Min of Two Numbers
  static min(a: number, b: number): number {
    return Math.min(a, b);
  }

  // 25. Max of Two Numbers
  static max(a: number, b: number): number {
    return Math.max(a, b);
  }

  // 26. Hypotenuse
  static hypotenuse(a: number, b: number): number {
    return Math.sqrt(a * a + b * b);
  }

  // 27. Random Number (0 to 1)
  static random(): number {
    return Math.random();
  }

  // 28. Sign
  static sign(a: number): number {
    return Math.sign(a);
  }

  // 29. Truncate
  static truncate(a: number): number {
    return Math.trunc(a);
  }

  // 30. Arithmetic Mean
  static mean(numbers: number[]): number {
    if (numbers.length === 0) throw new Error('Array cannot be empty');
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  }

  static getRandomValueInRange(min: number, max: number, round: boolean = false): number {
    let value = Math.random() * (max - min) + min;
    return round ? Math.round(value) : value;
  }

  static mapValueToRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
    if (value < inMin) {
      return outMin;
    }

    if (value > inMax) {
      return outMax;
    }

    return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
  }

  static isPowerOfTwo(value: number): boolean {
    return value !== 0 && (value & (value - 1)) === 0;
  }

  static roundToMultiple(value: number, multiple: number): number {
    return Math.round(value / multiple) * multiple;
  }
}
