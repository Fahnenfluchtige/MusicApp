import "../styles/Duration.css";
export const Duration = ({ seconds }: { seconds: number }) => {
  return <div className="time">{formatTime(seconds)}</div>;
};

const formatTime = (seconds: number) => {
  const date = new Date(seconds * 1000);
  const hh = String(date.getUTCHours()).padStart(2, '0');
  const mm = String(date.getUTCMinutes()).padStart(2, '0');
  const ss = String(date.getUTCSeconds()).padStart(2, '0');
  if (hh !== '00') {
    return `${hh}:${mm}:${ss}`;
  }
  else {
    return `${mm}:${ss}`;
  }
  
};

