import Header from "../components/Header";
import "../css/Polls.css";
function Polls(){
    return(
        <>
        <header>
            <Header/>
        </header>
        <body>
            <div className="poll-section">
                <div className="question-based">
                    <p>Question-specific Sentiment</p>
                    <button>Question 1</button>
                    <button>Question 2</button>
                </div>
                <div className="sentiment-chart">
                    <button>Help me please...</button>
                </div>
                <div className="summary">
                    <p>Small summary of the sentiment/poll.</p>
                </div>
            </div>
        </body>
        </>
    )
}

export default Polls;