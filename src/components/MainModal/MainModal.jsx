import { useState, useEffect } from "react";
import LikeBtn from "../LikeBtn";
import "./index.scss";

const MainModal = ({
  data,
  isVisibile,
  onModalClick,
  favouriteList,
  setFavouriteList,
}) => {
  const { title, overview, poster_path, id } = data;
  // const [isMarked, setMarked] = useState(false);

  // useEffect(() => {
  //   if (localStorage.getItem("username")) {
  //     setMarked(true);
  //   }
  // }, [isMarked]);

  return (
    isVisibile && (
      <div className="Modal__overlay">
        <div className="Modal">
          <img
            className="Modal__img"
            src={`https://image.tmdb.org/t/p/w342${poster_path}`}
            alt={title}
          />
          <div className="Modal__info">
            <button onClick={() => onModalClick(false)}>X</button>
            <h2 className="Modal__header">{title}</h2>
            <p className="Modal__desc">{overview}</p>
            <LikeBtn
              data={data}
              favouriteList={favouriteList}
              setFavouriteList={setFavouriteList}
            />
            {/* <LikeBtn setMarked={setMarked} isMarked={isMarked} /> */}
          </div>
        </div>
      </div>
    )
  );
};

export default MainModal;
