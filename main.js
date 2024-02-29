function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomNumArr(count, target, min, max) {
  if (target - count * max > 0 || target < min * count) {
    return false;
  }

  let arr = Array.from({ length: count }, () => getRandom(min, max));
  const sum = arr.reduce((acc, x) => acc + x, 0);

  let remaining = target - sum;

  let i = 0;

  while (remaining !== 0) {
    if (i === arr.length) {
      i = 0;
    }

    const increment = remaining > 0 ? 1 : -1;
    const boundary = remaining > 0 ? max : min;

    if (arr[i] !== boundary) {
      arr[i] += increment;
      remaining -= increment;
    }

    i++;
  }

  return arr;
}
