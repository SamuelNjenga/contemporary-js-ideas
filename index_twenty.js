function solution(A) {
  A = A.filter((x) => x >= 1).sort((a, b) => a - b);
  let x = 1;
  for (let i = 0; i < A.length; i++) {
    if (x < A[i]) {
      return x;
    }
    x = A[i] + 1;
  }
  return x;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([-1, 1, 3, 6, 4, 1, 2]));
console.log(solution([-1, -3]));
