### Question 1:

Line 12 will output `3` because line 12 wants to print the value of variable `i` and i has a value of 3 because the loop is incrementing `i` by 1 everytime and since the length of the array `discounted` is 3. Therefore, the final value of `i` is going to be 3.

### Question 2:

Line 13 will output `150` because line 13 wants to print the value of variable `discountedPrice` which is created inside the *for* loop. Since `discountedPrice` has the `var` keyword, we can access it globally. Therefore, the third iteration of the loop will change the value of `discountedPrice` to 300 * 0.5 = 150.

### Question 3:

Line 14 will output `150` because line 14 wants to print the value of variable `finalPrice` which also another global variable. At the third iteration of the loop, `discountedPrice` has a value of 150 and `finalPrice` will equals 150 * 100 / 100 which doesn't change anything. Therefore, `finalPrice` has the value of 150 at the end of the loop.

### Question 4:

After the function is called, the program will return the `discounted` array which contains 50, 100, 150. This is because of the return statement on line 16. After the program exits the loop, the program reaches the `return` statement on line 16 which cause the program to exit and return the value of variable `discounted`.

### Question 5:

The program will throws an error because all the variable created in the function has the keyword `let` which means they are restricted in specific scope. Since variable `i` is only declared inside the scope of the *for* loop, outside of the *for* loop, the program won't be able to access `i` which is the error of this program.

### Question 6:

Line 13 causes an error because the variable `discountedPrice` is declared using the `let` keyword which means it is going to only be available inside the scope of the for loop. So the program can't access the variable to print the value.

### Question 7:

Line 14 will output `150`. This is because the variable `finalPrice` is within the scope of the print statement.

### Question 8:

After the function is called on line 19, the program will return the array `discounted` for the same reason in question 4. This is because the `discounted` array was defined in the scope of the return statement. Therefore, it is accessible.

### Question 9:

Line 11 is errormatic because variable `i` is only defined in the scope of the *for* loop with the `let` keyword, so it can't be accessed outside of the *for* loop.

### Question 10:

Line 12 will prints the number `3` because the variable `length` is defined in the scope of the `print` statement. The reason it has the value of 3 is because the user gave us an array of size 3 and the value of variable `length` is set to be the length of the input array.

### Question 11:

After the *discountPrices* function is called, it will return the `discounted` array which has 3 elements: 50, 100, 150. The reason the `discounted` array has those elements is because the for loop iterates through each elements of the input array and uses them to make a new value by multiplying them with 0.5.

## Data Types

### [Question 12](part2-question12.js)

## Basic Operators & Type Conversion

### Question 13:

A: '3' + 2 = '32' because integers map to their exact string representation.

B: '3' - 2 = 1 because string '3' maps to integer 3.

C: 3 + null = 3 because null is map to integer 0.

D: '3' + null = '3null' because null is map into a string.

E: true + 3 = 4 because true maps to 1

F: false + null = 0 because both false and null map to 0.

G: '3' + undefined = '3 undefined' because undefined maps to a string 'undefined'

H. '3' - undefined = NaN because undefined is map to an illegal number. Therefore, the output is NaN.

### Question 14:

A: '2' > 1 = true because string '2' maps to integer 2.

B: '2' < '12' = false because the first character '2' is greater than the first character of '12'.

C: 2 == '2' = true because '2' map to integer 2 which is the same as 2.

D: 2 === '2' = false because the two items are different types.

E: true == 2 = false because true map to 1. 1 is not the same as 2. Therefore, it is false.

F: true === Boolean(2) true because converting anything other than value 0, null, undefined, NaN, " " is always true. Therefore they are the same.

### Question 15:

**==** is for equality test, if two value 'a' and 'b' are the same then we can say that "a == b". they can be different type, JS can map to the same type to do a comparison.

**===** is also for equality test, but it is only true if both 'a' and 'b' are the same value and type. In other words, if the operands are not the same, then it returns false.

## Loops

### [Question 16](part2-question16.js)

## Functions

### Question 17:

In the program, line 17 called the function `modifyArray` to modify the array [1,2,3] by calling back to the function `doSomething` to change the value of every elements in the input array. Inside the function `modifyArray`, we creates a array variable called *newArr* with the `const` keyword. Then, we create a loop that iterate through every elements in the input array and push those elements into the variable *newArr*. However, before pushing those elements in, we called the function doSomething to modify the elements in the input array by multiplying the element by 2. After the loop finishes, the array includes [2,4,6] which is what the program is returning after the function `modifyArray` is called.

## setInterval(), setTimeout(), clearTimeout()

### [Question 18](part2-question18.js)

### Question 19:

Output:

```
1
4
3
2
```