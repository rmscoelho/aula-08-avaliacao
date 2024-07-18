import {useState} from "react";
import {isEmpty, validatePhone} from "../scripts/validateForm.js";

export const InsertData = (props) => {
    let getDB = props.database;
    let setDB = props.setDB
    let setModal = props.setModal;

    const [getName, setName] = useState('');
    const [getUser, setUser] = useState('');
    const [getGender, setGender] = useState('M');
    const [getPhone, setPhone] = useState('');

    const addMember = (event) => {
        event.preventDefault();

        const newId = getDB.length + 1;

        if (!isEmpty(getName) || !isEmpty(getGender) || !isEmpty(getUser) || !validatePhone(getPhone)) {
            return
        }

        setDB([...getDB, {
                id: newId,
                nome: getName,
                username: getUser,
                gn: getGender,
                tlf: '351' + getPhone
            }]
        )

        setModal(false)
    }

    return (
        <>
            <form onSubmit={addMember}>
                <label>
                    Name
                    <br/>
                    <input type="text" name="nome" value={getName} onChange={e => setName(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Username
                    <br/>
                    <input type="text" name="username" value={getUser} onChange={e => setUser(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Gender:
                    <br/>
                    <select name="gender" defaultValue={getGender} onChange={e => setGender(e.target.value)}>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="O">Other</option>
                    </select>
                </label>
                <br/>
                <label>
                    Phone Number
                    <br/>
                    <input type="number" minLength='9' maxLength='9' name="phone" value={getPhone}
                           onChange={e => setPhone(e.target.value)}/>
                </label>
                <p>
                    <button type="submit">Add new member</button>
                </p>
            </form>
        </>
    )
}