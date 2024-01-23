//  How to flatten a multi-dimensional array

const smileys = ['😃', '😀', '😄', ['😁', '😆', '😌'], '🤩', ['😉', '🙃', '😂'], ['🥹', '😅']];

// We use array.flat() method to flatten one-level array
const flatten = smileys.flat();
console.log(flatten); //['😃', '😀', '😄', '😁', '😆', '😌', '🤩', '😉', '🙃', '😂', '🥹' , '😅']

// Multi-level array
const smileys2 = ['😃', '😀', '😄', ['😁', ['😆'], '😌'], '🤩', ['😂', ['😉', ['🙃']]], ['🥹', ['😅']]];

// We use array.flat(Infinity) method to flatten multi-level array
const flatten2 = smileys.flat(Infinity);
console.log(flatten2); //['😃', '😀', '😄', '😁', '😆', '😌', '🤩', '😉', '🙃', '😂', '🥹' , '😅']


console.log('helo world');