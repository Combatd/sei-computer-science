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