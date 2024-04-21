import { useState } from "react";

const Testing = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  const newHours = parseInt(hours);
  const newMinutes = parseInt(minutes);

  function hoursReturn(a: string) {
    return a === "+" ? (newHours + 1).toString() : (newHours - 1).toString();
  }

  function minutesReturn(a: string) {
    return a === "+"
      ? (newMinutes + 1).toString()
      : (newMinutes - 1).toString();
  }

  function handleHoursUpButtonClick() {
    {
      newHours < 23
        ? newHours < 9
          ? setHours("0" + hoursReturn("+"))
          : setHours(hoursReturn("+"))
        : setHours("00");
    }
  }

  function handleHoursDownButtonClick() {
    newHours > 0
      ? newHours <= 10
        ? setHours("0" + hoursReturn("-"))
        : setHours(hoursReturn("-"))
      : setHours("23");
  }

  function handleMinutesUpButtonClick() {
    {
      newMinutes < 59
        ? newMinutes < 9
          ? setMinutes("0" + minutesReturn("+"))
          : setMinutes(minutesReturn("+"))
        : (newHours < 23
            ? newHours <= 10
              ? setHours("0" + hoursReturn("+"))
              : setHours(hoursReturn("+"))
            : setHours("00"),
          setMinutes("00"));
    }
  }

  function handleMinutesDownButtonClick() {
    newMinutes > 0
      ? newMinutes <= 10
        ? setMinutes("0" + minutesReturn("-"))
        : setMinutes(minutesReturn("-"))
      : (newHours <= 10
          ? newHours <= 0
            ? setHours("23")
            : setHours("0" + hoursReturn("-"))
          : setHours(hoursReturn("-")),
        setMinutes("59"));
  }

  return (
    <div id="ClockUpdater" className="container">
      <div className="row flex gap-4">
        <button
          id="hours-up-button"
          onClick={handleHoursUpButtonClick}
          className="btn btn-outline-primary col"
        >
          &uarr;
        </button>

        <button
          id="minutes-up-button"
          className="btn btn-outline-primary col"
          onClick={handleMinutesUpButtonClick}
        >
          &uarr;
        </button>
      </div>

      <div className="row">
        <div id="clock" className="badge badge-primary col">
          {hours + ":" + minutes}
        </div>
      </div>

      <div className="row flex gap-4">
        <button
          id="hours-down-button"
          onClick={handleHoursDownButtonClick}
          className="btn btn-outline-primary col"
        >
          &darr;
        </button>

        <button
          id="minutes-down-button"
          className="btn btn-outline-primary col"
          onClick={handleMinutesDownButtonClick}
        >
          &darr;
        </button>
      </div>
    </div>
  );
};

export default Testing;
