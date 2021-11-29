import React, {useState} from 'react'
import "./Events.css"
import calendarData from '../../calendarData';
import Card from '../cards/Card';

const Events = () => {

    const [heading, setHeading] = useState("CALENDAR");
    // const modifiedCalendarData = calendarData.slice(0, 30);
    const [data, setData] = useState(calendarData);
    const [isClose, setisClose] = useState(false);

    const Tags = [
      "calendar",
      "gaming",
      "hackofuturista",
      "designathon",
      "funcontest",
      "quiz",
      "workshops",
      "techtalk",
      "sessions",
      "mainevents",
    ];

    var newCurrentTime = new Date();

    const checkIsLive = (
      day,
      endDay,
      startHour,
      startMinute,
      endHour,
      endMinute
    ) => {
      return newCurrentTime >=
        new Date(2021, 9, day, startHour, startMinute, 1) &&
        newCurrentTime <=
          new Date(2021, 9, endDay ? endDay : day, endHour, endMinute, 1)
        ? true
        : false;
    };

    const checkIsUpcoming = (day, startHour, startMinute) => {
      return newCurrentTime < new Date(2021, 9, day, startHour, startMinute, 1);
    };

     const SortStatus = (e) => {
       e.preventDefault();
       const currentStatus = e.target.className;

       setHeading(e.target.className.toUpperCase());

       // console.log(currentStatus);
       const isLiveData = calendarData.filter(
         (event) =>
           checkIsLive(
             event.day,
             event.endDay ? event.endDay : event.day,
             event.startHour,
             event.startMinute,
             event.endHour,
             event.endMinute
           ) === true
       );

       const isUpcomingData = calendarData.filter(
         (event) =>
           checkIsUpcoming(event.day, event.startHour, event.startMinute) ===
           true
       );

       const isEndedData = calendarData.filter(
         (event) =>
           checkIsLive(
             event.day,
             event.endDay ? event.endDay : event.day,
             event.startHour,
             event.startMinute,
             event.endHour,
             event.endMinute
           ) === false &&
           checkIsUpcoming(event.day, event.startHour, event.startMinute) ===
             false
       );

       if (e.target.className === "live") {
         if (isLiveData.length !== 0) {
           setData(isLiveData);
         } else {
           setData([]);
           setHeading(
             `Sorry there are no ${e.target.className.toUpperCase()} events`
           );
         }
       }

       if (e.target.className === "upcoming") {
         if (isUpcomingData.length !== 0) {
           setData(isUpcomingData);
         } else {
           setData([]);
           setHeading(
             `Sorry there are no ${e.target.className.toUpperCase()} events`
           );
         }
       }

       if (e.target.className === "ended") {
         if (isEndedData.length !== 0) {
           setData(isEndedData);
         } else {
           setData([]);
           setHeading(
             `Sorry there are no ${e.target.className.toUpperCase()} events`
           );
         }
       }
     };

     const Sort = (e) => {
       e.preventDefault();
       const type = e.target.innerText;
       // console.log(e.target.innerText);
       setHeading(type.toUpperCase());

       const sortedData = calendarData.filter((event) =>
         event.type.includes(e.target.innerText)
       );

       if (sortedData.length !== 0) {
         setData(sortedData);
       } else {
         setData(calendarData);
       }
     };

    return (
      <div className="calendar">
        <div className="time-status">
          <div className="live" onClick={SortStatus}>
            <p className="live">Live</p>{" "}
            <span className="live" style={{ background: "#17d77f" }}></span>{" "}
          </div>
          <div className="upcoming" onClick={SortStatus}>
            <p className="upcoming">Upcoming</p>{" "}
            <span className="upcoming" style={{ background: "yellow" }}></span>{" "}
          </div>
          <div className="ended" onClick={SortStatus}>
            <p className="ended">Ended</p>{" "}
            <span className="ended" style={{ background: "red" }}></span>{" "}
          </div>
        </div>
        <div className="tags">
          {Tags.map((tag, index) => {
            return <button key={index} onClick={Sort}>{`${tag}`}</button>;
          })}
        </div>
        <div className="calendar-content">
          <div className="header">
            <h1>{heading}</h1>
          </div>
          <div className="content-cards">
              {
                  data.map((event,index)=>{
                      return <Card key={event.id} event={event} index={index} checkIsLive = {checkIsLive} checkIsUpcoming ={checkIsUpcoming} calendarData={`${calendarData}`}  ></Card>
                  })
              }
          </div>
        </div>
      </div>
    );
}

export default Events
