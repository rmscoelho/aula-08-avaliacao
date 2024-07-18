import {useState} from 'react'
import './App.css'
import Database from "./lib/classes/Database.js";
import {ListData} from "./lib/components/ListData.jsx";
import {Modal} from "./lib/components/Modal.jsx";
import AddNew from './assets/plus.svg';

function App() {
    let database = new Database()
    const [getDB, setDB] = useState(database.userData);
    const [modalOpen, setModal] = useState(false);

    const openModal = () => {
        setModal(true)
    }

    return (
        <>
            <ListData database={getDB} setDB={setDB}/>
            <br/>
            <button type="button" className="add-data" onClick={openModal}><img src={AddNew} alt="add a new person" width="20" height="20"/> </button>
            <Modal database={getDB} setDB={setDB} modalOpen={modalOpen} setModal={setModal} editID="0" setID="" modalType="insert" />
        </>
    )
}

export default App
