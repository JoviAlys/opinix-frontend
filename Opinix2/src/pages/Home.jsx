import "../css/Home.css";
import PollList from "../components/PollList.jsx";
import Calendar from "../components/Calendar.jsx";
import SurveyChart from "../components/SurveyChart.jsx";
function Home(){
    return(
        <>
          <header>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>         
            
            <div className="titlebar">
                <h1>OPINIX</h1>
                <div className="ribbonbar">
                    <div className="poll-settings">
                        <button><p>Import Polls</p></button>
                        <button><p>Create Polls</p></button>
                        <button><p>???</p></button>
                    </div>
                    <div className="user-settings">
                        <button><p>Profile</p></button>
                        <button><p>Settings</p></button>
                        <button><p>Logout</p></button>
                    </div>
                </div>
            </div>
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