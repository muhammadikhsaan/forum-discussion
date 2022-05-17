class Human {
    sapa = "hallo";
    static sayHai = "hai";

    constructor(nama, alamat){
        this.nama = nama;
        this.alamat = alamat;
        this.sapa = `hallo ${nama}`;
    }

    introduce() {
        console.log(`Hi, nama saya ${this.nama} berasal dari ${this.alamat}`);
    }

    static work(){
        console.log(`Saya sedang bekerja`);
    }
}

Human.prototype.greet = function(name) {
    console.log(`Hi, ${name}, I'm ${this.nama}`);
}

Human.attack = function() {
    console.log("Negara A sudah diserang");
}

const hm = new Human("aldo", "jakarta");
hm.introduce();
hm.greet("anton");

console.log(Human.sayHai);
Human.work();
Human.attack();
