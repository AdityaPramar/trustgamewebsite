import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//import { useEffect } from "react";
import imagehome from '../assets/imagehome.png';
{/*import Navbar from "../components/Navbar";*/}
const VALID_CODES = {
  RMK7X4P: { from: "2026-10-01", to: "2026-10-02" },   // Oct 1-2
  RMT3N9W: { from: "2026-10-03", to: "2026-10-04" },   // Oct 3-4
  RMH6B2Z: { from: "2026-10-05", to: "2026-10-09" },   // Oct 5-9
  DEBUGTESTER0402: null,
};
  "https://docs.google.com/presentation/d/e/2PACX-1vTej7qEIB-rTGX-hzSDlGWk3X8s8_t_fvffqAMDcatR5PDdEK6u4VGPuC_0nWaJOAexgI9PhoWPgYRgs/pub?start=false&loop=false&delayms=3000";

  
export default function LandingPage() {
  const [code, setCode] = useState("");
  const [errorType, setErrorType] = useState(null);
  const navigate = useNavigate();
const location = useLocation();  // add this

const isExplanationDone = !!location.state?.explanationDone;
  const handleStart = () => {
  const upper = code.trim().toUpperCase();
  if (!(upper in VALID_CODES)) {
    setErrorType("invalid");
  } else if (!isCodeValidNow(upper)) {
    setErrorType("time");
  } else {
    setErrorType(null);
    navigate(`/experiment?roomCode=${upper}`);
  }
};

  function isCodeValidNow(code) {
  const upper = code.trim().toUpperCase();
  if (!(upper in VALID_CODES)) return false;

  const rule = VALID_CODES[upper];
  if (rule === null) return true;

  // JST = UTC + 9h
  const jst = new Date(Date.now() + 9 * 60 * 60 * 1000);
  const today = jst.toISOString().slice(0, 10);   // "YYYY-MM-DD" in JST

  if (today < rule.from || today > rule.to) return false;

  // Optional time-of-day window: add start: [h, m], end: [h, m] to a code
  if (rule.start && rule.end) {
    const total = jst.getUTCHours() * 60 + jst.getUTCMinutes();
    return total >= rule.start[0] * 60 + rule.start[1]
        && total <= rule.end[0] * 60 + rule.end[1];
  }
  return true;
}

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
  setErrorType(null);   
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

        <div style={{ color: "#e74c3c", minHeight: "24px" }}>
  {errorType === "invalid" && "コードが正しくありません。もう一度入力してください。"}
  {errorType === "time" && "このコードは現在ご利用いただけません。参加可能な日程をご確認ください。"}
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