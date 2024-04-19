import React from "react";
import { useNavigate } from "react-router-dom";
import Loginbtn from "../components/Loginbtn";
import Signupbtn from "../components/Signupbtn";
import Rebeca from "../assets/rebeca.jpeg";

function Home() {
    const navigation = useNavigate();
  return (
    <main className="text-center p-5 bg-slate-950 min-h-max">
      <div className=" flex flex-col items-center m-5">
        <div>
          <h1 className="text-4xl  text-white mb-5 font-serif">
            WELCOME TO THE OFFICIAL WEBSITE OF REBECA
          </h1>
        </div>
        <div className="buttons flex gap-3 mt-5 mb-3 justify-center">
          <Loginbtn width = "w-20" height = "h-12" size = "text-xl"/>
          <Signupbtn width = "w-24" height = "h-12" size = "text-xl"/>
        </div>
      </div>
      <div className="content flex w-full text-white">
        <div className="left-section text-left w-2/3 ml-5">
          <p className="text-4xl mb-8  w-max p-4 rounded-3xl bg-slate-800 font-serif">REBECA 2024</p>
          <p className="text-white text-xl pr-5 font-serif">
            Get ready to reignite your spirits as the annual cultural fest of
            IIEST Shibpur is coming! Prepare to be captivated by REBECA 2024, an
            event that pulses with emotion and excitement for both students and
            alumni! With four dynamic nights, REBECA guarantees an immersive
            dive into the rich tapestry of Indian culture. stay tuned for an
            exhilarating journey into the heart of 83rd REBECA. Pujo আসছে!!
          </p>
        </div>
        <div className="right-section w-1/3 flex justify-center">
          <img src={Rebeca} alt="rebeca image" className="h-96 rounded-xl" />
        </div>
      </div>
    </main>
  );
}

export default Home;
