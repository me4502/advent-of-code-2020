import fs from 'fs-extra';

const loadLines = async () => {
  const data = (await fs.readFile('day_1_input.txt')).toString('utf-8');

  // Split and change to a number
  return data.split(/\r?\n/).map((str) => parseInt(str));
};

const getPair = (numbers: number[]) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === 2020) {
        return numbers[i] * numbers[j];
      }
    }
  }

  return -1;
};

const getTriplet = (numbers: number[]) => {
  for (let i = 0; i < numbers.length - 2; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
      if (numbers[i] + numbers[j] < 2020) {
        for (let k = j + 1; k < numbers.length; k++) {
          if (numbers[i] + numbers[j] + numbers[k] === 2020) {
            return numbers[i] * numbers[j] * numbers[k];
          }
        }
      }
    }
  }

  return -1;
};

loadLines()
  .then((numbers) =>
    console.log(`Pair: ${getPair(numbers)}; Triplet: ${getTriplet(numbers)}`)
  )
  .catch(console.error);
