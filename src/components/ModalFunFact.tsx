import type { Animal } from "../data/animals";

type Props = {
  dataHewam: Animal;
  isOpen: boolean;
  onClose: () => void;
};

const getCategoryStyle = (category: string) => {
  switch (category) {
    case "Mamalia":
      return { backgroundColor: "#e0f2fe", color: "#0369a1" };
    case "Burung":
      return { backgroundColor: "#fef3c7", color: "#b45309" };
    case "Reptil":
      return { backgroundColor: "#dcfce7", color: "#15803d" };
    case "Ikan":
      return { backgroundColor: "#e0f7fa", color: "#006064" };
    case "Serangga":
      return { backgroundColor: "#f3e8ff", color: "#6b21a8" };
    default:
      return { backgroundColor: "#f3f4f6", color: "#374151" };
  }
};

export const ModalFunFact = ({ dataHewam, isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: translate(-50%, -45%) scale(0.95); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
      
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(15, 23, 42, 0.65)",
          backdropFilter: "blur(8px)",
          zIndex: 999,
          animation: "fadeIn 0.2s ease-out",
        }}
      />

      {/* Modal Container */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          borderRadius: "24px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          zIndex: 1000,
          width: "90%",
          maxWidth: "420px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          fontFamily: "system-ui, -apple-system, sans-serif",
          animation: "scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Animal Image */}
        <div style={{ position: "relative", width: "100%", height: "240px", overflow: "hidden" }}>
          <img
            src={dataHewam.imageUrl}
            alt={dataHewam.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {/* Category Badge */}
          <span
            style={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)",
              ...getCategoryStyle(dataHewam.category),
            }}
          >
            {dataHewam.category}
          </span>
        </div>

        {/* Content Section */}
        <div style={{ padding: "24px", textAlign: "left" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
            <h2 style={{ margin: 0, fontSize: "26px", fontWeight: "800", color: "#0f172a" }}>
              {dataHewam.name}
            </h2>
            <span style={{ fontSize: "14px", color: "#64748b", fontWeight: "500", fontStyle: "italic" }}>
              {dataHewam.englishName}
            </span>
          </div>

          <hr style={{ border: 0, borderTop: "1px solid #f1f5f9", margin: "16px 0" }} />

          <h4 style={{ margin: "0 0 8px 0", fontSize: "12px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>
            Fun Fact ✨
          </h4>
          <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.6", color: "#334155", fontWeight: "400" }}>
            {dataHewam.funFact}
          </p>

          <button
            onClick={onClose}
            style={{
              marginTop: "24px",
              width: "100%",
              padding: "14px",
              borderRadius: "16px",
              border: "none",
              backgroundColor: "#2563eb",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background-color 0.2s, transform 0.1s",
              boxShadow: "0 4px 12px rgba(37, 99, 235, 0.2)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#1d4ed8";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#2563eb";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "scale(0.98)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Tutup
          </button>
        </div>
      </div>
    </>
  );
};
