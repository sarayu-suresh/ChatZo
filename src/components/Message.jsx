import React from "react"

const Message = () => {
    return(
        <div className="message owner">
            <div className="messageInfo">
                <img src="https://media.licdn.com/dms/image/C5603AQHKX3TFTYGvUQ/profile-displayphoto-shrink_400_400/0/1664118912828?e=1672876800&v=beta&t=_Xc3wS5vm3lQVqKSWzQUQktBN77j5WAB2stBLOugBw8"></img>
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src="https://media.licdn.com/dms/image/C5603AQHKX3TFTYGvUQ/profile-displayphoto-shrink_400_400/0/1664118912828?e=1672876800&v=beta&t=_Xc3wS5vm3lQVqKSWzQUQktBN77j5WAB2stBLOugBw8"></img>
            </div>
        </div>
    )
}

export default Message