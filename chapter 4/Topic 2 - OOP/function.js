function basicFunction() {
    // console.log(1 + 9 + 10 * 2);
    return 1 + 9 + 10 * 2;
}
// console.log(basicFunction());

const anonymousFunction = function() {
    // console.log("Ini sebuah fungsi");
    return "Ini sebuah fungsi";
}
// console.log(anonymousFunction());

const arrowFunction = () => "Ini Sebuah arrow fungsi";
// console.log(arrowFunction());

function parameterFunction(angka1, angka2) {
    // console.log(angka1 * angka2 - 10);
}
parameterFunction(3, 5);

function callbackFunction(angka, callback) {
    console.log(angka * callback());
}

function callback() {
    const angka = 6 + 2;
    return angka;
}

callbackFunction(8, callback);

console.log(callback);
console.log(callback());