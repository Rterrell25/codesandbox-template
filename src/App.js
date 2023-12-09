import "./styles/Main.scss";
import "./styles/Header.scss";
import "./styles/Comments.scss";
import "./styles/SideVideo.scss";
import "./styles/Hero.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoUpload from "./pages/VideoUpload";

const App = () => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const getVideoData = async () => {
      const { data } = await axios.get(
        `https://project-2-api.herokuapp.com/videos?api_key=e402601e-1681-4557-888e-a29d64c120ea`,
      );

      setVideoData(data);
    };

    getVideoData();
  }, []);

  if (!videoData) {
    return null;
  }

  return (
    <Routes>
      <Route path="/" element={<Home videoData={videoData} />} />
      <Route path="/video-upload" element={<VideoUpload />} />
      <Route
        path="/video-details/:id"
        element={<Home videoData={videoData} />}
      />
    </Routes>
  );
};

export default App;
