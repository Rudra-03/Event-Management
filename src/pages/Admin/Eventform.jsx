import React from "react";
import { useState } from "react";
import databaseService from "../../appwrite/database";
function Eventform() {
  const [eventname, seteventname] = useState("");
  const [eventcatgory, seteventcatgory] = useState("");
  const [eventdate, seteventdate] = useState("");
  const [starttime, setstarttime] = useState("");
  const [endtime, setendtime] = useState("");
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");
  const [venue, setvenue] = useState("");
  const [clickable, setclickable] = useState(false);
  const checkvenue = async () => {
    try {
      seterror("");
      setsuccess("");
      const available = await databaseService.checkvenue({
        venue,
        eventdate,
        starttime,
        endtime,
      });
      // console.log(documents);
      if (available) {
        setsuccess("Venue available");
        setclickable(true);
        alert("Venue available");
      } else {
        seterror("Venue Not Available");
        setclickable(false);
        alert("Venue Not Available");
      }
    } catch (error) {
      seterror(error.message);
    }
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        eventname,
        eventcatgory,
        eventdate,
        starttime,
        endtime,
        venue,
      };
      // console.log(data);
      const response = await databaseService.createEvent(data);
      if (response) {
        // console.log(response);
        setsuccess("Event created successfully");
        setclickable(false);
        alert("Event created successfully");
      }
      seteventname("");
      seteventcatgory("");
      seteventdate("");
      setstarttime("");
      setendtime("");
      setvenue("");
      seterror("");
      setsuccess("");
    } catch (error) {
      seterror(error.message);
    }
  };
  return (
    <>
      <div className="container w-2/3 bg-slate-500 rounded-lg font-serif">
        <div className=" p-5">
          <h1 className="text-center text-white mb-5 text-4xl">Event Form</h1>
          {error && (
            <p className="text-red-500 flex justify-center p-3 w-full">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-500 flex justify-center p-3 w-full">
              {success}
            </p>
          )}
          <form onSubmit={handlesubmit}>
            <div className="bg-slate-500 flex flex-col p-8 gap-3 ">
              <label className="">
                Event Name:
                <input
                  type="text"
                  value={eventname}
                  onChange={(e) => seteventname(e.target.value)}
                  className="w-full mb-2  p-2 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent rounded-md"
                  placeholder="Enter Event Name"
                />
              </label>
              <label>
                Event category:
                <select
                  onChange={(e) => seteventcatgory(e.target.value)}
                  className="w-full mb-2 p-2 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent rounded-md"
                >
                  <option value="">Select an option</option>
                  <option value="cultural">Cultural</option>
                  <option value="technical">Technical</option>
                </select>
              </label>
              <label>
                Event Date:
                <input
                  type="date"
                  value={eventdate}
                  onChange={(e) => seteventdate(e.target.value)}
                  className="w-full mb-2 h-8 p-2 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent rounded-md"
                />
              </label>
              <label>
                Start Time:
                <input
                  type="time"
                  value={starttime}
                  onChange={(e) => setstarttime(e.target.value)}
                  className="w-full mb-2 h-8 p-2 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent rounded-md"
                />
              </label>
              <label>
                End Time:
                <input
                  type="time"
                  value={endtime}
                  onChange={(e) => setendtime(e.target.value)}
                  className="w-full mb-2 h-8 p-2 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent rounded-md"
                />
              </label>
              <div>
                <label>
                  Venue:
                  <select
                    onChange={(e) => setvenue(e.target.value)}
                    className="w-full mb-2 p-2 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent rounded-md"
                  >
                    <option value="">Select an option</option>
                    <option value="auditorium">Auditorium</option>
                    <option value="ground">Ground</option>
                    <option value="classroom">Classroom</option>
                    <option value="online">Online</option>
                  </select>
                </label>
                <button
                  type="button"
                  onClick={checkvenue}
                  className={`rounded-md pt-2 pb-2 pr-4 pl-4 mt-4 ${
                    clickable
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                  }`}
                  disabled = {venue && starttime && endtime && eventdate && eventname && eventcatgory ? false : true}
                >
                  Check Venue
                </button>
              </div>
              <button
                type="submit"
                className=" bg-slate-300 rounded-md pt-2 pb-2 pr-4 pl-4 mt-4 text-black"
                disabled={!clickable}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Eventform;
