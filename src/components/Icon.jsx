import React from 'react';

const Icon = (props) => {
    let content;

    if (props.type === "search") {
        content = searchIcon(props, content);
    }
    if (props.type === "notification") {
        content = notificationIcon(props, content);
    }

    if (props.type === "message") {
        content = messageIcon(props, content);
    }

    return (
        <span>{content}</span>
    );
}

export default Icon;

const searchIcon = (props, content) => {
    content = 
        <span>
        <button className="search-trigger">
        <i className="fa fa-search"></i>
        </button>
        <div className="form-inline">
            <form className="search-form">
                <input className="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
                <button className="search-close" type="submit">
                <i className="fa fa-close"></i>
                </button>
            </form>
        </div>
        </span>
    return content;
}

const notificationIcon = (props, content) => {
    content =
    <span>
            <div className="dropdown for-notification">
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-bell"></i>
                            <span className="count bg-danger">5</span>
                          </button>
                          <div className="dropdown-menu" aria-labelledby="notification">
                            <p className="red">You have 3 Notification</p>
                          </div>
                        </div>
        </span>
    return content;
}

const messageIcon = (props, content) => {
    content =
    <span>
            <div className="dropdown for-message">
                          <button className="btn btn-secondary dropdown-toggle" type="button"
                                id="message"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="ti-email"></i>
                            <span className="count bg-primary">9</span>
                          </button>
                        </div>
                        </span>
    return content;
}