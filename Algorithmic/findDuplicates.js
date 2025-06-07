// https://www.greatfrontend.com/questions/algo/array-find-duplicate

//1 (js)
/**
 * Using Set to check if a number already exist, Time complexity: O(n), Space complexity: O(n)
 */
export default function findDuplicates(numbers) {
  const set = new Set();
    for (let number of numbers) {
        if (set.has(number)) return true;
        set.add(number);
    }
    return false;
}

//2 (ts)
/**
Sort the array first, then check each pair of element in array is duplicated. Time complexity: O(n log n), Space complexity: O(1)
*/
export default function findDuplicates2(numbers: number[]): boolean {
  const n = numbers.sort();
  for (let i = 0; i < numbers.length; i++) {
    const num = n[i];
    const numNext = n[i+1];
    if (num === numNext) return true;
  }
  return false;
}
