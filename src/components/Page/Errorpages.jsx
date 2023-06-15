import "./Errorpages.css";
import Iframe from 'react-iframe'
export default function Errorpages() {
  document.cookie = "_Pg=Errorpage; SameSite=None; Secure";
  return (
    <div className="Contacts">
      <h2>Errorpage</h2>
      <div className="Contacts-1">

        <div className="Contacts-2">
        <Iframe
          url="/speedtest/index.html"
          width="100%"
          height="100%"
          loading="lazy"
          id=""
          className=""
          sandbox={[
            "allow-presentation",
            "allow-same-origin",
            "allow-scripts",
            "allow-top-navigation",
          ]}
          display="block"
          position="relative"
          frameBorder="0"
          title="Speed Test"
          referrerPolicy={[
            "no-referrer-when-downgrade",
            "origin-when-cross-origin",
          ]}
        />
        </div>

      </div>
    </div>
  );
}
