import { timeConverter } from "../helpers/timeConverter";

function CookingTime({ time }) {
  return (
    <p className="time-block-item">
      <span className="time-block-type">{time.type} time</span>
      <span className="time-block-time">{timeConverter(time.time)}</span>
    </p>
  );
}

export default CookingTime;
