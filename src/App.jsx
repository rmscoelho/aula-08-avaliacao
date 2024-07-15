import {useState} from 'react'
import './App.css'
import Database from "./lib/classes/Database.js";
import {ListData} from "./lib/components/ListData.jsx";
import {InsertData} from "./lib/components/InsertData.jsx";
import {UpdateData} from "./lib/components/UpdateData.jsx";
import {RemoveData} from "./lib/components/RemoveData.jsx";


function App() {
    let database = new Database()
    const [getDB, setDB] = useState(database.data);

    return (
        <>
            <ListData database={getDB}/>
            <InsertData database={getDB} setDB={setDB}/>
        </>
    )
}

export default App
