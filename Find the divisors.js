const divisors = (n) => {
  let res = Array.from({length: n}, (_, i) => i + 1)
    .filter(item => n % item == 0 && item != 1 && item != n);
  if (res.length === 0) return `${n} is prime`;
  return res;
}
