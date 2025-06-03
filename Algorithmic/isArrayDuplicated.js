/**
 * Using Set to check if a number already exist, O(n)
 */
export default function findDuplicates(numbers) {
  const set = new Set();
    for (let number of numbers) {
        if (set.has(number)) return true;
        set.add(number);
    }
    return false;
}
