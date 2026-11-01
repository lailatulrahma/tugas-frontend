// 1. Ambil wadah kartu
const wadahKartu = document.querySelector("#daftar-kartu");

// 2. Satu item -> teks HTML satu kartu
function buatKartu(item) {
// label untuk item yang bernilai false, untuk kasus film maka menggunakan tersedia atau tidak tersedia 
const label = item.tersedia ? "Tersedia" : "Tidak Tersedia";
// Menggunakan backtick agar nilai properti film bisa dimasukkan ke dalam HTML menggunakan ${}
   return ` 
   <article>
      <h3>${item.nama}</h3>
      <p>Kategori: ${item.kategori}</p>
      <p>Rating: ${item.rating}</p>
      <p>${label}</p>
   </article> 
   ` 
}

// 3. Daftar item -> semua kartu di halaman
function tampilkan(daftar) {
// kasus tepinya jika daftar kosong maka akan menampilkan kata film tidak di temukan digunakan jika tidak ada film yang cocok dengan kategori yang di pilih 
    if (daftar.length === 0) {
    wadahKartu.innerHTML = "<p>Film tidak ditemukan.</p>";
    return;
    }
// .map digunakan untuk membuat kartu dari setiap item lalu .join("") digunakan untuk menghilangkan tanda koma di antara kartu
    const semuakartu = daftar.map((item)=>buatKartu(item));
    wadahKartu.innerHTML = semuakartu.join("");
}

// filter digunakan untuk menampilkan kartu sesuai dengan tombol kategori yang dibuat
document.querySelector("#semua").addEventListener("click", function() {
  tampilkan(daftarItem);
});
document.querySelector("#fantasi").addEventListener("click", function() {
  const hasilFilter = daftarItem.filter((item) => item.kategori === "Fantasi");
  tampilkan(hasilFilter);
});
document.querySelector("#drama").addEventListener("click", function() {
  const hasilFilter = daftarItem.filter((item) => item.kategori === "Drama Keluarga");
  tampilkan(hasilFilter);
});
document.querySelector("#anime").addEventListener("click", function() {
  const hasilFilter = daftarItem.filter((item) => item.kategori === "Anime");
  tampilkan(hasilFilter);
});