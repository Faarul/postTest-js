//menghutung luas segitiga
const setengah = 0.5;
let alas = prompt(`masukan Alas :`);
let tinggi = prompt(`masukan Tinggi :`);

hasil = setengah * alas * tinggi;
document.write(hasil)


//menghitung luas lingkaran 
const pi = 3.14;
let jariJAri = prompt(`masukan Jari-Jari :`);
hasil = jariJAri * jariJAri * pi;
document.write(hasil)

// membuat variabel dengan tipe data Object
let aboutMe = {
    namaLengkap : `Fahrul Bilad`,
    namaPanggilan : `Fahrul`,
    jenisKelamin : `Laki-Laki`,
    Alamat : {
        dukuh : `Jetis`,
        rtRw : `Rt 001/Rw 001`,
        kelurahan : `Wonorejo`,
        kecamatan : `Polokarto`,
        kabupaten : `Sukoharjo`
    },
    pekerjaan : `Mahasiswa`,
    hobi : `ngoding`
};
console.log(aboutMe);

//variabel dengan tipe data Array menggunakan forEach.
const bahasaPemrograman = [`PHP`, `Javascript`, `C`, `C++`, `Java`, `Python`]

bahasaPemrograman.forEach(function(item){
    console.log(item)
})