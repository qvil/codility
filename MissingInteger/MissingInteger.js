/**
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Complexity:

expected worst-case time complexity is O(N); // 중복 for문 하지 말라는 뜻
expected worst-case space complexity is O(N) (not counting the storage required for input arguments). // 배열의 크기를 N까지 사용 할 수 있다.
Copyright 2009–2018 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/**
 * yellowgg2 version 2
 */
function MissingInteger(A) {
  let copyArray = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      copyArray[A[i]] = true;
    }
  }

  for (let j = 1; j < copyArray.length; j++) {
    if (copyArray[j] === true && copyArray[j + 1] !== true) {
      return j + 1;
    }

    if (!copyArray[j]) {
      return j;
    }
  }

  return 1;
}

module.exports = MissingInteger;
