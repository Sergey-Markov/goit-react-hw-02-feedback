export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className="list">
      <li className="list-items">Good: {good}</li>
      <li className="list-items">Neutral: {neutral}</li>
      <li className="list-items">Bad: {bad}</li>
      <li className="list-items">Total: {total || 0}</li>
      <li className="list-items">
        Positive feedback: {positivePercentage || 0}%
      </li>
    </ul>
  );
}
