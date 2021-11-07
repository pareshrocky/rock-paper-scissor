import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Play from "./Components/Play";
import Game from "./Components/Game";
import Footer from "./Components/Footer";

export default function App() {
  const[myChoice,setMyChoice] = useState("");
  const[score,setScore] = useState(0);
  return (
    <>
      <div className="container">
        <Header score={score}/>
        <Routes>
        <Route path='/' element={<Play setMyChoice={ setMyChoice} />} />
        <Route path='/game' element={<Game myChoice={myChoice} score={score} setScore={setScore}/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}
