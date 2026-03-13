import { useNavigate } from "react-router-dom";
import "../css/pollList.css";

function PollList(){
    //Insert the ID of each 
    const navigate = useNavigate();


    return(
        <>
        <div className="poll-list">
            <p>This is a poll list.</p>
            <button onClick={() => navigate("/Polls")}>Poll 1</button>
            <button>Poll 2</button>
            <button>Poll 67</button>
            <button className="see-more">See More</button>
        </div>
        </>
    )
}

export default PollList;