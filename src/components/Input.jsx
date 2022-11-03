import React from "react"
import Attach from "../img/attach.png"
import Img from "../img/img1.png"

const Input = () => {
    return(
        <div className="input">
            <input type="text" placeholder="Type your message..."></input>
            <div className="send">
                <img src={Attach}></img>
                <input type="file" style={{display:"none"}} id="file"></input>
                <label htmlFor="file">
                    <img src={Img}></img>
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input