import { arrayUnion, Timestamp, updateDoc, doc, serverTimestamp } from "firebase/firestore"
import React from "react"
import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { ChatContext } from "../context/ChatContext"
import Attach from "../img/attach.png"
import Img from "../img/img1.png"
import {v4 as uuid} from "uuid";
import { db,storage } from "../firebase";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage"

const Input = () => {

    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const {currentUser} = useContext(AuthContext);
    const {data} = useContext(ChatContext);

    const handleSend = async() => {
        if(img){
            const storageRef = ref(storage, uuid());
            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error) => {
                  //TODO:Handle Error
                },
                () => {
                  getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await updateDoc(doc(db, "Chats", data.chatId), {
                      messages: arrayUnion({
                        id: uuid(),
                        text,
                        senderId: currentUser.uid,
                        date: Timestamp.now(),
                        img: downloadURL,
                      }),
                    });
                  });
                }
              );
        }else{
            await updateDoc(doc(db, "Chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                }),
            });
        }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
              text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
              text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        setText("")
        setImg(null)
    };

    return(
        <div className="input">
            <input type="text" placeholder="Type your message..." onChange={e=>setText(e.target.value)} value={text}></input>
            <div className="send">
                <input type="file" style={{display:"none"}} id="file" onChange={e=>setImg(e.target.files[0])}></input>
                <label htmlFor="file">
                    <img src={Img} style={{cursor: "pointer"}}></img>
                </label>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}

export default Input