import React, { useState } from 'react';
import { MediaButton } from '../homepages/MediaButton';

export default function MovieCardMyList({
  item,
  idx,
  changeCurrentMovie,
  setItemModal,
}) {
  // console.log(item.Movie);

  const [showButton, setShowButton] = useState(false);
  const set1 =
    ' flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl';
  const set2 =
    ' flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl';
  const set3 =
    ' flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl';
  let classNameSetup = '';
  if (idx === 0) {
    classNameSetup = set1;
  } else if (idx == 5) {
    classNameSetup = set3;
  } else {
    classNameSetup = set2;
  }
  return (
    <div
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
      className={classNameSetup}
    >
      <img src={item.Movie.cover} className="rounded-lg " />
      {showButton && (
        <MediaButton
          showButton={showButton}
          changeCurrentMovie={changeCurrentMovie}
          item={item.Movie}
          setItemModal={setItemModal}
        />
      )}
    </div>
  );
}
