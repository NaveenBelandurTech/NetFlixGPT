import { IMAGE_CDN } from "../utils/constants";

export const MovieCards = ({ posterPath, posteralt }) => {

  return (
    <div className="w-30">
      <img src={IMAGE_CDN + posterPath} alt={posteralt} />
    </div>
  );
};
