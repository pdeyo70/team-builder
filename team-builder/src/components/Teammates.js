import React from 'react'

const Teammates = props => {
    return (
        <div>
            {props.teamData.map(member => {
                return (
                    <div className="member" key={member.id}>
                        <h2>{member.name}</h2>
                        <p>Email: {member.email}</p>
                        <p>Role: {member.role}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Teammates;