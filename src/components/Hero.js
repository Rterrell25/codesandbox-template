export default function Hero({ selectedVideo }) {
  return (
    <div className="hero">
      <video
        className="hero__video"
        muted
        autoPlay
        controls
        poster={selectedVideo.image}
      >
        <source
          src={`${selectedVideo.video}?api_key=rebekah`}
          type="video/mp4"
        />
      </video>
    </div>
  );
}
