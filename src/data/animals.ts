export interface Animal {
  name: string;        // Nama dalam Bahasa Indonesia (contoh: "Anjing")
  englishName: string; // Nama dalam Bahasa Inggris (contoh: "Dog")
  letter: string;      // Huruf awal (contoh: "A")
  category: 'Mamalia' | 'Burung' | 'Reptil' | 'Ikan' | 'Amfibi' | 'Serangga' | 'Lainnya';
  funFact: string;     // Fakta unik singkat dalam Bahasa Indonesia
  imageUrl: string;    // URL gambar hewan (low resolution)
}

export const ANIMAL_DATABASE: Animal[] = [
  // === HURUF A ===
  {
    name: "Anjing",
    englishName: "Dog",
    letter: "A",
    category: "Mamalia",
    funFact: "Indra penciuman anjing ribuan kali lebih tajam daripada manusia.",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Ayam",
    englishName: "Chicken",
    letter: "A",
    category: "Burung",
    funFact: "Ayam sebenarnya adalah kerabat dekat dinosaurus Tyrannosaurus Rex (T-Rex).",
    imageUrl: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Aligator",
    englishName: "Alligator",
    letter: "A",
    category: "Reptil",
    funFact: "Aligator bisa menumbuhkan kembali gigi mereka yang tanggal hingga ribuan kali seumur hidupnya.",
    imageUrl: "https://images.unsplash.com/photo-1604608684575-0497c3a5270c?auto=format&fit=crop&w=300&q=80"
  },

  // === HURUF B ===
  {
    name: "Beruang",
    englishName: "Bear",
    letter: "B",
    category: "Mamalia",
    funFact: "Beruang kutub sebenarnya memiliki kulit berwarna hitam di balik bulu putih mereka.",
    imageUrl: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Beo",
    englishName: "Parrot",
    letter: "B",
    category: "Burung",
    funFact: "Burung beo tidak memiliki pita suara, mereka meniru suara menggunakan otot di tenggorokan.",
    imageUrl: "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Bunglon",
    englishName: "Chameleon",
    letter: "B",
    category: "Reptil",
    funFact: "Mata bunglon bisa bergerak ke dua arah yang berbeda secara bersamaan.",
    imageUrl: "https://images.unsplash.com/photo-1504450758481-7338eaa75e92?auto=format&fit=crop&w=300&q=80"
  },

  // === HURUF C ===
  {
    name: "Cacing",
    englishName: "Earthworm",
    letter: "C",
    category: "Lainnya",
    funFact: "Cacing tanah tidak memiliki mata atau telinga, tetapi sangat sensitif terhadap getaran.",
    imageUrl: "https://images.unsplash.com/photo-1576014131795-d440191a8e8b?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Camar",
    englishName: "Seagull",
    letter: "C",
    category: "Burung",
    funFact: "Burung camar mampu meminum air laut karena memiliki kelenjar khusus untuk menyaring garam.",
    imageUrl: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Cupang",
    englishName: "Betta Fish",
    letter: "C",
    category: "Ikan",
    funFact: "Ikan cupang bisa mengambil oksigen langsung dari udara, tidak hanya dari dalam air.",
    imageUrl: "https://images.unsplash.com/photo-1534080391025-09795d197a5b?auto=format&fit=crop&w=300&q=80"
  },

  // === HURUF D ===
  {
    name: "Domba",
    englishName: "Sheep",
    letter: "D",
    category: "Mamalia",
    funFact: "Domba memiliki penglihatan hingga 300 derajat, sehingga bisa melihat ke belakang tanpa menoleh.",
    imageUrl: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Dara",
    englishName: "Dove",
    letter: "D",
    category: "Burung",
    funFact: "Burung dara atau merpati sering digunakan sebagai simbol perdamaian dan kesetiaan.",
    imageUrl: "https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Dugong",
    englishName: "Dugong",
    letter: "D",
    category: "Mamalia",
    funFact: "Dugong adalah mamalia laut herbivora yang sering disebut sebagai 'sapi laut'.",
    imageUrl: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=300&q=80"
  },

  // === HURUF E ===
  {
    name: "Elang",
    englishName: "Eagle",
    letter: "E",
    category: "Burung",
    funFact: "Penglihatan burung elang diperkirakan 4 hingga 8 kali lebih tajam dibanding manusia.",
    imageUrl: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Emu",
    englishName: "Emu",
    letter: "E",
    category: "Burung",
    funFact: "Emu adalah burung besar asal Australia yang tidak bisa terbang, tapi bisa berlari sangat cepat.",
    imageUrl: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=300&q=80"
  },

  // === HURUF F ===
  {
    name: "Flamingo",
    englishName: "Flamingo",
    letter: "F",
    category: "Burung",
    funFact: "Warna merah muda pada flamingo berasal dari pigmen makanan laut yang mereka makan, seperti udang.",
    imageUrl: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=300&q=80"
  },

  // === HURUF G ===
  {
    name: "Gajah",
    englishName: "Elephant",
    letter: "G",
    category: "Mamalia",
    funFact: "Gajah adalah satu-satunya mamalia di bumi yang tidak bisa melompat.",
    imageUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Gurita",
    englishName: "Octopus",
    letter: "G",
    category: "Lainnya",
    funFact: "Gurita memiliki tiga jantung dan darah mereka berwarna biru.",
    imageUrl: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?auto=format&fit=crop&w=300&q=80"
  },

  // === HURUF H ===
  {
    name: "Harimau",
    englishName: "Tiger",
    letter: "H",
    category: "Mamalia",
    funFact: "Bukan cuma bulunya, kulit harimau juga memiliki pola loreng yang unik.",
    imageUrl: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Hiu",
    englishName: "Shark",
    letter: "H",
    category: "Ikan",
    funFact: "Hiu tidak memiliki tulang dalam tubuhnya, melainkan hanya tulang rawan.",
    imageUrl: "https://images.unsplash.com/photo-1560275669-46c5a88d6a4c?auto=format&fit=crop&w=300&q=80"
  },

  // === HURUF I ===
  {
    name: "Iguana",
    englishName: "Iguana",
    letter: "I",
    category: "Reptil",
    funFact: "Iguana memiliki 'mata ketiga' di atas kepalanya yang berfungsi mendeteksi perubahan cahaya.",
    imageUrl: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Ikan Mas",
    englishName: "Goldfish",
    letter: "I",
    category: "Ikan",
    funFact: "Ikan mas sebenarnya memiliki ingatan yang baik, tidak cuma bertahan beberapa detik seperti mitosnya.",
    imageUrl: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=300&q=80"
  },

  // === HURUF J ===
  {
    name: "Jerapah",
    englishName: "Giraffe",
    letter: "J",
    category: "Mamalia",
    funFact: "Meskipun lehernya sangat panjang, jumlah tulang leher jerapah sama dengan manusia, yaitu 7 ruas.",
    imageUrl: "https://images.unsplash.com/photo-1507666480-f7e9f65d2f70?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Jangkrik",
    englishName: "Cricket",
    letter: "J",
    category: "Serangga",
    funFact: "Jangkrik bersuara dengan cara menggosokkan sayap mereka, bukan dari mulutnya.",
    imageUrl: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=300&q=80"
  }
];