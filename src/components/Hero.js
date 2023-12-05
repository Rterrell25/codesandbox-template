export default function Hero({ videoData }) {
  console.log("test", videoData);
  return (
    <div className="hero">
      <video className="hero__video" muted autoplay poster={videoData.image}>
        <source src={`${videoData.video}?api_key=rebekah`} type="video/mp4" />
      </video>
    </div>
  );
}
