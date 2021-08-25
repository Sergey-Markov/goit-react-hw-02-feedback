export default function Button({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            onClick={onLeaveFeedback}
            className="App-button"
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
