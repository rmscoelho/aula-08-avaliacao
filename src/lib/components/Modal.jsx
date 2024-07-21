import {UpdateData} from "./UpdateData.jsx";
import {InsertData} from "./InsertData.jsx";
import CloseModal from '../../assets/close.svg'

export const Modal = (props) => {
    let getDB = props.database;
    let setDB = props.setDB
    let editID = props.editID;
    let modalOpen = props.modalOpen;
    let setModal = props.setModal;
    let modalType = props.modalType;

    const closeModal = (event) => {
        event.preventDefault();
        setModal(false)
    }

    const confirmAction = () => {
        const newData = getDB.filter(person => person.id !== editID)
        setDB(newData)
        setModal(false)
    }

    const ModalRender = () => {
        if (modalOpen) {
            if (modalType === 'update') {
                return <div className='modal'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h2>Edit data</h2>
                            <button type="submit" onClick={closeModal}>
                                <img src={CloseModal} alt="close modal" width="20" height="20"/>
                            </button>
                        </div>
                        <div className="modal-body">
                            <UpdateData database={getDB} setDB={setDB} editID={editID} setModal={setModal}/>
                        </div>
                    </div>
                </div>
            } else if (modalType === 'insert') {
                return <div className='modal'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h2>New person</h2>
                            <button type="submit" onClick={closeModal}>
                                <img src={CloseModal} alt="close modal" width="20" height="20"/>
                            </button>
                        </div>
                        <div className="modal-body">
                            <InsertData database={getDB} setDB={setDB} setModal={setModal}/>
                        </div>
                    </div>
                </div>
            } else if (modalType === 'delete') {
                return <div className='modal'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h2>Delete person from the list?</h2>
                            <button type="submit" onClick={closeModal}>
                                <img src={CloseModal} alt="close modal" width="20" height="20"/>
                            </button>
                        </div>
                        <div className="modal-body delete-actions">
                            <button type="submit" className="cancel-action" onClick={closeModal}>Cancel</button>
                            <button type="submit" className="confirm-action" onClick={confirmAction}>Confirm</button>
                        </div>
                    </div>
                </div>
            }
        }
    }
    return (
        <>
            <ModalRender/>
        </>
    )
}