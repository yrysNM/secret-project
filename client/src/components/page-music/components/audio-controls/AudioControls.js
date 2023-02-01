import { useContext } from "react";

import { DataContext } from "../../../../context/DataContext";

import { ReactComponent as Play } from "../../../../resources/icons/play.svg";
import { ReactComponent as Pause } from "../../../../resources/icons/pause.svg";
import { ReactComponent as Next } from "../../../../resources/icons/next.svg";
import { ReactComponent as Prev } from "../../../../resources/icons/prev.svg";

import "./audioControls.scss";


const AudioControlsComponent = () => {
    const { toPrevTrack, toNextTrack, onPlayPauseClick, isPlaying } = useContext(DataContext);

    const onPrevClick = () => {
        toPrevTrack();
    }

    const onNextClick = () => {
        toNextTrack();
    }

    return (
        <div className="audio-controls">
            <button
                type="button"
                className="prev"
                aria-label="Previous"
                onClick={onPrevClick}
            >
                <Prev />
            </button>
            {isPlaying ?
                <button
                    type="button"
                    className="pause"
                    onClick={() => onPlayPauseClick(false)}
                    aria-label="Pause"
                >
                    <Pause />
                </button>
                :
                <button
                    type="button"
                    className="play"
                    onClick={() => onPlayPauseClick(true)}
                    aria-label="Play"
                >
                    <Play />
                </button>
            }
            <button
                type="button"
                className="next"
                aria-label="Next"
                onClick={onNextClick}
            >
                <Next />
            </button>
        </div>
    );
};

export default AudioControlsComponent;