import { useNavigate } from "react-router-dom";
import logo from "../assets/logo/BrainFlix-logo.svg";
import searchicon from "../assets/icons/search.svg";
import "../styles/Header.scss";
import uploadicon from "../assets/icons/upload.svg";
import avatarpic from "../assets/images/Images/Mohan-muruge.jpg";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header__section">
        <header className="header__main-container">
          <div
            className="header__headerlogo-container"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <img className="header__headerlogo" src={logo} alt="" />
          </div>
          <div className="header__search-avatar-container">
            <div className="header__search-container">
              <img className="header__searchicon" src={searchicon} alt="" />
              <input
                className="header__searchbox"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="avatar">
              <img src={avatarpic} alt="avatar" />
            </div>
          </div>
          <div
            className="header__upload-container"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/video-upload")}
          >
            <div className="header__upload-container-inner">
              <img className="header__uploadicon" src={uploadicon} alt="" />
              <button className="header__uploadbutton">UPLOAD</button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
