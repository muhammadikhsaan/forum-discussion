class MakhlukHidup {
    #golongan;
    _jumlahKaki;
    makanan;
    lamaHidup;

    constructor(makanan, lamaHidup, golongan, jumlahKaki){
        if (this.constructor === MakhlukHidup) {
            throw new Error("Hal ini dilarang");
        }

        this.makanan = makanan;
        this.lamaHidup = lamaHidup;
        this.#golongan = golongan;
        this._jumlahKaki = jumlahKaki;
    }

    suara() {
        console.log("bersuara");
    }

    tampilkanGolongan(){
        console.log(`Makhluk Hidup ini berada di golongan ${this.#golongan}`);
    }

    berjalan(){
        console.log(`Makhluk ini berjalan dengan ${this._jumlahKaki} kaki`);
    }
}

class Manusia extends MakhlukHidup {
    nama;

    constructor(makanan, lamaHidup, nama, jumlahKaki) {
        super(makanan, lamaHidup, "manusia", jumlahKaki);
        this.nama = nama;
    }

    memberiMakan(){
        console.log(`Manusia makan ${this.makanan}`);
    }

    tampilkanJumlahKaki(){
        console.log(`Jumlah Kakinya ada ${this._jumlahKaki}`);
    }

    bernyanyi(){
        this.suara();
    }

    berjalan() {
        super.berjalan();
        console.log(`Manusia juga dapat berjalan lebih cepat yang disebut dengan berlari`);
    }
}

let mn = new Manusia("nasi", 100, "aldi", 2);
// console.log(mn._jumlahKaki);
// mn.memberiMakan();
// mn.tampilkanGolongan();
mn.berjalan();

// try {
//     let mh = new MakhlukHidup("daging", 10, "hewan", 4);
//     mh.tampilkanGolongan();
// } catch (error) {
//     console.log(error);
// }