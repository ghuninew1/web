import "./Homes.css";
// import Iframe from 'react-iframe'

export default function Homes() {
  document.cookie = "_Pg=Home; SameSite=None; Secure";
  return (
    <div className="home">
      <h2>Showreel</h2>
      <div className="home-1">
        <iframe
          src="https://www.youtube.com/embed/BuuDEn1r8GY"
          width="100%"
          height="100%"
          frameBorder="0"
          loading="lazy"
          title="Big Brain Studio Showreel 2023"
        />
        {/* <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1i0rMcP8AzHr-AG6J3_M0WLHmmNq6I4KFcADge_M2RqWUCsb2PV12nFF2oFq-sWShBFmlUFUGiGKy/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe> */}
      </div>
    </div>
  );
}
