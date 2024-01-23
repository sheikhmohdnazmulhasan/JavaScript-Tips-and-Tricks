// Remove Fallacy Values an Array

// We know there are six false values in JavaScript.
//  1.false, 2.undefined, 3.null, 4.NaN, 5.0, 6.''

// We have an array and from this array we will remove all the fallacy values and extract the only truthy values.
const miscellaneous = ['🍎', false, '🍌', undefined, '🥑', NaN, ' 🫑', null, '🥦', ''];

// passing Boolean to array.filter() will remove falsy value from array
const fruits = miscellaneous.filter(Boolean);

console.log(fruits); // [ '🍎', '🍌', '🥑', ' 🫑', '🥦' ]