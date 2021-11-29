import React, { useEffect, useRef } from "react";
import "../events/Events.css"

const Card = (props) => {
  const {event, index, checkIsLive, checkIsUpcoming, calendarData} = props;

  // Google Calendar Button
  const buttonsRef = useRef([]);

   useEffect(() => {
     buttonsRef.current = buttonsRef.current.slice(0, calendarData.length + 1);
   }, [calendarData]);

  const displayButton = (e) => {
    e.preventDefault();
    // console.log(e.target);
    if (e.target.style.transform === "rotateZ(135deg)") {
      e.target.style.transform = "rotateZ(0deg)";
      e.target.style.color = "palegoldenrod";
    } else {
      e.target.style.transform = "rotateZ(135deg)";
      e.target.style.color = "white";
    }

    if (buttonsRef.current[e.target.id].classList.contains("displayed")) {
      buttonsRef.current[e.target.id].classList.remove("displayed");
    } else {
      buttonsRef.current[e.target.id].classList.add("displayed");
    }
  };

  return (
    <div key={event.id} className="card">
      <div className="card-title">
        <h2>{event.title}</h2>
      </div>
      <div className="card-date">
        <h3>{event.date}</h3>
      </div>
      <div className="card-time">
        <h4>{event.time}</h4>
        {event.type.includes("hackofuturista") ? (
          <p style={{ color: "cyan", lineHeight: "1.6rem" }}>
            Hack-o-Futurista
          </p>
        ) : (
          ""
        )}
        {event.type.includes("designathon") ? (
          <p style={{ color: "violet", lineHeight: "1.6rem" }}>Designathon</p>
        ) : (
          ""
        )}
        {event.type.includes("techtalk") ? (
          <p style={{ color: "#f7e4c7", lineHeight: "2.2rem" }}>
            {event.speaker}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="status">
        <p>
          {checkIsLive(
            event.day,
            event.endDay ? event.endDay : event.day,
            event.startHour,
            event.startMinute,
            event.endHour,
            event.endMinute
          ) ? (
            <span style={{ background: "#17d77f" }}></span>
          ) : checkIsUpcoming(event.day, event.startHour, event.startMinute) ? (
            <span style={{ background: "yellow" }}></span>
          ) : (
            <span style={{ background: "red" }}></span>
          )}
        </p>
      </div>
      <div className="number">
        <p>{index + 1}</p>
      </div>
      {checkIsUpcoming(event.day, event.startHour, event.startMinute) ===
      true ? (
        <div>
          {" "}
          <div
            id={`${event.id}`}
            data-after-content={`Add ${event.title} to google calendar`}
            className="add-to-gc"
            onClick={displayButton}
          >
            +
          </div>
          <div
            ref={(el) => (buttonsRef.current[event.id] = el)}
            className="add-to-gc-btn displayed"
          >
            <a
              target="_blank"
              href={`https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
                event.title
              )}&details=Attend%20the%20event%20for%20${encodeURIComponent(
                event.title
              )}%20${event.type.includes("techtalk") ? "by" : ""}%20${
                event.speaker ? event.speaker : "hosted by Tantrafiesta 2k21"
              }%2C%20Thanks!&location=TantraFiesta2k21%20IIITN&dates=202110${
                event.day
              }T${event.startHour}${event.startMinute}00/202110${
                event.endDay ? event.endDay : event.day
              }T${event.endHour}${event.endMinute}`}
            >
              <button>Add to Google Calendar</button>
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
