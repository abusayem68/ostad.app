// Task-1:
// Function for calculate discount based on the purchase amount
const calculateDiscount = (purchaseAmount) => {
  let discount = 0;
  if (purchaseAmount >= 50 && purchaseAmount <= 100) {
    discount = purchaseAmount * 0.05;
  } else if (purchaseAmount >= 100 && purchaseAmount <= 200) {
    discount = purchaseAmount * 0.1;
  } else if (purchaseAmount >= 200) {
    discount = purchaseAmount * 0.15;
  }
  return discount;
};

// implementation calculate discount function
const totalAmount = 500;
const discountAmount = calculateDiscount(totalAmount);
console.log(
  `discounted amount= ${discountAmount} & total amount + discount amount= ${
    totalAmount + discountAmount
  }`
);

// Task-2:
// Function for filter even number from an array
const filterEvenNumber = (arr) => {
  return arr.filter((number) => {
    if (number > 0) {
      if (number % 2 === 0) {
        return true;
      }
    }
    return false;
  });
};

// implementation
const testArray = [-6, 9, 5, 4, 2, 8, 13, 11];
const evenNumbers = filterEvenNumber(testArray);
console.log(evenNumbers);

// Task:3
// function for multiplicatoin table genarator
const multiplicationTable = (number) => {
  for (let i = 1; i <= 10; i++) {
    const product = i * number;
    console.log(`${i}x${number}=${product}`);
  }
};

// implementation
multiplicationTable(2);

// Task:4
// function for caclutate grade
const calculateGrade = (score) => {
  switch (true) {
    case score >= 90:
      return 'A';
    case score >= 80 && score <= 89:
      return 'B';
    case score >= 70 && score <= 79:
      return 'C';
    case score >= 60 && score <= 69:
      return 'D';
    default:
      return 'F';
  }
};

// implementation
console.log(calculateGrade(80));
