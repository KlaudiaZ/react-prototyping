import React from 'react';

const Avatar = (props) => {
    if (!props.children) {
        return <img className="user-avatar rounded-circle" src="images/admin.jpg" alt="User Avatar" />
    } else {
        return <span>{props.children}</span>
    }
}