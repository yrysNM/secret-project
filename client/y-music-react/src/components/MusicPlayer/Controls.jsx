import React from 'react';
import { useLocation } from 'react-router-dom';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (

    <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80" >
      <BsArrowRepeat size={20} color={repeat ? 'red' : 'white'} onClick={() => setRepeat((prev) => !prev)} className="hidden sm:block cursor-pointer" />
      {(currentSongs?.length && pathname.indexOf("ymusic") === -1) && <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />}
      {
        isPlaying ? (
          <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
        ) : (
          <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
        )
      }
      {(currentSongs?.length && pathname.indexOf("ymusic") === -1) && <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />}
      <BsShuffle size={20} color={shuffle ? 'red' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" />
    </div >
  )
};

export default Controls;