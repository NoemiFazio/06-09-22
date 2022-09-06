import { useState, useEffect } from "react";
import MainCard from "../MainCard";
import TopRatedList from "../TopRatedList";
import UpcomingList from "../UpcomingList";
import LikedList from "../LikedList";
import Counter from "../Counter";
import { GET } from "../../utils/api";
import "./index.scss";

const MainSection = ({ modalVisibility, favouriteList, setFavouriteList }) => {
  const [movieLists, setMovieLists] = useState({});

  const [page, setPage] = useState(1);

  useEffect(() => {
    GET("movie", "popular", "&language=en-US&page=").then((data) =>
      setMovieLists((prev) => ({ ...prev, popular: data.results }))
    );

    GET("movie", "top_rated", "&language=en-US&page=", page).then((data) =>
      setMovieLists((prev) => ({ ...prev, topRated: data.results }))
    );

    GET("movie", "upcoming", "&language=en-US&page=").then((data) =>
      setMovieLists((prev) => ({ ...prev, upcoming: data.results }))
    );
  }, [page]);

  return (
    <div className="MainSection">
      <div className="MainSection_div">
        {movieLists.popular && (
          <MainCard
            cardData={movieLists.popular[0]}
            modalVisibility={modalVisibility}
          />
        )}
        <div className="MainSection_right">
          {movieLists.topRated && (
            <>
              <TopRatedList
                cardData={movieLists.topRated.filter(
                  (movie) => movie.vote_average >= 8.0
                )}
                nCards={6}
                modalVisibility={modalVisibility}
              />
            </>
          )}
          <Counter
            increase={() => setPage((prev) => prev + 1)}
            decrease={() => setPage((prev) => prev - 1)}
            page={page}
          />
          {movieLists.upcoming && (
            <UpcomingList
              cardData={movieLists.upcoming}
              nCards={4}
              modalVisibility={modalVisibility}
            />
          )}
        </div>
      </div>
      {favouriteList.length && (
        <LikedList
          favouriteList={favouriteList}
          setFavouriteList={setFavouriteList}
          modalVisibility={modalVisibility}
        />
      )}
    </div>
  );
};

export default MainSection;
