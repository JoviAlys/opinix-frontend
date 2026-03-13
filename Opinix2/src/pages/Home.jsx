import "../css/Home.css";
import PollList from "../components/PollList.jsx";
import Calendar from "../components/Calendar.jsx";
import SurveyChart from "../components/SurveyChart.jsx";
import Header from "../components/Header.jsx";

function Home(){
    return(
        <>
          <header>
            <Header/>
          </header>
          <body>
            <div className="body-sections">
                <div className="poll-list">
                    <PollList/>
                </div>
                <div className="event-calendar">
                    <Calendar/>
                </div>
                <div className="survey-chart">
                    <SurveyChart/>
                </div>
            </div>
          </body>
        </>
    )
}

export default Home;