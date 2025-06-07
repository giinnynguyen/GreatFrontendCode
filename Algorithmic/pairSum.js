// https://www.greatfrontend.com/questions/algo/pair-sum

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export default function pairSum(numbers, target) {
  const map = new Map();

    for (let i = 0; i < numbers.length; i++) {
        const num = target - numbers[i];
        if (map.has(num) && map.get(num) !== i) {
            return [map.get(num), i];
        }
        map.set(numbers[i], i);
    }
    return []
}
