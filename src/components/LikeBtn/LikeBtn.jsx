import { useState } from "react";
import { IconContext } from "react-icons";
import { HiHeart } from "react-icons/hi";
import "./index.scss";

const LikeBtn = ({ data, favouriteList, setFavouriteList }) => {
  const [isClicked, setIsClicked] = useState(true);

  // const deleteItemHandler = (itemId) => {
  //   setFavouriteList((prevList) => {
  //     const updatedList = prevList.filter((liked) => liked.id !== itemId);
  //     return updatedList;
  //   });
  // };

  //localStorage.setItem("users", JSON.stringify(users));

  const handleClick = () => {
    setIsClicked(!isClicked);

    const likedValue = localStorage.getItem("isLiked");

    if (
      isClicked === true
      // && localStorage.getItem(`isLiked${data.id}`) === false
    ) {
      localStorage.setItem(`isLiked${data.id}`, isClicked);

      setFavouriteList([
        ...favouriteList,
        {
          id: data.id + "f",
          title: data.title,
          vote_average: data.vote_average,
          poster_path: data.poster_path,
        },
      ]);
      // localStorage.setItem("favourites", JSON.stringify(favouriteList));
      console.log(data);
      console.log(favouriteList);
    }

    if (isClicked === false) {
      localStorage.removeItem(`isLiked${data.id}`, likedValue);
      // localStorage.removeItem("favourites", `${data.id}f`);

      // const deleteHandler = () => {
      //   onDeleteTodo(todo.id);
      // };
    }
  };

  return (
    <IconContext.Provider
      value={{
        style: {
          color: `${
            (localStorage.getItem(`isLiked${data.id}`) && "red") || "white"
          }`,
          transition: "all 1s",
          width: "25px",
          height: "25px",
        },
        className: "icon",
      }}
    >
      <div className="LikeBtn" onClick={handleClick}>
        <HiHeart />
      </div>
    </IconContext.Provider>
  );
};
export default LikeBtn;
