import {useState} from "react";
import {isEmpty, validatePhone} from "../scripts/validateForm.js";

export const UpdateData = (props) => {
    let getDB = props.database;
    let setDB = props.setDB
    let setModal = props.setModal;
    const editID = props.editID;
    const oldID = getDB[editID].id;
    const oldName = getDB[editID].nome;
    const oldUser = getDB[editID].username;
    const oldGender = getDB[editID].gn;
    const oldPhone = getDB[editID].tlf.slice(3);

    const [getName, setName] = useState(oldName);
    const [getUser, setUser] = useState(oldUser);
    const [getGender, setGender] = useState(oldGender);
    const [getPhone, setPhone] = useState(oldPhone);

    const updateMember = (event) => {
        event.preventDefault();
        if (!isEmpty(getName) || !isEmpty(getGender) || !isEmpty(getUser) || !validatePhone(getPhone)) {
            return
        }

        const newData = getDB.map(data => {
            if (data.id === oldID) {
                return {
                    ...data, id: oldID,
                    nome: getName,
                    username: getUser,
                    gn: getGender,
                    tlf: '351' + getPhone
                };
            }

            return data;
        })

        setDB(newData)
        setModal(false)
    }

    return (
        <>
            <form onSubmit={updateMember}>
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
                    <button type="submit">Update member</button>
                </p>
            </form>
        </>
    )
}