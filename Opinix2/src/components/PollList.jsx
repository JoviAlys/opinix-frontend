import "../css/pollList.css";

function PollList(){
    return(
        <>
        <div className="poll-list">
            <p>This is a poll list.</p>
            <button>Poll 1</button>
            <button>Poll 2</button>
            <button>Poll 67</button>
            <button className="see-more">See More</button>
        </div>
        </>
    )
}

export default PollList;