import "./Contacts.css";
import Iframe from 'react-iframe'

export default function Contacts() {

  document.cookie = "_Pg=Contact; SameSite=None; Secure";
  return (
    <div className="Contacts">
      <h2>Contact</h2>
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
              "allow-same-origin",
              "allow-scripts",
              "allow-top-navigation",
            ]}
            display="block"
            position="relative"
            frameBorder="0"
            title="Big Brain Studio Showreel 2023"
            referrerPolicy={[
              "no-referrer-when-downgrade",
              "origin-when-cross-origin",
            ]}
          />
        </div>

        <div className="Contacts-2">
          <div className="Contacts-4">
            <div className="Contacts-3">
              <Iframe
                url="/speedtest/index.html"
                width="100%"
                height="100%"
                loading="lazy"
                id=""
                className=""
                sandbox={[
                  "allow-same-origin",
                  "allow-scripts",
                  "allow-top-navigation",
                ]}
                display="block"
                position="relative"
                frameBorder="0"
                title="Big Brain Studio Showreel 2023"
                referrerPolicy={[
                  "no-referrer-when-downgrade",
                  "origin-when-cross-origin",
                ]}
              />
            </div>
          </div>
          <div className="Contacts-4">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.556153671707!2d100.61402207619273!3d13.684731498840582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a16b35ceceb5%3A0xe527940423e3cdf1!2sBig%20Brain%20Studio%20Co.%2CLtd.!5e0!3m2!1sth!2sth!4v1686721116416!5m2!1sth!2sth"
              width="100%"
              height="100%"
              position="relative"
              id=""
              className=""
              sandbox={[
                "allow-same-origin",
                "allow-scripts",
                "allow-top-navigation",
              ]}
              frameBorder="0"
              loading="lazy"
              title="Googld Map"
              referrerPolicy={["no-referrer-when-downgrade", "same-origin"]}
              // referrerPolicy={["no-referrer" , "no-referrer-when-downgrade" , "origin" , "origin-when-cross-origin" , "same-origin" , "strict-origin" , "strict-origin-when-cross-origin" , "unsafe-url"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
