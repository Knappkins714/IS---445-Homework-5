const anArray = [];
for (i = 1; i <= 10; i++) {
  anArray.push(i);
}

const oddNumbers = anArray.filter(elem => elem % 2 === 1);
console.log(oddNumbers);

const divBy2or5 = anArray.filter(elem => elem % 2 === 0 || elem % 5 === 0);
console.log(divBy2or5);

const divBy3Squared = anArray.filter(elem => elem % 3 === 0).map(elem => elem ** 2);
console.log(divBy3Squared);

const SumOfSquareDivBy5 = anArray.filter(elem => elem % 5 === 0).map(elem => elem ** 2)
  .reduce((sum, elem) => sum + elem, 0);
console.log(SumOfSquareDivBy5);
