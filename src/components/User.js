import React from 'react';


// Stateless
const User = props => {
    return (
        <li>
            {props.children}
            <button onClick={props.delEvent}>Delete</button>
            <input type="text" value={props.children} onChange={props.changeEvent}/>
        </li>
    )
}

export default User;