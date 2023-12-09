import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Comments from "../components/Comments";
import axios from "axios";
import SideVideo from "../components/SideVideo";
import { useParams } from "react-router-dom";

const Home = ({ videoData }) => {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState({});
  const videoId = id || videoData[0].id;

  useEffect(() => {
    const getVideoDetails = async () => {
      const { data } = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=e402601e-1681-4557-888e-a29d64c120ea`,
      );
      setSelectedVideo(data);
    };

    getVideoDetails();
  }, [videoId]);

  return (
    <div className="all-components">
      <Header />
      <Hero selectedVideo={selectedVideo} />
      <div className="all-components__main">
        <div className="all-components__first">
          <Main selectedVideo={selectedVideo} />
          <Comments comments={selectedVideo.comments} />
        </div>
        <div className="all-components__second">
          <SideVideo
            sideVideos={videoData}
            selectedVideo={selectedVideo}
            setSelectedVideo={setSelectedVideo}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
