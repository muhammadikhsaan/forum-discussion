// var sums;

// function sum(angkaAwal, angkaAkhir) {
//     sums = angkaAwal + angkaAkhir;
//     console.log(sums);
// }

// sum(10, 2);

function action(func) {
    func();
    console.log(func);
}

function func() {
    console.log("hallo");
}

action(func);
