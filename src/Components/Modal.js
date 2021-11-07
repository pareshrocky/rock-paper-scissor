import React from 'react';
import ReactDom from 'react-dom';
import Close from ".././assets/images/icon-close.svg";
import Rules from ".././assets/images/image-rules.svg";
const Modal = ({toggle}) => {
    return (
      ReactDom.createPortal(
        <div className="modal-container">
            <div className="modal-box">
                <div className="modal-header">
                    <h1 className="rule-head">Rules</h1>
                    <button onClick={toggle}>
                        <img src={Close} alt="close"/>
                    </button>
                </div>
                <img src={Rules} alt=""/>
            </div>
        </div>  
        ,document.getElementById("modal"))
    );
};

export default Modal;