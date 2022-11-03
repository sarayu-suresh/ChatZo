import React from "react"
import Input from "./Input"
import Messages from "./Messages"
import Cam from "../img/cam.png"
import Add from "../img/add.png"
import More from "../img/more.png"

const Chat = () => {
    return(
        <div className="chat">
            <div className="chatInfo">
                <span>Ardra</span>
                <div className="chatIcons">
                    <img src={Cam}></img>
                    <img src={Add}></img>
                    <img src={More}></img>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

export default Chat