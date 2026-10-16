// Tugas 1A — Data & Logika
// ATURAN: untuk TIAP fungsi, tulis LANGKAH 1–3 sebagai komentar DULU, baru kode.
// Pakai for...of + if. JANGAN pakai .map / .filter / .find / .reduce dulu (lihat soal.md).

console.table(daftarItem);

// ─────────────────────────────────────────────
// FUNGSI 1 — hitungTersedia(daftar)
// Berapa banyak item yang properti true/false-nya bernilai true?
// ─────────────────────────────────────────────
// LANGKAH 1 — Masukan : daftarItem, Keluaran : berapa banyak item yang bernilai true
// LANGKAH 2 — daftarItem -> 3 -> daftar kosong -> 0
// LANGKAH 3 — LANGKAH (pseudocode)
//             kalau daftar kosong kembalikan 0
//             Mengecek ketersediaan pada setiap item yang ada pada daftarItem
//             jika ketersediaan bernilai true, maka kembalikan berapa banyak item yang bernilai true
// LANGKAH 4 — TERJEMAHKAN
function hitungTersedia(daftarItem){
    //  Mengecek apakah daftarItem kosong, jika kosong kembalikan nilai 0
    if (daftarItem.length === 0){
        return 0;
    }
    let jumlahitem = 0;
    // Melakukan perulangan untuk memeriksa setiap item dalam daftarItem dan memeriksa apakah ketersediaan bernilai true
    for (let i = 0; i < daftarItem.length; i++ ){
    if (daftarItem[i].tersedia === true){
        jumlahitem++;
    }
    }
    return jumlahitem;
}

// ─────────────────────────────────────────────
// FUNGSI 2 — cariBerdasarkanId(daftar, id)
// Kembalikan item yang id-nya cocok. Kalau tidak ada, kembalikan null.
// ─────────────────────────────────────────────
// LANGKAH 1 — Masukan : daftarItem dan id, Keluaran : item yang sesuai dengan id yang di inputkan
// LANGKAH 2 — daftarItem -> nama film, kategori, rating, dan ketersediaan -> id tidak ditemukan -> null
// LANGKAH 3 — LANGKAH (pseudocode)
//             mengecek id pada setiap id yang ada pada daftarItem
//             jika id sesuai kembalikan setiap item yang ada pada id tersebut
//             kalau id yang diinputkan tidak ada maka kembalikan null
// LANGKAH 4 — TERJEMAHKAN
function cariBerdasarkanId(daftarItem, id){
    for (let i = 0; i < daftarItem.length; i++){
        // Mengecek apakah ID item sesuai dengan ID yang dicari, jika sesuai kembalikan item yang id nya sesuai
        if (daftarItem[i].id === id){
           return daftarItem[i];
        }
    }
    // jika id tidak sesuai kembalikan null
    return null;
}

// ─────────────────────────────────────────────
// FUNGSI 3 — saringKategori(daftar, kategori)
// Kembalikan ARRAY BARU berisi item dengan kategori itu. Kalau tidak ada, array kosong [].
// ─────────────────────────────────────────────
// LANGKAH 1 — Masukan : daftarItem dan kategori, Keluaran : sebuah array yang berisi item yang dengan kategori sama
// LANGKAH 2 — daftarItem -> Array dengan kategori yang sama -> kategori tidak ada -> Array kosong []
// LANGKAH 3 — LANGKAH (pseudocode)
//             Mengecek kategori pada setiap item yang ada pada daftarItem
//             jika kategori sesuai, maka buat sebuah array baru yang berisi item dengan kategori yang sama
//             kalau kategori tidak sesuai maka kembalikan sebuah array kosong            
// LANGKAH 4 — TERJEMAHKAN
function saringKategori(daftarItem, kategori){
    let hasil = [];
    for (let i = 0; i < daftarItem.length; i++){
        // Mengecek apakah kategori item sesuai dengan kategori yang dicari
        if (daftarItem[i].kategori === kategori){
            // Memasukkan item yang kategorinya sesuai ke dalam array hasil
           hasil.push(daftarItem[i]);
        }
    }
    // Mengembalikan array yang berisi item dengan kategori yang sesuai, jika tidak ada yang sesuai maka akan mengembalikan array kosong
    return hasil;
}

// ─────────────────────────────────────────────
// FUNGSI 4 — rataRataTersedia(daftar)
// Rata-rata properti angka, HANYA dari item yang bernilai true.
// Kalau tidak ada satu pun yang true, kembalikan null.
// ─────────────────────────────────────────────
// LANGKAH 1 — Masukan : daftarItem, Keluaran : rata-rata dari keseluruhan item angka yang ketersediaannya bernilai true
// LANGKAH 2 — daftarItem -> rata-rata angka bernilai true -> tidak ada item bernilai true -> null
// LANGKAH 3 — LANGKAH (pseudocode)
//             Mengecek ketersediaan pada setiap item yang ada pada daftarItem
//             jika ketersediaan bernilai true, cari rata-rata item angkanya
//             lalu kembalikan rata-rata
//             kalau tidak ada satupun item yang ketersediaanya bernilai true maka kembalikan null
// LANGKAH 4 — TERJEMAHKAN
function rataRataTersedia(daftarItem){
    let ratarata = 0;
    let jumlah = 0;
    let total = 0;
    for (let i = 0; i < daftarItem.length; i++ ){
        if (daftarItem[i].tersedia === true){
            // Menambahkan item rating ke dalam total
            total += daftarItem[i].rating;
            jumlah++;   
        }
    }
    // Mengecek apakah tidak ada item yang tersedia, jika tidak ada kembalikan null
    if (jumlah === 0){
        return null;
    }
    // Mencari rata-rata dengan membagi total rating dengan jumlah itemnya
    ratarata = total / jumlah;
    return ratarata;
}

// ─────────────────────────────────────────────
// UJI — minimal 2 panggilan per fungsi: satu kasus normal, satu kasus tepi
// ─────────────────────────────────────────────
console.log("F1 Normal :", hitungTersedia(daftarItem));
console.log("F1 Kosong :", hitungTersedia([]));

console.log("F2 Normal :", cariBerdasarkanId(daftarItem, 3));
console.log("F2 Tidak ada:", cariBerdasarkanId(daftarItem, 8));

console.log("F3 Normal :", saringKategori(daftarItem, "Fantasi"));
console.log("F3 Tidak ada:", saringKategori(daftarItem, "Fiksi Sejarah"));

console.log("F4 Normal : ", rataRataTersedia(daftarItem))
console.log("F4 Tidak ada:", rataRataTersedia([
    { id: 1, rating: 7.5, tersedia: false },
    { id: 2, rating: 8.0, tersedia: false }]));