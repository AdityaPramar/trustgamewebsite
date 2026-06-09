import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import donations from '../assets/donations.png';
import iconselection from '../assets/iconselection.png';
import opponent from '../assets/opponent.png';

export default function Explanation() {
  const [checked, setChecked] = useState(false);
  const [showError, setShowError] = useState(false);
  const [mailId, setMailId] = useState("");
  const [showMailError, setShowMailError] = useState(false);
  const navigate = useNavigate(); 

  const handleReturn = () => {
  const mailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mailId.trim());
  if (!checked || !mailValid) {
    setShowError(!checked);
    setShowMailError(!mailValid);
  } else {
    setShowError(false);
    setShowMailError(false);
    localStorage.setItem("participant_mail", mailId.trim());  // ← add this
    navigate(`/?mailId=${encodeURIComponent(mailId.trim())}`);
  }
};

  return (
    <>
      <div style={{ maxWidth: "900px", margin: "120px auto", padding: "20px" }}>

        {/* ── Slide 1: Title ── */}
        <section style={{ textAlign: "center", marginBottom: "80px" }}>
          <h1 style={{ fontSize: "2.2rem", fontWeight: "bold" }}>
            繰り返し信頼ゲーム課題
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#555", marginTop: "8px" }}>
            参加者向け説明書
          </p>
        </section>

        <hr style={{ marginBottom: "80px", borderColor: "#e0e0e0" }} />

        {/* ── Slide 2: Overview ── */}
        <section style={{ textAlign: "center", marginBottom: "80px" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: "2", maxWidth: "680px", margin: "0 auto" }}>
            この課題では、あなたは複数の相手と「投資」と「返報」のやり取りを繰り返し行います。
            各相手とのやり取りは複数回続き、相手によってやり取り回数が異なります。
            課題中には、相手に対する印象や期待について質問されることがあります。
            あなたが課題を行っている間、相手も別室で同じゲームに参加しています。
          </p>
        </section>

        <hr style={{ marginBottom: "80px", borderColor: "#e0e0e0" }} />

        {/* ── Slide 3: 課題の流れ ── */}
        <section style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "28px" }}>
            課題の流れ
          </h2>
          <div style={{ display: "flex", gap: "48px", alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2.2" }}>
                {[
                  "ハンドルネームを入力する",
                  "自分のアイコンを選択する",
                  "相手とマッチングする",
                  "投資額を決定する",
                  "相手から返ってきた金額を確認する",
                  "必要に応じて質問に回答する",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "12px", fontSize: "1.05rem" }}>
                    <span style={{ color: "#888" }}>–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: "24px", fontSize: "1rem", lineHeight: "1.8", color: "#333" }}>
                相手ごとに、やり取り回数は異なります。短期相手とは3〜4回、長期相手とは
                10〜12回の投資ラウンドを行います。この情報は各ブロックの開始時に表示されます。
              </p>
            </div>
            <div
              style={{
                flex: 1,
                border: "2px dashed #ccc",
                borderRadius: "8px",
                minHeight: "240px",
                overflow: "hidden",
                backgroundColor: "#fafafa",
              }}
            >
              <img src={iconselection} alt="アイコン選択画面" style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "6px" }} />
            </div>
          </div>
        </section>

        <hr style={{ marginBottom: "80px", borderColor: "#e0e0e0" }} />

        {/* ── Slide 4: 各ラウンドについて ── */}
        <section style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "28px", textAlign: "center" }}>
            各ラウンドについて
          </h2>
          <div style={{ maxWidth: "640px", margin: "0 auto", fontSize: "1.05rem", lineHeight: "1.9" }}>
            <p>毎ラウンド、あなたには<strong>100円</strong>が与えられます。その中から、相手に渡す金額（0〜100円）を選択してください。</p>
            <p style={{ marginTop: "16px" }}>あなたが渡した金額は、相手に届く時点で<strong>3倍</strong>になります。</p>
            <div
              style={{
                margin: "24px 0",
                padding: "20px 28px",
                background: "#f5f5f5",
                borderRadius: "8px",
                borderLeft: "4px solid #555",
              }}
            >
              <p style={{ margin: 0, fontWeight: "600", marginBottom: "8px" }}>例：</p>
              <p style={{ margin: 0 }}>あなたが40円投資 → 相手は120円を受け取る</p>
            </div>
            <p>相手は、その中から一部をあなたに返します。返ってきた金額は自動的に受け取ります。</p>
          </div>
        </section>

        <hr style={{ marginBottom: "80px", borderColor: "#e0e0e0" }} />

        {/* ── Slide 5: 投資額の選択方法 ── */}
        <section style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "28px" }}>
            投資額の選択方法
          </h2>
          <div style={{ display: "flex", gap: "48px", alignItems: "flex-start" }}>
            <div
              style={{
                flex: 1,
                border: "2px dashed #ccc",
                borderRadius: "8px",
                minHeight: "240px",
                overflow: "hidden",
                backgroundColor: "#fafafa",
              }}
            >
              <img src={donations} alt="スライダー投資画面" style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "6px" }} />
            </div>
            <div style={{ flex: 1, fontSize: "1.05rem", lineHeight: "1.9" }}>
              <p>投資額はスライダーを使って選択します。</p>
              <p style={{ marginTop: "12px" }}>スライダーを動かすと、以下が表示されます。</p>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "8px" }}>
                {[
                  "投資額",
                  "相手に渡る金額（3倍後）",
                  "自分の手元に残る金額",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "#888" }}>–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: "16px" }}>
                内容を確認したら「確定」ボタンを押してください。
              </p>
            </div>
          </div>
        </section>

        <hr style={{ marginBottom: "80px", borderColor: "#e0e0e0" }} />

        {/* ── Slide 6: 相手とのやり取り回数 ── */}
        <section style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "28px" }}>
            相手とのやり取り回数
          </h2>
          <div style={{ display: "flex", gap: "48px", alignItems: "flex-start" }}>
            <div style={{ flex: 1, fontSize: "1.05rem", lineHeight: "1.9" }}>
              <p>相手ごとに、やり取り回数が異なります。</p>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "8px" }}>
                {[
                  "短期相手：4〜5回",
                  "長期相手：10〜12回",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "#888" }}>–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: "16px" }}>各ブロックの開始時に、どちらのタイプかが表示されます。</p>
            </div>
            <div
              style={{
                flex: 1,
                border: "2px dashed #ccc",
                borderRadius: "8px",
                minHeight: "240px",
                overflow: "hidden",
                backgroundColor: "#fafafa",
              }}
            >
              <img src={opponent} alt="マッチング画面" style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "6px" }} />
            </div>
          </div>
        </section>

        <hr style={{ marginBottom: "80px", borderColor: "#e0e0e0" }} />

        {/* ── Slide 7: 質問項目について ── */}
        <section style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "28px", textAlign: "center" }}>
            質問項目について
          </h2>
          <div style={{ maxWidth: "640px", margin: "0 auto", fontSize: "1.05rem", lineHeight: "1.9" }}>
            <p>課題中および課題終了後に、いくつかの質問に回答していただきます。</p>
            <p style={{ marginTop: "16px", marginBottom: "8px" }}>例：</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "相手は協力的に感じたか",
                "次にいくら返してくると思うか",
                "他者への信頼や協力に関する考え方",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "#888" }}>–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "20px", color: "#555" }}>
              正解・不正解はありません。その時点での率直な印象や考えを回答してください。
            </p>
          </div>
        </section>

        <hr style={{ marginBottom: "80px", borderColor: "#e0e0e0" }} />

        {/* ── Slide 8: 追加報酬について ── */}
        <section style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "28px", textAlign: "center" }}>
            追加報酬について
          </h2>
          <div style={{ maxWidth: "640px", margin: "0 auto", fontSize: "1.05rem", lineHeight: "1.9" }}>
            <p>
              課題終了後、各相手とのやり取りの中から一部の試行がランダムに選ばれます。
              その結果に基づいて追加報酬（ボーナス）が計算されます。
            </p>
            <p style={{ marginTop: "16px" }}>
              どの試行が選ばれるかは事前には分かりません。そのため、<strong>すべての試行を重要だと考えて</strong>参加してください。
            </p>
            <p style={{ marginTop: "16px" }}>
              追加謝礼の上限は<strong>2,000円</strong>です。
            </p>
          </div>
        </section>

        <hr style={{ marginBottom: "80px", borderColor: "#e0e0e0" }} />

        {/* ── Slide 9: 寄付課題について ── */}
        <section style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "28px", textAlign: "center" }}>
            寄付課題について
          </h2>
          <div style={{ maxWidth: "640px", margin: "0 auto", fontSize: "1.05rem", lineHeight: "1.9" }}>
            <p>課題終了後、追加で<strong>1,000円</strong>が与えられます。その一部または全部を、日本赤十字社へ寄付することができます。</p>
            <p style={{ marginTop: "16px" }}>寄付は任意です。寄付しないことによる不利益は一切ありません。</p>
            <p style={{ marginTop: "16px" }}>
              寄付は「<strong>匿名</strong>」または「<strong>非匿名</strong>」のいずれかの条件で行われます。どちらの条件かは画面上で説明されます。
            </p>
          </div>
        </section>

        <hr style={{ marginBottom: "80px", borderColor: "#e0e0e0" }} />

        {/* ── Slide 10: 参加コードについて ── */}
        <section style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "28px", textAlign: "center" }}>
            参加コードについて
          </h2>
          <div style={{ maxWidth: "640px", margin: "0 auto", fontSize: "1.05rem", lineHeight: "1.9" }}>
            <p>
              参加者同士をマッチングするため、参加時間ごとにルームコードが割り当てられています。
              参加時刻に対応するルームコードを入力してください。
            </p>
            <table style={{ width: "100%", marginTop: "24px", borderCollapse: "collapse", fontSize: "1rem" }}>
              <thead>
                <tr style={{ background: "#f0f0f0" }}>
                  <th style={{ padding: "12px 20px", border: "1px solid #ddd", textAlign: "center" }}>参加時間</th>
                  <th style={{ padding: "12px 20px", border: "1px solid #ddd", textAlign: "center" }}>参加コード</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["14:00", "RM10402"],
                  ["15:00", "RM20402"],
                  ["16:00", "RM30402"],
                ].map(([time, code]) => (
                  <tr key={time}>
                    <td style={{ padding: "12px 20px", border: "1px solid #ddd", textAlign: "center" }}>{time}</td>
                    <td style={{ padding: "12px 20px", border: "1px solid #ddd", textAlign: "center", fontFamily: "monospace", fontWeight: "600" }}>{code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "24px" }}>
              {[
                "各ルームは開始時刻から10分間開いています。",
                "必ず指定された時間帯に参加してください。",
                "時間帯に間に合わなかった場合は、次の時間帯までお待ちいただき、対応するルームコードを使用してください。",
                "同じルームコードに参加した参加者同士でマッチングが行われる場合があります。",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
                  <span style={{ color: "#888", flexShrink: 0 }}>–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr style={{ marginBottom: "80px", borderColor: "#e0e0e0" }} />

        {/* ── Slide 11: 注意事項 ── */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "28px", textAlign: "center" }}>
            注意事項
          </h2>
          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "他の参加者と相談せず、一人で回答してください。",
                "できるだけ静かな環境で参加してください。",
                "ブラウザを閉じたり更新したりしないでください。",
                "深く考えすぎず、直感的に回答してください。",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: "12px",
                    fontSize: "1.05rem",
                    lineHeight: "1.8",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ color: "#888", flexShrink: 0 }}>–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr style={{ marginBottom: "48px", borderColor: "#e0e0e0" }} />

        {/* ── Confirmation + Button ── */}
        <section style={{ textAlign: "center", marginBottom: "120px" }}>

          {/* ── Mail ID input ── */}
          <div style={{ marginBottom: "28px" }}>
            <label
              htmlFor="mail-input"
              style={{ display: "block", fontSize: "1.05rem", marginBottom: "10px" }}
            >
              メールアドレスを入力してください（謝礼の振込に使用します）
            </label>
            <input
              id="mail-input"
              type="email"
              value={mailId}
              onChange={(e) => {
                setMailId(e.target.value);
                if (showMailError) setShowMailError(false);
              }}
              placeholder="example@email.com"
              style={{
              margin: "25px",
              color : "#4c4c4cff",
              padding: "10px 16px",
              fontSize: "1rem",
              borderRadius: "8px",
              border: showMailError ? "2px solid #c0392b" : "2px dotted #dbdbdbff",
              backgroundColor: "whitesmoke",
              width: "320px",
              maxWidth: "100%",
              outline: "none",
              boxSizing: "border-box",
            }}
            />
            {showMailError && (
              <p style={{ color: "#c0392b", marginTop: "8px", fontSize: "0.95rem" }}>
                ※ 有効なメールアドレスを入力してください。
              </p>
            )}
          </div>

          {/* ── Checkbox ── */}
          <label
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "1.05rem",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <div style={{
  display: "inline-block",
  width: "20px",
  height: "20px",
  borderRadius: "4px",
  backgroundColor: "whitesmoke",
  position: "relative",
  flexShrink: 0,
}}>
  <input
    type="checkbox"
    checked={checked}
    onChange={(e) => {
      setChecked(e.target.checked);
      if (e.target.checked) setShowError(false);
    }}
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      margin: 0,
      cursor: "pointer",
      opacity: 0,  // hide native, keep clickable
    }}
  />
  {checked && (
    <span style={{
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      color: "#6699ee",
      pointerEvents: "none",
    }}>●</span>
  )}
</div>
            説明書を読みました
          </label>

          {showError && (
            <p style={{ color: "#c0392b", marginTop: "12px", fontSize: "0.95rem" }}>
              ※ チェックボックスにチェックを入れてください。
            </p>
          )}

          <div style={{ marginTop: "24px" }}>
            <button
              onClick={handleReturn}
              style={{
                padding: "12px 36px",
                fontSize: "1rem",
                fontWeight: "600",
                borderRadius: "8px",
                border: "none",
                backgroundColor: (checked && mailId) ? "#6699ee" : "#bbcae5ff",
                color: "#fff",
                cursor: (checked && mailId) ? "pointer" : "not-allowed",
                transition: "background-color 0.2s",
              }}
            >
              ホームページに戻る
            </button>
          </div>
        </section>

      </div>
    </>
  );
}