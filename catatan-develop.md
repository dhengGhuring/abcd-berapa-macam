# Catatan Develop

## DAFTAR ISSUE

1. Function untuk totalJari gak sama karena fungsi totalJari dipanggil 2x di handleStart dan handleCekJawaban gara gara itu juga fungsi untuk generate jari komputer jadi berbeda juga. [SOLVED]
2. Ketika player sudah klik tombol Cek, countdown masih berjalan. Seharusnya countdown mati ketika tombol Cek diklik. [SOLVED]
3. Tombol mulai hanya boleh satu kali klik saja, agar tidak ada pemanggilan function berulang kali, jika sudah diklik maka tombol tersebut akan disabled. [SOLVED]
4. Jika waktu sudah habis dan belum menjawab permainan masih lanjut, buat agar permainan berhenti dan menampilkan popup "Waktu Anda Habis". [SOLVED]
5. Validasi pencarian atau pencocokan jawaban player dengan database. Masalahnya adalah fungsi hanya mencari array pertama dari daftar hewan. Contohnya, untuk huruf "A", game hanya akan menganggap benar jika pemain menjawab "Anjing". Jika pemain menjawab "Ayam" atau "Aligator", game akan mendeteksinya sebagai "Kalah" padahal jawaban tersebut valid dan ada di database. [SOLVED]

---

### SOLUSI

1. Buat state yang menyimpan perhitungan total jari agar tidak perlu memanggil function totalJari berulang ulang.
2. Tempatkan fungsi interval di app.tsx langsung agar bisa di control sendir.
3. Tambahkan state isStarted ke property disabled button Mulai.
4. Memindahkan interval waktu ke dalam app.tsx dengan begitu react bisa memanipulasi interval tersebut.
5. Ubah pencocokan agar mencari apakah ada hewan di database yang memiliki huruf awal tersebut dan namanya cocok dengan input pemain. Menggunakan some dan menambahkan pencocokan name dengan jawaban player.

---

### SARAN FITUR

1. Menampilkan "Fun Fact" & Informasi Edukatif
2. Kategori Tebakan Baru selain hewan.
3. Visualisasi jari tangan (misal: ✊=0, ☝️=1, ✌️=2, 🤟=3, 🖐️=5) atau SVG ilustrasi
4. Fitur petunjuk hint.
5. Sistem Skor.
6. Peningkatan UI UX.
7. Kecerdasan buatan AI Komputer
   - Buat komputer bisa "berpikir". Player bisa mengatur tingkat kesulitannya :
     - Mudah : Komputer punya jeda waktu random (misal 2-4 detik) baru menjawab, dan ada kemungkinan 20% dia salah/kehabisan waktu.
     - Menengah : Komputer akan selalu menjawab benar dalam waktu 3 detik.
     - Sulit : Komputer akan selalu menjawab benar dalam waktu 2 detik, dan ada kemungkinan 20% dia tidak mau menjawab.
