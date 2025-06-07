// https://www.greatfrontend.com/questions/algo/count-ones-in-binary

/**
 * Step 1: convert num to binary string
 * Step 2: count 1 in binary string
 Time commplexity: O(n)
 */
export default function countOnesInBinary(num) {
  const bi = num.toString(2);
    let count = 0;
    for (let s of bi) {
        if (s === '1') count++;
    }
    return count;
}
