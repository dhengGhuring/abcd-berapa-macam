import { ANIMAL_DATABASE } from "./data/animals";

// Fungsi untuk computer membuat angka random dari 0 sampai 10
export const computerGenerateRandomNumber = () => {
  return Math.floor(Math.random() * (5 - 0 + 1)) + 0;
};

// Fungsi hitung total jari player dan komputer
export const totalJari = (jariPlayer: number,) => {
  const jariKomputer = computerGenerateRandomNumber();
//   console.log("ini jari komputer : ", jariKomputer)
  // rumus total jari = jari player + jari komputer
  const total = jariPlayer + jariKomputer;

  return total
};

// Fungsi konversi total jari ke abjad
export const konversiTotalJariKeHuruf = (total: number): string => {
    const alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const hasil = alfabet[total - 1] || "";
    return hasil;
}

// Fungsi timer / countdown
// export const startCountDown = (setTime: (time: number) => void, onComplete: () => void,)  => {
//     let timeLeft = 5;
//     setTime(timeLeft)

//     const timer = setInterval(() => {
//         if (timeLeft > 0) {
//             timeLeft--
//             setTime(timeLeft)
//         } else {
//             clearInterval(timer);
//             if (onComplete) {
//                 onComplete();
//             }
//         }
//     }, 1000);
// }

// Fungsi validasi jawaban player
export const validasiJawabanPlayer = (total: number, jawabanPlayer: string,) => {
    // Pencarian abjad
    const hasilKonversi = konversiTotalJariKeHuruf(total)
    // console.log("ini hasil konversi : ", hasilKonversi)

    const pencarianAbjad = ANIMAL_DATABASE.some(item => item.letter === hasilKonversi && item.name.toLowerCase() === jawabanPlayer.trim().toLowerCase());
    
    // ambil data pencarianAbjad
    const data = ANIMAL_DATABASE.find(item => item.letter === hasilKonversi && item.name.toLowerCase() === jawabanPlayer.trim().toLowerCase());
    
    // console.log("ini data : ", data);

    if (pencarianAbjad) {
      const result = {
        status: "menang",
        data: data
      }
      return result;
    } else {
      const result = {
        status: "kalah",
        data: data
      }
      return result;
    }
}


