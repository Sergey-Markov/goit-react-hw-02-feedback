export default function Button({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option =>{
        return(
           <button key={option} type="button" onClick={onLeaveFeedback}>
        {option}
      </button>
        )}
      )}
      {/* <button type="button" >
        neutral
      </button>
      <button type="button" >
        bad
      </button> */}
    </div>
  );
}
