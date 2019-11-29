function sumArrayOfNums(arr, index = 0, sum = 0) {
    // step 2: define the base case
    if (index === arr.length) {
        return sum;
    }
    // step 3: action step - add number at current index of arr to sum
    sum += arr[index];
    // step 4: recursion - iterate the index while invoking sumArrayOfNums
    return sumArrayOfNums(arr, index + 1, sum);
}

console.log(sumArrayOfNums([2, 4, 5, 8])); // => 19

function findMax() {
    // This function returns the largest number in a given array.
}

function factorial() {
    // This function returns the factorial of a given number.
}

function fibonacci() {
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
}

function coinFlips() {
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations() {
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}