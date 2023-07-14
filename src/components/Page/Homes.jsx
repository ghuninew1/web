import { lazy } from "react";
import YouTube from 'react-youtube';
import "./Homes.css";

const Partner = lazy(() => import('./Partner'));
export default function Homes() {
  document.cookie = "_Pg=Home; SameSite=Lax; ";
  const opts = {
    height: '540',
    width: '960',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      enablejsapi: 1,
      playsinline: 1,
    },
  };

  return (
  <>
    <div className="home">
      <h2>Showreel</h2>
      <div className="home-1">
      <YouTube videoId="BuuDEn1r8GY" opts={opts}/>
        {/* <iframe
          src="https://www.youtube.com/embed/BuuDEn1r8GY"
          width="100%"
          height="100%"
          frameBorder="0"
          loading="lazy"
          title="Big Brain Studio Showreel 2023"
        /> */}
      </div>
    </div>
    <Partner />∂
  </>
  );
}
