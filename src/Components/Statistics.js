export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total || 0}</li>
      <li>Positive feedback: {positivePercentage || 0}%</li>
    </ul>
  );
}
