import React from "react";
import { useState, useEffect } from "react";
import databaseService from "../../appwrite/database";
import { useNavigate } from "react-router-dom";

function Allevents() {
  const [events, setevents] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    async function getEvents() {
      try {
        const events = await databaseService.getEvents();
        if (events) {
          setevents(events.documents);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getEvents();
  }, [databaseService]);
  return (
    <>
      <div className=" w-full pt-5 pb-5 flex justify-center font-serif ">
        <div className=" rounded-xl w-2/3 bg-slate-400 ">
          <div>
            <h1 className="text-3xl text-center mt-5 ">ALL EVENTS</h1>
          </div>
          <div className="flex justify-end m-5 rounded-xl">
            <button onClick={()=>{navigation("../eventform")}} className="btn bg-green-600 rounded-md pt-1 pb-1 pr-4 pl-4 text-white">Add events +</button>
          </div>
          <div className=" flex flex-col pl-5 pr-5">
            {events.map((event) => (
              <details key={event.$id} className=" p-2 rounded-xl mb-2 ">
                <summary className="h-10 w-full bg-slate-500 p-2 rounded-xl">{event.eventname}</summary>
                <div className=" m-1 p-2 bg-slate-500 rounded-xl ">
                  <p>Venue : {event.venue}</p>
                  <p>Date : {event.eventdate}</p>
                  <p>From : {event.starttime}</p>
                  <p>To: {event.endtime}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Allevents;
