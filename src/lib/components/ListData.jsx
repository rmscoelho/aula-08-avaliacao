import {useState} from "react";
import '../styles/listadata.css'
import {Modal} from "./Modal.jsx";
import EditData from '../../assets/edit.svg'
import DeleteData from '../../assets/delete.svg'

export const ListData = (props) => {
    let getDB = props.database;
    let setDB = props.setDB
    const [modalOpen, setModal] = useState(false);
    const [editID, setID] = useState(0);
    const [modalType, setModalType] = useState('insert');

    const openModal = (event) => {
        setID(event.target.id);
        setModalType('update')
        setModal(true)
    }

    const removeData = (id) => {
        setModalType('delete')
        setID(id)
        setModal(true)
    }

    let database = getDB.map((key, index) => {
        return <tr key={index}>
            <td>{key.id}</td>
            <td>{key.nome}</td>
            <td>{key.username}</td>
            <td>{key.gn}</td>
            <td>{key.tlf}</td>
            <td className='actions-column'>
                <button type="button" className='edit-data' id={index} onClick={openModal}>
                    <img src={EditData} alt="edit person data" width="20" height="20" id={index}/>
                </button>
                <button type="button" className="remove-data" onClick={() => removeData(key.id)}>
                    <img src={DeleteData} alt="delete person data" width="20" height="20" onClick={() => removeData(key.id)}/>
                </button>
            </td>
        </tr>
    })

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Gender</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {database}
                </tbody>
            </table>
            <Modal database={getDB} setDB={setDB} modalOpen={modalOpen} setModal={setModal} editID={editID} setID={setID} modalType={modalType} />
        </>
    )
}

