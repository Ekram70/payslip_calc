/* 
Get 8 random numbers each time that sums up to 100
*/

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getNumArr(count, target, min, max) {
  if (target - count * max > 0) {
    return false;
  }

  if (target < min * count) {
    return false;
  }

  let arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(getRandom(min, max));
  }

  let sum = 0;

  arr.forEach((x) => {
    sum += x;
  });

  console.log(`sum: ${sum}`);

  let remaining = target - sum;

  if (remaining < 0) {
    console.log('hi');
    let i = 0;
    while (remaining !== 0) {
      if (i == arr.length) {
        i = 0;
      }

      if (arr[i] !== min) {
        arr[i] = arr[i] - 1;
        remaining++;
      }

      if (remaining == 0) {
        break;
      }

      i++;
    }
  } else {
    console.log('hi2');
    let i = 0;
    while (remaining !== 0) {
      if (i == arr.length) {
        i = 0;
      }

      if (arr[i] !== max) {
        arr[i] = arr[i] + 1;
        remaining--;
      }

      if (remaining == 0) {
        break;
      }

      i++;
    }
  }

  return arr;
}

console.log(getNumArr(8, 20, 2, 5));
