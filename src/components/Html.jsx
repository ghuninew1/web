// eslint-disable-next-line react/prop-types
export default function Html({ assets, children }) {
 // const scrollToTop = () => {
 //   window.scrollTo({ top: 0, behavior: "smooth"});
 // };
  return (
<>
<main className="container">
      <div className="bgb">
        {children}
        {assets}
      </div>
      {/** 
      <div className="backToTop">
        <button onClick={scrollToTop} aria-label="Back to top">&#8682;</button>
      </div>
      */}
    </main>
</>
  );
}
