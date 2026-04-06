// simpan ke local storage 
localStorage.setItem("NPM", 123);

// baca data local storage
// tampilkan di console
console.log(localStorage.getItem("NPM"))

// tampilkan di paragraf id=npm
document.getElementById("NPM").innerHTML = localStorage.getItem("NPM")