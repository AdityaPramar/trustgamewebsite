export default function DesktopOnly() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1>パソコンからアクセスしてください</h1>
        <p>
          この実験はスマートフォンおよびタブレットには対応していません。
        </p>
      </div>
    </div>
  );
}