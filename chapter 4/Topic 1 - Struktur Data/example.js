// Cari elemen matrik of integer yang unik, kemunculan cuman 1x.

// Input :  
// 99  14  30   2
//  2   3   5  30
//  6   7   6   8

// Output : 
// 3  99  5  7  8  14 

// Input :  
// 1  2  3  
// 5  6  2
// 1  3  5
// 6  2  2

// Output : 
// Tidak ada yang unik

const arr =
[
    [99, 14, 30, 2],
    [2, 3, 5, 30],
    [6, 7, 6, 8]
]

// const arr = [
//     [99, 14],
//     [2, 3],
//     [2, 7]
// ]

const obj = {};

for (let index1 = 0; index1 < arr.length; index1++) {
    for (let index2 = 0; index2 < arr[index1].length; index2++) {
        // console.log({
        //     index1: index1,
        //     index2: index2,
        //     value: arr[index1][index2]
        // });

        var value = arr[index1][index2];

        // console.log(obj);

        if (obj[value] === undefined) { //obj[2] === undefined
            obj[value] = 1; //obj[99] = 1;
        } else {
            obj[value] = obj[value] + 1; //obj[2] = 1 + 1 = 2;
        }
        
        // console.log(obj);
    }
}

// console.log(obj);

const objKeys = Object.keys(obj);
objKeys.forEach(function (key) {
    if (obj[key] ===  1) {
        console.log({
            angka: key,
            jumlah: obj[key]
        });
    }
});

for (let key = 0; key < objKeys.length; key++) {
    if (obj[objKeys[key]] === 1) {
        console.log({
            angka: objKeys[key],
            jumlah: obj[objKeys[key]]
        });
    }
}