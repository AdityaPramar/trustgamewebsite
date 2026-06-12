import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//import { useEffect } from "react";
import imagehome from '../assets/imagehome.png';
{/*import Navbar from "../components/Navbar";*/}
const VALID_CODES = ["RM10402", "RM20402", "RM30402"];
  "https://docs.google.com/presentation/d/e/2PACX-1vTej7qEIB-rTGX-hzSDlGWk3X8s8_t_fvffqAMDcatR5PDdEK6u4VGPuC_0nWaJOAexgI9PhoWPgYRgs/pub?start=false&loop=false&delayms=3000";

  
export default function LandingPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
const location = useLocation();  // add this

const isExplanationDone = !!location.state?.explanationDone;
  const handleStart = () => {
        if (VALID_CODES.includes(code.trim().toUpperCase())) {
      navigate(`/experiment?roomCode=${code.trim().toUpperCase()}`);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {/*<Navbar slidesUrl={SLIDES_URL} />*/}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 8%",
          gap: "60px",
        }}
      >
        {/* LEFT */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "24px",
              lineHeight: 1.1,
            }}
          >
          信頼ゲーム実験へのご参加
          </h1>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              maxWidth: "600px",
              color: "#555",
              marginBottom: "32px",
            }}
          >
            信頼ゲーム実験へようこそ。このたびは実験にご参加いただきありがとうございます。まずは下のボタンから実験説明をご覧いただき、実験の流れやルールをご確認ください。 説明を読み終えた後は、ページ下部までスクロールし、参加コードを入力して実験を開始してください。どうぞよろしくお願いいたします。
          </p>


        <button
          onClick={() => navigate("/explanation")}
          style={{
            padding: "16px 32px",
            fontSize: "18px",
            cursor: "pointer",
            borderRadius: "8px",
            backgroundColor: "#6699ee",
            color: "white",
            border: "none",
          }}
        >
          実験説明を見る
        </button>
        </div>

        {/* RIGHT */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={imagehome}
            alt="Trust Game"
            style={{
              width: "100%",
              maxWidth: "700px",
              borderRadius: "16px",
            }}
          />
        </div>
      </section>

      {/* START SECTION */}
      <section
        style={{
          minHeight: "97vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
          backgroundColor: "#f8f9fa",
        }}
        id="start-section"
      >
        <h2
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          参加コードを入力してください
        </h2>
        <p>参加コードは説明資料の最後のスライドをご確認ください。</p>

        <input
  type="text"
  placeholder="例：RMXXXXX"
  value={code}
  onChange={(e) => {
    setCode(e.target.value);
    setError(false);
  }}
  onKeyDown={(e) => {
    if (e.key === "Enter") handleStart();
  }}
  style={{
    fontSize: "22px",
    padding: "12px 18px",
    border: "2px solid #aaa",
    borderRadius: "8px",
    textAlign: "center",
    width: "260px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    backgroundColor: "#ffffff",
    color: "#000000",
  }}
/>

        <div
          style={{
            color: "#e74c3c",
            minHeight: "24px",
          }}
        >
          {error &&
            "コードが正しくありません。もう一度入力してください。"}
        </div>

        <button
  onClick={handleStart}
  disabled={!isExplanationDone}
  style={{
    padding: "18px 40px",
    fontSize: "20px",
    cursor: isExplanationDone ? "pointer" : "not-allowed",
    borderRadius: "8px",
    backgroundColor: isExplanationDone ? "#6699ee" : "#bbcae5ff",
    color: "white",
    border: "none",
  }}
>
  実験開始
</button>
{!isExplanationDone && (
  <p style={{ color: "#888", fontSize: "0.95rem", marginTop: "8px" }}>
    ※ 先に実験説明をお読みください。
  </p>
)}
      </section>

  <footer
  style={{
    backgroundColor: "#ffffff",
    borderTop: "1px solid #e5e7eb",
    padding: "20px 8%",
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <a
      href="https://www.brain.ipc.i.u-tokyo.ac.jp"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#000",
        textDecoration: "none",
        fontWeight: "600",
        fontSize: "16px",
      }}
    >
      東京大学 天野・中井・中山研究室 
    </a>
  </div>
</footer>
    </div>
  );
}