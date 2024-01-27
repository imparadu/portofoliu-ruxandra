export default function BackToTopButton () {
    function onClick () {
        window.scrollTo(0,0)
    }
    return (
        <div className="containerButton">
            <button className="backToTopButton" onClick={onClick}>Back to Top</button>
        </div>
    )
}