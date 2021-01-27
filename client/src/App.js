import "./App.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from './components/Chat'
import Name from './components/Name'
import { Router } from '@reach/router';
import { useState } from 'react'

function App() {
  const [name,setname] = useState("")

  return (
    <>
    <Router>
    <Name name={name} setname={setname} path="/"/>
    <Chat name={name} setname={setname} path="/chat"/>
    </Router>
    </>
  )
}
export default App