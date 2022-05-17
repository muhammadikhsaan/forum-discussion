class Human {
    static name = "aldo";

    constructor(nama, alamat){
        this.nama = nama;
        this.alamat = alamat;
    }

    introduce(){
        console.log(`${this.nama}`);
    }

    static kerja() {
        Human.name = "anton";
        console.log(Human.name);
        console.log("saya sedang bekerja");
    }

    static berjalan() {
        console.log(Human.name);
        console.log("saya sedang berjalan");
    }

    static tidur() {
        console.log("saya sedang tidur");
    }
}

class Plants {
    static fotosintesi() {
        console.log("sedang berfotosintesis");
    }
}

const hm = new Human("aldi", "padang");
hm.introduce();
Human.kerja();
Human.berjalan();