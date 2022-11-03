import React from "react"

const Navbar = () => {
    return(
        <div className="navbar">
            <span className="logo">Chat<em>Zo</em></span>
            <div className="user">
                <img src="https://media.licdn.com/dms/image/C5603AQHKX3TFTYGvUQ/profile-displayphoto-shrink_400_400/0/1664118912828?e=1672876800&v=beta&t=_Xc3wS5vm3lQVqKSWzQUQktBN77j5WAB2stBLOugBw8"></img>
                <span>Sarayu</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar