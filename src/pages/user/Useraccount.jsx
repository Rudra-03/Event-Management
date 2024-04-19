import React, { useEffect, useState } from "react";
import authService from "../../appwrite/auth";
import databaseService from "../../appwrite/database";
function Useraccount() {
  const [userdata, setUserData] = useState({});
  const [userId, setUserId] = useState("");
  const [userEvents, setUserEvents] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const data = await authService.getCurrentUser();
        // console.log(data);
        if (data) {
          setUserData(data);
          setUserId(data.$id);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
    async function getUserEvents() {
      try {
        const events = await databaseService.getParticipants();
        // console.log(events);
        if (userId) {
          const filtered = events.documents.filter(
            (event) => event.userid == userId
          );
          // console.log(filtered);
          setUserEvents([...filtered]);
        }
      } catch (error) {}
    }
    if (userId) {
      getUserEvents();
    }
  }, [userId]);
  return (
    <>
      <div className="min-h-screen bg-slate-900 flex justify-center text-white">
        <div className="flex gap-5 p-5">
          <div className="Account-info h-max bg-slate-700 p-5 rounded-md">
            <h1 className="text-2xl p-3 bg-slate-800 rounded-xl">Account Info</h1>
            <div className="p-3">
              <p>Name : {userdata.name}</p>
              <p>Email : {userdata.email}</p>
              <p>
                Created At : {new Date(userdata.$createdAt).toLocaleString()}
              </p>
              <p>Verified : {userdata.emailVerification ? "Yes" : "No"}</p>
            </div>
          </div>
          <div className="h-max  bg-slate-700 p-5 rounded-md">
            <h1 className="text-2xl p-3 bg-slate-800 rounded-xl">Registered Events</h1>
            <div className="p-3">
              {userEvents.map((event) => (
                <p key={event.$id}>{event.eventname}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Useraccount;
