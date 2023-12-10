// 1. for loop
for (var i = 0; i < 5; i++) {
    console.log('for loop: ' + i); // Output: 0, 1, 2, 3, 4
   }
   
   // 2. while loop
   var i = 0;
   while (i < 5) {
    console.log('while loop: ' + i); // Output: 0, 1, 2, 3, 4
    i++;
   }
   
   // 3. do...while loop
   var i = 0;
   do {
    console.log('do...while loop: ' + i); // Output: 0, 1, 2, 3, 4
    i++;
   } while (i < 5);
   
   // 4. for...in loop
   var obj = {a: 1, b: 2, c: 3};
   for (var prop in obj) {
    console.log('for...in loop: ' + prop + ': ' + obj[prop]); // Output: a: 1, b: 2, c: 3
   }
   
   // 5. for...of loop (ECMAScript 6)
   var arr = [1, 2, 3];
   for (var value of arr) {
    console.log('for...of loop: ' + value); // Output: 1, 2, 3
   }