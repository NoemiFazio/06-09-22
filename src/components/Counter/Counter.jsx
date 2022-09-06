import "./index.scss";

const Counter = ({ increase, decrease, page }) => {
  return (
    <div className="counter">
      {" "}
      <button disabled={page === 1} className="decrease-btn" onClick={decrease}>
        -
      </button>
      <p>{page}</p>
      <button className="increase-btn" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default Counter;
