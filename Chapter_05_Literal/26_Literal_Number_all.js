// ==========================================
// JavaScript Number Literals - Complete Guide
// All types of number representations in JS
// ==========================================


// ==========================================
// 1. INTEGER LITERALS (Base 10 - Decimal)
// ==========================================

let decimalInteger = 42;
let zero = 0;
let negativeInteger = -100;
let largeInteger = 9876543210;

console.log("1. Decimal Integer:", decimalInteger);        // 42
console.log("2. Zero:", zero);                             // 0
console.log("3. Negative Integer:", negativeInteger);      // -100
console.log("4. Large Integer:", largeInteger);            // 9876543210


// ==========================================
// 2. FLOATING-POINT LITERALS (Decimals)
// ==========================================

let simpleFloat = 3.14;
let negativeFloat = -0.5;
let leadingDecimal = 0.99;
let trailingDecimal = 5.0;
let noLeadingZero = .75;      // valid but not recommended
let noTrailingDigits = 2.;    // valid but not recommended

console.log("5. Simple Float:", simpleFloat);              // 3.14
console.log("6. Negative Float:", negativeFloat);          // -0.5
console.log("7. Leading Decimal:", leadingDecimal);        // 0.99
console.log("8. Trailing Decimal:", trailingDecimal);      // 5
console.log("9. No Leading Zero:", noLeadingZero);         // 0.75
console.log("10. No Trailing Digits:", noTrailingDigits);  // 2


// ==========================================
// 3. EXPONENTIAL NOTATION (Scientific)
// ==========================================

let million = 1e6;            // 1 * 10^6 = 1,000,000
let tiny = 1e-6;              // 1 * 10^-6 = 0.000001
let large = 3.14e10;          // 3.14 * 10^10 = 31,400,000,000
let small = 5.5e-3;           // 5.5 * 10^-3 = 0.0055
let negativeExp = 2e-4;       // 0.0002

console.log("11. Million (1e6):", million);                // 1000000
console.log("12. Tiny (1e-6):", tiny);                     // 0.000001
console.log("13. Large (3.14e10):", large);                // 31400000000
console.log("14. Small (5.5e-3):", small);                 // 0.0055
console.log("15. Negative Exp (2e-4):", negativeExp);      // 0.0002


// ==========================================
// 4. HEXADECIMAL LITERALS (Base 16)
// Prefix: 0x or 0X
// Digits: 0-9, A-F (or a-f)
// ==========================================

let hexColor = 0xFF;          // 255 in decimal
let hexLarge = 0xABC;         // 2748 in decimal
let hexSmall = 0x1a2b;        // 6699 in decimal
let hexPrefixUpper = 0X10;    // 16 in decimal

console.log("16. Hex 0xFF:", hexColor);                    // 255
console.log("17. Hex 0xABC:", hexLarge);                   // 2748
console.log("18. Hex 0x1a2b:", hexSmall);                  // 6699
console.log("19. Hex 0X10:", hexPrefixUpper);              // 16


// ==========================================
// 5. BINARY LITERALS (Base 2)
// Prefix: 0b or 0B
// Digits: 0 and 1 only
// ==========================================

let binaryOne = 0b1;          // 1 in decimal
let binaryTwo = 0b10;         // 2 in decimal
let binaryTen = 0b1010;       // 10 in decimal
let binaryUpper = 0B1111;     // 15 in decimal
let binaryByte = 0b11111111;  // 255 in decimal

console.log("20. Binary 0b1:", binaryOne);                 // 1
console.log("21. Binary 0b10:", binaryTwo);                // 2
console.log("22. Binary 0b1010:", binaryTen);              // 10
console.log("23. Binary 0B1111:", binaryUpper);            // 15
console.log("24. Binary Byte (0b11111111):", binaryByte);  // 255


// ==========================================
// 6. OCTAL LITERALS (Base 8)
// Prefix: 0o or 0O (modern syntax)
// Digits: 0-7 only
// Note: Old syntax with just leading 0 is deprecated!
// ==========================================

let octalSeven = 0o7;         // 7 in decimal
let octalTen = 0o10;          // 8 in decimal
let octalSixtyFour = 0o100;   // 64 in decimal
let octalUpper = 0O77;        // 63 in decimal

console.log("25. Octal 0o7:", octalSeven);                 // 7
console.log("26. Octal 0o10:", octalTen);                  // 8
console.log("27. Octal 0o100:", octalSixtyFour);           // 64
console.log("28. Octal 0O77:", octalUpper);                // 63


// ==========================================
// 7. BIGINT LITERALS (ES2020+)
// Suffix: n
// For integers larger than Number.MAX_SAFE_INTEGER
// ==========================================

let bigIntSmall = 123n;
let bigIntLarge = 9007199254740993n;  // Larger than safe integer
let bigIntHex = 0xFFFFFFFFFFFFFFFFn;
let bigIntBinary = 0b101010n;
let bigIntOctal = 0o777n;

console.log("29. BigInt Small:", bigIntSmall);             // 123n
console.log("30. BigInt Large:", bigIntLarge);             // 9007199254740993n
console.log("31. BigInt Hex:", bigIntHex);                 // 18446744073709551615n
console.log("32. BigInt Binary:", bigIntBinary);           // 42n
console.log("33. BigInt Octal:", bigIntOctal);             // 511n
console.log("34. typeof BigInt:", typeof bigIntSmall);    // "bigint"


// ==========================================
// 8. NUMERIC SEPARATORS (ES2021+)
// Underscore (_) for better readability
// ==========================================

