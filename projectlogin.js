// Get the modal
var modal = document.getElementById('id01'); // Mendapatkan elemen modal dengan id 'id01'

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) { // Menambahkan event listener untuk mendeteksi klik di seluruh jendela browser
    if (event.target == modal) { // Memeriksa apakah elemen yang diklik adalah modal (bukan konten modal)
        modal.style.display = "none"; // Jika benar, tutup modal dengan mengubah 'display' menjadi 'none'
    }
}


var modal = document.getElementById('id02'); // Mendapatkan elemen modal dengan id 'id01'

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) { // Menambahkan event listener untuk mendeteksi klik di seluruh jendela browser
    if (event.target == modal) { // Memeriksa apakah elemen yang diklik adalah modal (bukan konten modal)
        modal.style.display = "none"; // Jika benar, tutup modal dengan mengubah 'display' menjadi 'none'
    }
}

    // Ketika halaman dimuat, tambahkan state baru ke riwayat
    history.pushState(null, null, window.location.href);

    // Mencegah kembali dengan menambahkan event handler
    window.onpopstate = function() {
        history.pushState(null, null, window.location.href);
        alert("Tombol 'Back' dinonaktifkan di halaman ini.");
    };

