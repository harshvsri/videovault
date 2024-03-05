import { useParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoIosTime } from "react-icons/io";
import Recommended from "./Recommended";

function Player() {
  const videoID = useParams().id;
  console.log(videoID);
  const uploads = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="player">
      <div className="curr">
        <video src="/video.mp4" controls></video>
        <div className="video-info">
          <div className="card-info-profile">
            <CgProfile className="pic" />
          </div>
          <div className="card-info-details">
            <h5>Getting started with videovault</h5>
            <h6>
              VideoVault.io <IoIosCheckmarkCircle />
            </h6>
            <p>
              100M <IoIosTime /> 01.03.2024
            </p>
          </div>
        </div>
      </div>
      <div className="recommendation">
        {uploads.map((upload) => (
          <Recommended key={upload} />
        ))}
      </div>
    </div>
  );
}

export default Player;
