import {
  AddButton,
  CloseButton,
  PlayButton,
  PlayIconButton,
  CheckButton,
} from '../../images';
import img2 from '../../assets/img2.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addWatchlist, deleteWatchlist } from '../../redux/watchlistSlice';

export function Modal({ closeModal, itemModal, genreList1, genreList2 }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.currentProfile);
  const watchlist = useSelector((state) => state.watchlist.mylist);

  const watchlistId = watchlist?.map((el) => el.movieId);
  const watchlistDel = watchlist?.filter((el) => el.movieId === itemModal.id);

  const [inWatchwatch, setInWatchlist] = useState(false);

  useEffect(() => {
    const res = watchlistId.some((el) => el === itemModal.id);
    setInWatchlist(res);
  }, [watchlist]);

  const handleClickAddWatchlist = () => {
    dispatch(addWatchlist({ movieId: itemModal.id, profileId: profile.id }));
  };
  const handleClickDelWatchlist = () => {
    dispatch(deleteWatchlist(watchlistDel[0].id, profile.id));
  };
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-30"
      onMouseDown={closeModal}
    >
      <div
        className="relative mt-10 w-[55%] h-full bg-zinc-900 rounded-lg shadow-lg overflow-auto  m-auto  pb-10 "
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="absolute mt-3 right-3 z-30" onClick={closeModal}>
          <CloseButton />
        </button>
        <div className="absolute top-40 ">
          <div className="flex flex-col ">
            {/* logoMovie */}
            <div className="relative z-10 w-[50%] h-full pl-4 top-10">
              <img
                className=" object-cover w-full h-full "
                src={itemModal.logo}
                alt=""
              />
            </div>
            <div className="flex ">
              <div className="flex gap-2 absolute z-10 ml-12 top-60">
                <button
                  className="
                  px-7
                  py-0
                  bg-white
                  text-black
                  text-lg
                  font-bold
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-opacity-50 hover:shadow-lg
                   active:ring-2 ring-white
                  transition
                  duration-150
                  ease-in-out
                  flex
                  items-center
                  whitespace-nowrap
                "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <PlayIconButton />
                  play
                </button>
                {inWatchwatch ? (
                  <button
                    className="stroke-white opacity-70 hover:opacity-100 active:opacity-50"
                    onClick={handleClickDelWatchlist}
                  >
                    <CheckButton />
                  </button>
                ) : (
                  <button
                    className="stroke-white opacity-70 hover:opacity-100 active:opacity-50"
                    onClick={handleClickAddWatchlist}
                  >
                    <AddButton />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[320px]  left-0 right-0 bg-gradient-to-t from-zinc-900 h-[130px] "></div>

        {/* video */}
        <div className="w-full h-[450px] overflow-hidden ">
          <video className="w-full shadow-lg" autoPlay loop controls muted>
            <source src={itemModal.trailer} type="video/mp4" />
          </video>
        </div>
        {/* video */}

        {/* content */}
        <div className="flex gap-10  m-auto w-[90%]  mt-8">
          <div className="flex flex-col w-[60%]">
            <div className="flex gap-3">
              <button className=" border-2 border-gray-500 text-white text-lg px-2">
                {itemModal.Age.name}
              </button>
              <p className="text-yellow-50 text-lg">{itemModal.length}</p>
            </div>
            <div>
              <p className="break-words w-[500px] text-white text-lg pt-8 ">
                {itemModal.description}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <p className="text-zinc-500">Cast : &nbsp; </p>
              <p className="break-words w-[200px] text-white ">
                {itemModal?.MovieCasts[0].Cast?.name}
              </p>
            </div>
            <div className="flex mt-5">
              <p className="text-zinc-500">Genres : &nbsp; </p>
              <p className="break-words w-[200px] text-white ">
                {itemModal?.MovieGenres[0].Genre?.name}
              </p>
            </div>
            <div className="flex mt-5">
              <p className="text-zinc-500">This movie is : &nbsp; </p>
              <p className="break-words w-[150px] text-white ">
                {itemModal?.MovieMoods[0].Mood?.name}
              </p>
            </div>
          </div>
        </div>
        {/* content */}

        <h1 className="text-white text-3xl ml-11 mt-10 ">More Like This</h1>

        {/* cardMovie */}
        <div className="flex flex-wrap justify-center gap-5 w-[900px] m-auto mt-4 mb-20">
          <div className="flex justify-center">
            <div className=" w-[260px] h-[360px] rounded-lg  shadow-lg bg-neutral-800 hover:bg-opacity-60 ">
              <div className="w-full h-[140px] overflow-hidden">
                <img
                  className="rounded-t-lg"
                  src="https://res.cloudinary.com/dfeyolmc9/image/upload/v1677998856/Screen_Shot_2566-03-05_at_13.46.37_yrzvhf.png"
                  alt=""
                />
              </div>
              <div className="p-2">
                <div className="flex justify-between">
                  <div className="flex gap-2 mt-1 pr-2 py-3">
                    <button className=" border-2 border-gray-500 text-white text-lg px-2">
                      16+
                    </button>
                    <p className="text-yellow-50 text-lg pt-1">2.05</p>
                  </div>
                  <div>
                    <button className="opacity-70 hover:opacity-100 active:opacity-50 pt-2">
                      <PlayButton />
                    </button>
                    <button className="stroke-white opacity-70 hover:opacity-100 active:opacity-50">
                      <AddButton />
                    </button>
                  </div>
                </div>
                <p className="break-words w-[240px] text-white text-sm pt-3 m-auto ">
                  The Guardians leave us with lessons on love, laughter, fun,
                  family and friends as they fight against the forces of Ronan
                  and Thanos to protect the galaxy.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" w-[260px] h-[360px] rounded-lg  shadow-lg bg-neutral-800 hover:bg-opacity-60 ">
              <div className="w-full h-[140px] overflow-hidden">
                <img
                  className="rounded-t-lg"
                  src="https://res.cloudinary.com/dfeyolmc9/image/upload/v1678005764/Screen_Shot_2566-03-05_at_15.37.51_rguv9x.png"
                  alt=""
                />
              </div>
              <div className="p-2">
                <div className="flex justify-between">
                  <div className="flex gap-2 mt-1 pr-2 py-3">
                    <button className=" border-2 border-gray-500 text-white text-lg px-2">
                      16+
                    </button>
                    <p className="text-yellow-50 text-lg pt-1">2.30</p>
                  </div>
                  <div>
                    <button className="opacity-70 hover:opacity-100 active:opacity-50 pt-2">
                      <PlayButton />
                    </button>
                    <button className="stroke-white opacity-70 hover:opacity-100 active:opacity-50">
                      <AddButton />
                    </button>
                  </div>
                </div>
                <p className="break-words w-[240px] text-white text-sm pt-3 m-auto ">
                  The Guardians leave us with lessons on love, laughter, fun,
                  family and friends as they fight against the forces of Ronan
                  and Thanos to protect the galaxy.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" w-[260px] h-[360px] rounded-lg  shadow-lg bg-neutral-800 hover:bg-opacity-60 ">
              <div className="w-full h-[140px] overflow-hidden">
                <img
                  className="rounded-t-lg"
                  src="https://res.cloudinary.com/dfeyolmc9/image/upload/v1678005765/Screen_Shot_2566-03-05_at_15.39.43_o5wqvs.png"
                  alt=""
                />
              </div>
              <div className="p-2">
                <div className="flex justify-between">
                  <div className="flex gap-2 mt-1 pr-2 py-3">
                    <button className=" border-2 border-gray-500 text-white text-lg px-2">
                      All
                    </button>
                    <p className="text-yellow-50 text-lg pt-1">2.15</p>
                  </div>
                  <div>
                    <button className="opacity-70 hover:opacity-100 active:opacity-50 pt-2">
                      <PlayButton />
                    </button>
                    <button className="stroke-white opacity-70 hover:opacity-100 active:opacity-50">
                      <AddButton />
                    </button>
                  </div>
                </div>
                <p className="break-words w-[240px] text-white text-sm pt-3 m-auto ">
                  The Guardians leave us with lessons on love, laughter, fun,
                  family and friends as they fight against the forces of Ronan
                  and Thanos to protect the galaxy.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" w-[260px] h-[360px] rounded-lg  shadow-lg bg-neutral-800 hover:bg-opacity-60 ">
              <div className="w-full h-[140px] overflow-hidden">
                <img
                  className="rounded-t-lg"
                  src="https://res.cloudinary.com/dfeyolmc9/image/upload/v1678078897/Screen_Shot_2566-03-06_at_11.58.34_mg0tck.png"
                  alt=""
                />
              </div>
              <div className="p-2">
                <div className="flex justify-between">
                  <div className="flex gap-2 mt-1 pr-2 py-3">
                    <button className=" border-2 border-gray-500 text-white text-lg px-2">
                      16+
                    </button>
                    <p className="text-yellow-50 text-lg pt-1">2.18</p>
                  </div>
                  <div>
                    <button className="opacity-70 hover:opacity-100 active:opacity-50 pt-2">
                      <PlayButton />
                    </button>
                    <button className="stroke-white opacity-70 hover:opacity-100 active:opacity-50">
                      <AddButton />
                    </button>
                  </div>
                </div>
                <p className="break-words w-[240px] text-white text-sm pt-3 m-auto ">
                  The Guardians leave us with lessons on love, laughter, fun,
                  family and friends as they fight against the forces of Ronan
                  and Thanos to protect the galaxy.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" w-[260px] h-[360px] rounded-lg  shadow-lg bg-neutral-800 hover:bg-opacity-60 ">
              <div className="w-full h-[140px] overflow-hidden">
                <img
                  className="rounded-t-lg"
                  src="https://res.cloudinary.com/dfeyolmc9/image/upload/v1678078898/Screen_Shot_2566-03-06_at_12.00.42_lsmedw.png"
                  alt=""
                />
              </div>
              <div className="p-2">
                <div className="flex justify-between">
                  <div className="flex gap-2 mt-1 pr-2 py-3">
                    <button className=" border-2 border-gray-500 text-white text-lg px-2">
                      18+
                    </button>
                    <p className="text-yellow-50 text-lg pt-1">1.50</p>
                  </div>
                  <div>
                    <button className="opacity-70 hover:opacity-100 active:opacity-50 pt-2">
                      <PlayButton />
                    </button>
                    <button className="stroke-white opacity-70 hover:opacity-100 active:opacity-50">
                      <AddButton />
                    </button>
                  </div>
                </div>
                <p className="break-words w-[240px] text-white text-sm pt-3 m-auto ">
                  The Guardians leave us with lessons on love, laughter, fun,
                  family and friends as they fight against the forces of Ronan
                  and Thanos to protect the galaxy.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" w-[260px] h-[360px] rounded-lg  shadow-lg bg-neutral-800 hover:bg-opacity-60 ">
              <div className="w-full h-[140px] overflow-hidden">
                <img
                  className="rounded-t-lg"
                  src="https://res.cloudinary.com/dfeyolmc9/image/upload/v1678091741/Screen_Shot_2566-03-06_at_15.34.29_ncbxuc.png"
                  alt=""
                />
              </div>
              <div className="p-2">
                <div className="flex justify-between">
                  <div className="flex gap-2 mt-1 pr-2 py-3">
                    <button className=" border-2 border-gray-500 text-white text-lg px-2">
                      16+
                    </button>
                    <p className="text-yellow-50 text-lg pt-1">2.15</p>
                  </div>
                  <div>
                    <button className="opacity-70 hover:opacity-100 active:opacity-50 pt-2">
                      <PlayButton />
                    </button>
                    <button className="stroke-white opacity-70 hover:opacity-100 active:opacity-50">
                      <AddButton />
                    </button>
                  </div>
                </div>
                <p className="break-words w-[240px] text-white text-sm pt-3 m-auto ">
                  The Guardians leave us with lessons on love, laughter, fun,
                  family and friends as they fight against the forces of Ronan
                  and Thanos to protect the galaxy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
