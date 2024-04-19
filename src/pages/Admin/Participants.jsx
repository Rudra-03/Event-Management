import React, { useEffect, useState } from "react";
import databaseService from "../../appwrite/database";
function Participants() {
  const [participants, setParticipants] = useState([]);
  useEffect(() => {
    async function getParticipants() {
      try {
        const participants = await databaseService.getParticipants();
        setParticipants([...participants.documents]);
      } catch (error) {
        console.log(error);
      }
    }
    getParticipants();
  }, []);
  return (
    <>
      <div className=" w-5/6 bg-slate-800 p-4 rounded-md font-serif">
        <h1 className="text-white text-center text-3xl m-4 p-4 rounded-xl bg-slate-600">Participants List</h1>
        <div className="flex flex-wrap justify-between">
          {participants.map((participant) => (
            <div className="m-3 text-white p-4 rounded-xl bg-slate-500" key={participant.$id}>
              <p key={participant.$id}>Name : {participant.name}</p>
              <p>Email: {participant.email}</p>
              <p>Participates At : {participant.eventname}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Participants;
