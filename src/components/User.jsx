import React from 'react';

const User = (props) => {
    if (!props.children) {
        return <img className="user-avatar rounded-circle" src="images/admin.jpg" alt="User Avatar" />
    } else {
        return <span style={{padding: "10px"}}>{props.children}</span>
    }
}

export default User;