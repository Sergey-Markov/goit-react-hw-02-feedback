export default function Button({ countGood, countNeutral, countBad }) {
  return (
    <div>
      <button type="button" onClick={countGood}>
        good
      </button>
      <button type="button" onClick={countNeutral}>
        neutral
      </button>
      <button type="button" onClick={countBad}>
        bad
      </button>
    </div>
  );
}
