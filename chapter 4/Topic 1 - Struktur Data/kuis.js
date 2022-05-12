// Soal 1
// Buatlah sebuah deret fibonacci,
// inputan berupa bilangan bulat yang mempresentasikan panjang dari array.

// Contoh : 
// N = 8

// Hasil : 
// [0, 1, 1, 2, 3, 5, 8, 13]

const N = 8;
let result = [0, 1];

for (let index = 0; index < N-2; index++) { // index++ => index = index + 1
    const sum = result[index] + result[index + 1];
    result.push(sum);
}

// console.log(result);




// Soal 2
// Diberikan sebuah array, tentukan jumlah dari elemennya.
// Contoh 1:
//     Arr = [1, 2, 3], 1 + 2 + 3 = 6

// Hasil:
//     6

// Contoh 2:
//     Arr = [-1, 4, 6, -2], -1 + 4 + 6 + (-2) = 7

// Hasil:
//     7

const arr = [5, 4, 3, 3];

function funcsum(total, value, value2, arr) {
    // console.log({
    //     total: total,
    //     value: value,
    //     index: index,
    //     arr : arr
    // });
    return total + value;
}

const sum = arr.reduce(funcsum);
// console.log(sum);


// Soal 3
// Diberikan 2 buah array sama panjang,
// Lakukan perbandingan nilai yang dimiliki array untuk setiap indexnya.
// Dan hitung array mana yang memiliki nilai lebih tinggi.

// Contoh:
// Arr0 = [1, 6, 7, 2]
// Arr1 = [2, 6, 4, 3]

// hasil: [0, 0]

// Index 0
// 1 < 2, point[0, 1]
// Index 1
// 6 = 6, point[0, 1]
// Index 2
// 7 > 4 point[1, 1]
// Index 3
// 2 < 3 point[1, 2]

// Hasil: [1, 2]

const arr0 = [1, 6, 7, 2];
const arr1 = [2, 6, 4, 3];

const hasil = [0, 0];

for (let index = 0; index < arr0.length; index++) {
    if (arr0[index] > arr1[index]) {
        hasil[0] = hasil[0] + 1;
    } else if (arr1[index] > arr0[index]) {
        hasil[1] = hasil[1] + 1;        
    }
}

// console.log(hasil);

// Soal 4

// Diberikan sebuah array dengan nilai 5 bilangan bulat,
// temukan nilai minimum dan maksimum yang dapat dihitung
// dengan menjumlahkan tepat empat dari lima bilangan bulat.
// Kemudian cetak nilai minimum dan maksimum masing-masing sebagai
// satu baris dari dua bilangan bulat panjang yang dipisahkan oleh spasi.

// Contoh:
// Arr = [1, 5, 7, 3, 9]
// Minumum = 1 + 3 + 5 + 7 = 16
// Maximum = 3 + 5 + 7 + 9 = 24

// Hasil:
// 16 24

const data = [1, 5, 7, 3, 9];
let max, min;

data.sort(function(a, b) {
    return a - b;
});

const maxArr = [...data];
maxArr.shift();
function funcsum(total, value) {
    return total + value;
}
max = maxArr.reduce(funcsum);

const minArr = [...data];
minArr.pop();

function funcsum(total, value) {
    return total + value;
}

min = minArr.reduce(funcsum);
console.log(min + " " + max);