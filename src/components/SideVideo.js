import "../styles/SideVideo.scss";

const SideVideo = ({ sideVideos }) => {
  const map_ = sideVideos.map((object, index) => {
    return (
      <div key={index} className="sidevideo__main-container">
        <div className="sidevideo__container">
          <img className="sidevideo__image" src={object.image} alt="" />
          <div className="sidevideo__text-container">
            <h4 className="sidevideo__title-video">{object.title}</h4>
            <h4 className="sidevideo__channel">{object.channel}</h4>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="sidevideo">
        <h5 className="sidevideo__title">NEXT VIDEO</h5>
        {map_}
      </div>
    </>
  );
};

export default SideVideo;
