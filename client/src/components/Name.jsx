import { useState } from 'react'
import { navigate } from '@reach/router'
import axios from "axios"
const Name = ({name, setname})=> {
    const [pokimon,setpokimon] = useState([])
    const [poki,setpoki] = useState("spearow")
    const [personname, setpersonname] = useState("")

    axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=20")
        .then((response) => {
            setpokimon(response.data.results)
        })

    const handle = (e) => {
        e.preventDefault()
        if(name!=="" && personname!==""){
            navigate('/chat')
        }
    }
    const change = (e) =>{
        setname(personname + " (" + e.target.value + ")")
        setpoki(e.target.value)
    }
    return (
        <>
        {/* <div className="App"> */}
        <h1>Welcome ! Choose your Pokimon Character!</h1>
        <div className="center">
        <form onSubmit={handle}>
        <input type="text" placeholder="Enter your name here"onChange={(e)=>setpersonname(e.target.value)} />
        <br />
        <select value={poki}  onChange={change}>
            {/* <option value={name}>select a value</option> */}
        { pokimon.length > 0 && pokimon.map((poki, index) => {
            return (
                <option value={poki.name} key={index}>
                {poki.name}
            </option>
            )
        })}
        </select>
        <button type="submit">Choose</button>
        </form>
        </div>
        </>
    )
}

export default Name ;
