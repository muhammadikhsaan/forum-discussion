const luas = require("./luas.js");

const fs = require("fs");

console.log(luas(4, 3));
// console.log(chalk.red('Hello world!'));

const isi = fs.readFileSync("./name.txt", 'utf-8'); // Buffer => string

console.log(isi);

// console.log(typeof JSON.stringify({
//     "Nama": "Anton",
//     "Umur": "12 Tahum"
// }));

// console.log(typeof {
//     "Nama": "Anton",
//     "Umur": "12 Tahum"
// });

fs.writeFileSync("./test.json", JSON.stringify({
    "Nama": "Anton",
    "Umur": "12 Tahum"
}, null, 2)); // Object => string