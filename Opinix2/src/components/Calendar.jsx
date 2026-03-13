import "../css/Calendar.css";

function Calendar(){
    return(
        <>
        <div className="calendar-div">
            <p>Calendar.</p>
        <div className="event-div">
            <div className="dates">
                <p>12 Thu</p>
                <p>13 Fri</p>
                <p>14 Sat</p>
                <p>15 Sun</p>
                <p>16 Mon</p>
            </div>
            <div className="events">
                <p>None</p>
                <p>None</p>
                <p>None</p>
                <p>None</p>
                <p>None</p>
            </div>
        </div>
        </div>
        </>
    )
}

export default Calendar;