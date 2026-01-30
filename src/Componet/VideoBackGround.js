import { useSelector } from "react-redux";
import useTrailerFetchKey from "../hooks/useTrailerKeyFetch";

const VideoBackGround = ({ moviesid }) => {
  // Fetch Trailer Here and updating to the store custom hook
  useTrailerFetchKey(moviesid);
  const keyState = useSelector((data) => data.movie.trailerVideo);

  return (
    <>
      <div className=" w-screen h-auto">
        {" "}
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            keyState?.key +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackGround;
