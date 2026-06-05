import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ExperimentPage() {
  const [searchParams] = useSearchParams();
  const roomCode = searchParams.get("roomCode");
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (event) => {
      if (event.data?.type === "EXPERIMENT_COMPLETE") {
        navigate("/done", { state: { participantId: event.data.participantId } });
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [navigate]);

  return (
  <iframe
    src={`/jspsych-experiment.html?roomCode=${roomCode}`}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: "none",
      overflow: "hidden",
    }}
    title="Trust Game Experiment"
  />
);
}