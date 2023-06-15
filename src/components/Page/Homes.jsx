import "./Homes.css";
// import Iframe from 'react-iframe'

export default function Homes() {
  document.cookie = "_Pg=Home; SameSite=None; Secure";
  return (
    <div className="home">
      <h2>Showreel</h2>
      <div className="home-1">
{/** 
        <Iframe
          url="https://www.youtube.com/embed/BuuDEn1r8GY"
          width="100%"
          height="100%"
          display="block"
          id=""
          className=""
          position="relative"
          sandbox={["allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation"]}
          frameBorder="0"
          loading="lazy"
          title="Big Brain Studio Showreel 2023"
          referrerPolicy="strict-origin-when-cross-origin"
          // referrerPolicy={["no-referrer" , "no-referrer-when-downgrade" , "origin" , "origin-when-cross-origin" , "same-origin" , "strict-origin" , "strict-origin-when-cross-origin" , "unsafe-url"]}
        />
        */}
      </div>
    </div>
  );
}
