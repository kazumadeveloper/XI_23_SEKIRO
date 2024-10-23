// Ambil elemen modal dengan ID masing-masing
var modal1 = document.getElementById('id01'); // Modal Login
var modal2 = document.getElementById('id02'); // Modal Register

// Tambahkan event listener untuk menutup modal jika klik di luar modal
window.onclick = function (event) {
    if (event.target === modal1) {
        modal1.style.display = "none";  // Tutup modal login
    } 
    else if (event.target === modal2) {
        modal2.style.display = "none";  // Tutup modal register
    }
};

// Ketika halaman dimuat, tambahkan state baru ke riwayat
history.pushState(null, null, null);

// Mencegah kembali dengan menambahkan event handler
window.onpopstate = function () {
    history.pushState(null, null, null);
};


// Ambil elemen-elemen yang diperlukan
const openRegisterLink = document.getElementById('openRegister');
const openLoginLink = document.getElementById('openLogin');
const registerModal = document.getElementById('id02');
const loginModal = document.getElementById('id01');


// Tambahkan event listener untuk membuka modal register
openRegisterLink.addEventListener('click', function (event) {
    event.preventDefault();  // Mencegah link melakukan navigasi default
    registerModal.style.display = 'block';  // Tampilkan modal register
    loginModal.style.display = 'none';  // Tampilkan modal register
});

// Tambahkan event listener untuk membuka modal login
openLoginLink.addEventListener('click', function (event) {
    event.preventDefault();  // Mencegah link melakukan navigasi default
    registerModal.style.display = 'none';  // Tampilkan modal register
    loginModal.style.display = 'block';  // Tampilkan modal register
});

const registerToLogin = document.getElementById('registerToLogin');
registerToLogin.addEventListener('click', function (event) {
    event.preventDefault();
    loginModal.style.display = 'block';
    registerModal.style.display = 'none';
    alert("Register Berhasil");
});










