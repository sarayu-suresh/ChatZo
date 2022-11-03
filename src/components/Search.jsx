import React from "react"

const Searchbar = () => {
    return(
        <div className="searchbar">
            <div className="searchForm">
            <input type="text" placeholder="Find a user"></input>
            </div>
            <div className="userChat">
                <img src="https://media.licdn.com/dms/image/C4E03AQHyHDKoo5b7WA/profile-displayphoto-shrink_400_400/0/1633323048628?e=1672876800&v=beta&t=Ba4NQs70qZ_remwl0myFkWo2IKQGVrBH6L3cYzE9754"></img>
                <div className="userChatInfo">
                    <span>Ardra</span>
                </div>
            </div>
        </div>
    )
}

export default Searchbar