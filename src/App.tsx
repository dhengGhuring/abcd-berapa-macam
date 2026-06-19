import { useEffect, useState } from "react";
import "./App.css";
import {
  konversiTotalJariKeHuruf,
  totalJari,
  validasiJawabanPlayer,
} from "./scripts";
import { ANIMAL_DATABASE, type Animal } from "./data/animals";
import { ModalFunFact } from "./components/ModalFunFact";

type StatusGame = "idle" | "menang" | "kalah";

function App() {
  // States
  const [jariPlayer, setJariPlayer] = useState<number | undefined>(undefined);
  const [countDown, setCountDown] = useState<number | null>(null);
  const [isStarted, setIsStarted] = useState(false);
  const [jawabanPlayer, setJawabanPlayer] = useState<string>("");
  const [huruf, setHuruf] = useState<string | undefined>(undefined);
  const [statusGame, setStatusGame] = useState<StatusGame>("idle");
  const [perhitunganTotalJari, setPerhitunganTotalJari] = useState<
    number | undefined
  >(undefined);
  const [dataHewan, setDataHewan] = useState<Animal | undefined>(undefined);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const oneData = ANIMAL_DATABASE.find((item) => item.name === "Harimau");

  // Functions
  const handleStart = () => {
    if (jariPlayer === undefined) return;
    setIsStarted(true);
    const result = totalJari(jariPlayer);
    setPerhitunganTotalJari(result);
    const hasilAbjad = konversiTotalJariKeHuruf(result);
    setHuruf(hasilAbjad);
    setCountDown(10);
  };

  const handleCekJawaban = () => {
    if (perhitunganTotalJari === undefined) return;

    const hasilTebakan = validasiJawabanPlayer(
      perhitunganTotalJari,
      jawabanPlayer,
    );
    // console.log("ini hasil tebakan : ", hasilTebakan);
    if (hasilTebakan.status === "menang") {
      setStatusGame("menang");
      setIsStarted(false);
      setDataHewan(hasilTebakan.data);
      setIsOpenModal(true);
    } else {
      setStatusGame("kalah");
      setIsStarted(false);
      setDataHewan(hasilTebakan.data);
    }
  };

  useEffect(() => {
    if (!isStarted || statusGame !== "idle") return;

    const intervalId = setInterval(() => {
      setCountDown((prev) => {
        if (prev === null) return null;
        if (prev <= 1) {
          clearInterval(intervalId);
          setIsStarted(false);

          alert("Waktu habis");
          setStatusGame("kalah");

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isStarted, statusGame]);

  return (
    <>
      <div>
        {/* <h1>ABCD berapa macam</h1> */}
        <hr />
        <h3>Cara Bermain :</h3>
        {/* <h3>Anda akan bermain abcd berapa macam dengan computer</h3> */}
        <p>
          Masukkan jumlah jari yang ingin anda keluarkan, angka itu nanti akan
          di jumlahkan dengan jumlah jari yang dikeluarkan oleh komputer. Anda
          harus bisa menebak nama hewan sesuai dengan huruf yang tertera.
        </p>
        <hr />
        <p>Perhatikan waktu untuk menjawab jangan sampai kehabisan waktu!!</p>
        <hr />
        <p>
          Ketik jawaban anda setelah anda melihat huruf dan waktu yang tersisa.
        </p>
        <hr />
        {huruf && <p>Hurufnya adalah {huruf}</p>}
        <p>Waktu tersisa {countDown ?? "-"} </p>

        {statusGame === "menang" && (
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#22c272ff",
            }}
          >
            Menang
          </p>
        )}
        {statusGame === "kalah" && (
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "red" }}>
            Kalah
          </p>
        )}

        <form onSubmit={(e) => e.preventDefault()}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <label htmlFor="jumlahAngka">Jumlah Angka:</label>
            <input
              type="number"
              id="jumlahAngka"
              name="jumlahAngka"
              placeholder="Masukkan jumlah angka yang ingin anda keluarkan"
              min={0}
              max={5}
              value={jariPlayer !== undefined ? jariPlayer : ""}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (isNaN(value) || value < 0) {
                  setJariPlayer(undefined);
                  return;
                } else if (value > 5) {
                  alert("Maksimal 5 jari");
                  setJariPlayer(undefined);
                } else {
                  setJariPlayer(value);
                }
              }}
            />
            {statusGame === "kalah" || statusGame === "menang" ? (
              <input
                type="reset"
                value="Reset"
                onClick={() => {
                  setJariPlayer(undefined);
                  setCountDown(null);
                  setIsStarted(false);
                  setJawabanPlayer("");
                  setHuruf(undefined);
                  setStatusGame("idle");
                  setPerhitunganTotalJari(undefined);
                }}
              />
            ) : (
              <button
                onClick={handleStart}
                disabled={
                  jariPlayer === undefined || jariPlayer > 5 || isStarted
                }
              >
                Mulai
              </button>
            )}
          </div>
        </form>

        {isStarted && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              maxWidth: "500px",
              marginTop: "10px",
              marginBottom: "30px",
            }}
          >
            <input
              type="string"
              placeholder="Masukkan jawaban anda"
              onChange={(e) => {
                const value = e.target.value;
                setJawabanPlayer(value);
              }}
            />
            <button
              onClick={() => {
                handleCekJawaban();
              }}
              disabled={!isStarted || !jawabanPlayer}
            >
              Cek
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {isOpenModal && (
        <ModalFunFact
          dataHewam={dataHewan}
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )}
    </>
  );
}

export default App;
