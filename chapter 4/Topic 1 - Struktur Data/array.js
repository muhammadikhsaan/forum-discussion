
const arr = [1, 6, 5, 3, 8]; // index = panjang array - 1
console.log(arr);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// index = index + 1 = index++

for(var index = 0; index < arr.length; index = index + 1){ //index =1
    console.log({
        length: arr.length,
        index: index,
        value: arr[index]
    });
}

// arr.forEach(function(value, is) {
//     const result = {
//         length: arr.length,
//         index: is,
//         value: value
//     };

//     console.log(result);
// });

// arr.push(10);

// console.log(arr);

// const a = arr.pop();

// console.log(a);
// console.log(arr);

// arr.unshift(11);
// console.log(arr);

// const b = arr.shift();
// console.log(b);
// console.log(arr);

// const a = arr.join("|");
// console.log(a);

// function funcsum(total, value) {
//     return total + value;
// }
// const sum = arr.reduce(funcsum);
// console.log(sum);

// const sum = arr.reduce(function (total, value) {
//     return total * value;
// });
// console.log(sum);

// const sum = arr.reduce(function (total, value) {
//     return total - value;
// });
// console.log(sum);

// const sum = arr.reduce(function (total, value) {
//     return total / value;
// });
// console.log(sum);

function sort(a, b) {
    return b - a;
}
arr.sort(sort);
console.log(arr);

// const sarr = ["kamu", "saya", "aku"];
// sarr.sort();
// console.log(sarr);

// const res = arr.slice(2, 6);
// console.log(res);