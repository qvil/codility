# [MissingInteger](https://app.codility.com/demo/take-sample-test/)

This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Assume that:

- N is an integer within the range [1..100,000];
- each element of array A is an integer within the range [−1,000,000..1,000,000].

Complexity:

- expected worst-case time complexity is O(N);
- expected worst-case space complexity is O(N) (not counting the storage required for input arguments).

Copyright 2009–2018 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

# Time complexity

> expected worst-case time complexity is O(N);

- `worst-case가 O(N)`이므로 O(N)이상의 시간이 걸리면 안된다. (예: O(N!), O(2^n), O(n^2)(중복 for 문) 등)

참고 : [Big O notation - Wikipedia](https://en.wikipedia.org/wiki/Big_O_notation#/media/File:Comparison_computational_complexity.svg)

# Space complexity

> expected worst-case space complexity is O(N) (not counting the storage required for input arguments).

- 배열의 크기를 N 까지 사용 할 수 있다.

# 알게된 점

> 메모리(space complexity), 성능(time complexity)

- 메모리와 성능 사이의 Trade-off 관계를 생각해보자
  - 메모리를 많이 사용할수록 성능 올라가고, 메모리를 적게 사용할수록 성능 떨어진다.
- if 문 개수는 time complexity 에 관여하지 않는다.
