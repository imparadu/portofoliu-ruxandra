export default function BackToTopButton () {
    function onClick () {
        window.scrollTo(0,0)
    }
    return (
      // <div className="containerButton flex-div">
        <button id="backToTopButton" onClick={onClick}>
          <img alt="backToTopButton" src="/Back_to_top_bk-bl.svg" />
        </button>
      // </div>
    );
}