import { useLocation } from "react-router-dom";

export default function DonePage() {
  const location = useLocation();
  const participantId = location.state?.participantId;

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "sans-serif",
      textAlign: "center",
      gap: "16px",
    }}>
      <p style={{ fontSize: "24px" }}>
  ✅ 保存が完了しました。ご協力ありがとうございました。
</p>
<p style={{ fontSize: "18px", color: "#444" }}>
  報酬に関する詳細につきましては、近日中にあらためてご連絡いたします。
</p>
{participantId && (
  <p style={{ fontSize: "14px", color: "#666" }}>
    参加者ID: {participantId}
  </p>
)}
    </div>
  );
}
