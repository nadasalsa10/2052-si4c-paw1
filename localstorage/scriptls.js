let NPM = document.getElementById("NPM");
let Nama = document.getElementById("Nama");
let imageurl = document.getElementById("imageurl");

function simpan() {
    console.log(NPM.value)
    console.log(Nama.value)
    console.log(imageurl.value)

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
    // variabel nya harus sama dengan variabel yang ada di local storage (NPM dan Nama)
    data.push({
        NPM: NPM.value,
        Nama: Nama.value,
        imageurl: imageurl.value,
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
    hasil.forEach(element => {
        //console.log(element)
        document.getElementById("list-mhs").innerHTML += `<div class="col-lg-4" col-md-6">
        <h4 
        class="text-primary">${element.Nama}</h4> <h6 class="text-danger"> ${element.NPM}</h6>
        <img src="${element.imageurl}" alt="Foto ${element.Nama}" class="img-fluid">
        </div>`
    });

}

//Jalankan function tampil()
tampil()