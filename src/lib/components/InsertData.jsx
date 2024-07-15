import {useState} from "react";
import {isEmpty, validatePhone} from "../scripts/validateForm.js";

export const InsertData = (props) => {
    let getDB = props.database;
    let setDB = props.setDB

    const [getName, setName] = useState('');
    const [getUser, setUser] = useState('');
    const [getGender, setGender] = useState('');
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
                    Gender
                    <br/>
                    <input type="text" name="gender" value={getGender} onChange={e => setGender(e.target.value)}/>
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