const arr = [1, 5, 6, 6, 8]; // index = panjang array - 1
// console.log(arr[5]);

// index = index + 1 = index++

for(var index = 0; index < arr.length; index = index + 1){ //index =1
    console.log({
        length: arr.length,
        index: index,
        value: arr[index]
    });
}

// arr.push(10);

// // console.log(arr);

// const a = arr.pop();

// // console.log(a);
// // console.log(arr);

// arr.unshift(11);
// // console.log(arr);

// const b = arr.shift();
// // console.log(b);
// // console.log(arr);

// arr.forEach(function(value, i) {
//     console.log(value);
//     // console.log(i);
// });