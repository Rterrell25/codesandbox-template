import "./styles/Main.scss";
import "./styles/Header.scss";
import "./styles/Comments.scss";
import "./styles/SideVideo.scss";
import data from "./Data/video-details.json";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Comments from "./components/Comments";
import SideVideo from "./components/SideVideo";
import { useState } from "react";

//array of default comments to be in a variable so that I can then call it within my mainVideo const
let comments = [
  {
    name: "Micheal Lyons",
    date: "12/18/2018",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
  {
    name: "Gary Wong",
    date: "12/12/2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  {
    name: "Theodore Duncan",
    date: "11/15/2018",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
  },
];

const App = () => {
  const [sideVideo, setSideVideo] = useState({
    sideVideo: [
      {
        id: "1",
        title: "Become A Travel Pro In One Easy Lesson...",
        channel: "Todd Welch",
        image: "https://i.imgur.com/5qyCZrD.jpg",
      },
      {
        id: "2",
        title: "Les Houches The Hidden Gem Of The...",
        channel: "Cornelia Blair",
        image: "https://i.imgur.com/yFS8EBr.jpg",
      },
      {
        id: "3",
        title: "Travel Health Useful Medical Information...",
        channel: "Glen Harper",
        image: "https://i.imgur.com/MMDMgD7.jpg",
      },
      {
        id: "4",
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: "https://i.imgur.com/ibLw5q5.jpg",
      },
      {
        id: "5",
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        image: "https://i.imgur.com/7rD6Mf6.jpg",
      },
      {
        id: "6",
        title: "Choose The Perfect Accommodations",
        channel: "Lydia Perez",
        image: "https://i.imgur.com/0hi3N4B.jpg",
      },
      {
        id: "7",
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        image: "https://i.imgur.com/DDJNZNw.jpg",
      },
      {
        id: "8",
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: "https://i.imgur.com/i6S8m7I.jpg",
      },
    ],
    mainVideo: [
      {
        id: "type of <string>",
        title: "BMX Rampage: 2018 Highlights",
        description:
          "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
        channel: "By Red Cow",
        image: "https://i.imgur.com/l2Xfgpl.jpg",
        views: "1,001,023",
        likes: "110,985",
        duration: "type of <string>",
        video: "type of <string>",
        timestamp: "12/18/2018",
        comments: comments,
      },
    ],
  });
  console.log(data);
  return (
    <div className="all-components">
      <Header />
      <Hero videoData={data[0]} />
      <div className="all-components__main">
        <div className="all-components__first">
          <Main main_={sideVideo.mainVideo} />
          <Comments comments={sideVideo.mainVideo[0].comments} />
        </div>
        <div className="all-components__second">
          <SideVideo sideVideos={sideVideo.sideVideo} />
        </div>
      </div>
    </div>
  );
};

export default App;
