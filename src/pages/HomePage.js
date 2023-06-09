import { useEffect, useState } from 'react';
import { DropdownGenres } from '../components/homepages/DropdownGenres';
import { Modal } from '../components/homepages/Modal';
import { MovieList } from '../components/homepages/MovieList';
import { NetflixTitleLogo } from '../images';
import MovieShowcase from '../components/homepages/MovieShowcase';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMovie } from '../redux/movieSlice';
import { fetchWatchlist } from '../redux/watchlistSlice';
import { getProfileId } from '../utils/local-storage';

export default function HomePage() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.currentProfile);
  const watchlist = useSelector((state) => state.watchlist.mylist);
  const watchlistId = watchlist?.map((el) => el.movieId);

  const [currentMovie, setCurrentMovie] = useState(false);
  const allMovies = useSelector((state) => state.movie.movie);
  const [genreList1, setGenreList1] = useState([]);
  const [genreList2, setGenreList2] = useState([]);
  const [genreList3, setGenreList3] = useState([]);
  const [genreList4, setGenreList4] = useState([]);
  const [genreList5, setGenreList5] = useState([]);
  const [itemModal, setItemModal] = useState({});

  const changeCurrentMovie = () => {
    setCurrentMovie(true);
  };
  const closeModal = () => {
    setCurrentMovie(false);
  };

  useEffect(() => {
    dispatch(fetchAllMovie());
    dispatch(fetchWatchlist(getProfileId()));
  }, []);

  useEffect(() => {
    if (allMovies) {
      const genreListMovie = allMovies.filter(
        (el) => el.MovieGenres[0]?.Genre?.id === 1
      );
      setGenreList1(genreListMovie);

      const genreListMovie2 = allMovies.filter(
        (el) => el.MovieGenres[0]?.Genre?.id === 2
      );
      setGenreList2(genreListMovie2);

      const genreListMovie3 = allMovies.filter(
        (el) => el.MovieGenres[0]?.Genre?.id === 3
      );
      setGenreList3(genreListMovie3);

      const genreListMovie4 = allMovies.filter(
        (el) => el.MovieGenres[0]?.Genre?.id === 4
      );
      setGenreList4(genreListMovie4);

      const genreListMovie5 = allMovies.filter(
        (el) => el.MovieGenres[0]?.Genre?.id === 5
      );
      setGenreList5(genreListMovie5);
    }
  }, [allMovies]);

  return (
    <>
      {currentMovie && (
        <Modal
          closeModal={closeModal}
          setCurrentMovie={setCurrentMovie}
          itemModal={itemModal}
          allMovies={allMovies}
        />
      )}
      <div className="absolute top-[770px]  left-0 right-0 bg-gradient-to-t from-black h-[130px] "></div>
      <div className="bg-black ">
        <MovieShowcase />

        <div className="fixed inline-block top-24 left-9 z-20">
          <p className="sticky text-white text-4xl top-0">Movies</p>
        </div>
        <DropdownGenres />

        {/* MovieList */}
        <div className="relative bottom-[80px] z-10  ml-10 w-[1650px]">
          <MovieList
            title={'My List'}
            changeCurrentMovie={changeCurrentMovie}
            movieSet={genreList1}
            dispatch={dispatch}
            setItemModal={setItemModal}
            watchlistId={watchlistId}
          />
        </div>
        <div className="relative bottom-[110px] z-10  ml-10 w-[1650px]">
          <MovieList
            title={'New Release'}
            changeCurrentMovie={changeCurrentMovie}
            movieSet={genreList2}
            dispatch={dispatch}
            setItemModal={setItemModal}
          />
        </div>
        <div className="relative bottom-[110px] z-10  ml-10 w-[1650px]">
          <MovieList
            title={'Thrillers & Horror'}
            changeCurrentMovie={changeCurrentMovie}
            movieSet={genreList3}
            dispatch={dispatch}
            setItemModal={setItemModal}
          />
        </div>
        <div className="relative bottom-[110px] z-10  ml-10 w-[1650px]">
          <MovieList
            title={'Comedies'}
            changeCurrentMovie={changeCurrentMovie}
            movieSet={genreList4}
            dispatch={dispatch}
            setItemModal={setItemModal}
          />
        </div>
        <div className="relative bottom-[110px] z-10  ml-10 w-[1650px]">
          <MovieList
            title={'Family Comedies'}
            changeCurrentMovie={changeCurrentMovie}
            movieSet={genreList5}
            dispatch={dispatch}
            setItemModal={setItemModal}
          />
        </div>
      </div>
    </>
  );
}
