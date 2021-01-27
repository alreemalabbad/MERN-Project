import './styles.css'
import React, { useEffect, useState } from "react"
import io from "socket.io-client"
import axios from "axios"


const Chat = (props)=> {
    const [socket] = useState(() => io(":8000"))
    const [messages, setMessage] = useState([])
    const [input,setinput] = useState("")


    useEffect(() => {
        axios.get('http://localhost:8000/api/chat/')
        .then(res => {
            console.log(res.data)
            setMessage(res.data);
        })
    socket.on("data", (data) => {
        console.log(data)
        setMessage(prev=> {return [...prev,data];})
    })
    
    return () => socket.disconnect(true)
    }, [])
    
    const handleSubmit = (e) => {
    e.preventDefault()
    axios
        .post("http://localhost:8000/api/name", {
            name:props.name,message:input
        })
        .then((res) => console.log(res))
    socket.emit("event_from_client", {name:props.name, message:input})
    setinput("")
    }

    const handleInput = (e) =>{
        setinput(e.target.value)

    }

    return (
        <>
        <div className="container">
        <h1>Live Chat</h1>
        <div className="center1">
        {messages.map((message)=>
        props.name === message.name?
        <div className="messagel">
        <p>
            <p><b>{message.name}:</b></p>
            {message.message}
        </p></div> : 
        <div className="messager">
        <p>
            <p><b>{message.name}:</b></p>
            {message.message}
        </p></div>
        )}
        </div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={input} onChange={ handleInput } placeholder="Type your message..."/>
                <button type="submit" style={{padding:10}}>Send</button>
            </div>
        </form>
        </div>
    </>
    )
}

export default Chat ;