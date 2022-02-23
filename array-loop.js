/*
var array = [3, 78, 2, 45, 89, 90];
console.log(array[4]);
console.log(array.indexof(90));
*/

var number = [66, 78, 88, 99, 22, 33, 11, 90];
for (var i = 0; i <= 8; i++) {
    console.log(number[4]);
    /*output
    22
    22
    22
    22
    22
    22
    22
    22
    22
     */
}

var number = [11, 56, 98, 110, 123, 67.43, 20];
for (var i = 0; i <= number.length; i++) {

    // (var i = 0; i < number.length; i++)

    // console.log(i, number[i]);
    var element = number[i];
    console.log(i, element);

    /*output==
11
56
98
110
123
67.43
20
undefined

*/

}
