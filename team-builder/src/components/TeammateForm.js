import React, { useState } from 'react';
import '../App.css';
//import teamData from '../data';


export default function TeammateForm(props) {
    const [member, setMember] = useState({});

    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
        };
        props.addNewMember(newMember);
    }


    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Member Name</label>
            <input
                type="text"
                name="name"
                placeholder="Please enter member name."
                value={member.name}
                onChange={changeHandler}
            />
            <label htmlFor="email">Member Email</label>
            <input
                type="email"
                name="email"
                placeholder="Please enter email."
                value={member.email}
                onChange={changeHandler}
            />
            <label htmlFor="role">Member Role</label>
            <input
                type="text"
                name="role"
                placeholder="Please enter member role."
                value={member.role}
                onChange={changeHandler}
            />
            <button type="submit">Add Member</button>
        </form>
    )
}
