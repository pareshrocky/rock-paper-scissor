import React from 'react';
import { Link } from "react-router-dom";
import Traingle from "../assets/images/bg-triangle.svg"

const Play = ({setMyChoice}) => {
    
    const handleChoice = (e) => {
        const val = e.target.dataset.id
        setMyChoice(val)
    }
    
    return (
        <div className="play">
            <img src={Traingle} alt="" className="traingle"/>
            <div className="items">
                <Link to="/rock-paper-scissor/game">
                    <div data-id="paper" className="icon icon-paper" onClick={handleChoice}></div>
                </Link>
                <Link to="/rock-paper-scissor/game">
                    <div data-id="scissors" className="icon icon-scissors" onClick={handleChoice}></div>
                </Link>
                <Link to="/rock-paper-scissor/game">
                    <div data-id="rock" className="icon icon-rock" onClick={handleChoice}></div>
                </Link>
            </div>
           
        </div>
    );
};

export default Play;