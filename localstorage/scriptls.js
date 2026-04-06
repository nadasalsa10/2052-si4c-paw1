let NPM = document.getElementById("NPM");
let Nama = document.getElementById("Nama");

function simpan() {
    console.log(NPM.value)
    console.log(Nama.value)

    // localStorage.setItem("NPM", NPM.value)
    // localStorage.setItem("Nama", Nama.value)

    // jika local storage belum ada isi/value 
    if(localStorage.getItem("Mahasiswa")===null){
        // simpan array kosong []
        localStorage.setItem("Mahasiswa", "[]")
    }

    // panggil local storage (konversi string --> object)
    let data = JSON.parse(localStorage.getItem("Mahasiswa"))
    console.log(data)

    // simpan value npm dan nama ke dalam object data
    data.push({
        npm: npm.value,
        nama: nama.value
    })
    console.log(data)

    // simpan data terbaru ke dalam local storage 
    // konversi dari object menjadu string
    localStorage.setItem("mahasiswa", JSON.stringify(data))
    tampil()
}

function tampil() {
    //panggil dulu local storage
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))

    // clear element ul id =list-mhs
    document.getElementById("list-mhs").innerHTML = ""
    //lakukkan perulangan (foreach)
    hasil.array.forEach(element => {
        //console.log(element)
        document.getElementById("list-mhs").innerHTML += `<li>${element.npm} ${element.nama} </li>`
        
    });

}

//Jalankan function tampil()
tampil()