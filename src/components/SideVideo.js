import { useNavigate } from "react-router-dom";

const SideVideo = ({ sideVideos, selectedVideo, setSelectedVideo }) => {
  const navigate = useNavigate();

  const filteredVideos = sideVideos.filter(
    (video) => video.id !== selectedVideo.id,
  );

  // Then map over the filtered videos
  const videoElements = filteredVideos.map((video, index) => (
    <div
      key={index}
      className="sidevideo__main-container"
      onClick={() => navigate(`/video-details/${video.id}`)}
    >
      <div className="sidevideo__container">
        <img className="sidevideo__image" src={video.image} alt="" />
        <div className="sidevideo__text-container">
          <h4 className="sidevideo__title-video">{video.title}</h4>
          <h4 className="sidevideo__channel">{video.channel}</h4>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="sidevideo">
      <h5 className="sidevideo__title">NEXT VIDEO</h5>
      {videoElements}
    </div>
  );
};

export default SideVideo;
