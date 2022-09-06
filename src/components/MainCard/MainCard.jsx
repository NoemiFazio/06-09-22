import { memo } from "react";

import "./index.scss";

const MainCard = ({
  cardData,
  value = { className: "MainCard" },
  averageIsVis = true,
  modalVisibility,
}) => {
  const { title, vote_average, poster_path } = cardData;

  return (
    <div className={value.className} onClick={() => modalVisibility(cardData)}>
      <img
        className="MainCard--img"
        src={`https://image.tmdb.org/t/p/w342${poster_path}`}
        alt={title}
      />
      <div className="MainCard__text">
        <h3>{title}</h3>

        {averageIsVis && <p>{vote_average} </p>}
      </div>
    </div>
  );
};

export default memo(MainCard);