let millionWithSep = 1_000_000;
let binaryWithSep = 0b1010_1111;
let hexWithSep = 0xFF_FF;
let bigIntWithSep = 1_000_000_000n;
let floatWithSep = 1_234.567_89;

console.log("35. Million with sep:", millionWithSep);      // 1000000
console.log("36. Binary with sep:", binaryWithSep);        // 175
console.log("37. Hex with sep:", hexWithSep);              // 65535
console.log("38. BigInt with sep:", bigIntWithSep);        // 1000000000n
console.log("39. Float with sep:", floatWithSep);          // 1234.56789


// ==========================================
// 9. SPECIAL NUMERIC VALUES
// ==========================================

// Infinity
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
let divideByZero = 1 / 0;
let negativeDivideByZero = -1 / 0;

console.log("40. Positive Infinity:", positiveInfinity);   // Infinity
console.log("41. Negative Infinity:", negativeInfinity);   // -Infinity
console.log("42. 1 / 0:", divideByZero);                   // Infinity
console.log("43. -1 / 0:", negativeDivideByZero);          // -Infinity

// NaN (Not a Number)
let notANumber = NaN;
let sqrtNegative = Math.sqrt(-1);
let parseFail = parseInt("hello");
let zeroDividedByZero = 0 / 0;

console.log("44. NaN literal:", notANumber);               // NaN
console.log("45. Math.sqrt(-1):", sqrtNegative);           // NaN
console.log("46. parseInt('hello'):", parseFail);          // NaN
console.log("47. 0 / 0:", zeroDividedByZero);              // NaN


// ==========================================
// 10. NUMBER OBJECT WRAPPER
// ==========================================

let numObject = new Number(42);    // Not recommended!
let numPrimitive = 42;             // Use this instead

console.log("48. Number Object:", numObject);              // [Number: 42]
console.log("49. typeof Number Object:", typeof numObject);// "object"
console.log("50. typeof primitive:", typeof numPrimitive); // "number"
console.log("51. Primitive value:", numObject.valueOf());  // 42


// ==========================================
// 11. USEFUL NUMBER PROPERTIES
// ==========================================

console.log("\n--- Number Properties ---");
console.log("52. Number.MAX_VALUE:", Number.MAX_VALUE);              // ~1.79e+308
console.log("53. Number.MIN_VALUE:", Number.MIN_VALUE);              // ~5e-324
console.log("54. Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);// 9007199254740991
console.log("55. Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);// -9007199254740991
console.log("56. Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("57. Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("58. Number.EPSILON:", Number.EPSILON);                  // ~2.22e-16
console.log("59. Number.NaN:", Number.NaN);                          // NaN
console.log("60. Number.Pi (Math.PI):", Math.PI);                    // 3.14159...
console.log("61. Math.E:", Math.E);                                  // 2.71828...


// ==========================================
// 12. NUMBER TYPE CHECKING
// ==========================================

console.log("\n--- Type Checking ---");
console.log("62. typeof 42:", typeof 42);                        // "number"
console.log("63. typeof 3.14:", typeof 3.14);                    // "number"
console.log("64. typeof Infinity:", typeof Infinity);            // "number"
console.log("65. typeof NaN:", typeof NaN);                      // "number" (weird but true!)
console.log("66. typeof 42n:", typeof 42n);                      // "bigint"
console.log("67. isNaN('hello'):", isNaN("hello"));              // true
console.log("68. isNaN(42):", isNaN(42));                        // false
console.log("69. Number.isFinite(42):", Number.isFinite(42));    // true
console.log("70. Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false
console.log("71. Number.isInteger(42.0):", Number.isInteger(42.0));       // true
console.log("72. Number.isInteger(42.5):", Number.isInteger(42.5));       // false
console.log("73. Number.isSafeInteger(9007199254740991):", Number.isSafeInteger(9007199254740991)); // true


// ==========================================
// 13. CONVERSION EXAMPLES
// ==========================================

console.log("\n--- Conversions ---");
console.log("74. parseInt('42'):", parseInt("42"));              // 42
console.log("75. parseFloat('3.14'):", parseFloat("3.14"));      // 3.14
console.log("76. Number('42'):", Number("42"));                  // 42
console.log("77. Number('3.14'):", Number("3.14"));              // 3.14
console.log("78. +'42':", +"42");                                // 42 (unary plus)
console.log("79. (42).toString():", (42).toString());            // "42"
console.log("80. (255).toString(16):", (255).toString(16));      // "ff"
console.log("81. (255).toString(2):", (255).toString(2));        // "11111111"
console.log("82. (255).toString(8):", (255).toString(8));        // "377"
console.log("83. (1234567).toLocaleString():", (1234567).toLocaleString()); // "1,234,567"


// ==========================================
// 14. EDGE CASES & GOTCHAS
// ==========================================

console.log("\n--- Edge Cases ---");
console.log("84. 0.1 + 0.2 === 0.3?", 0.1 + 0.2 === 0.3);        // false (floating point!)
console.log("85. 0.1 + 0.2 =", 0.1 + 0.2);                      // 0.30000000000000004
console.log("86. 9999999999999999:", 9999999999999999);          // 10000000000000000 (precision loss)
console.log("87. typeof NaN === 'number':", typeof NaN === 'number'); // true
console.log("88. NaN === NaN:", NaN === NaN);                    // false
console.log("89. Infinity > Number.MAX_VALUE:", Infinity > Number.MAX_VALUE); // true
console.log("90. Number.MIN_VALUE > 0:", Number.MIN_VALUE > 0);  // true (smallest positive!)
