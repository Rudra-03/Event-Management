import React, { useEffect, useState } from "react";
import authService from "../../appwrite/auth";
import databaseService from "../../appwrite/database";
function Participateform() {
  const [emailerror, setemailerror] = useState(true);
  const [email, SetEmail] = useState("");
  const [name, SetName] = useState("");
  const [category, SetCategory] = useState("");
  const [events, setevents] = useState([]);
  const [eventname, SetEventName] = useState("");
  const [userid, SetUserid] = useState("");
  useEffect(() => {
    const getEmail = setTimeout(() => {
      async function getEmail() {
        try {
          const data = await authService.getCurrentUser();
          SetUserid(data.$id);
          if (data.email == email) {
            setemailerror(false);
          } else {
            setemailerror(true);
          }
        } catch (error) {
          console.log(error);
        }
      }
      getEmail();
    }, 1000);
    return () => clearTimeout(getEmail);
  }, [email]);
  const fetchevents = async (e) => {
    try {
      SetCategory(e.target.value);
      const data = await databaseService.getEvents();
      // console.log(data);
      let filtered = data.documents.filter(
        (event) => event.eventcatgory == e.target.value
      );
      // console.log(filtered);
      setevents([...filtered]);
    } catch (error) {
      console.log(error);
    }
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        userid,
        name,
        email,
        category,
        eventname,
      };
      console.log(data);
      const response = await databaseService.registerParticipant(data);
      console.log(response);
      if (response) {
        console.log(response);
        alert("Registered successfully");
        SetName("");
        SetEmail("");
        SetEventName("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-slate-900 flex justify-center">
        <div className="bg-slate-500 rounded-lg w-max mt-4 font-serif h-max ">
          <h1 className="text-center text-white mb-5 mt-5 text-4xl">
            Participation Form
          </h1>
          {}
          <form onSubmit={handlesubmit}>
            <div className="bg-slate-500 flex flex-col p-8 gap-3 rounded-lg">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={(e) => SetName(e.target.value)}
                  className="w-full mb-2 h-8 p-2 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent rounded-md"
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => SetEmail(e.target.value)}
                  className="w-full mb-2 h-8 p-2 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent rounded-md"
                />
              </label>
              {email && (
                <p
                  className={`flex justify-center p-3 w-full rounded-lg ${
                    emailerror ? "text-black bg-red-400" : "text-black bg-green-400"
                  }`}
                >
                  {`${emailerror ? "Email doesn't match" : "Email matched"}`}
                </p>
              )}
              <label>
                Event category:
                <select
                  onChange={fetchevents}
                  className="w-full mb-2 p-2 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent rounded-md"
                >
                  <option value="">Select Event category</option>
                  <option value="cultural">Cultural</option>
                  <option value="technical">Technical</option>
                </select>
              </label>
              <label>
                Event Name :
                <select
                  onChange={(e) => SetEventName(e.target.value)}
                  className="w-full mb-2 p-2 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent rounded-md"
                >
                  <option value="">Select an event</option>
                  {events.map((event) => (
                    <option value={event.eventname} key={event.$id}>
                      {event.eventname}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="submit"
                className=" bg-slate-300 rounded-md pt-2 pb-2 pr-4 pl-4 mt-4 text-black"
                disabled = {!emailerror && name && category && eventname ? false : true}
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

export default Participateform;
